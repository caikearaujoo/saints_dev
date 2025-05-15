const categorias = [
  { nome: 'E-sports', icon: '/next.svg' },
  { nome: 'Campo', icon: '/file.svg' },
  { nome: 'Quadra', icon: '/window.svg' },
];

export default function Times() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-10">Times</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {categorias.map((cat) => (
          <div key={cat.nome} className="bg-[#1F1F1F] rounded-xl p-6 text-center hover:scale-105 transition">
            <img src={cat.icon} alt={cat.nome} className="w-16 h-16 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white">{cat.nome}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
