# CLAUDE.md — La Morada, Parque Cementerio

Instrucciones persistentes del proyecto. Léelas antes de trabajar en cualquier
tarea de este repositorio. El brief completo está en `docs/brief-negocio.md`;
este archivo es el resumen accionable — si algo cambia el comportamiento, va
aquí; si es solo contexto de fondo, va en `docs/`.

## Qué es este proyecto

Sitio web (landing / home) de **La Morada**, parque cementerio en la zona
noreste de Santa Cruz de la Sierra, Bolivia. Ofrece:
- Venta de espacios de descanso (individuales y familiares)
- Planes de previsión funeraria (pago programado, financiamiento directo)

**El sitio es una herramienta de captación de leads, no una tienda
transaccional.** Todo CTA apunta a WhatsApp o al formulario de contacto, nunca
a una compra automática en línea.

## Tono y voz — reglas duras

- Cálido, empático, en primera persona del plural ("le acompañamos").
- Nunca urgencia artificial, miedo, descuentos agresivos ni cuentas regresivas.
- Nunca comparaciones con la competencia.
- Nunca prometer asesoría legal/financiera no autorizada.
- Testimonios y casos de uso: ficticios/genéricos y **marcados como
  ilustrativos**, salvo que se provean testimonios reales autorizados.
- Ante cualquier dato del negocio que no esté confirmado (precios, cuotas,
  horarios, nombres de planes): **preguntar, nunca inventar.**

## Identidad visual — reglas duras

**Colores corporativos** (no usar otros como protagonistas):
| Rol       | Hex       |
|-----------|-----------|
| Primario  | `#904515` |
| Secundario| `#E5A100` |
| Apoyo     | `#000000` / `#ffffff` |

**Tipografía** — familia **Barlow** vía Google Fonts (equivalente libre de
Myriad Variable Concept), autoalojada en `recursos/fonts/` + `recursos/css/fonts.css`:
- `Barlow` — cuerpo de texto (400/500/600/700)
- `Barlow Semi Condensed` — titulares (600/700/800), estilo "Black SemiCondensed"
- `Barlow Condensed` — antetítulos, cifras, etiquetas (600/700/800/900)

**Iconografía**: solo **Font Awesome 6** (`recursos/fonts/fa-*.woff2` +
`recursos/css/fontawesome.min.css`). No mezclar con otra librería de iconos
(lucide, heroicons, SVGs custom, etc.).

**Botones**: radio único, **sin curvatura en las esquinas superiores**
(`border-radius: var(--r) var(--r) 0 0` está prohibido; usar un radio
uniforme en las 4 esquinas, token `--r` en `style.css`).

**Sin CDNs externos en producción**: fuentes e iconos van autoalojados. No
reintroducir `<link>` a `fonts.googleapis.com` ni `cdnjs.cloudflare.com`.

## Plano de disponibilidad — sectores

El parque está organizado en tres sectores, siempre en este orden y con estos
nombres exactos:
1. **Diamante**
2. **Rubí**
3. **Esmeralda**

Estados posibles de cada espacio: Disponible / Reservado / Vendido / Bloqueado.
El plano interactivo real vive en:
`https://lamorada.sistemas-orange.com.bo/modulos/uv/?mapa=YWRtaW4&u=1`

## Estructura de carpetas (obligatoria, no reorganizar)

```
web-lamorada/
├── CLAUDE.md
├── docs/
│   └── brief-negocio.md
├── recursos/
│   ├── img/       imágenes reales (jpg/png), nunca base64 inline
│   ├── css/       style.css, fonts.css, fontawesome.min.css
│   ├── js/        main.js
│   └── fonts/     woff2 de Barlow + Font Awesome, autoalojados
└── index.html
```

- CSS y JS **siempre en archivos separados**, nunca inline en el HTML.
- Imágenes **siempre como archivos**, nunca embebidas en base64.
- Un solo `index.html` por página; si se agregan páginas internas
  (Nosotros, Previsión, Contacto), seguir el mismo patrón de carpetas.

## Contacto (dato real, no inventar otro)

- WhatsApp / teléfono: `+591 75552144`
- Email: `info@lamorada.com.bo`
- Dirección: Tercer Anillo Externo, entre Av. Mutualista y Av. Paragua,
  esq. C. F. de Aguilera #362, Santa Cruz de la Sierra, Bolivia

## Pendientes de contenido (no rellenar con datos inventados)

- Precios y cuotas reales por sector (Diamante / Rubí / Esmeralda).
- Testimonios reales de familias, con autorización explícita.

## Cómo ver el sitio localmente

Estático, sin build step:
```bash
npx serve .
# o
python3 -m http.server 8000
```
