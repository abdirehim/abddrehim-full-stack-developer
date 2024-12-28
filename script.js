// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navigation background change on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// Animate stats when in view
const stats = document.querySelectorAll('.stat-number');
const animateStats = () => {
    stats.forEach(stat => {
        const value = parseInt(stat.textContent);
        let current = 0;
        const increment = value / 30;
        const updateCount = () => {
            if(current < value) {
                current += increment;
                stat.textContent = Math.ceil(current) + '+';
                setTimeout(updateCount, 50);
            } else {
                stat.textContent = value + '+';
            }
        };
        updateCount();
    });
};

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('hero-stats')) {
                animateStats();
            }
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.expertise-item, .project-card, .hero-stats').forEach(el => {
    observer.observe(el);
});

// Typing animation for hero text
const heroText = "Crafting Digital Experiences That Matter";
const heroElement = document.querySelector('.hero h2');
let i = 0;

const typeWriter = () => {
    if (i < heroText.length) {
        heroElement.textContent += heroText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
};

// Start typing animation when page loads
window.addEventListener('load', () => {
    heroElement.textContent = '';
    setTimeout(typeWriter, 1000);
});

// Project hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.querySelector('.project-overlay').style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.querySelector('.project-overlay').style.opacity = '0';
    });
});
