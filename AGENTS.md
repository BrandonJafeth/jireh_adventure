# SISTEMA DE PROMPT — LANDING PAGE
### Stack: Astro + Tailwind CSS + Framer Motion + Lenis Smooth Scroll

---

# ═══════════════════════════════════════
# PARTE A — CONFIGURACIÓN DEL PROYECTO
# ═══════════════════════════════════════

## A1 · IDENTIDAD

```
NOMBRE DE LA MARCA: Jireh Adventure
DESCRIPCIÓN EN UNA LÍNEA: Tours de aventura premium en Guanacaste, Costa Rica — Jet Ski y ATV en Playa Flamingo, Conchal y Brasilito.
CLIENTE OBJETIVO:
  * Turistas extranjeros (EEUU, Europa)
  * Edad: 20–50
  * Buscan experiencias memorables, no precio bajo
```

## A2 · MODO VISUAL

```
MODO: [ LIGHT ]
```

## A3 · COLORES

```
FONDO (BG):              HEX #F7F3EE  /  HSL 36 33% 95%
CARDS / SUPERFICIES:     HEX #FFFFFF  /  HSL 0 0% 100%
ACENTO PRINCIPAL:        HEX #1A9E75  /  HSL 161 71% 36%   → se usa en: CTAs, botones de reserva, íconos activos
ACENTO SECUNDARIO:       HEX #0B3D5E  /  HSL 207 78% 21%   → se usa en: headings, texto fuerte, navbar
COLOR EXTRA (gold):      HEX #F5A623  /  HSL 37 91% 55%    → se usa en: badges de precio, urgencia, estrellas
```

## A4 · TIPOGRAFÍA

```
FUENTE HEADING:   Barlow Condensed   (Google Fonts — weight 700, 800, 900)
FUENTE BODY:      Barlow             (Google Fonts)
PESOS DEL BODY:   300, 400, 500, 600
```

> Combo elegido: Deportivo/directo adaptado — Barlow Condensed (bold condensed, estilo acción) + Barlow (clean, legible)

## A5 · ASSETS

```
LOGO:          [ Imagen: https://res.cloudinary.com/dkwvaxxdw/image/upload/v1777091156/ChatGPT_Image_24_abr_2026_22_24_53_v7edc4.png ]
               (logo circular con palmera y ATV sobre olas — usar en navbar con altura 40px)

HERO FONDO:    [ Imagen: https://res.cloudinary.com/dkwvaxxdw/image/upload/v1777137161/pexels-asadphoto-1430675_obuwlc.jpg ]
HERO POSTER:   (vacío — imagen estática, no aplica)

IMAGEN CARD JET SKI (Features Grid — card 1 y 2):
  https://res.cloudinary.com/dkwvaxxdw/image/upload/v1777091434/ChatGPT_Image_24_abr_2026_22_29_56_tctsay.jpg
  (jet ski en acción en aguas turquesas)

IMAGEN CARD ATV (Features Grid — card 3):
  https://res.cloudinary.com/dkwvaxxdw/image/upload/v1777091548/Captura_de_pantalla_2026-04-24_223154_y6hrey.jpg
  (ATV en ruta de jungla/montaña)

IMAGEN CARD COMBO (Features Grid — card 4 / Stats background):
  https://res.cloudinary.com/dkwvaxxdw/image/upload/v1777091645/ChatGPT_Image_24_abr_2026_22_33_54_ya2ubz.jpg
  (vista épica de playa/aventura combinada)
```

## A6 · SECCIONES ACTIVAS

```
[x] NAVBAR
[x] HERO
[x] CÓMO FUNCIONA
[x] FEATURES ALTERNADAS   ← DESACTIVADA
[x] FEATURES GRID         ← Tours en grid de cards con imágenes
[x] STATS
[ ] TESTIMONIOS           ← DESACTIVADA
[ ] PRICING
[x] FAQ
[x] CTA FINAL + FOOTER
```

---

