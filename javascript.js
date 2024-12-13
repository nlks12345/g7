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


/* PAGINATION JS */
document.addEventListener("DOMContentLoaded", () => {
    const teamMembers = document.querySelectorAll('.team .member'); // Select all members
    const membersPerPage = 5; // Number of members per page
    const totalPages = Math.ceil(teamMembers.length / membersPerPage); // Calculate total pages
    const paginationContainer = document.querySelector('.pagination'); // Select the pagination container

    let currentPage = 1;

    // Function to show members for the current page
    function showPage(page) {
        // Hide all members first
        teamMembers.forEach(member => (member.style.display = 'none'));

        // Determine the range of members to show
        const startIndex = (page - 1) * membersPerPage;
        const endIndex = startIndex + membersPerPage;

        // Show only the members for the current page
        teamMembers.forEach((member, index) => {
            if (index >= startIndex && index < endIndex) {
                member.style.display = 'inline-block';
            }
        });

        updatePaginationControls(page);
    }

    // Function to create and update pagination controls
    function updatePaginationControls(activePage) {
        paginationContainer.innerHTML = ''; // Clear old controls

        // Previous button
        const prevItem = document.createElement('li');
        prevItem.className = `page-item ${activePage === 1 ? 'disabled' : ''}`;
        prevItem.innerHTML = `<a class="page-link" href="#">Previous</a>`;
        prevItem.addEventListener('click', () => {
            if (activePage > 1) {
                currentPage -= 1;
                showPage(currentPage);
            }
        });
        paginationContainer.appendChild(prevItem);

        // Page buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement('li');
            pageItem.className = `page-item ${i === activePage ? 'active' : ''}`;
            pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pageItem.addEventListener('click', () => {
                currentPage = i;
                showPage(i);
            });
            paginationContainer.appendChild(pageItem);
        }

        // Next button
        const nextItem = document.createElement('li');
        nextItem.className = `page-item ${activePage === totalPages ? 'disabled' : ''}`;
        nextItem.innerHTML = `<a class="page-link" href="#">Next</a>`;
        nextItem.addEventListener('click', () => {
            if (activePage < totalPages) {
                currentPage += 1;
                showPage(currentPage);
            }
        });
        paginationContainer.appendChild(nextItem);
    }

    // Initialize the first page
    showPage(currentPage);
});

/* END FOR PAGINATION JS */


/* FOR Email function */



/* */