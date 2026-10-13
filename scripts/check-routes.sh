#!/usr/bin/env bash
# Asserts every public URL and legacy redirect still resolves.
# Usage: scripts/check-routes.sh https://<preview-or-prod-host>
# Pass a Vercel share/bypass query in EXTRA if the preview is protected,
# e.g. EXTRA='?_vercel_share=…' scripts/check-routes.sh https://…
set -u
BASE="${1:?base URL required}"
EXTRA="${EXTRA:-}"
fail=0

expect() { # path, expected status, expected Location substring (optional), User-Agent (optional)
  local path="$1" want="$2" loc="${3:-}" ua="${4:-check-routes}"
  local out code got
  out=$(curl -s -o /dev/null -w "%{http_code} %{redirect_url}" -A "$ua" -b /tmp/.vercel-cookie -c /tmp/.vercel-cookie "$BASE$path$EXTRA")
  code=${out%% *}; got=${out#* }
  if [[ "$code" != "$want" ]] || { [[ -n "$loc" ]] && [[ "$got" != *"$loc"* ]]; }; then
    echo "FAIL $path → $code $got (want $want $loc)"; fail=1
  else
    echo "ok   $path → $code ${got}"
  fi
}

for p in / /privacy /terms /refund /delete-account /support /faq /test-files \
         /robots.txt /sitemap.xml /opengraph-image \
         /.well-known/apple-app-site-association /.well-known/assetlinks.json \
         /badges/app-store.svg /badges/google-play.png /blog /blog/how-to-fill-boq-government-e-tender /blog/how-to-fill-boq-government-e-tender/opengraph-image; do
  expect "$p" 200
done

for p in privacy terms refund delete-account support; do
  expect "/$p.html" 308 "/$p"
done
expect /contact 308 /support
expect /contact.html 308 /support

# /app bio-link redirect: device-aware, temporary, never indexed.
# $EXTRA may already start with "?", so the query goes in the path only when it is empty.
IPHONE="Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) Mobile/15E148 Safari/604.1"
ANDROID="Mozilla/5.0 (Linux; Android 14; SM-S918B) Chrome/129.0.0.0 Mobile Safari/537.36"
DESKTOP="Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/129.0.0.0 Safari/537.36"
if [[ -z "$EXTRA" ]]; then
  expect "/app?from=instagram" 302 "apps.apple.com/app/apple-store/id6760415552?pt=128575647&ct=instagram&mt=8" "$IPHONE"
  expect "/app?from=instagram" 302 "referrer=utm_source%3Dinstagram%26utm_medium%3Dsocial%26utm_campaign%3Dbio" "$ANDROID"
  expect "/app?from=bad_value!" 302 "ct=direct" "$IPHONE"
fi
expect /app 302 "ct=direct" "$IPHONE"
expect /app 302 "utm_source%3Ddirect" "$ANDROID"
expect /app 302 "$BASE/" "$DESKTOP"
hdrs=$(curl -s -D - -o /dev/null -A "$IPHONE" -b /tmp/.vercel-cookie "$BASE/app$EXTRA" | tr -d '\r')
for h in "x-robots-tag: noindex" "cache-control: private, no-store" "vary: .*user-agent"; do
  if grep -iq "^$h" <<<"$hdrs"; then echo "ok   /app header $h"; else echo "FAIL /app missing header $h"; fail=1; fi
done
if grep -iq "^set-cookie" <<<"$hdrs"; then echo "FAIL /app sets a cookie"; fail=1; else echo "ok   /app sets no cookie"; fi
if curl -s -b /tmp/.vercel-cookie "$BASE/sitemap.xml$EXTRA" | grep -q "/app<"; then echo "FAIL /app is in the sitemap"; fail=1; else echo "ok   /app not in sitemap"; fi

exit $fail
