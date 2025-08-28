import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if user is authenticated (you'll need to implement this)
  const isAuthenticated = request.cookies.has('your-auth-cookie');
  
  if (request.nextUrl.pathname === '/' && isAuthenticated) {
    return NextResponse.redirect(new URL('/profile', request.url));
  }
  
  return NextResponse.next();
}

// Optional: Configure which paths the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};