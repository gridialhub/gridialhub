// Run after adding an article: npm run thumbnails
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { posts } from "../app/articulos/posts.js";

await mkdir("public/articulos/thumbs", { recursive: true });
for (const post of posts) {
  if (!post.thumbnail || !post.image) continue;
  for (const width of [480, 800]) {
    await sharp(`public${post.image}`)
      .rotate()
      .resize(width, Math.round(width * 9 / 16), { fit: "cover", position: "centre" })
      .webp({ quality: 82 })
      .toFile(`public${post.thumbnail}-${width}.webp`);
  }
}
console.log(`Generated responsive thumbnails for ${posts.filter(p => p.thumbnail).length} articles.`);
