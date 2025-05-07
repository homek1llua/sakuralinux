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

  // Check if the cursor is near the top-right corner (near 10px from the edge)
  if (x > window.innerWidth - 20 && y < 20) {
    sidebar.style.right = "0"; // Show sidebar
  } else {
    sidebar.style.right = "-250px"; // Hide sidebar
  }
});
