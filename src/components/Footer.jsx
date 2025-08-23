import React, { useEffect, useState } from "react";
import { navigation } from "../constants";
import { abc_logo, arrow_up } from "../assets";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { id: "facebook", url: "https://facebook.com", icon: Facebook, title: "Facebook" },
    { id: "instagram", url: "https://instagram.com", icon: Instagram, title: "Instagram" },
    { id: "linkedin", url: "https://linkedin.com", icon: Linkedin, title: "LinkedIn" },
    { id: "twitter", url: "https://twitter.com", icon: Twitter, title: "Twitter" },
  ];

  return (
    <footer id="footer" className="relative bg-[#101828] text-white py-12 px-6">
      {isMobile ? (
        // Vista móvil
        <div>
          {/* Redes sociales */}
          <ul className="flex gap-4 mb-6">
            {socials.map(({ id, url, icon: Icon, title }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={title}
                  className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full transition-colors hover:bg-red-600 group"
                >
                  <Icon className="w-5 h-5 text-white group-hover:text-white" />
                </a>
              </li>
            ))}
          </ul>

          {/* Logo y descripción */}
          <div className="mb-6">
            <img src={abc_logo} alt="ABC Logo" width={140} height={140} />
            <p className="mt-3 text-white/80 text-sm">
              Somos tu socio estratégico en servicios contables. Con más de 8
              años de experiencia, ayudamos a las mipymes a optimizar su gestión
              financiera y alcanzar sus objetivos de crecimiento.
            </p>
          </div>

          {/* Navegación */}
          <ul className="mb-6 space-y-2">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  className="text-white hover:text-red-600 transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Contacto */}
          <div>
            <p className="font-bold mb-3">Contáctanos</p>
            <div className="space-y-2">
              <a
                href="tel:+5354638504"
                className="flex items-center text-sm text-white/80 hover:text-red-600 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-red-600" />
                +53 54638504
              </a>
              <a
                href="tel:+5376389361"
                className="flex items-center text-sm text-white/80 hover:text-red-600 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-red-600" />
                +53 76389361
              </a>
              <a
                href="mailto:abccontaelite.oficial@gmail.com"
                className="flex items-center text-sm text-white/80 hover:text-red-600 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2 text-red-600" />
                abccontaelite.oficial@gmail.com
              </a>
              <a
                href="https://maps.app.goo.gl/ur1xgh4gmEgrass76"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-white/80 hover:text-red-600 transition-colors"
              >
                <MapPin className="w-4 h-4 mr-2 text-red-600" />
                123 Calle Ficticia, Habana, Cuba
              </a>
            </div>
          </div>
        </div>
      ) : (
        // Vista desktop
        <div className="container mx-auto flex justify-between items-start">
          {/* Logo y descripción */}
          <div className="max-w-xs">
            <img src={abc_logo} alt="ABC Logo" width={140} height={140} />
            <p className="mt-3 text-white/80 text-sm">
              Somos tu socio estratégico en servicios contables. Con más de 8
              años de experiencia, ayudamos a las mipymes a optimizar su gestión
              financiera y alcanzar sus objetivos de crecimiento.
            </p>
          </div>

          {/* Navegación */}
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  className="text-white hover:text-red-600 transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Contacto */}
          <div>
            <p className="font-bold mb-3">Contáctanos</p>
            <div className="space-y-2">
              <a
                href="tel:+5354638504"
                className="flex items-center text-sm text-white/80 hover:text-red-600 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-red-600" />
                +53 54638504
              </a>
              <a
                href="tel:+5376389361"
                className="flex items-center text-sm text-white/80 hover:text-red-600 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-red-600" />
                +53 76389361
              </a>
              <a
                href="mailto:abccontaelite.oficial@gmail.com"
                className="flex items-center text-sm text-white/80 hover:text-red-600 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2 text-red-600" />
                abccontaelite.oficial@gmail.com
              </a>
              <a
                href="https://maps.app.goo.gl/ur1xgh4gmEgrass76"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-white/80 hover:text-red-600 transition-colors"
              >
                <MapPin className="w-4 h-4 mr-2 text-red-600" />
                123 Calle Ficticia, Habana, Cuba
              </a>
            </div>
          </div>

          {/* Redes sociales */}
          <ul className="flex gap-4">
            {socials.map(({ id, url, icon: Icon, title }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={title}
                  className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full transition-colors hover:bg-red-600 group"
                >
                  <Icon className="w-5 h-5 text-white group-hover:text-white" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Derechos reservados con links legales */}
      <div className="mt-8 text-center border-t border-white/10 pt-6">
        <p className="text-white/60 text-xs">
          © 2025 <span className="font-semibold text-red-500">ABC ContaElite Rides SRL</span>. Todos los derechos reservados.
        </p>
        <div className="flex justify-center gap-6 mt-3 text-xs text-white/60">
          <a href="#" className="hover:text-red-500">Términos y Condiciones</a>
          <a href="#" className="hover:text-red-500">Política de Privacidad</a>
          <a href="#" className="hover:text-red-500">Aviso Legal</a>
          <a href="#" className="hover:text-red-500">Cookies</a>
        </div>
      </div>

      {/* Botón scroll arriba con animación */}
      <div
        onClick={scrollToTop}
        className="absolute bottom-4 right-6 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition animate-pulse"
      >
        <img src={arrow_up} alt="Subir" className="w-6 h-6 invert" />
      </div>
    </footer>
  );
};

export default Footer;
