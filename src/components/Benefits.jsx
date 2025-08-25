import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current[0].parentNode,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <Section id="features" className="relative isolate overflow-hidden">
      {/* Fondo Polar */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/3 h-[45rem] w-[45rem] -translate-y-1/2 rounded-full opacity-[0.2] blur-3xl [background:radial-gradient(closest-side,rgba(255,64,64,0.25),transparent_75%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(closest-side,black,transparent)]" />
      </div>

      <div className="container relative z-10">
        {/* Título */}
        <Heading
          className="md:max-w-md lg:max-w-2xl font-bold text-black text-center mb-6"
          tag="Beneficios de trabajar con nosotros"
          title="Lleva tu contabilidad más allá con soluciones inteligentes"
        />

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Columna izquierda con 4 cards pequeñas */}
          <div className="grid grid-cols-2 gap-6">
            {benefits.slice(0, 4).map((item, i) => (
              <div
                key={item.id}
                ref={(el) => (cardsRef.current[i] = el)}
                className="relative review-card bg-white p-6 rounded-3xl shadow-sm border border-gray-200 transition-all duration-500 hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-1"
              >
                {/* Ícono */}
                <div className="mb-4">
                  <img
                    src={item.iconUrl}
                    width={42}
                    height={42}
                    alt={item.title}
                    className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>

                {/* Texto */}
                <h5 className="font-semibold text-black mb-2">{item.title}</h5>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Columna derecha con 2 cards grandes */}
          <div className="grid grid-rows-2 gap-6">
            {benefits.slice(4, 6).map((item, i) => (
              <div
                key={item.id}
                ref={(el) => (cardsRef.current[i + 4] = el)}
                className="relative review-card bg-white p-8 rounded-3xl shadow-sm border border-gray-200 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/30 hover:-translate-y-1"
              >
                {/* Etiquetas extra en hover */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="px-3 py-1 text-xs rounded-full bg-red-50 text-red-600 border border-red-200">
                    Optimizado
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-red-50 text-red-600 border border-red-200">
                    Seguro
                  </span>
                </div>

                {/* Icono */}
                <div className="mb-5">
                  <img
                    src={item.iconUrl}
                    width={52}
                    height={52}
                    alt={item.title}
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>

                {/* Texto */}
                <h5 className="text-lg font-bold text-black mb-3">
                  {item.title}
                </h5>
                <p className="text-base text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
