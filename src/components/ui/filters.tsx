import { useState } from "react";
import type { PropertyFilter } from "../../types/property";

interface FiltersProps {
  onApplyFilters: (filters: PropertyFilter) => void;
  onClearFilters: () => void;
}

export const Filters = ({ onApplyFilters, onClearFilters }: FiltersProps) => {
  const [localFilters, setLocalFilters] = useState<PropertyFilter>({
    Name: "",
    Address: "",
    MinPrice: null,
    MaxPrice: null,
  });

  const handleInputChange = (field: keyof PropertyFilter, value: string) => {
    setLocalFilters((prev) => ({
      ...prev,
      [field]: value === "" ? (field === "Name" || field === "Address" ? "" : null) : 
               field === "MinPrice" || field === "MaxPrice" ? parseFloat(value) || null : value,
    }));
  };

  const handleApply = () => {
    onApplyFilters(localFilters);
  };

  const handleClear = () => {
    const emptyFilters: PropertyFilter = {
      Name: "",
      Address: "",
      MinPrice: null,
      MaxPrice: null,
    };
    setLocalFilters(emptyFilters);
    onClearFilters();
  };

  return (
    <div className="mb-6 bg-slate-800/80 border border-slate-700 rounded-xl p-6 shadow-2xl">
      <div className="flex items-center mb-4">
        <svg
          className="w-5 h-5 mr-2 text-cyan-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
        <h2 className="text-lg font-bold text-cyan-400 uppercase tracking-wider">
          Filtros de Búsqueda
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Nombre */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-slate-400 mb-2"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            value={localFilters.Name}
            onChange={(e) => handleInputChange("Name", e.target.value)}
            placeholder="Buscar por nombre..."
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Dirección */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-semibold text-slate-400 mb-2"
          >
            Dirección
          </label>
          <input
            id="address"
            type="text"
            value={localFilters.Address}
            onChange={(e) => handleInputChange("Address", e.target.value)}
            placeholder="Buscar por dirección..."
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Precio Mínimo */}
        <div>
          <label
            htmlFor="minPrice"
            className="block text-sm font-semibold text-slate-400 mb-2"
          >
            Precio Mínimo
          </label>
          <input
            id="minPrice"
            type="number"
            value={localFilters.MinPrice || ""}
            onChange={(e) => handleInputChange("MinPrice", e.target.value)}
            placeholder="$0"
            min="0"
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Precio Máximo */}
        <div>
          <label
            htmlFor="maxPrice"
            className="block text-sm font-semibold text-slate-400 mb-2"
          >
            Precio Máximo
          </label>
          <input
            id="maxPrice"
            type="number"
            value={localFilters.MaxPrice || ""}
            onChange={(e) => handleInputChange("MaxPrice", e.target.value)}
            placeholder="$999,999,999"
            min="0"
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <button
          onClick={handleApply}
          className="flex-1 sm:flex-none px-6 py-2.5 bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Buscar
        </button>
        <button
          onClick={handleClear}
          className="flex-1 sm:flex-none px-6 py-2.5 bg-slate-700 text-slate-300 font-semibold rounded-lg hover:bg-slate-600 hover:text-white transition-all duration-200 flex items-center justify-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          Limpiar
        </button>
      </div>
    </div>
  );
};

