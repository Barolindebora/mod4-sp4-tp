import { useFavorites } from '../context/FavoritesContext';

const FavoritesModal = ({ onClose }) => {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-11/12 max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
        >
          ✖
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center">Personajes Favoritos</h2>
        {favorites.length === 0 ? (
          <p className="text-center text-gray-500">No hay personajes en favoritos.</p>
        ) : (
          <ul className="space-y-4 max-h-80 overflow-y-auto">
            {favorites.map((fav) => (
              <li
                key={fav.id}
                className="flex items-center gap-4 bg-gray-100 p-3 rounded-lg"
              >
                <img
                  src={fav.image}
                  alt={fav.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="flex-1 font-medium">{fav.name}</span>
                <button
                  onClick={() => removeFromFavorites(fav.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FavoritesModal;