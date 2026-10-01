import Link from "next/link";
export const metadata = { title: "Sobre Gridial y el trabajo editorial", description: "Conoce el propósito de GridialHub, sus guías de PC y streaming y los criterios de fuentes, pruebas y correcciones.", alternates: { canonical: "/sobre-gridial" } };
export default function About() { return <article className="card article-page editorial-article"><h1>Sobre Gridial</h1><div className="article-content">
<p>Soy Gridial, creador de contenido de videojuegos. GridialHub es el espacio donde reúno guías de PC, hardware y streaming para quienes quieren entender mejor su equipo y sus directos.</p>
<p>El proyecto reúne también a la comunidad que sigue mis contenidos y conserva información de sus sorteos. Las guías se pueden consultar sin participar en ellos.</p>
<h2>Qué encontrarás aquí</h2>
<ul><li>Explicaciones para comparar componentes y tecnologías sin decidir únicamente por sus cifras de marketing.</li><li>Guías de configuración y diagnóstico de streaming y juegos.</li><li>Información de productos basada en documentación y anuncios identificables.</li></ul>
<h2>Cómo leer nuestras guías</h2>
<p>Distinguimos entre especificaciones del fabricante, pruebas publicadas por terceros y recomendaciones editoriales. Una ficha técnica no equivale a una reseña de un dispositivo probado. Cuando una guía no incluye mediciones propias, sus recomendaciones deben tomarse como puntos de partida.</p>
<p>Las imágenes conceptuales ayudan a ilustrar un tema; no prueban el funcionamiento de un producto ni sustituyen una captura real de sus menús. Los ejemplos numéricos hipotéticos se identifican como tales.</p>
<h2>Fuentes, actualizaciones y correcciones</h2>
<p>Priorizamos documentación oficial para requisitos y compatibilidad. Las guías revisadas indican su fecha de actualización y enlazan las fuentes que respaldan sus afirmaciones. Los servicios, precios y juegos pueden cambiar después de esa fecha.</p>
<p>Si encuentras un error, envía la dirección del artículo y, cuando sea posible, la fuente o versión del programa que muestra la diferencia. Las correcciones sustanciales deben reflejarse en el contenido y en su fecha de revisión; cambiar el año del título por sí solo no actualiza una guía.</p>
<h2>Contacto y canales</h2>
<p>Puedes escribir a <a href="mailto:contact@gridialhub.com">contact@gridialhub.com</a> o utilizar <Link href="/contacto">la página de contacto</Link>. Encontrarás mis contenidos en <a href="https://www.twitch.tv/gridialtv">Twitch</a>, <a href="https://www.tiktok.com/@gridial">TikTok</a> y <a href="https://www.youtube.com/@Gridial">YouTube</a>.</p>
<p><Link href="/articulos">Explorar las guías</Link> · <Link href="/resultados">Resultados de sorteos</Link> · <Link href="/privacidad">Privacidad</Link></p>
</div></article>; }
