import type { Metadata } from "next";
import "~/styles/globals.css";
import Lenis from "~/contexts/Lenis";

import { PreLoader } from "~/components/layouts/preloader/preloader";
import Nav from "~/components/global/nav"


export const metadata: Metadata = {
  title: "Get Dialed by Eons", 
  description: "Get Dialed In and Combat Stress, Depression, and Anxiety Naturally",
  keywords: [
    "amanita mushroom supplement", 
    "stress relief", 
    "natural anxiety remedy", 
    "depression support"
  ],
  
  authors: [
    { name: "Eons", url: "https://eons.com" },
    { name: "piecemakr", url: "https://piecemakr.com" }
  ],

  openGraph: {
    title: "Dialed by Eons - Combat Stress, Depression, and Anxiety Naturally",
    description: "Discover Dialed by Eons, a premium amanita mushroom-based supplement designed to help you naturally manage stress, depression, and anxiety.",
    url: "https://eons.com/getdialedin",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Dialed Product by Eons",
      }
    ],
    siteName: "Dialed Product by Eons",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dialed by Eons - Natural Stress, Anxiety & Depression Relief",
    description: "Discover Dialed by Eons, a premium amanita mushroom-based supplement designed to help you naturally manage stress, depression, and anxiety.",
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
