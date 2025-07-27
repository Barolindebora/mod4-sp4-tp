import CharacterCard from "./CharacterCard";

const Favorites = ({ favoritos, onToggleFavorito }) => {
  if (favoritos.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">
        No hay personajes favoritos aún.
      </p>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">💛 Tus Favoritos</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {favoritos.map((personaje) => (
          <CharacterCard
            key={personaje.id}
            personaje={personaje}
            onToggleFavorito={onToggleFavorito}
            esFavorito={true} // 💡 importante para mostrar que ya está en favoritos
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
