// src/data/teams.js
const teams = [
  {
    id: 1,
    name: "Valorant",
    logo: "/imgs/games/valorant.svg",
    gameImage: "/imgs/games/valorant.png", // Adicione esta linha
    players: [
      { name: "cks", role: "iniciador/igl", photo: "/imgs/teams/cks.jpg", team: "Ravens" },
      { name: "gutoso", role: "sentinela", photo: "/imgs/teams/gutoso.jpg", team: "Ravens" },
      { name: "fijora", role: "duelista", photo: "/imgs/teams/fijora.jpg", team: "Ravens" },
      { name: "marelo", role: "controlador", photo: "/imgs/teams/mrilo.jpg", team: "Ravens" },
      { name: "fillipin", role: "flex", photo: "/imgs/teams/fillipin.jpg", team: "Ravens" },
      { name: "feupe", role: "flex/reserva", photo: "/imgs/teams/feupe.jpg", team: "Ravens" },
      { name: "oBigZe", role: "flex/igl", photo: "/imgs/teams/card_player.png" },
      { name: "fly", role: "iniciador", photo: "/imgs/teams/card_player.png" },
      { name: "pessegao", role: "sentinela", photo: "/imgs/teams/card_player.png" },
      { name: "girafa", role: "controlador", photo: "/imgs/teams/card_player.png" },
      { name: "morottz", role: "duelista", photo: "/imgs/teams/card_player.png" },
      { name: "glockadas", role: "duelista/igl", photo: "/imgs/teams/card_player.png" },
      { name: "berry", role: "iniciadora", photo: "/imgs/teams/kelly.png" },
      { name: "bel", role: "sentinela", photo: "/imgs/teams/card_player.png" },
      { name: "lu", role: "flex", photo: "/imgs/teams/card_player.png" },
      { name: "venus", role: "controladora", photo: "/imgs/teams/card_player.png" },
    ],
  },
  {
    id: 2,
    name: "Wild Rift",
    logo: "/imgs/games/wild-rift.svg",
    gameImage: "/imgs/games/wildrift.png", // Adicione esta linha
    players: [
      { name: "metallic", role: "ad-carry", photo: "/imgs/teams/card_player.png" },
      { name: "sona de calcinha", role: "suporte", photo: "/imgs/teams/card_player.png" },
      { name: "jão imperador", role: "jungle", photo: "/imgs/teams/card_player.png" },
      { name: "tempestade", role: "top laner", photo: "/imgs/teams/card_player.png" },
      { name: "reinhard", role: "jungle", photo: "/imgs/teams/card_player.png" },
      { name: "martelo nervoso", role: "mid laner", photo: "/imgs/teams/card_player.png" },
    ],
  },
  {
    id: 3,
    name: "League of Legends",
    logo: "/imgs/games/lol.svg",
    gameImage: "/imgs/games/lol.png", // Adicione esta linha
    players: [
      { name: "blooper", role: "suporte", photo: "/imgs/teams/card_player.png" },
      { name: "jotinha", role: "jungle", photo: "/imgs/teams/card_player.png" },
      { name: "r21", role: "top laner", photo: "/imgs/teams/card_player.png" },
      { name: "xistê", role: "ad-carry", photo: "/imgs/teams/card_player.png" },
      { name: "zulgar", role: "mid laner", photo: "/imgs/teams/card_player.png" },
      { name: "internationalLove", role: "top laner", photo: "/imgs/teams/card_player.png" },
      { name: "maximos", role: "jungle", photo: "/imgs/teams/card_player.png" },
      { name: "ianzera", role: "mid laner", photo: "/imgs/teams/card_player.png" },
      { name: "kain", role: "ad-carry", photo: "/imgs/teams/card_player.png" },
      { name: "mizu", role: "suporte", photo: "/imgs/teams/card_player.png" },
      { name: "psicose", role: "top", photo: "/imgs/teams/card_player.png" },
      { name: "lhama", role: "Gold", photo: "/imgs/teams/card_player.png" },
      { name: "hiras", role: "Gold", photo: "/imgs/teams/card_player.png" },
      { name: "hope", role: "Gold", photo: "/imgs/teams/card_player.png" },
    ],
  },
  {
    id: 4,
    name: "CS2",
    logo: "/imgs/games/cs2.svg",
    gameImage: "/imgs/games/csgo.png", // Adicione esta linha
    players: [
      { name: "kdd", role: "awper/igl", photo: "/imgs/teams/card_player.png" },
      { name: "bald1", role: "rifler", photo: "/imgs/teams/card_player.png" },
      { name: "zekii", role: "solo bomb", photo: "/imgs/teams/card_player.png" },
      { name: "pessegão", role: "lurker", photo: "/imgs/teams/card_player.png" },
      { name: "k7", role: "rifler", photo: "/imgs/teams/card_player.png" },
      { name: "passini", role: "Gold", photo: "/imgs/teams/card_player.png" },
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
