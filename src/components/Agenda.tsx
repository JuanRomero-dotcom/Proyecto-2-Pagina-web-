import { useMemo, useState } from "react";
import { useI18n } from "../context/I18nContext";
import { useScrollReveal } from "../hooks/useScrollReveal";

const SLOTS = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

function startOfMonth(y: number, m: number) {
  return new Date(y, m, 1);
}
function daysInMonth(y: number, m: number) {
  return new Date(y, m + 1, 0).getDate();
}

export default function Agenda() {
  const { t, lang } = useI18n();
  const ref = useScrollReveal<HTMLElement>();

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [view, setView] = useState(() => ({ y: today.getFullYear(), m: today.getMonth() }));
  const [selected, setSelected] = useState<Date | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState<{ date: Date; slot: string } | null>(null);

  const cells = useMemo(() => {
    const first = startOfMonth(view.y, view.m);
    const lead = (first.getDay() + 6) % 7;
    const total = daysInMonth(view.y, view.m);
    const arr: (Date | null)[] = [];
    for (let i = 0; i < lead; i++) arr.push(null);
    for (let d = 1; d <= total; d++) arr.push(new Date(view.y, view.m, d));
    while (arr.length % 7 !== 0) arr.push(null);
    return arr;
  }, [view]);

  const isAvailable = (d: Date | null) => {
    if (!d) return false;
    if (d < today) return false;
    const dow = d.getDay();
    return dow !== 0 && dow !== 6;
  };

  const sameDay = (a: Date | null, b: Date | null) =>
    !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

  const goPrev = () =>
    setView((v) => ({ y: v.m === 0 ? v.y - 1 : v.y, m: v.m === 0 ? 11 : v.m - 1 }));
  const goNext = () =>
    setView((v) => ({ y: v.m === 11 ? v.y + 1 : v.y, m: v.m === 11 ? 0 : v.m + 1 }));

  const canGoPrev = !(view.y === today.getFullYear() && view.m === today.getMonth());

  const formatLong = (d: Date) =>
    d.toLocaleDateString(lang === "es" ? "es-ES" : "en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <section
      id="agenda"
      ref={ref}
      className="relative py-24 md:py-32 bg-white dark:bg-[#0a0d14]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14 fade-up">
          <p className="text-[11px] tracking-[0.3em] text-brand font-medium mb-5">
            {t.agenda.label}
          </p>
          <h2 className="font-serif font-medium text-ink dark:text-white leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl">
            {t.agenda.title}
          </h2>
          <p className="mt-6 text-base md:text-[17px] leading-relaxed text-ink-600 dark:text-ink-300">
            {t.agenda.desc}
          </p>
        </div>

        {confirmed ? (
          <div className="fade-up max-w-2xl mx-auto border border-brand/40 bg-paper dark:bg-[#11151f] p-8 md:p-10 text-center">
            <p className="tracking-[0.25em] text-[10px] text-brand font-medium">{t.agenda.booked}</p>
            <p className="mt-3 font-serif text-2xl md:text-3xl text-ink dark:text-white">
              {formatLong(confirmed.date)} · {confirmed.slot}
            </p>
            <p className="mt-3 tracking-[0.2em] text-[10px] text-ink-500 dark:text-ink-400">
              {t.agenda.tz}
            </p>
            <button
              onClick={() => {
                setConfirmed(null);
                setSelected(null);
                setSlot(null);
              }}
              className="mt-6 tracking-[0.25em] text-[11px] font-medium px-5 py-2.5 rounded border border-ink-300 dark:border-white/15 hover:border-brand hover:text-brand transition-colors"
            >
              {t.agenda.reset}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 fade-up">
            {/* Calendar */}
            <div className="lg:col-span-7 bg-paper dark:bg-[#11151f] border border-ink-200 dark:border-white/10 p-6">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={goPrev}
                  disabled={!canGoPrev}
                  aria-label={t.agenda.prev}
                  className="h-9 w-9 grid place-items-center rounded border border-ink-200 dark:border-white/15 disabled:opacity-30 disabled:cursor-not-allowed hover:border-brand hover:text-brand transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <h3 className="font-serif text-lg md:text-xl text-ink dark:text-white">
                  {t.agenda.monthLabels[view.m]} {view.y}
                </h3>
                <button
                  onClick={goNext}
                  aria-label={t.agenda.next}
                  className="h-9 w-9 grid place-items-center rounded border border-ink-200 dark:border-white/15 hover:border-brand hover:text-brand transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {t.agenda.weekDays.map((w: string, i: number) => (
                  <div key={i} className="text-center tracking-[0.2em] text-[10px] text-ink-500 dark:text-ink-400 py-2">
                    {w}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {cells.map((d: Date | null, i: number) => {
                  const avail = isAvailable(d);
                  const isSel = sameDay(d, selected);
                  const isToday = sameDay(d, today);
                  return (
                    <button
                      key={i}
                      disabled={!avail}
                      onClick={() => {
                        setSelected(d);
                        setSlot(null);
                      }}
                      className={[
                        "aspect-square rounded text-sm transition-all",
                        !d ? "invisible" : "",
                        avail
                          ? isSel
                            ? "bg-brand text-white"
                            : "text-ink-700 dark:text-ink-200 hover:bg-brand/10 hover:text-brand"
                          : "text-ink-300 dark:text-white/20 cursor-not-allowed",
                        isToday && !isSel ? "ring-1 ring-brand/40" : "",
                      ].join(" ")}
                    >
                      {d ? d.getDate() : ""}
                    </button>
                  );
                })}
              </div>

              <p className="mt-5 tracking-[0.25em] text-[10px] text-ink-500 dark:text-ink-400">
                {t.agenda.tz}
              </p>
            </div>

            <div className="lg:col-span-5 bg-paper dark:bg-[#11151f] border border-ink-200 dark:border-white/10 p-6 flex flex-col">
              <p className="tracking-[0.25em] text-[10px] text-brand font-medium mb-2">
                {t.agenda.slotsTitle}
              </p>
              <p className="font-serif text-lg md:text-xl text-ink dark:text-white min-h-[28px]">
                {selected ? formatLong(selected) : t.agenda.pickDay}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2 flex-1">
                {selected ? (
                  SLOTS.map((s: string) => (
                    <button
                      key={s}
                      onClick={() => setSlot(s)}
                      className={`rounded py-2.5 text-sm tracking-[0.15em] border transition-all ${
                        slot === s
                          ? "border-brand bg-brand text-white"
                          : "border-ink-200 dark:border-white/15 bg-white dark:bg-[#0a0d14] text-ink-700 dark:text-ink-200 hover:border-brand hover:text-brand"
                      }`}
                    >
                      {s}
                    </button>
                  ))
                ) : (
                  <p className="col-span-2 text-sm text-ink-400 self-center text-center py-10">—</p>
                )}
              </div>

              <button
                disabled={!selected || !slot}
                onClick={() => selected && slot && setConfirmed({ date: selected, slot })}
                className="mt-5 w-full tracking-[0.25em] text-[11px] font-medium px-6 py-3.5 rounded border border-brand text-brand hover:bg-brand hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-brand transition-all"
              >
                {t.agenda.confirm}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
