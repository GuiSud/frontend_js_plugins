(()=>{var e={388:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"#progress-outBox {\n  position: relative;\n  --val: 0%;\n  --radius: 3px;\n  --color: #1890ff;\n  background-color: rgb(238, 238, 238);\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n\n#progress-outBox.done {\n  --color: #52c41a;\n}\n\n#progress-outBox.done::before {\n  animation: xx;\n}\n\n#progress-outBox::after,\n#progress-outBox::before {\n  pointer-events: none;\n  content: '';\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  height: 100%;\n  will-change: width;\n  width: var(--val);\n  border-radius: var(--radius);\n}\n\n#progress-outBox::after {\n  background-color: var(--color);\n  transition: all .2s;\n}\n\n#progress-outBox::before {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, .3));\n  z-index: 1;\n  animation: ani linear 2s infinite;\n}\n\n@keyframes ani {\n  0% {\n    width: 0px;\n    opacity: 1;\n  }\n\n  75% {\n    width: var(--val);\n  }\n\n  100% {\n    opacity: 0;\n  }\n}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=n(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),u=0;u<a.length;u++){var d=n(a[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=(()=>{function e(e,t){if(!new.target)throw new Error("The new keyword must be used");let n=this.dq(e);if(!n)throw new Error(`${e} dom is null`);let r={height:"20px",width:"150px"},o=0;Object.defineProperty(this,"val",{get:()=>o,set:e=>{o=e,console.log(this,this.val),100==e?this.dom.classList.add("done"):this.dom.classList.contains("done")&&this.dom.classList.remove("done"),this.dom.style.setProperty("--val",`${e}%`)}}),r={...r,...t};let a=document.createDocumentFragment(),i=document.createElement("div");this.dom=i,i.style.cssText=`width:${r.width}; height:${r.height}`,i.setAttribute("id","progress-outBox"),a.appendChild(i),n.appendChild(a)}return e.prototype.dq=e=>document.querySelector(e),e.prototype.setValue=function(e){e>=100?e=100:e<=0&&(e=0),this.val=e},e.prototype.done=function(){this.val=100},e})();var t=n(379),r=n.n(t),o=n(795),a=n.n(o),i=n(569),s=n.n(i),c=n(565),u=n.n(c),d=n(216),l=n.n(d),p=n(589),f=n.n(p),h=n(388),v={};v.styleTagTransform=f(),v.setAttributes=u(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),r()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals,window.ltyProgress=e})()})();