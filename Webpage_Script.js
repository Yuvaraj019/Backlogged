document.addEventListener('DOMContentLoaded', () => {
  const gameContainer = document.getElementById("gameContainer");
  const searchInput = document.getElementById("searchInput");

  const gamesTabBtn = document.getElementById("gamesTabBtn");
  const showAllBtn = document.getElementById("showAllBtn");
  const countdownTabBtn = document.getElementById("countdownTabBtn");

  const countdownContainer = document.getElementById("countdownContainer");
  const paginationContainer = document.getElementById("paginationContainer");

const defaultGames = [
  {
    "title": "Silent Hill: Townfall",
    "image": "https://cdn2.steamgriddb.com/grid/c5feaba9bd5eea1f30f48b003e1b45a0.png",
    "rating": 8.8,
    "playtime":"12h 45m" 
  },
  {
    "title": "Senua's Saga: Hellblade II",
    "image": "https://cdn2.steamgriddb.com/grid/52e0a83f4ce756d2a8e9218893f4b456.jpg",
    "rating": 8.2,
    "playtime":"08h 45m" 
  },
  {
    "title": "Hellblade: Senua's Sacrifice",
    "image": "https://cdn2.steamgriddb.com/grid/ed3b840b760c76c641f93ad8ec7f028d.jpg",
    "rating": 8.0,
    "playtime":"07h 30m" 
  },
  {
    "title": "Resonance: A Plague Tale Legacy",
    "image": "https://cdn2.steamgriddb.com/grid/4b7348b4d0ce320915750e6aa2f887ad.jpg",
    "rating": 9.0,
    "playtime":"18h 45m" 
  },
  {
    "title": "Uncharted 3: Drake's Deception",
    "image": "https://cdn2.steamgriddb.com/grid/934ea09b54f712ffd0968348ffef538e.png",
    "rating": 8.9,
    "playtime":"13h 15m" 
  },  
  {
    "title": "Uncharted 2: Among Thieves",
    "image": "https://cdn2.steamgriddb.com/grid/e7b12319be829d727ca78d9ad16d20a1.png",
    "rating": 9.0,
    "playtime":"13h 40m" 
  },  
  {
    "title": "Uncharted: Drake's Fortune",
    "image": "https://cdn2.steamgriddb.com/grid/aac79a23aefdab909e904c8c4e1f7902.png",
    "rating": 8.8,
    "playtime":"12h 30m" 
  },  
{
    "title": "God of War: Ascension",
    "image": "https://cdn2.steamgriddb.com/grid/42e8c9ebd147ba965b67f409a4a3abfb.png",
    "rating": 9.0,
    "playtime": "13h 45m"
  }, 
 {
    "title": "God of War III",
    "image": "https://cdn2.steamgriddb.com/grid/cc004e653cc78176c82cba30329b1c68.png",
    "rating": 9.4,
    "playtime": "13h 45m"
  },
 {
    "title": "Cyberpunk 2077",
    "image": "https://cdn2.steamgriddb.com/grid/57875cc37aa56f95bd092e43defff5ca.png",
    "rating": 9.7,
    "playtime": "108h 45m"
  },
 {
    "title": "Lies of P",
    "image": "https://cdn2.steamgriddb.com/grid/9fe36ac25de2021d1e449133214819ec.png",
    "rating": 9.5,
    "playtime": "28h 45m"
  },
 {
    "title": "Mafia: The Old Country",
    "image": "https://cdn2.steamgriddb.com/grid/1eb3cf00f81532b419b25155dbeb93d0.png",
    "rating": 9.2,
    "playtime": "24h 45m"
  },
  {
    "title": "007 First Light",
    "image": "https://cdn2.steamgriddb.com/grid/cb9a6390a5d304b15c069a361d23a199.jpg",
    "rating": 9.6,
    "playtime": "23h 45m"
  },
  {
    "title": "Alan Wake 2",
    "image": "https://cdn2.steamgriddb.com/grid/b803d6d724c2136e8b36139dc81a40a3.png",
    "rating": 8.8,
    "playtime": "32h 32m"
  },
  {
    "title": "Silent Hill 2",
    "image": "https://cdn2.steamgriddb.com/grid/f7a35f8b965053c8f8cd97eb7a323ce8.png",
    "rating": 9.0,
    "playtime": "12h 32m"
  },
  {
    "title": "Pragmata",
    "image": "https://cdn2.steamgriddb.com/grid/96549a39db896a82c45d9a71da2d0b2c.jpg",
    "rating": 9.2,
    "playtime": "22h 32m"
  },
  {
    "title": "Resident Evil 9 Requiem",
    "image": "https://cdn2.steamgriddb.com/grid/e3cf3ff11d36001376d6975660f8055e.jpg",
    "rating": 9.5,
    "playtime": "11h 50m"
  },
  {
    "title": "Grand Theft Auto V",
    "image": "https://cdn2.steamgriddb.com/grid/606fba3348ce5167b617cd9804bce8bc.png",
    "rating": 9.8,
    "playtime": "338h 30m"
  },
  {
    "title": "Blasphemous 2",
    "image": "https://cdn2.steamgriddb.com/grid/372643ad710404a1ce467412f7312d7c.jpg",
    "rating": 8.4,
    "playtime": "40h 15m"
  },
  {
    "title": "Indiana Jones and the Great Circle",
    "image": "https://cdn2.steamgriddb.com/grid/df3b6c07f5b24d02bdf6ff50d68df1c7.png",
    "rating": 9.0,
    "playtime": "18h 45m"
  },
  {
    "title": "A Plague Tale: Innocence",
    "image": "https://cdn2.steamgriddb.com/grid/8102aa49c172d9bb1b9a270db6fa4b87.jpg",
    "rating": 8.5,
    "playtime": "12h 54m"
  },
  {
    "title": "A Plague Tale: Requiem",
    "image": "https://cdn2.steamgriddb.com/grid/1d035331ed376795c1f14479b94ee940.jpg",
    "rating": 8.3,
    "playtime": "20h 48m"
  },
  {
    "title": "Atlas Fallen: Reign Of Sand",
    "image": "https://cdn2.steamgriddb.com/grid/a603b2e2f79e68bc08c02e25a62fc0f5.png",
    "rating": 7.5,
    "playtime": "23h 12m"
  },
  {
    "title": "Assassin's Creed",
    "image": "https://cdn2.steamgriddb.com/grid/7433d6c2c66b73f125ddb06299254e3a.jpg",
    "rating": 7.8,
    "playtime": "20h 00m"
  },
  {
    "title": "Assassin's Creed 2",
    "image": "https://cdn2.steamgriddb.com/grid/68f24a4e5f0a836969e4d293fd2eec92.png",
    "rating": 9.0,
    "playtime": "26h 00m"
  },
  {
    "title": "Assassin's Creed 3 Remastered",
    "image": "https://cdn2.steamgriddb.com/grid/45bae55d4f9edb04d58d2ad3a94aa6a0.png",
    "rating": 7.0,
    "playtime": "30h 00m"
  },
  {
    "title": "Assassin's Creed Brotherhood",
    "image": "https://cdn2.steamgriddb.com/grid/3f4366aeb9c157cf9a30c90693eafc55.png",
    "rating": 8.7,
    "playtime": "25h 30m"
  },
  {
    "title": "Assassin's Creed Liberation HD",
    "image": "https://cdn2.steamgriddb.com/grid/e0835298391ba2ebea5980336d378198.png",
    "rating": 6.0,
    "playtime": "11h 00m"
  },
  {
    "title": "Assassin's Creed Revelations",
    "image": "https://cdn2.steamgriddb.com/grid/5b4db7da70c4c1f3005198b8379ec177.png",
    "rating": 8.2,
    "playtime": "20h 30m"
  },
  {
    "title": "Assassin's Creed IV Black Flag",
    "image": "https://cdn2.steamgriddb.com/grid/f2d887e01a80e813d9080038decbbabb.png",
    "rating": 8.8,
    "playtime": "54h 00m"
  },
  {
    "title": "Assassin's Creed Unity",
    "image": "https://cdn2.steamgriddb.com/grid/51f3eb940fd73a19119534c063967bff.png",
    "rating": 8.4,
    "playtime": "77h 42m"
  },
  {
    "title": "Batman: Arkham Knight",
    "image": "https://cdn2.steamgriddb.com/grid/98ad4c092c7f2c9411f5205a8ab156bd.png",
    "rating": 8.0,
    "playtime": "58h 15m"
  },
  {
    "title": "Black Myth: Wukong",
    "image": "https://cdn2.steamgriddb.com/grid/9ed3f0c55f747e231fe6516502720e99.png",
    "rating": 9.7,
    "playtime": "52h 55m"
  },
  {
    "title": "Blasphemous",
    "image": "https://cdn2.steamgriddb.com/grid/be7acd92c623a55211903afee322816b.png",
    "rating": 8.1,
    "playtime": "36h 48m"
  },
  {
    "title": "Call of Duty: Modern Warfare",
    "image": "https://cdn2.steamgriddb.com/grid/5124ec804c4633ad5e127f3f9543bc10.png",
    "rating": 8.5,
    "playtime": "10h 15m"
  },
  {
    "title": "Call of Duty: Modern Warfare II",
    "image": "https://cdn2.steamgriddb.com/grid/a4924b6ecb4b0a3acb5270f56cf01a1c.png",
    "rating": 8.3,
    "playtime": "10h 35m"
  },
  {
    "title": "Call of Duty: Modern Warfare III",
    "image": "https://cdn2.steamgriddb.com/grid/976e6cb2f9caea318b775f8ab300ebd1.jpg",
    "rating": 8.0,
    "playtime": "10h 25m"
  },
  {
    "title": "Call of Duty: Modern Warfare Remastered",
    "image": "https://cdn2.steamgriddb.com/grid/499864301513d8852b624ca93a960bcc.png",
    "rating": 7.8,
    "playtime": "8h 30m"
  },
  {
    "title": "Call of Duty: Modern Warfare 2 Campaign Remastered",
    "image": "https://cdn2.steamgriddb.com/grid/812cd9bbab329e9171b853537400e561.png",
    "rating": 7.9,
    "playtime": "8h 00m"
  },
  {
    "title": "Children of Morta",
    "image": "https://cdn2.steamgriddb.com/grid/898ac13c40c2cb1898c50071ebcf873b.jpg",
    "rating": 7.5,
    "playtime": "14h 00m"
  },
   {
    "title": "Control Ultimate Edition",
    "image": "https://cdn2.steamgriddb.com/grid/db75908cc3cf1a96711ef6fa2eb38bdd.png",
    "rating": 8.5,
    "playtime": "38h 42m"
  },
   {
    "title": "Cronos: The New Dawn",
    "image": "https://cdn2.steamgriddb.com/grid/81fc65fd75cde225653d53cbff1edb72.jpg",
    "rating": 8.9,
    "playtime": "24h 24m"
  },
  {
    "title": "Darksiders III",
    "image": "https://cdn2.steamgriddb.com/grid/1595be95024f2dc9d2e6bb82d92d9cf3.jpg",
    "rating": 7.2,
    "playtime": "21h 30m"
  },
  {
    "title": "Death Stranding: Director's Cut",
    "image": "https://cdn2.steamgriddb.com/grid/f0417f00af9e2a7f8b20549349224539.png",
    "rating": 8.0,
    "playtime": "35h 00m"
  },
  {
    "title": "ELDEN RING",
    "image": "https://cdn2.steamgriddb.com/grid/851b713b28f9874f85539a3b18c55465.png",
    "rating": 9.5,
    "playtime": "147h 32m"
  },
  {
    "title": "Far Cry 3",
    "image": "https://cdn2.steamgriddb.com/grid/f978a440ea6534bbd01b41049e782056.png",
    "rating": 8.2,
    "playtime": "24h 32m"
  },
  {
    "title": "Firewatch",
    "image": "https://cdn2.steamgriddb.com/grid/c6e6e56176170a88eb1b219d90f33a8b.png",
    "rating": 8.0,
    "playtime": "4h 12m"
  },
  {
    "title": "Florence",
    "image": "https://cdn2.steamgriddb.com/grid/2ea0bf6593a099f19940c9b18c013565.png",
    "rating": 8.0,
    "playtime": "0h 24m"
  },
  {
    "title": "Ghost of Tsushima Director's Cut",
    "image": "https://cdn2.steamgriddb.com/grid/302a84d1a6158101e1dbabe4e967be35.png",
    "rating": 9.8,
    "playtime": "78h 42m"
  },
  {
    "title": "Hi-Fi RUSH",
    "image": "https://cdn2.steamgriddb.com/grid/517f69584f1831d734c3784f1af9921c.jpg",
    "rating": 9.0,
    "playtime": "26h 48m"
  },
  {
    "title": "God of War",
    "image": "https://cdn2.steamgriddb.com/grid/43b1902dcea79e92a04ac2b5b738d0a4.png",
    "rating": 9.8,
    "playtime": "72h 28m"
  },
  {
    "title": "God of War Ragnarok",
    "image": "https://cdn2.steamgriddb.com/grid/245c498e6413ad98feab0bb3ae6275d5.png",
    "rating": 9.9,
    "playtime": "92h 25m"
  },
  {
    "title": "Hollow Knight",
    "image": "https://cdn2.steamgriddb.com/grid/b660e21556a99ffc8ed2715639c61cac.jpg",
    "rating": 9.2,
    "playtime": "42h 32m"
  },
  {
    "title": "Hogwarts Legacy",
    "image": "https://cdn2.steamgriddb.com/grid/806a02cbfcd4364fbe1e87256f2f0259.png",
    "rating": 9.6,
    "playtime": "75h 52m"
  },
  {
    "title": "Horizon Zero Dawn Remastered",
    "image": "https://cdn2.steamgriddb.com/grid/1acdfc7759bb4706cd312e5e149739e8.png",
    "rating": 9.6,
    "playtime": "57h 32m"
  },
  {
    "title": "It Takes Two",
    "image": "https://cdn2.steamgriddb.com/grid/220cd001795358a2e932e81301092fc6.png",
    "rating": 8.8,
    "playtime": "14h 30m"
  },
  {
    "title": "Kena: Bridge of Spirits",
    "image": "https://cdn2.steamgriddb.com/grid/690e7e9ccf98d91e245b40ba03e9472b.png",
    "rating": 8.2,
    "playtime": "12h 30m"
  },
  {
    "title": "Lost In Play",
    "image": "https://cdn2.steamgriddb.com/grid/3546fa2020a4bb3cccfaa9c3867166ae.jpg",
    "rating": 7.5,
    "playtime": "04h 32m"
  },
  {
    "title": "Mafia: Definitive Edition",
    "image": "https://cdn2.steamgriddb.com/grid/211544d2d3dda8bd4b5ec3cf0e43e30b.png",
    "rating": 9.0,
    "playtime": "32h 32m"
  },
  {
    "title": "Mafia II: Definitive Edition",
    "image": "https://cdn2.steamgriddb.com/grid/0d19d8eb54cb918bd88faa73f1627c2f.png",
    "rating": 8.9,
    "playtime": "12h 24m"
  },
  {
    "title": "Mafia III: Definitive Edition",
    "image": "https://cdn2.steamgriddb.com/grid/32bee8053792fe632cacf3354cc24436.png",
    "rating": 8.8,
    "playtime": "32h 24m"
  },
  {
    "title": "Marvel's Guardians of the Galaxy",
    "image": "https://cdn2.steamgriddb.com/grid/3ade4747e80ccc644ca8876eb6b9f6fa.png",
    "rating": 8.2,
    "playtime": "20h 28m"
  },
  {
    "title": "Marvel's Spider-Man Remastered",
    "image": "https://cdn2.steamgriddb.com/grid/431af639284677b503945fd6857d074d.png",
    "rating": 9.5,
    "playtime": "29h 32m"
  },
  {
    "title": "Marvel's Spider-Man 2",
    "image": "https://cdn2.steamgriddb.com/grid/5639396a1ac559db896a5159bdcc7a1f.png",
    "rating": 9.4,
    "playtime": "35h 24m"
  },
  {
    "title": "Marvel's Spider-Man: Miles Morales",
    "image": "https://cdn2.steamgriddb.com/grid/1ece5eb8178501c992aa286f929f3fb6.jpg",
    "rating": 9.2,
    "playtime": "12h 35m"
  },
  {
    "title": "Middle-earth: Shadow of Mordor",
    "image": "https://cdn2.steamgriddb.com/grid/adfe876ae8618aa5df77dd6946ba37c6.png",
    "rating": 8.4,
    "playtime": "24h 32m"
  },
  {
    "title": "Middle-earth: Shadow of War",
    "image": "https://cdn2.steamgriddb.com/grid/b48d25fbc239d88d093a13c7701e65d6.png",
    "rating": 8.6,
    "playtime": "44h 00m"
  },
  {
    "title": "Moonlighter",
    "image": "https://cdn2.steamgriddb.com/grid/41fb2590fcabdf7db5dd05127c3e7b76.png",
    "rating": 8.2,
    "playtime": "35h 00m"
  },
  {
    "title": "Naruto: Ultimate Ninja STORM",
    "image": "https://cdn2.steamgriddb.com/grid/fe7c8c1dbbd9e2a685d9f1ec1aa32337.png",
    "rating": 7.8,
    "playtime": "15h 30m"
  },
  {
    "title": "Naruto Shippuden: Ultimate Ninja STORM 2",
    "image": "https://cdn2.steamgriddb.com/grid/19fdcffe2c68d534265f2627a035822e.png",
    "rating": 7.8,
    "playtime": "22h 20m"
  },
  {
    "title": "Naruto Shippūden: Ultimate Ninja STORM 3 - Full Burst",
    "image": "https://cdn2.steamgriddb.com/grid/29a5c16133356cddfc0e6dfe180aa86f.png",
    "rating": 7.6,
    "playtime": "15h 45m"
  },
  {
    "title": "New Super Lucky's Tale",
    "image": "https://cdn2.steamgriddb.com/grid/406ac8aa9c80be06aebddcc2407a8680.png",
    "rating": 7.5,
    "playtime": "14h 30m"
  },
  {
    "title": "Outlast",
    "image": "https://cdn2.steamgriddb.com/grid/6dddefa904a8f33be48aaa7f09f23fa3.jpg",
    "rating": 8.2,
    "playtime": "11h 30m"
  },
  {
    "title": "Outlast 2",
    "image": "https://cdn2.steamgriddb.com/grid/b847f2409d7521b2d0d76a623cf94018.png",
    "rating": 8.2,
    "playtime": "09h 24m"
  },
  {
    "title": "Prince of Persia The Lost Crown",
    "image": "https://cdn2.steamgriddb.com/grid/60444d1e672cba50c7bcd0f8592437fb.png",
    "rating": 8.0,
    "playtime": "35h 24m"
  },
  {
    "title": "Red Dead Redemption",
    "image": "https://cdn2.steamgriddb.com/grid/3c153f4f81e6d94b307e7bd4fb4925a5.jpg",
    "rating": 8.5,
    "playtime": "22h 48m"
  },
  {
    "title": "Resident Evil 4 Remake",
    "image": "https://cdn2.steamgriddb.com/grid/6665651e33e1cb739eb9a9d98f212288.jpg",
    "rating": 9.2,
    "playtime": "32h 24m"
  },
  {
    "title": "Resident Evil 2",
    "image": "https://cdn2.steamgriddb.com/grid/bc75f23dd32d05d91e4aee8bda491b98.jpg",
    "rating": 8.2,
    "playtime": "18h 24m"
  },
  {
    "title": "Resident Evil VIII: Village",
    "image": "https://cdn2.steamgriddb.com/grid/2c7eb666c7c8fd3a9d8298584ecd648b.jpg",
    "rating": 9.0,
    "playtime": "18h 48m"
  },
  {
    "title": "Rise of the Tomb Raider",
    "image": "https://cdn2.steamgriddb.com/grid/64743ce1122105ad429f669e4bdf2863.png",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Ryse: Son of Rome",
    "image": "https://cdn2.steamgriddb.com/grid/bdb94f416db7039439ac79cac9f28b81.png",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Shadow Warrior",
    "image": "https://cdn2.steamgriddb.com/grid/66e8d4e4911480dc498931b2ec2e3446.png",  
    "rating": null,
    "playtime": null
  },
  {
    "title": "Sifu",
    "image": "https://cdn2.steamgriddb.com/grid/887f128dd38009ebe3edbf50d09b6ea6.jpg",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Sleeping Dogs: Definitive Edition",
    "image": "https://cdn2.steamgriddb.com/grid/471268d26a7b055b0f88f9045a36e884.png",
    "rating": null,
    "playtime": null
  },
 {
    "title": "State of Decay: YOSE",
    "image": "https://cdn2.steamgriddb.com/grid/e564b0556122e6972bd7867338f5ed27.png",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Stray",
    "image": "https://cdn2.steamgriddb.com/grid/6473cd235f79b2ac2ccaa6b5af3aee61.png",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Sunset Overdrive",
    "image": "https://cdn2.steamgriddb.com/grid/96123c94bbe3b4d9d518feedee4054a5.png",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Tails Of Iron",
    "image": "https://cdn2.steamgriddb.com/grid/2eb584f7aacbcc0a2b4051bf87a2a09f.jpg",
    "rating": 8.0,
    "playtime": "09h 48m"
  },  
  {
    "title": "The Council",
    "image": "https://cdn2.steamgriddb.com/grid/32d52d13a119a8223b3e37b4c4837a61.jpg",
    "rating": null,
    "playtime": null
  },
  {
    "title": "The Last of Us Part I",
    "image": "https://cdn2.steamgriddb.com/grid/2865bf7e6063834755ee38d5f29bdc14.jpg",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Tomb Raider",
    "image": "https://cdn2.steamgriddb.com/grid/44e71824bd373ea8f39eca8e0cf8bd47.jpg",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Watch Dogs",
    "image": "https://cdn2.steamgriddb.com/grid/ddb1b62e0c8c0b8b020fb2a35cee6494.png",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Watch Dogs 2",
    "image": "https://cdn2.steamgriddb.com/grid/c89723a453df9b658bda9530b3b8f2f0.png",
    "rating": null,
    "playtime": null
  },
  {
    "title": "WUCHANG: Fallen Feathers",
    "image": "https://cdn2.steamgriddb.com/grid/2a1d2b03eef0986c480474465d2d1627.png",
    "rating": 9.7,
    "playtime": "44h 32m"
  },
  {
    "title": "Yooka-Laylee and the Impossible Lair",
    "image": "https://cdn2.steamgriddb.com/grid/720e36c820ef1b1b88fb4e8c0e71cf86.png",
    "rating": null,
    "playtime": null
  },
  {
    "title": "嗜血印 Bloody Spell",
    "image": "https://cdn2.steamgriddb.com/grid/f82b8a6154307e13cf3634e4d43f5d81.jpg",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Jusant",
    "image": "https://cdn2.steamgriddb.com/grid/5525d7a335fc5ef3490f37ca4f92ccdc.jpg",
    "rating": null,
    "playtime": null
  },
  {
    "title": "A Way Out",
    "image": "https://cdn2.steamgriddb.com/grid/e0642d7280878ea1fb17bf73a5232767.png",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Raji: An Ancient Epic",
    "image": "https://cdn2.steamgriddb.com/grid/4cf72b59a891f1d884ab074fa77d108b.jpg",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Kung Fu Strike - The Warrior's Rise",
    "image": "https://cdn2.steamgriddb.com/grid/5c130123eab7e67b9efe2caed6c24df7.jpg",
    "rating": 7.8,
    "playtime": "03h 24m"
  },
  {
    "title": "Inside",
    "image": "https://cdn2.steamgriddb.com/grid/e58a6112b6124519bd5144ffd354e6f3.png",
    "rating": 7.8,
    "playtime": "05h 32m"
  },
  {
    "title": "Mortal Kombat X",
    "image": "https://cdn2.steamgriddb.com/grid/ad4f9801af56c9796f7f2c62741e81a8.png",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Ori and the Blind Forest: Definitive Edition",
    "image": "https://cdn2.steamgriddb.com/grid/304104673a8c12d36120bb8fc46e49c3.jpg",
    "rating": 8.5,
    "playtime": "18h 30m" 
  },
  {
    "title": "Outlast: Whistleblower",
    "image": "https://cdn2.steamgriddb.com/grid/f53cca7fa5e059756783e24a7df99768.jpg",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Katto: Rising Tides",
    "image": "https://cdn2.steamgriddb.com/grid/9d0ea6aeea893e4cc92cda5f399c5edb.jpg",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Gris",
    "image": "https://cdn2.steamgriddb.com/grid/e9fe3e5b4ecc594df2ed4cd171afc442.jpg",
    "rating": 7.8,
    "playtime": "03h 24m"
  },
  {
    "title": "Dust and Aliens",
    "image": "https://cdn2.steamgriddb.com/grid/4a62d140e00719c65ec557a797400a5f.jpg",
    "rating": null,
    "playtime": null
  },
  {
    "title": "A Juggler's Tale",
    "image": "https://cdn2.steamgriddb.com/grid/08c749d2ff69ff1fa53ff76a72bb0d6e.jpg",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Steamrush",
    "image": "https://cdn2.steamgriddb.com/grid/9ba210e81450067feefbf37677f93d3f.jpg",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Light of Alariya",
    "image": "https://cdn2.steamgriddb.com/grid/692862877b09f318bc930136875938bc.jpg",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Venba",
    "image": "https://cdn2.steamgriddb.com/grid/5bcda6ccfd6b6bf3584397f23dee664d.png",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Live Adventure",
    "image": "https://cdn2.steamgriddb.com/grid/b9c997b0b1c57c3a93a9982b060e3147.jpg",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Marie's Room",
    "image": "https://cdn2.steamgriddb.com/grid/200f4a348a82f433c7bfaa288a79932d.jpg",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Jivana",
    "image": "https://cdn2.steamgriddb.com/grid/3752e28d1fd718ccc2e01524cfb9941b.jpg",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Shadow Burglar",
    "image": "https://cdn2.steamgriddb.com/grid/facff577dd680a1bfc1174ed41576960.jpg",
    "rating": null,
    "playtime": null
  },
  {
    "title": "Tales of Kenzera: ZAU",
    "image": "https://cdn2.steamgriddb.com/grid/2f4995803660b60b3d255fdbbb8a4618.png",
    "rating": null,
    "playtime": null
  }
]


defaultGames.forEach(g => {
    if (!g.rating) g.rating = 0;
  });

  let loggedGames = JSON.parse(localStorage.getItem("loggedGames")) || [];
  loggedGames.forEach(g => {
    if (!g.rating) g.rating = 0;
  });

  const gamesPerPage = 16;
  let currentPage = 1;
  let ratingAsc = null;
  let timeAsc = null;
  let showAll = false;

  function saveLoggedGames() {
    localStorage.setItem("loggedGames", JSON.stringify(loggedGames));
  }

  function createGameCard({ title, image, rating, playtime }) {
    const gameDiv = document.createElement("div");
    gameDiv.className = "game";

    const img = document.createElement("img");
    img.src = image;
    img.alt = title;
    img.loading = "lazy";
    img.onerror = () => {
      img.src = "https://via.placeholder.com/300x400?text=Image+Not+Found";
      img.alt = "Image not found";
    };

    const caption = document.createElement("div");
    caption.className = "game-title";
    caption.textContent = title;

    const ratingBadge = document.createElement("div");
    ratingBadge.className = "rating-badge";
    ratingBadge.textContent = rating > 0 ? rating.toFixed(1) : "N/A";

    const playtimeBadge = document.createElement("div");
    playtimeBadge.className = "playtime-badge";
    playtimeBadge.textContent = playtime || "";

    gameDiv.append(img, ratingBadge, playtimeBadge, caption);
    return gameDiv;
  }

  function paginateGames(games, page) {
    const start = (page - 1) * gamesPerPage;
    return games.slice(start, start + gamesPerPage);
  }

  function renderPagination(filteredGames) {
    paginationContainer.innerHTML = "";

    if (showAll) {
      paginationContainer.classList.add("hidden");
      return;
    }

    paginationContainer.classList.remove("hidden");

    const pageCount = Math.ceil(filteredGames.length / gamesPerPage);
    for (let i = 1; i <= pageCount; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      if (i === currentPage) btn.classList.add("active");

      btn.addEventListener("click", () => {
        currentPage = i;
        renderGames(searchInput.value);
      });

      paginationContainer.appendChild(btn);
    }
  }

  function renderGames(searchTerm = "") {
    let allGames = [...loggedGames, ...defaultGames];
    const lowerSearch = searchTerm.toLowerCase();

    let filteredGames = allGames.filter(game =>
      game.title.toLowerCase().includes(lowerSearch)
    );

    if (ratingAsc !== null) {
      filteredGames.sort((a, b) =>
        ratingAsc ? a.rating - b.rating : b.rating - a.rating
      );
    } else if (timeAsc !== null) {
      const parseTime = time => {
        if (!time) return 0;
        const match = time.match(/(\d+)h\s*(\d+)?m?/);
        const hours = match ? parseInt(match[1]) : 0;
        const mins = match && match[2] ? parseInt(match[2]) : 0;
        return hours * 60 + mins;
      };
      filteredGames.sort((a, b) =>
        timeAsc ? parseTime(a.playtime) - parseTime(b.playtime)
                : parseTime(b.playtime) - parseTime(a.playtime)
      );
    }

    const gamesToShow = showAll ? filteredGames : paginateGames(filteredGames, currentPage);

    gameContainer.innerHTML = "";
    gamesToShow.forEach(game => {
      const card = createGameCard(game);
      gameContainer.appendChild(card);
    });

    renderPagination(filteredGames);
  }

  const filtersDiv = document.createElement("div");
  filtersDiv.className = "filters";
  document.querySelector("nav .sort-filters")?.appendChild(filtersDiv);

  const sortRatingBtn = document.createElement("button");
  const sortTimeBtn = document.createElement("button");
  const resetBtn = document.createElement("button");

  sortRatingBtn.textContent = "Sort by Rating";
  sortTimeBtn.textContent = "Sort by Time Played";
  resetBtn.textContent = "Reset Filters";

  filtersDiv.append(sortRatingBtn, sortTimeBtn, resetBtn);

  function updateSortButtonIcons() {
    sortRatingBtn.textContent = `Sort by Rating ${
      ratingAsc === null ? "" : ratingAsc ? "↑" : "↓"
    }`;
    sortTimeBtn.textContent = `Sort by Time Played ${
      timeAsc === null ? "" : timeAsc ? "↑" : "↓"
    }`;
  }

  sortRatingBtn.addEventListener("click", () => {
    ratingAsc = ratingAsc === null ? false : !ratingAsc;
    timeAsc = null;
    updateSortButtonIcons();
    renderGames(searchInput.value);
  });

  sortTimeBtn.addEventListener("click", () => {
    timeAsc = timeAsc === null ? false : !timeAsc;
    ratingAsc = null;
    updateSortButtonIcons();
    renderGames(searchInput.value);
  });

  resetBtn.addEventListener("click", () => {
    ratingAsc = null;
    timeAsc = null;
    searchInput.value = "";
    currentPage = 1;
    updateSortButtonIcons();
    renderGames();
  });

  searchInput.addEventListener("input", () => {
    currentPage = 1;
    renderGames(searchInput.value);
  });

  // === Tab Button Logic with "hidden" class ===

  // Show All Games Tab
  showAllBtn.addEventListener("click", () => {
    showAll = true;
    currentPage = 1;

    countdownContainer.classList.add("hidden");
    gameContainer.classList.remove("hidden");
    paginationContainer.classList.remove("hidden");

    renderGames(searchInput.value);

    gamesTabBtn.classList.remove("active-tab");
    showAllBtn.classList.add("active-tab");
    countdownTabBtn.classList.remove("active-tab");
  });

  // Logged Games Tab
  gamesTabBtn.addEventListener("click", () => {
    showAll = false;
    currentPage = 1;

    countdownContainer.classList.add("hidden");
    gameContainer.classList.remove("hidden");
    paginationContainer.classList.remove("hidden");

    renderGames(searchInput.value);

    gamesTabBtn.classList.add("active-tab");
    showAllBtn.classList.remove("active-tab");
    countdownTabBtn.classList.remove("active-tab");
  });

  // Countdown Tab
  countdownTabBtn.addEventListener("click", () => {
    countdownContainer.classList.remove("hidden");
    gameContainer.classList.add("hidden");
    paginationContainer.classList.add("hidden");

    gamesTabBtn.classList.remove("active-tab");
    showAllBtn.classList.remove("active-tab");
    countdownTabBtn.classList.add("active-tab");
  });

  // Initial UI state
  updateSortButtonIcons();
  renderGames();
  gamesTabBtn.classList.add("active-tab");
  countdownContainer.classList.add("hidden"); // hide at startup
});