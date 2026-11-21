// Display the current year
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;

// Display the last modified date
document.querySelector("#lastModified").textContent = document.lastModified;

// Static weather values
const temperature = 29;
const windSpeed = 12;

// Calculate wind chill using the metric formula
function calculateWindChill(temp, speed) {
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1) + " °C";
}

// Check if the conditions allow wind chill calculation
if (temperature <= 10 && windSpeed > 4.8) {
    document.querySelector("#wind-chill").textContent =
        calculateWindChill(temperature, windSpeed);
} else {
    document.querySelector("#wind-chill").textContent = "N/A";
}