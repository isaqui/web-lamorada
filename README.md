# La Morada — Parque Cementerio

Rediseño del sitio web (página de inicio) de La Morada, parque cementerio en Santa Cruz de la Sierra, Bolivia.

## Estructura del proyecto

```
web-lamorada/
├── CLAUDE.md       Instrucciones persistentes del proyecto (para Claude Code)
├── docs/
│   └── brief-negocio.md   Brief de negocio completo (contexto de referencia)
├── recursos/
│   ├── img/       Imágenes del sitio (renders, ingreso, jardines, logo)
│   ├── css/       Hojas de estilo (style.css, fonts.css, fontawesome.min.css)
│   ├── js/        Comportamiento del sitio (main.js)
│   └── fonts/     Tipografías Barlow autoalojadas + Font Awesome (woff2)
└── index.html     Página de inicio
```

## Trabajar en este proyecto con Claude Code

`CLAUDE.md` se lee automáticamente al iniciar una sesión de Claude Code en
esta carpeta — no hace falta volver a explicar el contexto del proyecto. Si
necesitas el brief de negocio completo (público objetivo, lineamientos
éticos extendidos, etc.), está en `docs/brief-negocio.md`.

## Cómo verlo localmente

Al ser HTML/CSS/JS estático, basta con abrir `index.html` en el navegador,
o servirlo con cualquier servidor local, por ejemplo:

```bash
npx serve .
# o
python3 -m http.server 8000
```

## Stack

- HTML5 + CSS3 (sin frameworks), JavaScript vanilla.
- Tipografía: familia **Barlow** (Barlow, Barlow Semi Condensed, Barlow Condensed),
  autoalojada en `recursos/fonts/` — no depende de Google Fonts en producción.
- Iconografía: **Font Awesome 6 Free**, autoalojado en `recursos/fonts/` y
  `recursos/css/fontawesome.min.css` — no depende de un CDN.
- Colores corporativos: primario `#904515`, secundario `#E5A100`, apoyo `#000000` / `#ffffff`.
- Botones con radio único (sin curvatura superior), según lineamientos de marca.

## Pendientes de contenido

- Precios y cuotas reales por sector (Diamante / Rubí / Esmeralda).
- Testimonios reales de familias, con autorización (actualmente son ilustrativos).

## Licencias de terceros incluidas

- `recursos/fonts/` — fuentes Barlow (SIL Open Font License) vía paquetes `@fontsource/*`.
- `recursos/fonts/fa-*.woff2` y `recursos/css/fontawesome.min.css` — Font Awesome Free
  (iconos: CC BY 4.0 · fuentes: SIL OFL 1.1 · código: MIT). Ver `recursos/LICENSE-fontawesome.txt`.
