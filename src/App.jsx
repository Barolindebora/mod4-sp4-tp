import { useEffect, useState } from "react";
import InitialCharacters from "./components/InitialCharacters";
import SearchForm from "./components/SearchForm";
import Favorites from "./components/Favorites";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [favoritos, setFavoritos] = useState([]);
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false); // 👈 control de visibilidad

  // Cargar favoritos desde localStorage al iniciar
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favs);
  }, []);

  // Agregar o quitar de favoritos
  const handleToggleFavorito = (personaje) => {
    const yaExiste = favoritos.some((p) => p.id === personaje.id);
    let nuevos;

    if (yaExiste) {
      nuevos = favoritos.filter((p) => p.id !== personaje.id);
    } else {
      nuevos = [...favoritos, personaje];
      setMostrarFavoritos(true); // 👈 Mostrar favoritos al agregar
    }

    setFavoritos(nuevos);
    localStorage.setItem("favoritos", JSON.stringify(nuevos));
  };

  // Cambiar visibilidad manual
  const toggleFavoritos = () => {
    setMostrarFavoritos((prev) => !prev);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-8">Buscador de Personajes</h1>

      {/* Botón para mostrar/ocultar favoritos */}
      <div className="flex justify-center mb-6">
        <button
          onClick={toggleFavoritos}
          className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-lg shadow hover:bg-yellow-500 transition"
        >
          {mostrarFavoritos ? "Ocultar Favoritos" : "Ver Favoritos"}
        </button>
      </div>

      <SearchForm favoritos={favoritos} onToggleFavorito={handleToggleFavorito} />
      <InitialCharacters favoritos={favoritos} onToggleFavorito={handleToggleFavorito} />

      {mostrarFavoritos && (
        <Favorites favoritos={favoritos} onToggleFavorito={handleToggleFavorito} />
      )}

      <ToastContainer />
    </div>
  );
}

export default App;

