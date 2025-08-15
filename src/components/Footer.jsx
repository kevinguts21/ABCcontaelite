import React, { useEffect, useState } from "react";
import Section from "./Section";
import { socials, navigation } from "../constants";
import { abc_logo, arrow_up } from "../assets";
import { Phone, Mail, MapPin } from "lucide-react";

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

  return (
    <Section
      crosses
      className="relative !px-0 !py-15 border-b border-n-6 bg-[#101828]"
      id="footer"
    >
      {/* Vista móvil */}
      {isMobile ? (
        <div className="text-white">
          {/* Sociales */}
          <ul className="flex gap-4 mb-4">
            {socials.map(({ id, url, iconUrl, title }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={title}
                  className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full transition-colors hover:bg-red-600"
                >
                  <img src={iconUrl} alt={title} width={24} height={24} />
                </a>
              </li>
            ))}
          </ul>

          {/* Logo y descripción */}
          <div className="mb-4">
            <img src={abc_logo} alt="ABC Logo" width={120} height={120} />
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
          <p className="font-bold text-white mb-2">Contáctanos</p>
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

          {/* Derechos reservados */}
          <p className="mt-4 text-white/50 text-xs">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      ) : (
        // Vista desktop
        <div className="container mx-auto flex justify-between items-start text-white">
          {/* Logo y descripción */}
          <div className="max-w-xs">
            <img src={abc_logo} alt="ABC Logo" width={120} height={120} />
            <p className="mt-3 text-white/80 text-sm">
              Somos tu socio estratégico en servicios contables. Con más de 8
              años de experiencia, ayudamos a las mipymes a optimizar su gestión
              financiera y alcanzar sus objetivos de crecimiento.
            </p>
            <p className="mt-4 text-white/50 text-xs">
              © {new Date().getFullYear()}. All rights reserved.
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
            <p className="font-bold mb-2">Contáctanos</p>
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
            {socials.map(({ id, url, iconUrl, title }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={title}
                  className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full transition-colors hover:bg-red-600"
                >
                  <img src={iconUrl} alt={title} width={24} height={24} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Botón scroll arriba */}
      <div
        onClick={scrollToTop}
        className="absolute bottom-4 right-15 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-red-600 transition-colors"
      >
        <img src={arrow_up} alt="Subir" className="w-6 h-6" />
      </div>
    </Section>
  );
};

export default Footer;
