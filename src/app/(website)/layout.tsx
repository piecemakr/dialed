import type { Metadata } from "next";
import "~/styles/globals.css";
import Lenis from "~/contexts/Lenis";

import { PreLoader } from "~/components/layouts/preloader/preloader";
import Nav from "~/components/layouts/nav"


export const metadata: Metadata = {
  title: "Get DIALED by Eons", 
  description: "Get Dialed In and conquer Stress, fear, and Anxiety Naturally",
  keywords: [
    "amanita mushroom supplement", 
    "stress relief", 
    "natural anxiety remedy", 
    "fear support",
    "Eons",
    "DIALED",
    "DIALED by Eons",
    "anxiety relief",
    "deppresion Support",
    "stress relief",
  ],
  
  authors: [
    { name: "Eons", url: "https://eons.com" },
    { name: "piecemakr", url: "https://piecemakr.com" }
  ],

  openGraph: {
    title: "DIALED by Eons - conquer Stress, Fear, and Anxiety Naturally",
    description: "Discover DIALED by Eons, a premium amanita mushroom-based supplement designed to help you naturally manage stress, fear, and anxiety.",
    url: "https://eons.com/getdialedin",
    images: [
      {
        url: "https://m6abtmz27b.ufs.sh/f/JIbaFvH0FeDqZDbCfuY2JuRkvLV5fOiCWlxdETrsGajqeFSn",
        width: 600,
        height: 600,
        alt: "DIALED Product by Eons",
      }
    ],
    siteName: "DIALED Product by Eons",
  },

  twitter: {
    card: "summary_large_image",
    title: "DIALED by Eons - Natural Stress, Anxiety & Fear Relief",
    description: "Discover Dialed by Eons, a premium amanita mushroom-based supplement designed to help you naturally manage stress, fear, and anxiety.",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
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
      <body>
        <PreLoader />
        <Nav />
        <Lenis>{children}</Lenis>
      </body>
    </html>
  );
}
