!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Tabs",e):t.Tabs=e()}(this,function(){"use strict";var t=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},e=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),a=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var a=[],n=!0,r=!1,i=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done)&&(a.push(s.value),!e||a.length!==e);n=!0);}catch(t){r=!0,i=t}finally{try{!n&&o.return&&o.return()}finally{if(r)throw i}}return a}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=function(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)};return function(){function r(e){t(this,r);this.settings=Object.assign({},{activeClass:"_is-active",hiddenClass:"_is-hidden"},e),this.init()}return e(r,[{key:"init",value:function(){var t=this;[].concat(n(document.querySelectorAll("[data-tabs]"))).forEach(function(e,a){var r=[].concat(n(e.querySelectorAll("[data-tab]"))),i=e.dataset.tab?document.querySelector("[data-tabs-content="+e.dataset.tab+"]"):[].concat(n(document.querySelectorAll("[data-tabs-content]")))[a],s=new Map;r.forEach(function(t,e){var a=t.dataset.tab?i.querySelector("[data-tab="+t.dataset.tab+"]"):[].concat(n(i.querySelectorAll("[data-tab]")))[e];s.set(t,a)}),e.addEventListener("click",function(e){for(var a=e.target;!a.hasAttribute("data-tab");)a=a.parentNode;t.switch(a,s)}),e.querySelector("[data-tab]."+t.settings.activeClass)||t.switch(r[0],s)})}},{key:"switch",value:function(t,e){var n=!0,r=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var c=s.value,u=a(c,2),l=u[0],d=u[1];l.classList.remove(this.settings.hiddenClass),d.classList.add(this.settings.hiddenClass)}}catch(t){r=!0,i=t}finally{try{!n&&o.return&&o.return()}finally{if(r)throw i}}t.classList.add(this.settings.activeClass),e.get(t).classList.remove(this.settings.hiddenClass)}}]),r}()});
//# sourceMappingURL=tabs.js.map