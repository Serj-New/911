import{a as m,S}from"./vendor-53c30823.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const g="https://books-backend.p.goit.global/books/";async function B(){const t=g+"category-list ";return(await m.get(t)).data}async function T(){const t=g+"top-books";return(await m.get(t)).data}async function b(e){const o=g+"category",a={category:e};return(await m.get(o,{params:a})).data}async function N(e){const o=g+e;return(await m.get(o)).data}async function C(e){let t=`<li class="categories-list">
                  <a class="category-link active" href="#">All categories</a>
                </li>`;return e.forEach(({list_name:o})=>{t+=`<li class="categories-list">
                 <a class="category-link" href="#">${o}</a>
               </li>`}),t}const c=document.querySelector(".main-page-right");window.addEventListener("resize",()=>{c.innerHTML="",f()});function _(e){return window.innerWidth<768?e.slice(0,1):window.innerWidth>=768&&window.innerWidth<1440?e.slice(0,3):e.slice(0,5)}function M(e){let t=_(e.books),o=e.list_name,a=`
    <li class="main-page-book-title">${e.list_name}</li>
    <ul class="main-page-books-render">`;return t.forEach(s=>{a+=`
         <li class="main-page-book-render-item">
          <a class="book-link" href="#">
            <img class="book-image" src="${s.book_image}" alt="#" />
          </a>
          <h2 class="book-title">${s.title}</h2>
          <p class="book-author">${s.author}</p>
        </li>`}),a+=`</ul><div>
    <button class="button-see-more" type="button" data-catname="${o}">See more</button>
  </div>`,a}async function O(e){const t=e.map(M).join("");document.querySelector(".main-page-book").insertAdjacentHTML("beforeend",t)}async function f(){c.innerHTML="";let e="";e+=`<h2 class="main-page-title">Best Sellers <span class="main-page-title-span">Books</span></h2>
  <ul class="main-page-book"></ul>`,c.insertAdjacentHTML("afterbegin",e);const t=await T();await O(t),q()}f();function P(e){const o=e[0].list_name.split(" "),a=o.slice(0,-1).join(" "),s=o[o.length-1];let n="";return n+=`<h2 class="main-page-title">${a}<span class="main-page-title-span"> ${s}</span></h2>`,n+='<ul class="main-page-books-render">',e.forEach(r=>{n+=`
      <li class="main-page-book-render-item">
        <a class="book-link" href="#">
          <img class="book-image" src="${r.book_image}" alt="#" />
        </a>
        <h2 class="book-title">${r.title}</h2>
        <p class="book-author">${r.author}</p>
      </li>`}),n+="</ul>",n}function w(e){c.innerHTML="";const t=P(e);c.insertAdjacentHTML("afterbegin",t)}function q(){document.querySelectorAll(".button-see-more").forEach(t=>{t.addEventListener("click",async function(){const o=this.dataset.catname,a=await b(o);w(a)})})}const L={category:document.querySelector(".categories-elements"),pageHeader:document.querySelector(".header-home")};A();async function A(){try{const e=await B();L.category.insertAdjacentHTML("beforeend",await C(e)),document.querySelectorAll(".category-link").forEach(t=>{t.addEventListener("click",D)})}catch{}}async function D(e){e.preventDefault();const t=e.target.textContent.trim();if(t==="All categories")f();else{const o=await b(t);w(o)}}window.addEventListener("DOMContentLoaded",e=>{L.pageHeader.dataset.pageName="home"});const I=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/funds/save-the-children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/funds/project-hope.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/funds/united24.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/funds/international-medical-corps.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/funds/medicines-sans-frontieres.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/funds/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/funds/action-against-hunger.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/funds/world-vision.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/funds/sergiy-prytula.png"}],x=document.querySelector(".swiper-wrapper"),H=document.querySelector(".support-swiper-btn"),y=document.querySelector(".swiper-button-icon");H.addEventListener("click",z);function j(){const e=I.map(({title:t,url:o,img:a},s)=>{const n=(s+1).toString().padStart(2,"0");return`<div class="swiper-slide ">       
      <a class="support-funds-link" href="${o}" target="_blank"
                    rel="noopener noreferrer nofollow">
      <p class="support-fund-number">${n}</p>
                <img class="support-funds-list-link-image" src="${a}"
                    alt="${t}" 
            </a></div>`}).join("");x.innerHTML=e}j();const u=new S(".swiper",{direction:"vertical",loop:!1,effect:"slide",slidesPerView:6,slidesPerGroup:6});u.on("reachBeginning",function(){y.style.transform=""});u.on("reachEnd",function(){y.style.transform="rotate(180deg)"});function z(e){y.style.transform==""?u.slideNext(2e3):u.slidePrev(2e3)}const d={shopListEmptElem:document.querySelector(".shop-list-empty"),shopListDivElem:document.querySelector(".shopping-list"),pageHeader:document.querySelector(".header-home")},F=["643282b1e85766588626a081","643282b1e85766588626a0b2","643282b2e85766588626a112"];U(F);async function U(e){if(e.length===0)d.shopListEmptElem.classList.remove("is-hidden");else{d.shopListEmptElem.classList.add("is-hidden");const t=await W(e);d.shopListDivElem.insertAdjacentHTML("beforeend",`<ul class="shop-list">${t}</ul>`)}}async function W(e){return(await Promise.all(e.map(K))).join("")}async function K(e){const t=await N(e),{book_image:o,title:a,list_name:s,description:n,author:r,amazon_product_url:v,buy_links:E}=t;return`<li class="shop-list-item">
        <img class="shop-list-img"
            src="${o}"
            alt="${a}" />
        <button class="shop-list-delete-btn"><svg class="delete-btn-icon">
                  <use href="./img/icons.svg#icon-trash"></use>
                </svg></button>   
        <div class="book-info">
        <h1 class="book-title">${a}</h1>
        <p class="book-category">${s}</p>
        <p class="book-description">${n}</p>
        <div class="card-footer">
        <p class="book-author">${r}</p>
        <ul class="book-shop-links">
        <li><a href="${v}" target="_blank"><img class="book-shop-img amazon-logo"
        srcset="
        ./img/internet-shops/amazon@1x.png 1x,
        ./img/internet-shops/amazon@2x.png 2x" 
        src="./img/internet-shops/amazon@1x.png"
        alt="Amazon logo"
        width="32"
        height="11"/></a></li>
        <li><a class="book-shop-link" href="${E[1].url}" target="_blank"><img class="book-shop-img apple-books-logo"
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
    </li>`}window.addEventListener("DOMContentLoaded",e=>{d.pageHeader.dataset.pageName="shopping-list"});const p=document.querySelector(".scroll-up");p.style.display="none";function R(){document.body.scrollTop>400||document.documentElement.scrollTop>400?p.style.display="block":p.style.display="none"}function G(){window.scrollTo({top:0,left:0,behavior:"smooth"})}p.addEventListener("click",G);window.addEventListener("scroll",R);const k=document.querySelector('input[type="checkbox"]'),J=document.querySelector(".sign-up-button"),i={startBackdrop:document.querySelector(".start-backdrop"),startCloseBtn:document.querySelector(".start-close-btn"),form:document.querySelector(".start-form")},V="form-data";let l={};function Y(){i.startBackdrop.classList.remove("start-hidden"),document.body.classList.add("scroll-lock")}function Z(){i.startBackdrop.classList.add("start-hidden"),document.body.classList.remove("scroll-lock")}function Q(e){e.preventDefault();const{name:t,email:o,password:a}=e.currentTarget.elements;l.name=t.value,l.email=o.value,l.password=a.value,localStorage.setItem(V,JSON.stringify(l)),e.currentTarget.reset(),i.startBackdrop.classList.add("start-hidden")}function X(e){e.code==="Escape"&&(i.startBackdrop.classList.add("start-hidden"),document.body.classList.remove("scroll-lock"))}i.startCloseBtn.addEventListener("click",Z);i.form.addEventListener("submit",Q);window.addEventListener("keydown",X);const h=localStorage.getItem("theme");h&&(document.body.classList.add(h),k.checked=h==="dark");function ee(){k.checked?(document.body.classList.add("dark"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark"),localStorage.setItem("theme","light"))}k.addEventListener("change",ee);J.addEventListener("click",Y);$(document).ready(function(){$(".btn-footer.team-shark").click(function(){$("#modal-container").removeAttr("class").addClass("one"),$("body").addClass("modal-active")}),$("#modal-container").click(function(){$(this).addClass("out"),$("body").removeClass("modal-active")})});
//# sourceMappingURL=main-cd3f7a07.js.map
