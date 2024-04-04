import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["bn", "en"];
let defaultLocale = "en";

function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  let headers = { "accept-language": acceptedLanguage };
  let languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const locale = getLocale(request);
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`) && pathname !== `${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
  const requestHeaders = new Headers(request.headers);
  // requestHeaders.set("x-hello-from-middleware1", "hi");

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header `x-hello-from-middleware2`
  // Set a new response header `x-params`
  response.headers.set(
    "x-params",
    JSON.stringify(extractParamsFromURL(pathname))
  );
  // console.log(response.headers);

  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};

function extractParamsFromURL(url) {
  const params = {};
  const queryString = url.split("/");
  if (queryString) {
    params["lang"] = queryString[1];
    params["id"] = queryString[queryString.length - 1];
  }
  return params;
}
