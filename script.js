const characters = [
  {
    name: "Dominion",
    image: "Dominion.png",
    role: "Hero",
    group: "Hero",
    realName: "Elijah Carter",
    height: "6'2\"",
    weight: "220 lbs",
    bio: "Elijah Carter survived Hurricane Katrina as a child and made a desperate deal with a voodoo sorcerer to save his family. Years later, he broke free, became wealthy, and built the Dominion armor to protect New Orleans.",
    origin: "His power comes from advanced technology mixed with voodoo mysticism.",
    personality: "Strategic, protective, intelligent, serious, haunted by his past.",
    powers: "Mystical armor, voodoo magic, energy projection, flight, enhanced strength, durability.",
    stats: { strength: 88, speed: 75, durability: 90, intelligence: 95, combat: 82, power: 92 }
  },
  {
    name: "Pulse",
    image: "Pulse.png",
    role: "Hero",
    group: "Hero",
    realName: "Unknown",
    height: "6'0\"",
    weight: "190 lbs",
    bio: "Pulse gained magnetic powers after exposure to a rare asteroid fragment. He became a fast, acrobatic hero who fights using movement, metal, and creativity.",
    origin: "His body was altered by magnetic energy, allowing him to manipulate metal and move through cities with incredible control.",
    personality: "Confident, clever, funny, loyal, fearless.",
    powers: "Magnetism, metal control, magnetic grappling, enhanced agility, reflexes, wall running on metal.",
    stats: { strength: 76, speed: 87, durability: 72, intelligence: 82, combat: 85, power: 84 }
  },
  {
    name: "GhostMark",
    image: "Ghostmark.PNG",
    role: "Hero",
    group: "Hero",
    realName: "Jake Warner",
    height: "6'1\"",
    weight: "195 lbs",
    bio: "Jake Warner was abducted by the Silencer Organization after his parents were murdered. He was trained as an assassin before escaping and becoming GhostMark.",
    origin: "His past as a Silencer shaped him into a dangerous vigilante who now hunts criminals while searching for his lost brother.",
    personality: "Quiet, serious, protective, disciplined, emotionally scarred.",
    powers: "Martial arts, stealth, weapons mastery, assassin training, acrobatics, tactics.",
    stats: { strength: 72, speed: 78, durability: 70, intelligence: 84, combat: 96, power: 62 }
  },
  {
    name: "Nocturra",
    image: "Nocturra.png",
    role: "Hero",
    group: "Hero",
    realName: "Selene Drakov",
    height: "5'8\"",
    weight: "135 lbs",
    bio: "Selene Drakov was born over 500 years ago in Vaeloria, daughter of a vampire lord. She rejected her father’s cruelty and became Nocturra.",
    origin: "After centuries of wandering, she settled in New Orleans and became a supernatural protector.",
    personality: "Calm, elegant, mysterious, protective, emotionally restrained.",
    powers: "Vampire strength, speed, regeneration, shadow manipulation, enhanced senses, sword combat.",
    stats: { strength: 84, speed: 88, durability: 86, intelligence: 87, combat: 90, power: 89 }
  },
  {
    name: "Solace",
    image: "Solace.PNG",
    role: "Hero",
    group: "Hero",
    realName: "Unknown",
    height: "6'3\"",
    weight: "215 lbs",
    bio: "Solace was born during a war between Aurelion and the Zenthari. A dying star was sealed inside him as an infant.",
    origin: "He carries the energy of a dying star and struggles to control the power inside him.",
    personality: "Compassionate, burdened, emotional, selfless, powerful.",
    powers: "Stellar energy, flight, energy blasts, extreme durability, cosmic aura, transformations.",
    stats: { strength: 96, speed: 90, durability: 97, intelligence: 84, combat: 82, power: 100 }
  },
  {
    name: "Starveil",
    image: "Starveil.PNG",
    role: "Hero",
    group: "Hero",
    realName: "Unknown",
    height: "6'5\"",
    weight: "Unknown",
    bio: "Starveil is an ancient celestial guardian whose body contains living star fragments. Though feared by many, he protects life across the universe.",
    origin: "He has traveled across galaxies for millions of years, stopping threats capable of destroying civilizations.",
    personality: "Wise, calm, noble, distant, protective.",
    powers: "Cosmic energy, gravity control, flight, space survival, stellar blasts, energy constructs.",
    stats: { strength: 95, speed: 93, durability: 98, intelligence: 96, combat: 86, power: 100 }
  },
  {
    name: "Atlas",
    image: "Atlas.png",
    role: "Hero",
    group: "Hero",
    realName: "Clinton Bishop",
    height: "6'4\"",
    weight: "245 lbs",
    bio: "Clinton Bishop lost his parents in a terrorist attack. After redirecting a nuclear missile into space, the explosion changed his body forever.",
    origin: "The nuclear event transformed him into Atlas, a superhuman soldier with unmatched discipline.",
    personality: "Disciplined, courageous, serious, loyal, tactical.",
    powers: "Super strength, durability, speed, reflexes, military training, combat mastery.",
    stats: { strength: 92, speed: 78, durability: 93, intelligence: 86, combat: 95, power: 72 }
  },
  {
    name: "Lady Lita",
    image: "LadyLita.png",
    role: "Hero",
    group: "Hero",
    realName: "Linda Bates",
    height: "6'1\" transformed",
    weight: "170 lbs transformed",
    bio: "Linda Bates grew up in Chicago and became a nurse. Her life changed when a dying woman gave her the Heart of Astraea.",
    origin: "The magical amulet bonded with Linda and allowed her to transform into Lady Lita.",
    personality: "Compassionate, humble, brave, caring, protective.",
    powers: "Mystical transformation, super strength, speed, healing factor, durability, sword mastery, energy slashes.",
    stats: { strength: 90, speed: 84, durability: 88, intelligence: 78, combat: 88, power: 86 }
  },
  {
    name: "Mirella Voss",
    image: "MirellaVoss.PNG",
    role: "Villain",
    group: "Villain",
    realName: "Mirella Voss",
    height: "5'10\"",
    weight: "140 lbs",
    bio: "Mirella Voss is a billionaire biotech empress who secretly controls blood. She manipulates powerful people from the shadows.",
    origin: "Her blood powers made her believe humanity is too weak to control itself.",
    personality: "Elegant, manipulative, intelligent, calm, ruthless.",
    powers: "Blood manipulation, mind control through blood, paralysis, blood weapons, pressure attacks.",
    stats: { strength: 70, speed: 72, durability: 76, intelligence: 96, combat: 76, power: 94 }
  },
  {
    name: "Thalassar",
    image: "Thalassar.png",
    role: "Villain",
    group: "Villain",
    realName: "Unknown",
    height: "7'2\"",
    weight: "410 lbs",
    bio: "Thalassar is the ancient ruler of a forgotten underwater kingdom. After being sealed beneath the abyss, he returned to punish the surface world.",
    origin: "He believes humanity has poisoned the planet and that the oceans must reclaim Earth.",
    personality: "Commanding, ruthless, prideful, intelligent, vengeful.",
    powers: "Water manipulation, storms, lightning water, trident mastery, sea creature control, tidal waves.",
    stats: { strength: 96, speed: 76, durability: 95, intelligence: 88, combat: 89, power: 97 }
  },
  {
    name: "Gold Rush",
    image: "GoldRush.png",
    role: "Villain",
    group: "Villain",
    realName: "Unknown",
    height: "6'3\"",
    weight: "240 lbs",
    bio: "Gold Rush was once a scientist obsessed with speed. After dangerous experiments, his body became living golden metal.",
    origin: "Now the fastest person in the universe, Gold Rush moves calmly, silently, and terrifyingly fast.",
    personality: "Calm, intimidating, emotionless, patient, terrifying.",
    powers: "Extreme speed, golden metallic body, kinetic attacks, vibration phasing, healing, enhanced reflexes.",
    stats: { strength: 88, speed: 100, durability: 92, intelligence: 88, combat: 84, power: 90 }
  },
  {
    name: "Atherion",
    image: "Atherion.JPG",
    role: "Hero",
    group: "Chosen 6",
    realName: "Unknown",
    height: "5'8\"",
    weight: "145 lbs",
    bio: "Atherion is the green leader of the Chosen 6. He was an ordinary teenager until Prime Radiance energy awakened his abilities.",
    origin: "Chosen during a cosmic event, he became the emotional center and strongest natural leader of the team.",
    personality: "Passionate, courageous, hot-headed, loyal, protective.",
    powers: "Green energy, energy blasts, flight, constructs, mystical combat, power amplification.",
    stats: { strength: 82, speed: 80, durability: 84, intelligence: 78, combat: 80, power: 92 }
  },
  {
    name: "Vortex",
    image: "Vortex.JPG",
    role: "Hero",
    group: "Chosen 6",
    realName: "Unknown",
    height: "5'9\"",
    weight: "150 lbs",
    bio: "Vortex is the blue strategist of the Chosen 6. Calm and analytical, he uses precision instead of emotion.",
    origin: "Prime Radiance energy awakened powerful optic energy inside him.",
    personality: "Intelligent, calm, serious, analytical, guarded.",
    powers: "Optic blasts, enhanced reflexes, combat analysis, agility, energy precision.",
    stats: { strength: 68, speed: 78, durability: 74, intelligence: 96, combat: 82, power: 88 }
  },
  {
    name: "Inferno",
    image: "Inferno.JPG",
    role: "Hero",
    group: "Chosen 6",
    realName: "Unknown",
    height: "5'10\"",
    weight: "160 lbs",
    bio: "Inferno is the red powerhouse of the Chosen 6. His unstable red energy is tied to his emotions.",
    origin: "Prime Radiance energy bonded aggressively with his body, making him explosive and dangerous.",
    personality: "Loud, fearless, competitive, loyal, reckless.",
    powers: "Red energy, heat generation, explosive shockwaves, energy punches, enhanced strength.",
    stats: { strength: 86, speed: 76, durability: 86, intelligence: 72, combat: 80, power: 91 }
  },
  {
    name: "OniShade",
    image: "OniShade.JPG",
    role: "Hero",
    group: "Chosen 6",
    realName: "Unknown",
    height: "5'9\"",
    weight: "155 lbs",
    bio: "OniShade is the black silent fighter of the Chosen 6. He controls shadows and summons oni-like constructs.",
    origin: "Before joining the team, he was isolated because of the strange shadow energy connected to him.",
    personality: "Quiet, calm, disciplined, kind-hearted, mysterious.",
    powers: "Shadow manipulation, oni constructs, stealth, teleportation through darkness, martial arts.",
    stats: { strength: 78, speed: 82, durability: 80, intelligence: 84, combat: 94, power: 89 }
  },
  {
    name: "Voltara",
    image: "Voltara.JPG",
    role: "Hero",
    group: "Chosen 6",
    realName: "Unknown",
    height: "5'7\"",
    weight: "135 lbs",
    bio: "Voltara is the yellow movement specialist of the Chosen 6. She can teleport across battlefields in flashes of yellow energy.",
    origin: "Prime Radiance energy gave her spatial movement powers instead of normal speed.",
    personality: "Energetic, funny, clever, impulsive, loyal.",
    powers: "Teleportation, spatial warping, yellow energy, portal creation, enhanced reflexes.",
    stats: { strength: 62, speed: 92, durability: 68, intelligence: 80, combat: 78, power: 85 }
  },
  {
    name: "Mindra",
    image: "Mindra.JPG",
    role: "Hero",
    group: "Chosen 6",
    realName: "Unknown",
    height: "5'6\"",
    weight: "125 lbs",
    bio: "Mindra is the pink psychic heart of the Chosen 6. She is deeply connected to emotions and mental energy.",
    origin: "Prime Radiance energy awakened psychic abilities inside her.",
    personality: "Compassionate, gentle, wise, emotional, peaceful.",
    powers: "Telepathy, psychic energy, emotional sensing, mind constructs, shields, illusions.",
    stats: { strength: 55, speed: 68, durability: 70, intelligence: 88, combat: 68, power: 90 }
  }
];

