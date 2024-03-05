import{g as u}from"./assets/main-0a62e6ce.js";import{P as k}from"./assets/vendor-a0346c05.js";async function l(e){const o=await u(e);f(o._id,o)}function b(e){localStorage.removeItem(e)}function r(){const e=localStorage.length,o=[];for(let t=0;t<e;t++){const s=localStorage.key(t),n=v(s);n._id&&o.push(n)}return o}function f(e,o){const t=JSON.stringify(o);localStorage.setItem(e,t)}function v(e){const o=localStorage.getItem(e);try{return JSON.parse(o)}catch{return o}}const c=1,p=r(),L=p.length,d=new k("pagination",{totalItems:L,itemsPerPage:c,visiblePages:1,centerAlign:!0});d.on("afterMove",e=>{const{page:o}=e,t=(o-1)*c,s=t+c,n=p.slice(t,s);E(n)});d.movePageTo(1);function E(e){const o=document.querySelector(".shop-list-js");o.innerHTML="",e.forEach(t=>{const s=document.createElement("li");s.classList.add("book-card"),s.innerHTML=`
            <div class="book-image">
                <img src="${t.imageUrl}" alt="${t.title}" />
            </div>
            <div class="book-info">
                <h2 class="book-title">${t.title}</h2>
                <p class="book-category">${t.category}</p>
                <p class="book-description">${t.description}</p>
                <p class="book-author">${t.author}</p>
                <ul class="book-links">
                    ${t.marketplaces}.map(link => <li><a href="${link}">Marketplace</a></li>).join('')}
                </ul>
                <button class="remove-button">Remove</button>
            </div>
        `,o.appendChild(s)})}const i={shopListEmptElem:document.querySelector(".shop-list-empty"),shopListDivElem:document.querySelector(".shopping-list"),shopListElem:document.querySelector(".shop-list"),pageHeader:document.querySelector(".header-home")};l("643282b1e85766588626a081");l("643282b1e85766588626a0b2");l("643282b2e85766588626a112");l("643282b1e85766588626a0d4");const y=r();$(y);function $(e){if(console.log(e),e.length===0)i.shopListEmptElem.classList.remove("is-hidden");else{i.shopListEmptElem.classList.add("is-hidden");const s=S(e);i.shopListElem.insertAdjacentHTML("beforeend",s)}document.querySelectorAll(".shop-list-delete-btn").forEach(s=>{s.addEventListener("click",t)});function t(s){const n=s.target.closest(".shop-list-item").id;b(n);const a=document.getElementById(n);a.parentNode.removeChild(a),i.shopListElem.childElementCount===0&&i.shopListEmptElem.classList.remove("is-hidden")}}function S(e){return e.map(B).join("")}function B(e){const{_id:o,book_image:t,title:s,list_name:n,description:a,author:m,amazon_product_url:h,buy_links:g}=e;return`<li class="shop-list-item" id="${o}">
        <img class="shop-list-img"
            src="${t}"
            alt="${s}" />  
        <div class="book-info">
        <h1 class="book-title">${s}</h1>
        <p class="book-category">${n}</p>
        <p class="book-description">${a}</p>
        <div class="card-footer">
        <p class="book-author">${m}</p>
        <ul class="book-shop-links">
        <li><a href="${h}" target="_blank"><img class="book-shop-img amazon-logo"
        srcset="
        /img/internet-shops/amazon@1x.png 1x,
        /img/internet-shops/amazon@2x.png 2x" 
        src="/img/internet-shops/amazon@1x.png"
        alt="Amazon logo"
        width="32"
        height="11"/></a></li>
        <li><a class="book-shop-link" href="${g[1].url}" target="_blank"><img class="book-shop-img apple-books-logo"
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
    </li>`}window.addEventListener("DOMContentLoaded",e=>{i.pageHeader.dataset.pageName="shopping-list"});
//# sourceMappingURL=commonHelpers2.js.map
