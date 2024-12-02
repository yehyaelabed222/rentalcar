// Function to open a tab
function openTab(event, tabName) {
    // Get all elements with class "tab-panel" and hide them
    const tabPanels = document.querySelectorAll('.tab-panel');
    tabPanels.forEach((panel) => {
        panel.style.display = 'none';
    });

    // Get all elements with class "tab-button" and remove the "active" class
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach((button) => {
        button.classList.remove('active');
    });

    // Show the selected tab panel
    document.getElementById(tabName).style.display = 'block';

    // Add the "active" class to the clicked tab button
    event.currentTarget.classList.add('active');
}

// Open the first tab by default
document.getElementById('tab1').style.display = 'block';
document.querySelector('.tab-button').classList.add('active');