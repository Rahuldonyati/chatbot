"use client";
import React, { type ReactNode } from 'react'
import ErrorBoundary from '@/app/_lib/error-boundary'
import NetworkAlert from '@/app/_lib/network-alert'
import { ThemeProvider } from '@/shadcn/components/theme-provider'
import { Toaster } from '@/shadcn/components/ui/toaster'
import { SessionProvider } from '@/app/_contexts/nextauth-context'

import { Geist, Geist_Mono } from "next/font/google";

// Font Configurations
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});


interface RootContextProps {
    children: ReactNode;
}

const RootContext: React.FC<RootContextProps> = ({ children }) => {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable}`}
            suppressHydrationWarning
        >
            <body className="antialiased">
                <ErrorBoundary>
                    <NetworkAlert />
                    <ThemeProvider>
                        <Toaster />
                        <SessionProvider>
                            {children}
                        </SessionProvider>
                    </ThemeProvider>
                </ErrorBoundary>
            </body>
        </html>

    )
}

export default RootContext
