document.addEventListener('DOMContentLoaded', () => {
  // Banner Slider Functionality
  class BannerSlider {
      constructor(sliderSelector) {
          this.slider = document.querySelector(sliderSelector);
          this.slides = this.slider.querySelectorAll('img');
          this.prevButton = this.slider.querySelector('.prev');
          this.nextButton = this.slider.querySelector('.next');
          
          this.currentSlide = 0;
          this.slideInterval = null;

          this.initializeSlider();
      }

      initializeSlider() {
          this.showSlide(this.currentSlide);
          this.prevButton.addEventListener('click', () => this.changeSlide(-1));
          this.nextButton.addEventListener('click', () => this.changeSlide(1));
          this.startAutoSlide();
      }

      showSlide(index) {
          // Hide all slides
          this.slides.forEach(slide => {
              slide.style.display = 'none';
          });

          // Show current slide
          this.slides[index].style.display = 'block';
      }

      changeSlide(direction) {
          this.currentSlide += direction;

          // Loop through slides
          if (this.currentSlide >= this.slides.length) {
              this.currentSlide = 0;
          }
          if (this.currentSlide < 0) {
              this.currentSlide = this.slides.length - 1;
          }

          this.showSlide(this.currentSlide);
          this.resetAutoSlide();
      }

      startAutoSlide() {
          this.slideInterval = setInterval(() => {
              this.changeSlide(1);
          }, 5000);
      }

      resetAutoSlide() {
          clearInterval(this.slideInterval);
          this.startAutoSlide();
      }
  }

  // Initialize Banner Slider
  new BannerSlider('.banner-slider');

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

  // Dynamic Price Formatting
//   function formatPrices() {
//       const priceElements = document.querySelectorAll('.product-price');
//       priceElements.forEach(priceEl => {
//           const price = parseFloat(priceEl.textContent.replace('Rp. ', ''));
//           priceEl.textContent = new Intl.NumberFormat('id-ID', {
//               style: 'currency',
//               currency: 'IDR'
//           }).format(price);
//       });
//   }
//   formatPrices();

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
