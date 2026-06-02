import { useI18n } from "../context/I18nContext";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Consultores() {
  const { t } = useI18n();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="consultores"
      ref={ref}
      className="relative py-20 md:py-24 bg-paper dark:bg-[#0c1018] border-t border-ink-100 dark:border-white/5"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="font-serif font-medium text-ink dark:text-white leading-[1.1] tracking-tight text-3xl md:text-4xl lg:text-5xl max-w-2xl mx-auto fade-up">
          {t.consultores.title}
        </h2>

        {/* CTA Button */}
        <div className="mt-8 fade-up" style={{ transitionDelay: "100ms" }}>
          <a
            href="https://albehge.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center tracking-[0.2em] text-[11px] font-medium px-6 py-3.5 border border-brand text-brand hover:bg-brand hover:text-white dark:hover:text-[#0c1018] hover:shadow-lg hover:shadow-brand/10 dark:hover:shadow-brand/20 hover:-translate-y-0.5 transition-all duration-300 rounded group"
          >
            {t.consultores.btn}
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>

        {/* CV Submission Info */}
        <div className="mt-10 fade-up flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-ink-600 dark:text-ink-300" style={{ transitionDelay: "200ms" }}>
          <span>{t.consultores.emailText}</span>
          <a
            href={`mailto:${t.consultores.email}`}
            className="font-medium text-brand hover:text-brand-dark hover:underline transition-colors tracking-wide"
          >
            {t.consultores.email}
          </a>
        </div>
      </div>
    </section>
  );
}
