import{h as l,e as u}from"./assets/local-storage-457415f7.js";import{P as v}from"./assets/vendor-bfab3ab7.js";const o={shopListEmptElem:document.querySelector(".shop-list-empty"),shopListElem:document.querySelector(".shop-list"),paginationElem:document.getElementById("pagination"),pageHeader:document.querySelector(".header-home")},n=new v("pagination",{totalItems:l().length,itemsPerPage:window.innerWidth<768?4:3,visiblePages:2,centerAlign:!0});r();window.addEventListener("resize",k);function k(){const e=n.getCurrentPage();n.movePageTo(e)}n.on("afterMove",e=>{const t=window.innerWidth<768?4:3;n.setItemsPerPage(t),r()});function r(){if(d()){const e=n.getCurrentPage(),t=window.innerWidth<768?4:3,s=(e-1)*t,i=s+t,a=l().slice(s,i);E(a)}}function E(e){document.querySelectorAll(".shop-list-delete-btn").forEach(a=>{a.removeEventListener("click",c)});const s=b(e);o.shopListElem.innerHTML=s,document.querySelectorAll(".shop-list-delete-btn").forEach(a=>{a.addEventListener("click",c)})}function d(){return l().length===0?(o.shopListElem.classList.add("is-hidden"),o.paginationElem.classList.add("is-hidden"),o.shopListEmptElem.classList.remove("is-hidden"),!1):(o.shopListElem.classList.remove("is-hidden"),o.shopListEmptElem.classList.add("is-hidden"),o.paginationElem.classList.remove("is-hidden"),!0)}function c(e){const t=e.target.closest(".shop-list-item").id;u(t);const s=document.getElementById(t);s.parentNode.removeChild(s);const i=n.getCurrentPage();n.reset(l().length),r(),n.movePageTo(i),d()}function b(e){return e.map(f).join("")}function f(e){const{_id:t,book_image:s,title:i,list_name:a,description:m,author:g,amazon_product_url:p,buy_links:h}=e;return`<li class="shop-list-item" id="${t}">
        <img class="shop-list-img"
            src="${s}"
            alt="${i}" />  
        <div class="book-info">
        <h1 class="book-title">${i}</h1>
        <p class="book-category">${a}</p>
        <p class="book-description">${m}</p>
        <div class="card-footer">
        <p class="book-author">${g}</p>
        <ul class="book-shop-links">
        <li><a href="${p}" target="_blank"><svg class="book-shop-img amazon-logo"><use href="./img/sprite.svg#icon-amazon"></use></svg></a></li>
        <li><a class="book-shop-link" href="${h[1].url}" target="_blank"><svg class="book-shop-img apple-books-logo"><use href="./img/sprite.svg#icon-ibooks"></use></svg></a></li>
        </ul>
        </div> 
        </div>
        <button class="shop-list-delete-btn"><svg class="delete-btn-icon">
                  <use href="../img/icons.svg#icon-trash"></use>
                </svg></button>
    </li>`}window.addEventListener("DOMContentLoaded",e=>{o.pageHeader.dataset.pageName="shopping-list"});
//# sourceMappingURL=commonHelpers2.js.map
