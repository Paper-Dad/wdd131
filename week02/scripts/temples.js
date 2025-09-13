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