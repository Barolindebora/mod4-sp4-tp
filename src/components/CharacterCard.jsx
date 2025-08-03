import { useFavorites } from "../context/FavoritesContext";

const CharacterCard = ({ personaje }) => {
  const { id, name, species, location, image, status } = personaje;
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const esFavorito = favorites.some((fav) => fav.id === id);

  const toggleFavorito = () => {
    esFavorito ? removeFromFavorites(id) : addToFavorites(personaje);
  };

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={name} className="w-32 h-32 rounded-full object-cover mb-4" />

      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-600">🧬 {species}</p>
      <p className="text-sm text-gray-600">📍 {location?.name}</p>
      <p className={`text-sm ${status === "Alive" ? "text-green-600" : "text-red-500"}`}>
        ☠️ {status}
      </p>
      <p className="text-sm text-gray-500 italic mt-1">Edad estimada: Desconocida</p>

      <button
        onClick={toggleFavorito}
        className={`mt-4 px-4 py-1 rounded-full text-sm font-medium transition-colors ${
          esFavorito ? "bg-red-500 text-white" : "bg-yellow-400 text-gray-800 hover:bg-yellow-500"
        }`}
      >
        {esFavorito ? "Eliminar de Favoritos" : "Agregar a Favoritos"}
      </button>
    </div>
  );
};

export default CharacterCard;