import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { handleAddBtnClick, handleGetBtnClick, handleDelBtnClick } from './local-storage'; // видалити handleAddBtnClick

const refs = {
    shopListEmptElem: document.querySelector(".shop-list-empty"),
    shopListElem: document.querySelector(".shop-list"),
    paginationElem: document.getElementById("pagination"),
    pageHeader: document.querySelector(".header-home"),
}
        
handleAddBtnClick("643282b1e85766588626a081"); // видалити
handleAddBtnClick("643282b1e85766588626a0b2"); //
handleAddBtnClick("643282b2e85766588626a112"); //
handleAddBtnClick("643282b1e85766588626a0d4"); //
handleAddBtnClick("643282b1e85766588626a085"); //
handleAddBtnClick("643282b1e85766588626a0b6"); //
handleAddBtnClick("643282b1e85766588626a087"); //
handleAddBtnClick("643282b2e85766588626a0f2"); //
handleAddBtnClick("643282b1e85766588626a0d2"); //
handleAddBtnClick("643282b1e85766588626a086"); //
handleAddBtnClick("643282b2e85766588626a116"); //
handleAddBtnClick("643282b2e85766588626a0f4"); //
handleAddBtnClick("643282b1e85766588626a0b4"); //

function getBooks() {
    return handleGetBtnClick();
}

const pagination = new Pagination('pagination', {
    totalItems: getBooks().length,
    itemsPerPage: window.innerWidth < 768 ? 4 : 3, 
    visiblePages: window.innerWidth < 768 ? 2 : 3,
    centerAlign: true,
});
renderWithPagination();

window.addEventListener("resize", onResize);
function onResize() {
    const targetPage = pagination.getCurrentPage();
    pagination.movePageTo(targetPage);
}

pagination.on('afterMove', (event) => {
    const itemsPerPage = window.innerWidth < 768 ? 4 : 3;
    pagination.setItemsPerPage(itemsPerPage);
    renderWithPagination();
}); 

function renderWithPagination() {
    if (checkIfEmpty()) {
        const currentPage = pagination.getCurrentPage();
        const itemsPerPage = window.innerWidth < 768 ? 4 : 3;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const booksToRender = getBooks().slice(startIndex, endIndex);
        renderShopList(booksToRender);
    }
}

function renderShopList(booksList) {
    const deleteBtnElements = document.querySelectorAll(".shop-list-delete-btn");
    deleteBtnElements.forEach(button => {
        button.removeEventListener("click", onDeleteBtnClick);
    });
    const markup = shopListTemplate(booksList);
    refs.shopListElem.innerHTML = markup;
    const newDeleteBtnElements = document.querySelectorAll(".shop-list-delete-btn");
    newDeleteBtnElements.forEach(button => {
        button.addEventListener("click", onDeleteBtnClick);
    });
}
function checkIfEmpty() {
    if (getBooks().length === 0) {
        refs.shopListElem.classList.add("is-hidden");
        refs.paginationElem.classList.add("is-hidden");
        refs.shopListEmptElem.classList.remove("is-hidden");
        return false;
    } else {
        refs.shopListElem.classList.remove("is-hidden");
        refs.shopListEmptElem.classList.add("is-hidden");
        refs.paginationElem.classList.remove("is-hidden");
        return true;
    }
}
function onDeleteBtnClick(event) {
    const id = event.target.closest(".shop-list-item").id;
    handleDelBtnClick(id);
    const bookToRemove = document.getElementById(id);
    bookToRemove.parentNode.removeChild(bookToRemove);
    const userCurrentPage = pagination.getCurrentPage();
    pagination.reset(getBooks().length);
    renderWithPagination();
    pagination.movePageTo(userCurrentPage);
    checkIfEmpty();
}

function shopListTemplate(books) {
    return books.map(bookTemplate).join("");
}

function bookTemplate(book) {
    const { _id, book_image, title, list_name, description, author, amazon_product_url, buy_links } = book;

    return `<li class="shop-list-item" id="${_id}">
        <img class="shop-list-img"
            src="${book_image}"
            alt="${title}" />  
        <div class="book-info">
        <h1 class="book-title">${title}</h1>
        <p class="book-category">${list_name}</p>
        <p class="book-description">${description}</p>
        <div class="card-footer">
        <p class="book-author">${author}</p>
        <ul class="book-shop-links">
        <li><a href="${amazon_product_url}" target="_blank"><img class="book-shop-img amazon-logo"
        srcset="
        /img/internet-shops/amazon@1x.png 1x,
        /img/internet-shops/amazon@2x.png 2x" 
        src="/img/internet-shops/amazon@1x.png"
        alt="Amazon logo"
        width="32"
        height="11"/></a></li>
        <li><a class="book-shop-link" href="${buy_links[1].url}" target="_blank"><img class="book-shop-img apple-books-logo"
        srcset="
        /img/internet-shops/book@1x.png 1x,
        /img/internet-shops/book@2x.png 2x" 
        src="/img/internet-shops/book@1x.png"
        alt="Apple Books logo"
        width="16"
        height="16"/></a></li>
        </ul>
        </div> 
        </div>
        <button class="shop-list-delete-btn"><svg class="delete-btn-icon">
                  <use href="/img/icons.svg#icon-trash"></use>
                </svg></button>
    </li>`;
}

window.addEventListener('DOMContentLoaded', (event) => {
    refs.pageHeader.dataset.pageName = 'shopping-list';
});


const burgerModalElem = document.querySelector('.mobile-menu-container');
const burgerMenuBtnElem = document.querySelector('.burger-menu');
const burgerMenuCloseBtnElem = document.querySelector('.mobile-menu__button');

burgerMenuBtnElem.addEventListener('click', onBurgerMenuBtnClick);
burgerMenuCloseBtnElem.addEventListener('click', onBurgerMenuCloseBtnClick);

function onBurgerMenuBtnClick(e) {
  burgerModalElem.style.display = 'block';
  burgerMenuBtnElem.style.display = 'none';
}
function onBurgerMenuCloseBtnClick(e) {
  burgerModalElem.style.display = 'none';
  burgerMenuBtnElem.style.display = 'block';
}

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    burgerModalElem.style.display = 'none';
    burgerMenuCloseBtnElem.style.display = 'none';
    burgerMenuBtnElem.style.display = 'none';
  });