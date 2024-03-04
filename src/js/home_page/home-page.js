import {
  getBookCategoryList,
  getTopBooks,
  getBookByCategory,
} from '../home_page/books-api';
import {
  renderCategoryList,
  onPageLoad,
  renderBookListByCategory,
} from './render';

const refs = {
  category: document.querySelector('.categories-elements'),
  pageHeader: document.querySelector(".header-home"),
};

init();

async function init() {
  try {
    const categoryFetch = await getBookCategoryList();
    refs.category.insertAdjacentHTML(
      'beforeend',
      await renderCategoryList(categoryFetch)
    );
    document.querySelectorAll('.category-link').forEach(link => {
      link.addEventListener('click', handleCategoryClick);
    });
  } catch (error) {}
}
/*****************************Add */
async function handleCategoryClick(event) {
  event.preventDefault();
  const category = event.target.textContent.trim();
  if (category === 'All categories') {
    onPageLoad();
  } else {
    const booksByCategory = await getBookByCategory(category);
    renderBookListByCategory(booksByCategory, category);
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  refs.pageHeader.dataset.pageName = 'home';
});
