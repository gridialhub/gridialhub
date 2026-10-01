import Link from "next/link";

const dimensions = {
  "/articulos/duda-sobre-tarjeta.png": [1792, 1312],
  "/articulos/banner-helldivers2-2026.png": [2048, 1152],
  "/articulos/banner-obs-2026.png": [1344, 768],
  "/articulos/banner-bitrate-obs-2026.png": [1344, 768],
  "/articulos/banner-windows-11-gaming.png": [1184, 864],
  "/articulos/banner-steam-hardware-2026.png": [1280, 896],
};
const formatDate = (value) => new Intl.DateTimeFormat("es", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
export default function EditorialArticle({ title, published, image, children }) {
  return <article className="card article-page editorial-article">
    <header>
      <Link href="/articulos" className="editorial-back">← Todas las guías</Link>
      <h1>{title}</h1>
      <p className="meta">Por <Link href="/sobre-gridial">Gridial</Link> · Publicado el <time dateTime={published}>{formatDate(published)}</time> · Actualizado el <time dateTime="2026-10-01">1 de octubre de 2026</time></p>
    </header>
    <figure><img src={image} alt="" width={dimensions[image]?.[0]} height={dimensions[image]?.[1]} style={{ width: "100%", height: "auto", borderRadius: 12 }} /><figcaption className="meta">Ilustración de portada; no representa una captura de configuración ni una prueba de rendimiento.</figcaption></figure>
    <div className="article-content">{children}</div>
  </article>;
}
