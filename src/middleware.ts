import { NextResponse, NextRequest } from 'next/server';
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(request: NextRequest) {
    const session = request.nextauth.token; // Retrieve session token

    if (!session) {
      // Redirect unauthenticated users to login
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    return NextResponse.next(); // Allow access if authenticated
  },
  {
    pages: {
      signIn: '/auth/login', // Redirect unauthorized users
    },
  }
);

export const config = {
  matcher: ['/((?!^/auth/login$).*)'], // Protect all routes except '/auth/login'
};
