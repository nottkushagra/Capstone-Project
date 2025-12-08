document.addEventListener("DOMContentLoaded", function () {

    // LOGIN BUTTON FUNCTION
    const loginBtn = document.getElementById("loginBtn");
    const message = document.getElementById("message");

    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            message.textContent = "Account Registered";
        });
    }

    // DARK MODE TOGGLE FUNCTION
    const themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Change button text depending on mode
        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️ Light Mode";
        } else {
            themeToggle.textContent = "🌙 Dark Mode";
        }
    });
});
