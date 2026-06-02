import { useI18n } from "../context/I18nContext";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function AlbehGlobal() {
  const { t } = useI18n();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="albeh-global"
      ref={ref}
      className="relative py-24 md:py-32 bg-paper dark:bg-[#0c1018]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="fade-up">
            <p className="text-[11px] tracking-[0.3em] text-brand font-medium mb-5">
              {t.albeh.label}
            </p>
            <h2 className="font-serif font-medium text-ink dark:text-white leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl">
              {t.albeh.title}
            </h2>
            <p className="mt-6 font-serif italic text-brand text-lg md:text-xl">
              {t.albeh.subtitle}
            </p>

            <p className="mt-8 text-base md:text-[17px] leading-relaxed text-ink-600 dark:text-ink-300">
              {t.albeh.p1}
            </p>

            <ul className="mt-7 space-y-3">
              {t.albeh.bullets.map((b: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span className="text-sm md:text-base text-ink-700 dark:text-ink-200">{b}</span>
                </li>
              ))}
            </ul>

          </div>

          <div className="fade-up" style={{ transitionDelay: "120ms" }}>
            <a
              href="https://albehge.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visitar Albeh Global"
              className="group relative block aspect-video bg-white overflow-hidden border border-ink-200 dark:border-white/10 hover:border-brand transition-all duration-500"
            >
              <div className="absolute inset-0 bg-white">
                <img
                  src="/albeh-logo.png"
                  alt="Albeh Global Logo"
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
              {t.albeh.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
