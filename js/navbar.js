const navbar = document.querySelector(".navbar");

navbar.innerHTML = `<div class="nav">
<img src="/images/martinsenLogo.png" alt="Logo">
</div>
<div class="menu"><i class="fa-solid fa-bars"></i>
<i id="hidden" class="fa-solid fa-rectangle-xmark close-button"></i></div>
<div class="navListContainer">
<ul class="navList">
  <li class="dropdown">
    Projects
    <div class="dropdown-content">
      <a href="https://celebrated-chebakia-e82c27.netlify.app/" class="dropdown-item">Web & Dev Parenthood</a>
      <a href="https://classy-rabanadas-8c360c.netlify.app/" class="dropdown-item">Rainy-Days</a>
      <a href="https://symphonious-marigold-52e292.netlify.app/" class="dropdown-item">Science Museum</a>
    </div>
  </li>
  <li>Home</li>
  <li>Contact</li>
  <li>About</li>
</ul>
</div>
</div>

`;

document.querySelector(".navList").addEventListener("click", function (event) {
  const dropdown = document.querySelector(".dropdown"); // Select the .dropdown element
  const dropdownContent = document.querySelector(".dropdown-content");

  // Check if the clicked element is the dropdown li
  if (event.target.closest(".dropdown")) {
    dropdown.classList.toggle("active"); // Toggle the "active" class on .dropdown
  } else {
    // Close the dropdown if clicking outside
    dropdown.classList.remove("active"); // Remove the "active" class on .dropdown
  }
});

const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
const navList = document.querySelector(".navList");
const menuButton = document.querySelector(".fa-bars");
const closeButton = document.querySelector(".fa-rectangle-xmark");

document.querySelector(".menu").addEventListener("click", function () {
  const isActive = navList.classList.toggle("active");

  // Toggle between menu and close icons
  if (isActive) {
    menuButton.style.display = "none";
    closeButton.style.display = "inline-block";
  } else {
    menuButton.style.display = "inline-block";
    closeButton.style.display = "none";
  }
});
