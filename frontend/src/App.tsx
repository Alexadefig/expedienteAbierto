import Header from "./components/Header";
import CasoCard from "./components/CasoCard";
import { casos } from "./data/casos";

function App() {
  return (
    <div className="min-h-screen bg-stone-200">
      <Header title="Expediente Abierto" totalCasos={casos.length} />

      <main className="max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {casos.map((caso) => (
            <CasoCard key={caso.id} caso={caso} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