# ═══════════════════════════════════════
# PARTE B — SECCIONES Y COPIES
# ═══════════════════════════════════════

> INSTRUCCIÓN PARA CLAUDE (no borrar):
> Leé la Parte A completa antes de generar.
> Usá los copies de esta sección EXACTAMENTE como están escritos.
> No los modifiques, no los resumas, no los "mejores".
> Generá solo las secciones que aparecen en este documento.
> El orden de generación es: index.css → tailwind.config.js → Layout.astro → páginas e index.astro → componentes en el orden en que aparecen abajo.
> Stack: Astro 4 + Tailwind CSS + Framer Motion (via react islands con client:load) + Lenis smooth scroll (inicializado en script global en Layout.astro).
> Lenis: instanciar en un <script> tag en Layout.astro, conectar con requestAnimationFrame loop. También conectar con Framer Motion usando ScrollTrigger si aplica.

---

## ▸ NAVBAR

```
LOGO:       [imagen circular] + texto "JIREH ADVENTURE"
NAV LINKS:  Tours | Precios | Galería | Contacto
BOTÓN CTA:  Book Now ↗
```

**Especificaciones técnicas:**

```
Posición:    fixed top-4 left-0 right-0 z-50
Padding:     px-8 lg:px-16 py-3
Logo:        <img> del logo Cloudinary | h-10 w-10 object-contain rounded-full mr-3
             + texto "JIREH ADVENTURE" Barlow Condensed 800 text-xl tracking-widest uppercase
             "JIREH" en #0B3D5E | "ADVENTURE" en #1A9E75
Nav links:   liquid-glass rounded-full px-1.5 py-1.5 pill container
             text-xs font-body font-medium tracking-wide text-foreground/60
             hover:text-foreground transition-colors
Botón CTA:   bg-[#1A9E75] text-white rounded-full px-4 py-2
             font-body font-semibold text-xs tracking-wider uppercase
             + ArrowUpRight icon
Scroll behavior: cuando scrollY > 60px → añadir liquid-glass-strong al nav container
                 transición opacity/backdrop suave con CSS transition
```

---

## ▸ HERO

```
BADGE INNER (pill):    🌊 Guanacaste, Costa Rica
BADGE TEXTO:           Aventura de nivel premium

HEADING:
NOT JUST A TOUR.
AN UNFORGETTABLE
EXPERIENCE.

SUBTEXT:
Jet Ski, ATV y más en las playas más increíbles de Costa Rica.
Equipos de primera, guías profesionales, momentos que duran para siempre.

CTA PRIMARIO:    Book Your Adventure ↗
CTA SECUNDARIO:  Ver Todos los Tours

STATS:
  Stat 1:  valor 500+   /  label Happy Adventurers
  Stat 2:  valor 5★     /  label Rated Experience
  Stat 3:  valor 3      /  label Iconic Locations

PARTNERS: (vacío)
```

**Especificaciones técnicas:**

