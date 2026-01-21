/**
 * ============================================================
 * LAYOUT.TSX - ROOT LAYOUT FOR THE WEBSITE
 * ============================================================
 * 
 * This file wraps every page on your website. It includes:
 * - Font loading (Inter and JetBrains Mono)
 * - Global CSS
 * - SEO metadata (title, description)
 * 
 * 🎯 TO EDIT:
 * - Website title: Change the "title" in metadata below
 * - Description: Change the "description" (shows in Google search)
 * - Fonts: Swap out Inter/JetBrains for other Google Fonts if desired
 * 
 * ============================================================
 */

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* ============================================================
   FONT CONFIGURATION
   ============================================================
   
   We use two fonts:
   1. Inter - For body text and headings (clean, modern)
   2. JetBrains Mono - For code-style text (technical labels, numbers)
   
   To change fonts, visit https://fonts.google.com/ and find alternatives,
   then import them here and update the variable names.
   
============================================================ */

const inter = Inter({
  variable: "--font-sans",  // CSS variable name for this font
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",  // CSS variable name for this font  
  subsets: ["latin"],
});


/* ============================================================
   SEO METADATA
   ============================================================
   
   🎯 EDIT THIS FOR GOOGLE/SOCIAL MEDIA:
   
   - title: Shows in browser tab and Google search results
   - description: The preview text in Google search results
   
   Keep description under 160 characters for best results.
   
============================================================ */

export const metadata: Metadata = {
  title: "Level Up Installation Corp | Data Center Infrastructure",
  description: "We build the physical backbone of the internet. Specialized structural installation for hyperscale data centers. Based in SLC, deploying nationwide.",

  // Open Graph (for social media sharing)
  openGraph: {
    title: "Level Up Installation Corp",
    description: "Specialized structural installation for hyperscale data centers.",
    type: "website",
  },
};


/* ============================================================
   ROOT LAYOUT COMPONENT
   ============================================================ */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
