/*! For license information please see sdpi.js.LICENSE.txt */
(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class s{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const n=(t,...i)=>{const n=1===t.length?t[0]:i.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new s(n,e)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new s("string"==typeof t?t:t+"",e))(i)})(t):t;var o;const a=window.trustedTypes,l=a?a.emptyScript:"",c=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},h=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=u){var s,n;const r=this.constructor._$Eh(t,i);if(void 0!==r&&!0===i.reflect){const o=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:d.toAttribute)(e,i.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,e){var i,s,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),a=t.converter,l=null!==(n=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==n?n:d.fromAttribute;this._$Ei=o,this[o]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var v;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:p}),(null!==(o=globalThis.reactiveElementVersions)&&void 0!==o?o:globalThis.reactiveElementVersions=[]).push("1.3.1");const g=globalThis.trustedTypes,f=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,y="?"+b,m=`<${y}>`,$=document,w=(t="")=>$.createComment(t),_=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,L=t=>{var e;return x(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,S=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,E=/'/g,R=/"/g,M=/^(?:script|style|textarea|title)$/i,O=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),j=O(1),N=(O(2),Symbol.for("lit-noChange")),I=Symbol.for("lit-nothing"),U=new WeakMap,P=$.createTreeWalker($,129,null,!1),D=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=A;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,l=o.exec(i),null!==l);)d=o.lastIndex,o===A?"!--"===l[1]?o=k:void 0!==l[1]?o=S:void 0!==l[2]?(M.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=C):void 0!==l[3]&&(o=C):o===C?">"===l[0]?(o=null!=n?n:A,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?C:'"'===l[3]?R:E):o===R||o===E?o=C:o===k||o===S?o=A:(o=C,n=void 0);const h=o===C&&t[e+1].startsWith("/>")?" ":"";r+=o===A?i+m:c>=0?(s.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+b+h):i+b+(-2===c?(s.push(void 0),e):h)}const a=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(a):a,s]};class T{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,c]=D(t,e);if(this.el=T.createElement(l,i),P.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=P.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(b)){const i=c[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(b),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?Q:"@"===e[1]?F:B})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(M.test(s.tagName)){const t=s.textContent.split(b),e=t.length-1;if(e>0){s.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],w()),P.nextNode(),a.push({type:2,index:++n});s.append(t[e],w())}}}else if(8===s.nodeType)if(s.data===y)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(b,t+1));)a.push({type:7,index:n}),t+=b.length-1}n++}}static createElement(t,e){const i=$.createElement("template");return i.innerHTML=t,i}}function z(t,e,i=t,s){var n,r,o,a;if(e===N)return e;let l=void 0!==s?null===(n=i._$Cl)||void 0===n?void 0:n[s]:i._$Cu;const c=_(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(o=(a=i)._$Cl)&&void 0!==o?o:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=z(t,l._$AS(t,e.values),l,s)),e}class H{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:$).importNode(i,!0);P.currentNode=n;let r=P.nextNode(),o=0,a=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new Z(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new Y(r,this,t)),this.v.push(e),l=s[++a]}o!==(null==l?void 0:l.index)&&(r=P.nextNode(),o++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{constructor(t,e,i,s){var n;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),_(t)?t===I||null==t||""===t?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==N&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):L(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==I&&_(this._$AH)?this._$AA.nextSibling.data=t:this.k($.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=T.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new H(n,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=U.get(t.strings);return void 0===e&&U.set(t.strings,e=new T(t)),e}S(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Z(this.A(w()),this.A(w()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class B{constructor(t,e,i,s,n){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=z(this,t,e,0),r=!_(t)||t!==this._$AH&&t!==N,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=z(this,s[i+o],e,o),a===N&&(a=this._$AH[o]),r||(r=!_(a)||a!==this._$AH[o]),a===I?t=I:t!==I&&(t+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.C(t)}C(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends B{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===I?void 0:t}}const q=g?g.emptyScript:"";class Q extends B{constructor(){super(...arguments),this.type=4}C(t){t&&t!==I?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class F extends B{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=z(this,t,e,0))&&void 0!==i?i:I)===N)return;const s=this._$AH,n=t===I&&s!==I||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==I&&(s===I||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const W={P:"$lit$",L:b,V:y,I:1,N:D,R:H,D:L,j:z,H:Z,O:B,F:Q,B:F,W:G,Z:Y},V=window.litHtmlPolyfillSupport;var K,J;null==V||V(T,Z),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.2.1");class X extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new Z(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return N}}X.finalized=!0,X._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:X});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:X}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.2.0");const et=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),it=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function st(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):it(t,e)}var nt;null===(nt=window.HTMLSlotElement)||void 0===nt||nt.prototype.assignedElements;class rt{constructor(){this.handlers=[]}dispatch(t){for(const e of this.handlers)e(t)}subscribe(t){this.handlers.push(t)}unsubscribe(t){this.handlers=this.handlers.filter((e=>e!==t))}}class ot{constructor(){this._promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}get promise(){return this._promise}setResult(t){this.resolve&&this.resolve(t)}setException(t){this.reject&&this.reject(t)}}const at=new class{constructor(){this._connection=new ot,this._connectionInfo=new ot,this.didReceiveGlobalSettings=new rt,this.didReceiveSettings=new rt,this.message=new rt}async connect(t,e,i,s,n){if(!this._webSocket){const r={actionInfo:n?JSON.parse(n):null,info:JSON.parse(s),propertyInspectorUUID:e,registerEvent:i};r.actionInfo&&this.didReceiveSettings.dispatch(r.actionInfo),this._connectionInfo.setResult(r),this._webSocket=new WebSocket(`ws://localhost:${t}`),this._webSocket.onopen=this.handleOpen.bind(this),this._webSocket.onmessage=this.handleMessage.bind(this)}}getGlobalSettings(){return this.get("getGlobalSettings",(t=>"didReceiveGlobalSettings"===t.event))}setGlobalSettings(t){this.send("setGlobalSettings",t)}getSettings(){return this.get("getSettings",(t=>"didReceiveSettings"===t.event))}setSettings(t){this.send("setSettings",t)}async getConnectionInfo(){return this._connectionInfo.promise}async get(t,e,i){const s=new ot,n=t=>{e(t)&&(this.message.unsubscribe(n),s.setResult(t))};return this.message.subscribe(n),await this.send(t,i),s.promise}async send(t,e){try{const i=await this._connectionInfo.promise;(await this._connection.promise).send(JSON.stringify({event:t,context:i.propertyInspectorUUID,payload:e,action:i.actionInfo.action}))}catch(e){console.error(`Unable to send request '${t}' as there is no connection.`)}}async handleOpen(){try{const t=await this._connectionInfo.promise;this._webSocket&&(this._webSocket.send(JSON.stringify({event:t.registerEvent,uuid:t.propertyInspectorUUID})),this._connection.setResult(this._webSocket))}catch(t){this._connection.setException(t)}}handleMessage(t){const e=JSON.parse(t.data);switch(e.event){case"didReceiveGlobalSettings":this.didReceiveGlobalSettings.dispatch(e);break;case"didReceiveSettings":this.didReceiveSettings.dispatch(e)}this.message.dispatch(e)}};async function lt(){return"windows"==(await at.getConnectionInfo()).info.application.platform}class ct{constructor(t,e){this.nodeNames=t,this.callback=e,this.observer=new MutationObserver(this.handleMutation.bind(this)),this.items=[]}observe(t){this.observer.observe(t,{childList:!0})}disconnect(){this.observer.disconnect()}handleMutation(t){let e=!1;t.forEach((t=>{for(const i of t.addedNodes)this.nodeNames.indexOf(i.nodeName.toLowerCase())>-1&&(e=!0,this.items.push(i));t.removedNodes.forEach((t=>{const i=this.items.indexOf(t);-1!==i&&(e=!0,this.items.splice(i,1))}))})),e&&this.callback(this.items)}}function dt(t){return void 0===t?[]:Array.isArray(t)?[...t]:[t]}function ht(){const t=()=>Math.random().toString(16).slice(-4);return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}function ut(t,e){return(Array.isArray(t)?t:t.split(".")).reduce(((t,e)=>t&&t[e]),e)}const pt=t=>class extends t{static get styles(){return[dt(super.styles),n`
                    :host {
                        --checkbox-size: 16px;
                    }

                    .checkable-container {
                        align-items: center;
                        display: inline-flex;
                        padding: var(--spacer) 0 0 0;
                        user-select: none;
                        width: auto;
                    }

                    .checkable-container > input {
                        display: none;
                    }

                    .checkable-container > input:not(:disabled) ~ span {
                        cursor: pointer;
                    }

                    .checkable-container > input:disabled ~ span {
                        opacity: 0.5;
                    }

                    .checkable-container > .checkable-symbol {
                        align-self: flex-start;
                        background: var(--input-bg-color);
                        border: 1px solid rgba(0, 0, 0, 0.2);
                        border-radius: 3px;
                        flex: 0 0 var(--checkbox-size);
                        height: var(--checkbox-size);
                        width: var(--checkbox-size);
                    }

                    .checkable-container > input[type='radio'] ~ .checkable-symbol {
                        border-radius: 50%;
                    }

                    .checkable-container > .checkable-text {
                        flex: 0 1 auto;
                        margin: 0 0 0 var(--spacer);
                    }

                    .checkable-container > input:checked ~ .checkable-symbol {
                        background: #77f no-repeat center center;
                        border: 1px solid rgba(0, 0, 0, 0.4);
                    }

                    .checkable-container > input[type='checkbox']:checked ~ .checkable-symbol {
                        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10' viewBox='0 0 12 10'%3E%3Cpolygon fill='%23FFF' points='7.2 7.5 7.2 -1.3 8.7 -1.3 8.6 9.1 2.7 8.7 2.7 7.2' transform='rotate(37 5.718 3.896)'/%3E%3C/svg%3E%0A");
                    }

                    .checkable-container > input[type='radio']:checked ~ .checkable-symbol {
                        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6' viewBox='0 0 6 6'%3E%3Ccircle cx='3' cy='3' r='3' fill='%23FFF'/%3E%3C/svg%3E%0A");
                    }
                `]}renderCheckable(t,e,i){return j`
                <label class="checkable-container">
                    ${e}
                    <span class="checkable-symbol" role=${t}></span>
                    ${i?j`<span class="checkable-text">${i}</span>`:void 0}
                </label>
            `}},vt=Symbol();class gt{constructor(t,e,i){this.t=0,this.status=0,this.autoRun=!0,this.i=t,this.i.addController(this);const s="object"==typeof e?e:{task:e,args:i};this.h=s.task,this.o=s.args,void 0!==s.autoRun&&(this.autoRun=s.autoRun),this.taskComplete=new Promise(((t,e)=>{this.l=t,this.u=e}))}hostUpdated(){this.performTask()}async performTask(){var t;const e=null===(t=this.o)||void 0===t?void 0:t.call(this);this.shouldRun(e)&&this.run(e)}shouldRun(t){return this.autoRun&&this.v(t)}async run(t){var e;let i,s;null!=t||(t=null===(e=this.o)||void 0===e?void 0:e.call(this)),2!==this.status&&3!==this.status||(this.taskComplete=new Promise(((t,e)=>{this.l=t,this.u=e}))),this.status=1,this.m=void 0,this.p=void 0,this.i.requestUpdate();const n=++this.t;try{i=await this.h(t)}catch(t){s=t}this.t===n&&(i===vt?this.status=0:(void 0===s?(this.status=2,this.l(i)):(this.status=3,this.u(s)),this.p=i,this.m=s),this.i.requestUpdate())}get value(){return this.p}get error(){return this.m}render(t){var e,i,s,n;switch(this.status){case 0:return null===(e=t.initial)||void 0===e?void 0:e.call(t);case 1:return null===(i=t.pending)||void 0===i?void 0:i.call(t);case 2:return null===(s=t.complete)||void 0===s?void 0:s.call(t,this.value);case 3:return null===(n=t.error)||void 0===n?void 0:n.call(t,this.error);default:this.status}}v(t){const e=this.g;return this.g=t,Array.isArray(t)&&Array.isArray(e)?t.length===e.length&&t.some(((t,i)=>h(t,e[i]))):t!==e}}var ft=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o},bt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const yt=t=>{class e extends t{constructor(...t){super(t),this._itemsDirtyFlag=!1,this._mutationObserver=new ct(["optgroup","option"],(()=>this._itemsDirtyFlag=!this._itemsDirtyFlag)),this.loadingText="Loading...",this.items=new gt(this,(async([t])=>void 0===t?this.getItemsFromChildNodes():(await at.get("sendToPlugin",(t=>{var e;return"sendToPropertyInspector"===t.event&&(null===(e=t.payload)||void 0===e?void 0:e.event)===this.dataSource}),{event:this.dataSource})).payload.items),(()=>[this.dataSource,this._itemsDirtyFlag])),this._mutationObserver.observe(this)}renderDataSource(t,e){if(void 0===this.items.value||0===this.items.value.length)return[void 0];const i=s=>this.isItemGroup(s)?e?e(s,s.children.map(i)):void 0:this.isItem(s)?t(s):void 0;return this.items.value.map(i)}getItemsFromChildNodes(){const t=(e,i)=>(i instanceof HTMLOptGroupElement?e.push({label:i.label,children:Array.from(i.childNodes).reduce(t,[])}):i instanceof HTMLOptionElement&&e.push({disabled:i.disabled,label:i.text,value:i.value}),e);return this._mutationObserver.items.reduce(t,[])}isItem(t){return t&&void 0!==t.value}isItemGroup(t){return t&&void 0!==t.children&&Array.isArray(t.children)}}return ft([st({...i,state:!0}),bt("design:type",Object)],e.prototype,"_itemsDirtyFlag",void 0),ft([st(),bt("design:type",String)],e.prototype,"dataSource",void 0),ft([st({attribute:"loading"}),bt("design:type",Object)],e.prototype,"loadingText",void 0),e;var i},{H:mt}=W,$t=t=>(...e)=>({_$litDirective$:t,values:e}),wt=(t,e)=>{var i,s;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(s=(i=t)._$AO)||void 0===s||s.call(i,e,!1),wt(t,e);return!0},_t=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},xt=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),kt(e)}};function Lt(t){void 0!==this._$AN?(_t(this),this._$AM=t,xt(this)):this._$AM=t}function At(t,e=!1,i=0){const s=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)wt(s[t],!1),_t(s[t]);else null!=s&&(wt(s,!1),_t(s));else wt(this,t)}const kt=t=>{var e,i,s,n;2==t.type&&(null!==(e=(s=t)._$AP)&&void 0!==e||(s._$AP=At),null!==(i=(n=t)._$AQ)&&void 0!==i||(n._$AQ=Lt))};class St extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),xt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(wt(this,t),_t(this))}setValue(t){if((t=>void 0===this._$Ct.strings)())this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class Ct{}const Et=new WeakMap,Rt=$t(class extends St{render(t){return I}update(t,[e]){var i;const s=e!==this.U;return s&&void 0!==this.U&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.U=e,this.ht=null===(i=t.options)||void 0===i?void 0:i.host,this.ot(this.lt=t.element)),I}ot(t){"function"==typeof this.U?(void 0!==Et.get(this.U)&&this.U.call(this.ht,void 0),Et.set(this.U,t),void 0!==t&&this.U.call(this.ht,t)):this.U.value=t}get rt(){var t;return"function"==typeof this.U?Et.get(this.U):null===(t=this.U)||void 0===t?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),Mt=t=>class extends t{constructor(){super(...arguments),this.focusElement=new Ct}get canFocus(){return void 0!==this.focusElement.value}focus(){var t;if(console.log(null===(t=this.focusElement.value)||void 0===t?void 0:t.type),this.focusElement.value)switch(this.focusElement.value.type){case"checkbox":{const t=this.focusElement.value;t.checked=!t.checked;break}case"file":this.focusElement.value.click();break;default:this.focusElement.value.focus()}}};var Ot=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const jt=t=>{class e extends t{constructor(){super(...arguments),this.columns=1}static get styles(){return[dt(super.styles),n`
                    .gridded-container {
                        display: flex;
                        flex-wrap: wrap;
                    }

                    .gridded-container > .gridded-item {
                        box-sizing: border-box;
                        margin: 0 var(--spacer) 0 0;
                        flex: 0 1;
                    }

                    .gridded-container > .gridded-col-1 {
                        flex-basis: 100%;
                    }

                    .gridded-container > .gridded-col-2 {
                        flex-basis: calc((100% / 2) - (var(--spacer) * 1 / 2));
                    }

                    .gridded-container > .gridded-col-3 {
                        flex-basis: calc((100% / 3 - (var(--spacer) * 2 / 3)));
                    }

                    .gridded-container > .gridded-col-4 {
                        flex-basis: calc((100% / 4 - (var(--spacer) * 3 / 4)));
                    }

                    .gridded-container > .gridded-col-5 {
                        flex-basis: calc((100% / 5 - (var(--spacer) * 4 / 5)));
                    }

                    .gridded-container > .gridded-col-6 {
                        flex-basis: calc((100% / 6 - (var(--spacer) * 5 / 6)));
                    }

                    .gridded-container > .gridded-col-1,
                    .gridded-container > .gridded-col-2:nth-child(2n),
                    .gridded-container > .gridded-col-3:nth-child(3n),
                    .gridded-container > .gridded-col-4:nth-child(4n),
                    .gridded-container > .gridded-col-5:nth-child(5n),
                    .gridded-container > .gridded-col-6:nth-child(6n) {
                        margin-right: 0;
                    }
                `]}renderGrid(t){if(0!==t.length)return j`<div class="gridded-container">${t.map((t=>j`<div class="gridded-item gridded-col-${this.columns}">${t}</div>`))}</div>`}}return function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);r>3&&o&&Object.defineProperty(e,i,o)}([st({type:Number}),Ot("design:type",Object)],e.prototype,"columns",void 0),e},Nt=n`
    :host {
        /* Box model */
        --spacer: 4px;

        /* Colors */
        --window-bg-color: #2d2d2d;
        --font-color: #9a9a9a;
        --input-bg-color: #3d3d3d;
        --input-font-color: #d8d8d8;

        --scrollbar-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

        /* Typography */
        --font-family: Arial, 'Segoe UI', Roboto, Helvetica sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        --font-size: 8pt;
    }
