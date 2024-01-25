// Get the modal elements
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");

// Get the button elements
var loginBtn = document.getElementById("loginBtn");
var registerBtn = document.getElementById("registerBtn");

// Get the close button element
var closeBtns = document.getElementsByClassName("close");

// Function to open the login modal
function openLoginModal() {
  loginModal.style.display = "block";
}

// Function to open the register modal
function openRegisterModal() {
  registerModal.style.display = "block";
}

// Function to close the modals
function closeModal() {
  loginModal.style.display = "none";
  registerModal.style.display = "none";
}

// Event listeners for the buttons
loginBtn.addEventListener("click", openLoginModal);
registerBtn.addEventListener("click", openRegisterModal);

// Event listener for the close buttons
for (var i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener("click", closeModal);
}

// Close modals when clicking outside the modal content
window.addEventListener("click", function(event) {
  if (event.target == loginModal || event.target == registerModal) {
    closeModal();
  }
});
