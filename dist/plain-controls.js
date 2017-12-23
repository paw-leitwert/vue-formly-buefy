/*!
 * VueFormlyBuefy v0.5.0
 * (c) 2017 Yuriy Rabeshko
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VfbPlainControls=t():e.VfbPlainControls=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t){e.exports=function(e,t,n,r,o,u){var i,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,s=e.default);var f="function"==typeof s?s.options:s;t&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0),n&&(f.functional=!0),o&&(f._scopeId=o);var l;if(u?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},f._ssrRegister=l):r&&(l=r),l){var c=f.functional,d=c?f.render:f.beforeCreate;c?(f._injectStyles=l,f.render=function(e,t){return l.call(t),d(e,t)}):f.beforeCreate=d?[].concat(d,l):[l]}return{esModule:i,exports:s,options:f}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vfbButton",props:{label:String,icon:{type:String,default:""},properties:{type:Object,default:function(){return{}}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vfbSpan",props:{label:{type:String,default:""},properties:{type:Object,default:function(){return{}}}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Span=t.Button=void 0;var o=n(4),u=r(o),i=n(7),s=r(i);t.Button=u.default,t.Span=s.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);var i=n(6),s=n(0),a=s(o.a,i.a,!1,null,null,null);t.default=a.exports},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",e._b({staticClass:"button"},"button",e.properties,!1),[n("span",{domProps:{textContent:e._s(e.label)}}),e._v(" "),e.icon?n("b-icon",{attrs:{icon:e.icon}}):e._e()],1)},o=[],u={render:r,staticRenderFns:o};t.a=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);var i=n(9),s=n(0),a=s(o.a,i.a,!1,null,null,null);t.default=a.exports},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",e._b({domProps:{textContent:e._s(e.label)}},"span",e.properties,!1))},o=[],u={render:r,staticRenderFns:o};t.a=u}])});