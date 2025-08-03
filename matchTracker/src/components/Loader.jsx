const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
    
      <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      
      <p className="mt-4 text-sm text-gray-600">Loading, please wait...</p>
    </div>
  );
};

export default Loader;
