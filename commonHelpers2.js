import{h as l,c as u}from"./assets/book-modal-9aa3c4a6.js";import{P as k}from"./assets/vendor-bfab3ab7.js";const s={shopListEmptElem:document.querySelector(".shop-list-empty"),shopListElem:document.querySelector(".shop-list"),paginationElem:document.getElementById("pagination"),pageHeader:document.querySelector(".header-home")},o=new k("pagination",{totalItems:l().length,itemsPerPage:window.innerWidth<768?4:3,visiblePages:window.innerWidth<768?2:3,centerAlign:!0});r();window.addEventListener("resize",b);function b(){const e=o.getCurrentPage();o.movePageTo(e)}o.on("afterMove",e=>{const t=window.innerWidth<768?4:3;o.setItemsPerPage(t),r()});function r(){if(d()){const e=o.getCurrentPage(),t=window.innerWidth<768?4:3,n=(e-1)*t,i=n+t,a=l().slice(n,i);E(a)}}function E(e){document.querySelectorAll(".shop-list-delete-btn").forEach(a=>{a.removeEventListener("click",c)});const n=v(e);s.shopListElem.innerHTML=n,document.querySelectorAll(".shop-list-delete-btn").forEach(a=>{a.addEventListener("click",c)})}function d(){return l().length===0?(s.shopListElem.classList.add("is-hidden"),s.paginationElem.classList.add("is-hidden"),s.shopListEmptElem.classList.remove("is-hidden"),!1):(s.shopListElem.classList.remove("is-hidden"),s.shopListEmptElem.classList.add("is-hidden"),s.paginationElem.classList.remove("is-hidden"),!0)}function c(e){const t=e.target.closest(".shop-list-item").id;u(t);const n=document.getElementById(t);n.parentNode.removeChild(n);const i=o.getCurrentPage();o.reset(l().length),r(),o.movePageTo(i),d()}function v(e){return e.map(f).join("")}function f(e){const{_id:t,book_image:n,title:i,list_name:a,description:m,author:p,amazon_product_url:g,buy_links:h}=e;return`<li class="shop-list-item" id="${t}">
        <img class="shop-list-img"
            src="${n}"
            alt="${i}" />  
        <div class="book-info">
        <h1 class="book-title">${i}</h1>
        <p class="book-category">${a}</p>
        <p class="book-description">${m}</p>
        <div class="card-footer">
        <p class="book-author">${p}</p>
        <ul class="book-shop-links">
        <li><a href="${g}" target="_blank"><img class="book-shop-img amazon-logo"
        srcset="
        /img/internet-shops/amazon@1x.png 1x,
        /img/internet-shops/amazon@2x.png 2x" 
        src="/img/internet-shops/amazon@1x.png"
        alt="Amazon logo"
        width="32"
        height="11"/></a></li>
        <li><a class="book-shop-link" href="${h[1].url}" target="_blank"><img class="book-shop-img apple-books-logo"
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
    </li>`}window.addEventListener("DOMContentLoaded",e=>{s.pageHeader.dataset.pageName="shopping-list"});
//# sourceMappingURL=commonHelpers2.js.map
