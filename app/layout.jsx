// app/layout.jsx
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  metadataBase: new URL("https://gridialhub.com"),
  title: {
    default: "GridialHub — Comunidad & Sorteos Gaming",
    template: "%s | GridialHub",
  },
  description:
    "Comunidad gamer con sorteos, artículos de videojuegos/tecnología y eventos en vivo.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "GridialHub — Comunidad & Sorteos Gaming",
    description:
      "Sorteos transparentes, artículos, tecnología y comunidad gamer global.",
    url: "/",              // usa metadataBase como base
    siteName: "GridialHub",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/gridialhub-og.png",  // 👈 banner que hicimos (1200x630)
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
    images: ["/gridialhub-og.png"], // 👈 mismo banner para Twitter/X
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Google tag (gtag.js) — ID correcto: G-Z0WQVN8ZMH */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z0WQVN8ZMH"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z0WQVN8ZMH');
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />

        {/* Reveal on scroll (como lo tenías) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const revealEls = document.querySelectorAll('.reveal');
              const reveal = () => {
                const vh = window.innerHeight * 0.85;
                revealEls.forEach(el => {
                  const rect = el.getBoundingClientRect();
                  if (rect.top < vh) el.classList.add('visible');
                });
              };
              document.addEventListener('scroll', reveal);
              window.addEventListener('load', reveal);
            `,
          }}
        />
      </body>
    </html>
  );
}
