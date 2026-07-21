# Portafolio · Kevin Vanegas

Portafolio profesional construido con **React + Vite + Tailwind CSS v4**, basado en el diseño de referencia (tema oscuro, ciberseguridad / desarrollo).

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Build de producción

```bash
npm run build
npm run preview
```

Los archivos listos para publicar quedan en `dist/`.

## Estructura

```
src/
  components/     # Sidebar, Hero, About, Skills, Projects, ExperienceCerts, Contact, BrandIcons
  data/
    content.js    # Todo el texto (nombre, bio, proyectos, experiencia, certificaciones)
  index.css       # Tema, colores y tipografías (Tailwind v4, sin config.js aparte)
```

## Editar contenido

Todo el texto vive en **`src/data/content.js`** — no necesitas tocar los componentes para actualizar tu bio, proyectos, experiencia o certificaciones.

## Pendientes para dejarlo 100% listo

- Agrega tu CV en `public/cv-kevin-vanegas.pdf` (el botón "Descargar CV" ya apunta ahí).
- Enlaza los proyectos reales cambiando los `href="#proyectos"` en `Projects.jsx` por las URLs de tus repos o demos en vivo.
- Si quieres desplegarlo gratis: Vercel, Netlify o GitHub Pages funcionan directo con este proyecto Vite.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`, sin `tailwind.config.js` — el tema vive en `src/index.css`)
- lucide-react para iconografía
