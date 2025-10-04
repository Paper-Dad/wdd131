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

/*Product selector*/

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const select = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = `${product.name}`;
    select.appendChild(option);
});



document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("review.html")) {
        let reviewCount = localStorage.getItem('reviewCount');
        reviewCount = reviewCount ? parseInt(reviewCount) : 0;
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);

        document.getElementById('reviewCounter').textContent =
            `You have submitted ${reviewCount} review${reviewCount === 1 ? '' : 's'}.`;
    }
});