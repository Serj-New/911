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

function createBookListMarkup(books) {
  return books
    .map(book => {
      return `
      <li class="main-page-book-render-item">
        <a class="book-link" href="#">
          <img class="book-image" src="${book.book_image}" alt="${book.title}" />
        </a>
        <h2 class="book-title">${book.title}</h2>
        <p class="book-author">${book.author}</p>
      </li>
    `;
    })
    .join('');
}

async function renderBooks() {
  const bookCategories = await getBookCategoryList();

  // Отримання категорій книг та відображення їх
  for (const category of bookCategories) {
    const books = await getBookByCategory(category.list_name);
    const limitedBooks = getLimitedBooks(books); // Отримуємо обмежену кількість книг відповідно до розміру екрану

    const bookListMarkup = createBookListMarkup(limitedBooks);

    // Створення контейнера для категорії та списку книг
    const categoryContainer = document.createElement('div');
    categoryContainer.className = 'category-container';

    const categoryElement = document.createElement('li');
    categoryElement.className = 'main-page-book-title-list';
    categoryElement.innerHTML = category.list_name;

    const bookListElement = document.createElement('ul');
    bookListElement.className = 'main-page-books-render';
    bookListElement.innerHTML = bookListMarkup;

    // Додавання категорії та списку книг до контейнера
    categoryContainer.appendChild(categoryElement);
    categoryContainer.appendChild(bookListElement);

    // Додавання контейнера на сторінку
    document.querySelector('.main-page-book').appendChild(categoryContainer);
  }
}

// Функція для обмеження кількості книг в залежності від розміру екрану
function getLimitedBooks(books) {
  if (window.innerWidth < 768) {
    return books.slice(0, 1); // Для мобільних: лише 1 книга в категорії
  } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    return books.slice(0, 3); // Для планшетів: 3 книги в категорії
  } else {
    return books.slice(0, 5); // Для десктопів: 5 книг в категорії
  }
}

// Виклик функції для відображення списку книг
renderBooks();

// Додавання обробника подій для відслідковування змін розміру вікна
window.addEventListener('resize', () => {
  // При зміні розміру вікна перерендерюємо список книг
  document.querySelector('.main-page-book').innerHTML = ''; // Очищаємо контейнер перед перерендерингом
  renderBooks();
});
