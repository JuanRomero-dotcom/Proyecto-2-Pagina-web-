import { useI18n } from "../context/I18nContext";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Hero() {
  const { t } = useI18n();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative pt-24 md:pt-32 pb-20 md:pb-28 bg-white dark:bg-[#0a0d14] overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        <div className="lg:col-span-7 fade-up">
          <p className="text-[11px] tracking-[0.35em] text-brand font-medium mb-8 uppercase">
            {t.hero.label}
          </p>
          <h1 className="font-serif font-normal text-ink dark:text-white leading-[1.02] tracking-tight text-5xl sm:text-6xl md:text-[4.5rem] lg:text-[4.75rem] xl:text-[5.25rem]">
            {t.hero.title1}
            <br />
            <span className="italic text-brand">{t.hero.title2}</span>
          </h1>

          <div className="h-px w-16 bg-brand my-10" />

          <p className="text-base md:text-[17px] leading-[1.7] text-ink-700 dark:text-ink-200 max-w-xl font-normal">
            {t.hero.desc}
          </p>

          <div className="mt-6 inline-block bg-brand/5 dark:bg-brand/10 px-5 py-3 border-l-4 border-brand">
            <p className="text-base md:text-lg tracking-[0.25em] text-ink-900 dark:text-brand italic font-serif font-bold">
              — Vision Statement
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#proyecto"
              className="inline-flex items-center tracking-[0.3em] text-[11px] font-medium px-7 py-4 border border-brand text-brand hover:bg-brand hover:text-white transition-all duration-500 ease-out"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#trayectoria"
              className="inline-flex items-center gap-2 tracking-[0.3em] text-[11px] font-medium px-6 py-4 text-ink-700 dark:text-ink-200 hover:text-brand transition-colors duration-500"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 21c.8-4 3.7-6 7-6s6.2 2 7 6" />
              </svg>
              {t.hero.cta2}
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 fade-up flex justify-center lg:justify-end" style={{ transitionDelay: "180ms" }}>
          <div className="relative w-full max-w-[380px]">
            <div className="absolute -top-4 -right-4 h-12 w-12 border-t border-r border-brand/50" />
            <div className="absolute -bottom-4 -left-4 h-12 w-12 border-b border-l border-brand/50" />

            <div className="group relative aspect-[4/5] overflow-hidden bg-transparent cursor-pointer">
              <img
                src="/yamil.1.png"
                alt="Yamil Amílcar"
                className="absolute inset-0 w-full h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-105"
                style={{
                  transition: "filter 2200ms cubic-bezier(0.22,1,0.36,1), transform 2200ms cubic-bezier(0.22,1,0.36,1)",
                }}
              />
            </div>

            <div className="absolute -bottom-6 right-3 md:-right-6 bg-white dark:bg-[#11151f] border border-ink-200 dark:border-white/10 shadow-xl px-6 py-4 max-w-[220px]">
              <p className="text-[10px] tracking-[0.3em] font-medium uppercase">
                <span className="text-brand dark:text-brand">{t.hero.badgeLabel1}</span>
                <span className="text-ink-900 dark:text-white">{t.hero.badgeLabel2}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
