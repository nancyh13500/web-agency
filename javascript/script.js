const image_width = 500;
const DELAY = 3000;
const $prev = document.querySelector('.prev');
const $next = document.querySelector('.next');
const $imgBan = document.querySelector('.ban');
const $images = document.querySelectorAll('img');
let currentImg = 1;
let timeout;

function updateImg() {
    if (currentImg > $images.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = $images.length;
    }
    $imgBan.style.transform = `translateX(-${(currentImg - 1) * image_width}px)`;
    
    timeout = setTimeout(
        () => {
        currentImg++;
        updateImg();
    },
        DELAY,
    ),
}

$prev.addEventListener ('click', () => {
        clearTimeout(timeout);
        currentImg--;
        updateImg();
    },
);

$next.addEventListener ('click', () => {
        clearTimeout(timeout);
        currentImg++;
        updateImg();
    },
);

updateImg();