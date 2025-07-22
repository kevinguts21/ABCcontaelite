
// Componente que muestra un mensaje de carga de IA
import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      {/* Icono de carga */}
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      {/* Texto de estado */}
      AI is generating
    </div>
  );
};

export default Generating;
