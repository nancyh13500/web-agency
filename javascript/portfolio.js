document.addEventListener('DOMContentLoaded', () => {
  const allWorks = document.querySelector('.all_works');
  const creative = document.querySelector('.creative');
  const corporate = document.querySelector('.corporate');
  const portfolio = document.querySelector('.portfolio');
  const images = document.querySelectorAll('.pictures');


  function filterImages(category) {
    images.forEach(image => {
      if (image.classList.contains(category)) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  };

  allWorks.addEventListener('click', () => {
    images.forEach(image => {
      image.style.display = 'block';
    });
  });

  creative.addEventListener('click', () => {
    filterImages('creative');
  });
  corporate.addEventListener('click', () => {
    filterImages('corporate');
  });

  portfolio.addEventListener('click', () => {
    filterImages('portfolio');
  });
});

//centrer les images au click
const cardContainer = document.querySelector('.card');
const creativeImages = document.querySelector('.pictures.creative');
let horizontal = true;


function alignCards() {
  if (horizontal) {
    cardContainer.style.flexDirection = 'row';
  } else {
    cardContainer.style.flexDirection = 'column';
  }
  horizontal = !horizontal;
};

cardContainer.addEventListener('click', () => {
  creativeImages.forEach(image => {
    image.addEventListener('click', () => {
      cardContainer.style.justifyContent = 'center';
    })
  });
});