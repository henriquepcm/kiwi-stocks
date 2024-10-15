import React from "react";
import type { Metadata } from "next";
import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Roboto_Condensed } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";

export const metadata: Metadata = {
     title: "Kiwi Stocks",
     description: "Kiwi is a web app to track and compare stocks.",
};

const roboto = Roboto_Condensed({
     weight: ["300", "400", "500"],
     subsets: ["latin"],
});

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="en">
               <GoogleAnalytics />
               <body className={`${roboto.className} flex`}>
                    {children}
                    <SpeedInsights />
               </body>
          </html>
     );
}
