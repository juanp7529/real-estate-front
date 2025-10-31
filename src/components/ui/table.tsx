import type { PropertyTable } from "../../types/property";

interface TableProps {
  properties: PropertyTable[];
  onViewDetails: (id: string) => void;
}

export const Table = ({ properties, onViewDetails }: TableProps) => {
  return (
    <div className="relative overflow-x-auto shadow-2xl rounded-xl border border-slate-700 custom-scrollbar table-container scroll-smooth">
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase bg-linear-to-r from-cyan-600 to-blue-600 text-white">
          <tr>
            <th
              scope="col"
              className="px-6 py-4 font-bold tracking-wider min-w-[100px]"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-bold tracking-wider min-w-[200px]"
            >
              Nombre
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-bold tracking-wider min-w-[250px]"
            >
              Dirección
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-bold tracking-wider min-w-[150px]"
            >
              Precio
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-bold tracking-wider min-w-[200px]"
            >
              Imagen
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-bold tracking-wider text-center sticky right-0 bg-linear-to-r from-cyan-600 to-blue-600 shadow-[-4px_0_8px_rgba(0,0,0,0.3)] min-w-[150px] z-10"
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="bg-slate-800">
          {properties.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="px-6 py-8 text-center text-slate-400 bg-slate-800/50"
              >
                <div className="flex flex-col items-center">
                  <svg
                    className="w-16 h-16 mb-4 text-slate-600"
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
                  <p className="text-lg font-medium">
                    No hay propiedades disponibles
                  </p>
                </div>
              </td>
            </tr>
          ) : (
            properties.map((property: PropertyTable, index: number) => (
              <tr
                key={property.id}
                className={`border-b border-slate-700 transition-all duration-300 hover:bg-linear-to-r hover:from-cyan-900/40 hover:to-blue-900/40 hover:scale-[1.01] hover:shadow-lg ${
                  index % 2 === 0 ? "bg-slate-800/50" : "bg-slate-800/80"
                }`}
              >
                <td className="px-6 py-4 font-semibold text-cyan-400">
                  {property.idOwner}
                </td>
                <td className="px-6 py-4 font-bold text-white whitespace-nowrap">
                  {property.propertyName}
                </td>
                <td className="px-6 py-4 text-slate-300">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-cyan-500"
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
                    {property.address}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-emerald-400 font-bold text-lg">
                    ${property.price.toLocaleString("es-CO")}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-400">
                  {property.image ? (
                    <img
                      src={property.image}
                      alt={property.propertyName}
                      className="w-50 h-40 object-cover rounded-lg"
                    />
                  ) : (
                    <h1 className="text-center text-slate-400">Sin imagen</h1>
                  )}
                </td>
                <td
                  className={`px-6 py-4 text-center sticky right-0 z-10 ${
                    index % 2 === 0 ? "bg-slate-800" : "bg-slate-800"
                  }`}
                >
                  <button
                    onClick={() => onViewDetails(property.id)}
                    className="px-4 py-2 bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/50"
                  >
                    Ver Detalle
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
