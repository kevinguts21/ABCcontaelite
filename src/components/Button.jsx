
// Componente de botón reutilizable
// Puede renderizarse como <button> o <a> dependiendo de si recibe la prop href
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  // Define las clases CSS del botón según las props
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  // Renderiza un botón estándar
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {/* Icono SVG decorativo */}
      {ButtonSvg(white)}
    </button>
  );

  // Renderiza un enlace si se proporciona href
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  // Decide si renderizar como <a> o <button>
  return href ? renderLink() : renderButton();
};

export default Button;
