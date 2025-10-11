//Menu Info//

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");


hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

//Menu info//


//Footer info//
const currentYear = new Date().getFullYear();
const yearSpan = document.getElementById("year");

if (yearSpan) {
    yearSpan.textContent = currentYear;
}
const modified = document.lastModified;
const lastModifiedSpan = document.getElementById("lastModified");

if (lastModifiedSpan) {
    lastModifiedSpan.textContent = modified;
}

//Footer Info//

//Quiz Info//

const nationImages = {
    "Water Tribe": "images/water-tribe.webp",
    "Fire Nation": "images/fire-nation.webp",
    "Earth Kingdom": "images/earth-kingdom.webp",
    "Air Nomads": "images/air-nation.webp"
};

const form = document.getElementById("quizForm");
const resultSection = document.getElementById("result");
const nationImage = document.getElementById("nation-image");
const nationText = document.getElementById("nation-text");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const element = form.querySelector('input[name="element"]:checked')?.value;
    const trait = form.querySelector('input[name="trait"]:checked')?.value;
    const color = form.querySelector('input[name="color"]:checked')?.value;

    if (!element || !trait || !color) {
        nationText.textContent = "Please answer all questions!";
        nationImage.style.display = "none";
        return;
    }

    const answers = [element, trait, color];
    const nation = determineNation(answers);

    nationText.innerHTML = `You belong to the <strong>${nation}</strong>!`;
    nationImage.src = nationImages[nation];
    nationImage.alt = `${nation} symbol`;
    nationImage.style.display = "block";

    localStorage.setItem("avatarNation", nation);
});

function determineNation(answers) {
    const scores = {
        "Water Tribe": 0,
        "Earth Kingdom": 0,
        "Fire Nation": 0,
        "Air Nomads": 0
    };

    const mappings = {
        "Water Tribe": ["Blubbered Seal Jerky", "Calm", "Katara"],
        "Earth Kingdom": ["Cabbage Soup", "Strong", "Toph"],
        "Fire Nation": ["Flaming Fire Flakes", "Passionate", "Uncle Iroh"],
        "Air Nomads": ["Egg Custard Tart", "Free-Spirited", "Aang"]
    };

    answers.forEach(answer => {
        for (const nation in mappings) {
            if (mappings[nation].includes(answer)) {
                scores[nation]++;
            }
        }
    });

    let topNation = "Air Nomads";
    let highestScore = 0;
    for (const nation in scores) {
        if (scores[nation] > highestScore) {
            highestScore = scores[nation];
            topNation = nation;
        }
    }

    return topNation;
}

window.addEventListener("load", () => {
    const saved = localStorage.getItem("avatarNation");
    if (saved) {
        resultText.innerHTML = `<p>Your last result was: <strong>${saved}</strong></p>`;
        nationImage.src = nationImages[saved];
        nationImage.alt = `${saved} symbol`;
        nationImage.style.display = "block";
    }
});