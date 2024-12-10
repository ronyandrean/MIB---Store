$(document).ready(function() {
    $('#contact-form').on('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Reset previous error messages
        $('.error-message').remove();

        // Validate Name
        const name = $('#name').val().trim();
        if (name.length < 2) {
            $('#name').after('<div class="error-message">Name must be at least 2 characters long</div>');
            return false;
        }

        // Validate Email
        const email = $('#email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $('#email').after('<div class="error-message">Please enter a valid email address</div>');
            return false;
        }

        // Validate Phone (optional, but if provided should be valid)
        const phone = $('#phone').val().trim();
        if (phone !== '') {
            const phoneRegex = /^[+]?[\d\s()-]{10,}$/;
            if (!phoneRegex.test(phone)) {
                $('#phone').after('<div class="error-message">Please enter a valid phone number</div>');
                return false;
            }
        }

        // Validate Subject
        const subject = $('#subject').val().trim();
        if (subject.length < 5) {
            $('#subject').after('<div class="error-message">Subject must be at least 5 characters long</div>');
            return false;
        }

        // Validate Message
        const message = $('#message').val().trim();
        if (message.length < 10) {
            $('#message').after('<div class="error-message">Message must be at least 10 characters long</div>');
            return false;
        }

        // If all validations pass, simulate form submission
        alert('Message sent successfully! We will get back to you soon.');
        this.reset(); // Reset the form
    });
});