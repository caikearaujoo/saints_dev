import Image from 'next/image';

export default function TeamCard({ team, onClick }) {
  return (
    <button onClick={onClick} className="border rounded p-4 hover:scale-105 transition">
      <Image src={team.logo} alt={team.name} width={100} height={100} className="mx-auto" />
    </button>
  );
}
