const imgBan = document.querySelector('.ban');
const images = document.querySelectorAll('.ban img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentImg = 0;
let imageWidth = images[0].clientWidth;

window.addEventListener('resize', () => {
    imageWidth = images[0].clientWidth;
});

function updateImg() {
    if (currentImg >= images.length) {
        currentImg = 0;
    } else if (currentImg < 0) {
        currentImg = images.length - 1;
    }

    imgBan.style.transform = `translateX(-${currentImg * imageWidth}px)`;
}

prev.addEventListener('click', () => {
    currentImg--;
    updateImg();
});

next.addEventListener('click', () => {
    currentImg++;
    updateImg();
});

// Ajustement du temps de transition automatique
let autoSlide = setInterval(() => {
    currentImg++;
    updateImg();
}, 5000);

// Reset l'intervalle quand on clique
prev.addEventListener('click', () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        currentImg++;
        updateImg();
    }, 5000);
});

next.addEventListener('click', () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        currentImg++;
        updateImg();
    }, 5000);
});

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        currentImg++;
        updateImg();
    }, 5000);
}

// Initialisation
updateImg();
