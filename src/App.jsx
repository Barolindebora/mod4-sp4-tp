import { useState } from "react";
import InitialCharacters from "./components/InitialCharacters";
import FavoritesModal from "./components/FavoritesModal";
import SearchModal from "./components/SearchModal";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const pageIsBlocked = showFavoritesModal || showSearchModal;

  return (
    <div className={pageIsBlocked ? "overflow-hidden h-screen" : ""}>
      <div className="max-w-7xl mx-auto px-4 py-6 bg-darkBg min-h-screen text-lightText">
        <h1 className="text-4xl font-bold text-center mb-6 font-orbitron text-neonGreen">
          Personajes
        </h1>

        {/* 🔍 Lupa + botón favoritos */}
        <Header
          onOpenFavorites={() => setShowFavoritesModal(true)}
          onOpenSearch={() => setShowSearchModal(true)}
        />

        {/* 👥 Personajes iniciales */}
        <InitialCharacters />

        {/* ⭐ Modal de favoritos */}
        {showFavoritesModal && (
          <FavoritesModal onClose={() => setShowFavoritesModal(false)} />
        )}

        {/* 🔍 Modal de búsqueda */}
        {showSearchModal && (
          <SearchModal onClose={() => setShowSearchModal(false)} />
        )}

        {/* 🔔 Toasts */}
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
