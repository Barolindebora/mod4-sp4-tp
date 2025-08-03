import { useFavorites } from "../context/FavoritesContext";

const CharacterCard = ({ personaje }) => {
  const { id, name, species, location, image, status } = personaje;
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const esFavorito = favorites.some((fav) => fav.id === id);

  const toggleFavorito = () => {
    esFavorito ? "favorito" : addToFavorites(personaje);
  };

  return (
    <div className="bg-sky-900 shadow-lg rounded-2xl overflow-hidden p-4 flex flex-col items-center text-center hover:shadow-cyan-600 transition-shadow duration-300 border-green-600 border-2">
      <img src={image} alt={name} className="w-32 h-32 rounded-full object-cover mb-4" />

      <h2 className="text-xl font-bold text-green-600">{name}</h2>
      <p className="text-sm text-blue-200">🧬 {species}</p>
      <p className="text-sm text-blue-200">📍 {location?.name}</p>
      <p className={`text-sm ${status === "Alive" ? "text-green-600" : "text-red-500"}`}>
        ☠️ {status}
      </p>
     
      <button
        onClick={toggleFavorito}
        className={`mt-4 px-4 py-1 rounded-full text-sm font-medium transition-colors ${
          esFavorito ? "bg-red-500 text-white" : "bg-yellow-300 text-gray-800 hover:bg-green-500"
        }`}
      >
        {esFavorito ? "Es un favorito" : "Agregar a Favoritos"}
      </button>
    </div>
  );
};

export default CharacterCard;