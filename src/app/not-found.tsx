"use client";

import React from "react";
import { Button } from "@/shadcn/components/ui/button";
import { useRouter } from "next/navigation";

const NotFoundPage: React.FC = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full px-6 text-center transition-colors duration-300 dark:bg-gray-900 dark:text-white">
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
};

export default NotFoundPage;


// azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_ZEALOUS_DUNE_062C49D0F }}
//           repo_token: ${{ secrets.GITHUB_TOKEN }}

// Workflow file for this run
// .github/workflows/azure-static-web-apps-zealous-dune-062c49d0f.yml at a2270f8