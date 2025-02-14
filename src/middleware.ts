import { NextResponse, NextRequest } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import { getToken, type JWT } from 'next-auth/jwt';

export default withAuth(
  async function middleware(req: NextRequest) {
    console.log('middleware called');
    const { pathname } = req.nextUrl;
    const token : JWT | null = await getToken({ req });

    console.log('token', Boolean(token)); //);
    console.log('pathname', pathname);
    if (token && pathname === '/auth/login') {
      console.log('Login detected. Redirecting to home page.');
      return NextResponse.redirect(new URL('/', req.url));
    }

    if (!token) {
      // Redirect unauthenticated users to login
      return NextResponse.redirect(new URL('/auth/login', req.url));
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
  matcher: ['/', '/auth/login', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
