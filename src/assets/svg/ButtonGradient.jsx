const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        { /* Gradiente vertical: blanco -> rojo fuerte */ }
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E1242A" />
        </linearGradient>

        { /* Gradiente horizontal: blanco -> rojo claro */ }
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E1242A" />
        </linearGradient>

        { /* Gradiente horizontal: rojo fuerte -> blanco */ }
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#E1242A" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>

        { /* Gradiente vertical: blanco -> rojo fuerte -> blanco (pseudogrado de 3 colores) */ }
        <linearGradient id="btn-right" x1="100%" x2="0%" y1="0%" y2="110%">
          <stop offset="0%" stopColor="#E1242A" />
          <stop offset="50%" stopColor="#E1242A" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;

