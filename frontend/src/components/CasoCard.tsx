import type { Caso, Dificultad } from "../types/caso";

interface CasoCardProps {
  caso: Caso;
}

const coloresDificultad: Record<Dificultad, string> = {
  baja: "bg-emerald-100 text-emerald-800",
  media: "bg-amber-100 text-amber-800",
  alta: "bg-red-100 text-red-800",
};

function CasoCard({ caso }: CasoCardProps) {
  return (
    <article className="bg-stone-50 border border-stone-300 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-xs font-mono text-stone-500">{caso.codigo}</p>
          <h2 className="text-lg font-semibold text-stone-900">{caso.titulo}</h2>
        </div>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${coloresDificultad[caso.dificultad]}`}
        >
          {caso.dificultad}
        </span>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">{caso.descripcion}</p>

      <dl className="mt-4 text-sm space-y-1">
        <div>
          <dt className="inline font-medium text-stone-800">Víctima: </dt>
          <dd className="inline text-stone-600">{caso.victima}</dd>
        </div>
        <div>
          <dt className="inline font-medium text-stone-800">Lugar: </dt>
          <dd className="inline text-stone-600">{caso.ubicacion}</dd>
        </div>
      </dl>

      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-stone-200">
        {caso.sospechosos.map((nombre) => (
          <span key={nombre} className="bg-stone-200 text-stone-700 text-xs px-2.5 py-1 rounded-md">
            {nombre}
          </span>
        ))}
      </div>
    </article>
  );
}

export default CasoCard;
