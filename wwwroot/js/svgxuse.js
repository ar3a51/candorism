!function(){"use strict";if("undefined"!=typeof window&&window.addEventListener){var e,t,n,w=Object.create(null),o=function(){clearTimeout(t),t=setTimeout(e,100)},v=function(){},b=function(){var e;window.addEventListener("resize",o,!1),window.addEventListener("orientationchange",o,!1),window.MutationObserver?((e=new MutationObserver(o)).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),v=function(){try{e.disconnect(),window.removeEventListener("resize",o,!1),window.removeEventListener("orientationchange",o,!1)}catch(e){}}):(document.documentElement.addEventListener("DOMSubtreeModified",o,!1),v=function(){document.documentElement.removeEventListener("DOMSubtreeModified",o,!1),window.removeEventListener("resize",o,!1),window.removeEventListener("orientationchange",o,!1)})},E=function(e){function t(e){var t;return void 0!==e.protocol?t=e:(t=document.createElement("a")).href=e,t.protocol.replace(/:/g,"")+t.host}var n,o,i;return window.XMLHttpRequest&&(n=new XMLHttpRequest,o=t(location),i=t(e),n=void 0===n.withCredentials&&""!==i&&i!==o?XDomainRequest||void 0:XMLHttpRequest),n},g="http://www.w3.org/1999/xlink";e=function(){var e,t,n,o,i,r,u,s,d,a,l=0;function c(){0===(l-=1)&&(v(),b())}function h(e){return function(){!0!==w[e.base]&&(e.useEl.setAttributeNS(g,"xlink:href","#"+e.hash),e.useEl.hasAttribute("href")&&e.useEl.setAttribute("href","#"+e.hash))}}function f(o){return function(){var e,t=document.body,n=document.createElement("x");o.onload=null,n.innerHTML=o.responseText,(e=n.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",t.insertBefore(e,t.firstChild)),c()}}function m(e){return function(){e.onerror=null,e.ontimeout=null,c()}}for(v(),d=document.getElementsByTagName("use"),i=0;i<d.length;i+=1){try{t=d[i].getBoundingClientRect()}catch(e){t=!1}e=(s=(o=d[i].getAttribute("href")||d[i].getAttributeNS(g,"href")||d[i].getAttribute("xlink:href"))&&o.split?o.split("#"):["",""])[0],n=s[1],r=t&&0===t.left&&0===t.right&&0===t.top&&0===t.bottom,t&&0===t.width&&0===t.height&&!r?(d[i].hasAttribute("href")&&d[i].setAttributeNS(g,"xlink:href",o),e.length&&(!0!==(a=w[e])&&setTimeout(h({useEl:d[i],base:e,hash:n}),0),void 0===a&&void 0!==(u=E(e))&&(a=new u,(w[e]=a).onload=f(a),a.onerror=m(a),a.ontimeout=m(a),a.open("GET",e),a.send(),l+=1))):r?e.length&&w[e]&&setTimeout(h({useEl:d[i],base:e,hash:n}),0):void 0===w[e]?w[e]=!0:w[e].onload&&(w[e].abort(),delete w[e].onload,w[e]=!0)}d="",l+=1,c()},n=function(){window.removeEventListener("load",n,!1),t=setTimeout(e,0)},"complete"!==document.readyState?window.addEventListener("load",n,!1):n()}}();