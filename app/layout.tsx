import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryan Vaghasiya | AI Engineer & Data Analyst Portfolio",
  description:
    "Portfolio of Aryan Vaghasiya — AI Engineer and Data Analyst specializing in Deep Learning, NLP, Computer Vision, and scalable data solutions. Explore projects in emotion recognition, churn prediction, and EV analytics.",
  keywords: [
    "Aryan Vaghasiya",
    "AI Engineer",
    "Data Analyst",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Machine Learning",
    "Portfolio",
    "Python",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Aryan Vaghasiya" }],
  creator: "Aryan Vaghasiya",
  openGraph: {
    title: "Aryan Vaghasiya | AI Engineer & Data Analyst",
    description:
      "AI Engineer and Data Analyst specializing in Deep Learning, NLP, and scalable data solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Aryan Vaghasiya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Vaghasiya | AI Engineer & Data Analyst",
    description:
      "AI Engineer and Data Analyst specializing in Deep Learning, NLP, and scalable data solutions.",
    creator: "@aryanvaghsiya",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
