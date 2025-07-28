import { useRef, useState, useEffect } from "react";
import { companyLogos } from "../constants";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Puedes usar cualquier ícono o SVG

const CompanyLogos = ({ className }) => {
  const scrollRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Pausar animación automática al usar flechas
  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    setIsAutoScrolling(false);

    const scrollAmount = direction === "left" ? -200 : 200;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

    // Reanudar animación luego de un tiempo
    clearTimeout(scrollRef.current.resumeTimeout);
    scrollRef.current.resumeTimeout = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 6000);
  };

  // Clona los logos para efecto de loop (solo para animación)
  const duplicatedLogos = [...companyLogos, ...companyLogos];

  return (
    <div className={`${className} overflow-hidden relative`}>
      {/* Texto introductorio */}
      <h5 className="tagline mb-6 text-center font-bold text-black text-xl">
        Empresas que nos avalan
      </h5>

      {/* Carrusel con navegación */}
      <div className="relative w-full">
        {/* Flecha izquierda */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-colors"
          onClick={() => handleScroll("left")}
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Logos desplazables */}
        <div
          ref={scrollRef}
          className={`flex whitespace-nowrap overflow-x-scroll scrollbar-hide transition-all duration-700 ${isAutoScrolling ? "animate-scroll" : ""}`}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-black font-bold h-[8.5rem] min-w-[10rem] px-6"
            >
              <img src={logo} width={134} height={28} alt={`logo-${index}`} />
            </div>
          ))}
        </div>

        {/* Flecha derecha */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-colors"
          onClick={() => handleScroll("right")}
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Estilos personalizados */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }

          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
};

export default CompanyLogos;
