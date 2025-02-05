document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation
    if (!email || !password) {
        errorMessage.textContent = "Both email and password are required.";
        return;
    }

    // Fake login validation (replace with actual validation logic)
    if (email === "user@example.com" && password === "password123") {
        alert("Login successful!");
        // Redirect to another page (e.g., homepage)
        window.location.href = "homepage.html";  // Update with actual homepage URL
    } else {
        errorMessage.textContent = "Invalid email or password.";
    }
});