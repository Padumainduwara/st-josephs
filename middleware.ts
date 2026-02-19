import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Protect all routes under /admin
  if (path.startsWith('/admin')) {
    // Allow access to the login page
    if (path === '/admin/login') {
      return NextResponse.next();
    }

    // Check for the secure cookie
    const sessionCookie = request.cookies.get('admin_session')?.value;
    const validSecret = process.env.ADMIN_SECRET_TOKEN;

    // If cookie is missing or invalid, block access and redirect to login
    if (!sessionCookie || sessionCookie !== validSecret) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

// Ensure middleware only runs on necessary routes
export const config = {
  matcher: ['/admin/:path*'],
};