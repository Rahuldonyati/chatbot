"use client";

import { useEffect, useState } from "react";
import { toast } from "@/shadcn/hooks/use-toast"; // Directly import toast function

const NetworkAlert = () => {
    const [isOffline, setIsOffline] = useState(!navigator.onLine);

    useEffect(() => {
        const handleOnline = () => {
            setIsOffline(false);
            toast({
                title: "🌐 Back Online",
                description: "Your internet connection is restored.",
            });
        };

        const handleOffline = () => {
            setIsOffline(true);
            toast({
                title: "⚠️ No Internet",
                description: "You are offline. Some features may not work.",
                variant: "destructive",
            });
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return null; // No visible UI, just handling network alerts
};

export default NetworkAlert;
