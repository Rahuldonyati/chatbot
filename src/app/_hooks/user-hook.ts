import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useAtom } from 'jotai';
import { userAtom, UserInfo } from '@/app/_store/atoms/user-atom';

interface ExtendedUser {
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  phone?: string;
  jobTitle?: string;
}

interface ExtendedSession {
  user: ExtendedUser;
  accessToken?: string;
  expires: string;
}

export const useUserStore = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    if (status === 'authenticated' && session) {
      const sessionData = session as ExtendedSession;

      const userInfo: UserInfo = {
        id: sessionData.user?.id || '',
        name: sessionData.user?.name || '',
        email: sessionData.user?.email || '',
        image: sessionData.user?.image || '',
        phone: sessionData.user?.phone || '+91 123-345-****',
        jobTitle: sessionData.user?.jobTitle || 'User',
        accessToken: sessionData.accessToken || '',
        expires: sessionData.expires ? new Date(sessionData.expires).getTime() : null,
      };

      setUser(userInfo);
    } else {
      setUser(null);
    }
  }, [session, status, setUser]);

  return { user, status };
};
