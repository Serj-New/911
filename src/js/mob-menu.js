const burgerModalElem = document.querySelector('.mobile-menu-container');
const burgerMenuBtnElem = document.querySelector('.burger-menu');
const burgerMenuCloseBtnElem = document.querySelector('.mobile-menu__button');

burgerMenuBtnElem.addEventListener('click', onBurgerMenuBtnClick);
burgerMenuCloseBtnElem.addEventListener('click', onBurgerMenuCloseBtnClick);

function onBurgerMenuBtnClick(e) {
  burgerModalElem.style.display = 'block';
  burgerMenuBtnElem.style.display = 'none';
}
function onBurgerMenuCloseBtnClick(e) {
  burgerModalElem.style.display = 'none';
  burgerMenuBtnElem.style.display = 'block';
}

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    burgerModalElem.style.display = 'none';
    burgerMenuCloseBtnElem.style.display = 'none';
    burgerMenuBtnElem.style.display = 'none';
});

function handleResize() {
  if (window.innerWidth <= 767) {
    burgerMenu.style.display = 'block';
  } else {
    burgerMenu.style.display = 'none';
  }
}

window.addEventListener('resize', handleResize);

handleResize();