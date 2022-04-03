/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/button.ts":
/*!**********************************!*\
  !*** ./src/components/button.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins */ "./src/mixins/index.ts");
/* harmony import */ var _styles_host__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/host */ "./src/styles/host.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let Button = class Button extends (0,_mixins__WEBPACK_IMPORTED_MODULE_2__.Input)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement) {
    static get styles() {
        return [
            ...super.styles,
            _styles_host__WEBPACK_IMPORTED_MODULE_3__.hostStyle,
            lit__WEBPACK_IMPORTED_MODULE_0__.css `
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
            `
        ];
    }
    render() {
        return this.renderInput(lit__WEBPACK_IMPORTED_MODULE_0__.html `
                <button .disabled=${this.disabled} .value=${this.value || ''}>
                    <slot></slot>
                </button>
            `);
    }
};
Button = __decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('sdpi-button')
], Button);



/***/ }),

/***/ "./src/components/checkbox.ts":
/*!************************************!*\
  !*** ./src/components/checkbox.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkbox": () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _controllers_store_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/store-controller */ "./src/controllers/store-controller.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins */ "./src/mixins/index.ts");
/* harmony import */ var _styles_host__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/host */ "./src/styles/host.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let Checkbox = class Checkbox extends (0,_mixins__WEBPACK_IMPORTED_MODULE_3__.Persisted)((0,_mixins__WEBPACK_IMPORTED_MODULE_3__.Input)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement)) {
    constructor() {
        super(...arguments);
        this._store = new _controllers_store_controller__WEBPACK_IMPORTED_MODULE_2__.StoreController(this);
    }
    static get styles() {
        return [
            ...super.styles,
            _styles_host__WEBPACK_IMPORTED_MODULE_4__.hostStyle,
            lit__WEBPACK_IMPORTED_MODULE_0__.css `
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
            `
        ];
    }
    render() {
        const text = this.text ? lit__WEBPACK_IMPORTED_MODULE_0__.html `<span class="text">${this.text}</span>` : undefined;
        return this.renderInput(lit__WEBPACK_IMPORTED_MODULE_0__.html `
                <label class="container">
                    <input type="checkbox" .checked=${this.value || false} .disabled=${this.disabled} @change=${(ev) => this._store.save(ev.target.checked)} />
                    <span class="checkmark" role="checkbox" aria-checked=${this.value || false}></span>
                    ${text}
                </label>
            `);
    }
};
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)(),
    __metadata("design:type", String)
], Checkbox.prototype, "text", void 0);
Checkbox = __decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('sdpi-checkbox')
], Checkbox);



/***/ }),

/***/ "./src/components/sdpi-item.ts":
/*!*************************************!*\
  !*** ./src/components/sdpi-item.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SdpiItem": () => (/* binding */ SdpiItem)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _styles_host__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/host */ "./src/styles/host.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SdpiItem = class SdpiItem extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    render() {
        const label = this.label ? lit__WEBPACK_IMPORTED_MODULE_0__.html `<label>${this.label}:</label>` : undefined;
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div class="container grid">
                <div class="label">${label}</div>
                <div class="content"><slot></slot></div>
            </div>
        `;
    }
};
SdpiItem.styles = [
    _styles_host__WEBPACK_IMPORTED_MODULE_2__.hostStyle,
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
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
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)(),
    __metadata("design:type", String)
], SdpiItem.prototype, "label", void 0);
SdpiItem = __decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('sdpi-item')
], SdpiItem);



/***/ }),

/***/ "./src/components/select.ts":
/*!**********************************!*\
  !*** ./src/components/select.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _controllers_child_nodes_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/child-nodes-controller */ "./src/controllers/child-nodes-controller.ts");
/* harmony import */ var _controllers_store_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/store-controller */ "./src/controllers/store-controller.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins */ "./src/mixins/index.ts");
/* harmony import */ var _styles_host__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/host */ "./src/styles/host.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let Select = class Select extends (0,_mixins__WEBPACK_IMPORTED_MODULE_4__.Persisted)((0,_mixins__WEBPACK_IMPORTED_MODULE_4__.Input)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement)) {
    constructor() {
        super(...arguments);
        this._childNodes = new _controllers_child_nodes_controller__WEBPACK_IMPORTED_MODULE_2__.ChildNodesController(this);
        this._store = new _controllers_store_controller__WEBPACK_IMPORTED_MODULE_3__.StoreController(this);
    }
    static get styles() {
        return [
            ...super.styles,
            _styles_host__WEBPACK_IMPORTED_MODULE_5__.hostStyle,
            lit__WEBPACK_IMPORTED_MODULE_0__.css `
                select {
                    background-color: var(--input-bg-color);
                    padding: calc(var(--spacer) + 1px) 0;
                    text-overflow: ellipsis;
                }

                select:disabled {
                    opacity: 0.5;
                }
            `
        ];
    }
    render() {
        return this.renderInput(lit__WEBPACK_IMPORTED_MODULE_0__.html `
                <select .disabled=${this.disabled} .value=${this.value || ''} @change=${(ev) => this._store.save(ev.target.value)}>
                    <option value="" disabled .hidden=${!this.placeholder || this.value !== undefined}>${this.placeholder}</option>
                    ${this.renderChildNodes()}
                </select>
            `);
    }
    renderChildNodes() {
        if (this.childNodes.length === 0) {
            return undefined;
        }
        const mapOptions = (item) => {
            switch (item.nodeName) {
                case 'OPTGROUP':
                    return lit__WEBPACK_IMPORTED_MODULE_0__.html `<optgroup .label=${item.label}>${Array.from(item.childNodes).map(mapOptions)}</optgroup>`;
                case 'OPTION':
                    return lit__WEBPACK_IMPORTED_MODULE_0__.html `<option .disabled=${item.disabled} .value=${item.text}>${item.label}</option>`;
                default:
                    return undefined;
            }
        };
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `${this._childNodes.childNodes.map(mapOptions)}`;
    }
};
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)(),
    __metadata("design:type", String)
], Select.prototype, "placeholder", void 0);
Select = __decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('sdpi-select')
], Select);



/***/ }),

/***/ "./src/components/textarea.ts":
/*!************************************!*\
  !*** ./src/components/textarea.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Textarea": () => (/* binding */ Textarea)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/if-defined.js */ "./node_modules/lit/directives/if-defined.js");
/* harmony import */ var _controllers_store_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/store-controller */ "./src/controllers/store-controller.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins */ "./src/mixins/index.ts");
/* harmony import */ var _styles_host__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/host */ "./src/styles/host.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let Textarea = class Textarea extends (0,_mixins__WEBPACK_IMPORTED_MODULE_4__.Persisted)((0,_mixins__WEBPACK_IMPORTED_MODULE_4__.Input)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement)) {
    constructor() {
        super(...arguments);
        this._store = new _controllers_store_controller__WEBPACK_IMPORTED_MODULE_3__.StoreController(this);
        this.rows = 3;
        this.showLength = false;
    }
    static get styles() {
        return [
            ...super.styles,
            _styles_host__WEBPACK_IMPORTED_MODULE_5__.hostStyle,
            lit__WEBPACK_IMPORTED_MODULE_0__.css `
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
        return this.renderInput(lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <textarea
                type="textarea"
                maxlength=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.maxLength)}
                .disabled=${this.disabled}
                .id=${this.inputId}
                .rows=${this.rows}
                .value=${this.value || ''}
                @input=${(ev) => this._store.save(ev.target.value)}
            ></textarea>
            ${this.getLengthLabel()}
        `);
    }
    getLengthLabel() {
        var _a;
        if (this.showLength || this.maxLength) {
            const maxLengthLabel = this.maxLength ? lit__WEBPACK_IMPORTED_MODULE_0__.html `/${this.maxLength}` : undefined;
            return lit__WEBPACK_IMPORTED_MODULE_0__.html `<label class="length" for=${this.inputId}>${(_a = this.value) === null || _a === void 0 ? void 0 : _a.length}${maxLengthLabel}</label>`;
        }
        return undefined;
    }
};
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({
        attribute: 'maxlength',
        type: Number
    }),
    __metadata("design:type", Number)
], Textarea.prototype, "maxLength", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Number }),
    __metadata("design:type", Object)
], Textarea.prototype, "rows", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({
        attribute: 'showlength',
        type: Boolean
    }),
    __metadata("design:type", Object)
], Textarea.prototype, "showLength", void 0);
Textarea = __decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('sdpi-textarea')
], Textarea);



/***/ }),

/***/ "./src/components/textfield.ts":
/*!*************************************!*\
  !*** ./src/components/textfield.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Textfield": () => (/* binding */ Textfield)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _controllers_store_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/store-controller */ "./src/controllers/store-controller.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins */ "./src/mixins/index.ts");
/* harmony import */ var _styles_host__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/host */ "./src/styles/host.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let Textfield = class Textfield extends (0,_mixins__WEBPACK_IMPORTED_MODULE_3__.Persisted)((0,_mixins__WEBPACK_IMPORTED_MODULE_3__.Input)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement)) {
    constructor() {
        super(...arguments);
        this._store = new _controllers_store_controller__WEBPACK_IMPORTED_MODULE_2__.StoreController(this);
        this.pattern = '';
        this.placeholder = '';
        this.required = false;
    }
    static get styles() {
        return [
            ...super.styles,
            _styles_host__WEBPACK_IMPORTED_MODULE_4__.hostStyle,
            lit__WEBPACK_IMPORTED_MODULE_0__.css `
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
        return this.renderInput(lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <input
                type="text"
                .disabled=${this.disabled}
                .pattern=${this.pattern}
                .placeholder=${this.placeholder}
                .required=${this.required}
                .value=${this.value || ''}
                @input=${(ev) => this._store.save(ev.target.value)}
            />
        `);
    }
};
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)(),
    __metadata("design:type", Object)
], Textfield.prototype, "pattern", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)(),
    __metadata("design:type", Object)
], Textfield.prototype, "placeholder", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean }),
    __metadata("design:type", Object)
], Textfield.prototype, "required", void 0);
Textfield = __decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('sdpi-textfield')
], Textfield);



/***/ }),

/***/ "./src/controllers/child-nodes-controller.ts":
/*!***************************************************!*\
  !*** ./src/controllers/child-nodes-controller.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildNodesController": () => (/* binding */ ChildNodesController)
/* harmony export */ });
class ChildNodesController {
    constructor(host) {
        this.childNodes = [];
        (this._host = host).addController(this);
        this._observer = new MutationObserver(this.handleMutation.bind(this));
    }
    hostConnected() {
        this._observer.observe(this._host, { childList: true });
    }
    hostDisconnected() {
        this._observer.disconnect();
    }
    handleMutation(mutations) {
        mutations.forEach((mutation) => {
            for (const added of mutation.addedNodes) {
                this.childNodes.push(added);
            }
            mutation.removedNodes.forEach((node) => {
                const index = this.childNodes.indexOf(node);
                if (index !== -1) {
                    this.childNodes.splice(index, 1);
                }
            });
        });
        this._host.requestUpdate();
    }
}


/***/ }),

/***/ "./src/controllers/store-controller.ts":
/*!*********************************************!*\
  !*** ./src/controllers/store-controller.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreController": () => (/* binding */ StoreController)
/* harmony export */ });
/* harmony import */ var _stream_deck_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stream-deck/settings */ "./src/stream-deck/settings.ts");

class StoreController {
    constructor(host) {
        (this._host = host).addController(this);
    }
    hostConnected() {
        if (this._host.path) {
            this._save = (0,_stream_deck_settings__WEBPACK_IMPORTED_MODULE_0__.useSettings)(this._host.path, this._host.isGlobal, (value) => (this._host.value = value));
        }
    }
    save(value) {
        this._host.value = value;
        if (this._save) {
            this._save(value);
        }
    }
}


/***/ }),

/***/ "./src/core/events.ts":
/*!****************************!*\
  !*** ./src/core/events.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventManager": () => (/* binding */ EventManager)
/* harmony export */ });
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


/***/ }),

/***/ "./src/core/promises.ts":
/*!******************************!*\
  !*** ./src/core/promises.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromiseCompletionSource": () => (/* binding */ PromiseCompletionSource)
/* harmony export */ });
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


/***/ }),

/***/ "./src/core/timeout.ts":
/*!*****************************!*\
  !*** ./src/core/timeout.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delay": () => (/* binding */ delay)
/* harmony export */ });
function delay(callback, timeout) {
    let handle;
    return (data, ...args) => {
        clearTimeout(handle);
        handle = setTimeout(() => callback(data), timeout, args);
    };
}


/***/ }),

/***/ "./src/core/utils.ts":
/*!***************************!*\
  !*** ./src/core/utils.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asArray": () => (/* binding */ asArray),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getUUID": () => (/* binding */ getUUID),
/* harmony export */   "set": () => (/* binding */ set)
/* harmony export */ });
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
    const props = Array.isArray(path) ? path : path.split('.');
    return props.reduce((obj, prop) => obj && obj[prop], source);
}
function set(path, target, value) {
    const parts = path.split('.');
    parts.reduce((obj, prop, i) => {
        return i === parts.length - 1 ? (obj[prop] = value) : obj[prop] || (obj[prop] = {});
    }, target);
}


/***/ }),

/***/ "./src/mixins/index.ts":
/*!*****************************!*\
  !*** ./src/mixins/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_0__.Input),
/* harmony export */   "Persisted": () => (/* reexport safe */ _persisted__WEBPACK_IMPORTED_MODULE_1__.Persisted)
/* harmony export */ });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./src/mixins/input.ts");
/* harmony import */ var _persisted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./persisted */ "./src/mixins/persisted.ts");




/***/ }),

/***/ "./src/mixins/input.ts":
/*!*****************************!*\
  !*** ./src/mixins/input.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils */ "./src/core/utils.ts");
/* harmony import */ var _styles_host__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/host */ "./src/styles/host.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const Input = (superClass) => {
    class Input extends superClass {
        constructor() {
            super(...arguments);
            this.disabled = false;
            this.inputId = (0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.getUUID)();
        }
        static get styles() {
            return [
                (0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.asArray)(super.styles),
                _styles_host__WEBPACK_IMPORTED_MODULE_3__.hostStyle,
                lit__WEBPACK_IMPORTED_MODULE_0__.css `
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
        renderInput(input) {
            return lit__WEBPACK_IMPORTED_MODULE_0__.html `<sdpi-item .label=${this.label}>${input}</sdpi-item>`;
        }
    }
    __decorate([
        (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean }),
        __metadata("design:type", Object)
    ], Input.prototype, "disabled", void 0);
    __decorate([
        (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)(),
        __metadata("design:type", String)
    ], Input.prototype, "label", void 0);
    __decorate([
        (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ attribute: false }),
        __metadata("design:type", Object)
    ], Input.prototype, "value", void 0);
    return Input;
};


/***/ }),

/***/ "./src/mixins/persisted.ts":
/*!*********************************!*\
  !*** ./src/mixins/persisted.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Persisted": () => (/* binding */ Persisted)
/* harmony export */ });
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

const Persisted = (superClass) => {
    class Persisted extends superClass {
        constructor() {
            super(...arguments);
            this.isGlobal = false;
        }
    }
    __decorate([
        (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_0__.property)({
            attribute: 'global',
            type: Boolean
        }),
        __metadata("design:type", Object)
    ], Persisted.prototype, "isGlobal", void 0);
    __decorate([
        (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_0__.property)(),
        __metadata("design:type", String)
    ], Persisted.prototype, "path", void 0);
    return Persisted;
};


/***/ }),

/***/ "./src/stream-deck/connect.ts":
/*!************************************!*\
  !*** ./src/stream-deck/connect.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stream_deck_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stream-deck-client */ "./src/stream-deck/stream-deck-client.ts");

window.streamDeckClient = _stream_deck_client__WEBPACK_IMPORTED_MODULE_0__["default"];
const existing = window.connectElgatoStreamDeckSocket;
window.connectElgatoStreamDeckSocket = function (inPort, inPropertyInspectorUUID, inRegisterEvent, inInfo, inActionInfo) {
    if (existing) {
        existing(inPort, inPropertyInspectorUUID, inRegisterEvent, inInfo, inActionInfo);
    }
    _stream_deck_client__WEBPACK_IMPORTED_MODULE_0__["default"].connect(inPort, inPropertyInspectorUUID, inRegisterEvent, inInfo, inActionInfo);
};


/***/ }),

/***/ "./src/stream-deck/settings.ts":
/*!*************************************!*\
  !*** ./src/stream-deck/settings.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSettings": () => (/* binding */ useSettings)
/* harmony export */ });
/* harmony import */ var _core_timeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/timeout */ "./src/core/timeout.ts");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils */ "./src/core/utils.ts");
/* harmony import */ var _stream_deck_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stream-deck-client */ "./src/stream-deck/stream-deck-client.ts");



class Settings {
    constructor() {
        _stream_deck_client__WEBPACK_IMPORTED_MODULE_2__["default"].didReceiveGlobalSettings.subscribe((data) => (this._globalSettings = data.payload.settings));
        _stream_deck_client__WEBPACK_IMPORTED_MODULE_2__["default"].didReceiveSettings.subscribe((data) => (this._settings = data.payload.settings));
        _stream_deck_client__WEBPACK_IMPORTED_MODULE_2__["default"].getGlobalSettings();
    }
    register(key, isGlobal, onChange, timeout = 250) {
        const settingChangeHandler = (data) => {
            if (data && data.payload && data.payload.settings) {
                onChange((0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.get)(key, data.payload.settings) || '');
            }
        };
        if (isGlobal) {
            _stream_deck_client__WEBPACK_IMPORTED_MODULE_2__["default"].didReceiveGlobalSettings.subscribe(settingChangeHandler);
        }
        else {
            _stream_deck_client__WEBPACK_IMPORTED_MODULE_2__["default"].didReceiveSettings.subscribe(settingChangeHandler);
        }
        if (timeout) {
            return (0,_core_timeout__WEBPACK_IMPORTED_MODULE_0__.delay)((value) => settings.set(key, isGlobal, value), timeout);
        }
        else {
            return (value) => settings.set(key, isGlobal, value);
        }
    }
    set(key, isGlobal, value) {
        if (isGlobal) {
            if (this._globalSettings) {
                (0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.set)(key, this._globalSettings, value);
            }
            _stream_deck_client__WEBPACK_IMPORTED_MODULE_2__["default"].setGlobalSettings(this._globalSettings);
        }
        else {
            if (this._settings) {
                (0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.set)(key, this._settings, value);
            }
            _stream_deck_client__WEBPACK_IMPORTED_MODULE_2__["default"].setSettings(this._settings);
        }
    }
}
const settings = new Settings();
const useSettings = settings.register;


/***/ }),

/***/ "./src/stream-deck/stream-deck-client.ts":
/*!***********************************************!*\
  !*** ./src/stream-deck/stream-deck-client.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StreamDeckClient": () => (/* binding */ StreamDeckClient),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/events */ "./src/core/events.ts");
/* harmony import */ var _core_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/promises */ "./src/core/promises.ts");


class StreamDeckClient {
    constructor() {
        this._connection = new _core_promises__WEBPACK_IMPORTED_MODULE_1__.PromiseCompletionSource();
        this._connectionInfo = new _core_promises__WEBPACK_IMPORTED_MODULE_1__.PromiseCompletionSource();
        this.didReceiveGlobalSettings = new _core_events__WEBPACK_IMPORTED_MODULE_0__.EventManager();
        this.didReceiveSettings = new _core_events__WEBPACK_IMPORTED_MODULE_0__.EventManager();
        this.message = new _core_events__WEBPACK_IMPORTED_MODULE_0__.EventManager();
    }
    async connect(port, propertyInspectorUUID, registerEvent, info, actionInfo) {
        if (!this._webSocket) {
            const connectionInfo = {
                actionInfo: actionInfo ? JSON.parse(actionInfo) : null,
                info: JSON.parse(info),
                propertyInspectorUUID: propertyInspectorUUID,
                registerEvent: registerEvent
            };
            if (connectionInfo.actionInfo) {
                this.didReceiveSettings.dispatch(connectionInfo.actionInfo);
            }
            this._connectionInfo.setResult(connectionInfo);
            this._webSocket = new WebSocket(`ws://localhost:${port}`);
            this._webSocket.onopen = this.handleOpen.bind(this);
            this._webSocket.onmessage = this.handleMessage.bind(this);
        }
    }
    getGlobalSettings() {
        return this.get('getGlobalSettings', 'didReceiveGlobalSettings');
    }
    setGlobalSettings(value) {
        this.send('setGlobalSettings', value);
    }
    getSettings() {
        return this.get('getSettings', 'didReceiveSettings');
    }
    setSettings(value) {
        this.send('setSettings', value);
    }
    async getConnectionInfo() {
        return this._connectionInfo.promise;
    }
    async get(send, receive, payload) {
        const resolver = new _core_promises__WEBPACK_IMPORTED_MODULE_1__.PromiseCompletionSource();
        const listener = (args) => {
            if (args.event == receive) {
                this.message.unsubscribe(listener);
                resolver.setResult(args);
            }
        };
        this.message.subscribe(listener);
        await this.send(send, payload);
        return resolver.promise;
    }
    async send(event, payload) {
        try {
            const connectionInfo = await this._connectionInfo.promise;
            const connection = await this._connection.promise;
            connection.send(JSON.stringify({
                event: event,
                context: connectionInfo.propertyInspectorUUID,
                payload: payload,
                action: connectionInfo.actionInfo.action
            }));
        }
        catch (_a) {
            console.error(`Unable to send request '${event}' as there is no connection.`);
        }
    }
    async handleOpen() {
        try {
            const connectionInfo = await this._connectionInfo.promise;
            if (this._webSocket) {
                this._webSocket.send(JSON.stringify({
                    event: connectionInfo.registerEvent,
                    uuid: connectionInfo.propertyInspectorUUID
                }));
                this._connection.setResult(this._webSocket);
            }
        }
        catch (ex) {
            this._connection.setException(ex);
        }
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
        }
    }
}
const streamDeckClient = new StreamDeckClient();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (streamDeckClient);


/***/ }),

/***/ "./src/styles/document.ts":
/*!********************************!*\
  !*** ./src/styles/document.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const style = document.createElement('style');
style.innerHTML = lit__WEBPACK_IMPORTED_MODULE_0__.css `
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
`.cssText;
document.head.appendChild(style);


/***/ }),

/***/ "./src/styles/host.ts":
/*!****************************!*\
  !*** ./src/styles/host.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hostStyle": () => (/* binding */ hostStyle)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const hostStyle = lit__WEBPACK_IMPORTED_MODULE_0__.css `
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


/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/css-tag.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/css-tag.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": () => (/* binding */ CSSResult),
/* harmony export */   "adoptStyles": () => (/* binding */ adoptStyles),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "getCompatibleStyle": () => (/* binding */ getCompatibleStyle),
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* binding */ supportsAdoptingStyleSheets),
/* harmony export */   "unsafeCSS": () => (/* binding */ unsafeCSS)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
const supportsAdoptingStyleSheets = window.ShadowRoot &&
    (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype;
const constructionToken = Symbol();
const styleSheetCache = new Map();
/**
 * A container for a string of CSS text, that may be used to create a CSSStyleSheet.
 *
 * CSSResult is the return value of `css`-tagged template literals and
 * `unsafeCSS()`. In order to ensure that CSSResults are only created via the
 * `css` tag and `unsafeCSS()`, CSSResult cannot be constructed directly.
 */
class CSSResult {
    constructor(cssText, safeToken) {
        // This property needs to remain unminified.
        this['_$cssResult$'] = true;
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
    }
    // Note, this is a getter so that it's lazy. In practice, this means
    // stylesheets are not created until the first element instance is made.
    get styleSheet() {
        // Note, if `supportsAdoptingStyleSheets` is true then we assume
        // CSSStyleSheet is constructable.
        let styleSheet = styleSheetCache.get(this.cssText);
        if (supportsAdoptingStyleSheets && styleSheet === undefined) {
            styleSheetCache.set(this.cssText, (styleSheet = new CSSStyleSheet()));
            styleSheet.replaceSync(this.cssText);
        }
        return styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
const textFromCSSResult = (value) => {
    // This property needs to remain unminified.
    if (value['_$cssResult$'] === true) {
        return value.cssText;
    }
    else if (typeof value === 'number') {
        return value;
    }
    else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ` +
            `${value}. Use 'unsafeCSS' to pass non-literal values, but take care ` +
            `to ensure page security.`);
    }
};
/**
 * Wrap a value for interpolation in a {@linkcode css} tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = (value) => new CSSResult(typeof value === 'string' ? value : String(value), constructionToken);
/**
 * A template literal tag which can be used with LitElement's
 * {@linkcode LitElement.styles} property to set element styles.
 *
 * For security reasons, only literal string values and number may be used in
 * embedded expressions. To incorporate non-literal values {@linkcode unsafeCSS}
 * may be used inside an expression.
 */
const css = (strings, ...values) => {
    const cssText = strings.length === 1
        ? strings[0]
        : values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, constructionToken);
};
/**
 * Applies the given styles to a `shadowRoot`. When Shadow DOM is
 * available but `adoptedStyleSheets` is not, styles are appended to the
 * `shadowRoot` to [mimic spec behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
 * Note, when shimming is used, any styles that are subsequently placed into
 * the shadowRoot should be placed *before* any shimmed adopted styles. This
 * will match spec behavior that gives adopted sheets precedence over styles in
 * shadowRoot.
 */
const adoptStyles = (renderRoot, styles) => {
    if (supportsAdoptingStyleSheets) {
        renderRoot.adoptedStyleSheets = styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
    }
    else {
        styles.forEach((s) => {
            const style = document.createElement('style');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const nonce = window['litNonce'];
            if (nonce !== undefined) {
                style.setAttribute('nonce', nonce);
            }
            style.textContent = s.cssText;
            renderRoot.appendChild(style);
        });
    }
};
const cssResultFromStyleSheet = (sheet) => {
    let cssText = '';
    for (const rule of sheet.cssRules) {
        cssText += rule.cssText;
    }
    return unsafeCSS(cssText);
};
const getCompatibleStyle = supportsAdoptingStyleSheets
    ? (s) => s
    : (s) => s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;
//# sourceMappingURL=css-tag.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/base.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/base.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decorateProperty": () => (/* binding */ decorateProperty),
/* harmony export */   "legacyPrototypeMethod": () => (/* binding */ legacyPrototypeMethod),
/* harmony export */   "standardPrototypeMethod": () => (/* binding */ standardPrototypeMethod)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const legacyPrototypeMethod = (descriptor, proto, name) => {
    Object.defineProperty(proto, name, descriptor);
};
const standardPrototypeMethod = (descriptor, element) => ({
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor,
});
/**
 * Helper for decorating a property that is compatible with both TypeScript
 * and Babel decorators. The optional `finisher` can be used to perform work on
 * the class. The optional `descriptor` should return a PropertyDescriptor
 * to install for the given property.
 *
 * @param finisher {function} Optional finisher method; receives the element
 * constructor and property key as arguments and has no return value.
 * @param descriptor {function} Optional descriptor method; receives the
 * property key as an argument and returns a property descriptor to define for
 * the given property.
 * @returns {ClassElement|void}
 */
const decorateProperty = ({ finisher, descriptor, }) => (protoOrDescriptor, name
// Note TypeScript requires the return type to be `void|any`
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => {
    var _a;
    // TypeScript / Babel legacy mode
    if (name !== undefined) {
        const ctor = protoOrDescriptor
            .constructor;
        if (descriptor !== undefined) {
            Object.defineProperty(protoOrDescriptor, name, descriptor(name));
        }
        finisher === null || finisher === void 0 ? void 0 : finisher(ctor, name);
        // Babel standard mode
    }
    else {
        // Note, the @property decorator saves `key` as `originalKey`
        // so try to use it here.
        const key = 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (_a = protoOrDescriptor.originalKey) !== null && _a !== void 0 ? _a : protoOrDescriptor.key;
        const info = descriptor != undefined
            ? {
                kind: 'method',
                placement: 'prototype',
                key,
                descriptor: descriptor(protoOrDescriptor.key),
            }
            : { ...protoOrDescriptor, key };
        if (finisher != undefined) {
            info.finisher = function (ctor) {
                finisher(ctor, key);
            };
        }
        return info;
    }
};
//# sourceMappingURL=base.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/custom-element.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/custom-element.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customElement": () => (/* binding */ customElement)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const legacyCustomElement = (tagName, clazz) => {
    window.customElements.define(tagName, clazz);
    // Cast as any because TS doesn't recognize the return type as being a
    // subtype of the decorated class when clazz is typed as
    // `Constructor<HTMLElement>` for some reason.
    // `Constructor<HTMLElement>` is helpful to make sure the decorator is
    // applied to elements however.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return clazz;
};
const standardCustomElement = (tagName, descriptor) => {
    const { kind, elements } = descriptor;
    return {
        kind,
        elements,
        // This callback is called once the class is otherwise fully defined
        finisher(clazz) {
            window.customElements.define(tagName, clazz);
        },
    };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```js
 * @customElement('my-element')
 * class MyElement extends LitElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The tag name of the custom element to define.
 */
const customElement = (tagName) => (classOrDescriptor) => typeof classOrDescriptor === 'function'
    ? legacyCustomElement(tagName, classOrDescriptor)
    : standardCustomElement(tagName, classOrDescriptor);
//# sourceMappingURL=custom-element.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/event-options.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/event-options.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventOptions": () => (/* binding */ eventOptions)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifies event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * ```ts
 * class MyElement {
 *   clicked = false;
 *
 *   render() {
 *     return html`
 *       <div @click=${this._onClick}>
 *         <button></button>
 *       </div>
 *     `;
 *   }
 *
 *   @eventOptions({capture: true})
 *   _onClick(e) {
 *     this.clicked = true;
 *   }
 * }
 * ```
 * @category Decorator
 */
function eventOptions(options) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        finisher: (ctor, name) => {
            Object.assign(ctor.prototype[name], options);
        },
    });
}
//# sourceMappingURL=event-options.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/property.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "property": () => (/* binding */ property)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const standardProperty = (options, element) => {
    // When decorating an accessor, pass it through and add property metadata.
    // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
    // stomp over the user's accessor.
    if (element.kind === 'method' &&
        element.descriptor &&
        !('value' in element.descriptor)) {
        return {
            ...element,
            finisher(clazz) {
                clazz.createProperty(element.key, options);
            },
        };
    }
    else {
        // createProperty() takes care of defining the property, but we still
        // must return some kind of descriptor, so return a descriptor for an
        // unused prototype field. The finisher calls createProperty().
        return {
            kind: 'field',
            key: Symbol(),
            placement: 'own',
            descriptor: {},
            // store the original key so subsequent decorators have access to it.
            originalKey: element.key,
            // When @babel/plugin-proposal-decorators implements initializers,
            // do this instead of the initializer below. See:
            // https://github.com/babel/babel/issues/9260 extras: [
            //   {
            //     kind: 'initializer',
            //     placement: 'own',
            //     initializer: descriptor.initializer,
            //   }
            // ],
            initializer() {
                if (typeof element.initializer === 'function') {
                    this[element.key] = element.initializer.call(this);
                }
            },
            finisher(clazz) {
                clazz.createProperty(element.key, options);
            },
        };
    }
};
const legacyProperty = (options, proto, name) => {
    proto.constructor.createProperty(name, options);
};
/**
 * A property decorator which creates a reactive property that reflects a
 * corresponding attribute value. When a decorated property is set
 * the element will update and render. A {@linkcode PropertyDeclaration} may
 * optionally be supplied to configure property features.
 *
 * This decorator should only be used for public fields. As public fields,
 * properties should be considered as primarily settable by element users,
 * either via attribute or the property itself.
 *
 * Generally, properties that are changed by the element should be private or
 * protected fields and should use the {@linkcode state} decorator.
 *
 * However, sometimes element code does need to set a public property. This
 * should typically only be done in response to user interaction, and an event
 * should be fired informing the user; for example, a checkbox sets its
 * `checked` property when clicked and fires a `changed` event. Mutating public
 * properties should typically not be done for non-primitive (object or array)
 * properties. In other cases when an element needs to manage state, a private
 * property decorated via the {@linkcode state} decorator should be used. When
 * needed, state properties can be initialized via public properties to
 * facilitate complex interactions.
 *
 * ```ts
 * class MyElement {
 *   @property({ type: Boolean })
 *   clicked = false;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */
function property(options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (protoOrDescriptor, name) => name !== undefined
        ? legacyProperty(options, protoOrDescriptor, name)
        : standardProperty(options, protoOrDescriptor);
}
//# sourceMappingURL=property.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-all.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-all.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryAll": () => (/* binding */ queryAll)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * ```ts
 * class MyElement {
 *   @queryAll('div')
 *   divs;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function queryAll(selector) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            get() {
                var _a, _b;
                return (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll(selector)) !== null && _b !== void 0 ? _b : [];
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-all.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryAssignedElements": () => (/* binding */ queryAssignedElements)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a;
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */

/**
 * A tiny module scoped polyfill for HTMLSlotElement.assignedElements.
 */
const slotAssignedElements = ((_a = window.HTMLSlotElement) === null || _a === void 0 ? void 0 : _a.prototype.assignedElements) != null
    ? (slot, opts) => slot.assignedElements(opts)
    : (slot, opts) => slot
        .assignedNodes(opts)
        .filter((node) => node.nodeType === Node.ELEMENT_NODE);
/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedElements` of the given `slot`. Provides a declarative
 * way to use
 * [`HTMLSlotElement.assignedElements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements).
 *
 * Can be passed an optional {@linkcode QueryAssignedElementsOptions} object.
 *
 * Example usage:
 * ```ts
 * class MyElement {
 *   @queryAssignedElements({ slot: 'list' })
 *   listItems!: Array<HTMLElement>;
 *   @queryAssignedElements()
 *   unnamedSlotEls!: Array<HTMLElement>;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *       <slot></slot>
 *     `;
 *   }
 * }
 * ```
 *
 * Note, the type of this property should be annotated as `Array<HTMLElement>`.
 *
 * @category Decorator
 */
function queryAssignedElements(options) {
    const { slot, selector } = options !== null && options !== void 0 ? options : {};
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            get() {
                var _a;
                const slotSelector = `slot${slot ? `[name=${slot}]` : ':not([name])'}`;
                const slotEl = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(slotSelector);
                const elements = slotEl != null ? slotAssignedElements(slotEl, options) : [];
                if (selector) {
                    return elements.filter((node) => node.matches(selector));
                }
                return elements;
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-assigned-elements.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryAssignedNodes": () => (/* binding */ queryAssignedNodes)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/* harmony import */ var _query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query-assigned-elements.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */


function queryAssignedNodes(slotOrOptions, flatten, selector) {
    // Normalize the overloaded arguments.
    let slot = slotOrOptions;
    let assignedNodesOptions;
    if (typeof slotOrOptions === 'object') {
        slot = slotOrOptions.slot;
        assignedNodesOptions = slotOrOptions;
    }
    else {
        assignedNodesOptions = { flatten };
    }
    // For backwards compatibility, queryAssignedNodes with a selector behaves
    // exactly like queryAssignedElements with a selector.
    if (selector) {
        return (0,_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__.queryAssignedElements)({
            slot: slot,
            flatten,
            selector,
        });
    }
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            get() {
                var _a, _b;
                const slotSelector = `slot${slot ? `[name=${slot}]` : ':not([name])'}`;
                const slotEl = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(slotSelector);
                return (_b = slotEl === null || slotEl === void 0 ? void 0 : slotEl.assignedNodes(assignedNodesOptions)) !== null && _b !== void 0 ? _b : [];
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-assigned-nodes.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-async.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-async.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryAsync": () => (/* binding */ queryAsync)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

// Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.
/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * ```ts
 * class MyElement {
 *   @queryAsync('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 *
 * // external usage
 * async doSomethingWithFirst() {
 *  (await aMyElement.first).doSomething();
 * }
 * ```
 * @category Decorator
 */
function queryAsync(selector) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            async get() {
                var _a;
                await this.updateComplete;
                return (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector);
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-async.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "query": () => (/* binding */ query)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 * @param cache An optional boolean which when true performs the DOM query only
 *     once and caches the result.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * ```ts
 * class MyElement {
 *   @query('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function query(selector, cache) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (name) => {
            const descriptor = {
                get() {
                    var _a, _b;
                    return (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector)) !== null && _b !== void 0 ? _b : null;
                },
                enumerable: true,
                configurable: true,
            };
            if (cache) {
                const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
                descriptor.get = function () {
                    var _a, _b;
                    if (this[key] === undefined) {
                        this[key] = (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector)) !== null && _b !== void 0 ? _b : null;
                    }
                    return this[key];
                };
            }
            return descriptor;
        },
    });
}
//# sourceMappingURL=query.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/state.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/state.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "state": () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property.js */ "./node_modules/@lit/reactive-element/development/decorators/property.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */

/**
 * Declares a private or protected reactive property that still triggers
 * updates to the element when it changes. It does not reflect from the
 * corresponding attribute.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like closure compiler.
 * @category Decorator
 */
function state(options) {
    return (0,_property_js__WEBPACK_IMPORTED_MODULE_0__.property)({
        ...options,
        state: true,
    });
}
//# sourceMappingURL=state.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/reactive-element.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/reactive-element.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   "ReactiveElement": () => (/* binding */ ReactiveElement),
/* harmony export */   "adoptStyles": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   "css": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   "defaultConverter": () => (/* binding */ defaultConverter),
/* harmony export */   "getCompatibleStyle": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   "notEqual": () => (/* binding */ notEqual),
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   "unsafeCSS": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-tag.js */ "./node_modules/@lit/reactive-element/development/css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c;
var _d;
/**
 * Use this module if you want to create your own base class extending
 * {@link ReactiveElement}.
 * @packageDocumentation
 */


const DEV_MODE = true;
let requestUpdateThenable;
let issueWarning;
const trustedTypes = window
    .trustedTypes;
// Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.
const emptyStringForBooleanAttribute = trustedTypes
    ? trustedTypes.emptyScript
    : '';
const polyfillSupport = DEV_MODE
    ? window.reactiveElementPolyfillSupportDevMode
    : window.reactiveElementPolyfillSupport;
if (DEV_MODE) {
    // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    const issuedWarnings = ((_a = globalThis.litIssuedWarnings) !== null && _a !== void 0 ? _a : (globalThis.litIssuedWarnings = new Set()));
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += ` See https://lit.dev/msg/${code} for more information.`;
        if (!issuedWarnings.has(warning)) {
            console.warn(warning);
            issuedWarnings.add(warning);
        }
    };
    issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
    // Issue polyfill support warning.
    if (((_b = window.ShadyDOM) === null || _b === void 0 ? void 0 : _b.inUse) && polyfillSupport === undefined) {
        issueWarning('polyfill-support-missing', `Shadow DOM is being polyfilled via \`ShadyDOM\` but ` +
            `the \`polyfill-support\` module has not been loaded.`);
    }
    requestUpdateThenable = (name) => ({
        then: (onfulfilled, _onrejected) => {
            issueWarning('request-update-promise', `The \`requestUpdate\` method should no longer return a Promise but ` +
                `does so on \`${name}\`. Use \`updateComplete\` instead.`);
            if (onfulfilled !== undefined) {
                onfulfilled(false);
            }
        },
    });
}
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
const debugLogEvent = DEV_MODE
    ? (event) => {
        const shouldEmit = window
            .emitLitDebugLogEvents;
        if (!shouldEmit) {
            return;
        }
        window.dispatchEvent(new CustomEvent('lit-debug', {
            detail: event,
        }));
    }
    : undefined;
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
/*@__INLINE__*/
const JSCompiler_renameProperty = (prop, _obj) => prop;
const defaultConverter = {
    toAttribute(value, type) {
        switch (type) {
            case Boolean:
                value = value ? emptyStringForBooleanAttribute : null;
                break;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                value = value == null ? value : JSON.stringify(value);
                break;
        }
        return value;
    },
    fromAttribute(value, type) {
        let fromValue = value;
        switch (type) {
            case Boolean:
                fromValue = value !== null;
                break;
            case Number:
                fromValue = value === null ? null : Number(value);
                break;
            case Object:
            case Array:
                // Do *not* generate exception when invalid JSON is set as elements
                // don't normally complain on being mis-configured.
                // TODO(sorvell): Do generate exception in *dev mode*.
                try {
                    // Assert to adhere to Bazel's "must type assert JSON parse" rule.
                    fromValue = JSON.parse(value);
                }
                catch (e) {
                    fromValue = null;
                }
                break;
        }
        return fromValue;
    },
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
const notEqual = (value, old) => {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual,
};
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */
const finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */
class ReactiveElement extends HTMLElement {
    constructor() {
        super();
        this.__instanceProperties = new Map();
        /**
         * True if there is a pending update as a result of calling `requestUpdate()`.
         * Should only be read.
         * @category updates
         */
        this.isUpdatePending = false;
        /**
         * Is set to `true` after the first update. The element code cannot assume
         * that `renderRoot` exists before the element `hasUpdated`.
         * @category updates
         */
        this.hasUpdated = false;
        /**
         * Name of currently reflecting property
         */
        this.__reflectingProperty = null;
        this._initialize();
    }
    /**
     * Adds an initializer function to the class that is called during instance
     * construction.
     *
     * This is useful for code that runs against a `ReactiveElement`
     * subclass, such as a decorator, that needs to do work for each
     * instance, such as setting up a `ReactiveController`.
     *
     * ```ts
     * const myDecorator = (target: typeof ReactiveElement, key: string) => {
     *   target.addInitializer((instance: ReactiveElement) => {
     *     // This is run during construction of the element
     *     new MyController(instance);
     *   });
     * }
     * ```
     *
     * Decorating a field will then cause each instance to run an initializer
     * that adds a controller:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   @myDecorator foo;
     * }
     * ```
     *
     * Initializers are stored per-constructor. Adding an initializer to a
     * subclass does not add it to a superclass. Since initializers are run in
     * constructors, initializers will run in order of the class hierarchy,
     * starting with superclasses and progressing to the instance's class.
     *
     * @nocollapse
     */
    static addInitializer(initializer) {
        var _a;
        (_a = this._initializers) !== null && _a !== void 0 ? _a : (this._initializers = []);
        this._initializers.push(initializer);
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     * @category attributes
     */
    static get observedAttributes() {
        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        const attributes = [];
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.elementProperties.forEach((v, p) => {
            const attr = this.__attributeNameForProperty(p, v);
            if (attr !== undefined) {
                this.__attributeToPropertyMap.set(attr, p);
                attributes.push(attr);
            }
        });
        return attributes;
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a {@linkcode PropertyDeclaration} for the property with the
     * given options. The property setter calls the property's `hasChanged`
     * property option or uses a strict identity check to determine whether or not
     * to request an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * ```ts
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */
    static createProperty(name, options = defaultPropertyDeclaration) {
        var _a;
        // if this is a state property, force the attribute to false.
        if (options.state) {
            // Cast as any since this is readonly.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            options.attribute = false;
        }
        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure finalization has been kicked off.
        this.finalize();
        this.elementProperties.set(name, options);
        // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it
        if (!options.noAccessor && !this.prototype.hasOwnProperty(name)) {
            const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
            const descriptor = this.getPropertyDescriptor(name, key, options);
            if (descriptor !== undefined) {
                Object.defineProperty(this.prototype, name, descriptor);
                if (DEV_MODE) {
                    // If this class doesn't have its own set, create one and initialize
                    // with the values in the set from the nearest ancestor class, if any.
                    if (!this.hasOwnProperty('__reactivePropertyKeys')) {
                        this.__reactivePropertyKeys = new Set((_a = this.__reactivePropertyKeys) !== null && _a !== void 0 ? _a : []);
                    }
                    this.__reactivePropertyKeys.add(name);
                }
            }
        }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     * ```ts
     * class MyElement extends LitElement {
     *   static getPropertyDescriptor(name, key, options) {
     *     const defaultDescriptor =
     *         super.getPropertyDescriptor(name, key, options);
     *     const setter = defaultDescriptor.set;
     *     return {
     *       get: defaultDescriptor.get,
     *       set(value) {
     *         setter.call(this, value);
     *         // custom action.
     *       },
     *       configurable: true,
     *       enumerable: true
     *     }
     *   }
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */
    static getPropertyDescriptor(name, key, options) {
        return {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            get() {
                return this[key];
            },
            set(value) {
                const oldValue = this[name];
                this[key] = value;
                this.requestUpdate(name, oldValue, options);
            },
            configurable: true,
            enumerable: true,
        };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a `PropertyDeclaration` via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override
     * {@linkcode createProperty}.
     *
     * @nocollapse
     * @final
     * @category properties
     */
    static getPropertyOptions(name) {
        return this.elementProperties.get(name) || defaultPropertyDeclaration;
    }
    /**
     * Creates property accessors for registered properties, sets up element
     * styling, and ensures any superclasses are also finalized. Returns true if
     * the element was finalized.
     * @nocollapse
     */
    static finalize() {
        if (this.hasOwnProperty(finalized)) {
            return false;
        }
        this[finalized] = true;
        // finalize any superclasses
        const superCtor = Object.getPrototypeOf(this);
        superCtor.finalize();
        this.elementProperties = new Map(superCtor.elementProperties);
        // initialize Map populated in observedAttributes
        this.__attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            // support symbols in properties (IE11 does not support this)
            const propKeys = [
                ...Object.getOwnPropertyNames(props),
                ...Object.getOwnPropertySymbols(props),
            ];
            // This for/of is ok because propKeys is an array
            for (const p of propKeys) {
                // note, use of `any` is due to TypeScript lack of support for symbol in
                // index types
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this.createProperty(p, props[p]);
            }
        }
        this.elementStyles = this.finalizeStyles(this.styles);
        // DEV mode warnings
        if (DEV_MODE) {
            const warnRemovedOrRenamed = (name, renamed = false) => {
                if (this.prototype.hasOwnProperty(name)) {
                    issueWarning(renamed ? 'renamed-api' : 'removed-api', `\`${name}\` is implemented on class ${this.name}. It ` +
                        `has been ${renamed ? 'renamed' : 'removed'} ` +
                        `in this version of LitElement.`);
                }
            };
            warnRemovedOrRenamed('initialize');
            warnRemovedOrRenamed('requestUpdateInternal');
            warnRemovedOrRenamed('_getUpdateComplete', true);
        }
        return true;
    }
    /**
     * Takes the styles the user supplied via the `static styles` property and
     * returns the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * Styles are deduplicated preserving the _last_ instance in the list. This
     * is a performance optimization to avoid duplicated styles that can occur
     * especially when composing via subclassing. The last item is kept to try
     * to preserve the cascade order with the assumption that it's most important
     * that last added styles override previous styles.
     *
     * @nocollapse
     * @category styles
     */
    static finalizeStyles(styles) {
        const elementStyles = [];
        if (Array.isArray(styles)) {
            // Dedupe the flattened array in reverse order to preserve the last items.
            // Casting to Array<unknown> works around TS error that
            // appears to come from trying to flatten a type CSSResultArray.
            const set = new Set(styles.flat(Infinity).reverse());
            // Then preserve original order by adding the set items in reverse order.
            for (const s of set) {
                elementStyles.unshift((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(s));
            }
        }
        else if (styles !== undefined) {
            elementStyles.push((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(styles));
        }
        return elementStyles;
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */
    static __attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false
            ? undefined
            : typeof attribute === 'string'
                ? attribute
                : typeof name === 'string'
                    ? name.toLowerCase()
                    : undefined;
    }
    /**
     * Internal only override point for customizing work done when elements
     * are constructed.
     *
     * @internal
     */
    _initialize() {
        var _a;
        this.__updatePromise = new Promise((res) => (this.enableUpdating = res));
        this._$changedProperties = new Map();
        this.__saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this.requestUpdate();
        (_a = this.constructor._initializers) === null || _a === void 0 ? void 0 : _a.forEach((i) => i(this));
    }
    /**
     * Registers a `ReactiveController` to participate in the element's reactive
     * update cycle. The element automatically calls into any registered
     * controllers during its lifecycle callbacks.
     *
     * If the element is connected when `addController()` is called, the
     * controller's `hostConnected()` callback will be immediately called.
     * @category controllers
     */
    addController(controller) {
        var _a, _b;
        ((_a = this.__controllers) !== null && _a !== void 0 ? _a : (this.__controllers = [])).push(controller);
        // If a controller is added after the element has been connected,
        // call hostConnected. Note, re-using existence of `renderRoot` here
        // (which is set in connectedCallback) to avoid the need to track a
        // first connected state.
        if (this.renderRoot !== undefined && this.isConnected) {
            (_b = controller.hostConnected) === null || _b === void 0 ? void 0 : _b.call(controller);
        }
    }
    /**
     * Removes a `ReactiveController` from the element.
     * @category controllers
     */
    removeController(controller) {
        var _a;
        // Note, if the indexOf is -1, the >>> will flip the sign which makes the
        // splice do nothing.
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.splice(this.__controllers.indexOf(controller) >>> 0, 1);
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */
    __saveInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor.elementProperties.forEach((_v, p) => {
            if (this.hasOwnProperty(p)) {
                this.__instanceProperties.set(p, this[p]);
                delete this[p];
            }
        });
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     *
     * @return Returns a node into which to render.
     * @category rendering
     */
    createRenderRoot() {
        var _a;
        const renderRoot = (_a = this.shadowRoot) !== null && _a !== void 0 ? _a : this.attachShadow(this.constructor.shadowRootOptions);
        (0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles)(renderRoot, this.constructor.elementStyles);
        return renderRoot;
    }
    /**
     * On first connection, creates the element's renderRoot, sets up
     * element styling, and enables updating.
     * @category lifecycle
     */
    connectedCallback() {
        var _a;
        // create renderRoot before first update.
        if (this.renderRoot === undefined) {
            this.renderRoot = this.createRenderRoot();
        }
        this.enableUpdating(true);
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostConnected) === null || _a === void 0 ? void 0 : _a.call(c); });
    }
    /**
     * Note, this method should be considered final and not overridden. It is
     * overridden on the element instance with a function that triggers the first
     * update.
     * @category updates
     */
    enableUpdating(_requestedUpdate) { }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     * @category lifecycle
     */
    disconnectedCallback() {
        var _a;
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostDisconnected) === null || _a === void 0 ? void 0 : _a.call(c); });
    }
    /**
     * Synchronizes property values when attributes change.
     *
     * Specifically, when an attribute is set, the corresponding property is set.
     * You should rarely need to implement this callback. If this method is
     * overridden, `super.attributeChangedCallback(name, _old, value)` must be
     * called.
     *
     * See [using the lifecycle callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)
     * on MDN for more information about the `attributeChangedCallback`.
     * @category attributes
     */
    attributeChangedCallback(name, _old, value) {
        this._$attributeToProperty(name, value);
    }
    __propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
        var _a, _b;
        const attr = this.constructor.__attributeNameForProperty(name, options);
        if (attr !== undefined && options.reflect === true) {
            const toAttribute = (_b = (_a = options.converter) === null || _a === void 0 ? void 0 : _a.toAttribute) !== null && _b !== void 0 ? _b : defaultConverter.toAttribute;
            const attrValue = toAttribute(value, options.type);
            if (DEV_MODE &&
                this.constructor.enabledWarnings.indexOf('migration') >= 0 &&
                attrValue === undefined) {
                issueWarning('undefined-attribute-value', `The attribute value for the ${name} property is ` +
                    `undefined on element ${this.localName}. The attribute will be ` +
                    `removed, but in the previous version of \`ReactiveElement\`, ` +
                    `the attribute would not have changed.`);
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this.__reflectingProperty = name;
            if (attrValue == null) {
                this.removeAttribute(attr);
            }
            else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /** @internal */
    _$attributeToProperty(name, value) {
        var _a, _b, _c;
        const ctor = this.constructor;
        // Note, hint this as an `AttributeMap` so closure clearly understands
        // the type; it has issues with tracking types through statics
        const propName = ctor.__attributeToPropertyMap.get(name);
        // Use tracking info to avoid reflecting a property value to an attribute
        // if it was just set because the attribute changed.
        if (propName !== undefined && this.__reflectingProperty !== propName) {
            const options = ctor.getPropertyOptions(propName);
            const converter = options.converter;
            const fromAttribute = (_c = (_b = (_a = converter) === null || _a === void 0 ? void 0 : _a.fromAttribute) !== null && _b !== void 0 ? _b : (typeof converter === 'function'
                ? converter
                : null)) !== null && _c !== void 0 ? _c : defaultConverter.fromAttribute;
            // mark state reflecting
            this.__reflectingProperty = propName;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this[propName] = fromAttribute(value, options.type);
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should be called
     * when an element should update based on some state not triggered by setting
     * a reactive property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored.
     *
     * @param name name of requesting property
     * @param oldValue old value of requesting property
     * @param options property options to use instead of the previously
     *     configured options
     * @category updates
     */
    requestUpdate(name, oldValue, options) {
        let shouldRequestUpdate = true;
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            options =
                options ||
                    this.constructor.getPropertyOptions(name);
            const hasChanged = options.hasChanged || notEqual;
            if (hasChanged(this[name], oldValue)) {
                if (!this._$changedProperties.has(name)) {
                    this._$changedProperties.set(name, oldValue);
                }
                // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.
                if (options.reflect === true && this.__reflectingProperty !== name) {
                    if (this.__reflectingProperties === undefined) {
                        this.__reflectingProperties = new Map();
                    }
                    this.__reflectingProperties.set(name, options);
                }
            }
            else {
                // Abort the request if the property should not be considered changed.
                shouldRequestUpdate = false;
            }
        }
        if (!this.isUpdatePending && shouldRequestUpdate) {
            this.__updatePromise = this.__enqueueUpdate();
        }
        // Note, since this no longer returns a promise, in dev mode we return a
        // thenable which warns if it's called.
        return DEV_MODE
            ? requestUpdateThenable(this.localName)
            : undefined;
    }
    /**
     * Sets up the element to asynchronously update.
     */
    async __enqueueUpdate() {
        this.isUpdatePending = true;
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await this.__updatePromise;
        }
        catch (e) {
            // Refire any previous errors async so they do not disrupt the update
            // cycle. Errors are refired so developers have a chance to observe
            // them, and this can be done by implementing
            // `window.onunhandledrejection`.
            Promise.reject(e);
        }
        const result = this.scheduleUpdate();
        // If `scheduleUpdate` returns a Promise, we await it. This is done to
        // enable coordinating updates with a scheduler. Note, the result is
        // checked to avoid delaying an additional microtask unless we need to.
        if (result != null) {
            await result;
        }
        return !this.isUpdatePending;
    }
    /**
     * Schedules an element update. You can override this method to change the
     * timing of updates by returning a Promise. The update will await the
     * returned Promise, and you should resolve the Promise to allow the update
     * to proceed. If this method is overridden, `super.scheduleUpdate()`
     * must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```ts
     * override protected async scheduleUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.scheduleUpdate();
     * }
     * ```
     * @category updates
     */
    scheduleUpdate() {
        return this.performUpdate();
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * Call `performUpdate()` to immediately process a pending update. This should
     * generally not be needed, but it can be done in rare cases when you need to
     * update synchronously.
     *
     * Note: To ensure `performUpdate()` synchronously completes a pending update,
     * it should not be overridden. In LitElement 2.x it was suggested to override
     * `performUpdate()` to also customizing update scheduling. Instead, you should now
     * override `scheduleUpdate()`. For backwards compatibility with LitElement 2.x,
     * scheduling updates via `performUpdate()` continues to work, but will make
     * also calling `performUpdate()` to synchronously process updates difficult.
     *
     * @category updates
     */
    performUpdate() {
        var _a, _b;
        // Abort any update if one is not pending when this is called.
        // This can happen if `performUpdate` is called early to "flush"
        // the update.
        if (!this.isUpdatePending) {
            return;
        }
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({ kind: 'update' });
        // create renderRoot before first update.
        if (!this.hasUpdated) {
            // Produce warning if any class properties are shadowed by class fields
            if (DEV_MODE) {
                const shadowedProperties = [];
                (_a = this.constructor.__reactivePropertyKeys) === null || _a === void 0 ? void 0 : _a.forEach((p) => {
                    var _a;
                    if (this.hasOwnProperty(p) && !((_a = this.__instanceProperties) === null || _a === void 0 ? void 0 : _a.has(p))) {
                        shadowedProperties.push(p);
                    }
                });
                if (shadowedProperties.length) {
                    throw new Error(`The following properties on element ${this.localName} will not ` +
                        `trigger updates as expected because they are set using class ` +
                        `fields: ${shadowedProperties.join(', ')}. ` +
                        `Native class fields and some compiled output will overwrite ` +
                        `accessors used for detecting changes. See ` +
                        `https://lit.dev/msg/class-field-shadowing ` +
                        `for more information.`);
                }
            }
        }
        // Mixin instance properties once, if they exist.
        if (this.__instanceProperties) {
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.__instanceProperties.forEach((v, p) => (this[p] = v));
            this.__instanceProperties = undefined;
        }
        let shouldUpdate = false;
        const changedProperties = this._$changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.willUpdate(changedProperties);
                (_b = this.__controllers) === null || _b === void 0 ? void 0 : _b.forEach((c) => { var _a; return (_a = c.hostUpdate) === null || _a === void 0 ? void 0 : _a.call(c); });
                this.update(changedProperties);
            }
            else {
                this.__markUpdated();
            }
        }
        catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            // Ensure element can accept additional updates after an exception.
            this.__markUpdated();
            throw e;
        }
        // The update is no longer considered pending and further updates are now allowed.
        if (shouldUpdate) {
            this._$didUpdate(changedProperties);
        }
    }
    /**
     * Invoked before `update()` to compute values needed during the update.
     *
     * Implement `willUpdate` to compute property values that depend on other
     * properties and are used in the rest of the update process.
     *
     * ```ts
     * willUpdate(changedProperties) {
     *   // only need to check changed properties for an expensive computation.
     *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
     *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
     *   }
     * }
     *
     * render() {
     *   return html`SHA: ${this.sha}`;
     * }
     * ```
     *
     * @category updates
     */
    willUpdate(_changedProperties) { }
    // Note, this is an override point for polyfill-support.
    // @internal
    _$didUpdate(changedProperties) {
        var _a;
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostUpdated) === null || _a === void 0 ? void 0 : _a.call(c); });
        if (!this.hasUpdated) {
            this.hasUpdated = true;
            this.firstUpdated(changedProperties);
        }
        this.updated(changedProperties);
        if (DEV_MODE &&
            this.isUpdatePending &&
            this.constructor.enabledWarnings.indexOf('change-in-update') >= 0) {
            issueWarning('change-in-update', `Element ${this.localName} scheduled an update ` +
                `(generally because a property was set) ` +
                `after an update completed, causing a new update to be scheduled. ` +
                `This is inefficient and should be avoided unless the next update ` +
                `can only be scheduled as a side effect of the previous update.`);
        }
    }
    __markUpdated() {
        this._$changedProperties = new Map();
        this.isUpdatePending = false;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super.getUpdateComplete()`, then any subsequent state.
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */
    get updateComplete() {
        return this.getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   override async getUpdateComplete() {
     *     const result = await super.getUpdateComplete();
     *     await this._myChild.updateComplete;
     *     return result;
     *   }
     * }
     * ```
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */
    getUpdateComplete() {
        return this.__updatePromise;
    }
    /**
     * Controls whether or not `update()` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    update(_changedProperties) {
        if (this.__reflectingProperties !== undefined) {
            // Use forEach so this works even if for/of loops are compiled to for
            // loops expecting arrays
            this.__reflectingProperties.forEach((v, k) => this.__propertyToAttribute(k, this[k], v));
            this.__reflectingProperties = undefined;
        }
        this.__markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    updated(_changedProperties) { }
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * ```ts
     * firstUpdated() {
     *   this.renderRoot.getElementById('my-text-area').focus();
     * }
     * ```
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    firstUpdated(_changedProperties) { }
}
_d = finalized;
/**
 * Marks class as having finished creating properties.
 */
ReactiveElement[_d] = true;
/**
 * Memoized list of all element properties, including any superclass properties.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category properties
 */
ReactiveElement.elementProperties = new Map();
/**
 * Memoized list of all element styles.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category styles
 */
ReactiveElement.elementStyles = [];
/**
 * Options used when calling `attachShadow`. Set this property to customize
 * the options for the shadowRoot; for example, to create a closed
 * shadowRoot: `{mode: 'closed'}`.
 *
 * Note, these options are used in `createRenderRoot`. If this method
 * is customized, options should be respected if possible.
 * @nocollapse
 * @category rendering
 */
ReactiveElement.shadowRootOptions = { mode: 'open' };
// Apply polyfills if available
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({ ReactiveElement });
// Dev mode warnings...
if (DEV_MODE) {
    // Default warning set.
    ReactiveElement.enabledWarnings = ['change-in-update'];
    const ensureOwnWarnings = function (ctor) {
        if (!ctor.hasOwnProperty(JSCompiler_renameProperty('enabledWarnings', ctor))) {
            ctor.enabledWarnings = ctor.enabledWarnings.slice();
        }
    };
    ReactiveElement.enableWarning = function (warning) {
        ensureOwnWarnings(this);
        if (this.enabledWarnings.indexOf(warning) < 0) {
            this.enabledWarnings.push(warning);
        }
    };
    ReactiveElement.disableWarning = function (warning) {
        ensureOwnWarnings(this);
        const i = this.enabledWarnings.indexOf(warning);
        if (i >= 0) {
            this.enabledWarnings.splice(i, 1);
        }
    };
}
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for ReactiveElement usage.
((_c = globalThis.reactiveElementVersions) !== null && _c !== void 0 ? _c : (globalThis.reactiveElementVersions = [])).push('1.3.1');
if (DEV_MODE && globalThis.reactiveElementVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` +
        `is not recommended.`);
}
//# sourceMappingURL=reactive-element.js.map

/***/ }),

/***/ "./node_modules/lit-element/development/lit-element.js":
/*!*************************************************************!*\
  !*** ./node_modules/lit-element/development/lit-element.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   "INTERNAL": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.INTERNAL),
/* harmony export */   "LitElement": () => (/* binding */ LitElement),
/* harmony export */   "ReactiveElement": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement),
/* harmony export */   "UpdatingElement": () => (/* binding */ UpdatingElement),
/* harmony export */   "_$LE": () => (/* binding */ _$LE),
/* harmony export */   "_$LH": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__._$LH),
/* harmony export */   "adoptStyles": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   "css": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   "defaultConverter": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.defaultConverter),
/* harmony export */   "getCompatibleStyle": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   "html": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.html),
/* harmony export */   "noChange": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange),
/* harmony export */   "notEqual": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.notEqual),
/* harmony export */   "nothing": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.nothing),
/* harmony export */   "render": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   "svg": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.svg),
/* harmony export */   "unsafeCSS": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c;
/**
 * The main LitElement module, which defines the {@linkcode LitElement} base
 * class and related APIs.
 *
 *  LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 *  Import {@linkcode LitElement} and {@linkcode html} from this module to
 * create a component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends {@linkcode ReactiveElement} and adds lit-html
 * templating. The `ReactiveElement` class is provided for users that want to
 * build their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */




// For backwards compatibility export ReactiveElement as UpdatingElement. Note,
// IE transpilation requires exporting like this.
const UpdatingElement = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement;
const DEV_MODE = true;
let issueWarning;
if (DEV_MODE) {
    // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    const issuedWarnings = ((_a = globalThis.litIssuedWarnings) !== null && _a !== void 0 ? _a : (globalThis.litIssuedWarnings = new Set()));
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += ` See https://lit.dev/msg/${code} for more information.`;
        if (!issuedWarnings.has(warning)) {
            console.warn(warning);
            issuedWarnings.add(warning);
        }
    };
}
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the {@linkcode LitElement.properties properties} property or the
 * {@linkcode property} decorator.
 */
class LitElement extends _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement {
    constructor() {
        super(...arguments);
        /**
         * @category rendering
         */
        this.renderOptions = { host: this };
        this.__childPart = undefined;
    }
    /**
     * @category rendering
     */
    createRenderRoot() {
        var _a;
        var _b;
        const renderRoot = super.createRenderRoot();
        // When adoptedStyleSheets are shimmed, they are inserted into the
        // shadowRoot by createRenderRoot. Adjust the renderBefore node so that
        // any styles in Lit content render before adoptedStyleSheets. This is
        // important so that adoptedStyleSheets have precedence over styles in
        // the shadowRoot.
        (_a = (_b = this.renderOptions).renderBefore) !== null && _a !== void 0 ? _a : (_b.renderBefore = renderRoot.firstChild);
        return renderRoot;
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param changedProperties Map of changed properties with old values
     * @category updates
     */
    update(changedProperties) {
        // Setting properties in `render` should not trigger an update. Since
        // updates are allowed after super.update, it's important to call `render`
        // before that.
        const value = this.render();
        if (!this.hasUpdated) {
            this.renderOptions.isConnected = this.isConnected;
        }
        super.update(changedProperties);
        this.__childPart = (0,lit_html__WEBPACK_IMPORTED_MODULE_1__.render)(value, this.renderRoot, this.renderOptions);
    }
    /**
     * Invoked when the component is added to the document's DOM.
     *
     * In `connectedCallback()` you should setup tasks that should only occur when
     * the element is connected to the document. The most common of these is
     * adding event listeners to nodes external to the element, like a keydown
     * event handler added to the window.
     *
     * ```ts
     * connectedCallback() {
     *   super.connectedCallback();
     *   addEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * Typically, anything done in `connectedCallback()` should be undone when the
     * element is disconnected, in `disconnectedCallback()`.
     *
     * @category lifecycle
     */
    connectedCallback() {
        var _a;
        super.connectedCallback();
        (_a = this.__childPart) === null || _a === void 0 ? void 0 : _a.setConnected(true);
    }
    /**
     * Invoked when the component is removed from the document's DOM.
     *
     * This callback is the main signal to the element that it may no longer be
     * used. `disconnectedCallback()` should ensure that nothing is holding a
     * reference to the element (such as event listeners added to nodes external
     * to the element), so that it is free to be garbage collected.
     *
     * ```ts
     * disconnectedCallback() {
     *   super.disconnectedCallback();
     *   window.removeEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * An element may be re-connected after being disconnected.
     *
     * @category lifecycle
     */
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        (_a = this.__childPart) === null || _a === void 0 ? void 0 : _a.setConnected(false);
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `ChildPart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     * @category rendering
     */
    render() {
        return lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange;
    }
}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See @lit/reactive-element for more information.
 */
LitElement['finalized'] = true;
// This property needs to remain unminified.
LitElement['_$litElement$'] = true;
// Install hydration if available
(_b = globalThis.litElementHydrateSupport) === null || _b === void 0 ? void 0 : _b.call(globalThis, { LitElement });
// Apply polyfills if available
const polyfillSupport = DEV_MODE
    ? globalThis.litElementPolyfillSupportDevMode
    : globalThis.litElementPolyfillSupport;
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({ LitElement });
// DEV mode warnings
if (DEV_MODE) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    // Note, for compatibility with closure compilation, this access
    // needs to be as a string property index.
    LitElement['finalize'] = function () {
        const finalized = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement.finalize.call(this);
        if (!finalized) {
            return false;
        }
        const warnRemovedOrRenamed = (obj, name, renamed = false) => {
            if (obj.hasOwnProperty(name)) {
                const ctorName = (typeof obj === 'function' ? obj : obj.constructor)
                    .name;
                issueWarning(renamed ? 'renamed-api' : 'removed-api', `\`${name}\` is implemented on class ${ctorName}. It ` +
                    `has been ${renamed ? 'renamed' : 'removed'} ` +
                    `in this version of LitElement.`);
            }
        };
        warnRemovedOrRenamed(this, 'render');
        warnRemovedOrRenamed(this, 'getStyles', true);
        warnRemovedOrRenamed(this.prototype, 'adoptStyles');
        return true;
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */
}
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _$LE object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-html, since this module re-exports all of lit-html.
 *
 * @private
 */
const _$LE = {
    _$attributeToProperty: (el, name, value) => {
        // eslint-disable-next-line
        el._$attributeToProperty(name, value);
    },
    // eslint-disable-next-line
    _$changedProperties: (el) => el._$changedProperties,
};
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
((_c = globalThis.litElementVersions) !== null && _c !== void 0 ? _c : (globalThis.litElementVersions = [])).push('3.2.0');
if (DEV_MODE && globalThis.litElementVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` +
        `is not recommended.`);
}
//# sourceMappingURL=lit-element.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directives/if-defined.js":
/*!********************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/if-defined.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ifDefined": () => (/* binding */ ifDefined)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */
const ifDefined = (value) => value !== null && value !== void 0 ? value : _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
//# sourceMappingURL=if-defined.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/lit-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/development/lit-html.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INTERNAL": () => (/* binding */ INTERNAL),
/* harmony export */   "_$LH": () => (/* binding */ _$LH),
/* harmony export */   "html": () => (/* binding */ html),
/* harmony export */   "noChange": () => (/* binding */ noChange),
/* harmony export */   "nothing": () => (/* binding */ nothing),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "svg": () => (/* binding */ svg)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c, _d;
const DEV_MODE = true;
const ENABLE_EXTRA_SECURITY_HOOKS = true;
const ENABLE_SHADYDOM_NOPATCH = true;
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
const debugLogEvent = DEV_MODE
    ? (event) => {
        const shouldEmit = window
            .emitLitDebugLogEvents;
        if (!shouldEmit) {
            return;
        }
        window.dispatchEvent(new CustomEvent('lit-debug', {
            detail: event,
        }));
    }
    : undefined;
// Used for connecting beginRender and endRender events when there are nested
// renders when errors are thrown preventing an endRender event from being
// called.
let debugLogRenderId = 0;
/**
 * `true` if we're building for google3 with temporary back-compat helpers.
 * This export is not present in prod builds.
 * @internal
 */
const INTERNAL = true;
let issueWarning;
if (DEV_MODE) {
    (_a = globalThis.litIssuedWarnings) !== null && _a !== void 0 ? _a : (globalThis.litIssuedWarnings = new Set());
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += code
            ? ` See https://lit.dev/msg/${code} for more information.`
            : '';
        if (!globalThis.litIssuedWarnings.has(warning)) {
            console.warn(warning);
            globalThis.litIssuedWarnings.add(warning);
        }
    };
    issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
}
const wrap = ENABLE_SHADYDOM_NOPATCH &&
    ((_b = window.ShadyDOM) === null || _b === void 0 ? void 0 : _b.inUse) &&
    ((_c = window.ShadyDOM) === null || _c === void 0 ? void 0 : _c.noPatch) === true
    ? window.ShadyDOM.wrap
    : (node) => node;
const trustedTypes = globalThis.trustedTypes;
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
const policy = trustedTypes
    ? trustedTypes.createPolicy('lit-html', {
        createHTML: (s) => s,
    })
    : undefined;
const identityFunction = (value) => value;
const noopSanitizer = (_node, _name, _type) => identityFunction;
/** Sets the global sanitizer factory. */
const setSanitizer = (newSanitizer) => {
    if (!ENABLE_EXTRA_SECURITY_HOOKS) {
        return;
    }
    if (sanitizerFactoryInternal !== noopSanitizer) {
        throw new Error(`Attempted to overwrite existing lit-html security policy.` +
            ` setSanitizeDOMValueFactory should be called at most once.`);
    }
    sanitizerFactoryInternal = newSanitizer;
};
/**
 * Only used in internal tests, not a part of the public API.
 */
const _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
    sanitizerFactoryInternal = noopSanitizer;
};
const createSanitizer = (node, name, type) => {
    return sanitizerFactoryInternal(node, name, type);
};
// Added to an attribute name to mark the attribute as bound so we can find
// it easily.
const boundAttributeSuffix = '$lit$';
// This marker is used in many syntactic positions in HTML, so it must be
// a valid element name and attribute name. We don't support dynamic names (yet)
// but this at least ensures that the parse tree is closer to the template
// intention.
const marker = `lit$${String(Math.random()).slice(9)}$`;
// String used to tell if a comment is a marker comment
const markerMatch = '?' + marker;
// Text used to insert a comment marker node. We use processing instruction
// syntax because it's slightly smaller, but parses as a comment node.
const nodeMarker = `<${markerMatch}>`;
const d = document;
// Creates a dynamic marker. We never have to search for these in the DOM.
const createMarker = (v = '') => d.createComment(v);
const isPrimitive = (value) => value === null || (typeof value != 'object' && typeof value != 'function');
const isArray = Array.isArray;
const isIterable = (value) => {
    var _a;
    return isArray(value) ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typeof ((_a = value) === null || _a === void 0 ? void 0 : _a[Symbol.iterator]) === 'function';
};
const SPACE_CHAR = `[ \t\n\f\r]`;
const ATTR_VALUE_CHAR = `[^ \t\n\f\r"'\`<>=]`;
const NAME_CHAR = `[^\\s"'>=/]`;
// These regexes represent the five parsing states that we care about in the
// Template's HTML scanner. They match the *end* of the state they're named
// after.
// Depending on the match, we transition to a new state. If there's no match,
// we stay in the same state.
// Note that the regexes are stateful. We utilize lastIndex and sync it
// across the multiple regexes used. In addition to the five regexes below
// we also dynamically create a regex to find the matching end tags for raw
// text elements.
/**
 * End of text is: `<` followed by:
 *   (comment start) or (tag) or (dynamic tag binding)
 */
const textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
const COMMENT_START = 1;
const TAG_NAME = 2;
const DYNAMIC_TAG_NAME = 3;
const commentEndRegex = /-->/g;
/**
 * Comments not started with <!--, like </{, can be ended by a single `>`
 */
const comment2EndRegex = />/g;
/**
 * The tagEnd regex matches the end of the "inside an opening" tag syntax
 * position. It either matches a `>`, an attribute-like sequence, or the end
 * of the string after a space (attribute-name position ending).
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \t\n\f\r" are HTML space characters:
 * https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * So an attribute is:
 *  * The name: any character except a whitespace character, ("), ('), ">",
 *    "=", or "/". Note: this is different from the HTML spec which also excludes control characters.
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, 'g');
const ENTIRE_MATCH = 0;
const ATTRIBUTE_NAME = 1;
const SPACES_AND_EQUALS = 2;
const QUOTE_CHAR = 3;
const singleQuoteAttrEndRegex = /'/g;
const doubleQuoteAttrEndRegex = /"/g;
/**
 * Matches the raw text elements.
 *
 * Comments are not parsed within raw text elements, so we need to search their
 * text content for marker strings.
 */
const rawTextElement = /^(?:script|style|textarea|title)$/i;
/** TemplateResult types */
const HTML_RESULT = 1;
const SVG_RESULT = 2;
// TemplatePart types
// IMPORTANT: these must match the values in PartType
const ATTRIBUTE_PART = 1;
const CHILD_PART = 2;
const PROPERTY_PART = 3;
const BOOLEAN_ATTRIBUTE_PART = 4;
const EVENT_PART = 5;
const ELEMENT_PART = 6;
const COMMENT_PART = 7;
/**
 * Generates a template literal tag function that returns a TemplateResult with
 * the given result type.
 */
const tag = (type) => (strings, ...values) => {
    // Warn against templates octal escape sequences
    // We do this here rather than in render so that the warning is closer to the
    // template definition.
    if (DEV_MODE && strings.some((s) => s === undefined)) {
        console.warn('Some template strings are undefined.\n' +
            'This is probably caused by illegal octal escape sequences.');
    }
    return {
        // This property needs to remain unminified.
        ['_$litType$']: type,
        strings,
        values,
    };
};
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const header = (title: string) => html`<h1>${title}</h1>`;
 * ```
 *
 * The `html` tag returns a description of the DOM to render as a value. It is
 * lazy, meaning no work is done until the template is rendered. When rendering,
 * if a template comes from the same expression as a previously rendered result,
 * it's efficiently updated instead of replaced.
 */
const html = tag(HTML_RESULT);
/**
 * Interprets a template literal as an SVG fragment that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const rect = svg`<rect width="10" height="10"></rect>`;
 *
 * const myImage = html`
 *   <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
 *     ${rect}
 *   </svg>`;
 * ```
 *
 * The `svg` *tag function* should only be used for SVG fragments, or elements
 * that would be contained **inside** an `<svg>` HTML element. A common error is
 * placing an `<svg>` *element* in a template tagged with the `svg` tag
 * function. The `<svg>` element is an HTML element and should be used within a
 * template tagged with the {@linkcode html} tag function.
 *
 * In LitElement usage, it's invalid to return an SVG fragment from the
 * `render()` method, as the SVG fragment will be contained within the element's
 * shadow root and thus cannot be used within an `<svg>` HTML element.
 */
const svg = tag(SVG_RESULT);
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = Symbol.for('lit-noChange');
/**
 * A sentinel value that signals a ChildPart to fully clear its content.
 *
 * ```ts
 * const button = html`${
 *  user.isAdmin
 *    ? html`<button>DELETE</button>`
 *    : nothing
 * }`;
 * ```
 *
 * Prefer using `nothing` over other falsy values as it provides a consistent
 * behavior between various expression binding contexts.
 *
 * In child expressions, `undefined`, `null`, `''`, and `nothing` all behave the
 * same and render no nodes. In attribute expressions, `nothing` _removes_ the
 * attribute, while `undefined` and `null` will render an empty string. In
 * property expressions `nothing` becomes `undefined`.
 */
const nothing = Symbol.for('lit-nothing');
/**
 * The cache of prepared templates, keyed by the tagged TemplateStringsArray
 * and _not_ accounting for the specific template tag used. This means that
 * template tags cannot be dynamic - the must statically be one of html, svg,
 * or attr. This restriction simplifies the cache lookup, which is on the hot
 * path for rendering.
 */
const templateCache = new WeakMap();
/**
 * Renders a value, usually a lit-html TemplateResult, to the container.
 * @param value
 * @param container
 * @param options
 */
const render = (value, container, options) => {
    var _a, _b, _c;
    const renderId = DEV_MODE ? debugLogRenderId++ : 0;
    const partOwnerNode = (_a = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _a !== void 0 ? _a : container;
    // This property needs to remain unminified.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let part = partOwnerNode['_$litPart$'];
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'begin render',
        id: renderId,
        value,
        container,
        options,
        part,
    });
    if (part === undefined) {
        const endNode = (_b = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _b !== void 0 ? _b : null;
        // Internal modification: don't clear container to match lit-html 2.0
        if (INTERNAL &&
            ((_c = options) === null || _c === void 0 ? void 0 : _c.clearContainerForLit2MigrationOnly) ===
                true) {
            let n = container.firstChild;
            // Clear only up to the `endNode` aka `renderBefore` node.
            while (n && n !== endNode) {
                const next = n.nextSibling;
                n.remove();
                n = next;
            }
        }
        // This property needs to remain unminified.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        partOwnerNode['_$litPart$'] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, undefined, options !== null && options !== void 0 ? options : {});
    }
    part._$setValue(value);
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'end render',
        id: renderId,
        value,
        container,
        options,
        part,
    });
    return part;
};
if (ENABLE_EXTRA_SECURITY_HOOKS) {
    render.setSanitizer = setSanitizer;
    render.createSanitizer = createSanitizer;
    if (DEV_MODE) {
        render._testOnlyClearSanitizerFactoryDoNotCallOrElse =
            _testOnlyClearSanitizerFactoryDoNotCallOrElse;
    }
}
const walker = d.createTreeWalker(d, 129 /* NodeFilter.SHOW_{ELEMENT|COMMENT} */, null, false);
let sanitizerFactoryInternal = noopSanitizer;
/**
 * Returns an HTML string for the given TemplateStringsArray and result type
 * (HTML or SVG), along with the case-sensitive bound attribute names in
 * template order. The HTML contains comment comment markers denoting the
 * `ChildPart`s and suffixes on bound attributes denoting the `AttributeParts`.
 *
 * @param strings template strings array
 * @param type HTML or SVG
 * @return Array containing `[html, attrNames]` (array returned for terseness,
 *     to avoid object fields since this code is shared with non-minified SSR
 *     code)
 */
const getTemplateHtml = (strings, type) => {
    // Insert makers into the template HTML to represent the position of
    // bindings. The following code scans the template strings to determine the
    // syntactic position of the bindings. They can be in text position, where
    // we insert an HTML comment, attribute value position, where we insert a
    // sentinel string and re-write the attribute name, or inside a tag where
    // we insert the sentinel string.
    const l = strings.length - 1;
    // Stores the case-sensitive bound attribute names in the order of their
    // parts. ElementParts are also reflected in this array as undefined
    // rather than a string, to disambiguate from attribute bindings.
    const attrNames = [];
    let html = type === SVG_RESULT ? '<svg>' : '';
    // When we're inside a raw text tag (not it's text content), the regex
    // will still be tagRegex so we can find attributes, but will switch to
    // this regex when the tag ends.
    let rawTextEndRegex;
    // The current parsing state, represented as a reference to one of the
    // regexes
    let regex = textEndRegex;
    for (let i = 0; i < l; i++) {
        const s = strings[i];
        // The index of the end of the last attribute name. When this is
        // positive at end of a string, it means we're in an attribute value
        // position and need to rewrite the attribute name.
        // We also use a special value of -2 to indicate that we encountered
        // the end of a string in attribute name position.
        let attrNameEndIndex = -1;
        let attrName;
        let lastIndex = 0;
        let match;
        // The conditions in this loop handle the current parse state, and the
        // assignments to the `regex` variable are the state transitions.
        while (lastIndex < s.length) {
            // Make sure we start searching from where we previously left off
            regex.lastIndex = lastIndex;
            match = regex.exec(s);
            if (match === null) {
                break;
            }
            lastIndex = regex.lastIndex;
            if (regex === textEndRegex) {
                if (match[COMMENT_START] === '!--') {
                    regex = commentEndRegex;
                }
                else if (match[COMMENT_START] !== undefined) {
                    // We started a weird comment, like </{
                    regex = comment2EndRegex;
                }
                else if (match[TAG_NAME] !== undefined) {
                    if (rawTextElement.test(match[TAG_NAME])) {
                        // Record if we encounter a raw-text element. We'll switch to
                        // this regex at the end of the tag.
                        rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, 'g');
                    }
                    regex = tagEndRegex;
                }
                else if (match[DYNAMIC_TAG_NAME] !== undefined) {
                    if (DEV_MODE) {
                        throw new Error('Bindings in tag names are not supported. Please use static templates instead. ' +
                            'See https://lit.dev/docs/templates/expressions/#static-expressions');
                    }
                    regex = tagEndRegex;
                }
            }
            else if (regex === tagEndRegex) {
                if (match[ENTIRE_MATCH] === '>') {
                    // End of a tag. If we had started a raw-text element, use that
                    // regex
                    regex = rawTextEndRegex !== null && rawTextEndRegex !== void 0 ? rawTextEndRegex : textEndRegex;
                    // We may be ending an unquoted attribute value, so make sure we
                    // clear any pending attrNameEndIndex
                    attrNameEndIndex = -1;
                }
                else if (match[ATTRIBUTE_NAME] === undefined) {
                    // Attribute name position
                    attrNameEndIndex = -2;
                }
                else {
                    attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
                    attrName = match[ATTRIBUTE_NAME];
                    regex =
                        match[QUOTE_CHAR] === undefined
                            ? tagEndRegex
                            : match[QUOTE_CHAR] === '"'
                                ? doubleQuoteAttrEndRegex
                                : singleQuoteAttrEndRegex;
                }
            }
            else if (regex === doubleQuoteAttrEndRegex ||
                regex === singleQuoteAttrEndRegex) {
                regex = tagEndRegex;
            }
            else if (regex === commentEndRegex || regex === comment2EndRegex) {
                regex = textEndRegex;
            }
            else {
                // Not one of the five state regexes, so it must be the dynamically
                // created raw text regex and we're at the close of that element.
                regex = tagEndRegex;
                rawTextEndRegex = undefined;
            }
        }
        if (DEV_MODE) {
            // If we have a attrNameEndIndex, which indicates that we should
            // rewrite the attribute name, assert that we're in a valid attribute
            // position - either in a tag, or a quoted attribute value.
            console.assert(attrNameEndIndex === -1 ||
                regex === tagEndRegex ||
                regex === singleQuoteAttrEndRegex ||
                regex === doubleQuoteAttrEndRegex, 'unexpected parse state B');
        }
        // We have four cases:
        //  1. We're in text position, and not in a raw text element
        //     (regex === textEndRegex): insert a comment marker.
        //  2. We have a non-negative attrNameEndIndex which means we need to
        //     rewrite the attribute name to add a bound attribute suffix.
        //  3. We're at the non-first binding in a multi-binding attribute, use a
        //     plain marker.
        //  4. We're somewhere else inside the tag. If we're in attribute name
        //     position (attrNameEndIndex === -2), add a sequential suffix to
        //     generate a unique attribute name.
        // Detect a binding next to self-closing tag end and insert a space to
        // separate the marker from the tag end:
        const end = regex === tagEndRegex && strings[i + 1].startsWith('/>') ? ' ' : '';
        html +=
            regex === textEndRegex
                ? s + nodeMarker
                : attrNameEndIndex >= 0
                    ? (attrNames.push(attrName),
                        s.slice(0, attrNameEndIndex) +
                            boundAttributeSuffix +
                            s.slice(attrNameEndIndex)) +
                        marker +
                        end
                    : s +
                        marker +
                        (attrNameEndIndex === -2 ? (attrNames.push(undefined), i) : end);
    }
    const htmlResult = html + (strings[l] || '<?>') + (type === SVG_RESULT ? '</svg>' : '');
    // A security check to prevent spoofing of Lit template results.
    // In the future, we may be able to replace this with Array.isTemplateObject,
    // though we might need to make that check inside of the html and svg
    // functions, because precompiled templates don't come in as
    // TemplateStringArray objects.
    if (!Array.isArray(strings) || !strings.hasOwnProperty('raw')) {
        let message = 'invalid template strings array';
        if (DEV_MODE) {
            message =
                `Internal Error: expected template strings to be an array ` +
                    `with a 'raw' field. Please file a bug at ` +
                    `https://github.com/lit/lit/issues/new?template=bug_report.md ` +
                    `and include information about your build tooling, if any.`;
        }
        throw new Error(message);
    }
    // Returned as an array for terseness
    return [
        policy !== undefined
            ? policy.createHTML(htmlResult)
            : htmlResult,
        attrNames,
    ];
};
class Template {
    constructor(
    // This property needs to remain unminified.
    { strings, ['_$litType$']: type }, options) {
        /** @internal */
        this.parts = [];
        let node;
        let nodeIndex = 0;
        let attrNameIndex = 0;
        const partCount = strings.length - 1;
        const parts = this.parts;
        // Create template element
        const [html, attrNames] = getTemplateHtml(strings, type);
        this.el = Template.createElement(html, options);
        walker.currentNode = this.el.content;
        // Reparent SVG nodes into template root
        if (type === SVG_RESULT) {
            const content = this.el.content;
            const svgElement = content.firstChild;
            svgElement.remove();
            content.append(...svgElement.childNodes);
        }
        // Walk the template to find binding markers and create TemplateParts
        while ((node = walker.nextNode()) !== null && parts.length < partCount) {
            if (node.nodeType === 1) {
                if (DEV_MODE) {
                    const tag = node.localName;
                    // Warn if `textarea` includes an expression and throw if `template`
                    // does since these are not supported. We do this by checking
                    // innerHTML for anything that looks like a marker. This catches
                    // cases like bindings in textarea there markers turn into text nodes.
                    if (/^(?:textarea|template)$/i.test(tag) &&
                        node.innerHTML.includes(marker)) {
                        const m = `Expressions are not supported inside \`${tag}\` ` +
                            `elements. See https://lit.dev/msg/expression-in-${tag} for more ` +
                            `information.`;
                        if (tag === 'template') {
                            throw new Error(m);
                        }
                        else
                            issueWarning('', m);
                    }
                }
                // TODO (justinfagnani): for attempted dynamic tag names, we don't
                // increment the bindingIndex, and it'll be off by 1 in the element
                // and off by two after it.
                if (node.hasAttributes()) {
                    // We defer removing bound attributes because on IE we might not be
                    // iterating attributes in their template order, and would sometimes
                    // remove an attribute that we still need to create a part for.
                    const attrsToRemove = [];
                    for (const name of node.getAttributeNames()) {
                        // `name` is the name of the attribute we're iterating over, but not
                        // _neccessarily_ the name of the attribute we will create a part
                        // for. They can be different in browsers that don't iterate on
                        // attributes in source order. In that case the attrNames array
                        // contains the attribute name we'll process next. We only need the
                        // attribute name here to know if we should process a bound attribute
                        // on this element.
                        if (name.endsWith(boundAttributeSuffix) ||
                            name.startsWith(marker)) {
                            const realName = attrNames[attrNameIndex++];
                            attrsToRemove.push(name);
                            if (realName !== undefined) {
                                // Lowercase for case-sensitive SVG attributes like viewBox
                                const value = node.getAttribute(realName.toLowerCase() + boundAttributeSuffix);
                                const statics = value.split(marker);
                                const m = /([.?@])?(.*)/.exec(realName);
                                parts.push({
                                    type: ATTRIBUTE_PART,
                                    index: nodeIndex,
                                    name: m[2],
                                    strings: statics,
                                    ctor: m[1] === '.'
                                        ? PropertyPart
                                        : m[1] === '?'
                                            ? BooleanAttributePart
                                            : m[1] === '@'
                                                ? EventPart
                                                : AttributePart,
                                });
                            }
                            else {
                                parts.push({
                                    type: ELEMENT_PART,
                                    index: nodeIndex,
                                });
                            }
                        }
                    }
                    for (const name of attrsToRemove) {
                        node.removeAttribute(name);
                    }
                }
                // TODO (justinfagnani): benchmark the regex against testing for each
                // of the 3 raw text element names.
                if (rawTextElement.test(node.tagName)) {
                    // For raw text elements we need to split the text content on
                    // markers, create a Text node for each segment, and create
                    // a TemplatePart for each marker.
                    const strings = node.textContent.split(marker);
                    const lastIndex = strings.length - 1;
                    if (lastIndex > 0) {
                        node.textContent = trustedTypes
                            ? trustedTypes.emptyScript
                            : '';
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for node parts
                        // We can't use empty text nodes as markers because they're
                        // normalized when cloning in IE (could simplify when
                        // IE is no longer supported)
                        for (let i = 0; i < lastIndex; i++) {
                            node.append(strings[i], createMarker());
                            // Walk past the marker node we just added
                            walker.nextNode();
                            parts.push({ type: CHILD_PART, index: ++nodeIndex });
                        }
                        // Note because this marker is added after the walker's current
                        // node, it will be walked to in the outer loop (and ignored), so
                        // we don't need to adjust nodeIndex here
                        node.append(strings[lastIndex], createMarker());
                    }
                }
            }
            else if (node.nodeType === 8) {
                const data = node.data;
                if (data === markerMatch) {
                    parts.push({ type: CHILD_PART, index: nodeIndex });
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        parts.push({ type: COMMENT_PART, index: nodeIndex });
                        // Move to the end of the match
                        i += marker.length - 1;
                    }
                }
            }
            nodeIndex++;
        }
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'template prep',
            template: this,
            clonableTemplate: this.el,
            parts: this.parts,
            strings,
        });
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @nocollapse */
    static createElement(html, _options) {
        const el = d.createElement('template');
        el.innerHTML = html;
        return el;
    }
}
function resolveDirective(part, value, parent = part, attributeIndex) {
    var _a, _b, _c;
    var _d;
    // Bail early if the value is explicitly noChange. Note, this means any
    // nested directive is still attached and is not run.
    if (value === noChange) {
        return value;
    }
    let currentDirective = attributeIndex !== undefined
        ? (_a = parent.__directives) === null || _a === void 0 ? void 0 : _a[attributeIndex]
        : parent.__directive;
    const nextDirectiveConstructor = isPrimitive(value)
        ? undefined
        : // This property needs to remain unminified.
            value['_$litDirective$'];
    if ((currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor) {
        // This property needs to remain unminified.
        (_b = currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective['_$notifyDirectiveConnectionChanged']) === null || _b === void 0 ? void 0 : _b.call(currentDirective, false);
        if (nextDirectiveConstructor === undefined) {
            currentDirective = undefined;
        }
        else {
            currentDirective = new nextDirectiveConstructor(part);
            currentDirective._$initialize(part, parent, attributeIndex);
        }
        if (attributeIndex !== undefined) {
            ((_c = (_d = parent).__directives) !== null && _c !== void 0 ? _c : (_d.__directives = []))[attributeIndex] =
                currentDirective;
        }
        else {
            parent.__directive = currentDirective;
        }
    }
    if (currentDirective !== undefined) {
        value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
    }
    return value;
}
/**
 * An updateable instance of a Template. Holds references to the Parts used to
 * update the template instance.
 */
class TemplateInstance {
    constructor(template, parent) {
        /** @internal */
        this._parts = [];
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$template = template;
        this._$parent = parent;
    }
    // Called by ChildPart parentNode getter
    get parentNode() {
        return this._$parent.parentNode;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    // This method is separate from the constructor because we need to return a
    // DocumentFragment and we don't want to hold onto it with an instance field.
    _clone(options) {
        var _a;
        const { el: { content }, parts: parts, } = this._$template;
        const fragment = ((_a = options === null || options === void 0 ? void 0 : options.creationScope) !== null && _a !== void 0 ? _a : d).importNode(content, true);
        walker.currentNode = fragment;
        let node = walker.nextNode();
        let nodeIndex = 0;
        let partIndex = 0;
        let templatePart = parts[0];
        while (templatePart !== undefined) {
            if (nodeIndex === templatePart.index) {
                let part;
                if (templatePart.type === CHILD_PART) {
                    part = new ChildPart(node, node.nextSibling, this, options);
                }
                else if (templatePart.type === ATTRIBUTE_PART) {
                    part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
                }
                else if (templatePart.type === ELEMENT_PART) {
                    part = new ElementPart(node, this, options);
                }
                this._parts.push(part);
                templatePart = parts[++partIndex];
            }
            if (nodeIndex !== (templatePart === null || templatePart === void 0 ? void 0 : templatePart.index)) {
                node = walker.nextNode();
                nodeIndex++;
            }
        }
        return fragment;
    }
    _update(values) {
        let i = 0;
        for (const part of this._parts) {
            if (part !== undefined) {
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'set part',
                    part,
                    value: values[i],
                    valueIndex: i,
                    values,
                    templateInstance: this,
                });
                if (part.strings !== undefined) {
                    part._$setValue(values, part, i);
                    // The number of values the part consumes is part.strings.length - 1
                    // since values are in between template spans. We increment i by 1
                    // later in the loop, so increment it by part.strings.length - 2 here
                    i += part.strings.length - 2;
                }
                else {
                    part._$setValue(values[i]);
                }
            }
            i++;
        }
    }
}
class ChildPart {
    constructor(startNode, endNode, parent, options) {
        var _a;
        this.type = CHILD_PART;
        this._$committedValue = nothing;
        // The following fields will be patched onto ChildParts when required by
        // AsyncDirective
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$startNode = startNode;
        this._$endNode = endNode;
        this._$parent = parent;
        this.options = options;
        // Note __isConnected is only ever accessed on RootParts (i.e. when there is
        // no _$parent); the value on a non-root-part is "don't care", but checking
        // for parent would be more code
        this.__isConnected = (_a = options === null || options === void 0 ? void 0 : options.isConnected) !== null && _a !== void 0 ? _a : true;
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            // Explicitly initialize for consistent class shape.
            this._textSanitizer = undefined;
        }
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        var _a, _b;
        // ChildParts that are not at the root should always be created with a
        // parent; only RootChildNode's won't, so they return the local isConnected
        // state
        return (_b = (_a = this._$parent) === null || _a === void 0 ? void 0 : _a._$isConnected) !== null && _b !== void 0 ? _b : this.__isConnected;
    }
    /**
     * The parent node into which the part renders its content.
     *
     * A ChildPart's content consists of a range of adjacent child nodes of
     * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
     * `.endNode`).
     *
     * - If both `.startNode` and `.endNode` are non-null, then the part's content
     * consists of all siblings between `.startNode` and `.endNode`, exclusively.
     *
     * - If `.startNode` is non-null but `.endNode` is null, then the part's
     * content consists of all siblings following `.startNode`, up to and
     * including the last child of `.parentNode`. If `.endNode` is non-null, then
     * `.startNode` will always be non-null.
     *
     * - If both `.endNode` and `.startNode` are null, then the part's content
     * consists of all child nodes of `.parentNode`.
     */
    get parentNode() {
        let parentNode = wrap(this._$startNode).parentNode;
        const parent = this._$parent;
        if (parent !== undefined &&
            parentNode.nodeType === 11 /* Node.DOCUMENT_FRAGMENT */) {
            // If the parentNode is a DocumentFragment, it may be because the DOM is
            // still in the cloned fragment during initial render; if so, get the real
            // parentNode the part will be committed into by asking the parent.
            parentNode = parent.parentNode;
        }
        return parentNode;
    }
    /**
     * The part's leading marker node, if any. See `.parentNode` for more
     * information.
     */
    get startNode() {
        return this._$startNode;
    }
    /**
     * The part's trailing marker node, if any. See `.parentNode` for more
     * information.
     */
    get endNode() {
        return this._$endNode;
    }
    _$setValue(value, directiveParent = this) {
        if (DEV_MODE && this.parentNode === null) {
            throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
        }
        value = resolveDirective(this, value, directiveParent);
        if (isPrimitive(value)) {
            // Non-rendering child values. It's important that these do not render
            // empty text nodes to avoid issues with preventing default <slot>
            // fallback content.
            if (value === nothing || value == null || value === '') {
                if (this._$committedValue !== nothing) {
                    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                        kind: 'commit nothing to child',
                        start: this._$startNode,
                        end: this._$endNode,
                        parent: this._$parent,
                        options: this.options,
                    });
                    this._$clear();
                }
                this._$committedValue = nothing;
            }
            else if (value !== this._$committedValue && value !== noChange) {
                this._commitText(value);
            }
            // This property needs to remain unminified.
        }
        else if (value['_$litType$'] !== undefined) {
            this._commitTemplateResult(value);
        }
        else if (value.nodeType !== undefined) {
            this._commitNode(value);
        }
        else if (isIterable(value)) {
            this._commitIterable(value);
        }
        else {
            // Fallback, will render the string representation
            this._commitText(value);
        }
    }
    _insert(node, ref = this._$endNode) {
        return wrap(wrap(this._$startNode).parentNode).insertBefore(node, ref);
    }
    _commitNode(value) {
        var _a;
        if (this._$committedValue !== value) {
            this._$clear();
            if (ENABLE_EXTRA_SECURITY_HOOKS &&
                sanitizerFactoryInternal !== noopSanitizer) {
                const parentNodeName = (_a = this._$startNode.parentNode) === null || _a === void 0 ? void 0 : _a.nodeName;
                if (parentNodeName === 'STYLE' || parentNodeName === 'SCRIPT') {
                    let message = 'Forbidden';
                    if (DEV_MODE) {
                        if (parentNodeName === 'STYLE') {
                            message =
                                `Lit does not support binding inside style nodes. ` +
                                    `This is a security risk, as style injection attacks can ` +
                                    `exfiltrate data and spoof UIs. ` +
                                    `Consider instead using css\`...\` literals ` +
                                    `to compose styles, and make do dynamic styling with ` +
                                    `css custom properties, ::parts, <slot>s, ` +
                                    `and by mutating the DOM rather than stylesheets.`;
                        }
                        else {
                            message =
                                `Lit does not support binding inside script nodes. ` +
                                    `This is a security risk, as it could allow arbitrary ` +
                                    `code execution.`;
                        }
                    }
                    throw new Error(message);
                }
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit node',
                start: this._$startNode,
                parent: this._$parent,
                value: value,
                options: this.options,
            });
            this._$committedValue = this._insert(value);
        }
    }
    _commitText(value) {
        // If the committed value is a primitive it means we called _commitText on
        // the previous render, and we know that this._$startNode.nextSibling is a
        // Text node. We can now just replace the text content (.data) of the node.
        if (this._$committedValue !== nothing &&
            isPrimitive(this._$committedValue)) {
            const node = wrap(this._$startNode).nextSibling;
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(node, 'data', 'property');
                }
                value = this._textSanitizer(value);
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit text',
                node,
                value,
                options: this.options,
            });
            node.data = value;
        }
        else {
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                const textNode = document.createTextNode('');
                this._commitNode(textNode);
                // When setting text content, for security purposes it matters a lot
                // what the parent is. For example, <style> and <script> need to be
                // handled with care, while <span> does not. So first we need to put a
                // text node into the document, then we can sanitize its content.
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(textNode, 'data', 'property');
                }
                value = this._textSanitizer(value);
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'commit text',
                    node: textNode,
                    value,
                    options: this.options,
                });
                textNode.data = value;
            }
            else {
                this._commitNode(d.createTextNode(value));
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'commit text',
                    node: wrap(this._$startNode).nextSibling,
                    value,
                    options: this.options,
                });
            }
        }
        this._$committedValue = value;
    }
    _commitTemplateResult(result) {
        var _a;
        // This property needs to remain unminified.
        const { values, ['_$litType$']: type } = result;
        // If $litType$ is a number, result is a plain TemplateResult and we get
        // the template from the template cache. If not, result is a
        // CompiledTemplateResult and _$litType$ is a CompiledTemplate and we need
        // to create the <template> element the first time we see it.
        const template = typeof type === 'number'
            ? this._$getTemplate(result)
            : (type.el === undefined &&
                (type.el = Template.createElement(type.h, this.options)),
                type);
        if (((_a = this._$committedValue) === null || _a === void 0 ? void 0 : _a._$template) === template) {
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template updating',
                template,
                instance: this._$committedValue,
                parts: this._$committedValue._parts,
                options: this.options,
                values,
            });
            this._$committedValue._update(values);
        }
        else {
            const instance = new TemplateInstance(template, this);
            const fragment = instance._clone(this.options);
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template instantiated',
                template,
                instance,
                parts: instance._parts,
                options: this.options,
                fragment,
                values,
            });
            instance._update(values);
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template instantiated and updated',
                template,
                instance,
                parts: instance._parts,
                options: this.options,
                fragment,
                values,
            });
            this._commitNode(fragment);
            this._$committedValue = instance;
        }
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @internal */
    _$getTemplate(result) {
        let template = templateCache.get(result.strings);
        if (template === undefined) {
            templateCache.set(result.strings, (template = new Template(result)));
        }
        return template;
    }
    _commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If value is an array, then the previous render was of an
        // iterable and value will contain the ChildParts from the previous
        // render. If value is not an array, clear this part and make a new
        // array for ChildParts.
        if (!isArray(this._$committedValue)) {
            this._$committedValue = [];
            this._$clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this._$committedValue;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            if (partIndex === itemParts.length) {
                // If no existing part, create a new one
                // TODO (justinfagnani): test perf impact of always creating two parts
                // instead of sharing parts between nodes
                // https://github.com/lit/lit/issues/1266
                itemParts.push((itemPart = new ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options)));
            }
            else {
                // Reuse an existing part
                itemPart = itemParts[partIndex];
            }
            itemPart._$setValue(item);
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // itemParts always have end nodes
            this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
        }
    }
    /**
     * Removes the nodes contained within this Part from the DOM.
     *
     * @param start Start node to clear from, for clearing a subset of the part's
     *     DOM (used when truncating iterables)
     * @param from  When `start` is specified, the index within the iterable from
     *     which ChildParts are being removed, used for disconnecting directives in
     *     those Parts.
     *
     * @internal
     */
    _$clear(start = wrap(this._$startNode).nextSibling, from) {
        var _a;
        (_a = this._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(this, false, true, from);
        while (start && start !== this._$endNode) {
            const n = wrap(start).nextSibling;
            wrap(start).remove();
            start = n;
        }
    }
    /**
     * Implementation of RootPart's `isConnected`. Note that this metod
     * should only be called on `RootPart`s (the `ChildPart` returned from a
     * top-level `render()` call). It has no effect on non-root ChildParts.
     * @param isConnected Whether to set
     * @internal
     */
    setConnected(isConnected) {
        var _a;
        if (this._$parent === undefined) {
            this.__isConnected = isConnected;
            (_a = this._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(this, isConnected);
        }
        else if (DEV_MODE) {
            throw new Error('part.setConnected() may only be called on a ' +
                'RootPart returned from render().');
        }
    }
}
class AttributePart {
    constructor(element, name, strings, parent, options) {
        this.type = ATTRIBUTE_PART;
        /** @internal */
        this._$committedValue = nothing;
        /** @internal */
        this._$disconnectableChildren = undefined;
        this.element = element;
        this.name = name;
        this._$parent = parent;
        this.options = options;
        if (strings.length > 2 || strings[0] !== '' || strings[1] !== '') {
            this._$committedValue = new Array(strings.length - 1).fill(new String());
            this.strings = strings;
        }
        else {
            this._$committedValue = nothing;
        }
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            this._sanitizer = undefined;
        }
    }
    get tagName() {
        return this.element.tagName;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    /**
     * Sets the value of this part by resolving the value from possibly multiple
     * values and static strings and committing it to the DOM.
     * If this part is single-valued, `this._strings` will be undefined, and the
     * method will be called with a single value argument. If this part is
     * multi-value, `this._strings` will be defined, and the method is called
     * with the value array of the part's owning TemplateInstance, and an offset
     * into the value array from which the values should be read.
     * This method is overloaded this way to eliminate short-lived array slices
     * of the template instance values, and allow a fast-path for single-valued
     * parts.
     *
     * @param value The part value, or an array of values for multi-valued parts
     * @param valueIndex the index to start reading values from. `undefined` for
     *   single-valued parts
     * @param noCommit causes the part to not commit its value to the DOM. Used
     *   in hydration to prime attribute parts with their first-rendered value,
     *   but not set the attribute, and in SSR to no-op the DOM operation and
     *   capture the value for serialization.
     *
     * @internal
     */
    _$setValue(value, directiveParent = this, valueIndex, noCommit) {
        const strings = this.strings;
        // Whether any of the values has changed, for dirty-checking
        let change = false;
        if (strings === undefined) {
            // Single-value binding case
            value = resolveDirective(this, value, directiveParent, 0);
            change =
                !isPrimitive(value) ||
                    (value !== this._$committedValue && value !== noChange);
            if (change) {
                this._$committedValue = value;
            }
        }
        else {
            // Interpolation case
            const values = value;
            value = strings[0];
            let i, v;
            for (i = 0; i < strings.length - 1; i++) {
                v = resolveDirective(this, values[valueIndex + i], directiveParent, i);
                if (v === noChange) {
                    // If the user-provided value is `noChange`, use the previous value
                    v = this._$committedValue[i];
                }
                change || (change = !isPrimitive(v) || v !== this._$committedValue[i]);
                if (v === nothing) {
                    value = nothing;
                }
                else if (value !== nothing) {
                    value += (v !== null && v !== void 0 ? v : '') + strings[i + 1];
                }
                // We always record each value, even if one is `nothing`, for future
                // change detection.
                this._$committedValue[i] = v;
            }
        }
        if (change && !noCommit) {
            this._commitValue(value);
        }
    }
    /** @internal */
    _commitValue(value) {
        if (value === nothing) {
            wrap(this.element).removeAttribute(this.name);
        }
        else {
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                if (this._sanitizer === undefined) {
                    this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'attribute');
                }
                value = this._sanitizer(value !== null && value !== void 0 ? value : '');
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit attribute',
                element: this.element,
                name: this.name,
                value,
                options: this.options,
            });
            wrap(this.element).setAttribute(this.name, (value !== null && value !== void 0 ? value : ''));
        }
    }
}
class PropertyPart extends AttributePart {
    constructor() {
        super(...arguments);
        this.type = PROPERTY_PART;
    }
    /** @internal */
    _commitValue(value) {
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            if (this._sanitizer === undefined) {
                this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'property');
            }
            value = this._sanitizer(value);
        }
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit property',
            element: this.element,
            name: this.name,
            value,
            options: this.options,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.element[this.name] = value === nothing ? undefined : value;
    }
}
// Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.
const emptyStringForBooleanAttribute = trustedTypes
    ? trustedTypes.emptyScript
    : '';
class BooleanAttributePart extends AttributePart {
    constructor() {
        super(...arguments);
        this.type = BOOLEAN_ATTRIBUTE_PART;
    }
    /** @internal */
    _commitValue(value) {
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit boolean attribute',
            element: this.element,
            name: this.name,
            value: !!(value && value !== nothing),
            options: this.options,
        });
        if (value && value !== nothing) {
            wrap(this.element).setAttribute(this.name, emptyStringForBooleanAttribute);
        }
        else {
            wrap(this.element).removeAttribute(this.name);
        }
    }
}
class EventPart extends AttributePart {
    constructor(element, name, strings, parent, options) {
        super(element, name, strings, parent, options);
        this.type = EVENT_PART;
        if (DEV_MODE && this.strings !== undefined) {
            throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with ` +
                'invalid content. Event listeners in templates must have exactly ' +
                'one expression and no surrounding text.');
        }
    }
    // EventPart does not use the base _$setValue/_resolveValue implementation
    // since the dirty checking is more complex
    /** @internal */
    _$setValue(newListener, directiveParent = this) {
        var _a;
        newListener =
            (_a = resolveDirective(this, newListener, directiveParent, 0)) !== null && _a !== void 0 ? _a : nothing;
        if (newListener === noChange) {
            return;
        }
        const oldListener = this._$committedValue;
        // If the new value is nothing or any options change we have to remove the
        // part as a listener.
        const shouldRemoveListener = (newListener === nothing && oldListener !== nothing) ||
            newListener.capture !==
                oldListener.capture ||
            newListener.once !==
                oldListener.once ||
            newListener.passive !==
                oldListener.passive;
        // If the new value is not nothing and we removed the listener, we have
        // to add the part as a listener.
        const shouldAddListener = newListener !== nothing &&
            (oldListener === nothing || shouldRemoveListener);
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit event listener',
            element: this.element,
            name: this.name,
            value: newListener,
            options: this.options,
            removeListener: shouldRemoveListener,
            addListener: shouldAddListener,
            oldListener,
        });
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.name, this, oldListener);
        }
        if (shouldAddListener) {
            // Beware: IE11 and Chrome 41 don't like using the listener as the
            // options object. Figure out how to deal w/ this in IE11 - maybe
            // patch addEventListener?
            this.element.addEventListener(this.name, this, newListener);
        }
        this._$committedValue = newListener;
    }
    handleEvent(event) {
        var _a, _b;
        if (typeof this._$committedValue === 'function') {
            this._$committedValue.call((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.host) !== null && _b !== void 0 ? _b : this.element, event);
        }
        else {
            this._$committedValue.handleEvent(event);
        }
    }
}
class ElementPart {
    constructor(element, parent, options) {
        this.element = element;
        this.type = ELEMENT_PART;
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$parent = parent;
        this.options = options;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    _$setValue(value) {
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit to element binding',
            element: this.element,
            value,
            options: this.options,
        });
        resolveDirective(this, value);
    }
}
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _$LH object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-element, which re-exports all of lit-html.
 *
 * @private
 */
const _$LH = {
    // Used in lit-ssr
    _boundAttributeSuffix: boundAttributeSuffix,
    _marker: marker,
    _markerMatch: markerMatch,
    _HTML_RESULT: HTML_RESULT,
    _getTemplateHtml: getTemplateHtml,
    // Used in hydrate
    _TemplateInstance: TemplateInstance,
    _isIterable: isIterable,
    _resolveDirective: resolveDirective,
    // Used in tests and private-ssr-support
    _ChildPart: ChildPart,
    _AttributePart: AttributePart,
    _BooleanAttributePart: BooleanAttributePart,
    _EventPart: EventPart,
    _PropertyPart: PropertyPart,
    _ElementPart: ElementPart,
};
// Apply polyfills if available
const polyfillSupport = DEV_MODE
    ? window.litHtmlPolyfillSupportDevMode
    : window.litHtmlPolyfillSupport;
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport(Template, ChildPart);
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
((_d = globalThis.litHtmlVersions) !== null && _d !== void 0 ? _d : (globalThis.litHtmlVersions = [])).push('2.2.1');
if (DEV_MODE && globalThis.litHtmlVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. ` +
        `Loading multiple versions is not recommended.`);
}
//# sourceMappingURL=lit-html.js.map

/***/ }),

/***/ "./node_modules/lit/decorators.js":
/*!****************************************!*\
  !*** ./node_modules/lit/decorators.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customElement": () => (/* reexport safe */ _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__.customElement),
/* harmony export */   "eventOptions": () => (/* reexport safe */ _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__.eventOptions),
/* harmony export */   "property": () => (/* reexport safe */ _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property),
/* harmony export */   "query": () => (/* reexport safe */ _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__.query),
/* harmony export */   "queryAll": () => (/* reexport safe */ _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__.queryAll),
/* harmony export */   "queryAssignedElements": () => (/* reexport safe */ _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__.queryAssignedElements),
/* harmony export */   "queryAssignedNodes": () => (/* reexport safe */ _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__.queryAssignedNodes),
/* harmony export */   "queryAsync": () => (/* reexport safe */ _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__.queryAsync),
/* harmony export */   "state": () => (/* reexport safe */ _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__.state)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element/decorators/custom-element.js */ "./node_modules/@lit/reactive-element/development/decorators/custom-element.js");
/* harmony import */ var _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lit/reactive-element/decorators/property.js */ "./node_modules/@lit/reactive-element/development/decorators/property.js");
/* harmony import */ var _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lit/reactive-element/decorators/state.js */ "./node_modules/@lit/reactive-element/development/decorators/state.js");
/* harmony import */ var _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lit/reactive-element/decorators/event-options.js */ "./node_modules/@lit/reactive-element/development/decorators/event-options.js");
/* harmony import */ var _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lit/reactive-element/decorators/query.js */ "./node_modules/@lit/reactive-element/development/decorators/query.js");
/* harmony import */ var _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-all.js */ "./node_modules/@lit/reactive-element/development/decorators/query-all.js");
/* harmony import */ var _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-async.js */ "./node_modules/@lit/reactive-element/development/decorators/query-async.js");
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-elements.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js");
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-nodes.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js");

//# sourceMappingURL=decorators.js.map


/***/ }),

/***/ "./node_modules/lit/directives/if-defined.js":
/*!***************************************************!*\
  !*** ./node_modules/lit/directives/if-defined.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ifDefined": () => (/* reexport safe */ lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_0__.ifDefined)
/* harmony export */ });
/* harmony import */ var lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/if-defined.js */ "./node_modules/lit-html/development/directives/if-defined.js");

//# sourceMappingURL=if-defined.js.map


/***/ }),

/***/ "./node_modules/lit/index.js":
/*!***********************************!*\
  !*** ./node_modules/lit/index.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.CSSResult),
/* harmony export */   "INTERNAL": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.INTERNAL),
/* harmony export */   "LitElement": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.LitElement),
/* harmony export */   "ReactiveElement": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.ReactiveElement),
/* harmony export */   "UpdatingElement": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.UpdatingElement),
/* harmony export */   "_$LE": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LE),
/* harmony export */   "_$LH": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LH),
/* harmony export */   "adoptStyles": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.adoptStyles),
/* harmony export */   "css": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.css),
/* harmony export */   "defaultConverter": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.defaultConverter),
/* harmony export */   "getCompatibleStyle": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.getCompatibleStyle),
/* harmony export */   "html": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.html),
/* harmony export */   "noChange": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.noChange),
/* harmony export */   "notEqual": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.notEqual),
/* harmony export */   "nothing": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.nothing),
/* harmony export */   "render": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.render),
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.supportsAdoptingStyleSheets),
/* harmony export */   "svg": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.svg),
/* harmony export */   "unsafeCSS": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element/lit-element.js */ "./node_modules/lit-element/development/lit-element.js");

//# sourceMappingURL=index.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/button */ "./src/components/button.ts");
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/checkbox */ "./src/components/checkbox.ts");
/* harmony import */ var _components_sdpi_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sdpi-item */ "./src/components/sdpi-item.ts");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/select */ "./src/components/select.ts");
/* harmony import */ var _components_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/textarea */ "./src/components/textarea.ts");
/* harmony import */ var _components_textfield__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/textfield */ "./src/components/textfield.ts");
/* harmony import */ var _stream_deck_connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stream-deck/connect */ "./src/stream-deck/connect.ts");
/* harmony import */ var _styles_document__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/document */ "./src/styles/document.ts");









})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtCQUErQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZUFBZTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxLQUFLO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5QkFBeUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsS0FBSyw2QkFBNkIsVUFBVTtBQUMzSCxvQ0FBb0MsaUNBQWlDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsK0RBQWtCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwrREFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixRQUFRLGdGQUFnRjtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixRQUFRLG1GQUFtRjtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RixNQUFNO0FBQy9GLDRDQUE0QyxlQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixnQkFBZ0I7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSwyRUFBMkUsZ0JBQWdCO0FB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Q0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxTEFBcUw7QUFDckw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGlCQUFpQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGdCQUFnQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrQkFBK0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxJQUFJO0FBQ2hGLCtFQUErRSxLQUFLO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxlQUFlO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxzQ0FBc0M7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxvQ0FBb0M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHNDQUFzQztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTSxTQUFTLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLCtCQUErQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQkFBa0IsZUFBZSxLQUFLO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2NkM4aUI7QUFDOWlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDRCtDO0FBQy9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEdUY7QUFDdkY7Ozs7Ozs7VUNEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0w2QjtBQUNFO0FBQ0M7QUFDSDtBQUNFO0FBQ0M7QUFDRDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvbXBvbmVudHMvY2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb21wb25lbnRzL3NkcGktaXRlbS50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvbXBvbmVudHMvdGV4dGZpZWxkLnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvY29udHJvbGxlcnMvY2hpbGQtbm9kZXMtY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvbnRyb2xsZXJzL3N0b3JlLWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb3JlL2V2ZW50cy50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvcmUvcHJvbWlzZXMudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb3JlL3RpbWVvdXQudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb3JlL3V0aWxzLnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvbWl4aW5zL2luZGV4LnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvbWl4aW5zL2lucHV0LnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvbWl4aW5zL3BlcnNpc3RlZC50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL3N0cmVhbS1kZWNrL2Nvbm5lY3QudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9zdHJlYW0tZGVjay9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL3N0cmVhbS1kZWNrL3N0cmVhbS1kZWNrLWNsaWVudC50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL3N0eWxlcy9kb2N1bWVudC50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL3N0eWxlcy9ob3N0LnRzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2Nzcy10YWcuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9iYXNlLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvY3VzdG9tLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9ldmVudC1vcHRpb25zLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hbGwuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3NpZ25lZC1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9zZHBpLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzc2lnbmVkLW5vZGVzLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvcXVlcnktYXN5bmMuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9xdWVyeS5qcyIsIndlYnBhY2s6Ly9zZHBpLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL3N0YXRlLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L3JlYWN0aXZlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9saXQtZWxlbWVudC9kZXZlbG9wbWVudC9saXQtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zZHBpLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2RpcmVjdGl2ZXMvaWYtZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly9zZHBpLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2xpdC1odG1sLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvbGl0L2RlY29yYXRvcnMuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9saXQvZGlyZWN0aXZlcy9pZi1kZWZpbmVkLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvbGl0L2luZGV4LmpzIiwid2VicGFjazovL3NkcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2RwaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2RwaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NkcGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4uL21peGlucyc7XHJcbmltcG9ydCB7IGhvc3RTdHlsZSB9IGZyb20gJy4uL3N0eWxlcy9ob3N0JztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdzZHBpLWJ1dHRvbicpXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBJbnB1dDx0eXBlb2YgTGl0RWxlbWVudCwgc3RyaW5nPihMaXRFbGVtZW50KSB7XHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAuLi5zdXBlci5zdHlsZXMsXHJcbiAgICAgICAgICAgIGhvc3RTdHlsZSxcclxuICAgICAgICAgICAgY3NzYFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aW5kb3ctYmctY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5Njk2OTY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc3BhY2VyKSAqIDIpIHZhcigtLXNwYWNlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0NjQ2O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b246bm90KDpkaXNhYmxlZCk6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aW5kb3ctYmctY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzY0NjQ2NDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk2OTY5NjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b246ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVySW5wdXQoXHJcbiAgICAgICAgICAgIGh0bWxgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIC5kaXNhYmxlZD0ke3RoaXMuZGlzYWJsZWR9IC52YWx1ZT0ke3RoaXMudmFsdWUgfHwgJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XHJcbiAgICAgICAgJ3NkcGktYnV0dG9uJzogQnV0dG9uO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNzcywgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xyXG5cclxuaW1wb3J0IHsgU3RvcmVDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvc3RvcmUtY29udHJvbGxlcic7XHJcbmltcG9ydCB7IElucHV0LCBQZXJzaXN0ZWQgfSBmcm9tICcuLi9taXhpbnMnO1xyXG5pbXBvcnQgeyBob3N0U3R5bGUgfSBmcm9tICcuLi9zdHlsZXMvaG9zdCc7XHJcblxyXG5AY3VzdG9tRWxlbWVudCgnc2RwaS1jaGVja2JveCcpXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveCBleHRlbmRzIFBlcnNpc3RlZChJbnB1dDx0eXBlb2YgTGl0RWxlbWVudCwgYm9vbGVhbj4oTGl0RWxlbWVudCkpIHtcclxuICAgIHByaXZhdGUgX3N0b3JlID0gbmV3IFN0b3JlQ29udHJvbGxlcih0aGlzKTtcclxuXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAuLi5zdXBlci5zdHlsZXMsXHJcbiAgICAgICAgICAgIGhvc3RTdHlsZSxcclxuICAgICAgICAgICAgY3NzYFxyXG4gICAgICAgICAgICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIC0tY2hlY2tib3gtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogdmFyKC0tc3BhY2VyKSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jaGVja21hcmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IHZhcigtLWNoZWNrYm94LXNpemUpIHZhcigtLWNoZWNrYm94LXNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdmFyKC0tY2hlY2tib3gtc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLWNoZWNrYm94LXNpemUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCB2YXIoLS1zcGFjZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0Om5vdCg6ZGlzYWJsZWQpIH4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0OmRpc2FibGVkIH4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzdmIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTAnIHZpZXdCb3g9JzAgMCAxMiAxMCclM0UlM0Nwb2x5Z29uIGZpbGw9JyUyM0ZGRicgcG9pbnRzPSc3LjIgNy41IDcuMiAtMS4zIDguNyAtMS4zIDguNiA5LjEgMi43IDguNyAyLjcgNy4yJyB0cmFuc2Zvcm09J3JvdGF0ZSgzNyA1LjcxOCAzLjg5NiknLyUzRSUzQy9zdmclM0UlMEFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG9wdGlvbmFsIHRleHQgdG8gYmUgc2hvd24gbmV4dCB0byB0aGUgY2hlY2stYm94LlxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgcHVibGljIHRleHQ/OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMudGV4dCA/IGh0bWxgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+JHt0aGlzLnRleHR9PC9zcGFuPmAgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcklucHV0KFxyXG4gICAgICAgICAgICBodG1sYFxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC5jaGVja2VkPSR7dGhpcy52YWx1ZSB8fCBmYWxzZX0gLmRpc2FibGVkPSR7dGhpcy5kaXNhYmxlZH0gQGNoYW5nZT0keyhldjogSFRNTElucHV0RXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHRoaXMuX3N0b3JlLnNhdmUoZXYudGFyZ2V0LmNoZWNrZWQpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCIgcm9sZT1cImNoZWNrYm94XCIgYXJpYS1jaGVja2VkPSR7dGhpcy52YWx1ZSB8fCBmYWxzZX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICR7dGV4dH1cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcclxuICAgICAgICAnc2RwaS1jaGVja2JveCc6IENoZWNrYm94O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNzcywgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xyXG5cclxuaW1wb3J0IHsgaG9zdFN0eWxlIH0gZnJvbSAnLi4vc3R5bGVzL2hvc3QnO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ3NkcGktaXRlbScpXHJcbmV4cG9ydCBjbGFzcyBTZHBpSXRlbSBleHRlbmRzIExpdEVsZW1lbnQge1xyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlcyA9IFtcclxuICAgICAgICBob3N0U3R5bGUsXHJcbiAgICAgICAgY3NzYFxyXG4gICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMjJweDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5NXB4IDFmcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIGxhYmVsLlxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgcHVibGljIGxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYWJlbCA/IGh0bWxgPGxhYmVsPiR7dGhpcy5sYWJlbH06PC9sYWJlbD5gIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gaHRtbGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBncmlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj4ke2xhYmVsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj48c2xvdD48L3Nsb3Q+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xyXG4gICAgICAgICdzZHBpLWl0ZW0nOiBTZHBpSXRlbTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjc3MsIGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcclxuXHJcbmltcG9ydCB7IENoaWxkTm9kZXNDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvY2hpbGQtbm9kZXMtY29udHJvbGxlcic7XHJcbmltcG9ydCB7IFN0b3JlQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3N0b3JlLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBJbnB1dCwgUGVyc2lzdGVkIH0gZnJvbSAnLi4vbWl4aW5zJztcclxuaW1wb3J0IHsgaG9zdFN0eWxlIH0gZnJvbSAnLi4vc3R5bGVzL2hvc3QnO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ3NkcGktc2VsZWN0JylcclxuZXhwb3J0IGNsYXNzIFNlbGVjdCBleHRlbmRzIFBlcnNpc3RlZChJbnB1dDx0eXBlb2YgTGl0RWxlbWVudCwgc3RyaW5nPihMaXRFbGVtZW50KSkge1xyXG4gICAgcHJpdmF0ZSBfY2hpbGROb2RlcyA9IG5ldyBDaGlsZE5vZGVzQ29udHJvbGxlcih0aGlzKTtcclxuICAgIHByaXZhdGUgX3N0b3JlID0gbmV3IFN0b3JlQ29udHJvbGxlcih0aGlzKTtcclxuXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAuLi5zdXBlci5zdHlsZXMsXHJcbiAgICAgICAgICAgIGhvc3RTdHlsZSxcclxuICAgICAgICAgICAgY3NzYFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1iZy1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1zcGFjZXIpICsgMXB4KSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNlbGVjdDpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvcHRpb25hbCBwbGFjZWhvbGRlciB0ZXh0OyBhZGRlZCBhcyB0aGUgZmlyc3QgaXRlbSB3aXRoaW4gdGhlIHNlbGVjdCwgYXMgYSBkaXNhYmxlIG9wdGlvbiwgYW5kIHNlbGVjdGVkIGJ5IGRlZmF1bHQuXHJcbiAgICAgKi9cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwdWJsaWMgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcklucHV0KFxyXG4gICAgICAgICAgICBodG1sYFxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCAuZGlzYWJsZWQ9JHt0aGlzLmRpc2FibGVkfSAudmFsdWU9JHt0aGlzLnZhbHVlIHx8ICcnfSBAY2hhbmdlPSR7KGV2OiBIVE1MSW5wdXRFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHRoaXMuX3N0b3JlLnNhdmUoZXYudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIC5oaWRkZW49JHshdGhpcy5wbGFjZWhvbGRlciB8fCB0aGlzLnZhbHVlICE9PSB1bmRlZmluZWR9PiR7dGhpcy5wbGFjZWhvbGRlcn08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAke3RoaXMucmVuZGVyQ2hpbGROb2RlcygpfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgb3B0aW9uIGdyb3VwcyBhbmQgb3B0aW9ucyBhc3NvY2lhdGVkIHdpdGggdGhlIGBfY2hpbGROb2Rlc0NvbnRyb2xsZXIuY2hpbGROb2Rlc2AuXHJcbiAgICAgKiBAcmV0dXJucyB7dW5rbm93bn0gVGhlIEhUTUwgdGVtcGxhdGUgdGhhdCBjb250YWlucyB0aGUgb3B0aW9ucy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZW5kZXJDaGlsZE5vZGVzKCk6IHVua25vd24ge1xyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXBPcHRpb25zID0gKGl0ZW06IE5vZGUpOiB1bmtub3duID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChpdGVtLm5vZGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdPUFRHUk9VUCc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgPG9wdGdyb3VwIC5sYWJlbD0keyg8SFRNTE9wdEdyb3VwRWxlbWVudD5pdGVtKS5sYWJlbH0+JHtBcnJheS5mcm9tKGl0ZW0uY2hpbGROb2RlcykubWFwKG1hcE9wdGlvbnMpfTwvb3B0Z3JvdXA+YDtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ09QVElPTic6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgPG9wdGlvbiAuZGlzYWJsZWQ9JHsoPEhUTUxPcHRpb25FbGVtZW50Pml0ZW0pLmRpc2FibGVkfSAudmFsdWU9JHsoPEhUTUxPcHRpb25FbGVtZW50Pml0ZW0pLnRleHR9PiR7KDxIVE1MT3B0aW9uRWxlbWVudD5pdGVtKS5sYWJlbH08L29wdGlvbj5gO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGh0bWxgJHt0aGlzLl9jaGlsZE5vZGVzLmNoaWxkTm9kZXMubWFwKG1hcE9wdGlvbnMpfWA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xyXG4gICAgICAgICdzZHBpLXNlbGVjdCc6IFNlbGVjdDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjc3MsIGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcclxuaW1wb3J0IHsgaWZEZWZpbmVkIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvaWYtZGVmaW5lZC5qcyc7XHJcblxyXG5pbXBvcnQgeyBTdG9yZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy9zdG9yZS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgSW5wdXQsIFBlcnNpc3RlZCB9IGZyb20gJy4uL21peGlucyc7XHJcbmltcG9ydCB7IGhvc3RTdHlsZSB9IGZyb20gJy4uL3N0eWxlcy9ob3N0JztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdzZHBpLXRleHRhcmVhJylcclxuZXhwb3J0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgUGVyc2lzdGVkKElucHV0PHR5cGVvZiBMaXRFbGVtZW50LCBzdHJpbmc+KExpdEVsZW1lbnQpKSB7XHJcbiAgICBwcml2YXRlIF9zdG9yZSA9IG5ldyBTdG9yZUNvbnRyb2xsZXIodGhpcyk7XHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzdHlsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgLi4uc3VwZXIuc3R5bGVzLFxyXG4gICAgICAgICAgICBob3N0U3R5bGUsXHJcbiAgICAgICAgICAgIGNzc2BcclxuICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1iZy1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1zcGFjZXIpICsgM3B4KSB2YXIoLS1zcGFjZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYTpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5sZW5ndGgge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbWF4aW11bSBsZW5ndGggdGhlIHRleHQgdmFsdWUgY2FuIGJlLlxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGF0dHJpYnV0ZTogJ21heGxlbmd0aCcsXHJcbiAgICAgICAgdHlwZTogTnVtYmVyXHJcbiAgICB9KVxyXG4gICAgcHVibGljIG1heExlbmd0aD86IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgdGhlIHJvd3MgcHJvcGVydHkgb2YgdGhlIHRleHQgYXJlYS5cclxuICAgICAqL1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXHJcbiAgICBwdWJsaWMgcm93cyA9IDM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2hvdyB0aGUgbGVuZ3RoIG9mIHRoZSB0ZXh0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGF0dHJpYnV0ZTogJ3Nob3dsZW5ndGgnLFxyXG4gICAgICAgIHR5cGU6IEJvb2xlYW5cclxuICAgIH0pXHJcbiAgICBwdWJsaWMgc2hvd0xlbmd0aCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJJbnB1dChodG1sYFxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICBtYXhsZW5ndGg9JHtpZkRlZmluZWQodGhpcy5tYXhMZW5ndGgpfVxyXG4gICAgICAgICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIC5pZD0ke3RoaXMuaW5wdXRJZH1cclxuICAgICAgICAgICAgICAgIC5yb3dzPSR7dGhpcy5yb3dzfVxyXG4gICAgICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy52YWx1ZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgIEBpbnB1dD0keyhldjogSFRNTElucHV0RXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHRoaXMuX3N0b3JlLnNhdmUoZXYudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICR7dGhpcy5nZXRMZW5ndGhMYWJlbCgpfVxyXG4gICAgICAgIGApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbGFiZWwgdGhhdCBkZW5vdGVzIHRoZSBsZW5ndGggb2YgdGhlIHRleHQgYXJlYS5cclxuICAgICAqIEByZXR1cm5zIHt1bmtub3dufSBUaGUgdGVtcGxhdGUgdXNlZCB0byByZW5kZXIgdGhlIGxlbmd0aCBvZiB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0TGVuZ3RoTGFiZWwoKTogdW5rbm93biB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0xlbmd0aCB8fCB0aGlzLm1heExlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXhMZW5ndGhMYWJlbCA9IHRoaXMubWF4TGVuZ3RoID8gaHRtbGAvJHt0aGlzLm1heExlbmd0aH1gIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gaHRtbGA8bGFiZWwgY2xhc3M9XCJsZW5ndGhcIiBmb3I9JHt0aGlzLmlucHV0SWR9PiR7dGhpcy52YWx1ZT8ubGVuZ3RofSR7bWF4TGVuZ3RoTGFiZWx9PC9sYWJlbD5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XHJcbiAgICAgICAgJ3NkcGktdGV4dGFyZWEnOiBUZXh0YXJlYTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjc3MsIGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcclxuXHJcbmltcG9ydCB7IFN0b3JlQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3N0b3JlLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBJbnB1dCwgUGVyc2lzdGVkIH0gZnJvbSAnLi4vbWl4aW5zJztcclxuaW1wb3J0IHsgaG9zdFN0eWxlIH0gZnJvbSAnLi4vc3R5bGVzL2hvc3QnO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ3NkcGktdGV4dGZpZWxkJylcclxuZXhwb3J0IGNsYXNzIFRleHRmaWVsZCBleHRlbmRzIFBlcnNpc3RlZChJbnB1dDx0eXBlb2YgTGl0RWxlbWVudCwgc3RyaW5nPihMaXRFbGVtZW50KSkge1xyXG4gICAgcHJpdmF0ZSBfc3RvcmUgPSBuZXcgU3RvcmVDb250cm9sbGVyKHRoaXMpO1xyXG5cclxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIC4uLnN1cGVyLnN0eWxlcyxcclxuICAgICAgICAgICAgaG9zdFN0eWxlLFxyXG4gICAgICAgICAgICBjc3NgXHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtYmctY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc3BhY2VyKSArIDNweCkgdmFyKC0tc3BhY2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dDpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0OnJlcXVpcmVkIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5OCUgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6cmVxdWlyZWQ6dmFsaWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSTVJaUJvWldsbmFIUTlJamtpSUhacFpYZENiM2c5SWpBZ01DQTVJRGtpUGp4d2IyeDVaMjl1SUdacGJHdzlJaU5FT0VRNFJEZ2lJSEJ2YVc1MGN6MGlOUzR5SURFZ05pNHlJREVnTmk0eUlEY2dNeTR5SURjZ015NHlJRFlnTlM0eUlEWWlJSFJ5WVc1elptOXliVDBpY205MFlYUmxLRFF3SURRdU5qYzNJRFFwSWk4K1BDOXpkbWMrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dDpyZXF1aXJlZDppbnZhbGlkIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0k1SWlCb1pXbG5hSFE5SWpraUlIWnBaWGRDYjNnOUlqQWdNQ0E1SURraVBnb2dJQ0FnUEhCaGRHZ2dabWxzYkQwaUkwUTRSRGhFT0NJZ1pEMGlUVFF1TlN3d0lFTTJMams0TlRJNE1UTTNMQzAwTGpVMk5UTTROemd5WlMweE5pQTVMREl1TURFME56RTROak1nT1N3MExqVWdRemtzTmk0NU9EVXlPREV6TnlBMkxqazROVEk0TVRNM0xEa2dOQzQxTERrZ1F6SXVNREUwTnpFNE5qTXNPU0F6TGpBME16VTVNVGc0WlMweE5pdzJMams0TlRJNE1UTTNJREFzTkM0MUlFTXRNeTR3TkRNMU9URTRPR1V0TVRZc01pNHdNVFEzTVRnMk15QXlMakF4TkRjeE9EWXpMRFF1TlRZMU16ZzNPREpsTFRFMklEUXVOU3d3SUZvZ1RUUXNNU0JNTkN3MklFdzFMRFlnVERVc01TQk1OQ3d4SUZvZ1RUUXVOU3c0SUVNMExqYzNOakUwTWpNM0xEZ2dOU3czTGpjM05qRTBNak0zSURVc055NDFJRU0xTERjdU1qSXpPRFUzTmpNZ05DNDNOell4TkRJek55dzNJRFF1TlN3M0lFTTBMakl5TXpnMU56WXpMRGNnTkN3M0xqSXlNemcxTnpZeklEUXNOeTQxSUVNMExEY3VOemMyTVRReU16Y2dOQzR5TWpNNE5UYzJNeXc0SURRdU5TdzRJRm9pTHo0S0lDQThMM04yWno0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgb3B0aW9uYWwgcGF0dGVybiB0byBiZSBhcHBsaWVkIHdoZW4gdmFsaWRhdGluZyB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwdWJsaWMgcGF0dGVybiA9ICcnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG9wdGlvbmFsIHBsYWNlaG9sZGVyIHRleHQgdG8gYmUgc2hvd24gd2l0aGluIHRoZSBpbnB1dC5cclxuICAgICAqL1xyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHB1YmxpYyBwbGFjZWhvbGRlciA9ICcnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzZXR0aW5nIGlzIHJlcXVpcmVkLlxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHByb3RlY3RlZCByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVySW5wdXQoaHRtbGBcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgLnBhdHRlcm49JHt0aGlzLnBhdHRlcm59XHJcbiAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXI9JHt0aGlzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkPSR7dGhpcy5yZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMudmFsdWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBAaW5wdXQ9JHsoZXY6IEhUTUxJbnB1dEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB0aGlzLl9zdG9yZS5zYXZlKGV2LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgYCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xyXG4gICAgICAgICdzZHBpLXRleHRmaWVsZCc6IFRleHRmaWVsZDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdGl2ZUNvbnRyb2xsZXIsIFJlYWN0aXZlQ29udHJvbGxlckhvc3QgfSBmcm9tICdsaXQnO1xyXG5cclxudHlwZSBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0Tm9kZSA9IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgJiBOb2RlO1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGEgY29udHJvbGxlciB0aGF0IG9ic2VydmVzIHRoZSBjaGlsZCBub2RlcyBvZiB0aGUgaG9zdCwgYW5kIGV4cG9zZXMgdGhlbSB2aWEgYGNoaWxkTm9kZXNgLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENoaWxkTm9kZXNDb250cm9sbGVyIGltcGxlbWVudHMgUmVhY3RpdmVDb250cm9sbGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgYSBuZXcgY2hpbGQgbm9kZSBjb250cm9sbGVyIGNhcGFibGUgb2Ygb2JzZXJ2aW5nIHRoZSBjaGlsZCBub2RlcyBvZiB0aGUgaG9zdCwgZXhwb3NlZCB2aWEgYGNoaWxkTm9kZXNgLlxyXG4gICAgICogQHBhcmFtIGhvc3QgVGhlIGhvc3Qgbm9kZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaG9zdDogUmVhY3RpdmVDb250cm9sbGVySG9zdE5vZGUpIHtcclxuICAgICAgICAodGhpcy5faG9zdCA9IGhvc3QpLmFkZENvbnRyb2xsZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLmhhbmRsZU11dGF0aW9uLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY2hpbGQgbm9kZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBob3N0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2hpbGROb2RlczogTm9kZVtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgaG9zdCB0aGUgY29udHJvbGxlciBpcyBjb25uZWN0ZWQgdG8uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2hvc3Q6IFJlYWN0aXZlQ29udHJvbGxlckhvc3ROb2RlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG9ic2VydmVyIHJlc3BvbnNpYmxlIGZvciBtb25pdG9yaW5nIHRoZSBjaGlsZCBub2RlcyBvZiB0aGUgaG9zdC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICBwdWJsaWMgaG9zdENvbm5lY3RlZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX2hvc3QsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgcHVibGljIGhvc3REaXNjb25uZWN0ZWQ/KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEludm9rZWQgd2hlbiBhIG11dGF0aW9uIG9jY3VycyB3aXRoaW4gdGhlIGBfb2JzZXJ2ZXJgLCBpLmUuIGEgbm9kZSB3YXMgYWRkZWQgb3IgcmVtb3ZlZCBmcm9tIHRoZSBgX2hvc3RgLlxyXG4gICAgICogQHBhcmFtIG11dGF0aW9ucyBUaGUgbXV0YXRpb25zIHRoYXQgb2NjdXJyZWQuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlTXV0YXRpb24obXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdKTogdm9pZCB7XHJcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goKG11dGF0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEFkZCBuZXcgbm9kZXMuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYWRkZWQgb2YgbXV0YXRpb24uYWRkZWROb2Rlcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goYWRkZWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgb2xkIG5vZGVzLlxyXG4gICAgICAgICAgICBtdXRhdGlvbi5yZW1vdmVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihub2RlKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2hvc3QucmVxdWVzdFVwZGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0aXZlQ29udHJvbGxlciwgUmVhY3RpdmVDb250cm9sbGVySG9zdCB9IGZyb20gJ2xpdCc7XHJcblxyXG5pbXBvcnQgeyB1c2VTZXR0aW5ncyB9IGZyb20gJy4uL3N0cmVhbS1kZWNrL3NldHRpbmdzJztcclxuXHJcbnR5cGUgUmVhY3RpdmVTdG9yZUNvbnRyb2xsZXJIb3N0PFQ+ID0gUmVhY3RpdmVDb250cm9sbGVySG9zdCAmIHtcclxuICAgIGlzR2xvYmFsOiBib29sZWFuO1xyXG4gICAgcGF0aD86IHN0cmluZztcclxuICAgIHZhbHVlPzogVDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhIGNvbnRyb2xsZXIgdGhhdCBpcyBjYXBhYmxlIG9mIHBlcnNpc3RpbmcgYW5kIHJldHJpZXZpbmcgZGF0YSB0byBhbmQgZnJvbSB0aGUgU3RyZWFtIERlY2tzIHNldHRpbmdzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0b3JlQ29udHJvbGxlcjxUPiBpbXBsZW1lbnRzIFJlYWN0aXZlQ29udHJvbGxlciB7XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIGEgbmV3IGNoaWxkIG5vZGUgY29udHJvbGxlciBjYXBhYmxlIG9mIG9ic2VydmluZyB0aGUgY2hpbGQgbm9kZXMgb2YgdGhlIGhvc3QsIGV4cG9zZWQgdmlhIGBjaGlsZE5vZGVzYC5cclxuICAgICAqIEBwYXJhbSBob3N0IFRoZSBob3N0IG5vZGUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGhvc3Q6IFJlYWN0aXZlU3RvcmVDb250cm9sbGVySG9zdDxUPikge1xyXG4gICAgICAgICh0aGlzLl9ob3N0ID0gaG9zdCkuYWRkQ29udHJvbGxlcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBob3N0IHRoZSBjb250cm9sbGVyIGlzIGNvbm5lY3RlZCB0by5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaG9zdDogUmVhY3RpdmVTdG9yZUNvbnRyb2xsZXJIb3N0PFQ+O1xyXG5cclxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgcHVibGljIGhvc3RDb25uZWN0ZWQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hvc3QucGF0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zYXZlID0gdXNlU2V0dGluZ3M8VD4odGhpcy5faG9zdC5wYXRoLCB0aGlzLl9ob3N0LmlzR2xvYmFsLCAodmFsdWUpID0+ICh0aGlzLl9ob3N0LnZhbHVlID0gdmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlcyB0aGUgYHZhbHVlYCB0byB0aGUgU3RyZWFtIERlY2sgc2V0dGluZ3MuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHNhdmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzYXZlKHZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5faG9zdC52YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fc2F2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zYXZlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJzaXN0cyB0aGUgYHZhbHVlYCB0byB0aGUgU3RyZWFtIERlY2sgc2V0dGluZ3MuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHBlcnNpc3QuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3NhdmU/OiAodmFsdWU6IFQpID0+IHZvaWQ7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFByb3ZpZGVzIGFuIGV2ZW50IGRpc3BhdGNoZXIgd2hlcmVieSBoYW5kbGVycyBjYW4gc3Vic2NyaWJlIHRvIGV2ZW50cyB0aGF0IGFyZSBsYXRlciBkaXNwYXRjaGVkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEV2ZW50TWFuYWdlcjxUPiBpbXBsZW1lbnRzIElFdmVudERpc3BhdGNoZXI8VD4sIElFdmVudFN1YnNjcmliZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVyczogSUV2ZW50SGFuZGxlcjxUPltdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwYXRjaGVzIHRoZSBldmVudCBmb3IgYWxsIGhhbmRsZXJzLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgZWFjaCBoYW5kbGVyIHdpdGguXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwYXRjaChhcmdzOiBUKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIHRoaXMuaGFuZGxlcnMpIHtcclxuICAgICAgICAgICAgaGFuZGxlcihhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBoYW5kbGVyIHRvIHRoZSBldmVudC5cclxuICAgICAqIEBwYXJhbSB7SUV2ZW50SGFuZGxlcjxUPn0gaGFuZGxlciBUaGUgaGFuZGxlciB0byBhZGQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdWJzY3JpYmUoaGFuZGxlcjogSUV2ZW50SGFuZGxlcjxUPik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVuc3Vic2NyaWJlcyB0aGUgaGFuZGxlciBmcm9tIHRoZSBldmVudC5cclxuICAgICAqIEBwYXJhbSB7SUV2ZW50SGFuZGxlcjxUPn0gaGFuZGxlciBUaGUgaGFuZGxlciB0byByZW1vdmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1bnN1YnNjcmliZShoYW5kbGVyOiBJRXZlbnRIYW5kbGVyPFQ+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IHRoaXMuaGFuZGxlcnMuZmlsdGVyKChoKSA9PiBoICE9PSBoYW5kbGVyKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGV2ZW50IHN1YnNjcmliZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudFN1YnNjcmliZXI8VD4ge1xyXG4gICAgc3Vic2NyaWJlKGhhbmRsZXI6IElFdmVudEhhbmRsZXI8VD4pOiB2b2lkO1xyXG4gICAgdW5zdWJzY3JpYmUoaGFuZGxlcjogSUV2ZW50SGFuZGxlcjxUPik6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCBkaXNwYXRjaGVyXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudERpc3BhdGNoZXI8VD4ge1xyXG4gICAgZGlzcGF0Y2goYXJnczogVCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCBoYW5kbGVyLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnRIYW5kbGVyPFQ+IHtcclxuICAgIChhcmdzOiBUKTogdm9pZDtcclxufVxyXG4iLCIvKipcclxuICogUHJvdmlkZXMgYSBwcm9taXNlIGNvbXBsZXRpb24gc291cmNlIHdoZXJlYnkgYSBwcm9taXNlIGNhbiBiZSByZXNvbHZlZCBhdCBhIGxhdGVyIHN0YWdlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFByb21pc2VDb21wbGV0aW9uU291cmNlPFQ+IHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3Byb21pc2U6IFByb21pc2U8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiBhIHByb21pc2UgY29tcGxldGlvbiBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIHRoaXMucmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVqZWN0PzogKHJlYXNvbj86IHVua25vd24pID0+IHZvaWQ7XHJcbiAgICBwcml2YXRlIHJlc29sdmU/OiAodmFsdWU6IFQgfCBQcm9taXNlTGlrZTxUPikgPT4gdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHByb21pc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcHJvbWlzZSgpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHJlc3VsdCBvZiB0aGUgaW5uZXIgcHJvbWlzZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRSZXN1bHQodmFsdWU6IFQgfCBQcm9taXNlTGlrZTxUPik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnJlc29sdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWplY3RzIHRoZSBpbm5lciBwcm9taXNlLlxyXG4gICAgICogQHBhcmFtIHJlYXNvbiBUaGUgcmVhc29uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0RXhjZXB0aW9uKHJlYXNvbj86IHVua25vd24pOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5yZWplY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3QocmVhc29uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEludm9rZXMgdGhlIGBjYWxsYmFja2AgYWZ0ZXIgdGhlIGdpdmVuIGB0aW1lb3V0YDsgY2FsbGluZyB0aGUgcmV0dXJuaW5nIGZ1bmN0aW9uIHdpbGwgcmVzZXQgdGhlIHRpbWVvdXQsIHRodXMgYWxsb3dpbmcgZm9yIGEgZGVsYXkgaW4gdGhlIGludm9jYXRpb24gb2YgdGhlIGBjYWxsYmFja2AuXHJcbiAqIEBwYXJhbSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIHRpbWVvdXQgZXhwaXJlcy5cclxuICogQHBhcmFtIHRpbWVvdXQgVGhlIHRpbWVvdXQgZHVyYXRpb24uXHJcbiAqIEByZXR1cm5zIEEgZnVuY3Rpb24gdGhhdCBhbGxvd3MgZm9yIHRoZSB0aW1lb3V0IHRvIGJlIHJlLXNldC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxheShjYWxsYmFjazogKGRhdGE6IHVua25vd24gfCB1bmRlZmluZWQpID0+IHZvaWQsIHRpbWVvdXQ6IG51bWJlcik6IChkYXRhOiB1bmtub3duIHwgdW5kZWZpbmVkKSA9PiB2b2lkIHtcclxuICAgIGxldCBoYW5kbGU6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIHJldHVybiAoZGF0YTogdW5rbm93biB8IHVuZGVmaW5lZCwgLi4uYXJnczogdW5rbm93bltdKSA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XHJcbiAgICAgICAgaGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjayhkYXRhKSwgdGltZW91dCwgYXJncyk7XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IENTU1Jlc3VsdEFycmF5LCBDU1NSZXN1bHRHcm91cCwgQ1NTUmVzdWx0T3JOYXRpdmUgfSBmcm9tICdsaXQnO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgYENTU1Jlc3VsdEdyb3VwYCB0byBhbiBhcnJheS5cclxuICogQHBhcmFtIHN0eWxlcyBUaGUgc3R5bGVzIHRvIGNvbnZlcnQuXHJcbiAqIEByZXR1cm5zIFRoZSBhcnJheSBvZiBgQ1NTUmVzdWx0T3JOYXRpdmVgIG9yIGBDU1NSZXN1bHRBcnJheWAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXNBcnJheShzdHlsZXM/OiBDU1NSZXN1bHRHcm91cCk6IChDU1NSZXN1bHRPck5hdGl2ZSB8IENTU1Jlc3VsdEFycmF5KVtdIHtcclxuICAgIGlmIChzdHlsZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZXMpKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5zdHlsZXNdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbc3R5bGVzXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhICd1bmlxdWUnIGlkZW50aWZpZXIuXHJcbiAqIEByZXR1cm5zIFRoZSB1bmlxdWUgaWRlbnRpZmllci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVVUlEKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBjaHI0ID0gKCkgPT4gTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoLTQpO1xyXG4gICAgcmV0dXJuIGNocjQoKSArIGNocjQoKSArICctJyArIGNocjQoKSArICctJyArIGNocjQoKSArICctJyArIGNocjQoKSArICctJyArIGNocjQoKSArIGNocjQoKSArIGNocjQoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldHMgdGhlIHZhbHVlIGF0IHRoZSBzcGVjaWZpZWQgYHBhdGhgIGZyb20gdGhlIGBzb3VyY2VgIG9iamVjdC5cclxuICogQHBhcmFtIHBhdGggVGhlIHBhdGggdG8gdGhlIHByb3BlcnR5IHRvIGdldC5cclxuICogQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCB0aGF0IGlzIGJlaW5nIHJlYWQgZnJvbS5cclxuICogQHJldHVybnMgVGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eS5cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXQocGF0aDogc3RyaW5nLCBzb3VyY2U6IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCBwcm9wczogc3RyaW5nW10gPSBBcnJheS5pc0FycmF5KHBhdGgpID8gcGF0aCA6IHBhdGguc3BsaXQoJy4nKTtcclxuICAgIHJldHVybiBwcm9wcy5yZWR1Y2UoKG9iaiwgcHJvcCkgPT4gb2JqICYmIG9ialtwcm9wXSwgc291cmNlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIHNwZWNpZmllZCBgdmFsdWVgIG9uIHRoZSBgdGFyZ2V0YCBvYmplY3QgYXQgdGhlIGRlc2lyZWQgcHJvcGVydHkgYHBhdGhgLlxyXG4gKiBAcGFyYW0gcGF0aCBUaGUgcGF0aCB0byB0aGUgcHJvcGVydHkgdG8gc2V0LlxyXG4gKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IHRoYXQgaXMgYmVpbmcgd3JpdHRlbiB0by5cclxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byB3cml0ZS5cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXQocGF0aDogc3RyaW5nLCB0YXJnZXQ6IGFueSwgdmFsdWU6IHVua25vd24pOiB2b2lkIHtcclxuICAgIGNvbnN0IHBhcnRzID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgcGFydHMucmVkdWNlKChvYmosIHByb3AsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gaSA9PT0gcGFydHMubGVuZ3RoIC0gMSA/IChvYmpbcHJvcF0gPSB2YWx1ZSkgOiBvYmpbcHJvcF0gfHwgKG9ialtwcm9wXSA9IHt9KTtcclxuICAgIH0sIHRhcmdldCk7XHJcbn1cclxuIiwiZXhwb3J0IHsgSW5wdXQgfSBmcm9tICcuL2lucHV0JztcclxuZXhwb3J0IHsgUGVyc2lzdGVkIH0gZnJvbSAnLi9wZXJzaXN0ZWQnO1xyXG4iLCJpbXBvcnQgeyBjc3MsIENTU1Jlc3VsdEdyb3VwLCBodG1sLCBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcblxyXG5pbXBvcnQgeyBhc0FycmF5LCBnZXRVVUlEIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XHJcbmltcG9ydCB7IGhvc3RTdHlsZSB9IGZyb20gJy4uL3N0eWxlcy9ob3N0JztcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhIG1peGluIHRoYXQgcmVwcmVzZW50cyB0aGUgdHlwaWNhbCBwcm9wZXJ0aWVzIGZvdW5kIG9uIGFuIGlucHV0LlxyXG4gKiBAcGFyYW0gc3VwZXJDbGFzcyBUaGUgc3VwZXIgY2xhc3MgdGhhdCB0aGlzIG1peGluIHdpbGwgZXh0ZW5kLlxyXG4gKiBAcmV0dXJucyBUaGUgbWl4aW4gYXMgYSBjbGFzcyB0aGF0IGV4dGVuZHMgYHN1cGVyQ2xhc3NgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IElucHV0ID0gPFRCYXNlIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudD4gJiB7IHN0eWxlcz86IENTU1Jlc3VsdEdyb3VwIH0sIFRWYWx1ZT4oc3VwZXJDbGFzczogVEJhc2UpID0+IHtcclxuICAgIGNsYXNzIElucHV0IGV4dGVuZHMgc3VwZXJDbGFzcyB7XHJcbiAgICAgICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgYXNBcnJheShzdXBlci5zdHlsZXMpLFxyXG4gICAgICAgICAgICAgICAgaG9zdFN0eWxlLFxyXG4gICAgICAgICAgICAgICAgY3NzYFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbixcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBCb3ggbW9kZWwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEJhY2tncm91bmQgYW5kIHR5cG9ncmFwaHkgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlucHV0LWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyBvciBzZXRzIHRoZSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGlucHV0IGlzIGRpc2FibGVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcclxuICAgICAgICBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyBvciBzZXRzIHRoZSBsYWJlbC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBAcHJvcGVydHkoKVxyXG4gICAgICAgIHB1YmxpYyBsYWJlbD86IHN0cmluZztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyBvciBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBmYWxzZSB9KVxyXG4gICAgICAgIHB1YmxpYyB2YWx1ZT86IFRWYWx1ZTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGlucHV0IGlkZW50aWZpZXIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGlucHV0SWQgPSBnZXRVVUlEKCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlbmRlcnMgdGhlIGlucHV0LCBhbmQgcmV0dXJucyB0aGUgSFRNTCB0ZW1wbGF0ZS5cclxuICAgICAgICAgKiBAcGFyYW0gaW5wdXQgVGhlIGlucHV0IHRvIHJlbmRlci5cclxuICAgICAgICAgKiBAcmV0dXJucyBUaGUgdGVtcGxhdGUgdGhhdCBjb250YWlucyB0aGUgaW5wdXQsIGFuZCBob3cgaXQgc2hvdWxkIGJlIHJlbmRlcmVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZW5kZXJJbnB1dChpbnB1dDogdW5rbm93bik6IHVua25vd24ge1xyXG4gICAgICAgICAgICByZXR1cm4gaHRtbGA8c2RwaS1pdGVtIC5sYWJlbD0ke3RoaXMubGFiZWx9PiR7aW5wdXR9PC9zZHBpLWl0ZW0+YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIElucHV0O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgYSBtaXhpbiB0aGF0IGNvbnRhaW5zIGluZm9ybWF0aW9uIHJlbGF0aW5nIHRvIHBlcnNpc3RpbmcgZGF0YSB3aXRoaW4gdGhlIFN0cmVhbSBEZWNrIHNldHRpbmdzLlxyXG4gKiBAcGFyYW0gc3VwZXJDbGFzcyBUaGUgc3VwZXIgY2xhc3MgdGhhdCB0aGlzIG1peGluIHdpbGwgZXh0ZW5kLlxyXG4gKiBAcmV0dXJucyBUaGUgbWl4aW4gYXMgYSBjbGFzcyB0aGF0IGV4dGVuZHMgYHN1cGVyQ2xhc3NgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBlcnNpc3RlZCA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcclxuICAgIGNsYXNzIFBlcnNpc3RlZCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHNldHRpbmcgd2lsbCBiZSBwZXJzaXN0ZWQgYWdhaW5zdCB0aGUgZ2xvYmFsIHNldHRpbmdzLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2dsb2JhbCcsXHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW5cclxuICAgICAgICB9KVxyXG4gICAgICAgIHB1YmxpYyBpc0dsb2JhbCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgcHJvcGVydHkga2V5IG9mIHdoaWNoIHRoZSB2YWx1ZSBpcyBwZXJzaXN0ZWQgYWdhaW5zdCBpbiB0aGUgc2V0dGluZ3MsIGUuZy4gJ25hbWUnIHdvdWxkIHJlc3VsdCBpbiB0aGUgc2V0dGluZ3MgYmVpbmcgeyAnbmFtZSc6IHZhbHVlLCAuLi4gfS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBAcHJvcGVydHkoKVxyXG4gICAgICAgIHB1YmxpYyBwYXRoPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQZXJzaXN0ZWQ7XHJcbn07XHJcbiIsImltcG9ydCBzdHJlYW1EZWNrQ2xpZW50IGZyb20gJy4vc3RyZWFtLWRlY2stY2xpZW50JztcclxuXHJcbi8qIFRoZSBTdHJlYW0gRGVjayBjbGllbnQgKi9cclxud2luZG93LnN0cmVhbURlY2tDbGllbnQgPSBzdHJlYW1EZWNrQ2xpZW50O1xyXG5cclxuY29uc3QgZXhpc3RpbmcgPSB3aW5kb3cuY29ubmVjdEVsZ2F0b1N0cmVhbURlY2tTb2NrZXQ7XHJcblxyXG4vKipcclxuICogQ2FsbGVkIGJ5IHRoZSBTdHJlYW0gRGVjayB0byBlbmFibGUgcmVnaXN0cmF0aW9uIG9mIHRoZSBwcm9wZXJ0eSBpbnNwZWN0b3IuXHJcbiAqIEBwYXJhbSBpblBvcnQgVGhlIHBvcnQgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgdGhlIFdlYlNvY2tldC5cclxuICogQHBhcmFtIGluUHJvcGVydHlJbnNwZWN0b3JVVUlEIEEgdW5pcXVlIGlkZW50aWZpZXIgc3RyaW5nIHRvIHJlZ2lzdGVyIFByb3BlcnR5IEluc3BlY3RvciB3aXRoIFN0cmVhbSBEZWNrIHNvZnR3YXJlLlxyXG4gKiBAcGFyYW0gaW5SZWdpc3RlckV2ZW50IFRoZSBldmVudCB0eXBlIHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gcmVnaXN0ZXIgdGhlIHBsdWdpbiBvbmNlIHRoZSBXZWJTb2NrZXQgaXMgb3BlbmVkLiBGb3IgUHJvcGVydHkgSW5zcGVjdG9yIHRoaXMgaXMgXCJyZWdpc3RlclByb3BlcnR5SW5zcGVjdG9yXCIuXHJcbiAqIEBwYXJhbSBpbkluZm8gQSBqc29uIG9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhcHBsaWNhdGlvbi5cclxuICogQHBhcmFtIGluQWN0aW9uSW5mbyBBIGpzb24gb2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFjdGlvbi5cclxuICovXHJcbndpbmRvdy5jb25uZWN0RWxnYXRvU3RyZWFtRGVja1NvY2tldCA9IGZ1bmN0aW9uIChpblBvcnQ6IHN0cmluZywgaW5Qcm9wZXJ0eUluc3BlY3RvclVVSUQ6IHN0cmluZywgaW5SZWdpc3RlckV2ZW50OiBzdHJpbmcsIGluSW5mbzogc3RyaW5nLCBpbkFjdGlvbkluZm86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgZXhpc3RpbmcoaW5Qb3J0LCBpblByb3BlcnR5SW5zcGVjdG9yVVVJRCwgaW5SZWdpc3RlckV2ZW50LCBpbkluZm8sIGluQWN0aW9uSW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RyZWFtRGVja0NsaWVudC5jb25uZWN0KGluUG9ydCwgaW5Qcm9wZXJ0eUluc3BlY3RvclVVSUQsIGluUmVnaXN0ZXJFdmVudCwgaW5JbmZvLCBpbkFjdGlvbkluZm8pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBFdmVudCB9IGZyb20gJ3N0cmVhbS1kZWNrJztcclxuXHJcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAnLi4vY29yZS90aW1lb3V0JztcclxuaW1wb3J0IHsgZ2V0LCBzZXQgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcclxuaW1wb3J0IHN0cmVhbURlY2tDbGllbnQgZnJvbSAnLi9zdHJlYW0tZGVjay1jbGllbnQnO1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGEgc3RvcmUgZm9yIG1hbmFnaW5nIHNldHRpbmdzIHN0b3JlZCB3aXRoaW4gdGhlIFN0cmVhbSBEZWNrLlxyXG4gKi9cclxuY2xhc3MgU2V0dGluZ3Mge1xyXG4gICAgcHJpdmF0ZSBfZ2xvYmFsU2V0dGluZ3M/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcclxuICAgIHByaXZhdGUgX3NldHRpbmdzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgc2V0dGluZ3MgdXNlZCB0byBwZXJzaXN0IGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN0cmVhbURlY2tDbGllbnQuZGlkUmVjZWl2ZUdsb2JhbFNldHRpbmdzLnN1YnNjcmliZSgoZGF0YTogRXZlbnQ8J2RpZFJlY2VpdmVHbG9iYWxTZXR0aW5ncyc+KSA9PiAodGhpcy5fZ2xvYmFsU2V0dGluZ3MgPSBkYXRhLnBheWxvYWQuc2V0dGluZ3MpKTtcclxuICAgICAgICBzdHJlYW1EZWNrQ2xpZW50LmRpZFJlY2VpdmVTZXR0aW5ncy5zdWJzY3JpYmUoKGRhdGE6IEV2ZW50PCdkaWRSZWNlaXZlU2V0dGluZ3MnPikgPT4gKHRoaXMuX3NldHRpbmdzID0gZGF0YS5wYXlsb2FkLnNldHRpbmdzKSk7XHJcblxyXG4gICAgICAgIHN0cmVhbURlY2tDbGllbnQuZ2V0R2xvYmFsU2V0dGluZ3MoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyB0aGUgdGhlIGdpdmVuIGtleSBhcyBhIHNldHRpbmcgdG8gYmUgcGVyc2lzdGVkIGluIHRoZSBTdHJlYW0gRGVjazsgd2hlbiB0aGUgc2V0dGluZ3MgY2hhbmdlLCB0aGUgY2FsbGJhY2sgaXMgaW52b2tlZC4gVGhpcyByZXR1cm5zIGEgZnVuY3Rpb24gY2FwYWJsZSBvZiBwZXJzaXN0aW5nIHRoZSB2YWx1ZSBhZ2FpbnN0IHRoZSBrZXkuXHJcbiAgICAgKiBAcGFyYW0ga2V5IFRoZSBzZXR0aW5ncyBrZXkuXHJcbiAgICAgKiBAcGFyYW0gaXNHbG9iYWwgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzZXR0aW5nIGlzIGEgZ2xvYmFsIHNldHRpbmcuXHJcbiAgICAgKiBAcGFyYW0gb25DaGFuZ2UgVGhlIGNhbGxiYWNrIGludm9rZWQgd2hlbiB0aGUgc2V0dGluZyBjaGFuZ2VzLlxyXG4gICAgICogQHJldHVybnMgQSBkZWxlZ2F0ZSB0aGF0IGFsbG93cyBmb3IgdXBkYXRpbmcgdGhlIHNldHRpbmcgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3RlcjxUPihrZXk6IHN0cmluZywgaXNHbG9iYWw6IGJvb2xlYW4sIG9uQ2hhbmdlOiAodmFsdWU6IFQpID0+IHZvaWQsIHRpbWVvdXQ6IG51bWJlciB8IG51bGwgPSAyNTApOiAodmFsdWU/OiB1bmtub3duKSA9PiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nQ2hhbmdlSGFuZGxlciA9IChkYXRhOiBFdmVudDwnZGlkUmVjZWl2ZVNldHRpbmdzJyB8ICdkaWRSZWNlaXZlR2xvYmFsU2V0dGluZ3MnPik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnBheWxvYWQgJiYgZGF0YS5wYXlsb2FkLnNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShnZXQoa2V5LCBkYXRhLnBheWxvYWQuc2V0dGluZ3MpIHx8ICcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byBjaGFuZ2VzLlxyXG4gICAgICAgIGlmIChpc0dsb2JhbCkge1xyXG4gICAgICAgICAgICBzdHJlYW1EZWNrQ2xpZW50LmRpZFJlY2VpdmVHbG9iYWxTZXR0aW5ncy5zdWJzY3JpYmUoc2V0dGluZ0NoYW5nZUhhbmRsZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0cmVhbURlY2tDbGllbnQuZGlkUmVjZWl2ZVNldHRpbmdzLnN1YnNjcmliZShzZXR0aW5nQ2hhbmdlSGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZXR1cm4gdGhlIHNldHRlciB0aGF0IGFsbG93cyBmb3IgdGhlIHZhbHVlIHRvIGJlIHNhdmVkIHRvIHRoZSBzdG9yZS5cclxuICAgICAgICBpZiAodGltZW91dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVsYXkoKHZhbHVlKSA9PiBzZXR0aW5ncy5zZXQoa2V5LCBpc0dsb2JhbCwgdmFsdWUpLCB0aW1lb3V0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlPzogdW5rbm93bikgPT4gc2V0dGluZ3Muc2V0KGtleSwgaXNHbG9iYWwsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSwgZm9yIHRoZSBzcGVjaWZpZWQga2V5LCB0byB0aGUgcGVyc2lzdGVudCBzZXR0aW5ncy5cclxuICAgICAqIEBwYXJhbSBrZXkgVGhlIHNldHRpbmdzIGtleS5cclxuICAgICAqIEBwYXJhbSBpc0dsb2JhbCBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNldHRpbmcgaXMgYSBnbG9iYWwgc2V0dGluZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgc2V0dGluZ3MgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2V0KGtleTogc3RyaW5nLCBpc0dsb2JhbDogYm9vbGVhbiwgdmFsdWU/OiB1bmtub3duKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGlzR2xvYmFsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9nbG9iYWxTZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgc2V0KGtleSwgdGhpcy5fZ2xvYmFsU2V0dGluZ3MsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdHJlYW1EZWNrQ2xpZW50LnNldEdsb2JhbFNldHRpbmdzKHRoaXMuX2dsb2JhbFNldHRpbmdzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgIHNldChrZXksIHRoaXMuX3NldHRpbmdzLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RyZWFtRGVja0NsaWVudC5zZXRTZXR0aW5ncyh0aGlzLl9zZXR0aW5ncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzZXR0aW5ncyA9IG5ldyBTZXR0aW5ncygpO1xyXG5leHBvcnQgY29uc3QgdXNlU2V0dGluZ3MgPSBzZXR0aW5ncy5yZWdpc3RlcjtcclxuIiwiaW1wb3J0IHsgQWN0aW9uSW5mbywgRXZlbnQsIE1lc3NhZ2UsIE1lc3NhZ2VSZWNlaXZlZCwgTWVzc2FnZVNlbnQsIFJlZ2lzdHJhdGlvbkluZm8gfSBmcm9tICdzdHJlYW0tZGVjayc7XHJcblxyXG5pbXBvcnQgeyBFdmVudE1hbmFnZXIgfSBmcm9tICcuLi9jb3JlL2V2ZW50cyc7XHJcbmltcG9ydCB7IFByb21pc2VDb21wbGV0aW9uU291cmNlIH0gZnJvbSAnLi4vY29yZS9wcm9taXNlcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb25uZWN0aW9uSW5mbyB7XHJcbiAgICBhY3Rpb25JbmZvOiBBY3Rpb25JbmZvO1xyXG4gICAgaW5mbzogUmVnaXN0cmF0aW9uSW5mbztcclxuICAgIHByb3BlcnR5SW5zcGVjdG9yVVVJRDogc3RyaW5nO1xyXG4gICAgcmVnaXN0ZXJFdmVudDogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgYSBTdHJlYW0gRGVjayBjbGllbnQgd3JhcHBlciBmb3IgdGhlIGNvbm5lY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RyZWFtRGVja0NsaWVudCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jb25uZWN0aW9uID0gbmV3IFByb21pc2VDb21wbGV0aW9uU291cmNlPFdlYlNvY2tldD4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Nvbm5lY3Rpb25JbmZvID0gbmV3IFByb21pc2VDb21wbGV0aW9uU291cmNlPElDb25uZWN0aW9uSW5mbz4oKTtcclxuICAgIHByaXZhdGUgX3dlYlNvY2tldD86IFdlYlNvY2tldDtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZGlkUmVjZWl2ZUdsb2JhbFNldHRpbmdzID0gbmV3IEV2ZW50TWFuYWdlcjxFdmVudDwnZGlkUmVjZWl2ZUdsb2JhbFNldHRpbmdzJz4+KCk7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZGlkUmVjZWl2ZVNldHRpbmdzID0gbmV3IEV2ZW50TWFuYWdlcjxFdmVudDwnZGlkUmVjZWl2ZVNldHRpbmdzJz4+KCk7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbWVzc2FnZSA9IG5ldyBFdmVudE1hbmFnZXI8TWVzc2FnZT4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbm5lY3RzIHRvIHRoZSBTdHJlYW0gRGVjay5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0IFRoZSBwb3J0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIHRoZSBXZWJTb2NrZXQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlJbnNwZWN0b3JVVUlEIEEgdW5pcXVlIGlkZW50aWZpZXIgc3RyaW5nIHRvIHJlZ2lzdGVyIFByb3BlcnR5IEluc3BlY3RvciB3aXRoIFN0cmVhbSBEZWNrIHNvZnR3YXJlLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJlZ2lzdGVyRXZlbnQgVGhlIGV2ZW50IHR5cGUgdGhhdCBzaG91bGQgYmUgdXNlZCB0byByZWdpc3RlciB0aGUgcGx1Z2luIG9uY2UgdGhlIFdlYlNvY2tldCBpcyBvcGVuZWQuIEZvciBQcm9wZXJ0eSBJbnNwZWN0b3IgdGhpcyBpcyBcInJlZ2lzdGVyUHJvcGVydHlJbnNwZWN0b3JcIi5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbmZvIEEgSlNPTiBvYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYXBwbGljYXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uSW5mbyBBIEpTT04gb2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFjdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGNvbm5lY3QocG9ydDogc3RyaW5nLCBwcm9wZXJ0eUluc3BlY3RvclVVSUQ6IHN0cmluZywgcmVnaXN0ZXJFdmVudDogc3RyaW5nLCBpbmZvOiBzdHJpbmcsIGFjdGlvbkluZm8/OiBzdHJpbmcgfCB1bmRlZmluZWQpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAoIXRoaXMuX3dlYlNvY2tldCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25uZWN0aW9uSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbkluZm86IGFjdGlvbkluZm8gPyBKU09OLnBhcnNlKGFjdGlvbkluZm8pIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGluZm86IEpTT04ucGFyc2UoaW5mbyksXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUluc3BlY3RvclVVSUQ6IHByb3BlcnR5SW5zcGVjdG9yVVVJRCxcclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRXZlbnQ6IHJlZ2lzdGVyRXZlbnRcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25uZWN0aW9uSW5mby5hY3Rpb25JbmZvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpZFJlY2VpdmVTZXR0aW5ncy5kaXNwYXRjaChjb25uZWN0aW9uSW5mby5hY3Rpb25JbmZvKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGlvbkluZm8uc2V0UmVzdWx0KGNvbm5lY3Rpb25JbmZvKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlZ2lzdGVyIHRoZSB3ZWIgc29ja2V0LlxyXG4gICAgICAgICAgICB0aGlzLl93ZWJTb2NrZXQgPSBuZXcgV2ViU29ja2V0KGB3czovL2xvY2FsaG9zdDoke3BvcnR9YCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYlNvY2tldC5vbm9wZW4gPSB0aGlzLmhhbmRsZU9wZW4uYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fd2ViU29ja2V0Lm9ubWVzc2FnZSA9IHRoaXMuaGFuZGxlTWVzc2FnZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlcXVlc3QgdGhlIGdsb2JhbCBwZXJzaXN0ZW50IGRhdGEuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZ2xvYmFsIHNldHRpbmdzIGFzIGEgcHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEdsb2JhbFNldHRpbmdzKCk6IFByb21pc2U8RXZlbnQ8J2RpZFJlY2VpdmVHbG9iYWxTZXR0aW5ncyc+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdnZXRHbG9iYWxTZXR0aW5ncycsICdkaWRSZWNlaXZlR2xvYmFsU2V0dGluZ3MnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNhdmUgZGF0YSBzZWN1cmVseSBhbmQgZ2xvYmFsbHkgZm9yIHRoZSBwbHVnaW4uXHJcbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIuZWxnYXRvLmNvbS9kb2N1bWVudGF0aW9uL3N0cmVhbS1kZWNrL3Nkay9ldmVudHMtc2VudC8jc2V0Z2xvYmFsc2V0dGluZ3N9XHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGdsb2JhbCBzZXR0aW5ncy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEdsb2JhbFNldHRpbmdzKHZhbHVlPzogdW5rbm93bik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VuZCgnc2V0R2xvYmFsU2V0dGluZ3MnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBzZXR0aW5ncy5cclxuICAgICAqIEByZXR1cm5zIFRoZSBzZXR0aW5ncyBhcyBhIHByb21pc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTZXR0aW5ncygpOiBQcm9taXNlPEV2ZW50PCdkaWRSZWNlaXZlU2V0dGluZ3MnPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnZ2V0U2V0dGluZ3MnLCAnZGlkUmVjZWl2ZVNldHRpbmdzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlIGRhdGEgcGVyc2lzdGVudGx5IGZvciB0aGUgYWN0aW9uJ3MgaW5zdGFuY2UuXHJcbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIuZWxnYXRvLmNvbS9kb2N1bWVudGF0aW9uL3N0cmVhbS1kZWNrL3Nkay9ldmVudHMtc2VudC8jc2V0c2V0dGluZ3N9XHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHNldHRpbmdzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0U2V0dGluZ3ModmFsdWU/OiB1bmtub3duKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZW5kKCdzZXRTZXR0aW5ncycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGNvbm5lY3Rpb24gaW5mb3JtYXRpb24gdXNlZCB0byBjb25uZWN0IHRvIHRoZSBTdHJlYW0gRGVjay5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb25uZWN0aW9uIGluZm9ybWF0aW9uIGFzIGEgcHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldENvbm5lY3Rpb25JbmZvKCk6IFByb21pc2U8SUNvbm5lY3Rpb25JbmZvPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25JbmZvLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kcyBhIHJlcXVlc3QgdG8gdGhlIFN0cmVhbSBEZWNrLCBhbmQgYXdhaXRzIHRoZSBmaXJzdCBtZXNzYWdlIG1hdGNoaW5nIHRoZSBgY2FuQ2FsbGJhY2tgIHBhcmFtZXRlci5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZW5kIFRoZSBldmVudCBuYW1lLlxyXG4gICAgICogQHBhcmFtIHtUU2VuZH0gY2FuQ2FsbGJhY2sgVGhlIGRlbGVnYXRlIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIHRoZSBldmVudCBmdWxmaWxzIHRoZSBjYWxsYmFjayByZXF1aXJlbWVudHMuXHJcbiAgICAgKiBAcGFyYW0ge3Vua25vd259IHBheWxvYWQgVGhlIG9wdGlvbmFsIHBheWxvYWQuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxUU2VuZD59IFRoZSBwcm9taXNlIGNvbnRhaW5pbmcgdGhlIHJlc3VsdCBvZiB0aGUgcmVxdWVzdC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBnZXQ8VFNlbmQgZXh0ZW5kcyBNZXNzYWdlU2VudFsnZXZlbnQnXSwgVFJlY2VpdmUgZXh0ZW5kcyBNZXNzYWdlUmVjZWl2ZWRbJ2V2ZW50J10+KHNlbmQ6IFRTZW5kLCByZWNlaXZlOiBUUmVjZWl2ZSwgcGF5bG9hZD86IHVua25vd24pOiBQcm9taXNlPEV2ZW50PFRSZWNlaXZlPj4ge1xyXG4gICAgICAgIGNvbnN0IHJlc29sdmVyID0gbmV3IFByb21pc2VDb21wbGV0aW9uU291cmNlPEV2ZW50PFRSZWNlaXZlPj4oKTtcclxuXHJcbiAgICAgICAgLy8gQ29uc3RydWN0IHRoZSB0ZW1wb3JhcnkgbGlzdGVuZXIgdGhhdCBpcyByZW1vdmVkIHdoZW4gdGhlIGNhbGxiYWNrIGNhbiBiZSBmdWxpbGxlZC5cclxuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IChhcmdzOiBNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhcmdzLmV2ZW50ID09IHJlY2VpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS51bnN1YnNjcmliZShsaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlci5zZXRSZXN1bHQoPEV2ZW50PFRSZWNlaXZlPj5hcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEF3YWl0IG1lc3NhZ2UsIGFuZCBzZW5kIHRoZSByZXF1ZXN0LlxyXG4gICAgICAgIHRoaXMubWVzc2FnZS5zdWJzY3JpYmUobGlzdGVuZXIpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZChzZW5kLCBwYXlsb2FkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmVyLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kcyBhIHJlcXVlc3QgdG8gdGhlIFN0cmVhbSBEZWNrLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxyXG4gICAgICogQHBhcmFtIHt1bmtub3dufSBwYXlsb2FkIFRoZSBvcHRpb25hbCBwYXlsb2FkLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIHNlbmQ8VCBleHRlbmRzIE1lc3NhZ2VTZW50WydldmVudCddPihldmVudDogVCwgcGF5bG9hZD86IHVua25vd24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25uZWN0aW9uSW5mbyA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb25JbmZvLnByb21pc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnNlbmQoXHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbm5lY3Rpb25JbmZvLnByb3BlcnR5SW5zcGVjdG9yVVVJRCxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogY29ubmVjdGlvbkluZm8uYWN0aW9uSW5mby5hY3Rpb25cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFVuYWJsZSB0byBzZW5kIHJlcXVlc3QgJyR7ZXZlbnR9JyBhcyB0aGVyZSBpcyBubyBjb25uZWN0aW9uLmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGhlIHVuZGVybHlpbmcgd2ViIHNvY2tldCBjb25uZWN0aW9uIGJlaW5nIGVzdGFibGlzaGVkIHdpdGggdGhlIFN0cmVhbSBEZWNrLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZU9wZW4oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgY29ubmVjdGlvbkluZm8gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uSW5mby5wcm9taXNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fd2ViU29ja2V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWJTb2NrZXQuc2VuZChcclxuICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBjb25uZWN0aW9uSW5mby5yZWdpc3RlckV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dWlkOiBjb25uZWN0aW9uSW5mby5wcm9wZXJ0eUluc3BlY3RvclVVSURcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uLnNldFJlc3VsdCh0aGlzLl93ZWJTb2NrZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGlvbi5zZXRFeGNlcHRpb24oZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgcmVjZWl2aW5nIGEgbWVzc2FnZSBmcm9tIHRoZSBTdHJlYW0gRGVjay5cclxuICAgICAqIEBwYXJhbSBldiBUaGUgbWVzc2FnZSBldmVudCB0aGF0IGNvbnRhaW5zIHRoZSBkYXRhIHJlY2VpdmVkLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZU1lc3NhZ2UoZXY6IE1lc3NhZ2VFdmVudDxzdHJpbmc+KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZGF0YTogTWVzc2FnZVJlY2VpdmVkID0gSlNPTi5wYXJzZShldi5kYXRhKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChkYXRhLmV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RpZFJlY2VpdmVHbG9iYWxTZXR0aW5ncyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpZFJlY2VpdmVHbG9iYWxTZXR0aW5ncy5kaXNwYXRjaCg8RXZlbnQ8J2RpZFJlY2VpdmVHbG9iYWxTZXR0aW5ncyc+PmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdkaWRSZWNlaXZlU2V0dGluZ3MnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWRSZWNlaXZlU2V0dGluZ3MuZGlzcGF0Y2goPEV2ZW50PCdkaWRSZWNlaXZlU2V0dGluZ3MnPj5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3RyZWFtRGVja0NsaWVudCA9IG5ldyBTdHJlYW1EZWNrQ2xpZW50KCk7XHJcbmV4cG9ydCBkZWZhdWx0IHN0cmVhbURlY2tDbGllbnQ7XHJcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgYSBjb21tb24gc2V0IG9mIENTUyBzdHlsZXMgdGhhdCBhcmUgYXBwbGllZCB0byB0aGUgZG9jdW1lbnQuXHJcbiAqL1xyXG5jb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbnN0eWxlLmlubmVySFRNTCA9IGNzc2BcclxuICAgIC8qIFN0eWxlcyBhZGRlZCBieSBzZHBpIGxpYnJhcnkuICovXHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgfVxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIH1cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XHJcbiAgICB9XHJcbmAuY3NzVGV4dDtcclxuXHJcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhvc3RTdHlsZSA9IGNzc2BcclxuICAgIDpob3N0IHtcclxuICAgICAgICAvKiBCb3ggbW9kZWwgKi9cclxuICAgICAgICAtLXNwYWNlcjogNHB4O1xyXG5cclxuICAgICAgICAvKiBDb2xvcnMgKi9cclxuICAgICAgICAtLXdpbmRvdy1iZy1jb2xvcjogIzJkMmQyZDtcclxuICAgICAgICAtLWZvbnQtY29sb3I6ICM5YTlhOWE7XHJcbiAgICAgICAgLS1pbnB1dC1iZy1jb2xvcjogIzNkM2QzZDtcclxuICAgICAgICAtLWlucHV0LWZvbnQtY29sb3I6ICNkOGQ4ZDg7XHJcblxyXG4gICAgICAgIC0tc2Nyb2xsYmFyLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5cclxuICAgICAgICAvKiBUeXBvZ3JhcGh5ICovXHJcbiAgICAgICAgLS1mb250LWZhbWlseTogQXJpYWwsICdTZWdvZSBVSScsIFJvYm90bywgSGVsdmV0aWNhIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnO1xyXG4gICAgICAgIC0tZm9udC1zaXplOiA4cHQ7XHJcbiAgICB9XHJcbmA7XHJcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuLyoqXG4gKiBXaGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgYGFkb3B0ZWRTdHlsZVNoZWV0c2AuXG4gKi9cbmV4cG9ydCBjb25zdCBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgPSB3aW5kb3cuU2hhZG93Um9vdCAmJlxuICAgICh3aW5kb3cuU2hhZHlDU1MgPT09IHVuZGVmaW5lZCB8fCB3aW5kb3cuU2hhZHlDU1MubmF0aXZlU2hhZG93KSAmJlxuICAgICdhZG9wdGVkU3R5bGVTaGVldHMnIGluIERvY3VtZW50LnByb3RvdHlwZSAmJlxuICAgICdyZXBsYWNlJyBpbiBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZTtcbmNvbnN0IGNvbnN0cnVjdGlvblRva2VuID0gU3ltYm9sKCk7XG5jb25zdCBzdHlsZVNoZWV0Q2FjaGUgPSBuZXcgTWFwKCk7XG4vKipcbiAqIEEgY29udGFpbmVyIGZvciBhIHN0cmluZyBvZiBDU1MgdGV4dCwgdGhhdCBtYXkgYmUgdXNlZCB0byBjcmVhdGUgYSBDU1NTdHlsZVNoZWV0LlxuICpcbiAqIENTU1Jlc3VsdCBpcyB0aGUgcmV0dXJuIHZhbHVlIG9mIGBjc3NgLXRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFscyBhbmRcbiAqIGB1bnNhZmVDU1MoKWAuIEluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IENTU1Jlc3VsdHMgYXJlIG9ubHkgY3JlYXRlZCB2aWEgdGhlXG4gKiBgY3NzYCB0YWcgYW5kIGB1bnNhZmVDU1MoKWAsIENTU1Jlc3VsdCBjYW5ub3QgYmUgY29uc3RydWN0ZWQgZGlyZWN0bHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBDU1NSZXN1bHQge1xuICAgIGNvbnN0cnVjdG9yKGNzc1RleHQsIHNhZmVUb2tlbikge1xuICAgICAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICB0aGlzWydfJGNzc1Jlc3VsdCQnXSA9IHRydWU7XG4gICAgICAgIGlmIChzYWZlVG9rZW4gIT09IGNvbnN0cnVjdGlvblRva2VuKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NTU1Jlc3VsdCBpcyBub3QgY29uc3RydWN0YWJsZS4gVXNlIGB1bnNhZmVDU1NgIG9yIGBjc3NgIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jc3NUZXh0ID0gY3NzVGV4dDtcbiAgICB9XG4gICAgLy8gTm90ZSwgdGhpcyBpcyBhIGdldHRlciBzbyB0aGF0IGl0J3MgbGF6eS4gSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnNcbiAgICAvLyBzdHlsZXNoZWV0cyBhcmUgbm90IGNyZWF0ZWQgdW50aWwgdGhlIGZpcnN0IGVsZW1lbnQgaW5zdGFuY2UgaXMgbWFkZS5cbiAgICBnZXQgc3R5bGVTaGVldCgpIHtcbiAgICAgICAgLy8gTm90ZSwgaWYgYHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0c2AgaXMgdHJ1ZSB0aGVuIHdlIGFzc3VtZVxuICAgICAgICAvLyBDU1NTdHlsZVNoZWV0IGlzIGNvbnN0cnVjdGFibGUuXG4gICAgICAgIGxldCBzdHlsZVNoZWV0ID0gc3R5bGVTaGVldENhY2hlLmdldCh0aGlzLmNzc1RleHQpO1xuICAgICAgICBpZiAoc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzICYmIHN0eWxlU2hlZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3R5bGVTaGVldENhY2hlLnNldCh0aGlzLmNzc1RleHQsIChzdHlsZVNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKSkpO1xuICAgICAgICAgICAgc3R5bGVTaGVldC5yZXBsYWNlU3luYyh0aGlzLmNzc1RleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZVNoZWV0O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3NzVGV4dDtcbiAgICB9XG59XG5jb25zdCB0ZXh0RnJvbUNTU1Jlc3VsdCA9ICh2YWx1ZSkgPT4ge1xuICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgaWYgKHZhbHVlWydfJGNzc1Jlc3VsdCQnXSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUuY3NzVGV4dDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhbHVlIHBhc3NlZCB0byAnY3NzJyBmdW5jdGlvbiBtdXN0IGJlIGEgJ2NzcycgZnVuY3Rpb24gcmVzdWx0OiBgICtcbiAgICAgICAgICAgIGAke3ZhbHVlfS4gVXNlICd1bnNhZmVDU1MnIHRvIHBhc3Mgbm9uLWxpdGVyYWwgdmFsdWVzLCBidXQgdGFrZSBjYXJlIGAgK1xuICAgICAgICAgICAgYHRvIGVuc3VyZSBwYWdlIHNlY3VyaXR5LmApO1xuICAgIH1cbn07XG4vKipcbiAqIFdyYXAgYSB2YWx1ZSBmb3IgaW50ZXJwb2xhdGlvbiBpbiBhIHtAbGlua2NvZGUgY3NzfSB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbC5cbiAqXG4gKiBUaGlzIGlzIHVuc2FmZSBiZWNhdXNlIHVudHJ1c3RlZCBDU1MgdGV4dCBjYW4gYmUgdXNlZCB0byBwaG9uZSBob21lXG4gKiBvciBleGZpbHRyYXRlIGRhdGEgdG8gYW4gYXR0YWNrZXIgY29udHJvbGxlZCBzaXRlLiBUYWtlIGNhcmUgdG8gb25seSB1c2VcbiAqIHRoaXMgd2l0aCB0cnVzdGVkIGlucHV0LlxuICovXG5leHBvcnQgY29uc3QgdW5zYWZlQ1NTID0gKHZhbHVlKSA9PiBuZXcgQ1NTUmVzdWx0KHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSksIGNvbnN0cnVjdGlvblRva2VuKTtcbi8qKlxuICogQSB0ZW1wbGF0ZSBsaXRlcmFsIHRhZyB3aGljaCBjYW4gYmUgdXNlZCB3aXRoIExpdEVsZW1lbnQnc1xuICoge0BsaW5rY29kZSBMaXRFbGVtZW50LnN0eWxlc30gcHJvcGVydHkgdG8gc2V0IGVsZW1lbnQgc3R5bGVzLlxuICpcbiAqIEZvciBzZWN1cml0eSByZWFzb25zLCBvbmx5IGxpdGVyYWwgc3RyaW5nIHZhbHVlcyBhbmQgbnVtYmVyIG1heSBiZSB1c2VkIGluXG4gKiBlbWJlZGRlZCBleHByZXNzaW9ucy4gVG8gaW5jb3Jwb3JhdGUgbm9uLWxpdGVyYWwgdmFsdWVzIHtAbGlua2NvZGUgdW5zYWZlQ1NTfVxuICogbWF5IGJlIHVzZWQgaW5zaWRlIGFuIGV4cHJlc3Npb24uXG4gKi9cbmV4cG9ydCBjb25zdCBjc3MgPSAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiB7XG4gICAgY29uc3QgY3NzVGV4dCA9IHN0cmluZ3MubGVuZ3RoID09PSAxXG4gICAgICAgID8gc3RyaW5nc1swXVxuICAgICAgICA6IHZhbHVlcy5yZWR1Y2UoKGFjYywgdiwgaWR4KSA9PiBhY2MgKyB0ZXh0RnJvbUNTU1Jlc3VsdCh2KSArIHN0cmluZ3NbaWR4ICsgMV0sIHN0cmluZ3NbMF0pO1xuICAgIHJldHVybiBuZXcgQ1NTUmVzdWx0KGNzc1RleHQsIGNvbnN0cnVjdGlvblRva2VuKTtcbn07XG4vKipcbiAqIEFwcGxpZXMgdGhlIGdpdmVuIHN0eWxlcyB0byBhIGBzaGFkb3dSb290YC4gV2hlbiBTaGFkb3cgRE9NIGlzXG4gKiBhdmFpbGFibGUgYnV0IGBhZG9wdGVkU3R5bGVTaGVldHNgIGlzIG5vdCwgc3R5bGVzIGFyZSBhcHBlbmRlZCB0byB0aGVcbiAqIGBzaGFkb3dSb290YCB0byBbbWltaWMgc3BlYyBiZWhhdmlvcl0oaHR0cHM6Ly93aWNnLmdpdGh1Yi5pby9jb25zdHJ1Y3Qtc3R5bGVzaGVldHMvI3VzaW5nLWNvbnN0cnVjdGVkLXN0eWxlc2hlZXRzKS5cbiAqIE5vdGUsIHdoZW4gc2hpbW1pbmcgaXMgdXNlZCwgYW55IHN0eWxlcyB0aGF0IGFyZSBzdWJzZXF1ZW50bHkgcGxhY2VkIGludG9cbiAqIHRoZSBzaGFkb3dSb290IHNob3VsZCBiZSBwbGFjZWQgKmJlZm9yZSogYW55IHNoaW1tZWQgYWRvcHRlZCBzdHlsZXMuIFRoaXNcbiAqIHdpbGwgbWF0Y2ggc3BlYyBiZWhhdmlvciB0aGF0IGdpdmVzIGFkb3B0ZWQgc2hlZXRzIHByZWNlZGVuY2Ugb3ZlciBzdHlsZXMgaW5cbiAqIHNoYWRvd1Jvb3QuXG4gKi9cbmV4cG9ydCBjb25zdCBhZG9wdFN0eWxlcyA9IChyZW5kZXJSb290LCBzdHlsZXMpID0+IHtcbiAgICBpZiAoc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzKSB7XG4gICAgICAgIHJlbmRlclJvb3QuYWRvcHRlZFN0eWxlU2hlZXRzID0gc3R5bGVzLm1hcCgocykgPT4gcyBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQgPyBzIDogcy5zdHlsZVNoZWV0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKChzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgY29uc3Qgbm9uY2UgPSB3aW5kb3dbJ2xpdE5vbmNlJ107XG4gICAgICAgICAgICBpZiAobm9uY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBub25jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IHMuY3NzVGV4dDtcbiAgICAgICAgICAgIHJlbmRlclJvb3QuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgY3NzUmVzdWx0RnJvbVN0eWxlU2hlZXQgPSAoc2hlZXQpID0+IHtcbiAgICBsZXQgY3NzVGV4dCA9ICcnO1xuICAgIGZvciAoY29uc3QgcnVsZSBvZiBzaGVldC5jc3NSdWxlcykge1xuICAgICAgICBjc3NUZXh0ICs9IHJ1bGUuY3NzVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHVuc2FmZUNTUyhjc3NUZXh0KTtcbn07XG5leHBvcnQgY29uc3QgZ2V0Q29tcGF0aWJsZVN0eWxlID0gc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzXG4gICAgPyAocykgPT4gc1xuICAgIDogKHMpID0+IHMgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0ID8gY3NzUmVzdWx0RnJvbVN0eWxlU2hlZXQocykgOiBzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3NzLXRhZy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmV4cG9ydCBjb25zdCBsZWdhY3lQcm90b3R5cGVNZXRob2QgPSAoZGVzY3JpcHRvciwgcHJvdG8sIG5hbWUpID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIG5hbWUsIGRlc2NyaXB0b3IpO1xufTtcbmV4cG9ydCBjb25zdCBzdGFuZGFyZFByb3RvdHlwZU1ldGhvZCA9IChkZXNjcmlwdG9yLCBlbGVtZW50KSA9PiAoe1xuICAgIGtpbmQ6ICdtZXRob2QnLFxuICAgIHBsYWNlbWVudDogJ3Byb3RvdHlwZScsXG4gICAga2V5OiBlbGVtZW50LmtleSxcbiAgICBkZXNjcmlwdG9yLFxufSk7XG4vKipcbiAqIEhlbHBlciBmb3IgZGVjb3JhdGluZyBhIHByb3BlcnR5IHRoYXQgaXMgY29tcGF0aWJsZSB3aXRoIGJvdGggVHlwZVNjcmlwdFxuICogYW5kIEJhYmVsIGRlY29yYXRvcnMuIFRoZSBvcHRpb25hbCBgZmluaXNoZXJgIGNhbiBiZSB1c2VkIHRvIHBlcmZvcm0gd29yayBvblxuICogdGhlIGNsYXNzLiBUaGUgb3B0aW9uYWwgYGRlc2NyaXB0b3JgIHNob3VsZCByZXR1cm4gYSBQcm9wZXJ0eURlc2NyaXB0b3JcbiAqIHRvIGluc3RhbGwgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0gZmluaXNoZXIge2Z1bmN0aW9ufSBPcHRpb25hbCBmaW5pc2hlciBtZXRob2Q7IHJlY2VpdmVzIHRoZSBlbGVtZW50XG4gKiBjb25zdHJ1Y3RvciBhbmQgcHJvcGVydHkga2V5IGFzIGFyZ3VtZW50cyBhbmQgaGFzIG5vIHJldHVybiB2YWx1ZS5cbiAqIEBwYXJhbSBkZXNjcmlwdG9yIHtmdW5jdGlvbn0gT3B0aW9uYWwgZGVzY3JpcHRvciBtZXRob2Q7IHJlY2VpdmVzIHRoZVxuICogcHJvcGVydHkga2V5IGFzIGFuIGFyZ3VtZW50IGFuZCByZXR1cm5zIGEgcHJvcGVydHkgZGVzY3JpcHRvciB0byBkZWZpbmUgZm9yXG4gKiB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gKiBAcmV0dXJucyB7Q2xhc3NFbGVtZW50fHZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBkZWNvcmF0ZVByb3BlcnR5ID0gKHsgZmluaXNoZXIsIGRlc2NyaXB0b3IsIH0pID0+IChwcm90b09yRGVzY3JpcHRvciwgbmFtZVxuLy8gTm90ZSBUeXBlU2NyaXB0IHJlcXVpcmVzIHRoZSByZXR1cm4gdHlwZSB0byBiZSBgdm9pZHxhbnlgXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIC8vIFR5cGVTY3JpcHQgLyBCYWJlbCBsZWdhY3kgbW9kZVxuICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgY3RvciA9IHByb3RvT3JEZXNjcmlwdG9yXG4gICAgICAgICAgICAuY29uc3RydWN0b3I7XG4gICAgICAgIGlmIChkZXNjcmlwdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b09yRGVzY3JpcHRvciwgbmFtZSwgZGVzY3JpcHRvcihuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluaXNoZXIgPT09IG51bGwgfHwgZmluaXNoZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZpbmlzaGVyKGN0b3IsIG5hbWUpO1xuICAgICAgICAvLyBCYWJlbCBzdGFuZGFyZCBtb2RlXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBOb3RlLCB0aGUgQHByb3BlcnR5IGRlY29yYXRvciBzYXZlcyBga2V5YCBhcyBgb3JpZ2luYWxLZXlgXG4gICAgICAgIC8vIHNvIHRyeSB0byB1c2UgaXQgaGVyZS5cbiAgICAgICAgY29uc3Qga2V5ID0gXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIChfYSA9IHByb3RvT3JEZXNjcmlwdG9yLm9yaWdpbmFsS2V5KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBwcm90b09yRGVzY3JpcHRvci5rZXk7XG4gICAgICAgIGNvbnN0IGluZm8gPSBkZXNjcmlwdG9yICE9IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAga2luZDogJ21ldGhvZCcsXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiAncHJvdG90eXBlJyxcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvcjogZGVzY3JpcHRvcihwcm90b09yRGVzY3JpcHRvci5rZXkpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7IC4uLnByb3RvT3JEZXNjcmlwdG9yLCBrZXkgfTtcbiAgICAgICAgaWYgKGZpbmlzaGVyICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaW5mby5maW5pc2hlciA9IGZ1bmN0aW9uIChjdG9yKSB7XG4gICAgICAgICAgICAgICAgZmluaXNoZXIoY3Rvciwga2V5KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2UuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5jb25zdCBsZWdhY3lDdXN0b21FbGVtZW50ID0gKHRhZ05hbWUsIGNsYXp6KSA9PiB7XG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjbGF6eik7XG4gICAgLy8gQ2FzdCBhcyBhbnkgYmVjYXVzZSBUUyBkb2Vzbid0IHJlY29nbml6ZSB0aGUgcmV0dXJuIHR5cGUgYXMgYmVpbmcgYVxuICAgIC8vIHN1YnR5cGUgb2YgdGhlIGRlY29yYXRlZCBjbGFzcyB3aGVuIGNsYXp6IGlzIHR5cGVkIGFzXG4gICAgLy8gYENvbnN0cnVjdG9yPEhUTUxFbGVtZW50PmAgZm9yIHNvbWUgcmVhc29uLlxuICAgIC8vIGBDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD5gIGlzIGhlbHBmdWwgdG8gbWFrZSBzdXJlIHRoZSBkZWNvcmF0b3IgaXNcbiAgICAvLyBhcHBsaWVkIHRvIGVsZW1lbnRzIGhvd2V2ZXIuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICByZXR1cm4gY2xheno7XG59O1xuY29uc3Qgc3RhbmRhcmRDdXN0b21FbGVtZW50ID0gKHRhZ05hbWUsIGRlc2NyaXB0b3IpID0+IHtcbiAgICBjb25zdCB7IGtpbmQsIGVsZW1lbnRzIH0gPSBkZXNjcmlwdG9yO1xuICAgIHJldHVybiB7XG4gICAgICAgIGtpbmQsXG4gICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAvLyBUaGlzIGNhbGxiYWNrIGlzIGNhbGxlZCBvbmNlIHRoZSBjbGFzcyBpcyBvdGhlcndpc2UgZnVsbHkgZGVmaW5lZFxuICAgICAgICBmaW5pc2hlcihjbGF6eikge1xuICAgICAgICAgICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjbGF6eik7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG4vKipcbiAqIENsYXNzIGRlY29yYXRvciBmYWN0b3J5IHRoYXQgZGVmaW5lcyB0aGUgZGVjb3JhdGVkIGNsYXNzIGFzIGEgY3VzdG9tIGVsZW1lbnQuXG4gKlxuICogYGBganNcbiAqIEBjdXN0b21FbGVtZW50KCdteS1lbGVtZW50JylcbiAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgYDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKiBAcGFyYW0gdGFnTmFtZSBUaGUgdGFnIG5hbWUgb2YgdGhlIGN1c3RvbSBlbGVtZW50IHRvIGRlZmluZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGN1c3RvbUVsZW1lbnQgPSAodGFnTmFtZSkgPT4gKGNsYXNzT3JEZXNjcmlwdG9yKSA9PiB0eXBlb2YgY2xhc3NPckRlc2NyaXB0b3IgPT09ICdmdW5jdGlvbidcbiAgICA/IGxlZ2FjeUN1c3RvbUVsZW1lbnQodGFnTmFtZSwgY2xhc3NPckRlc2NyaXB0b3IpXG4gICAgOiBzdGFuZGFyZEN1c3RvbUVsZW1lbnQodGFnTmFtZSwgY2xhc3NPckRlc2NyaXB0b3IpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VzdG9tLWVsZW1lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5pbXBvcnQgeyBkZWNvcmF0ZVByb3BlcnR5IH0gZnJvbSAnLi9iYXNlLmpzJztcbi8qKlxuICogQWRkcyBldmVudCBsaXN0ZW5lciBvcHRpb25zIHRvIGEgbWV0aG9kIHVzZWQgYXMgYW4gZXZlbnQgbGlzdGVuZXIgaW4gYVxuICogbGl0LWh0bWwgdGVtcGxhdGUuXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgQW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGV2ZW50IGxpc3RlbmVyIG9wdGlvbnMgYXMgYWNjZXB0ZWQgYnlcbiAqIGBFdmVudFRhcmdldCNhZGRFdmVudExpc3RlbmVyYCBhbmQgYEV2ZW50VGFyZ2V0I3JlbW92ZUV2ZW50TGlzdGVuZXJgLlxuICpcbiAqIEN1cnJlbnQgYnJvd3NlcnMgc3VwcG9ydCB0aGUgYGNhcHR1cmVgLCBgcGFzc2l2ZWAsIGFuZCBgb25jZWAgb3B0aW9ucy4gU2VlOlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50VGFyZ2V0L2FkZEV2ZW50TGlzdGVuZXIjUGFyYW1ldGVyc1xuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBNeUVsZW1lbnQge1xuICogICBjbGlja2VkID0gZmFsc2U7XG4gKlxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICA8ZGl2IEBjbGljaz0ke3RoaXMuX29uQ2xpY2t9PlxuICogICAgICAgICA8YnV0dG9uPjwvYnV0dG9uPlxuICogICAgICAgPC9kaXY+XG4gKiAgICAgYDtcbiAqICAgfVxuICpcbiAqICAgQGV2ZW50T3B0aW9ucyh7Y2FwdHVyZTogdHJ1ZX0pXG4gKiAgIF9vbkNsaWNrKGUpIHtcbiAqICAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIGRlY29yYXRlUHJvcGVydHkoe1xuICAgICAgICBmaW5pc2hlcjogKGN0b3IsIG5hbWUpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3Rvci5wcm90b3R5cGVbbmFtZV0sIG9wdGlvbnMpO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZlbnQtb3B0aW9ucy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmNvbnN0IHN0YW5kYXJkUHJvcGVydHkgPSAob3B0aW9ucywgZWxlbWVudCkgPT4ge1xuICAgIC8vIFdoZW4gZGVjb3JhdGluZyBhbiBhY2Nlc3NvciwgcGFzcyBpdCB0aHJvdWdoIGFuZCBhZGQgcHJvcGVydHkgbWV0YWRhdGEuXG4gICAgLy8gTm90ZSwgdGhlIGBoYXNPd25Qcm9wZXJ0eWAgY2hlY2sgaW4gYGNyZWF0ZVByb3BlcnR5YCBlbnN1cmVzIHdlIGRvbid0XG4gICAgLy8gc3RvbXAgb3ZlciB0aGUgdXNlcidzIGFjY2Vzc29yLlxuICAgIGlmIChlbGVtZW50LmtpbmQgPT09ICdtZXRob2QnICYmXG4gICAgICAgIGVsZW1lbnQuZGVzY3JpcHRvciAmJlxuICAgICAgICAhKCd2YWx1ZScgaW4gZWxlbWVudC5kZXNjcmlwdG9yKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uZWxlbWVudCxcbiAgICAgICAgICAgIGZpbmlzaGVyKGNsYXp6KSB7XG4gICAgICAgICAgICAgICAgY2xhenouY3JlYXRlUHJvcGVydHkoZWxlbWVudC5rZXksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGNyZWF0ZVByb3BlcnR5KCkgdGFrZXMgY2FyZSBvZiBkZWZpbmluZyB0aGUgcHJvcGVydHksIGJ1dCB3ZSBzdGlsbFxuICAgICAgICAvLyBtdXN0IHJldHVybiBzb21lIGtpbmQgb2YgZGVzY3JpcHRvciwgc28gcmV0dXJuIGEgZGVzY3JpcHRvciBmb3IgYW5cbiAgICAgICAgLy8gdW51c2VkIHByb3RvdHlwZSBmaWVsZC4gVGhlIGZpbmlzaGVyIGNhbGxzIGNyZWF0ZVByb3BlcnR5KCkuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBraW5kOiAnZmllbGQnLFxuICAgICAgICAgICAga2V5OiBTeW1ib2woKSxcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ293bicsXG4gICAgICAgICAgICBkZXNjcmlwdG9yOiB7fSxcbiAgICAgICAgICAgIC8vIHN0b3JlIHRoZSBvcmlnaW5hbCBrZXkgc28gc3Vic2VxdWVudCBkZWNvcmF0b3JzIGhhdmUgYWNjZXNzIHRvIGl0LlxuICAgICAgICAgICAgb3JpZ2luYWxLZXk6IGVsZW1lbnQua2V5LFxuICAgICAgICAgICAgLy8gV2hlbiBAYmFiZWwvcGx1Z2luLXByb3Bvc2FsLWRlY29yYXRvcnMgaW1wbGVtZW50cyBpbml0aWFsaXplcnMsXG4gICAgICAgICAgICAvLyBkbyB0aGlzIGluc3RlYWQgb2YgdGhlIGluaXRpYWxpemVyIGJlbG93LiBTZWU6XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzkyNjAgZXh0cmFzOiBbXG4gICAgICAgICAgICAvLyAgIHtcbiAgICAgICAgICAgIC8vICAgICBraW5kOiAnaW5pdGlhbGl6ZXInLFxuICAgICAgICAgICAgLy8gICAgIHBsYWNlbWVudDogJ293bicsXG4gICAgICAgICAgICAvLyAgICAgaW5pdGlhbGl6ZXI6IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXIsXG4gICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgIC8vIF0sXG4gICAgICAgICAgICBpbml0aWFsaXplcigpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQuaW5pdGlhbGl6ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tlbGVtZW50LmtleV0gPSBlbGVtZW50LmluaXRpYWxpemVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpbmlzaGVyKGNsYXp6KSB7XG4gICAgICAgICAgICAgICAgY2xhenouY3JlYXRlUHJvcGVydHkoZWxlbWVudC5rZXksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG59O1xuY29uc3QgbGVnYWN5UHJvcGVydHkgPSAob3B0aW9ucywgcHJvdG8sIG5hbWUpID0+IHtcbiAgICBwcm90by5jb25zdHJ1Y3Rvci5jcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zKTtcbn07XG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHdoaWNoIGNyZWF0ZXMgYSByZWFjdGl2ZSBwcm9wZXJ0eSB0aGF0IHJlZmxlY3RzIGFcbiAqIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlIHZhbHVlLiBXaGVuIGEgZGVjb3JhdGVkIHByb3BlcnR5IGlzIHNldFxuICogdGhlIGVsZW1lbnQgd2lsbCB1cGRhdGUgYW5kIHJlbmRlci4gQSB7QGxpbmtjb2RlIFByb3BlcnR5RGVjbGFyYXRpb259IG1heVxuICogb3B0aW9uYWxseSBiZSBzdXBwbGllZCB0byBjb25maWd1cmUgcHJvcGVydHkgZmVhdHVyZXMuXG4gKlxuICogVGhpcyBkZWNvcmF0b3Igc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgcHVibGljIGZpZWxkcy4gQXMgcHVibGljIGZpZWxkcyxcbiAqIHByb3BlcnRpZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYXMgcHJpbWFyaWx5IHNldHRhYmxlIGJ5IGVsZW1lbnQgdXNlcnMsXG4gKiBlaXRoZXIgdmlhIGF0dHJpYnV0ZSBvciB0aGUgcHJvcGVydHkgaXRzZWxmLlxuICpcbiAqIEdlbmVyYWxseSwgcHJvcGVydGllcyB0aGF0IGFyZSBjaGFuZ2VkIGJ5IHRoZSBlbGVtZW50IHNob3VsZCBiZSBwcml2YXRlIG9yXG4gKiBwcm90ZWN0ZWQgZmllbGRzIGFuZCBzaG91bGQgdXNlIHRoZSB7QGxpbmtjb2RlIHN0YXRlfSBkZWNvcmF0b3IuXG4gKlxuICogSG93ZXZlciwgc29tZXRpbWVzIGVsZW1lbnQgY29kZSBkb2VzIG5lZWQgdG8gc2V0IGEgcHVibGljIHByb3BlcnR5LiBUaGlzXG4gKiBzaG91bGQgdHlwaWNhbGx5IG9ubHkgYmUgZG9uZSBpbiByZXNwb25zZSB0byB1c2VyIGludGVyYWN0aW9uLCBhbmQgYW4gZXZlbnRcbiAqIHNob3VsZCBiZSBmaXJlZCBpbmZvcm1pbmcgdGhlIHVzZXI7IGZvciBleGFtcGxlLCBhIGNoZWNrYm94IHNldHMgaXRzXG4gKiBgY2hlY2tlZGAgcHJvcGVydHkgd2hlbiBjbGlja2VkIGFuZCBmaXJlcyBhIGBjaGFuZ2VkYCBldmVudC4gTXV0YXRpbmcgcHVibGljXG4gKiBwcm9wZXJ0aWVzIHNob3VsZCB0eXBpY2FsbHkgbm90IGJlIGRvbmUgZm9yIG5vbi1wcmltaXRpdmUgKG9iamVjdCBvciBhcnJheSlcbiAqIHByb3BlcnRpZXMuIEluIG90aGVyIGNhc2VzIHdoZW4gYW4gZWxlbWVudCBuZWVkcyB0byBtYW5hZ2Ugc3RhdGUsIGEgcHJpdmF0ZVxuICogcHJvcGVydHkgZGVjb3JhdGVkIHZpYSB0aGUge0BsaW5rY29kZSBzdGF0ZX0gZGVjb3JhdG9yIHNob3VsZCBiZSB1c2VkLiBXaGVuXG4gKiBuZWVkZWQsIHN0YXRlIHByb3BlcnRpZXMgY2FuIGJlIGluaXRpYWxpemVkIHZpYSBwdWJsaWMgcHJvcGVydGllcyB0b1xuICogZmFjaWxpdGF0ZSBjb21wbGV4IGludGVyYWN0aW9ucy5cbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICogICBjbGlja2VkID0gZmFsc2U7XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqIEBFeHBvcnREZWNvcmF0ZWRJdGVtc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHkob3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgcmV0dXJuIChwcm90b09yRGVzY3JpcHRvciwgbmFtZSkgPT4gbmFtZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gbGVnYWN5UHJvcGVydHkob3B0aW9ucywgcHJvdG9PckRlc2NyaXB0b3IsIG5hbWUpXG4gICAgICAgIDogc3RhbmRhcmRQcm9wZXJ0eShvcHRpb25zLCBwcm90b09yRGVzY3JpcHRvcik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9wZXJ0eS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmltcG9ydCB7IGRlY29yYXRlUHJvcGVydHkgfSBmcm9tICcuL2Jhc2UuanMnO1xuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlclxuICogdGhhdCBleGVjdXRlcyBhIHF1ZXJ5U2VsZWN0b3JBbGwgb24gdGhlIGVsZW1lbnQncyByZW5kZXJSb290LlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvciBBIERPTVN0cmluZyBjb250YWluaW5nIG9uZSBvciBtb3JlIHNlbGVjdG9ycyB0byBtYXRjaC5cbiAqXG4gKiBTZWU6XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvcXVlcnlTZWxlY3RvckFsbFxuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBNeUVsZW1lbnQge1xuICogICBAcXVlcnlBbGwoJ2RpdicpXG4gKiAgIGRpdnM7XG4gKlxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICA8ZGl2IGlkPVwiZmlyc3RcIj48L2Rpdj5cbiAqICAgICAgIDxkaXYgaWQ9XCJzZWNvbmRcIj48L2Rpdj5cbiAqICAgICBgO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QWxsKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGRlY29yYXRlUHJvcGVydHkoe1xuICAgICAgICBkZXNjcmlwdG9yOiAoX25hbWUpID0+ICh7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9iID0gKF9hID0gdGhpcy5yZW5kZXJSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFtdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIH0pLFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYWxsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIF9hO1xuLypcbiAqIElNUE9SVEFOVDogRm9yIGNvbXBhdGliaWxpdHkgd2l0aCB0c2lja2xlIGFuZCB0aGUgQ2xvc3VyZSBKUyBjb21waWxlciwgYWxsXG4gKiBwcm9wZXJ0eSBkZWNvcmF0b3JzIChidXQgbm90IGNsYXNzIGRlY29yYXRvcnMpIGluIHRoaXMgZmlsZSB0aGF0IGhhdmVcbiAqIGFuIEBFeHBvcnREZWNvcmF0ZWRJdGVtcyBhbm5vdGF0aW9uIG11c3QgYmUgZGVmaW5lZCBhcyBhIHJlZ3VsYXIgZnVuY3Rpb24sXG4gKiBub3QgYW4gYXJyb3cgZnVuY3Rpb24uXG4gKi9cbmltcG9ydCB7IGRlY29yYXRlUHJvcGVydHkgfSBmcm9tICcuL2Jhc2UuanMnO1xuLyoqXG4gKiBBIHRpbnkgbW9kdWxlIHNjb3BlZCBwb2x5ZmlsbCBmb3IgSFRNTFNsb3RFbGVtZW50LmFzc2lnbmVkRWxlbWVudHMuXG4gKi9cbmNvbnN0IHNsb3RBc3NpZ25lZEVsZW1lbnRzID0gKChfYSA9IHdpbmRvdy5IVE1MU2xvdEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wcm90b3R5cGUuYXNzaWduZWRFbGVtZW50cykgIT0gbnVsbFxuICAgID8gKHNsb3QsIG9wdHMpID0+IHNsb3QuYXNzaWduZWRFbGVtZW50cyhvcHRzKVxuICAgIDogKHNsb3QsIG9wdHMpID0+IHNsb3RcbiAgICAgICAgLmFzc2lnbmVkTm9kZXMob3B0cylcbiAgICAgICAgLmZpbHRlcigobm9kZSkgPT4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpO1xuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlciB0aGF0XG4gKiByZXR1cm5zIHRoZSBgYXNzaWduZWRFbGVtZW50c2Agb2YgdGhlIGdpdmVuIGBzbG90YC4gUHJvdmlkZXMgYSBkZWNsYXJhdGl2ZVxuICogd2F5IHRvIHVzZVxuICogW2BIVE1MU2xvdEVsZW1lbnQuYXNzaWduZWRFbGVtZW50c2BdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MU2xvdEVsZW1lbnQvYXNzaWduZWRFbGVtZW50cykuXG4gKlxuICogQ2FuIGJlIHBhc3NlZCBhbiBvcHRpb25hbCB7QGxpbmtjb2RlIFF1ZXJ5QXNzaWduZWRFbGVtZW50c09wdGlvbnN9IG9iamVjdC5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIEBxdWVyeUFzc2lnbmVkRWxlbWVudHMoeyBzbG90OiAnbGlzdCcgfSlcbiAqICAgbGlzdEl0ZW1zITogQXJyYXk8SFRNTEVsZW1lbnQ+O1xuICogICBAcXVlcnlBc3NpZ25lZEVsZW1lbnRzKClcbiAqICAgdW5uYW1lZFNsb3RFbHMhOiBBcnJheTxIVE1MRWxlbWVudD47XG4gKlxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICA8c2xvdCBuYW1lPVwibGlzdFwiPjwvc2xvdD5cbiAqICAgICAgIDxzbG90Pjwvc2xvdD5cbiAqICAgICBgO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBOb3RlLCB0aGUgdHlwZSBvZiB0aGlzIHByb3BlcnR5IHNob3VsZCBiZSBhbm5vdGF0ZWQgYXMgYEFycmF5PEhUTUxFbGVtZW50PmAuXG4gKlxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlBc3NpZ25lZEVsZW1lbnRzKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IHNsb3QsIHNlbGVjdG9yIH0gPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCA/IG9wdGlvbnMgOiB7fTtcbiAgICByZXR1cm4gZGVjb3JhdGVQcm9wZXJ0eSh7XG4gICAgICAgIGRlc2NyaXB0b3I6IChfbmFtZSkgPT4gKHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2xvdFNlbGVjdG9yID0gYHNsb3Qke3Nsb3QgPyBgW25hbWU9JHtzbG90fV1gIDogJzpub3QoW25hbWVdKSd9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90RWwgPSAoX2EgPSB0aGlzLnJlbmRlclJvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKHNsb3RTZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBzbG90RWwgIT0gbnVsbCA/IHNsb3RBc3NpZ25lZEVsZW1lbnRzKHNsb3RFbCwgb3B0aW9ucykgOiBbXTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzLmZpbHRlcigobm9kZSkgPT4gbm9kZS5tYXRjaGVzKHNlbGVjdG9yKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50cztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LWFzc2lnbmVkLWVsZW1lbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuLypcbiAqIElNUE9SVEFOVDogRm9yIGNvbXBhdGliaWxpdHkgd2l0aCB0c2lja2xlIGFuZCB0aGUgQ2xvc3VyZSBKUyBjb21waWxlciwgYWxsXG4gKiBwcm9wZXJ0eSBkZWNvcmF0b3JzIChidXQgbm90IGNsYXNzIGRlY29yYXRvcnMpIGluIHRoaXMgZmlsZSB0aGF0IGhhdmVcbiAqIGFuIEBFeHBvcnREZWNvcmF0ZWRJdGVtcyBhbm5vdGF0aW9uIG11c3QgYmUgZGVmaW5lZCBhcyBhIHJlZ3VsYXIgZnVuY3Rpb24sXG4gKiBub3QgYW4gYXJyb3cgZnVuY3Rpb24uXG4gKi9cbmltcG9ydCB7IGRlY29yYXRlUHJvcGVydHkgfSBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IHsgcXVlcnlBc3NpZ25lZEVsZW1lbnRzIH0gZnJvbSAnLi9xdWVyeS1hc3NpZ25lZC1lbGVtZW50cy5qcyc7XG5leHBvcnQgZnVuY3Rpb24gcXVlcnlBc3NpZ25lZE5vZGVzKHNsb3RPck9wdGlvbnMsIGZsYXR0ZW4sIHNlbGVjdG9yKSB7XG4gICAgLy8gTm9ybWFsaXplIHRoZSBvdmVybG9hZGVkIGFyZ3VtZW50cy5cbiAgICBsZXQgc2xvdCA9IHNsb3RPck9wdGlvbnM7XG4gICAgbGV0IGFzc2lnbmVkTm9kZXNPcHRpb25zO1xuICAgIGlmICh0eXBlb2Ygc2xvdE9yT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgc2xvdCA9IHNsb3RPck9wdGlvbnMuc2xvdDtcbiAgICAgICAgYXNzaWduZWROb2Rlc09wdGlvbnMgPSBzbG90T3JPcHRpb25zO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXNzaWduZWROb2Rlc09wdGlvbnMgPSB7IGZsYXR0ZW4gfTtcbiAgICB9XG4gICAgLy8gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCBxdWVyeUFzc2lnbmVkTm9kZXMgd2l0aCBhIHNlbGVjdG9yIGJlaGF2ZXNcbiAgICAvLyBleGFjdGx5IGxpa2UgcXVlcnlBc3NpZ25lZEVsZW1lbnRzIHdpdGggYSBzZWxlY3Rvci5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5QXNzaWduZWRFbGVtZW50cyh7XG4gICAgICAgICAgICBzbG90OiBzbG90LFxuICAgICAgICAgICAgZmxhdHRlbixcbiAgICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRlY29yYXRlUHJvcGVydHkoe1xuICAgICAgICBkZXNjcmlwdG9yOiAoX25hbWUpID0+ICh7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90U2VsZWN0b3IgPSBgc2xvdCR7c2xvdCA/IGBbbmFtZT0ke3Nsb3R9XWAgOiAnOm5vdChbbmFtZV0pJ31gO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsb3RFbCA9IChfYSA9IHRoaXMucmVuZGVyUm9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3Ioc2xvdFNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9iID0gc2xvdEVsID09PSBudWxsIHx8IHNsb3RFbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xvdEVsLmFzc2lnbmVkTm9kZXMoYXNzaWduZWROb2Rlc09wdGlvbnMpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBbXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LWFzc2lnbmVkLW5vZGVzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuaW1wb3J0IHsgZGVjb3JhdGVQcm9wZXJ0eSB9IGZyb20gJy4vYmFzZS5qcyc7XG4vLyBOb3RlLCBpbiB0aGUgZnV0dXJlLCB3ZSBtYXkgZXh0ZW5kIHRoaXMgZGVjb3JhdG9yIHRvIHN1cHBvcnQgdGhlIHVzZSBjYXNlXG4vLyB3aGVyZSB0aGUgcXVlcmllZCBlbGVtZW50IG1heSBuZWVkIHRvIGRvIHdvcmsgdG8gYmVjb21lIHJlYWR5IHRvIGludGVyYWN0XG4vLyB3aXRoIChlLmcuIGxvYWQgc29tZSBpbXBsZW1lbnRhdGlvbiBjb2RlKS4gSWYgc28sIHdlIG1pZ2h0IGVsZWN0IHRvXG4vLyBhZGQgYSBzZWNvbmQgYXJndW1lbnQgZGVmaW5pbmcgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBydW4gdG8gbWFrZSB0aGVcbi8vIHF1ZXJpZWQgZWxlbWVudCBsb2FkZWQvdXBkYXRlZC9yZWFkeS5cbi8qKlxuICogQSBwcm9wZXJ0eSBkZWNvcmF0b3IgdGhhdCBjb252ZXJ0cyBhIGNsYXNzIHByb3BlcnR5IGludG8gYSBnZXR0ZXIgdGhhdFxuICogcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcmVzdWx0IG9mIGEgcXVlcnlTZWxlY3RvciBvbiB0aGVcbiAqIGVsZW1lbnQncyByZW5kZXJSb290IGRvbmUgYWZ0ZXIgdGhlIGVsZW1lbnQncyBgdXBkYXRlQ29tcGxldGVgIHByb21pc2VcbiAqIHJlc29sdmVzLiBXaGVuIHRoZSBxdWVyaWVkIHByb3BlcnR5IG1heSBjaGFuZ2Ugd2l0aCBlbGVtZW50IHN0YXRlLCB0aGlzXG4gKiBkZWNvcmF0b3IgY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiByZXF1aXJpbmcgdXNlcnMgdG8gYXdhaXQgdGhlXG4gKiBgdXBkYXRlQ29tcGxldGVgIGJlZm9yZSBhY2Nlc3NpbmcgdGhlIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvciBBIERPTVN0cmluZyBjb250YWluaW5nIG9uZSBvciBtb3JlIHNlbGVjdG9ycyB0byBtYXRjaC5cbiAqXG4gKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9xdWVyeVNlbGVjdG9yXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIEBxdWVyeUFzeW5jKCcjZmlyc3QnKVxuICogICBmaXJzdDtcbiAqXG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgIDxkaXYgaWQ9XCJmaXJzdFwiPjwvZGl2PlxuICogICAgICAgPGRpdiBpZD1cInNlY29uZFwiPjwvZGl2PlxuICogICAgIGA7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiAvLyBleHRlcm5hbCB1c2FnZVxuICogYXN5bmMgZG9Tb21ldGhpbmdXaXRoRmlyc3QoKSB7XG4gKiAgKGF3YWl0IGFNeUVsZW1lbnQuZmlyc3QpLmRvU29tZXRoaW5nKCk7XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QXN5bmMoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZGVjb3JhdGVQcm9wZXJ0eSh7XG4gICAgICAgIGRlc2NyaXB0b3I6IChfbmFtZSkgPT4gKHtcbiAgICAgICAgICAgIGFzeW5jIGdldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5yZW5kZXJSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeS1hc3luYy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmltcG9ydCB7IGRlY29yYXRlUHJvcGVydHkgfSBmcm9tICcuL2Jhc2UuanMnO1xuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlciB0aGF0XG4gKiBleGVjdXRlcyBhIHF1ZXJ5U2VsZWN0b3Igb24gdGhlIGVsZW1lbnQncyByZW5kZXJSb290LlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvciBBIERPTVN0cmluZyBjb250YWluaW5nIG9uZSBvciBtb3JlIHNlbGVjdG9ycyB0byBtYXRjaC5cbiAqIEBwYXJhbSBjYWNoZSBBbiBvcHRpb25hbCBib29sZWFuIHdoaWNoIHdoZW4gdHJ1ZSBwZXJmb3JtcyB0aGUgRE9NIHF1ZXJ5IG9ubHlcbiAqICAgICBvbmNlIGFuZCBjYWNoZXMgdGhlIHJlc3VsdC5cbiAqXG4gKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9xdWVyeVNlbGVjdG9yXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIEBxdWVyeSgnI2ZpcnN0JylcbiAqICAgZmlyc3Q7XG4gKlxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICA8ZGl2IGlkPVwiZmlyc3RcIj48L2Rpdj5cbiAqICAgICAgIDxkaXYgaWQ9XCJzZWNvbmRcIj48L2Rpdj5cbiAqICAgICBgO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5KHNlbGVjdG9yLCBjYWNoZSkge1xuICAgIHJldHVybiBkZWNvcmF0ZVByb3BlcnR5KHtcbiAgICAgICAgZGVzY3JpcHRvcjogKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF9iID0gKF9hID0gdGhpcy5yZW5kZXJSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IG51bGw7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoY2FjaGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSB0eXBlb2YgbmFtZSA9PT0gJ3N5bWJvbCcgPyBTeW1ib2woKSA6IGBfXyR7bmFtZX1gO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IChfYiA9IChfYSA9IHRoaXMucmVuZGVyUm9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2tleV07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnkuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG4vKlxuICogSU1QT1JUQU5UOiBGb3IgY29tcGF0aWJpbGl0eSB3aXRoIHRzaWNrbGUgYW5kIHRoZSBDbG9zdXJlIEpTIGNvbXBpbGVyLCBhbGxcbiAqIHByb3BlcnR5IGRlY29yYXRvcnMgKGJ1dCBub3QgY2xhc3MgZGVjb3JhdG9ycykgaW4gdGhpcyBmaWxlIHRoYXQgaGF2ZVxuICogYW4gQEV4cG9ydERlY29yYXRlZEl0ZW1zIGFubm90YXRpb24gbXVzdCBiZSBkZWZpbmVkIGFzIGEgcmVndWxhciBmdW5jdGlvbixcbiAqIG5vdCBhbiBhcnJvdyBmdW5jdGlvbi5cbiAqL1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICcuL3Byb3BlcnR5LmpzJztcbi8qKlxuICogRGVjbGFyZXMgYSBwcml2YXRlIG9yIHByb3RlY3RlZCByZWFjdGl2ZSBwcm9wZXJ0eSB0aGF0IHN0aWxsIHRyaWdnZXJzXG4gKiB1cGRhdGVzIHRvIHRoZSBlbGVtZW50IHdoZW4gaXQgY2hhbmdlcy4gSXQgZG9lcyBub3QgcmVmbGVjdCBmcm9tIHRoZVxuICogY29ycmVzcG9uZGluZyBhdHRyaWJ1dGUuXG4gKlxuICogUHJvcGVydGllcyBkZWNsYXJlZCB0aGlzIHdheSBtdXN0IG5vdCBiZSB1c2VkIGZyb20gSFRNTCBvciBIVE1MIHRlbXBsYXRpbmdcbiAqIHN5c3RlbXMsIHRoZXkncmUgc29sZWx5IGZvciBwcm9wZXJ0aWVzIGludGVybmFsIHRvIHRoZSBlbGVtZW50LiBUaGVzZVxuICogcHJvcGVydGllcyBtYXkgYmUgcmVuYW1lZCBieSBvcHRpbWl6YXRpb24gdG9vbHMgbGlrZSBjbG9zdXJlIGNvbXBpbGVyLlxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhdGUob3B0aW9ucykge1xuICAgIHJldHVybiBwcm9wZXJ0eSh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIHN0YXRlOiB0cnVlLFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhdGUuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2EsIF9iLCBfYztcbnZhciBfZDtcbi8qKlxuICogVXNlIHRoaXMgbW9kdWxlIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSB5b3VyIG93biBiYXNlIGNsYXNzIGV4dGVuZGluZ1xuICoge0BsaW5rIFJlYWN0aXZlRWxlbWVudH0uXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqL1xuaW1wb3J0IHsgZ2V0Q29tcGF0aWJsZVN0eWxlLCBhZG9wdFN0eWxlcywgfSBmcm9tICcuL2Nzcy10YWcuanMnO1xuZXhwb3J0ICogZnJvbSAnLi9jc3MtdGFnLmpzJztcbmNvbnN0IERFVl9NT0RFID0gdHJ1ZTtcbmxldCByZXF1ZXN0VXBkYXRlVGhlbmFibGU7XG5sZXQgaXNzdWVXYXJuaW5nO1xuY29uc3QgdHJ1c3RlZFR5cGVzID0gd2luZG93XG4gICAgLnRydXN0ZWRUeXBlcztcbi8vIFRlbXBvcmFyeSB3b3JrYXJvdW5kIGZvciBodHRwczovL2NyYnVnLmNvbS85OTMyNjhcbi8vIEN1cnJlbnRseSwgYW55IGF0dHJpYnV0ZSBzdGFydGluZyB3aXRoIFwib25cIiBpcyBjb25zaWRlcmVkIHRvIGJlIGFcbi8vIFRydXN0ZWRTY3JpcHQgc291cmNlLiBTdWNoIGJvb2xlYW4gYXR0cmlidXRlcyBtdXN0IGJlIHNldCB0byB0aGUgZXF1aXZhbGVudFxuLy8gdHJ1c3RlZCBlbXB0eVNjcmlwdCB2YWx1ZS5cbmNvbnN0IGVtcHR5U3RyaW5nRm9yQm9vbGVhbkF0dHJpYnV0ZSA9IHRydXN0ZWRUeXBlc1xuICAgID8gdHJ1c3RlZFR5cGVzLmVtcHR5U2NyaXB0XG4gICAgOiAnJztcbmNvbnN0IHBvbHlmaWxsU3VwcG9ydCA9IERFVl9NT0RFXG4gICAgPyB3aW5kb3cucmVhY3RpdmVFbGVtZW50UG9seWZpbGxTdXBwb3J0RGV2TW9kZVxuICAgIDogd2luZG93LnJlYWN0aXZlRWxlbWVudFBvbHlmaWxsU3VwcG9ydDtcbmlmIChERVZfTU9ERSkge1xuICAgIC8vIEVuc3VyZSB3YXJuaW5ncyBhcmUgaXNzdWVkIG9ubHkgMXgsIGV2ZW4gaWYgbXVsdGlwbGUgdmVyc2lvbnMgb2YgTGl0XG4gICAgLy8gYXJlIGxvYWRlZC5cbiAgICBjb25zdCBpc3N1ZWRXYXJuaW5ncyA9ICgoX2EgPSBnbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncyA9IG5ldyBTZXQoKSkpO1xuICAgIC8vIElzc3VlIGEgd2FybmluZywgaWYgd2UgaGF2ZW4ndCBhbHJlYWR5LlxuICAgIGlzc3VlV2FybmluZyA9IChjb2RlLCB3YXJuaW5nKSA9PiB7XG4gICAgICAgIHdhcm5pbmcgKz0gYCBTZWUgaHR0cHM6Ly9saXQuZGV2L21zZy8ke2NvZGV9IGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgIGlmICghaXNzdWVkV2FybmluZ3MuaGFzKHdhcm5pbmcpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4od2FybmluZyk7XG4gICAgICAgICAgICBpc3N1ZWRXYXJuaW5ncy5hZGQod2FybmluZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlzc3VlV2FybmluZygnZGV2LW1vZGUnLCBgTGl0IGlzIGluIGRldiBtb2RlLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24hYCk7XG4gICAgLy8gSXNzdWUgcG9seWZpbGwgc3VwcG9ydCB3YXJuaW5nLlxuICAgIGlmICgoKF9iID0gd2luZG93LlNoYWR5RE9NKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaW5Vc2UpICYmIHBvbHlmaWxsU3VwcG9ydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlzc3VlV2FybmluZygncG9seWZpbGwtc3VwcG9ydC1taXNzaW5nJywgYFNoYWRvdyBET00gaXMgYmVpbmcgcG9seWZpbGxlZCB2aWEgXFxgU2hhZHlET01cXGAgYnV0IGAgK1xuICAgICAgICAgICAgYHRoZSBcXGBwb2x5ZmlsbC1zdXBwb3J0XFxgIG1vZHVsZSBoYXMgbm90IGJlZW4gbG9hZGVkLmApO1xuICAgIH1cbiAgICByZXF1ZXN0VXBkYXRlVGhlbmFibGUgPSAobmFtZSkgPT4gKHtcbiAgICAgICAgdGhlbjogKG9uZnVsZmlsbGVkLCBfb25yZWplY3RlZCkgPT4ge1xuICAgICAgICAgICAgaXNzdWVXYXJuaW5nKCdyZXF1ZXN0LXVwZGF0ZS1wcm9taXNlJywgYFRoZSBcXGByZXF1ZXN0VXBkYXRlXFxgIG1ldGhvZCBzaG91bGQgbm8gbG9uZ2VyIHJldHVybiBhIFByb21pc2UgYnV0IGAgK1xuICAgICAgICAgICAgICAgIGBkb2VzIHNvIG9uIFxcYCR7bmFtZX1cXGAuIFVzZSBcXGB1cGRhdGVDb21wbGV0ZVxcYCBpbnN0ZWFkLmApO1xuICAgICAgICAgICAgaWYgKG9uZnVsZmlsbGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBvbmZ1bGZpbGxlZChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG4vKipcbiAqIFVzZWZ1bCBmb3IgdmlzdWFsaXppbmcgYW5kIGxvZ2dpbmcgaW5zaWdodHMgaW50byB3aGF0IHRoZSBMaXQgdGVtcGxhdGUgc3lzdGVtIGlzIGRvaW5nLlxuICpcbiAqIENvbXBpbGVkIG91dCBvZiBwcm9kIG1vZGUgYnVpbGRzLlxuICovXG5jb25zdCBkZWJ1Z0xvZ0V2ZW50ID0gREVWX01PREVcbiAgICA/IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBzaG91bGRFbWl0ID0gd2luZG93XG4gICAgICAgICAgICAuZW1pdExpdERlYnVnTG9nRXZlbnRzO1xuICAgICAgICBpZiAoIXNob3VsZEVtaXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2xpdC1kZWJ1ZycsIHtcbiAgICAgICAgICAgIGRldGFpbDogZXZlbnQsXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgOiB1bmRlZmluZWQ7XG4vKlxuICogV2hlbiB1c2luZyBDbG9zdXJlIENvbXBpbGVyLCBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KHByb3BlcnR5LCBvYmplY3QpIGlzXG4gKiByZXBsYWNlZCBhdCBjb21waWxlIHRpbWUgYnkgdGhlIG11bmdlZCBuYW1lIGZvciBvYmplY3RbcHJvcGVydHldLiBXZSBjYW5ub3RcbiAqIGFsaWFzIHRoaXMgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG8gdXNlIGEgc21hbGwgc2hpbSB0aGF0IGhhcyB0aGUgc2FtZVxuICogYmVoYXZpb3Igd2hlbiBub3QgY29tcGlsaW5nLlxuICovXG4vKkBfX0lOTElORV9fKi9cbmNvbnN0IEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkgPSAocHJvcCwgX29iaikgPT4gcHJvcDtcbmV4cG9ydCBjb25zdCBkZWZhdWx0Q29udmVydGVyID0ge1xuICAgIHRvQXR0cmlidXRlKHZhbHVlLCB0eXBlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPyBlbXB0eVN0cmluZ0ZvckJvb2xlYW5BdHRyaWJ1dGUgOiBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBPYmplY3Q6XG4gICAgICAgICAgICBjYXNlIEFycmF5OlxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgcGFzcyB0aGlzIHRocm91Z2hcbiAgICAgICAgICAgICAgICAvLyB0byBhbGxvdyByZW1vdmluZy9ubyBjaGFuZ2UgYmVoYXZpb3IuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gdmFsdWUgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgdHlwZSkge1xuICAgICAgICBsZXQgZnJvbVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxuICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IHZhbHVlICE9PSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICAgICAgICAgICAgZnJvbVZhbHVlID0gdmFsdWUgPT09IG51bGwgPyBudWxsIDogTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgT2JqZWN0OlxuICAgICAgICAgICAgY2FzZSBBcnJheTpcbiAgICAgICAgICAgICAgICAvLyBEbyAqbm90KiBnZW5lcmF0ZSBleGNlcHRpb24gd2hlbiBpbnZhbGlkIEpTT04gaXMgc2V0IGFzIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgLy8gZG9uJ3Qgbm9ybWFsbHkgY29tcGxhaW4gb24gYmVpbmcgbWlzLWNvbmZpZ3VyZWQuXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhzb3J2ZWxsKTogRG8gZ2VuZXJhdGUgZXhjZXB0aW9uIGluICpkZXYgbW9kZSouXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXNzZXJ0IHRvIGFkaGVyZSB0byBCYXplbCdzIFwibXVzdCB0eXBlIGFzc2VydCBKU09OIHBhcnNlXCIgcnVsZS5cbiAgICAgICAgICAgICAgICAgICAgZnJvbVZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcm9tVmFsdWU7XG4gICAgfSxcbn07XG4vKipcbiAqIENoYW5nZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIGRpZmZlcmVudCBmcm9tIGBvbGRWYWx1ZWAuXG4gKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGFzIHRoZSBkZWZhdWx0IGZvciBhIHByb3BlcnR5J3MgYGhhc0NoYW5nZWRgIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY29uc3Qgbm90RXF1YWwgPSAodmFsdWUsIG9sZCkgPT4ge1xuICAgIC8vIFRoaXMgZW5zdXJlcyAob2xkPT1OYU4sIHZhbHVlPT1OYU4pIGFsd2F5cyByZXR1cm5zIGZhbHNlXG4gICAgcmV0dXJuIG9sZCAhPT0gdmFsdWUgJiYgKG9sZCA9PT0gb2xkIHx8IHZhbHVlID09PSB2YWx1ZSk7XG59O1xuY29uc3QgZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24gPSB7XG4gICAgYXR0cmlidXRlOiB0cnVlLFxuICAgIHR5cGU6IFN0cmluZyxcbiAgICBjb252ZXJ0ZXI6IGRlZmF1bHRDb252ZXJ0ZXIsXG4gICAgcmVmbGVjdDogZmFsc2UsXG4gICAgaGFzQ2hhbmdlZDogbm90RXF1YWwsXG59O1xuLyoqXG4gKiBUaGUgQ2xvc3VyZSBKUyBDb21waWxlciBkb2Vzbid0IGN1cnJlbnRseSBoYXZlIGdvb2Qgc3VwcG9ydCBmb3Igc3RhdGljXG4gKiBwcm9wZXJ0eSBzZW1hbnRpY3Mgd2hlcmUgXCJ0aGlzXCIgaXMgZHluYW1pYyAoZS5nLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9jbG9zdXJlLWNvbXBpbGVyL2lzc3Vlcy8zMTc3IGFuZCBvdGhlcnMpIHNvIHdlIHVzZVxuICogdGhpcyBoYWNrIHRvIGJ5cGFzcyBhbnkgcmV3cml0aW5nIGJ5IHRoZSBjb21waWxlci5cbiAqL1xuY29uc3QgZmluYWxpemVkID0gJ2ZpbmFsaXplZCc7XG4vKipcbiAqIEJhc2UgZWxlbWVudCBjbGFzcyB3aGljaCBtYW5hZ2VzIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcy4gV2hlblxuICogcHJvcGVydGllcyBjaGFuZ2UsIHRoZSBgdXBkYXRlYCBtZXRob2QgaXMgYXN5bmNocm9ub3VzbHkgY2FsbGVkLiBUaGlzIG1ldGhvZFxuICogc2hvdWxkIGJlIHN1cHBsaWVkIGJ5IHN1YmNsYXNzZXJzIHRvIHJlbmRlciB1cGRhdGVzIGFzIGRlc2lyZWQuXG4gKiBAbm9Jbmhlcml0RG9jXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWFjdGl2ZUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGlmIHRoZXJlIGlzIGEgcGVuZGluZyB1cGRhdGUgYXMgYSByZXN1bHQgb2YgY2FsbGluZyBgcmVxdWVzdFVwZGF0ZSgpYC5cbiAgICAgICAgICogU2hvdWxkIG9ubHkgYmUgcmVhZC5cbiAgICAgICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyBzZXQgdG8gYHRydWVgIGFmdGVyIHRoZSBmaXJzdCB1cGRhdGUuIFRoZSBlbGVtZW50IGNvZGUgY2Fubm90IGFzc3VtZVxuICAgICAgICAgKiB0aGF0IGByZW5kZXJSb290YCBleGlzdHMgYmVmb3JlIHRoZSBlbGVtZW50IGBoYXNVcGRhdGVkYC5cbiAgICAgICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGFzVXBkYXRlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogTmFtZSBvZiBjdXJyZW50bHkgcmVmbGVjdGluZyBwcm9wZXJ0eVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IG51bGw7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpbml0aWFsaXplciBmdW5jdGlvbiB0byB0aGUgY2xhc3MgdGhhdCBpcyBjYWxsZWQgZHVyaW5nIGluc3RhbmNlXG4gICAgICogY29uc3RydWN0aW9uLlxuICAgICAqXG4gICAgICogVGhpcyBpcyB1c2VmdWwgZm9yIGNvZGUgdGhhdCBydW5zIGFnYWluc3QgYSBgUmVhY3RpdmVFbGVtZW50YFxuICAgICAqIHN1YmNsYXNzLCBzdWNoIGFzIGEgZGVjb3JhdG9yLCB0aGF0IG5lZWRzIHRvIGRvIHdvcmsgZm9yIGVhY2hcbiAgICAgKiBpbnN0YW5jZSwgc3VjaCBhcyBzZXR0aW5nIHVwIGEgYFJlYWN0aXZlQ29udHJvbGxlcmAuXG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGNvbnN0IG15RGVjb3JhdG9yID0gKHRhcmdldDogdHlwZW9mIFJlYWN0aXZlRWxlbWVudCwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgKiAgIHRhcmdldC5hZGRJbml0aWFsaXplcigoaW5zdGFuY2U6IFJlYWN0aXZlRWxlbWVudCkgPT4ge1xuICAgICAqICAgICAvLyBUaGlzIGlzIHJ1biBkdXJpbmcgY29uc3RydWN0aW9uIG9mIHRoZSBlbGVtZW50XG4gICAgICogICAgIG5ldyBNeUNvbnRyb2xsZXIoaW5zdGFuY2UpO1xuICAgICAqICAgfSk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogRGVjb3JhdGluZyBhIGZpZWxkIHdpbGwgdGhlbiBjYXVzZSBlYWNoIGluc3RhbmNlIHRvIHJ1biBhbiBpbml0aWFsaXplclxuICAgICAqIHRoYXQgYWRkcyBhIGNvbnRyb2xsZXI6XG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgICAqICAgQG15RGVjb3JhdG9yIGZvbztcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBJbml0aWFsaXplcnMgYXJlIHN0b3JlZCBwZXItY29uc3RydWN0b3IuIEFkZGluZyBhbiBpbml0aWFsaXplciB0byBhXG4gICAgICogc3ViY2xhc3MgZG9lcyBub3QgYWRkIGl0IHRvIGEgc3VwZXJjbGFzcy4gU2luY2UgaW5pdGlhbGl6ZXJzIGFyZSBydW4gaW5cbiAgICAgKiBjb25zdHJ1Y3RvcnMsIGluaXRpYWxpemVycyB3aWxsIHJ1biBpbiBvcmRlciBvZiB0aGUgY2xhc3MgaGllcmFyY2h5LFxuICAgICAqIHN0YXJ0aW5nIHdpdGggc3VwZXJjbGFzc2VzIGFuZCBwcm9ncmVzc2luZyB0byB0aGUgaW5zdGFuY2UncyBjbGFzcy5cbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICovXG4gICAgc3RhdGljIGFkZEluaXRpYWxpemVyKGluaXRpYWxpemVyKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5faW5pdGlhbGl6ZXJzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5faW5pdGlhbGl6ZXJzID0gW10pO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplcnMucHVzaChpbml0aWFsaXplcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsaXN0IG9mIGF0dHJpYnV0ZXMgY29ycmVzcG9uZGluZyB0byB0aGUgcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzLlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGNhdGVnb3J5IGF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgLy8gbm90ZTogcGlnZ3kgYmFja2luZyBvbiB0aGlzIHRvIGVuc3VyZSB3ZSdyZSBmaW5hbGl6ZWQuXG4gICAgICAgIHRoaXMuZmluYWxpemUoKTtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3IgbG9vcHNcbiAgICAgICAgLy8gZXhwZWN0aW5nIGFycmF5c1xuICAgICAgICB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLmZvckVhY2goKHYsIHApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLl9fYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KHAsIHYpO1xuICAgICAgICAgICAgaWYgKGF0dHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwLnNldChhdHRyLCBwKTtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2goYXR0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHByb3BlcnR5IGFjY2Vzc29yIG9uIHRoZSBlbGVtZW50IHByb3RvdHlwZSBpZiBvbmUgZG9lcyBub3QgZXhpc3RcbiAgICAgKiBhbmQgc3RvcmVzIGEge0BsaW5rY29kZSBQcm9wZXJ0eURlY2xhcmF0aW9ufSBmb3IgdGhlIHByb3BlcnR5IHdpdGggdGhlXG4gICAgICogZ2l2ZW4gb3B0aW9ucy4gVGhlIHByb3BlcnR5IHNldHRlciBjYWxscyB0aGUgcHJvcGVydHkncyBgaGFzQ2hhbmdlZGBcbiAgICAgKiBwcm9wZXJ0eSBvcHRpb24gb3IgdXNlcyBhIHN0cmljdCBpZGVudGl0eSBjaGVjayB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3RcbiAgICAgKiB0byByZXF1ZXN0IGFuIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIG1heSBiZSBvdmVycmlkZGVuIHRvIGN1c3RvbWl6ZSBwcm9wZXJ0aWVzOyBob3dldmVyLFxuICAgICAqIHdoZW4gZG9pbmcgc28sIGl0J3MgaW1wb3J0YW50IHRvIGNhbGwgYHN1cGVyLmNyZWF0ZVByb3BlcnR5YCB0byBlbnN1cmVcbiAgICAgKiB0aGUgcHJvcGVydHkgaXMgc2V0dXAgY29ycmVjdGx5LiBUaGlzIG1ldGhvZCBjYWxsc1xuICAgICAqIGBnZXRQcm9wZXJ0eURlc2NyaXB0b3JgIGludGVybmFsbHkgdG8gZ2V0IGEgZGVzY3JpcHRvciB0byBpbnN0YWxsLlxuICAgICAqIFRvIGN1c3RvbWl6ZSB3aGF0IHByb3BlcnRpZXMgZG8gd2hlbiB0aGV5IGFyZSBnZXQgb3Igc2V0LCBvdmVycmlkZVxuICAgICAqIGBnZXRQcm9wZXJ0eURlc2NyaXB0b3JgLiBUbyBjdXN0b21pemUgdGhlIG9wdGlvbnMgZm9yIGEgcHJvcGVydHksXG4gICAgICogaW1wbGVtZW50IGBjcmVhdGVQcm9wZXJ0eWAgbGlrZSB0aGlzOlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBzdGF0aWMgY3JlYXRlUHJvcGVydHkobmFtZSwgb3B0aW9ucykge1xuICAgICAqICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucywge215T3B0aW9uOiB0cnVlfSk7XG4gICAgICogICBzdXBlci5jcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBjYXRlZ29yeSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMgPSBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIGlmIHRoaXMgaXMgYSBzdGF0ZSBwcm9wZXJ0eSwgZm9yY2UgdGhlIGF0dHJpYnV0ZSB0byBmYWxzZS5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhdGUpIHtcbiAgICAgICAgICAgIC8vIENhc3QgYXMgYW55IHNpbmNlIHRoaXMgaXMgcmVhZG9ubHkuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgb3B0aW9ucy5hdHRyaWJ1dGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3RlLCBzaW5jZSB0aGlzIGNhbiBiZSBjYWxsZWQgYnkgdGhlIGBAcHJvcGVydHlgIGRlY29yYXRvciB3aGljaFxuICAgICAgICAvLyBpcyBjYWxsZWQgYmVmb3JlIGBmaW5hbGl6ZWAsIHdlIGVuc3VyZSBmaW5hbGl6YXRpb24gaGFzIGJlZW4ga2lja2VkIG9mZi5cbiAgICAgICAgdGhpcy5maW5hbGl6ZSgpO1xuICAgICAgICB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLnNldChuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgLy8gRG8gbm90IGdlbmVyYXRlIGFuIGFjY2Vzc29yIGlmIHRoZSBwcm90b3R5cGUgYWxyZWFkeSBoYXMgb25lLCBzaW5jZVxuICAgICAgICAvLyBpdCB3b3VsZCBiZSBsb3N0IG90aGVyd2lzZSBhbmQgdGhhdCB3b3VsZCBuZXZlciBiZSB0aGUgdXNlcidzIGludGVudGlvbjtcbiAgICAgICAgLy8gSW5zdGVhZCwgd2UgZXhwZWN0IHVzZXJzIHRvIGNhbGwgYHJlcXVlc3RVcGRhdGVgIHRoZW1zZWx2ZXMgZnJvbVxuICAgICAgICAvLyB1c2VyLWRlZmluZWQgYWNjZXNzb3JzLiBOb3RlIHRoYXQgaWYgdGhlIHN1cGVyIGhhcyBhbiBhY2Nlc3NvciB3ZSB3aWxsXG4gICAgICAgIC8vIHN0aWxsIG92ZXJ3cml0ZSBpdFxuICAgICAgICBpZiAoIW9wdGlvbnMubm9BY2Nlc3NvciAmJiAhdGhpcy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHR5cGVvZiBuYW1lID09PSAnc3ltYm9sJyA/IFN5bWJvbCgpIDogYF9fJHtuYW1lfWA7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gdGhpcy5nZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5wcm90b3R5cGUsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGNsYXNzIGRvZXNuJ3QgaGF2ZSBpdHMgb3duIHNldCwgY3JlYXRlIG9uZSBhbmQgaW5pdGlhbGl6ZVxuICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIHRoZSB2YWx1ZXMgaW4gdGhlIHNldCBmcm9tIHRoZSBuZWFyZXN0IGFuY2VzdG9yIGNsYXNzLCBpZiBhbnkuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eSgnX19yZWFjdGl2ZVByb3BlcnR5S2V5cycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fcmVhY3RpdmVQcm9wZXJ0eUtleXMgPSBuZXcgU2V0KChfYSA9IHRoaXMuX19yZWFjdGl2ZVByb3BlcnR5S2V5cykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX19yZWFjdGl2ZVByb3BlcnR5S2V5cy5hZGQobmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9wZXJ0eSBkZXNjcmlwdG9yIHRvIGJlIGRlZmluZWQgb24gdGhlIGdpdmVuIG5hbWVkIHByb3BlcnR5LlxuICAgICAqIElmIG5vIGRlc2NyaXB0b3IgaXMgcmV0dXJuZWQsIHRoZSBwcm9wZXJ0eSB3aWxsIG5vdCBiZWNvbWUgYW4gYWNjZXNzb3IuXG4gICAgICogRm9yIGV4YW1wbGUsXG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgICAqICAgc3RhdGljIGdldFByb3BlcnR5RGVzY3JpcHRvcihuYW1lLCBrZXksIG9wdGlvbnMpIHtcbiAgICAgKiAgICAgY29uc3QgZGVmYXVsdERlc2NyaXB0b3IgPVxuICAgICAqICAgICAgICAgc3VwZXIuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucyk7XG4gICAgICogICAgIGNvbnN0IHNldHRlciA9IGRlZmF1bHREZXNjcmlwdG9yLnNldDtcbiAgICAgKiAgICAgcmV0dXJuIHtcbiAgICAgKiAgICAgICBnZXQ6IGRlZmF1bHREZXNjcmlwdG9yLmdldCxcbiAgICAgKiAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgKiAgICAgICAgIHNldHRlci5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgKiAgICAgICAgIC8vIGN1c3RvbSBhY3Rpb24uXG4gICAgICogICAgICAgfSxcbiAgICAgKiAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICogICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAqICAgICB9XG4gICAgICogICB9XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgcHJvcGVydGllc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2tleV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzW25hbWVdO1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJvcGVydHkgb3B0aW9ucyBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIHByb3BlcnR5LlxuICAgICAqIFRoZXNlIG9wdGlvbnMgYXJlIGRlZmluZWQgd2l0aCBhIGBQcm9wZXJ0eURlY2xhcmF0aW9uYCB2aWEgdGhlIGBwcm9wZXJ0aWVzYFxuICAgICAqIG9iamVjdCBvciB0aGUgYEBwcm9wZXJ0eWAgZGVjb3JhdG9yIGFuZCBhcmUgcmVnaXN0ZXJlZCBpblxuICAgICAqIGBjcmVhdGVQcm9wZXJ0eSguLi4pYC5cbiAgICAgKlxuICAgICAqIE5vdGUsIHRoaXMgbWV0aG9kIHNob3VsZCBiZSBjb25zaWRlcmVkIFwiZmluYWxcIiBhbmQgbm90IG92ZXJyaWRkZW4uIFRvXG4gICAgICogY3VzdG9taXplIHRoZSBvcHRpb25zIGZvciBhIGdpdmVuIHByb3BlcnR5LCBvdmVycmlkZVxuICAgICAqIHtAbGlua2NvZGUgY3JlYXRlUHJvcGVydHl9LlxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAZmluYWxcbiAgICAgKiBAY2F0ZWdvcnkgcHJvcGVydGllc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRQcm9wZXJ0eU9wdGlvbnMobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50UHJvcGVydGllcy5nZXQobmFtZSkgfHwgZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgcHJvcGVydHkgYWNjZXNzb3JzIGZvciByZWdpc3RlcmVkIHByb3BlcnRpZXMsIHNldHMgdXAgZWxlbWVudFxuICAgICAqIHN0eWxpbmcsIGFuZCBlbnN1cmVzIGFueSBzdXBlcmNsYXNzZXMgYXJlIGFsc28gZmluYWxpemVkLiBSZXR1cm5zIHRydWUgaWZcbiAgICAgKiB0aGUgZWxlbWVudCB3YXMgZmluYWxpemVkLlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICovXG4gICAgc3RhdGljIGZpbmFsaXplKCkge1xuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShmaW5hbGl6ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpc1tmaW5hbGl6ZWRdID0gdHJ1ZTtcbiAgICAgICAgLy8gZmluYWxpemUgYW55IHN1cGVyY2xhc3Nlc1xuICAgICAgICBjb25zdCBzdXBlckN0b3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyk7XG4gICAgICAgIHN1cGVyQ3Rvci5maW5hbGl6ZSgpO1xuICAgICAgICB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzID0gbmV3IE1hcChzdXBlckN0b3IuZWxlbWVudFByb3BlcnRpZXMpO1xuICAgICAgICAvLyBpbml0aWFsaXplIE1hcCBwb3B1bGF0ZWQgaW4gb2JzZXJ2ZWRBdHRyaWJ1dGVzXG4gICAgICAgIHRoaXMuX19hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyBtYWtlIGFueSBwcm9wZXJ0aWVzXG4gICAgICAgIC8vIE5vdGUsIG9ubHkgcHJvY2VzcyBcIm93blwiIHByb3BlcnRpZXMgc2luY2UgdGhpcyBlbGVtZW50IHdpbGwgaW5oZXJpdFxuICAgICAgICAvLyBhbnkgcHJvcGVydGllcyBkZWZpbmVkIG9uIHRoZSBzdXBlckNsYXNzLCBhbmQgZmluYWxpemF0aW9uIGVuc3VyZXNcbiAgICAgICAgLy8gdGhlIGVudGlyZSBwcm90b3R5cGUgY2hhaW4gaXMgZmluYWxpemVkLlxuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdwcm9wZXJ0aWVzJywgdGhpcykpKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcGVydGllcztcbiAgICAgICAgICAgIC8vIHN1cHBvcnQgc3ltYm9scyBpbiBwcm9wZXJ0aWVzIChJRTExIGRvZXMgbm90IHN1cHBvcnQgdGhpcylcbiAgICAgICAgICAgIGNvbnN0IHByb3BLZXlzID0gW1xuICAgICAgICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3BzKSxcbiAgICAgICAgICAgICAgICAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHByb3BzKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICAvLyBUaGlzIGZvci9vZiBpcyBvayBiZWNhdXNlIHByb3BLZXlzIGlzIGFuIGFycmF5XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHAgb2YgcHJvcEtleXMpIHtcbiAgICAgICAgICAgICAgICAvLyBub3RlLCB1c2Ugb2YgYGFueWAgaXMgZHVlIHRvIFR5cGVTY3JpcHQgbGFjayBvZiBzdXBwb3J0IGZvciBzeW1ib2wgaW5cbiAgICAgICAgICAgICAgICAvLyBpbmRleCB0eXBlc1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQcm9wZXJ0eShwLCBwcm9wc1twXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50U3R5bGVzID0gdGhpcy5maW5hbGl6ZVN0eWxlcyh0aGlzLnN0eWxlcyk7XG4gICAgICAgIC8vIERFViBtb2RlIHdhcm5pbmdzXG4gICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgY29uc3Qgd2FyblJlbW92ZWRPclJlbmFtZWQgPSAobmFtZSwgcmVuYW1lZCA9IGZhbHNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvdG90eXBlLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzc3VlV2FybmluZyhyZW5hbWVkID8gJ3JlbmFtZWQtYXBpJyA6ICdyZW1vdmVkLWFwaScsIGBcXGAke25hbWV9XFxgIGlzIGltcGxlbWVudGVkIG9uIGNsYXNzICR7dGhpcy5uYW1lfS4gSXQgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgaGFzIGJlZW4gJHtyZW5hbWVkID8gJ3JlbmFtZWQnIDogJ3JlbW92ZWQnfSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBpbiB0aGlzIHZlcnNpb24gb2YgTGl0RWxlbWVudC5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgd2FyblJlbW92ZWRPclJlbmFtZWQoJ2luaXRpYWxpemUnKTtcbiAgICAgICAgICAgIHdhcm5SZW1vdmVkT3JSZW5hbWVkKCdyZXF1ZXN0VXBkYXRlSW50ZXJuYWwnKTtcbiAgICAgICAgICAgIHdhcm5SZW1vdmVkT3JSZW5hbWVkKCdfZ2V0VXBkYXRlQ29tcGxldGUnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGFrZXMgdGhlIHN0eWxlcyB0aGUgdXNlciBzdXBwbGllZCB2aWEgdGhlIGBzdGF0aWMgc3R5bGVzYCBwcm9wZXJ0eSBhbmRcbiAgICAgKiByZXR1cm5zIHRoZSBhcnJheSBvZiBzdHlsZXMgdG8gYXBwbHkgdG8gdGhlIGVsZW1lbnQuXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gaW50ZWdyYXRlIGludG8gYSBzdHlsZSBtYW5hZ2VtZW50IHN5c3RlbS5cbiAgICAgKlxuICAgICAqIFN0eWxlcyBhcmUgZGVkdXBsaWNhdGVkIHByZXNlcnZpbmcgdGhlIF9sYXN0XyBpbnN0YW5jZSBpbiB0aGUgbGlzdC4gVGhpc1xuICAgICAqIGlzIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIHRvIGF2b2lkIGR1cGxpY2F0ZWQgc3R5bGVzIHRoYXQgY2FuIG9jY3VyXG4gICAgICogZXNwZWNpYWxseSB3aGVuIGNvbXBvc2luZyB2aWEgc3ViY2xhc3NpbmcuIFRoZSBsYXN0IGl0ZW0gaXMga2VwdCB0byB0cnlcbiAgICAgKiB0byBwcmVzZXJ2ZSB0aGUgY2FzY2FkZSBvcmRlciB3aXRoIHRoZSBhc3N1bXB0aW9uIHRoYXQgaXQncyBtb3N0IGltcG9ydGFudFxuICAgICAqIHRoYXQgbGFzdCBhZGRlZCBzdHlsZXMgb3ZlcnJpZGUgcHJldmlvdXMgc3R5bGVzLlxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgc3R5bGVzXG4gICAgICovXG4gICAgc3RhdGljIGZpbmFsaXplU3R5bGVzKHN0eWxlcykge1xuICAgICAgICBjb25zdCBlbGVtZW50U3R5bGVzID0gW107XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0eWxlcykpIHtcbiAgICAgICAgICAgIC8vIERlZHVwZSB0aGUgZmxhdHRlbmVkIGFycmF5IGluIHJldmVyc2Ugb3JkZXIgdG8gcHJlc2VydmUgdGhlIGxhc3QgaXRlbXMuXG4gICAgICAgICAgICAvLyBDYXN0aW5nIHRvIEFycmF5PHVua25vd24+IHdvcmtzIGFyb3VuZCBUUyBlcnJvciB0aGF0XG4gICAgICAgICAgICAvLyBhcHBlYXJzIHRvIGNvbWUgZnJvbSB0cnlpbmcgdG8gZmxhdHRlbiBhIHR5cGUgQ1NTUmVzdWx0QXJyYXkuXG4gICAgICAgICAgICBjb25zdCBzZXQgPSBuZXcgU2V0KHN0eWxlcy5mbGF0KEluZmluaXR5KS5yZXZlcnNlKCkpO1xuICAgICAgICAgICAgLy8gVGhlbiBwcmVzZXJ2ZSBvcmlnaW5hbCBvcmRlciBieSBhZGRpbmcgdGhlIHNldCBpdGVtcyBpbiByZXZlcnNlIG9yZGVyLlxuICAgICAgICAgICAgZm9yIChjb25zdCBzIG9mIHNldCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZXMudW5zaGlmdChnZXRDb21wYXRpYmxlU3R5bGUocykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbGVtZW50U3R5bGVzLnB1c2goZ2V0Q29tcGF0aWJsZVN0eWxlKHN0eWxlcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50U3R5bGVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBuYW1lIGZvciB0aGUgZ2l2ZW4gYXR0cmlidXRlIGBuYW1lYC5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBfX2F0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IG9wdGlvbnMuYXR0cmlidXRlO1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlID09PSBmYWxzZVxuICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgIDogdHlwZW9mIGF0dHJpYnV0ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgIDogdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgID8gbmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBvbmx5IG92ZXJyaWRlIHBvaW50IGZvciBjdXN0b21pemluZyB3b3JrIGRvbmUgd2hlbiBlbGVtZW50c1xuICAgICAqIGFyZSBjb25zdHJ1Y3RlZC5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIF9pbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMuX191cGRhdGVQcm9taXNlID0gbmV3IFByb21pc2UoKHJlcykgPT4gKHRoaXMuZW5hYmxlVXBkYXRpbmcgPSByZXMpKTtcbiAgICAgICAgdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9fc2F2ZUluc3RhbmNlUHJvcGVydGllcygpO1xuICAgICAgICAvLyBlbnN1cmVzIGZpcnN0IHVwZGF0ZSB3aWxsIGJlIGNhdWdodCBieSBhbiBlYXJseSBhY2Nlc3Mgb2ZcbiAgICAgICAgLy8gYHVwZGF0ZUNvbXBsZXRlYFxuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICAgICAgKF9hID0gdGhpcy5jb25zdHJ1Y3Rvci5faW5pdGlhbGl6ZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoaSkgPT4gaSh0aGlzKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIGBSZWFjdGl2ZUNvbnRyb2xsZXJgIHRvIHBhcnRpY2lwYXRlIGluIHRoZSBlbGVtZW50J3MgcmVhY3RpdmVcbiAgICAgKiB1cGRhdGUgY3ljbGUuIFRoZSBlbGVtZW50IGF1dG9tYXRpY2FsbHkgY2FsbHMgaW50byBhbnkgcmVnaXN0ZXJlZFxuICAgICAqIGNvbnRyb2xsZXJzIGR1cmluZyBpdHMgbGlmZWN5Y2xlIGNhbGxiYWNrcy5cbiAgICAgKlxuICAgICAqIElmIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCB3aGVuIGBhZGRDb250cm9sbGVyKClgIGlzIGNhbGxlZCwgdGhlXG4gICAgICogY29udHJvbGxlcidzIGBob3N0Q29ubmVjdGVkKClgIGNhbGxiYWNrIHdpbGwgYmUgaW1tZWRpYXRlbHkgY2FsbGVkLlxuICAgICAqIEBjYXRlZ29yeSBjb250cm9sbGVyc1xuICAgICAqL1xuICAgIGFkZENvbnRyb2xsZXIoY29udHJvbGxlcikge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAoKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5fX2NvbnRyb2xsZXJzID0gW10pKS5wdXNoKGNvbnRyb2xsZXIpO1xuICAgICAgICAvLyBJZiBhIGNvbnRyb2xsZXIgaXMgYWRkZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGJlZW4gY29ubmVjdGVkLFxuICAgICAgICAvLyBjYWxsIGhvc3RDb25uZWN0ZWQuIE5vdGUsIHJlLXVzaW5nIGV4aXN0ZW5jZSBvZiBgcmVuZGVyUm9vdGAgaGVyZVxuICAgICAgICAvLyAod2hpY2ggaXMgc2V0IGluIGNvbm5lY3RlZENhbGxiYWNrKSB0byBhdm9pZCB0aGUgbmVlZCB0byB0cmFjayBhXG4gICAgICAgIC8vIGZpcnN0IGNvbm5lY3RlZCBzdGF0ZS5cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyUm9vdCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIChfYiA9IGNvbnRyb2xsZXIuaG9zdENvbm5lY3RlZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoY29udHJvbGxlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGBSZWFjdGl2ZUNvbnRyb2xsZXJgIGZyb20gdGhlIGVsZW1lbnQuXG4gICAgICogQGNhdGVnb3J5IGNvbnRyb2xsZXJzXG4gICAgICovXG4gICAgcmVtb3ZlQ29udHJvbGxlcihjb250cm9sbGVyKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gTm90ZSwgaWYgdGhlIGluZGV4T2YgaXMgLTEsIHRoZSA+Pj4gd2lsbCBmbGlwIHRoZSBzaWduIHdoaWNoIG1ha2VzIHRoZVxuICAgICAgICAvLyBzcGxpY2UgZG8gbm90aGluZy5cbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3BsaWNlKHRoaXMuX19jb250cm9sbGVycy5pbmRleE9mKGNvbnRyb2xsZXIpID4+PiAwLCAxKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRml4ZXMgYW55IHByb3BlcnRpZXMgc2V0IG9uIHRoZSBpbnN0YW5jZSBiZWZvcmUgdXBncmFkZSB0aW1lLlxuICAgICAqIE90aGVyd2lzZSB0aGVzZSB3b3VsZCBzaGFkb3cgdGhlIGFjY2Vzc29yIGFuZCBicmVhayB0aGVzZSBwcm9wZXJ0aWVzLlxuICAgICAqIFRoZSBwcm9wZXJ0aWVzIGFyZSBzdG9yZWQgaW4gYSBNYXAgd2hpY2ggaXMgcGxheWVkIGJhY2sgYWZ0ZXIgdGhlXG4gICAgICogY29uc3RydWN0b3IgcnVucy4gTm90ZSwgb24gdmVyeSBvbGQgdmVyc2lvbnMgb2YgU2FmYXJpICg8PTkpIG9yIENocm9tZVxuICAgICAqICg8PTQxKSwgcHJvcGVydGllcyBjcmVhdGVkIGZvciBuYXRpdmUgcGxhdGZvcm0gcHJvcGVydGllcyBsaWtlIChgaWRgIG9yXG4gICAgICogYG5hbWVgKSBtYXkgbm90IGhhdmUgZGVmYXVsdCB2YWx1ZXMgc2V0IGluIHRoZSBlbGVtZW50IGNvbnN0cnVjdG9yLiBPblxuICAgICAqIHRoZXNlIGJyb3dzZXJzIG5hdGl2ZSBwcm9wZXJ0aWVzIGFwcGVhciBvbiBpbnN0YW5jZXMgYW5kIHRoZXJlZm9yZSB0aGVpclxuICAgICAqIGRlZmF1bHQgdmFsdWUgd2lsbCBvdmVyd3JpdGUgYW55IGVsZW1lbnQgZGVmYXVsdCAoZS5nLiBpZiB0aGUgZWxlbWVudCBzZXRzXG4gICAgICogdGhpcy5pZCA9ICdpZCcgaW4gdGhlIGNvbnN0cnVjdG9yLCB0aGUgJ2lkJyB3aWxsIGJlY29tZSAnJyBzaW5jZSB0aGlzIGlzXG4gICAgICogdGhlIG5hdGl2ZSBwbGF0Zm9ybSBkZWZhdWx0KS5cbiAgICAgKi9cbiAgICBfX3NhdmVJbnN0YW5jZVByb3BlcnRpZXMoKSB7XG4gICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgICAgICAvLyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuZWxlbWVudFByb3BlcnRpZXMuZm9yRWFjaCgoX3YsIHApID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcy5zZXQocCwgdGhpc1twXSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXNbcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBub2RlIGludG8gd2hpY2ggdGhlIGVsZW1lbnQgc2hvdWxkIHJlbmRlciBhbmQgYnkgZGVmYXVsdFxuICAgICAqIGNyZWF0ZXMgYW5kIHJldHVybnMgYW4gb3BlbiBzaGFkb3dSb290LiBJbXBsZW1lbnQgdG8gY3VzdG9taXplIHdoZXJlIHRoZVxuICAgICAqIGVsZW1lbnQncyBET00gaXMgcmVuZGVyZWQuIEZvciBleGFtcGxlLCB0byByZW5kZXIgaW50byB0aGUgZWxlbWVudCdzXG4gICAgICogY2hpbGROb2RlcywgcmV0dXJuIGB0aGlzYC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gUmV0dXJucyBhIG5vZGUgaW50byB3aGljaCB0byByZW5kZXIuXG4gICAgICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICAgICAqL1xuICAgIGNyZWF0ZVJlbmRlclJvb3QoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgcmVuZGVyUm9vdCA9IChfYSA9IHRoaXMuc2hhZG93Um9vdCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdGhpcy5hdHRhY2hTaGFkb3codGhpcy5jb25zdHJ1Y3Rvci5zaGFkb3dSb290T3B0aW9ucyk7XG4gICAgICAgIGFkb3B0U3R5bGVzKHJlbmRlclJvb3QsIHRoaXMuY29uc3RydWN0b3IuZWxlbWVudFN0eWxlcyk7XG4gICAgICAgIHJldHVybiByZW5kZXJSb290O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPbiBmaXJzdCBjb25uZWN0aW9uLCBjcmVhdGVzIHRoZSBlbGVtZW50J3MgcmVuZGVyUm9vdCwgc2V0cyB1cFxuICAgICAqIGVsZW1lbnQgc3R5bGluZywgYW5kIGVuYWJsZXMgdXBkYXRpbmcuXG4gICAgICogQGNhdGVnb3J5IGxpZmVjeWNsZVxuICAgICAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIGNyZWF0ZSByZW5kZXJSb290IGJlZm9yZSBmaXJzdCB1cGRhdGUuXG4gICAgICAgIGlmICh0aGlzLnJlbmRlclJvb3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJSb290ID0gdGhpcy5jcmVhdGVSZW5kZXJSb290KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmFibGVVcGRhdGluZyh0cnVlKTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3RDb25uZWN0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTm90ZSwgdGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNvbnNpZGVyZWQgZmluYWwgYW5kIG5vdCBvdmVycmlkZGVuLiBJdCBpc1xuICAgICAqIG92ZXJyaWRkZW4gb24gdGhlIGVsZW1lbnQgaW5zdGFuY2Ugd2l0aCBhIGZ1bmN0aW9uIHRoYXQgdHJpZ2dlcnMgdGhlIGZpcnN0XG4gICAgICogdXBkYXRlLlxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgZW5hYmxlVXBkYXRpbmcoX3JlcXVlc3RlZFVwZGF0ZSkgeyB9XG4gICAgLyoqXG4gICAgICogQWxsb3dzIGZvciBgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKWAgaW4gZXh0ZW5zaW9ucyB3aGlsZVxuICAgICAqIHJlc2VydmluZyB0aGUgcG9zc2liaWxpdHkgb2YgbWFraW5nIG5vbi1icmVha2luZyBmZWF0dXJlIGFkZGl0aW9uc1xuICAgICAqIHdoZW4gZGlzY29ubmVjdGluZyBhdCBzb21lIHBvaW50IGluIHRoZSBmdXR1cmUuXG4gICAgICogQGNhdGVnb3J5IGxpZmVjeWNsZVxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX19jb250cm9sbGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKGMpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gYy5ob3N0RGlzY29ubmVjdGVkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjKTsgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN5bmNocm9uaXplcyBwcm9wZXJ0eSB2YWx1ZXMgd2hlbiBhdHRyaWJ1dGVzIGNoYW5nZS5cbiAgICAgKlxuICAgICAqIFNwZWNpZmljYWxseSwgd2hlbiBhbiBhdHRyaWJ1dGUgaXMgc2V0LCB0aGUgY29ycmVzcG9uZGluZyBwcm9wZXJ0eSBpcyBzZXQuXG4gICAgICogWW91IHNob3VsZCByYXJlbHkgbmVlZCB0byBpbXBsZW1lbnQgdGhpcyBjYWxsYmFjay4gSWYgdGhpcyBtZXRob2QgaXNcbiAgICAgKiBvdmVycmlkZGVuLCBgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIF9vbGQsIHZhbHVlKWAgbXVzdCBiZVxuICAgICAqIGNhbGxlZC5cbiAgICAgKlxuICAgICAqIFNlZSBbdXNpbmcgdGhlIGxpZmVjeWNsZSBjYWxsYmFja3NdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1dlYl9Db21wb25lbnRzL1VzaW5nX2N1c3RvbV9lbGVtZW50cyN1c2luZ190aGVfbGlmZWN5Y2xlX2NhbGxiYWNrcylcbiAgICAgKiBvbiBNRE4gZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgLlxuICAgICAqIEBjYXRlZ29yeSBhdHRyaWJ1dGVzXG4gICAgICovXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIF9vbGQsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuXyRhdHRyaWJ1dGVUb1Byb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgX19wcm9wZXJ0eVRvQXR0cmlidXRlKG5hbWUsIHZhbHVlLCBvcHRpb25zID0gZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuY29uc3RydWN0b3IuX19hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChhdHRyICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5yZWZsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCB0b0F0dHJpYnV0ZSA9IChfYiA9IChfYSA9IG9wdGlvbnMuY29udmVydGVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9BdHRyaWJ1dGUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGRlZmF1bHRDb252ZXJ0ZXIudG9BdHRyaWJ1dGU7XG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSB0b0F0dHJpYnV0ZSh2YWx1ZSwgb3B0aW9ucy50eXBlKTtcbiAgICAgICAgICAgIGlmIChERVZfTU9ERSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZW5hYmxlZFdhcm5pbmdzLmluZGV4T2YoJ21pZ3JhdGlvbicpID49IDAgJiZcbiAgICAgICAgICAgICAgICBhdHRyVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlzc3VlV2FybmluZygndW5kZWZpbmVkLWF0dHJpYnV0ZS12YWx1ZScsIGBUaGUgYXR0cmlidXRlIHZhbHVlIGZvciB0aGUgJHtuYW1lfSBwcm9wZXJ0eSBpcyBgICtcbiAgICAgICAgICAgICAgICAgICAgYHVuZGVmaW5lZCBvbiBlbGVtZW50ICR7dGhpcy5sb2NhbE5hbWV9LiBUaGUgYXR0cmlidXRlIHdpbGwgYmUgYCArXG4gICAgICAgICAgICAgICAgICAgIGByZW1vdmVkLCBidXQgaW4gdGhlIHByZXZpb3VzIHZlcnNpb24gb2YgXFxgUmVhY3RpdmVFbGVtZW50XFxgLCBgICtcbiAgICAgICAgICAgICAgICAgICAgYHRoZSBhdHRyaWJ1dGUgd291bGQgbm90IGhhdmUgY2hhbmdlZC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRyYWNrIGlmIHRoZSBwcm9wZXJ0eSBpcyBiZWluZyByZWZsZWN0ZWQgdG8gYXZvaWRcbiAgICAgICAgICAgIC8vIHNldHRpbmcgdGhlIHByb3BlcnR5IGFnYWluIHZpYSBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYC4gTm90ZTpcbiAgICAgICAgICAgIC8vIDEuIHRoaXMgdGFrZXMgYWR2YW50YWdlIG9mIHRoZSBmYWN0IHRoYXQgdGhlIGNhbGxiYWNrIGlzIHN5bmNocm9ub3VzLlxuICAgICAgICAgICAgLy8gMi4gd2lsbCBiZWhhdmUgaW5jb3JyZWN0bHkgaWYgbXVsdGlwbGUgYXR0cmlidXRlcyBhcmUgaW4gdGhlIHJlYWN0aW9uXG4gICAgICAgICAgICAvLyBzdGFjayBhdCB0aW1lIG9mIGNhbGxpbmcuIEhvd2V2ZXIsIHNpbmNlIHdlIHByb2Nlc3MgYXR0cmlidXRlc1xuICAgICAgICAgICAgLy8gaW4gYHVwZGF0ZWAgdGhpcyBzaG91bGQgbm90IGJlIHBvc3NpYmxlIChvciBhbiBleHRyZW1lIGNvcm5lciBjYXNlXG4gICAgICAgICAgICAvLyB0aGF0IHdlJ2QgbGlrZSB0byBkaXNjb3ZlcikuXG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBuYW1lO1xuICAgICAgICAgICAgaWYgKGF0dHJWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSBub3QgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgY29uc3QgY3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIC8vIE5vdGUsIGhpbnQgdGhpcyBhcyBhbiBgQXR0cmlidXRlTWFwYCBzbyBjbG9zdXJlIGNsZWFybHkgdW5kZXJzdGFuZHNcbiAgICAgICAgLy8gdGhlIHR5cGU7IGl0IGhhcyBpc3N1ZXMgd2l0aCB0cmFja2luZyB0eXBlcyB0aHJvdWdoIHN0YXRpY3NcbiAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBjdG9yLl9fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcC5nZXQobmFtZSk7XG4gICAgICAgIC8vIFVzZSB0cmFja2luZyBpbmZvIHRvIGF2b2lkIHJlZmxlY3RpbmcgYSBwcm9wZXJ0eSB2YWx1ZSB0byBhbiBhdHRyaWJ1dGVcbiAgICAgICAgLy8gaWYgaXQgd2FzIGp1c3Qgc2V0IGJlY2F1c2UgdGhlIGF0dHJpYnV0ZSBjaGFuZ2VkLlxuICAgICAgICBpZiAocHJvcE5hbWUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ICE9PSBwcm9wTmFtZSkge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGN0b3IuZ2V0UHJvcGVydHlPcHRpb25zKHByb3BOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRlciA9IG9wdGlvbnMuY29udmVydGVyO1xuICAgICAgICAgICAgY29uc3QgZnJvbUF0dHJpYnV0ZSA9IChfYyA9IChfYiA9IChfYSA9IGNvbnZlcnRlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZyb21BdHRyaWJ1dGUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICh0eXBlb2YgY29udmVydGVyID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgPyBjb252ZXJ0ZXJcbiAgICAgICAgICAgICAgICA6IG51bGwpKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBkZWZhdWx0Q29udmVydGVyLmZyb21BdHRyaWJ1dGU7XG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBwcm9wTmFtZTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICB0aGlzW3Byb3BOYW1lXSA9IGZyb21BdHRyaWJ1dGUodmFsdWUsIG9wdGlvbnMudHlwZSk7XG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIG5vdCByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyBhbiB1cGRhdGUgd2hpY2ggaXMgcHJvY2Vzc2VkIGFzeW5jaHJvbm91c2x5LiBUaGlzIHNob3VsZCBiZSBjYWxsZWRcbiAgICAgKiB3aGVuIGFuIGVsZW1lbnQgc2hvdWxkIHVwZGF0ZSBiYXNlZCBvbiBzb21lIHN0YXRlIG5vdCB0cmlnZ2VyZWQgYnkgc2V0dGluZ1xuICAgICAqIGEgcmVhY3RpdmUgcHJvcGVydHkuIEluIHRoaXMgY2FzZSwgcGFzcyBubyBhcmd1bWVudHMuIEl0IHNob3VsZCBhbHNvIGJlXG4gICAgICogY2FsbGVkIHdoZW4gbWFudWFsbHkgaW1wbGVtZW50aW5nIGEgcHJvcGVydHkgc2V0dGVyLiBJbiB0aGlzIGNhc2UsIHBhc3MgdGhlXG4gICAgICogcHJvcGVydHkgYG5hbWVgIGFuZCBgb2xkVmFsdWVgIHRvIGVuc3VyZSB0aGF0IGFueSBjb25maWd1cmVkIHByb3BlcnR5XG4gICAgICogb3B0aW9ucyBhcmUgaG9ub3JlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIG5hbWUgb2YgcmVxdWVzdGluZyBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSBvbGRWYWx1ZSBvbGQgdmFsdWUgb2YgcmVxdWVzdGluZyBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSBvcHRpb25zIHByb3BlcnR5IG9wdGlvbnMgdG8gdXNlIGluc3RlYWQgb2YgdGhlIHByZXZpb3VzbHlcbiAgICAgKiAgICAgY29uZmlndXJlZCBvcHRpb25zXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICByZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGxldCBzaG91bGRSZXF1ZXN0VXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHByb3BlcnR5IGtleSwgcGVyZm9ybSBwcm9wZXJ0eSB1cGRhdGUgc3RlcHMuXG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPVxuICAgICAgICAgICAgICAgIG9wdGlvbnMgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5nZXRQcm9wZXJ0eU9wdGlvbnMobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBoYXNDaGFuZ2VkID0gb3B0aW9ucy5oYXNDaGFuZ2VkIHx8IG5vdEVxdWFsO1xuICAgICAgICAgICAgaWYgKGhhc0NoYW5nZWQodGhpc1tuYW1lXSwgb2xkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcy5zZXQobmFtZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBZGQgdG8gcmVmbGVjdGluZyBwcm9wZXJ0aWVzIHNldC5cbiAgICAgICAgICAgICAgICAvLyBOb3RlLCBpdCdzIGltcG9ydGFudCB0aGF0IGV2ZXJ5IGNoYW5nZSBoYXMgYSBjaGFuY2UgdG8gYWRkIHRoZVxuICAgICAgICAgICAgICAgIC8vIHByb3BlcnR5IHRvIGBfcmVmbGVjdGluZ1Byb3BlcnRpZXNgLiBUaGlzIGVuc3VyZXMgc2V0dGluZ1xuICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZSArIHByb3BlcnR5IHJlZmxlY3RzIGNvcnJlY3RseS5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZWZsZWN0ID09PSB0cnVlICYmIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgIT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzLnNldChuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBBYm9ydCB0aGUgcmVxdWVzdCBpZiB0aGUgcHJvcGVydHkgc2hvdWxkIG5vdCBiZSBjb25zaWRlcmVkIGNoYW5nZWQuXG4gICAgICAgICAgICAgICAgc2hvdWxkUmVxdWVzdFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc1VwZGF0ZVBlbmRpbmcgJiYgc2hvdWxkUmVxdWVzdFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fX3VwZGF0ZVByb21pc2UgPSB0aGlzLl9fZW5xdWV1ZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdGUsIHNpbmNlIHRoaXMgbm8gbG9uZ2VyIHJldHVybnMgYSBwcm9taXNlLCBpbiBkZXYgbW9kZSB3ZSByZXR1cm4gYVxuICAgICAgICAvLyB0aGVuYWJsZSB3aGljaCB3YXJucyBpZiBpdCdzIGNhbGxlZC5cbiAgICAgICAgcmV0dXJuIERFVl9NT0RFXG4gICAgICAgICAgICA/IHJlcXVlc3RVcGRhdGVUaGVuYWJsZSh0aGlzLmxvY2FsTmFtZSlcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBlbGVtZW50IHRvIGFzeW5jaHJvbm91c2x5IHVwZGF0ZS5cbiAgICAgKi9cbiAgICBhc3luYyBfX2VucXVldWVVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBhbnkgcHJldmlvdXMgdXBkYXRlIGhhcyByZXNvbHZlZCBiZWZvcmUgdXBkYXRpbmcuXG4gICAgICAgICAgICAvLyBUaGlzIGBhd2FpdGAgYWxzbyBlbnN1cmVzIHRoYXQgcHJvcGVydHkgY2hhbmdlcyBhcmUgYmF0Y2hlZC5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX191cGRhdGVQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBSZWZpcmUgYW55IHByZXZpb3VzIGVycm9ycyBhc3luYyBzbyB0aGV5IGRvIG5vdCBkaXNydXB0IHRoZSB1cGRhdGVcbiAgICAgICAgICAgIC8vIGN5Y2xlLiBFcnJvcnMgYXJlIHJlZmlyZWQgc28gZGV2ZWxvcGVycyBoYXZlIGEgY2hhbmNlIHRvIG9ic2VydmVcbiAgICAgICAgICAgIC8vIHRoZW0sIGFuZCB0aGlzIGNhbiBiZSBkb25lIGJ5IGltcGxlbWVudGluZ1xuICAgICAgICAgICAgLy8gYHdpbmRvdy5vbnVuaGFuZGxlZHJlamVjdGlvbmAuXG4gICAgICAgICAgICBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICAgIC8vIElmIGBzY2hlZHVsZVVwZGF0ZWAgcmV0dXJucyBhIFByb21pc2UsIHdlIGF3YWl0IGl0LiBUaGlzIGlzIGRvbmUgdG9cbiAgICAgICAgLy8gZW5hYmxlIGNvb3JkaW5hdGluZyB1cGRhdGVzIHdpdGggYSBzY2hlZHVsZXIuIE5vdGUsIHRoZSByZXN1bHQgaXNcbiAgICAgICAgLy8gY2hlY2tlZCB0byBhdm9pZCBkZWxheWluZyBhbiBhZGRpdGlvbmFsIG1pY3JvdGFzayB1bmxlc3Mgd2UgbmVlZCB0by5cbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhd2FpdCByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICF0aGlzLmlzVXBkYXRlUGVuZGluZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2NoZWR1bGVzIGFuIGVsZW1lbnQgdXBkYXRlLiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNoYW5nZSB0aGVcbiAgICAgKiB0aW1pbmcgb2YgdXBkYXRlcyBieSByZXR1cm5pbmcgYSBQcm9taXNlLiBUaGUgdXBkYXRlIHdpbGwgYXdhaXQgdGhlXG4gICAgICogcmV0dXJuZWQgUHJvbWlzZSwgYW5kIHlvdSBzaG91bGQgcmVzb2x2ZSB0aGUgUHJvbWlzZSB0byBhbGxvdyB0aGUgdXBkYXRlXG4gICAgICogdG8gcHJvY2VlZC4gSWYgdGhpcyBtZXRob2QgaXMgb3ZlcnJpZGRlbiwgYHN1cGVyLnNjaGVkdWxlVXBkYXRlKClgXG4gICAgICogbXVzdCBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBGb3IgaW5zdGFuY2UsIHRvIHNjaGVkdWxlIHVwZGF0ZXMgdG8gb2NjdXIganVzdCBiZWZvcmUgdGhlIG5leHQgZnJhbWU6XG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIG92ZXJyaWRlIHByb3RlY3RlZCBhc3luYyBzY2hlZHVsZVVwZGF0ZSgpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICAgKiAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzb2x2ZSgpKSk7XG4gICAgICogICBzdXBlci5zY2hlZHVsZVVwZGF0ZSgpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHNjaGVkdWxlVXBkYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJmb3JtVXBkYXRlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGFuIGVsZW1lbnQgdXBkYXRlLiBOb3RlLCBpZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGR1cmluZyB0aGVcbiAgICAgKiB1cGRhdGUsIGBmaXJzdFVwZGF0ZWRgIGFuZCBgdXBkYXRlZGAgd2lsbCBub3QgYmUgY2FsbGVkLlxuICAgICAqXG4gICAgICogQ2FsbCBgcGVyZm9ybVVwZGF0ZSgpYCB0byBpbW1lZGlhdGVseSBwcm9jZXNzIGEgcGVuZGluZyB1cGRhdGUuIFRoaXMgc2hvdWxkXG4gICAgICogZ2VuZXJhbGx5IG5vdCBiZSBuZWVkZWQsIGJ1dCBpdCBjYW4gYmUgZG9uZSBpbiByYXJlIGNhc2VzIHdoZW4geW91IG5lZWQgdG9cbiAgICAgKiB1cGRhdGUgc3luY2hyb25vdXNseS5cbiAgICAgKlxuICAgICAqIE5vdGU6IFRvIGVuc3VyZSBgcGVyZm9ybVVwZGF0ZSgpYCBzeW5jaHJvbm91c2x5IGNvbXBsZXRlcyBhIHBlbmRpbmcgdXBkYXRlLFxuICAgICAqIGl0IHNob3VsZCBub3QgYmUgb3ZlcnJpZGRlbi4gSW4gTGl0RWxlbWVudCAyLnggaXQgd2FzIHN1Z2dlc3RlZCB0byBvdmVycmlkZVxuICAgICAqIGBwZXJmb3JtVXBkYXRlKClgIHRvIGFsc28gY3VzdG9taXppbmcgdXBkYXRlIHNjaGVkdWxpbmcuIEluc3RlYWQsIHlvdSBzaG91bGQgbm93XG4gICAgICogb3ZlcnJpZGUgYHNjaGVkdWxlVXBkYXRlKClgLiBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBMaXRFbGVtZW50IDIueCxcbiAgICAgKiBzY2hlZHVsaW5nIHVwZGF0ZXMgdmlhIGBwZXJmb3JtVXBkYXRlKClgIGNvbnRpbnVlcyB0byB3b3JrLCBidXQgd2lsbCBtYWtlXG4gICAgICogYWxzbyBjYWxsaW5nIGBwZXJmb3JtVXBkYXRlKClgIHRvIHN5bmNocm9ub3VzbHkgcHJvY2VzcyB1cGRhdGVzIGRpZmZpY3VsdC5cbiAgICAgKlxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgcGVyZm9ybVVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgLy8gQWJvcnQgYW55IHVwZGF0ZSBpZiBvbmUgaXMgbm90IHBlbmRpbmcgd2hlbiB0aGlzIGlzIGNhbGxlZC5cbiAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIGBwZXJmb3JtVXBkYXRlYCBpcyBjYWxsZWQgZWFybHkgdG8gXCJmbHVzaFwiXG4gICAgICAgIC8vIHRoZSB1cGRhdGUuXG4gICAgICAgIGlmICghdGhpcy5pc1VwZGF0ZVBlbmRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoeyBraW5kOiAndXBkYXRlJyB9KTtcbiAgICAgICAgLy8gY3JlYXRlIHJlbmRlclJvb3QgYmVmb3JlIGZpcnN0IHVwZGF0ZS5cbiAgICAgICAgaWYgKCF0aGlzLmhhc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgIC8vIFByb2R1Y2Ugd2FybmluZyBpZiBhbnkgY2xhc3MgcHJvcGVydGllcyBhcmUgc2hhZG93ZWQgYnkgY2xhc3MgZmllbGRzXG4gICAgICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFkb3dlZFByb3BlcnRpZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbnN0cnVjdG9yLl9fcmVhY3RpdmVQcm9wZXJ0eUtleXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocCkgJiYgISgoX2EgPSB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaGFzKHApKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93ZWRQcm9wZXJ0aWVzLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc2hhZG93ZWRQcm9wZXJ0aWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBvbiBlbGVtZW50ICR7dGhpcy5sb2NhbE5hbWV9IHdpbGwgbm90IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYHRyaWdnZXIgdXBkYXRlcyBhcyBleHBlY3RlZCBiZWNhdXNlIHRoZXkgYXJlIHNldCB1c2luZyBjbGFzcyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBmaWVsZHM6ICR7c2hhZG93ZWRQcm9wZXJ0aWVzLmpvaW4oJywgJyl9LiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBOYXRpdmUgY2xhc3MgZmllbGRzIGFuZCBzb21lIGNvbXBpbGVkIG91dHB1dCB3aWxsIG92ZXJ3cml0ZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBhY2Nlc3NvcnMgdXNlZCBmb3IgZGV0ZWN0aW5nIGNoYW5nZXMuIFNlZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBodHRwczovL2xpdC5kZXYvbXNnL2NsYXNzLWZpZWxkLXNoYWRvd2luZyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWl4aW4gaW5zdGFuY2UgcHJvcGVydGllcyBvbmNlLCBpZiB0aGV5IGV4aXN0LlxuICAgICAgICBpZiAodGhpcy5fX2luc3RhbmNlUHJvcGVydGllcykge1xuICAgICAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgICAgICAgICAvLyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcy5mb3JFYWNoKCh2LCBwKSA9PiAodGhpc1twXSA9IHYpKTtcbiAgICAgICAgICAgIHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjaGFuZ2VkUHJvcGVydGllcyA9IHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IHRoaXMuc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpbGxVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICAgIChfYiA9IHRoaXMuX19jb250cm9sbGVycykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGMpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gYy5ob3N0VXBkYXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjKTsgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX21hcmtVcGRhdGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgYGZpcnN0VXBkYXRlZGAgYW5kIGB1cGRhdGVkYCBmcm9tIHJ1bm5pbmcgd2hlbiB0aGVyZSdzIGFuXG4gICAgICAgICAgICAvLyB1cGRhdGUgZXhjZXB0aW9uLlxuICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBFbnN1cmUgZWxlbWVudCBjYW4gYWNjZXB0IGFkZGl0aW9uYWwgdXBkYXRlcyBhZnRlciBhbiBleGNlcHRpb24uXG4gICAgICAgICAgICB0aGlzLl9fbWFya1VwZGF0ZWQoKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHVwZGF0ZSBpcyBubyBsb25nZXIgY29uc2lkZXJlZCBwZW5kaW5nIGFuZCBmdXJ0aGVyIHVwZGF0ZXMgYXJlIG5vdyBhbGxvd2VkLlxuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl8kZGlkVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIGJlZm9yZSBgdXBkYXRlKClgIHRvIGNvbXB1dGUgdmFsdWVzIG5lZWRlZCBkdXJpbmcgdGhlIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIEltcGxlbWVudCBgd2lsbFVwZGF0ZWAgdG8gY29tcHV0ZSBwcm9wZXJ0eSB2YWx1ZXMgdGhhdCBkZXBlbmQgb24gb3RoZXJcbiAgICAgKiBwcm9wZXJ0aWVzIGFuZCBhcmUgdXNlZCBpbiB0aGUgcmVzdCBvZiB0aGUgdXBkYXRlIHByb2Nlc3MuXG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIHdpbGxVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgKiAgIC8vIG9ubHkgbmVlZCB0byBjaGVjayBjaGFuZ2VkIHByb3BlcnRpZXMgZm9yIGFuIGV4cGVuc2l2ZSBjb21wdXRhdGlvbi5cbiAgICAgKiAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2ZpcnN0TmFtZScpIHx8IGNoYW5nZWRQcm9wZXJ0aWVzLmhhcygnbGFzdE5hbWUnKSkge1xuICAgICAqICAgICB0aGlzLnNoYSA9IGNvbXB1dGVTSEEoYCR7dGhpcy5maXJzdE5hbWV9ICR7dGhpcy5sYXN0TmFtZX1gKTtcbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICpcbiAgICAgKiByZW5kZXIoKSB7XG4gICAgICogICByZXR1cm4gaHRtbGBTSEE6ICR7dGhpcy5zaGF9YDtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHdpbGxVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7IH1cbiAgICAvLyBOb3RlLCB0aGlzIGlzIGFuIG92ZXJyaWRlIHBvaW50IGZvciBwb2x5ZmlsbC1zdXBwb3J0LlxuICAgIC8vIEBpbnRlcm5hbFxuICAgIF8kZGlkVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3RVcGRhdGVkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjKTsgfSk7XG4gICAgICAgIGlmICghdGhpcy5oYXNVcGRhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhc1VwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIGlmIChERVZfTU9ERSAmJlxuICAgICAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgJiZcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZW5hYmxlZFdhcm5pbmdzLmluZGV4T2YoJ2NoYW5nZS1pbi11cGRhdGUnKSA+PSAwKSB7XG4gICAgICAgICAgICBpc3N1ZVdhcm5pbmcoJ2NoYW5nZS1pbi11cGRhdGUnLCBgRWxlbWVudCAke3RoaXMubG9jYWxOYW1lfSBzY2hlZHVsZWQgYW4gdXBkYXRlIGAgK1xuICAgICAgICAgICAgICAgIGAoZ2VuZXJhbGx5IGJlY2F1c2UgYSBwcm9wZXJ0eSB3YXMgc2V0KSBgICtcbiAgICAgICAgICAgICAgICBgYWZ0ZXIgYW4gdXBkYXRlIGNvbXBsZXRlZCwgY2F1c2luZyBhIG5ldyB1cGRhdGUgdG8gYmUgc2NoZWR1bGVkLiBgICtcbiAgICAgICAgICAgICAgICBgVGhpcyBpcyBpbmVmZmljaWVudCBhbmQgc2hvdWxkIGJlIGF2b2lkZWQgdW5sZXNzIHRoZSBuZXh0IHVwZGF0ZSBgICtcbiAgICAgICAgICAgICAgICBgY2FuIG9ubHkgYmUgc2NoZWR1bGVkIGFzIGEgc2lkZSBlZmZlY3Qgb2YgdGhlIHByZXZpb3VzIHVwZGF0ZS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfX21hcmtVcGRhdGVkKCkge1xuICAgICAgICB0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZWxlbWVudCBoYXMgY29tcGxldGVkIHVwZGF0aW5nLlxuICAgICAqIFRoZSBQcm9taXNlIHZhbHVlIGlzIGEgYm9vbGVhbiB0aGF0IGlzIGB0cnVlYCBpZiB0aGUgZWxlbWVudCBjb21wbGV0ZWQgdGhlXG4gICAgICogdXBkYXRlIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS4gVGhlIFByb21pc2UgcmVzdWx0IGlzIGBmYWxzZWAgaWZcbiAgICAgKiBhIHByb3BlcnR5IHdhcyBzZXQgaW5zaWRlIGB1cGRhdGVkKClgLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgYW5cbiAgICAgKiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgdGhlIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIFRvIGF3YWl0IGFkZGl0aW9uYWwgYXN5bmNocm9ub3VzIHdvcmssIG92ZXJyaWRlIHRoZSBgZ2V0VXBkYXRlQ29tcGxldGVgXG4gICAgICogbWV0aG9kLiBGb3IgZXhhbXBsZSwgaXQgaXMgc29tZXRpbWVzIHVzZWZ1bCB0byBhd2FpdCBhIHJlbmRlcmVkIGVsZW1lbnRcbiAgICAgKiBiZWZvcmUgZnVsZmlsbGluZyB0aGlzIFByb21pc2UuIFRvIGRvIHRoaXMsIGZpcnN0IGF3YWl0XG4gICAgICogYHN1cGVyLmdldFVwZGF0ZUNvbXBsZXRlKClgLCB0aGVuIGFueSBzdWJzZXF1ZW50IHN0YXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiBBIHByb21pc2Ugb2YgYSBib29sZWFuIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgdXBkYXRlIGNvbXBsZXRlZFxuICAgICAqICAgICB3aXRob3V0IHRyaWdnZXJpbmcgYW5vdGhlciB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBnZXQgdXBkYXRlQ29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFVwZGF0ZUNvbXBsZXRlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHBvaW50IGZvciB0aGUgYHVwZGF0ZUNvbXBsZXRlYCBwcm9taXNlLlxuICAgICAqXG4gICAgICogSXQgaXMgbm90IHNhZmUgdG8gb3ZlcnJpZGUgdGhlIGB1cGRhdGVDb21wbGV0ZWAgZ2V0dGVyIGRpcmVjdGx5IGR1ZSB0byBhXG4gICAgICogbGltaXRhdGlvbiBpbiBUeXBlU2NyaXB0IHdoaWNoIG1lYW5zIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBjYWxsIGFcbiAgICAgKiBzdXBlcmNsYXNzIGdldHRlciAoZS5nLiBgc3VwZXIudXBkYXRlQ29tcGxldGUudGhlbiguLi4pYCkgd2hlbiB0aGUgdGFyZ2V0XG4gICAgICogbGFuZ3VhZ2UgaXMgRVM1IChodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzMzOCkuXG4gICAgICogVGhpcyBtZXRob2Qgc2hvdWxkIGJlIG92ZXJyaWRkZW4gaW5zdGVhZC4gRm9yIGV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgICAqICAgb3ZlcnJpZGUgYXN5bmMgZ2V0VXBkYXRlQ29tcGxldGUoKSB7XG4gICAgICogICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN1cGVyLmdldFVwZGF0ZUNvbXBsZXRlKCk7XG4gICAgICogICAgIGF3YWl0IHRoaXMuX215Q2hpbGQudXBkYXRlQ29tcGxldGU7XG4gICAgICogICAgIHJldHVybiByZXN1bHQ7XG4gICAgICogICB9XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHJldHVybiBBIHByb21pc2Ugb2YgYSBib29sZWFuIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgdXBkYXRlIGNvbXBsZXRlZFxuICAgICAqICAgICB3aXRob3V0IHRyaWdnZXJpbmcgYW5vdGhlciB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBnZXRVcGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX191cGRhdGVQcm9taXNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb250cm9scyB3aGV0aGVyIG9yIG5vdCBgdXBkYXRlKClgIHNob3VsZCBiZSBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCByZXF1ZXN0c1xuICAgICAqIGFuIHVwZGF0ZS4gQnkgZGVmYXVsdCwgdGhpcyBtZXRob2QgYWx3YXlzIHJldHVybnMgYHRydWVgLCBidXQgdGhpcyBjYW4gYmVcbiAgICAgKiBjdXN0b21pemVkIHRvIGNvbnRyb2wgd2hlbiB0byB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBzaG91bGRVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBlbGVtZW50LiBUaGlzIG1ldGhvZCByZWZsZWN0cyBwcm9wZXJ0eSB2YWx1ZXMgdG8gYXR0cmlidXRlcy5cbiAgICAgKiBJdCBjYW4gYmUgb3ZlcnJpZGRlbiB0byByZW5kZXIgYW5kIGtlZXAgdXBkYXRlZCBlbGVtZW50IERPTS5cbiAgICAgKiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgKm5vdCogdHJpZ2dlclxuICAgICAqIGFub3RoZXIgdXBkYXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgdXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgICBpZiAodGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvclxuICAgICAgICAgICAgLy8gbG9vcHMgZXhwZWN0aW5nIGFycmF5c1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzLmZvckVhY2goKHYsIGspID0+IHRoaXMuX19wcm9wZXJ0eVRvQXR0cmlidXRlKGssIHRoaXNba10sIHYpKTtcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fbWFya1VwZGF0ZWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuZXZlciB0aGUgZWxlbWVudCBpcyB1cGRhdGVkLiBJbXBsZW1lbnQgdG8gcGVyZm9ybVxuICAgICAqIHBvc3QtdXBkYXRpbmcgdGFza3MgdmlhIERPTSBBUElzLCBmb3IgZXhhbXBsZSwgZm9jdXNpbmcgYW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCB0cmlnZ2VyIHRoZSBlbGVtZW50IHRvIHVwZGF0ZVxuICAgICAqIGFnYWluIGFmdGVyIHRoaXMgdXBkYXRlIGN5Y2xlIGNvbXBsZXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHVwZGF0ZWQoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7IH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGVsZW1lbnQgaXMgZmlyc3QgdXBkYXRlZC4gSW1wbGVtZW50IHRvIHBlcmZvcm0gb25lIHRpbWVcbiAgICAgKiB3b3JrIG9uIHRoZSBlbGVtZW50IGFmdGVyIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogZmlyc3RVcGRhdGVkKCkge1xuICAgICAqICAgdGhpcy5yZW5kZXJSb290LmdldEVsZW1lbnRCeUlkKCdteS10ZXh0LWFyZWEnKS5mb2N1cygpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCB0cmlnZ2VyIHRoZSBlbGVtZW50IHRvIHVwZGF0ZVxuICAgICAqIGFnYWluIGFmdGVyIHRoaXMgdXBkYXRlIGN5Y2xlIGNvbXBsZXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGZpcnN0VXBkYXRlZChfY2hhbmdlZFByb3BlcnRpZXMpIHsgfVxufVxuX2QgPSBmaW5hbGl6ZWQ7XG4vKipcbiAqIE1hcmtzIGNsYXNzIGFzIGhhdmluZyBmaW5pc2hlZCBjcmVhdGluZyBwcm9wZXJ0aWVzLlxuICovXG5SZWFjdGl2ZUVsZW1lbnRbX2RdID0gdHJ1ZTtcbi8qKlxuICogTWVtb2l6ZWQgbGlzdCBvZiBhbGwgZWxlbWVudCBwcm9wZXJ0aWVzLCBpbmNsdWRpbmcgYW55IHN1cGVyY2xhc3MgcHJvcGVydGllcy5cbiAqIENyZWF0ZWQgbGF6aWx5IG9uIHVzZXIgc3ViY2xhc3NlcyB3aGVuIGZpbmFsaXppbmcgdGhlIGNsYXNzLlxuICogQG5vY29sbGFwc2VcbiAqIEBjYXRlZ29yeSBwcm9wZXJ0aWVzXG4gKi9cblJlYWN0aXZlRWxlbWVudC5lbGVtZW50UHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbi8qKlxuICogTWVtb2l6ZWQgbGlzdCBvZiBhbGwgZWxlbWVudCBzdHlsZXMuXG4gKiBDcmVhdGVkIGxhemlseSBvbiB1c2VyIHN1YmNsYXNzZXMgd2hlbiBmaW5hbGl6aW5nIHRoZSBjbGFzcy5cbiAqIEBub2NvbGxhcHNlXG4gKiBAY2F0ZWdvcnkgc3R5bGVzXG4gKi9cblJlYWN0aXZlRWxlbWVudC5lbGVtZW50U3R5bGVzID0gW107XG4vKipcbiAqIE9wdGlvbnMgdXNlZCB3aGVuIGNhbGxpbmcgYGF0dGFjaFNoYWRvd2AuIFNldCB0aGlzIHByb3BlcnR5IHRvIGN1c3RvbWl6ZVxuICogdGhlIG9wdGlvbnMgZm9yIHRoZSBzaGFkb3dSb290OyBmb3IgZXhhbXBsZSwgdG8gY3JlYXRlIGEgY2xvc2VkXG4gKiBzaGFkb3dSb290OiBge21vZGU6ICdjbG9zZWQnfWAuXG4gKlxuICogTm90ZSwgdGhlc2Ugb3B0aW9ucyBhcmUgdXNlZCBpbiBgY3JlYXRlUmVuZGVyUm9vdGAuIElmIHRoaXMgbWV0aG9kXG4gKiBpcyBjdXN0b21pemVkLCBvcHRpb25zIHNob3VsZCBiZSByZXNwZWN0ZWQgaWYgcG9zc2libGUuXG4gKiBAbm9jb2xsYXBzZVxuICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICovXG5SZWFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdE9wdGlvbnMgPSB7IG1vZGU6ICdvcGVuJyB9O1xuLy8gQXBwbHkgcG9seWZpbGxzIGlmIGF2YWlsYWJsZVxucG9seWZpbGxTdXBwb3J0ID09PSBudWxsIHx8IHBvbHlmaWxsU3VwcG9ydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9seWZpbGxTdXBwb3J0KHsgUmVhY3RpdmVFbGVtZW50IH0pO1xuLy8gRGV2IG1vZGUgd2FybmluZ3MuLi5cbmlmIChERVZfTU9ERSkge1xuICAgIC8vIERlZmF1bHQgd2FybmluZyBzZXQuXG4gICAgUmVhY3RpdmVFbGVtZW50LmVuYWJsZWRXYXJuaW5ncyA9IFsnY2hhbmdlLWluLXVwZGF0ZSddO1xuICAgIGNvbnN0IGVuc3VyZU93bldhcm5pbmdzID0gZnVuY3Rpb24gKGN0b3IpIHtcbiAgICAgICAgaWYgKCFjdG9yLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ2VuYWJsZWRXYXJuaW5ncycsIGN0b3IpKSkge1xuICAgICAgICAgICAgY3Rvci5lbmFibGVkV2FybmluZ3MgPSBjdG9yLmVuYWJsZWRXYXJuaW5ncy5zbGljZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZWFjdGl2ZUVsZW1lbnQuZW5hYmxlV2FybmluZyA9IGZ1bmN0aW9uICh3YXJuaW5nKSB7XG4gICAgICAgIGVuc3VyZU93bldhcm5pbmdzKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5lbmFibGVkV2FybmluZ3MuaW5kZXhPZih3YXJuaW5nKSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZFdhcm5pbmdzLnB1c2god2FybmluZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aXZlRWxlbWVudC5kaXNhYmxlV2FybmluZyA9IGZ1bmN0aW9uICh3YXJuaW5nKSB7XG4gICAgICAgIGVuc3VyZU93bldhcm5pbmdzKHRoaXMpO1xuICAgICAgICBjb25zdCBpID0gdGhpcy5lbmFibGVkV2FybmluZ3MuaW5kZXhPZih3YXJuaW5nKTtcbiAgICAgICAgaWYgKGkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVkV2FybmluZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgUmVhY3RpdmVFbGVtZW50IHVzYWdlLlxuKChfYyA9IGdsb2JhbFRoaXMucmVhY3RpdmVFbGVtZW50VmVyc2lvbnMpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IChnbG9iYWxUaGlzLnJlYWN0aXZlRWxlbWVudFZlcnNpb25zID0gW10pKS5wdXNoKCcxLjMuMScpO1xuaWYgKERFVl9NT0RFICYmIGdsb2JhbFRoaXMucmVhY3RpdmVFbGVtZW50VmVyc2lvbnMubGVuZ3RoID4gMSkge1xuICAgIGlzc3VlV2FybmluZygnbXVsdGlwbGUtdmVyc2lvbnMnLCBgTXVsdGlwbGUgdmVyc2lvbnMgb2YgTGl0IGxvYWRlZC4gTG9hZGluZyBtdWx0aXBsZSB2ZXJzaW9ucyBgICtcbiAgICAgICAgYGlzIG5vdCByZWNvbW1lbmRlZC5gKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0aXZlLWVsZW1lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2EsIF9iLCBfYztcbi8qKlxuICogVGhlIG1haW4gTGl0RWxlbWVudCBtb2R1bGUsIHdoaWNoIGRlZmluZXMgdGhlIHtAbGlua2NvZGUgTGl0RWxlbWVudH0gYmFzZVxuICogY2xhc3MgYW5kIHJlbGF0ZWQgQVBJcy5cbiAqXG4gKiAgTGl0RWxlbWVudCBjb21wb25lbnRzIGNhbiBkZWZpbmUgYSB0ZW1wbGF0ZSBhbmQgYSBzZXQgb2Ygb2JzZXJ2ZWRcbiAqIHByb3BlcnRpZXMuIENoYW5naW5nIGFuIG9ic2VydmVkIHByb3BlcnR5IHRyaWdnZXJzIGEgcmUtcmVuZGVyIG9mIHRoZVxuICogZWxlbWVudC5cbiAqXG4gKiAgSW1wb3J0IHtAbGlua2NvZGUgTGl0RWxlbWVudH0gYW5kIHtAbGlua2NvZGUgaHRtbH0gZnJvbSB0aGlzIG1vZHVsZSB0b1xuICogY3JlYXRlIGEgY29tcG9uZW50OlxuICpcbiAqICBgYGBqc1xuICogaW1wb3J0IHtMaXRFbGVtZW50LCBodG1sfSBmcm9tICdsaXQtZWxlbWVudCc7XG4gKlxuICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gKlxuICogICAvLyBEZWNsYXJlIG9ic2VydmVkIHByb3BlcnRpZXNcbiAqICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICogICAgIHJldHVybiB7XG4gKiAgICAgICBhZGplY3RpdmU6IHt9XG4gKiAgICAgfVxuICogICB9XG4gKlxuICogICBjb25zdHJ1Y3RvcigpIHtcbiAqICAgICB0aGlzLmFkamVjdGl2ZSA9ICdhd2Vzb21lJztcbiAqICAgfVxuICpcbiAqICAgLy8gRGVmaW5lIHRoZSBlbGVtZW50J3MgdGVtcGxhdGVcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYDxwPnlvdXIgJHthZGplY3RpdmV9IHRlbXBsYXRlIGhlcmU8L3A+YDtcbiAqICAgfVxuICogfVxuICpcbiAqIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbXktZWxlbWVudCcsIE15RWxlbWVudCk7XG4gKiBgYGBcbiAqXG4gKiBgTGl0RWxlbWVudGAgZXh0ZW5kcyB7QGxpbmtjb2RlIFJlYWN0aXZlRWxlbWVudH0gYW5kIGFkZHMgbGl0LWh0bWxcbiAqIHRlbXBsYXRpbmcuIFRoZSBgUmVhY3RpdmVFbGVtZW50YCBjbGFzcyBpcyBwcm92aWRlZCBmb3IgdXNlcnMgdGhhdCB3YW50IHRvXG4gKiBidWlsZCB0aGVpciBvd24gY3VzdG9tIGVsZW1lbnQgYmFzZSBjbGFzc2VzIHRoYXQgZG9uJ3QgdXNlIGxpdC1odG1sLlxuICpcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5pbXBvcnQgeyBSZWFjdGl2ZUVsZW1lbnQgfSBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQnO1xuaW1wb3J0IHsgcmVuZGVyLCBub0NoYW5nZSB9IGZyb20gJ2xpdC1odG1sJztcbmV4cG9ydCAqIGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudCc7XG5leHBvcnQgKiBmcm9tICdsaXQtaHRtbCc7XG4vLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXhwb3J0IFJlYWN0aXZlRWxlbWVudCBhcyBVcGRhdGluZ0VsZW1lbnQuIE5vdGUsXG4vLyBJRSB0cmFuc3BpbGF0aW9uIHJlcXVpcmVzIGV4cG9ydGluZyBsaWtlIHRoaXMuXG5leHBvcnQgY29uc3QgVXBkYXRpbmdFbGVtZW50ID0gUmVhY3RpdmVFbGVtZW50O1xuY29uc3QgREVWX01PREUgPSB0cnVlO1xubGV0IGlzc3VlV2FybmluZztcbmlmIChERVZfTU9ERSkge1xuICAgIC8vIEVuc3VyZSB3YXJuaW5ncyBhcmUgaXNzdWVkIG9ubHkgMXgsIGV2ZW4gaWYgbXVsdGlwbGUgdmVyc2lvbnMgb2YgTGl0XG4gICAgLy8gYXJlIGxvYWRlZC5cbiAgICBjb25zdCBpc3N1ZWRXYXJuaW5ncyA9ICgoX2EgPSBnbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncyA9IG5ldyBTZXQoKSkpO1xuICAgIC8vIElzc3VlIGEgd2FybmluZywgaWYgd2UgaGF2ZW4ndCBhbHJlYWR5LlxuICAgIGlzc3VlV2FybmluZyA9IChjb2RlLCB3YXJuaW5nKSA9PiB7XG4gICAgICAgIHdhcm5pbmcgKz0gYCBTZWUgaHR0cHM6Ly9saXQuZGV2L21zZy8ke2NvZGV9IGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgIGlmICghaXNzdWVkV2FybmluZ3MuaGFzKHdhcm5pbmcpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4od2FybmluZyk7XG4gICAgICAgICAgICBpc3N1ZWRXYXJuaW5ncy5hZGQod2FybmluZyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuLyoqXG4gKiBCYXNlIGVsZW1lbnQgY2xhc3MgdGhhdCBtYW5hZ2VzIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcywgYW5kXG4gKiByZW5kZXJzIGEgbGl0LWh0bWwgdGVtcGxhdGUuXG4gKlxuICogVG8gZGVmaW5lIGEgY29tcG9uZW50LCBzdWJjbGFzcyBgTGl0RWxlbWVudGAgYW5kIGltcGxlbWVudCBhXG4gKiBgcmVuZGVyYCBtZXRob2QgdG8gcHJvdmlkZSB0aGUgY29tcG9uZW50J3MgdGVtcGxhdGUuIERlZmluZSBwcm9wZXJ0aWVzXG4gKiB1c2luZyB0aGUge0BsaW5rY29kZSBMaXRFbGVtZW50LnByb3BlcnRpZXMgcHJvcGVydGllc30gcHJvcGVydHkgb3IgdGhlXG4gKiB7QGxpbmtjb2RlIHByb3BlcnR5fSBkZWNvcmF0b3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXRFbGVtZW50IGV4dGVuZHMgUmVhY3RpdmVFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVuZGVyT3B0aW9ucyA9IHsgaG9zdDogdGhpcyB9O1xuICAgICAgICB0aGlzLl9fY2hpbGRQYXJ0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gICAgICovXG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX2I7XG4gICAgICAgIGNvbnN0IHJlbmRlclJvb3QgPSBzdXBlci5jcmVhdGVSZW5kZXJSb290KCk7XG4gICAgICAgIC8vIFdoZW4gYWRvcHRlZFN0eWxlU2hlZXRzIGFyZSBzaGltbWVkLCB0aGV5IGFyZSBpbnNlcnRlZCBpbnRvIHRoZVxuICAgICAgICAvLyBzaGFkb3dSb290IGJ5IGNyZWF0ZVJlbmRlclJvb3QuIEFkanVzdCB0aGUgcmVuZGVyQmVmb3JlIG5vZGUgc28gdGhhdFxuICAgICAgICAvLyBhbnkgc3R5bGVzIGluIExpdCBjb250ZW50IHJlbmRlciBiZWZvcmUgYWRvcHRlZFN0eWxlU2hlZXRzLiBUaGlzIGlzXG4gICAgICAgIC8vIGltcG9ydGFudCBzbyB0aGF0IGFkb3B0ZWRTdHlsZVNoZWV0cyBoYXZlIHByZWNlZGVuY2Ugb3ZlciBzdHlsZXMgaW5cbiAgICAgICAgLy8gdGhlIHNoYWRvd1Jvb3QuXG4gICAgICAgIChfYSA9IChfYiA9IHRoaXMucmVuZGVyT3B0aW9ucykucmVuZGVyQmVmb3JlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoX2IucmVuZGVyQmVmb3JlID0gcmVuZGVyUm9vdC5maXJzdENoaWxkKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlclJvb3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzXG4gICAgICogYW5kIGNhbGxzIGByZW5kZXJgIHRvIHJlbmRlciBET00gdmlhIGxpdC1odG1sLiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlXG4gICAgICogdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyIGFub3RoZXIgdXBkYXRlLlxuICAgICAqIEBwYXJhbSBjaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgdXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIC8vIFNldHRpbmcgcHJvcGVydGllcyBpbiBgcmVuZGVyYCBzaG91bGQgbm90IHRyaWdnZXIgYW4gdXBkYXRlLiBTaW5jZVxuICAgICAgICAvLyB1cGRhdGVzIGFyZSBhbGxvd2VkIGFmdGVyIHN1cGVyLnVwZGF0ZSwgaXQncyBpbXBvcnRhbnQgdG8gY2FsbCBgcmVuZGVyYFxuICAgICAgICAvLyBiZWZvcmUgdGhhdC5cbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnJlbmRlcigpO1xuICAgICAgICBpZiAoIXRoaXMuaGFzVXBkYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJPcHRpb25zLmlzQ29ubmVjdGVkID0gdGhpcy5pc0Nvbm5lY3RlZDtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB0aGlzLl9fY2hpbGRQYXJ0ID0gcmVuZGVyKHZhbHVlLCB0aGlzLnJlbmRlclJvb3QsIHRoaXMucmVuZGVyT3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFkZGVkIHRvIHRoZSBkb2N1bWVudCdzIERPTS5cbiAgICAgKlxuICAgICAqIEluIGBjb25uZWN0ZWRDYWxsYmFjaygpYCB5b3Ugc2hvdWxkIHNldHVwIHRhc2tzIHRoYXQgc2hvdWxkIG9ubHkgb2NjdXIgd2hlblxuICAgICAqIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCB0byB0aGUgZG9jdW1lbnQuIFRoZSBtb3N0IGNvbW1vbiBvZiB0aGVzZSBpc1xuICAgICAqIGFkZGluZyBldmVudCBsaXN0ZW5lcnMgdG8gbm9kZXMgZXh0ZXJuYWwgdG8gdGhlIGVsZW1lbnQsIGxpa2UgYSBrZXlkb3duXG4gICAgICogZXZlbnQgaGFuZGxlciBhZGRlZCB0byB0aGUgd2luZG93LlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgKiAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICogICBhZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlS2V5ZG93bik7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogVHlwaWNhbGx5LCBhbnl0aGluZyBkb25lIGluIGBjb25uZWN0ZWRDYWxsYmFjaygpYCBzaG91bGQgYmUgdW5kb25lIHdoZW4gdGhlXG4gICAgICogZWxlbWVudCBpcyBkaXNjb25uZWN0ZWQsIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFjaygpYC5cbiAgICAgKlxuICAgICAqIEBjYXRlZ29yeSBsaWZlY3ljbGVcbiAgICAgKi9cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY2hpbGRQYXJ0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0Q29ubmVjdGVkKHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIGRvY3VtZW50J3MgRE9NLlxuICAgICAqXG4gICAgICogVGhpcyBjYWxsYmFjayBpcyB0aGUgbWFpbiBzaWduYWwgdG8gdGhlIGVsZW1lbnQgdGhhdCBpdCBtYXkgbm8gbG9uZ2VyIGJlXG4gICAgICogdXNlZC4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrKClgIHNob3VsZCBlbnN1cmUgdGhhdCBub3RoaW5nIGlzIGhvbGRpbmcgYVxuICAgICAqIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCAoc3VjaCBhcyBldmVudCBsaXN0ZW5lcnMgYWRkZWQgdG8gbm9kZXMgZXh0ZXJuYWxcbiAgICAgKiB0byB0aGUgZWxlbWVudCksIHNvIHRoYXQgaXQgaXMgZnJlZSB0byBiZSBnYXJiYWdlIGNvbGxlY3RlZC5cbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICogICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAqICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVLZXlkb3duKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBBbiBlbGVtZW50IG1heSBiZSByZS1jb25uZWN0ZWQgYWZ0ZXIgYmVpbmcgZGlzY29ubmVjdGVkLlxuICAgICAqXG4gICAgICogQGNhdGVnb3J5IGxpZmVjeWNsZVxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIChfYSA9IHRoaXMuX19jaGlsZFBhcnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRDb25uZWN0ZWQoZmFsc2UpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIGVhY2ggdXBkYXRlIHRvIHBlcmZvcm0gcmVuZGVyaW5nIHRhc2tzLiBUaGlzIG1ldGhvZCBtYXkgcmV0dXJuXG4gICAgICogYW55IHZhbHVlIHJlbmRlcmFibGUgYnkgbGl0LWh0bWwncyBgQ2hpbGRQYXJ0YCAtIHR5cGljYWxseSBhXG4gICAgICogYFRlbXBsYXRlUmVzdWx0YC4gU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXJcbiAgICAgKiB0aGUgZWxlbWVudCB0byB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIG5vQ2hhbmdlO1xuICAgIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoaXMgY2xhc3MgaXMgbWFya2VkIGFzIGBmaW5hbGl6ZWRgIGFzIGFuIG9wdGltaXphdGlvbiBlbnN1cmluZ1xuICogaXQgd2lsbCBub3QgbmVlZGxlc3NseSB0cnkgdG8gYGZpbmFsaXplYC5cbiAqXG4gKiBOb3RlIHRoaXMgcHJvcGVydHkgbmFtZSBpcyBhIHN0cmluZyB0byBwcmV2ZW50IGJyZWFraW5nIENsb3N1cmUgSlMgQ29tcGlsZXJcbiAqIG9wdGltaXphdGlvbnMuIFNlZSBAbGl0L3JlYWN0aXZlLWVsZW1lbnQgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKi9cbkxpdEVsZW1lbnRbJ2ZpbmFsaXplZCddID0gdHJ1ZTtcbi8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG5MaXRFbGVtZW50WydfJGxpdEVsZW1lbnQkJ10gPSB0cnVlO1xuLy8gSW5zdGFsbCBoeWRyYXRpb24gaWYgYXZhaWxhYmxlXG4oX2IgPSBnbG9iYWxUaGlzLmxpdEVsZW1lbnRIeWRyYXRlU3VwcG9ydCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoZ2xvYmFsVGhpcywgeyBMaXRFbGVtZW50IH0pO1xuLy8gQXBwbHkgcG9seWZpbGxzIGlmIGF2YWlsYWJsZVxuY29uc3QgcG9seWZpbGxTdXBwb3J0ID0gREVWX01PREVcbiAgICA/IGdsb2JhbFRoaXMubGl0RWxlbWVudFBvbHlmaWxsU3VwcG9ydERldk1vZGVcbiAgICA6IGdsb2JhbFRoaXMubGl0RWxlbWVudFBvbHlmaWxsU3VwcG9ydDtcbnBvbHlmaWxsU3VwcG9ydCA9PT0gbnVsbCB8fCBwb2x5ZmlsbFN1cHBvcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBvbHlmaWxsU3VwcG9ydCh7IExpdEVsZW1lbnQgfSk7XG4vLyBERVYgbW9kZSB3YXJuaW5nc1xuaWYgKERFVl9NT0RFKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuICAgIC8vIE5vdGUsIGZvciBjb21wYXRpYmlsaXR5IHdpdGggY2xvc3VyZSBjb21waWxhdGlvbiwgdGhpcyBhY2Nlc3NcbiAgICAvLyBuZWVkcyB0byBiZSBhcyBhIHN0cmluZyBwcm9wZXJ0eSBpbmRleC5cbiAgICBMaXRFbGVtZW50WydmaW5hbGl6ZSddID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBmaW5hbGl6ZWQgPSBSZWFjdGl2ZUVsZW1lbnQuZmluYWxpemUuY2FsbCh0aGlzKTtcbiAgICAgICAgaWYgKCFmaW5hbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3YXJuUmVtb3ZlZE9yUmVuYW1lZCA9IChvYmosIG5hbWUsIHJlbmFtZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0b3JOYW1lID0gKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicgPyBvYmogOiBvYmouY29uc3RydWN0b3IpXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lO1xuICAgICAgICAgICAgICAgIGlzc3VlV2FybmluZyhyZW5hbWVkID8gJ3JlbmFtZWQtYXBpJyA6ICdyZW1vdmVkLWFwaScsIGBcXGAke25hbWV9XFxgIGlzIGltcGxlbWVudGVkIG9uIGNsYXNzICR7Y3Rvck5hbWV9LiBJdCBgICtcbiAgICAgICAgICAgICAgICAgICAgYGhhcyBiZWVuICR7cmVuYW1lZCA/ICdyZW5hbWVkJyA6ICdyZW1vdmVkJ30gYCArXG4gICAgICAgICAgICAgICAgICAgIGBpbiB0aGlzIHZlcnNpb24gb2YgTGl0RWxlbWVudC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2FyblJlbW92ZWRPclJlbmFtZWQodGhpcywgJ3JlbmRlcicpO1xuICAgICAgICB3YXJuUmVtb3ZlZE9yUmVuYW1lZCh0aGlzLCAnZ2V0U3R5bGVzJywgdHJ1ZSk7XG4gICAgICAgIHdhcm5SZW1vdmVkT3JSZW5hbWVkKHRoaXMucHJvdG90eXBlLCAnYWRvcHRTdHlsZXMnKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbn1cbi8qKlxuICogRU5EIFVTRVJTIFNIT1VMRCBOT1QgUkVMWSBPTiBUSElTIE9CSkVDVC5cbiAqXG4gKiBQcml2YXRlIGV4cG9ydHMgZm9yIHVzZSBieSBvdGhlciBMaXQgcGFja2FnZXMsIG5vdCBpbnRlbmRlZCBmb3IgdXNlIGJ5XG4gKiBleHRlcm5hbCB1c2Vycy5cbiAqXG4gKiBXZSBjdXJyZW50bHkgZG8gbm90IG1ha2UgYSBtYW5nbGVkIHJvbGx1cCBidWlsZCBvZiB0aGUgbGl0LXNzciBjb2RlLiBJbiBvcmRlclxuICogdG8ga2VlcCBhIG51bWJlciBvZiAob3RoZXJ3aXNlIHByaXZhdGUpIHRvcC1sZXZlbCBleHBvcnRzICBtYW5nbGVkIGluIHRoZVxuICogY2xpZW50IHNpZGUgY29kZSwgd2UgZXhwb3J0IGEgXyRMRSBvYmplY3QgY29udGFpbmluZyB0aG9zZSBtZW1iZXJzIChvclxuICogaGVscGVyIG1ldGhvZHMgZm9yIGFjY2Vzc2luZyBwcml2YXRlIGZpZWxkcyBvZiB0aG9zZSBtZW1iZXJzKSwgYW5kIHRoZW5cbiAqIHJlLWV4cG9ydCB0aGVtIGZvciB1c2UgaW4gbGl0LXNzci4gVGhpcyBrZWVwcyBsaXQtc3NyIGFnbm9zdGljIHRvIHdoZXRoZXIgdGhlXG4gKiBjbGllbnQtc2lkZSBjb2RlIGlzIGJlaW5nIHVzZWQgaW4gYGRldmAgbW9kZSBvciBgcHJvZGAgbW9kZS5cbiAqXG4gKiBUaGlzIGhhcyBhIHVuaXF1ZSBuYW1lLCB0byBkaXNhbWJpZ3VhdGUgaXQgZnJvbSBwcml2YXRlIGV4cG9ydHMgaW5cbiAqIGxpdC1odG1sLCBzaW5jZSB0aGlzIG1vZHVsZSByZS1leHBvcnRzIGFsbCBvZiBsaXQtaHRtbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgXyRMRSA9IHtcbiAgICBfJGF0dHJpYnV0ZVRvUHJvcGVydHk6IChlbCwgbmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGVsLl8kYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgfSxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBfJGNoYW5nZWRQcm9wZXJ0aWVzOiAoZWwpID0+IGVsLl8kY2hhbmdlZFByb3BlcnRpZXMsXG59O1xuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBMaXRFbGVtZW50IHVzYWdlLlxuKChfYyA9IGdsb2JhbFRoaXMubGl0RWxlbWVudFZlcnNpb25zKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAoZ2xvYmFsVGhpcy5saXRFbGVtZW50VmVyc2lvbnMgPSBbXSkpLnB1c2goJzMuMi4wJyk7XG5pZiAoREVWX01PREUgJiYgZ2xvYmFsVGhpcy5saXRFbGVtZW50VmVyc2lvbnMubGVuZ3RoID4gMSkge1xuICAgIGlzc3VlV2FybmluZygnbXVsdGlwbGUtdmVyc2lvbnMnLCBgTXVsdGlwbGUgdmVyc2lvbnMgb2YgTGl0IGxvYWRlZC4gTG9hZGluZyBtdWx0aXBsZSB2ZXJzaW9ucyBgICtcbiAgICAgICAgYGlzIG5vdCByZWNvbW1lbmRlZC5gKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1lbGVtZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuaW1wb3J0IHsgbm90aGluZyB9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcbi8qKlxuICogRm9yIEF0dHJpYnV0ZVBhcnRzLCBzZXRzIHRoZSBhdHRyaWJ1dGUgaWYgdGhlIHZhbHVlIGlzIGRlZmluZWQgYW5kIHJlbW92ZXNcbiAqIHRoZSBhdHRyaWJ1dGUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiBGb3Igb3RoZXIgcGFydCB0eXBlcywgdGhpcyBkaXJlY3RpdmUgaXMgYSBuby1vcC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlmRGVmaW5lZCA9ICh2YWx1ZSkgPT4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogbm90aGluZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlmLWRlZmluZWQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2EsIF9iLCBfYywgX2Q7XG5jb25zdCBERVZfTU9ERSA9IHRydWU7XG5jb25zdCBFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MgPSB0cnVlO1xuY29uc3QgRU5BQkxFX1NIQURZRE9NX05PUEFUQ0ggPSB0cnVlO1xuLyoqXG4gKiBVc2VmdWwgZm9yIHZpc3VhbGl6aW5nIGFuZCBsb2dnaW5nIGluc2lnaHRzIGludG8gd2hhdCB0aGUgTGl0IHRlbXBsYXRlIHN5c3RlbSBpcyBkb2luZy5cbiAqXG4gKiBDb21waWxlZCBvdXQgb2YgcHJvZCBtb2RlIGJ1aWxkcy5cbiAqL1xuY29uc3QgZGVidWdMb2dFdmVudCA9IERFVl9NT0RFXG4gICAgPyAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hvdWxkRW1pdCA9IHdpbmRvd1xuICAgICAgICAgICAgLmVtaXRMaXREZWJ1Z0xvZ0V2ZW50cztcbiAgICAgICAgaWYgKCFzaG91bGRFbWl0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdsaXQtZGVidWcnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IGV2ZW50LFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIDogdW5kZWZpbmVkO1xuLy8gVXNlZCBmb3IgY29ubmVjdGluZyBiZWdpblJlbmRlciBhbmQgZW5kUmVuZGVyIGV2ZW50cyB3aGVuIHRoZXJlIGFyZSBuZXN0ZWRcbi8vIHJlbmRlcnMgd2hlbiBlcnJvcnMgYXJlIHRocm93biBwcmV2ZW50aW5nIGFuIGVuZFJlbmRlciBldmVudCBmcm9tIGJlaW5nXG4vLyBjYWxsZWQuXG5sZXQgZGVidWdMb2dSZW5kZXJJZCA9IDA7XG4vKipcbiAqIGB0cnVlYCBpZiB3ZSdyZSBidWlsZGluZyBmb3IgZ29vZ2xlMyB3aXRoIHRlbXBvcmFyeSBiYWNrLWNvbXBhdCBoZWxwZXJzLlxuICogVGhpcyBleHBvcnQgaXMgbm90IHByZXNlbnQgaW4gcHJvZCBidWlsZHMuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IElOVEVSTkFMID0gdHJ1ZTtcbmxldCBpc3N1ZVdhcm5pbmc7XG5pZiAoREVWX01PREUpIHtcbiAgICAoX2EgPSBnbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncyA9IG5ldyBTZXQoKSk7XG4gICAgLy8gSXNzdWUgYSB3YXJuaW5nLCBpZiB3ZSBoYXZlbid0IGFscmVhZHkuXG4gICAgaXNzdWVXYXJuaW5nID0gKGNvZGUsIHdhcm5pbmcpID0+IHtcbiAgICAgICAgd2FybmluZyArPSBjb2RlXG4gICAgICAgICAgICA/IGAgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvJHtjb2RlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICAgICAgICA6ICcnO1xuICAgICAgICBpZiAoIWdsb2JhbFRoaXMubGl0SXNzdWVkV2FybmluZ3MuaGFzKHdhcm5pbmcpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4od2FybmluZyk7XG4gICAgICAgICAgICBnbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzLmFkZCh3YXJuaW5nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaXNzdWVXYXJuaW5nKCdkZXYtbW9kZScsIGBMaXQgaXMgaW4gZGV2IG1vZGUuIE5vdCByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiFgKTtcbn1cbmNvbnN0IHdyYXAgPSBFTkFCTEVfU0hBRFlET01fTk9QQVRDSCAmJlxuICAgICgoX2IgPSB3aW5kb3cuU2hhZHlET00pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pblVzZSkgJiZcbiAgICAoKF9jID0gd2luZG93LlNoYWR5RE9NKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Mubm9QYXRjaCkgPT09IHRydWVcbiAgICA/IHdpbmRvdy5TaGFkeURPTS53cmFwXG4gICAgOiAobm9kZSkgPT4gbm9kZTtcbmNvbnN0IHRydXN0ZWRUeXBlcyA9IGdsb2JhbFRoaXMudHJ1c3RlZFR5cGVzO1xuLyoqXG4gKiBPdXIgVHJ1c3RlZFR5cGVQb2xpY3kgZm9yIEhUTUwgd2hpY2ggaXMgZGVjbGFyZWQgdXNpbmcgdGhlIGh0bWwgdGVtcGxhdGVcbiAqIHRhZyBmdW5jdGlvbi5cbiAqXG4gKiBUaGF0IEhUTUwgaXMgYSBkZXZlbG9wZXItYXV0aG9yZWQgY29uc3RhbnQsIGFuZCBpcyBwYXJzZWQgd2l0aCBpbm5lckhUTUxcbiAqIGJlZm9yZSBhbnkgdW50cnVzdGVkIGV4cHJlc3Npb25zIGhhdmUgYmVlbiBtaXhlZCBpbi4gVGhlcmVmb3IgaXQgaXNcbiAqIGNvbnNpZGVyZWQgc2FmZSBieSBjb25zdHJ1Y3Rpb24uXG4gKi9cbmNvbnN0IHBvbGljeSA9IHRydXN0ZWRUeXBlc1xuICAgID8gdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSgnbGl0LWh0bWwnLCB7XG4gICAgICAgIGNyZWF0ZUhUTUw6IChzKSA9PiBzLFxuICAgIH0pXG4gICAgOiB1bmRlZmluZWQ7XG5jb25zdCBpZGVudGl0eUZ1bmN0aW9uID0gKHZhbHVlKSA9PiB2YWx1ZTtcbmNvbnN0IG5vb3BTYW5pdGl6ZXIgPSAoX25vZGUsIF9uYW1lLCBfdHlwZSkgPT4gaWRlbnRpdHlGdW5jdGlvbjtcbi8qKiBTZXRzIHRoZSBnbG9iYWwgc2FuaXRpemVyIGZhY3RvcnkuICovXG5jb25zdCBzZXRTYW5pdGl6ZXIgPSAobmV3U2FuaXRpemVyKSA9PiB7XG4gICAgaWYgKCFFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2FuaXRpemVyRmFjdG9yeUludGVybmFsICE9PSBub29wU2FuaXRpemVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0ZW1wdGVkIHRvIG92ZXJ3cml0ZSBleGlzdGluZyBsaXQtaHRtbCBzZWN1cml0eSBwb2xpY3kuYCArXG4gICAgICAgICAgICBgIHNldFNhbml0aXplRE9NVmFsdWVGYWN0b3J5IHNob3VsZCBiZSBjYWxsZWQgYXQgbW9zdCBvbmNlLmApO1xuICAgIH1cbiAgICBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgPSBuZXdTYW5pdGl6ZXI7XG59O1xuLyoqXG4gKiBPbmx5IHVzZWQgaW4gaW50ZXJuYWwgdGVzdHMsIG5vdCBhIHBhcnQgb2YgdGhlIHB1YmxpYyBBUEkuXG4gKi9cbmNvbnN0IF90ZXN0T25seUNsZWFyU2FuaXRpemVyRmFjdG9yeURvTm90Q2FsbE9yRWxzZSA9ICgpID0+IHtcbiAgICBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgPSBub29wU2FuaXRpemVyO1xufTtcbmNvbnN0IGNyZWF0ZVNhbml0aXplciA9IChub2RlLCBuYW1lLCB0eXBlKSA9PiB7XG4gICAgcmV0dXJuIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbChub2RlLCBuYW1lLCB0eXBlKTtcbn07XG4vLyBBZGRlZCB0byBhbiBhdHRyaWJ1dGUgbmFtZSB0byBtYXJrIHRoZSBhdHRyaWJ1dGUgYXMgYm91bmQgc28gd2UgY2FuIGZpbmRcbi8vIGl0IGVhc2lseS5cbmNvbnN0IGJvdW5kQXR0cmlidXRlU3VmZml4ID0gJyRsaXQkJztcbi8vIFRoaXMgbWFya2VyIGlzIHVzZWQgaW4gbWFueSBzeW50YWN0aWMgcG9zaXRpb25zIGluIEhUTUwsIHNvIGl0IG11c3QgYmVcbi8vIGEgdmFsaWQgZWxlbWVudCBuYW1lIGFuZCBhdHRyaWJ1dGUgbmFtZS4gV2UgZG9uJ3Qgc3VwcG9ydCBkeW5hbWljIG5hbWVzICh5ZXQpXG4vLyBidXQgdGhpcyBhdCBsZWFzdCBlbnN1cmVzIHRoYXQgdGhlIHBhcnNlIHRyZWUgaXMgY2xvc2VyIHRvIHRoZSB0ZW1wbGF0ZVxuLy8gaW50ZW50aW9uLlxuY29uc3QgbWFya2VyID0gYGxpdCQke1N0cmluZyhNYXRoLnJhbmRvbSgpKS5zbGljZSg5KX0kYDtcbi8vIFN0cmluZyB1c2VkIHRvIHRlbGwgaWYgYSBjb21tZW50IGlzIGEgbWFya2VyIGNvbW1lbnRcbmNvbnN0IG1hcmtlck1hdGNoID0gJz8nICsgbWFya2VyO1xuLy8gVGV4dCB1c2VkIHRvIGluc2VydCBhIGNvbW1lbnQgbWFya2VyIG5vZGUuIFdlIHVzZSBwcm9jZXNzaW5nIGluc3RydWN0aW9uXG4vLyBzeW50YXggYmVjYXVzZSBpdCdzIHNsaWdodGx5IHNtYWxsZXIsIGJ1dCBwYXJzZXMgYXMgYSBjb21tZW50IG5vZGUuXG5jb25zdCBub2RlTWFya2VyID0gYDwke21hcmtlck1hdGNofT5gO1xuY29uc3QgZCA9IGRvY3VtZW50O1xuLy8gQ3JlYXRlcyBhIGR5bmFtaWMgbWFya2VyLiBXZSBuZXZlciBoYXZlIHRvIHNlYXJjaCBmb3IgdGhlc2UgaW4gdGhlIERPTS5cbmNvbnN0IGNyZWF0ZU1hcmtlciA9ICh2ID0gJycpID0+IGQuY3JlYXRlQ29tbWVudCh2KTtcbmNvbnN0IGlzUHJpbWl0aXZlID0gKHZhbHVlKSA9PiB2YWx1ZSA9PT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZSAhPSAnZnVuY3Rpb24nKTtcbmNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuY29uc3QgaXNJdGVyYWJsZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgfHxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgdHlwZW9mICgoX2EgPSB2YWx1ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW1N5bWJvbC5pdGVyYXRvcl0pID09PSAnZnVuY3Rpb24nO1xufTtcbmNvbnN0IFNQQUNFX0NIQVIgPSBgWyBcXHRcXG5cXGZcXHJdYDtcbmNvbnN0IEFUVFJfVkFMVUVfQ0hBUiA9IGBbXiBcXHRcXG5cXGZcXHJcIidcXGA8Pj1dYDtcbmNvbnN0IE5BTUVfQ0hBUiA9IGBbXlxcXFxzXCInPj0vXWA7XG4vLyBUaGVzZSByZWdleGVzIHJlcHJlc2VudCB0aGUgZml2ZSBwYXJzaW5nIHN0YXRlcyB0aGF0IHdlIGNhcmUgYWJvdXQgaW4gdGhlXG4vLyBUZW1wbGF0ZSdzIEhUTUwgc2Nhbm5lci4gVGhleSBtYXRjaCB0aGUgKmVuZCogb2YgdGhlIHN0YXRlIHRoZXkncmUgbmFtZWRcbi8vIGFmdGVyLlxuLy8gRGVwZW5kaW5nIG9uIHRoZSBtYXRjaCwgd2UgdHJhbnNpdGlvbiB0byBhIG5ldyBzdGF0ZS4gSWYgdGhlcmUncyBubyBtYXRjaCxcbi8vIHdlIHN0YXkgaW4gdGhlIHNhbWUgc3RhdGUuXG4vLyBOb3RlIHRoYXQgdGhlIHJlZ2V4ZXMgYXJlIHN0YXRlZnVsLiBXZSB1dGlsaXplIGxhc3RJbmRleCBhbmQgc3luYyBpdFxuLy8gYWNyb3NzIHRoZSBtdWx0aXBsZSByZWdleGVzIHVzZWQuIEluIGFkZGl0aW9uIHRvIHRoZSBmaXZlIHJlZ2V4ZXMgYmVsb3dcbi8vIHdlIGFsc28gZHluYW1pY2FsbHkgY3JlYXRlIGEgcmVnZXggdG8gZmluZCB0aGUgbWF0Y2hpbmcgZW5kIHRhZ3MgZm9yIHJhd1xuLy8gdGV4dCBlbGVtZW50cy5cbi8qKlxuICogRW5kIG9mIHRleHQgaXM6IGA8YCBmb2xsb3dlZCBieTpcbiAqICAgKGNvbW1lbnQgc3RhcnQpIG9yICh0YWcpIG9yIChkeW5hbWljIHRhZyBiaW5kaW5nKVxuICovXG5jb25zdCB0ZXh0RW5kUmVnZXggPSAvPCg/OighLS18XFwvW15hLXpBLVpdKXwoXFwvP1thLXpBLVpdW14+XFxzXSopfChcXC8/JCkpL2c7XG5jb25zdCBDT01NRU5UX1NUQVJUID0gMTtcbmNvbnN0IFRBR19OQU1FID0gMjtcbmNvbnN0IERZTkFNSUNfVEFHX05BTUUgPSAzO1xuY29uc3QgY29tbWVudEVuZFJlZ2V4ID0gLy0tPi9nO1xuLyoqXG4gKiBDb21tZW50cyBub3Qgc3RhcnRlZCB3aXRoIDwhLS0sIGxpa2UgPC97LCBjYW4gYmUgZW5kZWQgYnkgYSBzaW5nbGUgYD5gXG4gKi9cbmNvbnN0IGNvbW1lbnQyRW5kUmVnZXggPSAvPi9nO1xuLyoqXG4gKiBUaGUgdGFnRW5kIHJlZ2V4IG1hdGNoZXMgdGhlIGVuZCBvZiB0aGUgXCJpbnNpZGUgYW4gb3BlbmluZ1wiIHRhZyBzeW50YXhcbiAqIHBvc2l0aW9uLiBJdCBlaXRoZXIgbWF0Y2hlcyBhIGA+YCwgYW4gYXR0cmlidXRlLWxpa2Ugc2VxdWVuY2UsIG9yIHRoZSBlbmRcbiAqIG9mIHRoZSBzdHJpbmcgYWZ0ZXIgYSBzcGFjZSAoYXR0cmlidXRlLW5hbWUgcG9zaXRpb24gZW5kaW5nKS5cbiAqXG4gKiBTZWUgYXR0cmlidXRlcyBpbiB0aGUgSFRNTCBzcGVjOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI2VsZW1lbnRzLWF0dHJpYnV0ZXNcbiAqXG4gKiBcIiBcXHRcXG5cXGZcXHJcIiBhcmUgSFRNTCBzcGFjZSBjaGFyYWN0ZXJzOlxuICogaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI2FzY2lpLXdoaXRlc3BhY2VcbiAqXG4gKiBTbyBhbiBhdHRyaWJ1dGUgaXM6XG4gKiAgKiBUaGUgbmFtZTogYW55IGNoYXJhY3RlciBleGNlcHQgYSB3aGl0ZXNwYWNlIGNoYXJhY3RlciwgKFwiKSwgKCcpLCBcIj5cIixcbiAqICAgIFwiPVwiLCBvciBcIi9cIi4gTm90ZTogdGhpcyBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgSFRNTCBzcGVjIHdoaWNoIGFsc28gZXhjbHVkZXMgY29udHJvbCBjaGFyYWN0ZXJzLlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5IFwiPVwiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnk6XG4gKiAgICAqIEFueSBjaGFyYWN0ZXIgZXhjZXB0IHNwYWNlLCAoJyksIChcIiksIFwiPFwiLCBcIj5cIiwgXCI9XCIsIChgKSwgb3JcbiAqICAgICogKFwiKSB0aGVuIGFueSBub24tKFwiKSwgb3JcbiAqICAgICogKCcpIHRoZW4gYW55IG5vbi0oJylcbiAqL1xuY29uc3QgdGFnRW5kUmVnZXggPSBuZXcgUmVnRXhwKGA+fCR7U1BBQ0VfQ0hBUn0oPzooJHtOQU1FX0NIQVJ9KykoJHtTUEFDRV9DSEFSfSo9JHtTUEFDRV9DSEFSfSooPzoke0FUVFJfVkFMVUVfQ0hBUn18KFwifCcpfCkpfCQpYCwgJ2cnKTtcbmNvbnN0IEVOVElSRV9NQVRDSCA9IDA7XG5jb25zdCBBVFRSSUJVVEVfTkFNRSA9IDE7XG5jb25zdCBTUEFDRVNfQU5EX0VRVUFMUyA9IDI7XG5jb25zdCBRVU9URV9DSEFSID0gMztcbmNvbnN0IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4ID0gLycvZztcbmNvbnN0IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4ID0gL1wiL2c7XG4vKipcbiAqIE1hdGNoZXMgdGhlIHJhdyB0ZXh0IGVsZW1lbnRzLlxuICpcbiAqIENvbW1lbnRzIGFyZSBub3QgcGFyc2VkIHdpdGhpbiByYXcgdGV4dCBlbGVtZW50cywgc28gd2UgbmVlZCB0byBzZWFyY2ggdGhlaXJcbiAqIHRleHQgY29udGVudCBmb3IgbWFya2VyIHN0cmluZ3MuXG4gKi9cbmNvbnN0IHJhd1RleHRFbGVtZW50ID0gL14oPzpzY3JpcHR8c3R5bGV8dGV4dGFyZWF8dGl0bGUpJC9pO1xuLyoqIFRlbXBsYXRlUmVzdWx0IHR5cGVzICovXG5jb25zdCBIVE1MX1JFU1VMVCA9IDE7XG5jb25zdCBTVkdfUkVTVUxUID0gMjtcbi8vIFRlbXBsYXRlUGFydCB0eXBlc1xuLy8gSU1QT1JUQU5UOiB0aGVzZSBtdXN0IG1hdGNoIHRoZSB2YWx1ZXMgaW4gUGFydFR5cGVcbmNvbnN0IEFUVFJJQlVURV9QQVJUID0gMTtcbmNvbnN0IENISUxEX1BBUlQgPSAyO1xuY29uc3QgUFJPUEVSVFlfUEFSVCA9IDM7XG5jb25zdCBCT09MRUFOX0FUVFJJQlVURV9QQVJUID0gNDtcbmNvbnN0IEVWRU5UX1BBUlQgPSA1O1xuY29uc3QgRUxFTUVOVF9QQVJUID0gNjtcbmNvbnN0IENPTU1FTlRfUEFSVCA9IDc7XG4vKipcbiAqIEdlbmVyYXRlcyBhIHRlbXBsYXRlIGxpdGVyYWwgdGFnIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFRlbXBsYXRlUmVzdWx0IHdpdGhcbiAqIHRoZSBnaXZlbiByZXN1bHQgdHlwZS5cbiAqL1xuY29uc3QgdGFnID0gKHR5cGUpID0+IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IHtcbiAgICAvLyBXYXJuIGFnYWluc3QgdGVtcGxhdGVzIG9jdGFsIGVzY2FwZSBzZXF1ZW5jZXNcbiAgICAvLyBXZSBkbyB0aGlzIGhlcmUgcmF0aGVyIHRoYW4gaW4gcmVuZGVyIHNvIHRoYXQgdGhlIHdhcm5pbmcgaXMgY2xvc2VyIHRvIHRoZVxuICAgIC8vIHRlbXBsYXRlIGRlZmluaXRpb24uXG4gICAgaWYgKERFVl9NT0RFICYmIHN0cmluZ3Muc29tZSgocykgPT4gcyA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1NvbWUgdGVtcGxhdGUgc3RyaW5ncyBhcmUgdW5kZWZpbmVkLlxcbicgK1xuICAgICAgICAgICAgJ1RoaXMgaXMgcHJvYmFibHkgY2F1c2VkIGJ5IGlsbGVnYWwgb2N0YWwgZXNjYXBlIHNlcXVlbmNlcy4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgWydfJGxpdFR5cGUkJ106IHR5cGUsXG4gICAgICAgIHN0cmluZ3MsXG4gICAgICAgIHZhbHVlcyxcbiAgICB9O1xufTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gSFRNTCB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IGhlYWRlciA9ICh0aXRsZTogc3RyaW5nKSA9PiBodG1sYDxoMT4ke3RpdGxlfTwvaDE+YDtcbiAqIGBgYFxuICpcbiAqIFRoZSBgaHRtbGAgdGFnIHJldHVybnMgYSBkZXNjcmlwdGlvbiBvZiB0aGUgRE9NIHRvIHJlbmRlciBhcyBhIHZhbHVlLiBJdCBpc1xuICogbGF6eSwgbWVhbmluZyBubyB3b3JrIGlzIGRvbmUgdW50aWwgdGhlIHRlbXBsYXRlIGlzIHJlbmRlcmVkLiBXaGVuIHJlbmRlcmluZyxcbiAqIGlmIGEgdGVtcGxhdGUgY29tZXMgZnJvbSB0aGUgc2FtZSBleHByZXNzaW9uIGFzIGEgcHJldmlvdXNseSByZW5kZXJlZCByZXN1bHQsXG4gKiBpdCdzIGVmZmljaWVudGx5IHVwZGF0ZWQgaW5zdGVhZCBvZiByZXBsYWNlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWwgPSB0YWcoSFRNTF9SRVNVTFQpO1xuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBTVkcgZnJhZ21lbnQgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCByZWN0ID0gc3ZnYDxyZWN0IHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiPjwvcmVjdD5gO1xuICpcbiAqIGNvbnN0IG15SW1hZ2UgPSBodG1sYFxuICogICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTAgMTBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gKiAgICAgJHtyZWN0fVxuICogICA8L3N2Zz5gO1xuICogYGBgXG4gKlxuICogVGhlIGBzdmdgICp0YWcgZnVuY3Rpb24qIHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIFNWRyBmcmFnbWVudHMsIG9yIGVsZW1lbnRzXG4gKiB0aGF0IHdvdWxkIGJlIGNvbnRhaW5lZCAqKmluc2lkZSoqIGFuIGA8c3ZnPmAgSFRNTCBlbGVtZW50LiBBIGNvbW1vbiBlcnJvciBpc1xuICogcGxhY2luZyBhbiBgPHN2Zz5gICplbGVtZW50KiBpbiBhIHRlbXBsYXRlIHRhZ2dlZCB3aXRoIHRoZSBgc3ZnYCB0YWdcbiAqIGZ1bmN0aW9uLiBUaGUgYDxzdmc+YCBlbGVtZW50IGlzIGFuIEhUTUwgZWxlbWVudCBhbmQgc2hvdWxkIGJlIHVzZWQgd2l0aGluIGFcbiAqIHRlbXBsYXRlIHRhZ2dlZCB3aXRoIHRoZSB7QGxpbmtjb2RlIGh0bWx9IHRhZyBmdW5jdGlvbi5cbiAqXG4gKiBJbiBMaXRFbGVtZW50IHVzYWdlLCBpdCdzIGludmFsaWQgdG8gcmV0dXJuIGFuIFNWRyBmcmFnbWVudCBmcm9tIHRoZVxuICogYHJlbmRlcigpYCBtZXRob2QsIGFzIHRoZSBTVkcgZnJhZ21lbnQgd2lsbCBiZSBjb250YWluZWQgd2l0aGluIHRoZSBlbGVtZW50J3NcbiAqIHNoYWRvdyByb290IGFuZCB0aHVzIGNhbm5vdCBiZSB1c2VkIHdpdGhpbiBhbiBgPHN2Zz5gIEhUTUwgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN2ZyA9IHRhZyhTVkdfUkVTVUxUKTtcbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgdGhhdCBhIHZhbHVlIHdhcyBoYW5kbGVkIGJ5IGEgZGlyZWN0aXZlIGFuZFxuICogc2hvdWxkIG5vdCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG4gKi9cbmV4cG9ydCBjb25zdCBub0NoYW5nZSA9IFN5bWJvbC5mb3IoJ2xpdC1ub0NoYW5nZScpO1xuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyBhIENoaWxkUGFydCB0byBmdWxseSBjbGVhciBpdHMgY29udGVudC5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgYnV0dG9uID0gaHRtbGAke1xuICogIHVzZXIuaXNBZG1pblxuICogICAgPyBodG1sYDxidXR0b24+REVMRVRFPC9idXR0b24+YFxuICogICAgOiBub3RoaW5nXG4gKiB9YDtcbiAqIGBgYFxuICpcbiAqIFByZWZlciB1c2luZyBgbm90aGluZ2Agb3ZlciBvdGhlciBmYWxzeSB2YWx1ZXMgYXMgaXQgcHJvdmlkZXMgYSBjb25zaXN0ZW50XG4gKiBiZWhhdmlvciBiZXR3ZWVuIHZhcmlvdXMgZXhwcmVzc2lvbiBiaW5kaW5nIGNvbnRleHRzLlxuICpcbiAqIEluIGNoaWxkIGV4cHJlc3Npb25zLCBgdW5kZWZpbmVkYCwgYG51bGxgLCBgJydgLCBhbmQgYG5vdGhpbmdgIGFsbCBiZWhhdmUgdGhlXG4gKiBzYW1lIGFuZCByZW5kZXIgbm8gbm9kZXMuIEluIGF0dHJpYnV0ZSBleHByZXNzaW9ucywgYG5vdGhpbmdgIF9yZW1vdmVzXyB0aGVcbiAqIGF0dHJpYnV0ZSwgd2hpbGUgYHVuZGVmaW5lZGAgYW5kIGBudWxsYCB3aWxsIHJlbmRlciBhbiBlbXB0eSBzdHJpbmcuIEluXG4gKiBwcm9wZXJ0eSBleHByZXNzaW9ucyBgbm90aGluZ2AgYmVjb21lcyBgdW5kZWZpbmVkYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdGhpbmcgPSBTeW1ib2wuZm9yKCdsaXQtbm90aGluZycpO1xuLyoqXG4gKiBUaGUgY2FjaGUgb2YgcHJlcGFyZWQgdGVtcGxhdGVzLCBrZXllZCBieSB0aGUgdGFnZ2VkIFRlbXBsYXRlU3RyaW5nc0FycmF5XG4gKiBhbmQgX25vdF8gYWNjb3VudGluZyBmb3IgdGhlIHNwZWNpZmljIHRlbXBsYXRlIHRhZyB1c2VkLiBUaGlzIG1lYW5zIHRoYXRcbiAqIHRlbXBsYXRlIHRhZ3MgY2Fubm90IGJlIGR5bmFtaWMgLSB0aGUgbXVzdCBzdGF0aWNhbGx5IGJlIG9uZSBvZiBodG1sLCBzdmcsXG4gKiBvciBhdHRyLiBUaGlzIHJlc3RyaWN0aW9uIHNpbXBsaWZpZXMgdGhlIGNhY2hlIGxvb2t1cCwgd2hpY2ggaXMgb24gdGhlIGhvdFxuICogcGF0aCBmb3IgcmVuZGVyaW5nLlxuICovXG5jb25zdCB0ZW1wbGF0ZUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogUmVuZGVycyBhIHZhbHVlLCB1c3VhbGx5IGEgbGl0LWh0bWwgVGVtcGxhdGVSZXN1bHQsIHRvIHRoZSBjb250YWluZXIuXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBjb250YWluZXJcbiAqIEBwYXJhbSBvcHRpb25zXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPSAodmFsdWUsIGNvbnRhaW5lciwgb3B0aW9ucykgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGNvbnN0IHJlbmRlcklkID0gREVWX01PREUgPyBkZWJ1Z0xvZ1JlbmRlcklkKysgOiAwO1xuICAgIGNvbnN0IHBhcnRPd25lck5vZGUgPSAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucmVuZGVyQmVmb3JlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBjb250YWluZXI7XG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGxldCBwYXJ0ID0gcGFydE93bmVyTm9kZVsnXyRsaXRQYXJ0JCddO1xuICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgIGtpbmQ6ICdiZWdpbiByZW5kZXInLFxuICAgICAgICBpZDogcmVuZGVySWQsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIHBhcnQsXG4gICAgfSk7XG4gICAgaWYgKHBhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBlbmROb2RlID0gKF9iID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnJlbmRlckJlZm9yZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogbnVsbDtcbiAgICAgICAgLy8gSW50ZXJuYWwgbW9kaWZpY2F0aW9uOiBkb24ndCBjbGVhciBjb250YWluZXIgdG8gbWF0Y2ggbGl0LWh0bWwgMi4wXG4gICAgICAgIGlmIChJTlRFUk5BTCAmJlxuICAgICAgICAgICAgKChfYyA9IG9wdGlvbnMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jbGVhckNvbnRhaW5lckZvckxpdDJNaWdyYXRpb25Pbmx5KSA9PT1cbiAgICAgICAgICAgICAgICB0cnVlKSB7XG4gICAgICAgICAgICBsZXQgbiA9IGNvbnRhaW5lci5maXJzdENoaWxkO1xuICAgICAgICAgICAgLy8gQ2xlYXIgb25seSB1cCB0byB0aGUgYGVuZE5vZGVgIGFrYSBgcmVuZGVyQmVmb3JlYCBub2RlLlxuICAgICAgICAgICAgd2hpbGUgKG4gJiYgbiAhPT0gZW5kTm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBuLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIG4ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgbiA9IG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgcGFydE93bmVyTm9kZVsnXyRsaXRQYXJ0JCddID0gcGFydCA9IG5ldyBDaGlsZFBhcnQoY29udGFpbmVyLmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgZW5kTm9kZSksIGVuZE5vZGUsIHVuZGVmaW5lZCwgb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge30pO1xuICAgIH1cbiAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWUpO1xuICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgIGtpbmQ6ICdlbmQgcmVuZGVyJyxcbiAgICAgICAgaWQ6IHJlbmRlcklkLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBwYXJ0LFxuICAgIH0pO1xuICAgIHJldHVybiBwYXJ0O1xufTtcbmlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICByZW5kZXIuc2V0U2FuaXRpemVyID0gc2V0U2FuaXRpemVyO1xuICAgIHJlbmRlci5jcmVhdGVTYW5pdGl6ZXIgPSBjcmVhdGVTYW5pdGl6ZXI7XG4gICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgIHJlbmRlci5fdGVzdE9ubHlDbGVhclNhbml0aXplckZhY3RvcnlEb05vdENhbGxPckVsc2UgPVxuICAgICAgICAgICAgX3Rlc3RPbmx5Q2xlYXJTYW5pdGl6ZXJGYWN0b3J5RG9Ob3RDYWxsT3JFbHNlO1xuICAgIH1cbn1cbmNvbnN0IHdhbGtlciA9IGQuY3JlYXRlVHJlZVdhbGtlcihkLCAxMjkgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR9ICovLCBudWxsLCBmYWxzZSk7XG5sZXQgc2FuaXRpemVyRmFjdG9yeUludGVybmFsID0gbm9vcFNhbml0aXplcjtcbi8qKlxuICogUmV0dXJucyBhbiBIVE1MIHN0cmluZyBmb3IgdGhlIGdpdmVuIFRlbXBsYXRlU3RyaW5nc0FycmF5IGFuZCByZXN1bHQgdHlwZVxuICogKEhUTUwgb3IgU1ZHKSwgYWxvbmcgd2l0aCB0aGUgY2FzZS1zZW5zaXRpdmUgYm91bmQgYXR0cmlidXRlIG5hbWVzIGluXG4gKiB0ZW1wbGF0ZSBvcmRlci4gVGhlIEhUTUwgY29udGFpbnMgY29tbWVudCBjb21tZW50IG1hcmtlcnMgZGVub3RpbmcgdGhlXG4gKiBgQ2hpbGRQYXJ0YHMgYW5kIHN1ZmZpeGVzIG9uIGJvdW5kIGF0dHJpYnV0ZXMgZGVub3RpbmcgdGhlIGBBdHRyaWJ1dGVQYXJ0c2AuXG4gKlxuICogQHBhcmFtIHN0cmluZ3MgdGVtcGxhdGUgc3RyaW5ncyBhcnJheVxuICogQHBhcmFtIHR5cGUgSFRNTCBvciBTVkdcbiAqIEByZXR1cm4gQXJyYXkgY29udGFpbmluZyBgW2h0bWwsIGF0dHJOYW1lc11gIChhcnJheSByZXR1cm5lZCBmb3IgdGVyc2VuZXNzLFxuICogICAgIHRvIGF2b2lkIG9iamVjdCBmaWVsZHMgc2luY2UgdGhpcyBjb2RlIGlzIHNoYXJlZCB3aXRoIG5vbi1taW5pZmllZCBTU1JcbiAqICAgICBjb2RlKVxuICovXG5jb25zdCBnZXRUZW1wbGF0ZUh0bWwgPSAoc3RyaW5ncywgdHlwZSkgPT4ge1xuICAgIC8vIEluc2VydCBtYWtlcnMgaW50byB0aGUgdGVtcGxhdGUgSFRNTCB0byByZXByZXNlbnQgdGhlIHBvc2l0aW9uIG9mXG4gICAgLy8gYmluZGluZ3MuIFRoZSBmb2xsb3dpbmcgY29kZSBzY2FucyB0aGUgdGVtcGxhdGUgc3RyaW5ncyB0byBkZXRlcm1pbmUgdGhlXG4gICAgLy8gc3ludGFjdGljIHBvc2l0aW9uIG9mIHRoZSBiaW5kaW5ncy4gVGhleSBjYW4gYmUgaW4gdGV4dCBwb3NpdGlvbiwgd2hlcmVcbiAgICAvLyB3ZSBpbnNlcnQgYW4gSFRNTCBjb21tZW50LCBhdHRyaWJ1dGUgdmFsdWUgcG9zaXRpb24sIHdoZXJlIHdlIGluc2VydCBhXG4gICAgLy8gc2VudGluZWwgc3RyaW5nIGFuZCByZS13cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUsIG9yIGluc2lkZSBhIHRhZyB3aGVyZVxuICAgIC8vIHdlIGluc2VydCB0aGUgc2VudGluZWwgc3RyaW5nLlxuICAgIGNvbnN0IGwgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgLy8gU3RvcmVzIHRoZSBjYXNlLXNlbnNpdGl2ZSBib3VuZCBhdHRyaWJ1dGUgbmFtZXMgaW4gdGhlIG9yZGVyIG9mIHRoZWlyXG4gICAgLy8gcGFydHMuIEVsZW1lbnRQYXJ0cyBhcmUgYWxzbyByZWZsZWN0ZWQgaW4gdGhpcyBhcnJheSBhcyB1bmRlZmluZWRcbiAgICAvLyByYXRoZXIgdGhhbiBhIHN0cmluZywgdG8gZGlzYW1iaWd1YXRlIGZyb20gYXR0cmlidXRlIGJpbmRpbmdzLlxuICAgIGNvbnN0IGF0dHJOYW1lcyA9IFtdO1xuICAgIGxldCBodG1sID0gdHlwZSA9PT0gU1ZHX1JFU1VMVCA/ICc8c3ZnPicgOiAnJztcbiAgICAvLyBXaGVuIHdlJ3JlIGluc2lkZSBhIHJhdyB0ZXh0IHRhZyAobm90IGl0J3MgdGV4dCBjb250ZW50KSwgdGhlIHJlZ2V4XG4gICAgLy8gd2lsbCBzdGlsbCBiZSB0YWdSZWdleCBzbyB3ZSBjYW4gZmluZCBhdHRyaWJ1dGVzLCBidXQgd2lsbCBzd2l0Y2ggdG9cbiAgICAvLyB0aGlzIHJlZ2V4IHdoZW4gdGhlIHRhZyBlbmRzLlxuICAgIGxldCByYXdUZXh0RW5kUmVnZXg7XG4gICAgLy8gVGhlIGN1cnJlbnQgcGFyc2luZyBzdGF0ZSwgcmVwcmVzZW50ZWQgYXMgYSByZWZlcmVuY2UgdG8gb25lIG9mIHRoZVxuICAgIC8vIHJlZ2V4ZXNcbiAgICBsZXQgcmVnZXggPSB0ZXh0RW5kUmVnZXg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgcyA9IHN0cmluZ3NbaV07XG4gICAgICAgIC8vIFRoZSBpbmRleCBvZiB0aGUgZW5kIG9mIHRoZSBsYXN0IGF0dHJpYnV0ZSBuYW1lLiBXaGVuIHRoaXMgaXNcbiAgICAgICAgLy8gcG9zaXRpdmUgYXQgZW5kIG9mIGEgc3RyaW5nLCBpdCBtZWFucyB3ZSdyZSBpbiBhbiBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgICAgLy8gcG9zaXRpb24gYW5kIG5lZWQgdG8gcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUuXG4gICAgICAgIC8vIFdlIGFsc28gdXNlIGEgc3BlY2lhbCB2YWx1ZSBvZiAtMiB0byBpbmRpY2F0ZSB0aGF0IHdlIGVuY291bnRlcmVkXG4gICAgICAgIC8vIHRoZSBlbmQgb2YgYSBzdHJpbmcgaW4gYXR0cmlidXRlIG5hbWUgcG9zaXRpb24uXG4gICAgICAgIGxldCBhdHRyTmFtZUVuZEluZGV4ID0gLTE7XG4gICAgICAgIGxldCBhdHRyTmFtZTtcbiAgICAgICAgbGV0IGxhc3RJbmRleCA9IDA7XG4gICAgICAgIGxldCBtYXRjaDtcbiAgICAgICAgLy8gVGhlIGNvbmRpdGlvbnMgaW4gdGhpcyBsb29wIGhhbmRsZSB0aGUgY3VycmVudCBwYXJzZSBzdGF0ZSwgYW5kIHRoZVxuICAgICAgICAvLyBhc3NpZ25tZW50cyB0byB0aGUgYHJlZ2V4YCB2YXJpYWJsZSBhcmUgdGhlIHN0YXRlIHRyYW5zaXRpb25zLlxuICAgICAgICB3aGlsZSAobGFzdEluZGV4IDwgcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBzdGFydCBzZWFyY2hpbmcgZnJvbSB3aGVyZSB3ZSBwcmV2aW91c2x5IGxlZnQgb2ZmXG4gICAgICAgICAgICByZWdleC5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICBtYXRjaCA9IHJlZ2V4LmV4ZWMocyk7XG4gICAgICAgICAgICBpZiAobWF0Y2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhc3RJbmRleCA9IHJlZ2V4Lmxhc3RJbmRleDtcbiAgICAgICAgICAgIGlmIChyZWdleCA9PT0gdGV4dEVuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoW0NPTU1FTlRfU1RBUlRdID09PSAnIS0tJykge1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9IGNvbW1lbnRFbmRSZWdleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hbQ09NTUVOVF9TVEFSVF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBzdGFydGVkIGEgd2VpcmQgY29tbWVudCwgbGlrZSA8L3tcbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSBjb21tZW50MkVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtUQUdfTkFNRV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmF3VGV4dEVsZW1lbnQudGVzdChtYXRjaFtUQUdfTkFNRV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWNvcmQgaWYgd2UgZW5jb3VudGVyIGEgcmF3LXRleHQgZWxlbWVudC4gV2UnbGwgc3dpdGNoIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHJlZ2V4IGF0IHRoZSBlbmQgb2YgdGhlIHRhZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd1RleHRFbmRSZWdleCA9IG5ldyBSZWdFeHAoYDwvJHttYXRjaFtUQUdfTkFNRV19YCwgJ2cnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtEWU5BTUlDX1RBR19OQU1FXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCaW5kaW5ncyBpbiB0YWcgbmFtZXMgYXJlIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSB1c2Ugc3RhdGljIHRlbXBsYXRlcyBpbnN0ZWFkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU2VlIGh0dHBzOi8vbGl0LmRldi9kb2NzL3RlbXBsYXRlcy9leHByZXNzaW9ucy8jc3RhdGljLWV4cHJlc3Npb25zJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSB0YWdFbmRSZWdleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZWdleCA9PT0gdGFnRW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hbRU5USVJFX01BVENIXSA9PT0gJz4nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVuZCBvZiBhIHRhZy4gSWYgd2UgaGFkIHN0YXJ0ZWQgYSByYXctdGV4dCBlbGVtZW50LCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgICAgICAvLyByZWdleFxuICAgICAgICAgICAgICAgICAgICByZWdleCA9IHJhd1RleHRFbmRSZWdleCAhPT0gbnVsbCAmJiByYXdUZXh0RW5kUmVnZXggIT09IHZvaWQgMCA/IHJhd1RleHRFbmRSZWdleCA6IHRleHRFbmRSZWdleDtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgbWF5IGJlIGVuZGluZyBhbiB1bnF1b3RlZCBhdHRyaWJ1dGUgdmFsdWUsIHNvIG1ha2Ugc3VyZSB3ZVxuICAgICAgICAgICAgICAgICAgICAvLyBjbGVhciBhbnkgcGVuZGluZyBhdHRyTmFtZUVuZEluZGV4XG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lRW5kSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hbQVRUUklCVVRFX05BTUVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXR0cmlidXRlIG5hbWUgcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWVFbmRJbmRleCA9IC0yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWVFbmRJbmRleCA9IHJlZ2V4Lmxhc3RJbmRleCAtIG1hdGNoW1NQQUNFU19BTkRfRVFVQUxTXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lID0gbWF0Y2hbQVRUUklCVVRFX05BTUVdO1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFtRVU9URV9DSEFSXSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0YWdFbmRSZWdleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbWF0Y2hbUVVPVEVfQ0hBUl0gPT09ICdcIidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkb3VibGVRdW90ZUF0dHJFbmRSZWdleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2V4ID09PSBkb3VibGVRdW90ZUF0dHJFbmRSZWdleCB8fFxuICAgICAgICAgICAgICAgIHJlZ2V4ID09PSBzaW5nbGVRdW90ZUF0dHJFbmRSZWdleCkge1xuICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZWdleCA9PT0gY29tbWVudEVuZFJlZ2V4IHx8IHJlZ2V4ID09PSBjb21tZW50MkVuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgcmVnZXggPSB0ZXh0RW5kUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBOb3Qgb25lIG9mIHRoZSBmaXZlIHN0YXRlIHJlZ2V4ZXMsIHNvIGl0IG11c3QgYmUgdGhlIGR5bmFtaWNhbGx5XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlZCByYXcgdGV4dCByZWdleCBhbmQgd2UncmUgYXQgdGhlIGNsb3NlIG9mIHRoYXQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIHJhd1RleHRFbmRSZWdleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSBhdHRyTmFtZUVuZEluZGV4LCB3aGljaCBpbmRpY2F0ZXMgdGhhdCB3ZSBzaG91bGRcbiAgICAgICAgICAgIC8vIHJld3JpdGUgdGhlIGF0dHJpYnV0ZSBuYW1lLCBhc3NlcnQgdGhhdCB3ZSdyZSBpbiBhIHZhbGlkIGF0dHJpYnV0ZVxuICAgICAgICAgICAgLy8gcG9zaXRpb24gLSBlaXRoZXIgaW4gYSB0YWcsIG9yIGEgcXVvdGVkIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGF0dHJOYW1lRW5kSW5kZXggPT09IC0xIHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IHRhZ0VuZFJlZ2V4IHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4IHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4LCAndW5leHBlY3RlZCBwYXJzZSBzdGF0ZSBCJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgaGF2ZSBmb3VyIGNhc2VzOlxuICAgICAgICAvLyAgMS4gV2UncmUgaW4gdGV4dCBwb3NpdGlvbiwgYW5kIG5vdCBpbiBhIHJhdyB0ZXh0IGVsZW1lbnRcbiAgICAgICAgLy8gICAgIChyZWdleCA9PT0gdGV4dEVuZFJlZ2V4KTogaW5zZXJ0IGEgY29tbWVudCBtYXJrZXIuXG4gICAgICAgIC8vICAyLiBXZSBoYXZlIGEgbm9uLW5lZ2F0aXZlIGF0dHJOYW1lRW5kSW5kZXggd2hpY2ggbWVhbnMgd2UgbmVlZCB0b1xuICAgICAgICAvLyAgICAgcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUgdG8gYWRkIGEgYm91bmQgYXR0cmlidXRlIHN1ZmZpeC5cbiAgICAgICAgLy8gIDMuIFdlJ3JlIGF0IHRoZSBub24tZmlyc3QgYmluZGluZyBpbiBhIG11bHRpLWJpbmRpbmcgYXR0cmlidXRlLCB1c2UgYVxuICAgICAgICAvLyAgICAgcGxhaW4gbWFya2VyLlxuICAgICAgICAvLyAgNC4gV2UncmUgc29tZXdoZXJlIGVsc2UgaW5zaWRlIHRoZSB0YWcuIElmIHdlJ3JlIGluIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgIC8vICAgICBwb3NpdGlvbiAoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTIpLCBhZGQgYSBzZXF1ZW50aWFsIHN1ZmZpeCB0b1xuICAgICAgICAvLyAgICAgZ2VuZXJhdGUgYSB1bmlxdWUgYXR0cmlidXRlIG5hbWUuXG4gICAgICAgIC8vIERldGVjdCBhIGJpbmRpbmcgbmV4dCB0byBzZWxmLWNsb3NpbmcgdGFnIGVuZCBhbmQgaW5zZXJ0IGEgc3BhY2UgdG9cbiAgICAgICAgLy8gc2VwYXJhdGUgdGhlIG1hcmtlciBmcm9tIHRoZSB0YWcgZW5kOlxuICAgICAgICBjb25zdCBlbmQgPSByZWdleCA9PT0gdGFnRW5kUmVnZXggJiYgc3RyaW5nc1tpICsgMV0uc3RhcnRzV2l0aCgnLz4nKSA/ICcgJyA6ICcnO1xuICAgICAgICBodG1sICs9XG4gICAgICAgICAgICByZWdleCA9PT0gdGV4dEVuZFJlZ2V4XG4gICAgICAgICAgICAgICAgPyBzICsgbm9kZU1hcmtlclxuICAgICAgICAgICAgICAgIDogYXR0ck5hbWVFbmRJbmRleCA+PSAwXG4gICAgICAgICAgICAgICAgICAgID8gKGF0dHJOYW1lcy5wdXNoKGF0dHJOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpY2UoMCwgYXR0ck5hbWVFbmRJbmRleCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdW5kQXR0cmlidXRlU3VmZml4ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWNlKGF0dHJOYW1lRW5kSW5kZXgpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kXG4gICAgICAgICAgICAgICAgICAgIDogcyArXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGF0dHJOYW1lRW5kSW5kZXggPT09IC0yID8gKGF0dHJOYW1lcy5wdXNoKHVuZGVmaW5lZCksIGkpIDogZW5kKTtcbiAgICB9XG4gICAgY29uc3QgaHRtbFJlc3VsdCA9IGh0bWwgKyAoc3RyaW5nc1tsXSB8fCAnPD8+JykgKyAodHlwZSA9PT0gU1ZHX1JFU1VMVCA/ICc8L3N2Zz4nIDogJycpO1xuICAgIC8vIEEgc2VjdXJpdHkgY2hlY2sgdG8gcHJldmVudCBzcG9vZmluZyBvZiBMaXQgdGVtcGxhdGUgcmVzdWx0cy5cbiAgICAvLyBJbiB0aGUgZnV0dXJlLCB3ZSBtYXkgYmUgYWJsZSB0byByZXBsYWNlIHRoaXMgd2l0aCBBcnJheS5pc1RlbXBsYXRlT2JqZWN0LFxuICAgIC8vIHRob3VnaCB3ZSBtaWdodCBuZWVkIHRvIG1ha2UgdGhhdCBjaGVjayBpbnNpZGUgb2YgdGhlIGh0bWwgYW5kIHN2Z1xuICAgIC8vIGZ1bmN0aW9ucywgYmVjYXVzZSBwcmVjb21waWxlZCB0ZW1wbGF0ZXMgZG9uJ3QgY29tZSBpbiBhc1xuICAgIC8vIFRlbXBsYXRlU3RyaW5nQXJyYXkgb2JqZWN0cy5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3RyaW5ncykgfHwgIXN0cmluZ3MuaGFzT3duUHJvcGVydHkoJ3JhdycpKSB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gJ2ludmFsaWQgdGVtcGxhdGUgc3RyaW5ncyBhcnJheSc7XG4gICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICAgICAgYEludGVybmFsIEVycm9yOiBleHBlY3RlZCB0ZW1wbGF0ZSBzdHJpbmdzIHRvIGJlIGFuIGFycmF5IGAgK1xuICAgICAgICAgICAgICAgICAgICBgd2l0aCBhICdyYXcnIGZpZWxkLiBQbGVhc2UgZmlsZSBhIGJ1ZyBhdCBgICtcbiAgICAgICAgICAgICAgICAgICAgYGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy9uZXc/dGVtcGxhdGU9YnVnX3JlcG9ydC5tZCBgICtcbiAgICAgICAgICAgICAgICAgICAgYGFuZCBpbmNsdWRlIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgYnVpbGQgdG9vbGluZywgaWYgYW55LmA7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICAvLyBSZXR1cm5lZCBhcyBhbiBhcnJheSBmb3IgdGVyc2VuZXNzXG4gICAgcmV0dXJuIFtcbiAgICAgICAgcG9saWN5ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gcG9saWN5LmNyZWF0ZUhUTUwoaHRtbFJlc3VsdClcbiAgICAgICAgICAgIDogaHRtbFJlc3VsdCxcbiAgICAgICAgYXR0ck5hbWVzLFxuICAgIF07XG59O1xuY2xhc3MgVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgeyBzdHJpbmdzLCBbJ18kbGl0VHlwZSQnXTogdHlwZSB9LCBvcHRpb25zKSB7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5wYXJ0cyA9IFtdO1xuICAgICAgICBsZXQgbm9kZTtcbiAgICAgICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgICAgIGxldCBhdHRyTmFtZUluZGV4ID0gMDtcbiAgICAgICAgY29uc3QgcGFydENvdW50ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBwYXJ0cyA9IHRoaXMucGFydHM7XG4gICAgICAgIC8vIENyZWF0ZSB0ZW1wbGF0ZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IFtodG1sLCBhdHRyTmFtZXNdID0gZ2V0VGVtcGxhdGVIdG1sKHN0cmluZ3MsIHR5cGUpO1xuICAgICAgICB0aGlzLmVsID0gVGVtcGxhdGUuY3JlYXRlRWxlbWVudChodG1sLCBvcHRpb25zKTtcbiAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gdGhpcy5lbC5jb250ZW50O1xuICAgICAgICAvLyBSZXBhcmVudCBTVkcgbm9kZXMgaW50byB0ZW1wbGF0ZSByb290XG4gICAgICAgIGlmICh0eXBlID09PSBTVkdfUkVTVUxUKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5lbC5jb250ZW50O1xuICAgICAgICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHN2Z0VsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZCguLi5zdmdFbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdhbGsgdGhlIHRlbXBsYXRlIHRvIGZpbmQgYmluZGluZyBtYXJrZXJzIGFuZCBjcmVhdGUgVGVtcGxhdGVQYXJ0c1xuICAgICAgICB3aGlsZSAoKG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKSkgIT09IG51bGwgJiYgcGFydHMubGVuZ3RoIDwgcGFydENvdW50KSB7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWcgPSBub2RlLmxvY2FsTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2FybiBpZiBgdGV4dGFyZWFgIGluY2x1ZGVzIGFuIGV4cHJlc3Npb24gYW5kIHRocm93IGlmIGB0ZW1wbGF0ZWBcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9lcyBzaW5jZSB0aGVzZSBhcmUgbm90IHN1cHBvcnRlZC4gV2UgZG8gdGhpcyBieSBjaGVja2luZ1xuICAgICAgICAgICAgICAgICAgICAvLyBpbm5lckhUTUwgZm9yIGFueXRoaW5nIHRoYXQgbG9va3MgbGlrZSBhIG1hcmtlci4gVGhpcyBjYXRjaGVzXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhc2VzIGxpa2UgYmluZGluZ3MgaW4gdGV4dGFyZWEgdGhlcmUgbWFya2VycyB0dXJuIGludG8gdGV4dCBub2Rlcy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKC9eKD86dGV4dGFyZWF8dGVtcGxhdGUpJC9pLnRlc3QodGFnKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwuaW5jbHVkZXMobWFya2VyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbSA9IGBFeHByZXNzaW9ucyBhcmUgbm90IHN1cHBvcnRlZCBpbnNpZGUgXFxgJHt0YWd9XFxgIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBlbGVtZW50cy4gU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvZXhwcmVzc2lvbi1pbi0ke3RhZ30gZm9yIG1vcmUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluZm9ybWF0aW9uLmA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlV2FybmluZygnJywgbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGZvciBhdHRlbXB0ZWQgZHluYW1pYyB0YWcgbmFtZXMsIHdlIGRvbid0XG4gICAgICAgICAgICAgICAgLy8gaW5jcmVtZW50IHRoZSBiaW5kaW5nSW5kZXgsIGFuZCBpdCdsbCBiZSBvZmYgYnkgMSBpbiB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIGFuZCBvZmYgYnkgdHdvIGFmdGVyIGl0LlxuICAgICAgICAgICAgICAgIGlmIChub2RlLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBkZWZlciByZW1vdmluZyBib3VuZCBhdHRyaWJ1dGVzIGJlY2F1c2Ugb24gSUUgd2UgbWlnaHQgbm90IGJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGluZyBhdHRyaWJ1dGVzIGluIHRoZWlyIHRlbXBsYXRlIG9yZGVyLCBhbmQgd291bGQgc29tZXRpbWVzXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBhbiBhdHRyaWJ1dGUgdGhhdCB3ZSBzdGlsbCBuZWVkIHRvIGNyZWF0ZSBhIHBhcnQgZm9yLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyc1RvUmVtb3ZlID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBub2RlLmdldEF0dHJpYnV0ZU5hbWVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBuYW1lYCBpcyB0aGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHdlJ3JlIGl0ZXJhdGluZyBvdmVyLCBidXQgbm90XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBfbmVjY2Vzc2FyaWx5XyB0aGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHdlIHdpbGwgY3JlYXRlIGEgcGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yLiBUaGV5IGNhbiBiZSBkaWZmZXJlbnQgaW4gYnJvd3NlcnMgdGhhdCBkb24ndCBpdGVyYXRlIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIHNvdXJjZSBvcmRlci4gSW4gdGhhdCBjYXNlIHRoZSBhdHRyTmFtZXMgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5zIHRoZSBhdHRyaWJ1dGUgbmFtZSB3ZSdsbCBwcm9jZXNzIG5leHQuIFdlIG9ubHkgbmVlZCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZSBuYW1lIGhlcmUgdG8ga25vdyBpZiB3ZSBzaG91bGQgcHJvY2VzcyBhIGJvdW5kIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb24gdGhpcyBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUuZW5kc1dpdGgoYm91bmRBdHRyaWJ1dGVTdWZmaXgpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS5zdGFydHNXaXRoKG1hcmtlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFsTmFtZSA9IGF0dHJOYW1lc1thdHRyTmFtZUluZGV4KytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzVG9SZW1vdmUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVhbE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMb3dlcmNhc2UgZm9yIGNhc2Utc2Vuc2l0aXZlIFNWRyBhdHRyaWJ1dGVzIGxpa2Ugdmlld0JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKHJlYWxOYW1lLnRvTG93ZXJDYXNlKCkgKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRpY3MgPSB2YWx1ZS5zcGxpdChtYXJrZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtID0gLyhbLj9AXSk/KC4qKS8uZXhlYyhyZWFsTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQVRUUklCVVRFX1BBUlQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogbm9kZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbVsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ3M6IHN0YXRpY3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdG9yOiBtWzFdID09PSAnLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFByb3BlcnR5UGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbVsxXSA9PT0gJz8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQm9vbGVhbkF0dHJpYnV0ZVBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtWzFdID09PSAnQCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gRXZlbnRQYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IEF0dHJpYnV0ZVBhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFTEVNRU5UX1BBUlQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogbm9kZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGF0dHJzVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBiZW5jaG1hcmsgdGhlIHJlZ2V4IGFnYWluc3QgdGVzdGluZyBmb3IgZWFjaFxuICAgICAgICAgICAgICAgIC8vIG9mIHRoZSAzIHJhdyB0ZXh0IGVsZW1lbnQgbmFtZXMuXG4gICAgICAgICAgICAgICAgaWYgKHJhd1RleHRFbGVtZW50LnRlc3Qobm9kZS50YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgcmF3IHRleHQgZWxlbWVudHMgd2UgbmVlZCB0byBzcGxpdCB0aGUgdGV4dCBjb250ZW50IG9uXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmtlcnMsIGNyZWF0ZSBhIFRleHQgbm9kZSBmb3IgZWFjaCBzZWdtZW50LCBhbmQgY3JlYXRlXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgVGVtcGxhdGVQYXJ0IGZvciBlYWNoIG1hcmtlci5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5ncyA9IG5vZGUudGV4dENvbnRlbnQuc3BsaXQobWFya2VyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHRydXN0ZWRUeXBlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1c3RlZFR5cGVzLmVtcHR5U2NyaXB0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRleHQgbm9kZSBmb3IgZWFjaCBsaXRlcmFsIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZXNlIG5vZGVzIGFyZSBhbHNvIHVzZWQgYXMgdGhlIG1hcmtlcnMgZm9yIG5vZGUgcGFydHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGNhbid0IHVzZSBlbXB0eSB0ZXh0IG5vZGVzIGFzIG1hcmtlcnMgYmVjYXVzZSB0aGV5J3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3JtYWxpemVkIHdoZW4gY2xvbmluZyBpbiBJRSAoY291bGQgc2ltcGxpZnkgd2hlblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSUUgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFwcGVuZChzdHJpbmdzW2ldLCBjcmVhdGVNYXJrZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2FsayBwYXN0IHRoZSBtYXJrZXIgbm9kZSB3ZSBqdXN0IGFkZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7IHR5cGU6IENISUxEX1BBUlQsIGluZGV4OiArK25vZGVJbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdGUgYmVjYXVzZSB0aGlzIG1hcmtlciBpcyBhZGRlZCBhZnRlciB0aGUgd2Fsa2VyJ3MgY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9kZSwgaXQgd2lsbCBiZSB3YWxrZWQgdG8gaW4gdGhlIG91dGVyIGxvb3AgKGFuZCBpZ25vcmVkKSwgc29cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gYWRqdXN0IG5vZGVJbmRleCBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFwcGVuZChzdHJpbmdzW2xhc3RJbmRleF0sIGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gbm9kZS5kYXRhO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhID09PSBtYXJrZXJNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHsgdHlwZTogQ0hJTERfUEFSVCwgaW5kZXg6IG5vZGVJbmRleCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgoaSA9IG5vZGUuZGF0YS5pbmRleE9mKG1hcmtlciwgaSArIDEpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbW1lbnQgbm9kZSBoYXMgYSBiaW5kaW5nIG1hcmtlciBpbnNpZGUsIG1ha2UgYW4gaW5hY3RpdmUgcGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGJpbmRpbmcgd29uJ3Qgd29yaywgYnV0IHN1YnNlcXVlbnQgYmluZGluZ3Mgd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7IHR5cGU6IENPTU1FTlRfUEFSVCwgaW5kZXg6IG5vZGVJbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgdG8gdGhlIGVuZCBvZiB0aGUgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgKz0gbWFya2VyLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAga2luZDogJ3RlbXBsYXRlIHByZXAnLFxuICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMsXG4gICAgICAgICAgICBjbG9uYWJsZVRlbXBsYXRlOiB0aGlzLmVsLFxuICAgICAgICAgICAgcGFydHM6IHRoaXMucGFydHMsXG4gICAgICAgICAgICBzdHJpbmdzLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gT3ZlcnJpZGRlbiB2aWEgYGxpdEh0bWxQb2x5ZmlsbFN1cHBvcnRgIHRvIHByb3ZpZGUgcGxhdGZvcm0gc3VwcG9ydC5cbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBzdGF0aWMgY3JlYXRlRWxlbWVudChodG1sLCBfb3B0aW9ucykge1xuICAgICAgICBjb25zdCBlbCA9IGQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlc29sdmVEaXJlY3RpdmUocGFydCwgdmFsdWUsIHBhcmVudCA9IHBhcnQsIGF0dHJpYnV0ZUluZGV4KSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgdmFyIF9kO1xuICAgIC8vIEJhaWwgZWFybHkgaWYgdGhlIHZhbHVlIGlzIGV4cGxpY2l0bHkgbm9DaGFuZ2UuIE5vdGUsIHRoaXMgbWVhbnMgYW55XG4gICAgLy8gbmVzdGVkIGRpcmVjdGl2ZSBpcyBzdGlsbCBhdHRhY2hlZCBhbmQgaXMgbm90IHJ1bi5cbiAgICBpZiAodmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgbGV0IGN1cnJlbnREaXJlY3RpdmUgPSBhdHRyaWJ1dGVJbmRleCAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gKF9hID0gcGFyZW50Ll9fZGlyZWN0aXZlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW2F0dHJpYnV0ZUluZGV4XVxuICAgICAgICA6IHBhcmVudC5fX2RpcmVjdGl2ZTtcbiAgICBjb25zdCBuZXh0RGlyZWN0aXZlQ29uc3RydWN0b3IgPSBpc1ByaW1pdGl2ZSh2YWx1ZSlcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICAgICAgdmFsdWVbJ18kbGl0RGlyZWN0aXZlJCddO1xuICAgIGlmICgoY3VycmVudERpcmVjdGl2ZSA9PT0gbnVsbCB8fCBjdXJyZW50RGlyZWN0aXZlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50RGlyZWN0aXZlLmNvbnN0cnVjdG9yKSAhPT0gbmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yKSB7XG4gICAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgIChfYiA9IGN1cnJlbnREaXJlY3RpdmUgPT09IG51bGwgfHwgY3VycmVudERpcmVjdGl2ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudERpcmVjdGl2ZVsnXyRub3RpZnlEaXJlY3RpdmVDb25uZWN0aW9uQ2hhbmdlZCddKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChjdXJyZW50RGlyZWN0aXZlLCBmYWxzZSk7XG4gICAgICAgIGlmIChuZXh0RGlyZWN0aXZlQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY3VycmVudERpcmVjdGl2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnREaXJlY3RpdmUgPSBuZXcgbmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yKHBhcnQpO1xuICAgICAgICAgICAgY3VycmVudERpcmVjdGl2ZS5fJGluaXRpYWxpemUocGFydCwgcGFyZW50LCBhdHRyaWJ1dGVJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dHJpYnV0ZUluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICgoX2MgPSAoX2QgPSBwYXJlbnQpLl9fZGlyZWN0aXZlcykgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogKF9kLl9fZGlyZWN0aXZlcyA9IFtdKSlbYXR0cmlidXRlSW5kZXhdID1cbiAgICAgICAgICAgICAgICBjdXJyZW50RGlyZWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50Ll9fZGlyZWN0aXZlID0gY3VycmVudERpcmVjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY3VycmVudERpcmVjdGl2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbHVlID0gcmVzb2x2ZURpcmVjdGl2ZShwYXJ0LCBjdXJyZW50RGlyZWN0aXZlLl8kcmVzb2x2ZShwYXJ0LCB2YWx1ZS52YWx1ZXMpLCBjdXJyZW50RGlyZWN0aXZlLCBhdHRyaWJ1dGVJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogQW4gdXBkYXRlYWJsZSBpbnN0YW5jZSBvZiBhIFRlbXBsYXRlLiBIb2xkcyByZWZlcmVuY2VzIHRvIHRoZSBQYXJ0cyB1c2VkIHRvXG4gKiB1cGRhdGUgdGhlIHRlbXBsYXRlIGluc3RhbmNlLlxuICovXG5jbGFzcyBUZW1wbGF0ZUluc3RhbmNlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZSwgcGFyZW50KSB7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fcGFydHMgPSBbXTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmVjdGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fJHRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuICAgIC8vIENhbGxlZCBieSBDaGlsZFBhcnQgcGFyZW50Tm9kZSBnZXR0ZXJcbiAgICBnZXQgcGFyZW50Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRwYXJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgLy8gU2VlIGNvbW1lbnQgaW4gRGlzY29ubmVjdGFibGUgaW50ZXJmYWNlIGZvciB3aHkgdGhpcyBpcyBhIGdldHRlclxuICAgIGdldCBfJGlzQ29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJHBhcmVudC5fJGlzQ29ubmVjdGVkO1xuICAgIH1cbiAgICAvLyBUaGlzIG1ldGhvZCBpcyBzZXBhcmF0ZSBmcm9tIHRoZSBjb25zdHJ1Y3RvciBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuIGFcbiAgICAvLyBEb2N1bWVudEZyYWdtZW50IGFuZCB3ZSBkb24ndCB3YW50IHRvIGhvbGQgb250byBpdCB3aXRoIGFuIGluc3RhbmNlIGZpZWxkLlxuICAgIF9jbG9uZShvcHRpb25zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgeyBlbDogeyBjb250ZW50IH0sIHBhcnRzOiBwYXJ0cywgfSA9IHRoaXMuXyR0ZW1wbGF0ZTtcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSAoKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNyZWF0aW9uU2NvcGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGQpLmltcG9ydE5vZGUoY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IGZyYWdtZW50O1xuICAgICAgICBsZXQgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICBsZXQgbm9kZUluZGV4ID0gMDtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGxldCB0ZW1wbGF0ZVBhcnQgPSBwYXJ0c1swXTtcbiAgICAgICAgd2hpbGUgKHRlbXBsYXRlUGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAobm9kZUluZGV4ID09PSB0ZW1wbGF0ZVBhcnQuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFydDtcbiAgICAgICAgICAgICAgICBpZiAodGVtcGxhdGVQYXJ0LnR5cGUgPT09IENISUxEX1BBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IG5ldyBDaGlsZFBhcnQobm9kZSwgbm9kZS5uZXh0U2libGluZywgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSBBVFRSSUJVVEVfUEFSVCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gbmV3IHRlbXBsYXRlUGFydC5jdG9yKG5vZGUsIHRlbXBsYXRlUGFydC5uYW1lLCB0ZW1wbGF0ZVBhcnQuc3RyaW5ncywgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSBFTEVNRU5UX1BBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IG5ldyBFbGVtZW50UGFydChub2RlLCB0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVBhcnQgPSBwYXJ0c1srK3BhcnRJbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZUluZGV4ICE9PSAodGVtcGxhdGVQYXJ0ID09PSBudWxsIHx8IHRlbXBsYXRlUGFydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGVtcGxhdGVQYXJ0LmluZGV4KSkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxuICAgIF91cGRhdGUodmFsdWVzKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHRoaXMuX3BhcnRzKSB7XG4gICAgICAgICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ3NldCBwYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgcGFydCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVJbmRleDogaSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUluc3RhbmNlOiB0aGlzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0LnN0cmluZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWVzLCBwYXJ0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG51bWJlciBvZiB2YWx1ZXMgdGhlIHBhcnQgY29uc3VtZXMgaXMgcGFydC5zdHJpbmdzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgdmFsdWVzIGFyZSBpbiBiZXR3ZWVuIHRlbXBsYXRlIHNwYW5zLiBXZSBpbmNyZW1lbnQgaSBieSAxXG4gICAgICAgICAgICAgICAgICAgIC8vIGxhdGVyIGluIHRoZSBsb29wLCBzbyBpbmNyZW1lbnQgaXQgYnkgcGFydC5zdHJpbmdzLmxlbmd0aCAtIDIgaGVyZVxuICAgICAgICAgICAgICAgICAgICBpICs9IHBhcnQuc3RyaW5ncy5sZW5ndGggLSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5fJHNldFZhbHVlKHZhbHVlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgQ2hpbGRQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydE5vZGUsIGVuZE5vZGUsIHBhcmVudCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMudHlwZSA9IENISUxEX1BBUlQ7XG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgZmllbGRzIHdpbGwgYmUgcGF0Y2hlZCBvbnRvIENoaWxkUGFydHMgd2hlbiByZXF1aXJlZCBieVxuICAgICAgICAvLyBBc3luY0RpcmVjdGl2ZVxuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl8kc3RhcnROb2RlID0gc3RhcnROb2RlO1xuICAgICAgICB0aGlzLl8kZW5kTm9kZSA9IGVuZE5vZGU7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIC8vIE5vdGUgX19pc0Nvbm5lY3RlZCBpcyBvbmx5IGV2ZXIgYWNjZXNzZWQgb24gUm9vdFBhcnRzIChpLmUuIHdoZW4gdGhlcmUgaXNcbiAgICAgICAgLy8gbm8gXyRwYXJlbnQpOyB0aGUgdmFsdWUgb24gYSBub24tcm9vdC1wYXJ0IGlzIFwiZG9uJ3QgY2FyZVwiLCBidXQgY2hlY2tpbmdcbiAgICAgICAgLy8gZm9yIHBhcmVudCB3b3VsZCBiZSBtb3JlIGNvZGVcbiAgICAgICAgdGhpcy5fX2lzQ29ubmVjdGVkID0gKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmlzQ29ubmVjdGVkKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB0cnVlO1xuICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICAvLyBFeHBsaWNpdGx5IGluaXRpYWxpemUgZm9yIGNvbnNpc3RlbnQgY2xhc3Mgc2hhcGUuXG4gICAgICAgICAgICB0aGlzLl90ZXh0U2FuaXRpemVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFNlZSBjb21tZW50IGluIERpc2Nvbm5lY3RhYmxlIGludGVyZmFjZSBmb3Igd2h5IHRoaXMgaXMgYSBnZXR0ZXJcbiAgICBnZXQgXyRpc0Nvbm5lY3RlZCgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgLy8gQ2hpbGRQYXJ0cyB0aGF0IGFyZSBub3QgYXQgdGhlIHJvb3Qgc2hvdWxkIGFsd2F5cyBiZSBjcmVhdGVkIHdpdGggYVxuICAgICAgICAvLyBwYXJlbnQ7IG9ubHkgUm9vdENoaWxkTm9kZSdzIHdvbid0LCBzbyB0aGV5IHJldHVybiB0aGUgbG9jYWwgaXNDb25uZWN0ZWRcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IHRoaXMuXyRwYXJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5fJGlzQ29ubmVjdGVkKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB0aGlzLl9faXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJlbnQgbm9kZSBpbnRvIHdoaWNoIHRoZSBwYXJ0IHJlbmRlcnMgaXRzIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBBIENoaWxkUGFydCdzIGNvbnRlbnQgY29uc2lzdHMgb2YgYSByYW5nZSBvZiBhZGphY2VudCBjaGlsZCBub2RlcyBvZlxuICAgICAqIGAucGFyZW50Tm9kZWAsIHBvc3NpYmx5IGJvcmRlcmVkIGJ5ICdtYXJrZXIgbm9kZXMnIChgLnN0YXJ0Tm9kZWAgYW5kXG4gICAgICogYC5lbmROb2RlYCkuXG4gICAgICpcbiAgICAgKiAtIElmIGJvdGggYC5zdGFydE5vZGVgIGFuZCBgLmVuZE5vZGVgIGFyZSBub24tbnVsbCwgdGhlbiB0aGUgcGFydCdzIGNvbnRlbnRcbiAgICAgKiBjb25zaXN0cyBvZiBhbGwgc2libGluZ3MgYmV0d2VlbiBgLnN0YXJ0Tm9kZWAgYW5kIGAuZW5kTm9kZWAsIGV4Y2x1c2l2ZWx5LlxuICAgICAqXG4gICAgICogLSBJZiBgLnN0YXJ0Tm9kZWAgaXMgbm9uLW51bGwgYnV0IGAuZW5kTm9kZWAgaXMgbnVsbCwgdGhlbiB0aGUgcGFydCdzXG4gICAgICogY29udGVudCBjb25zaXN0cyBvZiBhbGwgc2libGluZ3MgZm9sbG93aW5nIGAuc3RhcnROb2RlYCwgdXAgdG8gYW5kXG4gICAgICogaW5jbHVkaW5nIHRoZSBsYXN0IGNoaWxkIG9mIGAucGFyZW50Tm9kZWAuIElmIGAuZW5kTm9kZWAgaXMgbm9uLW51bGwsIHRoZW5cbiAgICAgKiBgLnN0YXJ0Tm9kZWAgd2lsbCBhbHdheXMgYmUgbm9uLW51bGwuXG4gICAgICpcbiAgICAgKiAtIElmIGJvdGggYC5lbmROb2RlYCBhbmQgYC5zdGFydE5vZGVgIGFyZSBudWxsLCB0aGVuIHRoZSBwYXJ0J3MgY29udGVudFxuICAgICAqIGNvbnNpc3RzIG9mIGFsbCBjaGlsZCBub2RlcyBvZiBgLnBhcmVudE5vZGVgLlxuICAgICAqL1xuICAgIGdldCBwYXJlbnROb2RlKCkge1xuICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fJHBhcmVudDtcbiAgICAgICAgaWYgKHBhcmVudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBwYXJlbnROb2RlLm5vZGVUeXBlID09PSAxMSAvKiBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UICovKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgcGFyZW50Tm9kZSBpcyBhIERvY3VtZW50RnJhZ21lbnQsIGl0IG1heSBiZSBiZWNhdXNlIHRoZSBET00gaXNcbiAgICAgICAgICAgIC8vIHN0aWxsIGluIHRoZSBjbG9uZWQgZnJhZ21lbnQgZHVyaW5nIGluaXRpYWwgcmVuZGVyOyBpZiBzbywgZ2V0IHRoZSByZWFsXG4gICAgICAgICAgICAvLyBwYXJlbnROb2RlIHRoZSBwYXJ0IHdpbGwgYmUgY29tbWl0dGVkIGludG8gYnkgYXNraW5nIHRoZSBwYXJlbnQuXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcmVudE5vZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJ0J3MgbGVhZGluZyBtYXJrZXIgbm9kZSwgaWYgYW55LiBTZWUgYC5wYXJlbnROb2RlYCBmb3IgbW9yZVxuICAgICAqIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGdldCBzdGFydE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kc3RhcnROb2RlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgcGFydCdzIHRyYWlsaW5nIG1hcmtlciBub2RlLCBpZiBhbnkuIFNlZSBgLnBhcmVudE5vZGVgIGZvciBtb3JlXG4gICAgICogaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgZ2V0IGVuZE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kZW5kTm9kZTtcbiAgICB9XG4gICAgXyRzZXRWYWx1ZSh2YWx1ZSwgZGlyZWN0aXZlUGFyZW50ID0gdGhpcykge1xuICAgICAgICBpZiAoREVWX01PREUgJiYgdGhpcy5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoaXMgXFxgQ2hpbGRQYXJ0XFxgIGhhcyBubyBcXGBwYXJlbnROb2RlXFxgIGFuZCB0aGVyZWZvcmUgY2Fubm90IGFjY2VwdCBhIHZhbHVlLiBUaGlzIGxpa2VseSBtZWFucyB0aGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBwYXJ0IHdhcyBtYW5pcHVsYXRlZCBpbiBhbiB1bnN1cHBvcnRlZCB3YXkgb3V0c2lkZSBvZiBMaXQncyBjb250cm9sIHN1Y2ggdGhhdCB0aGUgcGFydCdzIG1hcmtlciBub2RlcyB3ZXJlIGVqZWN0ZWQgZnJvbSBET00uIEZvciBleGFtcGxlLCBzZXR0aW5nIHRoZSBlbGVtZW50J3MgXFxgaW5uZXJIVE1MXFxgIG9yIFxcYHRleHRDb250ZW50XFxgIGNhbiBkbyB0aGlzLmApO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZSwgZGlyZWN0aXZlUGFyZW50KTtcbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuICAgICAgICAgICAgLy8gTm9uLXJlbmRlcmluZyBjaGlsZCB2YWx1ZXMuIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlc2UgZG8gbm90IHJlbmRlclxuICAgICAgICAgICAgLy8gZW1wdHkgdGV4dCBub2RlcyB0byBhdm9pZCBpc3N1ZXMgd2l0aCBwcmV2ZW50aW5nIGRlZmF1bHQgPHNsb3Q+XG4gICAgICAgICAgICAvLyBmYWxsYmFjayBjb250ZW50LlxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBub3RoaW5nIHx8IHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAhPT0gbm90aGluZykge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCBub3RoaW5nIHRvIGNoaWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiB0aGlzLl8kc3RhcnROb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiB0aGlzLl8kZW5kTm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogdGhpcy5fJHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXyRjbGVhcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBub3RoaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgIT09IHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAmJiB2YWx1ZSAhPT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21taXRUZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWVbJ18kbGl0VHlwZSQnXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21taXRUZW1wbGF0ZVJlc3VsdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUubm9kZVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNJdGVyYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdEl0ZXJhYmxlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrLCB3aWxsIHJlbmRlciB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB0aGlzLl9jb21taXRUZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfaW5zZXJ0KG5vZGUsIHJlZiA9IHRoaXMuXyRlbmROb2RlKSB7XG4gICAgICAgIHJldHVybiB3cmFwKHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkucGFyZW50Tm9kZSkuaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZik7XG4gICAgfVxuICAgIF9jb21taXROb2RlKHZhbHVlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjbGVhcigpO1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUyAmJlxuICAgICAgICAgICAgICAgIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCAhPT0gbm9vcFNhbml0aXplcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGVOYW1lID0gKF9hID0gdGhpcy5fJHN0YXJ0Tm9kZS5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eubm9kZU5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudE5vZGVOYW1lID09PSAnU1RZTEUnIHx8IHBhcmVudE5vZGVOYW1lID09PSAnU0NSSVBUJykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9ICdGb3JiaWRkZW4nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnROb2RlTmFtZSA9PT0gJ1NUWUxFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgTGl0IGRvZXMgbm90IHN1cHBvcnQgYmluZGluZyBpbnNpZGUgc3R5bGUgbm9kZXMuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFRoaXMgaXMgYSBzZWN1cml0eSByaXNrLCBhcyBzdHlsZSBpbmplY3Rpb24gYXR0YWNrcyBjYW4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZXhmaWx0cmF0ZSBkYXRhIGFuZCBzcG9vZiBVSXMuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYENvbnNpZGVyIGluc3RlYWQgdXNpbmcgY3NzXFxgLi4uXFxgIGxpdGVyYWxzIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRvIGNvbXBvc2Ugc3R5bGVzLCBhbmQgbWFrZSBkbyBkeW5hbWljIHN0eWxpbmcgd2l0aCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBjc3MgY3VzdG9tIHByb3BlcnRpZXMsIDo6cGFydHMsIDxzbG90PnMsIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGFuZCBieSBtdXRhdGluZyB0aGUgRE9NIHJhdGhlciB0aGFuIHN0eWxlc2hlZXRzLmA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYExpdCBkb2VzIG5vdCBzdXBwb3J0IGJpbmRpbmcgaW5zaWRlIHNjcmlwdCBub2Rlcy4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgVGhpcyBpcyBhIHNlY3VyaXR5IHJpc2ssIGFzIGl0IGNvdWxkIGFsbG93IGFyYml0cmFyeSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBjb2RlIGV4ZWN1dGlvbi5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgbm9kZScsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IHRoaXMuXyRzdGFydE5vZGUsXG4gICAgICAgICAgICAgICAgcGFyZW50OiB0aGlzLl8kcGFyZW50LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IHRoaXMuX2luc2VydCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2NvbW1pdFRleHQodmFsdWUpIHtcbiAgICAgICAgLy8gSWYgdGhlIGNvbW1pdHRlZCB2YWx1ZSBpcyBhIHByaW1pdGl2ZSBpdCBtZWFucyB3ZSBjYWxsZWQgX2NvbW1pdFRleHQgb25cbiAgICAgICAgLy8gdGhlIHByZXZpb3VzIHJlbmRlciwgYW5kIHdlIGtub3cgdGhhdCB0aGlzLl8kc3RhcnROb2RlLm5leHRTaWJsaW5nIGlzIGFcbiAgICAgICAgLy8gVGV4dCBub2RlLiBXZSBjYW4gbm93IGp1c3QgcmVwbGFjZSB0aGUgdGV4dCBjb250ZW50ICguZGF0YSkgb2YgdGhlIG5vZGUuXG4gICAgICAgIGlmICh0aGlzLl8kY29tbWl0dGVkVmFsdWUgIT09IG5vdGhpbmcgJiZcbiAgICAgICAgICAgIGlzUHJpbWl0aXZlKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB3cmFwKHRoaXMuXyRzdGFydE5vZGUpLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90ZXh0U2FuaXRpemVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGV4dFNhbml0aXplciA9IGNyZWF0ZVNhbml0aXplcihub2RlLCAnZGF0YScsICdwcm9wZXJ0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3RleHRTYW5pdGl6ZXIodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICBraW5kOiAnY29tbWl0IHRleHQnLFxuICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21taXROb2RlKHRleHROb2RlKTtcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHNldHRpbmcgdGV4dCBjb250ZW50LCBmb3Igc2VjdXJpdHkgcHVycG9zZXMgaXQgbWF0dGVycyBhIGxvdFxuICAgICAgICAgICAgICAgIC8vIHdoYXQgdGhlIHBhcmVudCBpcy4gRm9yIGV4YW1wbGUsIDxzdHlsZT4gYW5kIDxzY3JpcHQ+IG5lZWQgdG8gYmVcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGVkIHdpdGggY2FyZSwgd2hpbGUgPHNwYW4+IGRvZXMgbm90LiBTbyBmaXJzdCB3ZSBuZWVkIHRvIHB1dCBhXG4gICAgICAgICAgICAgICAgLy8gdGV4dCBub2RlIGludG8gdGhlIGRvY3VtZW50LCB0aGVuIHdlIGNhbiBzYW5pdGl6ZSBpdHMgY29udGVudC5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdGV4dFNhbml0aXplciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RleHRTYW5pdGl6ZXIgPSBjcmVhdGVTYW5pdGl6ZXIodGV4dE5vZGUsICdkYXRhJywgJ3Byb3BlcnR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fdGV4dFNhbml0aXplcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCB0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogdGV4dE5vZGUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGUuZGF0YSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZShkLmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCB0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogd3JhcCh0aGlzLl8kc3RhcnROb2RlKS5uZXh0U2libGluZyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHJlc3VsdCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgIGNvbnN0IHsgdmFsdWVzLCBbJ18kbGl0VHlwZSQnXTogdHlwZSB9ID0gcmVzdWx0O1xuICAgICAgICAvLyBJZiAkbGl0VHlwZSQgaXMgYSBudW1iZXIsIHJlc3VsdCBpcyBhIHBsYWluIFRlbXBsYXRlUmVzdWx0IGFuZCB3ZSBnZXRcbiAgICAgICAgLy8gdGhlIHRlbXBsYXRlIGZyb20gdGhlIHRlbXBsYXRlIGNhY2hlLiBJZiBub3QsIHJlc3VsdCBpcyBhXG4gICAgICAgIC8vIENvbXBpbGVkVGVtcGxhdGVSZXN1bHQgYW5kIF8kbGl0VHlwZSQgaXMgYSBDb21waWxlZFRlbXBsYXRlIGFuZCB3ZSBuZWVkXG4gICAgICAgIC8vIHRvIGNyZWF0ZSB0aGUgPHRlbXBsYXRlPiBlbGVtZW50IHRoZSBmaXJzdCB0aW1lIHdlIHNlZSBpdC5cbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0eXBlb2YgdHlwZSA9PT0gJ251bWJlcidcbiAgICAgICAgICAgID8gdGhpcy5fJGdldFRlbXBsYXRlKHJlc3VsdClcbiAgICAgICAgICAgIDogKHR5cGUuZWwgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICh0eXBlLmVsID0gVGVtcGxhdGUuY3JlYXRlRWxlbWVudCh0eXBlLmgsIHRoaXMub3B0aW9ucykpLFxuICAgICAgICAgICAgICAgIHR5cGUpO1xuICAgICAgICBpZiAoKChfYSA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLl8kdGVtcGxhdGUpID09PSB0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICBraW5kOiAndGVtcGxhdGUgdXBkYXRpbmcnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLFxuICAgICAgICAgICAgICAgIGluc3RhbmNlOiB0aGlzLl8kY29tbWl0dGVkVmFsdWUsXG4gICAgICAgICAgICAgICAgcGFydHM6IHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5fcGFydHMsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlLl91cGRhdGUodmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRlbXBsYXRlSW5zdGFuY2UodGVtcGxhdGUsIHRoaXMpO1xuICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBpbnN0YW5jZS5fY2xvbmUodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAga2luZDogJ3RlbXBsYXRlIGluc3RhbnRpYXRlZCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgICAgICAgcGFydHM6IGluc3RhbmNlLl9wYXJ0cyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgZnJhZ21lbnQsXG4gICAgICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbnN0YW5jZS5fdXBkYXRlKHZhbHVlcyk7XG4gICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgIGtpbmQ6ICd0ZW1wbGF0ZSBpbnN0YW50aWF0ZWQgYW5kIHVwZGF0ZWQnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLFxuICAgICAgICAgICAgICAgIGluc3RhbmNlLFxuICAgICAgICAgICAgICAgIHBhcnRzOiBpbnN0YW5jZS5fcGFydHMsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgIGZyYWdtZW50LFxuICAgICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZShmcmFnbWVudCk7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBPdmVycmlkZGVuIHZpYSBgbGl0SHRtbFBvbHlmaWxsU3VwcG9ydGAgdG8gcHJvdmlkZSBwbGF0Zm9ybSBzdXBwb3J0LlxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJGdldFRlbXBsYXRlKHJlc3VsdCkge1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmdldChyZXN1bHQuc3RyaW5ncyk7XG4gICAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZUNhY2hlLnNldChyZXN1bHQuc3RyaW5ncywgKHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuICAgIF9jb21taXRJdGVyYWJsZSh2YWx1ZSkge1xuICAgICAgICAvLyBGb3IgYW4gSXRlcmFibGUsIHdlIGNyZWF0ZSBhIG5ldyBJbnN0YW5jZVBhcnQgcGVyIGl0ZW0sIHRoZW4gc2V0IGl0c1xuICAgICAgICAvLyB2YWx1ZSB0byB0aGUgaXRlbS4gVGhpcyBpcyBhIGxpdHRsZSBiaXQgb2Ygb3ZlcmhlYWQgZm9yIGV2ZXJ5IGl0ZW0gaW5cbiAgICAgICAgLy8gYW4gSXRlcmFibGUsIGJ1dCBpdCBsZXRzIHVzIHJlY3Vyc2UgZWFzaWx5IGFuZCBlZmZpY2llbnRseSB1cGRhdGUgQXJyYXlzXG4gICAgICAgIC8vIG9mIFRlbXBsYXRlUmVzdWx0cyB0aGF0IHdpbGwgYmUgY29tbW9ubHkgcmV0dXJuZWQgZnJvbSBleHByZXNzaW9ucyBsaWtlOlxuICAgICAgICAvLyBhcnJheS5tYXAoKGkpID0+IGh0bWxgJHtpfWApLCBieSByZXVzaW5nIGV4aXN0aW5nIFRlbXBsYXRlSW5zdGFuY2VzLlxuICAgICAgICAvLyBJZiB2YWx1ZSBpcyBhbiBhcnJheSwgdGhlbiB0aGUgcHJldmlvdXMgcmVuZGVyIHdhcyBvZiBhblxuICAgICAgICAvLyBpdGVyYWJsZSBhbmQgdmFsdWUgd2lsbCBjb250YWluIHRoZSBDaGlsZFBhcnRzIGZyb20gdGhlIHByZXZpb3VzXG4gICAgICAgIC8vIHJlbmRlci4gSWYgdmFsdWUgaXMgbm90IGFuIGFycmF5LCBjbGVhciB0aGlzIHBhcnQgYW5kIG1ha2UgYSBuZXdcbiAgICAgICAgLy8gYXJyYXkgZm9yIENoaWxkUGFydHMuXG4gICAgICAgIGlmICghaXNBcnJheSh0aGlzLl8kY29tbWl0dGVkVmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuXyRjbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIExldHMgdXMga2VlcCB0cmFjayBvZiBob3cgbWFueSBpdGVtcyB3ZSBzdGFtcGVkIHNvIHdlIGNhbiBjbGVhciBsZWZ0b3ZlclxuICAgICAgICAvLyBpdGVtcyBmcm9tIGEgcHJldmlvdXMgcmVuZGVyXG4gICAgICAgIGNvbnN0IGl0ZW1QYXJ0cyA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZTtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGxldCBpdGVtUGFydDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAocGFydEluZGV4ID09PSBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgbm8gZXhpc3RpbmcgcGFydCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiB0ZXN0IHBlcmYgaW1wYWN0IG9mIGFsd2F5cyBjcmVhdGluZyB0d28gcGFydHNcbiAgICAgICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIHNoYXJpbmcgcGFydHMgYmV0d2VlbiBub2Rlc1xuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy8xMjY2XG4gICAgICAgICAgICAgICAgaXRlbVBhcnRzLnB1c2goKGl0ZW1QYXJ0ID0gbmV3IENoaWxkUGFydCh0aGlzLl9pbnNlcnQoY3JlYXRlTWFya2VyKCkpLCB0aGlzLl9pbnNlcnQoY3JlYXRlTWFya2VyKCkpLCB0aGlzLCB0aGlzLm9wdGlvbnMpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBSZXVzZSBhbiBleGlzdGluZyBwYXJ0XG4gICAgICAgICAgICAgICAgaXRlbVBhcnQgPSBpdGVtUGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW1QYXJ0Ll8kc2V0VmFsdWUoaXRlbSk7XG4gICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydEluZGV4IDwgaXRlbVBhcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gaXRlbVBhcnRzIGFsd2F5cyBoYXZlIGVuZCBub2Rlc1xuICAgICAgICAgICAgdGhpcy5fJGNsZWFyKGl0ZW1QYXJ0ICYmIHdyYXAoaXRlbVBhcnQuXyRlbmROb2RlKS5uZXh0U2libGluZywgcGFydEluZGV4KTtcbiAgICAgICAgICAgIC8vIFRydW5jYXRlIHRoZSBwYXJ0cyBhcnJheSBzbyBfdmFsdWUgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgICAgICAgIGl0ZW1QYXJ0cy5sZW5ndGggPSBwYXJ0SW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgbm9kZXMgY29udGFpbmVkIHdpdGhpbiB0aGlzIFBhcnQgZnJvbSB0aGUgRE9NLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0YXJ0IFN0YXJ0IG5vZGUgdG8gY2xlYXIgZnJvbSwgZm9yIGNsZWFyaW5nIGEgc3Vic2V0IG9mIHRoZSBwYXJ0J3NcbiAgICAgKiAgICAgRE9NICh1c2VkIHdoZW4gdHJ1bmNhdGluZyBpdGVyYWJsZXMpXG4gICAgICogQHBhcmFtIGZyb20gIFdoZW4gYHN0YXJ0YCBpcyBzcGVjaWZpZWQsIHRoZSBpbmRleCB3aXRoaW4gdGhlIGl0ZXJhYmxlIGZyb21cbiAgICAgKiAgICAgd2hpY2ggQ2hpbGRQYXJ0cyBhcmUgYmVpbmcgcmVtb3ZlZCwgdXNlZCBmb3IgZGlzY29ubmVjdGluZyBkaXJlY3RpdmVzIGluXG4gICAgICogICAgIHRob3NlIFBhcnRzLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgXyRjbGVhcihzdGFydCA9IHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkubmV4dFNpYmxpbmcsIGZyb20pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl8kbm90aWZ5Q29ubmVjdGlvbkNoYW5nZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMsIGZhbHNlLCB0cnVlLCBmcm9tKTtcbiAgICAgICAgd2hpbGUgKHN0YXJ0ICYmIHN0YXJ0ICE9PSB0aGlzLl8kZW5kTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgbiA9IHdyYXAoc3RhcnQpLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgd3JhcChzdGFydCkucmVtb3ZlKCk7XG4gICAgICAgICAgICBzdGFydCA9IG47XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50YXRpb24gb2YgUm9vdFBhcnQncyBgaXNDb25uZWN0ZWRgLiBOb3RlIHRoYXQgdGhpcyBtZXRvZFxuICAgICAqIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBvbiBgUm9vdFBhcnRgcyAodGhlIGBDaGlsZFBhcnRgIHJldHVybmVkIGZyb20gYVxuICAgICAqIHRvcC1sZXZlbCBgcmVuZGVyKClgIGNhbGwpLiBJdCBoYXMgbm8gZWZmZWN0IG9uIG5vbi1yb290IENoaWxkUGFydHMuXG4gICAgICogQHBhcmFtIGlzQ29ubmVjdGVkIFdoZXRoZXIgdG8gc2V0XG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgc2V0Q29ubmVjdGVkKGlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRoaXMuXyRwYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fX2lzQ29ubmVjdGVkID0gaXNDb25uZWN0ZWQ7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLl8kbm90aWZ5Q29ubmVjdGlvbkNoYW5nZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMsIGlzQ29ubmVjdGVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwYXJ0LnNldENvbm5lY3RlZCgpIG1heSBvbmx5IGJlIGNhbGxlZCBvbiBhICcgK1xuICAgICAgICAgICAgICAgICdSb290UGFydCByZXR1cm5lZCBmcm9tIHJlbmRlcigpLicpO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgc3RyaW5ncywgcGFyZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IEFUVFJJQlVURV9QQVJUO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIGlmIChzdHJpbmdzLmxlbmd0aCA+IDIgfHwgc3RyaW5nc1swXSAhPT0gJycgfHwgc3RyaW5nc1sxXSAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5ldyBBcnJheShzdHJpbmdzLmxlbmd0aCAtIDEpLmZpbGwobmV3IFN0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBub3RoaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nhbml0aXplciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgdGFnTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC50YWdOYW1lO1xuICAgIH1cbiAgICAvLyBTZWUgY29tbWVudCBpbiBEaXNjb25uZWN0YWJsZSBpbnRlcmZhY2UgZm9yIHdoeSB0aGlzIGlzIGEgZ2V0dGVyXG4gICAgZ2V0IF8kaXNDb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kcGFyZW50Ll8kaXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoaXMgcGFydCBieSByZXNvbHZpbmcgdGhlIHZhbHVlIGZyb20gcG9zc2libHkgbXVsdGlwbGVcbiAgICAgKiB2YWx1ZXMgYW5kIHN0YXRpYyBzdHJpbmdzIGFuZCBjb21taXR0aW5nIGl0IHRvIHRoZSBET00uXG4gICAgICogSWYgdGhpcyBwYXJ0IGlzIHNpbmdsZS12YWx1ZWQsIGB0aGlzLl9zdHJpbmdzYCB3aWxsIGJlIHVuZGVmaW5lZCwgYW5kIHRoZVxuICAgICAqIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCB3aXRoIGEgc2luZ2xlIHZhbHVlIGFyZ3VtZW50LiBJZiB0aGlzIHBhcnQgaXNcbiAgICAgKiBtdWx0aS12YWx1ZSwgYHRoaXMuX3N0cmluZ3NgIHdpbGwgYmUgZGVmaW5lZCwgYW5kIHRoZSBtZXRob2QgaXMgY2FsbGVkXG4gICAgICogd2l0aCB0aGUgdmFsdWUgYXJyYXkgb2YgdGhlIHBhcnQncyBvd25pbmcgVGVtcGxhdGVJbnN0YW5jZSwgYW5kIGFuIG9mZnNldFxuICAgICAqIGludG8gdGhlIHZhbHVlIGFycmF5IGZyb20gd2hpY2ggdGhlIHZhbHVlcyBzaG91bGQgYmUgcmVhZC5cbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBvdmVybG9hZGVkIHRoaXMgd2F5IHRvIGVsaW1pbmF0ZSBzaG9ydC1saXZlZCBhcnJheSBzbGljZXNcbiAgICAgKiBvZiB0aGUgdGVtcGxhdGUgaW5zdGFuY2UgdmFsdWVzLCBhbmQgYWxsb3cgYSBmYXN0LXBhdGggZm9yIHNpbmdsZS12YWx1ZWRcbiAgICAgKiBwYXJ0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgcGFydCB2YWx1ZSwgb3IgYW4gYXJyYXkgb2YgdmFsdWVzIGZvciBtdWx0aS12YWx1ZWQgcGFydHNcbiAgICAgKiBAcGFyYW0gdmFsdWVJbmRleCB0aGUgaW5kZXggdG8gc3RhcnQgcmVhZGluZyB2YWx1ZXMgZnJvbS4gYHVuZGVmaW5lZGAgZm9yXG4gICAgICogICBzaW5nbGUtdmFsdWVkIHBhcnRzXG4gICAgICogQHBhcmFtIG5vQ29tbWl0IGNhdXNlcyB0aGUgcGFydCB0byBub3QgY29tbWl0IGl0cyB2YWx1ZSB0byB0aGUgRE9NLiBVc2VkXG4gICAgICogICBpbiBoeWRyYXRpb24gdG8gcHJpbWUgYXR0cmlidXRlIHBhcnRzIHdpdGggdGhlaXIgZmlyc3QtcmVuZGVyZWQgdmFsdWUsXG4gICAgICogICBidXQgbm90IHNldCB0aGUgYXR0cmlidXRlLCBhbmQgaW4gU1NSIHRvIG5vLW9wIHRoZSBET00gb3BlcmF0aW9uIGFuZFxuICAgICAqICAgY2FwdHVyZSB0aGUgdmFsdWUgZm9yIHNlcmlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfJHNldFZhbHVlKHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQgPSB0aGlzLCB2YWx1ZUluZGV4LCBub0NvbW1pdCkge1xuICAgICAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5zdHJpbmdzO1xuICAgICAgICAvLyBXaGV0aGVyIGFueSBvZiB0aGUgdmFsdWVzIGhhcyBjaGFuZ2VkLCBmb3IgZGlydHktY2hlY2tpbmdcbiAgICAgICAgbGV0IGNoYW5nZSA9IGZhbHNlO1xuICAgICAgICBpZiAoc3RyaW5ncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBTaW5nbGUtdmFsdWUgYmluZGluZyBjYXNlXG4gICAgICAgICAgICB2YWx1ZSA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgdmFsdWUsIGRpcmVjdGl2ZVBhcmVudCwgMCk7XG4gICAgICAgICAgICBjaGFuZ2UgPVxuICAgICAgICAgICAgICAgICFpc1ByaW1pdGl2ZSh2YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKHZhbHVlICE9PSB0aGlzLl8kY29tbWl0dGVkVmFsdWUgJiYgdmFsdWUgIT09IG5vQ2hhbmdlKTtcbiAgICAgICAgICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEludGVycG9sYXRpb24gY2FzZVxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWU7XG4gICAgICAgICAgICB2YWx1ZSA9IHN0cmluZ3NbMF07XG4gICAgICAgICAgICBsZXQgaSwgdjtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHYgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlc1t2YWx1ZUluZGV4ICsgaV0sIGRpcmVjdGl2ZVBhcmVudCwgaSk7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyLXByb3ZpZGVkIHZhbHVlIGlzIGBub0NoYW5nZWAsIHVzZSB0aGUgcHJldmlvdXMgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hhbmdlIHx8IChjaGFuZ2UgPSAhaXNQcmltaXRpdmUodikgfHwgdiAhPT0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAodiA9PT0gbm90aGluZykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlICE9PSBub3RoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICs9ICh2ICE9PSBudWxsICYmIHYgIT09IHZvaWQgMCA/IHYgOiAnJykgKyBzdHJpbmdzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gV2UgYWx3YXlzIHJlY29yZCBlYWNoIHZhbHVlLCBldmVuIGlmIG9uZSBpcyBgbm90aGluZ2AsIGZvciBmdXR1cmVcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgZGV0ZWN0aW9uLlxuICAgICAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZVtpXSA9IHY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZSAmJiAhbm9Db21taXQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgX2NvbW1pdFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbm90aGluZykge1xuICAgICAgICAgICAgd3JhcCh0aGlzLmVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYW5pdGl6ZXIgPSBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwodGhpcy5lbGVtZW50LCB0aGlzLm5hbWUsICdhdHRyaWJ1dGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9zYW5pdGl6ZXIodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICBraW5kOiAnY29tbWl0IGF0dHJpYnV0ZScsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogJycpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIFByb3BlcnR5UGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBQUk9QRVJUWV9QQVJUO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgX2NvbW1pdFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nhbml0aXplciA9IHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCh0aGlzLmVsZW1lbnQsIHRoaXMubmFtZSwgJ3Byb3BlcnR5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3Nhbml0aXplcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgcHJvcGVydHknLFxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB0aGlzLmVsZW1lbnRbdGhpcy5uYW1lXSA9IHZhbHVlID09PSBub3RoaW5nID8gdW5kZWZpbmVkIDogdmFsdWU7XG4gICAgfVxufVxuLy8gVGVtcG9yYXJ5IHdvcmthcm91bmQgZm9yIGh0dHBzOi8vY3JidWcuY29tLzk5MzI2OFxuLy8gQ3VycmVudGx5LCBhbnkgYXR0cmlidXRlIHN0YXJ0aW5nIHdpdGggXCJvblwiIGlzIGNvbnNpZGVyZWQgdG8gYmUgYVxuLy8gVHJ1c3RlZFNjcmlwdCBzb3VyY2UuIFN1Y2ggYm9vbGVhbiBhdHRyaWJ1dGVzIG11c3QgYmUgc2V0IHRvIHRoZSBlcXVpdmFsZW50XG4vLyB0cnVzdGVkIGVtcHR5U2NyaXB0IHZhbHVlLlxuY29uc3QgZW1wdHlTdHJpbmdGb3JCb29sZWFuQXR0cmlidXRlID0gdHJ1c3RlZFR5cGVzXG4gICAgPyB0cnVzdGVkVHlwZXMuZW1wdHlTY3JpcHRcbiAgICA6ICcnO1xuY2xhc3MgQm9vbGVhbkF0dHJpYnV0ZVBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gQk9PTEVBTl9BVFRSSUJVVEVfUEFSVDtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF9jb21taXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAga2luZDogJ2NvbW1pdCBib29sZWFuIGF0dHJpYnV0ZScsXG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogISEodmFsdWUgJiYgdmFsdWUgIT09IG5vdGhpbmcpLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlICE9PSBub3RoaW5nKSB7XG4gICAgICAgICAgICB3cmFwKHRoaXMuZWxlbWVudCkuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgZW1wdHlTdHJpbmdGb3JCb29sZWFuQXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIEV2ZW50UGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MsIHBhcmVudCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzLCBwYXJlbnQsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBFVkVOVF9QQVJUO1xuICAgICAgICBpZiAoREVWX01PREUgJiYgdGhpcy5zdHJpbmdzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQSBcXGA8JHtlbGVtZW50LmxvY2FsTmFtZX0+XFxgIGhhcyBhIFxcYEAke25hbWV9PS4uLlxcYCBsaXN0ZW5lciB3aXRoIGAgK1xuICAgICAgICAgICAgICAgICdpbnZhbGlkIGNvbnRlbnQuIEV2ZW50IGxpc3RlbmVycyBpbiB0ZW1wbGF0ZXMgbXVzdCBoYXZlIGV4YWN0bHkgJyArXG4gICAgICAgICAgICAgICAgJ29uZSBleHByZXNzaW9uIGFuZCBubyBzdXJyb3VuZGluZyB0ZXh0LicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEV2ZW50UGFydCBkb2VzIG5vdCB1c2UgdGhlIGJhc2UgXyRzZXRWYWx1ZS9fcmVzb2x2ZVZhbHVlIGltcGxlbWVudGF0aW9uXG4gICAgLy8gc2luY2UgdGhlIGRpcnR5IGNoZWNraW5nIGlzIG1vcmUgY29tcGxleFxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJHNldFZhbHVlKG5ld0xpc3RlbmVyLCBkaXJlY3RpdmVQYXJlbnQgPSB0aGlzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbmV3TGlzdGVuZXIgPVxuICAgICAgICAgICAgKF9hID0gcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCBuZXdMaXN0ZW5lciwgZGlyZWN0aXZlUGFyZW50LCAwKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbm90aGluZztcbiAgICAgICAgaWYgKG5ld0xpc3RlbmVyID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9sZExpc3RlbmVyID0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlO1xuICAgICAgICAvLyBJZiB0aGUgbmV3IHZhbHVlIGlzIG5vdGhpbmcgb3IgYW55IG9wdGlvbnMgY2hhbmdlIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZVxuICAgICAgICAvLyBwYXJ0IGFzIGEgbGlzdGVuZXIuXG4gICAgICAgIGNvbnN0IHNob3VsZFJlbW92ZUxpc3RlbmVyID0gKG5ld0xpc3RlbmVyID09PSBub3RoaW5nICYmIG9sZExpc3RlbmVyICE9PSBub3RoaW5nKSB8fFxuICAgICAgICAgICAgbmV3TGlzdGVuZXIuY2FwdHVyZSAhPT1cbiAgICAgICAgICAgICAgICBvbGRMaXN0ZW5lci5jYXB0dXJlIHx8XG4gICAgICAgICAgICBuZXdMaXN0ZW5lci5vbmNlICE9PVxuICAgICAgICAgICAgICAgIG9sZExpc3RlbmVyLm9uY2UgfHxcbiAgICAgICAgICAgIG5ld0xpc3RlbmVyLnBhc3NpdmUgIT09XG4gICAgICAgICAgICAgICAgb2xkTGlzdGVuZXIucGFzc2l2ZTtcbiAgICAgICAgLy8gSWYgdGhlIG5ldyB2YWx1ZSBpcyBub3Qgbm90aGluZyBhbmQgd2UgcmVtb3ZlZCB0aGUgbGlzdGVuZXIsIHdlIGhhdmVcbiAgICAgICAgLy8gdG8gYWRkIHRoZSBwYXJ0IGFzIGEgbGlzdGVuZXIuXG4gICAgICAgIGNvbnN0IHNob3VsZEFkZExpc3RlbmVyID0gbmV3TGlzdGVuZXIgIT09IG5vdGhpbmcgJiZcbiAgICAgICAgICAgIChvbGRMaXN0ZW5lciA9PT0gbm90aGluZyB8fCBzaG91bGRSZW1vdmVMaXN0ZW5lcik7XG4gICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICBraW5kOiAnY29tbWl0IGV2ZW50IGxpc3RlbmVyJyxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBuZXdMaXN0ZW5lcixcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyOiBzaG91bGRSZW1vdmVMaXN0ZW5lcixcbiAgICAgICAgICAgIGFkZExpc3RlbmVyOiBzaG91bGRBZGRMaXN0ZW5lcixcbiAgICAgICAgICAgIG9sZExpc3RlbmVyLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNob3VsZFJlbW92ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMsIG9sZExpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkQWRkTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIC8vIEJld2FyZTogSUUxMSBhbmQgQ2hyb21lIDQxIGRvbid0IGxpa2UgdXNpbmcgdGhlIGxpc3RlbmVyIGFzIHRoZVxuICAgICAgICAgICAgLy8gb3B0aW9ucyBvYmplY3QuIEZpZ3VyZSBvdXQgaG93IHRvIGRlYWwgdy8gdGhpcyBpbiBJRTExIC0gbWF5YmVcbiAgICAgICAgICAgIC8vIHBhdGNoIGFkZEV2ZW50TGlzdGVuZXI/XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMsIG5ld0xpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBuZXdMaXN0ZW5lcjtcbiAgICB9XG4gICAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5jYWxsKChfYiA9IChfYSA9IHRoaXMub3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhvc3QpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHRoaXMuZWxlbWVudCwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIEVsZW1lbnRQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBwYXJlbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy50eXBlID0gRUxFTUVOVF9QQVJUO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICAvLyBTZWUgY29tbWVudCBpbiBEaXNjb25uZWN0YWJsZSBpbnRlcmZhY2UgZm9yIHdoeSB0aGlzIGlzIGEgZ2V0dGVyXG4gICAgZ2V0IF8kaXNDb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kcGFyZW50Ll8kaXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIF8kc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgdG8gZWxlbWVudCBiaW5kaW5nJyxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgICAgcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZSk7XG4gICAgfVxufVxuLyoqXG4gKiBFTkQgVVNFUlMgU0hPVUxEIE5PVCBSRUxZIE9OIFRISVMgT0JKRUNULlxuICpcbiAqIFByaXZhdGUgZXhwb3J0cyBmb3IgdXNlIGJ5IG90aGVyIExpdCBwYWNrYWdlcywgbm90IGludGVuZGVkIGZvciB1c2UgYnlcbiAqIGV4dGVybmFsIHVzZXJzLlxuICpcbiAqIFdlIGN1cnJlbnRseSBkbyBub3QgbWFrZSBhIG1hbmdsZWQgcm9sbHVwIGJ1aWxkIG9mIHRoZSBsaXQtc3NyIGNvZGUuIEluIG9yZGVyXG4gKiB0byBrZWVwIGEgbnVtYmVyIG9mIChvdGhlcndpc2UgcHJpdmF0ZSkgdG9wLWxldmVsIGV4cG9ydHMgIG1hbmdsZWQgaW4gdGhlXG4gKiBjbGllbnQgc2lkZSBjb2RlLCB3ZSBleHBvcnQgYSBfJExIIG9iamVjdCBjb250YWluaW5nIHRob3NlIG1lbWJlcnMgKG9yXG4gKiBoZWxwZXIgbWV0aG9kcyBmb3IgYWNjZXNzaW5nIHByaXZhdGUgZmllbGRzIG9mIHRob3NlIG1lbWJlcnMpLCBhbmQgdGhlblxuICogcmUtZXhwb3J0IHRoZW0gZm9yIHVzZSBpbiBsaXQtc3NyLiBUaGlzIGtlZXBzIGxpdC1zc3IgYWdub3N0aWMgdG8gd2hldGhlciB0aGVcbiAqIGNsaWVudC1zaWRlIGNvZGUgaXMgYmVpbmcgdXNlZCBpbiBgZGV2YCBtb2RlIG9yIGBwcm9kYCBtb2RlLlxuICpcbiAqIFRoaXMgaGFzIGEgdW5pcXVlIG5hbWUsIHRvIGRpc2FtYmlndWF0ZSBpdCBmcm9tIHByaXZhdGUgZXhwb3J0cyBpblxuICogbGl0LWVsZW1lbnQsIHdoaWNoIHJlLWV4cG9ydHMgYWxsIG9mIGxpdC1odG1sLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBfJExIID0ge1xuICAgIC8vIFVzZWQgaW4gbGl0LXNzclxuICAgIF9ib3VuZEF0dHJpYnV0ZVN1ZmZpeDogYm91bmRBdHRyaWJ1dGVTdWZmaXgsXG4gICAgX21hcmtlcjogbWFya2VyLFxuICAgIF9tYXJrZXJNYXRjaDogbWFya2VyTWF0Y2gsXG4gICAgX0hUTUxfUkVTVUxUOiBIVE1MX1JFU1VMVCxcbiAgICBfZ2V0VGVtcGxhdGVIdG1sOiBnZXRUZW1wbGF0ZUh0bWwsXG4gICAgLy8gVXNlZCBpbiBoeWRyYXRlXG4gICAgX1RlbXBsYXRlSW5zdGFuY2U6IFRlbXBsYXRlSW5zdGFuY2UsXG4gICAgX2lzSXRlcmFibGU6IGlzSXRlcmFibGUsXG4gICAgX3Jlc29sdmVEaXJlY3RpdmU6IHJlc29sdmVEaXJlY3RpdmUsXG4gICAgLy8gVXNlZCBpbiB0ZXN0cyBhbmQgcHJpdmF0ZS1zc3Itc3VwcG9ydFxuICAgIF9DaGlsZFBhcnQ6IENoaWxkUGFydCxcbiAgICBfQXR0cmlidXRlUGFydDogQXR0cmlidXRlUGFydCxcbiAgICBfQm9vbGVhbkF0dHJpYnV0ZVBhcnQ6IEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LFxuICAgIF9FdmVudFBhcnQ6IEV2ZW50UGFydCxcbiAgICBfUHJvcGVydHlQYXJ0OiBQcm9wZXJ0eVBhcnQsXG4gICAgX0VsZW1lbnRQYXJ0OiBFbGVtZW50UGFydCxcbn07XG4vLyBBcHBseSBwb2x5ZmlsbHMgaWYgYXZhaWxhYmxlXG5jb25zdCBwb2x5ZmlsbFN1cHBvcnQgPSBERVZfTU9ERVxuICAgID8gd2luZG93LmxpdEh0bWxQb2x5ZmlsbFN1cHBvcnREZXZNb2RlXG4gICAgOiB3aW5kb3cubGl0SHRtbFBvbHlmaWxsU3VwcG9ydDtcbnBvbHlmaWxsU3VwcG9ydCA9PT0gbnVsbCB8fCBwb2x5ZmlsbFN1cHBvcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBvbHlmaWxsU3VwcG9ydChUZW1wbGF0ZSwgQ2hpbGRQYXJ0KTtcbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgbGl0LWh0bWwgdXNhZ2UuXG4oKF9kID0gZ2xvYmFsVGhpcy5saXRIdG1sVmVyc2lvbnMpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IChnbG9iYWxUaGlzLmxpdEh0bWxWZXJzaW9ucyA9IFtdKSkucHVzaCgnMi4yLjEnKTtcbmlmIChERVZfTU9ERSAmJiBnbG9iYWxUaGlzLmxpdEh0bWxWZXJzaW9ucy5sZW5ndGggPiAxKSB7XG4gICAgaXNzdWVXYXJuaW5nKCdtdWx0aXBsZS12ZXJzaW9ucycsIGBNdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXQgbG9hZGVkLiBgICtcbiAgICAgICAgYExvYWRpbmcgbXVsdGlwbGUgdmVyc2lvbnMgaXMgbm90IHJlY29tbWVuZGVkLmApO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWh0bWwuanMubWFwIiwiZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2N1c3RvbS1lbGVtZW50LmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3Byb3BlcnR5LmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3N0YXRlLmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2V2ZW50LW9wdGlvbnMuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnkuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYWxsLmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzeW5jLmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzc2lnbmVkLWVsZW1lbnRzLmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzc2lnbmVkLW5vZGVzLmpzXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWNvcmF0b3JzLmpzLm1hcFxuIiwiZXhwb3J0KmZyb21cImxpdC1odG1sL2RpcmVjdGl2ZXMvaWYtZGVmaW5lZC5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aWYtZGVmaW5lZC5qcy5tYXBcbiIsImltcG9ydFwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50XCI7aW1wb3J0XCJsaXQtaHRtbFwiO2V4cG9ydCpmcm9tXCJsaXQtZWxlbWVudC9saXQtZWxlbWVudC5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIENvbXBvbmVudHMgKi9cclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYnV0dG9uJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvY2hlY2tib3gnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zZHBpLWl0ZW0nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zZWxlY3QnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy90ZXh0YXJlYSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3RleHRmaWVsZCc7XHJcbmltcG9ydCAnLi9zdHJlYW0tZGVjay9jb25uZWN0JztcclxuaW1wb3J0ICcuL3N0eWxlcy9kb2N1bWVudCc7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==