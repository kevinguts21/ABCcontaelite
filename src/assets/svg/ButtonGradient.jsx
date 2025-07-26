const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        {/* Rojo fuerte → rojo medio */}
        <linearGradient id="btn-left" x1="0%" x2="100%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#E1242A" />
          <stop offset="100%" stopColor="#FF6B70" />
        </linearGradient>

        {/* Rojo claro → rojo fuerte (inverso) */}
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#FF6B70" />
          <stop offset="100%" stopColor="#E1242A" />
        </linearGradient>

        {/* Rojo fuerte → rojo claro → rojo fuerte (efecto central) */}
        <linearGradient id="btn-bottom" x1="0%" x2="100%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#E1242A" />
          <stop offset="50%" stopColor="#FF8A8F" />
          <stop offset="100%" stopColor="#E1242A" />
        </linearGradient>

        {/* Rojo fuerte → rojo claro vertical */}
        <linearGradient id="btn-right" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E1242A" />
          <stop offset="100%" stopColor="#FF6B70" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
