var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},l=e.parcelRequire7bc7;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in n){var l=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,l.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=l);var i=l("iQIUW");document.querySelector("button");const r=document.querySelector(".form");r.addEventListener("submit",(e=>{e.preventDefault();const t=Number(r.firstElementChild.firstElementChild.value),n=Number(r.firstElementChild.nextElementSibling.firstElementChild.value),l=Number(r.lastElementChild.previousElementSibling.firstElementChild.value);let o=t,s=1;setTimeout((()=>{const e=setInterval((()=>{(function(e,t){const n=Math.random()>.3;return new Promise(((l,i)=>{n?l(`✅ Fulfilled promise ${e} in ${t}ms`):i(`❌ Rejected promise ${e} in ${t}ms`)}))})(s,o).then((e=>i.Notify.success(e))).catch((e=>i.Notify.failure(e))).finally((()=>{o+=n,s++})),s===l&&clearInterval(e)}),n)}),t)}));
//# sourceMappingURL=03-promises.71afcabc.js.map
