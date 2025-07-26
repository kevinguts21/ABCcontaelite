// Componente que muestra la sección de beneficios de la app
// Renderiza tarjetas con título, texto, icono y fondo decorativo
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

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
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                {/* Título y texto del beneficio */}
                <h5 className="h5 mb-5 font-bold text-black">{item.title}</h5>
                <p className="body-2 mb-6 font-bold text-black">{item.text}</p>
                {/* Icono y enlace decorativo */}
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-black uppercase tracking-wider">
                   Descubre más
                  </p>
                  <Arrow />
                </div>
              </div>

              {/* Gradiente decorativo si corresponde */}
              {item.light && <GradientLight />}

              {/* Imagen de fondo con efecto hover */}
              <div
                className="absolute inset-0.5 bg-white/80"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              {/* SVG para el recorte decorativo */}
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
