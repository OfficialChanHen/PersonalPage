import type { Metadata } from "next";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DM_Serif_Text } from "next/font/google";

const dmSerifText = DM_Serif_Text({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dmserif',
});

export const metadata: Metadata = {
  title: "Chan's Portfolio",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSerifText.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
