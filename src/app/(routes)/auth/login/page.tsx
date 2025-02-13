"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full">
            <div className=" shadow-lg rounded-lg p-8 w-96">
                <h1 className="text-2xl font-bold text-center mb-4">Sign in with Azure SSO</h1>
                <button
                    onClick={() => signIn("azure-ad")}
                    className="w-full px-4 py-2 bg-primary text-white rounded-md dark:bg-secondary transition"
                >
                    Continue
                </button>
            </div>
        </div>
    );
}
