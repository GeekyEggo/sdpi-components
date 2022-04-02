/*! For license information please see sdpi.js.LICENSE.txt */
(()=>{"use strict";var t={480:(t,e,i)=>{i.d(e,{Z:()=>a});var s=i(537),r=i.n(s),o=i(645),n=i.n(o)()(r());n.push([t.id,"::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #666666;\r\n    border-radius: 5px;\r\n    outline: 1px solid slategrey;\r\n}\r\n","",{version:3,sources:["webpack://./src/styles/document.css"],names:[],mappings:"AAAA;IACI,UAAU;AACd;AACA;IACI,oDAAoD;IACpD,4CAA4C;AAChD;AACA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,4BAA4B;AAChC",sourcesContent:["::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #666666;\r\n    border-radius: 5px;\r\n    outline: 1px solid slategrey;\r\n}\r\n"],sourceRoot:""}]);const a=n},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i="",s=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),s&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),s&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(t,i,s,r,o){"string"==typeof t&&(t=[[null,t,void 0]]);var n={};if(s)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(n[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);s&&n[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),i&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=i):d[2]=i),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},537:t=>{t.exports=function(t){var e=t[1],i=t[3];if(!i)return e;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),o="/*# ".concat(r," */"),n=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[e].concat(n).concat([o]).join("\n")}return[e].join("\n")}},379:t=>{var e=[];function i(t){for(var i=-1,s=0;s<e.length;s++)if(e[s].identifier===t){i=s;break}return i}function s(t,s){for(var o={},n=[],a=0;a<t.length;a++){var l=t[a],c=s.base?l[0]+s.base:l[0],d=o[c]||0,h="".concat(c," ").concat(d);o[c]=d+1;var p=i(h),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=r(u,s);s.byIndex=a,e.splice(a,0,{identifier:h,updater:f,references:1})}n.push(h)}return n}function r(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;i.update(t=e)}else i.remove()}}t.exports=function(t,r){var o=s(t=t||[],r=r||{});return function(t){t=t||[];for(var n=0;n<o.length;n++){var a=i(o[n]);e[a].references--}for(var l=s(t,r),c=0;c<o.length;c++){var d=i(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=l}}},569:t=>{var e={};t.exports=function(t,i){var s=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(i)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,i)=>{t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var s="";i.supports&&(s+="@supports (".concat(i.supports,") {")),i.media&&(s+="@media ".concat(i.media," {"));var r=void 0!==i.layer;r&&(s+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),s+=i.css,r&&(s+="}"),i.media&&(s+="}"),i.supports&&(s+="}");var o=i.sourceMap;o&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(s,t,e.options)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function i(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={id:s,exports:{}};return t[s](o,o.exports,i),o.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new Map;class r{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=s.get(this.cssText);return t&&void 0===e&&(s.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=(t,...i)=>{const s=1===t.length?t[0]:i.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(s,e)},n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new r("string"==typeof t?t:t+"",e))(i)})(t):t;var a;const l=window.trustedTypes,c=l?l.emptyScript:"",d=window.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:p};class f extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=u){var s,r;const o=this.constructor._$Eh(t,i);if(void 0!==o&&!0===i.reflect){const n=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:h.toAttribute)(e,i.type);this._$Ei=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Ei=null}}_$AK(t,e){var i,s,r;const o=this.constructor,n=o._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=o.getPropertyOptions(n),a=t.converter,l=null!==(r=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==r?r:h.fromAttribute;this._$Ei=n,this[n]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var g;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:f}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.3.1");const v=globalThis.trustedTypes,b=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,m="?"+y,$=`<${m}>`,_=document,w=(t="")=>_.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,E=/>/g,R=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,I=/'/g,k=/"/g,N=/^(?:script|style|textarea|title)$/i,j=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),O=j(1),M=(j(2),Symbol.for("lit-noChange")),D=Symbol.for("lit-nothing"),U=new WeakMap,P=_.createTreeWalker(_,129,null,!1),T=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":"",n=S;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===S?"!--"===l[1]?n=C:void 0!==l[1]?n=E:void 0!==l[2]?(N.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=R):void 0!==l[3]&&(n=R):n===R?">"===l[0]?(n=null!=r?r:S,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?R:'"'===l[3]?k:I):n===k||n===I?n=R:n===C||n===E?n=S:(n=R,r=void 0);const h=n===R&&t[e+1].startsWith("/>")?" ":"";o+=n===S?i+$:c>=0?(s.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+y+h):i+y+(-2===c?(s.push(void 0),e):h)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(a):a,s]};class L{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,c]=T(t,e);if(this.el=L.createElement(l,i),P.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=P.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const i=c[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?q:"@"===e[1]?W:Z})}else a.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(N.test(s.tagName)){const t=s.textContent.split(y),e=t.length-1;if(e>0){s.textContent=v?v.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],w()),P.nextNode(),a.push({type:2,index:++r});s.append(t[e],w())}}}else if(8===s.nodeType)if(s.data===m)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(y,t+1));)a.push({type:7,index:r}),t+=y.length-1}r++}}static createElement(t,e){const i=_.createElement("template");return i.innerHTML=t,i}}function z(t,e,i=t,s){var r,o,n,a;if(e===M)return e;let l=void 0!==s?null===(r=i._$Cl)||void 0===r?void 0:r[s]:i._$Cu;const c=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(n=(a=i)._$Cl)&&void 0!==n?n:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=z(t,l._$AS(t,e.values),l,s)),e}class H{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:_).importNode(i,!0);P.currentNode=r;let o=P.nextNode(),n=0,a=0,l=s[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new B(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Y(o,this,t)),this.v.push(e),l=s[++a]}n!==(null==l?void 0:l.index)&&(o=P.nextNode(),n++)}return r}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class B{constructor(t,e,i,s){var r;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),A(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==M&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return x(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==D&&A(this._$AH)?this._$AA.nextSibling.data=t:this.k(_.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=L.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(i);else{const t=new H(r,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=U.get(t.strings);return void 0===e&&U.set(t.strings,e=new L(t)),e}S(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new B(this.A(w()),this.A(w()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Z{constructor(t,e,i,s,r){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=z(this,t,e,0),o=!A(t)||t!==this._$AH&&t!==M,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=z(this,s[i+n],e,n),a===M&&(a=this._$AH[n]),o||(o=!A(a)||a!==this._$AH[n]),a===D?t=D:t!==D&&(t+=(null!=a?a:"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.C(t)}C(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends Z{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===D?void 0:t}}const Q=v?v.emptyScript:"";class q extends Z{constructor(){super(...arguments),this.type=4}C(t){t&&t!==D?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class W extends Z{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=z(this,t,e,0))&&void 0!==i?i:D)===M)return;const s=this._$AH,r=t===D&&s!==D||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==D&&(s===D||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const J=window.litHtmlPolyfillSupport;var F,V;null==J||J(L,B),(null!==(g=globalThis.litHtmlVersions)&&void 0!==g?g:globalThis.litHtmlVersions=[]).push("2.2.1");class K extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,r;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=o._$litPart$;if(void 0===n){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new B(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return M}}K.finalized=!0,K._$litElement$=!0,null===(F=globalThis.litElementHydrateSupport)||void 0===F||F.call(globalThis,{LitElement:K});const X=globalThis.litElementPolyfillSupport;null==X||X({LitElement:K}),(null!==(V=globalThis.litElementVersions)&&void 0!==V?V:globalThis.litElementVersions=[]).push("3.2.0");const tt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),et=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function it(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):et(t,e)}var st;function rt(){const t=()=>Math.random().toString(16).slice(-4);return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}function ot(t,e,i){const s=t.split(".");s.reduce(((t,e,r)=>r===s.length-1?t[e]=i:t[e]||(t[e]={})),e)}null===(st=window.HTMLSlotElement)||void 0===st||st.prototype.assignedElements;class nt extends K{render(){return O`
            <div class="container">
                <div>${this.renderLabel&&this.renderLabel()}</div>
                <div>${this.renderContents()}</div>
            </div>
        `}}nt.styles=[o`
            :host {
                /* Box model */
                --spacer: 4px;

                /* Colors */
                --color-primary: #9a9a9a;
                --color-primary-bg: #2d2d2d;
                --color-secondary: #d8d8d8;
                --color-secondary-bg: #3d3d3d;
                --scrollbar-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

                /* Typography */
                --font-family: Arial, 'Segoe UI', Roboto, Helvetica sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                --font-size: 8pt;

                color: var(--color-primary);
                font-size: var(--font-size);
                font-weight: normal;
                font-family: var(--font-family);
            }

            ::-webkit-scrollbar {
                width: 5px;
            }
            ::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            }
            ::-webkit-scrollbar-thumb {
                background-color: #666666;
                border-radius: 5px;
                outline: 1px solid slategrey;
            }

            .container {
                align-items: start;
                display: grid;
                grid-template-columns: 95px 1fr;
                margin: 0 0 10px 0;
                max-width: 322px;
                -webkit-user-drag: none;
            }

            .container > div:first-child {
                margin-top: 6px;
                justify-self: end;
                padding-right: 11px;
            }
        `];var at=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n},lt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class ct extends nt{constructor(){super(...arguments),this.disabled=!1,this.inputID=rt()}static get styles(){return[...super.styles,o`
                button,
                input,
                select,
                textarea {
                    /* Box model */
                    box-sizing: border-box;
                    outline: none;
                    border: none;
                    border-radius: 0;
                    min-width: 100%;
                    max-width: 100%;

                    /* Background and typography */
                    color: var(--color-secondary);
                    font-size: var(--font-size);
                    font-family: var(--font-family);
                }
            `]}renderLabel(){if(this.label)return O`<label for=${this.inputID}>${this.label}:</label>`}}at([it({type:Boolean}),lt("design:type",Object)],ct.prototype,"disabled",void 0),at([it(),lt("design:type",String)],ct.prototype,"label",void 0);let dt=class extends ct{static get styles(){return[...super.styles,o`
                :host {
                    --bg-color: #303030;
                }

                button {
                    background-color: var(--bg-color);
                    border: 1px solid #969696;
                    border-radius: 3px;
                    padding: calc(var(--spacer) * 2) var(--spacer);
                }

                button:not(:disabled):hover {
                    background-color: #464646;
                    cursor: pointer;
                }

                button:not(:disabled):active {
                    background-color: var(--bg-color);
                    border-color: #646464;
                    color: #969696;
                }

                button:disabled {
                    opacity: 0.5;
                }
            `]}renderContents(){return O`
            <button .id=${this.inputID} .disabled=${this.disabled}>
                <slot></slot>
            </button>
        `}};dt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}([tt("sdpi-button")],dt);class ht{constructor(){this.handlers=[]}dispatch(t){for(const e of this.handlers)e(t)}subscribe(t){this.handlers.push(t)}unsubscribe(t){this.handlers=this.handlers.filter((e=>e!==t))}}class pt{constructor(){this._promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}get promise(){return this._promise}setResult(t){this.resolve&&this.resolve(t)}setException(t){this.reject&&this.reject(t)}}const ut=new class{constructor(){this._connection=new pt,this._connectionInfo=new pt,this.didReceiveGlobalSettings=new ht,this.didReceiveSettings=new ht,this.message=new ht}async connect(t,e,i,s,r){if(!this._webSocket){const o={actionInfo:r?JSON.parse(r):null,info:JSON.parse(s),propertyInspectorUUID:e,registerEvent:i};o.actionInfo&&this.didReceiveSettings.dispatch(o.actionInfo),this._connectionInfo.setResult(o),this._webSocket=new WebSocket(`ws://localhost:${t}`),this._webSocket.onopen=this.handleOpen.bind(this),this._webSocket.onmessage=this.handleMessage.bind(this)}}getGlobalSettings(){return this.get("getGlobalSettings","didReceiveGlobalSettings")}setGlobalSettings(t){this.send("setGlobalSettings",t)}getSettings(){return this.get("getSettings","didReceiveSettings")}setSettings(t){this.send("setSettings",t)}async getConnectionInfo(){return this._connectionInfo.promise}async get(t,e,i){const s=new pt,r=t=>{t.event==e&&(this.message.unsubscribe(r),s.setResult(t))};return this.message.subscribe(r),await this.send(t,i),s.promise}async send(t,e){try{const i=await this._connectionInfo.promise;(await this._connection.promise).send(JSON.stringify({event:t,context:i.propertyInspectorUUID,payload:e,action:i.actionInfo.action}))}catch(e){console.error(`Unable to send request '${t}' as there is no connection.`)}}async handleOpen(){try{const t=await this._connectionInfo.promise;this._webSocket&&(this._webSocket.send(JSON.stringify({event:t.registerEvent,uuid:t.propertyInspectorUUID})),this._connection.setResult(this._webSocket))}catch(t){this._connection.setException(t)}}handleMessage(t){const e=JSON.parse(t.data);switch(e.event){case"didReceiveGlobalSettings":this.didReceiveGlobalSettings.dispatch(e);break;case"didReceiveSettings":this.didReceiveSettings.dispatch(e)}}},ft=new class{constructor(){ut.didReceiveGlobalSettings.subscribe((t=>this._globalSettings=t.payload.settings)),ut.didReceiveSettings.subscribe((t=>this._settings=t.payload.settings)),ut.getGlobalSettings()}register(t,e,i,s=250){const r=e=>{var s,r;e&&e.payload&&e.payload.settings&&i((s=t,r=e.payload.settings,(Array.isArray(s)?s:s.split(".")).reduce(((t,e)=>t&&t[e]),r)||""))};return e?ut.didReceiveGlobalSettings.subscribe(r):ut.didReceiveSettings.subscribe(r),s?function(i,s){let r;return(i,...o)=>{clearTimeout(r),r=setTimeout((()=>{return s=i,ft.set(t,e,s);var s}),s,o)}}(0,s):i=>ft.set(t,e,i)}set(t,e,i){e?(this._globalSettings&&ot(t,this._globalSettings,i),ut.setGlobalSettings(this._globalSettings)):(this._settings&&ot(t,this._settings,i),ut.setSettings(this._settings))}},gt=ft.register;var vt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n},bt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class yt extends ct{constructor(){super(...arguments),this.isGlobal=!1}firstUpdated(){super.firstUpdated,this.setting&&(this._save=gt(this.setting,this.isGlobal,(t=>this.value=t)))}save(t){this.value=t,this._save&&this._save(this.value)}}vt([it({attribute:"global",type:Boolean}),bt("design:type",Object)],yt.prototype,"isGlobal",void 0),vt([it(),bt("design:type",String)],yt.prototype,"setting",void 0),vt([it({attribute:!1}),bt("design:type",Object)],yt.prototype,"value",void 0);var mt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let $t=class extends yt{static get styles(){return[...super.styles,o`
                :host {
                    --checkbox-size: 16px;
                }

                .checkbox-container {
                    align-items: center;
                    display: inline-flex;
                    margin: var(--spacer) 0;
                    user-select: none;
                    width: auto;
                }

                input {
                    display: none;
                }

                .checkmark {
                    background: var(--color-secondary-bg);
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    border-radius: 3px;
                    flex: var(--checkbox-size) var(--checkbox-size);
                    height: var(--checkbox-size);
                    width: var(--checkbox-size);
                }

                .text {
                    flex: 1 1;
                    margin: 0 0 0 var(--spacer);
                }

                input:not(:disabled) ~ span {
                    cursor: pointer;
                }

                input:disabled ~ span {
                    opacity: 0.5;
                }

                input:checked ~ .checkmark {
                    background: #77f no-repeat center center;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10' viewBox='0 0 12 10'%3E%3Cpolygon fill='%23FFF' points='7.2 7.5 7.2 -1.3 8.7 -1.3 8.6 9.1 2.7 8.7 2.7 7.2' transform='rotate(37 5.718 3.896)'/%3E%3C/svg%3E%0A");
                    border: 1px solid rgba(0, 0, 0, 0.4);
                }
            `]}renderContents(){const t=this.text?O`<span class="text">${this.text}</span>`:void 0;return O`
            <label class="checkbox-container">
                <input
                    type="checkbox"
                    .id=${this.inputID}
                    .checked=${this.value||!1}
                    .disabled=${this.disabled}
                    @change=${t=>this.save(t.target.checked)}
                />
                <span class="checkmark" role="checkbox" aria-checked=${this.value||!1}></span>
                ${t}
            </label>
        `}};mt([it(),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],$t.prototype,"text",void 0),$t=mt([tt("sdpi-checkbox")],$t);class _t{constructor(t){this.childNodes=[],(this._host=t).addController(this),this._observer=new MutationObserver(this.handleMutation.bind(this))}hostConnected(){this._observer.observe(this._host,{childList:!0})}hostDisconnected(){this._observer.disconnect()}handleMutation(t){t.forEach((t=>{for(const e of t.addedNodes)this.childNodes.push(e);t.removedNodes.forEach((t=>{const e=this.childNodes.indexOf(t);-1!==e&&this.childNodes.splice(e,1)}))})),this._host.requestUpdate()}}var wt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n},At=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let xt=class extends yt{constructor(){super(),this._childNodesController=new _t(this)}static get styles(){return[...super.styles,o`
                select {
                    background-color: var(--color-secondary-bg);
                    font-family: var(--font-family);
                    font-size: var(--font-size);
                    padding: calc(var(--spacer) + 1px) 0;
                    text-overflow: ellipsis;
                }

                select:disabled {
                    opacity: 0.5;
                }
            `]}renderContents(){return O`
            <select .id=${this.inputID} .disabled=${this.disabled} .value=${this.value||""} @change=${t=>this.save(t.target.value)}>
                <option value="" disabled .hidden=${!this.placeholder||void 0!==this.value}>${this.placeholder}</option>
                ${this.renderChildNodes()}
            </select>
        `}renderChildNodes(){if(0===this.childNodes.length)return;const t=e=>{switch(e.nodeName){case"OPTGROUP":return O`<optgroup .label=${e.label}>${Array.from(e.childNodes).map(t)}</optgroup>`;case"OPTION":return O`<option .disabled=${e.disabled} .value=${e.text}>${e.label}</option>`;default:return}};return O`${this._childNodesController.childNodes.map(t)}`}};wt([it(),At("design:type",String)],xt.prototype,"placeholder",void 0),xt=wt([tt("sdpi-select"),At("design:paramtypes",[])],xt);var St=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n},Ct=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Et=class extends yt{constructor(){super(...arguments),this.rows=3,this.showLength=!1}static get styles(){return[...super.styles,o`
                textarea {
                    background-color: var(--color-secondary-bg);
                    padding: calc(var(--spacer) + 3px) var(--spacer);
                    resize: none;
                }

                textarea:disabled {
                    opacity: 0.5;
                }

                #length {
                    float: right;
                }
            `]}renderContents(){return O`
            <textarea
                type="textarea"
                maxlength=${(t=>null!=t?t:D)(this.maxLength)}
                .id=${this.inputID}
                .disabled=${this.disabled}
                .rows=${this.rows}
                .value=${this.value||""}
                @input=${t=>this.save(t.target.value)}
            ></textarea>
            ${this.getLengthLabel()}
        `}getLengthLabel(){var t;if(this.showLength||this.maxLength){const e=this.maxLength?O`/${this.maxLength}`:void 0;return O`<label id="length" for=${this.inputID}>${null===(t=this.value)||void 0===t?void 0:t.length}${e}</label>`}}};function Rt(t,...e){return void 0===t?[...e]:Array.isArray(t)?[...t,...e]:[t,...e]}St([it({attribute:"maxlength",type:Number}),Ct("design:type",Number)],Et.prototype,"maxLength",void 0),St([it({type:Number}),Ct("design:type",Object)],Et.prototype,"rows",void 0),St([it({attribute:"showlength",type:Boolean}),Ct("design:type",Object)],Et.prototype,"showLength",void 0),Et=St([tt("sdpi-textarea")],Et);var It=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n},kt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const Nt=t=>{class e extends t{constructor(){super(...arguments),this.disabled=!1,this.inputID=rt()}static get styles(){return Rt(super.styles,o`
                    button,
                    input,
                    select,
                    textarea {
                        /* Box model */
                        box-sizing: border-box;
                        outline: none;
                        border: none;
                        border-radius: 0;
                        min-width: 100%;
                        max-width: 100%;

                        /* Background and typography */
                        color: var(--color-secondary);
                        font-size: var(--font-size);
                        font-family: var(--font-family);
                    }
                `)}renderLabel(){if(this.label)return O`<label for=${this.inputID}>${this.label}:</label>`}}return It([it({type:Boolean}),kt("design:type",Object)],e.prototype,"disabled",void 0),It([it(),kt("design:type",String)],e.prototype,"label",void 0),e};var jt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const Ot=t=>{class e extends t{constructor(){super(...arguments),this.showLabelColumn=!0}static get styles(){return Rt(super.styles,o`
                    :host {
                        /* Box model */
                        --spacer: 4px;

                        /* Colors */
                        --color-primary: #9a9a9a;
                        --color-primary-bg: #2d2d2d;
                        --color-secondary: #d8d8d8;
                        --color-secondary-bg: #3d3d3d;
                        --scrollbar-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

                        /* Typography */
                        --font-family: Arial, 'Segoe UI', Roboto, Helvetica sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                        --font-size: 8pt;

                        color: var(--color-primary);
                        font-size: var(--font-size);
                        font-weight: normal;
                        font-family: var(--font-family);
                    }

                    ::-webkit-scrollbar {
                        width: 5px;
                    }
                    ::-webkit-scrollbar-track {
                        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                    }
                    ::-webkit-scrollbar-thumb {
                        background-color: #666666;
                        border-radius: 5px;
                        outline: 1px solid slategrey;
                    }

                    .container {
                        align-items: start;
                        display: grid;
                        grid-template-columns: 95px 1fr;
                        margin: 0 0 10px 0;
                        max-width: 322px;
                        -webkit-user-drag: none;
                    }

                    .container > div:first-child {
                        margin-top: 6px;
                        justify-self: end;
                        padding-right: 11px;
                    }
                `)}renderContents(t,e){return this.showLabelColumn?O`
                    <div class="container">
                        <div>${e}</div>
                        <div>${t}</div>
                    </div>
                `:t}}return function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);o>3&&n&&Object.defineProperty(e,i,n)}([it({attribute:"show-label-column",type:Boolean}),jt("design:type",Object)],e.prototype,"showLabelColumn",void 0),e};var Mt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n},Dt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const Ut=t=>{class e extends t{constructor(){super(...arguments),this.isGlobal=!1}firstUpdated(){super.firstUpdated,this.setting&&(this._save=gt(this.setting,this.isGlobal,(t=>this.value=t)))}save(t){this.value=t,this._save&&this._save(this.value)}}return Mt([it({attribute:"global",type:Boolean}),Dt("design:type",Object)],e.prototype,"isGlobal",void 0),Mt([it(),Dt("design:type",String)],e.prototype,"setting",void 0),Mt([it({attribute:!1}),Dt("design:type",Object)],e.prototype,"value",void 0),e};var Pt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n},Tt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Lt=class extends(Ot(Nt(Ut(K)))){constructor(){super(...arguments),this.pattern="",this.placeholder="",this.required=!1}static get styles(){return Rt(super.styles,o`
                input {
                    background-color: var(--color-secondary-bg);
                    padding: calc(var(--spacer) + 3px) var(--spacer);
                }

                input:disabled {
                    opacity: 0.5;
                }

                input:required {
                    background-position: 98% center;
                    background-repeat: no-repeat;
                }

                input:required:valid {
                    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHZpZXdCb3g9IjAgMCA5IDkiPjxwb2x5Z29uIGZpbGw9IiNEOEQ4RDgiIHBvaW50cz0iNS4yIDEgNi4yIDEgNi4yIDcgMy4yIDcgMy4yIDYgNS4yIDYiIHRyYW5zZm9ybT0icm90YXRlKDQwIDQuNjc3IDQpIi8+PC9zdmc+);
                }

                input:required:invalid {
                    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHZpZXdCb3g9IjAgMCA5IDkiPgogICAgPHBhdGggZmlsbD0iI0Q4RDhEOCIgZD0iTTQuNSwwIEM2Ljk4NTI4MTM3LC00LjU2NTM4NzgyZS0xNiA5LDIuMDE0NzE4NjMgOSw0LjUgQzksNi45ODUyODEzNyA2Ljk4NTI4MTM3LDkgNC41LDkgQzIuMDE0NzE4NjMsOSAzLjA0MzU5MTg4ZS0xNiw2Ljk4NTI4MTM3IDAsNC41IEMtMy4wNDM1OTE4OGUtMTYsMi4wMTQ3MTg2MyAyLjAxNDcxODYzLDQuNTY1Mzg3ODJlLTE2IDQuNSwwIFogTTQsMSBMNCw2IEw1LDYgTDUsMSBMNCwxIFogTTQuNSw4IEM0Ljc3NjE0MjM3LDggNSw3Ljc3NjE0MjM3IDUsNy41IEM1LDcuMjIzODU3NjMgNC43NzYxNDIzNyw3IDQuNSw3IEM0LjIyMzg1NzYzLDcgNCw3LjIyMzg1NzYzIDQsNy41IEM0LDcuNzc2MTQyMzcgNC4yMjM4NTc2Myw4IDQuNSw4IFoiLz4KICA8L3N2Zz4);
                }
            `)}render(){return this.renderContents(O`
                <input
                    type="text"
                    .id=${this.inputID}
                    .disabled=${this.disabled}
                    .pattern=${this.pattern}
                    .placeholder=${this.placeholder}
                    .required=${this.required}
                    .value=${this.value||""}
                    @input=${t=>this.save(t.target.value)}
                />
            `,this.renderLabel())}};Pt([it(),Tt("design:type",Object)],Lt.prototype,"pattern",void 0),Pt([it(),Tt("design:type",Object)],Lt.prototype,"placeholder",void 0),Pt([it({type:Boolean}),Tt("design:type",Object)],Lt.prototype,"required",void 0),Lt=Pt([tt("sdpi-textfield")],Lt),window.streamDeckClient=ut;const zt=window.connectElgatoStreamDeckSocket;window.connectElgatoStreamDeckSocket=function(t,e,i,s,r){zt&&zt(t,e,i,s,r),ut.connect(t,e,i,s,r)};var Ht=i(379),Bt=i.n(Ht),Zt=i(795),Gt=i.n(Zt),Qt=i(569),qt=i.n(Qt),Wt=i(565),Yt=i.n(Wt),Jt=i(216),Ft=i.n(Jt),Vt=i(589),Kt=i.n(Vt),Xt=i(480),te={};te.styleTagTransform=Kt(),te.setAttributes=Yt(),te.insert=qt().bind(null,"head"),te.domAPI=Gt(),te.insertStyleElement=Ft(),Bt()(Xt.Z,te),Xt.Z&&Xt.Z.locals&&Xt.Z.locals})()})();