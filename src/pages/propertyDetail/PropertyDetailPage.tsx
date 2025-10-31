import { useParams, useNavigate, Link } from "react-router-dom";
import { usePropertyDetail } from "../../hooks/usePropertyDetail";
import { Loader } from "../../components/ui/loader";

export const PropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { property, loading, error } = usePropertyDetail(id || "");

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center bg-slate-800/80 border border-slate-700 rounded-xl p-8 shadow-2xl">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
          <p className="text-slate-300 mb-6">{error}</p>
          <Link
            to="/home"
            className="inline-block px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/50"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center bg-slate-800/80 border border-slate-700 rounded-xl p-8 shadow-2xl">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <h2 className="text-2xl font-bold text-slate-200 mb-4">
            Propiedad no encontrada
          </h2>
          <Link
            to="/home"
            className="inline-block px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/50"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <button
          onClick={() => navigate("/home")}
          className="mb-6 flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-all duration-200 group"
        >
          <svg
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Volver a propiedades
        </button>

        <div className="bg-slate-800/80 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-linear-to-r from-cyan-600 to-blue-600 px-8 py-6">
            <h1 className="text-4xl font-bold text-white">{property.name}</h1>
            <p className="text-cyan-100 mt-2 flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                />
              </svg>
              Código: {property.ownerId}
            </p>
          </div>

          <div className="px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-700/50 rounded-lg p-5 border border-slate-600 hover:border-cyan-500/50 transition-all duration-200">
                <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Dirección
                </h2>
                <p className="text-lg text-white font-medium">
                  {property.address}
                </p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-5 border border-slate-600 hover:border-emerald-500/50 transition-all duration-200">
                <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Precio
                </h2>
                <p className="text-3xl font-bold text-emerald-400">
                  ${property.price.toLocaleString("es-CO")}
                </p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-5 border border-slate-600 hover:border-blue-500/50 transition-all duration-200">
                <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Propietario
                </h2>
                <p className="text-lg text-white font-medium">
                  {property.ownerName}
                </p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-5 border border-slate-600 hover:border-cyan-500/50 transition-all duration-200">
                <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Año
                </h2>
                <p className="text-lg text-white font-medium">
                  {property.year}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700">
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-5 flex items-center">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Información adicional
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <span className="text-slate-400 text-sm">
                    ID de propiedad:
                  </span>
                  <p className="text-cyan-300 font-mono font-semibold mt-1">
                    {property.id}
                  </p>
                </div>

                {property.images &&
                  property.images.length > 0 &&
                  property.images[0].file && (
                    <div className="md:col-span-2 bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                      <span className="text-slate-400 text-sm mb-3 block">
                        Imágenes de la propiedad:
                      </span>
                      <div className="gap-4">
                        {property.images.map((image, index) => (
                          <div key={image.id} className="relative group">
                            <img
                              src={image.file}
                              alt={`Imagen ${index + 1}`}
                              className="w-50 h-50 object-cover rounded-lg border-2 border-slate-600 group-hover:border-cyan-500 transition-all duration-200 shadow-lg"
                            />
                            <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-lg transition-all duration-200"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {(!property.images ||
                  property.images.length === 0 ||
                  !property.images[0].file) && (
                  <div className="md:col-span-2 bg-slate-700/30 rounded-lg p-6 border border-slate-600/50 text-center">
                    <svg
                      className="w-12 h-12 mx-auto text-slate-600 mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-slate-400">
                      No hay imágenes disponibles
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
