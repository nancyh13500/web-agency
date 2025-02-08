const image_width = document.querySelector('.ban img').clientWidth;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const imgBan = document.querySelector('.ban');
const images = document.querySelectorAll('.ban img');
let currentImg = 0;

let timeout;

function updateImg() {
    if (currentImg > images.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = images.length - 1;
    }
    imgBan.style.transform = `translateX(-${(currentImg - 1) * image_width}px)`;

    timeout = setTimeout(() => {
        currentImg++;
        updateImg();

    }, 5000);
}

prev.addEventListener('click', () => {
    clearTimeout(timeout);
    currentImg--;
    updateImg();
},
);

next.addEventListener('click', () => {
    clearTimeout(timeout);
    currentImg++;
    updateImg();
},
);
updateImg();






