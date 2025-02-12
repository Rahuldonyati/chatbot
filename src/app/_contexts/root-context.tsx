

import React, {type ReactNode } from 'react'
import ErrorBoundary from '@/app/_lib/error-boundary'
import NetworkAlert from '@/app/_lib/network-alert'
import { ThemeProvider } from '@/shadcn/components/theme-provider'
import { Toaster } from '@/shadcn/components/ui/toaster'

interface RootContextProps {
    children: ReactNode;
}

const RootContext: React.FC<RootContextProps> = ({ children }) => {
    return (
        <ErrorBoundary>
            <NetworkAlert />
            <ThemeProvider>
                <Toaster />
                {children}
            </ThemeProvider>
        </ErrorBoundary>

    )
}

export default RootContext
