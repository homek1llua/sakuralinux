// Dark/Light Mode Toggle
const toggle = document.getElementById("modeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Sidebar Interaction - Pop-out when mouse is near the top-right corner
const sidebar = document.getElementById("sidebar");

document.body.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  if (x > window.innerWidth - 20 && y < 20) {
    sidebar.style.right = "0"; // Show sidebar
  } else {
    sidebar.style.right = "-300px"; // Hide sidebar
  }
});

// Modal interaction for Sign In/Sign Up
const signInBtn = document.getElementById("signInBtn");
const signUpBtn = document.getElementById("signUpBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalTitle = document.getElementById("modalTitle");
const submitBtn = document.getElementById("submitBtn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const authBtns = document.getElementById("authBtns");
const logoutBtns = document.getElementById("logoutBtns");
const logoutBtn = document.getElementById("logoutBtn");

signInBtn.addEventListener("click", () => {
  modal.style.display = "block";
  modalTitle.textContent = "Sign In";
  submitBtn.textContent = "Sign In";
});

signUpBtn.addEventListener("click", () => {
  modal.style.display = "block";
  modalTitle.textContent = "Sign Up";
  submitBtn.textContent = "Sign Up";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Simulate login/signup
  authBtns.style.display = "none";
  logoutBtns.style.display = "block";
  modal.style.display = "none";
});

logoutBtn.addEventListener("click", () => {
  authBtns.style.display = "block";
  logoutBtns.style.display = "none";
});

// Comment submission
const commentForm = document.getElementById("commentForm");
const commentInput = document.getElementById("commentInput");
const commentsList = document.getElementById("commentsList");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const commentText = commentInput.value.trim();
  if (commentText) {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.textContent = commentText;
    commentsList.appendChild(commentDiv);
    commentInput.value = ""; // Clear the textarea
  }
});
