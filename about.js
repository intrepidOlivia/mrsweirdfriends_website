
const NAMES = [
    "Chezmerelda Thunderdome",
    "Kitty",
    "Snorgus",
    "La Gatita de la Noche",
    "The Great Catsby",
    "Pibb Handles",
    "Champagne Champagne",
    "Paul Humans",
    "Flotsam \"Jubjub\" Jetsam",
    "Redacted for Legal Reasons",
    "Long Forgotten",
    "A Secret",
    "Linnix Mint",
    "Mr. Cellophane",
    "Crevanche",
    "Cheeky Picante",
    "Denver \"Squiggles\" Huarache",
    "Gamblin Harms",
    "Sebulbing",
    "Dr. Unfathomable",
    "St. Louis Milligan",
    "Crim \"The Obstacle\" Plimp",

];

const LOCATIONS = [
    "the heart of the Coches Mountains",
    "an abandoned lighthouse in the middle of the Sahara desert",
    "your house",
    "the back of your dad's speedboat",
    "the White House (but they don't know about it, so don't tell them)",
    "your imagination",
    "A Hospital Called ABC",
    "A City With Volcanoes in the Sky",
    "my House",
    "A Van Down By the River",
    "a flower store behind a massive iron door",
    "A Bright Cold Room Where the Sun Would Flood Right in",
    "Twin Peaks, Washington",
    "Goth Ham City",
    "An Abandoned Windmill",
    "A Lighthouse that is on Fire",
    "My Digital Home, Everything Made out of Numbers and Code",
    "Linda\'s Basement",
    "The Shadow Realm",
];

const AGES = [
    "12",
    "102",
    "35",
    "69",
    "420",
    "400-ish",
    "6487374893",
    "Only three and a half",
    "ERRORERRORERROR",
    "99",
    "Too many",
    "1294",
    "Estimated to be over 12 million",
];

const BANDS = [
    "Lemon Demon",
    "Harvey Danger",
    "The Faint",
    "Dorian Electra",
    "Flight of the Conchords",
    "Quad City DJs",
    "TV on the Radio",
    "Rubblebucket",
    "my cat screaming at me in the morning because she ran out of wet food",
    "The Shaggs",
    "Turquoise Jeep",
    "!!!",
    "100 gecs",
    "LCD Soundsystem",
    "Cake",
    "clipping.",
    "Man Man",
    "Death from Above 1979",
    "Of Montreal",
    "Art Vs. Science",
    "The Presets",
    "I DON\'T KNOW HOW BUT THEY FOUND ME",
    "The Avalanches",
    "Fujiya & Miyagi",
    "Freelance Whales",
    "Gorillaz",
    "New Young Pony Club",
    "Cansei de Ser Sexy",
];

const HOBBIES = [
    "fixing old cars",
    "prank calling my congressman",
    "extreme quilting",
    "underwater basket-painting",
    "consensual bird-watching",
    "snail wrangling",
    "high-impact channel surfing",
    "competitive napping",
    "believing in my dreams and reaching for the stars",
    "decorative martial arts",
    "ornamental horticulture",
    "Inventing New Savory Cereal Flavors",
    "Making New Friends",
    "Public Transit",
    "NOT Dancing",
    "Misplacing my Wallet",
    "Cheese Rolling",
    "Hacking the Planet",
    "Sending Mixed Messages",
    "Hiding Art for People to Discover Later",
    "Programmable Virtual Reality - The Corrupt Version",
];

const NOTORIETIES = [
    "the time I tried to sue every child that has ever existed.",
    "marrying your parent. That's right. I'm your step-parent now.",
    "Season 4, Episode 12 of \"The Amazing Disgrace\"",
    "forgetting the words to The Tequila Song at Karaoke",
    "school. I sat right behind you in history class",
    "the viral video I was in the background of",
    "my crafting livestreams",
    "that time I was in the newspaper",
    "ice Road Truckers: Extreme Makeover Edition",
    "that weird dream you keep having",
    "the time you met me but forgot shortly after",
    "Roy",
    "that time I sat next to you on the bus",
    "the time we rode the Flaming Seesaws at Burning Man",
];

const AWARDS = [
    "Awards for Excellence in Excellence",
    "The Golden Globe for Best Golden Globe",
    "Best Impromptu Speaking",
    "World\'s Worst Dad",
    "Being the Silliest Goose",
    "Calling it a Comeback",
    "Best Roadtrip Playlist",
    "\"Help! I've Been Turned into a Trophy!\"",
    "Being The Ultimate Winner of this Very Moment",
    "Most Likely to be Three Ghosts in a Trenchcoat",
    "Most Mysterious",
    "Most Ready for the Floor",
    "Remembering the Most Song Lyrics",
];

const PROFESSIONS = [
    "professional cat herder",
    "professional cat burglar",
    "Crafty little weirdo",
    "Cryptid",
    "Future U.S. Senator???",
    "Big fan of Rude Tales of Magic",
    "Loving mother of 78432580475",
    "Friend to every falcon, shark, and bee",
    "Chaos Coordinator",
    "Master of karate and friendship for everyone",
    "Lead International Creative Developer",
    "Human Creative Manager",
    "Showgirl with yellow feathers in her hair",
    "Professional Neopetter",
    "Powerhouse of the Cell",
    "Wiggly Wiggler",
];

const MadLibKeys = {
    name: NAMES,
    notoriety: NOTORIETIES,
    age: AGES,
    profession: PROFESSIONS,
    location: LOCATIONS,
    band: BANDS,
    hobby: HOBBIES,
    award: AWARDS,
};

const IMAGES = [
    'images/chezmerelda1.jpg',
    'images/chezmerelda2.jpg',
    'images/chezmerelda3.jpg',
    'images/chezmerelda4.webp',
];

function populateMadLibs() {
    for (const key in MadLibKeys) {
        const options = MadLibKeys[key];
        // Select random option from options list
        const randomOption = options[Math.floor(Math.random() * options.length)];
        const blank = document.querySelector(`#${key}`);
        blank.innerText = randomOption;
        blank.style.fontWeight = "bold";
    }
}

function populateImages() {
    // Select random image from image list
    const randomImg1 = selectRandomFromList(IMAGES);
    let randomImg2 = selectRandomFromList(IMAGES);
    while (randomImg2 === randomImg1) {
        randomImg2 = selectRandomFromList(IMAGES);
    }
    const img1 = document.querySelector('#bio1');
    const img2 = document.querySelector('#bio2');
    img1.src = randomImg1;
    img2.src = randomImg2;
}

function selectRandomFromList(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function refreshPage() {
    window.location.reload();
}

populateMadLibs();
populateImages();