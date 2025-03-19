/**!
* @license
* sdpi-components v3.0.2, Copyright Corsair Memory Inc. and other contributors (https://sdpi-components.dev)
* Lit, Copyright 2019 Google LLC, SPDX-License-Identifier: BSD-3-Clause (https://lit.dev/)
*/
(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$3=window,e$7=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$6=Symbol(),n$7=new WeakMap;let o$5 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$6)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$7&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$7.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$7.set(s,t));}return t}toString(){return this.cssText}};const r$3=t=>new o$5("string"==typeof t?t:t+"",void 0,s$6),i$5=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$5(n,t,s$6)},S$1=(s,n)=>{e$7?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$3.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$3=e$7?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var s$5;const e$6=window,r$2=e$6.trustedTypes,h$5=r$2?r$2.emptyScript:"",o$4=e$6.reactiveElementPolyfillSupport,n$6={toAttribute(t,i){switch(i){case Boolean:t=t?h$5:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$4={attribute:!0,type:String,converter:n$6,reflect:!1,hasChanged:a$1};let d$1 = class d extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$4){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$4}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$3(i));}else void 0!==i&&s.push(c$3(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$4){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$6).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$6;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};d$1.finalized=!0,d$1.elementProperties=new Map,d$1.elementStyles=[],d$1.shadowRootOptions={mode:"open"},null==o$4||o$4({ReactiveElement:d$1}),(null!==(s$5=e$6.reactiveElementVersions)&&void 0!==s$5?s$5:e$6.reactiveElementVersions=[]).push("1.4.1");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var t$2;const i$4=window,s$4=i$4.trustedTypes,e$5=s$4?s$4.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$3=`lit$${(Math.random()+"").slice(9)}$`,n$5="?"+o$3,l$3=`<${n$5}>`,h$4=document,r$1=(t="")=>h$4.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,c$2=t=>u(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a=/-->/g,f=/>/g,_=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),m=/'/g,p=/"/g,$=/^(?:script|style|textarea|title)$/i,g=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),y=g(1),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),T=new WeakMap,A=h$4.createTreeWalker(h$4,129,null,!1),E=(t,i)=>{const s=t.length-1,n=[];let h,r=2===i?"<svg>":"",d=v;for(let i=0;i<s;i++){const s=t[i];let e,u,c=-1,g=0;for(;g<s.length&&(d.lastIndex=g,u=d.exec(s),null!==u);)g=d.lastIndex,d===v?"!--"===u[1]?d=a:void 0!==u[1]?d=f:void 0!==u[2]?($.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=_):void 0!==u[3]&&(d=_):d===_?">"===u[0]?(d=null!=h?h:v,c=-1):void 0===u[1]?c=-2:(c=d.lastIndex-u[2].length,e=u[1],d=void 0===u[3]?_:'"'===u[3]?p:m):d===p||d===m?d=_:d===a||d===f?d=v:(d=_,h=void 0);const y=d===_&&t[i+1].startsWith("/>")?" ":"";r+=d===v?s+l$3:c>=0?(n.push(e),s.slice(0,c)+"$lit$"+s.slice(c)+o$3+y):s+o$3+(-2===c?(n.push(void 0),i):y);}const u=r+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e$5?e$5.createHTML(u):u,n]};class C{constructor({strings:t,_$litType$:i},e){let l;this.parts=[];let h=0,d=0;const u=t.length-1,c=this.parts,[v,a]=E(t,i);if(this.el=C.createElement(v,e),A.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(o$3)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(o$3),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:h,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?k:"@"===i[1]?H:S});}else c.push({type:6,index:h});}for(const i of t)l.removeAttribute(i);}if($.test(l.tagName)){const t=l.textContent.split(o$3),i=t.length-1;if(i>0){l.textContent=s$4?s$4.emptyScript:"";for(let s=0;s<i;s++)l.append(t[s],r$1()),A.nextNode(),c.push({type:2,index:++h});l.append(t[i],r$1());}}}else if(8===l.nodeType)if(l.data===n$5)c.push({type:2,index:h});else {let t=-1;for(;-1!==(t=l.data.indexOf(o$3,t+1));)c.push({type:7,index:h}),t+=o$3.length-1;}h++;}}static createElement(t,i){const s=h$4.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===x)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=P(t,r._$AS(t,i.values),r,e)),i}class V{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:h$4).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),l=0,r=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new I(n,this,t)),this.u.push(i),d=e[++r];}l!==(null==d?void 0:d.index)&&(n=A.nextNode(),l++);}return o}p(t){let i=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cm=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),d(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==x&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):c$2(t)?this.k(t):this.g(t);}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}g(t){this._$AH!==b&&d(this._$AH)?this._$AA.nextSibling.data=t:this.T(h$4.createTextNode(t)),this._$AH=t;}$(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=C.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.p(s);else {const t=new V(o,this),i=t.v(this.options);t.p(s),this.T(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new C(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.O(r$1()),this.O(r$1()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===x&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===b?t=b:t!==b&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===b?void 0:t;}}const R=s$4?s$4.emptyScript:"";class k extends S{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==b?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name);}}class H extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:b)===x)return;const e=this._$AH,o=t===b&&e!==b||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==b&&(e===b||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class I{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=i$4.litHtmlPolyfillSupport;null==z||z(C,N),(null!==(t$2=i$4.litHtmlVersions)&&void 0!==t$2?t$2:i$4.litHtmlVersions=[]).push("2.4.0");const Z=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(r$1(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var l$2,o$2;let s$3 = class s extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Z(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return x}};s$3.finalized=!0,s$3._$litElement$=!0,null===(l$2=globalThis.litElementHydrateSupport)||void 0===l$2||l$2.call(globalThis,{LitElement:s$3});const n$4=globalThis.litElementPolyfillSupport;null==n$4||n$4({LitElement:s$3});(null!==(o$2=globalThis.litElementVersions)&&void 0!==o$2?o$2:globalThis.litElementVersions=[]).push("3.2.2");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const e$4=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const i$3=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$3(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$3(e,n)}

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var n$3;null!=(null===(n$3=window.HTMLSlotElement)||void 0===n$3?void 0:n$3.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

    class EventManager {
        constructor() {
            this.handlers = [];
        }
        dispatch(args) {
            for (const handler of this.handlers) {
                handler(args);
            }
        }
        subscribe(handler) {
            this.handlers.push(handler);
        }
        unsubscribe(handler) {
            this.handlers = this.handlers.filter((h) => h !== handler);
        }
    }

    class PromiseCompletionSource {
        constructor() {
            this._promise = new Promise((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
            });
        }
        get promise() {
            return this._promise;
        }
        setResult(value) {
            if (this.resolve) {
                this.resolve(value);
            }
        }
        setException(reason) {
            if (this.reject) {
                this.reject(reason);
            }
        }
    }

    function getFileName(path) {
        const { done, value } = getSegmentsInReverse(path).next();
        return done ? "" : value;
    }
    function* getSegmentsInReverse(path) {
        const sanitizedPath = sanitize(path);
        if (sanitizedPath.length === 0) {
            return;
        }
        let end = sanitizedPath.length;
        for (let i = sanitizedPath.length; i > 0; i--) {
            if (sanitizedPath[i - 1] === "/" || sanitizedPath[i - 1] === "\\") {
                if (i != sanitizedPath.length) {
                    const segment = sanitizedPath.substring(i, end);
                    if (segment.length > 0) {
                        yield segment;
                    }
                }
                end = i - 1;
            }
        }
        const segment = sanitizedPath.substring(0, end);
        if (segment.length > 0) {
            yield segment;
        }
    }
    function sanitize(path) {
        return decodeURIComponent(path.replace(/^C:\\fakepath\\/, ""));
    }

    class FilteredMutationObserver {
        constructor(nodeNames, callback) {
            this.nodeNames = nodeNames;
            this.callback = callback;
            this.observer = new MutationObserver(this.handleMutation.bind(this));
            this.items = [];
        }
        observe(target) {
            this.observer.observe(target, { childList: true });
        }
        disconnect() {
            this.observer.disconnect();
            this.callback((this.items = []));
        }
        handleMutation(mutations) {
            let changed = false;
            mutations.forEach((mutation) => {
                for (const added of mutation.addedNodes) {
                    if (this.nodeNames.indexOf(added.nodeName.toLowerCase()) > -1) {
                        changed = true;
                        this.items.push(added);
                    }
                }
                mutation.removedNodes.forEach((node) => {
                    const index = this.items.indexOf(node);
                    if (index !== -1) {
                        changed = true;
                        this.items.splice(index, 1);
                    }
                });
            });
            if (changed) {
                this.callback(this.items);
            }
        }
    }

    function asArray(styles) {
        if (styles === undefined) {
            return [];
        }
        if (Array.isArray(styles)) {
            return [...styles];
        }
        return [styles];
    }
    function parseNumber(value) {
        switch (typeof value) {
            case "boolean":
                return value ? 1 : 0;
            case "number":
                return value;
            default:
                return parseFloat(value);
        }
    }
    function parseBoolean(value) {
        switch (typeof value) {
            case "boolean":
                return value;
            case "number":
                return value !== 0;
            default: {
                const str = value.toString().toLowerCase();
                return str !== "false" && str !== "0";
            }
        }
    }
    function getUUID() {
        const chr4 = () => Math.random().toString(16).slice(-4);
        return chr4() + chr4() + "-" + chr4() + "-" + chr4() + "-" + chr4() + "-" + chr4() + chr4() + chr4();
    }
    function get(path, source) {
        const props = path.split(".");
        return props.reduce((obj, prop) => obj && obj[prop], source);
    }
    function set(path, target, value) {
        const props = path.split(".");
        props.reduce((obj, prop, i) => {
            return i === props.length - 1 ? (obj[prop] = value) : obj[prop] || (obj[prop] = {});
        }, target);
    }

    class Internationalization {
        constructor() {
            this.language = this.getUILanguage();
            this.fallbackLanguage = this.getFallbackLanguage();
        }
        getMessage(messageName) {
            if (!this.locales || messageName === undefined) {
                return "";
            }
            const localize = (lang) => get(`${lang}.${messageName}`, this.locales);
            if (this.language === this.fallbackLanguage) {
                return localize(this.language) || "";
            }
            return localize(this.language) || localize(this.fallbackLanguage) || "";
        }
        getUILanguage() {
            var _a;
            const language = (_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.language;
            if (language === "zh-Hant" || language === "zh-TW") {
                return "zh_TW";
            }
            if (language === "zh-Hans" || language === "zh-CN" || language === "zh") {
                return "zh_CN";
            }
            return window.navigator.language ? window.navigator.language.split("-")[0] : "en";
        }
        getFallbackLanguage() {
            return this.language.startsWith("zh") ? "zh" : "en";
        }
    }
    const i18n = new Internationalization();

    class LocalizedMessage {
        constructor(key) {
            this.key = key;
            const parsed = LocalizedMessage.tryParseMessageName(key);
            this.value = (parsed.success ? i18n.getMessage(parsed.messageName) : key) || key;
        }
        static getMessage(key) {
            return new LocalizedMessage(key).toString();
        }
        static tryParseMessageName(value) {
            return value && value.startsWith("__MSG_") && value.endsWith("__")
                ? {
                    success: true,
                    messageName: value.substring(6, value.length - 2),
                }
                : {
                    success: false,
                };
        }
        equals(other) {
            return other !== undefined && this.key == other.key && this.value == other.value;
        }
        toString() {
            return this.value || "";
        }
    }
    const localizedMessagePropertyOptions = {
        hasChanged(value, oldValue) {
            if (!value && !oldValue) {
                return false;
            }
            if (!value || !oldValue) {
                return true;
            }
            return value.equals(oldValue);
        },
        converter: {
            fromAttribute(value) {
                return value === null ? undefined : new LocalizedMessage(value);
            },
            toAttribute(value) {
                return value === null || value === void 0 ? void 0 : value.key;
            },
        },
    };

    function delay(callback, timeout) {
        let handle;
        let pcs;
        return (data, ...args) => {
            clearTimeout(handle);
            pcs = pcs || new PromiseCompletionSource();
            handle = setTimeout(async () => {
                const innerPcs = pcs;
                pcs = undefined;
                await callback(data);
                innerPcs === null || innerPcs === void 0 ? void 0 : innerPcs.setResult();
            }, timeout, args);
            return pcs.promise;
        };
    }

    const Checkable = (superClass) => {
        class Checkable extends superClass {
            static get styles() {
                return [
                    asArray(super.styles),
                    i$5 `
					:host {
						--checkbox-size: 16px;
					}

					.checkable-container {
						align-items: center;
						display: inline-flex;
						padding: 5px 0 0 0;
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
						opacity: var(--opacity-disabled);
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

					.checkable-container > input[type="radio"] ~ .checkable-symbol {
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

					.checkable-container > input[type="checkbox"]:checked ~ .checkable-symbol {
						background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10' viewBox='0 0 12 10'%3E%3Cpolygon fill='%23FFF' points='7.2 7.5 7.2 -1.3 8.7 -1.3 8.6 9.1 2.7 8.7 2.7 7.2' transform='rotate(37 5.718 3.896)'/%3E%3C/svg%3E%0A");
					}

					.checkable-container > input[type="radio"]:checked ~ .checkable-symbol {
						background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6' viewBox='0 0 6 6'%3E%3Ccircle cx='3' cy='3' r='3' fill='%23FFF'/%3E%3C/svg%3E%0A");
					}
				`,
                ];
            }
            renderCheckable(type, input, label) {
                return y `
				<label class="checkable-container">
					${input}
					<span class="checkable-symbol" role=${type}></span>
					${label && label ? y `<span class="checkable-text">${label}</span>` : undefined}
				</label>
			`;
            }
        }
        return Checkable;
    };

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const i$2={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},s$2=Symbol();let h$3 = class h{constructor(t,i,s){this.i=0,this.status=0,this.autoRun=!0,this.o=t,this.o.addController(this);const h="object"==typeof i?i:{task:i,args:s};this.t=h.task,this.h=h.args,this.l=h.onComplete,this.u=h.onError,void 0!==h.autoRun&&(this.autoRun=h.autoRun),this.taskComplete=new Promise(((t,i)=>{this.v=t,this._=i;}));}hostUpdated(){this.performTask();}async performTask(){var t;const i=null===(t=this.h)||void 0===t?void 0:t.call(this);this.shouldRun(i)&&this.run(i);}shouldRun(t){return this.autoRun&&this.m(t)}async run(t){var i,h,r;let e,o;null!=t||(t=null===(i=this.h)||void 0===i?void 0:i.call(this)),2!==this.status&&3!==this.status||(this.taskComplete=new Promise(((t,i)=>{this.v=t,this._=i;}))),this.status=1,this.o.requestUpdate();const n=++this.i;try{e=await this.t(t);}catch(t){o=t;}if(this.i===n){if(e===s$2)this.status=0;else {if(void 0===o){try{null===(h=this.l)||void 0===h||h.call(this,e);}catch{}this.status=2,this.v(e);}else {try{null===(r=this.u)||void 0===r||r.call(this,o);}catch{}this.status=3,this._(o);}this.T=e,this.k=o;}this.o.requestUpdate();}}get value(){return this.T}get error(){return this.k}render(t){var i,s,h,r;switch(this.status){case 0:return null===(i=t.initial)||void 0===i?void 0:i.call(t);case 1:return null===(s=t.pending)||void 0===s?void 0:s.call(t);case 2:return null===(h=t.complete)||void 0===h?void 0:h.call(t,this.value);case 3:return null===(r=t.error)||void 0===r?void 0:r.call(t,this.error);default:this.status;}}m(i){const s=this.p;return this.p=i,Array.isArray(i)&&Array.isArray(s)?i.length===s.length&&i.some(((i,h)=>a$1(i,s[h]))):i!==s}};

    class StreamDeckClient {
        constructor() {
            this._connection = new PromiseCompletionSource();
            this._connectionInfo = new PromiseCompletionSource();
            this._isInitialized = false;
            this.message = new EventManager();
            this.didReceiveGlobalSettings = new EventManager();
            this.didReceiveSettings = new EventManager();
            this.sendToPropertyInspector = new EventManager();
        }
        async connect(port, propertyInspectorUUID, registerEvent, info, actionInfo) {
            if (!this._isInitialized) {
                const connectionInfo = {
                    actionInfo,
                    info,
                    propertyInspectorUUID,
                    registerEvent,
                };
                if (connectionInfo.actionInfo) {
                    this.didReceiveSettings.dispatch(connectionInfo.actionInfo);
                }
                this._connectionInfo.setResult(connectionInfo);
                const webSocket = new WebSocket(`ws://localhost:${port}`);
                webSocket.onmessage = this.handleMessage.bind(this);
                webSocket.onopen = () => {
                    webSocket.send(JSON.stringify({
                        event: connectionInfo.registerEvent,
                        uuid: connectionInfo.propertyInspectorUUID,
                    }));
                    this._connection.setResult(webSocket);
                };
                this._isInitialized = true;
            }
        }
        async getGlobalSettings() {
            const response = await this.get("getGlobalSettings", "didReceiveGlobalSettings");
            return response.payload.settings;
        }
        setGlobalSettings(value) {
            return this.send("setGlobalSettings", value);
        }
        async getSettings() {
            const { actionInfo } = await this.getConnectionInfo();
            const response = await this.get("getSettings", "didReceiveSettings", (msg) => msg.action == actionInfo.action && msg.context == actionInfo.context && msg.device == actionInfo.device);
            return response.payload;
        }
        setSettings(value) {
            return this.send("setSettings", value);
        }
        async getConnectionInfo() {
            return this._connectionInfo.promise;
        }
        async get(send, receive, isComplete, payload) {
            const resolver = new PromiseCompletionSource();
            const listener = (ev) => {
                if (ev.event === receive) {
                    const msg = ev;
                    if (isComplete === undefined || isComplete(msg)) {
                        this.message.unsubscribe(listener);
                        resolver.setResult(msg);
                    }
                }
            };
            this.message.subscribe(listener);
            await this.send(send, payload);
            return resolver.promise;
        }
        async send(event, payload) {
            const connectionInfo = await this._connectionInfo.promise;
            const connection = await this._connection.promise;
            connection.send(JSON.stringify({
                event: event,
                context: connectionInfo.propertyInspectorUUID,
                payload: payload,
                action: connectionInfo.actionInfo.action,
            }));
        }
        handleMessage(ev) {
            const data = JSON.parse(ev.data);
            switch (data.event) {
                case "didReceiveGlobalSettings":
                    this.didReceiveGlobalSettings.dispatch(data);
                    break;
                case "didReceiveSettings":
                    this.didReceiveSettings.dispatch(data);
                    break;
                case "sendToPropertyInspector":
                    this.sendToPropertyInspector.dispatch(data);
                    break;
            }
            this.message.dispatch(data);
        }
    }
    const streamDeckClient = new StreamDeckClient();

    const DataSourced = (superClass) => {
        class DataSourced extends superClass {
            constructor(...args) {
                super(args);
                this._dataSourceInitialized = false;
                this._mutationObserver = new FilteredMutationObserver(["optgroup", "option"], () => this.refresh());
                this.hotReload = false;
                this.loadingText = new LocalizedMessage("Loading...");
                this.items = new h$3(this, async ([dataSource]) => {
                    var _a;
                    if (dataSource === undefined) {
                        return this.getItemsFromChildNodes();
                    }
                    const payload = { event: this.dataSource };
                    if (this._dataSourceInitialized) {
                        payload.isRefresh = true;
                    }
                    const result = (_a = this._itemsDataSource) !== null && _a !== void 0 ? _a : (await streamDeckClient.get("sendToPlugin", "sendToPropertyInspector", (msg) => { var _a; return ((_a = msg.payload) === null || _a === void 0 ? void 0 : _a.event) === this.dataSource; }, payload));
                    this._dataSourceInitialized = true;
                    this._itemsDataSource = undefined;
                    if (i18n.locales) {
                        this.localize(result.payload.items);
                    }
                    return result.payload.items;
                }, () => [this.dataSource]);
                this._mutationObserver.observe(this);
            }
            refresh() {
                this.items.run();
            }
            connectedCallback() {
                super.connectedCallback();
                if (this.dataSource !== undefined && this.hotReload !== undefined) {
                    streamDeckClient.sendToPropertyInspector.subscribe((args) => {
                        var _a;
                        if (this._dataSourceInitialized && ((_a = args.payload) === null || _a === void 0 ? void 0 : _a.event) === this.dataSource) {
                            this._itemsDataSource = args;
                            this.items.run();
                        }
                    });
                }
            }
            renderDataSource(renderItem, renderGroup) {
                if (this.items.value === undefined || this.items.value.length === 0) {
                    return [undefined];
                }
                const map = (item) => {
                    if (this.isItemGroup(item)) {
                        return renderGroup ? renderGroup(item, item.children.map(map)) : undefined;
                    }
                    else if (this.isItem(item)) {
                        return renderItem(item);
                    }
                    else {
                        return undefined;
                    }
                };
                return this.items.value.map(map);
            }
            getItemsFromChildNodes() {
                const reducer = (items, node) => {
                    if (node instanceof HTMLOptGroupElement) {
                        items.push({
                            label: LocalizedMessage.getMessage(node.label),
                            children: Array.from(node.childNodes).reduce(reducer, []),
                        });
                    }
                    else if (node instanceof HTMLOptionElement) {
                        items.push({
                            disabled: node.disabled,
                            label: LocalizedMessage.getMessage(node.text),
                            value: node.value,
                        });
                    }
                    return items;
                };
                return this._mutationObserver.items.reduce(reducer, []);
            }
            localize(items) {
                for (const item of items) {
                    if (item.label) {
                        item.label = LocalizedMessage.getMessage(item.label.toString());
                    }
                    if (this.isItemGroup(item)) {
                        this.localize(item.children);
                    }
                }
            }
            isItem(object) {
                return object && object.value !== undefined;
            }
            isItemGroup(object) {
                return object && object.children !== undefined && Array.isArray(object.children);
            }
        }
        __decorate([
            e$3(),
            __metadata("design:type", String)
        ], DataSourced.prototype, "dataSource", void 0);
        __decorate([
            e$3({
                attribute: "hot-reload",
                type: Boolean,
            }),
            __metadata("design:type", Object)
        ], DataSourced.prototype, "hotReload", void 0);
        __decorate([
            e$3({
                attribute: "loading",
                hasChanged: localizedMessagePropertyOptions.hasChanged,
                converter: localizedMessagePropertyOptions.converter,
            }),
            __metadata("design:type", Object)
        ], DataSourced.prototype, "loadingText", void 0);
        return DataSourced;
    };

    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const t$1=o=>null===o||"object"!=typeof o&&"function"!=typeof o,e$2=o=>void 0===o.strings;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});let i$1 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const s$1=(i,t)=>{var e,o;const r=i._$AN;if(void 0===r)return !1;for(const i of r)null===(o=(e=i)._$AO)||void 0===o||o.call(e,t,!1),s$1(i,t);return !0},o$1=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t;}while(0===(null==e?void 0:e.size))},r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),l$1(t);}};function n$2(i){void 0!==this._$AN?(o$1(this),this._$AM=i,r(this)):this._$AM=i;}function h$2(i,t=!1,e=0){const r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s$1(r[i],!1),o$1(r[i]);else null!=r&&(s$1(r,!1),o$1(r));else s$1(this,i);}const l$1=i=>{var t$1,s,o,r;i.type==t.CHILD&&(null!==(t$1=(o=i)._$AP)&&void 0!==t$1||(o._$AP=h$2),null!==(s=(r=i)._$AQ)&&void 0!==s||(r._$AQ=n$2));};let c$1 = class c extends i$1{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU;}_$AO(i,t=!0){var e,r;i!==this.isConnected&&(this.isConnected=i,i?null===(e=this.reconnected)||void 0===e||e.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),t&&(s$1(this,i),o$1(this));}setValue(t){if(e$2(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}};

    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const e=()=>new o;class o{}const h$1=new WeakMap,n$1=e$1(class extends c$1{render(t){return b}update(t,[s]){var e;const o=s!==this.Y;return o&&void 0!==this.Y&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.Y=s,this.dt=null===(e=t.options)||void 0===e?void 0:e.host,this.rt(this.ct=t.element)),b}rt(i){var t;if("function"==typeof this.Y){const s=null!==(t=this.dt)&&void 0!==t?t:globalThis;let e=h$1.get(s);void 0===e&&(e=new WeakMap,h$1.set(s,e)),void 0!==e.get(this.Y)&&this.Y.call(this.dt,void 0),e.set(this.Y,i),void 0!==i&&this.Y.call(this.dt,i);}else this.Y.value=i;}get lt(){var i,t,s;return "function"==typeof this.Y?null===(t=h$1.get(null!==(i=this.dt)&&void 0!==i?i:globalThis))||void 0===t?void 0:t.get(this.Y):null===(s=this.Y)||void 0===s?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0);}reconnected(){this.rt(this.ct);}});

    const Delegate = (superClass) => {
        class Delegate extends superClass {
            static get styles() {
                return [
                    ...asArray(super.styles),
                    i$5 `
					label {
						align-self: center;
						background-color: var(--input-bg-color);
						color: var(--input-font-color);
						font-family: var(--font-family);
						font-size: var(--font-size);
						line-height: 1.5em;
						min-height: calc(var(--input-height) - calc(var(--spacer) * 3));
						overflow: hidden;
						padding: calc(var(--spacer) * 1.5) var(--spacer);
						text-overflow: ellipsis;
						white-space: nowrap;
						width: 100%;
					}

					label[aria-disabled="true"] {
						opacity: var(--opacity-disabled);
					}

					sdpi-button > div {
						min-width: 16px;
						user-select: none;
					}
				`,
                ];
            }
            renderDelegate(getDisplayValue = (value) => value) {
                var _a;
                const value = this.value !== undefined ? this.value : this.defaultValue;
                return y `
				<div class="flex container">
					<label
						class="flex-grow"
						aria-disabled=${this.disabled}
						@click=${() => !this.disabled && this.invoked && this.invoked()}
						.title=${(value === null || value === void 0 ? void 0 : value.toString()) || ""}
					>
						${getDisplayValue(value)}
					</label>
					<sdpi-button
						class="flex-shrink margin-left"
						${n$1(this.focusElement)}
						.disabled=${this.disabled}
						@click=${() => !this.disabled && this.invoked && this.invoked()}
					>
						<div>${((_a = this.label) === null || _a === void 0 ? void 0 : _a.toString()) || "..."}</div>
					</sdpi-button>
				</div>
			`;
            }
        }
        __decorate([
            e$3(localizedMessagePropertyOptions),
            __metadata("design:type", LocalizedMessage)
        ], Delegate.prototype, "label", void 0);
        return Delegate;
    };

    const DynamicValueType = (superClass) => {
        class DynamicValueType extends superClass {
            parseValue(value) {
                switch (this.valueType) {
                    case "boolean":
                        return parseBoolean(value);
                    case "number":
                        return parseNumber(value);
                    case "string":
                        return value.toString();
                    default:
                        return value;
                }
            }
        }
        __decorate([
            e$3({ attribute: "value-type" }),
            __metadata("design:type", Object)
        ], DynamicValueType.prototype, "valueType", void 0);
        return DynamicValueType;
    };

    const Focusable = (superClass) => {
        class Focusable extends superClass {
            constructor() {
                super(...arguments);
                this.focusElement = e();
            }
            get canFocus() {
                return this.focusElement.value !== undefined;
            }
            focus() {
                if (this.focusElement.value === undefined) {
                    return;
                }
                if (this.focusWithClick()) {
                    this.focusElement.value.click();
                }
                else {
                    this.focusElement.value.focus();
                }
            }
            focusWithClick() {
                if (this.focusElement.value === undefined) {
                    throw new Error("focusElement cannot be undefined.");
                }
                if (!("type" in this.focusElement.value)) {
                    return true;
                }
                return (this.focusElement.value.type === "checkbox" ||
                    this.focusElement.value.type === "color" ||
                    this.focusElement.value.type === "file");
            }
        }
        return Focusable;
    };

    const Gridded = (superClass) => {
        class Gridded extends superClass {
            constructor() {
                super(...arguments);
                this.columns = 1;
            }
            static get styles() {
                return [
                    asArray(super.styles),
                    i$5 `
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
				`,
                ];
            }
            renderGrid(items) {
                if (items.length === 0) {
                    return undefined;
                }
                return y `<div class="gridded-container">
				${items.map((item) => y `<div class="gridded-item gridded-col-${this.columns}">${item}</div>`)}
			</div>`;
            }
        }
        __decorate([
            e$3({ type: Number }),
            __metadata("design:type", Object)
        ], Gridded.prototype, "columns", void 0);
        return Gridded;
    };

    const commonStyle = i$5 `
	.flex {
		align-items: stretch;
		display: flex;
	}

	.flex-grow {
		flex: 1 1 auto;
	}

	.flex-shrink {
		flex: 0 0 auto;
	}

	.margin-left {
		margin-left: var(--spacer);
	}
`;

    const hostStyle = i$5 `
	:host {
		/* Box model */
		--spacer: 4px;
		--opacity-disabled: 0.5;

		/* Colors */
		--window-bg-color: #2d2d2d;
		--font-color: #969696;
		--input-bg-color: #3d3d3d;
		--input-font-color: #d8d8d8;

		--scrollbar-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

		/* Typography */
		--font-family: "Segoe UI", Arial, Roboto, Helvetica sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
			"Segoe UI Symbol";
		--font-size: 9pt;

		/* Pre-determined dimensions */
		--input-height: 30px;
	}
`;

    const Input = (superClass) => {
        class Input extends superClass {
            constructor() {
                super(...arguments);
                this.disabled = false;
                this.inputId = getUUID();
            }
            static get styles() {
                return [
                    asArray(super.styles),
                    hostStyle,
                    commonStyle,
                    i$5 `
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
				`,
                ];
            }
        }
        __decorate([
            e$3({
                reflect: true,
                type: Boolean,
            }),
            __metadata("design:type", Object)
        ], Input.prototype, "disabled", void 0);
        __decorate([
            e$3({ attribute: false }),
            __metadata("design:type", Object)
        ], Input.prototype, "value", void 0);
        __decorate([
            e$3({ attribute: "default" }),
            __metadata("design:type", Object)
        ], Input.prototype, "defaultValue", void 0);
        return Input;
    };

    class Settings {
        constructor(didReceive, save) {
            this.didReceive = didReceive;
            this.save = save;
            this._initialization = new Promise((resolve) => {
                didReceive.subscribe((data) => {
                    this._settings = data.payload.settings;
                    resolve();
                });
            });
        }
        use(key, changeCallback, timeout = 250, save = true) {
            if (changeCallback) {
                this.didReceive.subscribe((data) => {
                    var _a;
                    if (((_a = data === null || data === void 0 ? void 0 : data.payload) === null || _a === void 0 ? void 0 : _a.settings) !== undefined) {
                        changeCallback(get(key, data.payload.settings));
                    }
                });
            }
            const getter = async () => {
                await this._initialization;
                return get(key, await this._settings);
            };
            const setter = timeout
                ? delay((value) => this.set(key, value, save), timeout)
                : (value) => this.set(key, value, save);
            return [getter, setter];
        }
        async set(key, value, save = true) {
            await this._initialization;
            const oldValue = get(key, this._settings);
            if (oldValue === value) {
                return;
            }
            set(key, this._settings, value);
            if (save) {
                await this.save(this._settings);
            }
        }
    }
    const settings = new Settings(streamDeckClient.didReceiveSettings, (value) => streamDeckClient.setSettings(value));
    const useSettings = settings.use.bind(settings);
    let didRequestGlobalSettings = false;
    const globalSettings = new Settings(streamDeckClient.didReceiveGlobalSettings, (value) => streamDeckClient.setGlobalSettings(value));
    const useGlobalSettings = (key, changeCallback, timeout = 250, save = true) => {
        if (!didRequestGlobalSettings) {
            streamDeckClient.getGlobalSettings();
            didRequestGlobalSettings = true;
        }
        return globalSettings.use(key, changeCallback, timeout, save);
    };

    const Persisted = (superClass) => {
        class Persisted extends superClass {
            constructor() {
                super(...arguments);
                this.isGlobal = false;
            }
            get value() {
                return this._value;
            }
            set value(value) {
                if (this._value != value) {
                    const oldValue = this._value;
                    this._value = value;
                    this.requestUpdate("value", oldValue);
                    this.dispatchEvent(new Event("valuechange"));
                }
            }
            firstUpdated(_changedProperties) {
                super.firstUpdated(_changedProperties);
                if (this.setting) {
                    const delay = this.delaySave ? 200 : null;
                    if (this.isGlobal) {
                        [, this.save] = useGlobalSettings(this.setting, (value) => (this.value = value), delay);
                    }
                    else {
                        [, this.save] = useSettings(this.setting, (value) => (this.value = value), delay);
                    }
                }
            }
            willUpdate(_changedProperties) {
                if (_changedProperties.has("value") && this.save) {
                    this.save(this.value);
                }
            }
        }
        __decorate([
            e$3({
                attribute: "global",
                type: Boolean,
            }),
            __metadata("design:type", Object)
        ], Persisted.prototype, "isGlobal", void 0);
        __decorate([
            e$3(),
            __metadata("design:type", String)
        ], Persisted.prototype, "setting", void 0);
        __decorate([
            e$3({ attribute: false }),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], Persisted.prototype, "value", null);
        return Persisted;
    };

    let Button = class Button extends Input(s$3) {
        static get styles() {
            return [
                ...super.styles,
                hostStyle,
                i$5 `
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
					opacity: var(--opacity-disabled);
				}
			`,
            ];
        }
        render() {
            return y `
			<button .disabled=${this.disabled} .value=${this.value || ""}>
				<slot></slot>
			</button>
		`;
        }
    };
    Button = __decorate([
        e$4("sdpi-button")
    ], Button);

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const l=l=>null!=l?l:b;

    class FilteredMutationController {
        constructor(host, nodeNames) {
            this.host = host;
            this.host.addController(this);
            this.observer = new FilteredMutationObserver(nodeNames, this.handleMutation.bind(this));
        }
        get items() {
            return this.observer.items;
        }
        hostConnected() {
            this.observer.observe(this.host);
        }
        hostDisconnected() {
            this.observer.disconnect();
        }
        handleMutation() {
            if (this.mutated) {
                const args = { preventRequestUpdate: false };
                this.mutated(args);
                if (args.preventRequestUpdate) {
                    return;
                }
            }
            this.host.requestUpdate();
        }
    }

    class DataListController extends FilteredMutationController {
        constructor(host) {
            super(host, ["datalist"]);
        }
        mutated(ev) {
            if (this.items.length === 0) {
                this.dataList = undefined;
            }
            else if (this.dataList === undefined || this.dataList.id !== this.items[0].id) {
                this.items[0].id = this.items[0].id || getUUID();
                this.dataList = this.items[0].cloneNode(true);
            }
            else {
                ev.preventRequestUpdate = true;
            }
        }
    }

    let Calendar = class Calendar extends Persisted(Focusable(Input(s$3))) {
        constructor() {
            super(...arguments);
            this.dataListController = new DataListController(this);
            this.type = "date";
        }
        static get styles() {
            return [
                ...super.styles,
                i$5 `
				input {
					background-color: var(--input-bg-color);
					padding: calc(var(--spacer) + 1px) var(--spacer);
				}

				input[type="time"] {
					padding: calc(var(--spacer) + 2px) var(--spacer);
				}

				input:disabled {
					opacity: var(--opacity-disabled);
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
			`,
            ];
        }
        render() {
            var _a;
            return y `
			<input
				${n$1(this.focusElement)}
				type=${this.type}
				list=${l((_a = this.dataListController.dataList) === null || _a === void 0 ? void 0 : _a.id)}
				max=${l(this.max)}
				min=${l(this.min)}
				step=${l(this.step)}
				.disabled=${this.disabled}
				.value=${this.value || this.defaultValue || ""}
				@change="${(ev) => (this.value = ev.target.value)}"
			/>
			${this.dataListController.dataList}
		`;
        }
    };
    __decorate([
        e$3(),
        __metadata("design:type", String)
    ], Calendar.prototype, "max", void 0);
    __decorate([
        e$3(),
        __metadata("design:type", String)
    ], Calendar.prototype, "min", void 0);
    __decorate([
        e$3({ type: Number }),
        __metadata("design:type", Number)
    ], Calendar.prototype, "step", void 0);
    __decorate([
        e$3(),
        __metadata("design:type", String)
    ], Calendar.prototype, "type", void 0);
    Calendar = __decorate([
        e$4("sdpi-calendar")
    ], Calendar);

    let Checkbox = class Checkbox extends Persisted(Focusable(Checkable(Input(s$3)))) {
        render() {
            var _a, _b;
            return this.renderCheckable("checkbox", y `<input
				${n$1(this.focusElement)}
				type="checkbox"
				.checked=${(_b = (_a = this.value) !== null && _a !== void 0 ? _a : this.defaultValue) !== null && _b !== void 0 ? _b : false}
				.disabled=${this.disabled}
				@change=${(ev) => (this.value = ev.target.checked)}
			/>`, this.label);
        }
    };
    __decorate([
        e$3(localizedMessagePropertyOptions),
        __metadata("design:type", LocalizedMessage)
    ], Checkbox.prototype, "label", void 0);
    Checkbox = __decorate([
        e$4("sdpi-checkbox")
    ], Checkbox);

    let CheckboxList = class CheckboxList extends Gridded(Persisted(Checkable(DataSourced(DynamicValueType(Input(s$3)))))) {
        static get styles() {
            return [
                ...super.styles,
                i$5 `
				.loading {
					margin: 0;
					padding: calc(var(--spacer) * 1.5) 0;
					user-select: none;
				}
			`,
            ];
        }
        render() {
            return this.items.render({
                pending: () => y `<p class="loading">${this.loadingText}</p>`,
                complete: () => this.renderGrid(this.renderDataSource((item) => this.renderCheckable("checkbox", y `
								<input
									type="checkbox"
									.checked=${(this.value && this.value.findIndex((v) => v == item.value) > -1) ||
                false}
									.disabled=${this.disabled || item.disabled || false}
									.value=${item.value}
									@change=${this.handleChange}
								/>
							`, item.label))),
            });
        }
        handleChange(ev) {
            const value = this.parseValue(ev.target.value);
            if (value === undefined) {
                return;
            }
            const values = new Set(this.value);
            if (ev.target.checked) {
                values.add(value);
            }
            else {
                values.delete(value);
            }
            this.value = Array.from(values);
        }
    };
    CheckboxList = __decorate([
        e$4("sdpi-checkbox-list")
    ], CheckboxList);

    let Color = class Color extends Persisted(Focusable(Input(s$3))) {
        static get styles() {
            return [
                ...super.styles,
                i$5 `
				input {
					background-color: var(--input-bg-color);
					height: var(--input-height);
				}

				input:disabled {
					opacity: var(--opacity-disabled);
				}
			`,
            ];
        }
        render() {
            return y `
			<input
				type="color"
				${n$1(this.focusElement)}
				.disabled=${this.disabled}
				.defaultValue=${this.value || this.defaultValue || ""}
				@change=${(ev) => (this.value = ev.target.value)}
			/>
		`;
        }
    };
    Color = __decorate([
        e$4("sdpi-color")
    ], Color);

    let DelegateElement = class DelegateElement extends Delegate(Persisted(Focusable(Input(s$3)))) {
        render() {
            return this.renderDelegate((value) => {
                if (value === undefined || value === null) {
                    return value;
                }
                if (this.formatType === "path") {
                    const { done, value: name } = getSegmentsInReverse(value.toString()).next();
                    return done ? value : name;
                }
                return value;
            });
        }
        invoked() {
            if (this.disabled) {
                return;
            }
            if (this.invoke === undefined) {
                console.warn('Delegation failed, consider setting the "invoke" attribute. When defined, `sendToPlugin` is invoked with the specified attribute value, allowing for the plug-in to determine the persisted value.');
            }
            else {
                streamDeckClient.send("sendToPlugin", { event: this.invoke });
            }
        }
    };
    __decorate([
        e$3({ attribute: "format-type" }),
        __metadata("design:type", Object)
    ], DelegateElement.prototype, "formatType", void 0);
    __decorate([
        e$3(),
        __metadata("design:type", String)
    ], DelegateElement.prototype, "invoke", void 0);
    DelegateElement = __decorate([
        e$4("sdpi-delegate")
    ], DelegateElement);

    let File = class File extends Delegate(Persisted(Focusable(Input(s$3)))) {
        static get styles() {
            return [
                ...super.styles,
                i$5 `
				input[type="file"] {
					display: none;
				}
			`,
            ];
        }
        render() {
            return y `
			${super.renderDelegate((path) => getFileName((path === null || path === void 0 ? void 0 : path.toString()) || ""))}
			<input
				${n$1(this.focusElement)}
				type="file"
				id="file_input"
				.accept=${this.accept || ""}
				.disabled=${this.disabled}
				@change="${(ev) => (this.value = sanitize(ev.target.value))}"
			/>
		`;
        }
        invoked() {
            var _a;
            (_a = this.focusElement.value) === null || _a === void 0 ? void 0 : _a.click();
        }
    };
    __decorate([
        e$3(),
        __metadata("design:type", String)
    ], File.prototype, "accept", void 0);
    File = __decorate([
        e$4("sdpi-file")
    ], File);

    let i18nElement = class i18nElement extends s$3 {
        render() {
            return this.key ? y `${i18n.getMessage(this.key)}` : undefined;
        }
    };
    __decorate([
        e$3(),
        __metadata("design:type", String)
    ], i18nElement.prototype, "key", void 0);
    i18nElement = __decorate([
        e$4("sdpi-i18n")
    ], i18nElement);

    let Textfield = class Textfield extends Persisted(Focusable(Input(s$3))) {
        constructor() {
            super(...arguments);
            this.required = false;
            this.delaySave = true;
            this.type = "text";
        }
        static get styles() {
            return [
                ...super.styles,
                hostStyle,
                i$5 `
				input {
					background-color: var(--input-bg-color);
					padding: calc(var(--spacer) + 3px) var(--spacer);
				}

				input:disabled {
					opacity: var(--opacity-disabled);
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
			`,
            ];
        }
        render() {
            var _a;
            return y `
			<input
				${n$1(this.focusElement)}
				pattern=${l(this.pattern)}
				placeholder=${l((_a = this.placeholder) === null || _a === void 0 ? void 0 : _a.toString())}
				maxlength=${l(this.maxLength)}
				.disabled=${this.disabled}
				.required=${this.required}
				.type=${this.type}
				.value=${this.value || ""}
				@input=${(ev) => (this.value = ev.target.value)}
			/>
		`;
        }
    };
    __decorate([
        e$3({
            attribute: "maxlength",
            type: Number,
        }),
        __metadata("design:type", Number)
    ], Textfield.prototype, "maxLength", void 0);
    __decorate([
        e$3(),
        __metadata("design:type", String)
    ], Textfield.prototype, "pattern", void 0);
    __decorate([
        e$3(localizedMessagePropertyOptions),
        __metadata("design:type", LocalizedMessage)
    ], Textfield.prototype, "placeholder", void 0);
    __decorate([
        e$3({ type: Boolean }),
        __metadata("design:type", Object)
    ], Textfield.prototype, "required", void 0);
    Textfield = __decorate([
        e$4("sdpi-textfield")
    ], Textfield);

    let Password = class Password extends Textfield {
        constructor() {
            super(...arguments);
            this.type = "password";
        }
    };
    Password = __decorate([
        e$4("sdpi-password")
    ], Password);

    let Radio = class Radio extends Gridded(Persisted(Checkable(DataSourced(DynamicValueType(Input(s$3)))))) {
        static get styles() {
            return [
                ...super.styles,
                i$5 `
				.loading {
					margin: 0;
					padding: calc(var(--spacer) * 1.5) 0;
					user-select: none;
				}
			`,
            ];
        }
        render() {
            return this.items.render({
                pending: () => y `<p class="loading">${this.loadingText}</p>`,
                complete: () => this.renderGrid(this.renderDataSource((item) => this.renderCheckable("radio", y `
								<input
									type="radio"
									name="_"
									.checked=${this.value == item.value ||
                (this.defaultValue != undefined && this.defaultValue == item.value)}
									.disabled=${this.disabled || item.disabled || false}
									.value=${item.value}
									@change=${(ev) => (this.value = this.parseValue(ev.target.value))}
								/>
							`, item.label))),
            });
        }
    };
    Radio = __decorate([
        e$4("sdpi-radio")
    ], Radio);

    let Range = class Range extends Persisted(Focusable(Input(s$3))) {
        constructor() {
            super(...arguments);
            this.showLabels = false;
            this.delaySave = true;
        }
        static get styles() {
            return [
                ...super.styles,
                i$5 `
				input {
					-webkit-appearance: none;
					margin: 0;
					height: 22px;
					background-color: transparent;
				}

				input:disabled,
				.container > div[aria-disabled="true"] {
					cursor: default;
					opacity: var(--opacity-disabled);
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
					content: "";
				}

				.container {
					display: flex;
					align-items: center;
				}

				.container > div {
					flex: 0 1;
				}

				div[role="button"] {
					cursor: pointer;
					user-select: none;
				}

				.container > div:nth-child(2) {
					flex: 1 1;
					margin: 0 var(--spacer);
				}
			`,
            ];
        }
        render() {
            var _a, _b;
            const value = ((_a = this.value) === null || _a === void 0 ? void 0 : _a.toString()) || ((_b = this.defaultValue) === null || _b === void 0 ? void 0 : _b.toString()) || "";
            const input = y `
			<input
				${n$1(this.focusElement)}
				type="range"
				max=${l(this.max)}
				min=${l(this.min)}
				step=${l(this.step)}
				.disabled=${this.disabled}
				.title=${value}
				.value=${value}
				@change=${(ev) => (this.value = ev.target.valueAsNumber)}
			/>
		`;
            if (this.showLabels) {
                return y `<div class="container">
				<div
					aria-disabled=${this.disabled}
					role="button"
					@click=${() => !this.disabled && this.min !== undefined && (this.value = this.min)}
				>
					<slot name="min">${this.min}</slot>
				</div>
				<div>${input}</div>
				<div
					aria-disabled=${this.disabled}
					role="button"
					@click=${() => !this.disabled && this.max !== undefined && (this.value = this.max)}
				>
					<slot name="max">${this.max}</slot>
				</div>
			</div>`;
            }
            else {
                return input;
            }
        }
    };
    __decorate([
        e$3({ type: Number }),
        __metadata("design:type", Number)
    ], Range.prototype, "max", void 0);
    __decorate([
        e$3({ type: Number }),
        __metadata("design:type", Number)
    ], Range.prototype, "min", void 0);
    __decorate([
        e$3({
            attribute: "showlabels",
            type: Boolean,
        }),
        __metadata("design:type", Object)
    ], Range.prototype, "showLabels", void 0);
    __decorate([
        e$3({ type: Number }),
        __metadata("design:type", Number)
    ], Range.prototype, "step", void 0);
    Range = __decorate([
        e$4("sdpi-range")
    ], Range);

    let SdpiItem = class SdpiItem extends s$3 {
        render() {
            return y `
			<div class="container grid">
				<div class="label">
					<label @click=${this.handleLabelClick}
						>${this.label ? this.label.toString() + ":" : undefined}</label
					>
				</div>
				<div class="content"><slot></slot></div>
			</div>
		`;
        }
        handleLabelClick() {
            for (const elem of this.querySelectorAll("*")) {
                const focusable = elem;
                if (focusable.canFocus) {
                    focusable.focus();
                    return;
                }
            }
        }
    };
    SdpiItem.styles = [
        hostStyle,
        i$5 `
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
				-webkit-user-drag: none;
			}

			.grid {
				align-items: start;
				display: grid;
				grid-template-columns: 95px 241px;
			}

			.label {
				align-items: center;
				display: flex;
				justify-self: end;
				min-height: 28px;
				padding-right: 11px;
				text-align: right;
			}
		`,
    ];
    __decorate([
        e$3(localizedMessagePropertyOptions),
        __metadata("design:type", LocalizedMessage)
    ], SdpiItem.prototype, "label", void 0);
    SdpiItem = __decorate([
        e$4("sdpi-item")
    ], SdpiItem);

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    class s{constructor(t){this.Y=t;}disconnect(){this.Y=void 0;}reconnect(t){this.Y=t;}deref(){return this.Y}}class i{constructor(){this.Z=void 0,this.q=void 0;}get(){return this.Z}pause(){var t;null!==(t=this.Z)&&void 0!==t||(this.Z=new Promise((t=>this.q=t)));}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Z=this.q=void 0;}}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const n=t=>!t$1(t)&&"function"==typeof t.then;class h extends c$1{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CK=new s(this),this._$CX=new i;}render(...s){var i;return null!==(i=s.find((t=>!n(t))))&&void 0!==i?i:x}update(s,i){const r=this._$Cyt;let e=r.length;this._$Cyt=i;const o=this._$CK,h=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<i.length&&!(t>this._$Cwt);t++){const s=i[t];if(!n(s))return this._$Cwt=t,s;t<e&&s===r[t]||(this._$Cwt=1073741823,e=0,Promise.resolve(s).then((async t=>{for(;h.get();)await h.get();const i=o.deref();if(void 0!==i){const r=i._$Cyt.indexOf(s);r>-1&&r<i._$Cwt&&(i._$Cwt=r,i.setValue(t));}})));}return x}disconnected(){this._$CK.disconnect(),this._$CX.pause();}reconnected(){this._$CK.reconnect(this),this._$CX.resume();}}const c=e$1(h);

    let Select = class Select extends Persisted(Focusable(DataSourced(DynamicValueType(Input(s$3))))) {
        constructor() {
            super(...arguments);
            this.showRefresh = false;
        }
        static get styles() {
            return [
                ...super.styles,
                i$5 `
				select {
					background-color: var(--input-bg-color);
					padding: calc(var(--spacer) + 2px) 0;
					text-overflow: ellipsis;
					width: 100%;
				}

				select:focus {
					box-shadow: inset 0 0 1px var(--font-color);
				}

				select:disabled {
					opacity: var(--opacity-disabled);
				}

				.refresh {
					background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTgiIHdpZHRoPSIxOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjOUM5QzlDIj48cGF0aCBkPSJNMTIgMjBxLTMuMzUgMC01LjY3NS0yLjMyNVE0IDE1LjM1IDQgMTJxMC0zLjM1IDIuMzI1LTUuNjc1UTguNjUgNCAxMiA0cTEuNzI1IDAgMy4zLjcxMyAxLjU3NS43MTIgMi43IDIuMDM3VjRoMnY3aC03VjloNC4ycS0uOC0xLjQtMi4xODctMi4yUTEzLjYyNSA2IDEyIDYgOS41IDYgNy43NSA3Ljc1VDYgMTJxMCAyLjUgMS43NSA0LjI1VDEyIDE4cTEuOTI1IDAgMy40NzUtMS4xVDE3LjY1IDE0aDIuMXEtLjcgMi42NS0yLjg1IDQuMzI1UTE0Ljc1IDIwIDEyIDIwWiIvPjwvc3ZnPg==)
						no-repeat -1px -1px;
					width: 16px;
				}

				sdpi-button:not([disabled]):hover .refresh {
					background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTgiIHdpZHRoPSIxOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjQ0VDRUNFIj48cGF0aCBkPSJNMTIgMjBxLTMuMzUgMC01LjY3NS0yLjMyNVE0IDE1LjM1IDQgMTJxMC0zLjM1IDIuMzI1LTUuNjc1UTguNjUgNCAxMiA0cTEuNzI1IDAgMy4zLjcxMyAxLjU3NS43MTIgMi43IDIuMDM3VjRoMnY3aC03VjloNC4ycS0uOC0xLjQtMi4xODctMi4yUTEzLjYyNSA2IDEyIDYgOS41IDYgNy43NSA3Ljc1VDYgMTJxMCAyLjUgMS43NSA0LjI1VDEyIDE4cTEuOTI1IDAgMy40NzUtMS4xVDE3LjY1IDE0aDIuMXEtLjcgMi42NS0yLjg1IDQuMzI1UTE0Ljc1IDIwIDEyIDIwWiIvPjwvc3ZnPg==);
				}
			`,
            ];
        }
        firstUpdated(_changedProperties) {
            super.firstUpdated(_changedProperties);
            if (this.labelSetting) {
                [this.getLabel, this.setLabel] = useSettings(this.labelSetting, null, null, false);
            }
        }
        render() {
            var _a, _b;
            const disabled = this.disabled || this.items.status !== i$2.COMPLETE;
            const selectedValue = this.getSelectedValueFrom((_b = (_a = this.items) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : []) || this.defaultValue;
            const select = y `
			<select
				${n$1(this.focusElement)}
				.disabled=${disabled}
				.value=${(selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.toString()) || ""}
				@change=${(ev) => {
            this.setLabel && this.setLabel(ev.target[ev.target.selectedIndex].innerText);
            this.value = this.parseValue(ev.target.value);
        }}
			>
				${this.items.render({
            pending: () => y `<option value="" disabled selected>${this.loadingText}</option>`,
            complete: () => y `
						${selectedValue === undefined ? c(this.getLabelOrPlaceholder()) : undefined}
						${this.renderDataSource((item) => y `<option
									.disabled=${item.disabled || false}
									.value=${item.value}
									.selected=${item.value === selectedValue}
								>
									${item.label}
								</option>`, (group, children) => { var _a; return y `<optgroup .label=${((_a = group.label) === null || _a === void 0 ? void 0 : _a.toString()) || ""}>${children}</optgroup>`; })}
					`,
        })}
			</select>
		`;
            if (!this.showRefresh || this.dataSource === undefined) {
                return select;
            }
            return y `
			<div class="flex">
				<div class="flex-grow">${select}</div>
				<div class="flex-shrink margin-left">
					<sdpi-button .disabled=${disabled} @click=${() => this.refresh()}>
						<div class="refresh">&nbsp;</div>
					</sdpi-button>
				</div>
			</div>
		`;
        }
        async getLabelOrPlaceholder() {
            if (this.getLabel) {
                const label = await this.getLabel();
                if (label !== undefined) {
                    return y `<option value="" disabled selected>${label}</option>`;
                }
            }
            if (this.placeholder) {
                return y `<option value="" disabled hidden selected>${this.placeholder}</option>`;
            }
            return undefined;
        }
        getSelectedValueFrom(items) {
            for (const item of items) {
                if ("children" in item) {
                    const value = this.getSelectedValueFrom(item.children);
                    if (value !== undefined) {
                        return value;
                    }
                    continue;
                }
                if ("value" in item && item.value == this.value) {
                    return item.value;
                }
            }
            return undefined;
        }
    };
    __decorate([
        e$3({ attribute: "label-setting" }),
        __metadata("design:type", String)
    ], Select.prototype, "labelSetting", void 0);
    __decorate([
        e$3({
            attribute: "show-refresh",
            type: Boolean,
        }),
        __metadata("design:type", Object)
    ], Select.prototype, "showRefresh", void 0);
    __decorate([
        e$3(localizedMessagePropertyOptions),
        __metadata("design:type", LocalizedMessage)
    ], Select.prototype, "placeholder", void 0);
    Select = __decorate([
        e$4("sdpi-select")
    ], Select);

    let Textarea = class Textarea extends Persisted(Focusable(Input(s$3))) {
        constructor() {
            super(...arguments);
            this.rows = 3;
            this.showLength = false;
            this.delaySave = true;
        }
        static get styles() {
            return [
                ...super.styles,
                hostStyle,
                i$5 `
				textarea {
					background-color: var(--input-bg-color);
					padding: calc(var(--spacer) + 3px) var(--spacer);
					resize: none;
				}

				textarea:disabled {
					opacity: var(--opacity-disabled);
				}

				.length {
					color: var(--font-color);
					display: block;
					text-align: right;
					font-family: var(--font-family);
					font-size: var(--font-size);
				}
			`,
            ];
        }
        render() {
            return y `
			<textarea
				${n$1(this.focusElement)}
				type="textarea"
				maxlength=${l(this.maxLength)}
				.disabled=${this.disabled}
				.id=${this.inputId}
				.rows=${this.rows}
				.value=${this.value || ""}
				@input=${(ev) => (this.value = ev.target.value)}
			></textarea>
			${this.getLengthLabel()}
		`;
        }
        getLengthLabel() {
            var _a;
            if (this.showLength || this.maxLength) {
                const maxLengthLabel = this.maxLength ? y `/${this.maxLength}` : undefined;
                return y `<label class="length" for=${this.inputId}>${((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) || 0}${maxLengthLabel}</label>`;
            }
            return undefined;
        }
    };
    __decorate([
        e$3({
            attribute: "maxlength",
            type: Number,
        }),
        __metadata("design:type", Number)
    ], Textarea.prototype, "maxLength", void 0);
    __decorate([
        e$3({ type: Number }),
        __metadata("design:type", Object)
    ], Textarea.prototype, "rows", void 0);
    __decorate([
        e$3({
            attribute: "showlength",
            type: Boolean,
        }),
        __metadata("design:type", Object)
    ], Textarea.prototype, "showLength", void 0);
    Textarea = __decorate([
        e$4("sdpi-textarea")
    ], Textarea);

    const existing = window.connectElgatoStreamDeckSocket;
    window.connectElgatoStreamDeckSocket = (port, propertyInspectorUUID, registerEvent, info, actionInfo) => {
        if (existing) {
            existing(port, propertyInspectorUUID, registerEvent, info, actionInfo);
        }
        streamDeckClient.connect(port, propertyInspectorUUID, registerEvent, JSON.parse(info), JSON.parse(actionInfo));
    };

    var SDPIComponents;
    (function (SDPIComponents) {
        SDPIComponents.streamDeckClient = streamDeckClient;
        SDPIComponents.useGlobalSettings = useGlobalSettings;
        SDPIComponents.useSettings = useSettings;
        SDPIComponents.i18n = i18n;
    })(SDPIComponents || (SDPIComponents = {}));
    window.SDPIComponents = SDPIComponents;

    const style = document.createElement("style");
    style.innerHTML = i$5 `
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
`.cssText;
    document.head.appendChild(style);

})();
//# sourceMappingURL=sdpi-components.js.map
