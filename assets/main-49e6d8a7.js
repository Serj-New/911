import{a as m}from"./vendor-0cb09735.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const p="https://books-backend.p.goit.global/books/";async function y(){const o=p+"category-list ";return(await m.get(o)).data}async function h(e){const r=p+e;return(await m.get(r)).data}document.querySelector(".main-page-book");async function b(e){let o='<li class="category-item" data-category="All Categories">All Categories</li>';return o+=e.map(({list_name:r})=>`<li class="category-item"  data-category="${r}">${r}</li>`).join("")}const L={category:document.querySelector(".categories-elements")};k();async function k(){try{const e=await y();L.category.insertAdjacentHTML("beforeend",await b(e))}catch{}}const l={shopListEmptElem:document.querySelector(".shop-list-empty"),shopListDivElem:document.querySelector(".shopping-list")},v=["643282b1e85766588626a081","643282b1e85766588626a0b2","643282b2e85766588626a112"];E(v);async function E(e){if(e.length===0)l.shopListEmptElem.classList.remove("is-hidden");else{l.shopListEmptElem.classList.add("is-hidden");const o=await S(e);l.shopListDivElem.insertAdjacentHTML("beforeend",`<ul>${o}</ul>`)}}async function S(e){return(await Promise.all(e.map(T))).join("")}async function T(e){const o=await h(e),{book_image:r,title:a,list_name:t,description:s,author:c,amazon_product_url:f,buy_links:g}=o;return`<li class="shopping-list-item">
        <img class="shopping-list-image"
            src="${r}"
            alt="${a}" />
        <div class="book-info">
            <div>
                <div>
                    <h1>${a}</h1>
                    <p>${t}</p>
                </div>
                <button class="shopping-list-delete-btn"></button>
            </div>
        <p>${s}</p>
        <div>
        <p>${c}</p>
        <ul>
        <li><a href="${f}" target="_blank>amazon</a></li>
        <li><a href="${g[1].url}" target="_blank>applebooks</a></li>
        </ul>
        </div>
        </div>
    </li>`}const u=document.querySelector('input[type="checkbox"]'),w=document.querySelector(".sign-up-button"),n={startBackdrop:document.querySelector(".start-backdrop"),startCloseBtn:document.querySelector(".start-close-btn"),form:document.querySelector(".start-form")},B="form-data";let i={};function $(){n.startBackdrop.classList.remove("start-hidden"),document.body.classList.add("scroll-lock")}function N(){n.startBackdrop.classList.add("start-hidden"),document.body.classList.remove("scroll-lock")}function O(e){e.preventDefault();const{name:o,email:r,password:a}=e.currentTarget.elements;i.name=o.value,i.email=r.value,i.password=a.value,localStorage.setItem(B,JSON.stringify(i)),e.currentTarget.reset(),n.startBackdrop.classList.add("start-hidden")}function _(e){e.code==="Escape"&&(n.startBackdrop.classList.add("start-hidden"),document.body.classList.remove("scroll-lock"))}n.startCloseBtn.addEventListener("click",N);n.form.addEventListener("submit",O);window.addEventListener("keydown",_);const d=localStorage.getItem("theme");d&&(document.body.classList.add(d),u.checked=d==="dark");function q(){u.checked?(document.body.classList.add("dark"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark"),localStorage.setItem("theme","light"))}u.addEventListener("change",q);w.addEventListener("click",$);
//# sourceMappingURL=main-49e6d8a7.js.map
