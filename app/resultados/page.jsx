// app/resultados/page.jsx

import Link from "next/link";

export const metadata = {
  title: "Resultados de sorteos",
  description:
    "Consulta los resultados y premios de los sorteos realizados en GridialHub. Consulta los ganadores confirmados y sus perfiles de TikTok.",
  alternates: {
    canonical: "/resultados",
  },
};

const SORTEOS = [
  {
    slug: "navidad-2025",
    titulo: "Sorteo Navidad 2025",
    fecha: "20 de diciembre de 2025",
    ganadores: [
      { nombre: "No hubo ganador", premio: "$100" },
      { nombre: "Alexandra Villa", premio: "$50", perfil: "https://www.tiktok.com/@alexandravilla049" },
      { nombre: "David Acosta", premio: "$50", perfil: "https://www.tiktok.com/@davidacosta1710" },
    ],
    cover:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23933eea'/%3E%3Cstop offset='1' stop-color='%23e879f9'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%23131318' width='100%25' height='100%25'/%3E%3Ccircle cx='120' cy='90' r='60' fill='url(%23g)' opacity='.45'/%3E%3Ccircle cx='320' cy='140' r='80' fill='url(%23g)' opacity='.28'/%3E%3Ccircle cx='520' cy='60' r='50' fill='url(%23g)' opacity='.35'/%3E%3C/svg%3E",
  },
];

export default function Resultados() {
  return (
    <div style={{ display: "grid", gap: 24 }}>
      <header style={{ textAlign: "center", display: "grid", gap: 8 }}>
        <h1 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 900 }}>
          Resultados de Sorteos
        </h1>
        <p className="meta">
          Consulta los resultados de los sorteos de GridialHub. Pulsa el nombre de cada ganador para visitar su perfil de TikTok.
        </p>
      </header>

      <section
        className="resultados-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        {SORTEOS.map((s) => (
          <article
            key={s.slug}
            className="card ficha-resultado"
            style={{
              overflow: "hidden",
              display: "grid",
              gridTemplateRows: "110px auto",
              borderRadius: 14,
            }}
          >
            {/* mini cover */}
            <div
              style={{
                backgroundImage: `url(${s.cover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderBottom: "1px solid var(--border)",
              }}
            />

            {/* cuerpo */}
            <div style={{ padding: 12, display: "grid", gap: 8 }}>
              <span
                className="badge"
                style={{
                  justifySelf: "flex-start",
                  borderRadius: 999,
                  padding: "2px 8px",
                }}
              >
                {s.fecha}
              </span>

              <h2 style={{ margin: 0, fontSize: 22 }}>{s.titulo}</h2>

              <div
                style={{
                  display: "grid",
                  gap: 8,
                  padding: 12,
                  background:
                    "color-mix(in oklab, var(--card), transparent 10%)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                }}
              >
                {s.ganadores.map((g, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 14,
                      minHeight: 48,
                    }}
                  >
                    <span
                      className="badge"
                      style={{ width: 26, flexShrink: 0, textAlign: "center", padding: "2px 0" }}
                      title={`Premio ${i + 1}`}
                    >
                      {i + 1}
                    </span>
                    <div style={{ marginRight: "auto", minWidth: 0 }}>
                      {g.perfil ? (
                        <a
                          href={g.perfil}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${g.nombre}: ver perfil de TikTok (se abre en otra pestaña)`}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            minHeight: 44,
                            fontWeight: 700,
                            color: "var(--brand)",
                            textDecoration: "underline",
                            textUnderlineOffset: 4,
                          }}
                        >
                          <span>{g.nombre}</span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                            style={{ flexShrink: 0 }}
                          >
                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                          </svg>
                        </a>
                      ) : (
                        <strong style={{ color: "var(--muted)" }}>{g.nombre}</strong>
                      )}
                    </div>
                    <span className="meta" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>{g.premio}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
                <Link
                  href="/sorteos"
                  className="btn btn-chip"
                  style={{ textAlign: "center" }}
                >
                  Ver sorteo
                </Link>
                <Link
                  href="/bases"
                  className="btn btn-chip"
                  style={{ textAlign: "center" }}
                >
                  Bases
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer style={{ textAlign: "center", marginTop: 8 }} className="meta">
        ¿Alguna duda o reclamo? <Link href="/contacto">Escríbeme</Link>.
      </footer>
    </div>
  );
}