const grid = document.getElementById("characterGrid");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");
const profilePage = document.getElementById("profilePage");
const profileContent = document.getElementById("profileContent");
const backBtn = document.getElementById("backBtn");
const charactersSection = document.getElementById("characters");

function statBars(stats) {
  return Object.entries(stats).map(([key, value]) => `
    <div class="stat">
      <span><strong>${key.toUpperCase()}</strong><b>${value}</b></span>
      <div class="bar"><div class="fill" style="width:${value}%"></div></div>
    </div>
  `).join("");
}

function renderCharacters(list) {
  grid.innerHTML = list.map((c, index) => `
    <div class="card" onclick="openProfile(${characters.indexOf(c)})">
      <img src="${c.image}" alt="${c.name}">
      <div class="card-content">
        <h3>${c.name}</h3>
        <span class="role ${c.group === "Chosen 6" ? "Chosen" : c.role}">${c.group}</span>
        <p><strong>Real Name:</strong> ${c.realName}</p>
        <p><strong>Height:</strong> ${c.height}</p>
        <p><strong>Weight:</strong> ${c.weight}</p>
        <div class="stats">${statBars(c.stats)}</div>
      </div>
    </div>
  `).join("");
}

function openProfile(index) {
  const c = characters[index];

  charactersSection.classList.add("hidden");
  profilePage.classList.remove("hidden");
  window.scrollTo(0, 0);

  profileContent.innerHTML = `
    <div class="profile">
      <img src="${c.image}" alt="${c.name}">

      <div class="profile-info">
        <h2>${c.name}</h2>
        <p><strong>Real Name:</strong> ${c.realName}</p>
        <p><strong>Role:</strong> ${c.role}</p>
        <p><strong>Group:</strong> ${c.group}</p>
        <p><strong>Height:</strong> ${c.height}</p>
        <p><strong>Weight:</strong> ${c.weight}</p>

        <div class="detail-box">
          <h3>Bio</h3>
          <p>${c.bio}</p>
        </div>

        <div class="detail-box">
          <h3>Origin</h3>
          <p>${c.origin}</p>
        </div>

        <div class="detail-box">
          <h3>Personality</h3>
          <p>${c.personality}</p>
        </div>

        <div class="detail-box">
          <h3>Powers</h3>
          <p>${c.powers}</p>
        </div>

        <div class="detail-box">
          <h3>Power Stats</h3>
          <div class="stats">${statBars(c.stats)}</div>
        </div>
      </div>
    </div>
  `;
}

