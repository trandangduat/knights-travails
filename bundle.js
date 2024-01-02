(()=>{"use strict";var n={917:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=i},426:(n,e,t)=>{t.d(e,{Z:()=>x});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),s=t(917),l=t(667),c=t.n(l),d=new URL(t(892),t.b),p=new URL(t(787),t.b),u=new URL(t(832),t.b),f=new URL(t(333),t.b),b=new URL(t(312),t.b),h=i()(r());h.i(s.Z),h.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap);"]);var g=c()(d),m=c()(p),v=c()(u),w=c()(f),y=c()(b);h.push([n.id,`:root {\n  --dark-cell: #779954;\n  --bright-cell: #e9edcc;\n  --sea-color: #201729;\n  --ground-pattern: url(${g});\n  --rock-pattern: url(${m});\n  --sea-pattern: url(${v});\n  --button-pattern: url(${w});\n  --board-size: 80vh;\n  --pixel-font: 'VT323', monospace;\n  --button-font: 'Press Start 2P', cursive;\n}\n\n* {\n  image-rendering: pixelated;\n}\n\nbody {\n  font-family: var(--pixel-font);\n  background: var(--sea-pattern);\n  background-position: center;\n  background-size: 3%;\n}\n\n.btn:hover {\n  background-color: #cbcbcb;\n  box-shadow: inset \n    calc(var(--shadow-width) - 1px) \n    calc(var(--shadow-width) - 1px)\n    rgb(0 0 0 / 20%);\n}\n\n.btn:focus, .btn:active {\n  box-shadow: inset \n    calc(0px - var(--shadow-width)) \n    calc(0px - var(--shadow-width)) \n    rgb(0 0 0 / 20%);\n}\n\n.btn {\n  --border-width: 4px;\n  --shadow-width: -4px;\n  cursor: pointer;\n  font-family: var(--button-font);\n  padding: 12px 12px;\n  position: relative;\n  background: #d4d4d4;\n  display: inline-block;\n  border-top: var(--border-width) solid;\n  border-bottom: var(--border-width) solid;\n  border-color: black;\n  box-shadow: inset var(--shadow-width) var(--shadow-width) rgb(0 0 0 / 20%);\n  text-shadow: 0px 3px rgb(0 0 0 / 10%);\n}\n\n.btn::after {\n  content: "";\n  position: absolute;\n  width: 100%;\n  display: flex;\n  height: 100%;\n  border-left: var(--border-width) solid;\n  border-right: var(--border-width) solid;\n  border-color: black;\n  box-sizing: content-box;\n  left: -4px;\n  top: 0px;\n}\n\n.btn .unicode-icon {\n  margin-right: 10px;\n  position: relative;\n  top: -4px;\n}\n\n#start-game:hover {\n  background-color: hsl(124.43deg 62.24% 65%);\n}\n\n#start-game {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 999999;\n  transform: translate(-50%, -50%);\n  background-color: hsl(124.43deg 62.24% 60%);\n}\n\n\n#show-sp:hover {\n  background-color: hsl(183.77deg 60% 65%);\n}\n\n#show-sp {\n  background-color: hsl(183.77deg 60% 60%);\n}\n\n#undo:hover {\n  background-color: hsl(60deg 80% 60%);\n}\n#undo {\n  background-color: hsl(60deg 80% 50%);\n}\n\n#board-container {\n  display: flex;\n  aspect-ratio: 1/1;\n  flex-direction: column;\n  width: var(--board-size);\n  margin: auto;\n  position: relative;\n  background-image: var(--ground-pattern);\n  background-position: center;\n  background-size: 8%;\n  background-clip: content-box;\n  border: 20px solid transparent;\n  border-image: url(${y}) 20% round;\n  box-shadow: 10px 10px rgb(0 0 0 / 20%);\n  border-radius: 5px;\n}\n\n#board-container .row {\n  display: flex;\n}\n\n.cell.highlight::after {\n  content: "";\n  position: absolute;\n  display: flex;\n  top: 0;\n  left: 0;\n  width: 100%;\n  aspect-ratio: 1/1;\n  background: rgb(255 193 7 / 50%)!important;\n  border-radius: 10px;\n}\n\n.cell.black {\n  background-image: var(--rock-pattern);\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 1;\n}\n\n.cell {\n  aspect-ratio: 1/1;\n  flex: 1;\n  position: relative;\n}\n\n.cell > .guide-dot {\n  width: 30%;\n  aspect-ratio: 1/1;\n  background: rgb(0 0 0 / 20%);\n  display: none;\n  border-radius: 100%;\n  position: relative;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n}\n\n#hover-border {\n  pointer-events: none;\n  border: 4px solid #FFC107;\n  box-sizing: border-box;\n  z-index: 9;\n  border-radius: 8px;\n}\n\n.piece {\n  z-index: 69;\n}\n\n.piece, #hover-border {\n  aspect-ratio: 1/1;\n  height: calc(100% / 8);\n  position: absolute;\n  cursor: -webkit-grab;\n}\n\n.piece.destination {\n  background-size: 70%!important;\n}\n\n.hint.piece::after {\n  background: yellow;\n}\n\n.knight::after {\n  content: attr(data-count);\n  display: block;\n  position: absolute;\n  color: black;\n  font-size: 1.3rem;\n  font-weight: bold;\n  left: 50%;\n  top: 0;\n  transform: translate(-50%, -50%);\n  outline: 3px solid black;\n  background: white;\n  padding: 0 5px;\n}\n\n#countdown {\n  font-family: var(--button-font);\n  flex: 1;\n}\n\n#control {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  width: var(--board-size);\n  margin: 10px auto;\n  align-items: center;\n}\n\n.disabled {\n  filter: brightness(0.5);\n  pointer-events: none;\n}\n\n#progress {\n  display: block;\n  width: max-content;\n  float: right;\n  font-size: 1.5rem;\n  padding: 5px 20px;\n}\n\n#player-path .line {\n  stroke: white;\n  stroke-width: 3;\n  stroke-dasharray: 5 5;\n}\n\n#hint-path .line {\n  stroke: yellow;\n  stroke-width: 3;\n  stroke-dasharray: 5 5;\n}\n\n`,""]);const x=h},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var l=n[s],c=o.base?l[0]+o.base:l[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var u=t(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var b=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:b,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var l=o(n,r),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},312:(n,e,t)=>{n.exports=t.p+"cc9c738f0f54c59013a1.png"},333:(n,e,t)=>{n.exports=t.p+"2e8b3ffabf52d103de65.png"},787:(n,e,t)=>{n.exports=t.p+"9d5fc7f41c0dd7967340.png"},892:(n,e,t)=>{n.exports=t.p+"dd788c82f9e5c2b73689.png"},832:(n,e,t)=>{n.exports=t.p+"78a898c96f6bf043abf2.png"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),s=t(565),l=t.n(s),c=t(216),d=t.n(c),p=t(589),u=t.n(p),f=t(426),b={};b.styleTagTransform=u(),b.setAttributes=l(),b.insert=i().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=d(),e()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;const h=t.p+"6dd7d66f8e34b9c7a8d3.png",g=t.p+"c3aa238367949ffb4a1d.png",m=t.p+"eecbab041d17cd50d797.png",v=t.p+"5a19bf06c06f42e1e52e.png",w=8,y=document.querySelector("#board-container");function x(n,e,t=w){return n>=0&&e>=0&&n<t&&e<t}function k(n,e){let t=L(n,e);t.classList.contains("highlight")?t.classList.remove("highlight"):t.classList.add("highlight")}function L(n,e){return document.querySelector(`.cell[data-row="${n}"][data-col="${e}"]`)}function $(n,e){let t=(e+1)/L(0,0).offsetHeight,o=(n+1)/L(0,0).offsetWidth;return t=parseInt(t),o=parseInt(o),{row:t,col:o}}function E(n,e,t,o){let r=document.createElementNS("http://www.w3.org/2000/svg","line");r.setAttribute("x1","0%"),r.setAttribute("y1","0%"),r.setAttribute("x2","27.951%"),r.setAttribute("y2","0%");let a=`translate(calc(12.5% * ${parseFloat(e)+.5}), calc(12.5% * ${parseFloat(n)+.5}))`,i=`rotate(${s=t-n,l=o-e,C[s+","+l]||null}deg)`;var s,l;return r.setAttribute("style",`transform: ${a} ${i}`),r.classList.add("line"),r}function I(n,e=0,t=0){let o=document.createElement("div");return o.classList.add("piece"),o.style.transform=`translate(${100*t}%, ${100*e}%)`,o.style.background=`url(${n})`,o.style.background+=" no-repeat center/contain",o}const T=20;let S=[-2,-1,1,2,2,1,-1,-2],A=[1,2,2,1,-1,-2,-2,-1],q=[-63,-27,27,63,117,153,-153,-117],C={};for(let n=0;n<S.length;n++){C[S[n]+","+A[n]]=q[n]}const M=t.p+"cc79a51bdb788a0ea1e0.png",z=t.p+"2bc44937adf63dfe6c76.png";let P={row:parseInt(Math.random()*w),col:parseInt(Math.random()*w)},R={row:parseInt(Math.random()*w),col:parseInt(Math.random()*w)};for(;Math.abs(P.row-R.row)+Math.abs(P.col-R.col)<=4;)R={row:parseInt(Math.random()*w),col:parseInt(Math.random()*w)};const U=function(){for(let n=0;n<w;n++){const e=document.createElement("div");e.classList.add("row"),e.setAttribute("data-index",n);for(let t=0;t<w;t++){const o=document.createElement("div");o.setAttribute("data-row",n),o.setAttribute("data-col",t),o.classList.add("cell"),(n+t)%2!=0&&o.classList.add("black"),o.innerHTML='<span class = "guide-dot"></div>',e.appendChild(o)}y.appendChild(e)}return y}(),j=[],F=function(n,e,t=w){let o={},r={};for(let n=0;n<t;n++)o[n]={},r[n]={};let a=[],i=0;for(o[n.row][n.col]=0,a.push({row:n.row,col:n.col});i<a.length;){let n=a[i];i++;for(let e=0;e<8;e++){let i=S[e]+n.row,s=A[e]+n.col;x(i,s,t)&&void 0===o[i][s]&&(o[i][s]=o[n.row][n.col]+1,r[i][s]=n,a.push({row:i,col:s}))}}let s=[],l=e.row,c=e.col;for(s.push({row:l,col:c});void 0!==r[l][c];){s.push(r[l][c]);let n=r[l][c].row,e=r[l][c].col;l=n,c=e}return s.reverse(),s.shift(),s}(P,R),H=document.querySelector("#show-sp"),Z=document.querySelector("#undo"),N=document.querySelector("#start-game"),O=document.querySelector("#countdown #progress"),_=document.querySelector("#player-path svg"),W=document.querySelector("#hint-path svg"),X=document.createElement("div");X.setAttribute("id","hover-border"),X.style.visibility="hidden",U.appendChild(X);const Y=I(M,R.row,R.col);Y.classList.add("destination"),Y.style.pointerEvents="none";const V=function(n=0,e=0,t=!1){return I(h,n,e)}(P.row,P.col);V.setAttribute("data-count","0"),V.classList.add("knight");const B=I(z,P.row,P.col);B.setAttribute("data-count","0"),B.classList.add("knight"),B.classList.add("hint"),B.style.pointerEvents="none";let D=!1,J=!1;function Q(n,e,t){n.style.transform=`translate(${100*t}%, ${100*e}%)`}function G(n){J=!0,U.style.pointerEvents="none",n?alert("congratz!"):alert("loser")}V.addEventListener("mousedown",(function(n){const e=n.target,t=function(){let n=e.style.transform.match(/translate\((.*?)\)/)[1].split(",");return{row:parseInt(n[1])/100,col:parseInt(n[0])/100}}(),o=function(n,e){const t=[];for(let o=0;o<S.length;o++){let r=n+S[o],a=e+A[o];x(r,a)&&t.push({row:r,col:a})}return t}(t.row,t.col),r=[];function a(n,t){e.style.transform=`translate(${100*t}%, ${100*n}%)`}function i(n){X.style.visibility="visible";let o=$(n.pageX-U.offsetLeft-T,n.pageY-U.offsetTop-T);var r,a;o.col<t.col?e.style.backgroundImage=`url(${m})`:e.style.backgroundImage=`url(${v})`,X.style.transform=`translate(${100*o.col}%, ${100*o.row}%)`,r=(n.pageX-U.offsetLeft-e.offsetWidth/2-T)/L(0,0).offsetWidth,a=(n.pageY-U.offsetTop-e.offsetHeight/2-T)/L(0,0).offsetHeight,e.style.transform=`translate(${100*r}%, ${100*a}%)`,J&&s(n)}function s(n){let l=$(n.pageX-U.offsetLeft-T,n.pageY-U.offsetTop-T);l.col<t.col?e.style.backgroundImage=`url(${h})`:e.style.backgroundImage=`url(${g})`,o.some((n=>n.row===l.row&&n.col===l.col))?(_.appendChild(E(t.row,t.col,l.row,l.col)),j.push(l),a(l.row,l.col),e.setAttribute("data-count",j.length),l.row===R.row&&l.col===R.col?setTimeout(G.bind(null,!0),100):j.length>=F.length&&setTimeout(G.bind(null,!1),100)):a(t.row,t.col),document.removeEventListener("mousemove",i),e.removeEventListener("mouseup",s),r.forEach((n=>{n.style.display="none"})),X.style.visibility="hidden",k(t.row,t.col)}k(t.row,t.col),o.forEach((n=>{let e=L(n.row,n.col).querySelector(".guide-dot");e.style.display="block",r.push(e)})),document.addEventListener("mousemove",i),e.addEventListener("mouseup",s)})),H.addEventListener("click",(n=>{!1===D?(U.appendChild(B),D=!0):Q(B,P.row,P.col),B.setAttribute("data-count",0),function(n,e){let t=0;n.style.transition="300ms";let o=setInterval((()=>{if(t==e.length)return clearInterval(o),void(n.style.transition="none");Q(n,e[t].row,e[t].col),t>0?W.appendChild(E(e[t-1].row,e[t-1].col,e[t].row,e[t].col)):W.appendChild(E(P.row,P.col,e[t].row,e[t].col)),n.setAttribute("data-count",t+1),t++}),1e3)}(B,F)})),Z.addEventListener("click",(n=>{var e;e=V,0!==j.length&&(j.pop(),j.length>0?Q(e,j[j.length-1].row,j[j.length-1].col):Q(e,P.row,P.col),e.setAttribute("data-count",j.length),_.lastElementChild.remove())})),N.addEventListener("click",(n=>{console.log("start game"),U.appendChild(Y),U.appendChild(V),document.querySelectorAll(".disabled").forEach((n=>{n.classList.remove("disabled")})),N.remove();let e=0;const t=setInterval((()=>{let n=4-parseInt(e/1e3),r=parseInt((999-e%1e3)/10);if(r<10&&(r="0"+r),O.innerText=`0${n}:${r}`,J)return console.log("already end game"),clearTimeout(o),void clearInterval(t);e+=10}),10),o=setTimeout((()=>{J||G(!1),clearTimeout(o),clearInterval(t)}),5e3)}))})()})();