# Revisión editorial — 1 de octubre de 2026

La cuenta de AdSense fue rechazada sin un motivo específico visible. Estos cambios corrigen problemas comprobados del sitio; no atribuyen el rechazo a una causa ni garantizan aprobación.

## Cambios

- Se reescribieron seis guías: elección de GPU, Helldivers 2, configuración de OBS, bitrate, Windows 11 y hardware de Steam.
- Se eliminó una instrucción de borrador en el artículo de GPU y se ajustaron títulos a su alcance real.
- Se retiraron recomendaciones sin respaldo, promesas de rendimiento y cifras universales para TikTok. Se añadieron fuentes primarias y se distinguieron recomendaciones, ejemplos hipotéticos y mediciones propias inexistentes.
- Se conservaron todas las direcciones y fechas originales de publicación. Las revisiones indican el 1 de octubre de 2026 y se reflejan en el catálogo y sitemap.
- El sorteo diferencia $200 anunciados de $100 correspondientes a premios con ganador. No se inventó el motivo por el que quedó vacante el primer premio ni se afirmó haber verificado entregas.
- Se creó /sobre-gridial y se enlazó desde la navegación, pie y artículos. No se publicaron datos personales adicionales ni credenciales profesionales no verificadas.
- La portada dirige su acción principal a las guías. Se mantuvieron el estilo visual, banners y rutas existentes.

## Validación

- Compilación de producción Next.js, tipos y generación de páginas completadas.
- Revisión de 453 referencias locales en 22 HTML generados: ninguna referencia ausente.
- git diff --check sin errores.
- No se cambiaron dependencias, identificadores de Google ni la lógica de consentimiento.
- No se completó la inspección visual ni la prueba interactiva: no había navegador instalado y su descarga no produjo un archivo válido. Falta comprobar menú, tablas y aviso de cookies en móvil y escritorio.

## Consentimiento: alcance de lo comprobado

El código actual carga Google Analytics después de aceptar, guarda la preferencia y contiene una función de revocación. Esto es una revisión del código, no una prueba de tráfico real. El script de AdSense se carga desde el head independientemente del aviso de analítica; ese aviso no es una CMP publicitaria certificada.

La publicación/configuración de la CMP de Google puede residir en la cuenta de AdSense y no puede confirmarse por la ausencia de un componente local. No se cambió la política de privacidad para afirmar que una CMP está activa sin haberlo comprobado. Revisar Privacidad y mensajes en AdSense y comprobar el comportamiento regional antes de activar anuncios. Referencia: https://support.google.com/adsense/answer/13554116

## Pendiente antes de reenviar a AdSense

- Inspección visual e interacción de la versión de prueba.
- Comprobar los detalles de la cuenta y de la CMP en AdSense.
- Confirmar la publicación de estos cambios y verificar las páginas desplegadas.
- Las guías documentales no sustituyen futuras pruebas propias con capturas reales; no se han inventado esas pruebas.
