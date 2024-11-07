// dropdown.js

document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');

    // Show dropdown menu on mouseover
    dropdown.addEventListener('mouseover', function() {
        var menu = dropdown.querySelector('.dropdown-menu');
        menu.classList.add('show');
    });

    // Hide dropdown menu on mouseout
    dropdown.addEventListener('mouseout', function() {
        var menu = dropdown.querySelector('.dropdown-menu');
        menu.classList.remove('show');
    });
});



// Animation
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.classList.add('roll-in');
    }
});