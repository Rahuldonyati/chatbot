// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import RootLayout from "./_layouts/root.layout"; // Fixed casing

export const metadata: Metadata = {
  title: "DoAssist",
  description: "A Assistant for your daily tasks",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayout>{children}</RootLayout>;
}