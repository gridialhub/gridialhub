import { posts } from "./articulos/posts";

export default function sitemap() {
  const baseUrl = "https://gridialhub.com";

  const staticRoutes = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/sorteos", changeFrequency: "monthly", priority: 0.8 },
    { path: "/articulos", changeFrequency: "weekly", priority: 0.9 },
    { path: "/resultados", changeFrequency: "monthly", priority: 0.7 },
    { path: "/bases", changeFrequency: "monthly", priority: 0.6 },
    { path: "/privacidad", changeFrequency: "yearly", priority: 0.4 },
    { path: "/terminos", changeFrequency: "yearly", priority: 0.4 },
    { path: "/contacto", changeFrequency: "monthly", priority: 0.5 },
  ].map(({ path, ...metadata }) => ({
    url: `${baseUrl}${path}`,
    ...metadata,
  }));

  const articleRoutes = posts.map((post) => ({
    url: `${baseUrl}${post.href}`,
    lastModified: new Date(`${post.updatedDate || post.date}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes];
}
