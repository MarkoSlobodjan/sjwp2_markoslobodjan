
 const DATA = {
  movies: [
    { id:'m1',  title:'Dune: Part Two',           year:2024, rating:8.5, genre:['Sci-Fi','Epic'],       duration:'166 min', director:'Denis Villeneuve',  cast:'Timothée Chalamet, Zendaya',         badge:'top',    color:'#c8860a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg',  desc:'Paul Atreides unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.' },
    { id:'m2',  title:'Oppenheimer',               year:2023, rating:8.9, genre:['Drama','History'],    duration:'180 min', director:'Christopher Nolan', cast:'Cillian Murphy, Emily Blunt',         badge:'top',    color:'#8b1a1a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',  desc:'The story of J. Robert Oppenheimer and his pivotal role in the development of the first nuclear weapon.' },
    { id:'m3',  title:'Schindlers List',           year:1993, rating:9.0, genre:['Biography','History'],   duration:'195 min', director:'Steven Spielberg',  cast:'Liam Neeson, Ralph Fiennes',            badge:'top',    color:'#3a6b4a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',  desc:'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.' },
    { id:'m4',  title:'Interstellar',year:2014, rating:8.7, genre:['Quest','Sci-fi'],    duration:'169 min', director:'Christopher Nolan',   cast:'Anne Hathaway Matthew McConaughey',   badge:'',       color:'#6b3a1a', img:'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',  desc:'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.' },
    { id:'m5',  title:'The Dark Knight',                year:2008, rating:9.1, genre:['Thriller','Drama'],    duration:'152 min', director:'Chrstiopher Nolan',       cast:'Greta Lee, Teo Yoo',                  badge:'',       color:'#1a3a6b', img:'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',  desc:'When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.' },
    { id:'m6',  title:'Project Hail Mary',      year:2026, rating:8.5, genre:['Dark Comedy','Sci-Fi'],        duration:'156 min', director:'Phil Lord, Christopher Miller',   cast:'Ryan Gosling, James Ortiz',    badge:'',       color:'#2a2a2a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/yihdXomYb5kTeSivtFndMy5iDmf.jpg',  desc:'Science teacher Ryland Grace wakes up alone on a spaceship light-years from Earth. As his memory returns, he uncovers a mission to stop a mysterious substance killing the sun, and save Earth. An unexpected friendship may be the key.' },
    { id:'m7',  title:'Avatar',                  year:2009, rating:7.9, genre:['Actionr','Adventure'],   duration:'162 min', director:'James Cameron',   cast:'Sam Worthington, Sigourney Weaver',         badge:'new',    color:'#1a1a4b', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/gKY6q7SjCkAU6FqvqWybDYgUKIF.jpg',  desc:'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.' },
    { id:'m8',  title:'The Avengers',          year:2012, rating:8.0, genre:['Action','Sci-Fi'],     duration:'143 min', director:'Joss Whedon',    cast:'Robert Downey Jr., Chris Evans, Scarlett Johansson',    badge:'',       color:'#2a4a2a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',  desc:'Earth s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.' },
    { id:'m9',  title:'Alien: Romulus',            year:2024, rating:7.1, genre:['Cyberpunk','Alien Invasion'],    duration:'119 min', director:'Fede Álvarez',      cast:'Cailee Spaeny, David Jonsson',         badge:'new',    color:'#1a2a1a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/zOJ9TD93jc7evinaJOBi2jWSILz.jpg',  desc:'A group of young space colonizers encounter a terrifying life form in an abandoned space station.' },
    { id:'m10', title:'Spider-Man',          year:2002, rating:7.4, genre:['Superhero','Adventure'],    duration:'121 min', director:'Sam Raimi',     cast:'Tobey Maguire',     badge:'top',    color:'#6b3a0a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/nXdAh5vUwERL4WGVMaee8RoDEAS.jpg',  desc:'After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.' },
    { id:'m11', title:'Nuremberg',              year:2025, rating:7.4, genre:['Docudrama','Epic'], duration:'148 min', director:'James Vanderbilt',       cast:'Rami Malek,Russell Crowe',              badge:'top',    color:'#1a4a6b', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/7cWTGH2svfNHWVRjsfKIBob9pDj.jpg',  desc:'A WWII psychiatrist evaluates Nazi leaders before the Nuremberg trials, growing increasingly obsessed with understanding evil as he forms a disturbing bond with Hermann Göring.' },
    { id:'m12', title:'Deadpool & Wolverine',      year:2024, rating:7.9, genre:['Action','Comedy'],    duration:'128 min', director:'Shawn Levy',        cast:'Ryan Reynolds, Hugh Jackman',          badge:'top',    color:'#6b0a0a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',  desc:'Deadpool recruits Wolverine for a new mission, forever changing the MCU and the broader Marvel Multiverse.' },
    { id:'m13', title:'A Quiet Place: Day One',    year:2024, rating:7.0, genre:['Horror','Thriller'],  duration:'99 min',  director:'Michael Sarnoski',  cast:'Lupita Nyong\'o, Joseph Quinn',        badge:'new',    color:'#1a1a2a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/hU42CRk14JuPEdqZG3AWmagiPAP.jpg',  desc:'Experience the day silence became the only way to survive when creatures that hunt by sound first arrived on Earth.' },
    { id:'m14', title:'WALL-E',                  year:2008, rating:8.4, genre:['Sci-fi','Adventure'], duration:'158 min', director:'Andrew Stanton',   cast:'Ben Burtt, Jeff Garlin',       badge:'',       color:'#2a3a1a', img:'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg',  desc:'A robot who is responsible for cleaning a waste-covered Earth meets another robot and falls in love with her. Together, they set out on a journey that will alter the fate of mankind.' },
    { id:'m15', title:'Tom Clancys Jack Ryan: Ghost War',             year:2026, rating:8.0, genre:['Actionr','Drama'],    duration:'105 min', director:'Andrew Bernstein',   cast:'John Krasinski, Sienna Miller',         badge:'new',    color:'#3a0a2a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/cO4py3L3q5GNPrA0qr1wVDrosK1.jpg',  desc:'Follows Jack Ryan who reunites with CIA operatives to navigate a treacherous web of betrayal against an enemy who knows their every move, facing a past they thought was long put to rest.' },
    { id:'m16', title:'Jurassic Park',                  year:1993, rating:8.2, genre:['Adventure','Action'],   duration:'127 min', director:'Steven Spielberg',     cast:'Sam Neill, Laura Dern',         badge:'new',    color:'#2a2a3a', img:'https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg',  desc:'An industrialist invites some experts to visit his theme park of cloned dinosaurs. After a power failure, the creatures run loose, putting everyones lives, including his grandchildrens, in danger.' },
    { id:'m17', title:'Guardians of the Galaxy',            year:2014, rating:8.0, genre:['Quest','Comedy'],  duration:'121 min', director:'James Gunn',     cast:'Chriss Pratt, Vin Diesel',        badge:'top',    color:'#1a3a1a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg',  desc:'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.' },
    { id:'m18', title:'Gladiator II',              year:2024, rating:7.4, genre:['Action','Drama'],     duration:'148 min', director:'Ridley Scott',      cast:'Paul Mescal, Denzel Washington',       badge:'new',    color:'#4a2a0a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg',  desc:'Set years after the original, the story follows Lucius, the son of Lucilla, who witnessed the gladiatorial games.' },
    { id:'m19', title:'Ant-Man',                    year:2015, rating:7.5, genre:['Comedy','Action'],  duration:'117 min', director:'Peyton Reed',        cast:'Paul Rudd, Michael Douglas',         badge:'top',    color:'#2a0a4a', img:'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_.jpg',  desc:'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world.' },
    { id:'m20', title:'Iron Man 3',                 year:2013, rating:7.1, genre:['Superhero','Adventure'],    duration:'130 min', director:'Shane Black',     cast:'Robert Downey Jr., Guy Pearce',       badge:'new',    color:'#1a0a0a', img:'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg',  desc:'When Tony Stark s world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.' },
  ],
  series: [
    { id:'s1',  title:'The Bear Season 3',         year:2024, rating:8.7, genre:['Drama','Comedy'],     duration:'8 eps',   director:'Christopher Storer', cast:'Jeremy Allen White, Ayo Edebiri',     badge:'top',    color:'#6b2a0a', img:'https://image.tmdb.org/t/p/w500/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg',  desc:'A young chef struggles to transform a Chicago sandwich shop into a high-end restaurant while fighting his own demons.' },
    { id:'s2',  title:'Shogun',                    year:2024, rating:8.9, genre:['History','Drama'],    duration:'10 eps',  director:'Rachel Kondo',       cast:'Hiroyuki Sanada, Cosmo Jarvis',        badge:'top',    color:'#2a1a0a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg',  desc:'In feudal Japan, a shipwrecked English navigator becomes a key player in a conflict that will decide the future of Japan.' },
    { id:'s3',  title:'House of the Dragon S2',    year:2024, rating:8.2, genre:['Fantasy','Drama'],    duration:'8 eps',   director:'Ryan Condal',        cast:'Matt Smith, Emma D\'Arcy',             badge:'new',    color:'#4a0a0a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg',  desc:'The war of the Targaryen succession unfolds as House Targaryen splits into two rival factions.' },
    { id:'s4',  title:'The Penguin',               year:2024, rating:8.5, genre:['Crime','Drama'],      duration:'8 eps',   director:'Lauren LeFranc',     cast:'Colin Farrell, Cristin Milioti',       badge:'new',    color:'#0a0a1a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/vOWcqC4oDQws1doDWLO7d3dh5qc.jpg',  desc:'Oz Cobb seizes his chance to rise to the top of Gotham\'s criminal underworld following the Riddler\'s attack.' },
    { id:'s5',  title:'Slow Horses Season 4',      year:2024, rating:8.7, genre:['Spy','Thriller'],     duration:'6 eps',   director:'James Hawes',        cast:'Gary Oldman, Kristin Scott Thomas',    badge:'top',    color:'#1a1a2a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/dnpatlJrEPiDSn5fzgzvxtiSnMo.jpg', desc:'Jackson Lamb and his misfit team of MI5 agents must navigate a deadly conspiracy that threatens national security.' },
    { id:'s6',  title:'Fallout',                   year:2024, rating:8.5, genre:['Sci-Fi','Action'],    duration:'8 eps',   director:'Jonathan Nolan',     cast:'Ella Purnell, Walton Goggins',         badge:'top',    color:'#3a3a0a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/c15BtJxCXMrISLVmysdsnZUPQft.jpg',  desc:'In a post-apocalyptic world, a young woman emerges from her underground bunker into a bizarre and dangerous wasteland.' },
    { id:'s7',  title:'The Diplomat Season 2',     year:2024, rating:8.0, genre:['Drama','Thriller'],   duration:'6 eps',   director:'Debora Cahn',        cast:'Keri Russell, Rufus Sewell',           badge:'new',    color:'#0a2a1a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/cOKXV0FalCYixNmZYCfHXgyQ0VX.jpg',  desc:'A newly appointed US Ambassador to the UK navigates a global crisis while managing a tumultuous marriage.' },
    { id:'s8',  title:'Tokyo Vice Season 2',       year:2024, rating:8.1, genre:['Crime','Drama'],      duration:'10 eps',  director:'Michael Mann',       cast:'Ansel Elgort, Ken Watanabe',           badge:'',       color:'#1a0a2a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/za5QWRfCLwgRLLVXUkx3NUSAm6G.jpg',  desc:'An American journalist joins forces with a veteran detective to expose criminal underbellies of Tokyo.' },
    { id:'s9',  title:'Pachinko Season 2',         year:2024, rating:8.6, genre:['Drama','History'],    duration:'8 eps',   director:'Kogonada',           cast:'Lee Min-ho, Min Ha-ri',                badge:'top',    color:'#2a1a0a', img:'https://media.themoviedb.org/t/p/w58_and_h87_face/fzHuFSo8BO5gK3UjCuXImVpDljv.jpg',  desc:'An epic saga of a Korean immigrant family spanning four generations across Japan and America.' },
    { id:'s10', title:'Only Murders in the Bldg',  year:2024, rating:8.3, genre:['Comedy','Mystery'],   duration:'10 eps',  director:'John Hoffman',       cast:'Steve Martin, Martin Short, Selena',  badge:'',       color:'#1a2a3a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/1yjFVQZuW8aofZ5Cgol8iImsVFp.jpg',  desc:'Three strangers with an obsession for true crime podcasts find themselves connected to an actual murder.' },
    { id:'s11', title:'Rings of Power Season 2',   year:2024, rating:7.5, genre:['Fantasy','Epic'],     duration:'8 eps',   director:'J.D. Payne',         cast:'Morfydd Clark, Robert Aramayo',        badge:'new',    color:'#2a1a0a', img:'https://media.themoviedb.org/t/p/w58_and_h87_face/m93DIqlwcHWiepTl6WXPiOlw4E9.jpg',  desc:'An epic drama set thousands of years before The Hobbit and The Lord of the Rings.' },
    { id:'s12', title:'Disclaimer',                year:2024, rating:8.2, genre:['Thriller','Mystery'],  duration:'7 eps',  director:'Alfonso Cuarón',     cast:'Cate Blanchett, Kevin Kline',          badge:'top',    color:'#0a0a1a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/m0ZB5DEJKare7NTdeR1UQpHYy4c.jpg',  desc:'A documentary filmmaker discovers a novel in her home that reveals a dark secret from her past.' },
    { id:'s13', title:'Agatha All Along',          year:2024, rating:7.8, genre:['Superhero','Fantasy'], duration:'9 eps', director:'Jac Schaeffer',     cast:'Kathryn Hahn, Joe Locke',              badge:'new',    color:'#2a0a3a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/mGsxKwXUjojitRv2E9qMTbxbBRd.jpg',  desc:'Agatha Harkness assembles a ragtag team of witches to run a dangerous supernatural gauntlet.' },
    { id:'s14', title:'Silo Season 2',             year:2024, rating:8.4, genre:['Sci-Fi','Thriller'],  duration:'10 eps',  director:'Morten Tyldum',      cast:'Rebecca Ferguson, Common',             badge:'top',    color:'#1a1a1a', img:'https://media.themoviedb.org/t/p/w58_and_h87_face/qblHRA3QDNZi1xrOsJodBxluCnT.jpg',  desc:'Thousands of people live in a giant silo underground and learn the terrifying truth about their world.' },
    { id:'s15', title:'The Day of the Jackal',     year:2024, rating:8.5, genre:['Spy','Thriller'],     duration:'10 eps',  director:'Brian Kirk',         cast:'Eddie Redmayne, Lashana Lynch',        badge:'new',    color:'#1a2a0a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/tYLecM3WSEjlkKhkGiH5G68Dprm.jpg',  desc:'A ruthless assassin known as the Jackal is pursued across Europe by a MI5 officer.' },
    { id:'s16', title:'Landman',                   year:2024, rating:8.1, genre:['Drama','Business'],   duration:'10 eps',  director:'Taylor Sheridan',    cast:'Billy Bob Thornton, Demi Moore',        badge:'new',    color:'#3a2a0a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/hYthRgS1nvQkGILn9YmqsF8kSk6.jpg',  desc:'An inside look at the frenzied, dangerous world of oil workers and their families in the Texas oil fields.' },
    { id:'s17', title:'Squid Game Season 2',       year:2024, rating:7.8, genre:['Thriller','Drama'],   duration:'7 eps',   director:'Hwang Dong-hyuk',    cast:'Lee Jung-jae, Lee Byung-hun',          badge:'top',    color:'#0a3a1a', img:'https://media.themoviedb.org/t/p/w58_and_h87_face/sXZhtWLo3fecavpDuOyJiayjt32.jpg',  desc:'Gi-hun returns to the game three years later, determined to stop it from within.' },
    { id:'s18', title:'Black Doves',               year:2024, rating:8.1, genre:['Spy','Thriller'],     duration:'6 eps',   director:'Joe Barton',         cast:'Keira Knightley, Ben Whishaw',         badge:'new',    color:'#0a0a1a', img:'https://www.themoviedb.org/t/p/w600_and_h900_face/uoXtkm2P4HPPL8T3IBJ02G3hCC4.jpg',  desc:'A government spy embedded in the life of a top UK politician investigates the murder of her secret lover.' },
    { id:'s19', title:'Severance Season 2',        year:2025, rating:9.0, genre:['Sci-Fi','Mystery'],   duration:'10 eps',  director:'Ben Stiller',        cast:'Adam Scott, Patricia Arquette',        badge:'top',    color:'#0a1a2a', img:'https://media.themoviedb.org/t/p/w58_and_h87_face/Rb7sga832Cyqvafd7CqOzbwdK4.jpg',  desc:'Workers at Lumon Industries have a chip implanted that surgically separates their work and personal memories.' },
    { id:'s20', title:'The White Lotus Season 3',  year:2025, rating:8.6, genre:['Satire','Mystery'],   duration:'8 eps',   director:'Mike White',         cast:'Walton Goggins, Carrie Coon',          badge:'top',    color:'#1a3a2a', img:'https://media.themoviedb.org/t/p/w58_and_h87_face/gbSaK9v1CbcYH1ISgbM7XObD2dW.jpg',  desc:'Set in a luxurious Thai resort, guests and staff interact across an eventful week of dark comedy and mystery.' },
  ],
  games: [
    { id:'g1',  title:'Elden Ring',    year:2022, rating:9.6, genre:['RPG','Action'],       duration:'100+ hrs', director:'Hidetaka Miyazaki', cast:'FromSoftware',                         badge:'top',    color:'#2a1a0a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg',  desc:'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.' },
    { id:'g2',  title:'Cities: Skylines II',       year:2023, rating:8.1, genre:['Simulation','Strategy'], duration:'100+ hrs', director:'Colossal Order',   cast:'Paradox Interactive',                       badge:'top',    color:'#0a2a1a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/coaasz.webp',  desc:'Raise a city from the ground up and transform it into a thriving metropolis with the most realistic city builder ever made.' },
    { id:'g3',  title:'Rocket League',      year:2015, rating:8.8, genre:['Sports','Action'],       duration:'80+ hrs', director:'Psyonix',        cast:'Epic Games',                               badge:'top',    color:'#2a1a0a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/co5w0w.jpg',  desc:'Soccer meets driving once again in the long-awaited, physics-based multiplayer-focused sequel to Supersonic Acrobatic Rocket-Powered Battle-Cars!' },
    { id:'g4',  title:'Minecraft: Java Edition',                    year:2011, rating:9.2, genre:['Sandbox','Adventure'],      duration:'60+ hrs', director:'Markus Persson',       cast:'Mojang',               badge:'new',    color:'#1a0a2a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.jpg',  desc:'A sandbox video game developed by Swedish game developer Markus Persson. The game allows players to build with a variety of different blocks in a 3D procedurally generated world.' },
    { id:'g5',  title:'ARK: Survival Evolved',   year:2017, rating:7.8, genre:['Survival','Adventure'], duration:'40+ hrs', director:'Studio Wildcard',     cast:'Studio Wildcard',                          badge:'top',    color:'#1a0a0a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/co3h8q.webp',  desc:'Stranded on the shores of a mysterious island, you must learn to survive. Use your cunning to kill or tame the primeval creatures roaming the land, and encounter other players to survive, dominate... and escape!' },
    { id:'g6',  title:'Hollow Knight',         year:2017, rating:9.4, genre:['Metroidvania','Action'],    duration:'60+ hrs', director:'Team Cherry',       cast:'Team Cherry',          badge:'new',    color:'#0a1a0a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/co1rgi.jpg',  desc:'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.' },
    { id:'g7',  title:'God of War',                     year:2018, rating:9.6, genre:['Action','Adventure'],      duration:'50+ hrs', director:'Cory Barlog',   cast:'Santa Monica Studio',                            badge:'new',    color:'#2a3a0a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg',  desc:'His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive... and teach his son to do the same.' },
    { id:'g8',  title:'Uncharted 4: A Thief\'s End',       year:2016, rating:9.3, genre:['Action','Adventure'],       duration:'20+ hrs', director:'Neil Druckmann',        cast:'Naughty Dog',                          badge:'top',    color:'#4a0a0a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7h.jpg',  desc:'Several years after his last adventure, retired fortune hunter, Nathan Drake, is forced back into the world of thieves. With the stakes much more personal, Drake embarks on a globe-trotting journey in pursuit of a historical conspiracy behind a fabled pirate treasure.' },
    { id:'g9',  title:'Grand Theft Auto V',            year:2013, rating:9.5, genre:['Action','Open World'], duration:'60+ hrs', director:'Rockstar North',      cast:'Rockstar Games',             badge:'top',    color:'#0a1a1a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbd.webp',  desc:'Three very different criminals team up for a series of heists in the corrupt city of Los Santos. The biggest, most dynamic and most diverse open world ever created.' },
    { id:'g10', title:'Batman: Arkham City',             year:2011, rating:9.1, genre:['Action','Adventure'],    duration:'30+ hrs', director:'Rocksteady Studios',     cast:'Warner Bros. Interactive',                          badge:'new',    color:'#0a0a3a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/co1voh.webp',  desc:'Arkham City builds upon the intense, atmospheric foundation of Batman: Arkham Asylum, sending players soaring into Arkham City, the new maximum security home for all of Gotham Citys thugs, gangsters and insane criminal masterminds.' },
    { id:'g11', title:'BioShock',    year:2007, rating:9.3, genre:['FPS','Action'],     duration:'15+ hrs', director:'2K Boston',          cast:'2K Games',                             badge:'new',    color:'#1a1a0a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/co2mli.jpg',  desc:'BioShock is a shooter unlike any youve ever played, loaded with weapons and tactics never seen. Youll have a complete arsenal at your disposal from simple revolvers to grenade launchers and chemical throwers.' },
    { id:'g12', title:'Stardew Valley',             year:2016, rating:9.2, genre:['Simulation','RPG'],     duration:'12+ hrs', director:'Eric Barone',        cast:'ConcernedApe',                    badge:'top',    color:'#1a0a3a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/coa93h.webp',  desc:'Youve inherited your grandfathers old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?' },
    { id:'g13', title:'World of Warcraft: The War Within',             year:2024, rating:8.5, genre:['MMORPG','Adventure'],          duration:'40+ hrs', director:'Blizzard Entertainment',   cast:'Blizzard Entertainment',                             badge:'new',    color:'#3a2a0a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/co8b7k.webp',  desc:'The world of Azeroth is vast and ever-changing. Join millions of players in an ever-evolving world where danger and adventure await at every corner.' },
    { id:'g14', title:'Slime Rancher',            year:2017, rating:8.4, genre:['Simulation','Adventure'],   duration:'80+ hrs', director:'Monomi Park',        cast:'Monomi Park',                          badge:'top',    color:'#3a0a0a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/co73i2.webp',  desc:'Slime Rancher is the tale of Beatrix LeBeau, a plucky, young rancher who sets out for a life a thousand light years away from Earth on the Far, Far Range where she tries her hand at making a living wrangling slimes.' },
    { id:'g15', title:'Red Dead Redemption 2',    year:2018, rating:9.7, genre:['Action','Adventure'],   duration:'30+ hrs', director:'Rockstar Studios',             cast:'Rockstar Games',                               badge:'top',    color:'#0a2a0a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.jpg',  desc:'America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed.' },
    { id:'g16', title:'The Battle of Polytopia',    year:2016, rating:8.0, genre:['Strategy','Turn-Based'],     duration:'15+ hrs', director:'Midjiwan AB',          cast:'Midjiwan AB',                             badge:'new',    color:'#0a1a3a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/coav77.webp',  desc:'The Battle of Polytopia is a turn based strategic adventure. Its a game about ruling the world, fighting evil AI tribes, discovering new lands and mastering new technologies.' },
    { id:'g17', title:'Hearts of Iron IV',                  year:2016, rating:8.3, genre:['Strategy','Simulation'],       duration:'25+ hrs', director:'Paradox Development Studio',          cast:'Paradox Interactive',                            badge:'new',    color:'#1a2a0a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/coaaql.webp',  desc:'Victory is at your fingertips! Your ability to lead your nation is your supreme weapon, the strategy game Hearts of Iron IV lets you take command of any nation in World War II.' },
    { id:'g18', title:'Left 4 Dead 2',               year:2009, rating:9.0, genre:['FPS','Action'],     duration:'20+ hrs', director:'Valve',           cast:'Valve',                             badge:'top',    color:'#0a0a2a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/co1y2f.webp',  desc:'Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008.' },
    { id:'g19', title:'Star Wars: Battlefront',  year:2015, rating:7.5, genre:['Shooter','Action'],   duration:'50+ hrs', director:'DICE',   cast:'Electronic Arts',                 badge:'top',    color:'#2a0a2a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/co3h6s.webp',  desc:'Immerse yourself in the ultimate Star Wars experience with Star Wars Battlefront. Fight alongside friends and heroes on iconic planets from the Star Wars universe.' },
    { id:'g20', title:'Dune: Awakening',           year:2025, rating:8.2, genre:['MMO','Survival'],     duration:'100+ hrs', director:'Funcom',             cast:'Funcom',                               badge:'new',    color:'#3a2a0a', img:'https://images.igdb.com/igdb/image/upload/t_cover_big/cobf3a.webp',  desc:'Survive and conquer Arrakis in this open world survival MMO set in the Dune universe.' },
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
      ${item.img
        ? `<img class="card-poster" src="${item.img}" alt="${item.title}" loading="lazy" referrerpolicy="no-referrer">`
         : `<div class="card-poster-placeholder" style="background: linear-gradient(145deg, ${item.color}22 0%, #0e1018 100%);">
        <div class="ph-icon">${item.emoji}</div>
        <div class="ph-title">${item.title}</div>
      </div>`}
      ${badgeHTML}
      <div class="card-rating">★ ${item.rating}</div>
      <div class="card-overlay">
        <div class="overlay-title">${item.title}</div>
        <div class="overlay-meta">${item.year} · ${item.genre[0]}</div>
        <button class="overlay-btn">Više</button>
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
const heroImg = document.getElementById('modalHeroImg');
heroImg.src = item.img || '';
heroImg.referrerPolicy = 'no-referrer';
heroImg.alt = item.title;
 
  document.getElementById('modalTags').innerHTML =
    item.genre.map(g => `<span class="modal-tag tag-genre">${g}</span>`).join('') +
    `<span class="modal-tag tag-year">${item.year}</span>` +
    `<span class="modal-tag tag-type">${currentCat === 'movies' ? '🎬 Film' : currentCat === 'series' ? '📺 Serija' : '🎮 Igre'}</span>`;
 
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalMeta').innerHTML =
    `<span class="meta-rating">★ ${item.rating}/10</span>
     <span class="dot">·</span>
     <span>${item.duration}</span>
     <span class="dot">·</span>
     <span>${item.year}</span>`;
 
  document.getElementById('modalDesc').textContent = item.desc;
 
  const label1 = currentCat === 'games' ? 'Developer' : 'Direktor';
  const label2 = currentCat === 'games' ? 'Studio'    : 'Cast';
  document.getElementById('modalInfoGrid').innerHTML = `
    <div class="info-row"><span class="info-label">${label1}</span><span class="info-value">${item.director}</span></div>
    <div class="info-row"><span class="info-label">${label2}</span><span class="info-value">${item.cast}</span></div>
    <div class="info-row"><span class="info-label">Žanr</span><span class="info-value">${item.genre.join(', ')}</span></div>
    <div class="info-row"><span class="info-label">Trajanje</span><span class="info-value">${item.duration}</span></div>`;
 
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