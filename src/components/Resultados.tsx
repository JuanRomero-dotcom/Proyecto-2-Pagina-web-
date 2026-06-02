import { useEffect, useRef, useState } from "react";
import { useI18n } from "../context/I18nContext";
import { useScrollReveal } from "../hooks/useScrollReveal";

function useCountUp(target: number, start: boolean, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return val;
}

export default function Resultados() {
  const { t } = useI18n();
  const ref = useScrollReveal<HTMLElement>();
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!triggerRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStart(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(triggerRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="resultados"
      ref={ref}
      className="relative py-24 md:py-32 bg-white dark:bg-[#0a0d14]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <h2 className="font-serif font-medium text-ink dark:text-white leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl fade-up">
          {t.resultados.title}
        </h2>

        <div ref={triggerRef} className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {t.resultados.stats.map((s: any, i: number) => (
            <Stat key={i} value={s.value} suffix={s.suffix} label={s.label} start={start} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label, start, delay }: { value: number; suffix: string; label: string; start: boolean; delay: number }) {
  const [go, setGo] = useState(false);
  useEffect(() => {
    if (start) {
      const t = setTimeout(() => setGo(true), delay);
      return () => clearTimeout(t);
    }
  }, [start, delay]);
  const v = useCountUp(value, go);
  return (
    <div className="fade-up" style={{ transitionDelay: `${delay}ms` }}>
      <p className="font-serif font-medium text-brand text-6xl md:text-7xl lg:text-8xl leading-none">
        {v}
        <span>{suffix}</span>
      </p>
      <p className="mt-4 text-[10.5px] tracking-[0.25em] text-ink-500 dark:text-ink-400 max-w-[180px] mx-auto">
        {label}
      </p>
    </div>
  );
}
