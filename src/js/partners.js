import fund1 from '../img/funds/save-the-children.png';
import fund2 from '../img/funds/project-hope.png';
import fund3 from '../img/funds/united24.png';
import fund4 from '../img/funds/international-medical-corps.png';
import fund5 from '../img/funds/medicines-sans-frontieres.png';
import fund6 from '../img/funds/razom.png';
import fund7 from '../img/funds/action-against-hunger.png';
import fund8 from '../img/funds/world-vision.png';
import fund9 from '../img/funds/sergiy-prytula.png';

const charityFunds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: fund1,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: fund2,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: fund3,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: fund4,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: fund5,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: fund6,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: fund7,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: fund8,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: fund9,
  },
];

import Swiper from 'swiper';
import 'swiper/css';

const charityElem = document.querySelector('.swiper-wrapper');
const swiperBtnElem = document.querySelector('.support-swiper-btn');
const arrowElem = document.querySelector('.swiper-button-icon');

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
