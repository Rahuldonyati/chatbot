// pages/_app.tsx
"use client";
import { SessionProvider as SP } from 'next-auth/react';

import { ReactNode } from 'react';

interface RootContextProps {
    children: ReactNode;
}

export const SessionProvider: React.FC<RootContextProps> = ({ children }) => {
    return (
        <SP>
            {children}
        </SP>
    );
}