```
Contenedor:    min-height 100vh | flex col center | overflow hidden | text-center | relative

Fondo (GRADIENTE CSS — LIGHT mode, ambiente playero/oceánico):
  background: linear-gradient(160deg,
    hsl(36 33% 95%) 0%,      ← arena clara (--background)
    hsl(185 40% 90%) 40%,    ← celeste suave, evoca agua
    hsl(161 30% 88%) 100%    ← verde aguamarina tenue
  )
  + patrón de puntos: radial-gradient(circle, rgba(11,61,94,0.06) 1px, transparent 1px) 28px 28px
  + blob izquierdo: position absolute | 500px×380px | top-10% left-[-5%]
    radial-gradient(ellipse, #1A9E75 0%, transparent 70%) | opacity 0.09 | blur 80px
  + blob derecho: position absolute | 420px×320px | top-20% right-[-3%]
    radial-gradient(ellipse, #3AB8D8 0%, transparent 70%) | opacity 0.12 | blur 70px
  + blob inferior centro: position absolute | 600px×200px | bottom-10% left-50% -translate-x-50%
    radial-gradient(ellipse, #0B3D5E 0%, transparent 70%) | opacity 0.05 | blur 90px

Badge:
  liquid-glass rounded-full px-1 py-1 inline-flex items-center gap-2 mb-8
  Inner pill: bg-[#1A9E75] text-white rounded-full px-3 py-1 text-xs font-semibold
  Texto exterior: text-xs font-body font-medium text-[#0B3D5E]/60

Heading:
  font-heading Barlow Condensed 900
  text-[clamp(4.5rem,12vw,9.5rem)] leading-[0.92] tracking-[0.03em] uppercase
  "NOT JUST A TOUR." → color #0B3D5E (ocean deep)
  "AN UNFORGETTABLE" → color #0B3D5E
  "EXPERIENCE." → color #1A9E75 (green accent)

Subtext:
  font-body font-light text-base md:text-lg text-[#0B3D5E]/60 leading-relaxed max-w-xl mx-auto

CTAs:
  Primario:   bg-[#1A9E75] text-white rounded-full px-6 py-3.5
              font-body font-semibold text-sm tracking-wider uppercase + ArrowUpRight
  Secundario: liquid-glass-strong rounded-full px-6 py-3.5 border border-[#0B3D5E]/15
              font-body font-semibold text-sm tracking-wider uppercase text-[#0B3D5E]

Stats bar:
  mt-16 pt-10 border-t border-[#0B3D5E]/10 inline-flex gap-12 md:gap-16 justify-center
  Valor: Barlow Condensed 800 text-4xl text-[#0B3D5E] | "5★" en color #F5A623 (gold)
  Label: font-body font-light text-xs tracking-wide text-[#0B3D5E]/40 uppercase mt-1.5

Scroll indicator: visible | línea animada en color #0B3D5E/25

Animaciones hero (CSS animation-delay — Hero.astro es componente puro, sin React):
  Badge:    animation fade-up 0.5s ease both | delay 0s
  Heading línea 1: animation fade-up 0.7s ease both | delay 0.15s
  Heading línea 2: animation fade-up 0.7s ease both | delay 0.27s
  Heading línea 3: animation fade-up 0.7s ease both | delay 0.39s
  Subtext:  animation fade-up 0.6s ease both | delay 0.6s
  CTAs:     animation fade-up 0.6s ease both | delay 0.85s
  Stats:    animation fade-up 0.6s ease both | delay 1.0s
  (usar @keyframes fade-up de global.css — cero JS para el hero)
```

---

## ▸ CÓMO FUNCIONA

```
BADGE:    Simple & Fast
HEADING:  De la reserva al agua en minutos
SUBTEXT:  Sin complicaciones. Sin esperas. Solo adrenalina pura.

PASO 1 — TÍTULO: Elegí tu aventura
PASO 1 — TEXTO:
Jet Ski, ATV o el Combo completo. Revisá precios y disponibilidad
y elegí la experiencia que más te llame.

PASO 2 — TÍTULO: Reservá por WhatsApp
PASO 2 — TEXTO:
Un mensaje y listo. Confirmación inmediata, sin formularios complicados
ni páginas de pago externas.

PASO 3 — TÍTULO: Llegá y viví
PASO 3 — TEXTO:
Te esperamos con el equipo listo, la inducción de seguridad y tus guías.
Solo traé ganas de pasarla increíble.

PASO 4 — TÍTULO: Llevate el recuerdo
PASO 4 — TEXTO:
Fotos y videos de alta calidad opcionales para que tengas el momento para siempre.

VIDEO DE FONDO HLS: (vacío)
```

---

## ▸ FEATURES GRID

