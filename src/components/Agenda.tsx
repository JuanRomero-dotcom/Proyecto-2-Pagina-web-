import { useI18n } from "../context/I18nContext";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Agenda() {
  const { t, lang } = useI18n();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="agenda"
      ref={ref}
      className="relative py-24 md:py-32 bg-white dark:bg-[#0a0d14]"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="fade-up text-center border border-ink-100 dark:border-white/10 bg-paper dark:bg-[#11151f] p-10 md:p-16 rounded-2xl shadow-xl hover:border-brand/30 transition-all duration-500 flex flex-col items-center">
          {/* Label */}
          <span className="text-[11px] tracking-[0.3em] text-brand font-medium mb-5">
            {t.agenda.label}
          </span>

          {/* Calendar Icon */}
          <div className="mb-6 h-14 w-14 rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center text-brand animate-pulse">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
            </svg>
          </div>

          {/* Title */}
          <h2 className="font-serif font-medium text-ink dark:text-white leading-[1.15] tracking-tight text-3xl md:text-4xl lg:text-[2.75rem] max-w-xl">
            {t.agenda.title}
          </h2>

          {/* Description */}
          <p className="mt-6 text-sm md:text-base leading-relaxed text-ink-600 dark:text-ink-300 max-w-2xl">
            {lang === "es"
              ? "Reuniones de descubrimiento de 45 minutos bajo acuerdo de confidencialidad. Haz clic en el botón inferior para agendar tu sesión de diagnóstico directamente en nuestro Calendario de Google oficial, donde podrás elegir la fecha y hora que mejor se adapte a ti."
              : "45-minute discovery meetings under non-disclosure agreement. Click the button below to schedule your diagnostic session directly on our official Google Calendar, where you can select the date and time that suits you best."}
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="https://calendar.app.google/kPvoFWxzmhijrEKW9"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center tracking-[0.2em] text-[11px] font-medium px-8 py-4 bg-brand text-white hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/10 dark:hover:shadow-brand/20 hover:-translate-y-0.5 transition-all duration-300 rounded group"
            >
              {lang === "es" ? "AGENDAR EN GOOGLE CALENDAR" : "SCHEDULE ON GOOGLE CALENDAR"}
              <svg 
                width="13" 
                height="13" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
          </div>

          {/* Subtext Info */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs text-ink-500 dark:text-ink-400 font-medium tracking-wide">
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {t.agenda.tz}
            </span>
            <span className="hidden sm:inline text-ink-300 dark:text-white/10">|</span>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
                <path d="M23 7a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7z" />
                <path d="M21 5l-9 7-9-7" />
              </svg>
              Google Meet Integration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
