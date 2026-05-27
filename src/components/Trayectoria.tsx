import { useI18n } from "../context/I18nContext";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Trayectoria() {
  const { t } = useI18n();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="trayectoria"
      ref={ref}
      className="relative py-24 md:py-32 bg-paper dark:bg-[#0c1018]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl mb-20 fade-up">
          <p className="text-[11px] tracking-[0.3em] text-brand font-medium mb-5">
            {t.trayectoria.label}
          </p>
          <h2 className="font-serif font-medium text-ink dark:text-white leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-[3.75rem]">
            {t.trayectoria.title1}
            <br />
            {t.trayectoria.title2}
          </h2>
          <p className="mt-7 text-base md:text-[17px] leading-relaxed text-ink-600 dark:text-ink-300 max-w-2xl">
            {t.trayectoria.desc}
          </p>

          <a
            href="https://vaktorn.com"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-7 inline-flex items-center gap-2 text-brand hover:text-brand-dark transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5 21c.8-4 3.7-6 7-6s6.2 2 7 6" />
            </svg>
            <span className="tracking-[0.25em] text-[11px] font-medium">
              {t.trayectoria.profileLabel} · {t.trayectoria.profileLink}
            </span>
          </a>
        </div>

        <ol className="space-y-16 md:space-y-20 max-w-4xl">
          {t.trayectoria.entries.map((e: any, i: number) => (
            <li
              key={e.n}
              className="fade-up relative grid grid-cols-[40px_120px_1fr] md:grid-cols-[40px_180px_1fr] gap-4 md:gap-8 items-start"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="mt-3 h-3 w-3 rounded-full border border-brand/60" />
              <span className="font-serif font-normal leading-none text-6xl md:text-7xl text-brand/60 dark:text-brand/70">
                {e.n}
              </span>
              <div>
                <h3 className="font-serif text-xl md:text-2xl leading-tight text-ink dark:text-white font-medium">
                  {e.title}
                </h3>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-ink-600 dark:text-ink-400 max-w-xl">
                  {e.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
