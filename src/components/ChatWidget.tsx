import { useState, useEffect, useRef } from "react";
import { useI18n } from "../context/I18nContext";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
}

export default function ChatWidget() {
  const { lang } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isAppReady, setIsAppReady] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppReady(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const tChat = {
    es: {
      botName: "YAMIL AI",
      botSub: "ASISTENTE DE CIBERSEGURIDAD",
      greeting: "Hola. Soy Yamil AI, tu asistente virtual de ciberseguridad ofensiva. Selecciona una opción o escribe una pregunta para ayudarte.",
      placeholder: "Escribe un mensaje...",
      options: [
        { label: "Saber de Albeh Global", value: "albeh" },
        { label: "Servicios de Pentesting", value: "pentesting" },
        { label: "Väktørn Cyber Defence", value: "vaktorn" },
        { label: "Agendar una Evaluación", value: "contacto" },
      ],
      responses: {
        albeh: "Albeh Global es una firma líder internacional de servicios estratégicos, consultoría y tecnología, con presencia y operaciones en Dubái, Ciudad de México, Europa y LATAM. Yamil Amílcar mantiene una alianza estratégica clave con Albeh Global para brindar soluciones de ciberseguridad ofensiva y defensa digital al más alto nivel corporativo y gubernamental. ¿Te gustaría saber más sobre los servicios conjuntos o agendar una consulta?",
        pentesting: "Yamil Amílcar, como Director de Ciberseguridad Ofensiva, lidera pruebas de penetración (Pentesting) de nivel militar, auditorías de seguridad, simulaciones de adversarios (Red Teaming) y análisis de vulnerabilidades bajo los estándares internacionales más estrictos (OSSTMM, NIST, OWASP). ¿Deseas coordinar una evaluación de seguridad para tu organización?",
        vaktorn: "Väktørn Cyber Defence es la práctica especializada en seguridad ofensiva liderada por Yamil Amílcar desde 2024. Diseñada para proteger activos críticos en sectores de alta exigencia (banca, energía, gobierno y sector privado), Väktørn anticipa las amenazas tácticas para neutralizarlas antes de que afecten el valor de tu negocio. Puedes descargar nuestra presentación en la sección 'Proyecto Estrella' o visitar vaktorn.com.",
        contacto: "¡Excelente decisión! Puedes agendar una sesión de diagnóstico directamente en nuestro Calendario de Google oficial en el siguiente enlace: https://calendar.app.google/kPvoFWxzmhijrEKW9 o utilizar la sección de agenda interactiva en esta misma web. Si lo prefieres, puedes indicarme tu correo o teléfono por aquí y un asesor te contactará.",
        default: "Gracias por tu mensaje. Para darte la mejor atención personalizada sobre ciberseguridad ofensiva o los servicios de Albeh Global, te sugiero utilizar el botón de 'Colaboremos' en el menú de navegación, agendar en nuestra agenda interactiva o ir directamente a nuestro Calendario de Google oficial: https://calendar.app.google/kPvoFWxzmhijrEKW9. Si lo deseas, déjame tu correo electrónico o teléfono aquí y un asesor de Albeh Global te contactará de inmediato.",
        hello: "¡Hola! Es un placer saludarte. Soy Yamil AI, tu asistente virtual. ¿En qué puedo ayudarte hoy? Puedes elegir una de las opciones sugeridas o escribir tu consulta."
      }
    },
    en: {
      botName: "YAMIL AI",
      botSub: "CYBERSECURITY ASSISTANT",
      greeting: "Hello. I am Yamil AI, your virtual offensive cybersecurity assistant. Select an option or type a question to get started.",
      placeholder: "Type a message...",
      options: [
        { label: "About Albeh Global", value: "albeh" },
        { label: "Pentesting Services", value: "pentesting" },
        { label: "Väktørn Cyber Defence", value: "vaktorn" },
        { label: "Schedule Assessment", value: "contacto" },
      ],
      responses: {
        albeh: "Albeh Global is a premier international firm specializing in strategic services, consulting, and technology, with global operations across Dubai, Mexico City, Europe, and LATAM. Yamil Amílcar maintains a close strategic alliance with Albeh Global to deliver elite-level offensive cybersecurity and digital defense to enterprise and government clients. Would you like to explore our joint services or schedule a briefing?",
        pentesting: "As the Director of Offensive Cybersecurity, Yamil Amílcar leads military-grade penetration testing (Pentesting), security audits, adversary simulations (Red Teaming), and vulnerability assessments. Our operations comply with strict global standards (OSSTMM, NIST, OWASP). Would you like to schedule an assessment for your systems?",
        vaktorn: "Väktørn Cyber Defence is our specialized offensive security unit led by Yamil Amílcar since 2024. Tailored for mission-critical sectors (banking, energy, government, and private enterprises), Väktørn anticipates and neutralizes digital threats before they can impact your organization. You can download our presentation in the 'Flagship Project' section or visit vaktorn.com.",
        contacto: "Great! You can schedule a direct diagnostic session on our official Google Calendar page: https://calendar.app.google/kPvoFWxzmhijrEKW9 or use the interactive calendar section below. Alternatively, feel free to leave your email or phone number here, and our Albeh Global team will reach out to you shortly.",
        default: "Thank you for your message. To provide you with the best personalized assistance regarding offensive cybersecurity or Albeh Global services, I suggest using the 'Work with me' button in the navigation menu, booking on our interactive calendar, or directly visiting our official Google Calendar: https://calendar.app.google/kPvoFWxzmhijrEKW9. Alternatively, leave your email or phone number here, and an Albeh expert will contact you shortly.",
        hello: "Hello! Great to meet you. I am Yamil AI, your virtual assistant. How can I help you today? You can select any of the suggested options or type your inquiry."
      }
    }
  };

  const text = tChat[lang === "es" ? "es" : "en"];

  // Initialize chat messages
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          sender: "bot",
          text: text.greeting,
          timestamp: new Date(),
        },
      ]);
    }
  }, [lang]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleOptionClick = (value: string, label: string) => {
    // Add user message
    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: label,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);

    // Trigger bot typing
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = text.responses[value as keyof typeof text.responses] || text.responses.default;
      const botMsg: Message = {
        id: Math.random().toString(),
        sender: "bot",
        text: botResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    setInputValue("");

    // Add user message
    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: userText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);

    // Trigger typing
    setIsTyping(true);

    setTimeout(() => {
      // Simple NLP matcher
      const query = userText.toLowerCase();
      let responseKey: keyof typeof text.responses = "default";

      if (query.includes("albeh") || query.includes("consorcio") || query.includes("grupo") || query.includes("alliance") || query.includes("alianza")) {
        responseKey = "albeh";
      } else if (query.includes("vaktorn") || query.includes("vaktørn") || query.includes("defence") || query.includes("proyecto") || query.includes("estrella")) {
        responseKey = "vaktorn";
      } else if (query.includes("pentest") || query.includes("hack") || query.includes("seguridad") || query.includes("ofensiva") || query.includes("servicio") || query.includes("auditoria") || query.includes("audit") || query.includes("security")) {
        responseKey = "pentesting";
      } else if (query.includes("cita") || query.includes("agendar") || query.includes("contacto") || query.includes("correo") || query.includes("telefono") || query.includes("email") || query.includes("phone") || query.includes("schedule")) {
        responseKey = "contacto";
      } else if (query.includes("hola") || query.includes("buen") || query.includes("hello") || query.includes("hi") || query.includes("hey")) {
        responseKey = "hello";
      }

      const botMsg: Message = {
        id: Math.random().toString(),
        sender: "bot",
        text: text.responses[responseKey],
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome",
        sender: "bot",
        text: text.greeting,
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-[100] font-sans transition-all duration-700 ease-out ${
      isAppReady ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-75 translate-y-4 pointer-events-none"
    }`}>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`h-14 w-14 rounded-full bg-brand text-white shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 relative border border-brand/20 ${
          isOpen ? "rotate-[360deg] bg-ink dark:bg-[#0c1018]" : ""
        }`}
        aria-label="Yamil AI Chat Assistant"
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <div className="relative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-brand animate-pulse" />
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-18 right-0 w-[92vw] sm:w-[380px] h-[500px] max-h-[75vh] bg-white dark:bg-[#0c1018] rounded-2xl shadow-2xl border border-ink-100 dark:border-white/10 flex flex-col overflow-hidden animate-fade-in transition-all duration-300 transform translate-y-0">
          {/* Header */}
          <div className="bg-ink dark:bg-[#070a0e] px-4 py-3.5 border-b border-ink-900/50 dark:border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-9 w-9 rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center text-brand">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M12 2v3M8 5h8M12 11V8M12 11v3" />
                  </svg>
                </div>
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-ink dark:border-[#070a0e]" />
              </div>
              <div className="text-left">
                <h3 className="text-xs font-bold text-brand uppercase tracking-wider leading-none">
                  {text.botName}
                </h3>
                <p className="text-[9px] text-ink-300 dark:text-ink-400 font-medium tracking-[0.1em] mt-1 leading-none">
                  {text.botSub}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleResetChat}
                className="h-7 w-7 rounded flex items-center justify-center text-ink-400 hover:text-brand hover:bg-white/5 transition-colors"
                title="Reset conversation"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="h-7 w-7 rounded flex items-center justify-center text-ink-400 hover:text-red-400 hover:bg-white/5 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#f8f9fa] dark:bg-[#070a0e]/40 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-xs md:text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-brand text-white rounded-tr-none"
                      : "bg-white dark:bg-[#11151f] text-ink dark:text-ink-100 rounded-tl-none border border-ink-100 dark:border-white/5 shadow-sm"
                  }`}
                >
                  <p className="whitespace-pre-line text-left">{msg.text}</p>
                </div>
                <span className="text-[9px] text-ink-400 dark:text-ink-500 mt-1 px-1">
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex flex-col items-start">
                <div className="bg-white dark:bg-[#11151f] px-4 py-3 rounded-2xl rounded-tl-none border border-ink-100 dark:border-white/5 flex gap-1.5 items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="h-1.5 w-1.5 rounded-full bg-brand animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="h-1.5 w-1.5 rounded-full bg-brand animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Options Area (Only visible when chat has been initialized or last msg is bot) */}
          {messages.length > 0 && messages[messages.length - 1].sender === "bot" && !isTyping && (
            <div className="px-4 py-2 border-t border-ink-100 dark:border-white/5 bg-white dark:bg-[#0c1018] flex flex-wrap gap-2 justify-start max-h-[110px] overflow-y-auto">
              {text.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleOptionClick(opt.value, opt.label)}
                  className="text-[11px] font-medium text-ink-600 dark:text-ink-300 hover:text-brand hover:border-brand/50 border border-ink-200 dark:border-white/10 px-3 py-1.5 rounded-full transition-all duration-300 bg-[#f8f9fa] dark:bg-[#11151f] hover:bg-brand/5 dark:hover:bg-brand/10 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}

          {/* Footer Input Form */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-white dark:bg-[#070a0e] border-t border-ink-100 dark:border-white/5 flex gap-2 items-center"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={text.placeholder}
              className="flex-1 bg-[#f1f3f5] dark:bg-[#11151f] border border-transparent focus:border-brand/40 text-xs md:text-sm text-ink dark:text-white rounded-full px-4 py-2.5 focus:outline-none transition-all"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="h-9 w-9 rounded-full bg-brand text-white flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-40 disabled:hover:scale-100 disabled:active:scale-100 transition-all cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-45 -translate-x-0.5 translate-y-0.5">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
