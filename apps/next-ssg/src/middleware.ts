import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.nextUrl.hostname);

  if (!request.nextUrl.hostname.includes("mono.fyrlabs")) {
    return;
  }
  const whiteLabelSubdomain = request.nextUrl.hostname.split(".")[0];
  const newUrl = request.nextUrl.clone();
  newUrl.pathname = whiteLabelSubdomain + request.nextUrl.pathname;
  console.log(whiteLabelSubdomain, newUrl.href);

  return NextResponse.rewrite(newUrl);
}
