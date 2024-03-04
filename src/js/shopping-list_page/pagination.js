import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { handleGetBtnClick } from './local-storage';
const itemsPerPage = 1; // Кількість елементів на сторінці
const books = handleGetBtnClick(); // Отримання книг з localStorage
const totalItems = books.length; // Загальна кількість книг
const pagination = new Pagination('pagination', {
  totalItems,
  itemsPerPage,
  visiblePages: 1, // Кількість видимих сторінок у пагінації
  centerAlign: true, // Вирівнювання по центру
});
pagination.on('afterMove', event => {
  const { page } = event;
  const startIdx = (page - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentPageBooks = books.slice(startIdx, endIdx);
  renderBooks(currentPageBooks); // Функція для відображення книг на поточній сторінці
});
pagination.movePageTo(1);
function renderBooks(books) {
  const bookList = document.querySelector('.shop-list-js');
  bookList.innerHTML = ''; // Очистити список книг перед відображенням нових

  books.forEach(book => {
    const bookItem = document.createElement('li');
    bookItem.classList.add('book-card');

    bookItem.innerHTML = `
            <div class="book-image">
                <img src="${book.imageUrl}" alt="${book.title}" />
            </div>
            <div class="book-info">
                <h2 class="book-title">${book.title}</h2>
                <p class="book-category">${book.category}</p>
                <p class="book-description">${book.description}</p>
                <p class="book-author">${book.author}</p>
                <ul class="book-links">
                    ${book.marketplaces}.map(link => <li><a href="${link}">Marketplace</a></li>).join('')}
                </ul>
                <button class="remove-button">Remove</button>
            </div>
        `;
    bookList.appendChild(bookItem);
  });
}
