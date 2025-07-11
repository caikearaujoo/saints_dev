// src/data/teams.js
const teams = [
  {
    id: 1,
    name: "Valorant",
    logo: "/imgs/games/valorant.svg",
    gameImage: "/imgs/games/valorant.png", // Adicione esta linha
    players: [
      { name: "gutoso", role: "sentinela", photo: "/imgs/teams/valorant_ravens/gutoso.jpg", team: "Ravens" },
      { name: "fijora", role: "duelista", photo: "/imgs/teams/valorant_ravens/fijora.jpg", team: "Ravens" },
      { name: "cks", role: "iniciador/igl", photo: "/imgs/teams/valorant_ravens/cks.jpg", team: "Ravens" },
      { name: "marelo", role: "controlador", photo: "/imgs/teams/valorant_ravens/mrilo.jpg", team: "Ravens" },
      { name: "fillipin", role: "flex", photo: "/imgs/teams/valorant_ravens/fillipin.jpg", team: "Ravens" },
      { name: "feupe", role: "flex/reserva", photo: "/imgs/teams/valorant_ravens/feupe.png", team: "Ravens" },
      { name: "cjr", role: "manager", photo: "/imgs/teams/valorant_ravens/cjr.jpg", team: "Ravens" },
      { name: "fly", role: "iniciador", photo: "/imgs/teams/valorant_insane/Fly.png", team: "Insane" },
      { name: "oBigZe", role: "flex/igl", photo: "/imgs/teams/valorant_insane/oBigZe.png", team: "Insane" },
      { name: "girafa", role: "controlador", photo: "/imgs/teams/valorant_insane/girafa.jpg", team: "Insane" },
      { name: "drd", role: "duelista", photo: "/imgs/teams/valorant_insane/Drd .jpg", team: "Insane" },
      { name: "morottz", role: "sentinela", photo: "/imgs/teams/valorant_insane/morotz.jpg", team: "Insane" },
       { name: "pessegao", role: "duelista", photo: "/imgs/teams/cs_zentih/pessegao.png", team: "Insane" },
      { name: "nxs", role: "flex", photo: "/imgs/teams/valorant_insane/nexus.jpg", team: "Insane" },
      { name: "berry", role: "iniciadora", photo: "/imgs/teams/valorant_blossom/kelly.png", team: "Blossom" },
      { name: "mari", role: "sentinela", photo: "/imgs/teams/valorant_blossom/mari.jpg", team: "Blossom" },
      { name: "glockadas", role: "duelista/igl", photo: "/imgs/teams/valorant_blossom/Glockadas.jpg", team: "Blossom" },
      { name: "lu", role: "flex", photo: "/imgs/teams/valorant_blossom/Chaosz.jpg", team: "Blossom" },
      { name: "venus", role: "controladora", photo: "/imgs/teams/valorant_blossom/Venus.jpg", team: "Blossom" },
      { name: "candeLARIa", role: "duelista", photo: "/imgs/teams/valorant_blossom/lari.jpg", team: "Blossom" },
      { name: "bel", role: "sentinela", photo: "/imgs/teams/valorant_blossom/bel.jpg", team: "Blossom" },
      { name: "chamuska", role: "controladora", photo: "/imgs/teams/valorant_blossom/chamuska.jpg", team: "Blossom" },
    ],
  },
  {
    id: 2,
    name: "Wild Rift",
    logo: "/imgs/games/wild-rift.svg",
    gameImage: "/imgs/games/wildrift.png", // Adicione esta linha
    players: [
      { name: "metallic", role: "Ad-carry", photo: "/imgs/teams/wildRift/metallic.jpg", team: "Hydra" },
      { name: "sona de calcinha", role: "Suporte", photo: "/imgs/teams/wildRift/sonaSafada.jpeg", team: "Hydra"  },
      { name: "jão imperador", role: "Jungle", photo: "/imgs/teams/wildRift/jaoImperador.jpeg", team: "Hydra"  },
      { name: "chapu", role: "Top", photo: "/imgs/teams/wildRift/chapu.jpg", team: "Hydra"  },
      { name: "reinhard", role: "Jungle", photo: "/imgs/teams/wildRift/reinhardt.jpeg", team: "Hydra"  },
      { name: "martelo nervoso", role: "Ad-carry", photo: "/imgs/teams/wildRift/marteloNervoso.jpeg", team: "Hydra"  },
      { name: "squalo", role: "mid", photo: "/imgs/teams/wildRift/squalo.jpeg", team: "Hydra"  },
      { name: "hamelin", role: "mid", photo: "/imgs/teams/wildRift/hamelin.jpeg", team: "Hydra"  },
      { name: "Ulta Wave", role: "Ad-carry", photo: "/imgs/teams/wildRift/ultaWave.jpeg", team: "Hydra"  },
    ],
  },
  {
    id: 3,
    name: "League of Legends",
    logo: "/imgs/games/lol.svg",
    gameImage: "/imgs/games/lol.png", // Adicione esta linhaue
    players: [
      { name: "internationalLove", role: "Top", photo: "/imgs/teams/lolAces/pdr.jpg", team: "Aces" },
      { name: "maximos", role: "Jungle", photo: "/imgs/teams/lolAces/maximos.jpg", team: "Aces"},
      { name: "ianzera", role: "Mid laner", photo: "/imgs/teams/lolAces/ian.jpg", team: "Aces" },
      { name: "hope", role: "Suporte", photo: "/imgs/teams/lolAces/hope.jpg", team: "Aces" },
      { name: "kain", role: "Ad-carry", photo: "/imgs/teams/lolAces/kain.jpg", team: "Aces" },
      { name: "psicose", role: "Ad-carry", photo: "/imgs/teams/lolSeiya/Psicose.jpg", team: "Seiya" },
      { name: "lhama", role: "Jungle", photo: "/imgs/teams/lolSeiya/isacLhama.jpg", team: "Seiya" },
      { name: "hiren", role: "Mid", photo: "/imgs/teams/lolSeiya/Hiren.jpg", team: "Seiya" },
      { name: "death the arctc", role: "Suporte", photo: "/imgs/teams/lolSeiya/Arthur.jpg", team: "Seiya" },
      { name: "yan", role: "adc", photo: "/imgs/teams/lolSeiya/Pastel.jpg", team: "Seiya"},
      
    ],
  },
  {
    id: 4,
    name: "CS2",
    logo: "/imgs/games/cs2.svg",
    gameImage: "/imgs/games/csgo.png",
    players: [
      { name: "kdd", role: "awper/igl", photo: "/imgs/teams/cs_zentih/kdd.png", team: "Zenith" },
      { name: "bald1", role: "rifler", photo: "/imgs/teams/cs_zentih/bald1.jpg", team: "Zenith" },
      { name: "zekii", role: "solo bomb", photo: "/imgs/teams/cs_zentih/zeki.jpg", team: "Zenith" },
      { name: "kono", role: "rifler", photo: "/imgs/teams/cs_zentih/kono.jpg", team: "Zenith" },
      { name: "pessegão", role: "trader", photo: "/imgs/teams/cs_zentih/pessegao.png", team: "Zenith" },
      { name: "k7", role: "rifler", photo: "/imgs/teams/cs_zentih/k7.jpg", team: "Zenith" },
      { name: "pasini", role: "igl/awp", photo: "/imgs/teams/cs_holy/Pasini.png", team: "Holy Soldiers" },
      { name: "rochevini", role: "rifler", photo: "/imgs/teams/cs_holy/rochevini.png", team: "Holy Soldiers" },
      { name: "pANt", role: "âncora", photo: "/imgs/teams/cs_holy/pANt.png", team: "Holy Soldiers" },
      { name: "rnszz", role: "entry fragger", photo: "/imgs/teams/cs_holy/renan.JPG", team: "Holy Soldiers" },
      { name: "ninbruz", role: "lurker", photo: "/imgs/teams/cs_holy/ninbruz.png", team: "Holy Soldiers" },
    ],
  },
  {
    id: 5,
    name: "Teamfight Tactics",
    logo: "/imgs/games/tft.svg",
    gameImage: "/imgs/games/tft.png", 
    players: [
      { name: "toco gaita", role: "player", photo: "/imgs/teams/tft/gab.jpg", team: "TFT" },
      { name: "hikki", role: "player", photo: "/imgs/teams/tft/Hikki.jpg", team: "TFT" },
      { name: "deklik", role: "player", photo: "/imgs/teams/tft/Deklik.jpg", team: "TFT" },
      { name: "el toru", role: "player", photo: "/imgs/teams/tft/el Toru.jpg", team: "TFT" },
    ],
  },
  {
    id: 6,
    name: "Brawl Stars",
    logo: "/imgs/games/brawl-stars.svg",
    gameImage: "/imgs/games/brawstar.png", // Adicione esta linha
    players: [
      { name: "Jerry", role: "Player", photo: "/imgs/teams/brawlStars/jerry.jpg", team: "Brawl Stars" },
      { name: "Felipe", role: "Player", photo: "/imgs/teams/brawlStars/felipeBS.jpg", team: "Brawl Stars" },
      { name: "Andrey", role: "Player", photo: "/imgs/teams/brawlStars/andrey.jpg", team: "Brawl Stars" },
    ],
  },
  {
    id: 7,
    name: "EA FC 25",
    logo: "/imgs/games/fifa.png",
    gameImage: "/imgs/games/fc25.png", 
    players: [
      { name: "Beatriz", role: "feminino", photo: "/imgs/teams/fifa/Bea.jpeg", team: "Fifa"},
      { name: "Felipe", role: "masculino", photo: "/imgs/teams/fifa/felipeFifa.jpg", team: "Fifa"},
    ],
  },
  {
    id: 8,
    name: "Clash Royale",
    logo: "/imgs/games/clash.svg",
    gameImage: "/imgs/games/clashroyale.png", // Adicione esta linha
    players: [
      { name: "Kono", photo: "/imgs/teams/cs_zentih/kono.jpg", team: "Clash Royale"},

    ],
  },
]

export default teams
