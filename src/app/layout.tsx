import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "sonner";
import { StoreProvider } from "@/providers/store-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CORALS BY TABASSUM — Jewelry for Every Moment",
    template: "%s | CORALS BY TABASSUM",
  },
  icons: { icon: "/favicon.svg" },
  description:
    "CORALS BY TABASSUM — a premium online jewelry destination. Discover elegant daily-wear pieces from trusted designers, crafted for every moment.",
  keywords: [
    "jewelry",
    "necklaces",
    "earrings",
    "rings",
    "bracelets",
    "bridal jewelry",
    "kundan",
    "daily wear jewelry",
    "Corals by Tabassum",
  ],
  openGraph: {
    title: "CORALS BY TABASSUM — Jewelry for Every Moment",
    description:
      "Discover elegant daily-wear jewelry from trusted designers, made for every moment.",
    type: "website",
  },
  metadataBase: new URL("https://corals-by-tabassum.example.com"),
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf6f1" },
    { media: "(prefers-color-scheme: dark)", color: "#4a3a35" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-obsidian focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ivory focus:shadow-lg"
        >
          Skip to content
        </a>
        <StoreProvider>{children}</StoreProvider>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#4a3a35",
              color: "#faf6f1",
              borderRadius: "10px",
              border: "1px solid #f2e7e0",
              fontSize: "14px",
            },
          }}
        />
      </body>
    </html>
  );
}