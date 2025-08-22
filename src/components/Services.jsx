// Componente que muestra los servicios principales de la app al estilo Polar
// Usa GSAP para animaciones de entrada
import { useEffect, useRef } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoChatMessage,
} from "./design/Services";
import Generating from "./Generating";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll(".fade-up");

    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: i * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <Section id="how-to-use" className="relative isolate overflow-hidden">
      {/* Fondo estilo Polar: spotlight rojo + grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Spotlight rojo, partiendo desde la izquierda */}
        <div className="absolute -top-24 -left-24 h-[55rem] w-[55rem] rounded-full opacity-[0.45] blur-3xl [background:radial-gradient(closest-side,rgba(220,38,38,0.35),transparent_70%)]" />
        {/* Grid sutil sobre el spotlight */}
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(closest-side,black,transparent)]" />
      </div>

      <div className="container relative z-10" ref={containerRef}>
        {/* Título y subtítulo */}
        <Heading
          title="Soluciones hechas para la contabilidad."
          text={
            <>
              En <span className="text-red-500">ABC ContaÉlite</span>{" "}
              potenciamos tu crecimiento financiero con asesoría contable
              personalizada y herramientas inteligentes que simplifican tu
              gestión
            </>
          }
        />

        <div className="relative">
          {/* Primer bloque */}
          <div className="fade-up relative z-1 flex items-center h-[36rem] mb-8 p-8 border border-gray-200 bg-white rounded-3xl shadow-sm overflow-hidden lg:p-16 xl:h-[42rem]">
            <div className="absolute top-0 left-0 w-full h-full hidden md:block md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right opacity-90"
                width={800}
                height={730}
                alt="Smartest AI"
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[20rem] ml-auto">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                La contabilidad más eficaz
              </h4>
              <p className="text-gray-700 mb-6">
                Contaélite potencia tu gestión financiera con soluciones
                avanzadas y confiables
              </p>

              <ul className="text-sm">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-3 border-t border-gray-100"
                  >
                    <img width={20} height={20} src={check} />
                    <p className="ml-3 text-gray-800">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-gray-200 border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          {/* Segundo bloque */}
          <div className="relative z-1 grid gap-6 lg:grid-cols-2">
            <div className="fade-up relative min-h-[36rem] border border-gray-200 rounded-3xl bg-white shadow-sm overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="count"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-transparent via-white/70 to-white">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  ¿Por qué confiar en nosotros?
                </h4>
                <p className="text-gray-700 text-sm">
                  Una asesoría contable confiable garantiza la correcta gestión
                  de tus registros financieros y el cumplimiento puntual de tus
                  obligaciones fiscales, reduciendo riesgos legales.
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            {/* Tercer bloque */}
            <div className="fade-up p-6 bg-white rounded-3xl shadow-sm overflow-hidden lg:min-h-[42rem]">
              <div className="py-10 px-4 xl:px-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Visualiza tus finanzas con claridad
                </h4>
                <p className="text-gray-700 mb-6">
                  Una contabilidad bien gestionada te permite conocer en todo
                  momento el estado real de tu negocio. Facilita decisiones, el
                  control de gastos y la proyección de crecimiento.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-12 h-12 p-0.5 bg-gradient-to-tr from-red-400 to-red-600"
                          : "flex w-10 h-10 bg-gray-100"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-white rounded-xl"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[18rem] bg-gray-100 rounded-xl overflow-hidden md:h-[22rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
