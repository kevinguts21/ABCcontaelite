// Componente que muestra los servicios principales al estilo Polar
import { useEffect, useRef } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
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
    <Section id="services" className="relative isolate overflow-hidden">
      {/* Fondo estilo Polar (gris muy suave) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 h-[50rem] w-[50rem] rounded-full opacity-[0.25] blur-3xl [background:radial-gradient(closest-side,rgba(0,0,0,0.08),transparent_80%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(closest-side,black,transparent)]" />
      </div>

      <div className="container relative z-10" ref={containerRef}>
        {/* Título */}
        <Heading
          title="Soluciones hechas para la contabilidad"
          text={
            <>
              En <span className="text-red-500">ABC ContaÉlite</span> potenciamos
              tu crecimiento financiero con asesoría contable personalizada y
              herramientas inteligentes que simplifican tu gestión.
            </>
          }
        />

        {/* Grid de servicios tipo Polar */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="fade-up group relative p-6 rounded-3xl bg-white border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:shadow-red-200/40">
            <h4 className="font-bold text-lg text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
              La contabilidad más eficaz
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              ContaÉlite potencia tu gestión financiera con soluciones avanzadas
              y confiables.
            </p>
            <ul className="text-sm">
              {brainwaveServices.slice(0, 3).map((item, index) => (
                <li
                  key={index}
                  className="flex items-start py-2 border-t border-gray-100"
                >
                  <img width={18} height={18} src={check} />
                  <p className="ml-2 text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="fade-up group relative p-6 rounded-3xl bg-white border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:shadow-red-200/40">
            <h4 className="font-bold text-lg text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
              ¿Por qué confiar en nosotros?
            </h4>
            <p className="text-gray-600 text-sm">
              Una asesoría contable confiable garantiza la correcta gestión de
              tus registros financieros y el cumplimiento puntual de tus
              obligaciones fiscales.
            </p>
          </div>

          {/* Card 3 */}
          <div className="fade-up group relative p-6 rounded-3xl bg-white border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:shadow-red-200/40">
            <h4 className="font-bold text-lg text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
              Visualiza tus finanzas con claridad
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Una contabilidad bien gestionada te permite conocer en todo
              momento el estado real de tu negocio.
            </p>
            <ul className="flex items-center justify-start gap-3 flex-wrap">
              {brainwaveServicesIcons.map((item, index) => (
                <li
                  key={index}
                  className={`rounded-xl flex items-center justify-center ${
                    index === 2
                      ? "w-12 h-12 p-0.5 bg-gradient-to-tr from-red-400 to-red-600"
                      : "w-10 h-10 bg-gray-100"
                  }`}
                >
                  <div
                    className={
                      index === 2
                        ? "flex items-center justify-center w-full h-full bg-white rounded-lg"
                        : ""
                    }
                  >
                    <img src={item} width={22} height={22} alt="icon" />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 4 */}
          <div className="fade-up group relative p-6 rounded-3xl bg-white border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:shadow-red-200/40 lg:col-span-2">
            <h4 className="font-bold text-lg text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
              Optimiza tus impuestos
            </h4>
            <p className="text-gray-600 text-sm">
              Gracias a nuestra asesoría personalizada, puedes identificar
              deducciones clave, optimizar tu carga tributaria y mejorar tu
              flujo de caja sin riesgos legales.
            </p>
          </div>

          {/* Card 5 */}
          <div className="fade-up group relative p-6 rounded-3xl bg-white border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:shadow-red-200/40">
            <h4 className="font-bold text-lg text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
              Equipo siempre disponible
            </h4>
            <p className="text-gray-600 text-sm">
              Nuestro equipo profesional está siempre disponible para resolver
              tus dudas contables y guiarte paso a paso en tu gestión.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
