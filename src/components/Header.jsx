const Header = ({ onOpenFavorites, onOpenSearch }) => {
  return (
    <header className="flex justify-end items-center gap-4 mb-6 bg-cyan-300 p-4 rounded-lg shadow-md">
      {/* Botón lupa */}
      <button
        onClick={onOpenSearch}
        className="bg-gray-800 hover:bg-gray-700 text-neonGreen p-3 rounded-full shadow transition text-xl"
        title="Buscar personaje"
      >
        🔍
      </button>

      {/* Botón ver favoritos */}
      <button
        onClick={onOpenFavorites}
        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg shadow transition"
      >
        Ver Favoritos ⭐
      </button>
    </header>
  );
};

export default Header;