export const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-slate-700"></div>
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-500 absolute top-0 left-0"></div>
      </div>
    </div>
  );
};

