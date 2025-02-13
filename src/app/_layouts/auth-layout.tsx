
"use client";
import React, { type ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {

    return (
        <main>
            {children}
        </main>

    );
};

export default AuthLayout;