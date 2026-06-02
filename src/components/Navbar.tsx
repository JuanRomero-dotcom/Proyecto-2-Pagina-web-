import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useI18n } from "../context/I18nContext";
import Brand from "./Brand";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#especialidades", label: t.nav.especialidades },
    { href: "#trayectoria", label: t.nav.trayectoria },
    { href: "#proyecto", label: t.nav.proyecto },
    { href: "#albeh-global", label: t.nav.albeh },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0a0d14]/95 backdrop-blur border-b border-ink-200/80 dark:border-white/10"
          : "bg-white dark:bg-[#0a0d14]"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0">
          <Brand />
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l: any) => (
            <li key={l.href} className="group relative py-1.5">
              <a
                href={l.href}
                className="tracking-[0.15em] text-[9.5px] font-medium text-ink-700 dark:text-ink-300 hover:text-brand transition-colors whitespace-nowrap block"
              >
                {l.label}
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand group-hover:w-full transition-all duration-300 ease-out" />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center text-[9px] tracking-[0.2em] font-medium">
            <button
              onClick={() => setLang("es")}
              className={`px-1 py-1 transition-all duration-300 hover:scale-110 ${
                lang === "es" ? "text-brand" : "text-ink-400 hover:text-ink-700 dark:hover:text-ink-200"
              }`}
            >
              ES
            </button>
            <span className="text-ink-300 dark:text-ink-600">/</span>
            <button
              onClick={() => setLang("en")}
              className={`px-1 py-1 transition-all duration-300 hover:scale-110 ${
                lang === "en" ? "text-brand" : "text-ink-400 hover:text-ink-700 dark:hover:text-ink-200"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center tracking-[0.2em] text-[11px] font-medium px-5 py-3 rounded border border-brand text-brand hover:bg-brand hover:text-white dark:hover:text-[#0a0d14] hover:shadow-lg hover:shadow-brand/10 dark:hover:shadow-brand/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out"
          >
            {t.nav.cta}
          </a>

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="h-8 w-8 grid place-items-center rounded border border-ink-200 dark:border-white/15 text-ink-600 dark:text-ink-300 hover:border-brand/60 hover:text-brand hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 flex group/theme"
          >
            {theme === "dark" ? (
              <svg className="transition-transform duration-500 group-hover/theme:rotate-[360deg] group-hover/theme:scale-110" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
            ) : (
              <svg className="transition-transform duration-500 group-hover/theme:rotate-[360deg] group-hover/theme:scale-110" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>

          <button
            className="lg:hidden h-8 w-8 grid place-items-center rounded border border-ink-200 dark:border-white/15"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d={open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"}/></svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-ink-200 dark:border-white/10 bg-white dark:bg-[#0a0d14]">
          <ul className="px-6 py-4 flex flex-col gap-3">
            {links.map((l: any) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block tracking-[0.25em] text-[11px] font-medium text-ink-700 dark:text-ink-200 py-1"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
