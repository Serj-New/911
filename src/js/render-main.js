const bookList = document.querySelector('.main-page-book');

function createBookListOnMain(bookCard) {
  return `       <li class="main-page-book-render-item">
                    <a class="book-link" href="#">
                        <img class="book-image" src="${bookCard.book_image}" alt="#" />
                    </a>
                    <h2 class="book-title">${bookCard.list_name}</h2>
                    <p class="book-author">${bookCard.author}</p>
                </li>`;
}

export function renderBookListOnMain(bookCard) {
  const markup = bookCard.map(createBookListOnMain).join(``);
  bookList.insertAdjacentHTML('beforeend', markup);
}
