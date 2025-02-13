// hooks/useUserStore.ts
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useAtom } from 'jotai';
import { userAtom, UserInfo } from '@/app/_store/atoms/user-atom';

export const useUserStore = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      // You can structure your user object as needed.
      const userInfo: UserInfo = {
        id: session.user.id || '', // ensure your token/profile has an id
        name: session.user.name || '',
        email: session.user.email || '',
        image: session.user.image || '',
        phone: session.user?.phone || '+91 123-345-****',
        jobTitle: session.user?.jobTitle || 'User',
        accessToken: session.accessToken || '',
        expires: new Date(session.expires).getTime(), // convert expiry to a number, if needed
      };
      setUser(userInfo);
    } else {
      // If not authenticated, clear the user from the state.
      setUser(null);
    }
  }, [session, status, setUser]);

  return { user, status };
};
