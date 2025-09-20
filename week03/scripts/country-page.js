const temperature = 10;
const windSpeed = 5;

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

let windChill;

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1)
}
else {
    windChill = "N/A";
}

const modWindChillSpan = document.getElementById("modWindChill")

if (modWindChillSpan) {
    modWindChillSpan.textContent = windChill
}







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

