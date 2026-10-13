import { NextResponse, type NextRequest } from "next/server";
import { appRedirectTarget } from "@/lib/appRedirect";

// boq.co.in/app?from=<source> — device-aware store redirect for bio links.
// Depends on the User-Agent, so it must never be cached or prerendered.
export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  const target = appRedirectTarget(
    request.nextUrl.searchParams.get("from"),
    request.headers.get("user-agent"),
  );
  const response = NextResponse.redirect(new URL(target, request.url), 302);
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("Vary", "User-Agent");
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}
