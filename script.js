const images = ['hero','hero1', 'hero2', 'hero3'];
let currentImageIndex = 0;

function updateBackgroundImage() {
    const heroSection = document.getElementById('hero-section');
    heroSection.className = `hero-section ${images[currentImageIndex]}`;
}

function moveSlide(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    updateBackgroundImage();
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateBackgroundImage();
});
