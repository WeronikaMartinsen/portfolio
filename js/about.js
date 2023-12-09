const about = document.querySelector(".aboutContainer");

about.innerHTML = `

<div class="about">
<div class="about-image-Div">
<img src="/images/myImage.jpg" alt="Profile picture of myself - Weronika Martinsen."
  />
  <h3>Weronika Martinsen</h3>
</div>
<div class="flex-row">
<div class="about-columns">
<div class="about">
<div class="title"><h4>CONTACTS</h4></div>
<span>📧 Email:
wb3167@gmail.com</span>
<span>🌐 Website:
</span>
<span>📍 Location:
Norway</span>
<span>📱 Phone:
925 011 77</span>
<span>🔗 LinkedIn:
https://www.linkedin.com/in/weronika-martinsen-a655a1246/</span>
</div>

<div class="about">
<div class="title"><h4>SKILLS</h4></div></div></div>

<div class="about-columns">
<div class="about">
<div class="title"><h4>ABOUT ME</h4>
</div>
<span>📱 Phone:
I just started my second year as student in frontend development at Noroff. 
</div>

<div class="about">
<div class="title"><h4>INTERESTS</h4>

</div>
<ul><li>reading books</li>
<li>exercising</li>
<li>travel</li>
<li>listen to music</li>
<li>making food</li></ul></div></div></div>

</div>

`;
const openAboutButton = document.getElementById("openAbout");
const closeAboutButton = document.getElementById("closeAbout");
const aboutContainer = document.getElementById("aboutContainer");

// Initially hide the close button
closeAboutButton.style.display = "none";

// Event listener for opening the about section
openAboutButton.addEventListener("click", function () {
  aboutContainer.classList.add("visible");
  openAboutButton.style.display = "none";
  closeAboutButton.style.display = "block";
});

// Event listener for closing the about section
closeAboutButton.addEventListener("click", function () {
  aboutContainer.classList.remove("visible");
  openAboutButton.style.display = "block";
  closeAboutButton.style.display = "none";
});
