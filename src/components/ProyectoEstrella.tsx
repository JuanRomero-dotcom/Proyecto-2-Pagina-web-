import { useI18n } from "../context/I18nContext";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ProyectoEstrella() {
  const { lang, t } = useI18n();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="proyecto"
      ref={ref}
      className="relative py-24 md:py-32 bg-paper dark:bg-[#0c1018]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14 fade-up">
          <p className="text-[11px] tracking-[0.3em] text-brand font-medium mb-5">
            {t.proyecto.label}
          </p>
          <h2 className="font-serif font-medium text-ink dark:text-white leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl">
            {t.proyecto.title}
          </h2>
          <p className="mt-4 font-serif italic text-brand text-lg md:text-xl">
            {t.proyecto.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="fade-up">
            <p className="text-base md:text-[17px] leading-relaxed text-ink-600 dark:text-ink-300">
              {t.proyecto.p1}
            </p>

            <ul className="mt-7 space-y-3">
              {t.proyecto.bullets.map((b: string) => (
                <li key={b} className="flex items-start gap-3">
                  <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span className="text-sm md:text-base text-ink-700 dark:text-ink-200">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center tracking-[0.2em] text-[11px] font-medium px-6 py-3.5 bg-brand text-white hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/10 dark:hover:shadow-brand/20 hover:-translate-y-0.5 transition-all duration-300 rounded"
              >
                {t.proyecto.cta2}
                <span className="ml-2 font-serif text-xs">→</span>
              </a>
              <a
                href="/presentacion.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center tracking-[0.2em] text-[11px] font-medium px-6 py-3.5 border border-brand text-brand hover:bg-brand hover:text-white dark:hover:text-[#0c1018] hover:shadow-lg hover:shadow-brand/10 dark:hover:shadow-brand/20 hover:-translate-y-0.5 transition-all duration-300 rounded group/btn"
              >
                {lang === "es" ? "SABER MÁS DE NOSOTROS" : "LEARN MORE ABOUT US"}
                <svg 
                  width="13" 
                  height="13" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                >
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="fade-up" style={{ transitionDelay: "120ms" }}>
            <a
              href="https://vaktorn.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visitar Väktørn Cyber Defence"
              className="group relative block aspect-video bg-white overflow-hidden border border-ink-200 dark:border-white/10 hover:border-brand transition-all duration-500"
            >
              <div className="absolute inset-0 bg-white">
                <img
                  src="/vaktorn-logo.png"
                  alt="Väktørn Cyber Defence Logo"
                  className="h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-4 right-4 h-10 w-10 rounded-full border border-ink-300 dark:border-white/20 bg-ink-900/5 grid place-items-center group-hover:border-brand group-hover:bg-brand transition-all duration-500">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-ink-700 group-hover:text-white transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M7 17L17 7M9 7h8v8"/>
                </svg>
              </div>
            </a>
            <p className="mt-3 text-right tracking-[0.25em] text-[11px] text-ink-700 dark:text-ink-200 font-medium">
              {t.proyecto.videoCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
