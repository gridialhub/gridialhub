// app/page.jsx

import Link from "next/link";
import { posts } from "./articulos/posts";

export default function Home() {
  // Tomamos los 4 artículos más recientes, ordenados por fecha descendente
  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  return (
    <div className="home" style={{ display: "grid", gap: 24 }}>
      {/* HERO CENTRADO */}
      <section
        className="card"
        style={{ position: "relative", overflow: "hidden", padding: 0 }}
      >
        <div className="hero__bg" aria-hidden="true" />

        <div
          className="container"
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

      {/* ÚLTIMOS ARTÍCULOS */}
      <section className="card" style={{ padding: 16 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <h3 style={{ margin: 0 }}>Últimos artículos</h3>

          <Link href="/articulos" className="btn btn-secondary">
            Ver todos
          </Link>
        </div>

        {/* GRID DE ARTÍCULOS */}
        <div className="post-grid" style={{ marginTop: 14 }}>
          {latestPosts.map((post) => {
            const cover = post.image || null;

            return (
              <Link
                key={post.slug}
                href={post.href}
                className="clickable-card-link"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <article className="post-card clickable-card">
                  {/* MINIATURA DEL ARTÍCULO */}
                  <div
                    className={`post-thumb ${
                      cover ? "with-img" : "thumb-game"
                    }`}
                    style={
                      cover
                        ? {
                            backgroundImage: `url(${cover})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }
                        : {}
                    }
                  />

                  {/* CONTENIDO */}
                  <div className="post-body">
                    <h4 style={{ marginBottom: 4 }}>{post.title}</h4>

                    <p className="meta">
                      {new Date(post.date).toLocaleDateString("es-VE")} •{" "}
                      {post.readingTime}
                    </p>

                    <p className="meta" style={{ marginTop: 4 }}>
                      {post.excerpt}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        flexWrap: "wrap",
                        marginTop: 8,
                      }}
                    >
                      {post.tags?.map((t) => (
                        <span key={t} className="badge">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
