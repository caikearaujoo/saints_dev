'use client';
import { useState } from 'react';
import TeamDetails from './TeamDetails';
import TeamCard from './teamCard';

const teams = [
  { name: 'Wild Rift', logo: '/imgs/wildrift.png' },
  { name: 'Valorant', logo: '/imgs/valorant.png' },
  { name: 'CS', logo: '/imgs/cs.png' },
  // Adicione os demais
];

export default function Times() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  return (
    <section className="p-8">
      {!selectedTeam ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teams.map((team) => (
            <TeamCard key={team.name} team={team} onClick={() => setSelectedTeam(team)} />
          ))}
        </div>
      ) : (
        <TeamDetails team={selectedTeam} onBack={() => setSelectedTeam(null)} />
      )}
    </section>
  );
}

