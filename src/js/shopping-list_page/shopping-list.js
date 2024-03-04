import { getBookById } from '../home_page/books-api';

const refs = {
    shopListEmptElem: document.querySelector(".shop-list-empty"),
    shopListDivElem: document.querySelector(".shopping-list"),
    pageHeader: document.querySelector(".header-home"),
}

const bookIdList = ["643282b1e85766588626a081", "643282b1e85766588626a0b2", "643282b2e85766588626a112"];//замінити потім
renderShopList(bookIdList);

async function renderShopList(bookIdList) {
    if (bookIdList.length === 0) {
        refs.shopListEmptElem.classList.remove("is-hidden")
    } else {
        refs.shopListEmptElem.classList.add("is-hidden");
        const markup = await shopListTemplate(bookIdList);
        refs.shopListDivElem.insertAdjacentHTML("beforeend", `<ul class="shop-list">${markup}</ul>`);
    }
}

async function shopListTemplate(books) {
    const bookTemplates = await Promise.all(books.map(bookTemplate));
    return bookTemplates.join("");
}

async function bookTemplate(book) {
    const bookData = await getBookById(book);
    const { book_image, title, list_name, description, author, amazon_product_url, buy_links } = bookData;

    return `<li class="shop-list-item">
        <img class="shop-list-img"
            src="${book_image}"
            alt="${title}" />
        <button class="shop-list-delete-btn"><svg class="delete-btn-icon">
                  <use href="./img/icons.svg#icon-trash"></use>
                </svg></button>   
        <div class="book-info">
        <h1 class="book-title">${title}</h1>
        <p class="book-category">${list_name}</p>
        <p class="book-description">${description}</p>
        <div class="card-footer">
        <p class="book-author">${author}</p>
        <ul class="book-shop-links">
        <li><a href="${amazon_product_url}" target="_blank"><img class="book-shop-img amazon-logo"
        srcset="
        ./img/internet-shops/amazon@1x.png 1x,
        ./img/internet-shops/amazon@2x.png 2x" 
        src="./img/internet-shops/amazon@1x.png"
        alt="Amazon logo"
        width="32"
        height="11"/></a></li>
        <li><a class="book-shop-link" href="${buy_links[1].url}" target="_blank"><img class="book-shop-img apple-books-logo"
        srcset="
        ./img/internet-shops/book@1x.png 1x,
        ./img/internet-shops/book@2x.png 2x" 
        src="./img/internet-shops/book@1x.png"
        alt="Apple Books logo"
        width="16"
        height="16"/></a></li>
        </ul>
        </div>
        </div>
    </li>`;
}

window.addEventListener('DOMContentLoaded', (event) => {
    refs.pageHeader.dataset.pageName = 'shopping-list';
});