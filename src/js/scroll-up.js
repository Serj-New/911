const scrollUpBtn = document.querySelector('.scroll-up');
scrollUpBtn.style.display = 'none';

function showScrollUpBtn() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollUpBtn.style.display = 'block';
  } else {
    scrollUpBtn.style.display = 'none';
  }
}

function scrollUp() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

scrollUpBtn.addEventListener('click', scrollUp);
window.addEventListener('scroll', showScrollUpBtn);