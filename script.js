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
    leaf.style.animationDuration = Math.random() * 5 + 5 + 's'; // Slower
    leaf.style.animationDelay = Math.random() * 3 + 's';
    leavesContainer.appendChild(leaf);

    setTimeout(() => {
        leaf.remove();
    }, 10000); // Longer duration
}

setInterval(createLeaf, 500); // Less frequent

// Hero Entrance Animation
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 500);
});

// Modal Functionality
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalGallery = document.getElementById('modal-gallery');
const modalDescription = document.getElementById('modal-description');
const modalRole = document.getElementById('modal-role');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.dataset.project;
        let title, description, role, images;

        if (projectId === '1') {
            title = 'Bookmark Design';
            description = 'Thiết kế bookmark sáng tạo với phong cách thu hoạch, kết hợp yếu tố tự nhiên và kiểu chữ tinh tế.';
            role = 'Vai trò: Thiết kế chính';
            images = [
                'https://via.placeholder.com/400x300/FFA500/FFFFFF?text=Bookmark+1',
                'https://via.placeholder.com/400x300/FFA500/FFFFFF?text=Bookmark+2',
                'https://via.placeholder.com/400x300/FFA500/FFFFFF?text=Bookmark+3'
            ];
        } else {
            title = '3D Model Design';
            description = 'Mô hình 3D với chi tiết tinh tế và màu sắc ấm áp, thể hiện khả năng thiết kế không gian ba chiều.';
            role = 'Vai trò: Thiết kế và mô hình hóa';
            images = [
                'https://via.placeholder.com/400x300/FF8C00/FFFFFF?text=3D+Model+1',
                'https://via.placeholder.com/400x300/FF8C00/FFFFFF?text=3D+Model+2',
                'https://via.placeholder.com/400x300/FF8C00/FFFFFF?text=3D+Model+3'
            ];
        }

        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalRole.textContent = role;

        modalGallery.innerHTML = '';
        images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            modalGallery.appendChild(img);
        });

        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});