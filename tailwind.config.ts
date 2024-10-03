import type { Config } from "tailwindcss";

const config = {
     darkMode: ["class"],
     content: [
          "./pages/**/*.{ts,tsx}",
          "./components/**/*.{ts,tsx}",
          "./app/**/*.{ts,tsx}",
          "./src/**/*.{ts,tsx}",
     ],
     prefix: "",
     theme: {
          extend: {
               colors: {
                    kiwicolor1: "var(--kiwi-color-1)",
                    kiwicolor2: "var(--kiwi-color-2)",
                    kiwicolor3: "var(--kiwi-color-3)",
                    kiwicolor4: "var(--kiwi-color-4)",
                    kiwicolor5: "var(--kiwi-color-5)",
                    kiwicolor6: "var(--kiwi-color-6)",
                    kiwicolor7: "var(--kiwi-color-7)",
                    kiwicolor8: "var(--kiwi-color-8)",
                    kiwicolor9: "var(--kiwi-color-9)",
                    kiwicolor10: "var(--kiwi-color-10)",
                    kiwicolor11: "var(--kiwi-color-11)",
                    kiwicolor12: "var(--kiwi-color-12)",
               },
          },
     },
     plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
} satisfies Config;

export default config;
