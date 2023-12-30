(()=>{"use strict";var t={917:(t,e,n)=>{n.d(e,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([t.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=i},426:(t,e,n)=>{n.d(e,{Z:()=>l});var o=n(81),r=n.n(o),a=n(645),i=n.n(a),s=n(917),c=i()(r());c.i(s.Z),c.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap);"]),c.push([t.id,":root {\n  --dark-cell: #779954;\n  --bright-cell: #e9edcc;\n  --highlight-cell: rgb(205 191 0 / 62%); \n  --board-size: 90vh;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n}\n\n#board-container {\n  display: flex;\n  aspect-ratio: 1/1;\n  flex-direction: column;\n  width: var(--board-size);\n  margin: auto;\n  position: relative;\n}\n\n#board-container .row {\n  display: flex;\n}\n\n.cell.highlight {\n  background: var(--highlight-cell)!important;\n}\n\n.cell.black {\n  background: var(--dark-cell);\n}\n\n.cell {\n  aspect-ratio: 1/1;\n  flex: 1;\n  background: var(--bright-cell);\n  position: relative;\n  /* border: 4px solid; */\n  /* border-color: transparent; */\n}\n\n.cell > .guide-dot {\n  width: 35%;\n  aspect-ratio: 1/1;\n  background: rgb(0 0 0 / 10%);\n  display: none;\n  border-radius: 100%;\n  position: relative;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n}\n\n.piece {\n  z-index: 69;\n}\n\n.piece, #hover-border {\n  aspect-ratio: 1/1;\n  height: calc(100% / 8);\n  position: absolute;\n  cursor: -webkit-grab;\n}\n\n#hover-border {\n  pointer-events: none;\n  border: 4px solid rgb(255 255 255 / 70%);\n  box-sizing: border-box;\n  box-shadow: 2px 2px 100px rgb(255 255 255 / 40%);\n}\n\n.knight::after {\n  content: attr(data-count);\n  background: black;\n  display: block;\n  position: absolute;\n  color: white;\n  right: 0;\n  padding: 5px;\n  font-size: 1.5rem;\n  border-radius: 100%;\n  font-weight: bold;\n}\n\n.black.knight::after {\n  background: red;\n}\n",""]);const l=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],l=o.base?c[0]+o.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=o(t,r),l=0;l<a.length;l++){var d=n(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!t;)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),o=n(795),r=n.n(o),a=n(569),i=n.n(a),s=n(565),c=n.n(s),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const b=n.p+"4a56c489a36c4713eb6d.png",m=8,g=document.querySelector("#board-container");function v(t,e,n=m){return t>=0&&e>=0&&t<n&&e<n}function y(t,e){let n=w(t,e);n.classList.contains("highlight")?n.classList.remove("highlight"):n.classList.add("highlight")}function w(t,e){return document.querySelector(`.cell[data-row="${t}"][data-col="${e}"]`)}function k(t,e){let n=(e+1)/w(0,0).offsetHeight,o=(t+1)/w(0,0).offsetWidth;return n=parseInt(n),o=parseInt(o),{row:n,col:o}}function x(t,e=0,n=0){let o=document.createElement("div");return o.classList.add("piece"),o.style.transform=`translate(${100*n}%, ${100*e}%)`,o.style.background=`url(${t})`,o.style.background+=" no-repeat center/contain",o}let L=[-2,-1,1,2,2,1,-1,-2],E=[1,2,2,1,-1,-2,-2,-1];function T(t){const e=t.target,n=function(){let t=e.style.transform.match(/translate\((.*?)\)/)[1].split(",");return{row:parseInt(t[1])/100,col:parseInt(t[0])/100}}(),o=function(t,e){const n=[];for(let o=0;o<L.length;o++){let r=t+L[o],a=e+E[o];v(r,a)&&n.push({row:r,col:a})}return n}(n.row,n.col),r=[];function a(t,n){e.style.transform=`translate(${100*n}%, ${100*t}%)`}function i(t){j.style.visibility="visible";let n=k(t.pageX-q.offsetLeft,t.pageY-q.offsetTop);var o,r;j.style.transform=`translate(${100*n.col}%, ${100*n.row}%)`,o=(t.pageX-q.offsetLeft-e.offsetWidth/2)/w(0,0).offsetWidth,r=(t.pageY-q.offsetTop-e.offsetHeight/2)/w(0,0).offsetHeight,e.style.transform=`translate(${100*o}%, ${100*r}%)`}y(n.row,n.col),o.forEach((t=>{let e=w(t.row,t.col).querySelector(".guide-dot");e.style.display="block",r.push(e)})),document.addEventListener("mousemove",i),e.addEventListener("mouseup",(function t(s){let c=k(s.pageX-q.offsetLeft,s.pageY-q.offsetTop);o.some((t=>t.row===c.row&&t.col===c.col))?(C.push(c),a(c.row,c.col),e.setAttribute("data-count",C.length),c.row===A.row&&c.col===A.col?(setTimeout(P.bind(null,!0),100),clearTimeout()):C.length>=S.length&&(setTimeout(P.bind(null,!1),100),clearTimeout())):a(n.row,n.col),document.removeEventListener("mousemove",i),e.removeEventListener("mouseup",t),r.forEach((t=>{t.style.display="none"})),j.style.visibility="hidden",y(n.row,n.col)}))}const I=n.p+"ecec358f22dc82146b6c.png",M=n.p+"be6d5fed95a82ab7b97f.png";let $={row:parseInt(Math.random()*m),col:parseInt(Math.random()*m)},A={row:parseInt(Math.random()*m),col:parseInt(Math.random()*m)};for(;Math.abs($.row-A.row)+Math.abs($.col-A.col)<=4;)A={row:parseInt(Math.random()*m),col:parseInt(Math.random()*m)};const q=function(){for(let t=0;t<m;t++){const e=document.createElement("div");e.classList.add("row"),e.setAttribute("data-index",t);for(let n=0;n<m;n++){const o=document.createElement("div");o.setAttribute("data-row",t),o.setAttribute("data-col",n),o.classList.add("cell"),(t+n)%2!=0&&o.classList.add("black"),o.innerHTML='<span class = "guide-dot"></div>',e.appendChild(o)}g.appendChild(e)}return g}(),C=[],S=function(t,e,n=m){let o={},r={};for(let t=0;t<n;t++)o[t]={},r[t]={};let a=[],i=0;for(o[t.row][t.col]=0,a.push({row:t.row,col:t.col});i<a.length;){let t=a[i];i++;for(let e=0;e<8;e++){let i=L[e]+t.row,s=E[e]+t.col;v(i,s,n)&&void 0===o[i][s]&&(o[i][s]=o[t.row][t.col]+1,r[i][s]=t,a.push({row:i,col:s}))}}let s=[],c=e.row,l=e.col;for(s.push({row:c,col:l});void 0!==r[c][l];){s.push(r[c][l]);let t=r[c][l].row,e=r[c][l].col;c=t,l=e}return s.reverse(),s.shift(),s}($,A),z=document.querySelector("#show-sp"),j=document.createElement("div");function H(t,e,n){t.style.transform=`translate(${100*n}%, ${100*e}%)`}function P(t){t?alert("congratz!"):alert("loser")}j.setAttribute("id","hover-border"),j.style.visibility="hidden",q.appendChild(j),function(){const t=x(I,A.row,A.col);t.style.pointerEvents="none";const e=function(t=0,e=0,n=!1){return x(b,t,e)}($.row,$.col);e.setAttribute("data-count","0"),e.classList.add("knight"),q.appendChild(t),q.appendChild(e),e.addEventListener("mousedown",T);const n=x(M,$.row,$.col);n.setAttribute("data-count","0"),n.classList.add("knight"),n.classList.add("black"),n.style.pointerEvents="none";let o=!1;z.addEventListener("click",(t=>{!1===o?(q.appendChild(n),o=!0):H(n,$.row,$.col),n.setAttribute("data-count",0),function(t,e){t.style.transition="200ms";let n=0,o=setInterval((()=>{if(n==e.length)return clearInterval(o),t.style.transition="none",void console.log("done automove!");H(t,e[n].row,e[n].col),t.setAttribute("data-count",n+1),n++}),1e3)}(n,S)}))}()})()})();