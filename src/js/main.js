// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation to blog cards when they come into view
const animateElements = (selector, options = {}) => {
    const defaultStyles = {
        opacity: '0',
        transform: 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
    };

    // Apply initial styles to all elements
    document.querySelectorAll(selector).forEach(el => {
        Object.assign(el.style, defaultStyles);
    });

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Unobserve to improve performance
            }
        });
    }, {
        threshold: options.threshold || 0.2
    });

    // Observe each element
    document.querySelectorAll(selector).forEach(el => observer.observe(el));
};

// Initialize animations
animateElements('.blog-card', { threshold: 0.2 });