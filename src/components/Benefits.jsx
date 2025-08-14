// Componente que muestra la sección de beneficios de la app
// Renderiza tarjetas con título, texto, icono y fondo decorativo
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
              className="block relative md:max-w-[24rem] rounded-2xl bg-gray-50 border border-gray-200 shadow-sm"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                {/* Título y texto del beneficio */}
                <h5 className="h5 mb-5 font-bold text-black">{item.title}</h5>
                <p className="body-2 mb-6 text-red-600">{item.text}</p>
                {/* Icono y enlace decorativo */}
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
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
