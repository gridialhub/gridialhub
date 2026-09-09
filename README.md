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
