import { FaTimes } from "react-icons/fa";
import SearchForm from "./SearchForm";

const SearchModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-orange-600 flex items-center justify-center z-50">
      <div className="bg-lime-500 p-6 rounded-2xl shadow-lg w-fit relative">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
          aria-label="Cerrar búsqueda"
        >
          <FaTimes />
        </button>

        {/* Título (opcional, podés agregarlo si querés) */}
        <h2 className="text-2xl font-semibold mb-4 text-center text-fuchsia-700">Buscar Personaje</h2>

        {/* Formulario de búsqueda */}
        <SearchForm />
      </div>
    </div>
  );
};

export default SearchModal;