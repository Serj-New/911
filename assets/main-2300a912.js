import{a as m,S as b}from"./vendor-53c30823.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const g="https://books-backend.p.goit.global/books/";async function y(){const t=g+"category-list ";return(await m.get(t)).data}async function L(e){const s=g+"category",r={category:e};return(await m.get(s,{params:r})).data}async function v(e){const s=g+e;return(await m.get(s)).data}async function E(e){let t=`<li class="categories-list">
                  <a class="category-link active" href="#">All categories</a>
                </li>`;return e.forEach(({list_name:s})=>{t+=`<li class="categories-list">
                 <a class="category-link" href="#">${s}</a>
               </li>`}),t}function S(e){return e.map(t=>`
      <li class="main-page-book-render-item">
        <a class="book-link" href="#">
          <img class="book-image" src="${t.book_image}" alt="${t.title}" />
        </a>
        <h2 class="book-title">${t.title}</h2>
        <p class="book-author">${t.author}</p>
      </li>
    `).join("")}async function k(){const e=await y();for(const t of e){const s=await L(t.list_name),r=B(s),o=S(r),n=document.createElement("div");n.className="category-container";const i=document.createElement("li");i.className="main-page-book-title-list",i.innerHTML=t.list_name;const c=document.createElement("ul");c.className="main-page-books-render",c.innerHTML=o,n.appendChild(i),n.appendChild(c),document.querySelector(".main-page-book").appendChild(n)}}function B(e){return window.innerWidth<768?e.slice(0,1):window.innerWidth>=768&&window.innerWidth<1440?e.slice(0,3):e.slice(0,5)}k();window.addEventListener("resize",()=>{document.querySelector(".main-page-book").innerHTML="",k()});const N={category:document.querySelector(".categories-elements")};T();async function T(){try{const e=await y();N.category.insertAdjacentHTML("beforeend",await E(e))}catch{}}const $=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"img/funds/save-the-children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"img/funds/project-hope.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"img/funds/united24.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"img/funds/international-medical-corps.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"img/funds/medicines-sans-frontieres.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"img/funds/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"img/funds/action-against-hunger.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"img/funds/world-vision.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"img/funds/sergiy-prytula.png"}],_=document.querySelector(".swiper-wrapper"),C=document.querySelector(".support-swiper-btn"),f=document.querySelector(".small-arrow");C.addEventListener("click",O);function P(){const e=$.map(({title:t,url:s,img:r},o)=>{const n=(o+1).toString().padStart(2,"0");return`<div class="swiper-slide ">       
      <a class="support-funds-link" href="${s}" target="_blank"
                    rel="noopener noreferrer nofollow">
      <p class="support-fund-number">${n}</p>
                <img class="support-funds-list-link-image" src="${r}"
                    alt="${t}" 
            </a></div>`}).join("");_.innerHTML=e}P();const d=new b(".swiper",{direction:"vertical",loop:!1,effect:"slide",slidesPerView:6,slidesPerGroup:6});d.on("reachBeginning",function(){f.style.transform=""});d.on("reachEnd",function(){f.style.transform="rotate(180deg)"});function O(e){f.style.transform==""?d.slideNext(2e3):d.slidePrev(2e3)}const u={shopListEmptElem:document.querySelector(".shop-list-empty"),shopListDivElem:document.querySelector(".shopping-list")},I=["643282b1e85766588626a081","643282b1e85766588626a0b2","643282b2e85766588626a112"];q(I);async function q(e){if(e.length===0)u.shopListEmptElem.classList.remove("is-hidden");else{u.shopListEmptElem.classList.add("is-hidden");const t=await M(e);u.shopListDivElem.insertAdjacentHTML("beforeend",`<ul>${t}</ul>`)}}async function M(e){return(await Promise.all(e.map(D))).join("")}async function D(e){const t=await v(e),{book_image:s,title:r,list_name:o,description:n,author:i,amazon_product_url:c,buy_links:w}=t;return`<li class="shopping-list-item">
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
        <li><a href="${c}" target="_blank>amazon</a></li>
        <li><a href="${w[1].url}" target="_blank>applebooks</a></li>
        </ul>
        </div>
        </div>
    </li>`}const h=document.querySelector('input[type="checkbox"]'),j=document.querySelector(".sign-up-button"),a={startBackdrop:document.querySelector(".start-backdrop"),startCloseBtn:document.querySelector(".start-close-btn"),form:document.querySelector(".start-form")},A="form-data";let l={};function H(){a.startBackdrop.classList.remove("start-hidden"),document.body.classList.add("scroll-lock")}function F(){a.startBackdrop.classList.add("start-hidden"),document.body.classList.remove("scroll-lock")}function x(e){e.preventDefault();const{name:t,email:s,password:r}=e.currentTarget.elements;l.name=t.value,l.email=s.value,l.password=r.value,localStorage.setItem(A,JSON.stringify(l)),e.currentTarget.reset(),a.startBackdrop.classList.add("start-hidden")}function z(e){e.code==="Escape"&&(a.startBackdrop.classList.add("start-hidden"),document.body.classList.remove("scroll-lock"))}a.startCloseBtn.addEventListener("click",F);a.form.addEventListener("submit",x);window.addEventListener("keydown",z);const p=localStorage.getItem("theme");p&&(document.body.classList.add(p),h.checked=p==="dark");function W(){h.checked?(document.body.classList.add("dark"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark"),localStorage.setItem("theme","light"))}h.addEventListener("change",W);j.addEventListener("click",H);
//# sourceMappingURL=main-2300a912.js.map
