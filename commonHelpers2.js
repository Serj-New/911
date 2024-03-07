import{g as y}from"./assets/main-931625ed.js";import{P as f}from"./assets/vendor-a0346c05.js";async function n(e){const t=await y(e);v(t._id,t)}function E(e){localStorage.removeItem(e)}function p(){const e=localStorage.length,t=[];for(let o=0;o<e;o++){const s=localStorage.key(o),a=L(s);a._id&&t.push(a)}return t}function v(e,t){const o=JSON.stringify(t);localStorage.setItem(e,o)}function L(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}const i={shopListEmptElem:document.querySelector(".shop-list-empty"),shopListDivElem:document.querySelector(".shopping-list"),shopListElem:document.querySelector(".shop-list"),pageHeader:document.querySelector(".header-home"),paginationElem:document.getElementById("pagination")};n("643282b1e85766588626a081");n("643282b1e85766588626a0b2");n("643282b2e85766588626a112");n("643282b1e85766588626a0d4");n("643282b1e85766588626a085");n("643282b1e85766588626a0b6");n("643282b1e85766588626a087");n("643282b2e85766588626a0f2");n("643282b1e85766588626a0d2");n("643282b1e85766588626a086");n("643282b2e85766588626a116");n("643282b2e85766588626a0f4");n("643282b1e85766588626a0b4");let r=p();const B={totalItems:r.length,itemsPerPage:3,visiblePages:3,centerAlign:!0},l=new f("pagination",B);d();l.on("afterMove",d);function d(){const e=l.getCurrentPage(),t=l._options.itemsPerPage,o=(e-1)*t,s=o+t,a=r.slice(o,s);S(a)}function S(e){if(e.length===0)i.shopListEmptElem.classList.remove("is-hidden"),i.paginationElem.classList.add("is-hidden");else{i.shopListEmptElem.classList.add("is-hidden"),i.paginationElem.classList.remove("is-hidden");const t=P(e);i.shopListElem.innerHTML=t,document.querySelectorAll(".shop-list-delete-btn").forEach(s=>{s.addEventListener("click",C)})}}function C(e){const t=e.target.closest(".shop-list-item").id;E(t);const o=document.getElementById(t);o.parentNode.removeChild(o),r=p();const s=l.getCurrentPage();l.reset(r.length),d(),l.movePageTo(s),i.shopListElem.childElementCount===0&&i.shopListEmptElem.classList.remove("is-hidden")}function P(e){return e.map(x).join("")}function x(e){const{_id:t,book_image:o,title:s,list_name:a,description:u,author:h,amazon_product_url:b,buy_links:k}=e;return`<li class="shop-list-item" id="${t}">
        <img class="shop-list-img"
            src="${o}"
            alt="${s}" />  
        <div class="book-info">
        <h1 class="book-title">${s}</h1>
        <p class="book-category">${a}</p>
        <p class="book-description">${u}</p>
        <div class="card-footer">
        <p class="book-author">${h}</p>
        <ul class="book-shop-links">
        <li><a href="${b}" target="_blank"><img class="book-shop-img amazon-logo"
        srcset="
        /img/internet-shops/amazon@1x.png 1x,
        /img/internet-shops/amazon@2x.png 2x" 
        src="/img/internet-shops/amazon@1x.png"
        alt="Amazon logo"
        width="32"
        height="11"/></a></li>
        <li><a class="book-shop-link" href="${k[1].url}" target="_blank"><img class="book-shop-img apple-books-logo"
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
    </li>`}window.addEventListener("DOMContentLoaded",e=>{i.pageHeader.dataset.pageName="shopping-list"});const m=document.querySelector(".mobile-menu-container"),c=document.querySelector(".burger-menu"),g=document.querySelector(".mobile-menu__button");c.addEventListener("click",_);g.addEventListener("click",w);function _(e){m.style.display="block",c.style.display="none"}function w(e){m.style.display="none",c.style.display="block"}window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(m.style.display="none",g.style.display="none",c.style.display="none")});
//# sourceMappingURL=commonHelpers2.js.map
