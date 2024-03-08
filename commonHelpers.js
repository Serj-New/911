import{g as w,a as p,b as E,h as m,c as $,d as C,e as S,i as u}from"./assets/local-storage-e079ad14.js";import{b as q}from"./assets/vendor-bfab3ab7.js";const d=document.querySelector(".scroll-up");d.style.display="none";function j(){document.body.scrollTop>400||document.documentElement.scrollTop>400?d.style.display="block":d.style.display="none"}function v(){window.scrollTo({top:0,left:0,behavior:"smooth"})}d.addEventListener("click",v);window.addEventListener("scroll",j);async function M(e){let o=`<li class="categories-list">
                  <a class="category-link current-category" data-category="All Categories" href="#">All categories</a>
                </li>`;return e.forEach(({list_name:t})=>{o+=`<li class="categories-list">
                 <a class="category-link" data-category="${t}" href="#">${t}</a>
               </li>`}),o}async function g(e){const o=document.querySelector(".current-category");o&&o.classList.remove("current-category");const t=document.querySelector(`a[data-category="${e}"]`);t?t.classList.add("current-category"):console.error(`Element with category "${e}" not found.`)}const k=document.querySelector(".main-page-right");window.addEventListener("resize",()=>{k.innerHTML="",y()});function T(e){return window.innerWidth<768?e.slice(0,1):window.innerWidth>=768&&window.innerWidth<1440?e.slice(0,3):e.slice(0,5)}function A(e){let o=T(e.books),t=e.list_name,s=`
    <h2 class="main-page-book-title">${e.list_name}</h2>
    <ul class="main-page-books-render">`;return o.forEach(({title:n,_id:a,author:i,book_image:l})=>{s+=`
    <li class="main-page-book-render-item">
      <div class="book-card">
        <div class="image-overlay js-book-card" data-id="${a}">
          <img class="book-image" src="${l}" alt="${n}" />
          <div class="image-description">
            <p class="image-overlay-description">quick view</p>
          </div>
        </div>
        <div class="book-details">
          <h3 class="main-book-title">${n}</h3>
          <p class="main-book-author">${i}</p>
        </div>
      </div>
    </li>`}),s+=`</ul><div>
    <button class="button-see-more" type="button" data-catname="${t}" aria-label="See more in category ${t}">See more</button>
  </div>`,s}async function _(e){const o=e.map(A).join("");document.querySelector(".main-page-book").insertAdjacentHTML("beforeend",o)}async function y(){const e=document.querySelector(".main-page-right");if(e){e.innerHTML="";let o="";o+=`<h1 class="main-page-title">Best Sellers <span class="main-page-title-span">Books</span></h1>
    <ul class="main-page-book js-main-page-book"></ul>`,e.insertAdjacentHTML("afterbegin",o);const t=await w();await _(t),I()}}y();function H(e){const t=e[0].list_name.split(" "),s=t.slice(0,-1).join(" "),n=t[t.length-1];let a="";return a+=`<h2 id="scroll-to-start" class="main-page-title">${s}<span class="main-page-title-span"> ${n}</span></h2>`,a+='<ul class="main-page-books-render js-main-page-book">',e.forEach(({title:i,_id:l,author:c,book_image:r})=>{a+=`
    <li class="main-page-book-render-item">
    <div class="book-card">
      <div class="image-overlay js-book-card" data-id="${l}">
        <img class="book-image" src="${r}" alt="${i}" />
        <div class="image-description"">
          <p class="image-overlay-description">quick view</p>
        </div>
      </div>
      <div class="book-details">
        <h2 class="main-book-title">${i}</h2>
        <p class="main-book-author">${c}</p>
      </div>
    </div>
  </li>`}),a+="</ul>",a}function f(e){k.innerHTML="";const o=H(e);k.insertAdjacentHTML("afterbegin",o)}function I(){document.querySelectorAll(".button-see-more").forEach(o=>{o.addEventListener("click",async function(){const t=this.dataset.catname,s=await p(t);f(s),g(t),document.getElementById("scroll-to-start").scrollIntoView({behavior:"smooth"}),v()})})}const L={category:document.querySelector(".categories-elements"),pageHeader:document.querySelector(".header-home")};N();async function N(){try{const e=await E();L.category.insertAdjacentHTML("beforeend",await M(e)),document.querySelectorAll(".category-link").forEach(o=>{o.addEventListener("click",D)})}catch{}}async function D(e){e.preventDefault();const o=e.target.textContent.trim();if(o==="All categories")y(),g(e.target.dataset.category),document.getElementById("scroll-to-start").scrollIntoView({behavior:"smooth"});else{const t=await p(o);f(t),g(e.target.dataset.category),document.getElementById("scroll-to-start").scrollIntoView({behavior:"smooth"})}}window.addEventListener("DOMContentLoaded",e=>{L.pageHeader.dataset.pageName="home"});function W(e){const o=q.create(`<div class="book-modal">
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
    <button class='book-modal-btn js-add' id='js-book-modal-btn' aria-label="Menu"></button>
    <p class='book-modal-buy'>Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
    <button class='book-modal-close' id='js-book-modal-btn-close' aria-label="Close">
    <svg class='icon-book-modal-close'><use href='${u}#icon-closeCross'></use></svg>
    </button>
    </div>`,{handler:null,onShow(t){this.handler=x.bind(t),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler)}});o.show(),document.addEventListener("click",t=>{t.target.closest("#js-book-modal-btn-close")&&o.close()})}function x(e){e.code==="Escape"&&this.close()}const z=document.querySelector(".main-page-right");z.addEventListener("click",O);function O(e){const o=e.target.parentNode,t=o.dataset.id;let s=m();$(t).then(n=>{o.classList.contains("js-book-card")&&W(n);const a=document.querySelector("#js-book-modal-btn"),i=s.some(({_id:h})=>h===n._id);document.querySelector(".book-modal-buy").style.display="none",i?l():c();function l(){a.addEventListener("click",b),a.removeEventListener("click",r),a.classList.remove("js-add"),a.classList.add("js-remove"),document.querySelector(".book-modal-buy").style.display="block"}function c(){a.addEventListener("click",r),a.removeEventListener("click",b),a.classList.add("js-add"),a.classList.remove("js-remove"),document.querySelector(".book-modal-buy").style.display="none"}function r(){l(),!s.some(({_id:B})=>B===n._id)&&(C(n._id),s=m())}function b(){c(),S(n._id),s=m()}}).catch(n=>console.log(n))}
//# sourceMappingURL=commonHelpers.js.map
