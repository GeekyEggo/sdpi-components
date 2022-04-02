/*! For license information please see sdpi.js.LICENSE.txt */
(()=>{"use strict";var t={480:(t,e,s)=>{s.d(e,{Z:()=>a});var i=s(537),n=s.n(i),r=s(645),o=s.n(r)()(n());o.push([t.id,"::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #666666;\r\n    border-radius: 5px;\r\n    outline: 1px solid slategrey;\r\n}\r\n","",{version:3,sources:["webpack://./src/styles/document.css"],names:[],mappings:"AAAA;IACI,UAAU;AACd;AACA;IACI,oDAAoD;IACpD,4CAA4C;AAChD;AACA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,4BAA4B;AAChC",sourcesContent:["::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #666666;\r\n    border-radius: 5px;\r\n    outline: 1px solid slategrey;\r\n}\r\n"],sourceRoot:""}]);const a=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var s="",i=void 0!==e[5];return e[4]&&(s+="@supports (".concat(e[4],") {")),e[2]&&(s+="@media ".concat(e[2]," {")),i&&(s+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),s+=t(e),i&&(s+="}"),e[2]&&(s+="}"),e[4]&&(s+="}"),s})).join("")},e.i=function(t,s,i,n,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);i&&o[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),s&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=s):d[2]=s),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),e.push(d))}},e}},537:t=>{t.exports=function(t){var e=t[1],s=t[3];if(!s)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(n," */"),o=s.sources.map((function(t){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(t," */")}));return[e].concat(o).concat([r]).join("\n")}return[e].join("\n")}},379:t=>{var e=[];function s(t){for(var s=-1,i=0;i<e.length;i++)if(e[i].identifier===t){s=i;break}return s}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],c=i.base?l[0]+i.base:l[0],d=r[c]||0,h="".concat(c," ").concat(d);r[c]=d+1;var u=s(h),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var g=n(p,i);i.byIndex=a,e.splice(a,0,{identifier:h,updater:g,references:1})}o.push(h)}return o}function n(t,e){var s=e.domAPI(e);return s.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;s.update(t=e)}else s.remove()}}t.exports=function(t,n){var r=i(t=t||[],n=n||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=s(r[o]);e[a].references--}for(var l=i(t,n),c=0;c<r.length;c++){var d=s(r[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=l}}},569:t=>{var e={};t.exports=function(t,s){var i=function(t){if(void 0===e[t]){var s=document.querySelector(t);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(t){s=null}e[t]=s}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(s)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,s)=>{t.exports=function(t){var e=s.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(s){!function(t,e,s){var i="";s.supports&&(i+="@supports (".concat(s.supports,") {")),s.media&&(i+="@media ".concat(s.media," {"));var n=void 0!==s.layer;n&&(i+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),i+=s.css,n&&(i+="}"),s.media&&(i+="}"),s.supports&&(i+="}");var r=s.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,s)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var r=e[i]={id:i,exports:{}};return t[i](r,r.exports,s),r.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=s(379),e=s.n(t),i=s(795),n=s.n(i),r=s(569),o=s.n(r),a=s(565),l=s.n(a),c=s(216),d=s.n(c),h=s(589),u=s.n(h),p=s(480),g={};g.styleTagTransform=u(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=n(),g.insertStyleElement=d(),e()(p.Z,g),p.Z&&p.Z.locals&&p.Z.locals;class f{constructor(){this.handlers=[]}dispatch(t){for(const e of this.handlers)e(t)}subscribe(t){this.handlers.push(t)}unsubscribe(t){this.handlers=this.handlers.filter((e=>e!==t))}}class v{constructor(){this._promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}get promise(){return this._promise}setResult(t){this.resolve&&this.resolve(t)}setException(t){this.reject&&this.reject(t)}}const b=new class{constructor(){this._connection=new v,this._connectionInfo=new v,this.didReceiveGlobalSettings=new f,this.didReceiveSettings=new f,this.message=new f}async connect(t,e,s,i,n){if(!this._webSocket){const r={actionInfo:n?JSON.parse(n):null,info:JSON.parse(i),propertyInspectorUUID:e,registerEvent:s};r.actionInfo&&this.didReceiveSettings.dispatch(r.actionInfo),this._connectionInfo.setResult(r),this._webSocket=new WebSocket(`ws://localhost:${t}`),this._webSocket.onopen=this.handleOpen.bind(this),this._webSocket.onmessage=this.handleMessage.bind(this)}}getGlobalSettings(){return this.get("getGlobalSettings","didReceiveGlobalSettings")}setGlobalSettings(t){this.send("setGlobalSettings",t)}getSettings(){return this.get("getSettings","didReceiveSettings")}setSettings(t){this.send("setSettings",t)}async getConnectionInfo(){return this._connectionInfo.promise}async get(t,e,s){const i=new v,n=t=>{t.event==e&&(this.message.unsubscribe(n),i.setResult(t))};return this.message.subscribe(n),await this.send(t,s),i.promise}async send(t,e){try{const s=await this._connectionInfo.promise;(await this._connection.promise).send(JSON.stringify({event:t,context:s.propertyInspectorUUID,payload:e,action:s.actionInfo.action}))}catch(e){console.error(`Unable to send request '${t}' as there is no connection.`)}}async handleOpen(){try{const t=await this._connectionInfo.promise;this._webSocket&&(this._webSocket.send(JSON.stringify({event:t.registerEvent,uuid:t.propertyInspectorUUID})),this._connection.setResult(this._webSocket))}catch(t){this._connection.setException(t)}}handleMessage(t){const e=JSON.parse(t.data);switch(e.event){case"didReceiveGlobalSettings":this.didReceiveGlobalSettings.dispatch(e);break;case"didReceiveSettings":this.didReceiveSettings.dispatch(e)}}};window.streamDeckClient=b;const y=window.connectElgatoStreamDeckSocket;window.connectElgatoStreamDeckSocket=function(t,e,s,i,n){y&&y(t,e,s,i,n),b.connect(t,e,s,i,n)};const m=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$=Symbol(),_=new Map;class A{constructor(t,e){if(this._$cssResult$=!0,e!==$)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=_.get(this.cssText);return m&&void 0===t&&(_.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const w=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new A(s,$)},x=m?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new A("string"==typeof t?t:t+"",$))(e)})(t):t;var S;const E=window.trustedTypes,C=E?E.emptyScript:"",I=window.reactiveElementPolyfillSupport,N={toAttribute(t,e){switch(e){case Boolean:t=t?C:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},k=(t,e)=>e!==t&&(e==e||t==t),R={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:k};class M extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Eh(s,e);void 0!==i&&(this._$Eu.set(i,s),t.push(i))})),t}static createProperty(t,e=R){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||R}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(x(t))}else void 0!==t&&e.push(x(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{m?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const s=document.createElement("style"),i=window.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=e.cssText,t.appendChild(s)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=R){var i,n;const r=this.constructor._$Eh(t,s);if(void 0!==r&&!0===s.reflect){const o=(null!==(n=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:N.toAttribute)(e,s.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,e){var s,i,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),a=t.converter,l=null!==(n=null!==(i=null===(s=a)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==n?n:N.fromAttribute;this._$Ei=o,this[o]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||k)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var O;M.finalized=!0,M.elementProperties=new Map,M.elementStyles=[],M.shadowRootOptions={mode:"open"},null==I||I({ReactiveElement:M}),(null!==(S=globalThis.reactiveElementVersions)&&void 0!==S?S:globalThis.reactiveElementVersions=[]).push("1.3.1");const j=globalThis.trustedTypes,D=j?j.createPolicy("lit-html",{createHTML:t=>t}):void 0,T=`lit$${(Math.random()+"").slice(9)}$`,U="?"+T,P=`<${U}>`,L=document,z=(t="")=>L.createComment(t),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,B=Array.isArray,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,Q=/>/g,q=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,W=/'/g,Y=/"/g,J=/^(?:script|style|textarea|title)$/i,F=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),V=F(1),K=(F(2),Symbol.for("lit-noChange")),X=Symbol.for("lit-nothing"),tt=new WeakMap,et=L.createTreeWalker(L,129,null,!1),st=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":"",o=Z;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,d=0;for(;d<s.length&&(o.lastIndex=d,l=o.exec(s),null!==l);)d=o.lastIndex,o===Z?"!--"===l[1]?o=G:void 0!==l[1]?o=Q:void 0!==l[2]?(J.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=q):void 0!==l[3]&&(o=q):o===q?">"===l[0]?(o=null!=n?n:Z,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?q:'"'===l[3]?Y:W):o===Y||o===W?o=q:o===G||o===Q?o=Z:(o=q,n=void 0);const h=o===q&&t[e+1].startsWith("/>")?" ":"";r+=o===Z?s+P:c>=0?(i.push(a),s.slice(0,c)+"$lit$"+s.slice(c)+T+h):s+T+(-2===c?(i.push(void 0),e):h)}const a=r+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==D?D.createHTML(a):a,i]};class it{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,c]=st(t,e);if(this.el=it.createElement(l,s),et.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=et.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(T)){const s=c[r++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(T),e=/([.?@])?(.*)/.exec(s);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?lt:"?"===e[1]?dt:"@"===e[1]?ht:at})}else a.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(J.test(i.tagName)){const t=i.textContent.split(T),e=t.length-1;if(e>0){i.textContent=j?j.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],z()),et.nextNode(),a.push({type:2,index:++n});i.append(t[e],z())}}}else if(8===i.nodeType)if(i.data===U)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(T,t+1));)a.push({type:7,index:n}),t+=T.length-1}n++}}static createElement(t,e){const s=L.createElement("template");return s.innerHTML=t,s}}function nt(t,e,s=t,i){var n,r,o,a;if(e===K)return e;let l=void 0!==i?null===(n=s._$Cl)||void 0===n?void 0:n[i]:s._$Cu;const c=H(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,s,i)),void 0!==i?(null!==(o=(a=s)._$Cl)&&void 0!==o?o:a._$Cl=[])[i]=l:s._$Cu=l),void 0!==l&&(e=nt(t,l._$AS(t,e.values),l,i)),e}class rt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:L).importNode(s,!0);et.currentNode=n;let r=et.nextNode(),o=0,a=0,l=i[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new ot(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new ut(r,this,t)),this.v.push(e),l=i[++a]}o!==(null==l?void 0:l.index)&&(r=et.nextNode(),o++)}return n}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class ot{constructor(t,e,s,i){var n;this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=nt(this,t,e),H(t)?t===X||null==t||""===t?(this._$AH!==X&&this._$AR(),this._$AH=X):t!==this._$AH&&t!==K&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return B(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==X&&H(this._$AH)?this._$AA.nextSibling.data=t:this.k(L.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=it.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(s);else{const t=new rt(n,this),e=t.p(this.options);t.m(s),this.k(e),this._$AH=t}}_$AC(t){let e=tt.get(t.strings);return void 0===e&&tt.set(t.strings,e=new it(t)),e}S(t){B(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new ot(this.A(z()),this.A(z()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class at{constructor(t,e,s,i,n){this.type=1,this._$AH=X,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=X}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=nt(this,t,e,0),r=!H(t)||t!==this._$AH&&t!==K,r&&(this._$AH=t);else{const i=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=nt(this,i[s+o],e,o),a===K&&(a=this._$AH[o]),r||(r=!H(a)||a!==this._$AH[o]),a===X?t=X:t!==X&&(t+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.C(t)}C(t){t===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class lt extends at{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===X?void 0:t}}const ct=j?j.emptyScript:"";class dt extends at{constructor(){super(...arguments),this.type=4}C(t){t&&t!==X?this.element.setAttribute(this.name,ct):this.element.removeAttribute(this.name)}}class ht extends at{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=nt(this,t,e,0))&&void 0!==s?s:X)===K)return;const i=this._$AH,n=t===X&&i!==X||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==X&&(i===X||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class ut{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){nt(this,t)}}const pt=window.litHtmlPolyfillSupport;var gt,ft;null==pt||pt(it,ot),(null!==(O=globalThis.litHtmlVersions)&&void 0!==O?O:globalThis.litHtmlVersions=[]).push("2.2.1");class vt extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,s)=>{var i,n;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new ot(e.insertBefore(z(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return K}}vt.finalized=!0,vt._$litElement$=!0,null===(gt=globalThis.litElementHydrateSupport)||void 0===gt||gt.call(globalThis,{LitElement:vt});const bt=globalThis.litElementPolyfillSupport;null==bt||bt({LitElement:vt}),(null!==(ft=globalThis.litElementVersions)&&void 0!==ft?ft:globalThis.litElementVersions=[]).push("3.2.0");const yt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),mt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function $t(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):mt(t,e)}var _t;function At(t,e,s){const i=t.split(".");i.reduce(((t,e,n)=>n===i.length-1?t[e]=s:t[e]||(t[e]={})),e)}null===(_t=window.HTMLSlotElement)||void 0===_t||_t.prototype.assignedElements;class wt extends vt{render(){return V`
            <div class="container">
                <div>${this.renderLabel&&this.renderLabel()}</div>
                <div>${this.renderContents()}</div>
            </div>
        `}}wt.styles=[w`
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
        `];var xt=function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},St=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Et extends wt{constructor(){super(...arguments),this.disabled=!1,this.inputID=function(){const t=()=>Math.random().toString(16).slice(-4);return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}()}static get styles(){return[...super.styles,w`
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
            `]}renderLabel(){if(this.label)return V`<label for=${this.inputID}>${this.label}:</label>`}}xt([$t({type:Boolean}),St("design:type",Object)],Et.prototype,"disabled",void 0),xt([$t(),St("design:type",String)],Et.prototype,"label",void 0);let Ct=class extends Et{static get styles(){return[...super.styles,w`
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
            `]}renderContents(){return V`
            <button .id=${this.inputID} .disabled=${this.disabled}>
                <slot></slot>
            </button>
        `}};Ct=function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o}([yt("sdpi-button")],Ct);const It=new class{constructor(){b.didReceiveGlobalSettings.subscribe((t=>this._globalSettings=t.payload.settings)),b.didReceiveSettings.subscribe((t=>this._settings=t.payload.settings)),b.getGlobalSettings()}register(t,e,s,i=250){const n=e=>{var i,n;e&&e.payload&&e.payload.settings&&s((i=t,n=e.payload.settings,(Array.isArray(i)?i:i.split(".")).reduce(((t,e)=>t&&t[e]),n)||""))};return e?b.didReceiveGlobalSettings.subscribe(n):b.didReceiveSettings.subscribe(n),i?function(s,i){let n;return(s,...r)=>{clearTimeout(n),n=setTimeout((()=>{return i=s,It.set(t,e,i);var i}),i,r)}}(0,i):s=>It.set(t,e,s)}set(t,e,s){e?(this._globalSettings&&At(t,this._globalSettings,s),b.setGlobalSettings(this._globalSettings)):(this._settings&&At(t,this._settings,s),b.setSettings(this._settings))}},Nt=It.register;var kt=function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},Rt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Mt extends Et{constructor(){super(...arguments),this.isGlobal=!1}firstUpdated(){super.firstUpdated,this.setting&&(this._save=Nt(this.setting,this.isGlobal,(t=>this.value=t)))}save(t){this.value=t,this._save&&this._save(this.value)}}kt([$t({attribute:"global",type:Boolean}),Rt("design:type",Object)],Mt.prototype,"isGlobal",void 0),kt([$t(),Rt("design:type",String)],Mt.prototype,"setting",void 0),kt([$t({attribute:!1}),Rt("design:type",Object)],Mt.prototype,"value",void 0);var Ot=function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o};let jt=class extends Mt{static get styles(){return[...super.styles,w`
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
            `]}renderContents(){const t=this.text?V`<span class="text">${this.text}</span>`:void 0;return V`
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
        `}};Ot([$t(),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],jt.prototype,"text",void 0),jt=Ot([yt("sdpi-checkbox")],jt);class Dt{constructor(t){this.childNodes=[],(this._host=t).addController(this),this._observer=new MutationObserver(this.handleMutation.bind(this))}hostConnected(){this._observer.observe(this._host,{childList:!0})}hostDisconnected(){this._observer.disconnect()}handleMutation(t){t.forEach((t=>{for(const e of t.addedNodes)this.childNodes.push(e);t.removedNodes.forEach((t=>{const e=this.childNodes.indexOf(t);-1!==e&&this.childNodes.splice(e,1)}))})),this._host.requestUpdate()}}var Tt=function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},Ut=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Pt=class extends Mt{constructor(){super(),this._childNodesController=new Dt(this)}static get styles(){return[...super.styles,w`
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
            `]}renderContents(){return V`
            <select .id=${this.inputID} .disabled=${this.disabled} .value=${this.value||""} @change=${t=>this.save(t.target.value)}>
                <option value="" disabled .hidden=${!this.placeholder||void 0!==this.value}>${this.placeholder}</option>
                ${this.renderChildNodes()}
            </select>
        `}renderChildNodes(){if(0===this.childNodes.length)return;const t=e=>{switch(e.nodeName){case"OPTGROUP":return V`<optgroup .label=${e.label}>${Array.from(e.childNodes).map(t)}</optgroup>`;case"OPTION":return V`<option .disabled=${e.disabled} .value=${e.text}>${e.label}</option>`;default:return}};return V`${this._childNodesController.childNodes.map(t)}`}};Tt([$t(),Ut("design:type",String)],Pt.prototype,"placeholder",void 0),Pt=Tt([yt("sdpi-select"),Ut("design:paramtypes",[])],Pt);var Lt=function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},zt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ht=class extends Mt{constructor(){super(...arguments),this.rows=3,this.showLength=!1}static get styles(){return[...super.styles,w`
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
            `]}renderContents(){return V`
            <textarea
                type="textarea"
                maxlength=${(t=>null!=t?t:X)(this.maxLength)}
                .id=${this.inputID}
                .disabled=${this.disabled}
                .rows=${this.rows}
                .value=${this.value||""}
                @input=${t=>this.save(t.target.value)}
            ></textarea>
            ${this.getLengthLabel()}
        `}getLengthLabel(){var t;if(this.showLength||this.maxLength){const e=this.maxLength?V`/${this.maxLength}`:void 0;return V`<label id="length" for=${this.inputID}>${null===(t=this.value)||void 0===t?void 0:t.length}${e}</label>`}}};Lt([$t({attribute:"maxlength",type:Number}),zt("design:type",Number)],Ht.prototype,"maxLength",void 0),Lt([$t({type:Number}),zt("design:type",Object)],Ht.prototype,"rows",void 0),Lt([$t({attribute:"showlength",type:Boolean}),zt("design:type",Object)],Ht.prototype,"showLength",void 0),Ht=Lt([yt("sdpi-textarea")],Ht);var Bt=function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},Zt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Gt=class extends Mt{constructor(){super(...arguments),this.pattern="",this.placeholder="",this.required=!1}static get styles(){return[...super.styles,w`
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
            `]}renderContents(){return V`
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
        `}};Bt([$t(),Zt("design:type",Object)],Gt.prototype,"pattern",void 0),Bt([$t(),Zt("design:type",Object)],Gt.prototype,"placeholder",void 0),Bt([$t({type:Boolean}),Zt("design:type",Object)],Gt.prototype,"required",void 0),Gt=Bt([yt("sdpi-textfield")],Gt)})()})();