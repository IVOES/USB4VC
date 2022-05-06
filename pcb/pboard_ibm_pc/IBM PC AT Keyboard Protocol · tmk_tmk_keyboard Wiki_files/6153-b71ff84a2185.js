"use strict";(()=>{var ie=Object.defineProperty;var o=(M,E)=>ie(M,"name",{value:E,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[6153],{1314:(M,E,l)=>{l.d(E,{N:()=>d,x:()=>y});var g=l(34782);let p=null;(async function(){await g.x,u()})();function d(r){y(c(r))}o(d,"announceFromElement");function y(r){!p||(p.textContent="",p.textContent=r)}o(y,"announce");function u(){p=document.createElement("div"),p.setAttribute("aria-live","polite"),p.classList.add("sr-only"),document.body.append(p)}o(u,"createNoticeContainer");function c(r){return(r.getAttribute("aria-label")||r.innerText||"").trim()}o(c,"getTextContent")},83954:(M,E,l)=>{var g=l(64463),p=l(58797);(0,g.N7)(".js-check-all-container",{constructor:HTMLElement,subscribe:p.Z})},79046:(M,E,l)=>{l.d(E,{O4:()=>O,jo:()=>H,Qp:()=>j});var g=l(70130),p=l(59753);const d="ontransitionend"in window;function y(f,b){if(!d){b();return}const x=Array.from(f.querySelectorAll(".js-transitionable"));f.classList.contains("js-transitionable")&&x.push(f);for(const w of x){const R=u(w);w instanceof HTMLElement&&(w.addEventListener("transitionend",()=>{w.style.display="",w.style.visibility="",R&&c(w,function(){w.style.height=""})},{once:!0}),w.style.boxSizing="content-box",w.style.display="block",w.style.visibility="visible",R&&c(w,function(){w.style.height=getComputedStyle(w).height}),w.offsetHeight)}b();for(const w of x)if(w instanceof HTMLElement&&u(w)){const R=getComputedStyle(w).height;w.style.boxSizing="",R==="0px"?w.style.height=`${w.scrollHeight}px`:w.style.height="0px"}}o(y,"performTransition");function u(f){return getComputedStyle(f).transitionProperty==="height"}o(u,"isTransitioningHeight");function c(f,b){f.style.transition="none",b(),f.offsetHeight,f.style.transition=""}o(c,"withoutTransition");var r=l(96776);function t(f,b){b.find(x=>{const w=f.querySelectorAll(x),R=w[w.length-1];if(R&&document.activeElement!==R)return R.focus(),!0})}o(t,"findAndFocusByQuerySelector");function n(f){t(f,[".js-focus-on-dismiss","input[autofocus], textarea[autofocus]"])}o(n,"restoreAutofocus");function s(f){!f.classList.contains("tooltipped")||(f.classList.remove("tooltipped"),f.addEventListener("mouseleave",()=>{f.classList.add("tooltipped"),f.blur()},{once:!0}))}o(s,"hideTooltip");function h(f){return[...document.querySelectorAll(".js-details-container")].filter(b=>b.getAttribute("data-details-container-group")===f)}o(h,"groupMembers");function L(f){return[...f.querySelectorAll(".js-details-target")].filter(b=>b.closest(".js-details-container")===f)}o(L,"containerTargets");function C(f,b){const x=f.getAttribute("data-details-container-group");return x?((0,r.uQ)(f,()=>{for(const w of h(x))w!==f&&T(w,b)}),x):null}o(C,"toggleGroup");function T(f,b){f.classList.toggle("open",b),f.classList.toggle("Details--on",b);for(const x of L(f))x.setAttribute("aria-expanded",b.toString())}o(T,"updateOpenState");function j(f,b){var x,w;const R=f.getAttribute("data-details-container")||".js-details-container",U=f.closest(R),N=(x=b==null?void 0:b.force)!=null?x:!U.classList.contains("open"),X=(w=b==null?void 0:b.withGroup)!=null?w:!1;y(U,()=>{T(U,N);const $=X?C(U,N):null;Promise.resolve().then(()=>{n(U),s(f),U.dispatchEvent(new CustomEvent("details:toggled",{bubbles:!0,cancelable:!1,detail:{open:N}})),$&&U.dispatchEvent(new CustomEvent("details:toggled-group",{bubbles:!0,cancelable:!1,detail:{open:N,group:$}}))})})}o(j,"toggleDetailsTarget");function H(f){const b=f.getAttribute("data-details-container")||".js-details-container",w=f.closest(b).classList;return w.contains("Details--on")||w.contains("open")}o(H,"isDetailsTargetExpanded");function P(f){const b=f.altKey,x=f.currentTarget;j(x,{withGroup:b}),f.preventDefault()}o(P,"handleDetailsTargetClick"),(0,p.on)("click",".js-details-target",P),(0,g.Z)(function({target:f}){f&&O(f)});function O(f){let b=!1,x=f.parentElement;for(;x;)x.classList.contains("Details-content--shown")&&(b=!0),x.classList.contains("js-details-container")&&(x.classList.toggle("open",!b),x.classList.toggle("Details--on",!b),b=!1),x=x.parentElement}o(O,"ensureExpanded")},64909:(M,E,l)=>{var g=l(57443),p=l(59753),d=l(1314);function y(e,i,a,_={}){var m;const v=(m=_.limit)!=null?m:1/0;let S=0;for(const D of e.children){const k=a(D,i);k==null||(k&&S<v?(S++,u(D,!0)):u(D,!1))}return S}o(y,"filterList");function u(e,i){e.style.display=i?"":"none",e.hidden=!i}o(u,"toggle");var c=l(34821),r=l(71900);const t=new WeakMap;function n(e,i,a){const _=i.toLowerCase(),m=a.limit;let v=t.get(e);const S=e.querySelector('input[type="radio"]:checked'),D=Array.from(e.children);v||(v=Array.from(e.children),t.set(e,v));for(const W of D)e.removeChild(W),W instanceof HTMLElement&&(W.style.display="");const k=_?(0,r.W)(v,a.sortKey,c.qu):v,B=m==null?k:k.slice(0,m),q=B.length,I=document.createDocumentFragment();for(const W of B)I.appendChild(W);let K=!1;if(S instanceof HTMLInputElement)for(const W of I.querySelectorAll('input[type="radio"]:checked'))W instanceof HTMLInputElement&&W.value!==S.value&&(W.checked=!1,K=!0);e.appendChild(I),S&&K&&S.dispatchEvent(new Event("change",{bubbles:!0}));const F=e.querySelectorAll(".js-divider");for(const W of F)W.classList.toggle("d-none",Boolean(_&&_.trim().length>0));return q}o(n,"filterSortList");var s=l(12020),h=l(64463),L=l(85830);let C=new AbortController;const T=new WeakMap,j=new WeakMap,H=new WeakMap;async function P(e,i,a,_){a&&!T.has(e)&&b(e);const m=await O(e,i,a,_);return e.hasAttribute("data-filterable-data-pre-rendered")&&(m.suggestions=f(e,a)),m}o(P,"getData");async function O(e,i,a,_){const m=new URL(e.getAttribute("data-filterable-src")||"",window.location.origin);if(m.pathname==="/")throw new Error("could not get data-filterable-src");if(a){const v=T.get(e),S=i.trim();if(v.lastSearchText===S)return v.lastSearchResult;const D=v.lastSearchText===void 0;v.lastSearchText=S;const k=e.getAttribute("data-filterable-for")||"",B=document.getElementById(k);if(C.abort(),S===""&&!_)v.lastSearchResult={suggestions:[],users:[]};else{C=new AbortController;const q={headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"},signal:C.signal},I=m.searchParams||new URLSearchParams;I.set("q",i),I.set("typeAhead","true"),m.search=I.toString(),D||B==null||B.classList.add("is-loading");const K=await fetch(m.toString(),q);v.lastSearchResult=await K.json()}return B==null||B.classList.remove("is-loading"),v.lastSearchResult}else{const v={headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}};return await(await fetch(m.toString(),v)).json()}}o(O,"fetchQueryIfNeeded");function f(e,i){const a=[],_=e.querySelectorAll(".js-filterable-suggested-user");if(_.length>0)for(const m of e.querySelectorAll(".js-filterable-suggested-user"))m.classList.remove("js-filterable-suggested-user"),a.push({name:m.querySelector(".js-description").textContent,login:m.querySelector(".js-username").textContent,selected:m.getAttribute("aria-checked")==="true",element:m,suggestion:!0});if(i){const m=T.get(e);return _.length>0&&(m.cachedSuggestions=a,m.userResultCache.clear()),m.cachedSuggestions}return a}o(f,"getPreRenderedUsers");function b(e){T.set(e,{lastSearchResult:{suggestions:[],users:[]},cachedSuggestions:[],userResultCache:new Map})}o(b,"initializeTypeAheadCache");async function x(e,i,a){var _,m;H.set(e,i),await(0,L.Z)();const v=e.hasAttribute("data-filterable-show-suggestion-header"),S=e.hasAttribute("data-filterable-type-ahead"),D=e.hasAttribute("data-filterable-type-ahead-query-on-empty");let k=j.get(e);if(!k)try{k=await P(e,i,S,D),S||j.set(e,k)}catch(A){if(A.name==="AbortError")return-1;throw A}if(!S&&H.get(e)!==i)return-1;const B=a.limit,q=e.querySelector("template"),I={};for(const A of e.querySelectorAll("input[type=hidden]"))I[`${A.name}${A.value}`]=A;let K=q.nextElementSibling;for(;K;){const A=K;K=A.nextElementSibling,A instanceof HTMLElement&&(S||A.getAttribute("aria-checked")==="true"||A.classList.contains("select-menu-divider"))?A.hidden=!0:A.remove()}let F=0;const W=i.trim()==="",G=document.createDocumentFragment(),Z=e.querySelector(".js-divider-suggestions"),J=e.querySelector(".js-divider-rest"),oe=T.get(e);function Y(A){const te=`${A.login} ${A.name}`.toLowerCase().trim().includes(i),Q=!(B!=null&&F>=B)&&te;if(Q||A.selected||A.suggestion){const z=w(A,q,I,oe);z.hidden=!Q,Q&&F++,G.appendChild(z)}}o(Y,"addItem");let ee=!1;if(Z&&(((_=k.suggestions)==null?void 0:_.length)>0||v&&k.users.length>0)){const A=(m=k.suggestions)!=null?m:[],te=A.filter(z=>z.selected),Q=A.filter(z=>!z.selected);for(const z of te)Y(z);G.appendChild(Z);const ne=F;for(const z of Q)Y(z);ee=F>ne,Z.hidden=!ee||S&&!W,v&&k.users.length>0&&(Z.hidden=!W)}J&&G.appendChild(J);const se=F;for(const A of k.users)Y(A);return J&&(J.hidden=se===F||!ee),e.append(G),F}o(x,"substringMemoryFilterList");function w(e,i,a,_){if(e.element!=null)return e.element;if(_==null?void 0:_.userResultCache.has(e.id))return _.userResultCache.get(e.id);const m=i.content.cloneNode(!0),v=m.querySelector("input[type=checkbox], input[type=radio]");e.type&&(v.name=`reviewer_${e.type}_ids[]`),v.value=e.id;const S=`${v.name}${e.id}`;let D=e.selected;a[S]&&(D=!0,a[S].remove(),delete a[S]);const k=m.querySelector("[role^=menuitem]");D&&(k.setAttribute("aria-checked","true"),v.checked=!0),e.disabled&&k.setAttribute("aria-disabled","true");const B=m.querySelector(".js-username");B&&(B.textContent=e.login);const q=m.querySelector(".js-description");q&&(q.textContent=e.name);const I=m.querySelector(".js-extended-description");I&&(e.description?I.textContent=e.description:I.remove());const K=m.querySelector(".js-avatar");return K.className=`${K.className} ${e.class}`,K.src=e.avatar,e.element=k,_==null||_.userResultCache.set(e.id,k),e.element}o(w,"createReviewerItem"),(0,h.N7)(".js-filterable-field",{constructor:HTMLInputElement,initialize(e){e.autocomplete||(e.autocomplete="off");const i=e.hasAttribute("type-ahead")?200:null;let a=e.value;async function _(v){a!==v.value&&(a=v.value,await(0,s.gJ)(),(0,p.f)(v,"filterable:change"))}o(_,"onInputChange");async function m(){a=e.value,await(0,s.gJ)(),(0,p.f)(e,"filterable:change")}return o(m,"onFocus"),{add(v){v.addEventListener("focus",m),(0,g.oq)(v,_,{wait:i}),document.activeElement===v&&m()},remove(v){v.removeEventListener("focus",m),(0,g.iU)(v,_)}}}}),(0,p.on)("filterable:change",".js-filterable-field",async function(e){const i=e.currentTarget,a=i.value.trim().toLowerCase(),_=document.querySelectorAll(`[data-filterable-for="${i.id}"]`);for(const m of _){const v=await U(m,a);if(v===-1)return;document.activeElement&&i===document.activeElement&&(0,d.x)(`${v} results found.`),m.dispatchEvent(new CustomEvent("filterable:change",{bubbles:!0,cancelable:!1,detail:{inputField:i}}))}});function R(e){return e.hasAttribute("data-filter-value")?e.getAttribute("data-filter-value").toLowerCase().trim():e.textContent.toLowerCase().trim()}o(R,"defaultText");async function U(e,i){const a=parseInt(e.getAttribute("data-filterable-limit"),10)||null;let _=0;switch(e.getAttribute("data-filterable-type")){case"fuzzy":{const m=i.toLowerCase();_=n(e,i,{limit:a,sortKey:o(S=>{const D=R(S),k=(0,c.EW)(D,m);return k>0?{score:k,text:D}:null},"sortKey")});break}case"substring":_=y(e,i.toLowerCase(),X,{limit:a});break;case"substring-memory":_=await x(e,i,{limit:a});break;default:_=y(e,i.toLowerCase(),N,{limit:a});break}return e.classList.toggle("filterable-active",i.length>0),e.classList.toggle("filterable-empty",_===0),_}o(U,"filter");function N(e,i){return e.textContent.toLowerCase().trim().startsWith(i)}o(N,"prefix");function X(e,i){return e.hasAttribute("data-skip-substring-filter")||e.classList.contains("select-menu-no-results")?null:(e.querySelector("[data-filterable-item-text]")||e).textContent.toLowerCase().trim().includes(i)}o(X,"substring"),(0,p.on)("filterable:change","details-menu .select-menu-list",function(e){const i=e.currentTarget,a=i.querySelector(".js-new-item-form");a&&$(i,a,e.detail.inputField.value)});function $(e,i,a){const _=a.length>0&&!V(e,a);if(e.classList.toggle("is-showing-new-item-form",_),!_)return;i.querySelector(".js-new-item-name").textContent=a;const m=i.querySelector(".js-new-item-value");(m instanceof HTMLInputElement||m instanceof HTMLButtonElement)&&(m.value=a)}o($,"toggleForm");function V(e,i){for(const a of e.querySelectorAll("[data-menu-button-text]"))if(a.textContent.toLowerCase().trim()===i.toLowerCase())return!0;return!1}o(V,"itemExists"),(0,h.N7)("tab-container .select-menu-list .filterable-empty, details-menu .select-menu-list .filterable-empty",{add(e){e.closest(".select-menu-list").classList.add("filterable-empty")},remove(e){e.closest(".select-menu-list").classList.remove("filterable-empty")}})},11997:(M,E,l)=>{var g=l(59753);(0,g.on)("click",".js-flash-close",function(p){const d=p.currentTarget.closest(".flash-messages");p.currentTarget.closest(".flash").remove(),d&&!d.querySelector(".flash")&&d.remove()})},70130:(M,E,l)=>{l.d(E,{Z:()=>y});var g=l(34782);const p=[];let d=0;function y(n){(async function(){p.push(n),await g.x,u()})()}o(y,"hashChange"),y.clear=()=>{p.length=d=0};function u(){const n=d;d=p.length,c(p.slice(n),null,window.location.href)}o(u,"runRemainingHandlers");function c(n,s,h){const L=window.location.hash.slice(1),C=L?document.getElementById(L):null,T={oldURL:s,newURL:h,target:C};for(const j of n)j.call(null,T)}o(c,"runHandlers");let r=window.location.href;window.addEventListener("popstate",function(){r=window.location.href}),window.addEventListener("hashchange",function(n){const s=window.location.href;try{c(p,n.oldURL||r,s)}finally{r=s}});let t=null;document.addEventListener("pjax:start",function(){t=window.location.href}),document.addEventListener("pjax:end",function(){c(p,t,window.location.href)})},42474:(M,E,l)=>{l.d(E,{h:()=>p});var g=l(59753);(0,g.on)("click",".js-skip-to-content",function(t){const n=document.getElementById("start-of-content");if(n){const s=n.nextElementSibling;s instanceof HTMLElement&&(s.setAttribute("tabindex","-1"),s.setAttribute("data-skipped-to-content","1"),s.focus())}t.preventDefault()});function p(){let t=!1;const n=document.getElementById("start-of-content");if(n){const s=n.nextElementSibling;if(s instanceof HTMLElement)return t=s.getAttribute("data-skipped-to-content")==="1",t&&s.removeAttribute("data-skipped-to-content"),t}}o(p,"hasSkippedToContent");const d="ontouchstart"in document;function y(){return window.innerWidth>1012}o(y,"compatibleDesktop");for(const t of document.querySelectorAll(".HeaderMenu-details"))t.addEventListener("toggle",c),d||(t.addEventListener("mouseover",r),t.addEventListener("mouseleave",r));let u=!1;function c(t){if(!u){u=!0;for(const n of document.querySelectorAll(".HeaderMenu-details"))n!==t.currentTarget&&n.removeAttribute("open");setTimeout(()=>u=!1)}}o(c,"onMenuToggle");function r(t){const{currentTarget:n}=t;!(n instanceof HTMLElement)||!y()||(t.type==="mouseover"&&t instanceof MouseEvent?t.target instanceof Node&&t.relatedTarget instanceof Node&&n.contains(t.target)&&!n.contains(t.relatedTarget)&&n.setAttribute("open",""):n.removeAttribute("open"))}o(r,"onMenuHover")},25522:(M,E,l)=>{var g=l(82453),p=l(11793),d=l(64463);(0,d.N7)("[data-hotkey]",{constructor:HTMLElement,add(u){if((0,g.Ty)())(0,p.N9)(u);else{const c=u.getAttribute("data-hotkey");if(c){const r=y(c);r.length>0&&(u.setAttribute("data-hotkey",r),(0,p.N9)(u))}}},remove(u){(0,p.Tz)(u)}});function y(u){return u.split(",").filter(r=>(0,g.YE)(r)).join(",")}o(y,"filterOutCharacterKeyShortcuts")},76006:(M,E,l)=>{function g(u){const c=u.createElement("textarea");return c.style.position="fixed",c.style.top="0",c.style.left="0",c.style.opacity="0",u.body.appendChild(c),c.focus(),()=>(c.blur(),c.remove(),c.value)}o(g,"captureKeypresses");var p=l(82036),d=l(59753);let y=null;(0,d.on)("pjax:click",".js-pjax-capture-input",function(){y=g(document)}),(0,d.on)("pjax:end","#js-repo-pjax-container",function(){if(y){const u=y(),c=document.querySelector(".js-pjax-restore-captured-input");c instanceof HTMLInputElement&&u&&(0,p.Se)(c,u),y=null}})},7796:(M,E,l)=>{var g=l(40728),p=l(59753);(0,p.on)("pjax:click",".js-pjax-history-navigate",function(d){d.currentTarget instanceof HTMLAnchorElement&&(d.currentTarget.href===(0,g._C)()?(history.back(),d.detail.relatedEvent.preventDefault(),d.preventDefault()):d.currentTarget.href===(0,g.Mw)()&&(history.forward(),d.detail.relatedEvent.preventDefault(),d.preventDefault()))})},15528:(M,E,l)=>{var g=l(82762),p=l(64463);function d(u){if(u.id)return`#${u.id}`;throw new Error("pjax container has no id")}o(d,"getContainerSelector");function y(u,c){const r=(0,g.W)(u),t=d(r),n=new URL(u.href,window.location.origin),s=new URLSearchParams(n.search.slice(1));return n.search=s.toString(),fetch(n.href,{headers:Object.assign({Accept:"text/html","X-PJAX":"true","X-PJAX-Container":t,"X-Requested-With":"XMLHttpRequest"},c&&c.headers)})}o(y,"pjaxFetch"),(0,p.N7)("[data-pjax-container] link[rel=pjax-prefetch]",{constructor:HTMLLinkElement,initialize(u){y(u,{headers:{Purpose:"prefetch"}})}})},82762:(M,E,l)=>{l.d(E,{W:()=>p,r:()=>g});function g(d){return d.getAttribute("data-pjax-preserve-scroll")!=null?!1:0}o(g,"preserveScrollTo");function p(d){let y=d;for(;y;){const u=y.getAttribute("data-pjax");if(u&&u!=="true")return document.querySelector(u);y=y.parentElement&&y.parentElement.closest("[data-pjax]")}return d.closest("[data-pjax-container]")}o(p,"detectContainer")},53488:(M,E,l)=>{var g=l(14037),p=l(59753);(0,p.on)("click",".js-smoothscroll-anchor",function(d){const y=d.currentTarget;if(!(y instanceof HTMLAnchorElement))return;const u=(0,g.Kt)(document,y.hash);!u||(u.scrollIntoView({behavior:"smooth"}),d.preventDefault())})},44030:(M,E,l)=>{l.d(E,{H:()=>L});var g=l(42474),p=l(34782),d=l(64463);let y=0;function u(){return y}o(u,"getBaseStickyHeaderHeight");function c(e){y=e,e?document.body.style.setProperty("--base-sticky-header-height",`${e}px`):document.body.style.removeProperty("--base-sticky-header-height")}o(c,"setBaseStickyHeaderHeight");let r=!1;const t=[];function n(){t.length?s():h()}o(n,"manageObservers");function s(){r||(window.addEventListener("resize",C),document.addEventListener("scroll",C),r=!0)}o(s,"addObservers");function h(){window.removeEventListener("resize",C),document.removeEventListener("scroll",C),r=!1}o(h,"removeObservers");function L(){T(!0)}o(L,"forceStickyRelayout");function C(){T()}o(C,"checkElementsForStickingHandler");function T(e=!1){for(const i of t)if(i.element.offsetHeight>0){const{element:a,placeholder:_,top:m}=i,v=a.getBoundingClientRect();if(_){const S=_.getBoundingClientRect();a.classList.contains("is-stuck")?S.top>$(a,m)?P(i):O(i):v.top<=$(a,m)?H(i):e&&O(i)}else v.top-$(a,m)<.1?H(i):P(i)}}o(T,"checkElementsForSticking");function j(e){const{position:i}=window.getComputedStyle(e);return/sticky/.test(i)}o(j,"browserHasSticky");function H({element:e,placeholder:i,top:a}){if(i){const _=e.getBoundingClientRect();V(e,$(e,a)),e.style.left=`${_.left}px`,e.style.width=`${_.width}px`,e.style.marginTop="0",e.style.position="fixed",i.style.display="block"}e.classList.add("is-stuck")}o(H,"pinSet");function P({element:e,placeholder:i}){i&&(e.style.position="static",e.style.marginTop=i.style.marginTop,i.style.display="none"),e.classList.remove("is-stuck")}o(P,"unpinSet");function O({element:e,placeholder:i,offsetParent:a,top:_}){if(i&&!(0,g.h)()){const m=e.getBoundingClientRect(),v=i.getBoundingClientRect();if(V(e,$(e,_)),e.style.left=`${v.left}px`,e.style.width=`${v.width}px`,a){const S=a.getBoundingClientRect();S.bottom<m.height+parseInt(String(_))&&(e.style.top=`${S.bottom-m.height}px`)}}}o(O,"updatePinnedSet");function f(e){if(j(e))return null;const i=e.previousElementSibling;if(i&&i.classList.contains("is-placeholder"))return i;const a=document.createElement("div");return a.style.visibility="hidden",a.style.display="none",a.style.height=window.getComputedStyle(e).height,a.className=e.className,a.classList.remove("js-sticky"),a.classList.add("is-placeholder"),e.parentNode.insertBefore(a,e)}o(f,"findOrCreatePlaceholder");function b(e){const i=f(e),a=window.getComputedStyle(e).position;e.style.position="static";const _=e.offsetParent;e.style.position="fixed";const m=X(e),v={element:e,placeholder:i,offsetParent:_,top:m==="auto"?0:parseInt(m||"0")};e.style.position=a,t.push(v)}o(b,"createSet");function x(e){const i=t.map(a=>a.element).indexOf(e);t.splice(i,1)}o(x,"removeSet");async function w(e){await p.C,b(e),T(),n()}o(w,"initializeSet"),(0,d.N7)(".js-sticky",{constructor:HTMLElement,add(e){w(e)},remove(e){x(e),n()}}),(0,d.N7)(".js-notification-top-shelf",{constructor:HTMLElement,add(e){R(e)},remove(){for(const e of document.querySelectorAll(".js-notification-top-shelf"))e.remove();u()>0&&(c(0),U(),L())}}),(0,d.N7)(".js-notification-shelf-offset-top, .js-position-sticky",{constructor:HTMLElement,add:N});async function R(e){if(e.offsetParent===null)return;await p.C;const i=Math.floor(e.getBoundingClientRect().height);i>0&&(c(i),U(),L())}o(R,"initializeNotificationShelf");function U(){for(const e of document.querySelectorAll(".js-position-sticky, .js-notification-shelf-offset-top"))N(e)}o(U,"updateTopOffsets");function N(e){if(e.classList.contains("js-notification-top-shelf"))return;const i=parseInt(X(e))||0;V(e,i+u())}o(N,"updateTopOffset");function X(e){const i=e.getAttribute("data-original-top");if(i!=null)return i;const a=window.getComputedStyle(e).top;return e.setAttribute("data-original-top",a),a}o(X,"getOriginalTop");function $(e,i){return e.classList.contains("js-notification-top-shelf")?i:i+u()}o($,"withShelfOffset");function V(e,i){e.style.setProperty("top",`${i}px`,"important")}o(V,"setTopImportant")},86276:(M,E,l)=>{l.d(E,{VZ:()=>p,_C:()=>d,cv:()=>g,oE:()=>y});function g(r){const t=r.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}}o(g,"offset");function p(r){let t=r;const n=t.ownerDocument;if(!n||!t.offsetParent)return;const s=n.defaultView.HTMLElement;if(t!==n.body){for(;t!==n.body;){if(t.parentElement instanceof s)t=t.parentElement;else return;const{position:h,overflowY:L,overflowX:C}=getComputedStyle(t);if(h==="fixed"||L==="auto"||C==="auto"||L==="scroll"||C==="scroll")break}return t instanceof Document?null:t}}o(p,"overflowParent");function d(r,t){let n=t;const s=r.ownerDocument;if(!s)return;const h=s.documentElement;if(!h||r===h)return;const L=y(r,n);if(!L)return;n=L._container;const C=n===s.documentElement&&s.defaultView?{top:s.defaultView.pageYOffset,left:s.defaultView.pageXOffset}:{top:n.scrollTop,left:n.scrollLeft},T=L.top-C.top,j=L.left-C.left,H=n.clientHeight,P=n.clientWidth,O=H-(T+r.offsetHeight),f=P-(j+r.offsetWidth);return{top:T,left:j,bottom:O,right:f,height:H,width:P}}o(d,"overflowOffset");function y(r,t){let n=r;const s=n.ownerDocument;if(!s)return;const h=s.documentElement;if(!h)return;const L=s.defaultView.HTMLElement;let C=0,T=0;const j=n.offsetHeight,H=n.offsetWidth;for(;!(n===s.body||n===t);)if(C+=n.offsetTop||0,T+=n.offsetLeft||0,n.offsetParent instanceof L)n=n.offsetParent;else return;let P,O,f;if(!t||t===s||t===s.defaultView||t===s.documentElement||t===s.body)f=h,P=u(s.body,h),O=c(s.body,h);else if(t instanceof L)f=t,P=t.scrollHeight,O=t.scrollWidth;else return;const b=P-(C+j),x=O-(T+H);return{top:C,left:T,bottom:b,right:x,_container:f}}o(y,"positionedOffset");function u(r,t){return Math.max(r.scrollHeight,t.scrollHeight,r.offsetHeight,t.offsetHeight,t.clientHeight)}o(u,"getDocumentHeight");function c(r,t){return Math.max(r.scrollWidth,t.scrollWidth,r.offsetWidth,t.offsetWidth,t.clientWidth)}o(c,"getDocumentWidth")},12020:(M,E,l)=>{l.d(E,{Dc:()=>y,g:()=>c,gJ:()=>g,rs:()=>p});function g(){return Promise.resolve()}o(g,"microtask");function p(){return new Promise(window.requestAnimationFrame)}o(p,"animationFrame");async function d(r,t){let n;const s=new Promise((h,L)=>{n=self.setTimeout(()=>L(new Error("timeout")),r)});if(!t)return s;try{await Promise.race([s,u(t)])}catch(h){throw self.clearTimeout(n),h}}o(d,"timeout");async function y(r,t){let n;const s=new Promise(h=>{n=self.setTimeout(h,r)});if(!t)return s;try{await Promise.race([s,u(t)])}catch(h){throw self.clearTimeout(n),h}}o(y,"wait");function u(r){return new Promise((t,n)=>{const s=new Error("aborted");s.name="AbortError",r.aborted?n(s):r.addEventListener("abort",()=>n(s))})}o(u,"whenAborted");function c(r){const t=[];return function(n){t.push(n),t.length===1&&queueMicrotask(()=>{const s=[...t];t.length=0,r(s)})}}o(c,"taskQueue")},71900:(M,E,l)=>{l.d(E,{W:()=>p});function*g(d,y){for(const u of d){const c=y(u);c!=null&&(yield c)}}o(g,"filterMap");function p(d,y,u){return[...g(d,o(r=>{const t=y(r);return t!=null?[r,t]:null},"sortKey"))].sort((r,t)=>u(r[1],t[1])).map(([r])=>r)}o(p,"filterSort")},34821:(M,E,l)=>{l.d(E,{EW:()=>g,Qw:()=>d,qu:()=>u});function g(c,r){let t=y(c,r);if(t&&r.indexOf("/")===-1){const n=c.substring(c.lastIndexOf("/")+1);t+=y(n,r)}return t}o(g,"fuzzyScore");function p(c){const r=c.toLowerCase().split("");let t="";for(let n=0;n<r.length;n++){const h=r[n].replace(/[\\^$*+?.()|[\]{}]/g,"\\$&");n===0?t+=`(.*)(${h})`:t+=`([^${h}]*?)(${h})`}return new RegExp(`${t}(.*?)$`,"i")}o(p,"fuzzyRegexp");function d(c,r,t){if(r){const n=c.innerHTML.trim().match(t||p(r));if(!n)return;let s=!1;const h=[];for(let L=1;L<n.length;++L){const C=n[L];!C||(L%2===0?s||(h.push("<mark>"),s=!0):s&&(h.push("</mark>"),s=!1),h.push(C))}c.innerHTML=h.join("")}else{const n=c.innerHTML.trim(),s=n.replace(/<\/?mark>/g,"");n!==s&&(c.innerHTML=s)}}o(d,"fuzzyHighlightElement");function y(c,r){let t=c;if(t===r)return 1;const n=t.length;let s=0,h=0;for(let j=0;j<r.length;j++){const H=r[j],P=t.indexOf(H.toLowerCase()),O=t.indexOf(H.toUpperCase()),f=Math.min(P,O),b=f>-1?f:Math.max(P,O);if(b===-1)return 0;s+=.1,t[b]===H&&(s+=.1),b===0&&(s+=.8,j===0&&(h=1)),t.charAt(b-1)===" "&&(s+=.8),t=t.substring(b+1,n)}const L=r.length,C=s/L;let T=(C*(L/n)+C)/2;return h&&T+.1<1&&(T+=.1),T}o(y,"stringScore");function u(c,r){return c.score>r.score?-1:c.score<r.score?1:c.text<r.text?-1:c.text>r.text?1:0}o(u,"compare")},57443:(M,E,l)=>{l.d(E,{dY:()=>t,iU:()=>r,oq:()=>c});const g=new WeakMap;function p(n){const s=g.get(n);!s||(s.timer!=null&&clearTimeout(s.timer),s.timer=window.setTimeout(()=>{s.timer!=null&&(s.timer=null),s.inputed=!1,s.listener.call(null,n)},s.wait))}o(p,"schedule");function d(n){const s=n.currentTarget,h=g.get(s);!h||(h.keypressed=!0,h.timer!=null&&clearTimeout(h.timer))}o(d,"onKeydownInput");function y(n){const s=n.currentTarget,h=g.get(s);!h||(h.keypressed=!1,h.inputed&&p(s))}o(y,"onKeyupInput");function u(n){const s=n.currentTarget,h=g.get(s);!h||(h.inputed=!0,h.keypressed||p(s))}o(u,"onInputInput");function c(n,s,h={wait:null}){g.set(n,{keypressed:!1,inputed:!1,timer:void 0,listener:s,wait:h.wait!=null?h.wait:100}),n.addEventListener("keydown",d),n.addEventListener("keyup",y),n.addEventListener("input",u)}o(c,"addThrottledInputEventListener");function r(n,s){n.removeEventListener("keydown",d),n.removeEventListener("keyup",y),n.removeEventListener("input",u);const h=g.get(n);h&&(h.timer!=null&&h.listener===s&&clearTimeout(h.timer),g.delete(n))}o(r,"removeThrottledInputEventListener");function t(n){const s=g.get(n);s&&s.listener.call(null,n)}o(t,"dispatchThrottledInputEvent")},12585:(M,E,l)=>{l.d(E,{Z:()=>p});function g(d){return d.offsetWidth<=0&&d.offsetHeight<=0}o(g,"hidden");function p(d){return!g(d)}o(p,"visible")}}]);})();

//# sourceMappingURL=6153-6bc60d79608c.js.map