var commanders = [
'Brian Stoutarm',
'Aboshan, Cephalid Emperor',
'Adamaro, First to Desire',
'Adeliz, the Cinder Wind',
'Adriana, Captain of the Guard',
'Agrus Kos, Wojek Veteran',
'Akki Lavarunner',
'Alesha, Who Smiles at Death',
'Alexi, Zephyr Mage',
'Alhammarret, High Arbiter',
'Anax and Cymede',
'Anowon, the Ruin Sage',
'Anthousa, Setessan Hero',
'Arcanis the Omnipotent',
'Asmira, Holy Avenger',
'Atalya, Samite Master',
'Atarka, World Render',
'Atogatog',
'Avacyn, Guardian Angel',
'Azami, Lady of Scrolls',
'Baird, Steward of Argive',
'Balthor the Stout',
'Baru, Fist of Krosa',
'Basandra, Battle Seraph',
'Bladewing the Risen',
'Blind Seer',
'Borborygmos',
'Bosh, Iron Golem',
'Bounteous Kirin',
'Captain Lannery Storm',
'Celestial Kirin',
'Chromium',
'Chrous of the Conclave',
'Circu, Dimir Lobotomist',
'Cloudhood Kirin',
'Commander Greven il-Vec',
'Crosis, the Purger',
'Crovax the Cursed',
'Cunning Bandit',
'Dakkon Blackblade',
'Danitha Capashen, Paragon',
'Darigaaz, the Igniter',
'Daxos of Meletis',
'Daxos the Returned',
'Depala, Pilot Exemplar',
'Drana, Kalastria Bloodchief',
'Dromoka, the Eternal',
'Dwynen, Gilt-Leaf Daen',
'Emmara Tandris',
'Emmara, Soul of the Accord',
'Endrek Sahr, Master Breeder',
'Etrata, the Silencer',
'Evra, Halcyon Witness',
'Exava, Rakdos Blood Witch',
'Fumiko the Lowblood',
'Garna, the Bloodflame',
'Garza Zol, Plague Queen',
'General Tazri',
'Gerrard Capashen',
'Ghost Council of Orzhova',
'Glissa Sunseeker',
'Gonti, Lord of Luxury',
'Grand Warlord Radha',
'Greel, Mind Raker',
'Grunn, the Lonely King',
'Gwafa Hazid, Profiteer',
'Hakim, Loreweaver',
'Hallar, the Firefletcher',
'Hapatra, Vizier of Poisons',
'He Who Hungers',
'Heidar, Rimewind Master',
'Hisoka, Minamo Sensei',
'Hixus, Prison Warden',
'Horde of Notions',
'Horobi, Death\'s Wail',
'Hua Tuo, Honored Physician',
'Hythonia the Cruel',
'Iname as One',
'Iname, Death Aspect',
'Iname, Life Aspect',
'Infernal Kirin',
'Intet, the Dreamer',
'Isareth the Awakener',
'Isperia the Inscrutable',
'Ith, High Arcanist',
'Ixidor, Reality Sculptor',
'Izoni, Thousand-Eyed',
'Jalira, Master Polymorphist',
'Jareth, Leonine Titan',
'Jaya Ballard, Task Mage',
'Jazal Goldmane',
'Jedit Ojanen of Efrava',
'Jeleva, Nephalia\'s Scourge',
'Jeska, Warrior Adept',
'Jiwari, the Earth Aflame',
'Jodah, Archmage Eternal',
'Jolrael, Empress of Beasts',
'Jor Kadeen, the Prevailer',
'Jori En, Ruin Diver',
'Josu Vess, Lich Knight',
'Jushi Apprentice',
'Kalemne, Disciple of Iroas',
'Kamahl, Pit Fighter',
'Kambal, Consul of Allocation',
'Kami of the Crescent Moon',
'Kari Zev, Skyship Raider',
'Kaseto, Orochi Archmage',
'Kazarov, Sengir Pureblood',
'Kazuul, Tyrant of the Cliffs',
'Kefnet the Mindful',
'Kemba, Kha Regent',
'King Macas, the Gold-Cursed',
'Kiyomaro, First to Stand',
'Kodama of the Center Tree',
'Kodama of the North Tree',
'Kodama of the South Tree',
'Kopala, Warden of Waves',
'Kothophed, Soul Hoarder',
'Kumano, Master Yamabushi',
'Kuon, Ogre Ascendant',
'Kurkesh, Onakke Ancient',
'Kwende, Pride of Femeref',
'Kyoki, Sanity\'s Eclipse',
'Latullar, Keldon Overseer',
'Lavinia of the Tenth',
'Lavinia, Azorious Renegade',
'Lena, Selfless Champion',
'Linessa, Zephyr Mage',
'Lorthos, the Tidemaker',
'Lu Xun, Scholar General',
'Lyzolda, the Blood Witch',
'Mageta the Lion',
'Malfegor',
'Mannichi, the Fevered Dream',
'Marath, Will of the Wild',
'Maraxus of Keld',
'Marwyn, the Nurturer',
'Masumaro, First to Live',
'Mavren Fein, Dusk Apostle',
'Melek, Izzet Paragon',
'Mina and Denn, Wildborn',
'Mirko Vosk, Mind Drinker',
'Molimo, Maro-Sorcerer',
'Naban, Dean of Iteration',
'Nath of the Gilt-Leaf',
'Nefarox, Overlord of Grixis',
'Neheb, the Worthy',
'Nezumi Graverobber',
'Nikya of the Old Ways',
'Nin, the Pain Artist',
'Niv-Mizzet, Dracogenius',
'Niv-Mizzet, the Firemind',
'Noyan Dar, Roil Shaper',
'Odric, Master Tactician',
'Ojutai, Soul of Winter',
'Oros, the Avenger',
'Oviya Pashiri, Sage Lifecrafter',
'Oyobi, Who Split the Heavens',
'Padeem, Consul of Innovation',
'Padeem, Consul of Inovation',
'Palladia-Mors',
'Patron of the Akki',
'Patron of the Kitsune',
'Patron of the Nezumi',
'Pia Nalaar',
'Pianna, Nomad Captain',
'Purraj of Urborg',
'Radha, Heir of Keld',
'Raff Capashen, Ship\'s Mage',
'Raksha Golden Cub',
'Razia, Boros Archangel',
'Rishkar, Peema Renegade',
'Rona, Disciple of Gix',
'Roon of the Hidden Realm',
'Rorix Bladewing',
'Rosheen Meanderer',
'Rubinia Soulsinger',
'Sachi, Daughter of Seshiro',
'Samut, Voice of Dissent',
'Sek\'Kuar, Deathkeeper',
'Selvala, Explorer Returned',
'Shanna, Sisay\'s Legacy',
'Sharuum the Hegemon',
'Shimatsu the Bloodcloaked',
'Shisato, Whispering Hunter',
'Shu Yun, the Silent Tempest',
'Sidisi, Brood Tyrant',
'Silumgar, the Drifting Death',
'Silvos, Rogue Elemental',
'Skyfire Kirin',
'Slimefoot, the Stoaway',
'Slinn Voda, the Rising Deep',
'Sol\'kanar the Swamp King',
'Soramaro, First to Dream',
'Sosuke, Son of Seshiro',
'Squee, the Immortal',
'Sram, Senior Edificer',
'Starke of Rath',
'Stonebrow, Krosan Hero',
'Student of Elements',
'Surrak, the Hunt Caller',
'Sydri, Galvanic Genius',
'Sygg, River Guide',
'Szadek, Lord of Secrets',
'Tajic, Blade of the Legion',
'Tajic, Legion\'s Edge',
'Takeno, Samurai General',
'Talrand, Sky Summoner',
'Tatyova, Benthic Druid',
'Telim \'Tor',
'Temet, Vizier of Naktamun',
'Temmet, Vizier of Naktamun',
'Teneb, the Harvester',
'Teshar, Ancestor\'s Apostle',
'Tesya, Envoy of Ghosts',
'Tetsuko Umezawa, Fugitive',
'Tetzimoc, Primal Death',
'The Unspeakable',
'Thelon of Havenwood',
'Thriss, Nantuko Primus',
'Tiana, Ship\'s Caretaker',
'Tibor and Lumia',
'Torgaar, Famine Incarnate',
'Traxos, Scourge of Kroog',
'Triad of Fates',
'Tromokratis',
'Unesh, Criosphinx Sovereign',
'Urgoros, the Empty One',
'Uyo, Silent Prophet',
'Vaevictis Asmadi',
'Valduk, Keeper of the Flame',
'Varolz, the Scar-Striped',
'Verdeloth the Ancient',
'Visara the Dreadful',
'Volrath the Fallen',
'Vorel of the Hull Clade',
'Whisper, Blood Liturgist',
'Wort, the Raidmother',
'Wydwen, the Biting Gale',
'Xira Arien',
'Yargle, Glutton of Urborg',
'Yasova Dragonclaw',
'Yisan, the Wanderer Bard',
'Zada, Hedron Grinder',
'Zahid, Djinn of the Lamp',
'Zegana, Utopian Speaker',
'Zurgo Helmsmasher',
'Zndrsplt, Eye of Wisdom',
'Okaun, Eye of Chaos',
'Virtus the Veiled',
'Gorm the Great',
'Khorvath Brightflame',
'Sylvia Brightspear',
'Tawnos, Urza\'s Apprentice',
'Fblthp, the Lost',
'Massacre Girl',
'Krenko, Tin Street Kingpin',
'Neheb, Dreadhorde Champion',
'Mowu, Loyal Companion',
'Storrev, Devkarin Lich',
'Tolsimir, Friend to Wolves',
'Sisay, Weatherlight Captain',
'Pashalik Mons',
'Ayula, Queen Among Beers',
'Sephara, Sky\'s Blade',
'Atemsis, All-Seeing',
'Gargos, Vicious Watcher',
'Gerrard, Weatherlight Hero',
'Grismold, the Dreadsower',
'Rayami, First of the Fallen',
'Tahngarth, First Mate',
'Linden, Steadfast Queen',
'Syr Elenora, the Discerning',
'Syr Konrad, the Grim',
'Syr Carah, the Bold',
'Syr Farren, the Hengehammer',
'Yorvo, Lord of Garenbrig',
'Grumgully, the Generous',
'Daxos, Blessed by the Sun',
'Taranika, Akroan Veteran',
'Alirios, Enraptured',
'Callaphe, Beloved of the Sea',
'Thryx, the Sudden Storm',
'Aphemia, the Cacophany',
'Tymaret, Chosen from Death',
'Anax, Hardened in the Forge',
'Arasta of the Endless Web',
'Renata, Called to the Hunt',
'Atris, Oracle of Half-Truths',
'Dalakos, Crafter of Wonders',
'Eutropia, the Twice-Favored',
'Gallia of the Endless Dance',
'Haktos the Unscarred',
'Kunoros, Hound of Athreos',
'Siona, Captain of the Pyleas',
'Tomorrow, Azami\'s Familiar',
'Tatyova, Benthic Druid',
'Obzedat, Ghost Council',
'Tymaret, the Murder King',
'Godo, Bandit Lord',
'Arvad the Cursed',
'Ruric Thar, the Unbowed',
'Seton, Krosan Protector',
'Ayli, Eternal Pilgrim ',
'Aryel, Knight of Windgrace',
'Zo-Zu the Punisher',
'Munda, Ambush Leader',
'Kolaghan, the Storm\'s Fury',
'Darigaaz Reincarnated',
'Isperia, Supreme Judge',
'Mairsil, the Pretender',
'Akiri, Fearless Voyager',
'Alirios, Enraptured',
'Anax, Hardened in the Forge',
'Aphemia, the Cacophony',
'Arasta of the Endless Web',
'Atris, Oracle of Half-Truths',
'Callaphe, Beloved of the Sea',
'Charix, the Raging Isle',
'Dalakos, Crafter of Wonders',
'Daxos, Blessed by the Sun',
'Eutropia the Twice-Favored',
'Gallia of the Endless Dance',
'Grakmaw, Skyclave Ravager',
'Gyruda, Doom of Depths',
'Haktos the Unscarred',
'Jegantha, the Wellspring',
'Kaheera, the Orphanguard',
'Kaza, Roil Chaser',
'Keruga, the Macrosage',
'Kogla, the Titan Ape',
'Kunoros, Hound of Athreos',
'Linvala, Shield of Sea Gate',
'Lutri, the Spellchaser',
'Obosh, the Preypiercer',
'Orah, Skyclave Hierophant',
'Phylath, World Sculptor',
'Renata, Called to the Hunt',
'Siona, Captain of the Pyleas',
'Taborax, Hope\'s Demise',
'Taranika, Akroan Veteran',
'Tazri, Beacon of Unity',
'Thryx, the Sudden Storm',
'Tymaret, Chosen from Death',
'Umori, the Collector',
'Verazol, the Split Current',
'Yasharn, Implacable Earth',
'Yidaro, Wandering Monster',
'Zagras, Thief of Heartbeats',
]

function newCommander() {
	var randomNumber = Math.floor(Math.random() * (commanders.length));
	document.getElementById('commanderDisplay').innerHTML = commanders[randomNumber];
}



