// Hero.jsx estilo "Polar" (Tailwind), sin cajas/gradientes inferiores ni crosses
import { useRef } from "react";
import { curve, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      id="hero"
      customPaddings
      className="relative isolate min-h-[92vh] flex items-center bg-white"
    >
      {/* Fondo tipo Polar: spotlight + grid sutil */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Spotlight radial */}
        <div className="absolute -top-24 -left-24 h-[55rem] w-[55rem] rounded-full opacity-[0.35] blur-3xl [background:radial-gradient(closest-side,rgba(239,68,68,0.25),transparent_70%)]" />
        {/* Grid de puntos/líneas sutil */}
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(closest-side,black,transparent)]" />
      </div>

      <div className="container relative" ref={parallaxRef}>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Columna izquierda */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200/60 bg-red-50 px-3 py-1 text-xs font-medium text-red-700">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              Nuevo: artículos y recursos contables
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              Explora las Posibilidades de Contabilidad con
              <span className="relative inline-block pl-2">
                <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent">
                  {" "}
                  ABC CONTAÉLITE
                </span>
                <img
                  src={curve}
                  alt="decor"
                  width={624}
                  height={28}
                  className="pointer-events-none absolute top-full left-0 hidden w-full xl:block"
                />
              </span>
            </h1>

            <p className="mt-5 text-base text-gray-600 sm:text-lg">
              Optimice la eficiencia y exactitud contable con soluciones
              integrales. Descubra tendencias, consejos prácticos y estrategias
              financieras.
            </p>

            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                href="#pricing"
                className="bg-red-600 text-white shadow-lg shadow-red-600/20 hover:bg-red-700"
              >
                Empezar ahora
              </Button>
              <Button
                href="#services"
                variant="secondary"
                className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              >
                Ver servicios
              </Button>
            </div>

            {/* Stats/Confianza */}
            <dl className="mt-8 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <dt className="text-xs text-gray-500">Exactitud</dt>
                <dd className="text-xl font-semibold text-gray-900">99.9%</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Clientes</dt>
                <dd className="text-xl font-semibold text-gray-900">+1,200</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Ahorro fiscal</dt>
                <dd className="text-xl font-semibold text-gray-900">
                  hasta 30%
                </dd>
              </div>
            </dl>
          </div>

          {/* Columna derecha: imagen moderada tipo Polar */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-black/10 shadow-xl">
                <img
                  src={robot}
                  alt="AI"
                  width={1200}
                  height={900}
                  className="h-[42vh] w-full object-contain bg-white md:h-[56vh] lg:h-[64vh]"
                />
                {/* Brillo superior */}
                <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full opacity-40 blur-2xl [background:radial-gradient(closest-side,rgba(239,68,68,0.35),transparent)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
