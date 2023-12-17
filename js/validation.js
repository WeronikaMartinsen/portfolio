const validation = document.querySelector(".validation");

validation.innerHTML = `
<div class="validationContainer">
<h2 class="margin-button-less">Contact Me</h2>
<span class="contactSpan">Feel free to reach out to me if you have any questions, inquiries, or feedback. I would love to hear from you!</span>

<form class="contact-form">
    <div class="form-group">
      <label for="name">Name:</label>
      <input class="contactInput nameInput" type="text" id="name" name="name" pattern=".{6,}" required>
      <span id="name-error"></span>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input class="contactInput emailInput" type="email" id="email" name="email" required>
      <span id="email-error"></span>
      </div>
    <div class="form-group">
      <label for="subject">Subject:</label>
      <input class="contactInput subjectInput" id="subject" name="subject" required></input>
      <span id="subject-error"></span>
      </div>
    <div class="form-group">
      <label for="message">Message:</label>
      <textarea class="contactInput messageInput" id="message" name="message" rows="5" required></textarea>
      <span id="message-error"></span></div>
    <div class="form-group">
      <button type="submit" class="button-main">Send Message</button>
      <span id="submit-error"></span></div>
  </form> 
</div>
`;

// Select elements for displaying validation errors
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const subjectError = document.getElementById("subject-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

// Function to validate the name field
function validateName() {
  const name = document.getElementById("name").value;
  const required = 5;
  const left = required - name.length;

  if (left > 0) {
    nameError.innerHTML = left + "More characters required.";
    return false;
  }
  if (name.length == 0) {
    nameError.innerHTML = "Name is required.";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name.";
    return false;
  }
  nameError.innerHTML = `<ion-icon class="checkIcon" name="checkmark-circle-outline"></ion-icon>`;
  return true;
}

// Function to validate the email field
function validateEmail() {
  const email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required.";
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "Email invalid.";
    return false;
  }
  emailError.innerHTML = `<ion-icon class="checkIcon" name="checkmark-circle-outline"></ion-icon>`;
  return true;
}

// Function to validate the message field
function validateMessage() {
  const message = document.getElementById("message").value;
  const required = 25;
  const left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + "More characters required.";
    return false;
  }
  messageError.innerHTML = `<ion-icon class="checkIcon" name="checkmark-circle-outline"></ion-icon>`;
  return true;
}

// Function to validate the subject field
function validateSubject() {
  const subject = document.getElementById("subject").value;
  const required = 15;
  const left = required - subject.length;

  if (left > 0) {
    subjectError.innerHTML = left + "More characters required.";
    return false;
  }
  subjectError.innerHTML = `<ion-icon class="checkIcon" name="checkmark-circle-outline"></ion-icon>`;
  return true;
}

// Function to validate the entire form
async function validateForm() {
  const [nameValid, emailValid, subjectValid, messageValid] = await Promise.all(
    [validateName(), validateEmail(), validateSubject(), validateMessage()]
  );

  // Clear individual error messages
  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";

  if (!nameValid || !emailValid || !subjectValid || !messageValid) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix errors to submit.";
    return false; // Return false when there are validation errors
  } else {
    submitError.style.display = "none";
    window.location.href = "/html/confirmation.html";
    return true; // Return true when there are no validation errors
  }
}

// Add keyup and input event listeners for live validation
document.getElementById("name").addEventListener("keyup", validateName);
document.getElementById("name").addEventListener("input", validateName);

document.getElementById("email").addEventListener("keyup", validateEmail);
document.getElementById("email").addEventListener("input", validateEmail);

document.getElementById("subject").addEventListener("keyup", validateSubject);
document.getElementById("subject").addEventListener("input", validateSubject);

document.getElementById("message").addEventListener("keyup", validateMessage);
document.getElementById("message").addEventListener("input", validateMessage);

// Add click event listener for form submission
const submitButton = document.querySelector(".buttonSubmit");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  validateForm();
});
