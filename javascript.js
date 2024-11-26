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



// FOR ANIMATION
//Carousel
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.classList.add('roll-in');
    }
});


//Services
document.addEventListener("DOMContentLoaded", () => {
    const servicesSection = document.getElementById("services");
    servicesSection.classList.remove("hidden");
    servicesSection.classList.add("visible");
  }); 

// document.addEventListener("DOMContentLoaded", () => {
//     const section = document.getElementById("services");
  
//     const observer = new IntersectionObserver(
//       (entries, observer) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             section.classList.add("visible");
//             section.classList.remove("hidden");
//             observer.unobserve(section); // Stop observing after animation
//           }
//         });
//       },
//       {
//         threshold: 0.2, // Trigger when 20% of the section is visible
//       }
//     );
  
//     observer.observe(section);
//   });


// FOR LOGO LOADING PURPOSE

// script.js
// window.addEventListener("load", () => {
//     const popup = document.getElementById("logo-popup");
//     const sound = document.getElementById("popup-sound");
//     const content = document.querySelector(".content");
  
//     // Play sound
//     sound.play();
  
//     // Hide popup after animation ends (adjust time to match your GIF duration)
//     setTimeout(() => {
//       popup.style.display = "none";
//       document.body.style.overflow = "auto"; // Allow scrolling again
//       content.style.display = "block"; // Show main content
//     }, 3000); // Adjust this to your GIF's duration (in milliseconds)
//   });