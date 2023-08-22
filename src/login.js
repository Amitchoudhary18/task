document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You should implement your authentication logic here
    // For this example, let's assume a simple check
    if (username === "your_username" && password === "your_password") {
        // Redirect to the user's profile page or perform other actions
        alert("Login successful!");
    } else {
        // Display an error message
        document.getElementById("error-message").textContent = "Invalid username or password.";
    }
});
