const Button = ({ className, href, onClick, children, px }) => {
  const classes = `relative inline-flex items-center justify-center h-11 
    rounded-lg border border-[#ff0400] font-semibold transition-all duration-200 
    ${px || "px-7"} bg-white text-[#ff0400] 
    hover:bg-[#ff0400] hover:text-white hover:shadow-md
    ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
