import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import icon from '../img/sprite.svg';
import { getBookById } from './home_page/books-api';
import { handleAddBtnClick, handleGetBtnClick, handleDelBtnClick } from '../js/shopping-list_page/local-storage';

function createMarkup(product) {
  const instance = basicLightbox.create(
    `<div class="book-modal">
    <img src="${product.book_image}" alt="${product.title}" class="book-modal-img"/>
    <div class='book-modal-details'>
        <h2 class="book-modal-title">${product.title}</h2>
        <h3 class="book-modal-author">${product.author}</h3>
        <p class='book-modal-desc'>${product.description}</p>
        <ul class='icon-book-modal-list'>
        <li>
            <a href="${product.buy_links[0].url}" target="_blank">
            <svg class='icon-book-modal-amazon'><use href="${icon}#icon-amazon"></use></svg>
            </a>
        </li>
        <li>
            <a href="${product.buy_links[1].url}" target="_blank">
            <svg class='icon-book-modal-ibooks'><use href="${icon}#icon-ibooks"></use></svg>
            </a>
        </li>
        </ul>
    </div>
    <button class='book-modal-btn js-add' id='js-book-modal-btn' aria-label="Menu"></button>
    <p class='book-modal-buy'>Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
    <button class='book-modal-close' id='js-book-modal-btn-close' aria-label="Close">
    <svg class='icon-book-modal-close'><use href='${icon}#icon-closeCross'></use></svg>
    </button>
    </div>`,
    {
      handler: null,
      onShow(instance) {
        this.handler = closeModal.bind(instance);
        document.addEventListener('keydown', this.handler);
      },
      onClose() {
        document.removeEventListener('keydown', this.handler);
      },
    }
  );
  instance.show();

  document.addEventListener('click', evt => {
    const btnClose = evt.target.closest('#js-book-modal-btn-close');

    if (btnClose) {
      instance.close();
    }
  });
}

function closeModal(evt) {
  if (evt.code === 'Escape') {
    this.close();
  }
}

const parentElem = document.querySelector('.main-page-right');
parentElem.addEventListener('click', onClick);

function onClick(evt) {
  const bookCard = evt.target.parentNode;
  const bookCardId = bookCard.dataset.id;

  let basketArr = handleGetBtnClick();

  getBookById(bookCardId)
    .then(obj => {
      if (bookCard.classList.contains('js-book-card')) {
        createMarkup(obj);
      }

      const addBook = document.querySelector('#js-book-modal-btn');
      const inStorage = basketArr.some(({ _id }) => _id === obj._id);

      document.querySelector('.book-modal-buy').style.display = 'none';

      if (inStorage) {
        addBook.addEventListener('click', removeFromCart);
        addBook.classList.remove('js-add');
        addBook.classList.add('js-remove');
        document.querySelector('.book-modal-buy').style.display = 'block';
      } else {
        addBook.addEventListener('click', addToCart);
        addBook.classList.add('js-add');
        addBook.classList.remove('js-remove');
        document.querySelector('.book-modal-buy').style.display = 'none';
      }

      function addToCart(evt) {
        const btnAdd = evt.target.classList.contains('js-add');
        const inStorage = basketArr.some(({ _id }) => _id === obj._id);

        if (btnAdd) {
          evt.target.classList.remove('js-add');
          evt.target.classList.add('js-remove');
          document.querySelector('.book-modal-buy').style.display = 'block';

          if (inStorage) {
            return;
          }

          handleAddBtnClick(obj._id);
          basketArr = handleGetBtnClick();
        }
      }

      function removeFromCart(evt) {
        const btnRemove = evt.target.classList.contains('js-remove');

        if (btnRemove) {
          evt.target.classList.remove('js-remove');
          evt.target.classList.add('js-add');
          document.querySelector('.book-modal-buy').style.display = 'none';

          handleDelBtnClick(obj._id);
          basketArr = handleGetBtnClick();
        }
      }
    })
    .catch(err => console.log(err));
}

export { createMarkup, onClick };