backBtn.addEventListener("click", () => {
  profilePage.classList.add("hidden");
  charactersSection.classList.remove("hidden");
});

function filterCharacters() {
  const search = searchInput.value.toLowerCase();
  const activeFilter = document.querySelector(".filter-btn.active").dataset.filter;

  const filtered = characters.filter(c => {
    const matchesSearch =
      c.name.toLowerCase().includes(search) ||
      c.powers.toLowerCase().includes(search) ||
      c.personality.toLowerCase().includes(search);

    const matchesFilter =
      activeFilter === "all" ||
      c.role === activeFilter ||
      c.group === activeFilter;

    return matchesSearch && matchesFilter;
  });

  renderCharacters(filtered);
}

searchInput.addEventListener("input", filterCharacters);

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filterCharacters();
  });
});

const battleType = document.getElementById("battleType");
const setupBattleBtn = document.getElementById("setupBattleBtn");
const teamA = document.getElementById("teamA");
const teamB = document.getElementById("teamB");
const fightBtn = document.getElementById("fightBtn");
const battleResult = document.getElementById("battleResult");

function createSelect(id) {
  return `
    <select id="${id}">
      ${characters.map((c, i) => `<option value="${i}">${c.name}</option>`).join("")}
    </select>
  `;
}

function setupBattle() {
  const count = Number(battleType.value);
  teamA.innerHTML = "";
  teamB.innerHTML = "";

  for (let i = 0; i < count; i++) {
    teamA.innerHTML += createSelect(`a${i}`);
    teamB.innerHTML += createSelect(`b${i}`);
  }

  battleResult.innerHTML = "";
}

