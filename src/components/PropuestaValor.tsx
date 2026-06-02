import { useI18n } from "../context/I18nContext";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function PropuestaValor() {
  const { t } = useI18n();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="propuesta-valor"
      ref={ref}
      className="relative py-24 md:py-32 bg-white dark:bg-[#0a0d14]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
          <p className="text-[11px] tracking-[0.3em] text-brand font-medium mb-5">
            {t.propuesta.label}
          </p>
          <h2 className="font-serif font-medium text-ink dark:text-white leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl">
            {t.propuesta.title}
          </h2>
          <p className="mt-6 font-serif italic font-bold text-brand text-lg md:text-xl">
            {t.propuesta.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {t.propuesta.values.map((v: any, i: number) => (
            <article
              key={i}
              className="fade-up bg-paper dark:bg-[#11151f] border border-ink-200 dark:border-white/10 p-8 hover:border-brand/60 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-12 w-12 grid place-items-center bg-brand text-white rounded-full mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 ease-out">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {i === 0 && <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />}
                  {i === 1 && <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />}
                  {i === 2 && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
                </svg>
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-ink dark:text-white font-medium mb-3 group-hover:text-brand transition-colors duration-500">
                {v.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-400 group-hover:text-ink-700 dark:group-hover:text-ink-300 transition-colors duration-500">
                {v.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center fade-up" style={{ transitionDelay: "300ms" }}>
          <p className="text-base md:text-[17px] leading-relaxed text-ink-600 dark:text-ink-300 max-w-2xl mx-auto mb-8">
            {t.propuesta.ctaDesc}
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 tracking-[0.25em] text-[11px] font-medium px-6 py-3.5 rounded border border-brand text-brand hover:bg-brand hover:text-white transition-colors"
          >
            {t.propuesta.cta}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
