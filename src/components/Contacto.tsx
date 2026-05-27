import { useI18n } from "../context/I18nContext";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contacto() {
  const { t } = useI18n();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative pt-24 md:pt-32 pb-16 md:pb-20 bg-white dark:bg-[#0a0d14]"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-[11px] tracking-[0.3em] text-brand font-medium mb-5 fade-up">
          {t.contacto.label}
        </p>
        <h2 className="font-serif font-medium text-ink dark:text-white leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl fade-up">
          {t.contacto.title}
        </h2>
        <p className="mt-7 text-base md:text-[17px] leading-relaxed text-ink-600 dark:text-ink-300 max-w-xl mx-auto fade-up">
          {t.contacto.desc}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 fade-up">
          <a
            href="https://vaktorn.com"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 tracking-[0.25em] text-[11px] font-medium px-6 py-3.5 rounded border border-brand text-brand hover:bg-brand hover:text-white transition-colors"
          >
            {t.contacto.cta1}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
          </a>
          <a
            href="mailto:support@vaktorn.com"
            className="inline-flex items-center tracking-[0.25em] text-[11px] font-medium px-6 py-3.5 rounded border border-brand text-brand hover:bg-brand hover:text-white transition-colors"
          >
            {t.contacto.cta2}
          </a>
        </div>

        <p className="mt-6 text-sm text-ink-500 dark:text-ink-400 fade-up">
          {t.contacto.response}
        </p>

        <p className="mt-16 font-serif text-2xl md:text-3xl tracking-[0.3em] text-brand dark:text-brand fade-up">
          {t.contacto.watermark}
        </p>
      </div>
    </section>
  );
}
