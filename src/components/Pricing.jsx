import { useEffect, useRef, useState } from "react";
import Section from "./Section";
import { smallSphere, abc_icon } from "../assets"; // removí stars
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  const sphereRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset;
          const rotateAngle = scrollY * 0.1;
          setRotation(rotateAngle % 360);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section className="overflow-hidden py-16" id="pricing">
      <div className="container relative z-2">
        {/* Decoración esfera girando */}
        <div className="hidden relative justify-center mb-12 lg:flex">
          <div className="relative">
            <img
              ref={sphereRef}
              src={smallSphere}
              className="relative z-1"
              width={180}
              height={180}
              alt="Sphere"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.01s linear",
              }}
            />
          </div>
        </div>

        {/* Título */}
        <Heading
          tag="Empieza con ABC CONTAÉLITE"
          title="Accede a nuestros servicios"
        />

        {/* Lista de precios */}
        <div className="relative mt-8">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-8">
          <a
            className="text-[10px] font-code font-bold text-black tracking-wider uppercase border-b"
            href="/pricing"
          >
            Ver todos los detalles
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
