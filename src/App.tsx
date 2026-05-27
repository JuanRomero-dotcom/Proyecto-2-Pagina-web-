import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import Especialidades from "./components/Especialidades";
import Trayectoria from "./components/Trayectoria";
import Resultados from "./components/Resultados";
import ProyectoEstrella from "./components/ProyectoEstrella";
import AlbehGlobal from "./components/AlbehGlobal";
import PropuestaValor from "./components/PropuestaValor";
import Agenda from "./components/Agenda";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import { useCleanNavigation } from "./hooks/useCleanNavigation";

export default function App() {
  useCleanNavigation();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0d14] text-ink dark:text-ink-100">
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <Especialidades />
        <Trayectoria />
        <Resultados />
        <ProyectoEstrella />
        <AlbehGlobal />
        <PropuestaValor />
        <Agenda />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
