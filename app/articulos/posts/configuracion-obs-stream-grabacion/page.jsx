// app/articulos/posts/configuracion-obs-stream-grabacion/page.jsx

export const metadata = {
  title:
    "Configuración de OBS en 2026 para stream y grabación sin perder FPS | GridialHub",
  description:
    "Guía paso a paso para configurar OBS en 2026 para streaming y grabación con buena calidad sin matar los FPS de tus juegos.",
  alternates: {
    canonical:
      "https://gridialhub.com/articulos/posts/configuracion-obs-stream-grabacion",
  },
};

export default function ConfiguracionObs2026Page() {
  return (
    <article
      className="card article-page"
      style={{ padding: 20, borderRadius: 16, display: "grid", gap: 16 }}
    >
      {/* Banner superior */}
      <div
        style={{
          marginBottom: 4,
          borderRadius: 14,
          overflow: "hidden",
        }}
      >
        {/*
          Cuando tengas el banner, guárdalo como:
          public/articulos/banner-obs-2026.png
        */}
        <img
          src="/articulos/banner-obs-2026.png"
          alt="Configuración de OBS para streaming y grabación sin perder FPS"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {/* Encabezado */}
      <header style={{ marginBottom: 8 }}>
        <h1 style={{ marginBottom: 8 }}>
          Configuración de OBS en 2026 para stream y grabación sin perder FPS
        </h1>
        <p className="meta">
          {new Date("2025-11-21").toLocaleDateString("es-VE")} • 10 min de
          lectura
        </p>

        <div
          style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}
        >
          <span className="badge">OBS</span>
          <span className="badge">Streaming</span>
          <span className="badge">Grabación</span>
          <span className="badge">PC gamer</span>
          <span className="badge">Configuración</span>
        </div>
      </header>

      {/* Contenido */}
      <div className="article-content">
        <p>
          Una mala configuración de <b>OBS</b> puede arruinar tanto el directo
          como tu experiencia jugando: microcortes, caídas de FPS, vídeo borroso
          o grabaciones que ocupan medio disco duro. La idea de esta guía es
          dejarte una configuración base para <b>2026</b> que puedas adaptar a
          tu PC, sin necesidad de volverte loco con cien opciones raras.
        </p>

        <p>
          Vamos a separar todo en pasos sencillos: ajustes generales, salida
          para <b>streaming</b>, salida para <b>grabación</b> y algunos trucos
          para evitar que OBS se coma todos los recursos mientras juegas.
        </p>

        <h2>1. Ajustes básicos del proyecto</h2>

        <p>
          Antes de tocar bitrate y códecs, deja bien configurado lo que OBS
          entiende como “base” de tu escena.
        </p>

        <h3>1.1. Resolución base y resolución de salida</h3>

        <p>
          Ve a <b>Configuración → Vídeo</b> y revisa:
        </p>

        <ul>
          <li>
            <b>Resolución de lienzo (base):</b> normalmente la resolución de tu
            monitor principal (por ejemplo, 1920×1080).
          </li>
          <li>
            <b>Resolución de salida (escalada):</b> aquí decides qué mandas a la
            plataforma: por ejemplo 1920×1080 o 1600×900.
          </li>
        </ul>

        <p>
          Si tu PC va justito o quieres priorizar el rendimiento, puedes dejar
          el lienzo en 1080p y la salida en <b>1600×900</b> o incluso{" "}
          <b>1280×720</b>. Se verá un poco menos nítido, pero ganarás FPS tanto
          en el juego como en el stream.
        </p>

        <h3>1.2. FPS del proyecto</h3>

        <p>
          En la misma ventana de vídeo, elige:
        </p>

        <ul>
          <li>
            <b>60 FPS</b> si tu PC y tu conexión lo aguantan.
          </li>
          <li>
            <b>30 FPS</b> si notas que el stream o la grabación se ven pesados o
            la conexión no acompaña.
          </li>
        </ul>

        <p>
          Para shooters competitivos, 60 FPS en el stream se agradecen; para
          contenido más tranquilo (MMO, historias, IRL) 30 FPS pueden ser
          suficientes.
        </p>

        <h2>2. Configuración de salida para streaming</h2>

        <p>
          Ahora vamos a <b>Configuración → Salida</b>. Cambia el modo de salida
          a <b>Avanzado</b> para tener más control.
        </p>

        <h3>2.1. Codificador: NVENC vs x264</h3>

        <p>En la pestaña <b>Emisión</b> verás la opción de codificador:</p>

        <ul>
          <li>
            <b>NVENC (o equivalente de tu GPU):</b> recomendable si tienes una
            GPU NVIDIA moderna. Usa la tarjeta gráfica para codificar y suele
            dar mejor rendimiento mientras juegas.
          </li>
          <li>
            <b>x264 (CPU):</b> usa el procesador para codificar. Solo vale la
            pena si tienes una CPU muy fuerte y el juego no la está usando
            mucho.
          </li>
        </ul>

        <p>
          Si tienes una GPU con codificador dedicado (RTX 20/30/40/50, etc.), en
          2026 lo más lógico es elegir <b>NVENC</b> y dejar la CPU más libre
          para el juego.
        </p>

        <h3>2.2. Bitrate recomendado para Twitch y YouTube</h3>

        <p>
          El bitrate tiene que equilibrar calidad y ancho de banda de tu
          conexión. Como referencia:
        </p>

        <ul>
          <li>
            <b>1080p 60 FPS:</b> entre <b>6000 y 8000 kbps</b> (si la plataforma
            lo permite).
          </li>
          <li>
            <b>1080p 30 FPS:</b> entre <b>4500 y 6000 kbps</b>.
          </li>
          <li>
            <b>720p 60 FPS:</b> entre <b>3500 y 5000 kbps</b>.
          </li>
        </ul>

        <p>
          Si tu subida de internet es baja o inestable, es mejor bajar
          resolución o FPS antes que intentar forzar 8 Mbps y que el stream se
          convierta en una sopa de píxeles.
        </p>

        <h3>2.3. Preset y ajuste de calidad</h3>

        <p>
          Con <b>NVENC</b>, el <i>Preset</i> controla cuánto comprime y cuánto
          trabajo le da al codificador. En general:
        </p>

        <ul>
          <li>
            Usa <b>Calidad</b> o <b>Calidad alta</b> si tu GPU es decente y no
            vas al límite.
          </li>
          <li>
            Si ves que la GPU se pone al 99 % y baja FPS en el juego, prueba un
            preset más “ligero”.
          </li>
        </ul>

        <p>
          No hace falta tocar perfiles raros: con <b>Perfil main</b> o{" "}
          <b>high</b> y <b>look-ahead</b> desactivado en PCs gama media suele ir
          bien.
        </p>

        <h2>3. Configuración de salida para grabación</h2>

        <p>
          Para grabar gameplays que luego vas a editar o subir a YouTube,
          conviene usar una configuración un poco distinta a la del stream.
        </p>

        <h3>3.1. Formato de grabación</h3>

        <p>
          En la pestaña <b>Grabación</b>, elige:
        </p>

        <ul>
          <li>
            <b>Formato:</b> <b>MKV</b> (recomendado) o <b>MOV</b>. Evita grabar
            directamente en MP4, porque si se corta la luz o se cierra OBS el
            archivo se puede corromper.
          </li>
        </ul>

        <p>
          Luego puedes hacer que OBS convierta de MKV a MP4 con un clic cuando
          termines (Archivo → Remultiplexar grabaciones).
        </p>

        <h3>3.2. Bitrate o control de calidad</h3>

        <p>Con NVENC tienes dos formas de controlar la calidad:</p>

        <ul>
          <li>
            <b>CBR (bitrate constante):</b> por ejemplo 20 000–40 000 kbps para
            1080p. Archivos más pesados pero muy estables.
          </li>
          <li>
            <b>CQP / CRF:</b> le dices qué nivel de calidad quieres (por
            ejemplo CQP 18–22) y OBS ajusta el bitrate según la escena.
          </li>
        </ul>

        <p>
          Para la mayoría de gameplays, usar <b>CQP 18–22</b> con NVENC da muy
          buena calidad sin que los archivos sean absurdos. Si ves que los
          vídeos ocupan demasiado, sube el número (22–24).
        </p>

        <h2>4. Escenas, fuentes y overlays sin matar los FPS</h2>

        <p>
          Aunque la configuración de salida esté perfecta, si llenas la escena
          de fuentes pesadas, OBS y tu GPU lo van a notar.
        </p>

        <ul>
          <li>
            Evita tener muchas <b>fuentes de navegador</b> abiertas con webs
            pesadas o animaciones innecesarias.
          </li>
          <li>
            Usa <b>captura de juego</b> antes que captura de pantalla completa:
            es más eficiente.
          </li>
          <li>
            Si tienes muchas escenas, desactiva (oculta) las fuentes que no
            uses en cada escena concreta.
          </li>
        </ul>

        <p>
          Menos overlays pero bien colocados suelen verse más profesionales que
          una escena recargada y con lag.
        </p>

        <h2>5. Probar la configuración sin arruinar directos</h2>

        <p>
          Antes de irte directo a un stream largo con la nueva configuración,
          haz pruebas:
        </p>

        <ul>
          <li>
            Graba <b>5–10 minutos</b> de partida con OBS y mira el vídeo: ¿hay
            artefactos? ¿se ve borroso? ¿se escucha bien el audio?
          </li>
          <li>
            Activa el <b>panel de rendimiento</b> en OBS para ver uso de CPU,
            GPU y pérdida de frames.
          </li>
          <li>
            Haz uno o dos <b>streams de prueba</b> en privado o en una cuenta
            secundaria si quieres ir a lo seguro.
          </li>
        </ul>

        <h2>6. Configuración rápida sugerida para PCs gama media</h2>

        <p>
          Para que tengas algo muy concreto, un ejemplo típico para{" "}
          <b>1080p 60 FPS</b> con una <b>GPU NVIDIA</b> gama media podría ser:
        </p>

        <ul>
          <li>Vídeo: lienzo 1920×1080, salida 1920×1080, 60 FPS.</li>
          <li>Emisión: NVENC, 6000–8000 kbps, preset Calidad, perfil high.</li>
          <li>
            Grabación: NVENC, formato MKV, CQP 18–22, resolución igual a la
            base.
          </li>
          <li>
            Overlays simples, nada de 10 fuentes de navegador abiertas al mismo
            tiempo.
          </li>
        </ul>

        <p>
          A partir de ahí, ajustas según cómo veas el uso de la GPU, el espacio
          en disco y los resultados en YouTube o Twitch.
        </p>

        <h2>7. Conclusión</h2>

        <p>
          No necesitas una NASA para tener un stream decente ni grabar tus
          gameplays con buena calidad. Con una configuración coherente de{" "}
          <b>resolución</b>, <b>FPS</b>, <b>bitrate</b> y <b>codificador</b>, tu
          PC puede rendir mucho mejor y tus vídeos se van a ver más limpios.
        </p>

        <p>
          Piensa en esta guía como tu <b>preset base de 2026</b>. A partir de
          aquí, puedes ir afinando según el tipo de juego, tu conexión y cómo
          evolucione tu setup. Y si más adelante actualizas GPU o cambias de
          plataforma, solo tendrás que tocar algunos números, no aprender OBS
          desde cero otra vez.
        </p>
      </div>
    </article>
  );
}
