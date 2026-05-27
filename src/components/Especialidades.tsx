import { useI18n } from "../context/I18nContext";
import { useScrollReveal } from "../hooks/useScrollReveal";

const ICONS = [
  // 01 Pentest - target
  <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>,
  // 02 Red Team - shield+check
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5z" />
    <path d="m9 12 2 2 4-4" />
  </svg>,
  // 03 OSINT - search globe
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="M11 4a10 10 0 0 1 0 14M11 4a10 10 0 0 0 0 14M4 11h14" />
    <path d="m20 20-3.5-3.5" />
  </svg>,
  // 04 Security Architecture - building/layers
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M5 21V7l8-4 8 4v14" />
    <path d="M8 21v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8" />
  </svg>,
  // 05 SAST/DAST - code brackets
  <svg key="4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
  </svg>,
  // 06 Social Eng - hook+person
  <svg key="5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5.5 21c.8-4 3.5-6 6.5-6s5.7 2 6.5 6" />
    <path d="M12 1v3" />
  </svg>,
];

export default function Especialidades() {
  const { t } = useI18n();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="especialidades"
      ref={ref}
      className="relative py-24 md:py-32 bg-paper dark:bg-[#0c1018]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16 fade-up">
          <div className="lg:col-span-7">
            <p className="text-[11px] tracking-[0.3em] text-brand font-medium mb-5">
              {t.especialidades.label}
            </p>
            <h2 className="font-serif font-medium text-ink dark:text-white leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-[3.75rem]">
              {t.especialidades.title1}
              <br />
              {t.especialidades.title2}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm md:text-base leading-relaxed text-ink-600 dark:text-ink-300">
              {t.especialidades.desc}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {t.especialidades.cards.map((c: any, i: number) => (
            <article
              key={c.tag}
              className="group fade-up relative bg-white dark:bg-[#11151f] border border-ink-200 dark:border-white/10 p-7 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-brand/40 transition-all duration-500 ease-out"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Top bar that fills on hover */}
              <span className="absolute top-0 left-0 h-[2px] w-0 bg-brand group-hover:w-full transition-all duration-700 ease-out" />

              <div className="flex items-start justify-between mb-6">
                <div className="h-12 w-12 grid place-items-center bg-brand text-white shadow-sm group-hover:scale-110 group-hover:rotate-[4deg] transition-transform duration-500 ease-out">
                  {ICONS[i]}
                </div>
                <span className="font-serif text-5xl md:text-6xl font-normal text-brand/35 dark:text-brand/45 leading-none group-hover:text-brand/70 transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="text-[11px] tracking-[0.25em] text-brand font-medium mb-3">
                {c.tag}
              </p>
              <h3 className="font-serif text-2xl md:text-[26px] leading-tight text-ink dark:text-white font-medium group-hover:text-brand transition-colors duration-500">
                {c.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                {c.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
