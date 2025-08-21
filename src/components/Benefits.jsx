import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%", // cuando el título entre al viewport
          },
        }
      );
    }
  }, []);

  return (
    <Section id="features" className="relative isolate overflow-hidden">
      {/* Fondo Polar */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/3 h-[40rem] w-[40rem] -translate-y-1/2 rounded-full opacity-[0.25] blur-3xl [background:radial-gradient(closest-side,rgba(255,64,64,0.3),transparent_70%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(closest-side,black,transparent)]" />
      </div>

      <div className="container relative z-2">
        {/* Título animado con gsap */}
        <div ref={titleRef}>
          <Heading
            className="md:max-w-md lg:max-w-2xl font-bold text-black"
            title="Lleva tu contabilidad más allá con soluciones inteligentes"
          />
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="group relative md:max-w-[24rem] rounded-3xl overflow-hidden transition-all"
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out blur-2xl [background:radial-gradient(circle_at_center,rgba(255,64,64,0.35),transparent_70%)]" />
              <div className="relative z-10 flex flex-col h-[22rem] p-[2.4rem] bg-white border border-gray-200 rounded-3xl shadow-sm transition-transform transition-shadow duration-300 ease-out lg:group-hover:-translate-y-1 lg:group-hover:shadow-lg lg:group-hover:shadow-red-500/30">
                <h5 className="h5 mb-5 font-bold text-black transition-colors duration-500 ease-out group-hover:text-red-600">
                  {item.title}
                </h5>
                <p className="body-2 mb-6 text-gray-600">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
