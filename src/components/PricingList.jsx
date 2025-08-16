// Componente que muestra la lista de planes de precios
import { check } from "../assets";
import { pricing } from "../constants";

const PricingList = () => {
  // Simulación de precios por ID de plan
  const precios = {
    1: 45,
    2: 60,
    3: 80,
  };

  return (
    <div className="flex flex-col gap-[2rem]">
      {/* Lista de precios */}
      <div className="flex gap-[1rem] max-lg:flex-wrap">
        {pricing.map((item) => (
          <div
            key={item.id}
            className="w-[19rem] max-lg:w-full min-h-[28rem] px-6 py-8 bg-white border border-gray-200 rounded-[2rem] lg:w-auto flex flex-col justify-between"
          >
            <div>
              {/* Título del plan */}
              <h4 className="h4 mb-2 text-black">{item.title}</h4>

              {/* Precio del plan */}
              <p className="text-red-600 text-xl font-bold mb-4">
                Desde {precios[item.id] ?? 50}$
              </p>

              {/* Descripción del plan */}
              <p className="body-2 min-h-[4rem] mb-3 text-black/70">
                {item.description}
              </p>

              {/* Lista de características */}
              <ul>
                {item.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start py-5 border-t border-gray-200"
                  >
                    <img src={check} width={24} height={24} alt="Check" />
                    <p className="body-2 ml-4 text-black">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botón de acción al fondo */}
            <button
              className="mt-6 w-full rounded-[1.3rem] bg-[#ff0400] text-white py-4 font-semibold transition-all duration-100 border-2 border-transparent hover:bg-white hover:text-[#ff0400] hover:border-[#ff0400]"
              onClick={() => {
                console.log("Solicitar información de:", item.title);
              }}
            >
              Solicitar información
            </button>
          </div>
        ))}
      </div>

      {/* Box especial */}
      <div className="flex max-lg:flex-col items-center justify-between gap-6 px-8 py-8 rounded-[2rem] bg-gradient-to-r from-[#ff0400] to-[#a00000] text-white">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">
            ¿Necesitas una Solución Personalizada?
          </h2>
          <p className="text-white/90">
            Cada empresa es única. Creamos paquetes de servicios adaptados a tus
            necesidades específicas.
          </p>
        </div>
        <button className="bg-white text-[#ff0400] px-4 py-3 rounded-[1.3rem] font-semibold">
          Contáctanos
        </button>
      </div>
    </div>
  );
};

export default PricingList;
