// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import RootLayout from '@/app/_layouts/root-layout'; // Fixed casing
import RootContext from './_contexts/root-context';

export const metadata: Metadata = {
  title: 'DoAssist',
  description: 'A Assistant for your daily tasks',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <RootContext>
      <RootLayout>{children}</RootLayout>
    </RootContext>);
}
