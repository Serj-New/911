const charityFunds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: 'img/funds/save-the-children.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: 'img/funds/project-hope.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: 'img/funds/united24.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: 'img/funds/international-medical-corps.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: 'img/funds/medicines-sans-frontieres.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: 'img/funds/razom.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: 'img/funds/action-against-hunger.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: 'img/funds/world-vision.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: 'img/funds/sergiy-prytula.png',
  },
];

import Swiper from 'swiper';
import 'swiper/css';

const charityElem = document.querySelector('.swiper-wrapper');
const swiperBtnElem = document.querySelector('.support-swiper-btn');
const arrowElem = document.querySelector('.small-arrow');

swiperBtnElem.addEventListener('click', onBtnClick);

export function fundsMarkup() {
  const result = charityFunds
    .map(({ title, url, img }, index) => {
      const paddedIndex = (index + 1).toString().padStart(2, '0');
      return `<div class="swiper-slide ">       
      <a class="support-funds-link" href="${url}" target="_blank"
                    rel="noopener noreferrer nofollow">
      <p class="support-fund-number">${paddedIndex}</p>
                <img class="support-funds-list-link-image" src="${img}"
                    alt="${title}" 
            </a></div>`;
    })
    .join('');
  charityElem.innerHTML = result;
}
fundsMarkup();

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: false,
  effect: 'slide',
  slidesPerView: 6,
  slidesPerGroup: 6,
});
swiper.on('reachBeginning', function () {
  arrowElem.style.transform = '';
});
swiper.on('reachEnd', function () {
  arrowElem.style.transform = 'rotate(180deg)';
});

export function onBtnClick(e) {
  if (arrowElem.style.transform == '') {
    swiper.slideNext(2000);
  } else {
    swiper.slidePrev(2000);
  }
}
