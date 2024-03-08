import{g as b,a as u,b as h}from"./assets/book-modal-9aa3c4a6.js";import"./assets/vendor-bfab3ab7.js";const r=document.querySelector(".scroll-up");r.style.display="none";function v(){document.body.scrollTop>400||document.documentElement.scrollTop>400?r.style.display="block":r.style.display="none"}function m(){window.scrollTo({top:0,left:0,behavior:"smooth"})}r.addEventListener("click",m);window.addEventListener("scroll",v);async function w(e){let t=`<li class="categories-list">
                  <a class="category-link current-category" data-category="All Categories" href="#">All categories</a>
                </li>`;return e.forEach(({list_name:o})=>{t+=`<li class="categories-list">
                 <a class="category-link" data-category="${o}" href="#">${o}</a>
               </li>`}),t}async function l(e){const t=document.querySelector(".current-category");t&&t.classList.remove("current-category");const o=document.querySelector(`a[data-category="${e}"]`);o?o.classList.add("current-category"):console.error(`Element with category "${e}" not found.`)}const d=document.querySelector(".main-page-right");window.addEventListener("resize",()=>{d.innerHTML="",g()});function L(e){return window.innerWidth<768?e.slice(0,1):window.innerWidth>=768&&window.innerWidth<1440?e.slice(0,3):e.slice(0,5)}function B(e){let t=L(e.books),o=e.list_name,a=`
    <li class="main-page-book-title">${e.list_name}</li>
    <ul class="main-page-books-render">`;return t.forEach(({title:n,_id:s,author:i,book_image:c})=>{a+=`
    <li class="main-page-book-render-item">
      <div class="book-card">
        <div class="image-overlay js-book-card" data-id="${s}">
          <img class="book-image" src="${c}" alt="${n}" />
          <div class="image-description">
            <p class="image-overlay-description">quick view</p>
          </div>
        </div>
        <div class="book-details">
          <h2 class="book-title">${n}</h2>
          <p class="book-author">${i}</p>
        </div>
      </div>
    </li>`}),a+=`</ul><div>
    <button class="button-see-more" type="button" data-catname="${o}">See more</button>
  </div>`,a}async function $(e){const t=e.map(B).join("");document.querySelector(".main-page-book").insertAdjacentHTML("beforeend",t)}async function g(){const e=document.querySelector(".main-page-right");if(e){e.innerHTML="";let t="";t+=`<h2 class="main-page-title">Best Sellers <span class="main-page-title-span">Books</span></h2>
    <ul class="main-page-book js-main-page-book"></ul>`,e.insertAdjacentHTML("afterbegin",t);const o=await b();await $(o),C()}}g();function E(e){const o=e[0].list_name.split(" "),a=o.slice(0,-1).join(" "),n=o[o.length-1];let s="";return s+=`<h2 class="main-page-title">${a}<span class="main-page-title-span"> ${n}</span></h2>`,s+='<ul class="main-page-books-render js-main-page-book">',e.forEach(({title:i,_id:c,author:k,book_image:f})=>{s+=`
    <li class="main-page-book-render-item">
    <div class="book-card">
      <div class="image-overlay js-book-card" data-id="${c}">
        <img class="book-image" src="${f}" alt="${i}" />
        <div class="image-description"">
          <p class="image-overlay-description">quick view</p>
        </div>
      </div>
      <div class="book-details">
        <h2 class="book-title">${i}</h2>
        <p class="book-author">${k}</p>
      </div>
    </div>
  </li>`}),s+="</ul>",s}function y(e){d.innerHTML="";const t=E(e);d.insertAdjacentHTML("afterbegin",t)}function C(){document.querySelectorAll(".button-see-more").forEach(t=>{t.addEventListener("click",async function(){const o=this.dataset.catname,a=await u(o);y(a),l(o),m()})})}const p={category:document.querySelector(".categories-elements"),pageHeader:document.querySelector(".header-home")};S();async function S(){try{const e=await h();p.category.insertAdjacentHTML("beforeend",await w(e)),document.querySelectorAll(".category-link").forEach(t=>{t.addEventListener("click",M)})}catch{}}async function M(e){e.preventDefault();const t=e.target.textContent.trim();if(t==="All categories")g(),l(e.target.dataset.category);else{const o=await u(t);y(o),l(e.target.dataset.category)}}window.addEventListener("DOMContentLoaded",e=>{p.pageHeader.dataset.pageName="home"});
//# sourceMappingURL=commonHelpers.js.map
