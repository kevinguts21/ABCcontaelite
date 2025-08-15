import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        {/* Título de la sección */}
        <Heading
          className="md:max-w-md lg:max-w-2xl font-bold text-black"
          title="Lleva tu contabilidad más allá con soluciones inteligentes"
        />

        {/* Renderiza cada tarjeta de beneficio */}
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="
                group block relative 
                md:max-w-[24rem] 
                rounded-3xl 
                bg-white 
                border border-gray-200 
                shadow-sm 
                overflow-hidden 
                transform 
                transition-shadow transition-transform duration-300 ease-out 
                lg:hover:-translate-y-1 
                lg:hover:shadow-lg 
                lg:hover:shadow-gray-400/40
              "
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                {/* Título y texto del beneficio */}
                <h5 className="h5 mb-5 font-bold text-black">{item.title}</h5>
                {/* Color gris en lugar de rojo */}
                <p className="body-2 mb-6 text-gray-600">{item.text}</p>
                {/* Icono y enlace decorativo (sin filtros rojos) */}
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    className="transition-colors duration-300 ease-in-out"
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
