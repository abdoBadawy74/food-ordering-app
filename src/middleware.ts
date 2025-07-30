// import { match } from '@formatjs/intl-localematcher'
// import Negotiator from 'negotiator'

import { NextRequest, NextResponse } from "next/server";

// let headers = { 'accept-language': 'en-US,en;q=0.5' }
// let languages = new Negotiator({ headers }).languages()
// let locales = ['en-US', 'nl-NL', 'nl']
// let defaultLocale = 'en-US'

// match(languages, locales, defaultLocale) // -> 'en-US'

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-url", request.url);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, ..etc
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
