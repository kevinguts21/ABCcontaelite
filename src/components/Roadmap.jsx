// Roadmap con animaciones y estilo sincronizado con Review
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, loading1, grid } from "../assets";

const Roadmap = () => (
  <Section className="relative overflow-hidden bg-white" id="roadmap">
    {/* Grid difuminado estilo Review */}
    <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
      <img
        src={grid}
        alt="Grid Background"
        className="w-full h-full object-cover mix-blend-overlay"
      />
    </div>

    <div className="container relative z-10 md:pb-10">
      {/* Título */}
      <Heading
        tag="Próximamente"
        title="En qué estamos trabajando"
        className="text-red-600"
      />

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mt-12 auto-rows-fr">
        {roadmap
          .sort((a, b) => b.rating - a.rating)
          .map((item, index) => {
            const isBig = index === 0; // solo la primera es "grande"
            const status = item.status === "hecho" ? "Hecho" : "En progreso";

            return (
              <div
                key={item.id}
                className={`relative p-[1px] rounded-3xl ${
                  isBig ? "xl:col-span-2" : ""
                }`}
              >
                {/* Spotlight difuminado estilo Review */}
                <div className="absolute inset-0 bg-red-500/10 blur-2xl rounded-3xl"></div>

                {/* Card */}
                <div className="relative p-8 bg-white rounded-3xl shadow-md border border-red-100 z-10 h-full flex flex-col group overflow-hidden transition hover:shadow-lg">
                  {/* Fecha y estado */}
                  <div className="flex items-center justify-between mb-6">
                    <Tagline className="text-red-600">{item.date}</Tagline>

                    <div className="flex items-center px-3 py-1 bg-red-50 rounded text-red-600 text-sm font-medium">
                      <img
                        className={`mr-2 ${
                          item.status === "done" ? "animate-bounce" : ""
                        }`}
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      {status}
                    </div>
                  </div>

                  {/* Imagen con hover sutil */}
                  <div className="mb-6 relative overflow-hidden rounded-xl border border-red-100">
                    <img
                      className={`w-full h-48 object-cover transform transition-transform duration-500 ${
                        isBig
                          ? "group-hover:scale-[1.03]"
                          : "group-hover:scale-[1.02]"
                      }`}
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>

                  {/* Título y texto */}
                  <h4 className="text-lg font-semibold text-red-500 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-black flex-grow">{item.text}</p>
                </div>
              </div>
            );
          })}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-16">
        <Button
          href="/roadmap"
          
        >
          Nuestro marco de trabajo
        </Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
