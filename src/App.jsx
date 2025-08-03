import { useState } from "react";
import InitialCharacters from "./components/InitialCharacters";
import SearchForm from "./components/SearchForm";
import FavoritesModal from "./components/FavoritesModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={showModal ? "overflow-hidden h-screen" : ""}>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center mb-8">Buscador de Personajes</h1>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setShowModal(true)}
            className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-lg shadow hover:bg-yellow-500 transition"
          >
            Ver Favoritos ⭐
          </button>
        </div>

        <SearchForm />
        <InitialCharacters />

        {showModal && <FavoritesModal onClose={() => setShowModal(false)} />}

        <ToastContainer />
      </div>
    </div>
  );
}

export default App;