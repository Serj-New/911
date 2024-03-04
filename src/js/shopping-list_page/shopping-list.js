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
        refs.shopListDivElem.insertAdjacentHTML("beforeend", `<ul>${markup}</ul>`);
    }
}

async function shopListTemplate(books) {
    const bookTemplates = await Promise.all(books.map(bookTemplate));
    return bookTemplates.join("");
}

async function bookTemplate(book) {
    const bookData = await getBookById(book);
    const { book_image, title, list_name, description, author, amazon_product_url, buy_links } = bookData;

    return `<li class="shopping-list-item">
        <img class="shopping-list-image"
            src="${book_image}"
            alt="${title}" />
        <div class="book-info">
            <div>
                <div>
                    <h1>${title}</h1>
                    <p>${list_name}</p>
                </div>
                <button class="shopping-list-delete-btn"></button>
            </div>
        <p>${description}</p>
        <div>
        <p>${author}</p>
        <ul>
        <li><a href="${amazon_product_url}" target="_blank>amazon</a></li>
        <li><a href="${buy_links[1].url}" target="_blank>applebooks</a></li>
        </ul>
        </div>
        </div>
    </li>`;
}

window.addEventListener('DOMContentLoaded', (event) => {
    refs.pageHeader.dataset.pageName = 'shopping-list';
});