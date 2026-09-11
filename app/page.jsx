// app/page.jsx

import Link from "next/link";
import ArticleGrid from "./components/ArticleGrid";
import { posts } from "./articulos/posts";

export default function Home() {
  // Tomamos los 6 artículos más recientes, ordenados por fecha descendente
  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  return (
    <div className="home" style={{ display: "grid", gap: 24 }}>
      {/* HERO CENTRADO */}
      <section
        className="card"
        style={{ position: "relative", overflow: "hidden", padding: 0 }}
      >
        <div className="hero__bg" aria-hidden="true" />

        <div
          className="container home-hero-content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 24,
            padding: 60,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", margin: 0 }}>
            Bienvenido a GridialHub: tu punto de encuentro gamer
          </h1>

          <p
            className="intro-text"
            style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 720 }}
          >
            GridialHub es una web pensada para gamers y creadores de contenido
            que quieren exprimir su PC al máximo sin complicarse. Aquí
            encontrarás guías claras, análisis de hardware, trucos de
            rendimiento, configuraciones para streaming y sorteos pensados para
            devolver un poco de todo el apoyo que recibo en directo.
            <br />
            <br />
            Mi objetivo es construir una comunidad donde cada visita te deje
            algo útil: más FPS, mejores decisiones al comprar componentes, ideas
            para tu contenido y oportunidades reales de ganar premios mientras
            disfrutamos de los juegos que nos gustan.
          </p>

          <Link
            href="/sorteos"
            className="btn"
            style={{ fontSize: 18, padding: "12px 28px", borderRadius: 12 }}
          >
            Ver cómo participar en los sorteos
          </Link>
        </div>
      </section>

      <section aria-labelledby="latest-articles">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, marginBottom: 24 }}>
          <h2 id="latest-articles" style={{ margin: 0, fontSize: "clamp(20px, 3vw, 28px)" }}>Últimos artículos</h2>
          <Link href="/articulos" style={{ color: "var(--brand)", whiteSpace: "nowrap" }}>Ver todos →</Link>
        </div>
        <ArticleGrid posts={latestPosts} headingLevel={3} />
      </section>
    </div>
  );
}
