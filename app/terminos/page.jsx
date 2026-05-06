// app/terminos/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Términos y Condiciones | GridialHub",
  description:
    "Términos y condiciones de uso de GridialHub, incluyendo reglas generales del sitio, contenido, sorteos, privacidad, publicidad y contacto.",
  alternates: {
    canonical: "https://gridialhub.com/terminos",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Términos y Condiciones | GridialHub",
    description:
      "Consulta los términos y condiciones de uso de GridialHub.",
    url: "https://gridialhub.com/terminos",
    siteName: "GridialHub",
    type: "website",
    locale: "es_ES",
  },
};

export default function Terminos() {
  const ultimaActualizacion = "06 de mayo de 2026";

  return (
    <div className="container" style={{ display: "grid", gap: 28 }}>
      {/* ENCABEZADO */}
      <header
        className="card"
        style={{
          padding: 24,
          borderRadius: 18,
          textAlign: "center",
          background: "color-mix(in oklab, var(--card), transparent 8%)",
          border:
            "1px solid color-mix(in oklab, var(--border), var(--brand) 18%)",
          boxShadow: "0 10px 26px color-mix(in oklab, #000, var(--brand) 16%)",
        }}
      >
        <h1 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 900 }}>
          Términos y Condiciones — GridialHub
        </h1>

        <p className="meta">Última actualización: {ultimaActualizacion}</p>

        <p style={{ maxWidth: 900, margin: "0 auto" }}>
          Bienvenido a <b>GridialHub</b> (<i>gridialhub.com</i>). Al acceder o
          utilizar este sitio web, aceptas estos Términos y Condiciones. Si no
          estás de acuerdo, por favor no uses el sitio.
        </p>
      </header>

      {/* 1) ACEPTACIÓN */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>1) Aceptación de los términos</h2>
        <p>
          Estos términos regulan el uso del sitio y de los contenidos
          publicados. Podremos actualizarlos en cualquier momento; la versión
          vigente se publicará en esta misma página.
        </p>
      </section>

      {/* 2) USO DEL SITIO */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>2) Uso del sitio</h2>
        <ul>
          <li>
            Te comprometes a usar el sitio de forma legal, respetuosa y sin
            afectar los derechos de terceros ni el funcionamiento del servicio.
          </li>
          <li>
            No está permitido intentar vulnerar la seguridad, realizar scraping
            masivo no autorizado o cualquier actividad maliciosa.
          </li>
          <li>
            El sitio está orientado a público general. Si eres menor de 13 años
            o de la edad mínima legal aplicable en tu país, solicita permiso de
            tu representante legal para usarlo.
          </li>
        </ul>
      </section>

      {/* 3) CONTENIDOS Y ENLACES */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>3) Contenidos y enlaces externos</h2>
        <p>
          Publicamos artículos, reseñas, guías y anuncios de sorteos de buena
          fe. Aunque buscamos ofrecer información útil y clara, el contenido se
          proporciona con fines informativos y puede contener errores,
          variaciones o cambios posteriores.
        </p>
        <p>
          El sitio puede incluir enlaces a plataformas externas como TikTok,
          Twitch, YouTube, Facebook, Kick u otros sitios de terceros.
          GridialHub no controla ni se responsabiliza por sus contenidos,
          políticas, cambios, disponibilidad o prácticas.
        </p>
      </section>

      {/* 4) PROPIEDAD INTELECTUAL */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>4) Propiedad intelectual</h2>
        <p>
          A menos que se indique lo contrario, los textos, diseños y recursos
          propios de <b>GridialHub</b> están protegidos por derechos de autor u
          otras figuras legales aplicables. No se permite su copia,
          distribución, modificación o reutilización sin autorización previa.
        </p>
        <p className="meta">
          Marcas, nombres, logotipos, juegos, plataformas, productos de hardware
          y servicios mencionados pertenecen a sus respectivos titulares.
        </p>
      </section>

      {/* 5) PARTICIPACIÓN EN SORTEOS */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>5) Participación en sorteos</h2>
        <ul>
          <li>
            Cada sorteo tendrá reglas generales o específicas publicadas en{" "}
            <Link href="/bases">/bases</Link>. Al participar, aceptas dichas
            reglas.
          </li>
          <li>
            Intentos de fraude, suplantación, uso de bots, cuentas falsas o
            manipulación del proceso implicarán descalificación inmediata.
          </li>
          <li>
            La entrega de premios se realizará según lo anunciado para cada
            sorteo: tarjetas de regalo, saldo digital, códigos, membresías,
            pases, recompensas de juego o valores equivalentes.
          </li>
        </ul>
      </section>

      {/* 6) LIMITACIÓN DE RESPONSABILIDAD */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>6) Limitación de responsabilidad</h2>
        <p>
          En la medida permitida por la ley, <b>GridialHub</b> no será
          responsable por daños indirectos, incidentales, pérdida de datos,
          interrupciones, errores técnicos, fallos de conexión o consecuencias
          derivadas del uso del sitio, de sus contenidos o de servicios externos
          enlazados.
        </p>
      </section>

      {/* 7) COMPRAS / MEMBRESÍAS */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>7) Compras, membresías o devoluciones</h2>
        <p>
          Actualmente <b>GridialHub</b> no vende productos ni cobra membresías
          directamente desde el sitio. Si en el futuro se habilitan servicios
          pagos, se publicarán condiciones específicas sobre compra, entrega,
          reembolsos, soporte y cancelaciones.
        </p>
      </section>

      {/* 8) PUBLICIDAD Y AFILIADOS */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>8) Publicidad y programas de afiliados</h2>
        <p>
          El sitio puede mostrar anuncios o incluir enlaces de afiliados. Esto
          puede generar ingresos para GridialHub, pero no modifica de forma
          obligatoria nuestra opinión editorial. Cuando corresponda, se indicará
          la naturaleza publicitaria, patrocinada o de afiliación según buenas
          prácticas.
        </p>
      </section>

      {/* 9) PRIVACIDAD */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>9) Privacidad y protección de datos</h2>
        <p>
          El tratamiento de datos personales se regula en nuestra{" "}
          <Link href="/privacidad">Política de Privacidad</Link>. Al usar el
          sitio, aceptas también lo dispuesto en dicha política.
        </p>
      </section>

      {/* 10) AVISOS / RECLAMOS */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>10) Avisos y reclamos</h2>
        <p>
          Si consideras que algún contenido vulnera derechos de terceros,
          incluidos derechos de propiedad intelectual, o incumple normas
          aplicables, puedes escribirnos a{" "}
          <a href="mailto:contact@gridialhub.com">contact@gridialhub.com</a>.
          Revisaremos el caso y tomaremos las medidas razonables que
          correspondan.
        </p>
      </section>

      {/* 11) MODIFICACIONES */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>11) Modificaciones de los términos</h2>
        <p>
          Podemos actualizar estos términos cuando sea necesario. La versión
          vigente será la publicada en esta URL. Si el cambio es relevante,
          podremos anunciarlo en la portada, en redes oficiales o mediante otros
          medios razonables.
        </p>
      </section>

      {/* 12) LEY APLICABLE */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>12) Ley aplicable y jurisdicción</h2>
        <p>
          Estos términos se rigen por las leyes aplicables del lugar donde opera
          el responsable del sitio. En caso de controversia, las partes
          procurarán una solución amistosa antes de recurrir a instancias
          formales.
        </p>
      </section>

      {/* 13) CONTACTO */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>13) Contacto</h2>
        <p>
          Para consultas sobre estos Términos y Condiciones o sobre el uso del
          sitio, puedes escribirnos a{" "}
          <a href="mailto:contact@gridialhub.com">contact@gridialhub.com</a> o
          visitar la sección <Link href="/contacto">Contacto</Link>.
        </p>
      </section>
    </div>
  );
}
