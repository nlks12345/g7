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



/* FOR HOME NAVBAR & HERO BACKGORUND */
document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

/* END FOR HOME NAVBAR & HERO BACKGORUND */



// IDLE POP OUT


let idleTime = 0; // Tracks idle time
const idleLimit = 60; // Idle time limit in seconds

function showPromoPopup() {
  const promoModal = new bootstrap.Modal(document.getElementById("promoModal"));
  promoModal.show();
}

// Show popup on page load
window.addEventListener("load", () => {
  showPromoPopup(); // Display the modal on page load
});

// Increment idle time every second
const idleInterval = setInterval(() => {
  idleTime++;
  if (idleTime >= idleLimit) {
    showPromoPopup();
    idleTime = 0; // Reset idle time to allow the popup to reappear after another idle period
  }
}, 20000);

// Reset idle time on user activity
// function resetIdleTime() {
//   idleTime = 0;
// }

function resetIdleTimer() {
  clearTimeout(idleTime);
  idleTime = setTimeout(() => {
    showPromoPopup();
  }, 20000); // Example: 5 seconds
}

// window.addEventListener("mousemove", resetIdleTime);
// window.addEventListener("keydown", resetIdleTime);
// window.addEventListener("scroll", resetIdleTime);
// window.addEventListener("touchstart", resetIdleTime);
['mousemove', 'keydown', 'scroll', 'click'].forEach((event) => {
  document.addEventListener(event, resetIdleTimer);
});

resetIdleTimer();

/* END OF IDLE POP UP  */