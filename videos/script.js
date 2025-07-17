// Loading Screen 
document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading for 3 seconds
    setTimeout(function() {
        // Add 'loaded' class to body to hide the loading screen and show the content
        document.body.classList.add('loaded');
    }, 1000); // 3000ms = 3 seconds
});


// Dropdown Contact Menu
// Get the dropdown element
const dropdown = document.querySelector('.dropdown');

// Add click event to toggle dropdown visibility
dropdown.addEventListener('click', function(event) {
    const dropdownContent = this.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    
    // Prevent the page from scrolling when clicking on the dropdown
    event.stopPropagation();
});

// Close the dropdown if clicked outside
document.addEventListener('click', function(event) {
    const dropdownContent = document.querySelector('.dropdown-content');
    if (!dropdown.contains(event.target)) {
        dropdownContent.style.display = 'none';
    }
});
