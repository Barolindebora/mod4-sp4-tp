
const Loader = () => {
  return (
    <div className="flex justify-center items-center gap-3 text-yellow-500 my-6">
      <div className="w-6 h-6 border-4 border-yellow-500 border-dashed rounded-full animate-spin"></div>
      <span className="font-medium text-lg">Cargando...</span>
    </div>
  );
};

export default Loader;