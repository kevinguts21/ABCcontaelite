// Componente principal de la landing page (Hero)
// Muestra título, descripción, botón, imagen principal, animaciones y logos
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        {/* Fondo blanco para todo el hero en mobile */}
        <div className="absolute inset-0 bg-white -z-10 md:bg-transparent rounded-none"></div>
        {/* Título, descripción y botón principal */}
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 text-black font-bold ">
            Explora las Posibilidades de&nbsp;Contabilidad con {` `}
            <span className="inline-block relative bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent font-bold">
              ABC CONTAÉLITE{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-black font-bold lg:mb-8">
            "Optimice la eficiencia y exactitud contable con ABC CONTAÉLITE,
            referente en soluciones económicas integrales."
          </p>
          <Button href="#pricing">Empezar ahora</Button>
        </div>
        {/* Imagen principal y decoraciones */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                {/* Imagen del robot */}
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                {/* Animaciones y notificaciones con parallax */}
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            {/* Gradiente decorativo */}
            <Gradient />
          </div>
          {/* Fondo decorativo detrás del robot */}

          {/* <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div> */}

          {/* Círculos decorativos */}
          <BackgroundCircles />
        </div>

        {/* Logos de empresas */}
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      {/* Línea decorativa inferior */}
      <BottomLine />
    </Section>
  );
};

export default Hero;
