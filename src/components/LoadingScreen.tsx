import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [faded, setFaded] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 3000);

    const fadeTimer = setTimeout(() => {
      setFaded(true);
      setTimeout(() => {
        setVisible(false);
      }, 800);
    }, 4200);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      id="splash-screen"
      className={`fixed inset-0 z-[100] bg-white dark:bg-[#0a0d14] flex items-center justify-center transition-opacity duration-800 ${
        faded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Flor de la Vida - 7 círculos superpuestos */}
        <svg width="260" height="260" viewBox="0 0 300 300" className="relative">
          {/* Círculo central */}
          <circle cx="150" cy="150" r="30" fill="none" stroke="#B38B3F" strokeWidth="1.5" className="flower-circle" style={{ animationDelay: "0s" }} />
          {/* Círculo superior */}
          <circle cx="150" cy="120" r="30" fill="none" stroke="#B38B3F" strokeWidth="1.5" className="flower-circle" style={{ animationDelay: "0.2s" }} />
          {/* Círculo superior derecho */}
          <circle cx="175.98" cy="135" r="30" fill="none" stroke="#B38B3F" strokeWidth="1.5" className="flower-circle" style={{ animationDelay: "0.4s" }} />
          {/* Círculo inferior derecho */}
          <circle cx="175.98" cy="165" r="30" fill="none" stroke="#B38B3F" strokeWidth="1.5" className="flower-circle" style={{ animationDelay: "0.6s" }} />
          {/* Círculo inferior */}
          <circle cx="150" cy="180" r="30" fill="none" stroke="#B38B3F" strokeWidth="1.5" className="flower-circle" style={{ animationDelay: "0.8s" }} />
          {/* Círculo inferior izquierdo */}
          <circle cx="124.02" cy="165" r="30" fill="none" stroke="#B38B3F" strokeWidth="1.5" className="flower-circle" style={{ animationDelay: "1.0s" }} />
          {/* Círculo superior izquierdo */}
          <circle cx="124.02" cy="135" r="30" fill="none" stroke="#B38B3F" strokeWidth="1.5" className="flower-circle" style={{ animationDelay: "1.2s" }} />
          {/* Círculo exterior que envuelve toda la flor */}
          <circle cx="150" cy="150" r="60" fill="none" stroke="#B38B3F" strokeWidth="2" className="flower-circle" style={{ animationDelay: "1.5s" }} />
        </svg>

        {/* Nombre y subtítulo */}
        <div
          className={`flex flex-col items-center gap-3 transition-all duration-700 ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-ink dark:text-white font-normal tracking-tight">
            Yamil Amílcar
          </h1>
          <div className="h-px w-32 bg-[#B38B3F]" />
          <div className="flex flex-col items-center gap-1.5">
            <p className="text-base md:text-lg tracking-[0.3em] text-[#B38B3F] font-medium text-center leading-none">
              CYBERSECURITY
            </p>
            <p className="text-xs md:text-sm tracking-[0.25em] text-[#B38B3F] font-medium text-center mt-1">
              ALBEH GLOBAL ENTERPRISES
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .flower-circle {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: drawCircle 3.5s ease-out forwards;
          opacity: 0;
        }

        @keyframes drawCircle {
          0% {
            stroke-dashoffset: 600;
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