```
BADGE:    Nuestros Tours
HEADING:  Elegí tu nivel de adrenalina
SUBTEXT:  Experiencias diseñadas para que cada momento valga la pena.

CARD 1 — IMAGEN: https://res.cloudinary.com/dkwvaxxdw/image/upload/v1777091434/ChatGPT_Image_24_abr_2026_22_29_56_tctsay.jpg
CARD 1 — EYEBROW: Jet Ski Experience
CARD 1 — TÍTULO: 1 Hora de libertad en el océano
CARD 1 — TEXTO: Sesión libre con guía. Inducción completa, equipo incluido y la adrenalina de las olas de Guanacaste.
CARD 1 — BADGE PRECIO: desde $130
CARD 1 — BOTÓN: Reservar ↗
CARD 1 — ACENTO: #1A9E75

CARD 2 — IMAGEN: https://res.cloudinary.com/dkwvaxxdw/image/upload/v1777091434/ChatGPT_Image_24_abr_2026_22_29_56_tctsay.jpg
CARD 2 — EYEBROW: Jet Ski Tour
CARD 2 — TÍTULO: 2 Horas por lugares mágicos
CARD 2 — TEXTO: Tour guiado por los rincones más increíbles de la costa. Paradas fotográficas y recorrido completo.
CARD 2 — BADGE PRECIO: $200
CARD 2 — BADGE EXTRA: Más popular
CARD 2 — BOTÓN: Reservar ↗
CARD 2 — ACENTO: #1A9E75

CARD 3 — IMAGEN: https://res.cloudinary.com/dkwvaxxdw/image/upload/v1777091548/Captura_de_pantalla_2026-04-24_223154_y6hrey.jpg
CARD 3 — EYEBROW: ATV Jungle Tour
CARD 3 — TÍTULO: Off-road entre selva y montaña
CARD 3 — TEXTO: 2 horas de rutas escénicas con guía experto. Vistas que no encontrás en ningún otro lado.
CARD 3 — BADGE PRECIO: desde $80
CARD 3 — BOTÓN: Reservar ↗
CARD 3 — ACENTO: #0B3D5E

CARD 4 — IMAGEN: https://res.cloudinary.com/dkwvaxxdw/image/upload/v1777091645/ChatGPT_Image_24_abr_2026_22_33_54_ya2ubz.jpg
CARD 4 — EYEBROW: Combo Experience
CARD 4 — TÍTULO: Agua + tierra. El pack completo.
CARD 4 — TEXTO: Jet Ski y ATV en un solo día. Opción con Zip Line incluido. La experiencia favorita de grupos y parejas.
CARD 4 — BADGE PRECIO: desde $130
CARD 4 — BOTÓN: Ver Combo ↗
CARD 4 — ACENTO: #F5A623
```

**Especificaciones técnicas:**

```
Sección:   bg-[#F7F3EE] (--background) | py-24 md:py-32

Header:    centrado | max-w-3xl mx-auto | mb-16 | px-6

Grid:      grid-cols-1 md:grid-cols-2 gap-6 | max-w-6xl mx-auto px-6
           (4 cards en 2×2 en desktop)

Cada card (liquid-glass rounded-3xl overflow-hidden — sin padding externo, imagen al tope):
  IMAGEN SUPERIOR:
    <Image> de astro:assets | w-full | aspect-ratio: 16/9 | object-cover | loading="lazy"
    Overlay sutil: linear-gradient(to bottom, transparent 60%, rgba(255,255,255,0.15) 100%)

  CONTENIDO (padding p-6 md:p-8):
    Eyebrow: font-body font-semibold text-[0.62rem] tracking-[0.28em] uppercase mb-2
             color según ACENTO de la card
    Título:  font-heading Barlow Condensed 800 text-2xl md:text-3xl text-[#0B3D5E] leading-[0.95] mb-3
    Texto:   font-body font-light text-sm text-[#0B3D5E]/60 leading-relaxed mb-5

    FOOTER DE CARD (flex justify-between items-center):
      Izquierda — Badge precio:
        bg-[#F5A623]/15 text-[#B8720A] rounded-full px-3 py-1 text-xs font-semibold
        Si hay BADGE EXTRA ("Más popular"): segundo badge con bg-[#1A9E75]/10 text-[#1A9E75] ml-2
      Derecha — Botón:
        liquid-glass-strong rounded-full px-4 py-2
        font-body font-semibold text-xs tracking-wider uppercase text-[#0B3D5E]
        href al WhatsApp link | target="_blank"

  Hover de card: transform scale(1.01) | transition duration-300 ease-out
                 box-shadow ligero: 0 8px 32px rgba(11,61,94,0.10)

Animación: whileInView stagger 0.10s | cards con client:visible
           (si el componente es .astro puro: usar CSS animation-delay con @keyframes fade-up)
```

