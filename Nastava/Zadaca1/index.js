const DATA = {
  movies: [
    { id:'m1',  title:'Dune: Part Two',           year:2024, rating:8.5, genre:['Sci-Fi','Epic'],       duration:'166 min', director:'Denis Villeneuve',  cast:'Timothée Chalamet, Zendaya',         badge:'top',    color:'#c8860a', img:'',  desc:'Paul Atreides unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.' },
    { id:'m2',  title:'Oppenheimer',               year:2023, rating:8.9, genre:['Drama','History'],    duration:'180 min', director:'Christopher Nolan', cast:'Cillian Murphy, Emily Blunt',         badge:'top',    color:'#8b1a1a', img:'',  desc:'The story of J. Robert Oppenheimer and his pivotal role in the development of the first nuclear weapon.' },
    { id:'m3',  title:'Schindlers List',           year:1993, rating:9.0, genre:['Biography','History'],   duration:'195 min', director:'Steven Spielberg',  cast:'Liam Neeson, Ralph Fiennes',            badge:'top',    color:'#3a6b4a', img:'',  desc:'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.' },
    { id:'m4',  title:'Interstellar',year:2014, rating:8.7, genre:['Quest','Sci-fi'],    duration:'169 min', director:'Christopher Nolan',   cast:'Anne Hathaway Matthew McConaughey',   badge:'',       color:'#6b3a1a', img:'',  desc:'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.' },
    { id:'m5',  title:'The Dark Knight',                year:2008, rating:9.1, genre:['Thriller','Drama'],    duration:'152 min', director:'Chrstiopher ',       cast:'Greta Lee, Teo Yoo',                  badge:'',       color:'#1a3a6b', img:'',  desc:'Two childhood sweethearts are separated and then reunite over 20 years, confronting notions of destiny and love.' },
    { id:'m6',  title:'',      year:2023, rating:7.5, genre:['Drama','War'],        duration:'105 min', director:'Jonathan Glazer',   cast:'Christian Friedel, Sandra Hüller',    badge:'',       color:'#2a2a2a', img:'',  desc:'The commandant of Auschwitz and his wife try to build a dream life in a house next to the camp.' },
    { id:'m7',  title:'',                  year:2023, rating:7.5, genre:['Thriller','Drama'],   duration:'131 min', director:'Emerald Fennell',   cast:'Barry Keoghan, Jacob Elordi',         badge:'new',    color:'#1a1a4b', img:'',  desc:'A student at Oxford becomes fixated on a mysterious classmate, leading to an obsessive summer at his family estate.' },
    { id:'m8',  title:'',          year:2023, rating:7.7, genre:['Comedy','Drama'],     duration:'117 min', director:'Cord Jefferson',    cast:'Jeffrey Wright, Tracee Ellis Ross',    badge:'',       color:'#2a4a2a', img:'',  desc:'A frustrated novelist resorts to writing a parody of stereotypical Black books but it becomes a huge success.' },
    { id:'m9',  title:'Alien: Romulus',            year:2024, rating:7.3, genre:['Sci-Fi','Horror'],    duration:'119 min', director:'Fede Álvarez',      cast:'Cailee Spaeny, David Jonsson',         badge:'new',    color:'#1a2a1a', img:'',  desc:'A group of young space colonizers encounter a terrifying life form in an abandoned space station.' },
    { id:'m10', title:'',          year:2024, rating:7.8, genre:['Action','Sci-Fi'],    duration:'148 min', director:'George Miller',     cast:'Anya Taylor-Joy, Chris Hemsworth',     badge:'top',    color:'#6b3a0a', img:'',  desc:'The origin story of Furiosa before she became the renegade warrior who joins forces with Max Rockatansky.' },
    { id:'m11', title:'',              year:2024, rating:7.9, genre:['Animation','Family'], duration:'100 min', director:'Kelsey Mann',       cast:'Amy Poehler, Maya Hawke',              badge:'top',    color:'#1a4a6b', img:'',  desc:'Riley enters adolescence and new emotions arrive in Headquarters, questioning everything the core emotions stand for.' },
    { id:'m12', title:'Deadpool & Wolverine',      year:2024, rating:7.9, genre:['Action','Comedy'],    duration:'128 min', director:'Shawn Levy',        cast:'Ryan Reynolds, Hugh Jackman',          badge:'top',    color:'#6b0a0a', img:'',  desc:'Deadpool recruits Wolverine for a new mission, forever changing the MCU and the broader Marvel Multiverse.' },
    { id:'m13', title:'A Quiet Place: Day One',    year:2024, rating:7.0, genre:['Horror','Thriller'],  duration:'99 min',  director:'Michael Sarnoski',  cast:'Lupita Nyong\'o, Joseph Quinn',        badge:'new',    color:'#1a1a2a', img:'',  desc:'Experience the day silence became the only way to survive when creatures that hunt by sound first arrived on Earth.' },
    { id:'m14', title:'',                  year:2024, rating:7.2, genre:['Action','Adventure'], duration:'122 min', director:'Lee Isaac Chung',   cast:'Daisy Edgar-Jones, Glen Powell',       badge:'',       color:'#2a3a1a', img:'',  desc:'A storm chaser who has a terrifying encounter with a tornado teams up with a thrill-seeking social media star.' },
    { id:'m15', title:'',             year:2024, rating:7.5, genre:['Horror','Sci-Fi'],    duration:'141 min', director:'Coralie Fargeat',   cast:'Demi Moore, Margaret Qualley',         badge:'new',    color:'#3a0a2a', img:'',  desc:'A fading celebrity uses a black market substance that creates a younger version of herself with unexpected consequences.' },
    { id:'m16', title:'',                  year:2024, rating:7.5, genre:['Thriller','Drama'],   duration:'120 min', director:'Edward Berger',     cast:'Ralph Fiennes, Stanley Tucci',         badge:'new',    color:'#2a2a3a', img:'',  desc:'A cardinal oversees the complex and treacherous process of electing a new Pope.' },
    { id:'m17', title:'',            year:2024, rating:8.3, genre:['Animation','Drama'],  duration:'102 min', director:'Chris Sanders',     cast:'Lupita Nyong\'o, Pedro Pascal',        badge:'top',    color:'#1a3a1a', img:'',  desc:'A robot shipwrecked on an island adapts to the harsh environment and forms bonds with the wild creatures.' },
    { id:'m18', title:'Gladiator II',              year:2024, rating:7.4, genre:['Action','Drama'],     duration:'148 min', director:'Ridley Scott',      cast:'Paul Mescal, Denzel Washington',       badge:'new',    color:'#4a2a0a', img:'',  desc:'Set years after the original, the story follows Lucius, the son of Lucilla, who witnessed the gladiatorial games.' },
    { id:'m19', title:'',                    year:2024, rating:7.5, genre:['Musical','Fantasy'],  duration:'161 min', director:'Jon M. Chu',        cast:'Cynthia Erivo, Ariana Grande',         badge:'top',    color:'#2a0a4a', img:'',  desc:'' },
    { id:'m20', title:'',                 year:2024, rating:7.5, genre:['Horror','Gothic'],    duration:'132 min', director:'Robert Eggers',     cast:'Bill Skarsgård, Lily-Rose Depp',       badge:'new',    color:'#1a0a0a', img:'',  desc:'' },
  ],
  series: [
    { id:'s1',  title:'The Bear Season 3',         year:2024, rating:8.7, genre:['Drama','Comedy'],     duration:'8 eps',   director:'Christopher Storer', cast:'Jeremy Allen White, Ayo Edebiri',     badge:'top',    color:'#6b2a0a', img:'',  desc:'A young chef struggles to transform a Chicago sandwich shop into a high-end restaurant while fighting his own demons.' },
    { id:'s2',  title:'Shogun',                    year:2024, rating:8.9, genre:['History','Drama'],    duration:'10 eps',  director:'Rachel Kondo',       cast:'Hiroyuki Sanada, Cosmo Jarvis',        badge:'top',    color:'#2a1a0a', img:'',  desc:'In feudal Japan, a shipwrecked English navigator becomes a key player in a conflict that will decide the future of Japan.' },
    { id:'s3',  title:'House of the Dragon S2',    year:2024, rating:8.2, genre:['Fantasy','Drama'],    duration:'8 eps',   director:'Ryan Condal',        cast:'Matt Smith, Emma D\'Arcy',             badge:'new',    color:'#4a0a0a', img:'',  desc:'The war of the Targaryen succession unfolds as House Targaryen splits into two rival factions.' },
    { id:'s4',  title:'The Penguin',               year:2024, rating:8.5, genre:['Crime','Drama'],      duration:'8 eps',   director:'Lauren LeFranc',     cast:'Colin Farrell, Cristin Milioti',       badge:'new',    color:'#0a0a1a', img:'',  desc:'Oz Cobb seizes his chance to rise to the top of Gotham\'s criminal underworld following the Riddler\'s attack.' },
    { id:'s5',  title:'Slow Horses Season 4',      year:2024, rating:8.7, genre:['Spy','Thriller'],     duration:'6 eps',   director:'James Hawes',        cast:'Gary Oldman, Kristin Scott Thomas',    badge:'top',    color:'#1a1a2a', img:'', desc:'Jackson Lamb and his misfit team of MI5 agents must navigate a deadly conspiracy that threatens national security.' },
    { id:'s6',  title:'Fallout',                   year:2024, rating:8.5, genre:['Sci-Fi','Action'],    duration:'8 eps',   director:'Jonathan Nolan',     cast:'Ella Purnell, Walton Goggins',         badge:'top',    color:'#3a3a0a', img:'',  desc:'In a post-apocalyptic world, a young woman emerges from her underground bunker into a bizarre and dangerous wasteland.' },
    { id:'s7',  title:'The Diplomat Season 2',     year:2024, rating:8.0, genre:['Drama','Thriller'],   duration:'6 eps',   director:'Debora Cahn',        cast:'Keri Russell, Rufus Sewell',           badge:'new',    color:'#0a2a1a', img:'',  desc:'A newly appointed US Ambassador to the UK navigates a global crisis while managing a tumultuous marriage.' },
    { id:'s8',  title:'Tokyo Vice Season 2',       year:2024, rating:8.1, genre:['Crime','Drama'],      duration:'10 eps',  director:'Michael Mann',       cast:'Ansel Elgort, Ken Watanabe',           badge:'',       color:'#1a0a2a', img:'',  desc:'An American journalist joins forces with a veteran detective to expose criminal underbellies of Tokyo.' },
    { id:'s9',  title:'Pachinko Season 2',         year:2024, rating:8.6, genre:['Drama','History'],    duration:'8 eps',   director:'Kogonada',           cast:'Lee Min-ho, Min Ha-ri',                badge:'top',    color:'#2a1a0a', img:'',  desc:'An epic saga of a Korean immigrant family spanning four generations across Japan and America.' },
    { id:'s10', title:'Only Murders in the Bldg',  year:2024, rating:8.3, genre:['Comedy','Mystery'],   duration:'10 eps',  director:'John Hoffman',       cast:'Steve Martin, Martin Short, Selena',  badge:'',       color:'#1a2a3a', img:'',  desc:'Three strangers with an obsession for true crime podcasts find themselves connected to an actual murder.' },
    { id:'s11', title:'Rings of Power Season 2',   year:2024, rating:7.5, genre:['Fantasy','Epic'],     duration:'8 eps',   director:'J.D. Payne',         cast:'Morfydd Clark, Robert Aramayo',        badge:'new',    color:'#2a1a0a', img:'',  desc:'An epic drama set thousands of years before The Hobbit and The Lord of the Rings.' },
    { id:'s12', title:'Disclaimer',                year:2024, rating:8.2, genre:['Thriller','Mystery'],  duration:'7 eps',  director:'Alfonso Cuarón',     cast:'Cate Blanchett, Kevin Kline',          badge:'top',    color:'#0a0a1a', img:'',  desc:'A documentary filmmaker discovers a novel in her home that reveals a dark secret from her past.' },
    { id:'s13', title:'Agatha All Along',          year:2024, rating:7.8, genre:['Superhero','Fantasy'],'duration':'9 eps', director:'Jac Schaeffer',     cast:'Kathryn Hahn, Joe Locke',              badge:'new',    color:'#2a0a3a', img:'',  desc:'Agatha Harkness assembles a ragtag team of witches to run a dangerous supernatural gauntlet.' },
    { id:'s14', title:'Silo Season 2',             year:2024, rating:8.4, genre:['Sci-Fi','Thriller'],  duration:'10 eps',  director:'Morten Tyldum',      cast:'Rebecca Ferguson, Common',             badge:'top',    color:'#1a1a1a', img:'',  desc:'Thousands of people live in a giant silo underground and learn the terrifying truth about their world.' },
    { id:'s15', title:'The Day of the Jackal',     year:2024, rating:8.5, genre:['Spy','Thriller'],     duration:'10 eps',  director:'Brian Kirk',         cast:'Eddie Redmayne, Lashana Lynch',        badge:'new',    color:'#1a2a0a', img:'',  desc:'A ruthless assassin known as the Jackal is pursued across Europe by a MI5 officer.' },
    { id:'s16', title:'Landman',                   year:2024, rating:8.1, genre:['Drama','Business'],   duration:'10 eps',  director:'Taylor Sheridan',    cast:'Billy Bob Thornton, Demi Moore',        badge:'new',    color:'#3a2a0a', img:'',  desc:'An inside look at the frenzied, dangerous world of oil workers and their families in the Texas oil fields.' },
    { id:'s17', title:'Squid Game Season 2',       year:2024, rating:7.8, genre:['Thriller','Drama'],   duration:'7 eps',   director:'Hwang Dong-hyuk',    cast:'Lee Jung-jae, Lee Byung-hun',          badge:'top',    color:'#0a3a1a', img:'',  desc:'Gi-hun returns to the game three years later, determined to stop it from within.' },
    { id:'s18', title:'Black Doves',               year:2024, rating:8.1, genre:['Spy','Thriller'],     duration:'6 eps',   director:'Joe Barton',         cast:'Keira Knightley, Ben Whishaw',         badge:'new',    color:'#0a0a1a', img:'',  desc:'A government spy embedded in the life of a top UK politician investigates the murder of her secret lover.' },
    { id:'s19', title:'Severance Season 2',        year:2025, rating:9.0, genre:['Sci-Fi','Mystery'],   duration:'10 eps',  director:'Ben Stiller',        cast:'Adam Scott, Patricia Arquette',        badge:'top',    color:'#0a1a2a', img:'',  desc:'Workers at Lumon Industries have a chip implanted that surgically separates their work and personal memories.' },
    { id:'s20', title:'The White Lotus Season 3',  year:2025, rating:8.6, genre:['Satire','Mystery'],   duration:'8 eps',   director:'Mike White',         cast:'Walton Goggins, Carrie Coon',          badge:'top',    color:'#1a3a2a', img:'',  desc:'Set in a luxurious Thai resort, guests and staff interact across an eventful week of dark comedy and mystery.' },
  ],
  games: [
    { id:'g1',  title:'Elden Ring: Nightreign',    year:2025, rating:9.2, genre:['RPG','Action'],       duration:'100+ hrs', director:'Hidetaka Miyazaki', cast:'FromSoftware',                         badge:'top',    color:'#2a1a0a', img:'',  desc:'A standalone co-op experience set in the world of Elden Ring, featuring new bosses and a roguelike structure.' },
    { id:'g2',  title:'Grand Theft Auto VI',       year:2025, rating:9.5, genre:['Open World','Action'],'duration':'100+ hrs',director:'Rockstar Games',   cast:'Rockstar North',                       badge:'top',    color:'#0a2a1a', img:'',  desc:'Set in the fictional Leonida state, GTA VI stars the franchise\'s first female protagonist alongside her partner.' },
    { id:'g3',  title:'Monster Hunter Wilds',      year:2025, rating:9.0, genre:['RPG','Action'],       duration:'80+ hrs', director:'Yuya Tokuda',        cast:'Capcom',                               badge:'top',    color:'#2a1a0a', img:'',  desc:'Hunt enormous beasts across a living, breathing ecosystem that reacts dynamically to your actions.' },
    { id:'g4',  title:'Avowed',                    year:2025, rating:8.2, genre:['RPG','Fantasy'],      duration:'60+ hrs', director:'Carrie Patel',       cast:'Obsidian Entertainment',               badge:'new',    color:'#1a0a2a', img:'',  desc:'Explore the expansive Living Lands in this first-person RPG filled with magic, politics, and ancient mysteries.' },
    { id:'g5',  title:'Hollow Knight: Silksong',   year:2025, rating:9.3, genre:['Metroidvania','Action'],'duration':'40+ hrs',director:'Team Cherry',     cast:'Team Cherry',                          badge:'top',    color:'#1a0a0a', img:'',  desc:'Hornet travels through a kingdom of silk and song in this highly anticipated follow-up to Hollow Knight.' },
    { id:'g6',  title:'Death Stranding 2',         year:2025, rating:8.5, genre:['Action','Sci-Fi'],    duration:'60+ hrs', director:'Hideo Kojima',       cast:'Norman Reedus, Elle Fanning',          badge:'new',    color:'#0a1a0a', img:'',  desc:'Reconnect a fractured world in this genre-defying adventure with strand-type gameplay mechanics.' },
    { id:'g7',  title:'Fable',                     year:2025, rating:8.0, genre:['RPG','Fantasy'],      duration:'50+ hrs', director:'Playground Games',   cast:'Microsoft',                            badge:'new',    color:'#2a3a0a', img:'',  desc:'A reimagining of the beloved Fable franchise set in a beautiful and humorous fantasy world.' },
    { id:'g8',  title:'Doom: The Dark Ages',       year:2025, rating:8.7, genre:['FPS','Action'],       duration:'20+ hrs', director:'Hugo Martin',        cast:'id Software',                          badge:'top',    color:'#4a0a0a', img:'',  desc:'A brutal and bombastic first-person shooter prequel set in a medieval realm of demons and metal.' },
    { id:'g9',  title:'Ghost of Yōtei',            year:2025, rating:9.1, genre:['Action','Open World'],'duration':'60+ hrs',director:'Sucker Punch',      cast:'Sucker Punch Productions',             badge:'top',    color:'#0a1a1a', img:'',  desc:'Set in 17th century Japan on the slopes of Mount Yōtei, play as a lone warrior on a journey of revenge.' },
    { id:'g10', title:'Intergalactic',             year:2025, rating:8.8, genre:['Action','Sci-Fi'],    duration:'30+ hrs', director:'Neil Druckmann',     cast:'Naughty Dog',                          badge:'new',    color:'#0a0a3a', img:'',  desc:'A bounty hunter stranded on a desolate planet must survive in this new universe from Naughty Dog.' },
    { id:'g11', title:'Mafia: The Old Country',    year:2025, rating:8.1, genre:['Crime','Action'],     duration:'15+ hrs', director:'Hangar 13',          cast:'2K Games',                             badge:'new',    color:'#1a1a0a', img:'',  desc:'Return to the origins of the Mafia franchise in early 20th century Sicily.' },
    { id:'g12', title:'Split Fiction',             year:2025, rating:9.4, genre:['Co-op','Action'],     duration:'12+ hrs', director:'Josef Fares',        cast:'Hazelight Studios',                    badge:'top',    color:'#1a0a3a', img:'',  desc:'Two mismatched writers get sucked into their own stories in this wildly inventive co-op adventure.' },
    { id:'g13', title:'Borderlands 4',             year:2025, rating:8.3, genre:['FPS','RPG'],          duration:'40+ hrs', director:'Gearbox Software',   cast:'2K Games',                             badge:'new',    color:'#3a2a0a', img:'',  desc:'The next chapter of the looter-shooter franchise with more guns, more mayhem, and an all-new planet.' },
    { id:'g14', title:'Crimson Desert',            year:2025, rating:8.6, genre:['Open World','RPG'],   duration:'80+ hrs', director:'Pearl Abyss',        cast:'Pearl Abyss',                          badge:'top',    color:'#3a0a0a', img:'',  desc:'A vast open-world action RPG featuring visceral combat and a rich story set in a dark fantasy universe.' },
    { id:'g15', title:'Metal Gear Solid Delta',    year:2025, rating:8.9, genre:['Stealth','Action'],   duration:'30+ hrs', director:'Konami',             cast:'Konami',                               badge:'top',    color:'#0a2a0a', img:'',  desc:'A faithful recreation of the legendary Snake Eater chapter, rebuilt with a modern engine and updated gameplay.' },
    { id:'g16', title:'Like a Dragon: Pirate Yakuza',year:2025,rating:8.4,genre:['RPG','Action'],       duration:'40+ hrs', director:'Ryosuke Horii',      cast:'Ryu Ga Gotoku Studio',                 badge:'new',    color:'#0a1a3a', img:'',  desc:'Majima sets sail across the seas in this wild pirate-themed Yakuza adventure.' },
    { id:'g17', title:'Atomfall',                  year:2025, rating:8.0, genre:['Survival','RPG'],     duration:'25+ hrs', director:'Rebellion',          cast:'Rebellion',                            badge:'new',    color:'#1a2a0a', img:'',  desc:'Set in a quarantine zone in 1960s England, investigate a nuclear disaster in this atmospheric first-person RPG.' },
    { id:'g18', title:'Blue Prince',               year:2025, rating:9.1, genre:['Puzzle','Roguelike'], duration:'20+ hrs', director:'Dogubomb',           cast:'Raw Fury',                             badge:'top',    color:'#0a0a2a', img:'',  desc:'Explore a constantly shifting manor mansion in this mind-bending puzzle roguelite adventure.' },
    { id:'g19', title:'Clair Obscur: Expedition',  year:2025, rating:9.3, genre:['RPG','Turn-Based'],   duration:'50+ hrs', director:'Guillaume Broche',   cast:'Sandfall Interactive',                 badge:'top',    color:'#2a0a2a', img:'',  desc:'A breathtaking turn-based RPG set in a Belle Époque-inspired world where an entity erases people each year.' },
    { id:'g20', title:'Dune: Awakening',           year:2025, rating:8.2, genre:['MMO','Survival'],     duration:'100+ hrs',director:'Funcom',             cast:'Funcom',                               badge:'new',    color:'#3a2a0a', img:'',  desc:'Survive and conquer Arrakis in this open world survival MMO set in the Dune universe.' },
  ]
};
 

