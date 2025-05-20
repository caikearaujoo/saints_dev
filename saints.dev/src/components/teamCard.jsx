export default function TeamCard({ team, onClick }) {
  return (
    <div
      className="cursor-pointer border rounded-lg p-4 hover:scale-105 transition-transform shadow-md"
      onClick={() => onClick(team)}
    >
      <img src={team.logo} alt={team.name} className="h-20 mx-auto mb-2" />
      <h3 className="text-center font-bold">{team.name}</h3>
    </div>
  );
}
