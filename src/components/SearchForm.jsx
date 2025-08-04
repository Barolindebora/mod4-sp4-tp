import { useState } from "react";
import CharacterCard from "./CharacterCard";
import Loader from "./Loader";
import { toast } from "react-toastify";

const SearchForm = () => {
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
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`);
      if (!response.ok) throw new Error("Personaje no encontrado.");

      const data = await response.json();
      setResultados(data.results);
      toast.success("Personajes encontrados correctamente.");
    } catch (err) {
      setError(err.message);
      setResultados([]);
      toast.error("No se encontró ningún personaje con ese nombre.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={buscarPersonaje} className="flex flex-col md:flex-row gap-6 items-center mb-4">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Buscar personaje"
          className="border-2 border-fuchsia-700 rounded-lg px-4 py-2 w-full md:w-1/2"
        />
        <button
          type="submit"
          className="bg-fuchsia-600 text-white px-4 py-2 rounded-lg hover:bg-fuchsia-700 transition w-full md:w-auto"
        >
          Buscar
        </button>
      </form>

      {loading && <Loader />}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-h-80 overflow-y-auto">
        {!loading && resultados.map((p) => <CharacterCard key={p.id} personaje={p} />)}
      </div>
    </div>
  );
};

export default SearchForm;