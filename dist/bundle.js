(()=>{"use strict";var e={917:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=i},426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),i=n.n(a),s=n(917),l=i()(r());l.i(s.Z),l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap);"]),l.push([e.id,":root {\n  --dark-cell: #779954;\n  --bright-cell: #e9edcc;\n  --highlight-cell: rgb(205 191 0 / 62%); \n  --board-size: 90vh;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n}\n\n#board-container {\n  display: flex;\n  aspect-ratio: 1/1;\n  flex-direction: column;\n  width: var(--board-size);\n  margin: auto;\n  position: relative;\n}\n\n#board-container .row {\n  display: flex;\n}\n\n.cell.highlight {\n  background: var(--highlight-cell)!important;\n}\n\n.cell.black {\n  background: var(--dark-cell);\n}\n\n.cell {\n  aspect-ratio: 1/1;\n  flex: 1;\n  background: var(--bright-cell);\n  position: relative;\n  /* border: 4px solid; */\n  /* border-color: transparent; */\n}\n\n.cell > .guide-dot {\n  width: 35%;\n  aspect-ratio: 1/1;\n  background: rgb(0 0 0 / 10%);\n  display: none;\n  border-radius: 100%;\n  position: relative;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n}\n\n.piece {\n  z-index: 69;\n}\n\n.piece, #hover-border {\n  aspect-ratio: 1/1;\n  height: calc(100% / 8);\n  position: absolute;\n  cursor: -webkit-grab;\n}\n\n#hover-border {\n  pointer-events: none;\n  border: 4px solid rgb(255 255 255 / 70%);\n  box-sizing: border-box;\n  /* box-shadow: 2px 2px 100px rgb(255 255 255 / 40%); */\n}\n\n.knight::after {\n  content: attr(data-count);\n  background: black;\n  display: block;\n  position: absolute;\n  color: white;\n  right: 0;\n  padding: 5px;\n  font-size: 1.5rem;\n  border-radius: 100%;\n  font-weight: bold;\n}\n\n.black.knight::after {\n  background: red;\n}\n\n#countdown {\n  width: 100px;\n  height: 50px;\n  border: 1px solid;\n  overflow: hidden;\n}\n\n#countdown #progress {\n  height: 100%;\n  transition: 100ms;\n  background: green;\n}\n",""]);const c=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var l=e[s],c=o.base?l[0]+o.base:l[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var p=n(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=r(f,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var l=o(e,r),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),s=n(565),l=n.n(s),c=n(216),d=n.n(c),u=n(589),p=n.n(u),f=n(426),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const b=n.p+"4a56c489a36c4713eb6d.png",g=8,m=document.querySelector("#board-container");function v(e,t,n=g){return e>=0&&t>=0&&e<n&&t<n}function y(e,t){let n=w(e,t);n.classList.contains("highlight")?n.classList.remove("highlight"):n.classList.add("highlight")}function w(e,t){return document.querySelector(`.cell[data-row="${e}"][data-col="${t}"]`)}function k(e,t){let n=(t+1)/w(0,0).offsetHeight,o=(e+1)/w(0,0).offsetWidth;return n=parseInt(n),o=parseInt(o),{row:n,col:o}}function x(e,t=0,n=0){let o=document.createElement("div");return o.classList.add("piece"),o.style.transform=`translate(${100*n}%, ${100*t}%)`,o.style.background=`url(${e})`,o.style.background+=" no-repeat center/contain",o}let L=[-2,-1,1,2,2,1,-1,-2],E=[1,2,2,1,-1,-2,-2,-1];const T=n.p+"ecec358f22dc82146b6c.png",I=n.p+"be6d5fed95a82ab7b97f.png";let M={row:parseInt(Math.random()*g),col:parseInt(Math.random()*g)},q={row:parseInt(Math.random()*g),col:parseInt(Math.random()*g)};for(;Math.abs(M.row-q.row)+Math.abs(M.col-q.col)<=4;)q={row:parseInt(Math.random()*g),col:parseInt(Math.random()*g)};const S=function(){for(let e=0;e<g;e++){const t=document.createElement("div");t.classList.add("row"),t.setAttribute("data-index",e);for(let n=0;n<g;n++){const o=document.createElement("div");o.setAttribute("data-row",e),o.setAttribute("data-col",n),o.classList.add("cell"),(e+n)%2!=0&&o.classList.add("black"),o.innerHTML='<span class = "guide-dot"></div>',t.appendChild(o)}m.appendChild(t)}return m}(),A=[],$=function(e,t,n=g){let o={},r={};for(let e=0;e<n;e++)o[e]={},r[e]={};let a=[],i=0;for(o[e.row][e.col]=0,a.push({row:e.row,col:e.col});i<a.length;){let e=a[i];i++;for(let t=0;t<8;t++){let i=L[t]+e.row,s=E[t]+e.col;v(i,s,n)&&void 0===o[i][s]&&(o[i][s]=o[e.row][e.col]+1,r[i][s]=e,a.push({row:i,col:s}))}}let s=[],l=t.row,c=t.col;for(s.push({row:l,col:c});void 0!==r[l][c];){s.push(r[l][c]);let e=r[l][c].row,t=r[l][c].col;l=e,c=t}return s.reverse(),s.shift(),s}(M,q),C=document.querySelector("#show-sp"),z=document.querySelector("#undo"),j=document.querySelector("#start-game"),H=document.querySelector("#countdown #progress"),P=document.createElement("div");P.setAttribute("id","hover-border"),P.style.visibility="hidden",S.appendChild(P);const Z=x(T,q.row,q.col);Z.style.pointerEvents="none";const N=function(e=0,t=0,n=!1){return x(b,e,t)}(M.row,M.col);N.setAttribute("data-count","0"),N.classList.add("knight");const O=x(I,M.row,M.col);O.setAttribute("data-count","0"),O.classList.add("knight"),O.classList.add("black"),O.style.pointerEvents="none";let F=!1,W=!1;function X(e,t,n){e.style.transform=`translate(${100*n}%, ${100*t}%)`}function Y(e){W=!0,e?alert("congratz!"):alert("loser")}S.appendChild(Z),S.appendChild(N),N.addEventListener("mousedown",(function(e){const t=e.target,n=function(){let e=t.style.transform.match(/translate\((.*?)\)/)[1].split(",");return{row:parseInt(e[1])/100,col:parseInt(e[0])/100}}(),o=function(e,t){const n=[];for(let o=0;o<L.length;o++){let r=e+L[o],a=t+E[o];v(r,a)&&n.push({row:r,col:a})}return n}(n.row,n.col),r=[];function a(e,n){t.style.transform=`translate(${100*n}%, ${100*e}%)`}function i(e){P.style.visibility="visible";let n=k(e.pageX-S.offsetLeft,e.pageY-S.offsetTop);var o,r;P.style.transform=`translate(${100*n.col}%, ${100*n.row}%)`,o=(e.pageX-S.offsetLeft-t.offsetWidth/2)/w(0,0).offsetWidth,r=(e.pageY-S.offsetTop-t.offsetHeight/2)/w(0,0).offsetHeight,t.style.transform=`translate(${100*o}%, ${100*r}%)`}y(n.row,n.col),o.forEach((e=>{let t=w(e.row,e.col).querySelector(".guide-dot");t.style.display="block",r.push(t)})),document.addEventListener("mousemove",i),t.addEventListener("mouseup",(function e(s){let l=k(s.pageX-S.offsetLeft,s.pageY-S.offsetTop);o.some((e=>e.row===l.row&&e.col===l.col))?(A.push(l),a(l.row,l.col),t.setAttribute("data-count",A.length),l.row===q.row&&l.col===q.col?(setTimeout(Y.bind(null,!0),100),clearTimeout()):A.length>=$.length&&(setTimeout(Y.bind(null,!1),100),clearTimeout())):a(n.row,n.col),document.removeEventListener("mousemove",i),t.removeEventListener("mouseup",e),r.forEach((e=>{e.style.display="none"})),P.style.visibility="hidden",y(n.row,n.col)}))})),C.addEventListener("click",(e=>{!1===F?(S.appendChild(O),F=!0):X(O,M.row,M.col),O.setAttribute("data-count",0),function(e,t){let n=0,o=setInterval((()=>{if(n==t.length)return clearInterval(o),e.style.transition="none",void console.log("done automove!");X(e,t[n].row,t[n].col),e.setAttribute("data-count",n+1),n++}),1e3)}(O,$)})),z.addEventListener("click",(e=>{var t;t=N,0!==A.length&&(A.pop(),A.length>0?X(t,A[A.length-1].row,A[A.length-1].col):X(t,M.row,M.col),t.setAttribute("data-count",A.length))})),j.addEventListener("click",(e=>{console.log("start countDown");let t=0;const n=setInterval((()=>{t%1e3==0&&console.log(t/1e3+" seconds"),W&&(console.log("already end game"),clearTimeout(o),clearInterval(n)),t+=100,H.style.width=t/50+"%"}),100),o=setTimeout((()=>{W||Y(!1),clearTimeout(o),clearInterval(n)}),5e3)}))})()})();