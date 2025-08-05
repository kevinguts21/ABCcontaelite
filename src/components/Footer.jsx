import React, { useEffect, useState } from "react";
import Section from "./Section";
import { socials } from "../constants";
import { abc_logo } from "../assets";
import { Phone, Mail, MapPin } from "lucide-react";
import { arrow_up } from "../assets";
const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Escucha cambios en tamaño de ventana
    window.addEventListener("resize", handleResize);

    // Limpia listener al desmontar componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Section crosses className="relative !px-0 !py-15 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm" id="footer">
      {/* Vista móvil */}
      {isMobile ? (
        <div>
          {/* Sociales */}
          <div className="flex flex-col items-start mb-4">
            <ul className="flex gap-4 mb-4">
              {socials.map(({ id, url, iconUrl, title }) => (
                <li key={id}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={title}
                    className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                  >
                    <img src={iconUrl} alt={title} width={24} height={24} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-start mb-4">
            <img
              src={abc_logo}
              alt="ABC Logo"
              width={120}
              height={120}
              className="mb-2"
            />
          </div>

          {/* Contacto */}
          <div className="flex flex-col items-start mb-4">
            <p className="font-bold text-white mb-2">Contáctanos</p>
            <p className="caption text-n-4 font-bold text-white ">    Rides Alejandro Borrego Castroda            </p>
            <a
              href="tel:+5354638504"
              className="flex items-center text-sm text-n-3 mb-1 hover:text-white font-bold transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>+53 54638504</span>
            </a>
            <a
              href="tel:+5376389361"
              className="flex items-center text-sm text-n-3 mb-1 hover:text-white font-bold transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>+53 76389361</span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abccontaelite.oficial@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-n-3 mb-1 hover:text-white font-bold transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span>abccontaelite.oficial@gmail.com</span>
            </a>
            <a
              href="https://maps.app.goo.gl/ur1xgh4gmEgrass76"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-n-3 hover:text-white font-bold transition-colors"
            >
              <MapPin className="w-4 h-4 mr-2" />
              <span>123 Calle Ficticia, Habana, Cuba</span>
            </a>
          </div>

          {/* Derechos reservados */}
          <div>
            <p className="caption text-n-4">
              © {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      ) : (
        // Vista desktop (sin cambios)
        <>
          {/* Logo */}
          <div className="absolute top-4 left-15 flex flex-col items-start">
            <img
              src={abc_logo}
              alt="ABC Logo"
              width={120}
              height={120}
              className="mb-2"
            />
            <p className="caption text-n-4 hover:text-white font-bold ">
              © {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>

          {/* Redes sociales + Contacto */}
          <div className="absolute top-4 right-15 flex flex-col items-start text-left">
            <ul className="flex gap-4 mb-4">
              {socials.map(({ id, url, iconUrl, title }) => (
                <li key={id}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={title}
                    className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                  >
                    <img src={iconUrl} alt={title} width={24} height={24} />
                  </a>
                </li>
              ))}
            </ul>

            <p className="text-white font-bold mb-2">Contáctanos</p>
            <p className="caption text-n-4 text-white ">
              Rides Alejandro Borrego Castroda
            </p>
            {/* Teléfono */}
            <div className="flex items-center text-sm text-n-3 mb-1">
              <Phone className="w-4 h-4 mr-2" />
              <span>+53 54638504</span>
            </div>
            <div className="flex items-center text-sm text-n-3 mb-1">
              <Phone className="w-4 h-4 mr-2" />
              <span>+53 76389361</span>
            </div>
            

            {/* Correo */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abccontaelite.oficial@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-n-3 mb-1 hover:text-white font-bold transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span>abccontaelite.oficial@gmail.com</span>
            </a>

            {/* Dirección */}
            <a
              href="https://maps.app.goo.gl/ur1xgh4gmEgrass76"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-n-3 hover:text-white font-bold transition-colors"
            >
              <MapPin className="w-4 h-4 mr-2 font-bold" />
              <span >123 Calle Ficticia, Habana, Cuba</span>
            </a>
          </div>

          {/* Contenido central */}
          <div className="container mt-32 flex justify-center items-center">
            <a
              href="/#pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-n-3 hover:text-white font-bold transition-colors"
            >
              <span >Preguntas Frecuentes</span>
            </a>
          </div>
        </>
      )}

      {/* Icono fijo para subir arriba */}
      <div
        onClick={scrollToTop}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") scrollToTop();
        }}
        className="absolute bottom-4 right-15 w-12 h-12 bg-n-7 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-n-6 transition-colors"
        aria-label="Subir al inicio"
        title="Subir"
      >
        <img src={arrow_up} alt="Subir" className="w-6 h-6" />
      </div>
    </Section>
  );
};

export default Footer;
