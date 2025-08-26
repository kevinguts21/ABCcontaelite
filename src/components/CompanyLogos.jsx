import { useRef, useEffect } from "react";
import { companyLogos } from "../constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CompanyLogos = ({ className }) => {
  const scrollRef = useRef(null);

  // Repetimos los logos muchas veces para simular "infinito"
  const repeatedLogos = Array(20).fill(companyLogos).flat(); // 20 veces

  // Auto-scroll continuo sin reset
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.5; // Ajusta velocidad aquí (px por frame)
    let animationFrameId;

    const autoScroll = () => {
      scrollContainer.scrollLeft += scrollSpeed;

      // Si llega muy al final, vuelve hacia el centro de la cinta sin que se note
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth - 1
      ) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className={`${className} overflow-hidden relative`}>
      <h4 className="tagline mb-12 text-center font-bold text-black text-xl">
        Empresas que nos avalan
      </h4>

      <div className="relative w-full">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-colors"
          onClick={() => {
            scrollRef.current.scrollLeft -= 200;
          }}
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <div
          ref={scrollRef}
          className="flex whitespace-nowrap overflow-x-scroll scrollbar-hide"
        >
          {repeatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-black font-bold h-[8.5rem] min-w-[10rem] px-6 shrink-0"
            >
              <img src={logo} width={134} height={28} alt={`logo-${index}`} />
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-colors"
          onClick={() => {
            scrollRef.current.scrollLeft += 200;
          }}
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <style>
        {`
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
