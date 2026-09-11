import Link from "next/link";
import styles from "./page.module.css";

const articlePath = "/articulos/posts/twitch-dual-format-obs-streaming-vertical-horizontal";
const articleUrl = `https://gridialhub.com${articlePath}`;
const articleImage = "https://gridialhub.com/articulos/obs-twitch-dual-format-hero.webp";
const publishedAt = "2026-09-10T00:00:00Z";
const title = "Cómo hacer streaming vertical y horizontal en Twitch con OBS: guía de Dual Format";
const description = "Configura Twitch Dual Format con OBS y Aitum Vertical: requisitos, escenas, conexión y soluciones cuando el directo vertical no aparece o pierde rendimiento.";

const sources = {
  twitch: "https://help.twitch.tv/s/article/dual-format-vertical-video?language=en_US",
  launch: "https://blog.twitch.tv/en/2026/06/17/introducing-dual-format-and-2k-streaming-on-twitch/",
  aitum: "https://github.com/Aitum/obs-vertical-canvas/releases",
  canvas: "https://github.com/Aitum/obs-vertical-canvas/blob/1.6.4/config-dialog.cpp",
  obs: "https://obsproject.com/kb/sources-guide",
  network: "https://obsproject.com/kb/stream-connection-troubleshooting",
};

export const metadata = {
  title: "Twitch Dual Format con OBS: streaming vertical y horizontal",
  description,
  alternates: { canonical: articleUrl },
  openGraph: {
    title,
    description,
    url: articleUrl,
    type: "article",
    siteName: "GridialHub",
    locale: "es_ES",
    publishedTime: publishedAt,
    modifiedTime: publishedAt,
    images: [{ url: articleImage, width: 1536, height: 1024, alt: "Ilustración de un directo de gaming en un monitor horizontal y un móvil vertical" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitch Dual Format: guía de OBS y Aitum Vertical",
    description,
    images: [articleImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${articleUrl}#article`,
      headline: title,
      description,
      image: [articleImage],
      datePublished: publishedAt,
      dateModified: publishedAt,
      inLanguage: "es",
      author: { "@type": "Organization", name: "GridialHub", url: "https://gridialhub.com" },
      publisher: {
        "@type": "Organization",
        name: "GridialHub",
        url: "https://gridialhub.com",
        logo: { "@type": "ImageObject", url: "https://gridialhub.com/gridialhub-icon-512.png" },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
      about: ["Twitch Dual Format", "OBS Studio", "Aitum Vertical", "Streaming vertical"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://gridialhub.com" },
        { "@type": "ListItem", position: 2, name: "Artículos", item: "https://gridialhub.com/articulos" },
        { "@type": "ListItem", position: 3, name: "Twitch Dual Format con OBS", item: articleUrl },
      ],
    },
  ],
};

function Source({ href, children }) {
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

export default function TwitchDualFormatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <article className={`card article-page ${styles.article}`}>
        <nav className={styles.breadcrumbs} aria-label="Ruta de navegación">
          <Link href="/articulos">Artículos</Link><span aria-hidden="true">/</span><span>Streaming</span>
        </nav>

        <header className={styles.header}>
          <p className={styles.eyebrow}>OBS · TWITCH · GUÍA PRÁCTICA</p>
          <h1>{title}</h1>
          <p className={styles.meta}><time dateTime={publishedAt}>10 de septiembre de 2026</time> · 10 min de lectura · Por GridialHub</p>
          <p className={styles.lead}>Un mismo directo puede tener una composición para el monitor y otra para el teléfono. Esta guía explica cómo conectarlas y qué comprobar antes de estrenar el formato con tu comunidad.</p>
        </header>

        <figure className={styles.hero}>
          <img src="/articulos/obs-twitch-dual-format-hero.webp" width="1536" height="1024" fetchPriority="high" alt="Ilustración conceptual de un monitor horizontal y un teléfono vertical mostrando una escena de gaming" />
          <figcaption>Dos formatos para una misma emisión. Ilustración conceptual; no es una captura de OBS.</figcaption>
        </figure>

        <div className={styles.content}>
          <aside className={styles.summary} aria-label="Configuración esencial">
            <p className={styles.boxTitle}>La conexión que necesitas</p>
            <p>En OBS, selecciona Twitch, activa <strong>Enhanced Broadcasting</strong> y elige <strong>Aitum Vertical</strong> como lienzo adicional. Prepara las escenas de ambos formatos y arranca la emisión desde el control principal de OBS.</p>
            <p className={styles.small}>Tener una escena vertical creada no basta: OBS también tiene que enviarla a Twitch.</p>
          </aside>

          <nav className={styles.contents} aria-label="Contenido del artículo">
            <p className={styles.boxTitle}>En esta guía</p>
            <ol>
              <li><a href="#que-es">Qué cambia con Dual Format</a></li>
              <li><a href="#requisitos">Qué necesitas antes de empezar</a></li>
              <li><a href="#configuracion">Configuración paso a paso</a></li>
              <li><a href="#composicion">Cómo componer la imagen vertical</a></li>
              <li><a href="#rendimiento">Conexión y rendimiento</a></li>
              <li><a href="#problemas">Problemas y comprobaciones</a></li>
              <li><a href="#preguntas">Preguntas frecuentes</a></li>
              <li><a href="#fuentes">Fuentes y fecha de revisión</a></li>
            </ol>
          </nav>

          <section aria-labelledby="que-es">
            <h2 id="que-es">Qué es Twitch Dual Format y qué cambia para quien te ve</h2>
            <p><strong>Dual Format permite enviar una versión horizontal y otra vertical del mismo directo a Twitch.</strong> El espectador de escritorio conserva la vista habitual; en la aplicación móvil, la orientación del teléfono y los controles de visualización determinan cómo lo ve.</p>
            <p>Twitch anunció su despliegue para todos los streamers el 17 de junio de 2026. En ese anuncio explicó que el 70 % de sus nuevos espectadores llegaba desde móviles. Es un motivo para cuidar la presentación vertical, no una garantía de que activarla produzca más seguidores. <Source href={sources.launch}>Anuncio de Twitch</Source>.</p>
            <p>Imagina una partida con una cámara pequeña en la esquina. En un monitor se distinguen bien el juego, el rostro y los indicadores; al reducir todo al ancho de un teléfono, algunos detalles se vuelven diminutos. Una composición vertical permite distribuir ese espacio de otra manera.</p>
            <p>La decisión editorial es qué necesita ver tu audiencia. Si el juego coloca información importante en los bordes, conservar esa información vale más que llenar cada centímetro de la pantalla.</p>
          </section>

          <section aria-labelledby="requisitos">
            <h2 id="requisitos">Qué necesitas antes de empezar</h2>
            <p>La ayuda actual de Twitch recomienda <strong>OBS Studio 32.0.0 o posterior y una versión actual de Aitum Vertical</strong>. La función está disponible para todos los streamers; la asistencia de transcodificación en los servidores de Twitch depende de la cuenta. <Source href={sources.twitch}>Requisitos oficiales</Source>.</p>
            <ul>
              <li><strong>OBS actualizado:</strong> descarga la versión estable desde <Source href="https://obsproject.com/download">OBS Project</Source> y comprueba la compatibilidad de tus complementos.</li>
              <li><strong>Aitum Vertical:</strong> utiliza la distribución oficial correspondiente a tu sistema. Las <Source href={sources.aitum}>notas de versiones de Aitum</Source> permiten comprobar cambios y requisitos.</li>
              <li><strong>Una emisión horizontal estable:</strong> si ya hay cortes o problemas de sonido, resuélvelos antes de añadir otra composición.</li>
              <li><strong>Margen en el equipo y en la conexión:</strong> transmitir dos formatos añade trabajo de procesamiento y tráfico de subida.</li>
              <li><strong>Una copia de tus escenas y del perfil:</strong> expórtalos desde los menús de OBS antes de reorganizar tu configuración.</li>
            </ul>
            <p>Aitum incorporó la selección como lienzo adicional en su versión 1.6.0. Sus notas antiguas mencionan una fase alfa restringida; esa descripción histórica no representa la disponibilidad anunciada por Twitch en junio de 2026. También documenta una incompatibilidad con Aitum Stream Suite: evita instalar ambos como si fueran complementos independientes que debieran funcionar juntos.</p>
            <p className={styles.note}>Esta guía utiliza el flujo de <strong>Aitum Vertical</strong>. Si ya trabajas con Stream Suite u otro programa, sigue su propia documentación: los nombres de los controles y la forma de enlazar escenas pueden cambiar.</p>
          </section>

          <section aria-labelledby="configuracion">
            <h2 id="configuracion">Cómo configurar Dual Format en OBS, paso a paso</h2>

            <h3>1. Instala Aitum Vertical y localiza sus paneles</h3>
            <p>Cierra OBS antes de instalar el complemento y vuelve a abrirlo al terminar. En el menú de paneles, <strong>Docks</strong>, activa las vistas de escenas y fuentes verticales si no aparecen. Mantén también a la vista las escenas horizontales: vas a trabajar con ambas composiciones.</p>
            <p>Si tienes varias instalaciones de OBS, comprueba que abriste la misma en la que instalaste Aitum. Un complemento instalado en otra copia no aparecerá en la que estás usando. Conserva los nombres de tus escenas actuales y crea nombres reconocibles para las nuevas, como «Partida vertical» y «Pausa vertical».</p>

            <h3>2. Construye la escena vertical con tus fuentes existentes</h3>
            <p>Abre el engranaje del panel de Aitum y configura su resolución en <strong>1080 × 1920, proporción 9:16</strong>. Conserva el lienzo horizontal en los ajustes de vídeo de OBS. Desde las fuentes verticales, añade el juego, la cámara y las alertas que necesites. Reutiliza las fuentes existentes cuando corresponda; no abras otra captura del mismo dispositivo sin necesidad.</p>
            <p>En OBS, las fuentes situadas arriba en la lista se dibujan sobre las de abajo. Para ajustar una fuente con precisión, abre su menú contextual y utiliza las opciones de transformación. Puedes encajarla, moverla o recortarla conservando su proporción. <Source href={sources.obs}>Guía de fuentes de OBS</Source>.</p>
            <p>Empieza con una composición sencilla: imagen del juego completa y cámara en un espacio separado. Evalúa después si conviene ampliar alguna zona. Estirar una captura horizontal hasta llenar un rectángulo vertical deforma la imagen; recortarla en exceso puede ocultar el mapa, la vida o los subtítulos.</p>

            <h3>3. Conecta el lienzo vertical con la emisión de Twitch</h3>
            <p>Abre <strong>Ajustes → Emisión</strong>, selecciona Twitch e inicia sesión con la cuenta del canal. En el apartado de vídeo multipista, activa Enhanced Broadcasting. Después selecciona Aitum Vertical en <strong>Additional Canvas</strong>, el control de lienzo adicional.</p>
            <p>Este es el paso que une las dos composiciones. El propio complemento distingue entre vídeo multipista desactivado, activado sin su lienzo y activado con Aitum seleccionado. Si el lienzo no aparece, reinicia OBS y revisa la instalación antes de tocar otras opciones. <Source href={sources.canvas}>Configuración documentada en el proyecto de Aitum</Source>.</p>
            <p>No necesitas crear un segundo canal ni pegar otra clave para este flujo. Una salida RTMP independiente para otro destino es una configuración diferente. Mantén el primer ensayo centrado en Twitch para poder identificar cualquier fallo sin mezclar varias plataformas.</p>

            <h3>4. Enlaza las escenas y comprueba las transiciones</h3>
            <p>En el panel vertical, haz clic derecho sobre una escena y abre <strong>Linked Scenes</strong>. Asóciala con la escena horizontal correspondiente. Cambia después desde el selector principal de escenas y comprueba que ambas composiciones avanzan juntas.</p>
            <p>Prueba tres situaciones: partida, conversación y pausa. Una transición puede verse correcta en horizontal y dejar en vertical una cámara desactivada o una fuente fuera del encuadre. Ensayar esos cambios es más útil que crear diez escenas que todavía no has revisado.</p>

            <h3>5. Revisa imagen y sonido antes de emitir</h3>
            <p>Haz una grabación corta para revisar encuadre, volumen y sincronización. Lee en voz alta una frase, mueve la cámara y genera sonido en el juego. Escucha con auriculares: la presencia de movimiento en el medidor no demuestra que la mezcla final esté equilibrada.</p>
            <p>Para empezar con menos carga, Twitch recomienda desactivar el funcionamiento automático de Backtrack durante emisión o grabación en los ajustes de Aitum. Backtrack mantiene una grabación reciente disponible; si no vas a utilizar esa función, no aporta valor a esta prueba.</p>

            <h3>6. Inicia el directo y verifica lo que recibe el espectador</h3>
            <p>Arranca desde <strong>Iniciar transmisión</strong> en OBS. Con la configuración anterior, ese control envía ambos formatos; no hace falta iniciar además la salida verde del panel vertical. <Source href={sources.twitch}>Procedimiento de Twitch</Source>.</p>
            <p>Cuando hagas esta comprobación en tu canal, estarás en directo. Abre la aplicación de Twitch en un teléfono, mira la vista vertical y gira el dispositivo para comprobar la horizontal. Prueba también una transición y escucha el audio sin dejar el reproductor del teléfono sonando junto al micrófono.</p>
            <p>La grabación local comprueba lo que produces; la comprobación desde Twitch confirma lo que recibe el espectador. Ambas responden a preguntas distintas. Si todo funciona, guarda esa configuración como punto de partida antes de añadir más elementos.</p>
          </section>

          <section aria-labelledby="composicion">
            <h2 id="composicion">Cómo hacer que el formato vertical resulte útil</h2>
            <p>Diseña mirando un teléfono a tamaño real. Un texto que parece grande en la previsualización del monitor puede quedar ilegible en el móvil. Estas son propuestas de composición de GridialHub, no requisitos de Twitch:</p>
            <div className={styles.tableWrap} role="region" aria-label="Ejemplos de composición por contenido" tabIndex={0}>
              <table>
                <caption>Qué priorizar según el tipo de directo</caption>
                <thead><tr><th scope="col">Contenido</th><th scope="col">Prioridad visual</th><th scope="col">Comprobación práctica</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Shooter o juego competitivo</th><td>Acción, mapa e indicadores del juego</td><td>¿Se entiende dónde está el jugador y qué ocurre a su alrededor?</td></tr>
                  <tr><th scope="row">Conversación</th><td>Rostro y material que estás comentando</td><td>¿La cámara permite leer la expresión sin tapar el contenido?</td></tr>
                  <tr><th scope="row">Tutorial o demostración</th><td>La zona de trabajo y los textos necesarios</td><td>¿Se puede leer el ajuste que estás explicando?</td></tr>
                  <tr><th scope="row">Pausa</th><td>Un mensaje breve y claro</td><td>¿Ambos formatos indican que vuelves en unos minutos?</td></tr>
                </tbody>
              </table>
            </div>
            <p>Reserva el centro para la información imprescindible y comprueba el resultado con los controles del reproductor visibles. Twitch superpone su interfaz y el chat en la vista móvil. Evita añadir otro chat dentro de la composición vertical: puede duplicar información y ocupar el espacio que necesita el juego.</p>
            <p>Una forma de evaluar el diseño es enseñar diez segundos sin explicación. Si otra persona no puede identificar la acción o leer el texto principal, simplifica la escena. El espacio vacío puede ser preferible a una imagen recortada que ya no se entiende.</p>
          </section>

          <section aria-labelledby="rendimiento">
            <h2 id="rendimiento">Conexión, bitrate y rendimiento: qué conviene medir</h2>
            <p><strong>El bitrate de una sola imagen no equivale al tráfico total de Dual Format.</strong> Enhanced Broadcasting puede generar varias versiones para los espectadores. Twitch ofrece asistencia de transcodificación a Partners y determinados Afiliados, por lo que dos canales con un equipo parecido pueden tener distinta carga de codificación y subida. <Source href={sources.launch}>Cómo funciona Enhanced Broadcasting en estos formatos</Source>.</p>
            <p>Consulta la sección de requisitos de Twitch y los ajustes avanzados de emisión de tu panel de creador para saber qué asistencia tiene tu cuenta. No tomes un mínimo publicado para una modalidad como garantía para todas: importan la resolución, los formatos simultáneos y las versiones que debe codificar tu equipo.</p>
            <div className={styles.tableWrap} role="region" aria-label="Referencias de subida de Twitch para Dual Format" tabIndex={0}>
              <table>
                <caption>Referencias mínimas de subida publicadas por Twitch</caption>
                <thead><tr><th scope="col">Modalidad de Dual Format</th><th scope="col">Con transcodificación adicional</th><th scope="col">Sin transcodificación adicional</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Horizontal 1080p + vertical</th><td>12,5 Mbps</td><td>13,5 Mbps</td></tr>
                  <tr><th scope="row">Horizontal 1440p + vertical</th><td>14 Mbps</td><td>22,5 Mbps</td></tr>
                </tbody>
              </table>
            </div>
            <p className={styles.small}>Fuente: tabla completa de <Source href={`${sources.twitch}#detailed-requirements`}>requisitos de Twitch</Source>, consultada el 10 de septiembre de 2026. Son referencias de subida de la modalidad, no valores para pegar como bitrate de una sola salida ni una recomendación de contratar una conexión justo al límite. La tabla oficial también diferencia los requisitos de GPU.</p>
            <p>Para el primer ensayo, conserva una emisión horizontal que ya funcione y añade únicamente el lienzo vertical. Deja margen de subida para el juego, el audio, las aplicaciones y otras personas que usen la conexión. OBS recomienda diagnosticar las pérdidas de red revisando la estabilidad, el servidor de destino y el límite total de ancho de banda de Enhanced Broadcasting. <Source href={sources.network}>Diagnóstico de conexión de OBS</Source>.</p>
            <p>Abre las estadísticas de OBS y observa qué cambia al emitir. Si el juego pierde fluidez, compara con un límite de FPS que deje recursos disponibles, menos fuentes animadas y sin grabaciones adicionales. Cambia una variable cada vez y anota el resultado: así puedes conservar una mejora que realmente hayas comprobado.</p>
            <p className={styles.note}><strong>1440p y Dual Format son funciones diferentes.</strong> Puedes trabajar en ambos formatos sin estrenar también 1440p. Si incorporas las dos novedades a la vez y aparece un problema, será más difícil saber qué lo provoca.</p>
          </section>

          <section aria-labelledby="problemas">
            <h2 id="problemas">Problemas frecuentes y qué revisar primero</h2>
            <dl className={styles.troubleshooting}>
              <div><dt>La imagen vertical no aparece en Twitch</dt><dd>Comprueba el servicio elegido en OBS, Enhanced Broadcasting y el lienzo adicional. Ver una escena en Aitum solo confirma que existe localmente. Revisa la recepción en la aplicación móvil después de iniciar la emisión.</dd></div>
              <div><dt>El formato vertical se queda en otra escena</dt><dd>Revisa el vínculo entre las dos escenas y realiza el cambio desde el selector horizontal. Comprueba también las pantallas de inicio y pausa: cada una debe tener una composición apropiada.</dd></div>
              <div><dt>La cámara o el juego aparecen cortados</dt><dd>Selecciona la fuente y revisa su transformación. Antes de aumentar el tamaño, elimina recortes accidentales y conserva la proporción original. Valora qué información perderías al ampliar la captura.</dd></div>
              <div><dt>El audio se duplica, falta o se escucha con eco</dt><dd>Revisa las fuentes activas, el enrutamiento y la monitorización. Evita capturar el mismo sonido por dos caminos sin necesidad. Silencia los reproductores que estés usando para comprobar el directo y vuelve a escuchar la salida.</dd></div>
              <div><dt>OBS pierde fotogramas por la conexión</dt><dd>Comprueba el tráfico de subida de toda la emisión y prueba una conexión por cable. Ajustar el límite de ancho de banda puede ayudar si la subida no alcanza; no solucionará una captura mal colocada ni un problema de sonido.</dd></div>
              <div><dt>La emisión consume demasiados recursos</dt><dd>Comprueba las tareas simultáneas: juego, grabación, Backtrack y otros destinos. Reduce la carga gradualmente. Si OBS informa de un límite del codificador, revisa las versiones de vídeo que solicita Enhanced Broadcasting y la asistencia disponible para tu cuenta.</dd></div>
            </dl>
            <p>Una prueba útil conserva el mismo juego, escena y duración aproximada. Anota qué falla, qué ajuste cambias y qué ocurre después. Evita modificar a la vez resolución, FPS, sonido y red: un resultado diferente no te diría cuál de esos cambios fue el responsable.</p>
          </section>

          <section aria-labelledby="preguntas">
            <h2 id="preguntas">Preguntas frecuentes</h2>
            <h3>¿Tengo que ser Afiliado o Partner?</h3>
            <p>No para disponer de Dual Format según el despliegue anunciado por Twitch. Sí puede variar la asistencia que tu cuenta recibe para procesar las diferentes calidades. Disponibilidad de la función y carga sobre el equipo son cuestiones distintas.</p>
            <h3>¿Esto también envía el directo a TikTok o YouTube?</h3>
            <p>No. Aquí configuramos dos formatos destinados al mismo canal de Twitch. Añadir otra plataforma exige preparar su salida y revisar por separado sus requisitos y condiciones de emisión.</p>
            <h3>¿Puedo reutilizar mi escena horizontal?</h3>
            <p>Puedes reutilizar fuentes o escenas, pero revisa la composición resultante. Una imagen horizontal encajada dentro de un lienzo vertical conserva su contenido a cambio de ocupar menos altura. Decide si conviene combinarla con una cámara o con información útil en el espacio restante.</p>
            <h3>¿Necesito cambiar mi tarjeta gráfica?</h3>
            <p>Primero comprueba los requisitos actuales para tu modalidad, la ayuda de transcodificación disponible y las estadísticas de tu equipo. La antigüedad de una GPU, por sí sola, no describe toda la carga del directo. No recomendamos una compra sin identificar antes el límite concreto.</p>
            <h3>¿Activarlo garantiza más visitas?</h3>
            <p>No. Mejora las opciones de presentación para quien utiliza el móvil, pero el resultado depende del contenido, su legibilidad y la experiencia del espectador. Evalúa si la nueva composición aporta algo antes de dedicarle más complejidad.</p>
            <h3>¿Cómo vuelvo a emitir solo en horizontal?</h3>
            <p>Con la emisión detenida, vuelve al ajuste de lienzo adicional y selecciona «Ninguno» o «None». Puedes conservar Enhanced Broadcasting para el formato horizontal. Así no tienes que borrar tus escenas verticales para dejar de enviarlas.</p>
          </section>

          <aside className={styles.related} aria-label="Guías relacionadas">
            <p className={styles.boxTitle}>Continúa preparando tu directo</p>
            <p><Link href="/articulos/posts/configuracion-obs-stream-grabacion">Guía general de OBS para streaming y grabación</Link></p>
            <p><Link href="/articulos/posts/que-bitrate-usar-obs-tiktok-twitch-youtube-2026">Cómo elegir el bitrate según la plataforma</Link></p>
            <p className={styles.small}>Para Dual Format, aplica los requisitos específicos de esta guía y la documentación actual de Twitch: los valores de una emisión convencional no describen por sí solos su consumo total.</p>
          </aside>

          <section className={styles.sources} aria-labelledby="fuentes">
            <h2 id="fuentes">Fuentes y fecha de revisión</h2>
            <p>Documentación consultada el 10 de septiembre de 2026. Esta es una guía basada en fuentes oficiales; las composiciones y el método de prueba son recomendaciones editoriales. No presentamos mediciones propias de rendimiento ni una prueba de emisión en un equipo concreto.</p>
            <ul>
              <li><Source href={sources.twitch}>Twitch: configuración, requisitos y ayuda de Dual Format</Source>.</li>
              <li><Source href={sources.launch}>Twitch: lanzamiento de Dual Format y streaming 1440p</Source>.</li>
              <li><Source href={sources.aitum}>Aitum: versiones y compatibilidad de Vertical</Source>.</li>
              <li><Source href={sources.canvas}>Aitum: integración del lienzo con vídeo multipista</Source>.</li>
              <li><Source href={sources.obs}>OBS: organización y transformación de fuentes</Source>.</li>
              <li><Source href={sources.network}>OBS: diagnóstico de pérdidas de conexión</Source>.</li>
            </ul>
            <p>Los controles pueden cambiar de nombre según el idioma y la versión del programa. Si una actualización modifica requisitos o pasos, conviene revisar esta configuración antes del próximo directo.</p>
          </section>
        </div>
      </article>
    </>
  );
}
