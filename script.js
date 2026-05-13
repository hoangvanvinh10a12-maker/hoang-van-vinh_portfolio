// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Set initial theme
if (!body.classList.contains('light-mode') && !body.classList.contains('dark-mode')) {
    body.classList.add('light-mode');
}

// Falling Leaves Animation
const leavesContainer = document.getElementById('leaves-container');

function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.animationDuration = Math.random() * 3 + 2 + 's';
    leaf.style.animationDelay = Math.random() * 2 + 's';
    leavesContainer.appendChild(leaf);

    setTimeout(() => {
        leaf.remove();
    }, 5000);
}

setInterval(createLeaf, 300);

// Section Reveal Animation
const sections = document.querySelectorAll('section');

const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('reveal');
        }
    });
};

window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});