import{g as u}from"./assets/main-12cc27e7.js";import{P as b}from"./assets/vendor-a0346c05.js";async function s(e){const t=await u(e);f(t._id,t)}function k(e){localStorage.removeItem(e)}function d(){const e=localStorage.length,t=[];for(let o=0;o<e;o++){const n=localStorage.key(o),a=E(n);a._id&&t.push(a)}return t}function f(e,t){const o=JSON.stringify(t);localStorage.setItem(e,o)}function E(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}const i={shopListEmptElem:document.querySelector(".shop-list-empty"),shopListDivElem:document.querySelector(".shopping-list"),shopListElem:document.querySelector(".shop-list"),pageHeader:document.querySelector(".header-home"),paginationElem:document.getElementById("pagination")};s("643282b1e85766588626a081");s("643282b1e85766588626a0b2");s("643282b2e85766588626a112");s("643282b1e85766588626a0d4");s("643282b1e85766588626a085");s("643282b1e85766588626a0b6");s("643282b1e85766588626a087");s("643282b2e85766588626a0f2");s("643282b1e85766588626a0d2");s("643282b1e85766588626a086");s("643282b2e85766588626a116");s("643282b2e85766588626a0f4");s("643282b1e85766588626a0b4");let r=d();const v={totalItems:r.length,itemsPerPage:3,visiblePages:3,centerAlign:!0},l=new b("pagination",v);c();l.on("afterMove",c);function c(){const e=l.getCurrentPage(),t=l._options.itemsPerPage,o=(e-1)*t,n=o+t,a=r.slice(o,n);L(a)}function L(e){if(e.length===0)i.shopListEmptElem.classList.remove("is-hidden"),i.paginationElem.classList.add("is-hidden");else{i.shopListEmptElem.classList.add("is-hidden"),i.paginationElem.classList.remove("is-hidden");const t=P(e);i.shopListElem.innerHTML=t,document.querySelectorAll(".shop-list-delete-btn").forEach(n=>{n.addEventListener("click",y)})}}function y(e){const t=e.target.closest(".shop-list-item").id;k(t);const o=document.getElementById(t);o.parentNode.removeChild(o),r=d();const n=l.getCurrentPage();l.reset(r.length),c(),l.movePageTo(n),i.shopListElem.childElementCount===0&&i.shopListEmptElem.classList.remove("is-hidden")}function P(e){return e.map(S).join("")}function S(e){const{_id:t,book_image:o,title:n,list_name:a,description:m,author:p,amazon_product_url:g,buy_links:h}=e;return`<li class="shop-list-item" id="${t}">
        <img class="shop-list-img"
            src="${o}"
            alt="${n}" />  
        <div class="book-info">
        <h1 class="book-title">${n}</h1>
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
        <button class="shop-list-delete-btn"><svg class="delete-btn-icon">
                  <use href="/img/icons.svg#icon-trash"></use>
                </svg></button> 
        </div>
    </li>`}window.addEventListener("DOMContentLoaded",e=>{i.pageHeader.dataset.pageName="shopping-list"});
//# sourceMappingURL=commonHelpers2.js.map
