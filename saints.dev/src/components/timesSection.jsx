'use client';

import { useState } from 'react';
import TeamCard from './TeamCard';
import TeamDetails from './TeamDetails';
import teams from '../data/teams';

export default function TimesSection() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleSelect = (team) => setSelectedTeam(team);
  const handleBack = () => setSelectedTeam(null);

  return (
    <section className="py-16 px-8 bg-[#f6f0e8] text-black min-h-screen">
      {selectedTeam ? (
        <TeamDetails team={selectedTeam} onBack={handleBack} />
      ) : (
        <>
          <h2 className="text-3xl font-nikea mb-8 text-center">Conheça nossos jogadores</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teams.map((team, index) => (
              <TeamCard key={index} team={team} onClick={handleSelect} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
