
// Componente para mostrar textos cortos destacados (taglines) con corchetes decorativos
import brackets from "../assets/svg/Brackets";

const TagLine = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {/* Corchete izquierdo decorativo */}
      {brackets("left")}
      {/* Texto del tagline */}
      <div className="mx-3 text-n-5">{children}</div>
      {/* Corchete derecho decorativo */}
      {brackets("right")}
    </div>
  );
};

export default TagLine;
