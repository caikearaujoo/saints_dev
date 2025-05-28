// src/components/TimesSection.jsx
'use client';

import { useState } from 'react';
import TeamCard from './TeamCard';
import TeamDetails from './TeamDetails';
import teams from '../data/teams'; // Seus dados de times

export default function TimesSection() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleSelect = (team) => setSelectedTeam(team);
  const handleBack = () => setSelectedTeam(null);

  return (
    // Certifique-se de que o fundo desta seção permita a visibilidade do gradiente animado
    <section className="py-16 px-8 text-black min-h-screen"> {/* REMOVIDO bg-[#f6f0e8] se você quer o gradiente de fundo */}
      {selectedTeam ? (
        // Se um time for selecionado, mostra os detalhes
        <TeamDetails team={selectedTeam} onBack={handleBack} />
      ) : (
        // Se nenhum time for selecionado, mostra a grade de times
        <>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-nikea mb-8 md:mb-12 text-center">Conheça nossos jogadores</h2>
          {/* Container da grade de times */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
            {teams.map((team) => (
              // Usar team.id como key é fundamental para performance e estabilidade do React
              <TeamCard key={team.id} team={team} onClick={handleSelect} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}