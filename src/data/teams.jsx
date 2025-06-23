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
      { name: "feupe", role: "flex/reserva", photo: "/imgs/teams/valorant_ravens/feupe.jpg", team: "Ravens" },
      { name: "fly", role: "iniciador", photo: "/imgs/teams/card_player.png", team: "Insane" },
      { name: "pessegao", role: "sentinela", photo: "/imgs/teams/card_player.png", team: "Insane" },
      { name: "oBigZe", role: "flex/igl", photo: "/imgs/teams/card_player.png", team: "Insane" },
      { name: "girafa", role: "controlador", photo: "/imgs/teams/card_player.png", team: "Insane" },
      { name: "morottz", role: "duelista", photo: "/imgs/teams/card_player.png", team: "Insane" },
      { name: "berry", role: "iniciadora", photo: "/imgs/teams/valorant_blossom/kelly.png", team: "Blossom" },
      { name: "bel", role: "sentinela", photo: "/imgs/teams/card_player.png", team: "Blossom" },
      { name: "glockadas", role: "duelista/igl", photo: "/imgs/teams/card_player.png", team: "Blossom" },
      { name: "lu", role: "flex", photo: "/imgs/teams/card_player.png", team: "Blossom" },
      { name: "venus", role: "controladora", photo: "/imgs/teams/card_player.png", team: "Blossom" },
    ],
  },
  {
    id: 2,
    name: "Wild Rift",
    logo: "/imgs/games/wild-rift.svg",
    gameImage: "/imgs/games/wildrift.png", // Adicione esta linha
    players: [
      { name: "metallic", role: "Ad-carry", photo: "/imgs/teams/card_player.png" },
      { name: "sona de calcinha", role: "Suporte", photo: "/imgs/teams/card_player.png" },
      { name: "jão imperador", role: "Jungle", photo: "/imgs/teams/card_player.png" },
      { name: "tempestade", role: "Top", photo: "/imgs/teams/card_player.png" },
      { name: "reinhard", role: "Jungle", photo: "/imgs/teams/card_player.png" },
      { name: "martelo nervoso", role: "Ad-carry", photo: "/imgs/teams/card_player.png" },
      { name: "hamelin", role: "mid", photo: "/imgs/teams/card_player.png" },
      { name: "ethereal", role: "mid", photo: "/imgs/teams/card_player.png" },
      { name: "Ulta Wave", role: "Ad-carry", photo: "/imgs/teams/card_player.png" },
    ],
  },
  {
    id: 3,
    name: "League of Legends",
    logo: "/imgs/games/lol.svg",
    gameImage: "/imgs/games/lol.png", // Adicione esta linha
    players: [
      { name: "blooper", role: "Suporte", photo: "/imgs/teams/card_player.png", team: "Comp" },
      { name: "jotinha", role: "Jungle", photo: "/imgs/teams/card_player.png", team: "Comp"},
      { name: "r21", role: "Top", photo: "/imgs/teams/card_player.png", team: "Comp"},
      { name: "xistê", role: "Ad-carry", photo: "/imgs/teams/card_player.png", team: "Comp"},
      { name: "internationalLove", role: "Top", photo: "/imgs/teams/card_player.png", team: "Aces" },
      { name: "maximos", role: "Jungle", photo: "/imgs/teams/card_player.png", team: "Aces"},
      { name: "ianzera", role: "Mid laner", photo: "/imgs/teams/card_player.png", team: "Aces" },
      { name: "hope", role: "Suporte", photo: "/imgs/teams/card_player.png", team: "Aces" },
      { name: "kain", role: "Ad-carry", photo: "/imgs/teams/card_player.png", team: "Aces" },
      { name: "psicose", role: "Ad-carry", photo: "/imgs/teams/card_player.png", team: "Seiya" },
      { name: "lhama", role: "Jungle", photo: "/imgs/teams/card_player.png", team: "Seiya" },
      { name: "hiras", role: "Mid", photo: "/imgs/teams/card_player.png", team: "Seiya" },
      { name: "pastel vesgo", role: "Ad-carry", photo: "/imgs/teams/card_player.png", team: "Seiya" },
      { name: "death the arctc", role: "Suporte", photo: "/imgs/teams/card_player.png", team: "Seiya" },
      
    ],
  },
  {
    id: 4,
    name: "CS2",
    logo: "/imgs/games/cs2.svg",
    gameImage: "/imgs/games/csgo.png",
    players: [
      { name: "kdd", role: "awper/igl", photo: "/imgs/teams/cs_zentih/card_player.png", team: "Zenith" },
      { name: "bald1", role: "rifler", photo: "/imgs/teams/cs_zentih/bald1.jpg", team: "Zenith" },
      { name: "zekii", role: "solo bomb", photo: "/imgs/teams/cs_zentih/zeki.jpg", team: "Zenith" },
      { name: "kono", role: "rifler", photo: "/imgs/teams/cs_zentih/kono.jpg", team: "Zenith" },
      { name: "pessegão", role: "trader", photo: "/imgs/teams/cs_zentih/pessegao.png", team: "Zenith" },
      { name: "k7", role: "rifler", photo: "/imgs/teams/cs_zentih/card_player.png", team: "Zenith" },
      { name: "pasini", role: "igl/awp", photo: "/imgs/teams/cs_holy/Pasini.png", team: "Holy Soldiers" },
      { name: "rochevini", role: "rifler", photo: "/imgs/teams/cs_holy/rochevini.png", team: "Holy Soldiers" },
      { name: "pANt", role: "âncora", photo: "/imgs/teams/cs_holy/pANt.png", team: "Holy Soldiers" },
      { name: "rnszz", role: "entry fragger", photo: "/imgs/teams/cs_holy/card_player.png", team: "Holy Soldiers" },
      { name: "ninbruz", role: "lurker", photo: "/imgs/teams/cs_holy/ninbruz.png", team: "Holy Soldiers" },
    ],
  },
  {
    id: 5,
    name: "Teamfight Tactics",
    logo: "/imgs/games/tft.svg",
    gameImage: "/imgs/games/tft.png", // Adicione esta linha
    players: [
      { name: "toco gaita", role: "player", photo: "/imgs/teams/card_player.png" },
      { name: "hikki", role: "player", photo: "/imgs/teams/card_player.png" },
      { name: "deklik", role: "player", photo: "/imgs/teams/card_player.png" },
      { name: "el toru", role: "player", photo: "/imgs/teams/card_player.png" },
    ],
  },
  {
    id: 6,
    name: "Brawl Stars",
    logo: "/imgs/games/brawl-stars.svg",
    gameImage: "/imgs/games/brawstar.png", // Adicione esta linha
    players: [
      { name: "Jerry", role: "Gold", photo: "/imgs/teams/card_player.png" },
      { name: "Felipe", role: "Gold", photo: "/imgs/teams/card_player.png" },
      { name: "Andrey", role: "Gold", photo: "/imgs/teams/card_player.png" },
    ],
  },
  {
    id: 7,
    name: "EA FC 25",
    logo: "/imgs/games/fifa.png",
    gameImage: "/imgs/games/fc25.png", // Adicione esta linha
    players: [
      { name: "Beatriz", role: "player", photo: "/imgs/teams/card_player.png" },
      { name: "Felipe", role: "player", photo: "/imgs/teams/card_player.png" },
    ],
  },
  {
    id: 8,
    name: "Clash Royale",
    logo: "/imgs/games/clash.svg",
    gameImage: "/imgs/games/clashroyale.png", // Adicione esta linha
    players: [
      { name: "Carlos", role: "player", photo: "/imgs/teams/card_player.png" },
      { name: "Kono", role: "player", photo: "/imgs/teams/card_player.png" },
    ],
  },
]

export default teams
