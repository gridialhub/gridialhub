const title = 'ARC Raiders: cómo funciona la IA de los ARC y qué cambia al jugar';
const description = 'Qué sabemos de la IA de ARC Raiders: movimiento aprendido, combate PvPvE y consejos para decidir cuándo luchar, evitar máquinas o extraer.';
const articleUrl = "https://gridialhub.com/articulos/posts/arc-raiders";
const publishedAt = "2025-11-14T00:00:00Z";
const updatedAt = "2026-09-12T00:00:00Z";
const articleImage = "https://gridialhub.com/articulos/banner_arkraiders_1600x600.png";

export const metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: { title, description, url: articleUrl, type: "article", publishedTime: publishedAt, modifiedTime: updatedAt, images: [articleImage] },
  twitter: { card: "summary_large_image", title, description, images: [articleImage] },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  image: [articleImage],
  datePublished: publishedAt,
  dateModified: updatedAt,
  inLanguage: "es",
  author: { "@type": "Organization", name: "GridialHub", url: "https://gridialhub.com" },
  publisher: { "@type": "Organization", name: "GridialHub", url: "https://gridialhub.com" },
  mainEntityOfPage: articleUrl,
};

export default function ArcRaidersPage() {
  return (
    <article
      className="card"
      style={{ padding: 20, borderRadius: 16, display: "grid", gap: 16 }}
    >
      {/* Banner principal */}
      <div
        style={{
          marginBottom: 4,
          borderRadius: 14,
          overflow: "hidden",
          maxHeight: 360,
        }}
      >
        <img
          src="/articulos/banner_arkraiders_1600x600.png"
          alt="Ilustración temática de ARC Raiders"
          style={{ width: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Encabezado */}
      <header style={{ marginBottom: 8 }}>
        <h1>{title}</h1>
        <p className="meta">
          Por GridialHub · Publicado el <time dateTime="2025-11-14">14 de noviembre de 2025</time> · Actualizado el <time dateTime="2026-09-12">12 de septiembre de 2026</time>
        </p>

        <div
          style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}
        >
          <span className="badge">ARC Raiders</span>
          <span className="badge">IA</span>
          <span className="badge">gaming</span>
          <span className="badge">PvPvE</span>
          <span className="badge">Extracción</span>
        </div>
      </header>

      {/* Contenido */}
      <div className="article-content">
        <p>
          <b>ARC Raiders es un shooter de extracción PvPvE:</b> en la superficie
          conviven máquinas hostiles y otros jugadores, que pueden colaborar
          contigo o atacarte. Para entender la tensión de una incursión hay que
          distinguir esas dos amenazas. La IA controla a los ARC; las decisiones
          de otros Raiders añaden una incertidumbre diferente.
          Así lo presenta la <a href="https://arcraiders.com/">web oficial del juego</a>.
        </p>
        <p>
          El objetivo de esta guía es explicar qué está documentado sobre esas
          máquinas y cómo usar esa información al jugar. Que un robot se mueva
          de forma convincente no demuestra, por sí solo, que esté aprendiendo
          tus hábitos o calculando las debilidades de tu escuadrón.
        </p>

        <figure
          className="article-image ark-mid"
          style={{ margin: "18px 0", borderRadius: 14, overflow: "hidden", border: "1px solid var(--border)" }}
        >
          <img src="/articulos/arkraiders_gameplay_mid.png" alt="Ilustración de un enfrentamiento con máquinas en ARC Raiders" style={{ width: "100%", display: "block" }} />
          <figcaption className="meta" style={{ padding: 8 }}>Ilustración temática; no constituye una prueba del comportamiento de la IA.</figcaption>
        </figure>

        <h2>Qué sabemos del movimiento de los ARC</h2>
        <p>
          En su presentación de GDC 2026, Martin Singh-Blom, responsable de
          investigación en aprendizaje automático de Embark, describe una
          combinación de animación, aprendizaje por refuerzo y control físico
          para enseñar movimientos como caminar, correr y recuperar el equilibrio.
          La fuente concreta es <a href="https://schedule.gdconf.com/session/learning-to-move-physics-based-enemy-locomotion-in-arc-raiders/917319">Learning to Move: Physics-Based Enemy Locomotion in ARC Raiders</a>.
        </p>
        <p>
          En términos sencillos, el aprendizaje ayuda a producir el movimiento
          del cuerpo de la máquina. Esto permite entender por qué hablar de
          locomoción aprendida es más preciso que decir que los enemigos
          simplemente reproducen una animación idéntica cada vez.
        </p>
        <p>
          <b>Moverse, elegir un objetivo y aprender durante una partida son
          problemas distintos.</b> La presentación citada documenta el trabajo
          sobre locomoción; no basta para afirmar que cada ARC analiza tu estilo
          de juego en directo. Tampoco demuestra que el número de refuerzos
          cambie automáticamente según lo bien que juegues.
        </p>

        <h2>Por qué el combate puede sentirse impredecible</h2>
        <p>
          Embark explica en su <a href="https://www.unrealengine.com/developer-interviews/embark-studios-build-the-award-winning-arc-raiders-with-unreal-engine">entrevista con Unreal Engine</a>
          {" "}que el proyecto pasó de una experiencia exclusivamente cooperativa
          a incorporar PvP. También describe el uso conjunto de física,
          locomoción aprendida y animación procedural para las máquinas.
          Son dos capas diferentes del diseño: cómo se mueve el enemigo y qué
          puede ocurrir al encontrarte con otro jugador.
        </p>
        <p>
          Nuestra lectura práctica es que no conviene interpretar cada sorpresa
          como una nueva capacidad de la IA. La posición desde la que entras,
          los obstáculos que tienes cerca y la presencia de otros Raiders
          pueden cambiar una pelea aunque te enfrentes al mismo tipo de máquina.
        </p>

        <h2>Cómo convertir esa información en decisiones útiles</h2>
        <p>Estas son recomendaciones de juego, no reglas internas atribuidas al motor de IA:</p>
        <ul>
          <li><b>Define tu objetivo antes de disparar.</b> Si buscas un recurso concreto, decide si esa pelea te acerca a conseguirlo o solo consume equipo. No necesitas convertir cada avistamiento en un combate.</li>
          <li><b>Busca una salida antes de comprometerte.</b> Mira qué cobertura y rutas de retirada tienes. Evita basar todo el plan en que una máquina repetirá exactamente la reacción de un vídeo.</li>
          <li><b>No concentres toda la atención en el robot.</b> En PvPvE también debes vigilar a los Raiders. Ganar una pelea contra una máquina no resuelve el riesgo de encontrarte con otro jugador.</li>
          <li><b>Usa el sonido como información.</b> El equipo de audio explica que las señales sonoras ayudan a interpretar distancias, espacios y amenazas. Escucha antes de asomarte, sin tratar un sonido aislado como una localización exacta.</li>
          <li><b>Acuerda cuándo retirarte.</b> Si juegas acompañado, fija una condición sencilla: falta de curación, munición insuficiente o botín que ya merece extraer. Así evitas alargar una pelea por inercia.</li>
        </ul>

        <h2>Un ejemplo: combatir o seguir hacia la extracción</h2>
        <p>
          Imagina que ya llevas el material que necesitabas y detectas una
          máquina en tu ruta. Una decisión razonable es comparar tres cosas:
          qué ganarías al combatir, qué puedes perder y qué alternativa de paso
          tienes. Si el beneficio adicional es pequeño, rodear la zona puede
          encajar mejor con tu objetivo que buscar otra baja.
        </p>
        <p>
          Si necesitas enfrentarte a ella, observa primero el espacio disponible
          y reserva una vía para abandonar el intento. Es un criterio de gestión
          del riesgo, no una garantía de que una posición concreta sea segura
          frente a todos los ARC o frente a otros jugadores.
        </p>

        <h2>Qué conviene recordar</h2>
        <p>
          La aportación técnica documentada está en cómo Embark combina
          aprendizaje y física para construir el movimiento de sus máquinas.
          Al jugar, te resultará más útil observar el entorno y decidir qué
          enfrentamientos te convienen que asumir que los robots pueden leer
          tus intenciones. Para cambios de comportamiento de una actualización
          concreta, consulta las notas oficiales antes de dar por válida una táctica antigua.
        </p>
        <p>
          Si además buscas mejorar la fluidez de tu PC, consulta nuestra
          {" "}<a href="/articulos/posts/ia_fps">guía de escalado y generación de fotogramas</a>.
          La IA de los enemigos y las tecnologías de reconstrucción de imagen
          cumplen funciones distintas.
        </p>

        <h2>Fuentes y revisión</h2>
        <ul>
          <li><a href="https://arcraiders.com/">Embark: presentación oficial de ARC Raiders</a>.</li>
          <li><a href="https://schedule.gdconf.com/session/learning-to-move-physics-based-enemy-locomotion-in-arc-raiders/917319">GDC 2026: charla de Martin Singh-Blom sobre locomoción</a>.</li>
          <li><a href="https://www.unrealengine.com/developer-interviews/embark-studios-build-the-award-winning-arc-raiders-with-unreal-engine">Unreal Engine: entrevista con el equipo de Embark</a>.</li>
        </ul>
        <p className="meta">Revisión documental del 12 de septiembre de 2026. Se han corregido la descripción del género y las afirmaciones sin respaldo sobre adaptación táctica y refuerzos. Los consejos prácticos son recomendaciones editoriales; no se presentan como pruebas propias del sistema de IA.</p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </article>
  );
}
