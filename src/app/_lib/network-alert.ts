"use client";

import { useEffect } from "react";
import { toast } from "@/shadcn/hooks/use-toast"; // Directly import toast function

const NetworkAlert = () => {

    useEffect(() => {
        const handleOnline = () => {
            toast({
                title: "🌐 Back Online",
                description: "Your internet connection is restored.",
            });
        };

        const handleOffline = () => {
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