---



## ▸ STATS

```
BADGE:   (vacío)

STAT 1:  valor 500+   /  label Aventureros felices
STAT 2:  valor 3      /  label Playas de operación
STAT 3:  valor 100%   /  label Equipos certificados
STAT 4:  valor 5★     /  label Rating promedio

VIDEO HLS:       (vacío)
IMAGEN FONDO:    https://res.cloudinary.com/dkwvaxxdw/image/upload/v1777091645/ChatGPT_Image_24_abr_2026_22_33_54_ya2ubz.jpg
DESATURADO B&W:  [ NO ]
OVERLAY LIGHT:   bg-white/55 sobre la imagen para que los números sean legibles en LIGHT mode
```

---



```
BADGE:    Precios Claros
HEADING:  Sin sorpresas. Sin letras chicas.
SUBTEXT:  Todos los precios incluyen equipo de seguridad completo y guía profesional.

TOGGLE MENSUAL/ANUAL: [ NO ]

PLAN 1:
  NOMBRE:      Jet Ski — 1 Hora
  PRECIO:      $130
  PERÍODO:     por persona
  DESCRIPCIÓN: Sesión libre de 1 hora con guía. Ideal para principiantes y parejas.
  FEATURES:
    - Inducción de seguridad completa
    - Equipo incluido
    - Guía profesional
    - Opción fotos y videos (+)
  BOTÓN:       Reservar ahora ↗
  DESTACADO:   [ NO ]

PLAN 2 (recomendado):
  NOMBRE:      Jet Ski — 2 Horas
  PRECIO:      $200
  PERÍODO:     por persona
  BADGE:       Más popular
  DESCRIPCIÓN: Tour guiado de 2 horas por lugares mágicos de Guanacaste. La experiencia completa.
  FEATURES:
    - Todo lo del plan 1 hora
    - Tour por lugares mágicos
    - Mayor recorrido oceánico
    - Paradas fotográficas
    - Opción fotos y videos (+)
  BOTÓN:       Reservar ahora ↗
  DESTACADO:   [ SÍ ]

PLAN 3:
  NOMBRE:      Combo ATV + Más
  PRECIO:      desde $130
  PERÍODO:     por persona
  DESCRIPCIÓN: ATV sencillo $80 · ATV doble $90 · Combo ATV & Zip Line sencillo $130 · doble $170
  FEATURES:
    - ATV Jungle Tour 2 horas
    - Guía y equipo de seguridad
    - Rutas escénicas exclusivas
    - Opción Zip Line combinado
    - Precio especial doble
  BOTÓN:       Consultar Combo ↗
  DESTACADO:   [ NO ]
```

---

## ▸ FAQ

```
BADGE:    Preguntas frecuentes
HEADING:  Todo lo que necesitás saber

P1: ¿Necesito experiencia previa para el Jet Ski?
R1: No, para nada. Antes de cada sesión hacemos una inducción completa de seguridad.
    Nuestros guías te acompañan en todo momento para que te sientas seguro desde el primer minuto.

P2: ¿Cómo hago la reserva?
R2: Por WhatsApp directamente con nosotros. Sin formularios, sin páginas externas.
    Confirmación inmediata y te mandamos todos los detalles de punto de encuentro y horario.

P3: ¿Dónde operan exactamente?
R3: Operamos en Playa Flamingo, Playa Conchal y Brasilito, en el norte de Guanacaste.
    Al reservar te confirmamos el punto de encuentro exacto según tu ubicación.

P4: ¿Qué incluye el precio?
R4: Todos los tours incluyen equipo de seguridad completo, guía profesional e inducción.
    Las fotos y videos son opcionales y se coordinan al momento de la reserva.

P5: ¿Pueden ir niños o personas mayores?
R5: Los tours tienen restricciones de edad y peso por seguridad. Consultanos por WhatsApp
    con los detalles del grupo y te asesoramos sobre la mejor opción para todos.
```

