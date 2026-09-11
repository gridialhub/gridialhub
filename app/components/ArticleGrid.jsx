import Link from "next/link";
import styles from "./ArticleGrid.module.css";

const dateFormat = new Intl.DateTimeFormat("es", {
  day: "numeric", month: "short", year: "numeric", timeZone: "UTC",
});

export default function ArticleGrid({ posts, headingLevel = 2, eagerFirst = false }) {
  const Heading = `h${headingLevel}`;
  return (
    <div className={styles.grid}>
      {posts.map((post, index) => (
        <article className={styles.card} key={post.slug}>
          <Link href={post.href} className={styles.link}>
            <div className={styles.media}>
              {post.image && (
                <img
                  src={post.thumbnail ? `${post.thumbnail}-800.webp` : post.image}
                  srcSet={post.thumbnail ? `${post.thumbnail}-480.webp 480w, ${post.thumbnail}-800.webp 800w` : undefined}
                  sizes="(max-width: 600px) calc(100vw - 32px), (max-width: 900px) calc((100vw - 68px) / 2), 336px"
                  width={800}
                  height={450}
                  alt=""
                  loading={eagerFirst && index === 0 ? "eager" : "lazy"}
                  fetchPriority={eagerFirst && index === 0 ? "high" : "auto"}
                  decoding="async"
                />
              )}
            </div>
            <div className={styles.body}>
              <span className={styles.category}>{post.category || post.tags?.[0] || "Guías"}</span>
              <Heading className={styles.title}>{post.title}</Heading>
              <p className={styles.meta}>
                <time dateTime={post.date}>{dateFormat.format(new Date(`${post.date}T00:00:00Z`))}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readingTime}</span>
              </p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
