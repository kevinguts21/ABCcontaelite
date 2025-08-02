import React, { useState, useRef, useEffect } from "react";
import { whatsapp } from "../assets";

const baseUrl = "https://wa.me/+5354638504?text=";

const FloatingWhatsapp = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const chatRef = useRef(null);

  // Detecta si es móvil
  const isMobile = window.matchMedia("(pointer: coarse)").matches;

  // Cierra la ventana al tocar fuera en móvil
  useEffect(() => {
    if (!isMobile || !showPreview) return;

    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setShowPreview(false);
        setUserMessage("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobile, showPreview]);

  const handleIconClick = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const handleSend = () => {
    if (!userMessage.trim()) return;
    const encodedMsg = encodeURIComponent(userMessage);
    window.open(`${baseUrl}${encodedMsg}`, "_blank");
    setShowPreview(false);
    setUserMessage("");
  };

  return (
    <>
      <div
        className="fixed bottom-20 right-20 z-50 flex flex-col items-end"       
        onMouseEnter={() => !isMobile && setShowPreview(true)}
        onMouseLeave={() => !isMobile && setShowPreview(false)}
        style={{ pointerEvents: "auto" }}
      >
        <a
          href={`${baseUrl}Hola%20gracias%20por%20contactar%20con%20ABC%20Contaelite`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          style={{ boxShadow: "0 4px 16px 2px rgba(0,0,0,0.12)" }}
          onClick={isMobile ? handleIconClick : (e) => e.preventDefault()}
        >
          <img src={whatsapp} alt="WhatsApp" width={58} height={58} />
        </a>

        {showPreview && (
          <div
            ref={chatRef}
            className="mt-2 bg-white rounded-xl shadow-2xl p-4 w-80 animate-fade-in"
            style={{
              boxShadow: "0 8px 32px 4px rgba(0,0,0,0.18)",
              transition: "opacity 0.5s",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <img src={whatsapp} alt="WhatsApp" width={24} height={24} />
              <span className="font-semibold text-green-600">ABC Contaelite</span>
            </div>

            <div className="bg-green-100 rounded-lg p-3 text-sm text-gray-800 mb-3 shadow-inner">
              Hola, gracias por contactar con <b>ABC Contaelite</b>, ¿en qué podemos ayudarle?
            </div>

            <div className="flex items-center border rounded-lg overflow-hidden shadow-sm bg-white">
              <input
                type="text"
                placeholder="Escribe tu mensaje..."
                className="flex-grow p-2 text-sm outline-none text-black font-bold"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
              />
              <button
                className="bg-green-500 hover:bg-green-600 p-2 text-white"
                onClick={handleSend}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Animación */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeInWhatsapp 0.5s;
          }
          @keyframes fadeInWhatsapp {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </>
  );
};

export default FloatingWhatsapp;
