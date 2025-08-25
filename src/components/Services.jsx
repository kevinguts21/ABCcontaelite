// Componente FeaturesSpotlight.jsx
import { useEffect, useRef } from "react";
import {
  Shield,
  Calculator,
  FileText,
  PieChart,
  TrendingUp,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ icon: Icon, title, description, tall, extra }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative p-6 rounded-2xl bg-white shadow-lg border border-transparent hover:border-red-500 transition-all duration-300 flex flex-col ${
        tall ? "h-full justify-center" : ""
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-100 text-red-600">
          <Icon size={26} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>

      {/* Contenido adicional SOLO visible en pantallas grandes */}
      {extra && (
        <div className="hidden lg:block mt-4 space-y-3 text-sm text-gray-600">
          <ul className="list-disc list-inside space-y-2">
            <li>Gráficos dinámicos para seguir tu crecimiento.</li>
            <li>Filtros avanzados para comparar períodos.</li>
            <li>Exporta en PDF o Excel con un clic.</li>
            <li>Dashboard adaptable a tu equipo.</li>
          </ul>
          <p className="mt-3 text-gray-700 font-medium">
            Toda la información en un solo lugar para una toma de decisiones
            más rápida y efectiva.
          </p>
        </div>
      )}
    </div>
  );
};

const FeaturesSpotlight = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const el = spotlightRef.current;
    gsap.fromTo(
      el,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section className="relative bg-[#f3ecec] py-20 overflow-hidden">
      {/* Degradado arriba */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      {/* Degradado abajo */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      {/* Spotlight */}
      <div
        ref={spotlightRef}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-red-200/40 via-white/30 to-transparent rounded-full blur-3xl"
      />

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Gestión Contable Simplificada
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Potenciamos el éxito de tu empresa con herramientas modernas,
            seguras y adaptadas a tus necesidades.
          </p>
        </div>

        {/* Grid de 3 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna izquierda */}
          <div className="flex flex-col gap-6">
            <FeatureCard
              icon={Calculator}
              title="Cálculos Automáticos"
              description="Automatiza tus procesos contables y evita errores en tus balances."
            />
            <FeatureCard
              icon={FileText}
              title="Documentación Clara"
              description="Genera reportes fiscales y contables con un solo clic."
            />
          </div>

          {/* Columna central → Card alta con más contenido en desktop */}
          <div className="flex flex-col">
            <FeatureCard
              tall
              icon={PieChart}
              title="Reportes Visuales"
              description="Analiza tus ingresos, egresos y flujos de caja con gráficos claros e interactivos."
              extra
            />
          </div>

          {/* Columna derecha */}
          <div className="flex flex-col gap-6">
            <FeatureCard
              icon={Shield}
              title="Seguridad Financiera"
              description="Protección avanzada de datos, cifrado seguro y respaldo en la nube para tu tranquilidad."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Optimización Fiscal"
              description="Detecta oportunidades para reducir gastos y aumentar beneficios."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSpotlight;
