document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Function to toggle the theme
    function toggleTheme() {
        body.classList.toggle("dark-theme");
        const isDarkMode = body.classList.contains("dark-theme");
        localStorage.setItem("theme", isDarkMode ? "dark-theme" : "light-theme");

        // Update the button text content based on the theme
        darkModeToggle.textContent = isDarkMode ? "🌞" : "🌛";
    }

    // Function to toggle the active tab
    function toggleTab(tabId) {
        // Add code here to toggle the active tab based on the tabId
        // For example, you can add classes to show/hide tab content
    }

    // Check for the user's theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark-theme") {
        body.classList.add("dark-theme");
        darkModeToggle.textContent = "🌞"; // Set the initial button text for dark theme
    }

    // Check for the saved active tab
    const savedTabId = localStorage.getItem("activeTabId");
    if (savedTabId) {
        toggleTab(savedTabId);
    }

    // Event listener for the theme toggle button
    darkModeToggle.addEventListener("click", function () {
        // Record the current scroll position
        const scrollPosition = window.scrollY;
        toggleTheme();

        // Store the active tab
        const activeTabId = 'your-active-tab-id'; // Replace with your actual tab id
        localStorage.setItem("activeTabId", activeTabId);

        // Refresh the page
        location.reload();

        // Restore the scroll position after the page refresh
        window.scrollTo(0, scrollPosition);
    });
});