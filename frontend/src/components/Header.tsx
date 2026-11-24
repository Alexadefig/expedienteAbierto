interface HeaderProps {
  title: string;
  totalCasos: number;
}

function Header({ title, totalCasos }: HeaderProps) {
  return (
    <header className="bg-stone-950 text-stone-100 py-6 px-4 border-b border-amber-700/40">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <span className="bg-amber-600 text-stone-950 text-sm font-semibold px-3 py-1 rounded-full">
          {totalCasos} casos abiertos
        </span>
      </div>
    </header>
  );
}

export default Header;
