import{g as B,a as h,b as $,h as g,c as C,d as E,e as S}from"./assets/local-storage-a95f5bc3.js";import{b as j}from"./assets/vendor-bfab3ab7.js";const m=document.querySelector(".scroll-up");m.style.display="none";function q(){document.body.scrollTop>400||document.documentElement.scrollTop>400?m.style.display="block":m.style.display="none"}function p(){window.scrollTo({top:0,left:0,behavior:"smooth"})}m.addEventListener("click",p);window.addEventListener("scroll",q);async function M(e){let o=`<li class="categories-list">
                  <a class="category-link current-category" data-category="All Categories" href="#">All categories</a>
                </li>`;return e.forEach(({list_name:t})=>{o+=`<li class="categories-list">
                 <a class="category-link" data-category="${t}" href="#">${t}</a>
               </li>`}),o}async function k(e){const o=document.querySelector(".current-category");o&&o.classList.remove("current-category");const t=document.querySelector(`a[data-category="${e}"]`);t?t.classList.add("current-category"):console.error(`Element with category "${e}" not found.`)}const y=document.querySelector(".main-page-right");window.addEventListener("resize",()=>{y.innerHTML="",b()});function T(e){return window.innerWidth<768?e.slice(0,1):window.innerWidth>=768&&window.innerWidth<1440?e.slice(0,3):e.slice(0,5)}function A(e){let o=T(e.books),t=e.list_name,s=`
    <h2 class="main-page-book-title">${e.list_name}</h2>
    <ul class="main-page-books-render">`;return o.forEach(({title:a,_id:i,author:l,book_image:c})=>{s+=`
    <li class="main-page-book-render-item">
      <div class="book-card">
        <div class="image-overlay js-book-card" data-id="${i}">
          <img class="book-image" src="${c}" alt="${a}" />
          <div class="image-description">
            <p class="image-overlay-description">quick view</p>
          </div>
        </div>
        <div class="book-details">
          <h3 class="main-book-title">${a}</h3>
          <p class="main-book-author">${l}</p>
        </div>
      </div>
    </li>`}),s+=`</ul><div>
    <button class="button-see-more" type="button" data-catname="${t}">See more</button>
  </div>`,s}async function _(e){const o=e.map(A).join("");document.querySelector(".main-page-book").insertAdjacentHTML("beforeend",o)}async function b(){const e=document.querySelector(".main-page-right");if(e){e.innerHTML="";let o="";o+=`<h1 class="main-page-title">Best Sellers <span class="main-page-title-span">Books</span></h1>
    <ul class="main-page-book js-main-page-book"></ul>`,e.insertAdjacentHTML("afterbegin",o);const t=await B();await _(t),I()}}b();function H(e){const t=e[0].list_name.split(" "),s=t.slice(0,-1).join(" "),a=t[t.length-1];let i="";return i+=`<h2 id="scroll-to-start" class="main-page-title">${s}<span class="main-page-title-span"> ${a}</span></h2>`,i+='<ul class="main-page-books-render js-main-page-book">',e.forEach(({title:l,_id:c,author:n,book_image:r})=>{i+=`
    <li class="main-page-book-render-item">
    <div class="book-card">
      <div class="image-overlay js-book-card" data-id="${c}">
        <img class="book-image" src="${r}" alt="${l}" />
        <div class="image-description"">
          <p class="image-overlay-description">quick view</p>
        </div>
      </div>
      <div class="book-details">
        <h2 class="main-book-title">${l}</h2>
        <p class="main-book-author">${n}</p>
      </div>
    </div>
  </li>`}),i+="</ul>",i}function v(e){y.innerHTML="";const o=H(e);y.insertAdjacentHTML("afterbegin",o)}function I(){document.querySelectorAll(".button-see-more").forEach(o=>{o.addEventListener("click",async function(){const t=this.dataset.catname,s=await h(t);v(s),k(t),document.getElementById("scroll-to-start").scrollIntoView({behavior:"smooth"}),p()})})}const f={category:document.querySelector(".categories-elements"),pageHeader:document.querySelector(".header-home")};N();async function N(){try{const e=await $();f.category.insertAdjacentHTML("beforeend",await M(e)),document.querySelectorAll(".category-link").forEach(o=>{o.addEventListener("click",W)})}catch{}}async function W(e){e.preventDefault();const o=e.target.textContent.trim();if(o==="All categories")b(),k(e.target.dataset.category),document.getElementById("scroll-to-start").scrollIntoView({behavior:"smooth"});else{const t=await h(o);v(t),k(e.target.dataset.category),document.getElementById("scroll-to-start").scrollIntoView({behavior:"smooth"})}}window.addEventListener("DOMContentLoaded",e=>{f.pageHeader.dataset.pageName="home"});const u="/911/assets/sprite-077e4996.svg";function x(e){const o=j.create(`<div class="book-modal">
    <img src="${e.book_image}" alt="${e.title}" class="book-modal-img"/>
    <div class='book-modal-details'>
        <h2 class="book-modal-title">${e.title}</h2>
        <h3 class="book-modal-author">${e.author}</h3>
        <p class='book-modal-desc'>${e.description}</p>
        <ul class='icon-book-modal-list'>
        <li>
            <a href="${e.buy_links[0].url}" target="_blank">
            <svg class='icon-book-modal-amazon'><use href="${u}#icon-amazon"></use></svg>
            </a>
        </li>
        <li>
            <a href="${e.buy_links[1].url}" target="_blank">
            <svg class='icon-book-modal-ibooks'><use href="${u}#icon-ibooks"></use></svg>
            </a>
        </li>
        </ul>
    </div>
    <button class='book-modal-btn js-add' id='js-book-modal-btn'></button>
    <p class='book-modal-buy'>Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
    <button class='book-modal-close' id='js-book-modal-btn-close'>
    <svg class='icon-book-modal-close'><use href='${u}#icon-closeCross'></use></svg>
    </button>
    </div>`,{handler:null,onShow(t){this.handler=z.bind(t),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler)}});o.show(),document.addEventListener("click",t=>{t.target.closest("#js-book-modal-btn-close")&&o.close()})}function z(e){e.code==="Escape"&&this.close()}let d=g();const D=document.querySelector(".js-main-page-book");D.addEventListener("click",O);function O(e){const o=e.target.parentNode,t=o.dataset.id;console.log(o),C(t).then(s=>{o.classList.contains("js-book-card")&&x(s);const a=document.querySelector("#js-book-modal-btn"),i=d.some(({_id:n})=>n===s._id);document.querySelector(".book-modal-buy").style.display="none",i?(a.addEventListener("click",c),a.classList.remove("js-add"),a.classList.add("js-remove"),document.querySelector(".book-modal-buy").style.display="block"):(a.addEventListener("click",l),a.classList.add("js-add"),a.classList.remove("js-remove"),document.querySelector(".book-modal-buy").style.display="none");function l(n){const r=n.target.classList.contains("js-add"),L=d.some(({_id:w})=>w===s._id);if(r){if(n.target.classList.remove("js-add"),n.target.classList.add("js-remove"),document.querySelector(".book-modal-buy").style.display="block",L)return;E(s._id),d=g()}}function c(n){n.target.classList.contains("js-remove")&&(n.target.classList.remove("js-remove"),n.target.classList.add("js-add"),document.querySelector(".book-modal-buy").style.display="none",S(s._id),d=g())}}).catch(s=>console.log(s))}
//# sourceMappingURL=commonHelpers.js.map