let currentCat  = 'movies';
let currentSort = 'default';
let searchQuery = '';
 

function getItems() {
  let items = [...DATA[currentCat]];
  if (searchQuery) {
    items = items.filter(i =>
      i.title.toLowerCase().includes(searchQuery) ||
      i.genre.join(' ').toLowerCase().includes(searchQuery)
    );
  }
  if (currentSort === 'rating') items.sort((a,b) => b.rating - a.rating);
  else if (currentSort === 'year')  items.sort((a,b) => b.year - a.year);
  else if (currentSort === 'az')    items.sort((a,b) => a.title.localeCompare(b.title));
  return items;
}
 
function renderCards() {
  const grid  = document.getElementById('cardGrid');
  const title = document.getElementById('sectionTitle');
  const count = document.getElementById('itemCount');
  const items = getItems();
 
  const labels = { movies:'Movies', series:'Series', games:'Games' };
  title.childNodes[0].textContent = labels[currentCat] + ' ';
  count.textContent = `(${items.length})`;
 
  grid.innerHTML = '';
  items.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'media-card';
    card.style.animationDelay = `${idx * 0.03}s`;
 
    const badgeHTML = item.badge
      ? `<span class="card-badge badge-${item.badge === 'top' ? 'top' : item.badge === 'series' ? 'series' : 'new'}">${item.badge === 'top' ? '⭐ Top' : 'New'}</span>`
      : '';
 
    card.innerHTML = `
      <div class="card-poster-placeholder" style="background: linear-gradient(145deg, ${item.color}22 0%, #0e1018 100%);">
        <div class="ph-icon">${item.emoji}</div>
        <div class="ph-title">${item.title}</div>
      </div>
      ${badgeHTML}
      <div class="card-rating">★ ${item.rating}</div>
      <div class="card-overlay">
        <div class="overlay-title">${item.title}</div>
        <div class="overlay-meta">${item.year} · ${item.genre[0]}</div>
        <button class="overlay-btn">View Details</button>
      </div>
      <div class="card-info">
        <div class="card-title">${item.title}</div>
        <div class="card-sub">
          <span>${item.year}</span>
          <span class="dot">•</span>
          <span>${item.genre[0]}</span>
          <span class="dot">•</span>
          <span style="color:var(--accent)">★ ${item.rating}</span>
        </div>
      </div>`;
 
    card.addEventListener('click', () => openModal(item));
    grid.appendChild(card);
  });
}
 

