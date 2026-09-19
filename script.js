/* =========================================================
   ACADEMIC WEBSITE
========================================================= */

// Automatically update the copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Small page-load animation
document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("loaded");

});
