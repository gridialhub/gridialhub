// app/layout.jsx
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnalyticsConsent from "./components/AnalyticsConsent";

export const metadata = {
  metadataBase: new URL("https://gridialhub.com"),
  title: {
    default: "GridialHub — Comunidad & Sorteos Gaming",
    template: "%s | GridialHub",
  },
  description:
    "Comunidad gamer con sorteos, artículos de videojuegos/tecnología y eventos en vivo.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "GridialHub — Comunidad & Sorteos Gaming",
    description:
      "Sorteos transparentes, artículos, tecnología y comunidad gamer global.",
    url: "/", // usa metadataBase como base
    siteName: "GridialHub",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/gridialhub-og.png", // banner OG (1200x630)
        width: 1200,
        height: 630,
        alt: "GridialHub — comunidad gamer, artículos y sorteos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GridialHub — Comunidad & Sorteos Gaming",
    description:
      "Artículos de gaming, hardware y sorteos para la comunidad de Gridial.",
    images: ["/gridialhub-og.png"],
  },
  icons: {
    // favicon para navegadores
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/gridialhub-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    // icono para iOS / PWA
    apple: "/gridialhub-icon-180.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
        <AnalyticsConsent />

      </body>
    </html>
  );
}
