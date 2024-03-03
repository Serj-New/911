import {
  getBookCategoryList,
  getTopBooks,
  getBookByCategory,
} from '../home_page/books-api';
import {
  renderCategoryList,
  renderBookListOnMain,
  clickOnAllCategories,
  // createBookListMarkup,
  renderBookListByCategory,
} from './render';

const refs = {
  category: document.querySelector('.categories-elements'),
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
    clickOnAllCategories();
  } else {
    // console.log(category);
    const booksByCategory = await getBookByCategory(category);
    // console.log(booksByCategory);
    renderBookListByCategory(booksByCategory, category);
  }
}
