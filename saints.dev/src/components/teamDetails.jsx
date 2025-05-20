import Image from 'next/image';

const playersMock = {
  'Wild Rift': [
    { name: 'Nick', role: 'Gold Laner', image: '/imgs/nick.png' },
    { name: 'Player 2', role: 'Jungle', image: '/imgs/placeholder.png' },
    // etc.
  ],
  // outros times...
};

export default function TeamDetails({ team, onBack }) {
  const players = playersMock[team.name] || [];

  return (
    <div>
      <button onClick={onBack} className="mb-4 text-sm underline">&larr; Voltar</button>
      <h2 className="text-2xl font-bold mb-4">{team.name}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {players.map((player, index) => (
          <div key={index} className="text-center">
            <Image
              src={player.image}
              alt={player.name}
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
            <p className="font-semibold">{player.name}</p>
            <p className="text-sm text-gray-500">{player.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
