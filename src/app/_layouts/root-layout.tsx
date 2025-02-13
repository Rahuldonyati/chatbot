"use client";
import React, { type ReactNode } from "react";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";

// Layouts
import AuthLayout from "@/app/_layouts/auth-layout";
import HomeLayout from "@/app/_layouts/home-layout";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  // For protected routes, enforce session checking
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace("/auth/login");
    },
  });

  // If the user is on an auth route (like /auth/login), render the public layout
  if (pathname.startsWith("/auth") ) {
    return <AuthLayout>{children}</AuthLayout>;
  }

  // While the session is loading, show a loading indicator
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // Once the session is available, render the protected (home) layout
  return <HomeLayout>{children}</HomeLayout>;
};

export default RootLayout;
