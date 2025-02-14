"use client";

import { Button } from "@/shadcn/components/ui/button";
import { Card, CardHeader, CardContent } from "@/shadcn/components/ui/card";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function LoginPage() {
    return (
        <div className="min-h-screen w-full ">
            <div className="container mx-auto flex h-screen flex-col items-center justify-center px-4">
                <div className="flex flex-col items-center gap-8 transition-all duration-300 md:flex-row md:gap-16">
                    {/* Image Section */}
                    <div className="relative h-80 w-80 animate-fade-in-up opacity-0 md:h-96 md:w-96">
                        <Image
                            src="https://wallpapercave.com/wp/wp4063817.jpg"
                            alt="AI Brain"
                            fill
                            className="object-contain transition-all duration-300 hover:scale-105 rounded-2xl object-cover shadow-2xl ring-2 ring-purple-dark/30 dark:ring-lime/30"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>


                    {/* Image Section */}
                    {/* <div className="relative h-[400px] w-full flex-1 animate-fade-in-up opacity-0 md:h-[600px]">
                        <Image
                            src="https://wallpapercave.com/wp/wp4063817.jpg"
                            alt="AI Assistant"
                            fill
                            priority
                            className="rounded-2xl object-cover object-left shadow-2xl ring-2 ring-purple-dark/30 dark:ring-lime/30"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-background/80 via-transparent to-background/0 md:from-background/60 md:via-background/20" />
                    </div> */}

                    {/* Login Card */}
                    <div className="w-full max-w-md animate-slide-in-right opacity-0">
                        <Card className="border-purple-dark bg-background shadow-lg transition-all duration-300 hover:shadow-xl dark:border-purple-light">
                            <CardHeader className="space-y-1">
                                <h1 className="text-center text-3xl font-bold text-foreground transition-colors duration-300">
                                    DoAssit
                                </h1>
                                <p className="text-center text-muted-foreground">
                                    Powering intelligent conversations with Azure AD security
                                </p>
                            </CardHeader>

                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    <Button
                                        onClick={() => signIn("azure-ad")}
                                        className="h-12 w-full transform bg-gradient-to-r from-purple-dark to-purple-light text-lg text-primary transition-all duration-300 hover:scale-[1.02] hover:from-purple-light hover:to-purple-dark hover:text-white hover:shadow-md focus:ring-2 focus:ring-lime dark:from-lime dark:to-lime dark:hover:from-purple-light dark:hover:to-lime"
                                    >
                                        <span className="animate-pulse dark:invert">✨</span>
                                        <span className="ml-2">Continue with Azure SSO</span>
                                    </Button>
                                </div>

                                <div className="relative flex items-center py-4">
                                    <div className="flex-grow border-t border-muted-foreground transition-colors duration-300"></div>
                                    {/* <span className="mx-4 text-muted-foreground">or</span> */}
                                    <div className="flex-grow border-t border-muted-foreground transition-colors duration-300"></div>
                                </div>

                                <div className="space-y-2 text-center text-sm text-muted-foreground">
                                    <p>
                                        By continuing, you agree to our{" "}
                                        <span className="cursor-pointer underline transition-colors duration-300 hover:text-purple-dark dark:hover:text-lime">
                                            Terms
                                        </span>{" "}
                                        and{" "}
                                        <span className="cursor-pointer underline transition-colors duration-300 hover:text-purple-dark dark:hover:text-lime">
                                            Privacy Policy
                                        </span>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <footer className="absolute bottom-0 left-0 right-0 text-center text-sm text-muted-foreground">
                <p>
                    <span className="text-purple-dark dark:text-lime">Donyati</span> <span className="text-purple-dark dark:text-lime">All Rights Reserved &copy; {new Date().getFullYear()}</span>
                </p>
            </footer>
        </div>
    );
}