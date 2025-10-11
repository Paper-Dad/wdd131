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


const avatarEpisodes = [
  //Book One: Water//
  { book: "Water", number: 1, title: "The Boy in the Iceberg" },
  { book: "Water", number: 2, title: "The Avatar Returns" },
  { book: "Water", number: 3, title: "The Southern Air Temple" },
  { book: "Water", number: 4, title: "The Warriors of Kyoshi" },
  { book: "Water", number: 5, title: "The King of Omashu" },
  { book: "Water", number: 6, title: "Imprisoned" },
  { book: "Water", number: 7, title: "Winter Solstice, Part 1: The Spirit World" },
  { book: "Water", number: 8, title: "Winter Solstice, Part 2: Avatar Roku" },
  { book: "Water", number: 9, title: "The Waterbending Scroll" },
  { book: "Water", number: 10, title: "Jet" },
  { book: "Water", number: 11, title: "The Great Divide" },
  { book: "Water", number: 12, title: "The Storm" },
  { book: "Water", number: 13, title: "The Blue Spirit" },
  { book: "Water", number: 14, title: "The Fortuneteller" },
  { book: "Water", number: 15, title: "Bato of the Water Tribe" },
  { book: "Water", number: 16, title: "The Deserter" },
  { book: "Water", number: 17, title: "The Northern Air Temple" },
  { book: "Water", number: 18, title: "The Waterbending Master" },
  { book: "Water", number: 19, title: "The Siege of the North, Part 1" },
  { book: "Water", number: 20, title: "The Siege of the North, Part 2" },

  //Book Two: Earth//
  { book: "Earth", number: 1, title: "The Avatar State" },
  { book: "Earth", number: 2, title: "The Cave of Two Lovers" },
  { book: "Earth", number: 3, title: "Return to Omashu" },
  { book: "Earth", number: 4, title: "The Swamp" },
  { book: "Earth", number: 5, title: "Avatar Day" },
  { book: "Earth", number: 6, title: "The Blind Bandit" },
  { book: "Earth", number: 7, title: "Zuko Alone" },
  { book: "Earth", number: 8, title: "The Chase" },
  { book: "Earth", number: 9, title: "Bitter Work" },
  { book: "Earth", number: 10, title: "The Library" },
  { book: "Earth", number: 11, title: "The Desert" },
  { book: "Earth", number: 12, title: "The Serpent’s Pass" },
  { book: "Earth", number: 13, title: "The Drill" },
  { book: "Earth", number: 14, title: "City of Walls and Secrets" },
  { book: "Earth", number: 15, title: "Tales of Ba Sing Se" },
  { book: "Earth", number: 16, title: "Appa’s Lost Days" },
  { book: "Earth", number: 17, title: "Lake Laogai" },
  { book: "Earth", number: 18, title: "The Earth King" },
  { book: "Earth", number: 19, title: "The Guru" },
  { book: "Earth", number: 20, title: "The Crossroads of Destiny" },

  //Book Three: Fire//
  { book: "Fire", number: 1, title: "The Awakening" },
  { book: "Fire", number: 2, title: "The Headband" },
  { book: "Fire", number: 3, title: "The Painted Lady" },
  { book: "Fire", number: 4, title: "Sokka’s Master" },
  { book: "Fire", number: 5, title: "The Beach" },
  { book: "Fire", number: 6, title: "The Avatar and the Firelord" },
  { book: "Fire", number: 7, title: "The Runaway" },
  { book: "Fire", number: 8, title: "The Puppetmaster" },
  { book: "Fire", number: 9, title: "Nightmares and Daydreams" },
  { book: "Fire", number: 10, title: "The Day of Black Sun, Part 1: The Invasion" },
  { book: "Fire", number: 11, title: "The Day of Black Sun, Part 2: The Eclipse" },
  { book: "Fire", number: 12, title: "The Western Air Temple" },
  { book: "Fire", number: 13, title: "The Firebending Masters" },
  { book: "Fire", number: 14, title: "The Boiling Rock, Part 1" },
  { book: "Fire", number: 15, title: "The Boiling Rock, Part 2" },
  { book: "Fire", number: 16, title: "The Southern Raiders" },
  { book: "Fire", number: 17, title: "The Ember Island Players" },
  { book: "Fire", number: 18, title: "Sozin’s Comet, Part 1: The Phoenix King" },
  { book: "Fire", number: 19, title: "Sozin’s Comet, Part 2: The Old Masters" },
  { book: "Fire", number: 20, title: "Sozin’s Comet, Part 3: Into the Inferno" },
  { book: "Fire", number: 21, title: "Sozin’s Comet, Part 4: Avatar Aang" }
];

const container = document.getElementById("episode-container");
const watched = JSON.parse(localStorage.getItem("watchedEpisodes")) || [];
const books = [...new Set(avatarEpisodes.map(ep => ep.book))];
const filterSelect = document.getElementById("bookFilter");

function renderEpisodes(filter = "All") {
  const filteredBooks = filter === "All" ? books : [filter];

  container.innerHTML = filteredBooks.map(book => {
    const bookEpisodes = avatarEpisodes.filter(ep => ep.book === book);
    const episodesHTML = bookEpisodes.map(ep => {
      const isWatched = watched.includes(ep.title);
      return `
        <li class="episode ${isWatched ? "watched" : ""}" data-title="${ep.title}">
          <strong>Ep ${ep.number}:</strong> ${ep.title}
        </li>
      `;
    }).join("");

    return `
      <section class="book">
        <h2>Book ${book}</h2>
        <ul>${episodesHTML}</ul>
      </section>
    `;
  }).join("");
}

container.addEventListener("click", e => {
  if (e.target.classList.contains("episode")) {
    const title = e.target.dataset.title;
    if (watched.includes(title)) {
      watched.splice(watched.indexOf(title), 1);
    } else {
      watched.push(title);
    }
    localStorage.setItem("watchedEpisodes", JSON.stringify(watched));
    renderEpisodes(filterSelect.value);
  }
});


filterSelect.addEventListener("change", e => {
  renderEpisodes(e.target.value);
});


renderEpisodes();