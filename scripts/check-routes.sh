#!/usr/bin/env bash
# Asserts every public URL and legacy redirect still resolves.
# Usage: scripts/check-routes.sh https://<preview-or-prod-host>
# Pass a Vercel share/bypass query in EXTRA if the preview is protected,
# e.g. EXTRA='?_vercel_share=…' scripts/check-routes.sh https://…
set -u
BASE="${1:?base URL required}"
EXTRA="${EXTRA:-}"
fail=0

expect() { # path, expected status, expected Location suffix (optional)
  local path="$1" want="$2" loc="${3:-}"
  local out code got
  out=$(curl -s -o /dev/null -w "%{http_code} %{redirect_url}" -b /tmp/.vercel-cookie -c /tmp/.vercel-cookie "$BASE$path$EXTRA")
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

exit $fail
