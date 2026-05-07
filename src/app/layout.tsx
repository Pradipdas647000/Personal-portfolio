
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Pradip | Full Stack Developer',
  description: 'Premium futuristic portfolio for Pradip, a Full Stack Developer building modern digital experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Satisfy&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.cursors-4u.net/cursors/animated/overwatch-working-in-background-3ef963f5-48.css" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-white overwatch-cursor">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
