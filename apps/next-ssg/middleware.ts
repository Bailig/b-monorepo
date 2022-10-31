import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const whiteLabelSubdomain = req.nextUrl.hostname.split(".")[0];
  const newUrl = req.nextUrl.clone();
  newUrl.pathname = whiteLabelSubdomain + req.nextUrl.pathname;
  return NextResponse.rewrite(newUrl);
}
