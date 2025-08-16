import { Users, Clock, Briefcase, Award } from "lucide-react";
import Section from "./Section"; // ajusta la ruta según tu proyecto

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

  return (
    <Section id="about">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center 
                         shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-[#ff0400]/10 rounded-full mb-4">
                {card.icon}
              </div>
              <p className="text-lg font-semibold text-black">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
