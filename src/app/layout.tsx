// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';           // tailwind + global styles

export const metadata: Metadata = {
  title: 'Mon Blog',
  description: 'Mini‑blog Strapi + Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
