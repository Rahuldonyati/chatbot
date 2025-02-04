"use client";

import { Button } from "@/shadcn/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
    const router = useRouter(); // Get current theme

    return (
        <div className={`flex flex-col items-center justify-center h-screen w-full px-6 text-center transition-colors duration-300  dark:bg-gray-900 dark:text-white `}>
            <div className="flex flex-col items-center gap-4">

                <h1 className="text-4xl font-bold text-primary">404 - Page Not Found</h1>
                <p className="text-lg text-secondary">Oops! The page you{"'"}re looking for doesn{"'"}t exist.</p>

                {/* Back to Home Button */}
                <Button onClick={() => router.push("/")} className="mt-4">
                    Go Home
                </Button>
            </div>
        </div>
    );
}
