export default function TeamDetails({ team, onBack }) {
  return (
    <div className="text-center">
      <button onClick={onBack} className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
        ⬅ Voltar
      </button>
      <h2 className="text-2xl font-bold mb-4">{team.name}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {team.players.map((player, index) => (
          <div key={index} className="bg-white p-4 rounded shadow text-center">
            <img src={player.photo} alt={player.name} className="h-24 w-24 mx-auto rounded-full object-cover mb-2" />
            <h3 className="font-semibold">{player.name}</h3>
            <p className="text-sm text-gray-500">{player.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
