const footer = document.querySelector(".footer");

footer.innerHTML = `<div class="row">


<div class="column firstOne"><img src="/images/martinsenLogo.png" alt="Logo">
<a href=""><button class="button-main">CONTACT ME</button></a>
</div>
<div class="column border-left">
<ul>
<li><a href="#home">Home</a></li>
<li>Contact</li>
<li><a href="#about">About</a></li>
<li><a href="#project">Project</a></li>
</ul>
</div>
<div class="column border-left">
<i class="fa-brands fa-github"></i>
<i class="fa-brands fa-linkedin"></i>
<i class="fa-brands fa-twitter"></i>

</div>

</div>
 `;

function navigateToSection(sectionId) {
  window.location.href = "#" + sectionId;
}
