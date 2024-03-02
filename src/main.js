import './js/home_page/books-api';
import './js/home_page/render';
import './js/home_page/home-page';

import './js/partners';

import './js/shopping-list_page/shopping-list';

// **=============Зміна теми======================================

const checkbox = document.querySelector('input[type="checkbox"]');
const headBtn = document.querySelector('.sign-up-button');

const refs = {
  startBackdrop: document.querySelector('.start-backdrop'),
  startCloseBtn: document.querySelector('.start-close-btn'),
  form: document.querySelector('.start-form'),
};

const LOCAL_KEY = 'form-data';
let inputData = {};

function openStarModal() {
  refs.startBackdrop.classList.remove('start-hidden');
  document.body.classList.add('scroll-lock');
}

function onCloseBtn() {
  refs.startBackdrop.classList.add('start-hidden');
  document.body.classList.remove('scroll-lock');
}

function onFormSub(event) {
  event.preventDefault();
  const { name, email, password } = event.currentTarget.elements;
  inputData.name = name.value;
  inputData.email = email.value;
  inputData.password = password.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(inputData));
  event.currentTarget.reset();
  refs.startBackdrop.classList.add('start-hidden');
}

function onEscClose(e) {
  if (e.code !== 'Escape') {
    return;
  } else {
    refs.startBackdrop.classList.add('start-hidden');
    document.body.classList.remove('scroll-lock');
  }
}

refs.startCloseBtn.addEventListener('click', onCloseBtn);
refs.form.addEventListener('submit', onFormSub);
window.addEventListener(`keydown`, onEscClose);

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
  checkbox.checked = savedTheme === 'dark';
}

function changeTheme() {
  if (checkbox.checked) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

checkbox.addEventListener('change', changeTheme);
headBtn.addEventListener('click', openStarModal);

// **=========================FOOTER=============================

// import * as basicLightbox from 'basiclightbox';
// import iconClose from '../img/x-close.png';

// const btnHeart = document.querySelector('.btn-footer');

// function disableBodyScroll() {
//   document.body.style.overflow = 'hidden';
// }

// function enableBodyScroll() {
//   document.body.style.overflow = 'visible';
// }

// const instance = basicLightbox.create(`<div class="modal-team"></div>`, {
//   onShow: () => {
//     document.addEventListener('keydown', onEscDown);
//     disableBodyScroll();
//   },
//   onClose: () => {
//     document.removeEventListener('keydown', onEscDown);
//     enableBodyScroll();
//   },
// });

// function markupTeam() {
//   instance.show();

//   const instanceEl = document.querySelector('.modal-team');

//   instanceEl.innerHTML = `<div class="modal modal-our-team container">
//     <section class="our-team">
//       <button class="modal-close-btn" type="button" aria-label="close">

//         <img class="modal-close-svg" src="${iconClose}" alt="" width="24" height="24" loading="lazy"/>
//       </button>
//        <h2 class = "title-team">Team <span class = "title-11">JS 11</span></h2>
//       <ul class="list team-list">
//       <li class = "team-item">
//       <h3 class = "team-name">FirstName LastName</h3>
//       <p class = "team-position">Team leader, developed authorization feature</p>
//       </li>
//       <li class = "team-item">
//       <h3 class = "team-name">FirstName LastName</h3>

//       <p class = "team-position">Scrum master, developed</p>

//       </li>
//       <li class = "team-item">
//       <h3 class = "team-name">FirstName LastName</h3>
//       <p class = "team-position">Developed dark theme feature, footer, modal 'Our team'</p>
//       </li>
//       <li class = "team-item">
//       <h3 class = "team-name">FirstName LastName</h3>
//       <p class = "team-position">Developed cards for books for each category</p>
//       </li>
//       <li class = "team-item">
//       <h3 class = "team-name">FirstName LastName</h3>
//       <p class = "team-position">1</p>
//       </li>
//       <li class = "team-item">
//       <h3 class = "team-name">FirstName LastName</h3>
//       <p class = "team-position">Developed 2</p>
//       </li>
//       <li class = "team-item">
//       <h3 class = "team-name">FirstName LastName</h3>
//       <p class = "team-position">3 </p>
//       </li>
//       <li class = "team-item">
//       <h3 class = "team-name">FirstName LastName</h3>
//       <p class = "team-position">Developed 4</p>
//       </li>
//       <li class = "team-item">
//       <h3 class = "team-name">FirstName LastName</h3>
//       <p class = "team-position">Developed 5</p>
//       </li>
//       </ul>
//     </section>
//     </div>
//     `;

//   const closeBtn = document.querySelector('.modal-close-btn');
//   closeBtn.addEventListener('click', onClickbBtn);
// }

// function onClickbBtn(event) {
//   instance.close();
// }

// function onEscDown(event) {
//   if (event.code === 'Escape') {
//     instance.close();
//   }
// }

// btnHeart.addEventListener('click', markupTeam);