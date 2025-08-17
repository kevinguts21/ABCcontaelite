// Componente contenedor para secciones
// Añade paddings, líneas decorativas laterales y cruces opcionales para el diseño
import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {/* Contenido de la sección */}
      {children}
      {/* Línea decorativa izquierda */}
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-gray-100 pointer-events-none md:block lg:left-7.5 xl:left-10" />

      {/* Línea decorativa derecha */}
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-gray-100 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {/* Cruces decorativas opcionales */}
      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-gray-100 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
