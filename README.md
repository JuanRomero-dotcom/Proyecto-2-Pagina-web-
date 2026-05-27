# Yamil Amilear — Väktørn Cyber Defence

Sitio personal de Yamil Amilear, Director en Ciberseguridad de Väktørn Cyber Defence.

## Stack

- **React 18 + TypeScript**
- **Vite** como bundler
- **Tailwind CSS v4** (`@import "tailwindcss"` + `@theme` para tokens)
- **Inter** + **JetBrains Mono** desde Google Fonts

## Funcionalidades

- Hero con avatar generado en CSS (iniciales `YA`)
- Sobre mí · stats · certificaciones (OSCP, CISSP, CEH, OSSTMM, etc.)
- 5 especialidades en ciberseguridad ofensiva/defensiva
- Metodología en 4 fases (Recon → Explotación → Post-explotación → Reporte)
- **Propuesta de valor** (4 pilares) — vende imagen y diferencial
- **Albeth Global** — alianza estratégica e importancia dentro de la empresa
- **Calendario de reservas** funcional (selector de día + horario, confirmación)
- **Selector de idioma** ES / EN (persistencia en `localStorage`)
- Dark mode manual con persistencia (`vaktorn-theme`)
- Animaciones con `IntersectionObserver` (`useScrollReveal`)

## Scripts

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Estructura

```
src/
├── App.tsx
├── main.tsx
├── index.css                 # Tailwind v4 + tokens (@theme)
├── context/
│   ├── ThemeContext.tsx      # dark mode
│   └── I18nContext.tsx       # idioma ES/EN
├── hooks/
│   └── useScrollReveal.ts
├── i18n/
│   └── translations.ts       # diccionario ES + EN
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Specialties.tsx
    ├── Methodology.tsx
    ├── ValueProposition.tsx
    ├── AlbethGlobal.tsx
    ├── BookingCalendar.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## Persona

| Campo  | Valor                            |
| ------ | -------------------------------- |
| Nombre | Yamil Amilear                    |
| Cargo  | Director en Ciberseguridad       |
| Empresa| Väktørn Cyber Defence            |
| Web    | http://www.vaktorn.com           |
| Email  | support@vaktorn.com              |
| Sedes  | Dubai, UAE · Mexico City         |