---

## ▸ CTA FINAL + FOOTER

```
EYEBROW:  ¿Listo para la aventura?
HEADING:
Your next story
starts in the ocean.

SUBTEXT:
Escribinos por WhatsApp y reservá tu lugar hoy.
Los cupos son limitados.

BOTÓN PRIMARIO:    Reservar por WhatsApp ↗
BOTÓN SECUNDARIO:  Ver todos los tours

VIDEO HLS DE FONDO: (vacío)

— FOOTER —
TEXTO LEGAL:    © 2026 Jireh Adventure. Guanacaste, Costa Rica.
LINK FOOTER 1:  Tours
LINK FOOTER 2:  Precios
LINK FOOTER 3:  Contacto
```

---

---

# ═══════════════════════════════════════
# PARTE C — ESPECIFICACIONES TÉCNICAS GLOBALES
# ═══════════════════════════════════════

> Esta sección no se modifica. Claude la usa para generar el código base.

## Stack específico para este proyecto

```
Framework:     Astro 4.x (output: static por defecto, islands architecture)
Estilos:       Tailwind CSS 3.x via @astrojs/tailwind
Animaciones:   Framer Motion (islas React con client:load para hero/navbar, client:visible para el resto)
Scroll suave:  Lenis v1 — instanciar en Layout.astro en <script> global
               Loop con requestAnimationFrame
               Exportar instancia window.__lenis para acceso global
Fuentes:       Fontsource — importar en src/styles/global.css (NO Google Fonts, cero requests externos)
Imágenes:      Cloudinary URLs — usar <Image> de astro:assets para optimización automática (lazy, AVIF/WebP)
               Hero único: loading="eager" fetchpriority="high" para LCP óptimo
```

## Lenis — implementación en Layout.astro

```html
<script>
  import Lenis from 'lenis'

  const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.9,
  })

  window.__lenis = lenis

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
</script>
```

## Fonts — Fontsource (self-hosted, sin Google Fonts)

```css
/* En src/styles/global.css — importar PRIMERO, antes de cualquier otra regla */
@import '@fontsource/barlow-condensed/700.css';
@import '@fontsource/barlow-condensed/800.css';
@import '@fontsource/barlow-condensed/900.css';
@import '@fontsource/barlow/300.css';
@import '@fontsource/barlow/400.css';
@import '@fontsource/barlow/500.css';
@import '@fontsource/barlow/600.css';

/* Usar en Tailwind via fontFamily custom */
```

```json
/* package.json — agregar como dependencies */
"@fontsource/barlow-condensed": "^5.0.0",
"@fontsource/barlow": "^5.0.0"
```

```js
/* tailwind.config.mjs — fontFamily */
theme: {
  extend: {
    fontFamily: {
      heading: ['"Barlow Condensed"', 'sans-serif'],
      body: ['Barlow', 'sans-serif'],
    }
  }
}
```

```
Reglas de uso:
- Barlow Condensed: headings, navbar logo, stats valores, badges de precio — siempre uppercase
- Barlow: body text, nav links, subtext, botones, copy de cards
- NO cargar weights que no se usen — cada @import es un archivo de fuente separado
```

## Variables CSS (MODO LIGHT)

