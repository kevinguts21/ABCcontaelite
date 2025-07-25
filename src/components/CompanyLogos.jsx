// Componente que muestra los logos de empresas que usan el producto
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      {/* Texto introductorio */}
      <h5 className="tagline mb-6 text-center font-bold text-black text-xl" >
        Helping people create beautiful content at
      </h5>
      {/* Lista horizontal de logos */}
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center text-black font-bold flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
