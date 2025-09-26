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

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const headerTitle = document.querySelector(".headti");

hamButton.addEventListener("click", () => {    
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    headerTitle.classList.toggle("hidden");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-lds-591669-wallpaper.jpg"
  },
  {
    templeName: "Cardston Alberta",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923, August, 29",
    area: 88562,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cardston-alberta/400x250/cardston-alberta-temple-lds-333631-wallpaper.jpg"
  },
    {
    templeName: "Edmonton Alberta",
    location: "Edmonton, Alberta, Canada",
    dedicated: "1999, December, 12",
    area: 10700,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/edmonton-alberta/400x250/edmonton-alberta-temple-lds-83329-wallpaper.jpg"
  },
      {
    templeName: "Calgary Alberta",
    location: "Calgary, Alberta, Canada",
    dedicated: "2012, October, 28",
    area: 33000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/400x250/calgary-alberta-temple-lds-1025065-wallpaper.jpg"
  },
];

const container = document.getElementById("templeContainer");

function createTempleCard(templeList) {
  container.innerHTML = "";
  templeList.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;
    container.appendChild(card);
  });
}

createTempleCard(temples);

const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const homeLink = document.querySelector("#home");

oldLink.addEventListener("click", () => {
  const oldtemp = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });

  createTempleCard(oldtemp);
});

newLink.addEventListener("click", () => {
  const newtemp = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year >= 2000;
  });

  createTempleCard(newtemp);
});

largeLink.addEventListener("click", () => {
  const largetemp = temples.filter(temple => {
    const size = temple.area;
    return size > 90000;
  });

  createTempleCard(largetemp);
});

smallLink.addEventListener("click", () => {
  const smalltemp = temples.filter(temple => {
    const size = temple.area;
    return size < 10000;
  });

  createTempleCard(smalltemp);
});

homeLink.addEventListener("click", () => {
  createTempleCard(temples);
});