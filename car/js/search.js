// Replace this array with your own data to search through
const data = [
    { title: "google",       link: "https://google.com" },
    { title: "bmw",          link: href="/carslinks/BMW/BMW.html"}, // Placeholder link for Page 2
    { title: "cadillac",     link: href="/carslinks/Cadillac/Cadillac.html"}, // Placeholder link for Page 3
    { title: "gmc",          link: href="/carslinks/GMC/GMC.html" }, // Placeholder link for Page 4
    { title: "jaguar",       link: href="/carslinks/jaguar/jaguar.html"} , // Placeholder link for Page 5
    { title: "landrover",    link: href="/carslinks/landrover/landrover.html"},  // Placeholder link for Page 5
    { title: "mercedes",     link: href="/carslinks/mercedes benz/mercedes.html"},  // Placeholder link for Page 5
    { title: "porsche",      link: href="/carslinks/porsche/porsche.html"},  // Placeholder link for Page 5
    // Add more pages as needed
];

// Function to create and insert links into the DOM
function createLinks() {
    const linksContainer = document.getElementById("linksContainer");

    data.forEach(page => {
        const linkElement = document.createElement("a");
        linkElement.href = page.link;
        linkElement.textContent = page.title;
        linkElement.setAttribute("target", "_blank"); // Open link in new tab

        const br = document.createElement("br"); // Line break between links

        linksContainer.appendChild(linkElement);
        linksContainer.appendChild(br);
    });
}

// Call createLinks function when the page loads
document.addEventListener("DOMContentLoaded", createLinks);

// Search functionality
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsContainer = document.getElementById("results");

function searchWebsite(query) {
    // Filter data based on the search query
    const results = data.filter(item => {
        // Check if the item is an object with a 'title' property
        if (typeof item === 'object' && item.title) {
            return item.title.toLowerCase().includes(query.toLowerCase());
        }
        return item.toLowerCase().includes(query.toLowerCase());
    });

    displayResults(results);
}

function displayResults(results) {
    // Clear previous results
    resultsContainer.innerHTML = "";

    if (results.length === 0) {
        const noResultsMessage = document.createElement("div");
        noResultsMessage.textContent = "No results found.";
        resultsContainer.appendChild(noResultsMessage);
    } else {
        results.forEach(result => {
            // Display each result in a div
            const resultItem = document.createElement("div");
            if (typeof result === 'object' && result.title) {
                // If result is an object, display its title and link
                const linkElement = document.createElement("a");
                linkElement.href = result.link;
                linkElement.textContent = result.title;
                linkElement.setAttribute("target", "_blank");
                resultItem.appendChild(linkElement);
            } else {
                // Otherwise, display result as plain text
                resultItem.textContent = result;
            }
            resultsContainer.appendChild(resultItem);
        });
    }
}

// Event listeners for search input and button
searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    searchWebsite(query);
});

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const query = searchInput.value.trim();
        searchWebsite(query);
    }
});