import{a as u,S as E}from"./vendor-53c30823.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const d="https://books-backend.p.goit.global/books/";async function S(){const t=d+"category-list ";return(await u.get(t)).data}async function k(){const t=d+"top-books";return(await u.get(t)).data}async function B(e){const s=d+"category",r={category:e};return(await u.get(s,{params:r})).data}async function T(e){const s=d+e;return(await u.get(s)).data}async function $(e){let t=`<li class="categories-list">
                  <a class="category-link active" href="#">All categories</a>
                </li>`;return e.forEach(({list_name:s})=>{t+=`<li class="categories-list">
                 <a class="category-link" href="#">${s}</a>
               </li>`}),t}const g=document.querySelector(".main-page-book"),f=document.querySelector(".main-page-right");window.addEventListener("resize",()=>{g.innerHTML="",w()});function N(e){return window.innerWidth<768?e.slice(0,1):window.innerWidth>=768&&window.innerWidth<1440?e.slice(0,3):e.slice(0,5)}async function _(){const e=await k();let t="";t+=`<h2 class="main-page-title">Best Sellers <span class="main-page-title-span">Books</span></h2>
  <ul class="main-page-book">`,f.innerHTML=t,b(e)}function O(e){let t=N(e.books),s=`
    <li class="main-page-book-title">${e.list_name}</li>
    <ul class="main-page-books-render">`;return t.forEach(r=>{s+=`
         <li class="main-page-book-render-item">
          <a class="book-link" href="#">
            <img class="book-image" src="${r.book_image}" alt="#" />
          </a>
          <h2 class="book-title">${r.title}</h2>
          <p class="book-author">${r.author}</p>
        </li>`}),s+=`</ul><div>
    <button class="button-see-more" type="button">See more</button>
  </div>`,s}async function b(e){const t=e.map(O).join("");g.insertAdjacentHTML("afterbegin",t)}async function w(){const e=await k();b(e)}w();function P(e){const s=e[0].list_name.split(" "),r=s.slice(0,-1).join(" "),o=s[s.length-1];f.innerHTML="";let n="";return n+=`<h2 class="main-page-title">${r}<span class="main-page-title-span"> ${o}</span></h2>`,n+='<ul class="main-page-books-render">',e.forEach(i=>{n+=`
      <li class="main-page-book-render-item">
        <a class="book-link" href="#">
          <img class="book-image" src="${i.book_image}" alt="#" />
        </a>
        <h2 class="book-title">${i.title}</h2>
        <p class="book-author">${i.author}</p>
      </li>`}),n+="</ul>",n}function C(e){g.innerHTML="";const t=P(e);f.insertAdjacentHTML("afterbegin",t)}const I={category:document.querySelector(".categories-elements")};M();async function M(){try{const e=await S();I.category.insertAdjacentHTML("beforeend",await $(e)),document.querySelectorAll(".category-link").forEach(t=>{t.addEventListener("click",q)})}catch{}}async function q(e){e.preventDefault();const t=e.target.textContent.trim();if(t==="All categories")_();else{const s=await B(t);C(s)}}const D=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/funds/save-the-children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/funds/project-hope.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/funds/united24.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/funds/international-medical-corps.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/funds/medicines-sans-frontieres.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/funds/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/funds/action-against-hunger.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/funds/world-vision.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/funds/sergiy-prytula.png"}],A=document.querySelector(".swiper-wrapper"),j=document.querySelector(".support-swiper-btn"),h=document.querySelector(".small-arrow");j.addEventListener("click",x);function H(){const e=D.map(({title:t,url:s,img:r},o)=>{const n=(o+1).toString().padStart(2,"0");return`<div class="swiper-slide ">       
      <a class="support-funds-link" href="${s}" target="_blank"
                    rel="noopener noreferrer nofollow">
      <p class="support-fund-number">${n}</p>
                <img class="support-funds-list-link-image" src="${r}"
                    alt="${t}" 
            </a></div>`}).join("");A.innerHTML=e}H();const l=new E(".swiper",{direction:"vertical",loop:!1,effect:"slide",slidesPerView:6,slidesPerGroup:6});l.on("reachBeginning",function(){h.style.transform=""});l.on("reachEnd",function(){h.style.transform="rotate(180deg)"});function x(e){h.style.transform==""?l.slideNext(2e3):l.slidePrev(2e3)}const p={shopListEmptElem:document.querySelector(".shop-list-empty"),shopListDivElem:document.querySelector(".shopping-list")},F=["643282b1e85766588626a081","643282b1e85766588626a0b2","643282b2e85766588626a112"];z(F);async function z(e){if(e.length===0)p.shopListEmptElem.classList.remove("is-hidden");else{p.shopListEmptElem.classList.add("is-hidden");const t=await W(e);p.shopListDivElem.insertAdjacentHTML("beforeend",`<ul>${t}</ul>`)}}async function W(e){return(await Promise.all(e.map(K))).join("")}async function K(e){const t=await T(e),{book_image:s,title:r,list_name:o,description:n,author:i,amazon_product_url:L,buy_links:v}=t;return`<li class="shopping-list-item">
        <img class="shopping-list-image"
            src="${s}"
            alt="${r}" />
        <div class="book-info">
            <div>
                <div>
                    <h1>${r}</h1>
                    <p>${o}</p>
                </div>
                <button class="shopping-list-delete-btn"></button>
            </div>
        <p>${n}</p>
        <div>
        <p>${i}</p>
        <ul>
        <li><a href="${L}" target="_blank>amazon</a></li>
        <li><a href="${v[1].url}" target="_blank>applebooks</a></li>
        </ul>
        </div>
        </div>
    </li>`}const y=document.querySelector('input[type="checkbox"]'),R=document.querySelector(".sign-up-button"),a={startBackdrop:document.querySelector(".start-backdrop"),startCloseBtn:document.querySelector(".start-close-btn"),form:document.querySelector(".start-form")},U="form-data";let c={};function G(){a.startBackdrop.classList.remove("start-hidden"),document.body.classList.add("scroll-lock")}function J(){a.startBackdrop.classList.add("start-hidden"),document.body.classList.remove("scroll-lock")}function V(e){e.preventDefault();const{name:t,email:s,password:r}=e.currentTarget.elements;c.name=t.value,c.email=s.value,c.password=r.value,localStorage.setItem(U,JSON.stringify(c)),e.currentTarget.reset(),a.startBackdrop.classList.add("start-hidden")}function Y(e){e.code==="Escape"&&(a.startBackdrop.classList.add("start-hidden"),document.body.classList.remove("scroll-lock"))}a.startCloseBtn.addEventListener("click",J);a.form.addEventListener("submit",V);window.addEventListener("keydown",Y);const m=localStorage.getItem("theme");m&&(document.body.classList.add(m),y.checked=m==="dark");function Z(){y.checked?(document.body.classList.add("dark"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark"),localStorage.setItem("theme","light"))}y.addEventListener("change",Z);R.addEventListener("click",G);
//# sourceMappingURL=main-01e7ad68.js.map
