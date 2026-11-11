const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", function () {
    
    navigation.classList.toggle("show");

    if (navigation.classList.contains("show")) {
        menuButton.textContent = "❌";
        menuButton.setAttribute("aria-label", "Close navigation menu");
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.setAttribute("aria-expanded", "false");
    }
});

const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;