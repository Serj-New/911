import{g as y}from"./assets/main-6b1c952d.js";import{P as E}from"./assets/vendor-a0346c05.js";async function o(e){const t=await y(e);w(t._id,t)}function v(e){localStorage.removeItem(e)}function L(){const e=localStorage.length,t=[];for(let n=0;n<e;n++){const i=localStorage.key(n),s=B(i);s._id&&t.push(s)}return t}function w(e,t){const n=JSON.stringify(t);localStorage.setItem(e,n)}function B(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}const a={shopListEmptElem:document.querySelector(".shop-list-empty"),shopListElem:document.querySelector(".shop-list"),paginationElem:document.getElementById("pagination"),pageHeader:document.querySelector(".header-home")};o("643282b1e85766588626a081");o("643282b1e85766588626a0b2");o("643282b2e85766588626a112");o("643282b1e85766588626a0d4");o("643282b1e85766588626a085");o("643282b1e85766588626a0b6");o("643282b1e85766588626a087");o("643282b2e85766588626a0f2");o("643282b1e85766588626a0d2");o("643282b1e85766588626a086");o("643282b2e85766588626a116");o("643282b2e85766588626a0f4");o("643282b1e85766588626a0b4");function r(){return L()}const l=new E("pagination",{totalItems:r().length,itemsPerPage:window.innerWidth<768?4:3,visiblePages:window.innerWidth<768?2:3,centerAlign:!0});d();window.addEventListener("resize",P);function P(){const e=l.getCurrentPage();l.movePageTo(e)}l.on("afterMove",e=>{const t=window.innerWidth<768?4:3;l.setItemsPerPage(t),d()});function d(){if(p()){const e=l.getCurrentPage(),t=window.innerWidth<768?4:3,n=(e-1)*t,i=n+t,s=r().slice(n,i);S(s)}}function S(e){document.querySelectorAll(".shop-list-delete-btn").forEach(s=>{s.removeEventListener("click",g)});const n=C(e);a.shopListElem.innerHTML=n,document.querySelectorAll(".shop-list-delete-btn").forEach(s=>{s.addEventListener("click",g)})}function p(){return r().length===0?(a.shopListElem.classList.add("is-hidden"),a.paginationElem.classList.add("is-hidden"),a.shopListEmptElem.classList.remove("is-hidden"),!1):(a.shopListElem.classList.remove("is-hidden"),a.shopListEmptElem.classList.add("is-hidden"),a.paginationElem.classList.remove("is-hidden"),!0)}function g(e){const t=e.target.closest(".shop-list-item").id;v(t);const n=document.getElementById(t);n.parentNode.removeChild(n);const i=l.getCurrentPage();l.reset(r().length),d(),l.movePageTo(i),p()}function C(e){return e.map(x).join("")}function x(e){const{_id:t,book_image:n,title:i,list_name:s,description:h,author:b,amazon_product_url:k,buy_links:f}=e;return`<li class="shop-list-item" id="${t}">
        <img class="shop-list-img"
            src="${n}"
            alt="${i}" />  
        <div class="book-info">
        <h1 class="book-title">${i}</h1>
        <p class="book-category">${s}</p>
        <p class="book-description">${h}</p>
        <div class="card-footer">
        <p class="book-author">${b}</p>
        <ul class="book-shop-links">
        <li><a href="${k}" target="_blank"><img class="book-shop-img amazon-logo"
        srcset="
        /img/internet-shops/amazon@1x.png 1x,
        /img/internet-shops/amazon@2x.png 2x" 
        src="/img/internet-shops/amazon@1x.png"
        alt="Amazon logo"
        width="32"
        height="11"/></a></li>
        <li><a class="book-shop-link" href="${f[1].url}" target="_blank"><img class="book-shop-img apple-books-logo"
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
    </li>`}window.addEventListener("DOMContentLoaded",e=>{a.pageHeader.dataset.pageName="shopping-list"});const m=document.querySelector(".mobile-menu-container"),c=document.querySelector(".burger-menu"),u=document.querySelector(".mobile-menu__button");c.addEventListener("click",_);u.addEventListener("click",I);function _(e){m.style.display="block",c.style.display="none"}function I(e){m.style.display="none",c.style.display="block"}window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(m.style.display="none",u.style.display="none",c.style.display="none")});
//# sourceMappingURL=commonHelpers2.js.map
