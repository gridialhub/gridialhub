import ArticleGrid from "../components/ArticleGrid";
import { posts } from "./posts";
import styles from "./page.module.css";

export const metadata = {
  title: "Artículos sobre gaming y tecnología",
  description: "Explora todos los artículos publicados en GridialHub sobre gaming, creación de contenido, hardware y tecnología.",
  alternates: { canonical: "/articulos" },
};

export default function ArticulosPage() {
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <p className={styles.eyebrow}>GridialHub <span aria-hidden="true">/</span> Artículos</p>
        <h1>Guías para jugar y crear mejor</h1>
        <p className={styles.lead}>Hardware, rendimiento y streaming, explicado con claridad.</p>
      </header>
      <section aria-label="Últimos artículos">
        <ArticleGrid posts={sortedPosts} eagerFirst />
      </section>
    </div>
  );
}
