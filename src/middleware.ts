import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Canonical TR URLs never carry a /tr prefix — redirect it away.
  if (pathname === '/tr' || pathname.startsWith('/tr/')) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.replace(/^\/tr(?=\/|$)/, '') || '/'
    return NextResponse.redirect(url, 308)
  }

  // /en/* already matches the [locale] segment — no rewrite needed.
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    return NextResponse.next()
  }

  // Everything else is the default TR locale, resolved internally to /tr/*.
  const url = request.nextUrl.clone()
  url.pathname = `/tr${pathname === '/' ? '' : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!api|admin|_next|media|favicon.ico|.*\\..*).*)'],
}
