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
              key={item.id}
              className="
                group relative 
                md:max-w-[24rem] 
                rounded-3xl 
                overflow-hidden
              "
            >
              {/* 🔴 Fondo radial rojo en hover */}
              <div
                className="
                  absolute inset-0 
                  rounded-3xl 
                  opacity-0 
                  group-hover:opacity-100 
                  transition-opacity duration-500 ease-out
                  blur-xl
                  [background:radial-gradient(circle_at_center,rgba(255,0,0,0.45),transparent_70%)]
                "
              />

              {/* Contenido de la card */}
              <div
                className="
                  relative z-10 
                  flex flex-col h-[22rem] 
                  p-[2.4rem] 
                  bg-white 
                  border border-gray-200 
                  rounded-3xl 
                  shadow-sm
                  transition-transform transition-shadow duration-300 ease-out
                  lg:group-hover:-translate-y-1 
                  lg:group-hover:shadow-lg 
                  lg:group-hover:shadow-red-500/40
                "
              >
                <h5
                  className="
    h5 mb-5 font-bold text-black 
    transition-colors duration-500 ease-out 
    group-hover:text-red-600
  "
                >
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
