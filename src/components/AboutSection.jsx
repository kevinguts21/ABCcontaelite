import { Users, Clock, Briefcase, Award } from "lucide-react";
import { check } from "../assets";
import Section from "./Section";
import CompanyLogos from "./CompanyLogos";

const AboutSection = () => {
  const cards = [
    {
      id: 1,
      title: "Más de 500 clientes satisfechos",
      icon: <Users className="w-7 h-7 text-[#ff0400]" />,
    },
    {
      id: 2,
      title: "+8 años de experiencia",
      icon: <Clock className="w-7 h-7 text-[#ff0400]" />,
    },
    {
      id: 3,
      title: "Amplia gama de servicios",
      icon: <Briefcase className="w-7 h-7 text-[#ff0400]" />,
    },
    {
      id: 4,
      title: "Reconocimientos en el sector",
      icon: <Award className="w-7 h-7 text-[#ff0400]" />,
    },
  ];

  const valores = [
    "Transparencia Total - Comunicación clara y honesta en cada proceso. Sin sorpresas, sin costos ocultos.",
    "Excelencia Técnica - Equipo certificado con las últimas actualizaciones en normativas fiscales y contables.",
    "Compromiso Personal - Cada cliente es único. Adaptamos nuestros servicios a las necesidades específicas de tu empresa.",
    "Innovación Constante - Utilizamos las mejores herramientas tecnológicas para optimizar procesos y resultados.",
  ];

  return (
    <Section
      className="relative isolate overflow-hidden"
      id="about"
      crosses={false}
    >
      {/* Fondo tipo Polar */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Spotlight radial rojo más tenue que el hero */}
        <div className="absolute top-1/2 left-1/3 h-[50rem] w-[50rem] -translate-y-1/2 rounded-full opacity-[0.35] blur-2xl [background:radial-gradient(closest-side,rgba(255,64,64,0.5),transparent_80%)]" />
        {/* Grid de líneas */}
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(closest-side,black,transparent)]" />
      </div>

      <div className="container mx-auto px-4 text-center">
        {/* Título */}
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
          Conoce ABC ContaElite Rides SRL
        </h2>

        {/* Subtítulo */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Somos una empresa especializada en servicios contables para mipymes,
          comprometida con el crecimiento y éxito de nuestros clientes.
        </p>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-[#ff0400]/10 rounded-full mb-4">
                {card.icon}
              </div>
              <p className="text-lg font-semibold text-black">{card.title}</p>
            </div>
          ))}
        </div>

        {/* Sección Misión y Valores */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch text-left">
          {/* Nuestra Misión */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-6">
              Nuestra Misión
            </h3>
            <p className="text-gray-700 leading-relaxed">
              En ABC ContaElite Rides SRL, creemos que cada empresa, sin
              importar su tamaño, merece tener acceso a servicios contables de
              la más alta calidad. Nuestra misión es simplificar la gestión
              financiera de las mipymes, proporcionando soluciones integrales
              que les permitan enfocarse en lo que mejor saben hacer: hacer
              crecer su negocio.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Con más de 8 años de experiencia en el sector, hemos desarrollado
              una metodología única que combina la experiencia tradicional con
              las últimas tecnologías, garantizando precisión, eficiencia y
              tranquilidad para nuestros clientes.
            </p>
          </div>

          {/* Nuestros Valores */}
          <div className="rounded-[2rem] bg-gradient-to-r from-[#ff0400] to-[#a00000] text-white p-10 flex flex-col justify-center shadow-lg shadow-red-900/20">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Nuestros Valores
            </h3>
            <ul className="space-y-4">
              {valores.map((valor, index) => (
                <li key={index} className="flex items-start gap-3">
                  <img
                    src={check}
                    alt="check"
                    className="w-6 h-6 mt-1 flex-shrink-0"
                  />
                  <span className="leading-relaxed">{valor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
    </Section>
  );
};

export default AboutSection;
