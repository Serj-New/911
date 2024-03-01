import { getBookCategoryList, getTopBooks, getBookByCategory } from '../home_page/books-api';
import { renderCategoryList } from './render';

const refs = {
    category: document.querySelector('.categories-elements')
}

init();

async function init() {
  try {
    const categoryFetch = await getBookCategoryList();
    refs.category.insertAdjacentHTML('beforeend', await renderCategoryList(categoryFetch));
  } catch (error) {}
}