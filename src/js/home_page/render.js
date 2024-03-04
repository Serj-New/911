//*****************Рендеринг лівої сторони*****************//

export async function renderCategoryList(fetch) {
  let markup = `<li class="categories-list">
                  <a class="category-link active" href="#">All categories</a>
                </li>`;

  fetch.forEach(({ list_name }) => {
    markup += `<li class="categories-list">
                 <a class="category-link" href="#">${list_name}</a>
               </li>`;
  });

  return markup;
}

//*****************Рендеринг головної сторінки*****************//

import {
  getBookCategoryList,
  getTopBooks,
  getBookByCategory,
  getBookById,
} from '../home_page/books-api.js';

/*********************** Рендер головної сторінки v.2.0 **********************************/

const bookList = document.querySelector('.main-page-book');
const listBooksByCategory = document.querySelector('.main-page-right');

window.addEventListener('resize', () => {
  bookList.innerHTML = '';
  onPageLoad();
});

function getLimitedBooks(books) {
  if (window.innerWidth < 768) {
    return books.slice(0, 1); // Для мобільних: лише 1 книга в категорії
  } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    return books.slice(0, 3); // Для планшетів: 3 книги в категорії
  } else {
    return books.slice(0, 5); // Для десктопів: 5 книг в категорії
  }
}

export async function clickOnAllCategories() {
  const topBooks = await getTopBooks();
  let result = '';
  result += `<h2 class="main-page-title">Best Sellers <span class="main-page-title-span">Books</span></h2>
  <ul class="main-page-book">`;
  listBooksByCategory.innerHTML = result;
  renderBookListOnMain(topBooks);
  // onPageLoad();
  // return result;
}

function createBookListOnMain(bookCard) {
  let limitedBooks = getLimitedBooks(bookCard.books);
  let result = `
    <li class="main-page-book-title">${bookCard.list_name}</li>
    <ul class="main-page-books-render">`;
  limitedBooks.forEach(book => {
    result += `
         <li class="main-page-book-render-item">
          <a class="book-link" href="#">
            <img class="book-image" src="${book.book_image}" alt="#" />
          </a>
          <h2 class="book-title">${book.title}</h2>
          <p class="book-author">${book.author}</p>
        </li>`;
  });
  result += `</ul><div>
    <button class="button-see-more" type="button">See more</button>
  </div>`;
  return result;
}

export async function renderBookListOnMain(bookCard) {
  const markup = bookCard.map(createBookListOnMain).join(``);
  bookList.insertAdjacentHTML('afterbegin', markup);
}

/********************************** */

async function onPageLoad() {
  const topBooks = await getTopBooks();
  renderBookListOnMain(topBooks);
}
onPageLoad();

//********************** Рендер при кліку на категорії ***********************************/

function bookListByCategory(booksByCategory) {
  const categoryName = booksByCategory[0].list_name;
  const words = categoryName.split(' ');
  const firstPart = words.slice(0, -1).join(' ');
  const lastWord = words[words.length - 1];

  listBooksByCategory.innerHTML = '';
  let result = '';

  result += `<h2 class="main-page-title">${firstPart}<span class="main-page-title-span"> ${lastWord}</span></h2>`;
  result += '<ul class="main-page-books-render">';

  booksByCategory.forEach(book => {
    result += `
      <li class="main-page-book-render-item">
        <a class="book-link" href="#">
          <img class="book-image" src="${book.book_image}" alt="#" />
        </a>
        <h2 class="book-title">${book.title}</h2>
        <p class="book-author">${book.author}</p>
      </li>`;
  });
  result += `</ul>`;

  return result;
}

export function renderBookListByCategory(booksByCategory) {
  bookList.innerHTML = '';
  const markup = bookListByCategory(booksByCategory);
  listBooksByCategory.insertAdjacentHTML('afterbegin', markup);
}
