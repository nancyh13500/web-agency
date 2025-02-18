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

//code simplifié test
// document.addEventListener('DOMContentLoaded', () => {
//   const filters = document.querySelectorAll('#menu_projet .nav_projet li');
//   const images = document.querySelectorAll('.pictures');
//   const cardContainer = document.querySelector('.card');

//   filters.forEach(filter => {
//     filter.addEventListener('click', () => {
//       const category = filter.classList[0]; // Récupère la classe (ex: "creative", "corporate", etc.)

//       images.forEach(image => {
//         image.style.display = image.classList.contains(category) || category === 'all_works' ? 'block' : 'none';
//       });

//       // Centrage des images après filtrage
//       cardContainer.style.display = 'flex';
//       cardContainer.style.justifyContent = 'center';
//       cardContainer.style.flexWrap = 'wrap';

//       // Si on clique sur "All works", on remet la disposition par défaut
//       if (category === 'all_works') {
//         cardContainer.style.display = 'flex';
//         cardContainer.style.justifyContent = 'center';
//       }
//     });
//   });
// });