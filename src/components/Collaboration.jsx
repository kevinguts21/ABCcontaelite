import { useEffect, useRef } from "react";
import { brainwaveSymbol, check } from "../assets";
import { collabApps } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Collaboration = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      rightRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <Section crosses className="relative isolate overflow-hidden">
      {/* Fondo estilo Polar */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Spotlight rojo lado izquierdo */}
        <div className="absolute top-1/2 left-0 h-[45rem] w-[45rem] -translate-y-1/2 -translate-x-1/3 rounded-full opacity-25 blur-3xl [background:radial-gradient(closest-side,rgba(255,64,64,0.35),transparent_70%)]" />
        {/* Grid sutil estilo Polar */}
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)] opacity-60" />
      </div>

      <div className="container lg:flex">
        {/* Columna izquierda */}
        <div ref={leftRef} className="max-w-[25rem] opacity-0">
          <h2 className="h2 mb-4 md:mb-8 text-black">
            Plataforma de Contabilidad perfecta para tu Negocio
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {[
              {
                id: 1,
                title: "Reportes financieros en tiempo real",
                text: "Visualiza balances, ingresos y gastos actualizados desde cualquier dispositivo.",
              },

              {
                id: 2,
                title: "Cumplimiento tributario",
                text: "Asegura la correcta presentación de impuestos y obligaciones fiscales.",
              },
            ].map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5 text-red-500 hover:text-red-600 transition-colors duration-300">
                    {item.title}
                  </h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-gray-700">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          {/* <Button>Solicitar demo gratuita</Button> */}
        </div>

        {/* Columna derecha */}
        <div ref={rightRef} className="lg:ml-auto xl:w-[38rem] mt-4 opacity-0">
          <p className="body-2 mb-8 text-gray-700 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            Controlamos el proceso contable de tu empresa con un reconocido
            campo de aplicaciones de uso específico para cada operación
            contable, desde control de ingresos y gastos, hasta el control de la
            nomina e impuestos, todo en un mismo lugar, optimizando tu tiempo y
            reduciendo errores
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="Logo_abc"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
