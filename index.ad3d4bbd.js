function r(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}function e(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var t,n=0,o=document.querySelector("tbody"),i=document.querySelector("button"),c=document.querySelector(".message-start"),a=document.querySelector(".message-win"),s=document.querySelector(".message-lose");function u(){if(l())for(var r=!1;!r;){var e=Math.floor(4*Math.random()),n=Math.floor(4*Math.random());if(0===t[e][n]){var i=o.rows[e].cells[n];t[e][n]=Math.random()>=.9?4:2,i.innerText=t[e][n],i.classList.add("field-cell--".concat(t[e][n])),r=!0}}}function l(){return t.some(function(r){return r.some(function(r){return!r})})}function f(r,e){r.innerText="",r.className="field-cell",e>0&&(r.innerText=e.toString(),r.classList.add("field-cell--".concat(e)),2048===e&&a.classList.remove("hidden")),function(){if(!l()){for(var r=0;r<4;r++)for(var e=0;e<3;e++){var n=t[r][e]===t[r][e+1],o=t[e][r]===t[e+1][r];if(n||o)return}s.classList.remove("hidden")}}()}function d(r){return r.filter(function(r){return 0!==r})}function m(r){for(var e=d(r),t=0;t<e.length-1;t++)e[t]===e[t+1]&&(e[t]*=2,e[t+1]=0,n+=e[t]);for(e=d(e);e.length<4;)e.push(0);return e}function v(){t=t[0].map(function(r,e){return t.map(function(r){return r[e]})})}function y(r){for(var e=0;e<4;e++){var n=t[e];("ArrowLeft"===r||"ArrowUp"===r)&&(n=m(n)),("ArrowRight"===r||"ArrowDown"===r)&&(n.reverse(),(n=m(n)).reverse()),t[e]=n;for(var i=0;i<4;i++)f(o.rows[e].cells[i],t[e][i])}}function h(){t.forEach(function(r,e){r.forEach(function(r,t){f(o.rows[e].cells[t],r)})})}i.addEventListener("click",function(){n=0,document.querySelector(".game-score").innerText=n,i.classList.contains("start")?(i.classList.remove("start"),i.classList.add("restart"),i.innerText="Restart",c.classList.add("hidden")):(a.classList.add("hidden"),s.classList.add("hidden")),t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],h(),u(),u()}),document.addEventListener("keyup",function(r){var o=e(t).toString();("ArrowLeft"===r.code||"ArrowRight"===r.code)&&y(r.code),("ArrowUp"===r.code||"ArrowDown"===r.code)&&(v(),y(r.code),v()),h(),o!==e(t).toString()&&u(),document.querySelector(".game-score").innerText=n});
//# sourceMappingURL=index.ad3d4bbd.js.map
