(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l="45354600-161e9d8fd3bcf6ec49a0bc2e6",f="https://pixabay.com/api/";async function p(a,s=1,t=12){const o=`${f}?key=${l}&q=${encodeURIComponent(a)}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=${t}`;try{const e=await fetch(o);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}catch(e){throw console.error(e),e}}let c;function u(a){const s=document.querySelector(".gallery");s.innerHTML=a.map(t=>`
    <a href="${t.largeImageURL}" class="gallery-item" data-caption="${t.tags}">
      <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" class="g-image">
      <div class="info">
        <p class="i-text"><span class="fat-el">Likes</span> ${t.likes}</p>
        <p class="i-text"><span class="fat-el">Views</span> ${t.views}</p>
        <p class="i-text"><span class="fat-el">Comments</span> ${t.comments}</p>
        <p class="i-text"><span class="fat-el">Downloads</span> ${t.downloads}</p>
      </div>
    </a>
  `).join(""),c?c.refresh():c=new SimpleLightbox(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function i(a){iziToast.error({title:"Error",message:a})}const d=document.querySelector("#search-form"),y=document.querySelector(".gallery");d.addEventListener("submit",async a=>{a.preventDefault();const s=a.target.elements.searchQuery.value.trim();if(!s){i("Please enter a search query.");return}y.innerHTML="";try{const t=await p(s);t.hits.length===0?i("Sorry, there are no images matching your search query. Please try again!"):u(t.hits)}catch{i("Failed to fetch images. Please try again later.")}});
//# sourceMappingURL=commonHelpers.js.map
