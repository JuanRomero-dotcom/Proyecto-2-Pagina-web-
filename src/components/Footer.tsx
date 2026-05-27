import { useI18n } from "../context/I18nContext";
import Brand from "./Brand";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-paper dark:bg-[#0a0d14] border-t border-brand/20 pt-20 pb-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Brand />
            <p className="mt-5 text-sm leading-relaxed text-ink-500 dark:text-ink-400 max-w-[220px]">
              {t.footer.tagline}
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://vaktorn.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Väktørn website"
                className="h-10 w-10 grid place-items-center rounded-full border border-brand/30 text-brand hover:bg-brand hover:text-white transition-all duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>
                </svg>
              </a>
              <a
                href="mailto:support@vaktorn.com"
                aria-label="Email"
                className="h-10 w-10 grid place-items-center rounded-full border border-brand/30 text-brand hover:bg-brand hover:text-white transition-all duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="tracking-[0.25em] text-[11px] font-medium text-brand mb-4">
              {t.footer.colSpec}
            </p>
            <ul className="space-y-2.5">
              {t.footer.links.spec.map((l: string) => (
                <li key={l}>
                  <a href="#especialidades" className="text-sm text-ink-600 dark:text-ink-400 hover:text-brand transition-colors relative group">
                    {l}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-brand group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="tracking-[0.25em] text-[11px] font-medium text-brand mb-4">
              {t.footer.colAbout}
            </p>
            <ul className="space-y-2.5">
              {t.footer.links.about.map((l: string, i: number) => {
                const hrefs = ["#trayectoria", "#resultados", "#proyecto", "#albeh-global"];
                return (
                  <li key={l}>
                    <a href={hrefs[i] ?? "#trayectoria"} className="text-sm text-ink-600 dark:text-ink-400 hover:text-brand transition-colors relative group">
                      {l}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-brand group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="tracking-[0.25em] text-[11px] font-medium text-brand mb-4">
              {t.footer.colContact}
            </p>
            <ul className="space-y-2.5">
              {t.footer.links.contact.map((l: string) => (
                <li key={l} className="text-sm text-ink-600 dark:text-ink-400">
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-ink-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-[12px] text-ink-500 dark:text-ink-500">
            © {year} Yamil Amílcar · {t.footer.rights}
          </p>
          <div className="flex items-center gap-5 text-[12px] text-ink-500 dark:text-ink-500">
            <a
              href="mailto:support@vaktorn.com?subject=Pol%C3%ADtica%20de%20Privacidad"
              className="hover:text-brand transition-colors relative group"
            >
              {t.footer.privacy}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-brand group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="mailto:support@vaktorn.com?subject=T%C3%A9rminos%20de%20Servicio"
              className="hover:text-brand transition-colors relative group"
            >
              {t.footer.terms}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-brand group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