```css
:root {
  --background:           36 33% 95%;
  --foreground:           207 78% 21%;
  --card:                 0 0% 100%;
  --card-foreground:      207 78% 21%;
  --primary:              207 78% 21%;
  --primary-foreground:   36 33% 95%;
  --secondary:            0 0% 100%;
  --secondary-foreground: 207 78% 21%;
  --muted:                36 20% 92%;
  --muted-foreground:     207 30% 40%;
  --accent:               161 71% 36%;
  --accent-foreground:    0 0% 100%;
  --accent-2:             207 78% 21%;
  --accent-gold:          37 91% 55%;
  --border:               207 30% 21% / 0.10;
  --input:                207 30% 21% / 0.08;
  --ring:                 161 71% 36% / 0.30;
  --radius:               9999px;
  --glass-bg:             rgba(255,255,255,0.62);
  --glass-border:         rgba(255,255,255,0.80);
  --glass-blur:           20px;
}
```

## Liquid Glass CSS (MODO LIGHT)

```css
@layer components {
  .liquid-glass {
    background: rgba(255,255,255,0.62);
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    border: 1px solid rgba(255,255,255,0.78);
    box-shadow: 0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04),
                inset 0 1px 0 rgba(255,255,255,0.90);
    position: relative; overflow: hidden;
  }
  .liquid-glass-strong {
    background: rgba(255,255,255,0.82);
    backdrop-filter: blur(40px) saturate(200%);
    -webkit-backdrop-filter: blur(40px) saturate(200%);
    border: 1px solid rgba(255,255,255,0.92);
    box-shadow: 0 2px 8px rgba(0,0,0,0.07), 0 8px 32px rgba(0,0,0,0.05),
                inset 0 1px 0 rgba(255,255,255,1);
    position: relative; overflow: hidden;
  }
}
```

## Animaciones CSS

```css
@keyframes scroll-line {
  0%   { transform: translateY(-100%); opacity: 1; }
  100% { transform: translateY(300%); opacity: 0; }
}
@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

## Framer Motion — variantes estándar

```tsx
const lineVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.25,0.1,0.25,1] }
  })
}

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25,0.1,0.25,1] } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } }
}
const staggerItem = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25,0.1,0.25,1] } }
}

viewport={{ once: true, margin: "-80px" }}
```

## Estructura del proyecto Astro

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro          ← Lenis + CSS global import + meta/SEO
│   ├── pages/
│   │   └── index.astro           ← Orquesta todas las islas y secciones .astro
│   ├── components/
│   │   ├── Navbar.tsx            ← client:load  (sticky interactivo)
│   │   ├── Hero.astro            ← Astro PURO — gradiente CSS, animaciones CSS only, cero JS
│   │   ├── HowItWorks.astro      ← Astro PURO — animaciones CSS only
│   │   ├── ToursGrid.astro       ← Astro PURO — grid 2×2 con imágenes Cloudinary via <Image>
│   │   ├── Stats.astro           ← Astro PURO — imagen fondo + números estáticos
│   │   ├── Pricing.tsx           ← client:visible (cards con hover y posible toggle futuro)
│   │   ├── FAQ.tsx               ← client:visible (acordeón interactivo)
│   │   └── CTAFooter.astro       ← Astro PURO
│   └── styles/
│       └── global.css            ← @import Fontsource + vars CSS + liquid glass + @keyframes
├── tailwind.config.mjs
├── astro.config.mjs
└── package.json
```

## package.json — dependencias clave

```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.2.4",
    "astro": "^6.1.9",
    "@astrojs/react": "^3.0.0",
    "tailwindcss": "^4.2.4",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "framer-motion": "^11.0.0",
    "lenis": "^1.1.14",
    "lucide-react": "^0.383.0",
    "@fontsource/barlow-condensed": "^5.0.0",
    "@fontsource/barlow": "^5.0.0"
  }
}
```

## astro.config.mjs

```js
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [react(), tailwind()],
  image: {
    // Permite dominios de Cloudinary para <Image> de astro:assets
    domains: ['res.cloudinary.com'],
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
})
```

## Reglas de generación — Astro con foco en performance

