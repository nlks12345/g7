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


/* PAGINATION JS */
document.addEventListener("DOMContentLoaded", () => {
    const teamMembers = document.querySelectorAll('.service-list .service-item'); // Select all members
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

        const scrollElement = document.getElementById('service_list');
        if (scrollElement) {
          scrollElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the element
        }
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


/* FOR Google Review function */

function initReviews() {
  const service = new google.maps.places.PlacesService(document.createElement("div"));

  const reviewsContainer = document.getElementById("reviewsContainer");


  service.getDetails(
    {
      placeId: "ChIJTeKbOgDBSjARqT419e2gfgg", // Replace with your Place ID
      fields: ["name", "rating", "reviews", "url"],
    },
    (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        
        const reviews = place.reviews;

      for (let i = 0; i < reviews.length; i += 3) {
        const carouselItem = document.createElement("div");
        carouselItem.className = `carousel-item ${i === 0 ? "active" : ""}`; // First slide is active

        const row = document.createElement("div");
        row.className = "row";

    // Add up to 3 reviews per slide
    for (let j = i; j < i + 3 && j < reviews.length; j++) {
      const review = reviews[j];

      const col = document.createElement("div");
      col.className = "col-md-4"; // Bootstrap column

      col.innerHTML = `
        <div class="review-card p-3 border rounded">
          <div class="review-header d-flex align-items-center mb-3">
            <img class="review-author-image rounded-circle me-3" src="${review.profile_photo_url}" alt="${review.author_name}" width="50" height="50" />
            <div>
              <h3 class="review-author mb-0">${review.author_name}</h3>
              <p class="review-rating mb-0">${"⭐".repeat(review.rating)}</p>
            </div>
          </div>
          <p class="review-text expandable">${review.text}
          </p>
          <p class="review-date text-muted">${new Date(review.time * 1000).toLocaleDateString()}               
          <a href="${place.url}" target="_blank" class="btn btn-see-more-review">
              See More
            </a>         
             </p>
        </div>
      `;

      row.appendChild(col);
    }

    carouselItem.appendChild(row);
    reviewsContainer.appendChild(carouselItem);
  }
        
      } else {
        console.error("Error fetching reviews:", status);
      }
    }
  );
}

// Initialize reviews on page load
window.onload = initReviews;



/* */