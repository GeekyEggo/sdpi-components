/**!
 * @license
 * sdpi-components v2.0.1, Copyright GeekyEggo and other contributors (https://sdpi-components.dev)
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
    const t$4=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$6=Symbol(),n$8=new Map;class s$5{constructor(t,n){if(this._$cssResult$=!0,n!==e$6)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$8.get(this.cssText);return t$4&&void 0===e&&(n$8.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$5=t=>new s$5("string"==typeof t?t:t+"",e$6),r$4=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$5(o,e$6)},i$5=(e,n)=>{t$4?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$5(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var s$4;const e$5=window.trustedTypes,r$3=e$5?e$5.emptyScript:"",h$5=window.reactiveElementPolyfillSupport,o$4={toAttribute(t,i){switch(i){case Boolean:t=t?r$3:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$7=(t,i)=>i!==t&&(i==i||t==t),l$4={attribute:!0,type:String,converter:o$4,reflect:!1,hasChanged:n$7};class a$1 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=l$4){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$4}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$5(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$ES(t,i,s=l$4){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$4.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:o$4.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$7)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_());}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU();}updated(t){}firstUpdated(t){}}a$1.finalized=!0,a$1.elementProperties=new Map,a$1.elementStyles=[],a$1.shadowRootOptions={mode:"open"},null==h$5||h$5({ReactiveElement:a$1}),(null!==(s$4=globalThis.reactiveElementVersions)&&void 0!==s$4?s$4:globalThis.reactiveElementVersions=[]).push("1.3.2");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var t$3;const i$4=globalThis.trustedTypes,s$3=i$4?i$4.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$4=`lit$${(Math.random()+"").slice(9)}$`,o$3="?"+e$4,n$6=`<${o$3}>`,l$3=document,h$4=(t="")=>l$3.createComment(t),r$2=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d$1=Array.isArray,u=t=>{var i;return d$1(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p(1),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h$4(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$3.createTreeWalker(l$3,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c$1;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c$1?"!--"===u[1]?d=v:void 0!==u[1]?d=a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c$1,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===a?d=c$1:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c$1?s+n$6:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e$4+y):s+e$4+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$3?s$3.createHTML(u):u,l]};class E{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$4)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$4),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e$4),s=t.length-1;if(s>0){l.textContent=i$4?i$4.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h$4()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h$4());}}}else if(8===l.nodeType)if(l.data===o$3)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$4,t+1));)c.push({type:7,index:r}),t+=e$4.length-1;}r++;}}static createElement(t,i){const s=l$3.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r$2(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$3).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r$2(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.$(t);}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t));}$(t){this._$AH!==w&&r$2(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$3.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E(t)),i}S(t){d$1(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.M(h$4()),this.M(h$4()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r$2(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r$2(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.C(t);}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}C(t){this.element[this.name]=t===w?void 0:t;}}const k=i$4?i$4.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4;}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=window.litHtmlPolyfillSupport;null==z||z(E,N),(null!==(t$3=globalThis.litHtmlVersions)&&void 0!==t$3?t$3:globalThis.litHtmlVersions=[]).push("2.2.3");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var l$2,o$2;class s$2 extends a$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b}}s$2.finalized=!0,s$2._$litElement$=!0,null===(l$2=globalThis.litElementHydrateSupport)||void 0===l$2||l$2.call(globalThis,{LitElement:s$2});const n$5=globalThis.litElementPolyfillSupport;null==n$5||n$5({LitElement:s$2});(null!==(o$2=globalThis.litElementVersions)&&void 0!==o$2?o$2:globalThis.litElementVersions=[]).push("3.2.0");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const n$4=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const i$3=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$3(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$3(e,n)}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function t$2(t){return e$3({...t,state:!0})}

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
                    registerEvent
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
                        uuid: connectionInfo.propertyInspectorUUID
                    }));
                    this._connection.setResult(webSocket);
                };
                this._isInitialized = true;
            }
        }
        async getGlobalSettings() {
            const response = await this.get('getGlobalSettings', 'didReceiveGlobalSettings');
            return response.payload.settings;
        }
        setGlobalSettings(value) {
            return this.send('setGlobalSettings', value);
        }
        async getSettings() {
            const { actionInfo } = await this.getConnectionInfo();
            const response = await this.get('getSettings', 'didReceiveSettings', (msg) => msg.action == actionInfo.action && msg.context == actionInfo.context && msg.device == actionInfo.device);
            return response.payload;
        }
        setSettings(value) {
            return this.send('setSettings', value);
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
                action: connectionInfo.actionInfo.action
            }));
        }
        handleMessage(ev) {
            const data = JSON.parse(ev.data);
            switch (data.event) {
                case 'didReceiveGlobalSettings':
                    this.didReceiveGlobalSettings.dispatch(data);
                    break;
                case 'didReceiveSettings':
                    this.didReceiveSettings.dispatch(data);
                    break;
                case 'sendToPropertyInspector':
                    this.sendToPropertyInspector.dispatch(data);
                    break;
            }
            this.message.dispatch(data);
        }
    }
    const streamDeckClient = new StreamDeckClient();

    async function getFileName(path) {
        const divider = (await isWindows()) ? '\\' : '/';
        const segments = path.split(divider);
        return segments.length == 1 ? path : segments[segments.length - 1];
    }
    async function sanitize(path) {
        const decodedValue = decodeURIComponent(path.replace(/^C:\\fakepath\\/, ''));
        return (await isWindows()) ? decodedValue.replace(new RegExp('/', 'g'), '\\') : decodedValue;
    }
    async function isWindows() {
        const connectionInfo = await streamDeckClient.getConnectionInfo();
        return connectionInfo.info.application.platform == 'windows';
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

    function delay(callback, timeout) {
        let handle;
        let pcs;
        return (data, ...args) => {
            clearTimeout(handle);
            if (pcs === undefined) {
                pcs = new PromiseCompletionSource();
            }
            handle = setTimeout(() => {
                pcs === null || pcs === void 0 ? void 0 : pcs.setResult();
                pcs = undefined;
                callback(data);
            }, timeout, args);
            return pcs.promise;
        };
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
    function getUUID() {
        const chr4 = () => Math.random().toString(16).slice(-4);
        return chr4() + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + chr4() + chr4();
    }
    function get(path, source) {
        const props = path.split('.');
        return props.reduce((obj, prop) => obj && obj[prop], source);
    }
    function set(path, target, value) {
        const props = path.split('.');
        props.reduce((obj, prop, i) => {
            return i === props.length - 1 ? (obj[prop] = value) : obj[prop] || (obj[prop] = {});
        }, target);
    }

    const Checkable = (superClass) => {
        class Checkable extends superClass {
            static get styles() {
                return [
                    asArray(super.styles),
                    r$4 `
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
                `
                ];
            }
            renderCheckable(type, input, label) {
                return $ `
                <label class="checkable-container">
                    ${input}
                    <span class="checkable-symbol" role=${type}></span>
                    ${label ? $ `<span class="checkable-text">${label}</span>` : undefined}
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
     */const i$2={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},s$1=Symbol();class h$3{constructor(t,i,s){this.t=0,this.status=0,this.autoRun=!0,this.i=t,this.i.addController(this);const h="object"==typeof i?i:{task:i,args:s};this.h=h.task,this.o=h.args,void 0!==h.autoRun&&(this.autoRun=h.autoRun),this.taskComplete=new Promise(((t,i)=>{this.l=t,this.u=i;}));}hostUpdated(){this.performTask();}async performTask(){var t;const i=null===(t=this.o)||void 0===t?void 0:t.call(this);this.shouldRun(i)&&this.run(i);}shouldRun(t){return this.autoRun&&this.v(t)}async run(t){var i;let h,r;null!=t||(t=null===(i=this.o)||void 0===i?void 0:i.call(this)),2!==this.status&&3!==this.status||(this.taskComplete=new Promise(((t,i)=>{this.l=t,this.u=i;}))),this.status=1,this.m=void 0,this.p=void 0,this.i.requestUpdate();const o=++this.t;try{h=await this.h(t);}catch(t){r=t;}this.t===o&&(h===s$1?this.status=0:(void 0===r?(this.status=2,this.l(h)):(this.status=3,this.u(r)),this.p=h,this.m=r),this.i.requestUpdate());}get value(){return this.p}get error(){return this.m}render(t){var i,s,h,r;switch(this.status){case 0:return null===(i=t.initial)||void 0===i?void 0:i.call(t);case 1:return null===(s=t.pending)||void 0===s?void 0:s.call(t);case 2:return null===(h=t.complete)||void 0===h?void 0:h.call(t,this.value);case 3:return null===(r=t.error)||void 0===r?void 0:r.call(t,this.error);default:this.status;}}v(i){const s=this.g;return this.g=i,Array.isArray(i)&&Array.isArray(s)?i.length===s.length&&i.some(((i,h)=>n$7(i,s[h]))):i!==s}}

    const DataSourced = (superClass) => {
        class DataSourced extends superClass {
            constructor(...args) {
                super(args);
                this._itemsDirtyFlag = false;
                this._mutationObserver = new FilteredMutationObserver(['optgroup', 'option'], () => (this._itemsDirtyFlag = !this._itemsDirtyFlag));
                this.loadingText = 'Loading...';
                this.items = new h$3(this, async ([dataSource]) => {
                    if (dataSource === undefined) {
                        return this.getItemsFromChildNodes();
                    }
                    const result = await streamDeckClient.get('sendToPlugin', 'sendToPropertyInspector', (msg) => { var _a; return ((_a = msg.payload) === null || _a === void 0 ? void 0 : _a.event) === this.dataSource; }, { event: this.dataSource });
                    return result.payload.items;
                }, () => [this.dataSource, this._itemsDirtyFlag]);
                this._mutationObserver.observe(this);
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
                            label: node.label,
                            children: Array.from(node.childNodes).reduce(reducer, [])
                        });
                    }
                    else if (node instanceof HTMLOptionElement) {
                        items.push({
                            disabled: node.disabled,
                            label: node.text,
                            value: node.value
                        });
                    }
                    return items;
                };
                return this._mutationObserver.items.reduce(reducer, []);
            }
            isItem(object) {
                return object && object.value !== undefined;
            }
            isItemGroup(object) {
                return object && object.children !== undefined && Array.isArray(object.children);
            }
        }
        __decorate([
            t$2(),
            __metadata("design:type", Object)
        ], DataSourced.prototype, "_itemsDirtyFlag", void 0);
        __decorate([
            e$3(),
            __metadata("design:type", String)
        ], DataSourced.prototype, "dataSource", void 0);
        __decorate([
            e$3({
                attribute: 'loading'
            }),
            __metadata("design:type", Object)
        ], DataSourced.prototype, "loadingText", void 0);
        return DataSourced;
    };

    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const t$1=o=>null===o||"object"!=typeof o&&"function"!=typeof o,r$1=o=>void 0===o.strings;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$2=t=>(...e)=>({_$litDirective$:t,values:e});class i$1{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const e$1=(i,t)=>{var s,o;const n=i._$AN;if(void 0===n)return !1;for(const i of n)null===(o=(s=i)._$AO)||void 0===o||o.call(s,t,!1),e$1(i,t);return !0},o$1=i=>{let t,s;do{if(void 0===(t=i._$AM))break;s=t._$AN,s.delete(i),i=t;}while(0===(null==s?void 0:s.size))},n$2=i=>{for(let t;t=i._$AM;i=t){let s=t._$AN;if(void 0===s)t._$AN=s=new Set;else if(s.has(i))break;s.add(i),l$1(t);}};function r(i){void 0!==this._$AN?(o$1(this),this._$AM=i,n$2(this)):this._$AM=i;}function h$2(i,t=!1,s=0){const n=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(n))for(let i=s;i<n.length;i++)e$1(n[i],!1),o$1(n[i]);else null!=n&&(e$1(n,!1),o$1(n));else e$1(this,i);}const l$1=i=>{var t$1,e,o,n;i.type==t.CHILD&&(null!==(t$1=(o=i)._$AP)&&void 0!==t$1||(o._$AP=h$2),null!==(e=(n=i)._$AQ)&&void 0!==e||(n._$AQ=r));};class d extends i$1{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,s){super._$AT(i,t,s),n$2(this),this.isConnected=i._$AU;}_$AO(i,t=!0){var s,n;i!==this.isConnected&&(this.isConnected=i,i?null===(s=this.reconnected)||void 0===s||s.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),t&&(e$1(this,i),o$1(this));}setValue(t){if(r$1(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const e=()=>new o;class o{}const h$1=new WeakMap,n$1=e$2(class extends d{render(t){return w}update(t,[s]){var e;const o=s!==this.U;return o&&void 0!==this.U&&this.ot(void 0),(o||this.rt!==this.lt)&&(this.U=s,this.ht=null===(e=t.options)||void 0===e?void 0:e.host,this.ot(this.lt=t.element)),w}ot(i){var t;if("function"==typeof this.U){const s=null!==(t=this.ht)&&void 0!==t?t:globalThis;let e=h$1.get(s);void 0===e&&(e=new WeakMap,h$1.set(s,e)),void 0!==e.get(this.U)&&this.U.call(this.ht,void 0),e.set(this.U,i),void 0!==i&&this.U.call(this.ht,i);}else this.U.value=i;}get rt(){var i,t,s;return "function"==typeof this.U?null===(t=h$1.get(null!==(i=this.ht)&&void 0!==i?i:globalThis))||void 0===t?void 0:t.get(this.U):null===(s=this.U)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0);}reconnected(){this.ot(this.lt);}});

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
                if (this.focusElement.value) {
                    switch (this.focusElement.value.type) {
                        case 'checkbox': {
                            const checkbox = this.focusElement.value;
                            checkbox.checked = !checkbox.checked;
                            break;
                        }
                        case 'file': {
                            this.focusElement.value.click();
                            break;
                        }
                        default: {
                            this.focusElement.value.focus();
                            break;
                        }
                    }
                }
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
                    r$4 `
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
                `
                ];
            }
            renderGrid(items) {
                if (items.length === 0) {
                    return undefined;
                }
                return $ `<div class="gridded-container">${items.map((item) => $ `<div class="gridded-item gridded-col-${this.columns}">${item}</div>`)}</div>`;
            }
        }
        __decorate([
            e$3({ type: Number }),
            __metadata("design:type", Object)
        ], Gridded.prototype, "columns", void 0);
        return Gridded;
    };

    const hostStyle = r$4 `
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
                    r$4 `
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
                `
                ];
            }
        }
        __decorate([
            e$3({ type: Boolean }),
            __metadata("design:type", Object)
        ], Input.prototype, "disabled", void 0);
        __decorate([
            e$3({ attribute: false }),
            __metadata("design:type", Object)
        ], Input.prototype, "value", void 0);
        return Input;
    };

    class Settings {
        constructor(didReceive, save) {
            this.didReceive = didReceive;
            this.save = save;
            this._settings = new PromiseCompletionSource();
            didReceive.subscribe(async (data) => { var _a; return (_a = this._settings) === null || _a === void 0 ? void 0 : _a.setResult(data.payload.settings); });
        }
        use(key, changeCallback, timeout = 250) {
            if (changeCallback) {
                this.didReceive.subscribe((data) => {
                    var _a;
                    if (((_a = data === null || data === void 0 ? void 0 : data.payload) === null || _a === void 0 ? void 0 : _a.settings) !== undefined) {
                        changeCallback(get(key, data.payload.settings));
                    }
                });
            }
            const getter = async () => get(key, await this._settings.promise);
            const setter = timeout ? delay((value) => this.set(key, value), timeout) : (value) => this.set(key, value);
            return [getter, setter];
        }
        async set(key, value) {
            const _settings = await this._settings.promise;
            const oldValue = get(key, _settings);
            if (oldValue === value) {
                return;
            }
            set(key, _settings, value);
            this.save(_settings);
        }
    }
    const settings = new Settings(streamDeckClient.didReceiveSettings, (value) => streamDeckClient.setSettings(value));
    const useSettings = settings.use.bind(settings);
    const globalSettings = new Settings(streamDeckClient.didReceiveGlobalSettings, (value) => streamDeckClient.setGlobalSettings(value));
    streamDeckClient.getGlobalSettings();
    const useGlobalSettings = globalSettings.use.bind(globalSettings);

    const Persisted = (superClass) => {
        class Persisted extends superClass {
            constructor() {
                super(...arguments);
                this.isGlobal = false;
            }
            firstUpdated(_changedProperties) {
                super.firstUpdated(_changedProperties);
                if (this.setting) {
                    if (this.isGlobal) {
                        [, this.save] = useGlobalSettings(this.setting, (value) => (this.value = value));
                    }
                    else {
                        [, this.save] = useSettings(this.setting, (value) => (this.value = value));
                    }
                }
            }
            willUpdate(_changedProperties) {
                if (_changedProperties.has('value') && this.save) {
                    this.save(this.value);
                }
            }
        }
        __decorate([
            e$3({
                attribute: 'global',
                type: Boolean
            }),
            __metadata("design:type", Object)
        ], Persisted.prototype, "isGlobal", void 0);
        __decorate([
            e$3(),
            __metadata("design:type", String)
        ], Persisted.prototype, "setting", void 0);
        __decorate([
            e$3({ attribute: false }),
            __metadata("design:type", Object)
        ], Persisted.prototype, "value", void 0);
        return Persisted;
    };

    let Button = class Button extends Input(s$2) {
        static get styles() {
            return [
                ...super.styles,
                hostStyle,
                r$4 `
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
            `
            ];
        }
        render() {
            return $ `
            <button .disabled=${this.disabled} .value=${this.value || ''}>
                <slot></slot>
            </button>
        `;
        }
    };
    Button = __decorate([
        n$4('sdpi-button')
    ], Button);

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const l=l=>null!=l?l:w;

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
            super(host, ['datalist']);
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

    let Calendar = class Calendar extends Persisted(Focusable(Input(s$2))) {
        constructor() {
            super(...arguments);
            this.dataListController = new DataListController(this);
            this.type = 'date';
        }
        static get styles() {
            return [
                ...super.styles,
                r$4 `
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
            `
            ];
        }
        render() {
            var _a;
            return $ `
            <input
                ${n$1(this.focusElement)}
                type=${this.type}
                list=${l((_a = this.dataListController.dataList) === null || _a === void 0 ? void 0 : _a.id)}
                max=${l(this.max)}
                min=${l(this.min)}
                step=${l(this.step)}
                .disabled=${this.disabled}
                .value=${this.value || ''}
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
        n$4('sdpi-calendar')
    ], Calendar);

    let Checkbox = class Checkbox extends Persisted(Focusable(Checkable(Input(s$2)))) {
        render() {
            return this.renderCheckable('checkbox', $ `<input
                ${n$1(this.focusElement)}
                type="checkbox"
                .checked=${this.value || false}
                .disabled=${this.disabled}
                @change=${(ev) => (this.value = ev.target.checked)}
            />`, this.label);
        }
    };
    __decorate([
        e$3(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "label", void 0);
    Checkbox = __decorate([
        n$4('sdpi-checkbox')
    ], Checkbox);

    let CheckboxList = class CheckboxList extends Gridded(Persisted(Checkable(DataSourced(Input(s$2))))) {
        static get styles() {
            return [
                ...super.styles,
                r$4 `
                .loading {
                    margin: 0;
                    padding: calc(var(--spacer) * 1.5) 0;
                    user-select: none;
                }
            `
            ];
        }
        render() {
            return this.items.render({
                pending: () => $ `<p class="loading">${this.loadingText}</p>`,
                complete: () => this.renderGrid(this.renderDataSource((item) => this.renderCheckable('checkbox', $ `
                                <input
                                    type="checkbox"
                                    .checked=${(this.value && this.value.indexOf(item.value) > -1) || false}
                                    .disabled=${this.disabled || item.disabled || false}
                                    .value=${item.value}
                                    @change=${this.handleChange}
                                />
                            `, item.label)))
            });
        }
        handleChange(ev) {
            const values = new Set(this.value);
            if (ev.target.checked) {
                values.add(ev.target.value);
            }
            else {
                values.delete(ev.target.value);
            }
            this.value = Array.from(values);
        }
    };
    CheckboxList = __decorate([
        n$4('sdpi-checkbox-list')
    ], CheckboxList);

    let Color = class Color extends Persisted(Focusable(Input(s$2))) {
        static get styles() {
            return [
                ...super.styles,
                r$4 `
                input {
                    background-color: var(--input-bg-color);
                }

                input:disabled {
                    opacity: 0.5;
                }
            `
            ];
        }
        render() {
            return $ `
            <input
                type="color"
                ${n$1(this.focusElement)}
                .disabled=${this.disabled}
                .defaultValue=${this.value || ''}
                @change=${(ev) => (this.value = ev.target.value)}
            />
        `;
        }
    };
    Color = __decorate([
        n$4('sdpi-color')
    ], Color);

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    class s{constructor(t){this.U=t;}disconnect(){this.U=void 0;}reconnect(t){this.U=t;}deref(){return this.U}}class i{constructor(){this.Y=void 0,this.q=void 0;}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.q=t)));}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Y=this.q=void 0;}}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const n=t=>!t$1(t)&&"function"==typeof t.then;class h extends d{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CG=new s(this),this._$CK=new i;}render(...s){var i;return null!==(i=s.find((t=>!n(t))))&&void 0!==i?i:b}update(s,i){const r=this._$Cyt;let e=r.length;this._$Cyt=i;const o=this._$CG,h=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<i.length&&!(t>this._$Cwt);t++){const s=i[t];if(!n(s))return this._$Cwt=t,s;t<e&&s===r[t]||(this._$Cwt=1073741823,e=0,Promise.resolve(s).then((async t=>{for(;h.get();)await h.get();const i=o.deref();if(void 0!==i){const r=i._$Cyt.indexOf(s);r>-1&&r<i._$Cwt&&(i._$Cwt=r,i.setValue(t));}})));}return b}disconnected(){this._$CG.disconnect(),this._$CK.pause();}reconnected(){this._$CG.reconnect(this),this._$CK.resume();}}const c=e$2(h);

    let File = class File extends Persisted(Focusable(Input(s$2))) {
        constructor() {
            super(...arguments);
            this.label = '...';
        }
        static get styles() {
            return [
                ...super.styles,
                r$4 `
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
            `
            ];
        }
        render() {
            return $ `
            <div class="container">
                <input
                    ${n$1(this.focusElement)}
                    type="file"
                    id="file_input"
                    .accept=${this.accept || ''}
                    .disabled=${this.disabled}
                    @change="${async (ev) => (this.value = await sanitize(ev.target.value))}"
                />
                <label class="value" for="file_input">
                    <span .title=${this.value || ''}>${c(getFileName(this.value || ''))}</span>
                </label>
                <label class="button">
                    <sdpi-button .disabled=${this.disabled} @click=${() => { var _a; return (_a = this.focusElement.value) === null || _a === void 0 ? void 0 : _a.click(); }}> ${this.label} </sdpi-button>
                </label>
            </div>
        `;
        }
    };
    __decorate([
        e$3(),
        __metadata("design:type", String)
    ], File.prototype, "accept", void 0);
    __decorate([
        e$3(),
        __metadata("design:type", Object)
    ], File.prototype, "label", void 0);
    File = __decorate([
        n$4('sdpi-file')
    ], File);

    let Password = class Password extends Persisted(Focusable(Input(s$2))) {
        static get styles() {
            return [
                ...super.styles,
                hostStyle,
                r$4 `
                input {
                    background-color: var(--input-bg-color);
                    padding: calc(var(--spacer) + 3px) var(--spacer);
                }

                input:disabled {
                    opacity: 0.5;
                }
            `
            ];
        }
        render() {
            return $ `
            <input
                ${n$1(this.focusElement)}
                type="password"
                maxlength=${l(this.maxLength)}
                .disabled=${this.disabled}
                .value=${this.value || ''}
                @input=${(ev) => (this.value = ev.target.value)}
            />
        `;
        }
    };
    __decorate([
        e$3({
            attribute: 'maxlength',
            type: Number
        }),
        __metadata("design:type", Number)
    ], Password.prototype, "maxLength", void 0);
    Password = __decorate([
        n$4('sdpi-password')
    ], Password);

    let Radio = class Radio extends Gridded(Persisted(Checkable(DataSourced(Input(s$2))))) {
        static get styles() {
            return [
                ...super.styles,
                r$4 `
                .loading {
                    margin: 0;
                    padding: calc(var(--spacer) * 1.5) 0;
                    user-select: none;
                }
            `
            ];
        }
        render() {
            return this.items.render({
                pending: () => $ `<p class="loading">${this.loadingText}</p>`,
                complete: () => this.renderGrid(this.renderDataSource((item) => this.renderCheckable('radio', $ `
                                <input
                                    type="radio"
                                    name="_"
                                    .checked=${this.value === item.value}
                                    .disabled=${this.disabled || item.disabled || false}
                                    .value=${item.value}
                                    @change=${(ev) => (this.value = ev.target.value)}
                                />
                            `, item.label)))
            });
        }
    };
    Radio = __decorate([
        n$4('sdpi-radio')
    ], Radio);

    let Range = class Range extends Persisted(Focusable(Input(s$2))) {
        constructor() {
            super(...arguments);
            this.showLabels = false;
        }
        static get styles() {
            return [
                ...super.styles,
                r$4 `
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
            `
            ];
        }
        render() {
            var _a, _b;
            const input = $ `
            <input
                ${n$1(this.focusElement)}
                type="range"
                max=${l(this.max)}
                min=${l(this.min)}
                step=${l(this.step)}
                .disabled=${this.disabled}
                .title=${((_a = this.value) === null || _a === void 0 ? void 0 : _a.toString()) || ''}
                .value=${((_b = this.value) === null || _b === void 0 ? void 0 : _b.toString()) || ''}
                @change=${(ev) => (this.value = ev.target.valueAsNumber)}
            />
        `;
            if (this.showLabels) {
                return $ `<div class="container">
                <div aria-disabled=${this.disabled} role="button" @click=${() => !this.disabled && this.min !== undefined && (this.value = this.min)}>${this.min}</div>
                <div>${input}</div>
                <div aria-disabled=${this.disabled} role="button" @click=${() => !this.disabled && this.max !== undefined && (this.value = this.max)}>${this.max}</div>
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
            attribute: 'showlabels',
            type: Boolean
        }),
        __metadata("design:type", Object)
    ], Range.prototype, "showLabels", void 0);
    __decorate([
        e$3({ type: Number }),
        __metadata("design:type", Number)
    ], Range.prototype, "step", void 0);
    Range = __decorate([
        n$4('sdpi-range')
    ], Range);

    let SdpiItem = class SdpiItem extends s$2 {
        render() {
            const label = this.label ? $ `<label>${this.label}:</label>` : undefined;
            return $ `
            <div class="container grid">
                <div class="label"><label @click=${this.handleLabelClick}>${label}</label></div>
                <div class="content"><slot></slot></div>
            </div>
        `;
        }
        handleLabelClick() {
            for (const elem of this.querySelectorAll('*')) {
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
        r$4 `
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
        `
    ];
    __decorate([
        e$3(),
        __metadata("design:type", String)
    ], SdpiItem.prototype, "label", void 0);
    SdpiItem = __decorate([
        n$4('sdpi-item')
    ], SdpiItem);

    let Select = class Select extends Persisted(Focusable(DataSourced(Input(s$2)))) {
        static get styles() {
            return [
                ...super.styles,
                hostStyle,
                r$4 `
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
            `
            ];
        }
        render() {
            return $ `
            <select
                ${n$1(this.focusElement)}
                .disabled=${this.disabled || this.items.status !== i$2.COMPLETE}
                .value=${this.items.status === i$2.COMPLETE ? this.value || '' : ''}
                @change=${(ev) => (this.value = ev.target.value)}
            >
                ${this.items.render({
            pending: () => $ `<option value="" disabled selected>${this.loadingText}</option>`,
            complete: () => $ `
                        <option value="" disabled .hidden=${!this.placeholder || this.value !== undefined} .selected=${this.value === undefined}>${this.placeholder}</option>
                        ${this.renderDataSource((item) => $ `<option .disabled=${item.disabled || false} .value=${item.value} .selected=${item.value === this.value}>${item.label}</option>`, (group, children) => $ `<optgroup .label=${group.label || ''}>${children}</optgroup>`)}
                    `
        })}
            </select>
        `;
        }
    };
    __decorate([
        e$3(),
        __metadata("design:type", String)
    ], Select.prototype, "placeholder", void 0);
    Select = __decorate([
        n$4('sdpi-select')
    ], Select);

    let Textarea = class Textarea extends Persisted(Focusable(Input(s$2))) {
        constructor() {
            super(...arguments);
            this.rows = 3;
            this.showLength = false;
        }
        static get styles() {
            return [
                ...super.styles,
                hostStyle,
                r$4 `
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
            `
            ];
        }
        render() {
            return $ `
            <textarea
                ${n$1(this.focusElement)}
                type="textarea"
                maxlength=${l(this.maxLength)}
                .disabled=${this.disabled}
                .id=${this.inputId}
                .rows=${this.rows}
                .value=${this.value || ''}
                @input=${(ev) => (this.value = ev.target.value)}
            ></textarea>
            ${this.getLengthLabel()}
        `;
        }
        getLengthLabel() {
            var _a;
            if (this.showLength || this.maxLength) {
                const maxLengthLabel = this.maxLength ? $ `/${this.maxLength}` : undefined;
                return $ `<label class="length" for=${this.inputId}>${((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) || 0}${maxLengthLabel}</label>`;
            }
            return undefined;
        }
    };
    __decorate([
        e$3({
            attribute: 'maxlength',
            type: Number
        }),
        __metadata("design:type", Number)
    ], Textarea.prototype, "maxLength", void 0);
    __decorate([
        e$3({ type: Number }),
        __metadata("design:type", Object)
    ], Textarea.prototype, "rows", void 0);
    __decorate([
        e$3({
            attribute: 'showlength',
            type: Boolean
        }),
        __metadata("design:type", Object)
    ], Textarea.prototype, "showLength", void 0);
    Textarea = __decorate([
        n$4('sdpi-textarea')
    ], Textarea);

    let Textfield = class Textfield extends Persisted(Focusable(Input(s$2))) {
        constructor() {
            super(...arguments);
            this.pattern = '';
            this.placeholder = '';
            this.required = false;
        }
        static get styles() {
            return [
                ...super.styles,
                hostStyle,
                r$4 `
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
            `
            ];
        }
        render() {
            return $ `
            <input
                ${n$1(this.focusElement)}
                type="text"
                maxlength=${l(this.maxLength)}
                .disabled=${this.disabled}
                .pattern=${this.pattern}
                .placeholder=${this.placeholder}
                .required=${this.required}
                .value=${this.value || ''}
                @input=${(ev) => (this.value = ev.target.value)}
            />
        `;
        }
    };
    __decorate([
        e$3({
            attribute: 'maxlength',
            type: Number
        }),
        __metadata("design:type", Number)
    ], Textfield.prototype, "maxLength", void 0);
    __decorate([
        e$3(),
        __metadata("design:type", Object)
    ], Textfield.prototype, "pattern", void 0);
    __decorate([
        e$3(),
        __metadata("design:type", Object)
    ], Textfield.prototype, "placeholder", void 0);
    __decorate([
        e$3({ type: Boolean }),
        __metadata("design:type", Object)
    ], Textfield.prototype, "required", void 0);
    Textfield = __decorate([
        n$4('sdpi-textfield')
    ], Textfield);

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
    })(SDPIComponents || (SDPIComponents = {}));
    window.SDPIComponents = SDPIComponents;

    const style = document.createElement('style');
    style.innerHTML = r$4 `
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
