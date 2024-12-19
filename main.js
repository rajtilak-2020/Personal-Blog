// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to blog cards when they come into view
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.blog-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Like functionality
document.querySelectorAll('.fa-heart').forEach(heart => {
    heart.addEventListener('click', function() {
        this.classList.toggle('liked');
        const likesCount = this.parentElement;
        const currentLikes = parseInt(likesCount.textContent);
        if (this.classList.contains('liked')) {
            likesCount.textContent = currentLikes + 1;
            this.style.color = '#e74c3c';
        } else {
            likesCount.textContent = currentLikes - 1;
            this.style.color = 'inherit';
        }
    });
});