// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const topOffset = 70; // Adjust this value based on your header height
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

// Contact form submission handling
const contactForm = document.getElementById('contact-form');

function handleSubmit(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        return;
    }

    if (emailInput.value.trim() === '') {
        alert('Please enter your email.');
        return;
    }

    if (messageInput.value.trim() === '') {
        alert('Please enter your message.');
        return;
    }

    // Code to submit the form (you can use AJAX or other methods)
    alert('Form submitted successfully!');
    contactForm.reset();
}

contactForm.addEventListener('submit', handleSubmit);

// Slider functionality
const publicationSlider = document.querySelector('.publication-slider');

// Scroll to next slide on button click
function scrollToNextSlide() {
    publicationSlider.scrollBy({ left: 320, behavior: 'smooth' });
}

// Scroll to previous slide on button click
function scrollToPrevSlide() {
    publicationSlider.scrollBy({ left: -320, behavior: 'smooth' });
}

// Add event listeners for buttons
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

nextButton.addEventListener('click', scrollToNextSlide);
prevButton.addEventListener('click', scrollToPrevSlide);