function openModal(item) {
  const backdrop = document.getElementById('modalBackdrop');
  document.getElementById('modalHero').innerHTML = `
    <div class="modal-hero-placeholder">${item.emoji}</div>
    <div class="modal-hero-gradient"></div>
    <div class="modal-poster-ph">${item.emoji}</div>`;
 
  document.getElementById('modalTags').innerHTML =
    item.genre.map(g => `<span class="modal-tag tag-genre">${g}</span>`).join('') +
    `<span class="modal-tag tag-year">${item.year}</span>` +
    `<span class="modal-tag tag-type">${currentCat === 'movies' ? '🎬 Movie' : currentCat === 'series' ? '📺 Series' : '🎮 Game'}</span>`;
 
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalMeta').innerHTML =
    `<span class="meta-rating">★ ${item.rating}/10</span>
     <span class="dot">·</span>
     <span>${item.duration}</span>
     <span class="dot">·</span>
     <span>${item.year}</span>`;
 
  document.getElementById('modalDesc').textContent = item.desc;
 
  const label1 = currentCat === 'games' ? 'Developer' : 'Director';
  const label2 = currentCat === 'games' ? 'Studio'    : 'Cast';
  document.getElementById('modalInfoGrid').innerHTML = `
    <div class="info-row"><span class="info-label">${label1}</span><span class="info-value">${item.director}</span></div>
    <div class="info-row"><span class="info-label">${label2}</span><span class="info-value">${item.cast}</span></div>
    <div class="info-row"><span class="info-label">Genre</span><span class="info-value">${item.genre.join(', ')}</span></div>
    <div class="info-row"><span class="info-label">Duration</span><span class="info-value">${item.duration}</span></div>`;
 
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}
 
function closeModal() {
  document.getElementById('modalBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}
 
document.getElementById('tabsBar').addEventListener('click', e => {
  const btn = e.target.closest('.tab-btn');
  if (!btn) return;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentCat = btn.dataset.cat;
  renderCards();
  document.querySelector('.section-wrap').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
 
document.getElementById('sortSelect').addEventListener('change', e => {
  currentSort = e.target.value;
  renderCards();
});
 
document.getElementById('searchInput').addEventListener('input', e => {
  searchQuery = e.target.value.trim().toLowerCase();
  renderCards();
});
 
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalBackdrop').addEventListener('click', e => {
  if (e.target === document.getElementById('modalBackdrop')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
 

renderCards();