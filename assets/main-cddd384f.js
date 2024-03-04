import{a as p,S as B}from"./vendor-53c30823.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const m="https://books-backend.p.goit.global/books/";async function T(){const t=m+"category-list ";return(await p.get(t)).data}async function w(){const t=m+"top-books";return(await p.get(t)).data}async function N(e){const o=m+"category",r={category:e};return(await p.get(o,{params:r})).data}async function C(e){const o=m+e;return(await p.get(o)).data}async function O(e){let t=`<li class="categories-list">
                  <a class="category-link active" href="#">All categories</a>
                </li>`;return e.forEach(({list_name:o})=>{t+=`<li class="categories-list">
                 <a class="category-link" href="#">${o}</a>
               </li>`}),t}const f=document.querySelector(".main-page-book"),h=document.querySelector(".main-page-right");window.addEventListener("resize",()=>{f.innerHTML="",L()});function _(e){return window.innerWidth<768?e.slice(0,1):window.innerWidth>=768&&window.innerWidth<1440?e.slice(0,3):e.slice(0,5)}async function P(){const e=await w();let t="";t+=`<h2 class="main-page-title">Best Sellers <span class="main-page-title-span">Books</span></h2>
  <ul class="main-page-book">`,h.innerHTML=t,b(e)}function M(e){let t=_(e.books),o=`
    <li class="main-page-book-title">${e.list_name}</li>
    <ul class="main-page-books-render">`;return t.forEach(r=>{o+=`
         <li class="main-page-book-render-item">
          <a class="book-link" href="#">
            <img class="book-image" src="${r.book_image}" alt="#" />
          </a>
          <h2 class="book-title">${r.title}</h2>
          <p class="book-author">${r.author}</p>
        </li>`}),o+=`</ul><div>
    <button class="button-see-more" type="button">See more</button>
  </div>`,o}async function b(e){const t=e.map(M).join("");f.insertAdjacentHTML("afterbegin",t)}async function L(){const e=await w();b(e)}L();function q(e){const o=e[0].list_name.split(" "),r=o.slice(0,-1).join(" "),n=o[o.length-1];h.innerHTML="";let s="";return s+=`<h2 class="main-page-title">${r}<span class="main-page-title-span"> ${n}</span></h2>`,s+='<ul class="main-page-books-render">',e.forEach(a=>{s+=`
      <li class="main-page-book-render-item">
        <a class="book-link" href="#">
          <img class="book-image" src="${a.book_image}" alt="#" />
        </a>
        <h2 class="book-title">${a.title}</h2>
        <p class="book-author">${a.author}</p>
      </li>`}),s+="</ul>",s}function D(e){f.innerHTML="";const t=q(e);h.insertAdjacentHTML("afterbegin",t)}const v={category:document.querySelector(".categories-elements"),pageHeader:document.querySelector(".header-home")};I();async function I(){try{const e=await T();v.category.insertAdjacentHTML("beforeend",await O(e)),document.querySelectorAll(".category-link").forEach(t=>{t.addEventListener("click",A)})}catch{}}async function A(e){e.preventDefault();const t=e.target.textContent.trim();if(t==="All categories")P();else{const o=await N(t);D(o)}}window.addEventListener("DOMContentLoaded",e=>{v.pageHeader.dataset.pageName="home"});const H=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/funds/save-the-children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/funds/project-hope.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/funds/united24.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/funds/international-medical-corps.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/funds/medicines-sans-frontieres.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/funds/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/funds/action-against-hunger.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/funds/world-vision.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/funds/sergiy-prytula.png"}],j=document.querySelector(".swiper-wrapper"),x=document.querySelector(".support-swiper-btn"),y=document.querySelector(".small-arrow");x.addEventListener("click",z);function F(){const e=H.map(({title:t,url:o,img:r},n)=>{const s=(n+1).toString().padStart(2,"0");return`<div class="swiper-slide ">       
      <a class="support-funds-link" href="${o}" target="_blank"
                    rel="noopener noreferrer nofollow">
      <p class="support-fund-number">${s}</p>
                <img class="support-funds-list-link-image" src="${r}"
                    alt="${t}" 
            </a></div>`}).join("");j.innerHTML=e}F();const d=new B(".swiper",{direction:"vertical",loop:!1,effect:"slide",slidesPerView:6,slidesPerGroup:6});d.on("reachBeginning",function(){y.style.transform=""});d.on("reachEnd",function(){y.style.transform="rotate(180deg)"});function z(e){y.style.transform==""?d.slideNext(2e3):d.slidePrev(2e3)}const l={shopListEmptElem:document.querySelector(".shop-list-empty"),shopListDivElem:document.querySelector(".shopping-list"),pageHeader:document.querySelector(".header-home")},U=["643282b1e85766588626a081","643282b1e85766588626a0b2","643282b2e85766588626a112"];W(U);async function W(e){if(e.length===0)l.shopListEmptElem.classList.remove("is-hidden");else{l.shopListEmptElem.classList.add("is-hidden");const t=await K(e);l.shopListDivElem.insertAdjacentHTML("beforeend",`<ul>${t}</ul>`)}}async function K(e){return(await Promise.all(e.map(R))).join("")}async function R(e){const t=await C(e),{book_image:o,title:r,list_name:n,description:s,author:a,amazon_product_url:E,buy_links:S}=t;return`<li class="shopping-list-item">
        <img class="shopping-list-image"
            src="${o}"
            alt="${r}" />
        <div class="book-info">
            <div>
                <div>
                    <h1>${r}</h1>
                    <p>${n}</p>
                </div>
                <button class="shopping-list-delete-btn"></button>
            </div>
        <p>${s}</p>
        <div>
        <p>${a}</p>
        <ul>
        <li><a href="${E}" target="_blank>amazon</a></li>
        <li><a href="${S[1].url}" target="_blank>applebooks</a></li>
        </ul>
        </div>
        </div>
    </li>`}window.addEventListener("DOMContentLoaded",e=>{l.pageHeader.dataset.pageName="shopping-list"});const u=document.querySelector(".scroll-up");u.style.display="none";function G(){document.body.scrollTop>400||document.documentElement.scrollTop>400?u.style.display="block":u.style.display="none"}function J(){window.scrollTo({top:0,left:0,behavior:"smooth"})}u.addEventListener("click",J);window.addEventListener("scroll",G);const k=document.querySelector('input[type="checkbox"]'),V=document.querySelector(".sign-up-button"),i={startBackdrop:document.querySelector(".start-backdrop"),startCloseBtn:document.querySelector(".start-close-btn"),form:document.querySelector(".start-form")},Y="form-data";let c={};function Z(){i.startBackdrop.classList.remove("start-hidden"),document.body.classList.add("scroll-lock")}function Q(){i.startBackdrop.classList.add("start-hidden"),document.body.classList.remove("scroll-lock")}function X(e){e.preventDefault();const{name:t,email:o,password:r}=e.currentTarget.elements;c.name=t.value,c.email=o.value,c.password=r.value,localStorage.setItem(Y,JSON.stringify(c)),e.currentTarget.reset(),i.startBackdrop.classList.add("start-hidden")}function ee(e){e.code==="Escape"&&(i.startBackdrop.classList.add("start-hidden"),document.body.classList.remove("scroll-lock"))}i.startCloseBtn.addEventListener("click",Q);i.form.addEventListener("submit",X);window.addEventListener("keydown",ee);const g=localStorage.getItem("theme");g&&(document.body.classList.add(g),k.checked=g==="dark");function te(){k.checked?(document.body.classList.add("dark"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark"),localStorage.setItem("theme","light"))}k.addEventListener("change",te);V.addEventListener("click",Z);$(document).ready(function(){$(".btn-footer.team-shark").click(function(){$("#modal-container").removeAttr("class").addClass("one"),$("body").addClass("modal-active")}),$("#modal-container").click(function(){$(this).addClass("out"),$("body").removeClass("modal-active")})});
//# sourceMappingURL=main-cddd384f.js.map