`;var It=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o},Ut=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const Pt=t=>{class e extends t{constructor(){super(...arguments),this.disabled=!1,this.inputId=ht()}static get styles(){return[dt(super.styles),Nt,n`
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
                        color: var(--input-font-color);
                        font-size: var(--font-size);
                        font-family: var(--font-family);
                    }
                `]}}return It([st({type:Boolean}),Ut("design:type",Object)],e.prototype,"disabled",void 0),It([st({attribute:!1}),Ut("design:type",Object)],e.prototype,"value",void 0),e},Dt=new class{constructor(){at.didReceiveGlobalSettings.subscribe((t=>this._globalSettings=t.payload.settings)),at.didReceiveSettings.subscribe((t=>this._settings=t.payload.settings)),at.getGlobalSettings()}register(t,e,i,s=250){const n=e=>{e&&e.payload&&e.payload.settings&&i(ut(t,e.payload.settings))};return e?at.didReceiveGlobalSettings.subscribe(n):at.didReceiveSettings.subscribe(n),s?function(i,s){let n;return(i,...r)=>{clearTimeout(n),n=setTimeout((()=>{return s=i,Dt.set(t,e,s);var s}),s,r)}}(0,s):i=>Dt.set(t,e,i)}set(t,e,i){e?this.tryUpdate(t,i,this._globalSettings)&&at.setGlobalSettings(this._globalSettings):this.tryUpdate(t,i,this._settings)&&at.setSettings(this._settings)}tryUpdate(t,e,i){return void 0!==i&&(ut(t,i)!==e&&(function(t,e,i){const s=t.split(".");s.reduce(((t,e,n)=>n===s.length-1?t[e]=i:t[e]||(t[e]={})),e)}(t,i,e),!0))}},Tt=Dt.register;var zt=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o},Ht=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const Zt=t=>{class e extends t{constructor(){super(...arguments),this.isGlobal=!1}firstUpdated(t){super.firstUpdated(t),this.setting&&(this.save=Tt(this.setting,this.isGlobal,(t=>this.value=t)))}willUpdate(t){t.has("value")&&this.save&&this.save(this.value)}}return zt([st({attribute:"global",type:Boolean}),Ht("design:type",Object)],e.prototype,"isGlobal",void 0),zt([st(),Ht("design:type",String)],e.prototype,"setting",void 0),zt([st({attribute:!1}),Ht("design:type",Object)],e.prototype,"value",void 0),e};let Bt=class extends(Pt(X)){static get styles(){return[...super.styles,Nt,n`
                button {
                    background-color: var(--window-bg-color);
                    border: 1px solid #969696;
                    border-radius: 3px;
                    padding: calc(var(--spacer) * 1.5);
                }

                button:not(:disabled):hover {
                    background-color: #464646;
                    cursor: pointer;
                }

                button:not(:disabled):active {
                    background-color: var(--window-bg-color);
                    border-color: #646464;
                    color: #969696;
                }

                button:disabled {
                    opacity: 0.5;
                }
            `]}render(){return j`
            <button .disabled=${this.disabled} .value=${this.value||""}>
                <slot></slot>
            </button>
        `}};Bt=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}([et("sdpi-button")],Bt);const Gt=t=>null!=t?t:I;class qt extends class{constructor(t,e){this.host=t,this.host.addController(this),this.observer=new ct(e,this.handleMutation.bind(this))}get items(){return this.observer.items}hostConnected(){this.observer.observe(this.host)}hostDisconnected(){this.observer.disconnect()}handleMutation(){if(this.mutated){const t={preventRequestUpdate:!1};if(this.mutated(t),t.preventRequestUpdate)return}this.host.requestUpdate()}}{constructor(t){super(t,["datalist"])}mutated(t){0===this.items.length?this.dataList=void 0:void 0===this.dataList||this.dataList.id!==this.items[0].id?(this.items[0].id=this.items[0].id||ht(),this.dataList=this.items[0].cloneNode(!0)):t.preventRequestUpdate=!0}}var Qt=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o},Ft=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Yt=class extends(Zt(Mt(Pt(X)))){constructor(){super(...arguments),this.dataListController=new qt(this),this.type="date"}static get styles(){return[...super.styles,n`
                input {
                    background-color: var(--input-bg-color);
                    padding: calc(var(--spacer) + 1px) var(--spacer);
                }

                input[type='time'] {
                    padding: calc(var(--spacer) + 2px) var(--spacer);
                }

                input:disabled {
                    opacity: 0.5;
                }

                ::-webkit-inner-spin-button,
                ::-webkit-clear-button {
                    display: none;
                }

                ::-webkit-calendar-picker-indicator {
                    -webkit-appearance: none;
                    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cg fill='%239C9C9C'%3E%3Cpath d='M15,15 L1.77635684e-15,15 L1.77635684e-15,1 L15,1 L15,15 Z M5,7 L5,8 L6,8 L6,7 L5,7 Z M3,7 L3,8 L4,8 L4,7 L3,7 Z M7,7 L7,8 L8,8 L8,7 L7,7 Z M9,7 L9,8 L10,8 L10,7 L9,7 Z M11,7 L11,8 L12,8 L12,7 L11,7 Z M3,9 L3,10 L4,10 L4,9 L3,9 Z M5,9 L5,10 L6,10 L6,9 L5,9 Z M7,9 L7,10 L8,10 L8,9 L7,9 Z M9,9 L9,10 L10,10 L10,9 L9,9 Z M11,9 L11,10 L12,10 L12,9 L11,9 Z M3,11 L3,12 L4,12 L4,11 L3,11 Z M5,11 L5,12 L6,12 L6,11 L5,11 Z M7,11 L7,12 L8,12 L8,11 L7,11 Z M9,11 L9,12 L10,12 L10,11 L9,11 Z M11,11 L11,12 L12,12 L12,11 L11,11 Z M14,4 L14,2 L1,2 L1,4 L14,4 Z'/%3E%3Crect width='1' height='1' x='2'/%3E%3Crect width='1' height='1' x='12'/%3E%3C/g%3E%3C/svg%3E%0A")
                        top left no-repeat;
                    cursor: pointer;
                    font-size: 0;
                    margin: 0 calc(var(--spacer) / 2) 0 0;
                    opacity: 1;
                    padding: 8px;
                }

                ::-webkit-calendar-picker-indicator:hover {
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cg fill='%23CECECE'%3E%3Cpath d='M15,15 L1.77635684e-15,15 L1.77635684e-15,1 L15,1 L15,15 Z M5,7 L5,8 L6,8 L6,7 L5,7 Z M3,7 L3,8 L4,8 L4,7 L3,7 Z M7,7 L7,8 L8,8 L8,7 L7,7 Z M9,7 L9,8 L10,8 L10,7 L9,7 Z M11,7 L11,8 L12,8 L12,7 L11,7 Z M3,9 L3,10 L4,10 L4,9 L3,9 Z M5,9 L5,10 L6,10 L6,9 L5,9 Z M7,9 L7,10 L8,10 L8,9 L7,9 Z M9,9 L9,10 L10,10 L10,9 L9,9 Z M11,9 L11,10 L12,10 L12,9 L11,9 Z M3,11 L3,12 L4,12 L4,11 L3,11 Z M5,11 L5,12 L6,12 L6,11 L5,11 Z M7,11 L7,12 L8,12 L8,11 L7,11 Z M9,11 L9,12 L10,12 L10,11 L9,11 Z M11,11 L11,12 L12,12 L12,11 L11,11 Z M14,4 L14,2 L1,2 L1,4 L14,4 Z'/%3E%3Crect width='1' height='1' x='2'/%3E%3Crect width='1' height='1' x='12'/%3E%3C/g%3E%3C/svg%3E%0A");
                }
            `]}render(){var t;return j`
            <input
                ${Rt(this.focusElement)}
                type=${this.type}
                list=${Gt(null===(t=this.dataListController.dataList)||void 0===t?void 0:t.id)}
                max=${Gt(this.max)}
                min=${Gt(this.min)}
                step=${Gt(this.step)}
                .disabled=${this.disabled}
                .value=${this.value||""}
                @change="${t=>this.value=t.target.value}"
            />
            ${this.dataListController.dataList}
        `}};Qt([st(),Ft("design:type",String)],Yt.prototype,"max",void 0),Qt([st(),Ft("design:type",String)],Yt.prototype,"min",void 0),Qt([st({type:Number}),Ft("design:type",Number)],Yt.prototype,"step",void 0),Qt([st(),Ft("design:type",String)],Yt.prototype,"type",void 0),Yt=Qt([et("sdpi-calendar")],Yt);var Wt=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Vt=class extends(Zt(Mt(pt(Pt(X))))){render(){return this.renderCheckable("checkbox",j`<input
                ${Rt(this.focusElement)}
                type="checkbox"
                .checked=${this.value||!1}
                .disabled=${this.disabled}
                @change=${t=>this.value=t.target.checked}
            />`,this.label)}};Wt([st(),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Vt.prototype,"label",void 0),Vt=Wt([et("sdpi-checkbox")],Vt);let Kt=class extends(jt(Zt(pt(yt(Pt(X)))))){static get styles(){return[...super.styles,n`
                .loading {
                    margin: 0;
                    padding: calc(var(--spacer) * 1.5) 0;
                    user-select: none;
                }
            `]}render(){return this.items.render({pending:()=>j`<p class="loading">${this.loadingText}</p>`,complete:()=>this.renderGrid(this.renderDataSource((t=>this.renderCheckable("checkbox",j`
                                <input
                                    type="checkbox"
                                    .checked=${this.value&&this.value.indexOf(t.value)>-1||!1}
                                    .disabled=${this.disabled||t.disabled||!1}
                                    .value=${t.value}
                                    @change=${this.handleChange}
                                />
                            `,t.label))))})}handleChange(t){const e=new Set(this.value);t.target.checked?e.add(t.target.value):e.delete(t.target.value),this.value=Array.from(e)}};Kt=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}([et("sdpi-checkbox-list")],Kt);let Jt=class extends(Zt(Mt(Pt(X)))){static get styles(){return[...super.styles,n`
                input {
                    background-color: var(--input-bg-color);
                }

                input:disabled {
                    opacity: 0.5;
                }
            `]}render(){return j`
            <input
                type="color"
                ${Rt(this.focusElement)}
                .disabled=${this.disabled}
                .defaultValue=${this.value||""}
                @change=${t=>this.value=t.target.value}
            />
        `}};Jt=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}([et("sdpi-color")],Jt);class Xt{constructor(t){this.U=t}disconnect(){this.U=void 0}reconnect(t){this.U=t}deref(){return this.U}}class te{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.q=t)))}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Y=this.q=void 0}}const ee=t=>{return!(e=t,null===e||"object"!=typeof e&&"function"!=typeof e||"function"!=typeof t.then);var e},ie=$t(class extends St{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CG=new Xt(this),this._$CK=new te}render(...t){var e;return null!==(e=t.find((t=>!ee(t))))&&void 0!==e?e:N}update(t,e){const i=this._$Cyt;let s=i.length;this._$Cyt=e;const n=this._$CG,r=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const o=e[t];if(!ee(o))return this._$Cwt=t,o;t<s&&o===i[t]||(this._$Cwt=1073741823,s=0,Promise.resolve(o).then((async t=>{for(;r.get();)await r.get();const e=n.deref();if(void 0!==e){const i=e._$Cyt.indexOf(o);i>-1&&i<e._$Cwt&&(e._$Cwt=i,e.setValue(t))}})))}return N}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}});var se=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o},ne=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let re=class extends(Zt(Mt(Pt(X)))){constructor(){super(...arguments),this.label="..."}static get styles(){return[...super.styles,n`
                .container {
                    align-items: stretch;
                    display: flex;
                }

                input {
                    display: none;
                }

                input:disabled ~ label.value {
                    opacity: 0.5;
                }

                label.value {
                    background-color: var(--input-bg-color);
                    color: var(--input-font-color);
                    display: flex;
                    flex: 1 1 auto;
                    font-family: var(--font-family);
                    font-size: var(--font-size);
                    line-height: 1.5em;
                    padding: var(--spacer);
                }

                label.value > span {
                    align-self: center;
                }

                label.button {
                    margin-left: var(--spacer);
                    flex: 0 0 auto;
                }
            `]}render(){return j`
            <div class="container">
                <input
                    ${Rt(this.focusElement)}
                    type="file"
                    id="file_input"
                    .accept=${this.accept||""}
                    .disabled=${this.disabled}
                    @change="${async t=>this.value=await async function(t){const e=decodeURIComponent(t.replace(/^C:\\fakepath\\/,""));return await lt()?e.replace(new RegExp("/","g"),"\\"):e}(t.target.value)}"
                />
                <label class="value" for="file_input">
                    <span .title=${this.value||""}>${ie(async function(t){const e=await lt()?"\\":"/",i=t.split(e);return 1==i.length?t:i[i.length-1]}(this.value||""))}</span>
                </label>
                <label class="button">
                    <sdpi-button .disabled=${this.disabled} @click=${()=>{var t;return null===(t=this.focusElement.value)||void 0===t?void 0:t.click()}}> ${this.label} </sdpi-button>
                </label>
            </div>
        `}};se([st(),ne("design:type",String)],re.prototype,"accept",void 0),se([st(),ne("design:type",Object)],re.prototype,"label",void 0),re=se([et("sdpi-file")],re);var oe=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let ae=class extends(Zt(Mt(Pt(X)))){static get styles(){return[...super.styles,Nt,n`
                input {
                    background-color: var(--input-bg-color);
                    padding: calc(var(--spacer) + 3px) var(--spacer);
                }

                input:disabled {
                    opacity: 0.5;
                }
            `]}render(){return j`
            <input
                ${Rt(this.focusElement)}
                type="password"
                maxlength=${Gt(this.maxLength)}
                .disabled=${this.disabled}
                .value=${this.value||""}
                @input=${t=>this.value=t.target.value}
            />
        `}};oe([st({attribute:"maxlength",type:Number}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Number)],ae.prototype,"maxLength",void 0),ae=oe([et("sdpi-password")],ae);let le=class extends(jt(Zt(pt(yt(Pt(X)))))){static get styles(){return[...super.styles,n`
                .loading {
                    margin: 0;
                    padding: calc(var(--spacer) * 1.5) 0;
                    user-select: none;
                }
            `]}render(){return this.items.render({pending:()=>j`<p class="loading">${this.loadingText}</p>`,complete:()=>this.renderGrid(this.renderDataSource((t=>this.renderCheckable("radio",j`
                                <input
                                    type="radio"
                                    name="_"
                                    .checked=${this.value===t.value}
                                    .disabled=${this.disabled||t.disabled||!1}
                                    .value=${t.value}
                                    @change=${t=>this.value=t.target.value}
                                />
                            `,t.label))))})}};le=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}([et("sdpi-radio")],le);var ce=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o},de=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let he=class extends(Zt(Mt(Pt(X)))){constructor(){super(...arguments),this.showLabels=!1}static get styles(){return[...super.styles,n`
                input {
                    -webkit-appearance: none;
                    margin: 0;
                    height: 22px;
                    background-color: transparent;
                }

                input:disabled,
                .container > div[aria-disabled='true'] {
                    cursor: default;
                    opacity: 0.5;
                }

                ::-webkit-slider-runnable-track {
                    margin-top: 2px;
                    height: 5px;
                    padding: 0px !important;

                    border: solid 1px var(--input-bg-color);
                    background: #636363;
                    border-radius: 3px;
                }

                ::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    background-color: var(--input-font-color);
                    border-radius: 50%;
                    cursor: pointer;
                    top: -4px;
                    position: relative;
                    height: 12px;
                    width: 12px;
                }

                input:disabled::-webkit-slider-thumb {
                    cursor: default;
                }

                input::-webkit-slider-thumb::before {
                    position: absolute;
                    content: '';
                }

                .container {
                    display: flex;
                    align-items: center;
                }

                .container > div {
                    flex: 0 1;
                }

                div[role='button'] {
                    cursor: pointer;
                    user-select: none;
                }

                .container > div:nth-child(2) {
                    flex: 1 1;
                    margin: 0 var(--spacer);
                }
            `]}render(){var t,e;const i=j`
            <input
                ${Rt(this.focusElement)}
                type="range"
                max=${Gt(this.max)}
                min=${Gt(this.min)}
                step=${Gt(this.step)}
                .disabled=${this.disabled}
                .title=${(null===(t=this.value)||void 0===t?void 0:t.toString())||""}
                .value=${(null===(e=this.value)||void 0===e?void 0:e.toString())||""}
                @change=${t=>this.value=t.target.valueAsNumber}
            />
        `;return this.showLabels?j`<div class="container">
                <div aria-disabled=${this.disabled} role="button" @click=${()=>!this.disabled&&void 0!==this.min&&(this.value=this.min)}>${this.min}</div>
                <div>${i}</div>
                <div aria-disabled=${this.disabled} role="button" @click=${()=>!this.disabled&&void 0!==this.max&&(this.value=this.max)}>${this.max}</div>
            </div>`:i}};ce([st({type:Number}),de("design:type",Number)],he.prototype,"max",void 0),ce([st({type:Number}),de("design:type",Number)],he.prototype,"min",void 0),ce([st({attribute:"showlabels",type:Boolean}),de("design:type",Object)],he.prototype,"showLabels",void 0),ce([st({type:Number}),de("design:type",Number)],he.prototype,"step",void 0),he=ce([et("sdpi-range")],he);var ue=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let pe=class extends X{render(){const t=this.label?j`<label>${this.label}:</label>`:void 0;return j`
            <div class="container grid">
                <div class="label"><label @click=${this.handleLabelClick}>${t}</label></div>
                <div class="content"><slot></slot></div>
            </div>
        `}handleLabelClick(){for(const t of this.querySelectorAll("*")){const e=t;if(e.canFocus)return void e.focus()}}};pe.styles=[Nt,n`
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
                color: var(--font-color);
                font-family: var(--font-family);
                font-size: var(--font-size);
                margin: 0 0 10px 0;
                max-width: 322px;
                -webkit-user-drag: none;
            }

            .grid {
                align-items: start;
                display: grid;
                grid-template-columns: 95px 1fr;
            }

            .label {
                margin-top: 6px;
                justify-self: end;
                padding-right: 11px;
            }
        `],ue([st(),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],pe.prototype,"label",void 0),pe=ue([et("sdpi-item")],pe);var ve=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let ge=class extends(Zt(Mt(yt(Pt(X))))){static get styles(){return[...super.styles,Nt,n`
                select {
                    background-color: var(--input-bg-color);
                    padding: calc(var(--spacer) + 1px) 0;
                    text-overflow: ellipsis;
                }

                select:focus {
                    box-shadow: inset 0 0 1px var(--font-color);
                }

                select:disabled {
                    opacity: 0.5;
                }
            `]}render(){return j`
            <select
                ${Rt(this.focusElement)}
                .disabled=${this.disabled||2!==this.items.status}
                .value=${2===this.items.status&&this.value||""}
                @change=${t=>this.value=t.target.value}
            >
                ${this.items.render({pending:()=>j`<option value="" disabled selected>${this.loadingText}</option>`,complete:()=>j`
                        <option value="" disabled .hidden=${!this.placeholder||void 0!==this.value} .selected=${void 0===this.value}>${this.placeholder}</option>
                        ${this.renderDataSource((t=>j`<option .disabled=${t.disabled||!1} .value=${t.value} .selected=${t.value===this.value}>${t.label}</option>`),((t,e)=>j`<optgroup .label=${t.label||""}>${e}</optgroup>`))}
                    `})}
            </select>
        `}};ve([st(),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],ge.prototype,"placeholder",void 0),ge=ve([et("sdpi-select")],ge);var fe=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o},be=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ye=class extends(Zt(Mt(Pt(X)))){constructor(){super(...arguments),this.rows=3,this.showLength=!1}static get styles(){return[...super.styles,Nt,n`
                textarea {
                    background-color: var(--input-bg-color);
                    padding: calc(var(--spacer) + 3px) var(--spacer);
                    resize: none;
                }

                textarea:disabled {
                    opacity: 0.5;
                }

                .length {
                    color: var(--font-color);
                    display: block;
                    text-align: right;
                    font-family: var(--font-family);
                    font-size: var(--font-size);
                }
            `]}render(){return j`
            <textarea
                ${Rt(this.focusElement)}
                type="textarea"
                maxlength=${Gt(this.maxLength)}
                .disabled=${this.disabled}
                .id=${this.inputId}
                .rows=${this.rows}
                .value=${this.value||""}
                @input=${t=>this.value=t.target.value}
            ></textarea>
            ${this.getLengthLabel()}
        `}getLengthLabel(){var t;if(this.showLength||this.maxLength){const e=this.maxLength?j`/${this.maxLength}`:void 0;return j`<label class="length" for=${this.inputId}>${(null===(t=this.value)||void 0===t?void 0:t.length)||0}${e}</label>`}}};fe([st({attribute:"maxlength",type:Number}),be("design:type",Number)],ye.prototype,"maxLength",void 0),fe([st({type:Number}),be("design:type",Object)],ye.prototype,"rows",void 0),fe([st({attribute:"showlength",type:Boolean}),be("design:type",Object)],ye.prototype,"showLength",void 0),ye=fe([et("sdpi-textarea")],ye);var me=function(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o},$e=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let we=class extends(Zt(Mt(Pt(X)))){constructor(){super(...arguments),this.pattern="",this.placeholder="",this.required=!1}static get styles(){return[...super.styles,Nt,n`
                input {
                    background-color: var(--input-bg-color);
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
            `]}render(){return j`
            <input
                ${Rt(this.focusElement)}
                type="text"
                maxlength=${Gt(this.maxLength)}
                .disabled=${this.disabled}
                .pattern=${this.pattern}
                .placeholder=${this.placeholder}
                .required=${this.required}
                .value=${this.value||""}
                @input=${t=>this.value=t.target.value}
            />
        `}};me([st({attribute:"maxlength",type:Number}),$e("design:type",Number)],we.prototype,"maxLength",void 0),me([st(),$e("design:type",Object)],we.prototype,"pattern",void 0),me([st(),$e("design:type",Object)],we.prototype,"placeholder",void 0),me([st({type:Boolean}),$e("design:type",Object)],we.prototype,"required",void 0),we=me([et("sdpi-textfield")],we),window.streamDeckClient=at;const _e=window.connectElgatoStreamDeckSocket;window.connectElgatoStreamDeckSocket=function(t,e,i,s,n){_e&&_e(t,e,i,s,n),at.connect(t,e,i,s,n)};const xe=document.createElement("style");xe.innerHTML=n`
    /* Styles added by sdpi library. */
    html,
    body {
        background-color: #2d2d2d;
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
`.cssText,document.head.appendChild(xe)})();