```
ARQUITECTURA ASTRO
1. Preferir componentes .astro por defecto — solo usar .tsx cuando hay interactividad real
2. Componentes .astro: cero JS al cliente, CSS scoped o inline, markup semántico HTML5
3. client:load SOLO para Navbar — necesita escuchar scroll inmediatamente
4. client:visible para Pricing y FAQ — hidrata solo al entrar en viewport, ahorra bundle
5. Nunca usar client:only sin justificación explícita

HERO — IMAGEN ESTÁTICA
6. Hero.astro: imagen de Cloudinary con loading="eager" fetchpriority="high" — es el LCP crítico
7. Animaciones del hero: CSS animation-delay sobre @keyframes fade-up — cero JS adicional
8. La imagen carga con prioridad máxima; los overlays y blobs son CSS puro, sin bloqueo

IMÁGENES
9. Hero image: <img> con loading="eager" fetchpriority="high" decoding="async" — prioridad máxima (LCP)
10. Logo: <img> estándar | loading="eager" | width="40" height="40" | above the fold
11. Cards de tours (ToursGrid.astro): <Image> de astro:assets
    — src: URL Cloudinary | width/height explícitos | loading="lazy" | format="avif" inferido
    — genera srcset automático, evita CLS, produce AVIF/WebP
12. Stats background: <img> con loading="lazy" | posición absolute inset-0
13. Nunca <img> sin width+height — causa CLS y baja el score de Core Web Vitals
14. alt descriptivo y específico en todas las imágenes

FUENTES — FONTSOURCE SELF-HOSTED
14. Solo @import en global.css — cero <link> externos, cero requests a google.com
15. Importar exactamente estos weights y nada más:
    @fontsource/barlow-condensed: 700, 800, 900
    @fontsource/barlow: 300, 400, 500, 600
16. En Layout.astro: <link rel="preload" as="font" type="font/woff2" crossorigin
    href="/path/to/barlow-condensed-900.woff2"> y barlow-400.woff2
    (Fontsource instala en node_modules, copiar rutas reales al build)

CSS Y TAILWIND
17. TypeScript strict en todos los .tsx
18. Un componente por archivo, default export, PascalCase
19. Copies EXACTOS del briefing — nunca reescribir
20. Mobile-first: md: 768px, lg: 1024px
21. Alternar secciones: bg-[#F7F3EE] / bg-white
22. liquid-glass y liquid-glass-strong: definir en global.css @layer components, nunca duplicar
23. Tailwind fontFamily en tailwind.config.mjs: heading → Barlow Condensed, body → Barlow
24. CSS variables en :root, usarlas en Tailwind via hsl(var(--variable))

LENIS
25. Instanciar una sola vez en Layout.astro <script is:inline> — antes de cualquier componente
26. window.__lenis = lenis — disponible globalmente
27. El raf loop corre independiente del hydration de React — no bloquea

WHATSAPP Y CTAs
28. WhatsApp: href="https://wa.me/50600000000?text=Hola!%20Quiero%20reservar%20un%20tour"
    (número placeholder — reemplazar antes de deploy)
29. Todos los CTAs de reserva: target="_blank" rel="noopener noreferrer"
30. Botón "Book Now" del navbar: href="#tours" (scroll suave a la sección de grid)

COLORES ESPECÍFICOS
31. #F5A623 (gold): stat "5★", badge "Más popular", eyebrow Combo, badge precios de cards
32. #1A9E75 (green): CTAs primarios, eyebrow cards Jet Ski, línea acento paso 1 en HowItWorks
33. #0B3D5E (ocean deep): headings, texto fuerte, eyebrow ATV, logo texto, footer, navbar links

SEO
34. Layout.astro:
    <title>Jireh Adventure — Jet Ski & ATV Tours en Guanacaste</title>
    <meta name="description" content="Tours de aventura premium en Guanacaste, Costa Rica. Jet Ski, ATV y Combo en Playa Flamingo, Conchal y Brasilito. Reservá por WhatsApp.">
    <meta property="og:title"> y <meta property="og:description">
    <html lang="en">
```

---

# ═══════════════════════════════════════
# FIN DEL DOCUMENTO
# ═══════════════════════════════════════