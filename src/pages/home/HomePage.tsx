import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProperties } from "../../hooks/useProperties";
import { Loader, Table, Filters } from "../../components";
import type { PropertyFilter } from "../../types/property";

const ITEMS_PER_PAGE = 10;

export const HomePage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [appliedFilters, setAppliedFilters] = useState<PropertyFilter>({
    Name: "",
    Address: "",
    MinPrice: null,
    MaxPrice: null,
  });

  const { properties, loading, error } = useProperties(appliedFilters);

  // Resetear a la página 1 cuando cambian las propiedades
  useEffect(() => {
    setCurrentPage(1);
  }, [properties.length]);

  // Calcular el total de páginas
  const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE);

  // Obtener las propiedades de la página actual
  const currentProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return properties.slice(startIndex, endIndex);
  }, [properties, currentPage]);

  const handleViewDetails = (propertyId: string) => {
    navigate(`/property/${propertyId}`);
  };

  const handleApplyFilters = (filters: PropertyFilter) => {
    setAppliedFilters(filters);
    setCurrentPage(1); // Resetear a la primera página al aplicar filtros
  };

  const handleClearFilters = () => {
    setAppliedFilters({
      Name: "",
      Address: "",
      MinPrice: null,
      MaxPrice: null,
    });
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 mb-2">
            Propiedades Inmobiliarias
          </h1>
          <p className="text-slate-400 text-lg">
            Encuentra la propiedad perfecta para ti
          </p>
        </div>

        {/* Filtros de búsqueda */}
        <Filters
          onApplyFilters={handleApplyFilters}
          onClearFilters={handleClearFilters}
        />

        {/* Tabla de propiedades */}
        <Table
          properties={currentProperties}
          onViewDetails={handleViewDetails}
        />

        {/* Paginador */}
        {properties.length > 0 && totalPages > 1 && (
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-800/50 px-6 py-4 rounded-xl border border-slate-700">
            <div className="text-slate-400 text-sm">
              Mostrando{" "}
              <span className="font-semibold text-cyan-400">
                {(currentPage - 1) * ITEMS_PER_PAGE + 1}
              </span>{" "}
              a{" "}
              <span className="font-semibold text-cyan-400">
                {Math.min(currentPage * ITEMS_PER_PAGE, properties.length)}
              </span>{" "}
              de{" "}
              <span className="font-semibold text-cyan-400">
                {properties.length}
              </span>{" "}
              propiedades
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  currentPage === 1
                    ? "bg-slate-700 text-slate-500 cursor-not-allowed"
                    : "bg-linear-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/50"
                }`}
              >
                Anterior
              </button>

              <div className="gap-1 hidden lg:flex">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => {
                    if (
                      totalPages <= 7 ||
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-10 h-10 rounded-lg font-semibold transition-all duration-200 ${
                            currentPage === page
                              ? "bg-linear-to-r from-cyan-500 to-blue-500 text-white shadow-lg scale-110"
                              : "bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    } else if (
                      page === currentPage - 2 ||
                      page === currentPage + 2
                    ) {
                      return (
                        <span
                          key={page}
                          className="w-10 h-10 flex items-center justify-center text-slate-500"
                        >
                          ...
                        </span>
                      );
                    }
                    return null;
                  }
                )}
              </div>

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  currentPage === totalPages
                    ? "bg-slate-700 text-slate-500 cursor-not-allowed"
                    : "bg-linear-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/50"
                }`}
              >
                Siguiente
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
