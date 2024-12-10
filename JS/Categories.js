document.addEventListener('DOMContentLoaded', () => {

    const categorySections = document.querySelectorAll('.category-section');
    let currentPage = 0;
    const itemsPerPage = 3; // Number of category sections to show at a time

    // Create pagination container
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination-container';
    
    // Create prev and next buttons
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.className = 'pagination-btn prev-btn';
    prevButton.disabled = true;

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.className = 'pagination-btn next-btn';

    // Create page indicator
    const pageIndicator = document.createElement('span');
    pageIndicator.className = 'page-indicator';

    // Append buttons and indicator to pagination container
    paginationContainer.appendChild(prevButton);
    paginationContainer.appendChild(pageIndicator);
    paginationContainer.appendChild(nextButton);

    // Insert pagination container after the category sections
    const categorySectionsContainer = document.querySelector('.category-sections');
    categorySectionsContainer.parentNode.insertBefore(paginationContainer, categorySectionsContainer.nextSibling);

    // Function to update page visibility
    function updatePageVisibility() {
        // Hide all category sections
        categorySections.forEach(section => {
            section.style.display = 'none';
        });

        // Show sections for current page
        for (let i = currentPage * itemsPerPage; 
             i < Math.min((currentPage + 1) * itemsPerPage, categorySections.length); 
             i++) {
            categorySections[i].style.display = 'block';
        }

        // Update page indicator
        pageIndicator.textContent = `Page ${currentPage + 1} of ${Math.ceil(categorySections.length / itemsPerPage)}`;

        // Update button states
        prevButton.disabled = currentPage === 0;
        nextButton.disabled = (currentPage + 1) * itemsPerPage >= categorySections.length;
    }

    // Next button event listener
    nextButton.addEventListener('click', function() {
        if ((currentPage + 1) * itemsPerPage < categorySections.length) {
            currentPage++;
            updatePageVisibility();
        }
    });

    // Previous button event listener
    prevButton.addEventListener('click', function() {
        if (currentPage > 0) {
            currentPage--;
            updatePageVisibility();
        }
    });

    // Initial page setup
    updatePageVisibility();

  
    // Search Functionality
    class SearchHandler {
        constructor(searchFormSelector) {
            this.searchForm = document.querySelector(searchFormSelector);
            this.searchInput = this.searchForm.querySelector('input');
            this.products = document.querySelectorAll('.product-card');
  
            this.attachSearchListener();
        }
  
        attachSearchListener() {
            this.searchInput.addEventListener('input', () => {
                const searchTerm = this.searchInput.value.toLowerCase();
                this.filterProducts(searchTerm);
            });
        }
  
        filterProducts(searchTerm) {
            this.products.forEach(product => {
                const productName = product.querySelector('h3').textContent.toLowerCase();
                
                if (productName.includes(searchTerm)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }
    }
  
    // Initialize Search Handler
    new SearchHandler('.search-bar');
  
    // Product Hover Effects
    function addProductHoverEffects() {
        const products = document.querySelectorAll('.product-card');
        products.forEach(product => {
            const addToCartBtn = product.querySelector('.add-to-cart');
            
            product.addEventListener('mouseenter', () => {
                addToCartBtn.style.backgroundColor = 'var(--dark-blue)';
            });
  
            product.addEventListener('mouseleave', () => {
                addToCartBtn.style.backgroundColor = 'var(--secondary-blue)';
            });
        });
    }
    addProductHoverEffects();
  
  
    $('.contact-form').submit(function(e) {
          e.preventDefault();
          
          // Basic form validation
          const name = $('#name').val();
          const email = $('#email').val();
          const message = $('#message').val();
  
          if (name && email && message) {
              alert('Thank you for your message! We will get back to you soon.');
              this.reset(); // Clear form
          } else {
              alert('Please fill out all fields.');
          }
      });
  
      
  });
  