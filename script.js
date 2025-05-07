let currentUser = null; // To store the current logged-in user

// Open modal function
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

// Close modal function
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Handle Sign Up Form
document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  
  // Fake user registration (store in localStorage for simplicity)
  localStorage.setItem('user', JSON.stringify({ username, email, password }));

  alert('User successfully signed up!');
  closeModal('sign-up-modal');
  document.getElementById('signin-username').value = username; // Auto-fill username in sign-in form
});

// Handle Sign In Form
document.getElementById('signin-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('signin-username').value;
  const password = document.getElementById('signin-password').value;
  
  const user = JSON.parse(localStorage.getItem('user')); // Get stored user from localStorage

  if (user && user.username === username && user.password === password) {
    currentUser = user;
    alert('You have successfully signed in!');
    closeModal('sign-in-modal');
    updateAuthUI(); // Update the UI after successful sign-in
  } else {
    alert('Invalid username or password!');
  }
});

// Logout functionality
function logout() {
  currentUser = null;
  updateAuthUI();
}

// Update UI based on user login status
function updateAuthUI() {
  if (currentUser) {
    document.getElementById('logout-btn').style.display = 'block';
    document.querySelectorAll('.auth button').forEach(button => button.style.display = 'none');
  } else {
    document.getElementById('logout-btn').style.display = 'none';
    document.querySelectorAll('.auth button').forEach(button => button.style.display = 'inline-block');
  }
}

// Comment section functionality
document.getElementById('comment-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const commentText = document.getElementById('comment-text').value;

  if (commentText) {
    const commentSection = document.getElementById('comment-section');
    const comment = document.createElement('div');
    comment.classList.add('comment');
    comment.innerHTML = `<p>${commentText}</p>`;
    commentSection.appendChild(comment);
    document.getElementById('comment-text').value = ''; // Clear comment input
  }
});

// Initial UI update on page load
document.addEventListener('DOMContentLoaded', () => {
  updateAuthUI();
});
