/*! (c) Andrea Giammarchi - ISC */
var createContent=function(n){"use strict";var i="fragment",c="template",e="content"in l(c)?function(t){var n=l(c);return n.innerHTML=t,n.content}:function(t){var n=l(i),e=l(c),r=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var o=RegExp.$1;e.innerHTML="<table>"+t+"</table>",r=e.querySelectorAll(o)}else e.innerHTML=t,r=e.childNodes;return u(n,r),n};return function(t,n){return("svg"===n?function(t){var n=l(i),e=l("div");return e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t+"</svg>",u(n,e.firstChild.childNodes),n}:e)(t)};function u(t,n){for(var e=n.length;e--;)t.appendChild(n[0])}function l(t){return t===i?n.createDocumentFragment():n.createElementNS("http://www.w3.org/1999/xhtml",t)}}(document);