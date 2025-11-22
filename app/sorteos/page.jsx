// app/sorteos/page.jsx
"use client";

export default function Sorteos() {
  const redes = [
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@gridial",
      color: "#ff0050",
      icon: "tiktok",
    },
    {
      name: "Twitch",
      url: "https://www.twitch.tv/gridialtv",
      color: "#9146FF",
      icon: "twitch",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@Gridial",
      color: "#FF0000",
      icon: "youtube",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/GridialOfficial",
      color: "#1877F2",
      icon: "facebook",
    },
    {
      name: "Kick",
      url: "https://kick.com/gridialtv",
      color: "#52ff00",
      icon: "kick",
    },
  ];

  return (
    <div
      className="container page-fade"
      style={{
        minHeight: "calc(100vh - 140px)",
        display: "grid",
        placeItems: "center",
      }}
    >
      <section
        className="card"
        style={{
          position: "relative",
          display: "grid",
          gap: 24,
          padding: "32px 24px",
          borderRadius: "24px",
          maxWidth: 960,
          width: "100%",
          textAlign: "center",
          // 👇 Fondo con color tipo hero de inicio
          background:
            "linear-gradient(135deg, rgba(232,121,249,0.25), rgba(56,189,248,0.18))," +
            "color-mix(in oklab, var(--card), #050509 12%)",
          border:
            "1px solid color-mix(in oklab, var(--border), var(--brand) 30%)",
          boxShadow:
            "0 18px 55px color-mix(in oklab, #000000, var(--brand) 22%)",
          overflow: "hidden",
        }}
      >
        {/* Chip arriba */}
        <div
          style={{
            justifySelf: "center",
            padding: "4px 10px",
            borderRadius: 999,
            fontSize: 12,
            border:
              "1px solid color-mix(in oklab, var(--border), var(--brand) 40%)",
            background:
              "color-mix(in oklab, var(--card), var(--brand) 12%)",
            color: "var(--muted)",
          }}
        >
          Sorteo activo • Navidad 2025 • $200 en premios
        </div>

        {/* Título */}
        <h1
          style={{
            fontSize: "clamp(26px, 3.2vw, 40px)",
            fontWeight: 900,
            margin: 0,
            // Texto con degradado
            background:
              "linear-gradient(90deg, #e879f9, #a855f7, #38bdf8)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          ¡Bienvenidos al primer sorteo de esta Navidad!
        </h1>

        {/* Bloque de texto principal con fondo suave */}
        <div
          style={{
            margin: "0 auto",
            maxWidth: 760,
            padding: "16px 18px",
            borderRadius: 16,
            background:
              "color-mix(in oklab, rgba(12,10,24,0.8), var(--card) 70%)",
            border:
              "1px solid color-mix(in oklab, var(--border), var(--brand) 24%)",
          }}
        >
          <p
            style={{
              color: "var(--fg)",
              opacity: 0.98,
              fontSize: "1.05rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Para agradecer todo el apoyo, haré un sorteo especial para la
            comunidad de <b>$200 repartidos entre 3 ganadores</b>.
            <br />
            <br />
            🥇 <b>1er lugar:</b> $100 &nbsp;•&nbsp; 🥈 <b>2do lugar:</b> $50
            &nbsp;•&nbsp; 🥉 <b>3er lugar:</b> $50
            <br />
            <br />
            Participan mis seguidores en <b>TikTok</b>, <b>Twitch</b>,{" "}
            <b>YouTube</b>, <b>Facebook</b> y <b>Kick</b>. El sorteo se
            realizará en directo y todo el proceso será transparente.
          </p>
        </div>

        {/* Nota hacia las bases */}
        <div style={{ marginTop: 4 }}>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.95rem",
              margin: 0,
            }}
          >
            Para conocer las <b>bases completas del sorteo</b>, visita la sección{" "}
            <b>“Bases”</b> desde el menú superior de la página.
          </p>
        </div>

        {/* Subtítulo */}
        <div style={{ marginTop: 10 }}>
          <h3
            style={{
              color: "var(--brand)",
              fontWeight: 700,
              marginBottom: 4,
            }}
          >
            Mientras en más redes me sigas, ¡más oportunidades tienes de ganar!
          </h3>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.96rem",
              marginTop: 2,
            }}
          >
            Aquí tienes los links directos a mis redes:
          </p>
        </div>

        {/* Botones de redes */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 18,
            marginTop: 4,
          }}
        >
          {redes.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              title={r.name}
              style={{
                width: 42,
                height: 42,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "999px",
                background:
                  "color-mix(in oklab, #050509, var(--card) 70%)",
                border: `1px solid ${r.color}`,
                transition:
                  "all 0.25s ease, box-shadow 0.25s ease, transform 0.18s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.15)";
                e.currentTarget.style.boxShadow = `0 0 14px ${r.color}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${r.icon}.svg`}
                alt={r.name}
                width="22"
                height="22"
                style={{
                  display: "block",
                  filter: "invert(1) brightness(1.7) contrast(1.1)",
                }}
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
