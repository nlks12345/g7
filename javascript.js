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
// document.addEventListener("DOMContentLoaded", function() {
//     const carousel = document.querySelector('.carousel');
//     if (carousel) {
//         carousel.classList.add('roll-in');
//     }
// });


//Services
// document.addEventListener("DOMContentLoaded", () => {
//     const servicesSection = document.getElementById("services");
//     servicesSection.classList.remove("hidden");
//     servicesSection.classList.add("visible");
//   }); 

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



// ROLL IN RIGHT

// document.addEventListener("DOMContentLoaded", function () {
//     const mapContainer = document.querySelector(".map-container");
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("roll-in");
//             }
//         });
//     }, { threshold: 0.5 });

//     observer.observe(mapContainer);
// });



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


/* FOR 3D CAROUSEL */
// const carousel = document.querySelector('.carousel-items');
// let angle = 0;

// document.addEventListener('keydown', (event) => {
//     if (event.key === 'ArrowRight') {
//         angle -= 90; // Rotate clockwise
//     } else if (event.key === 'ArrowLeft') {
//         angle += 90; // Rotate counter-clockwise
//     }
//     carousel.style.transform = `rotateY(${angle}deg)`;
// });


// // const carousel = document.querySelector('.carousel-items');

// carousel.addEventListener('mouseover', () => {
//     carousel.style.animationPlayState = 'paused'; // Stop rotation
// });

// carousel.addEventListener('mouseout', () => {
//     carousel.style.animationPlayState = 'running'; // Resume rotation
// });

/* END FOR 3D CAROUSEL  */
