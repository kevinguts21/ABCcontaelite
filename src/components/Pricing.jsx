import { useEffect, useRef, useState } from "react";
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  const sphereRef = useRef(null); // Referencia al sphere
  const [rotation, setRotation] = useState(0); // Ángulo en grados

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Calcula la rotación según el scroll vertical
          // Puedes ajustar el factor multiplicador para más o menos giro
          const scrollY = window.scrollY || window.pageYOffset;
          const rotateAngle = scrollY * 0.1; // Por ejemplo, 0.1 grados por pixel desplazado
          setRotation(rotateAngle % 360); // Limita a 0-360°
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        {/* Decoraciones visuales: esfera y sustituyendo el img con ref y rotación */}
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            ref={sphereRef}
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: "transform 0.01s linear",
            }}
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        {/* Título y subtítulo */}
        <Heading tag="Get started with Brainwave" title="Pay once, use forever" />

        {/* Lista de precios y líneas decorativas */}
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold text-black tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
