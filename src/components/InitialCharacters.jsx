import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import Loader from "./Loader";

const InitialCharacters = () => {
  const [personajes, setPersonajes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // ✅

  const fetchData = async () => {
    setError(null);
    setLoading(true); // 🔁 iniciar loader

    try {
      const response = await fetch('https://rickandmortyapi.com/api/character?page=1');
      if (!response.ok) throw new Error('Error al obtener los personajes');

      const data = await response.json();
      setPersonajes(data.results);
    } catch (err) {
      console.error("Error ->", err);
      setError(err.message);
    } finally {
      setLoading(false); // ✅ detener loader
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Personajes Iniciales</h1>

      {loading && <Loader />}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {!loading && !error && personajes.map((p) => (
          <CharacterCard key={p.id} personaje={p} />
        ))}
      </div>
    </div>
  );
};

export default InitialCharacters;