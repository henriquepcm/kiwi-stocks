import React from "react";
import Script from "next/script";

const GoogleAnalytics = () => {
     const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

     if (!GA_ID) {
          console.warn("Google Analytics ID is missing.");
          return null;
     }

     return (
          <>
               <Script
                    strategy="lazyOnload"
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
               />

               <Script id="google-analytics" strategy="lazyOnload">
                    {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              });
          `}
               </Script>
          </>
     );
};

export default GoogleAnalytics;
