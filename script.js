// =========================
// MOBILE NAVIGATION
// =========================

// Find the menu button
const menuToggle = document.querySelector(".menu-toggle");

// Find the navigation links
const navLinks = document.querySelector(".nav-links");


// Make sure both elements exist
if (menuToggle && navLinks) {

  // Open/close the menu when the button is clicked
  menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

  });


  // Close the menu after clicking a navigation link
  document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

    });

  });

}



// =========================
// FOOTER YEAR
// =========================

// Find the element that displays the year
const year = document.getElementById("year");


// Put the current year into the footer
if (year) {

  year.textContent = new Date().getFullYear();

}
