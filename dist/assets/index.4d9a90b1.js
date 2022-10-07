(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const u=document.querySelector("#page-element");var g;(g=document.querySelector("#bt-home"))==null||g.addEventListener("click",()=>{i("home")});var f;(f=document.querySelector("#bt-not-home"))==null||f.addEventListener("click",()=>{i("not-home")});var h;(h=document.querySelector("#bt-gallery"))==null||h.addEventListener("click",()=>{i("gallery"),y("#works-gallery",M),y("#girl-gallery",q),d("#motion-gallery",T),d("#ytvid-gallery",A),d("#music-gallery",E)});var w;(w=document.querySelector("#bt-contact"))==null||w.addEventListener("click",()=>{i("contact"),D("#links",H)});let a="";const L={yt:t=>`
      <iframe class="yt" src="https://www.youtube.com/embed/${t}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `,sc:t=>`
    <iframe style="width: 20rem;" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${t}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    `},M=[{url:"./src/assets/works/ruins.png",alt:"An aftermath from an ongoing war, that looks suspicioulsy like the empty SEKAI from Project Sekai"},{url:"./src/assets/works/crystals.png",alt:"A render of a bunch of crystals in the air"},{url:"./src/assets/works/pastel-dark.png",alt:"Cityline with a looming energy diamond in the background"},{url:"./src/assets/works/tomoe-poly.png",alt:"Banner design with Tomoe Udagawa in polygonal style"},{url:"./src/assets/works/lock-banner.png",alt:"Banner design with LOCK from Raise A Suilen"},{url:"./src/assets/works/iyashikei.png",alt:"An infographic explaining the Iyashikei genre. Using Rin Shima from Yuru Camp as an example"}],q=[{url:"https://i.bandori.party/u/c/art/a/2081Tomoe-Udagawa-Pure-HappyHalloween-YGQxKY.png",alt:"Tomoe Udagawa"},{url:"https://i.bandori.party/u/c/art/a/2073Rinko-Shirokane-Cool-Antique-Bookstore-Tour-8vuoV5.png",alt:"Rinko Shirokane"},{url:"https://cdn.discordapp.com/attachments/699790035704217643/1026820588783812618/unknown.png",alt:"Mafuyu Asahina"},{url:"https://cdn.discordapp.com/attachments/699790035704217643/1026821713268330536/unknown.png",alt:"fire hydrant"}],T=[{id:"kmiwqzMF6F8",desc:"Fan MV for Roselia - Sanctuary with original cover",template:"yt"},{id:"Lfl2LHf-4Jw",desc:"Fan MV for a song from the NEW GAME!! series",template:"yt"},{id:"L_iHuC7Wvo8",desc:"Short fan MV for Photon Maiden - 4 Challenges",template:"yt"},{id:"HXeW1cCc_mE",desc:"Short fan MV for Afterglow - SENSENFUKOKU",template:"yt"}],A=[{id:"TADtZYJVc4k",desc:"An in depth review for the BanG Dream! series",template:"yt"},{id:"e73JIsjQffI",desc:"A video explaining why I don't really like the K-ON series that much",template:"yt"},{id:"F2pAsfzGbk8",desc:"A review  for a niche and not so normal show",template:"yt"}],E=[{id:"1246708291",template:"sc"},{id:"1148013934",template:"sc"},{id:"972780034",template:"sc"},{id:"943014580",template:"sc"},{id:"1083865651",template:"sc"}];var b,k,S,v;const m={home:{buttonID:"#bt-home",content:((b=document.querySelector("#p-home"))==null?void 0:b.innerHTML)||"page not found"},"not-home":{buttonID:"#bt-not-home",content:((k=document.querySelector("#p-not-home"))==null?void 0:k.innerHTML)||"page not found"},gallery:{buttonID:"#bt-gallery",content:((S=document.querySelector("#p-gallery"))==null?void 0:S.innerHTML)||"page not found"},contact:{buttonID:"#bt-contact",content:((v=document.querySelector("#p-contact"))==null?void 0:v.innerHTML)||"page not found"}},H=[{label:"Youtube",url:"https://www.youtube.com/channel/UCqmTTMCwW-N-v32DY-g2Glw",color:"linear-gradient(21deg, rgba(251,0,165,1) 0%, rgba(219,0,0,1) 100%);",tooltip:"My long-form reviews + more"},{label:"Twitter",url:"https://twitter.com/vlusky_husky",color:"linear-gradient(21deg, rgba(0,123,251,1) 0%, rgba(0,170,219,1) 100%);",tooltip:"Short/WIP contents + more (DM's are open)"},{label:"Artstation",url:"https://www.artstation.com/vlusky",color:"linear-gradient(21deg, rgba(0,144,251,1) 0%, rgba(76,0,168,1) 100%);",tooltip:"Design work"},{label:"Bandcamp",url:"https://vlusky.bandcamp.com/",color:"linear-gradient(21deg, rgba(79,0,251,1) 0%, rgba(219,0,218,1) 100%);",tooltip:"Download/Buy my music"},{label:"Soundcloud",url:"https://soundcloud.com/vlusky-husky",color:"linear-gradient(21deg, rgba(251,160,0,1) 0%, rgba(219,55,0,1) 100%);",tooltip:"Stream my music"},{label:"Newgrounds",url:"https://vluskyonly.newgrounds.com/audio",color:"linear-gradient(21deg, rgba(251,160,0,1) 0%, rgba(219,213,0,1) 100%)",tooltip:"Songs available for use in Geometry Dash"}],p=document.querySelector("#mock-components");p!=null&&(p.innerHTML="");function i(t){t!==a&&u!=null&&(a=t,u.innerHTML=m[a].content,u.className=a,G(m[a].buttonID))}let s=document.querySelector("#bt-home");function G(t){s!=null&&(s.className="inactive",s=document.querySelector(t),s!=null&&(s.className="active"))}function y(t,l){const n=document.querySelector(t);n!=null&&l.forEach(e=>{n.innerHTML+=`
        <div class="gallery-element">
          <img src="${e.url}" alt="${e.alt}">
          <p>${e.alt}</p>
        </div>
      `})}function d(t,l){const n=document.querySelector(t);n!==null&&l.forEach(e=>{n.innerHTML+=`
      <div class="gallery-element">
        ${L[e.template](e.id)}
        <p>${e.desc||""}</p>
      </div>
    `})}function D(t,l){const n=document.querySelector(t);n!=null&&l.forEach(e=>{n.innerHTML+=`
        <a href="${e.url||"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}"><button style="background: ${e.color}">
          <span>${e.label}</span>
          </button>
          <span class="tooltip">${e.tooltip||`a link to ${e.label}`}</span>
        </a><br>
      `})}i("home");