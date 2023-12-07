const navbar = document.querySelector(".navbar");

navbar.innerHTML = `<div class="nav"><img src="/images/portfolioLogo.png"/>
</div>
<div><ol class="navList"><li>Home</li><li class="dropdown">Projects<div class="dropdown-content">
<a href="https://celebrated-chebakia-e82c27.netlify.app/" class="dropdown-item">Web & Dev Parenthood</a>
<a href="https://classy-rabanadas-8c360c.netlify.app/" class="dropdown-item">Rainy-Days</a>
<a href="https://symphonious-marigold-52e292.netlify.app/" class="dropdown-item">Science Museum</a>
</div></li><li>Contact</li><li>About</li></ol></div>

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
