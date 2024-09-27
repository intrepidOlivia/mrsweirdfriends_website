
const NAMES = [
    "Chezmerelda Thunderdome",
    "Kitty",
    "Snorgus",
    "La Gatita de la Noche",
    "The Great Catsby",
];

const LOCATIONS = [
    "the heart of the Coches Mountains",
    "an abandoned lighthouse in the middle of the Sahara desert",
    "your house",
    "the back of your dad's speedboat",
    "the White House (but they don't know about it, so don't tell them)",
    "your imagination",
];

const AGES = [
    "12",
    "102",
    "35",
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
];

const NOTORIETIES = [
    "the time I tried to sue every child that has ever existed.",
    "marrying your parent. That's right. I'm your step-parent now.",
];

const AWARDS = [
    "Awards for Excellence in Excellence",
    "The Golden Globe for Best Golden Globe",
];

const PROFESSIONS = [
    "professional cat herder",
    "professional cat burglar",
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