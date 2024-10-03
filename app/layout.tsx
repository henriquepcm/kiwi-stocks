import React from "react";
import type { Metadata } from "next";
import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Roboto_Condensed } from "next/font/google";

export const metadata: Metadata = {
     title: "Kiwi Stocks",
     description: "Kiwi is a web app to track and compare shares.",
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
               <body className={`${roboto.className} flex`}>{children}</body>
          </html>
     );
}
