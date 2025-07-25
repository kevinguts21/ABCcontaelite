
// Componente para títulos de sección
// Permite mostrar un tag (subtítulo), título principal y texto descriptivo
import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {/* Tagline opcional arriba del título */}
      {tag && <TagLine className="mb-4 md:justify-center text-black font-bold">{tag}</TagLine>}
      {/* Título principal */}
      {title && <h2 className="h2 text-black font-bold">{title}</h2>}
      {/* Texto descriptivo opcional */}
      {text && <p className="body-2 mt-4 text-black font-bold">{text}</p>}
    </div>
  );
};

export default Heading;
