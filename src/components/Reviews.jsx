import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "./Section";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    id: 1,
    name: "María Fernández",
    business: "Restaurante El Buen Sabor",
    text: "ABC ContaElite transformó completamente nuestra gestión financiera. Ahora tenemos claridad total sobre nuestros números.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    business: "Taller Mecánico Mendoza",
    text: "El equipo es increíblemente profesional. Siempre están disponibles para resolver nuestras dudas.",
    rating: 4,
  },
  {
    id: 3,
    name: "Ana Rodríguez",
    business: "Consultora Fiscal",
    text: "Gracias a sus consejos, hemos optimizado nuestros impuestos y mejorado significativamente nuestro flujo de caja.",
    rating: 4,
  },
  {
    id: 4,
    name: "Luis Torres",
    business: "Boutique Fashion Style",
    text: "Su asesoría nos ayudó a organizar nuestras cuentas y crecer con seguridad financiera.",
    rating: 3,
  },
  {
    id: 5,
    name: "Andrea Gómez",
    business: "Tech Solutions",
    text: "El servicio es excepcional, la atención personalizada marcó la diferencia en nuestra empresa.",
    rating: 5, // Mejor valorada → card grande
  },
];

const Reviews = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current[0].parentNode, // grid contenedor
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <Section id="reviews" className="relative isolate overflow-hidden">
      {/* Fondo Polar */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/3 h-[35rem] w-[35rem] -translate-y-1/2 rounded-full opacity-[0.15] blur-3xl [background:radial-gradient(closest-side,rgba(255,64,64,0.35),transparent_70%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(closest-side,black,transparent)]" />
      </div>

      <div className="container relative z-2">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-14">
          Lo que dicen nuestros clientes
        </h2>

        {/* Grid de reseñas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((review, idx) => (
            <div
              key={review.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="review-card bg-white p-6 rounded-3xl shadow-sm border border-gray-200 transition-all duration-500 hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-red-500">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">{review.text}</p>
              <h5 className="font-semibold text-black">{review.name}</h5>
              <p className="text-sm text-gray-500">{review.business}</p>
            </div>
          ))}

          {/* Card grande */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="review-card relative md:col-span-2 bg-white p-10 rounded-3xl shadow-sm border border-gray-200 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/30 hover:-translate-y-1"
          >
            <span className="absolute top-4 right-4 px-4 py-1 text-xs font-semibold rounded-full bg-red-500/10 text-red-600 border border-red-500/30">
              ⭐ Top Valoración
            </span>
            <div className="flex gap-1 mb-4 text-lg">
              {Array.from({ length: reviews[4].rating }).map((_, i) => (
                <span key={i} className="text-red-500">
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-700 mb-6 text-lg">{reviews[4].text}</p>
            <h5 className="font-semibold text-black text-lg">
              {reviews[4].name}
            </h5>
            <p className="text-sm text-gray-500">{reviews[4].business}</p>
          </div>

          {/* Card que completa */}
          <div
            ref={(el) => (cardsRef.current[4] = el)}
            className="review-card bg-white p-6 rounded-3xl shadow-sm border border-gray-200 transition-all duration-500 hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-1"
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: reviews[3].rating }).map((_, i) => (
                <span key={i} className="text-red-500">
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-700 mb-4">{reviews[3].text}</p>
            <h5 className="font-semibold text-black">{reviews[3].name}</h5>
            <p className="text-sm text-gray-500">{reviews[3].business}</p>
          </div>
        </div>

        {/* Empresas que nos avalan */}
        <div className="mt-20 text-center text-gray-500">
          <p className="text-sm uppercase tracking-wide mb-4">
            Empresas que nos avalan
          </p>
          <div className="flex justify-center gap-10 opacity-80">
            <span className="font-bold text-gray-400">Coca Cola</span>
            <span className="font-bold text-gray-400">Banco Nacional</span>
            <span className="font-bold text-gray-400">Movistar</span>
            <span className="font-bold text-gray-400">Claro</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Reviews;
