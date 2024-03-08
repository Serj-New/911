import './js/home_page/books-api';
import './js/home_page/render';
import './js/home_page/home-page';

import './js/scroll-up';

import './js/book-modal';



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

