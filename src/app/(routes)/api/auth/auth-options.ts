import { NextAuthOptions, Account, Profile, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { azureProvider } from '@/app/(routes)/api/auth/azure';

export const authOptions: NextAuthOptions = {
  providers: [azureProvider],
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
      token: JWT;
      account?: Account | null;
      profile?: Profile | null;
    }) {
      if (account && profile) {
        token.user = { ...profile }; // Store everything dynamically
        token.accessToken = account.access_token;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {

      session.user = {
        ...session.user, // default properties (if any)
        ...(token.user as Session['user']), // Ensure type safety
      };
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
