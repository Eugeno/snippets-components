!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Tabs",e):t.Tabs=e()}(this,function(){"use strict";var t=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},e=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),a=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var a=[],n=!0,r=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(n=(o=c.next()).done)&&(a.push(o.value),!e||a.length!==e);n=!0);}catch(t){r=!0,i=t}finally{try{!n&&c.return&&c.return()}finally{if(r)throw i}}return a}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();return function(){function n(e){t(this,n);this.settings=Object.assign({},{activeClass:"_is-active"},e),this.init()}return e(n,[{key:"init",value:function(){var t=this;document.querySelectorAll("[data-tabs]").forEach(function(e,a){var n=e.querySelectorAll("[data-tab]"),r=e.dataset.tab?document.querySelector("[data-tabs-content="+e.dataset.tab+"]"):document.querySelectorAll("[data-tabs-content]")[a],i=new Map;n.forEach(function(t,e){var a=t.dataset.tab?r.querySelector("[data-tab="+t.dataset.tab+"]"):r.querySelectorAll("[data-tab]")[e];i.set(t,a)}),e.addEventListener("click",function(a){var n=a.target;if(n!==e){for(;!n.hasAttribute("data-tab");)n=n.parentNode;t.switch(n,i)}}),e.querySelector("[data-tab]."+t.settings.activeClass)||t.switch(n[0],i)})}},{key:"switch",value:function(t,e){var n=!0,r=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){var s=o.value,u=a(s,2),l=u[0],f=u[1];l.classList.remove(this.settings.activeClass),f.hidden=!0}}catch(t){r=!0,i=t}finally{try{!n&&c.return&&c.return()}finally{if(r)throw i}}t.classList.add(this.settings.activeClass),e.get(t).hidden=!1}}]),n}()});
//# sourceMappingURL=tabs.js.map
