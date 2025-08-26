import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";
// import ChatbotWrapper from "@/components/ChatbotWrapper";
import { LoadingProvider } from "@/contexts/LoadingContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohit Mahara - Full-Stack Developer & AI Innovator",
  description:
    "Passionate software engineer specializing in modern web technologies, AI/ML integration, and scalable application development. Proven track record of delivering high-impact solutions that drive business growth.",
  keywords:
    "Full-Stack Developer, AI Developer, React, Next.js, Node.js, JavaScript, Python, Web Development, Software Engineer, Portfolio",
  authors: [{ name: "Mohit Mahara" }],
  creator: "Mohit Mahara",
  openGraph: {
    title: "Mohit Mahara - Full-Stack Developer & AI Innovator",
    description:
      "Passionate software engineer specializing in modern web technologies, AI/ML integration, and scalable application development.",
    type: "website",
    locale: "en_US",
    siteName: "Mohit Mahara Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Mahara - Full-Stack Developer & AI Innovator",
    description:
      "Passionate software engineer specializing in modern web technologies, AI/ML integration, and scalable application development.",
    creator: "@mohit0612",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        <LoadingProvider>
          {children}
          {/* <ChatbotWrapper /> */}
        </LoadingProvider>
      </body>
    </html>
  );
}
