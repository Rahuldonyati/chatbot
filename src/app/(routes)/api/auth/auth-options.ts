// lib/auth.ts
import { NextAuthOptions, Account, Profile } from 'next-auth';
import { azureProvider } from '@/app/(routes)/api/auth/azure';

export const authOptions: NextAuthOptions = {
  providers: [azureProvider],
  // debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 1, // 1 hour
  },
  callbacks: {
    async redirect({ baseUrl }: { baseUrl: string }) {
      return `${baseUrl}/`;
    },

    async jwt({
      token,
      account,
      profile,
    }: {
      token: any;
      account?: Account | null;
      profile?: Profile | null;
    }) {
      if (account && profile) {
        token.user = { ...profile }; // Store everything dynamically
        token.accessToken = account.access_token;
      }
      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      console.log('session', session);
      session.user = {
        ...session.user, // default properties (if any)
        ...token.user, // this includes image and any other fields you set in the jwt callback
      };
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
