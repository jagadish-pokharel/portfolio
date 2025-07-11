document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle contact form submission (example - replace with actual backend logic)
    const contactForm = document.querySelector('.contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            formMessage.textContent = 'Sending message...';
            formMessage.style.color = 'gray';

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                // Simulate an API call
                const response = await new Promise(resolve => setTimeout(() => {
                    // Simulate success or failure
                    const success = Math.random() > 0.3; // 70% chance of success
                    resolve({ success: success });
                }, 1500));

                if (response.success) {
                    formMessage.textContent = 'Message sent successfully! I will get back to you soon.';
                    formMessage.style.color = 'green';
                    contactForm.reset();
                } else {
                    formMessage.textContent = 'Failed to send message. Please try again later.';
                    formMessage.style.color = 'red';
                }
            } catch (error) {
                formMessage.textContent = 'An error occurred. Please try again.';
                formMessage.style.color = 'red';
                console.error('Form submission error:', error);
            }
        });
    }
});