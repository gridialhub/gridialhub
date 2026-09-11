# GridialHub
Sitio de comunidad, artículos y sorteos gaming.

## Stack
- Next.js 15.5.x (App Router)
- React 19
- Node.js 24.x en Vercel

## Desarrollo
```bash
npm install
npm run dev
```

## Producción
- Dominio: https://gridialhub.com
- Despliegue: Vercel
- Google Analytics se carga únicamente después del consentimiento del usuario.
- `app/robots.js` y `app/sitemap.js` generan los metadatos técnicos para buscadores.

## Pendiente/opcional
- Añadir un backend si se desea que el formulario de contacto envíe mensajes sin abrir el cliente de correo.
- Configurar `public/ads.txt` cuando se active una red publicitaria.

## Miniaturas de artículos
Las tarjetas de inicio y artículos comparten `app/components/ArticleGrid.jsx`.
En `app/articulos/posts.js`, cada artículo puede declarar `category` y `thumbnail`
(ruta sin sufijo, por ejemplo `/articulos/thumbs/mi-imagen`). Tras añadir la imagen
original a `public/articulos/`, ejecuta `npm run thumbnails`. Se generan versiones
WebP de 480 y 800 píxeles en proporción 16:9; revisa el recorte antes de publicar.
Las imágenes originales de los artículos se conservan. Incluye las miniaturas
resultantes en el commit. Si falta `thumbnail`, la tarjeta utiliza `image`.