function totalStats(teamIndexes) {
  return teamIndexes.reduce((total, index) => {
    const stats = characters[index].stats;
    return total + Object.values(stats).reduce((a, b) => a + b, 0);
  }, 0);
}

function teamNames(indexes) {
  return indexes.map(i => characters[i].name).join(", ");
}

function strongestStat(character) {
  const entries = Object.entries(character.stats);
  return entries.sort((a, b) => b[1] - a[1])[0][0];
}

fightBtn.addEventListener("click", () => {
  const count = Number(battleType.value);
  const aIndexes = [];
  const bIndexes = [];

  for (let i = 0; i < count; i++) {
    aIndexes.push(Number(document.getElementById(`a${i}`).value));
    bIndexes.push(Number(document.getElementById(`b${i}`).value));
  }

  const scoreA = totalStats(aIndexes);
  const scoreB = totalStats(bIndexes);

  let winner = scoreA >= scoreB ? "Team A" : "Team B";
  let winningIndexes = scoreA >= scoreB ? aIndexes : bIndexes;
  let losingIndexes = scoreA >= scoreB ? bIndexes : aIndexes;
  let difference = Math.abs(scoreA - scoreB);

  let difficulty =
    difference < 20 ? "Extreme Difficulty" :
    difference < 55 ? "High Difficulty" :
    difference < 100 ? "Mid Difficulty" :
    "Low Difficulty";

  const topCharacter = characters[winningIndexes[0]];
  const topStat = strongestStat(topCharacter);

  battleResult.innerHTML = `
    <h3>Winner: ${winner}</h3>
    <p><strong>${winner}:</strong> ${teamNames(winningIndexes)}</p>
    <p><strong>Defeated:</strong> ${teamNames(losingIndexes)}</p>
    <p><strong>Difficulty:</strong> ${difficulty}</p>
    <p><strong>Score:</strong> Team A ${scoreA} / Team B ${scoreB}</p>
    <p><strong>Reason:</strong> ${teamNames(winningIndexes)} wins because their total stats are higher. Their strongest advantage comes from ${topStat.toUpperCase()}, giving them the edge in this battle.</p>
  `;
});

setupBattleBtn.addEventListener("click", setupBattle);

renderCharacters(characters);
setupBattle();

      
