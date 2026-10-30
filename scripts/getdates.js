//Display the current year
document.querySelector("#currentyear").textContent = new Date().getFullYear();

//Display when the HTML document was last modified.
document.querySelector("#lastModified").textContent =
    `Last modified: ${document.lastModified}`;