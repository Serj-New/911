import { getBooksFromLocalStorage } from './local-storage-utils.js'; 

const itemsPerPage = 10; 
const books = getBooksFromLocalStorage(); 
const totalItems = books.length; 

const pagination = new tui.Pagination('pagination', {
    totalItems,
    itemsPerPage,
    visiblePages: 5, 
    centerAlign: true,
});

pagination.on('afterMove', (event) => {
    const { page } = event;
    const startIdx = (page - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const currentPageBooks = books.slice(startIdx, endIdx);
    renderBooks(currentPageBooks); 
});

pagination.movePageTo(1);
function renderBooks(books) {
    const bookList = document.querySelector('.shop-list-js');
    bookList.innerHTML = ''; 
    books.forEach((book) => {
      
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
                    ${book.marketplaces.map(link => <li><a href="${link}">Marketplace</a></li>).join('')}
                </ul>
                <button class="remove-button">Remove</button>
            </div>
        `;
        bookList.appendChild(bookItem);
    });
}