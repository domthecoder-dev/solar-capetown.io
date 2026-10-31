import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Solar Quotes Cape Town | Free Quotes from Local Installers | GoSolarCPT",
    template: "%s | GoSolarCPT",
  },
  description:
    "Compare free solar and battery quotes in Cape Town. Use our calculator to estimate your savings, then get matched with up to 3 installers.",
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "GoSolarCPT",
    url: SITE.url,
    title: "Solar Quotes Cape Town | GoSolarCPT",
    description: "Estimate your solar savings and get up to 3 free quotes from Cape Town installers.",
    images: ["/og-image.svg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZA">
      <head>
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CJK7YHME9R"
          strategy="afterInteractive"
        />
        <Script id="ga4-config" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
      gtag('js', new Date());
      gtag('config', 'G-CJK7YHME9R', {
        page_title: document.title,
        page_location: window.location.href
      });
    `}
        </Script>
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE.name,
            url: SITE.url,
            logo: SITE.url + "/GSC-logo.svg",
            areaServed: { "@type": "City", name: "Cape Town" },
            contactPoint: { "@type": "ContactPoint", telephone: "+" + SITE.phoneIntl, contactType: "customer service", availableLanguage: ["en"] },
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}