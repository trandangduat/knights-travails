(()=>{"use strict";var n={917:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=i},426:(n,e,t)=>{t.d(e,{Z:()=>x});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),s=t(917),c=t(667),l=t.n(c),d=new URL(t(892),t.b),u=new URL(t(787),t.b),p=new URL(t(832),t.b),f=new URL(t(333),t.b),b=new URL(t(312),t.b),h=i()(r());h.i(s.Z),h.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap);"]);var g=l()(d),m=l()(u),v=l()(p),w=l()(f),y=l()(b);h.push([n.id,`:root {\n  --dark-cell: #779954;\n  --bright-cell: #e9edcc;\n  --sea-color: #201729;\n  --ground-pattern: url(${g});\n  --rock-pattern: url(${m});\n  --sea-pattern: url(${v});\n  --button-pattern: url(${w});\n  --board-size: 80vh;\n  --pixel-font: 'VT323', monospace;\n  --button-font: 'Press Start 2P', cursive;\n}\n\n* {\n  image-rendering: pixelated;\n}\n\nbody {\n  font-family: var(--pixel-font);\n  background: var(--sea-pattern);\n}\n\n.btn:hover {\n  background-color: #cbcbcb;\n  box-shadow: inset \n    calc(var(--shadow-width) - 1px) \n    calc(var(--shadow-width) - 1px)\n    rgb(0 0 0 / 20%);\n}\n\n.btn:focus, .btn:active {\n  box-shadow: inset \n    calc(0px - var(--shadow-width)) \n    calc(0px - var(--shadow-width)) \n    rgb(0 0 0 / 20%);\n}\n\n.btn {\n  --border-width: 4px;\n  --shadow-width: -4px;\n  cursor: pointer;\n  font-family: var(--button-font);\n  padding: 12px 12px;\n  position: relative;\n  background: #d4d4d4;\n  display: inline-block;\n  border-top: var(--border-width) solid;\n  border-bottom: var(--border-width) solid;\n  border-color: black;\n  box-shadow: inset var(--shadow-width) var(--shadow-width) rgb(0 0 0 / 20%);\n  text-shadow: 0px 3px rgb(0 0 0 / 10%);\n}\n\n.btn::after {\n  content: "";\n  position: absolute;\n  width: 100%;\n  display: flex;\n  height: 100%;\n  border-left: var(--border-width) solid;\n  border-right: var(--border-width) solid;\n  border-color: black;\n  box-sizing: content-box;\n  left: -4px;\n  top: 0px;\n}\n\n.btn .unicode-icon {\n    margin-right: 10px;\n    position: relative;\n    top: -4px;\n}\n\n#start-game {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 999999;\n  transform: translate(-50%, -50%);\n  background-color: hsl(124.43deg 62.24% 60%);\n}\n\n#start-game:hover {\n  background-color: hsl(124.43deg 62.24% 57%);\n}\n\n#show-sp:hover {\n  background-color: hsl(183.77deg 60% 57%);\n}\n\n#show-sp {\n  background-color: hsl(183.77deg 60% 60%);\n}\n\n#undo:hover {\n    background-color: hsl(60deg 80% 45%);\n}\n#undo {\n    background-color: hsl(60deg 80% 50%);\n}\n\n#board-container {\n  display: flex;\n  aspect-ratio: 1/1;\n  flex-direction: column;\n  width: var(--board-size);\n  margin: auto;\n  position: relative;\n  background-image: var(--ground-pattern);\n  background-position: center;\n  background-size: 8%;\n  background-clip: content-box;\n  border: 20px solid transparent;\n  border-image: url(${y}) 20% round;\n  box-shadow: 10px 10px rgb(0 0 0 / 20%);\n  border-radius: 5px;\n}\n\n#board-container .row {\n  display: flex;\n}\n\n.cell.highlight::after {\n  content: "";\n  position: absolute;\n  display: flex;\n  top: 0;\n  left: 0;\n  width: 100%;\n  aspect-ratio: 1/1;\n  background: rgb(255 193 7 / 50%)!important;\n  border-radius: 10px;\n}\n\n.cell.black {\n  background-image: var(--rock-pattern);\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 1;\n}\n\n.cell {\n  aspect-ratio: 1/1;\n  flex: 1;\n  position: relative;\n}\n\n.cell > .guide-dot {\n  width: 35%;\n  aspect-ratio: 1/1;\n  background: rgb(0 0 0 / 20%);\n  display: none;\n  border-radius: 100%;\n  position: relative;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n}\n\n.piece {\n  z-index: 69;\n}\n\n.piece, #hover-border {\n  aspect-ratio: 1/1;\n  height: calc(100% / 8);\n  position: absolute;\n  cursor: -webkit-grab;\n}\n\n#hover-border {\n  pointer-events: none;\n  border: 4px solid #FFC107;\n  box-sizing: border-box;\n  z-index: 9;\n  border-radius: 8px;\n}\n\n.knight::after {\n  content: attr(data-count);\n  background: black;\n  display: block;\n  position: absolute;\n  color: white;\n  right: 0;\n  padding: 5px;\n  font-size: 1.5rem;\n  border-radius: 100%;\n  font-weight: bold;\n}\n\n.black.knight::after {\n  background: red;\n}\n\n#countdown {\n  font-family: var(--button-font);\n  flex: 1;\n}\n\n#control {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  width: var(--board-size);\n  margin: 10px auto;\n  align-items: center;\n}\n\n.disabled {\n  filter: brightness(0.5);\n  pointer-events: none;\n}\n\n#progress {\n  display: block;\n  width: max-content;\n  float: right;\n  font-size: 1.5rem;\n  padding: 5px 20px;\n}\n`,""]);const x=h},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var b=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:b,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=o(n,r),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},312:(n,e,t)=>{n.exports=t.p+"cc9c738f0f54c59013a1.png"},333:(n,e,t)=>{n.exports=t.p+"2e8b3ffabf52d103de65.png"},787:(n,e,t)=>{n.exports=t.p+"9d5fc7f41c0dd7967340.png"},892:(n,e,t)=>{n.exports=t.p+"dd788c82f9e5c2b73689.png"},832:(n,e,t)=>{n.exports=t.p+"11f804766f0ca1f1721f.png"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(426),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=i().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=d(),e()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;const h=t.p+"4a56c489a36c4713eb6d.png",g=8,m=document.querySelector("#board-container");function v(n,e,t=g){return n>=0&&e>=0&&n<t&&e<t}function w(n,e){let t=y(n,e);t.classList.contains("highlight")?t.classList.remove("highlight"):t.classList.add("highlight")}function y(n,e){return document.querySelector(`.cell[data-row="${n}"][data-col="${e}"]`)}function x(n,e){let t=(e+1)/y(0,0).offsetHeight,o=(n+1)/y(0,0).offsetWidth;return t=parseInt(t),o=parseInt(o),{row:t,col:o}}function k(n,e=0,t=0){let o=document.createElement("div");return o.classList.add("piece"),o.style.transform=`translate(${100*t}%, ${100*e}%)`,o.style.background=`url(${n})`,o.style.background+=" no-repeat center/contain",o}let L=[-2,-1,1,2,2,1,-1,-2],E=[1,2,2,1,-1,-2,-2,-1];const T=t.p+"cc79a51bdb788a0ea1e0.png",I=t.p+"be6d5fed95a82ab7b97f.png";let $={row:parseInt(Math.random()*g),col:parseInt(Math.random()*g)},S={row:parseInt(Math.random()*g),col:parseInt(Math.random()*g)};for(;Math.abs($.row-S.row)+Math.abs($.col-S.col)<=4;)S={row:parseInt(Math.random()*g),col:parseInt(Math.random()*g)};const M=function(){for(let n=0;n<g;n++){const e=document.createElement("div");e.classList.add("row"),e.setAttribute("data-index",n);for(let t=0;t<g;t++){const o=document.createElement("div");o.setAttribute("data-row",n),o.setAttribute("data-col",t),o.classList.add("cell"),(n+t)%2!=0&&o.classList.add("black"),o.innerHTML='<span class = "guide-dot"></div>',e.appendChild(o)}m.appendChild(e)}return m}(),q=[],A=function(n,e,t=g){let o={},r={};for(let n=0;n<t;n++)o[n]={},r[n]={};let a=[],i=0;for(o[n.row][n.col]=0,a.push({row:n.row,col:n.col});i<a.length;){let n=a[i];i++;for(let e=0;e<8;e++){let i=L[e]+n.row,s=E[e]+n.col;v(i,s,t)&&void 0===o[i][s]&&(o[i][s]=o[n.row][n.col]+1,r[i][s]=n,a.push({row:i,col:s}))}}let s=[],c=e.row,l=e.col;for(s.push({row:c,col:l});void 0!==r[c][l];){s.push(r[c][l]);let n=r[c][l].row,e=r[c][l].col;c=n,l=e}return s.reverse(),s.shift(),s}($,S),z=document.querySelector("#show-sp"),C=document.querySelector("#undo"),P=document.querySelector("#start-game"),R=document.querySelector("#countdown #progress"),U=document.createElement("div");U.setAttribute("id","hover-border"),U.style.visibility="hidden",M.appendChild(U);const j=k(T,S.row,S.col);j.style.pointerEvents="none";const H=function(n=0,e=0,t=!1){return k(h,n,e)}($.row,$.col);H.setAttribute("data-count","0"),H.classList.add("knight");const Z=k(I,$.row,$.col);Z.setAttribute("data-count","0"),Z.classList.add("knight"),Z.classList.add("black"),Z.style.pointerEvents="none";let F=!1,N=!1;function O(n,e,t){n.style.transform=`translate(${100*t}%, ${100*e}%)`}function _(n){N=!0,n?alert("congratz!"):alert("loser")}H.addEventListener("mousedown",(function(n){const e=n.target,t=function(){let n=e.style.transform.match(/translate\((.*?)\)/)[1].split(",");return{row:parseInt(n[1])/100,col:parseInt(n[0])/100}}(),o=function(n,e){const t=[];for(let o=0;o<L.length;o++){let r=n+L[o],a=e+E[o];v(r,a)&&t.push({row:r,col:a})}return t}(t.row,t.col),r=[];function a(n,t){e.style.transform=`translate(${100*t}%, ${100*n}%)`}function i(n){U.style.visibility="visible";let t=x(n.pageX-M.offsetLeft,n.pageY-M.offsetTop);var o,r;U.style.transform=`translate(${100*t.col}%, ${100*t.row}%)`,o=(n.pageX-M.offsetLeft-e.offsetWidth/2)/y(0,0).offsetWidth,r=(n.pageY-M.offsetTop-e.offsetHeight/2)/y(0,0).offsetHeight,e.style.transform=`translate(${100*o}%, ${100*r}%)`}w(t.row,t.col),o.forEach((n=>{let e=y(n.row,n.col).querySelector(".guide-dot");e.style.display="block",r.push(e)})),document.addEventListener("mousemove",i),e.addEventListener("mouseup",(function n(s){let c=x(s.pageX-M.offsetLeft,s.pageY-M.offsetTop);o.some((n=>n.row===c.row&&n.col===c.col))?(q.push(c),a(c.row,c.col),e.setAttribute("data-count",q.length),c.row===S.row&&c.col===S.col?setTimeout(_.bind(null,!0),100):q.length>=A.length&&setTimeout(_.bind(null,!1),100)):a(t.row,t.col),document.removeEventListener("mousemove",i),e.removeEventListener("mouseup",n),r.forEach((n=>{n.style.display="none"})),U.style.visibility="hidden",w(t.row,t.col)}))})),z.addEventListener("click",(n=>{!1===F?(M.appendChild(Z),F=!0):O(Z,$.row,$.col),Z.setAttribute("data-count",0),function(n,e){let t=0;n.style.transition="300ms";let o=setInterval((()=>{if(t==e.length)return clearInterval(o),n.style.transition="none",void console.log("done automove!");O(n,e[t].row,e[t].col),n.setAttribute("data-count",t+1),t++}),1e3)}(Z,A)})),C.addEventListener("click",(n=>{var e;e=H,0!==q.length&&(q.pop(),q.length>0?O(e,q[q.length-1].row,q[q.length-1].col):O(e,$.row,$.col),e.setAttribute("data-count",q.length))})),P.addEventListener("click",(n=>{console.log("start game"),M.appendChild(j),M.appendChild(H),document.querySelectorAll(".disabled").forEach((n=>{n.classList.remove("disabled")})),P.remove();let e=0;const t=setInterval((()=>{let n=4-parseInt(e/1e3),r=parseInt((999-e%1e3)/10);if(r<10&&(r="0"+r),R.innerText=`0${n}:${r}`,N)return console.log("already end game"),clearTimeout(o),void clearInterval(t);e+=10}),10),o=setTimeout((()=>{N||_(!1),clearTimeout(o),clearInterval(t)}),5e3)}))})()})();