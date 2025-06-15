function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  // Simulate login
  alert(`Welcome, ${username}! (Login simulated)`);
}

// Show/hide password
const toggle = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

toggle.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  toggle.textContent = type === 'password' ? '👁️' : '🙈';
});
