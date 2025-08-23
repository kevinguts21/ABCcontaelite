import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-8">
        {/* Columna izquierda */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-black">Contáctanos</h2>
          <p className="text-gray-500 text-sm max-w-lg">
            ¿Tienes preguntas sobre nuestros servicios? ¿Necesitas una consulta personalizada? 
            Estamos aquí para ayudarte a impulsar el éxito de tu empresa.
          </p>

          <h3 className="text-lg font-semibold text-black mt-4">Información de contacto</h3>

          {/* Grid de 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Teléfono */}
            <a
              href="tel:+5354638504"
              className="flex flex-col items-start gap-3 p-4 bg-gray-100 rounded-xl shadow-sm hover:bg-red-100 transition"
            >
              <div className="p-3 bg-red-500 rounded-lg text-white">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="text-black font-medium">Teléfono</h4>
              <p className="text-gray-600 text-sm">+53 54638504 / +53 76389361</p>
              <span className="text-red-500 font-semibold flex items-center gap-1 text-sm">
                Llamar ahora →
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:abccontaelite.oficial@gmail.com"
              className="flex flex-col items-start gap-3 p-4 bg-gray-100 rounded-xl shadow-sm hover:bg-red-100 transition"
            >
              <div className="p-3 bg-red-500 rounded-lg text-white">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="text-black font-medium">Email</h4>
              <p className="text-gray-600 text-sm">abccontaelite.oficial@gmail.com</p>
              <span className="text-red-500 font-semibold flex items-center gap-1 text-sm">
                Enviar correo →
              </span>
            </a>

            {/* Oficina */}
            <a
              href="https://www.google.com/maps/place/La+Habana,+Cuba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start gap-3 p-4 bg-gray-100 rounded-xl shadow-sm hover:bg-red-100 transition"
            >
              <div className="p-3 bg-red-500 rounded-lg text-white">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-black font-medium">Oficina</h4>
              <p className="text-gray-600 text-sm">La Habana, Cuba</p>
              <span className="text-red-500 font-semibold flex items-center gap-1 text-sm">
                Ver ubicación →
              </span>
            </a>

            {/* Horarios */}
            <a
              href="https://wa.me/5354638504"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start gap-3 p-4 bg-gray-100 rounded-xl shadow-sm hover:bg-red-100 transition"
            >
              <div className="p-3 bg-red-500 rounded-lg text-white">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-black font-medium">Horarios</h4>
              <p className="text-gray-600 text-sm">Lun - Vie: 9am - 6pm</p>
              <span className="text-red-500 font-semibold flex items-center gap-1 text-sm">
                Agendar cita →
              </span>
            </a>
          </div>

          {/* Card horizontal extra */}
          <div className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-r from-red-500 to-red-700 text-white shadow-md">
            <div>
              <h4 className="text-lg font-semibold">Seguridad y Confianza</h4>
              <p className="text-sm text-white/90 max-w-md">
                Tu información está protegida con nosotros. Trabajamos bajo estrictos estándares de seguridad.
              </p>
            </div>
            <ShieldCheck className="w-12 h-12 animate-bounce" />
          </div>
        </div>

        {/* Columna derecha - Formulario */}
        <div className="bg-gray-100 rounded-xl p-8 shadow-md">
          <h3 className="text-xl font-semibold text-black mb-6">Envíanos un Mensaje</h3>
          <form className="flex flex-col gap-4 text-sm">
            <div>
              <label className="text-black">Nombre Completo *</label>
              <input
                type="text"
                placeholder="Tu nombre completo"
                className="w-full p-3 rounded-lg border border-gray-300 mt-1 placeholder-gray-400 text-black"
              />
            </div>

            <div>
              <label className="text-black">Email *</label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full p-3 rounded-lg border border-gray-300 mt-1 placeholder-gray-400 text-black"
              />
            </div>

            <div>
              <label className="text-black">Empresa</label>
              <input
                type="text"
                placeholder="Nombre de tu empresa"
                className="w-full p-3 rounded-lg border border-gray-300 mt-1 placeholder-gray-400 text-black"
              />
            </div>

            <div>
              <label className="text-black">Teléfono</label>
              <input
                type="text"
                placeholder="+52 (55) 1234-5678"
                className="w-full p-3 rounded-lg border border-gray-300 mt-1 placeholder-gray-400 text-black"
              />
            </div>

            <div>
              <label className="text-black">Servicio de Interés</label>
              <select className="w-full p-3 rounded-lg border border-gray-300 mt-1 text-black placeholder-gray-400">
                <option>Selecciona un servicio</option>
                <option>Finanzas</option>
                <option>Fiscalización</option>
                <option>RRHH</option>
              </select>
            </div>

            <div>
              <label className="text-black">Mensaje *</label>
              <textarea
                placeholder="Cuéntanos cómo podemos ayudarte..."
                className="w-full p-3 rounded-lg border border-gray-300 mt-1 placeholder-gray-400 text-black"
                rows={4}
              ></textarea>
            </div>

            <button className="bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition">
              Enviar Mensaje
            </button>

            <p className="text-xs text-gray-500">
              Al enviar este formulario, aceptas nuestros términos y condiciones y política de privacidad.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
