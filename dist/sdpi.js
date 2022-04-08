/*! For license information please see sdpi.js.LICENSE.txt */
(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new Map;class i{constructor(t,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=s.get(this.cssText);return t&&void 0===e&&(s.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=(t,...s)=>{const o=1===t.length?t[0]:s.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new i(o,e)},n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const e of t.cssRules)s+=e.cssText;return(t=>new i("string"==typeof t?t:t+"",e))(s)})(t):t;var r;const l=window.trustedTypes,a=l?l.emptyScript:"",c=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},h=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Eh(s,e);void 0!==i&&(this._$Eu.set(i,s),t.push(i))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{t?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),i=window.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=t.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=p){var i,o;const n=this.constructor._$Eh(t,s);if(void 0!==n&&!0===s.reflect){const r=(null!==(o=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==o?o:d.toAttribute)(e,s.type);this._$Ei=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(t,e){var s,i,o;const n=this.constructor,r=n._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=n.getPropertyOptions(r),l=t.converter,a=null!==(o=null!==(i=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==o?o:d.fromAttribute;this._$Ei=r,this[r]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var g;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:u}),(null!==(r=globalThis.reactiveElementVersions)&&void 0!==r?r:globalThis.reactiveElementVersions=[]).push("1.3.1");const v=globalThis.trustedTypes,f=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,y="?"+b,$=`<${y}>`,m=document,_=(t="")=>m.createComment(t),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,E=/>/g,N=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,R=/'/g,I=/"/g,k=/^(?:script|style|textarea|title)$/i,C=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),M=C(1),O=(C(2),Symbol.for("lit-noChange")),j=Symbol.for("lit-nothing"),D=new WeakMap,P=m.createTreeWalker(m,129,null,!1),T=(t,e)=>{const s=t.length-1,i=[];let o,n=2===e?"<svg>":"",r=S;for(let e=0;e<s;e++){const s=t[e];let l,a,c=-1,d=0;for(;d<s.length&&(r.lastIndex=d,a=r.exec(s),null!==a);)d=r.lastIndex,r===S?"!--"===a[1]?r=x:void 0!==a[1]?r=E:void 0!==a[2]?(k.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=N):void 0!==a[3]&&(r=N):r===N?">"===a[0]?(r=null!=o?o:S,c=-1):void 0===a[1]?c=-2:(c=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?N:'"'===a[3]?I:R):r===I||r===R?r=N:r===x||r===E?r=S:(r=N,o=void 0);const h=r===N&&t[e+1].startsWith("/>")?" ":"";n+=r===S?s+$:c>=0?(i.push(l),s.slice(0,c)+"$lit$"+s.slice(c)+b+h):s+b+(-2===c?(i.push(void 0),e):h)}const l=n+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(l):l,i]};class U{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[a,c]=T(t,e);if(this.el=U.createElement(a,s),P.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=P.nextNode())&&l.length<r;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(b)){const s=c[n++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(b),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?Q:"@"===e[1]?q:B})}else l.push({type:6,index:o})}for(const e of t)i.removeAttribute(e)}if(k.test(i.tagName)){const t=i.textContent.split(b),e=t.length-1;if(e>0){i.textContent=v?v.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],_()),P.nextNode(),l.push({type:2,index:++o});i.append(t[e],_())}}}else if(8===i.nodeType)if(i.data===y)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(b,t+1));)l.push({type:7,index:o}),t+=b.length-1}o++}}static createElement(t,e){const s=m.createElement("template");return s.innerHTML=t,s}}function z(t,e,s=t,i){var o,n,r,l;if(e===O)return e;let a=void 0!==i?null===(o=s._$Cl)||void 0===o?void 0:o[i]:s._$Cu;const c=w(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,s,i)),void 0!==i?(null!==(r=(l=s)._$Cl)&&void 0!==r?r:l._$Cl=[])[i]=a:s._$Cu=a),void 0!==a&&(e=z(t,a._$AS(t,e.values),a,i)),e}class L{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:m).importNode(s,!0);P.currentNode=o;let n=P.nextNode(),r=0,l=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new H(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new W(n,this,t)),this.v.push(e),a=i[++l]}r!==(null==a?void 0:a.index)&&(n=P.nextNode(),r++)}return o}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class H{constructor(t,e,s,i){var o;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=null===(o=null==i?void 0:i.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),w(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==O&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==j&&w(this._$AH)?this._$AA.nextSibling.data=t:this.k(m.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=U.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(s);else{const t=new L(o,this),e=t.p(this.options);t.m(s),this.k(e),this._$AH=t}}_$AC(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new U(t)),e}S(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new H(this.A(_()),this.A(_()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class B{constructor(t,e,s,i,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(void 0===o)t=z(this,t,e,0),n=!w(t)||t!==this._$AH&&t!==O,n&&(this._$AH=t);else{const i=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=z(this,i[s+r],e,r),l===O&&(l=this._$AH[r]),n||(n=!w(l)||l!==this._$AH[r]),l===j?t=j:t!==j&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!i&&this.C(t)}C(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends B{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===j?void 0:t}}const Z=v?v.emptyScript:"";class Q extends B{constructor(){super(...arguments),this.type=4}C(t){t&&t!==j?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class q extends B{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=z(this,t,e,0))&&void 0!==s?s:j)===O)return;const i=this._$AH,o=t===j&&i!==j||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==j&&(i===j||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const Y=window.litHtmlPolyfillSupport;var J,V;null==Y||Y(U,H),(null!==(g=globalThis.litHtmlVersions)&&void 0!==g?g:globalThis.litHtmlVersions=[]).push("2.2.1");class F extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,s)=>{var i,o;const n=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new H(e.insertBefore(_(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return O}}F.finalized=!0,F._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:F});const K=globalThis.litElementPolyfillSupport;null==K||K({LitElement:F}),(null!==(V=globalThis.litElementVersions)&&void 0!==V?V:globalThis.litElementVersions=[]).push("3.2.0");const X=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),tt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function et(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):tt(t,e)}var st;function it(t,e,s){const i=t.split(".");i.reduce(((t,e,o)=>o===i.length-1?t[e]=s:t[e]||(t[e]={})),e)}null===(st=window.HTMLSlotElement)||void 0===st||st.prototype.assignedElements;const ot=o`
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
`;var nt=function(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r},rt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const lt=t=>{class e extends t{constructor(){super(...arguments),this.disabled=!1,this.inputId=function(){const t=()=>Math.random().toString(16).slice(-4);return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}()}static get styles(){return[(t=super.styles,void 0===t?[]:Array.isArray(t)?[...t]:[t]),ot,o`
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
                `];var t}renderInput(t){return M`<sdpi-item .label=${this.label}>${t}</sdpi-item>`}}return nt([et({type:Boolean}),rt("design:type",Object)],e.prototype,"disabled",void 0),nt([et(),rt("design:type",String)],e.prototype,"label",void 0),nt([et({attribute:!1}),rt("design:type",Object)],e.prototype,"value",void 0),e};var at=function(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r},ct=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const dt=t=>{class e extends t{constructor(){super(...arguments),this.isGlobal=!1}}return at([et({attribute:"global",type:Boolean}),ct("design:type",Object)],e.prototype,"isGlobal",void 0),at([et(),ct("design:type",String)],e.prototype,"path",void 0),e};let ht=class extends(lt(F)){static get styles(){return[...super.styles,ot,o`
                button {
                    background-color: var(--window-bg-color);
                    border: 1px solid #969696;
                    border-radius: 3px;
                    padding: calc(var(--spacer) * 2) var(--spacer);
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
            `]}render(){return this.renderInput(M`
                <button .disabled=${this.disabled} .value=${this.value||""}>
                    <slot></slot>
                </button>
            `)}};ht=function(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r}([X("sdpi-button")],ht);class pt{constructor(){this.handlers=[]}dispatch(t){for(const e of this.handlers)e(t)}subscribe(t){this.handlers.push(t)}unsubscribe(t){this.handlers=this.handlers.filter((e=>e!==t))}}class ut{constructor(){this._promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}get promise(){return this._promise}setResult(t){this.resolve&&this.resolve(t)}setException(t){this.reject&&this.reject(t)}}const gt=new class{constructor(){this._connection=new ut,this._connectionInfo=new ut,this.didReceiveGlobalSettings=new pt,this.didReceiveSettings=new pt,this.message=new pt}async connect(t,e,s,i,o){if(!this._webSocket){const n={actionInfo:o?JSON.parse(o):null,info:JSON.parse(i),propertyInspectorUUID:e,registerEvent:s};n.actionInfo&&this.didReceiveSettings.dispatch(n.actionInfo),this._connectionInfo.setResult(n),this._webSocket=new WebSocket(`ws://localhost:${t}`),this._webSocket.onopen=this.handleOpen.bind(this),this._webSocket.onmessage=this.handleMessage.bind(this)}}getGlobalSettings(){return this.get("getGlobalSettings",(t=>"didReceiveGlobalSettings"===t.event))}setGlobalSettings(t){this.send("setGlobalSettings",t)}getSettings(){return this.get("getSettings",(t=>"didReceiveSettings"===t.event))}setSettings(t){this.send("setSettings",t)}async getConnectionInfo(){return this._connectionInfo.promise}async get(t,e,s){const i=new ut,o=t=>{e(t)&&(this.message.unsubscribe(o),i.setResult(t))};return this.message.subscribe(o),await this.send(t,s),i.promise}async send(t,e){try{const s=await this._connectionInfo.promise;(await this._connection.promise).send(JSON.stringify({event:t,context:s.propertyInspectorUUID,payload:e,action:s.actionInfo.action}))}catch(e){console.error(`Unable to send request '${t}' as there is no connection.`)}}async handleOpen(){try{const t=await this._connectionInfo.promise;this._webSocket&&(this._webSocket.send(JSON.stringify({event:t.registerEvent,uuid:t.propertyInspectorUUID})),this._connection.setResult(this._webSocket))}catch(t){this._connection.setException(t)}}handleMessage(t){const e=JSON.parse(t.data);switch(e.event){case"didReceiveGlobalSettings":this.didReceiveGlobalSettings.dispatch(e);break;case"didReceiveSettings":this.didReceiveSettings.dispatch(e)}}},vt=new class{constructor(){gt.didReceiveGlobalSettings.subscribe((t=>this._globalSettings=t.payload.settings)),gt.didReceiveSettings.subscribe((t=>this._settings=t.payload.settings)),gt.getGlobalSettings()}register(t,e,s,i=250){const o=e=>{var i,o;e&&e.payload&&e.payload.settings&&s((i=t,o=e.payload.settings,(Array.isArray(i)?i:i.split(".")).reduce(((t,e)=>t&&t[e]),o)||""))};return e?gt.didReceiveGlobalSettings.subscribe(o):gt.didReceiveSettings.subscribe(o),i?function(s,i){let o;return(s,...n)=>{clearTimeout(o),o=setTimeout((()=>{return i=s,vt.set(t,e,i);var i}),i,n)}}(0,i):s=>vt.set(t,e,s)}set(t,e,s){e?(this._globalSettings&&it(t,this._globalSettings,s),gt.setGlobalSettings(this._globalSettings)):(this._settings&&it(t,this._settings,s),gt.setSettings(this._settings))}},ft=vt.register;class bt{constructor(t){(this._host=t).addController(this)}hostConnected(){this._host.path&&(this._save=ft(this._host.path,this._host.isGlobal,(t=>this._host.value=t)))}save(t){this._host.value=t,this._save&&this._save(t)}}var yt=function(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r};let $t=class extends(dt(lt(F))){constructor(){super(...arguments),this._store=new bt(this)}static get styles(){return[...super.styles,ot,o`
                :host {
                    --checkbox-size: 16px;
                }

                .container {
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
                    background: var(--input-bg-color);
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
            `]}render(){const t=this.text?M`<span class="text">${this.text}</span>`:void 0;return this.renderInput(M`
                <label class="container">
                    <input type="checkbox" .checked=${this.value||!1} .disabled=${this.disabled} @change=${t=>this._store.save(t.target.checked)} />
                    <span class="checkmark" role="checkbox" aria-checked=${this.value||!1}></span>
                    ${t}
                </label>
            `)}};yt([et(),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],$t.prototype,"text",void 0),$t=yt([X("sdpi-checkbox")],$t);var mt=function(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r};let _t=class extends F{render(){const t=this.label?M`<label>${this.label}:</label>`:void 0;return M`
            <div class="container grid">
                <div class="label">${t}</div>
                <div class="content"><slot></slot></div>
            </div>
        `}};_t.styles=[ot,o`
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
        `],mt([et(),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],_t.prototype,"label",void 0),_t=mt([X("sdpi-item")],_t);class wt{constructor(t){this.childNodes=[],(this._host=t).addController(this),this._observer=new MutationObserver(this.handleMutation.bind(this))}hostConnected(){this._observer.observe(this._host,{childList:!0})}hostDisconnected(){this._observer.disconnect()}handleMutation(t){t.forEach((t=>{for(const e of t.addedNodes)this.childNodes.push(e);t.removedNodes.forEach((t=>{const e=this.childNodes.indexOf(t);-1!==e&&this.childNodes.splice(e,1)}))})),this._host.requestUpdate()}}var At=function(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r};let St=class extends(dt(lt(F))){constructor(){super(...arguments),this._childNodes=new wt(this),this._store=new bt(this)}static get styles(){return[...super.styles,ot,o`
                select {
                    background-color: var(--input-bg-color);
                    padding: calc(var(--spacer) + 1px) 0;
                    text-overflow: ellipsis;
                }

                select:disabled {
                    opacity: 0.5;
                }
            `]}render(){return this.renderInput(M`
                <select .disabled=${this.disabled} .value=${this.value||""} @change=${t=>this._store.save(t.target.value)}>
                    <option value="" disabled .hidden=${!this.placeholder||void 0!==this.value}>${this.placeholder}</option>
                    ${this.renderChildNodes()}
                </select>
            `)}renderChildNodes(){if(0===this.childNodes.length)return;const t=e=>{switch(e.nodeName){case"OPTGROUP":return M`<optgroup .label=${e.label}>${Array.from(e.childNodes).map(t)}</optgroup>`;case"OPTION":return M`<option .disabled=${e.disabled} .value=${e.text}>${e.label}</option>`;default:return}};return M`${this._childNodes.childNodes.map(t)}`}};At([et(),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],St.prototype,"placeholder",void 0),St=At([X("sdpi-select")],St);var xt=function(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r},Et=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Nt=class extends(dt(lt(F))){constructor(){super(...arguments),this._store=new bt(this),this.rows=3,this.showLength=!1}static get styles(){return[...super.styles,ot,o`
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
            `]}render(){return this.renderInput(M`
            <textarea
                type="textarea"
                maxlength=${(t=>null!=t?t:j)(this.maxLength)}
                .disabled=${this.disabled}
                .id=${this.inputId}
                .rows=${this.rows}
                .value=${this.value||""}
                @input=${t=>this._store.save(t.target.value)}
            ></textarea>
            ${this.getLengthLabel()}
        `)}getLengthLabel(){var t;if(this.showLength||this.maxLength){const e=this.maxLength?M`/${this.maxLength}`:void 0;return M`<label class="length" for=${this.inputId}>${null===(t=this.value)||void 0===t?void 0:t.length}${e}</label>`}}};xt([et({attribute:"maxlength",type:Number}),Et("design:type",Number)],Nt.prototype,"maxLength",void 0),xt([et({type:Number}),Et("design:type",Object)],Nt.prototype,"rows",void 0),xt([et({attribute:"showlength",type:Boolean}),Et("design:type",Object)],Nt.prototype,"showLength",void 0),Nt=xt([X("sdpi-textarea")],Nt);var Rt=function(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r},It=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let kt=class extends(dt(lt(F))){constructor(){super(...arguments),this._store=new bt(this),this.pattern="",this.placeholder="",this.required=!1}static get styles(){return[...super.styles,ot,o`
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
            `]}render(){return this.renderInput(M`
            <input
                type="text"
                .disabled=${this.disabled}
                .pattern=${this.pattern}
                .placeholder=${this.placeholder}
                .required=${this.required}
                .value=${this.value||""}
                @input=${t=>this._store.save(t.target.value)}
            />
        `)}};Rt([et(),It("design:type",Object)],kt.prototype,"pattern",void 0),Rt([et(),It("design:type",Object)],kt.prototype,"placeholder",void 0),Rt([et({type:Boolean}),It("design:type",Object)],kt.prototype,"required",void 0),kt=Rt([X("sdpi-textfield")],kt),window.streamDeckClient=gt;const Ct=window.connectElgatoStreamDeckSocket;window.connectElgatoStreamDeckSocket=function(t,e,s,i,o){Ct&&Ct(t,e,s,i,o),gt.connect(t,e,s,i,o)};const Mt=document.createElement("style");Mt.innerHTML=o`
    /* Styles added by sdpi library. */
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
`.cssText,document.head.appendChild(Mt)})();