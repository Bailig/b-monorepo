import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (!request.nextUrl.hostname.includes("mono.fyrlabs")) {
    return;
  }
  const whiteLabelSubdomain = request.nextUrl.hostname.split(".")[0];
  const newUrl = request.nextUrl.clone();
  newUrl.pathname = whiteLabelSubdomain + request.nextUrl.pathname;
  return NextResponse.rewrite(newUrl);
}
