import { useState } from "react";
import CharacterCard from "./CharacterCard";
import Loader from "./Loader";
import { toast } from "react-toastify";

const SearchForm = ({ favoritos, onToggleFavorito }) => {
  const [nombre, setNombre] = useState("");
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const buscarPersonaje = async (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      toast.error("Por favor ingresá un nombre.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${nombre}`
      );
      if (!response.ok) throw new Error("Personaje no encontrado.");

      const data = await response.json();
      setResultados(data.results);
      toast.success("Personajes encontrados correctamente.");
    } catch (err) {
      console.error(err);
      setError(err.message);
      setResultados([]);
      toast.error("No se encontró ningún personaje con ese nombre.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={buscarPersonaje} className="mb-6 flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Buscar personaje por nombre..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Buscar
        </button>
      </form>

      {loading && <Loader />}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {!loading &&
          resultados.map((p) => (
            <CharacterCard
              key={p.id}
              personaje={p}
              onToggleFavorito={onToggleFavorito}
              esFavorito={favoritos.some((f) => f.id === p.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchForm;