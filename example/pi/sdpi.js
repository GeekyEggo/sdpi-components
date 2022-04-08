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
        return this.get('getGlobalSettings', (ev) => ev.event === 'didReceiveGlobalSettings');
    }
    setGlobalSettings(value) {
        this.send('setGlobalSettings', value);
    }
    getSettings() {
        return this.get('getSettings', (ev) => ev.event === 'didReceiveSettings');
    }
    setSettings(value) {
        this.send('setSettings', value);
    }
    async getConnectionInfo() {
        return this._connectionInfo.promise;
    }
    async get(send, isComplete, payload) {
        const resolver = new _core_promises__WEBPACK_IMPORTED_MODULE_1__.PromiseCompletionSource();
        const listener = (args) => {
            if (isComplete(args)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtCQUErQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZUFBZTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBLHlGQUF5RixNQUFNO0FBQy9GLDRDQUE0QyxlQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixnQkFBZ0I7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGdCQUFnQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrQkFBK0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxJQUFJO0FBQ2hGLCtFQUErRSxLQUFLO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxlQUFlO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxzQ0FBc0M7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxvQ0FBb0M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHNDQUFzQztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTSxTQUFTLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLCtCQUErQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQkFBa0IsZUFBZSxLQUFLO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2NkM4aUI7QUFDOWlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDRCtDO0FBQy9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEdUY7QUFDdkY7Ozs7Ozs7VUNEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0w2QjtBQUNFO0FBQ0M7QUFDSDtBQUNFO0FBQ0M7QUFDRDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvbXBvbmVudHMvY2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb21wb25lbnRzL3NkcGktaXRlbS50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvbXBvbmVudHMvdGV4dGZpZWxkLnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvY29udHJvbGxlcnMvY2hpbGQtbm9kZXMtY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvbnRyb2xsZXJzL3N0b3JlLWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb3JlL2V2ZW50cy50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvcmUvcHJvbWlzZXMudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb3JlL3RpbWVvdXQudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb3JlL3V0aWxzLnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvbWl4aW5zL2luZGV4LnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvbWl4aW5zL2lucHV0LnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvbWl4aW5zL3BlcnNpc3RlZC50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL3N0cmVhbS1kZWNrL2Nvbm5lY3QudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9zdHJlYW0tZGVjay9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL3N0cmVhbS1kZWNrL3N0cmVhbS1kZWNrLWNsaWVudC50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL3N0eWxlcy9kb2N1bWVudC50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL3N0eWxlcy9ob3N0LnRzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2Nzcy10YWcuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9iYXNlLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvY3VzdG9tLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9ldmVudC1vcHRpb25zLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hbGwuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3NpZ25lZC1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9zZHBpLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzc2lnbmVkLW5vZGVzLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvcXVlcnktYXN5bmMuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9xdWVyeS5qcyIsIndlYnBhY2s6Ly9zZHBpLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL3N0YXRlLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L3JlYWN0aXZlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9saXQtZWxlbWVudC9kZXZlbG9wbWVudC9saXQtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zZHBpLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2RpcmVjdGl2ZXMvaWYtZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly9zZHBpLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2xpdC1odG1sLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvbGl0L2RlY29yYXRvcnMuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9saXQvZGlyZWN0aXZlcy9pZi1kZWZpbmVkLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvbGl0L2luZGV4LmpzIiwid2VicGFjazovL3NkcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2RwaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2RwaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NkcGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4uL21peGlucyc7XHJcbmltcG9ydCB7IGhvc3RTdHlsZSB9IGZyb20gJy4uL3N0eWxlcy9ob3N0JztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdzZHBpLWJ1dHRvbicpXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBJbnB1dDx0eXBlb2YgTGl0RWxlbWVudCwgc3RyaW5nPihMaXRFbGVtZW50KSB7XHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAuLi5zdXBlci5zdHlsZXMsXHJcbiAgICAgICAgICAgIGhvc3RTdHlsZSxcclxuICAgICAgICAgICAgY3NzYFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aW5kb3ctYmctY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5Njk2OTY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc3BhY2VyKSAqIDIpIHZhcigtLXNwYWNlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0NjQ2O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b246bm90KDpkaXNhYmxlZCk6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aW5kb3ctYmctY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzY0NjQ2NDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk2OTY5NjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b246ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVySW5wdXQoXHJcbiAgICAgICAgICAgIGh0bWxgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIC5kaXNhYmxlZD0ke3RoaXMuZGlzYWJsZWR9IC52YWx1ZT0ke3RoaXMudmFsdWUgfHwgJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XHJcbiAgICAgICAgJ3NkcGktYnV0dG9uJzogQnV0dG9uO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNzcywgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xyXG5cclxuaW1wb3J0IHsgU3RvcmVDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvc3RvcmUtY29udHJvbGxlcic7XHJcbmltcG9ydCB7IElucHV0LCBQZXJzaXN0ZWQgfSBmcm9tICcuLi9taXhpbnMnO1xyXG5pbXBvcnQgeyBob3N0U3R5bGUgfSBmcm9tICcuLi9zdHlsZXMvaG9zdCc7XHJcblxyXG5AY3VzdG9tRWxlbWVudCgnc2RwaS1jaGVja2JveCcpXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveCBleHRlbmRzIFBlcnNpc3RlZChJbnB1dDx0eXBlb2YgTGl0RWxlbWVudCwgYm9vbGVhbj4oTGl0RWxlbWVudCkpIHtcclxuICAgIHByaXZhdGUgX3N0b3JlID0gbmV3IFN0b3JlQ29udHJvbGxlcih0aGlzKTtcclxuXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAuLi5zdXBlci5zdHlsZXMsXHJcbiAgICAgICAgICAgIGhvc3RTdHlsZSxcclxuICAgICAgICAgICAgY3NzYFxyXG4gICAgICAgICAgICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIC0tY2hlY2tib3gtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogdmFyKC0tc3BhY2VyKSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jaGVja21hcmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IHZhcigtLWNoZWNrYm94LXNpemUpIHZhcigtLWNoZWNrYm94LXNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdmFyKC0tY2hlY2tib3gtc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLWNoZWNrYm94LXNpemUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCB2YXIoLS1zcGFjZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0Om5vdCg6ZGlzYWJsZWQpIH4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0OmRpc2FibGVkIH4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzdmIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTAnIHZpZXdCb3g9JzAgMCAxMiAxMCclM0UlM0Nwb2x5Z29uIGZpbGw9JyUyM0ZGRicgcG9pbnRzPSc3LjIgNy41IDcuMiAtMS4zIDguNyAtMS4zIDguNiA5LjEgMi43IDguNyAyLjcgNy4yJyB0cmFuc2Zvcm09J3JvdGF0ZSgzNyA1LjcxOCAzLjg5NiknLyUzRSUzQy9zdmclM0UlMEFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG9wdGlvbmFsIHRleHQgdG8gYmUgc2hvd24gbmV4dCB0byB0aGUgY2hlY2stYm94LlxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgcHVibGljIHRleHQ/OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMudGV4dCA/IGh0bWxgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+JHt0aGlzLnRleHR9PC9zcGFuPmAgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcklucHV0KFxyXG4gICAgICAgICAgICBodG1sYFxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC5jaGVja2VkPSR7dGhpcy52YWx1ZSB8fCBmYWxzZX0gLmRpc2FibGVkPSR7dGhpcy5kaXNhYmxlZH0gQGNoYW5nZT0keyhldjogSFRNTElucHV0RXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHRoaXMuX3N0b3JlLnNhdmUoZXYudGFyZ2V0LmNoZWNrZWQpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCIgcm9sZT1cImNoZWNrYm94XCIgYXJpYS1jaGVja2VkPSR7dGhpcy52YWx1ZSB8fCBmYWxzZX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICR7dGV4dH1cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcclxuICAgICAgICAnc2RwaS1jaGVja2JveCc6IENoZWNrYm94O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNzcywgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xyXG5cclxuaW1wb3J0IHsgaG9zdFN0eWxlIH0gZnJvbSAnLi4vc3R5bGVzL2hvc3QnO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ3NkcGktaXRlbScpXHJcbmV4cG9ydCBjbGFzcyBTZHBpSXRlbSBleHRlbmRzIExpdEVsZW1lbnQge1xyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlcyA9IFtcclxuICAgICAgICBob3N0U3R5bGUsXHJcbiAgICAgICAgY3NzYFxyXG4gICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMjJweDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5NXB4IDFmcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIGxhYmVsLlxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgcHVibGljIGxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYWJlbCA/IGh0bWxgPGxhYmVsPiR7dGhpcy5sYWJlbH06PC9sYWJlbD5gIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gaHRtbGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBncmlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj4ke2xhYmVsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj48c2xvdD48L3Nsb3Q+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xyXG4gICAgICAgICdzZHBpLWl0ZW0nOiBTZHBpSXRlbTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjc3MsIGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcclxuXHJcbmltcG9ydCB7IENoaWxkTm9kZXNDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvY2hpbGQtbm9kZXMtY29udHJvbGxlcic7XHJcbmltcG9ydCB7IFN0b3JlQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3N0b3JlLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBJbnB1dCwgUGVyc2lzdGVkIH0gZnJvbSAnLi4vbWl4aW5zJztcclxuaW1wb3J0IHsgaG9zdFN0eWxlIH0gZnJvbSAnLi4vc3R5bGVzL2hvc3QnO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ3NkcGktc2VsZWN0JylcclxuZXhwb3J0IGNsYXNzIFNlbGVjdCBleHRlbmRzIFBlcnNpc3RlZChJbnB1dDx0eXBlb2YgTGl0RWxlbWVudCwgc3RyaW5nPihMaXRFbGVtZW50KSkge1xyXG4gICAgcHJpdmF0ZSBfY2hpbGROb2RlcyA9IG5ldyBDaGlsZE5vZGVzQ29udHJvbGxlcih0aGlzKTtcclxuICAgIHByaXZhdGUgX3N0b3JlID0gbmV3IFN0b3JlQ29udHJvbGxlcih0aGlzKTtcclxuXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAuLi5zdXBlci5zdHlsZXMsXHJcbiAgICAgICAgICAgIGhvc3RTdHlsZSxcclxuICAgICAgICAgICAgY3NzYFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1iZy1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1zcGFjZXIpICsgMXB4KSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNlbGVjdDpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvcHRpb25hbCBwbGFjZWhvbGRlciB0ZXh0OyBhZGRlZCBhcyB0aGUgZmlyc3QgaXRlbSB3aXRoaW4gdGhlIHNlbGVjdCwgYXMgYSBkaXNhYmxlIG9wdGlvbiwgYW5kIHNlbGVjdGVkIGJ5IGRlZmF1bHQuXHJcbiAgICAgKi9cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwdWJsaWMgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcklucHV0KFxyXG4gICAgICAgICAgICBodG1sYFxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCAuZGlzYWJsZWQ9JHt0aGlzLmRpc2FibGVkfSAudmFsdWU9JHt0aGlzLnZhbHVlIHx8ICcnfSBAY2hhbmdlPSR7KGV2OiBIVE1MSW5wdXRFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHRoaXMuX3N0b3JlLnNhdmUoZXYudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIC5oaWRkZW49JHshdGhpcy5wbGFjZWhvbGRlciB8fCB0aGlzLnZhbHVlICE9PSB1bmRlZmluZWR9PiR7dGhpcy5wbGFjZWhvbGRlcn08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAke3RoaXMucmVuZGVyQ2hpbGROb2RlcygpfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgb3B0aW9uIGdyb3VwcyBhbmQgb3B0aW9ucyBhc3NvY2lhdGVkIHdpdGggdGhlIGBfY2hpbGROb2Rlc0NvbnRyb2xsZXIuY2hpbGROb2Rlc2AuXHJcbiAgICAgKiBAcmV0dXJucyB7dW5rbm93bn0gVGhlIEhUTUwgdGVtcGxhdGUgdGhhdCBjb250YWlucyB0aGUgb3B0aW9ucy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZW5kZXJDaGlsZE5vZGVzKCk6IHVua25vd24ge1xyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXBPcHRpb25zID0gKGl0ZW06IE5vZGUpOiB1bmtub3duID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChpdGVtLm5vZGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdPUFRHUk9VUCc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgPG9wdGdyb3VwIC5sYWJlbD0keyg8SFRNTE9wdEdyb3VwRWxlbWVudD5pdGVtKS5sYWJlbH0+JHtBcnJheS5mcm9tKGl0ZW0uY2hpbGROb2RlcykubWFwKG1hcE9wdGlvbnMpfTwvb3B0Z3JvdXA+YDtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ09QVElPTic6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgPG9wdGlvbiAuZGlzYWJsZWQ9JHsoPEhUTUxPcHRpb25FbGVtZW50Pml0ZW0pLmRpc2FibGVkfSAudmFsdWU9JHsoPEhUTUxPcHRpb25FbGVtZW50Pml0ZW0pLnRleHR9PiR7KDxIVE1MT3B0aW9uRWxlbWVudD5pdGVtKS5sYWJlbH08L29wdGlvbj5gO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGh0bWxgJHt0aGlzLl9jaGlsZE5vZGVzLmNoaWxkTm9kZXMubWFwKG1hcE9wdGlvbnMpfWA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xyXG4gICAgICAgICdzZHBpLXNlbGVjdCc6IFNlbGVjdDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjc3MsIGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcclxuaW1wb3J0IHsgaWZEZWZpbmVkIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvaWYtZGVmaW5lZC5qcyc7XHJcblxyXG5pbXBvcnQgeyBTdG9yZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy9zdG9yZS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgSW5wdXQsIFBlcnNpc3RlZCB9IGZyb20gJy4uL21peGlucyc7XHJcbmltcG9ydCB7IGhvc3RTdHlsZSB9IGZyb20gJy4uL3N0eWxlcy9ob3N0JztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdzZHBpLXRleHRhcmVhJylcclxuZXhwb3J0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgUGVyc2lzdGVkKElucHV0PHR5cGVvZiBMaXRFbGVtZW50LCBzdHJpbmc+KExpdEVsZW1lbnQpKSB7XHJcbiAgICBwcml2YXRlIF9zdG9yZSA9IG5ldyBTdG9yZUNvbnRyb2xsZXIodGhpcyk7XHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzdHlsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgLi4uc3VwZXIuc3R5bGVzLFxyXG4gICAgICAgICAgICBob3N0U3R5bGUsXHJcbiAgICAgICAgICAgIGNzc2BcclxuICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1iZy1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1zcGFjZXIpICsgM3B4KSB2YXIoLS1zcGFjZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYTpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5sZW5ndGgge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbWF4aW11bSBsZW5ndGggdGhlIHRleHQgdmFsdWUgY2FuIGJlLlxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGF0dHJpYnV0ZTogJ21heGxlbmd0aCcsXHJcbiAgICAgICAgdHlwZTogTnVtYmVyXHJcbiAgICB9KVxyXG4gICAgcHVibGljIG1heExlbmd0aD86IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgdGhlIHJvd3MgcHJvcGVydHkgb2YgdGhlIHRleHQgYXJlYS5cclxuICAgICAqL1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXHJcbiAgICBwdWJsaWMgcm93cyA9IDM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2hvdyB0aGUgbGVuZ3RoIG9mIHRoZSB0ZXh0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGF0dHJpYnV0ZTogJ3Nob3dsZW5ndGgnLFxyXG4gICAgICAgIHR5cGU6IEJvb2xlYW5cclxuICAgIH0pXHJcbiAgICBwdWJsaWMgc2hvd0xlbmd0aCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJJbnB1dChodG1sYFxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICBtYXhsZW5ndGg9JHtpZkRlZmluZWQodGhpcy5tYXhMZW5ndGgpfVxyXG4gICAgICAgICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIC5pZD0ke3RoaXMuaW5wdXRJZH1cclxuICAgICAgICAgICAgICAgIC5yb3dzPSR7dGhpcy5yb3dzfVxyXG4gICAgICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy52YWx1ZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgIEBpbnB1dD0keyhldjogSFRNTElucHV0RXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHRoaXMuX3N0b3JlLnNhdmUoZXYudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICR7dGhpcy5nZXRMZW5ndGhMYWJlbCgpfVxyXG4gICAgICAgIGApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbGFiZWwgdGhhdCBkZW5vdGVzIHRoZSBsZW5ndGggb2YgdGhlIHRleHQgYXJlYS5cclxuICAgICAqIEByZXR1cm5zIHt1bmtub3dufSBUaGUgdGVtcGxhdGUgdXNlZCB0byByZW5kZXIgdGhlIGxlbmd0aCBvZiB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0TGVuZ3RoTGFiZWwoKTogdW5rbm93biB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0xlbmd0aCB8fCB0aGlzLm1heExlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXhMZW5ndGhMYWJlbCA9IHRoaXMubWF4TGVuZ3RoID8gaHRtbGAvJHt0aGlzLm1heExlbmd0aH1gIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gaHRtbGA8bGFiZWwgY2xhc3M9XCJsZW5ndGhcIiBmb3I9JHt0aGlzLmlucHV0SWR9PiR7dGhpcy52YWx1ZT8ubGVuZ3RofSR7bWF4TGVuZ3RoTGFiZWx9PC9sYWJlbD5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XHJcbiAgICAgICAgJ3NkcGktdGV4dGFyZWEnOiBUZXh0YXJlYTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjc3MsIGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcclxuXHJcbmltcG9ydCB7IFN0b3JlQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3N0b3JlLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBJbnB1dCwgUGVyc2lzdGVkIH0gZnJvbSAnLi4vbWl4aW5zJztcclxuaW1wb3J0IHsgaG9zdFN0eWxlIH0gZnJvbSAnLi4vc3R5bGVzL2hvc3QnO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ3NkcGktdGV4dGZpZWxkJylcclxuZXhwb3J0IGNsYXNzIFRleHRmaWVsZCBleHRlbmRzIFBlcnNpc3RlZChJbnB1dDx0eXBlb2YgTGl0RWxlbWVudCwgc3RyaW5nPihMaXRFbGVtZW50KSkge1xyXG4gICAgcHJpdmF0ZSBfc3RvcmUgPSBuZXcgU3RvcmVDb250cm9sbGVyKHRoaXMpO1xyXG5cclxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIC4uLnN1cGVyLnN0eWxlcyxcclxuICAgICAgICAgICAgaG9zdFN0eWxlLFxyXG4gICAgICAgICAgICBjc3NgXHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtYmctY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc3BhY2VyKSArIDNweCkgdmFyKC0tc3BhY2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dDpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0OnJlcXVpcmVkIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5OCUgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6cmVxdWlyZWQ6dmFsaWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSTVJaUJvWldsbmFIUTlJamtpSUhacFpYZENiM2c5SWpBZ01DQTVJRGtpUGp4d2IyeDVaMjl1SUdacGJHdzlJaU5FT0VRNFJEZ2lJSEJ2YVc1MGN6MGlOUzR5SURFZ05pNHlJREVnTmk0eUlEY2dNeTR5SURjZ015NHlJRFlnTlM0eUlEWWlJSFJ5WVc1elptOXliVDBpY205MFlYUmxLRFF3SURRdU5qYzNJRFFwSWk4K1BDOXpkbWMrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dDpyZXF1aXJlZDppbnZhbGlkIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0k1SWlCb1pXbG5hSFE5SWpraUlIWnBaWGRDYjNnOUlqQWdNQ0E1SURraVBnb2dJQ0FnUEhCaGRHZ2dabWxzYkQwaUkwUTRSRGhFT0NJZ1pEMGlUVFF1TlN3d0lFTTJMams0TlRJNE1UTTNMQzAwTGpVMk5UTTROemd5WlMweE5pQTVMREl1TURFME56RTROak1nT1N3MExqVWdRemtzTmk0NU9EVXlPREV6TnlBMkxqazROVEk0TVRNM0xEa2dOQzQxTERrZ1F6SXVNREUwTnpFNE5qTXNPU0F6TGpBME16VTVNVGc0WlMweE5pdzJMams0TlRJNE1UTTNJREFzTkM0MUlFTXRNeTR3TkRNMU9URTRPR1V0TVRZc01pNHdNVFEzTVRnMk15QXlMakF4TkRjeE9EWXpMRFF1TlRZMU16ZzNPREpsTFRFMklEUXVOU3d3SUZvZ1RUUXNNU0JNTkN3MklFdzFMRFlnVERVc01TQk1OQ3d4SUZvZ1RUUXVOU3c0SUVNMExqYzNOakUwTWpNM0xEZ2dOU3czTGpjM05qRTBNak0zSURVc055NDFJRU0xTERjdU1qSXpPRFUzTmpNZ05DNDNOell4TkRJek55dzNJRFF1TlN3M0lFTTBMakl5TXpnMU56WXpMRGNnTkN3M0xqSXlNemcxTnpZeklEUXNOeTQxSUVNMExEY3VOemMyTVRReU16Y2dOQzR5TWpNNE5UYzJNeXc0SURRdU5TdzRJRm9pTHo0S0lDQThMM04yWno0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgb3B0aW9uYWwgcGF0dGVybiB0byBiZSBhcHBsaWVkIHdoZW4gdmFsaWRhdGluZyB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwdWJsaWMgcGF0dGVybiA9ICcnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG9wdGlvbmFsIHBsYWNlaG9sZGVyIHRleHQgdG8gYmUgc2hvd24gd2l0aGluIHRoZSBpbnB1dC5cclxuICAgICAqL1xyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHB1YmxpYyBwbGFjZWhvbGRlciA9ICcnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzZXR0aW5nIGlzIHJlcXVpcmVkLlxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXHJcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHByb3RlY3RlZCByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVySW5wdXQoaHRtbGBcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgLnBhdHRlcm49JHt0aGlzLnBhdHRlcm59XHJcbiAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXI9JHt0aGlzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkPSR7dGhpcy5yZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMudmFsdWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBAaW5wdXQ9JHsoZXY6IEhUTUxJbnB1dEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB0aGlzLl9zdG9yZS5zYXZlKGV2LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgYCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xyXG4gICAgICAgICdzZHBpLXRleHRmaWVsZCc6IFRleHRmaWVsZDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdGl2ZUNvbnRyb2xsZXIsIFJlYWN0aXZlQ29udHJvbGxlckhvc3QgfSBmcm9tICdsaXQnO1xyXG5cclxudHlwZSBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0Tm9kZSA9IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgJiBOb2RlO1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGEgY29udHJvbGxlciB0aGF0IG9ic2VydmVzIHRoZSBjaGlsZCBub2RlcyBvZiB0aGUgaG9zdCwgYW5kIGV4cG9zZXMgdGhlbSB2aWEgYGNoaWxkTm9kZXNgLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENoaWxkTm9kZXNDb250cm9sbGVyIGltcGxlbWVudHMgUmVhY3RpdmVDb250cm9sbGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgYSBuZXcgY2hpbGQgbm9kZSBjb250cm9sbGVyIGNhcGFibGUgb2Ygb2JzZXJ2aW5nIHRoZSBjaGlsZCBub2RlcyBvZiB0aGUgaG9zdCwgZXhwb3NlZCB2aWEgYGNoaWxkTm9kZXNgLlxyXG4gICAgICogQHBhcmFtIGhvc3QgVGhlIGhvc3Qgbm9kZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaG9zdDogUmVhY3RpdmVDb250cm9sbGVySG9zdE5vZGUpIHtcclxuICAgICAgICAodGhpcy5faG9zdCA9IGhvc3QpLmFkZENvbnRyb2xsZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLmhhbmRsZU11dGF0aW9uLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY2hpbGQgbm9kZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBob3N0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2hpbGROb2RlczogTm9kZVtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgaG9zdCB0aGUgY29udHJvbGxlciBpcyBjb25uZWN0ZWQgdG8uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2hvc3Q6IFJlYWN0aXZlQ29udHJvbGxlckhvc3ROb2RlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG9ic2VydmVyIHJlc3BvbnNpYmxlIGZvciBtb25pdG9yaW5nIHRoZSBjaGlsZCBub2RlcyBvZiB0aGUgaG9zdC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICBwdWJsaWMgaG9zdENvbm5lY3RlZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX2hvc3QsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgcHVibGljIGhvc3REaXNjb25uZWN0ZWQ/KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEludm9rZWQgd2hlbiBhIG11dGF0aW9uIG9jY3VycyB3aXRoaW4gdGhlIGBfb2JzZXJ2ZXJgLCBpLmUuIGEgbm9kZSB3YXMgYWRkZWQgb3IgcmVtb3ZlZCBmcm9tIHRoZSBgX2hvc3RgLlxyXG4gICAgICogQHBhcmFtIG11dGF0aW9ucyBUaGUgbXV0YXRpb25zIHRoYXQgb2NjdXJyZWQuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlTXV0YXRpb24obXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdKTogdm9pZCB7XHJcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goKG11dGF0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEFkZCBuZXcgbm9kZXMuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYWRkZWQgb2YgbXV0YXRpb24uYWRkZWROb2Rlcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goYWRkZWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgb2xkIG5vZGVzLlxyXG4gICAgICAgICAgICBtdXRhdGlvbi5yZW1vdmVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihub2RlKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2hvc3QucmVxdWVzdFVwZGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0aXZlQ29udHJvbGxlciwgUmVhY3RpdmVDb250cm9sbGVySG9zdCB9IGZyb20gJ2xpdCc7XHJcblxyXG5pbXBvcnQgeyB1c2VTZXR0aW5ncyB9IGZyb20gJy4uL3N0cmVhbS1kZWNrL3NldHRpbmdzJztcclxuXHJcbnR5cGUgUmVhY3RpdmVTdG9yZUNvbnRyb2xsZXJIb3N0PFQ+ID0gUmVhY3RpdmVDb250cm9sbGVySG9zdCAmIHtcclxuICAgIGlzR2xvYmFsOiBib29sZWFuO1xyXG4gICAgcGF0aD86IHN0cmluZztcclxuICAgIHZhbHVlPzogVDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhIGNvbnRyb2xsZXIgdGhhdCBpcyBjYXBhYmxlIG9mIHBlcnNpc3RpbmcgYW5kIHJldHJpZXZpbmcgZGF0YSB0byBhbmQgZnJvbSB0aGUgU3RyZWFtIERlY2tzIHNldHRpbmdzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0b3JlQ29udHJvbGxlcjxUPiBpbXBsZW1lbnRzIFJlYWN0aXZlQ29udHJvbGxlciB7XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIGEgbmV3IGNoaWxkIG5vZGUgY29udHJvbGxlciBjYXBhYmxlIG9mIG9ic2VydmluZyB0aGUgY2hpbGQgbm9kZXMgb2YgdGhlIGhvc3QsIGV4cG9zZWQgdmlhIGBjaGlsZE5vZGVzYC5cclxuICAgICAqIEBwYXJhbSBob3N0IFRoZSBob3N0IG5vZGUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGhvc3Q6IFJlYWN0aXZlU3RvcmVDb250cm9sbGVySG9zdDxUPikge1xyXG4gICAgICAgICh0aGlzLl9ob3N0ID0gaG9zdCkuYWRkQ29udHJvbGxlcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBob3N0IHRoZSBjb250cm9sbGVyIGlzIGNvbm5lY3RlZCB0by5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaG9zdDogUmVhY3RpdmVTdG9yZUNvbnRyb2xsZXJIb3N0PFQ+O1xyXG5cclxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgcHVibGljIGhvc3RDb25uZWN0ZWQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hvc3QucGF0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zYXZlID0gdXNlU2V0dGluZ3M8VD4odGhpcy5faG9zdC5wYXRoLCB0aGlzLl9ob3N0LmlzR2xvYmFsLCAodmFsdWUpID0+ICh0aGlzLl9ob3N0LnZhbHVlID0gdmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlcyB0aGUgYHZhbHVlYCB0byB0aGUgU3RyZWFtIERlY2sgc2V0dGluZ3MuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHNhdmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzYXZlKHZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5faG9zdC52YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fc2F2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zYXZlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJzaXN0cyB0aGUgYHZhbHVlYCB0byB0aGUgU3RyZWFtIERlY2sgc2V0dGluZ3MuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHBlcnNpc3QuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3NhdmU/OiAodmFsdWU6IFQpID0+IHZvaWQ7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFByb3ZpZGVzIGFuIGV2ZW50IGRpc3BhdGNoZXIgd2hlcmVieSBoYW5kbGVycyBjYW4gc3Vic2NyaWJlIHRvIGV2ZW50cyB0aGF0IGFyZSBsYXRlciBkaXNwYXRjaGVkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEV2ZW50TWFuYWdlcjxUPiBpbXBsZW1lbnRzIElFdmVudERpc3BhdGNoZXI8VD4sIElFdmVudFN1YnNjcmliZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVyczogSUV2ZW50SGFuZGxlcjxUPltdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwYXRjaGVzIHRoZSBldmVudCBmb3IgYWxsIGhhbmRsZXJzLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgZWFjaCBoYW5kbGVyIHdpdGguXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwYXRjaChhcmdzOiBUKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIHRoaXMuaGFuZGxlcnMpIHtcclxuICAgICAgICAgICAgaGFuZGxlcihhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBoYW5kbGVyIHRvIHRoZSBldmVudC5cclxuICAgICAqIEBwYXJhbSB7SUV2ZW50SGFuZGxlcjxUPn0gaGFuZGxlciBUaGUgaGFuZGxlciB0byBhZGQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdWJzY3JpYmUoaGFuZGxlcjogSUV2ZW50SGFuZGxlcjxUPik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVuc3Vic2NyaWJlcyB0aGUgaGFuZGxlciBmcm9tIHRoZSBldmVudC5cclxuICAgICAqIEBwYXJhbSB7SUV2ZW50SGFuZGxlcjxUPn0gaGFuZGxlciBUaGUgaGFuZGxlciB0byByZW1vdmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1bnN1YnNjcmliZShoYW5kbGVyOiBJRXZlbnRIYW5kbGVyPFQ+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IHRoaXMuaGFuZGxlcnMuZmlsdGVyKChoKSA9PiBoICE9PSBoYW5kbGVyKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGV2ZW50IHN1YnNjcmliZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudFN1YnNjcmliZXI8VD4ge1xyXG4gICAgc3Vic2NyaWJlKGhhbmRsZXI6IElFdmVudEhhbmRsZXI8VD4pOiB2b2lkO1xyXG4gICAgdW5zdWJzY3JpYmUoaGFuZGxlcjogSUV2ZW50SGFuZGxlcjxUPik6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCBkaXNwYXRjaGVyXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudERpc3BhdGNoZXI8VD4ge1xyXG4gICAgZGlzcGF0Y2goYXJnczogVCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCBoYW5kbGVyLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnRIYW5kbGVyPFQ+IHtcclxuICAgIChhcmdzOiBUKTogdm9pZDtcclxufVxyXG4iLCIvKipcclxuICogUHJvdmlkZXMgYSBwcm9taXNlIGNvbXBsZXRpb24gc291cmNlIHdoZXJlYnkgYSBwcm9taXNlIGNhbiBiZSByZXNvbHZlZCBhdCBhIGxhdGVyIHN0YWdlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFByb21pc2VDb21wbGV0aW9uU291cmNlPFQ+IHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3Byb21pc2U6IFByb21pc2U8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiBhIHByb21pc2UgY29tcGxldGlvbiBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIHRoaXMucmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVqZWN0PzogKHJlYXNvbj86IHVua25vd24pID0+IHZvaWQ7XHJcbiAgICBwcml2YXRlIHJlc29sdmU/OiAodmFsdWU6IFQgfCBQcm9taXNlTGlrZTxUPikgPT4gdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHByb21pc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcHJvbWlzZSgpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHJlc3VsdCBvZiB0aGUgaW5uZXIgcHJvbWlzZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRSZXN1bHQodmFsdWU6IFQgfCBQcm9taXNlTGlrZTxUPik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnJlc29sdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWplY3RzIHRoZSBpbm5lciBwcm9taXNlLlxyXG4gICAgICogQHBhcmFtIHJlYXNvbiBUaGUgcmVhc29uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0RXhjZXB0aW9uKHJlYXNvbj86IHVua25vd24pOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5yZWplY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3QocmVhc29uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEludm9rZXMgdGhlIGBjYWxsYmFja2AgYWZ0ZXIgdGhlIGdpdmVuIGB0aW1lb3V0YDsgY2FsbGluZyB0aGUgcmV0dXJuaW5nIGZ1bmN0aW9uIHdpbGwgcmVzZXQgdGhlIHRpbWVvdXQsIHRodXMgYWxsb3dpbmcgZm9yIGEgZGVsYXkgaW4gdGhlIGludm9jYXRpb24gb2YgdGhlIGBjYWxsYmFja2AuXHJcbiAqIEBwYXJhbSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIHRpbWVvdXQgZXhwaXJlcy5cclxuICogQHBhcmFtIHRpbWVvdXQgVGhlIHRpbWVvdXQgZHVyYXRpb24uXHJcbiAqIEByZXR1cm5zIEEgZnVuY3Rpb24gdGhhdCBhbGxvd3MgZm9yIHRoZSB0aW1lb3V0IHRvIGJlIHJlLXNldC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxheShjYWxsYmFjazogKGRhdGE6IHVua25vd24gfCB1bmRlZmluZWQpID0+IHZvaWQsIHRpbWVvdXQ6IG51bWJlcik6IChkYXRhOiB1bmtub3duIHwgdW5kZWZpbmVkKSA9PiB2b2lkIHtcclxuICAgIGxldCBoYW5kbGU6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIHJldHVybiAoZGF0YTogdW5rbm93biB8IHVuZGVmaW5lZCwgLi4uYXJnczogdW5rbm93bltdKSA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XHJcbiAgICAgICAgaGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjayhkYXRhKSwgdGltZW91dCwgYXJncyk7XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IENTU1Jlc3VsdEFycmF5LCBDU1NSZXN1bHRHcm91cCwgQ1NTUmVzdWx0T3JOYXRpdmUgfSBmcm9tICdsaXQnO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgYENTU1Jlc3VsdEdyb3VwYCB0byBhbiBhcnJheS5cclxuICogQHBhcmFtIHN0eWxlcyBUaGUgc3R5bGVzIHRvIGNvbnZlcnQuXHJcbiAqIEByZXR1cm5zIFRoZSBhcnJheSBvZiBgQ1NTUmVzdWx0T3JOYXRpdmVgIG9yIGBDU1NSZXN1bHRBcnJheWAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXNBcnJheShzdHlsZXM/OiBDU1NSZXN1bHRHcm91cCk6IChDU1NSZXN1bHRPck5hdGl2ZSB8IENTU1Jlc3VsdEFycmF5KVtdIHtcclxuICAgIGlmIChzdHlsZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZXMpKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5zdHlsZXNdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbc3R5bGVzXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhICd1bmlxdWUnIGlkZW50aWZpZXIuXHJcbiAqIEByZXR1cm5zIFRoZSB1bmlxdWUgaWRlbnRpZmllci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVVUlEKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBjaHI0ID0gKCkgPT4gTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoLTQpO1xyXG4gICAgcmV0dXJuIGNocjQoKSArIGNocjQoKSArICctJyArIGNocjQoKSArICctJyArIGNocjQoKSArICctJyArIGNocjQoKSArICctJyArIGNocjQoKSArIGNocjQoKSArIGNocjQoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldHMgdGhlIHZhbHVlIGF0IHRoZSBzcGVjaWZpZWQgYHBhdGhgIGZyb20gdGhlIGBzb3VyY2VgIG9iamVjdC5cclxuICogQHBhcmFtIHBhdGggVGhlIHBhdGggdG8gdGhlIHByb3BlcnR5IHRvIGdldC5cclxuICogQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCB0aGF0IGlzIGJlaW5nIHJlYWQgZnJvbS5cclxuICogQHJldHVybnMgVGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eS5cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXQocGF0aDogc3RyaW5nLCBzb3VyY2U6IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCBwcm9wczogc3RyaW5nW10gPSBBcnJheS5pc0FycmF5KHBhdGgpID8gcGF0aCA6IHBhdGguc3BsaXQoJy4nKTtcclxuICAgIHJldHVybiBwcm9wcy5yZWR1Y2UoKG9iaiwgcHJvcCkgPT4gb2JqICYmIG9ialtwcm9wXSwgc291cmNlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIHNwZWNpZmllZCBgdmFsdWVgIG9uIHRoZSBgdGFyZ2V0YCBvYmplY3QgYXQgdGhlIGRlc2lyZWQgcHJvcGVydHkgYHBhdGhgLlxyXG4gKiBAcGFyYW0gcGF0aCBUaGUgcGF0aCB0byB0aGUgcHJvcGVydHkgdG8gc2V0LlxyXG4gKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IHRoYXQgaXMgYmVpbmcgd3JpdHRlbiB0by5cclxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byB3cml0ZS5cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXQocGF0aDogc3RyaW5nLCB0YXJnZXQ6IGFueSwgdmFsdWU6IHVua25vd24pOiB2b2lkIHtcclxuICAgIGNvbnN0IHBhcnRzID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgcGFydHMucmVkdWNlKChvYmosIHByb3AsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gaSA9PT0gcGFydHMubGVuZ3RoIC0gMSA/IChvYmpbcHJvcF0gPSB2YWx1ZSkgOiBvYmpbcHJvcF0gfHwgKG9ialtwcm9wXSA9IHt9KTtcclxuICAgIH0sIHRhcmdldCk7XHJcbn1cclxuIiwiZXhwb3J0IHsgSW5wdXQgfSBmcm9tICcuL2lucHV0JztcclxuZXhwb3J0IHsgUGVyc2lzdGVkIH0gZnJvbSAnLi9wZXJzaXN0ZWQnO1xyXG4iLCJpbXBvcnQgeyBjc3MsIENTU1Jlc3VsdEdyb3VwLCBodG1sLCBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcblxyXG5pbXBvcnQgeyBhc0FycmF5LCBnZXRVVUlEIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XHJcbmltcG9ydCB7IGhvc3RTdHlsZSB9IGZyb20gJy4uL3N0eWxlcy9ob3N0JztcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhIG1peGluIHRoYXQgcmVwcmVzZW50cyB0aGUgdHlwaWNhbCBwcm9wZXJ0aWVzIGZvdW5kIG9uIGFuIGlucHV0LlxyXG4gKiBAcGFyYW0gc3VwZXJDbGFzcyBUaGUgc3VwZXIgY2xhc3MgdGhhdCB0aGlzIG1peGluIHdpbGwgZXh0ZW5kLlxyXG4gKiBAcmV0dXJucyBUaGUgbWl4aW4gYXMgYSBjbGFzcyB0aGF0IGV4dGVuZHMgYHN1cGVyQ2xhc3NgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IElucHV0ID0gPFRCYXNlIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudD4gJiB7IHN0eWxlcz86IENTU1Jlc3VsdEdyb3VwIH0sIFRWYWx1ZT4oc3VwZXJDbGFzczogVEJhc2UpID0+IHtcclxuICAgIGNsYXNzIElucHV0IGV4dGVuZHMgc3VwZXJDbGFzcyB7XHJcbiAgICAgICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgYXNBcnJheShzdXBlci5zdHlsZXMpLFxyXG4gICAgICAgICAgICAgICAgaG9zdFN0eWxlLFxyXG4gICAgICAgICAgICAgICAgY3NzYFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbixcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBCb3ggbW9kZWwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEJhY2tncm91bmQgYW5kIHR5cG9ncmFwaHkgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlucHV0LWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyBvciBzZXRzIHRoZSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGlucHV0IGlzIGRpc2FibGVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcclxuICAgICAgICBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyBvciBzZXRzIHRoZSBsYWJlbC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBAcHJvcGVydHkoKVxyXG4gICAgICAgIHB1YmxpYyBsYWJlbD86IHN0cmluZztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyBvciBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBmYWxzZSB9KVxyXG4gICAgICAgIHB1YmxpYyB2YWx1ZT86IFRWYWx1ZTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGlucHV0IGlkZW50aWZpZXIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGlucHV0SWQgPSBnZXRVVUlEKCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlbmRlcnMgdGhlIGlucHV0LCBhbmQgcmV0dXJucyB0aGUgSFRNTCB0ZW1wbGF0ZS5cclxuICAgICAgICAgKiBAcGFyYW0gaW5wdXQgVGhlIGlucHV0IHRvIHJlbmRlci5cclxuICAgICAgICAgKiBAcmV0dXJucyBUaGUgdGVtcGxhdGUgdGhhdCBjb250YWlucyB0aGUgaW5wdXQsIGFuZCBob3cgaXQgc2hvdWxkIGJlIHJlbmRlcmVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZW5kZXJJbnB1dChpbnB1dDogdW5rbm93bik6IHVua25vd24ge1xyXG4gICAgICAgICAgICByZXR1cm4gaHRtbGA8c2RwaS1pdGVtIC5sYWJlbD0ke3RoaXMubGFiZWx9PiR7aW5wdXR9PC9zZHBpLWl0ZW0+YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIElucHV0O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgYSBtaXhpbiB0aGF0IGNvbnRhaW5zIGluZm9ybWF0aW9uIHJlbGF0aW5nIHRvIHBlcnNpc3RpbmcgZGF0YSB3aXRoaW4gdGhlIFN0cmVhbSBEZWNrIHNldHRpbmdzLlxyXG4gKiBAcGFyYW0gc3VwZXJDbGFzcyBUaGUgc3VwZXIgY2xhc3MgdGhhdCB0aGlzIG1peGluIHdpbGwgZXh0ZW5kLlxyXG4gKiBAcmV0dXJucyBUaGUgbWl4aW4gYXMgYSBjbGFzcyB0aGF0IGV4dGVuZHMgYHN1cGVyQ2xhc3NgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBlcnNpc3RlZCA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcclxuICAgIGNsYXNzIFBlcnNpc3RlZCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHNldHRpbmcgd2lsbCBiZSBwZXJzaXN0ZWQgYWdhaW5zdCB0aGUgZ2xvYmFsIHNldHRpbmdzLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2dsb2JhbCcsXHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW5cclxuICAgICAgICB9KVxyXG4gICAgICAgIHB1YmxpYyBpc0dsb2JhbCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgcHJvcGVydHkga2V5IG9mIHdoaWNoIHRoZSB2YWx1ZSBpcyBwZXJzaXN0ZWQgYWdhaW5zdCBpbiB0aGUgc2V0dGluZ3MsIGUuZy4gJ25hbWUnIHdvdWxkIHJlc3VsdCBpbiB0aGUgc2V0dGluZ3MgYmVpbmcgeyAnbmFtZSc6IHZhbHVlLCAuLi4gfS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBAcHJvcGVydHkoKVxyXG4gICAgICAgIHB1YmxpYyBwYXRoPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQZXJzaXN0ZWQ7XHJcbn07XHJcbiIsImltcG9ydCBzdHJlYW1EZWNrQ2xpZW50IGZyb20gJy4vc3RyZWFtLWRlY2stY2xpZW50JztcclxuXHJcbi8qIFRoZSBTdHJlYW0gRGVjayBjbGllbnQgKi9cclxud2luZG93LnN0cmVhbURlY2tDbGllbnQgPSBzdHJlYW1EZWNrQ2xpZW50O1xyXG5cclxuY29uc3QgZXhpc3RpbmcgPSB3aW5kb3cuY29ubmVjdEVsZ2F0b1N0cmVhbURlY2tTb2NrZXQ7XHJcblxyXG4vKipcclxuICogQ2FsbGVkIGJ5IHRoZSBTdHJlYW0gRGVjayB0byBlbmFibGUgcmVnaXN0cmF0aW9uIG9mIHRoZSBwcm9wZXJ0eSBpbnNwZWN0b3IuXHJcbiAqIEBwYXJhbSBpblBvcnQgVGhlIHBvcnQgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgdGhlIFdlYlNvY2tldC5cclxuICogQHBhcmFtIGluUHJvcGVydHlJbnNwZWN0b3JVVUlEIEEgdW5pcXVlIGlkZW50aWZpZXIgc3RyaW5nIHRvIHJlZ2lzdGVyIFByb3BlcnR5IEluc3BlY3RvciB3aXRoIFN0cmVhbSBEZWNrIHNvZnR3YXJlLlxyXG4gKiBAcGFyYW0gaW5SZWdpc3RlckV2ZW50IFRoZSBldmVudCB0eXBlIHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gcmVnaXN0ZXIgdGhlIHBsdWdpbiBvbmNlIHRoZSBXZWJTb2NrZXQgaXMgb3BlbmVkLiBGb3IgUHJvcGVydHkgSW5zcGVjdG9yIHRoaXMgaXMgXCJyZWdpc3RlclByb3BlcnR5SW5zcGVjdG9yXCIuXHJcbiAqIEBwYXJhbSBpbkluZm8gQSBqc29uIG9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhcHBsaWNhdGlvbi5cclxuICogQHBhcmFtIGluQWN0aW9uSW5mbyBBIGpzb24gb2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFjdGlvbi5cclxuICovXHJcbndpbmRvdy5jb25uZWN0RWxnYXRvU3RyZWFtRGVja1NvY2tldCA9IGZ1bmN0aW9uIChpblBvcnQ6IHN0cmluZywgaW5Qcm9wZXJ0eUluc3BlY3RvclVVSUQ6IHN0cmluZywgaW5SZWdpc3RlckV2ZW50OiBzdHJpbmcsIGluSW5mbzogc3RyaW5nLCBpbkFjdGlvbkluZm86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgZXhpc3RpbmcoaW5Qb3J0LCBpblByb3BlcnR5SW5zcGVjdG9yVVVJRCwgaW5SZWdpc3RlckV2ZW50LCBpbkluZm8sIGluQWN0aW9uSW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RyZWFtRGVja0NsaWVudC5jb25uZWN0KGluUG9ydCwgaW5Qcm9wZXJ0eUluc3BlY3RvclVVSUQsIGluUmVnaXN0ZXJFdmVudCwgaW5JbmZvLCBpbkFjdGlvbkluZm8pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBEaWRSZWNlaXZlR2xvYmFsU2V0dGluZ3NFdmVudCwgRGlkUmVjZWl2ZVNldHRpbmdzRXZlbnQgfSBmcm9tICdzdHJlYW0tZGVjayc7XHJcblxyXG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJy4uL2NvcmUvdGltZW91dCc7XHJcbmltcG9ydCB7IGdldCwgc2V0IH0gZnJvbSAnLi4vY29yZS91dGlscyc7XHJcbmltcG9ydCBzdHJlYW1EZWNrQ2xpZW50IGZyb20gJy4vc3RyZWFtLWRlY2stY2xpZW50JztcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhIHN0b3JlIGZvciBtYW5hZ2luZyBzZXR0aW5ncyBzdG9yZWQgd2l0aGluIHRoZSBTdHJlYW0gRGVjay5cclxuICovXHJcbmNsYXNzIFNldHRpbmdzIHtcclxuICAgIHByaXZhdGUgX2dsb2JhbFNldHRpbmdzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XHJcbiAgICBwcml2YXRlIF9zZXR0aW5ncz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHNldHRpbmdzIHVzZWQgdG8gcGVyc2lzdCBkYXRhLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdHJlYW1EZWNrQ2xpZW50LmRpZFJlY2VpdmVHbG9iYWxTZXR0aW5ncy5zdWJzY3JpYmUoKGRhdGE6IERpZFJlY2VpdmVHbG9iYWxTZXR0aW5nc0V2ZW50KSA9PiAodGhpcy5fZ2xvYmFsU2V0dGluZ3MgPSBkYXRhLnBheWxvYWQuc2V0dGluZ3MpKTtcclxuICAgICAgICBzdHJlYW1EZWNrQ2xpZW50LmRpZFJlY2VpdmVTZXR0aW5ncy5zdWJzY3JpYmUoKGRhdGE6IERpZFJlY2VpdmVTZXR0aW5nc0V2ZW50KSA9PiAodGhpcy5fc2V0dGluZ3MgPSBkYXRhLnBheWxvYWQuc2V0dGluZ3MpKTtcclxuXHJcbiAgICAgICAgc3RyZWFtRGVja0NsaWVudC5nZXRHbG9iYWxTZXR0aW5ncygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXJzIHRoZSB0aGUgZ2l2ZW4ga2V5IGFzIGEgc2V0dGluZyB0byBiZSBwZXJzaXN0ZWQgaW4gdGhlIFN0cmVhbSBEZWNrOyB3aGVuIHRoZSBzZXR0aW5ncyBjaGFuZ2UsIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkLiBUaGlzIHJldHVybnMgYSBmdW5jdGlvbiBjYXBhYmxlIG9mIHBlcnNpc3RpbmcgdGhlIHZhbHVlIGFnYWluc3QgdGhlIGtleS5cclxuICAgICAqIEBwYXJhbSBrZXkgVGhlIHNldHRpbmdzIGtleS5cclxuICAgICAqIEBwYXJhbSBpc0dsb2JhbCBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNldHRpbmcgaXMgYSBnbG9iYWwgc2V0dGluZy5cclxuICAgICAqIEBwYXJhbSBvbkNoYW5nZSBUaGUgY2FsbGJhY2sgaW52b2tlZCB3aGVuIHRoZSBzZXR0aW5nIGNoYW5nZXMuXHJcbiAgICAgKiBAcmV0dXJucyBBIGRlbGVnYXRlIHRoYXQgYWxsb3dzIGZvciB1cGRhdGluZyB0aGUgc2V0dGluZyB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZ2lzdGVyPFQ+KGtleTogc3RyaW5nLCBpc0dsb2JhbDogYm9vbGVhbiwgb25DaGFuZ2U6ICh2YWx1ZTogVCkgPT4gdm9pZCwgdGltZW91dDogbnVtYmVyIHwgbnVsbCA9IDI1MCk6ICh2YWx1ZT86IHVua25vd24pID0+IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmdDaGFuZ2VIYW5kbGVyID0gKGRhdGE6IERpZFJlY2VpdmVHbG9iYWxTZXR0aW5nc0V2ZW50IHwgRGlkUmVjZWl2ZVNldHRpbmdzRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5wYXlsb2FkICYmIGRhdGEucGF5bG9hZC5zZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoZ2V0KGtleSwgZGF0YS5wYXlsb2FkLnNldHRpbmdzKSB8fCAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gY2hhbmdlcy5cclxuICAgICAgICBpZiAoaXNHbG9iYWwpIHtcclxuICAgICAgICAgICAgc3RyZWFtRGVja0NsaWVudC5kaWRSZWNlaXZlR2xvYmFsU2V0dGluZ3Muc3Vic2NyaWJlKHNldHRpbmdDaGFuZ2VIYW5kbGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdHJlYW1EZWNrQ2xpZW50LmRpZFJlY2VpdmVTZXR0aW5ncy5zdWJzY3JpYmUoc2V0dGluZ0NoYW5nZUhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBzZXR0ZXIgdGhhdCBhbGxvd3MgZm9yIHRoZSB2YWx1ZSB0byBiZSBzYXZlZCB0byB0aGUgc3RvcmUuXHJcbiAgICAgICAgaWYgKHRpbWVvdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlbGF5KCh2YWx1ZSkgPT4gc2V0dGluZ3Muc2V0KGtleSwgaXNHbG9iYWwsIHZhbHVlKSwgdGltZW91dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZT86IHVua25vd24pID0+IHNldHRpbmdzLnNldChrZXksIGlzR2xvYmFsLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmFsdWUsIGZvciB0aGUgc3BlY2lmaWVkIGtleSwgdG8gdGhlIHBlcnNpc3RlbnQgc2V0dGluZ3MuXHJcbiAgICAgKiBAcGFyYW0ga2V5IFRoZSBzZXR0aW5ncyBrZXkuXHJcbiAgICAgKiBAcGFyYW0gaXNHbG9iYWwgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzZXR0aW5nIGlzIGEgZ2xvYmFsIHNldHRpbmcuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHNldHRpbmdzIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNldChrZXk6IHN0cmluZywgaXNHbG9iYWw6IGJvb2xlYW4sIHZhbHVlPzogdW5rbm93bik6IHZvaWQge1xyXG4gICAgICAgIGlmIChpc0dsb2JhbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZ2xvYmFsU2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgIHNldChrZXksIHRoaXMuX2dsb2JhbFNldHRpbmdzLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RyZWFtRGVja0NsaWVudC5zZXRHbG9iYWxTZXR0aW5ncyh0aGlzLl9nbG9iYWxTZXR0aW5ncyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBzZXQoa2V5LCB0aGlzLl9zZXR0aW5ncywgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0cmVhbURlY2tDbGllbnQuc2V0U2V0dGluZ3ModGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3MoKTtcclxuZXhwb3J0IGNvbnN0IHVzZVNldHRpbmdzID0gc2V0dGluZ3MucmVnaXN0ZXI7XHJcbiIsImltcG9ydCB7IEFjdGlvbkluZm8sIEFzRXZlbnQsIERpZFJlY2VpdmVHbG9iYWxTZXR0aW5nc0V2ZW50LCBEaWRSZWNlaXZlU2V0dGluZ3NFdmVudCwgRXZlbnRSZWNlaXZlZCwgRXZlbnRTZW50LCBSZWdpc3RyYXRpb25JbmZvIH0gZnJvbSAnc3RyZWFtLWRlY2snO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi4vY29yZS9ldmVudHMnO1xyXG5pbXBvcnQgeyBQcm9taXNlQ29tcGxldGlvblNvdXJjZSB9IGZyb20gJy4uL2NvcmUvcHJvbWlzZXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29ubmVjdGlvbkluZm8ge1xyXG4gICAgYWN0aW9uSW5mbzogQWN0aW9uSW5mbztcclxuICAgIGluZm86IFJlZ2lzdHJhdGlvbkluZm87XHJcbiAgICBwcm9wZXJ0eUluc3BlY3RvclVVSUQ6IHN0cmluZztcclxuICAgIHJlZ2lzdGVyRXZlbnQ6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGEgU3RyZWFtIERlY2sgY2xpZW50IHdyYXBwZXIgZm9yIHRoZSBjb25uZWN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0cmVhbURlY2tDbGllbnQge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY29ubmVjdGlvbiA9IG5ldyBQcm9taXNlQ29tcGxldGlvblNvdXJjZTxXZWJTb2NrZXQ+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jb25uZWN0aW9uSW5mbyA9IG5ldyBQcm9taXNlQ29tcGxldGlvblNvdXJjZTxJQ29ubmVjdGlvbkluZm8+KCk7XHJcbiAgICBwcml2YXRlIF93ZWJTb2NrZXQ/OiBXZWJTb2NrZXQ7XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IGRpZFJlY2VpdmVHbG9iYWxTZXR0aW5ncyA9IG5ldyBFdmVudE1hbmFnZXI8RGlkUmVjZWl2ZUdsb2JhbFNldHRpbmdzRXZlbnQ+KCk7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZGlkUmVjZWl2ZVNldHRpbmdzID0gbmV3IEV2ZW50TWFuYWdlcjxEaWRSZWNlaXZlU2V0dGluZ3NFdmVudD4oKTtcclxuICAgIHB1YmxpYyByZWFkb25seSBtZXNzYWdlID0gbmV3IEV2ZW50TWFuYWdlcjxFdmVudFJlY2VpdmVkPigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29ubmVjdHMgdG8gdGhlIFN0cmVhbSBEZWNrLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgVGhlIHBvcnQgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgdGhlIFdlYlNvY2tldC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eUluc3BlY3RvclVVSUQgQSB1bmlxdWUgaWRlbnRpZmllciBzdHJpbmcgdG8gcmVnaXN0ZXIgUHJvcGVydHkgSW5zcGVjdG9yIHdpdGggU3RyZWFtIERlY2sgc29mdHdhcmUuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVnaXN0ZXJFdmVudCBUaGUgZXZlbnQgdHlwZSB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHJlZ2lzdGVyIHRoZSBwbHVnaW4gb25jZSB0aGUgV2ViU29ja2V0IGlzIG9wZW5lZC4gRm9yIFByb3BlcnR5IEluc3BlY3RvciB0aGlzIGlzIFwicmVnaXN0ZXJQcm9wZXJ0eUluc3BlY3RvclwiLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGluZm8gQSBKU09OIG9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhcHBsaWNhdGlvbi5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25JbmZvIEEgSlNPTiBvYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgY29ubmVjdChwb3J0OiBzdHJpbmcsIHByb3BlcnR5SW5zcGVjdG9yVVVJRDogc3RyaW5nLCByZWdpc3RlckV2ZW50OiBzdHJpbmcsIGluZm86IHN0cmluZywgYWN0aW9uSW5mbz86IHN0cmluZyB8IHVuZGVmaW5lZCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICghdGhpcy5fd2ViU29ja2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3Rpb25JbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uSW5mbzogYWN0aW9uSW5mbyA/IEpTT04ucGFyc2UoYWN0aW9uSW5mbykgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgaW5mbzogSlNPTi5wYXJzZShpbmZvKSxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5SW5zcGVjdG9yVVVJRDogcHJvcGVydHlJbnNwZWN0b3JVVUlELFxyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJFdmVudDogcmVnaXN0ZXJFdmVudFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb25JbmZvLmFjdGlvbkluZm8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlkUmVjZWl2ZVNldHRpbmdzLmRpc3BhdGNoKGNvbm5lY3Rpb25JbmZvLmFjdGlvbkluZm8pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uSW5mby5zZXRSZXN1bHQoY29ubmVjdGlvbkluZm8pO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVnaXN0ZXIgdGhlIHdlYiBzb2NrZXQuXHJcbiAgICAgICAgICAgIHRoaXMuX3dlYlNvY2tldCA9IG5ldyBXZWJTb2NrZXQoYHdzOi8vbG9jYWxob3N0OiR7cG9ydH1gKTtcclxuICAgICAgICAgICAgdGhpcy5fd2ViU29ja2V0Lm9ub3BlbiA9IHRoaXMuaGFuZGxlT3Blbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl93ZWJTb2NrZXQub25tZXNzYWdlID0gdGhpcy5oYW5kbGVNZXNzYWdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVxdWVzdCB0aGUgZ2xvYmFsIHBlcnNpc3RlbnQgZGF0YS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBnbG9iYWwgc2V0dGluZ3MgYXMgYSBwcm9taXNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0R2xvYmFsU2V0dGluZ3MoKTogUHJvbWlzZTxEaWRSZWNlaXZlR2xvYmFsU2V0dGluZ3NFdmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnZ2V0R2xvYmFsU2V0dGluZ3MnLCAoZXYpID0+IGV2LmV2ZW50ID09PSAnZGlkUmVjZWl2ZUdsb2JhbFNldHRpbmdzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlIGRhdGEgc2VjdXJlbHkgYW5kIGdsb2JhbGx5IGZvciB0aGUgcGx1Z2luLlxyXG4gICAgICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLmVsZ2F0by5jb20vZG9jdW1lbnRhdGlvbi9zdHJlYW0tZGVjay9zZGsvZXZlbnRzLXNlbnQvI3NldGdsb2JhbHNldHRpbmdzfVxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBnbG9iYWwgc2V0dGluZ3MuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRHbG9iYWxTZXR0aW5ncyh2YWx1ZT86IHVua25vd24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbmQoJ3NldEdsb2JhbFNldHRpbmdzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgc2V0dGluZ3MuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc2V0dGluZ3MgYXMgYSBwcm9taXNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U2V0dGluZ3MoKTogUHJvbWlzZTxEaWRSZWNlaXZlU2V0dGluZ3NFdmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnZ2V0U2V0dGluZ3MnLCAoZXYpID0+IGV2LmV2ZW50ID09PSAnZGlkUmVjZWl2ZVNldHRpbmdzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlIGRhdGEgcGVyc2lzdGVudGx5IGZvciB0aGUgYWN0aW9uJ3MgaW5zdGFuY2UuXHJcbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIuZWxnYXRvLmNvbS9kb2N1bWVudGF0aW9uL3N0cmVhbS1kZWNrL3Nkay9ldmVudHMtc2VudC8jc2V0c2V0dGluZ3N9XHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHNldHRpbmdzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0U2V0dGluZ3ModmFsdWU/OiB1bmtub3duKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZW5kKCdzZXRTZXR0aW5ncycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGNvbm5lY3Rpb24gaW5mb3JtYXRpb24gdXNlZCB0byBjb25uZWN0IHRvIHRoZSBTdHJlYW0gRGVjay5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb25uZWN0aW9uIGluZm9ybWF0aW9uIGFzIGEgcHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldENvbm5lY3Rpb25JbmZvKCk6IFByb21pc2U8SUNvbm5lY3Rpb25JbmZvPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25JbmZvLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kcyB0aGUgZ2l2ZW4gYHNlbmRgIGV2ZW50IGFsb25nIHdpdGggdGhlIGBwYXlsb2FkYCB0byB0aGUgU3RyZWFtIERlY2ssIGFuZCBjb250aW51YWxseSBhd2FpdHMgYSByZXNwb25zZSBtZXNzYWdlIHRoYXQgbWF0Y2hlcyB0aGUgYGlzQ29tcGxldGVgIGRlbGVnYXRlLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbmQgVGhlIGV2ZW50IHRvIHNlbmQuXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBpc0NvbXBsZXRlIFRoZSBkZWxlZ2F0ZSBpbnZva2VzIHVwb24gcmVjZWl2aW5nIGEgbWVzc2FnZSBmcm9tIHRoZSBTdHJlYW0gRGVjazsgd2hlbiBgdHJ1ZWAsIHRoaXMgcHJvbWlzZSBpcyBmdWxmaWxsZWQuXHJcbiAgICAgKiBAcGFyYW0ge3Vua25vd259IHBheWxvYWQgVGhlIG9wdGlvbmFsIHBheWxvYWQuXHJcbiAgICAgKiBAcmV0dXJucyB7QXNFdmVudDxUUmVjZWl2ZWQ+fSBUaGUgZmlyc3QgZXZlbnQgcmVjZWl2ZWQgdGhhdCBmdWxmaWxsZWQgdGhlIGBpc0NvbXBsZXRlYCBkZWxlZ2F0ZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBnZXQ8VFNlbnQgZXh0ZW5kcyBFdmVudFNlbnRbJ2V2ZW50J10sIFRSZWNlaXZlZCBleHRlbmRzIEV2ZW50UmVjZWl2ZWRbJ2V2ZW50J10+KFxyXG4gICAgICAgIHNlbmQ6IFRTZW50LFxyXG4gICAgICAgIGlzQ29tcGxldGU6IChldjogRXZlbnRSZWNlaXZlZCkgPT4gYm9vbGVhbixcclxuICAgICAgICBwYXlsb2FkPzogdW5rbm93blxyXG4gICAgKTogUHJvbWlzZTxBc0V2ZW50PFRSZWNlaXZlZD4+IHtcclxuICAgICAgICBjb25zdCByZXNvbHZlciA9IG5ldyBQcm9taXNlQ29tcGxldGlvblNvdXJjZTxBc0V2ZW50PFRSZWNlaXZlZD4+KCk7XHJcblxyXG4gICAgICAgIC8vIENvbnN0cnVjdCB0aGUgdGVtcG9yYXJ5IGxpc3RlbmVyIHRoYXQgaXMgcmVtb3ZlZCB3aGVuIHRoZSBjYWxsYmFjayBjYW4gYmUgZnVsaWxsZWQuXHJcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSAoYXJnczogRXZlbnRSZWNlaXZlZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNDb21wbGV0ZShhcmdzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLnVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmVyLnNldFJlc3VsdCg8QXNFdmVudDxUUmVjZWl2ZWQ+PmFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQXdhaXQgbWVzc2FnZSwgYW5kIHNlbmQgdGhlIHJlcXVlc3QuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLnN1YnNjcmliZShsaXN0ZW5lcik7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZW5kKHNlbmQsIHBheWxvYWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzb2x2ZXIucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbmRzIGEgcmVxdWVzdCB0byB0aGUgU3RyZWFtIERlY2suXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXHJcbiAgICAgKiBAcGFyYW0ge3Vua25vd259IHBheWxvYWQgVGhlIG9wdGlvbmFsIHBheWxvYWQuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgc2VuZDxUIGV4dGVuZHMgRXZlbnRTZW50WydldmVudCddPihldmVudDogVCwgcGF5bG9hZD86IHVua25vd24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25uZWN0aW9uSW5mbyA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb25JbmZvLnByb21pc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnNlbmQoXHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbm5lY3Rpb25JbmZvLnByb3BlcnR5SW5zcGVjdG9yVVVJRCxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogY29ubmVjdGlvbkluZm8uYWN0aW9uSW5mby5hY3Rpb25cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFVuYWJsZSB0byBzZW5kIHJlcXVlc3QgJyR7ZXZlbnR9JyBhcyB0aGVyZSBpcyBubyBjb25uZWN0aW9uLmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGhlIHVuZGVybHlpbmcgd2ViIHNvY2tldCBjb25uZWN0aW9uIGJlaW5nIGVzdGFibGlzaGVkIHdpdGggdGhlIFN0cmVhbSBEZWNrLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZU9wZW4oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgY29ubmVjdGlvbkluZm8gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uSW5mby5wcm9taXNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fd2ViU29ja2V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWJTb2NrZXQuc2VuZChcclxuICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBjb25uZWN0aW9uSW5mby5yZWdpc3RlckV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dWlkOiBjb25uZWN0aW9uSW5mby5wcm9wZXJ0eUluc3BlY3RvclVVSURcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uLnNldFJlc3VsdCh0aGlzLl93ZWJTb2NrZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGlvbi5zZXRFeGNlcHRpb24oZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgcmVjZWl2aW5nIGEgbWVzc2FnZSBmcm9tIHRoZSBTdHJlYW0gRGVjay5cclxuICAgICAqIEBwYXJhbSBldiBUaGUgbWVzc2FnZSBldmVudCB0aGF0IGNvbnRhaW5zIHRoZSBkYXRhIHJlY2VpdmVkLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZU1lc3NhZ2UoZXY6IE1lc3NhZ2VFdmVudDxzdHJpbmc+KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZGF0YTogRXZlbnRSZWNlaXZlZCA9IEpTT04ucGFyc2UoZXYuZGF0YSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZGF0YS5ldmVudCkge1xyXG4gICAgICAgICAgICBjYXNlICdkaWRSZWNlaXZlR2xvYmFsU2V0dGluZ3MnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWRSZWNlaXZlR2xvYmFsU2V0dGluZ3MuZGlzcGF0Y2goPERpZFJlY2VpdmVHbG9iYWxTZXR0aW5nc0V2ZW50PmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdkaWRSZWNlaXZlU2V0dGluZ3MnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWRSZWNlaXZlU2V0dGluZ3MuZGlzcGF0Y2goPERpZFJlY2VpdmVTZXR0aW5nc0V2ZW50PmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHJlYW1EZWNrQ2xpZW50ID0gbmV3IFN0cmVhbURlY2tDbGllbnQoKTtcclxuZXhwb3J0IGRlZmF1bHQgc3RyZWFtRGVja0NsaWVudDtcclxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhIGNvbW1vbiBzZXQgb2YgQ1NTIHN0eWxlcyB0aGF0IGFyZSBhcHBsaWVkIHRvIHRoZSBkb2N1bWVudC5cclxuICovXHJcbmNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuc3R5bGUuaW5uZXJIVE1MID0gY3NzYFxyXG4gICAgLyogU3R5bGVzIGFkZGVkIGJ5IHNkcGkgbGlicmFyeS4gKi9cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICB9XHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgfVxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjY2NjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTtcclxuICAgIH1cclxuYC5jc3NUZXh0O1xyXG5cclxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7XHJcblxyXG5leHBvcnQgY29uc3QgaG9zdFN0eWxlID0gY3NzYFxyXG4gICAgOmhvc3Qge1xyXG4gICAgICAgIC8qIEJveCBtb2RlbCAqL1xyXG4gICAgICAgIC0tc3BhY2VyOiA0cHg7XHJcblxyXG4gICAgICAgIC8qIENvbG9ycyAqL1xyXG4gICAgICAgIC0td2luZG93LWJnLWNvbG9yOiAjMmQyZDJkO1xyXG4gICAgICAgIC0tZm9udC1jb2xvcjogIzlhOWE5YTtcclxuICAgICAgICAtLWlucHV0LWJnLWNvbG9yOiAjM2QzZDNkO1xyXG4gICAgICAgIC0taW5wdXQtZm9udC1jb2xvcjogI2Q4ZDhkODtcclxuXHJcbiAgICAgICAgLS1zY3JvbGxiYXItYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblxyXG4gICAgICAgIC8qIFR5cG9ncmFwaHkgKi9cclxuICAgICAgICAtLWZvbnQtZmFtaWx5OiBBcmlhbCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBIZWx2ZXRpY2Egc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCc7XHJcbiAgICAgICAgLS1mb250LXNpemU6IDhwdDtcclxuICAgIH1cclxuYDtcclxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG4vKipcbiAqIFdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBgYWRvcHRlZFN0eWxlU2hlZXRzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyA9IHdpbmRvdy5TaGFkb3dSb290ICYmXG4gICAgKHdpbmRvdy5TaGFkeUNTUyA9PT0gdW5kZWZpbmVkIHx8IHdpbmRvdy5TaGFkeUNTUy5uYXRpdmVTaGFkb3cpICYmXG4gICAgJ2Fkb3B0ZWRTdHlsZVNoZWV0cycgaW4gRG9jdW1lbnQucHJvdG90eXBlICYmXG4gICAgJ3JlcGxhY2UnIGluIENTU1N0eWxlU2hlZXQucHJvdG90eXBlO1xuY29uc3QgY29uc3RydWN0aW9uVG9rZW4gPSBTeW1ib2woKTtcbmNvbnN0IHN0eWxlU2hlZXRDYWNoZSA9IG5ldyBNYXAoKTtcbi8qKlxuICogQSBjb250YWluZXIgZm9yIGEgc3RyaW5nIG9mIENTUyB0ZXh0LCB0aGF0IG1heSBiZSB1c2VkIHRvIGNyZWF0ZSBhIENTU1N0eWxlU2hlZXQuXG4gKlxuICogQ1NTUmVzdWx0IGlzIHRoZSByZXR1cm4gdmFsdWUgb2YgYGNzc2AtdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxzIGFuZFxuICogYHVuc2FmZUNTUygpYC4gSW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgQ1NTUmVzdWx0cyBhcmUgb25seSBjcmVhdGVkIHZpYSB0aGVcbiAqIGBjc3NgIHRhZyBhbmQgYHVuc2FmZUNTUygpYCwgQ1NTUmVzdWx0IGNhbm5vdCBiZSBjb25zdHJ1Y3RlZCBkaXJlY3RseS5cbiAqL1xuZXhwb3J0IGNsYXNzIENTU1Jlc3VsdCB7XG4gICAgY29uc3RydWN0b3IoY3NzVGV4dCwgc2FmZVRva2VuKSB7XG4gICAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgIHRoaXNbJ18kY3NzUmVzdWx0JCddID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNhZmVUb2tlbiAhPT0gY29uc3RydWN0aW9uVG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ1NTUmVzdWx0IGlzIG5vdCBjb25zdHJ1Y3RhYmxlLiBVc2UgYHVuc2FmZUNTU2Agb3IgYGNzc2AgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNzc1RleHQgPSBjc3NUZXh0O1xuICAgIH1cbiAgICAvLyBOb3RlLCB0aGlzIGlzIGEgZ2V0dGVyIHNvIHRoYXQgaXQncyBsYXp5LiBJbiBwcmFjdGljZSwgdGhpcyBtZWFuc1xuICAgIC8vIHN0eWxlc2hlZXRzIGFyZSBub3QgY3JlYXRlZCB1bnRpbCB0aGUgZmlyc3QgZWxlbWVudCBpbnN0YW5jZSBpcyBtYWRlLlxuICAgIGdldCBzdHlsZVNoZWV0KCkge1xuICAgICAgICAvLyBOb3RlLCBpZiBgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzYCBpcyB0cnVlIHRoZW4gd2UgYXNzdW1lXG4gICAgICAgIC8vIENTU1N0eWxlU2hlZXQgaXMgY29uc3RydWN0YWJsZS5cbiAgICAgICAgbGV0IHN0eWxlU2hlZXQgPSBzdHlsZVNoZWV0Q2FjaGUuZ2V0KHRoaXMuY3NzVGV4dCk7XG4gICAgICAgIGlmIChzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgJiYgc3R5bGVTaGVldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdHlsZVNoZWV0Q2FjaGUuc2V0KHRoaXMuY3NzVGV4dCwgKHN0eWxlU2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpKSk7XG4gICAgICAgICAgICBzdHlsZVNoZWV0LnJlcGxhY2VTeW5jKHRoaXMuY3NzVGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlU2hlZXQ7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jc3NUZXh0O1xuICAgIH1cbn1cbmNvbnN0IHRleHRGcm9tQ1NTUmVzdWx0ID0gKHZhbHVlKSA9PiB7XG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICBpZiAodmFsdWVbJ18kY3NzUmVzdWx0JCddID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jc3NUZXh0O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFsdWUgcGFzc2VkIHRvICdjc3MnIGZ1bmN0aW9uIG11c3QgYmUgYSAnY3NzJyBmdW5jdGlvbiByZXN1bHQ6IGAgK1xuICAgICAgICAgICAgYCR7dmFsdWV9LiBVc2UgJ3Vuc2FmZUNTUycgdG8gcGFzcyBub24tbGl0ZXJhbCB2YWx1ZXMsIGJ1dCB0YWtlIGNhcmUgYCArXG4gICAgICAgICAgICBgdG8gZW5zdXJlIHBhZ2Ugc2VjdXJpdHkuYCk7XG4gICAgfVxufTtcbi8qKlxuICogV3JhcCBhIHZhbHVlIGZvciBpbnRlcnBvbGF0aW9uIGluIGEge0BsaW5rY29kZSBjc3N9IHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsLlxuICpcbiAqIFRoaXMgaXMgdW5zYWZlIGJlY2F1c2UgdW50cnVzdGVkIENTUyB0ZXh0IGNhbiBiZSB1c2VkIHRvIHBob25lIGhvbWVcbiAqIG9yIGV4ZmlsdHJhdGUgZGF0YSB0byBhbiBhdHRhY2tlciBjb250cm9sbGVkIHNpdGUuIFRha2UgY2FyZSB0byBvbmx5IHVzZVxuICogdGhpcyB3aXRoIHRydXN0ZWQgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCB1bnNhZmVDU1MgPSAodmFsdWUpID0+IG5ldyBDU1NSZXN1bHQodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogU3RyaW5nKHZhbHVlKSwgY29uc3RydWN0aW9uVG9rZW4pO1xuLyoqXG4gKiBBIHRlbXBsYXRlIGxpdGVyYWwgdGFnIHdoaWNoIGNhbiBiZSB1c2VkIHdpdGggTGl0RWxlbWVudCdzXG4gKiB7QGxpbmtjb2RlIExpdEVsZW1lbnQuc3R5bGVzfSBwcm9wZXJ0eSB0byBzZXQgZWxlbWVudCBzdHlsZXMuXG4gKlxuICogRm9yIHNlY3VyaXR5IHJlYXNvbnMsIG9ubHkgbGl0ZXJhbCBzdHJpbmcgdmFsdWVzIGFuZCBudW1iZXIgbWF5IGJlIHVzZWQgaW5cbiAqIGVtYmVkZGVkIGV4cHJlc3Npb25zLiBUbyBpbmNvcnBvcmF0ZSBub24tbGl0ZXJhbCB2YWx1ZXMge0BsaW5rY29kZSB1bnNhZmVDU1N9XG4gKiBtYXkgYmUgdXNlZCBpbnNpZGUgYW4gZXhwcmVzc2lvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IGNzcyA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IHtcbiAgICBjb25zdCBjc3NUZXh0ID0gc3RyaW5ncy5sZW5ndGggPT09IDFcbiAgICAgICAgPyBzdHJpbmdzWzBdXG4gICAgICAgIDogdmFsdWVzLnJlZHVjZSgoYWNjLCB2LCBpZHgpID0+IGFjYyArIHRleHRGcm9tQ1NTUmVzdWx0KHYpICsgc3RyaW5nc1tpZHggKyAxXSwgc3RyaW5nc1swXSk7XG4gICAgcmV0dXJuIG5ldyBDU1NSZXN1bHQoY3NzVGV4dCwgY29uc3RydWN0aW9uVG9rZW4pO1xufTtcbi8qKlxuICogQXBwbGllcyB0aGUgZ2l2ZW4gc3R5bGVzIHRvIGEgYHNoYWRvd1Jvb3RgLiBXaGVuIFNoYWRvdyBET00gaXNcbiAqIGF2YWlsYWJsZSBidXQgYGFkb3B0ZWRTdHlsZVNoZWV0c2AgaXMgbm90LCBzdHlsZXMgYXJlIGFwcGVuZGVkIHRvIHRoZVxuICogYHNoYWRvd1Jvb3RgIHRvIFttaW1pYyBzcGVjIGJlaGF2aW9yXShodHRwczovL3dpY2cuZ2l0aHViLmlvL2NvbnN0cnVjdC1zdHlsZXNoZWV0cy8jdXNpbmctY29uc3RydWN0ZWQtc3R5bGVzaGVldHMpLlxuICogTm90ZSwgd2hlbiBzaGltbWluZyBpcyB1c2VkLCBhbnkgc3R5bGVzIHRoYXQgYXJlIHN1YnNlcXVlbnRseSBwbGFjZWQgaW50b1xuICogdGhlIHNoYWRvd1Jvb3Qgc2hvdWxkIGJlIHBsYWNlZCAqYmVmb3JlKiBhbnkgc2hpbW1lZCBhZG9wdGVkIHN0eWxlcy4gVGhpc1xuICogd2lsbCBtYXRjaCBzcGVjIGJlaGF2aW9yIHRoYXQgZ2l2ZXMgYWRvcHRlZCBzaGVldHMgcHJlY2VkZW5jZSBvdmVyIHN0eWxlcyBpblxuICogc2hhZG93Um9vdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFkb3B0U3R5bGVzID0gKHJlbmRlclJvb3QsIHN0eWxlcykgPT4ge1xuICAgIGlmIChzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMpIHtcbiAgICAgICAgcmVuZGVyUm9vdC5hZG9wdGVkU3R5bGVTaGVldHMgPSBzdHlsZXMubWFwKChzKSA9PiBzIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldCA/IHMgOiBzLnN0eWxlU2hlZXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3R5bGVzLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICBjb25zdCBub25jZSA9IHdpbmRvd1snbGl0Tm9uY2UnXTtcbiAgICAgICAgICAgIGlmIChub25jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gcy5jc3NUZXh0O1xuICAgICAgICAgICAgcmVuZGVyUm9vdC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5jb25zdCBjc3NSZXN1bHRGcm9tU3R5bGVTaGVldCA9IChzaGVldCkgPT4ge1xuICAgIGxldCBjc3NUZXh0ID0gJyc7XG4gICAgZm9yIChjb25zdCBydWxlIG9mIHNoZWV0LmNzc1J1bGVzKSB7XG4gICAgICAgIGNzc1RleHQgKz0gcnVsZS5jc3NUZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdW5zYWZlQ1NTKGNzc1RleHQpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRDb21wYXRpYmxlU3R5bGUgPSBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHNcbiAgICA/IChzKSA9PiBzXG4gICAgOiAocykgPT4gcyBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQgPyBjc3NSZXN1bHRGcm9tU3R5bGVTaGVldChzKSA6IHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jc3MtdGFnLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuZXhwb3J0IGNvbnN0IGxlZ2FjeVByb3RvdHlwZU1ldGhvZCA9IChkZXNjcmlwdG9yLCBwcm90bywgbmFtZSkgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgbmFtZSwgZGVzY3JpcHRvcik7XG59O1xuZXhwb3J0IGNvbnN0IHN0YW5kYXJkUHJvdG90eXBlTWV0aG9kID0gKGRlc2NyaXB0b3IsIGVsZW1lbnQpID0+ICh7XG4gICAga2luZDogJ21ldGhvZCcsXG4gICAgcGxhY2VtZW50OiAncHJvdG90eXBlJyxcbiAgICBrZXk6IGVsZW1lbnQua2V5LFxuICAgIGRlc2NyaXB0b3IsXG59KTtcbi8qKlxuICogSGVscGVyIGZvciBkZWNvcmF0aW5nIGEgcHJvcGVydHkgdGhhdCBpcyBjb21wYXRpYmxlIHdpdGggYm90aCBUeXBlU2NyaXB0XG4gKiBhbmQgQmFiZWwgZGVjb3JhdG9ycy4gVGhlIG9wdGlvbmFsIGBmaW5pc2hlcmAgY2FuIGJlIHVzZWQgdG8gcGVyZm9ybSB3b3JrIG9uXG4gKiB0aGUgY2xhc3MuIFRoZSBvcHRpb25hbCBgZGVzY3JpcHRvcmAgc2hvdWxkIHJldHVybiBhIFByb3BlcnR5RGVzY3JpcHRvclxuICogdG8gaW5zdGFsbCBmb3IgdGhlIGdpdmVuIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSBmaW5pc2hlciB7ZnVuY3Rpb259IE9wdGlvbmFsIGZpbmlzaGVyIG1ldGhvZDsgcmVjZWl2ZXMgdGhlIGVsZW1lbnRcbiAqIGNvbnN0cnVjdG9yIGFuZCBwcm9wZXJ0eSBrZXkgYXMgYXJndW1lbnRzIGFuZCBoYXMgbm8gcmV0dXJuIHZhbHVlLlxuICogQHBhcmFtIGRlc2NyaXB0b3Ige2Z1bmN0aW9ufSBPcHRpb25hbCBkZXNjcmlwdG9yIG1ldGhvZDsgcmVjZWl2ZXMgdGhlXG4gKiBwcm9wZXJ0eSBrZXkgYXMgYW4gYXJndW1lbnQgYW5kIHJldHVybnMgYSBwcm9wZXJ0eSBkZXNjcmlwdG9yIHRvIGRlZmluZSBmb3JcbiAqIHRoZSBnaXZlbiBwcm9wZXJ0eS5cbiAqIEByZXR1cm5zIHtDbGFzc0VsZW1lbnR8dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGRlY29yYXRlUHJvcGVydHkgPSAoeyBmaW5pc2hlciwgZGVzY3JpcHRvciwgfSkgPT4gKHByb3RvT3JEZXNjcmlwdG9yLCBuYW1lXG4vLyBOb3RlIFR5cGVTY3JpcHQgcmVxdWlyZXMgdGhlIHJldHVybiB0eXBlIHRvIGJlIGB2b2lkfGFueWBcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4pID0+IHtcbiAgICB2YXIgX2E7XG4gICAgLy8gVHlwZVNjcmlwdCAvIEJhYmVsIGxlZ2FjeSBtb2RlXG4gICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBjdG9yID0gcHJvdG9PckRlc2NyaXB0b3JcbiAgICAgICAgICAgIC5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKGRlc2NyaXB0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvT3JEZXNjcmlwdG9yLCBuYW1lLCBkZXNjcmlwdG9yKG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5pc2hlciA9PT0gbnVsbCB8fCBmaW5pc2hlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZmluaXNoZXIoY3RvciwgbmFtZSk7XG4gICAgICAgIC8vIEJhYmVsIHN0YW5kYXJkIG1vZGVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIE5vdGUsIHRoZSBAcHJvcGVydHkgZGVjb3JhdG9yIHNhdmVzIGBrZXlgIGFzIGBvcmlnaW5hbEtleWBcbiAgICAgICAgLy8gc28gdHJ5IHRvIHVzZSBpdCBoZXJlLlxuICAgICAgICBjb25zdCBrZXkgPSBcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgKF9hID0gcHJvdG9PckRlc2NyaXB0b3Iub3JpZ2luYWxLZXkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHByb3RvT3JEZXNjcmlwdG9yLmtleTtcbiAgICAgICAgY29uc3QgaW5mbyA9IGRlc2NyaXB0b3IgIT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBraW5kOiAnbWV0aG9kJyxcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICdwcm90b3R5cGUnLFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yOiBkZXNjcmlwdG9yKHByb3RvT3JEZXNjcmlwdG9yLmtleSksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHsgLi4ucHJvdG9PckRlc2NyaXB0b3IsIGtleSB9O1xuICAgICAgICBpZiAoZmluaXNoZXIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpbmZvLmZpbmlzaGVyID0gZnVuY3Rpb24gKGN0b3IpIHtcbiAgICAgICAgICAgICAgICBmaW5pc2hlcihjdG9yLCBrZXkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5mbztcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmNvbnN0IGxlZ2FjeUN1c3RvbUVsZW1lbnQgPSAodGFnTmFtZSwgY2xhenopID0+IHtcbiAgICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXp6KTtcbiAgICAvLyBDYXN0IGFzIGFueSBiZWNhdXNlIFRTIGRvZXNuJ3QgcmVjb2duaXplIHRoZSByZXR1cm4gdHlwZSBhcyBiZWluZyBhXG4gICAgLy8gc3VidHlwZSBvZiB0aGUgZGVjb3JhdGVkIGNsYXNzIHdoZW4gY2xhenogaXMgdHlwZWQgYXNcbiAgICAvLyBgQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+YCBmb3Igc29tZSByZWFzb24uXG4gICAgLy8gYENvbnN0cnVjdG9yPEhUTUxFbGVtZW50PmAgaXMgaGVscGZ1bCB0byBtYWtlIHN1cmUgdGhlIGRlY29yYXRvciBpc1xuICAgIC8vIGFwcGxpZWQgdG8gZWxlbWVudHMgaG93ZXZlci5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIHJldHVybiBjbGF6ejtcbn07XG5jb25zdCBzdGFuZGFyZEN1c3RvbUVsZW1lbnQgPSAodGFnTmFtZSwgZGVzY3JpcHRvcikgPT4ge1xuICAgIGNvbnN0IHsga2luZCwgZWxlbWVudHMgfSA9IGRlc2NyaXB0b3I7XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2luZCxcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIC8vIFRoaXMgY2FsbGJhY2sgaXMgY2FsbGVkIG9uY2UgdGhlIGNsYXNzIGlzIG90aGVyd2lzZSBmdWxseSBkZWZpbmVkXG4gICAgICAgIGZpbmlzaGVyKGNsYXp6KSB7XG4gICAgICAgICAgICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXp6KTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbi8qKlxuICogQ2xhc3MgZGVjb3JhdG9yIGZhY3RvcnkgdGhhdCBkZWZpbmVzIHRoZSBkZWNvcmF0ZWQgY2xhc3MgYXMgYSBjdXN0b20gZWxlbWVudC5cbiAqXG4gKiBgYGBqc1xuICogQGN1c3RvbUVsZW1lbnQoJ215LWVsZW1lbnQnKVxuICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBgO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqIEBwYXJhbSB0YWdOYW1lIFRoZSB0YWcgbmFtZSBvZiB0aGUgY3VzdG9tIGVsZW1lbnQgdG8gZGVmaW5lLlxuICovXG5leHBvcnQgY29uc3QgY3VzdG9tRWxlbWVudCA9ICh0YWdOYW1lKSA9PiAoY2xhc3NPckRlc2NyaXB0b3IpID0+IHR5cGVvZiBjbGFzc09yRGVzY3JpcHRvciA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gbGVnYWN5Q3VzdG9tRWxlbWVudCh0YWdOYW1lLCBjbGFzc09yRGVzY3JpcHRvcilcbiAgICA6IHN0YW5kYXJkQ3VzdG9tRWxlbWVudCh0YWdOYW1lLCBjbGFzc09yRGVzY3JpcHRvcik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdXN0b20tZWxlbWVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmltcG9ydCB7IGRlY29yYXRlUHJvcGVydHkgfSBmcm9tICcuL2Jhc2UuanMnO1xuLyoqXG4gKiBBZGRzIGV2ZW50IGxpc3RlbmVyIG9wdGlvbnMgdG8gYSBtZXRob2QgdXNlZCBhcyBhbiBldmVudCBsaXN0ZW5lciBpbiBhXG4gKiBsaXQtaHRtbCB0ZW1wbGF0ZS5cbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyBBbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgZXZlbnQgbGlzdGVuZXIgb3B0aW9ucyBhcyBhY2NlcHRlZCBieVxuICogYEV2ZW50VGFyZ2V0I2FkZEV2ZW50TGlzdGVuZXJgIGFuZCBgRXZlbnRUYXJnZXQjcmVtb3ZlRXZlbnRMaXN0ZW5lcmAuXG4gKlxuICogQ3VycmVudCBicm93c2VycyBzdXBwb3J0IHRoZSBgY2FwdHVyZWAsIGBwYXNzaXZlYCwgYW5kIGBvbmNlYCBvcHRpb25zLiBTZWU6XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnRUYXJnZXQvYWRkRXZlbnRMaXN0ZW5lciNQYXJhbWV0ZXJzXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIGNsaWNrZWQgPSBmYWxzZTtcbiAqXG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgIDxkaXYgQGNsaWNrPSR7dGhpcy5fb25DbGlja30+XG4gKiAgICAgICAgIDxidXR0b24+PC9idXR0b24+XG4gKiAgICAgICA8L2Rpdj5cbiAqICAgICBgO1xuICogICB9XG4gKlxuICogICBAZXZlbnRPcHRpb25zKHtjYXB0dXJlOiB0cnVlfSlcbiAqICAgX29uQ2xpY2soZSkge1xuICogICAgIHRoaXMuY2xpY2tlZCA9IHRydWU7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZGVjb3JhdGVQcm9wZXJ0eSh7XG4gICAgICAgIGZpbmlzaGVyOiAoY3RvciwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjdG9yLnByb3RvdHlwZVtuYW1lXSwgb3B0aW9ucyk7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudC1vcHRpb25zLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3Qgc3RhbmRhcmRQcm9wZXJ0eSA9IChvcHRpb25zLCBlbGVtZW50KSA9PiB7XG4gICAgLy8gV2hlbiBkZWNvcmF0aW5nIGFuIGFjY2Vzc29yLCBwYXNzIGl0IHRocm91Z2ggYW5kIGFkZCBwcm9wZXJ0eSBtZXRhZGF0YS5cbiAgICAvLyBOb3RlLCB0aGUgYGhhc093blByb3BlcnR5YCBjaGVjayBpbiBgY3JlYXRlUHJvcGVydHlgIGVuc3VyZXMgd2UgZG9uJ3RcbiAgICAvLyBzdG9tcCBvdmVyIHRoZSB1c2VyJ3MgYWNjZXNzb3IuXG4gICAgaWYgKGVsZW1lbnQua2luZCA9PT0gJ21ldGhvZCcgJiZcbiAgICAgICAgZWxlbWVudC5kZXNjcmlwdG9yICYmXG4gICAgICAgICEoJ3ZhbHVlJyBpbiBlbGVtZW50LmRlc2NyaXB0b3IpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5lbGVtZW50LFxuICAgICAgICAgICAgZmluaXNoZXIoY2xhenopIHtcbiAgICAgICAgICAgICAgICBjbGF6ei5jcmVhdGVQcm9wZXJ0eShlbGVtZW50LmtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlUHJvcGVydHkoKSB0YWtlcyBjYXJlIG9mIGRlZmluaW5nIHRoZSBwcm9wZXJ0eSwgYnV0IHdlIHN0aWxsXG4gICAgICAgIC8vIG11c3QgcmV0dXJuIHNvbWUga2luZCBvZiBkZXNjcmlwdG9yLCBzbyByZXR1cm4gYSBkZXNjcmlwdG9yIGZvciBhblxuICAgICAgICAvLyB1bnVzZWQgcHJvdG90eXBlIGZpZWxkLiBUaGUgZmluaXNoZXIgY2FsbHMgY3JlYXRlUHJvcGVydHkoKS5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtpbmQ6ICdmaWVsZCcsXG4gICAgICAgICAgICBrZXk6IFN5bWJvbCgpLFxuICAgICAgICAgICAgcGxhY2VtZW50OiAnb3duJyxcbiAgICAgICAgICAgIGRlc2NyaXB0b3I6IHt9LFxuICAgICAgICAgICAgLy8gc3RvcmUgdGhlIG9yaWdpbmFsIGtleSBzbyBzdWJzZXF1ZW50IGRlY29yYXRvcnMgaGF2ZSBhY2Nlc3MgdG8gaXQuXG4gICAgICAgICAgICBvcmlnaW5hbEtleTogZWxlbWVudC5rZXksXG4gICAgICAgICAgICAvLyBXaGVuIEBiYWJlbC9wbHVnaW4tcHJvcG9zYWwtZGVjb3JhdG9ycyBpbXBsZW1lbnRzIGluaXRpYWxpemVycyxcbiAgICAgICAgICAgIC8vIGRvIHRoaXMgaW5zdGVhZCBvZiB0aGUgaW5pdGlhbGl6ZXIgYmVsb3cuIFNlZTpcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvOTI2MCBleHRyYXM6IFtcbiAgICAgICAgICAgIC8vICAge1xuICAgICAgICAgICAgLy8gICAgIGtpbmQ6ICdpbml0aWFsaXplcicsXG4gICAgICAgICAgICAvLyAgICAgcGxhY2VtZW50OiAnb3duJyxcbiAgICAgICAgICAgIC8vICAgICBpbml0aWFsaXplcjogZGVzY3JpcHRvci5pbml0aWFsaXplcixcbiAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgLy8gXSxcbiAgICAgICAgICAgIGluaXRpYWxpemVyKCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5pbml0aWFsaXplciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2VsZW1lbnQua2V5XSA9IGVsZW1lbnQuaW5pdGlhbGl6ZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmluaXNoZXIoY2xhenopIHtcbiAgICAgICAgICAgICAgICBjbGF6ei5jcmVhdGVQcm9wZXJ0eShlbGVtZW50LmtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbn07XG5jb25zdCBsZWdhY3lQcm9wZXJ0eSA9IChvcHRpb25zLCBwcm90bywgbmFtZSkgPT4ge1xuICAgIHByb3RvLmNvbnN0cnVjdG9yLmNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMpO1xufTtcbi8qKlxuICogQSBwcm9wZXJ0eSBkZWNvcmF0b3Igd2hpY2ggY3JlYXRlcyBhIHJlYWN0aXZlIHByb3BlcnR5IHRoYXQgcmVmbGVjdHMgYVxuICogY29ycmVzcG9uZGluZyBhdHRyaWJ1dGUgdmFsdWUuIFdoZW4gYSBkZWNvcmF0ZWQgcHJvcGVydHkgaXMgc2V0XG4gKiB0aGUgZWxlbWVudCB3aWxsIHVwZGF0ZSBhbmQgcmVuZGVyLiBBIHtAbGlua2NvZGUgUHJvcGVydHlEZWNsYXJhdGlvbn0gbWF5XG4gKiBvcHRpb25hbGx5IGJlIHN1cHBsaWVkIHRvIGNvbmZpZ3VyZSBwcm9wZXJ0eSBmZWF0dXJlcy5cbiAqXG4gKiBUaGlzIGRlY29yYXRvciBzaG91bGQgb25seSBiZSB1c2VkIGZvciBwdWJsaWMgZmllbGRzLiBBcyBwdWJsaWMgZmllbGRzLFxuICogcHJvcGVydGllcyBzaG91bGQgYmUgY29uc2lkZXJlZCBhcyBwcmltYXJpbHkgc2V0dGFibGUgYnkgZWxlbWVudCB1c2VycyxcbiAqIGVpdGhlciB2aWEgYXR0cmlidXRlIG9yIHRoZSBwcm9wZXJ0eSBpdHNlbGYuXG4gKlxuICogR2VuZXJhbGx5LCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGNoYW5nZWQgYnkgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHByaXZhdGUgb3JcbiAqIHByb3RlY3RlZCBmaWVsZHMgYW5kIHNob3VsZCB1c2UgdGhlIHtAbGlua2NvZGUgc3RhdGV9IGRlY29yYXRvci5cbiAqXG4gKiBIb3dldmVyLCBzb21ldGltZXMgZWxlbWVudCBjb2RlIGRvZXMgbmVlZCB0byBzZXQgYSBwdWJsaWMgcHJvcGVydHkuIFRoaXNcbiAqIHNob3VsZCB0eXBpY2FsbHkgb25seSBiZSBkb25lIGluIHJlc3BvbnNlIHRvIHVzZXIgaW50ZXJhY3Rpb24sIGFuZCBhbiBldmVudFxuICogc2hvdWxkIGJlIGZpcmVkIGluZm9ybWluZyB0aGUgdXNlcjsgZm9yIGV4YW1wbGUsIGEgY2hlY2tib3ggc2V0cyBpdHNcbiAqIGBjaGVja2VkYCBwcm9wZXJ0eSB3aGVuIGNsaWNrZWQgYW5kIGZpcmVzIGEgYGNoYW5nZWRgIGV2ZW50LiBNdXRhdGluZyBwdWJsaWNcbiAqIHByb3BlcnRpZXMgc2hvdWxkIHR5cGljYWxseSBub3QgYmUgZG9uZSBmb3Igbm9uLXByaW1pdGl2ZSAob2JqZWN0IG9yIGFycmF5KVxuICogcHJvcGVydGllcy4gSW4gb3RoZXIgY2FzZXMgd2hlbiBhbiBlbGVtZW50IG5lZWRzIHRvIG1hbmFnZSBzdGF0ZSwgYSBwcml2YXRlXG4gKiBwcm9wZXJ0eSBkZWNvcmF0ZWQgdmlhIHRoZSB7QGxpbmtjb2RlIHN0YXRlfSBkZWNvcmF0b3Igc2hvdWxkIGJlIHVzZWQuIFdoZW5cbiAqIG5lZWRlZCwgc3RhdGUgcHJvcGVydGllcyBjYW4gYmUgaW5pdGlhbGl6ZWQgdmlhIHB1YmxpYyBwcm9wZXJ0aWVzIHRvXG4gKiBmYWNpbGl0YXRlIGNvbXBsZXggaW50ZXJhY3Rpb25zLlxuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBNeUVsZW1lbnQge1xuICogICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gKiAgIGNsaWNrZWQgPSBmYWxzZTtcbiAqIH1cbiAqIGBgYFxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICogQEV4cG9ydERlY29yYXRlZEl0ZW1zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eShvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICByZXR1cm4gKHByb3RvT3JEZXNjcmlwdG9yLCBuYW1lKSA9PiBuYW1lICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBsZWdhY3lQcm9wZXJ0eShvcHRpb25zLCBwcm90b09yRGVzY3JpcHRvciwgbmFtZSlcbiAgICAgICAgOiBzdGFuZGFyZFByb3BlcnR5KG9wdGlvbnMsIHByb3RvT3JEZXNjcmlwdG9yKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb3BlcnR5LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuaW1wb3J0IHsgZGVjb3JhdGVQcm9wZXJ0eSB9IGZyb20gJy4vYmFzZS5qcyc7XG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHRoYXQgY29udmVydHMgYSBjbGFzcyBwcm9wZXJ0eSBpbnRvIGEgZ2V0dGVyXG4gKiB0aGF0IGV4ZWN1dGVzIGEgcXVlcnlTZWxlY3RvckFsbCBvbiB0aGUgZWxlbWVudCdzIHJlbmRlclJvb3QuXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIEEgRE9NU3RyaW5nIGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgc2VsZWN0b3JzIHRvIG1hdGNoLlxuICpcbiAqIFNlZTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9xdWVyeVNlbGVjdG9yQWxsXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIEBxdWVyeUFsbCgnZGl2JylcbiAqICAgZGl2cztcbiAqXG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgIDxkaXYgaWQ9XCJmaXJzdFwiPjwvZGl2PlxuICogICAgICAgPGRpdiBpZD1cInNlY29uZFwiPjwvZGl2PlxuICogICAgIGA7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlBbGwoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZGVjb3JhdGVQcm9wZXJ0eSh7XG4gICAgICAgIGRlc2NyaXB0b3I6IChfbmFtZSkgPT4gKHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIHJldHVybiAoX2IgPSAoX2EgPSB0aGlzLnJlbmRlclJvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogW107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeS1hbGwuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2E7XG4vKlxuICogSU1QT1JUQU5UOiBGb3IgY29tcGF0aWJpbGl0eSB3aXRoIHRzaWNrbGUgYW5kIHRoZSBDbG9zdXJlIEpTIGNvbXBpbGVyLCBhbGxcbiAqIHByb3BlcnR5IGRlY29yYXRvcnMgKGJ1dCBub3QgY2xhc3MgZGVjb3JhdG9ycykgaW4gdGhpcyBmaWxlIHRoYXQgaGF2ZVxuICogYW4gQEV4cG9ydERlY29yYXRlZEl0ZW1zIGFubm90YXRpb24gbXVzdCBiZSBkZWZpbmVkIGFzIGEgcmVndWxhciBmdW5jdGlvbixcbiAqIG5vdCBhbiBhcnJvdyBmdW5jdGlvbi5cbiAqL1xuaW1wb3J0IHsgZGVjb3JhdGVQcm9wZXJ0eSB9IGZyb20gJy4vYmFzZS5qcyc7XG4vKipcbiAqIEEgdGlueSBtb2R1bGUgc2NvcGVkIHBvbHlmaWxsIGZvciBIVE1MU2xvdEVsZW1lbnQuYXNzaWduZWRFbGVtZW50cy5cbiAqL1xuY29uc3Qgc2xvdEFzc2lnbmVkRWxlbWVudHMgPSAoKF9hID0gd2luZG93LkhUTUxTbG90RWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByb3RvdHlwZS5hc3NpZ25lZEVsZW1lbnRzKSAhPSBudWxsXG4gICAgPyAoc2xvdCwgb3B0cykgPT4gc2xvdC5hc3NpZ25lZEVsZW1lbnRzKG9wdHMpXG4gICAgOiAoc2xvdCwgb3B0cykgPT4gc2xvdFxuICAgICAgICAuYXNzaWduZWROb2RlcyhvcHRzKVxuICAgICAgICAuZmlsdGVyKChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSk7XG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHRoYXQgY29udmVydHMgYSBjbGFzcyBwcm9wZXJ0eSBpbnRvIGEgZ2V0dGVyIHRoYXRcbiAqIHJldHVybnMgdGhlIGBhc3NpZ25lZEVsZW1lbnRzYCBvZiB0aGUgZ2l2ZW4gYHNsb3RgLiBQcm92aWRlcyBhIGRlY2xhcmF0aXZlXG4gKiB3YXkgdG8gdXNlXG4gKiBbYEhUTUxTbG90RWxlbWVudC5hc3NpZ25lZEVsZW1lbnRzYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxTbG90RWxlbWVudC9hc3NpZ25lZEVsZW1lbnRzKS5cbiAqXG4gKiBDYW4gYmUgcGFzc2VkIGFuIG9wdGlvbmFsIHtAbGlua2NvZGUgUXVlcnlBc3NpZ25lZEVsZW1lbnRzT3B0aW9uc30gb2JqZWN0LlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQHF1ZXJ5QXNzaWduZWRFbGVtZW50cyh7IHNsb3Q6ICdsaXN0JyB9KVxuICogICBsaXN0SXRlbXMhOiBBcnJheTxIVE1MRWxlbWVudD47XG4gKiAgIEBxdWVyeUFzc2lnbmVkRWxlbWVudHMoKVxuICogICB1bm5hbWVkU2xvdEVscyE6IEFycmF5PEhUTUxFbGVtZW50PjtcbiAqXG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgIDxzbG90IG5hbWU9XCJsaXN0XCI+PC9zbG90PlxuICogICAgICAgPHNsb3Q+PC9zbG90PlxuICogICAgIGA7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIE5vdGUsIHRoZSB0eXBlIG9mIHRoaXMgcHJvcGVydHkgc2hvdWxkIGJlIGFubm90YXRlZCBhcyBgQXJyYXk8SFRNTEVsZW1lbnQ+YC5cbiAqXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUFzc2lnbmVkRWxlbWVudHMob3B0aW9ucykge1xuICAgIGNvbnN0IHsgc2xvdCwgc2VsZWN0b3IgfSA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwID8gb3B0aW9ucyA6IHt9O1xuICAgIHJldHVybiBkZWNvcmF0ZVByb3BlcnR5KHtcbiAgICAgICAgZGVzY3JpcHRvcjogKF9uYW1lKSA9PiAoe1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90U2VsZWN0b3IgPSBgc2xvdCR7c2xvdCA/IGBbbmFtZT0ke3Nsb3R9XWAgOiAnOm5vdChbbmFtZV0pJ31gO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsb3RFbCA9IChfYSA9IHRoaXMucmVuZGVyUm9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3Ioc2xvdFNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IHNsb3RFbCAhPSBudWxsID8gc2xvdEFzc2lnbmVkRWxlbWVudHMoc2xvdEVsLCBvcHRpb25zKSA6IFtdO1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudHMuZmlsdGVyKChub2RlKSA9PiBub2RlLm1hdGNoZXMoc2VsZWN0b3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIH0pLFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYXNzaWduZWQtZWxlbWVudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG4vKlxuICogSU1QT1JUQU5UOiBGb3IgY29tcGF0aWJpbGl0eSB3aXRoIHRzaWNrbGUgYW5kIHRoZSBDbG9zdXJlIEpTIGNvbXBpbGVyLCBhbGxcbiAqIHByb3BlcnR5IGRlY29yYXRvcnMgKGJ1dCBub3QgY2xhc3MgZGVjb3JhdG9ycykgaW4gdGhpcyBmaWxlIHRoYXQgaGF2ZVxuICogYW4gQEV4cG9ydERlY29yYXRlZEl0ZW1zIGFubm90YXRpb24gbXVzdCBiZSBkZWZpbmVkIGFzIGEgcmVndWxhciBmdW5jdGlvbixcbiAqIG5vdCBhbiBhcnJvdyBmdW5jdGlvbi5cbiAqL1xuaW1wb3J0IHsgZGVjb3JhdGVQcm9wZXJ0eSB9IGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgeyBxdWVyeUFzc2lnbmVkRWxlbWVudHMgfSBmcm9tICcuL3F1ZXJ5LWFzc2lnbmVkLWVsZW1lbnRzLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUFzc2lnbmVkTm9kZXMoc2xvdE9yT3B0aW9ucywgZmxhdHRlbiwgc2VsZWN0b3IpIHtcbiAgICAvLyBOb3JtYWxpemUgdGhlIG92ZXJsb2FkZWQgYXJndW1lbnRzLlxuICAgIGxldCBzbG90ID0gc2xvdE9yT3B0aW9ucztcbiAgICBsZXQgYXNzaWduZWROb2Rlc09wdGlvbnM7XG4gICAgaWYgKHR5cGVvZiBzbG90T3JPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzbG90ID0gc2xvdE9yT3B0aW9ucy5zbG90O1xuICAgICAgICBhc3NpZ25lZE5vZGVzT3B0aW9ucyA9IHNsb3RPck9wdGlvbnM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhc3NpZ25lZE5vZGVzT3B0aW9ucyA9IHsgZmxhdHRlbiB9O1xuICAgIH1cbiAgICAvLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHF1ZXJ5QXNzaWduZWROb2RlcyB3aXRoIGEgc2VsZWN0b3IgYmVoYXZlc1xuICAgIC8vIGV4YWN0bHkgbGlrZSBxdWVyeUFzc2lnbmVkRWxlbWVudHMgd2l0aCBhIHNlbGVjdG9yLlxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gcXVlcnlBc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgICAgIHNsb3Q6IHNsb3QsXG4gICAgICAgICAgICBmbGF0dGVuLFxuICAgICAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGVjb3JhdGVQcm9wZXJ0eSh7XG4gICAgICAgIGRlc2NyaXB0b3I6IChfbmFtZSkgPT4gKHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsb3RTZWxlY3RvciA9IGBzbG90JHtzbG90ID8gYFtuYW1lPSR7c2xvdH1dYCA6ICc6bm90KFtuYW1lXSknfWA7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2xvdEVsID0gKF9hID0gdGhpcy5yZW5kZXJSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcihzbG90U2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoX2IgPSBzbG90RWwgPT09IG51bGwgfHwgc2xvdEVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbG90RWwuYXNzaWduZWROb2Rlcyhhc3NpZ25lZE5vZGVzT3B0aW9ucykpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFtdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIH0pLFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYXNzaWduZWQtbm9kZXMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5pbXBvcnQgeyBkZWNvcmF0ZVByb3BlcnR5IH0gZnJvbSAnLi9iYXNlLmpzJztcbi8vIE5vdGUsIGluIHRoZSBmdXR1cmUsIHdlIG1heSBleHRlbmQgdGhpcyBkZWNvcmF0b3IgdG8gc3VwcG9ydCB0aGUgdXNlIGNhc2Vcbi8vIHdoZXJlIHRoZSBxdWVyaWVkIGVsZW1lbnQgbWF5IG5lZWQgdG8gZG8gd29yayB0byBiZWNvbWUgcmVhZHkgdG8gaW50ZXJhY3Rcbi8vIHdpdGggKGUuZy4gbG9hZCBzb21lIGltcGxlbWVudGF0aW9uIGNvZGUpLiBJZiBzbywgd2UgbWlnaHQgZWxlY3QgdG9cbi8vIGFkZCBhIHNlY29uZCBhcmd1bWVudCBkZWZpbmluZyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHJ1biB0byBtYWtlIHRoZVxuLy8gcXVlcmllZCBlbGVtZW50IGxvYWRlZC91cGRhdGVkL3JlYWR5LlxuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlciB0aGF0XG4gKiByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSByZXN1bHQgb2YgYSBxdWVyeVNlbGVjdG9yIG9uIHRoZVxuICogZWxlbWVudCdzIHJlbmRlclJvb3QgZG9uZSBhZnRlciB0aGUgZWxlbWVudCdzIGB1cGRhdGVDb21wbGV0ZWAgcHJvbWlzZVxuICogcmVzb2x2ZXMuIFdoZW4gdGhlIHF1ZXJpZWQgcHJvcGVydHkgbWF5IGNoYW5nZSB3aXRoIGVsZW1lbnQgc3RhdGUsIHRoaXNcbiAqIGRlY29yYXRvciBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIHJlcXVpcmluZyB1c2VycyB0byBhd2FpdCB0aGVcbiAqIGB1cGRhdGVDb21wbGV0ZWAgYmVmb3JlIGFjY2Vzc2luZyB0aGUgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIEEgRE9NU3RyaW5nIGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgc2VsZWN0b3JzIHRvIG1hdGNoLlxuICpcbiAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L3F1ZXJ5U2VsZWN0b3JcbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQHF1ZXJ5QXN5bmMoJyNmaXJzdCcpXG4gKiAgIGZpcnN0O1xuICpcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYFxuICogICAgICAgPGRpdiBpZD1cImZpcnN0XCI+PC9kaXY+XG4gKiAgICAgICA8ZGl2IGlkPVwic2Vjb25kXCI+PC9kaXY+XG4gKiAgICAgYDtcbiAqICAgfVxuICogfVxuICpcbiAqIC8vIGV4dGVybmFsIHVzYWdlXG4gKiBhc3luYyBkb1NvbWV0aGluZ1dpdGhGaXJzdCgpIHtcbiAqICAoYXdhaXQgYU15RWxlbWVudC5maXJzdCkuZG9Tb21ldGhpbmcoKTtcbiAqIH1cbiAqIGBgYFxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlBc3luYyhzZWxlY3Rvcikge1xuICAgIHJldHVybiBkZWNvcmF0ZVByb3BlcnR5KHtcbiAgICAgICAgZGVzY3JpcHRvcjogKF9uYW1lKSA9PiAoe1xuICAgICAgICAgICAgYXN5bmMgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgICAgICAgICAgICAgIHJldHVybiAoX2EgPSB0aGlzLnJlbmRlclJvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LWFzeW5jLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuaW1wb3J0IHsgZGVjb3JhdGVQcm9wZXJ0eSB9IGZyb20gJy4vYmFzZS5qcyc7XG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHRoYXQgY29udmVydHMgYSBjbGFzcyBwcm9wZXJ0eSBpbnRvIGEgZ2V0dGVyIHRoYXRcbiAqIGV4ZWN1dGVzIGEgcXVlcnlTZWxlY3RvciBvbiB0aGUgZWxlbWVudCdzIHJlbmRlclJvb3QuXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIEEgRE9NU3RyaW5nIGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgc2VsZWN0b3JzIHRvIG1hdGNoLlxuICogQHBhcmFtIGNhY2hlIEFuIG9wdGlvbmFsIGJvb2xlYW4gd2hpY2ggd2hlbiB0cnVlIHBlcmZvcm1zIHRoZSBET00gcXVlcnkgb25seVxuICogICAgIG9uY2UgYW5kIGNhY2hlcyB0aGUgcmVzdWx0LlxuICpcbiAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L3F1ZXJ5U2VsZWN0b3JcbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQHF1ZXJ5KCcjZmlyc3QnKVxuICogICBmaXJzdDtcbiAqXG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgIDxkaXYgaWQ9XCJmaXJzdFwiPjwvZGl2PlxuICogICAgICAgPGRpdiBpZD1cInNlY29uZFwiPjwvZGl2PlxuICogICAgIGA7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnkoc2VsZWN0b3IsIGNhY2hlKSB7XG4gICAgcmV0dXJuIGRlY29yYXRlUHJvcGVydHkoe1xuICAgICAgICBkZXNjcmlwdG9yOiAobmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoX2IgPSAoX2EgPSB0aGlzLnJlbmRlclJvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogbnVsbDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChjYWNoZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHR5cGVvZiBuYW1lID09PSAnc3ltYm9sJyA/IFN5bWJvbCgpIDogYF9fJHtuYW1lfWA7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXldID0gKF9iID0gKF9hID0gdGhpcy5yZW5kZXJSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNba2V5XTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbi8qXG4gKiBJTVBPUlRBTlQ6IEZvciBjb21wYXRpYmlsaXR5IHdpdGggdHNpY2tsZSBhbmQgdGhlIENsb3N1cmUgSlMgY29tcGlsZXIsIGFsbFxuICogcHJvcGVydHkgZGVjb3JhdG9ycyAoYnV0IG5vdCBjbGFzcyBkZWNvcmF0b3JzKSBpbiB0aGlzIGZpbGUgdGhhdCBoYXZlXG4gKiBhbiBARXhwb3J0RGVjb3JhdGVkSXRlbXMgYW5ub3RhdGlvbiBtdXN0IGJlIGRlZmluZWQgYXMgYSByZWd1bGFyIGZ1bmN0aW9uLFxuICogbm90IGFuIGFycm93IGZ1bmN0aW9uLlxuICovXG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJy4vcHJvcGVydHkuanMnO1xuLyoqXG4gKiBEZWNsYXJlcyBhIHByaXZhdGUgb3IgcHJvdGVjdGVkIHJlYWN0aXZlIHByb3BlcnR5IHRoYXQgc3RpbGwgdHJpZ2dlcnNcbiAqIHVwZGF0ZXMgdG8gdGhlIGVsZW1lbnQgd2hlbiBpdCBjaGFuZ2VzLiBJdCBkb2VzIG5vdCByZWZsZWN0IGZyb20gdGhlXG4gKiBjb3JyZXNwb25kaW5nIGF0dHJpYnV0ZS5cbiAqXG4gKiBQcm9wZXJ0aWVzIGRlY2xhcmVkIHRoaXMgd2F5IG11c3Qgbm90IGJlIHVzZWQgZnJvbSBIVE1MIG9yIEhUTUwgdGVtcGxhdGluZ1xuICogc3lzdGVtcywgdGhleSdyZSBzb2xlbHkgZm9yIHByb3BlcnRpZXMgaW50ZXJuYWwgdG8gdGhlIGVsZW1lbnQuIFRoZXNlXG4gKiBwcm9wZXJ0aWVzIG1heSBiZSByZW5hbWVkIGJ5IG9wdGltaXphdGlvbiB0b29scyBsaWtlIGNsb3N1cmUgY29tcGlsZXIuXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5KHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgc3RhdGU6IHRydWUsXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGF0ZS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbnZhciBfYSwgX2IsIF9jO1xudmFyIF9kO1xuLyoqXG4gKiBVc2UgdGhpcyBtb2R1bGUgaWYgeW91IHdhbnQgdG8gY3JlYXRlIHlvdXIgb3duIGJhc2UgY2xhc3MgZXh0ZW5kaW5nXG4gKiB7QGxpbmsgUmVhY3RpdmVFbGVtZW50fS5cbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5pbXBvcnQgeyBnZXRDb21wYXRpYmxlU3R5bGUsIGFkb3B0U3R5bGVzLCB9IGZyb20gJy4vY3NzLXRhZy5qcyc7XG5leHBvcnQgKiBmcm9tICcuL2Nzcy10YWcuanMnO1xuY29uc3QgREVWX01PREUgPSB0cnVlO1xubGV0IHJlcXVlc3RVcGRhdGVUaGVuYWJsZTtcbmxldCBpc3N1ZVdhcm5pbmc7XG5jb25zdCB0cnVzdGVkVHlwZXMgPSB3aW5kb3dcbiAgICAudHJ1c3RlZFR5cGVzO1xuLy8gVGVtcG9yYXJ5IHdvcmthcm91bmQgZm9yIGh0dHBzOi8vY3JidWcuY29tLzk5MzI2OFxuLy8gQ3VycmVudGx5LCBhbnkgYXR0cmlidXRlIHN0YXJ0aW5nIHdpdGggXCJvblwiIGlzIGNvbnNpZGVyZWQgdG8gYmUgYVxuLy8gVHJ1c3RlZFNjcmlwdCBzb3VyY2UuIFN1Y2ggYm9vbGVhbiBhdHRyaWJ1dGVzIG11c3QgYmUgc2V0IHRvIHRoZSBlcXVpdmFsZW50XG4vLyB0cnVzdGVkIGVtcHR5U2NyaXB0IHZhbHVlLlxuY29uc3QgZW1wdHlTdHJpbmdGb3JCb29sZWFuQXR0cmlidXRlID0gdHJ1c3RlZFR5cGVzXG4gICAgPyB0cnVzdGVkVHlwZXMuZW1wdHlTY3JpcHRcbiAgICA6ICcnO1xuY29uc3QgcG9seWZpbGxTdXBwb3J0ID0gREVWX01PREVcbiAgICA/IHdpbmRvdy5yZWFjdGl2ZUVsZW1lbnRQb2x5ZmlsbFN1cHBvcnREZXZNb2RlXG4gICAgOiB3aW5kb3cucmVhY3RpdmVFbGVtZW50UG9seWZpbGxTdXBwb3J0O1xuaWYgKERFVl9NT0RFKSB7XG4gICAgLy8gRW5zdXJlIHdhcm5pbmdzIGFyZSBpc3N1ZWQgb25seSAxeCwgZXZlbiBpZiBtdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXRcbiAgICAvLyBhcmUgbG9hZGVkLlxuICAgIGNvbnN0IGlzc3VlZFdhcm5pbmdzID0gKChfYSA9IGdsb2JhbFRoaXMubGl0SXNzdWVkV2FybmluZ3MpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IChnbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzID0gbmV3IFNldCgpKSk7XG4gICAgLy8gSXNzdWUgYSB3YXJuaW5nLCBpZiB3ZSBoYXZlbid0IGFscmVhZHkuXG4gICAgaXNzdWVXYXJuaW5nID0gKGNvZGUsIHdhcm5pbmcpID0+IHtcbiAgICAgICAgd2FybmluZyArPSBgIFNlZSBodHRwczovL2xpdC5kZXYvbXNnLyR7Y29kZX0gZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgaWYgKCFpc3N1ZWRXYXJuaW5ncy5oYXMod2FybmluZykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbiAgICAgICAgICAgIGlzc3VlZFdhcm5pbmdzLmFkZCh3YXJuaW5nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaXNzdWVXYXJuaW5nKCdkZXYtbW9kZScsIGBMaXQgaXMgaW4gZGV2IG1vZGUuIE5vdCByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiFgKTtcbiAgICAvLyBJc3N1ZSBwb2x5ZmlsbCBzdXBwb3J0IHdhcm5pbmcuXG4gICAgaWYgKCgoX2IgPSB3aW5kb3cuU2hhZHlET00pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pblVzZSkgJiYgcG9seWZpbGxTdXBwb3J0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaXNzdWVXYXJuaW5nKCdwb2x5ZmlsbC1zdXBwb3J0LW1pc3NpbmcnLCBgU2hhZG93IERPTSBpcyBiZWluZyBwb2x5ZmlsbGVkIHZpYSBcXGBTaGFkeURPTVxcYCBidXQgYCArXG4gICAgICAgICAgICBgdGhlIFxcYHBvbHlmaWxsLXN1cHBvcnRcXGAgbW9kdWxlIGhhcyBub3QgYmVlbiBsb2FkZWQuYCk7XG4gICAgfVxuICAgIHJlcXVlc3RVcGRhdGVUaGVuYWJsZSA9IChuYW1lKSA9PiAoe1xuICAgICAgICB0aGVuOiAob25mdWxmaWxsZWQsIF9vbnJlamVjdGVkKSA9PiB7XG4gICAgICAgICAgICBpc3N1ZVdhcm5pbmcoJ3JlcXVlc3QtdXBkYXRlLXByb21pc2UnLCBgVGhlIFxcYHJlcXVlc3RVcGRhdGVcXGAgbWV0aG9kIHNob3VsZCBubyBsb25nZXIgcmV0dXJuIGEgUHJvbWlzZSBidXQgYCArXG4gICAgICAgICAgICAgICAgYGRvZXMgc28gb24gXFxgJHtuYW1lfVxcYC4gVXNlIFxcYHVwZGF0ZUNvbXBsZXRlXFxgIGluc3RlYWQuYCk7XG4gICAgICAgICAgICBpZiAob25mdWxmaWxsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG9uZnVsZmlsbGVkKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbi8qKlxuICogVXNlZnVsIGZvciB2aXN1YWxpemluZyBhbmQgbG9nZ2luZyBpbnNpZ2h0cyBpbnRvIHdoYXQgdGhlIExpdCB0ZW1wbGF0ZSBzeXN0ZW0gaXMgZG9pbmcuXG4gKlxuICogQ29tcGlsZWQgb3V0IG9mIHByb2QgbW9kZSBidWlsZHMuXG4gKi9cbmNvbnN0IGRlYnVnTG9nRXZlbnQgPSBERVZfTU9ERVxuICAgID8gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHNob3VsZEVtaXQgPSB3aW5kb3dcbiAgICAgICAgICAgIC5lbWl0TGl0RGVidWdMb2dFdmVudHM7XG4gICAgICAgIGlmICghc2hvdWxkRW1pdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbGl0LWRlYnVnJywge1xuICAgICAgICAgICAgZGV0YWlsOiBldmVudCxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICA6IHVuZGVmaW5lZDtcbi8qXG4gKiBXaGVuIHVzaW5nIENsb3N1cmUgQ29tcGlsZXIsIEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkocHJvcGVydHksIG9iamVjdCkgaXNcbiAqIHJlcGxhY2VkIGF0IGNvbXBpbGUgdGltZSBieSB0aGUgbXVuZ2VkIG5hbWUgZm9yIG9iamVjdFtwcm9wZXJ0eV0uIFdlIGNhbm5vdFxuICogYWxpYXMgdGhpcyBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0byB1c2UgYSBzbWFsbCBzaGltIHRoYXQgaGFzIHRoZSBzYW1lXG4gKiBiZWhhdmlvciB3aGVuIG5vdCBjb21waWxpbmcuXG4gKi9cbi8qQF9fSU5MSU5FX18qL1xuY29uc3QgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSA9IChwcm9wLCBfb2JqKSA9PiBwcm9wO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb252ZXJ0ZXIgPSB7XG4gICAgdG9BdHRyaWJ1dGUodmFsdWUsIHR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEJvb2xlYW46XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA/IGVtcHR5U3RyaW5nRm9yQm9vbGVhbkF0dHJpYnV0ZSA6IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE9iamVjdDpcbiAgICAgICAgICAgIGNhc2UgQXJyYXk6XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHZhbHVlIGlzIGBudWxsYCBvciBgdW5kZWZpbmVkYCBwYXNzIHRoaXMgdGhyb3VnaFxuICAgICAgICAgICAgICAgIC8vIHRvIGFsbG93IHJlbW92aW5nL25vIGNoYW5nZSBiZWhhdmlvci5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID09IG51bGwgPyB2YWx1ZSA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBmcm9tQXR0cmlidXRlKHZhbHVlLCB0eXBlKSB7XG4gICAgICAgIGxldCBmcm9tVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEJvb2xlYW46XG4gICAgICAgICAgICAgICAgZnJvbVZhbHVlID0gdmFsdWUgIT09IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE51bWJlcjpcbiAgICAgICAgICAgICAgICBmcm9tVmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCA/IG51bGwgOiBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBPYmplY3Q6XG4gICAgICAgICAgICBjYXNlIEFycmF5OlxuICAgICAgICAgICAgICAgIC8vIERvICpub3QqIGdlbmVyYXRlIGV4Y2VwdGlvbiB3aGVuIGludmFsaWQgSlNPTiBpcyBzZXQgYXMgZWxlbWVudHNcbiAgICAgICAgICAgICAgICAvLyBkb24ndCBub3JtYWxseSBjb21wbGFpbiBvbiBiZWluZyBtaXMtY29uZmlndXJlZC5cbiAgICAgICAgICAgICAgICAvLyBUT0RPKHNvcnZlbGwpOiBEbyBnZW5lcmF0ZSBleGNlcHRpb24gaW4gKmRldiBtb2RlKi5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBc3NlcnQgdG8gYWRoZXJlIHRvIEJhemVsJ3MgXCJtdXN0IHR5cGUgYXNzZXJ0IEpTT04gcGFyc2VcIiBydWxlLlxuICAgICAgICAgICAgICAgICAgICBmcm9tVmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbVZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyb21WYWx1ZTtcbiAgICB9LFxufTtcbi8qKlxuICogQ2hhbmdlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgZGlmZmVyZW50IGZyb20gYG9sZFZhbHVlYC5cbiAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgYXMgdGhlIGRlZmF1bHQgZm9yIGEgcHJvcGVydHkncyBgaGFzQ2hhbmdlZGAgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBub3RFcXVhbCA9ICh2YWx1ZSwgb2xkKSA9PiB7XG4gICAgLy8gVGhpcyBlbnN1cmVzIChvbGQ9PU5hTiwgdmFsdWU9PU5hTikgYWx3YXlzIHJldHVybnMgZmFsc2VcbiAgICByZXR1cm4gb2xkICE9PSB2YWx1ZSAmJiAob2xkID09PSBvbGQgfHwgdmFsdWUgPT09IHZhbHVlKTtcbn07XG5jb25zdCBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbiA9IHtcbiAgICBhdHRyaWJ1dGU6IHRydWUsXG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGNvbnZlcnRlcjogZGVmYXVsdENvbnZlcnRlcixcbiAgICByZWZsZWN0OiBmYWxzZSxcbiAgICBoYXNDaGFuZ2VkOiBub3RFcXVhbCxcbn07XG4vKipcbiAqIFRoZSBDbG9zdXJlIEpTIENvbXBpbGVyIGRvZXNuJ3QgY3VycmVudGx5IGhhdmUgZ29vZCBzdXBwb3J0IGZvciBzdGF0aWNcbiAqIHByb3BlcnR5IHNlbWFudGljcyB3aGVyZSBcInRoaXNcIiBpcyBkeW5hbWljIChlLmcuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2Nsb3N1cmUtY29tcGlsZXIvaXNzdWVzLzMxNzcgYW5kIG90aGVycykgc28gd2UgdXNlXG4gKiB0aGlzIGhhY2sgdG8gYnlwYXNzIGFueSByZXdyaXRpbmcgYnkgdGhlIGNvbXBpbGVyLlxuICovXG5jb25zdCBmaW5hbGl6ZWQgPSAnZmluYWxpemVkJztcbi8qKlxuICogQmFzZSBlbGVtZW50IGNsYXNzIHdoaWNoIG1hbmFnZXMgZWxlbWVudCBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzLiBXaGVuXG4gKiBwcm9wZXJ0aWVzIGNoYW5nZSwgdGhlIGB1cGRhdGVgIG1ldGhvZCBpcyBhc3luY2hyb25vdXNseSBjYWxsZWQuIFRoaXMgbWV0aG9kXG4gKiBzaG91bGQgYmUgc3VwcGxpZWQgYnkgc3ViY2xhc3NlcnMgdG8gcmVuZGVyIHVwZGF0ZXMgYXMgZGVzaXJlZC5cbiAqIEBub0luaGVyaXREb2NcbiAqL1xuZXhwb3J0IGNsYXNzIFJlYWN0aXZlRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgaWYgdGhlcmUgaXMgYSBwZW5kaW5nIHVwZGF0ZSBhcyBhIHJlc3VsdCBvZiBjYWxsaW5nIGByZXF1ZXN0VXBkYXRlKClgLlxuICAgICAgICAgKiBTaG91bGQgb25seSBiZSByZWFkLlxuICAgICAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHNldCB0byBgdHJ1ZWAgYWZ0ZXIgdGhlIGZpcnN0IHVwZGF0ZS4gVGhlIGVsZW1lbnQgY29kZSBjYW5ub3QgYXNzdW1lXG4gICAgICAgICAqIHRoYXQgYHJlbmRlclJvb3RgIGV4aXN0cyBiZWZvcmUgdGhlIGVsZW1lbnQgYGhhc1VwZGF0ZWRgLlxuICAgICAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oYXNVcGRhdGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOYW1lIG9mIGN1cnJlbnRseSByZWZsZWN0aW5nIHByb3BlcnR5XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGluaXRpYWxpemVyIGZ1bmN0aW9uIHRvIHRoZSBjbGFzcyB0aGF0IGlzIGNhbGxlZCBkdXJpbmcgaW5zdGFuY2VcbiAgICAgKiBjb25zdHJ1Y3Rpb24uXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3IgY29kZSB0aGF0IHJ1bnMgYWdhaW5zdCBhIGBSZWFjdGl2ZUVsZW1lbnRgXG4gICAgICogc3ViY2xhc3MsIHN1Y2ggYXMgYSBkZWNvcmF0b3IsIHRoYXQgbmVlZHMgdG8gZG8gd29yayBmb3IgZWFjaFxuICAgICAqIGluc3RhbmNlLCBzdWNoIGFzIHNldHRpbmcgdXAgYSBgUmVhY3RpdmVDb250cm9sbGVyYC5cbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY29uc3QgbXlEZWNvcmF0b3IgPSAodGFyZ2V0OiB0eXBlb2YgUmVhY3RpdmVFbGVtZW50LCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAqICAgdGFyZ2V0LmFkZEluaXRpYWxpemVyKChpbnN0YW5jZTogUmVhY3RpdmVFbGVtZW50KSA9PiB7XG4gICAgICogICAgIC8vIFRoaXMgaXMgcnVuIGR1cmluZyBjb25zdHJ1Y3Rpb24gb2YgdGhlIGVsZW1lbnRcbiAgICAgKiAgICAgbmV3IE15Q29udHJvbGxlcihpbnN0YW5jZSk7XG4gICAgICogICB9KTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBEZWNvcmF0aW5nIGEgZmllbGQgd2lsbCB0aGVuIGNhdXNlIGVhY2ggaW5zdGFuY2UgdG8gcnVuIGFuIGluaXRpYWxpemVyXG4gICAgICogdGhhdCBhZGRzIGEgY29udHJvbGxlcjpcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgICogICBAbXlEZWNvcmF0b3IgZm9vO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEluaXRpYWxpemVycyBhcmUgc3RvcmVkIHBlci1jb25zdHJ1Y3Rvci4gQWRkaW5nIGFuIGluaXRpYWxpemVyIHRvIGFcbiAgICAgKiBzdWJjbGFzcyBkb2VzIG5vdCBhZGQgaXQgdG8gYSBzdXBlcmNsYXNzLiBTaW5jZSBpbml0aWFsaXplcnMgYXJlIHJ1biBpblxuICAgICAqIGNvbnN0cnVjdG9ycywgaW5pdGlhbGl6ZXJzIHdpbGwgcnVuIGluIG9yZGVyIG9mIHRoZSBjbGFzcyBoaWVyYXJjaHksXG4gICAgICogc3RhcnRpbmcgd2l0aCBzdXBlcmNsYXNzZXMgYW5kIHByb2dyZXNzaW5nIHRvIHRoZSBpbnN0YW5jZSdzIGNsYXNzLlxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgYWRkSW5pdGlhbGl6ZXIoaW5pdGlhbGl6ZXIpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9pbml0aWFsaXplcnMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl9pbml0aWFsaXplcnMgPSBbXSk7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVycy5wdXNoKGluaXRpYWxpemVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGxpc3Qgb2YgYXR0cmlidXRlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSByZWdpc3RlcmVkIHByb3BlcnRpZXMuXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgYXR0cmlidXRlc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICAvLyBub3RlOiBwaWdneSBiYWNraW5nIG9uIHRoaXMgdG8gZW5zdXJlIHdlJ3JlIGZpbmFsaXplZC5cbiAgICAgICAgdGhpcy5maW5hbGl6ZSgpO1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gW107XG4gICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgICAgICAvLyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuZm9yRWFjaCgodiwgcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuX19hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkocCwgdik7XG4gICAgICAgICAgICBpZiAoYXR0ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAuc2V0KGF0dHIsIHApO1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaChhdHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcHJvcGVydHkgYWNjZXNzb3Igb24gdGhlIGVsZW1lbnQgcHJvdG90eXBlIGlmIG9uZSBkb2VzIG5vdCBleGlzdFxuICAgICAqIGFuZCBzdG9yZXMgYSB7QGxpbmtjb2RlIFByb3BlcnR5RGVjbGFyYXRpb259IGZvciB0aGUgcHJvcGVydHkgd2l0aCB0aGVcbiAgICAgKiBnaXZlbiBvcHRpb25zLiBUaGUgcHJvcGVydHkgc2V0dGVyIGNhbGxzIHRoZSBwcm9wZXJ0eSdzIGBoYXNDaGFuZ2VkYFxuICAgICAqIHByb3BlcnR5IG9wdGlvbiBvciB1c2VzIGEgc3RyaWN0IGlkZW50aXR5IGNoZWNrIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdFxuICAgICAqIHRvIHJlcXVlc3QgYW4gdXBkYXRlLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgbWF5IGJlIG92ZXJyaWRkZW4gdG8gY3VzdG9taXplIHByb3BlcnRpZXM7IGhvd2V2ZXIsXG4gICAgICogd2hlbiBkb2luZyBzbywgaXQncyBpbXBvcnRhbnQgdG8gY2FsbCBgc3VwZXIuY3JlYXRlUHJvcGVydHlgIHRvIGVuc3VyZVxuICAgICAqIHRoZSBwcm9wZXJ0eSBpcyBzZXR1cCBjb3JyZWN0bHkuIFRoaXMgbWV0aG9kIGNhbGxzXG4gICAgICogYGdldFByb3BlcnR5RGVzY3JpcHRvcmAgaW50ZXJuYWxseSB0byBnZXQgYSBkZXNjcmlwdG9yIHRvIGluc3RhbGwuXG4gICAgICogVG8gY3VzdG9taXplIHdoYXQgcHJvcGVydGllcyBkbyB3aGVuIHRoZXkgYXJlIGdldCBvciBzZXQsIG92ZXJyaWRlXG4gICAgICogYGdldFByb3BlcnR5RGVzY3JpcHRvcmAuIFRvIGN1c3RvbWl6ZSB0aGUgb3B0aW9ucyBmb3IgYSBwcm9wZXJ0eSxcbiAgICAgKiBpbXBsZW1lbnQgYGNyZWF0ZVByb3BlcnR5YCBsaWtlIHRoaXM6XG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIHN0YXRpYyBjcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zKSB7XG4gICAgICogICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7bXlPcHRpb246IHRydWV9KTtcbiAgICAgKiAgIHN1cGVyLmNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlUHJvcGVydHkobmFtZSwgb3B0aW9ucyA9IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBhIHN0YXRlIHByb3BlcnR5LCBmb3JjZSB0aGUgYXR0cmlidXRlIHRvIGZhbHNlLlxuICAgICAgICBpZiAob3B0aW9ucy5zdGF0ZSkge1xuICAgICAgICAgICAgLy8gQ2FzdCBhcyBhbnkgc2luY2UgdGhpcyBpcyByZWFkb25seS5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICBvcHRpb25zLmF0dHJpYnV0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdGUsIHNpbmNlIHRoaXMgY2FuIGJlIGNhbGxlZCBieSB0aGUgYEBwcm9wZXJ0eWAgZGVjb3JhdG9yIHdoaWNoXG4gICAgICAgIC8vIGlzIGNhbGxlZCBiZWZvcmUgYGZpbmFsaXplYCwgd2UgZW5zdXJlIGZpbmFsaXphdGlvbiBoYXMgYmVlbiBraWNrZWQgb2ZmLlxuICAgICAgICB0aGlzLmZpbmFsaXplKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuc2V0KG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICAvLyBEbyBub3QgZ2VuZXJhdGUgYW4gYWNjZXNzb3IgaWYgdGhlIHByb3RvdHlwZSBhbHJlYWR5IGhhcyBvbmUsIHNpbmNlXG4gICAgICAgIC8vIGl0IHdvdWxkIGJlIGxvc3Qgb3RoZXJ3aXNlIGFuZCB0aGF0IHdvdWxkIG5ldmVyIGJlIHRoZSB1c2VyJ3MgaW50ZW50aW9uO1xuICAgICAgICAvLyBJbnN0ZWFkLCB3ZSBleHBlY3QgdXNlcnMgdG8gY2FsbCBgcmVxdWVzdFVwZGF0ZWAgdGhlbXNlbHZlcyBmcm9tXG4gICAgICAgIC8vIHVzZXItZGVmaW5lZCBhY2Nlc3NvcnMuIE5vdGUgdGhhdCBpZiB0aGUgc3VwZXIgaGFzIGFuIGFjY2Vzc29yIHdlIHdpbGxcbiAgICAgICAgLy8gc3RpbGwgb3ZlcndyaXRlIGl0XG4gICAgICAgIGlmICghb3B0aW9ucy5ub0FjY2Vzc29yICYmICF0aGlzLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdHlwZW9mIG5hbWUgPT09ICdzeW1ib2wnID8gU3ltYm9sKCkgOiBgX18ke25hbWV9YDtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB0aGlzLmdldFByb3BlcnR5RGVzY3JpcHRvcihuYW1lLCBrZXksIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLnByb3RvdHlwZSwgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgY2xhc3MgZG9lc24ndCBoYXZlIGl0cyBvd24gc2V0LCBjcmVhdGUgb25lIGFuZCBpbml0aWFsaXplXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpdGggdGhlIHZhbHVlcyBpbiB0aGUgc2V0IGZyb20gdGhlIG5lYXJlc3QgYW5jZXN0b3IgY2xhc3MsIGlmIGFueS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KCdfX3JlYWN0aXZlUHJvcGVydHlLZXlzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19yZWFjdGl2ZVByb3BlcnR5S2V5cyA9IG5ldyBTZXQoKF9hID0gdGhpcy5fX3JlYWN0aXZlUHJvcGVydHlLZXlzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3JlYWN0aXZlUHJvcGVydHlLZXlzLmFkZChuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb3BlcnR5IGRlc2NyaXB0b3IgdG8gYmUgZGVmaW5lZCBvbiB0aGUgZ2l2ZW4gbmFtZWQgcHJvcGVydHkuXG4gICAgICogSWYgbm8gZGVzY3JpcHRvciBpcyByZXR1cm5lZCwgdGhlIHByb3BlcnR5IHdpbGwgbm90IGJlY29tZSBhbiBhY2Nlc3Nvci5cbiAgICAgKiBGb3IgZXhhbXBsZSxcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgICogICBzdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucykge1xuICAgICAqICAgICBjb25zdCBkZWZhdWx0RGVzY3JpcHRvciA9XG4gICAgICogICAgICAgICBzdXBlci5nZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKTtcbiAgICAgKiAgICAgY29uc3Qgc2V0dGVyID0gZGVmYXVsdERlc2NyaXB0b3Iuc2V0O1xuICAgICAqICAgICByZXR1cm4ge1xuICAgICAqICAgICAgIGdldDogZGVmYXVsdERlc2NyaXB0b3IuZ2V0LFxuICAgICAqICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAqICAgICAgICAgc2V0dGVyLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAqICAgICAgICAgLy8gY3VzdG9tIGFjdGlvbi5cbiAgICAgKiAgICAgICB9LFxuICAgICAqICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgKiAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICogICAgIH1cbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBjYXRlZ29yeSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgc3RhdGljIGdldFByb3BlcnR5RGVzY3JpcHRvcihuYW1lLCBrZXksIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNba2V5XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXNbbmFtZV07XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBvcHRpb25zIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gICAgICogVGhlc2Ugb3B0aW9ucyBhcmUgZGVmaW5lZCB3aXRoIGEgYFByb3BlcnR5RGVjbGFyYXRpb25gIHZpYSB0aGUgYHByb3BlcnRpZXNgXG4gICAgICogb2JqZWN0IG9yIHRoZSBgQHByb3BlcnR5YCBkZWNvcmF0b3IgYW5kIGFyZSByZWdpc3RlcmVkIGluXG4gICAgICogYGNyZWF0ZVByb3BlcnR5KC4uLilgLlxuICAgICAqXG4gICAgICogTm90ZSwgdGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNvbnNpZGVyZWQgXCJmaW5hbFwiIGFuZCBub3Qgb3ZlcnJpZGRlbi4gVG9cbiAgICAgKiBjdXN0b21pemUgdGhlIG9wdGlvbnMgZm9yIGEgZ2l2ZW4gcHJvcGVydHksIG92ZXJyaWRlXG4gICAgICoge0BsaW5rY29kZSBjcmVhdGVQcm9wZXJ0eX0uXG4gICAgICpcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBmaW5hbFxuICAgICAqIEBjYXRlZ29yeSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgc3RhdGljIGdldFByb3BlcnR5T3B0aW9ucyhuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLmdldChuYW1lKSB8fCBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBwcm9wZXJ0eSBhY2Nlc3NvcnMgZm9yIHJlZ2lzdGVyZWQgcHJvcGVydGllcywgc2V0cyB1cCBlbGVtZW50XG4gICAgICogc3R5bGluZywgYW5kIGVuc3VyZXMgYW55IHN1cGVyY2xhc3NlcyBhcmUgYWxzbyBmaW5hbGl6ZWQuIFJldHVybnMgdHJ1ZSBpZlxuICAgICAqIHRoZSBlbGVtZW50IHdhcyBmaW5hbGl6ZWQuXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluYWxpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGZpbmFsaXplZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzW2ZpbmFsaXplZF0gPSB0cnVlO1xuICAgICAgICAvLyBmaW5hbGl6ZSBhbnkgc3VwZXJjbGFzc2VzXG4gICAgICAgIGNvbnN0IHN1cGVyQ3RvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKTtcbiAgICAgICAgc3VwZXJDdG9yLmZpbmFsaXplKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudFByb3BlcnRpZXMgPSBuZXcgTWFwKHN1cGVyQ3Rvci5lbGVtZW50UHJvcGVydGllcyk7XG4gICAgICAgIC8vIGluaXRpYWxpemUgTWFwIHBvcHVsYXRlZCBpbiBvYnNlcnZlZEF0dHJpYnV0ZXNcbiAgICAgICAgdGhpcy5fX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIG1ha2UgYW55IHByb3BlcnRpZXNcbiAgICAgICAgLy8gTm90ZSwgb25seSBwcm9jZXNzIFwib3duXCIgcHJvcGVydGllcyBzaW5jZSB0aGlzIGVsZW1lbnQgd2lsbCBpbmhlcml0XG4gICAgICAgIC8vIGFueSBwcm9wZXJ0aWVzIGRlZmluZWQgb24gdGhlIHN1cGVyQ2xhc3MsIGFuZCBmaW5hbGl6YXRpb24gZW5zdXJlc1xuICAgICAgICAvLyB0aGUgZW50aXJlIHByb3RvdHlwZSBjaGFpbiBpcyBmaW5hbGl6ZWQuXG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ3Byb3BlcnRpZXMnLCB0aGlzKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgICAgICAgICAgLy8gc3VwcG9ydCBzeW1ib2xzIGluIHByb3BlcnRpZXMgKElFMTEgZG9lcyBub3Qgc3VwcG9ydCB0aGlzKVxuICAgICAgICAgICAgY29uc3QgcHJvcEtleXMgPSBbXG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvcHMpLFxuICAgICAgICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocHJvcHMpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIC8vIFRoaXMgZm9yL29mIGlzIG9rIGJlY2F1c2UgcHJvcEtleXMgaXMgYW4gYXJyYXlcbiAgICAgICAgICAgIGZvciAoY29uc3QgcCBvZiBwcm9wS2V5cykge1xuICAgICAgICAgICAgICAgIC8vIG5vdGUsIHVzZSBvZiBgYW55YCBpcyBkdWUgdG8gVHlwZVNjcmlwdCBsYWNrIG9mIHN1cHBvcnQgZm9yIHN5bWJvbCBpblxuICAgICAgICAgICAgICAgIC8vIGluZGV4IHR5cGVzXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVByb3BlcnR5KHAsIHByb3BzW3BdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRTdHlsZXMgPSB0aGlzLmZpbmFsaXplU3R5bGVzKHRoaXMuc3R5bGVzKTtcbiAgICAgICAgLy8gREVWIG1vZGUgd2FybmluZ3NcbiAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICBjb25zdCB3YXJuUmVtb3ZlZE9yUmVuYW1lZCA9IChuYW1lLCByZW5hbWVkID0gZmFsc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVXYXJuaW5nKHJlbmFtZWQgPyAncmVuYW1lZC1hcGknIDogJ3JlbW92ZWQtYXBpJywgYFxcYCR7bmFtZX1cXGAgaXMgaW1wbGVtZW50ZWQgb24gY2xhc3MgJHt0aGlzLm5hbWV9LiBJdCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBoYXMgYmVlbiAke3JlbmFtZWQgPyAncmVuYW1lZCcgOiAncmVtb3ZlZCd9IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGluIHRoaXMgdmVyc2lvbiBvZiBMaXRFbGVtZW50LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3YXJuUmVtb3ZlZE9yUmVuYW1lZCgnaW5pdGlhbGl6ZScpO1xuICAgICAgICAgICAgd2FyblJlbW92ZWRPclJlbmFtZWQoJ3JlcXVlc3RVcGRhdGVJbnRlcm5hbCcpO1xuICAgICAgICAgICAgd2FyblJlbW92ZWRPclJlbmFtZWQoJ19nZXRVcGRhdGVDb21wbGV0ZScsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUYWtlcyB0aGUgc3R5bGVzIHRoZSB1c2VyIHN1cHBsaWVkIHZpYSB0aGUgYHN0YXRpYyBzdHlsZXNgIHByb3BlcnR5IGFuZFxuICAgICAqIHJldHVybnMgdGhlIGFycmF5IG9mIHN0eWxlcyB0byBhcHBseSB0byB0aGUgZWxlbWVudC5cbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBpbnRlZ3JhdGUgaW50byBhIHN0eWxlIG1hbmFnZW1lbnQgc3lzdGVtLlxuICAgICAqXG4gICAgICogU3R5bGVzIGFyZSBkZWR1cGxpY2F0ZWQgcHJlc2VydmluZyB0aGUgX2xhc3RfIGluc3RhbmNlIGluIHRoZSBsaXN0LiBUaGlzXG4gICAgICogaXMgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gdG8gYXZvaWQgZHVwbGljYXRlZCBzdHlsZXMgdGhhdCBjYW4gb2NjdXJcbiAgICAgKiBlc3BlY2lhbGx5IHdoZW4gY29tcG9zaW5nIHZpYSBzdWJjbGFzc2luZy4gVGhlIGxhc3QgaXRlbSBpcyBrZXB0IHRvIHRyeVxuICAgICAqIHRvIHByZXNlcnZlIHRoZSBjYXNjYWRlIG9yZGVyIHdpdGggdGhlIGFzc3VtcHRpb24gdGhhdCBpdCdzIG1vc3QgaW1wb3J0YW50XG4gICAgICogdGhhdCBsYXN0IGFkZGVkIHN0eWxlcyBvdmVycmlkZSBwcmV2aW91cyBzdHlsZXMuXG4gICAgICpcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBjYXRlZ29yeSBzdHlsZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluYWxpemVTdHlsZXMoc3R5bGVzKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRTdHlsZXMgPSBbXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGVzKSkge1xuICAgICAgICAgICAgLy8gRGVkdXBlIHRoZSBmbGF0dGVuZWQgYXJyYXkgaW4gcmV2ZXJzZSBvcmRlciB0byBwcmVzZXJ2ZSB0aGUgbGFzdCBpdGVtcy5cbiAgICAgICAgICAgIC8vIENhc3RpbmcgdG8gQXJyYXk8dW5rbm93bj4gd29ya3MgYXJvdW5kIFRTIGVycm9yIHRoYXRcbiAgICAgICAgICAgIC8vIGFwcGVhcnMgdG8gY29tZSBmcm9tIHRyeWluZyB0byBmbGF0dGVuIGEgdHlwZSBDU1NSZXN1bHRBcnJheS5cbiAgICAgICAgICAgIGNvbnN0IHNldCA9IG5ldyBTZXQoc3R5bGVzLmZsYXQoSW5maW5pdHkpLnJldmVyc2UoKSk7XG4gICAgICAgICAgICAvLyBUaGVuIHByZXNlcnZlIG9yaWdpbmFsIG9yZGVyIGJ5IGFkZGluZyB0aGUgc2V0IGl0ZW1zIGluIHJldmVyc2Ugb3JkZXIuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHMgb2Ygc2V0KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFN0eWxlcy51bnNoaWZ0KGdldENvbXBhdGlibGVTdHlsZShzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnRTdHlsZXMucHVzaChnZXRDb21wYXRpYmxlU3R5bGUoc3R5bGVzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRTdHlsZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHByb3BlcnR5IG5hbWUgZm9yIHRoZSBnaXZlbiBhdHRyaWJ1dGUgYG5hbWVgLlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICovXG4gICAgc3RhdGljIF9fYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gb3B0aW9ucy5hdHRyaWJ1dGU7XG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGUgPT09IGZhbHNlXG4gICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgOiB0eXBlb2YgYXR0cmlidXRlID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgOiB0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgPyBuYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludGVybmFsIG9ubHkgb3ZlcnJpZGUgcG9pbnQgZm9yIGN1c3RvbWl6aW5nIHdvcmsgZG9uZSB3aGVuIGVsZW1lbnRzXG4gICAgICogYXJlIGNvbnN0cnVjdGVkLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgX2luaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5fX3VwZGF0ZVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzKSA9PiAodGhpcy5lbmFibGVVcGRhdGluZyA9IHJlcykpO1xuICAgICAgICB0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX19zYXZlSW5zdGFuY2VQcm9wZXJ0aWVzKCk7XG4gICAgICAgIC8vIGVuc3VyZXMgZmlyc3QgdXBkYXRlIHdpbGwgYmUgY2F1Z2h0IGJ5IGFuIGVhcmx5IGFjY2VzcyBvZlxuICAgICAgICAvLyBgdXBkYXRlQ29tcGxldGVgXG4gICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgICAoX2EgPSB0aGlzLmNvbnN0cnVjdG9yLl9pbml0aWFsaXplcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChpKSA9PiBpKHRoaXMpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgYFJlYWN0aXZlQ29udHJvbGxlcmAgdG8gcGFydGljaXBhdGUgaW4gdGhlIGVsZW1lbnQncyByZWFjdGl2ZVxuICAgICAqIHVwZGF0ZSBjeWNsZS4gVGhlIGVsZW1lbnQgYXV0b21hdGljYWxseSBjYWxscyBpbnRvIGFueSByZWdpc3RlcmVkXG4gICAgICogY29udHJvbGxlcnMgZHVyaW5nIGl0cyBsaWZlY3ljbGUgY2FsbGJhY2tzLlxuICAgICAqXG4gICAgICogSWYgdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkIHdoZW4gYGFkZENvbnRyb2xsZXIoKWAgaXMgY2FsbGVkLCB0aGVcbiAgICAgKiBjb250cm9sbGVyJ3MgYGhvc3RDb25uZWN0ZWQoKWAgY2FsbGJhY2sgd2lsbCBiZSBpbW1lZGlhdGVseSBjYWxsZWQuXG4gICAgICogQGNhdGVnb3J5IGNvbnRyb2xsZXJzXG4gICAgICovXG4gICAgYWRkQ29udHJvbGxlcihjb250cm9sbGVyKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICgoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl9fY29udHJvbGxlcnMgPSBbXSkpLnB1c2goY29udHJvbGxlcik7XG4gICAgICAgIC8vIElmIGEgY29udHJvbGxlciBpcyBhZGRlZCBhZnRlciB0aGUgZWxlbWVudCBoYXMgYmVlbiBjb25uZWN0ZWQsXG4gICAgICAgIC8vIGNhbGwgaG9zdENvbm5lY3RlZC4gTm90ZSwgcmUtdXNpbmcgZXhpc3RlbmNlIG9mIGByZW5kZXJSb290YCBoZXJlXG4gICAgICAgIC8vICh3aGljaCBpcyBzZXQgaW4gY29ubmVjdGVkQ2FsbGJhY2spIHRvIGF2b2lkIHRoZSBuZWVkIHRvIHRyYWNrIGFcbiAgICAgICAgLy8gZmlyc3QgY29ubmVjdGVkIHN0YXRlLlxuICAgICAgICBpZiAodGhpcy5yZW5kZXJSb290ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgKF9iID0gY29udHJvbGxlci5ob3N0Q29ubmVjdGVkKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChjb250cm9sbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgYFJlYWN0aXZlQ29udHJvbGxlcmAgZnJvbSB0aGUgZWxlbWVudC5cbiAgICAgKiBAY2F0ZWdvcnkgY29udHJvbGxlcnNcbiAgICAgKi9cbiAgICByZW1vdmVDb250cm9sbGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBOb3RlLCBpZiB0aGUgaW5kZXhPZiBpcyAtMSwgdGhlID4+PiB3aWxsIGZsaXAgdGhlIHNpZ24gd2hpY2ggbWFrZXMgdGhlXG4gICAgICAgIC8vIHNwbGljZSBkbyBub3RoaW5nLlxuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zcGxpY2UodGhpcy5fX2NvbnRyb2xsZXJzLmluZGV4T2YoY29udHJvbGxlcikgPj4+IDAsIDEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaXhlcyBhbnkgcHJvcGVydGllcyBzZXQgb24gdGhlIGluc3RhbmNlIGJlZm9yZSB1cGdyYWRlIHRpbWUuXG4gICAgICogT3RoZXJ3aXNlIHRoZXNlIHdvdWxkIHNoYWRvdyB0aGUgYWNjZXNzb3IgYW5kIGJyZWFrIHRoZXNlIHByb3BlcnRpZXMuXG4gICAgICogVGhlIHByb3BlcnRpZXMgYXJlIHN0b3JlZCBpbiBhIE1hcCB3aGljaCBpcyBwbGF5ZWQgYmFjayBhZnRlciB0aGVcbiAgICAgKiBjb25zdHJ1Y3RvciBydW5zLiBOb3RlLCBvbiB2ZXJ5IG9sZCB2ZXJzaW9ucyBvZiBTYWZhcmkgKDw9OSkgb3IgQ2hyb21lXG4gICAgICogKDw9NDEpLCBwcm9wZXJ0aWVzIGNyZWF0ZWQgZm9yIG5hdGl2ZSBwbGF0Zm9ybSBwcm9wZXJ0aWVzIGxpa2UgKGBpZGAgb3JcbiAgICAgKiBgbmFtZWApIG1heSBub3QgaGF2ZSBkZWZhdWx0IHZhbHVlcyBzZXQgaW4gdGhlIGVsZW1lbnQgY29uc3RydWN0b3IuIE9uXG4gICAgICogdGhlc2UgYnJvd3NlcnMgbmF0aXZlIHByb3BlcnRpZXMgYXBwZWFyIG9uIGluc3RhbmNlcyBhbmQgdGhlcmVmb3JlIHRoZWlyXG4gICAgICogZGVmYXVsdCB2YWx1ZSB3aWxsIG92ZXJ3cml0ZSBhbnkgZWxlbWVudCBkZWZhdWx0IChlLmcuIGlmIHRoZSBlbGVtZW50IHNldHNcbiAgICAgKiB0aGlzLmlkID0gJ2lkJyBpbiB0aGUgY29uc3RydWN0b3IsIHRoZSAnaWQnIHdpbGwgYmVjb21lICcnIHNpbmNlIHRoaXMgaXNcbiAgICAgKiB0aGUgbmF0aXZlIHBsYXRmb3JtIGRlZmF1bHQpLlxuICAgICAqL1xuICAgIF9fc2F2ZUluc3RhbmNlUHJvcGVydGllcygpIHtcbiAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKChfdiwgcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzLnNldChwLCB0aGlzW3BdKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpc1twXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5vZGUgaW50byB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgcmVuZGVyIGFuZCBieSBkZWZhdWx0XG4gICAgICogY3JlYXRlcyBhbmQgcmV0dXJucyBhbiBvcGVuIHNoYWRvd1Jvb3QuIEltcGxlbWVudCB0byBjdXN0b21pemUgd2hlcmUgdGhlXG4gICAgICogZWxlbWVudCdzIERPTSBpcyByZW5kZXJlZC4gRm9yIGV4YW1wbGUsIHRvIHJlbmRlciBpbnRvIHRoZSBlbGVtZW50J3NcbiAgICAgKiBjaGlsZE5vZGVzLCByZXR1cm4gYHRoaXNgLlxuICAgICAqXG4gICAgICogQHJldHVybiBSZXR1cm5zIGEgbm9kZSBpbnRvIHdoaWNoIHRvIHJlbmRlci5cbiAgICAgKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gICAgICovXG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCByZW5kZXJSb290ID0gKF9hID0gdGhpcy5zaGFkb3dSb290KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB0aGlzLmF0dGFjaFNoYWRvdyh0aGlzLmNvbnN0cnVjdG9yLnNoYWRvd1Jvb3RPcHRpb25zKTtcbiAgICAgICAgYWRvcHRTdHlsZXMocmVuZGVyUm9vdCwgdGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50U3R5bGVzKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlclJvb3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9uIGZpcnN0IGNvbm5lY3Rpb24sIGNyZWF0ZXMgdGhlIGVsZW1lbnQncyByZW5kZXJSb290LCBzZXRzIHVwXG4gICAgICogZWxlbWVudCBzdHlsaW5nLCBhbmQgZW5hYmxlcyB1cGRhdGluZy5cbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gY3JlYXRlIHJlbmRlclJvb3QgYmVmb3JlIGZpcnN0IHVwZGF0ZS5cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyUm9vdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJvb3QgPSB0aGlzLmNyZWF0ZVJlbmRlclJvb3QoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuYWJsZVVwZGF0aW5nKHRydWUpO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChjKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGMuaG9zdENvbm5lY3RlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoYyk7IH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBOb3RlLCB0aGlzIG1ldGhvZCBzaG91bGQgYmUgY29uc2lkZXJlZCBmaW5hbCBhbmQgbm90IG92ZXJyaWRkZW4uIEl0IGlzXG4gICAgICogb3ZlcnJpZGRlbiBvbiB0aGUgZWxlbWVudCBpbnN0YW5jZSB3aXRoIGEgZnVuY3Rpb24gdGhhdCB0cmlnZ2VycyB0aGUgZmlyc3RcbiAgICAgKiB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBlbmFibGVVcGRhdGluZyhfcmVxdWVzdGVkVXBkYXRlKSB7IH1cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgZm9yIGBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpYCBpbiBleHRlbnNpb25zIHdoaWxlXG4gICAgICogcmVzZXJ2aW5nIHRoZSBwb3NzaWJpbGl0eSBvZiBtYWtpbmcgbm9uLWJyZWFraW5nIGZlYXR1cmUgYWRkaXRpb25zXG4gICAgICogd2hlbiBkaXNjb25uZWN0aW5nIGF0IHNvbWUgcG9pbnQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3REaXNjb25uZWN0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3luY2hyb25pemVzIHByb3BlcnR5IHZhbHVlcyB3aGVuIGF0dHJpYnV0ZXMgY2hhbmdlLlxuICAgICAqXG4gICAgICogU3BlY2lmaWNhbGx5LCB3aGVuIGFuIGF0dHJpYnV0ZSBpcyBzZXQsIHRoZSBjb3JyZXNwb25kaW5nIHByb3BlcnR5IGlzIHNldC5cbiAgICAgKiBZb3Ugc2hvdWxkIHJhcmVseSBuZWVkIHRvIGltcGxlbWVudCB0aGlzIGNhbGxiYWNrLiBJZiB0aGlzIG1ldGhvZCBpc1xuICAgICAqIG92ZXJyaWRkZW4sIGBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgX29sZCwgdmFsdWUpYCBtdXN0IGJlXG4gICAgICogY2FsbGVkLlxuICAgICAqXG4gICAgICogU2VlIFt1c2luZyB0aGUgbGlmZWN5Y2xlIGNhbGxiYWNrc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvV2ViX0NvbXBvbmVudHMvVXNpbmdfY3VzdG9tX2VsZW1lbnRzI3VzaW5nX3RoZV9saWZlY3ljbGVfY2FsbGJhY2tzKVxuICAgICAqIG9uIE1ETiBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AuXG4gICAgICogQGNhdGVnb3J5IGF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgX29sZCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fJGF0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICBfX3Byb3BlcnR5VG9BdHRyaWJ1dGUobmFtZSwgdmFsdWUsIG9wdGlvbnMgPSBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbikge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5jb25zdHJ1Y3Rvci5fX2F0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKGF0dHIgIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLnJlZmxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvQXR0cmlidXRlID0gKF9iID0gKF9hID0gb3B0aW9ucy5jb252ZXJ0ZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b0F0dHJpYnV0ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogZGVmYXVsdENvbnZlcnRlci50b0F0dHJpYnV0ZTtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IHRvQXR0cmlidXRlKHZhbHVlLCBvcHRpb25zLnR5cGUpO1xuICAgICAgICAgICAgaWYgKERFVl9NT0RFICYmXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5lbmFibGVkV2FybmluZ3MuaW5kZXhPZignbWlncmF0aW9uJykgPj0gMCAmJlxuICAgICAgICAgICAgICAgIGF0dHJWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaXNzdWVXYXJuaW5nKCd1bmRlZmluZWQtYXR0cmlidXRlLXZhbHVlJywgYFRoZSBhdHRyaWJ1dGUgdmFsdWUgZm9yIHRoZSAke25hbWV9IHByb3BlcnR5IGlzIGAgK1xuICAgICAgICAgICAgICAgICAgICBgdW5kZWZpbmVkIG9uIGVsZW1lbnQgJHt0aGlzLmxvY2FsTmFtZX0uIFRoZSBhdHRyaWJ1dGUgd2lsbCBiZSBgICtcbiAgICAgICAgICAgICAgICAgICAgYHJlbW92ZWQsIGJ1dCBpbiB0aGUgcHJldmlvdXMgdmVyc2lvbiBvZiBcXGBSZWFjdGl2ZUVsZW1lbnRcXGAsIGAgK1xuICAgICAgICAgICAgICAgICAgICBgdGhlIGF0dHJpYnV0ZSB3b3VsZCBub3QgaGF2ZSBjaGFuZ2VkLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVHJhY2sgaWYgdGhlIHByb3BlcnR5IGlzIGJlaW5nIHJlZmxlY3RlZCB0byBhdm9pZFxuICAgICAgICAgICAgLy8gc2V0dGluZyB0aGUgcHJvcGVydHkgYWdhaW4gdmlhIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgLiBOb3RlOlxuICAgICAgICAgICAgLy8gMS4gdGhpcyB0YWtlcyBhZHZhbnRhZ2Ugb2YgdGhlIGZhY3QgdGhhdCB0aGUgY2FsbGJhY2sgaXMgc3luY2hyb25vdXMuXG4gICAgICAgICAgICAvLyAyLiB3aWxsIGJlaGF2ZSBpbmNvcnJlY3RseSBpZiBtdWx0aXBsZSBhdHRyaWJ1dGVzIGFyZSBpbiB0aGUgcmVhY3Rpb25cbiAgICAgICAgICAgIC8vIHN0YWNrIGF0IHRpbWUgb2YgY2FsbGluZy4gSG93ZXZlciwgc2luY2Ugd2UgcHJvY2VzcyBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAvLyBpbiBgdXBkYXRlYCB0aGlzIHNob3VsZCBub3QgYmUgcG9zc2libGUgKG9yIGFuIGV4dHJlbWUgY29ybmVyIGNhc2VcbiAgICAgICAgICAgIC8vIHRoYXQgd2UnZCBsaWtlIHRvIGRpc2NvdmVyKS5cbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IG5hbWU7XG4gICAgICAgICAgICBpZiAoYXR0clZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIG5vdCByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgXyRhdHRyaWJ1dGVUb1Byb3BlcnR5KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICBjb25zdCBjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgLy8gTm90ZSwgaGludCB0aGlzIGFzIGFuIGBBdHRyaWJ1dGVNYXBgIHNvIGNsb3N1cmUgY2xlYXJseSB1bmRlcnN0YW5kc1xuICAgICAgICAvLyB0aGUgdHlwZTsgaXQgaGFzIGlzc3VlcyB3aXRoIHRyYWNraW5nIHR5cGVzIHRocm91Z2ggc3RhdGljc1xuICAgICAgICBjb25zdCBwcm9wTmFtZSA9IGN0b3IuX19hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwLmdldChuYW1lKTtcbiAgICAgICAgLy8gVXNlIHRyYWNraW5nIGluZm8gdG8gYXZvaWQgcmVmbGVjdGluZyBhIHByb3BlcnR5IHZhbHVlIHRvIGFuIGF0dHJpYnV0ZVxuICAgICAgICAvLyBpZiBpdCB3YXMganVzdCBzZXQgYmVjYXVzZSB0aGUgYXR0cmlidXRlIGNoYW5nZWQuXG4gICAgICAgIGlmIChwcm9wTmFtZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgIT09IHByb3BOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gY3Rvci5nZXRQcm9wZXJ0eU9wdGlvbnMocHJvcE5hbWUpO1xuICAgICAgICAgICAgY29uc3QgY29udmVydGVyID0gb3B0aW9ucy5jb252ZXJ0ZXI7XG4gICAgICAgICAgICBjb25zdCBmcm9tQXR0cmlidXRlID0gKF9jID0gKF9iID0gKF9hID0gY29udmVydGVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZnJvbUF0dHJpYnV0ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogKHR5cGVvZiBjb252ZXJ0ZXIgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/IGNvbnZlcnRlclxuICAgICAgICAgICAgICAgIDogbnVsbCkpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IGRlZmF1bHRDb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZTtcbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IHByb3BOYW1lO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIHRoaXNbcHJvcE5hbWVdID0gZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgb3B0aW9ucy50eXBlKTtcbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgbm90IHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIGFuIHVwZGF0ZSB3aGljaCBpcyBwcm9jZXNzZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgc2hvdWxkIGJlIGNhbGxlZFxuICAgICAqIHdoZW4gYW4gZWxlbWVudCBzaG91bGQgdXBkYXRlIGJhc2VkIG9uIHNvbWUgc3RhdGUgbm90IHRyaWdnZXJlZCBieSBzZXR0aW5nXG4gICAgICogYSByZWFjdGl2ZSBwcm9wZXJ0eS4gSW4gdGhpcyBjYXNlLCBwYXNzIG5vIGFyZ3VtZW50cy4gSXQgc2hvdWxkIGFsc28gYmVcbiAgICAgKiBjYWxsZWQgd2hlbiBtYW51YWxseSBpbXBsZW1lbnRpbmcgYSBwcm9wZXJ0eSBzZXR0ZXIuIEluIHRoaXMgY2FzZSwgcGFzcyB0aGVcbiAgICAgKiBwcm9wZXJ0eSBgbmFtZWAgYW5kIGBvbGRWYWx1ZWAgdG8gZW5zdXJlIHRoYXQgYW55IGNvbmZpZ3VyZWQgcHJvcGVydHlcbiAgICAgKiBvcHRpb25zIGFyZSBob25vcmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgbmFtZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9sZFZhbHVlIG9sZCB2YWx1ZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9wdGlvbnMgcHJvcGVydHkgb3B0aW9ucyB0byB1c2UgaW5zdGVhZCBvZiB0aGUgcHJldmlvdXNseVxuICAgICAqICAgICBjb25maWd1cmVkIG9wdGlvbnNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHNob3VsZFJlcXVlc3RVcGRhdGUgPSB0cnVlO1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcHJvcGVydHkga2V5LCBwZXJmb3JtIHByb3BlcnR5IHVwZGF0ZSBzdGVwcy5cbiAgICAgICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9ucyA9XG4gICAgICAgICAgICAgICAgb3B0aW9ucyB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmdldFByb3BlcnR5T3B0aW9ucyhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGhhc0NoYW5nZWQgPSBvcHRpb25zLmhhc0NoYW5nZWQgfHwgbm90RXF1YWw7XG4gICAgICAgICAgICBpZiAoaGFzQ2hhbmdlZCh0aGlzW25hbWVdLCBvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzLnNldChuYW1lLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZCB0byByZWZsZWN0aW5nIHByb3BlcnRpZXMgc2V0LlxuICAgICAgICAgICAgICAgIC8vIE5vdGUsIGl0J3MgaW1wb3J0YW50IHRoYXQgZXZlcnkgY2hhbmdlIGhhcyBhIGNoYW5jZSB0byBhZGQgdGhlXG4gICAgICAgICAgICAgICAgLy8gcHJvcGVydHkgdG8gYF9yZWZsZWN0aW5nUHJvcGVydGllc2AuIFRoaXMgZW5zdXJlcyBzZXR0aW5nXG4gICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlICsgcHJvcGVydHkgcmVmbGVjdHMgY29ycmVjdGx5LlxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnJlZmxlY3QgPT09IHRydWUgJiYgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSAhPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMuc2V0KG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEFib3J0IHRoZSByZXF1ZXN0IGlmIHRoZSBwcm9wZXJ0eSBzaG91bGQgbm90IGJlIGNvbnNpZGVyZWQgY2hhbmdlZC5cbiAgICAgICAgICAgICAgICBzaG91bGRSZXF1ZXN0VXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzVXBkYXRlUGVuZGluZyAmJiBzaG91bGRSZXF1ZXN0VXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9fdXBkYXRlUHJvbWlzZSA9IHRoaXMuX19lbnF1ZXVlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm90ZSwgc2luY2UgdGhpcyBubyBsb25nZXIgcmV0dXJucyBhIHByb21pc2UsIGluIGRldiBtb2RlIHdlIHJldHVybiBhXG4gICAgICAgIC8vIHRoZW5hYmxlIHdoaWNoIHdhcm5zIGlmIGl0J3MgY2FsbGVkLlxuICAgICAgICByZXR1cm4gREVWX01PREVcbiAgICAgICAgICAgID8gcmVxdWVzdFVwZGF0ZVRoZW5hYmxlKHRoaXMubG9jYWxOYW1lKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIGVsZW1lbnQgdG8gYXN5bmNocm9ub3VzbHkgdXBkYXRlLlxuICAgICAqL1xuICAgIGFzeW5jIF9fZW5xdWV1ZVVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGFueSBwcmV2aW91cyB1cGRhdGUgaGFzIHJlc29sdmVkIGJlZm9yZSB1cGRhdGluZy5cbiAgICAgICAgICAgIC8vIFRoaXMgYGF3YWl0YCBhbHNvIGVuc3VyZXMgdGhhdCBwcm9wZXJ0eSBjaGFuZ2VzIGFyZSBiYXRjaGVkLlxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX3VwZGF0ZVByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFJlZmlyZSBhbnkgcHJldmlvdXMgZXJyb3JzIGFzeW5jIHNvIHRoZXkgZG8gbm90IGRpc3J1cHQgdGhlIHVwZGF0ZVxuICAgICAgICAgICAgLy8gY3ljbGUuIEVycm9ycyBhcmUgcmVmaXJlZCBzbyBkZXZlbG9wZXJzIGhhdmUgYSBjaGFuY2UgdG8gb2JzZXJ2ZVxuICAgICAgICAgICAgLy8gdGhlbSwgYW5kIHRoaXMgY2FuIGJlIGRvbmUgYnkgaW1wbGVtZW50aW5nXG4gICAgICAgICAgICAvLyBgd2luZG93Lm9udW5oYW5kbGVkcmVqZWN0aW9uYC5cbiAgICAgICAgICAgIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICAgICAgLy8gSWYgYHNjaGVkdWxlVXBkYXRlYCByZXR1cm5zIGEgUHJvbWlzZSwgd2UgYXdhaXQgaXQuIFRoaXMgaXMgZG9uZSB0b1xuICAgICAgICAvLyBlbmFibGUgY29vcmRpbmF0aW5nIHVwZGF0ZXMgd2l0aCBhIHNjaGVkdWxlci4gTm90ZSwgdGhlIHJlc3VsdCBpc1xuICAgICAgICAvLyBjaGVja2VkIHRvIGF2b2lkIGRlbGF5aW5nIGFuIGFkZGl0aW9uYWwgbWljcm90YXNrIHVubGVzcyB3ZSBuZWVkIHRvLlxuICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gIXRoaXMuaXNVcGRhdGVQZW5kaW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZXMgYW4gZWxlbWVudCB1cGRhdGUuIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2hhbmdlIHRoZVxuICAgICAqIHRpbWluZyBvZiB1cGRhdGVzIGJ5IHJldHVybmluZyBhIFByb21pc2UuIFRoZSB1cGRhdGUgd2lsbCBhd2FpdCB0aGVcbiAgICAgKiByZXR1cm5lZCBQcm9taXNlLCBhbmQgeW91IHNob3VsZCByZXNvbHZlIHRoZSBQcm9taXNlIHRvIGFsbG93IHRoZSB1cGRhdGVcbiAgICAgKiB0byBwcm9jZWVkLiBJZiB0aGlzIG1ldGhvZCBpcyBvdmVycmlkZGVuLCBgc3VwZXIuc2NoZWR1bGVVcGRhdGUoKWBcbiAgICAgKiBtdXN0IGJlIGNhbGxlZC5cbiAgICAgKlxuICAgICAqIEZvciBpbnN0YW5jZSwgdG8gc2NoZWR1bGUgdXBkYXRlcyB0byBvY2N1ciBqdXN0IGJlZm9yZSB0aGUgbmV4dCBmcmFtZTpcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogb3ZlcnJpZGUgcHJvdGVjdGVkIGFzeW5jIHNjaGVkdWxlVXBkYXRlKCk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgICAqICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZXNvbHZlKCkpKTtcbiAgICAgKiAgIHN1cGVyLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgc2NoZWR1bGVVcGRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlcmZvcm1VcGRhdGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYW4gZWxlbWVudCB1cGRhdGUuIE5vdGUsIGlmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZVxuICAgICAqIHVwZGF0ZSwgYGZpcnN0VXBkYXRlZGAgYW5kIGB1cGRhdGVkYCB3aWxsIG5vdCBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBDYWxsIGBwZXJmb3JtVXBkYXRlKClgIHRvIGltbWVkaWF0ZWx5IHByb2Nlc3MgYSBwZW5kaW5nIHVwZGF0ZS4gVGhpcyBzaG91bGRcbiAgICAgKiBnZW5lcmFsbHkgbm90IGJlIG5lZWRlZCwgYnV0IGl0IGNhbiBiZSBkb25lIGluIHJhcmUgY2FzZXMgd2hlbiB5b3UgbmVlZCB0b1xuICAgICAqIHVwZGF0ZSBzeW5jaHJvbm91c2x5LlxuICAgICAqXG4gICAgICogTm90ZTogVG8gZW5zdXJlIGBwZXJmb3JtVXBkYXRlKClgIHN5bmNocm9ub3VzbHkgY29tcGxldGVzIGEgcGVuZGluZyB1cGRhdGUsXG4gICAgICogaXQgc2hvdWxkIG5vdCBiZSBvdmVycmlkZGVuLiBJbiBMaXRFbGVtZW50IDIueCBpdCB3YXMgc3VnZ2VzdGVkIHRvIG92ZXJyaWRlXG4gICAgICogYHBlcmZvcm1VcGRhdGUoKWAgdG8gYWxzbyBjdXN0b21pemluZyB1cGRhdGUgc2NoZWR1bGluZy4gSW5zdGVhZCwgeW91IHNob3VsZCBub3dcbiAgICAgKiBvdmVycmlkZSBgc2NoZWR1bGVVcGRhdGUoKWAuIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIExpdEVsZW1lbnQgMi54LFxuICAgICAqIHNjaGVkdWxpbmcgdXBkYXRlcyB2aWEgYHBlcmZvcm1VcGRhdGUoKWAgY29udGludWVzIHRvIHdvcmssIGJ1dCB3aWxsIG1ha2VcbiAgICAgKiBhbHNvIGNhbGxpbmcgYHBlcmZvcm1VcGRhdGUoKWAgdG8gc3luY2hyb25vdXNseSBwcm9jZXNzIHVwZGF0ZXMgZGlmZmljdWx0LlxuICAgICAqXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBwZXJmb3JtVXBkYXRlKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAvLyBBYm9ydCBhbnkgdXBkYXRlIGlmIG9uZSBpcyBub3QgcGVuZGluZyB3aGVuIHRoaXMgaXMgY2FsbGVkLlxuICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgYHBlcmZvcm1VcGRhdGVgIGlzIGNhbGxlZCBlYXJseSB0byBcImZsdXNoXCJcbiAgICAgICAgLy8gdGhlIHVwZGF0ZS5cbiAgICAgICAgaWYgKCF0aGlzLmlzVXBkYXRlUGVuZGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7IGtpbmQ6ICd1cGRhdGUnIH0pO1xuICAgICAgICAvLyBjcmVhdGUgcmVuZGVyUm9vdCBiZWZvcmUgZmlyc3QgdXBkYXRlLlxuICAgICAgICBpZiAoIXRoaXMuaGFzVXBkYXRlZCkge1xuICAgICAgICAgICAgLy8gUHJvZHVjZSB3YXJuaW5nIGlmIGFueSBjbGFzcyBwcm9wZXJ0aWVzIGFyZSBzaGFkb3dlZCBieSBjbGFzcyBmaWVsZHNcbiAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYWRvd2VkUHJvcGVydGllcyA9IFtdO1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29uc3RydWN0b3IuX19yZWFjdGl2ZVByb3BlcnR5S2V5cykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwKSAmJiAhKChfYSA9IHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5oYXMocCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dlZFByb3BlcnRpZXMucHVzaChwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChzaGFkb3dlZFByb3BlcnRpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIG9uIGVsZW1lbnQgJHt0aGlzLmxvY2FsTmFtZX0gd2lsbCBub3QgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgdHJpZ2dlciB1cGRhdGVzIGFzIGV4cGVjdGVkIGJlY2F1c2UgdGhleSBhcmUgc2V0IHVzaW5nIGNsYXNzIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGZpZWxkczogJHtzaGFkb3dlZFByb3BlcnRpZXMuam9pbignLCAnKX0uIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYE5hdGl2ZSBjbGFzcyBmaWVsZHMgYW5kIHNvbWUgY29tcGlsZWQgb3V0cHV0IHdpbGwgb3ZlcndyaXRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGFjY2Vzc29ycyB1c2VkIGZvciBkZXRlY3RpbmcgY2hhbmdlcy4gU2VlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGh0dHBzOi8vbGl0LmRldi9tc2cvY2xhc3MtZmllbGQtc2hhZG93aW5nIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGZvciBtb3JlIGluZm9ybWF0aW9uLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBNaXhpbiBpbnN0YW5jZSBwcm9wZXJ0aWVzIG9uY2UsIGlmIHRoZXkgZXhpc3QuXG4gICAgICAgIGlmICh0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3IgbG9vcHNcbiAgICAgICAgICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzLmZvckVhY2goKHYsIHApID0+ICh0aGlzW3BdID0gdikpO1xuICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRQcm9wZXJ0aWVzID0gdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gdGhpcy5zaG91bGRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3RVcGRhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fbWFya1VwZGF0ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gUHJldmVudCBgZmlyc3RVcGRhdGVkYCBhbmQgYHVwZGF0ZWRgIGZyb20gcnVubmluZyB3aGVuIHRoZXJlJ3MgYW5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBleGNlcHRpb24uXG4gICAgICAgICAgICBzaG91bGRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBlbGVtZW50IGNhbiBhY2NlcHQgYWRkaXRpb25hbCB1cGRhdGVzIGFmdGVyIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIHRoaXMuX19tYXJrVXBkYXRlZCgpO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgdXBkYXRlIGlzIG5vIGxvbmdlciBjb25zaWRlcmVkIHBlbmRpbmcgYW5kIGZ1cnRoZXIgdXBkYXRlcyBhcmUgbm93IGFsbG93ZWQuXG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuXyRkaWRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgYmVmb3JlIGB1cGRhdGUoKWAgdG8gY29tcHV0ZSB2YWx1ZXMgbmVlZGVkIGR1cmluZyB0aGUgdXBkYXRlLlxuICAgICAqXG4gICAgICogSW1wbGVtZW50IGB3aWxsVXBkYXRlYCB0byBjb21wdXRlIHByb3BlcnR5IHZhbHVlcyB0aGF0IGRlcGVuZCBvbiBvdGhlclxuICAgICAqIHByb3BlcnRpZXMgYW5kIGFyZSB1c2VkIGluIHRoZSByZXN0IG9mIHRoZSB1cGRhdGUgcHJvY2Vzcy5cbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogd2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAqICAgLy8gb25seSBuZWVkIHRvIGNoZWNrIGNoYW5nZWQgcHJvcGVydGllcyBmb3IgYW4gZXhwZW5zaXZlIGNvbXB1dGF0aW9uLlxuICAgICAqICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcygnZmlyc3ROYW1lJykgfHwgY2hhbmdlZFByb3BlcnRpZXMuaGFzKCdsYXN0TmFtZScpKSB7XG4gICAgICogICAgIHRoaXMuc2hhID0gY29tcHV0ZVNIQShgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWApO1xuICAgICAqICAgfVxuICAgICAqIH1cbiAgICAgKlxuICAgICAqIHJlbmRlcigpIHtcbiAgICAgKiAgIHJldHVybiBodG1sYFNIQTogJHt0aGlzLnNoYX1gO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgd2lsbFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpIHsgfVxuICAgIC8vIE5vdGUsIHRoaXMgaXMgYW4gb3ZlcnJpZGUgcG9pbnQgZm9yIHBvbHlmaWxsLXN1cHBvcnQuXG4gICAgLy8gQGludGVybmFsXG4gICAgXyRkaWRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChjKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGMuaG9zdFVwZGF0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzVXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgaWYgKERFVl9NT0RFICYmXG4gICAgICAgICAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyAmJlxuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5lbmFibGVkV2FybmluZ3MuaW5kZXhPZignY2hhbmdlLWluLXVwZGF0ZScpID49IDApIHtcbiAgICAgICAgICAgIGlzc3VlV2FybmluZygnY2hhbmdlLWluLXVwZGF0ZScsIGBFbGVtZW50ICR7dGhpcy5sb2NhbE5hbWV9IHNjaGVkdWxlZCBhbiB1cGRhdGUgYCArXG4gICAgICAgICAgICAgICAgYChnZW5lcmFsbHkgYmVjYXVzZSBhIHByb3BlcnR5IHdhcyBzZXQpIGAgK1xuICAgICAgICAgICAgICAgIGBhZnRlciBhbiB1cGRhdGUgY29tcGxldGVkLCBjYXVzaW5nIGEgbmV3IHVwZGF0ZSB0byBiZSBzY2hlZHVsZWQuIGAgK1xuICAgICAgICAgICAgICAgIGBUaGlzIGlzIGluZWZmaWNpZW50IGFuZCBzaG91bGQgYmUgYXZvaWRlZCB1bmxlc3MgdGhlIG5leHQgdXBkYXRlIGAgK1xuICAgICAgICAgICAgICAgIGBjYW4gb25seSBiZSBzY2hlZHVsZWQgYXMgYSBzaWRlIGVmZmVjdCBvZiB0aGUgcHJldmlvdXMgdXBkYXRlLmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9fbWFya1VwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBlbGVtZW50IGhhcyBjb21wbGV0ZWQgdXBkYXRpbmcuXG4gICAgICogVGhlIFByb21pc2UgdmFsdWUgaXMgYSBib29sZWFuIHRoYXQgaXMgYHRydWVgIGlmIHRoZSBlbGVtZW50IGNvbXBsZXRlZCB0aGVcbiAgICAgKiB1cGRhdGUgd2l0aG91dCB0cmlnZ2VyaW5nIGFub3RoZXIgdXBkYXRlLiBUaGUgUHJvbWlzZSByZXN1bHQgaXMgYGZhbHNlYCBpZlxuICAgICAqIGEgcHJvcGVydHkgd2FzIHNldCBpbnNpZGUgYHVwZGF0ZWQoKWAuIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBhblxuICAgICAqIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyB0aGUgdXBkYXRlLlxuICAgICAqXG4gICAgICogVG8gYXdhaXQgYWRkaXRpb25hbCBhc3luY2hyb25vdXMgd29yaywgb3ZlcnJpZGUgdGhlIGBnZXRVcGRhdGVDb21wbGV0ZWBcbiAgICAgKiBtZXRob2QuIEZvciBleGFtcGxlLCBpdCBpcyBzb21ldGltZXMgdXNlZnVsIHRvIGF3YWl0IGEgcmVuZGVyZWQgZWxlbWVudFxuICAgICAqIGJlZm9yZSBmdWxmaWxsaW5nIHRoaXMgUHJvbWlzZS4gVG8gZG8gdGhpcywgZmlyc3QgYXdhaXRcbiAgICAgKiBgc3VwZXIuZ2V0VXBkYXRlQ29tcGxldGUoKWAsIHRoZW4gYW55IHN1YnNlcXVlbnQgc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSBvZiBhIGJvb2xlYW4gdGhhdCByZXNvbHZlcyB0byB0cnVlIGlmIHRoZSB1cGRhdGUgY29tcGxldGVkXG4gICAgICogICAgIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS5cbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGdldCB1cGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlQ29tcGxldGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgcG9pbnQgZm9yIHRoZSBgdXBkYXRlQ29tcGxldGVgIHByb21pc2UuXG4gICAgICpcbiAgICAgKiBJdCBpcyBub3Qgc2FmZSB0byBvdmVycmlkZSB0aGUgYHVwZGF0ZUNvbXBsZXRlYCBnZXR0ZXIgZGlyZWN0bHkgZHVlIHRvIGFcbiAgICAgKiBsaW1pdGF0aW9uIGluIFR5cGVTY3JpcHQgd2hpY2ggbWVhbnMgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGNhbGwgYVxuICAgICAqIHN1cGVyY2xhc3MgZ2V0dGVyIChlLmcuIGBzdXBlci51cGRhdGVDb21wbGV0ZS50aGVuKC4uLilgKSB3aGVuIHRoZSB0YXJnZXRcbiAgICAgKiBsYW5ndWFnZSBpcyBFUzUgKGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzM4KS5cbiAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgb3ZlcnJpZGRlbiBpbnN0ZWFkLiBGb3IgZXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgICogICBvdmVycmlkZSBhc3luYyBnZXRVcGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgKiAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VwZXIuZ2V0VXBkYXRlQ29tcGxldGUoKTtcbiAgICAgKiAgICAgYXdhaXQgdGhpcy5fbXlDaGlsZC51cGRhdGVDb21wbGV0ZTtcbiAgICAgKiAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSBvZiBhIGJvb2xlYW4gdGhhdCByZXNvbHZlcyB0byB0cnVlIGlmIHRoZSB1cGRhdGUgY29tcGxldGVkXG4gICAgICogICAgIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS5cbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGdldFVwZGF0ZUNvbXBsZXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3VwZGF0ZVByb21pc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnRyb2xzIHdoZXRoZXIgb3Igbm90IGB1cGRhdGUoKWAgc2hvdWxkIGJlIGNhbGxlZCB3aGVuIHRoZSBlbGVtZW50IHJlcXVlc3RzXG4gICAgICogYW4gdXBkYXRlLiBCeSBkZWZhdWx0LCB0aGlzIG1ldGhvZCBhbHdheXMgcmV0dXJucyBgdHJ1ZWAsIGJ1dCB0aGlzIGNhbiBiZVxuICAgICAqIGN1c3RvbWl6ZWQgdG8gY29udHJvbCB3aGVuIHRvIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHNob3VsZFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzLlxuICAgICAqIEl0IGNhbiBiZSBvdmVycmlkZGVuIHRvIHJlbmRlciBhbmQga2VlcCB1cGRhdGVkIGVsZW1lbnQgRE9NLlxuICAgICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyXG4gICAgICogYW5vdGhlciB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICB1cGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmICh0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yXG4gICAgICAgICAgICAvLyBsb29wcyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMuZm9yRWFjaCgodiwgaykgPT4gdGhpcy5fX3Byb3BlcnR5VG9BdHRyaWJ1dGUoaywgdGhpc1trXSwgdikpO1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19tYXJrVXBkYXRlZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW5ldmVyIHRoZSBlbGVtZW50IGlzIHVwZGF0ZWQuIEltcGxlbWVudCB0byBwZXJmb3JtXG4gICAgICogcG9zdC11cGRhdGluZyB0YXNrcyB2aWEgRE9NIEFQSXMsIGZvciBleGFtcGxlLCBmb2N1c2luZyBhbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgdXBkYXRlZChfY2hhbmdlZFByb3BlcnRpZXMpIHsgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBmaXJzdCB1cGRhdGVkLiBJbXBsZW1lbnQgdG8gcGVyZm9ybSBvbmUgdGltZVxuICAgICAqIHdvcmsgb24gdGhlIGVsZW1lbnQgYWZ0ZXIgdXBkYXRlLlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICogICB0aGlzLnJlbmRlclJvb3QuZ2V0RWxlbWVudEJ5SWQoJ215LXRleHQtYXJlYScpLmZvY3VzKCk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgZmlyc3RVcGRhdGVkKF9jaGFuZ2VkUHJvcGVydGllcykgeyB9XG59XG5fZCA9IGZpbmFsaXplZDtcbi8qKlxuICogTWFya3MgY2xhc3MgYXMgaGF2aW5nIGZpbmlzaGVkIGNyZWF0aW5nIHByb3BlcnRpZXMuXG4gKi9cblJlYWN0aXZlRWxlbWVudFtfZF0gPSB0cnVlO1xuLyoqXG4gKiBNZW1vaXplZCBsaXN0IG9mIGFsbCBlbGVtZW50IHByb3BlcnRpZXMsIGluY2x1ZGluZyBhbnkgc3VwZXJjbGFzcyBwcm9wZXJ0aWVzLlxuICogQ3JlYXRlZCBsYXppbHkgb24gdXNlciBzdWJjbGFzc2VzIHdoZW4gZmluYWxpemluZyB0aGUgY2xhc3MuXG4gKiBAbm9jb2xsYXBzZVxuICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAqL1xuUmVhY3RpdmVFbGVtZW50LmVsZW1lbnRQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuLyoqXG4gKiBNZW1vaXplZCBsaXN0IG9mIGFsbCBlbGVtZW50IHN0eWxlcy5cbiAqIENyZWF0ZWQgbGF6aWx5IG9uIHVzZXIgc3ViY2xhc3NlcyB3aGVuIGZpbmFsaXppbmcgdGhlIGNsYXNzLlxuICogQG5vY29sbGFwc2VcbiAqIEBjYXRlZ29yeSBzdHlsZXNcbiAqL1xuUmVhY3RpdmVFbGVtZW50LmVsZW1lbnRTdHlsZXMgPSBbXTtcbi8qKlxuICogT3B0aW9ucyB1c2VkIHdoZW4gY2FsbGluZyBgYXR0YWNoU2hhZG93YC4gU2V0IHRoaXMgcHJvcGVydHkgdG8gY3VzdG9taXplXG4gKiB0aGUgb3B0aW9ucyBmb3IgdGhlIHNoYWRvd1Jvb3Q7IGZvciBleGFtcGxlLCB0byBjcmVhdGUgYSBjbG9zZWRcbiAqIHNoYWRvd1Jvb3Q6IGB7bW9kZTogJ2Nsb3NlZCd9YC5cbiAqXG4gKiBOb3RlLCB0aGVzZSBvcHRpb25zIGFyZSB1c2VkIGluIGBjcmVhdGVSZW5kZXJSb290YC4gSWYgdGhpcyBtZXRob2RcbiAqIGlzIGN1c3RvbWl6ZWQsIG9wdGlvbnMgc2hvdWxkIGJlIHJlc3BlY3RlZCBpZiBwb3NzaWJsZS5cbiAqIEBub2NvbGxhcHNlXG4gKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gKi9cblJlYWN0aXZlRWxlbWVudC5zaGFkb3dSb290T3B0aW9ucyA9IHsgbW9kZTogJ29wZW4nIH07XG4vLyBBcHBseSBwb2x5ZmlsbHMgaWYgYXZhaWxhYmxlXG5wb2x5ZmlsbFN1cHBvcnQgPT09IG51bGwgfHwgcG9seWZpbGxTdXBwb3J0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb2x5ZmlsbFN1cHBvcnQoeyBSZWFjdGl2ZUVsZW1lbnQgfSk7XG4vLyBEZXYgbW9kZSB3YXJuaW5ncy4uLlxuaWYgKERFVl9NT0RFKSB7XG4gICAgLy8gRGVmYXVsdCB3YXJuaW5nIHNldC5cbiAgICBSZWFjdGl2ZUVsZW1lbnQuZW5hYmxlZFdhcm5pbmdzID0gWydjaGFuZ2UtaW4tdXBkYXRlJ107XG4gICAgY29uc3QgZW5zdXJlT3duV2FybmluZ3MgPSBmdW5jdGlvbiAoY3Rvcikge1xuICAgICAgICBpZiAoIWN0b3IuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnZW5hYmxlZFdhcm5pbmdzJywgY3RvcikpKSB7XG4gICAgICAgICAgICBjdG9yLmVuYWJsZWRXYXJuaW5ncyA9IGN0b3IuZW5hYmxlZFdhcm5pbmdzLnNsaWNlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aXZlRWxlbWVudC5lbmFibGVXYXJuaW5nID0gZnVuY3Rpb24gKHdhcm5pbmcpIHtcbiAgICAgICAgZW5zdXJlT3duV2FybmluZ3ModGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWRXYXJuaW5ncy5pbmRleE9mKHdhcm5pbmcpIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVkV2FybmluZ3MucHVzaCh3YXJuaW5nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVhY3RpdmVFbGVtZW50LmRpc2FibGVXYXJuaW5nID0gZnVuY3Rpb24gKHdhcm5pbmcpIHtcbiAgICAgICAgZW5zdXJlT3duV2FybmluZ3ModGhpcyk7XG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLmVuYWJsZWRXYXJuaW5ncy5pbmRleE9mKHdhcm5pbmcpO1xuICAgICAgICBpZiAoaSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZWRXYXJuaW5ncy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBSZWFjdGl2ZUVsZW1lbnQgdXNhZ2UuXG4oKF9jID0gZ2xvYmFsVGhpcy5yZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucykgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogKGdsb2JhbFRoaXMucmVhY3RpdmVFbGVtZW50VmVyc2lvbnMgPSBbXSkpLnB1c2goJzEuMy4xJyk7XG5pZiAoREVWX01PREUgJiYgZ2xvYmFsVGhpcy5yZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucy5sZW5ndGggPiAxKSB7XG4gICAgaXNzdWVXYXJuaW5nKCdtdWx0aXBsZS12ZXJzaW9ucycsIGBNdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXQgbG9hZGVkLiBMb2FkaW5nIG11bHRpcGxlIHZlcnNpb25zIGAgK1xuICAgICAgICBgaXMgbm90IHJlY29tbWVuZGVkLmApO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3RpdmUtZWxlbWVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbnZhciBfYSwgX2IsIF9jO1xuLyoqXG4gKiBUaGUgbWFpbiBMaXRFbGVtZW50IG1vZHVsZSwgd2hpY2ggZGVmaW5lcyB0aGUge0BsaW5rY29kZSBMaXRFbGVtZW50fSBiYXNlXG4gKiBjbGFzcyBhbmQgcmVsYXRlZCBBUElzLlxuICpcbiAqICBMaXRFbGVtZW50IGNvbXBvbmVudHMgY2FuIGRlZmluZSBhIHRlbXBsYXRlIGFuZCBhIHNldCBvZiBvYnNlcnZlZFxuICogcHJvcGVydGllcy4gQ2hhbmdpbmcgYW4gb2JzZXJ2ZWQgcHJvcGVydHkgdHJpZ2dlcnMgYSByZS1yZW5kZXIgb2YgdGhlXG4gKiBlbGVtZW50LlxuICpcbiAqICBJbXBvcnQge0BsaW5rY29kZSBMaXRFbGVtZW50fSBhbmQge0BsaW5rY29kZSBodG1sfSBmcm9tIHRoaXMgbW9kdWxlIHRvXG4gKiBjcmVhdGUgYSBjb21wb25lbnQ6XG4gKlxuICogIGBgYGpzXG4gKiBpbXBvcnQge0xpdEVsZW1lbnQsIGh0bWx9IGZyb20gJ2xpdC1lbGVtZW50JztcbiAqXG4gKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAqXG4gKiAgIC8vIERlY2xhcmUgb2JzZXJ2ZWQgcHJvcGVydGllc1xuICogICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gKiAgICAgcmV0dXJuIHtcbiAqICAgICAgIGFkamVjdGl2ZToge31cbiAqICAgICB9XG4gKiAgIH1cbiAqXG4gKiAgIGNvbnN0cnVjdG9yKCkge1xuICogICAgIHRoaXMuYWRqZWN0aXZlID0gJ2F3ZXNvbWUnO1xuICogICB9XG4gKlxuICogICAvLyBEZWZpbmUgdGhlIGVsZW1lbnQncyB0ZW1wbGF0ZVxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgPHA+eW91ciAke2FkamVjdGl2ZX0gdGVtcGxhdGUgaGVyZTwvcD5gO1xuICogICB9XG4gKiB9XG4gKlxuICogY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1lbGVtZW50JywgTXlFbGVtZW50KTtcbiAqIGBgYFxuICpcbiAqIGBMaXRFbGVtZW50YCBleHRlbmRzIHtAbGlua2NvZGUgUmVhY3RpdmVFbGVtZW50fSBhbmQgYWRkcyBsaXQtaHRtbFxuICogdGVtcGxhdGluZy4gVGhlIGBSZWFjdGl2ZUVsZW1lbnRgIGNsYXNzIGlzIHByb3ZpZGVkIGZvciB1c2VycyB0aGF0IHdhbnQgdG9cbiAqIGJ1aWxkIHRoZWlyIG93biBjdXN0b20gZWxlbWVudCBiYXNlIGNsYXNzZXMgdGhhdCBkb24ndCB1c2UgbGl0LWh0bWwuXG4gKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cbmltcG9ydCB7IFJlYWN0aXZlRWxlbWVudCB9IGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudCc7XG5pbXBvcnQgeyByZW5kZXIsIG5vQ2hhbmdlIH0gZnJvbSAnbGl0LWh0bWwnO1xuZXhwb3J0ICogZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50JztcbmV4cG9ydCAqIGZyb20gJ2xpdC1odG1sJztcbi8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBleHBvcnQgUmVhY3RpdmVFbGVtZW50IGFzIFVwZGF0aW5nRWxlbWVudC4gTm90ZSxcbi8vIElFIHRyYW5zcGlsYXRpb24gcmVxdWlyZXMgZXhwb3J0aW5nIGxpa2UgdGhpcy5cbmV4cG9ydCBjb25zdCBVcGRhdGluZ0VsZW1lbnQgPSBSZWFjdGl2ZUVsZW1lbnQ7XG5jb25zdCBERVZfTU9ERSA9IHRydWU7XG5sZXQgaXNzdWVXYXJuaW5nO1xuaWYgKERFVl9NT0RFKSB7XG4gICAgLy8gRW5zdXJlIHdhcm5pbmdzIGFyZSBpc3N1ZWQgb25seSAxeCwgZXZlbiBpZiBtdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXRcbiAgICAvLyBhcmUgbG9hZGVkLlxuICAgIGNvbnN0IGlzc3VlZFdhcm5pbmdzID0gKChfYSA9IGdsb2JhbFRoaXMubGl0SXNzdWVkV2FybmluZ3MpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IChnbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzID0gbmV3IFNldCgpKSk7XG4gICAgLy8gSXNzdWUgYSB3YXJuaW5nLCBpZiB3ZSBoYXZlbid0IGFscmVhZHkuXG4gICAgaXNzdWVXYXJuaW5nID0gKGNvZGUsIHdhcm5pbmcpID0+IHtcbiAgICAgICAgd2FybmluZyArPSBgIFNlZSBodHRwczovL2xpdC5kZXYvbXNnLyR7Y29kZX0gZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgaWYgKCFpc3N1ZWRXYXJuaW5ncy5oYXMod2FybmluZykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbiAgICAgICAgICAgIGlzc3VlZFdhcm5pbmdzLmFkZCh3YXJuaW5nKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4vKipcbiAqIEJhc2UgZWxlbWVudCBjbGFzcyB0aGF0IG1hbmFnZXMgZWxlbWVudCBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzLCBhbmRcbiAqIHJlbmRlcnMgYSBsaXQtaHRtbCB0ZW1wbGF0ZS5cbiAqXG4gKiBUbyBkZWZpbmUgYSBjb21wb25lbnQsIHN1YmNsYXNzIGBMaXRFbGVtZW50YCBhbmQgaW1wbGVtZW50IGFcbiAqIGByZW5kZXJgIG1ldGhvZCB0byBwcm92aWRlIHRoZSBjb21wb25lbnQncyB0ZW1wbGF0ZS4gRGVmaW5lIHByb3BlcnRpZXNcbiAqIHVzaW5nIHRoZSB7QGxpbmtjb2RlIExpdEVsZW1lbnQucHJvcGVydGllcyBwcm9wZXJ0aWVzfSBwcm9wZXJ0eSBvciB0aGVcbiAqIHtAbGlua2NvZGUgcHJvcGVydHl9IGRlY29yYXRvci5cbiAqL1xuZXhwb3J0IGNsYXNzIExpdEVsZW1lbnQgZXh0ZW5kcyBSZWFjdGl2ZUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZW5kZXJPcHRpb25zID0geyBob3N0OiB0aGlzIH07XG4gICAgICAgIHRoaXMuX19jaGlsZFBhcnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgKi9cbiAgICBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfYjtcbiAgICAgICAgY29uc3QgcmVuZGVyUm9vdCA9IHN1cGVyLmNyZWF0ZVJlbmRlclJvb3QoKTtcbiAgICAgICAgLy8gV2hlbiBhZG9wdGVkU3R5bGVTaGVldHMgYXJlIHNoaW1tZWQsIHRoZXkgYXJlIGluc2VydGVkIGludG8gdGhlXG4gICAgICAgIC8vIHNoYWRvd1Jvb3QgYnkgY3JlYXRlUmVuZGVyUm9vdC4gQWRqdXN0IHRoZSByZW5kZXJCZWZvcmUgbm9kZSBzbyB0aGF0XG4gICAgICAgIC8vIGFueSBzdHlsZXMgaW4gTGl0IGNvbnRlbnQgcmVuZGVyIGJlZm9yZSBhZG9wdGVkU3R5bGVTaGVldHMuIFRoaXMgaXNcbiAgICAgICAgLy8gaW1wb3J0YW50IHNvIHRoYXQgYWRvcHRlZFN0eWxlU2hlZXRzIGhhdmUgcHJlY2VkZW5jZSBvdmVyIHN0eWxlcyBpblxuICAgICAgICAvLyB0aGUgc2hhZG93Um9vdC5cbiAgICAgICAgKF9hID0gKF9iID0gdGhpcy5yZW5kZXJPcHRpb25zKS5yZW5kZXJCZWZvcmUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IChfYi5yZW5kZXJCZWZvcmUgPSByZW5kZXJSb290LmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXR1cm4gcmVuZGVyUm9vdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZWxlbWVudC4gVGhpcyBtZXRob2QgcmVmbGVjdHMgcHJvcGVydHkgdmFsdWVzIHRvIGF0dHJpYnV0ZXNcbiAgICAgKiBhbmQgY2FsbHMgYHJlbmRlcmAgdG8gcmVuZGVyIERPTSB2aWEgbGl0LWh0bWwuIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGVcbiAgICAgKiB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXIgYW5vdGhlciB1cGRhdGUuXG4gICAgICogQHBhcmFtIGNoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICB1cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgLy8gU2V0dGluZyBwcm9wZXJ0aWVzIGluIGByZW5kZXJgIHNob3VsZCBub3QgdHJpZ2dlciBhbiB1cGRhdGUuIFNpbmNlXG4gICAgICAgIC8vIHVwZGF0ZXMgYXJlIGFsbG93ZWQgYWZ0ZXIgc3VwZXIudXBkYXRlLCBpdCdzIGltcG9ydGFudCB0byBjYWxsIGByZW5kZXJgXG4gICAgICAgIC8vIGJlZm9yZSB0aGF0LlxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucmVuZGVyKCk7XG4gICAgICAgIGlmICghdGhpcy5oYXNVcGRhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlck9wdGlvbnMuaXNDb25uZWN0ZWQgPSB0aGlzLmlzQ29ubmVjdGVkO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIHRoaXMuX19jaGlsZFBhcnQgPSByZW5kZXIodmFsdWUsIHRoaXMucmVuZGVyUm9vdCwgdGhpcy5yZW5kZXJPcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgYWRkZWQgdG8gdGhlIGRvY3VtZW50J3MgRE9NLlxuICAgICAqXG4gICAgICogSW4gYGNvbm5lY3RlZENhbGxiYWNrKClgIHlvdSBzaG91bGQgc2V0dXAgdGFza3MgdGhhdCBzaG91bGQgb25seSBvY2N1ciB3aGVuXG4gICAgICogdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkIHRvIHRoZSBkb2N1bWVudC4gVGhlIG1vc3QgY29tbW9uIG9mIHRoZXNlIGlzXG4gICAgICogYWRkaW5nIGV2ZW50IGxpc3RlbmVycyB0byBub2RlcyBleHRlcm5hbCB0byB0aGUgZWxlbWVudCwgbGlrZSBhIGtleWRvd25cbiAgICAgKiBldmVudCBoYW5kbGVyIGFkZGVkIHRvIHRoZSB3aW5kb3cuXG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAqICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgKiAgIGFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVLZXlkb3duKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBUeXBpY2FsbHksIGFueXRoaW5nIGRvbmUgaW4gYGNvbm5lY3RlZENhbGxiYWNrKClgIHNob3VsZCBiZSB1bmRvbmUgd2hlbiB0aGVcbiAgICAgKiBlbGVtZW50IGlzIGRpc2Nvbm5lY3RlZCwgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrKClgLlxuICAgICAqXG4gICAgICogQGNhdGVnb3J5IGxpZmVjeWNsZVxuICAgICAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIChfYSA9IHRoaXMuX19jaGlsZFBhcnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRDb25uZWN0ZWQodHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgZG9jdW1lbnQncyBET00uXG4gICAgICpcbiAgICAgKiBUaGlzIGNhbGxiYWNrIGlzIHRoZSBtYWluIHNpZ25hbCB0byB0aGUgZWxlbWVudCB0aGF0IGl0IG1heSBubyBsb25nZXIgYmVcbiAgICAgKiB1c2VkLiBgZGlzY29ubmVjdGVkQ2FsbGJhY2soKWAgc2hvdWxkIGVuc3VyZSB0aGF0IG5vdGhpbmcgaXMgaG9sZGluZyBhXG4gICAgICogcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IChzdWNoIGFzIGV2ZW50IGxpc3RlbmVycyBhZGRlZCB0byBub2RlcyBleHRlcm5hbFxuICAgICAqIHRvIHRoZSBlbGVtZW50KSwgc28gdGhhdCBpdCBpcyBmcmVlIHRvIGJlIGdhcmJhZ2UgY29sbGVjdGVkLlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgKiAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICogICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUtleWRvd24pO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEFuIGVsZW1lbnQgbWF5IGJlIHJlLWNvbm5lY3RlZCBhZnRlciBiZWluZyBkaXNjb25uZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NoaWxkUGFydCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldENvbm5lY3RlZChmYWxzZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gZWFjaCB1cGRhdGUgdG8gcGVyZm9ybSByZW5kZXJpbmcgdGFza3MuIFRoaXMgbWV0aG9kIG1heSByZXR1cm5cbiAgICAgKiBhbnkgdmFsdWUgcmVuZGVyYWJsZSBieSBsaXQtaHRtbCdzIGBDaGlsZFBhcnRgIC0gdHlwaWNhbGx5IGFcbiAgICAgKiBgVGVtcGxhdGVSZXN1bHRgLiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgKm5vdCogdHJpZ2dlclxuICAgICAqIHRoZSBlbGVtZW50IHRvIHVwZGF0ZS5cbiAgICAgKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gbm9DaGFuZ2U7XG4gICAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhpcyBjbGFzcyBpcyBtYXJrZWQgYXMgYGZpbmFsaXplZGAgYXMgYW4gb3B0aW1pemF0aW9uIGVuc3VyaW5nXG4gKiBpdCB3aWxsIG5vdCBuZWVkbGVzc2x5IHRyeSB0byBgZmluYWxpemVgLlxuICpcbiAqIE5vdGUgdGhpcyBwcm9wZXJ0eSBuYW1lIGlzIGEgc3RyaW5nIHRvIHByZXZlbnQgYnJlYWtpbmcgQ2xvc3VyZSBKUyBDb21waWxlclxuICogb3B0aW1pemF0aW9ucy4gU2VlIEBsaXQvcmVhY3RpdmUtZWxlbWVudCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqL1xuTGl0RWxlbWVudFsnZmluYWxpemVkJ10gPSB0cnVlO1xuLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbkxpdEVsZW1lbnRbJ18kbGl0RWxlbWVudCQnXSA9IHRydWU7XG4vLyBJbnN0YWxsIGh5ZHJhdGlvbiBpZiBhdmFpbGFibGVcbihfYiA9IGdsb2JhbFRoaXMubGl0RWxlbWVudEh5ZHJhdGVTdXBwb3J0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChnbG9iYWxUaGlzLCB7IExpdEVsZW1lbnQgfSk7XG4vLyBBcHBseSBwb2x5ZmlsbHMgaWYgYXZhaWxhYmxlXG5jb25zdCBwb2x5ZmlsbFN1cHBvcnQgPSBERVZfTU9ERVxuICAgID8gZ2xvYmFsVGhpcy5saXRFbGVtZW50UG9seWZpbGxTdXBwb3J0RGV2TW9kZVxuICAgIDogZ2xvYmFsVGhpcy5saXRFbGVtZW50UG9seWZpbGxTdXBwb3J0O1xucG9seWZpbGxTdXBwb3J0ID09PSBudWxsIHx8IHBvbHlmaWxsU3VwcG9ydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9seWZpbGxTdXBwb3J0KHsgTGl0RWxlbWVudCB9KTtcbi8vIERFViBtb2RlIHdhcm5pbmdzXG5pZiAoREVWX01PREUpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG4gICAgLy8gTm90ZSwgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBjbG9zdXJlIGNvbXBpbGF0aW9uLCB0aGlzIGFjY2Vzc1xuICAgIC8vIG5lZWRzIHRvIGJlIGFzIGEgc3RyaW5nIHByb3BlcnR5IGluZGV4LlxuICAgIExpdEVsZW1lbnRbJ2ZpbmFsaXplJ10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsaXplZCA9IFJlYWN0aXZlRWxlbWVudC5maW5hbGl6ZS5jYWxsKHRoaXMpO1xuICAgICAgICBpZiAoIWZpbmFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdhcm5SZW1vdmVkT3JSZW5hbWVkID0gKG9iaiwgbmFtZSwgcmVuYW1lZCA9IGZhbHNlKSA9PiB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3Rvck5hbWUgPSAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJyA/IG9iaiA6IG9iai5jb25zdHJ1Y3RvcilcbiAgICAgICAgICAgICAgICAgICAgLm5hbWU7XG4gICAgICAgICAgICAgICAgaXNzdWVXYXJuaW5nKHJlbmFtZWQgPyAncmVuYW1lZC1hcGknIDogJ3JlbW92ZWQtYXBpJywgYFxcYCR7bmFtZX1cXGAgaXMgaW1wbGVtZW50ZWQgb24gY2xhc3MgJHtjdG9yTmFtZX0uIEl0IGAgK1xuICAgICAgICAgICAgICAgICAgICBgaGFzIGJlZW4gJHtyZW5hbWVkID8gJ3JlbmFtZWQnIDogJ3JlbW92ZWQnfSBgICtcbiAgICAgICAgICAgICAgICAgICAgYGluIHRoaXMgdmVyc2lvbiBvZiBMaXRFbGVtZW50LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB3YXJuUmVtb3ZlZE9yUmVuYW1lZCh0aGlzLCAncmVuZGVyJyk7XG4gICAgICAgIHdhcm5SZW1vdmVkT3JSZW5hbWVkKHRoaXMsICdnZXRTdHlsZXMnLCB0cnVlKTtcbiAgICAgICAgd2FyblJlbW92ZWRPclJlbmFtZWQodGhpcy5wcm90b3R5cGUsICdhZG9wdFN0eWxlcycpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xufVxuLyoqXG4gKiBFTkQgVVNFUlMgU0hPVUxEIE5PVCBSRUxZIE9OIFRISVMgT0JKRUNULlxuICpcbiAqIFByaXZhdGUgZXhwb3J0cyBmb3IgdXNlIGJ5IG90aGVyIExpdCBwYWNrYWdlcywgbm90IGludGVuZGVkIGZvciB1c2UgYnlcbiAqIGV4dGVybmFsIHVzZXJzLlxuICpcbiAqIFdlIGN1cnJlbnRseSBkbyBub3QgbWFrZSBhIG1hbmdsZWQgcm9sbHVwIGJ1aWxkIG9mIHRoZSBsaXQtc3NyIGNvZGUuIEluIG9yZGVyXG4gKiB0byBrZWVwIGEgbnVtYmVyIG9mIChvdGhlcndpc2UgcHJpdmF0ZSkgdG9wLWxldmVsIGV4cG9ydHMgIG1hbmdsZWQgaW4gdGhlXG4gKiBjbGllbnQgc2lkZSBjb2RlLCB3ZSBleHBvcnQgYSBfJExFIG9iamVjdCBjb250YWluaW5nIHRob3NlIG1lbWJlcnMgKG9yXG4gKiBoZWxwZXIgbWV0aG9kcyBmb3IgYWNjZXNzaW5nIHByaXZhdGUgZmllbGRzIG9mIHRob3NlIG1lbWJlcnMpLCBhbmQgdGhlblxuICogcmUtZXhwb3J0IHRoZW0gZm9yIHVzZSBpbiBsaXQtc3NyLiBUaGlzIGtlZXBzIGxpdC1zc3IgYWdub3N0aWMgdG8gd2hldGhlciB0aGVcbiAqIGNsaWVudC1zaWRlIGNvZGUgaXMgYmVpbmcgdXNlZCBpbiBgZGV2YCBtb2RlIG9yIGBwcm9kYCBtb2RlLlxuICpcbiAqIFRoaXMgaGFzIGEgdW5pcXVlIG5hbWUsIHRvIGRpc2FtYmlndWF0ZSBpdCBmcm9tIHByaXZhdGUgZXhwb3J0cyBpblxuICogbGl0LWh0bWwsIHNpbmNlIHRoaXMgbW9kdWxlIHJlLWV4cG9ydHMgYWxsIG9mIGxpdC1odG1sLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBfJExFID0ge1xuICAgIF8kYXR0cmlidXRlVG9Qcm9wZXJ0eTogKGVsLCBuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgZWwuXyRhdHRyaWJ1dGVUb1Byb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICB9LFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIF8kY2hhbmdlZFByb3BlcnRpZXM6IChlbCkgPT4gZWwuXyRjaGFuZ2VkUHJvcGVydGllcyxcbn07XG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIExpdEVsZW1lbnQgdXNhZ2UuXG4oKF9jID0gZ2xvYmFsVGhpcy5saXRFbGVtZW50VmVyc2lvbnMpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IChnbG9iYWxUaGlzLmxpdEVsZW1lbnRWZXJzaW9ucyA9IFtdKSkucHVzaCgnMy4yLjAnKTtcbmlmIChERVZfTU9ERSAmJiBnbG9iYWxUaGlzLmxpdEVsZW1lbnRWZXJzaW9ucy5sZW5ndGggPiAxKSB7XG4gICAgaXNzdWVXYXJuaW5nKCdtdWx0aXBsZS12ZXJzaW9ucycsIGBNdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXQgbG9hZGVkLiBMb2FkaW5nIG11bHRpcGxlIHZlcnNpb25zIGAgK1xuICAgICAgICBgaXMgbm90IHJlY29tbWVuZGVkLmApO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWVsZW1lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5pbXBvcnQgeyBub3RoaW5nIH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuLyoqXG4gKiBGb3IgQXR0cmlidXRlUGFydHMsIHNldHMgdGhlIGF0dHJpYnV0ZSBpZiB0aGUgdmFsdWUgaXMgZGVmaW5lZCBhbmQgcmVtb3Zlc1xuICogdGhlIGF0dHJpYnV0ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLlxuICpcbiAqIEZvciBvdGhlciBwYXJ0IHR5cGVzLCB0aGlzIGRpcmVjdGl2ZSBpcyBhIG5vLW9wLlxuICovXG5leHBvcnQgY29uc3QgaWZEZWZpbmVkID0gKHZhbHVlKSA9PiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwID8gdmFsdWUgOiBub3RoaW5nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aWYtZGVmaW5lZC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbnZhciBfYSwgX2IsIF9jLCBfZDtcbmNvbnN0IERFVl9NT0RFID0gdHJ1ZTtcbmNvbnN0IEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUyA9IHRydWU7XG5jb25zdCBFTkFCTEVfU0hBRFlET01fTk9QQVRDSCA9IHRydWU7XG4vKipcbiAqIFVzZWZ1bCBmb3IgdmlzdWFsaXppbmcgYW5kIGxvZ2dpbmcgaW5zaWdodHMgaW50byB3aGF0IHRoZSBMaXQgdGVtcGxhdGUgc3lzdGVtIGlzIGRvaW5nLlxuICpcbiAqIENvbXBpbGVkIG91dCBvZiBwcm9kIG1vZGUgYnVpbGRzLlxuICovXG5jb25zdCBkZWJ1Z0xvZ0V2ZW50ID0gREVWX01PREVcbiAgICA/IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBzaG91bGRFbWl0ID0gd2luZG93XG4gICAgICAgICAgICAuZW1pdExpdERlYnVnTG9nRXZlbnRzO1xuICAgICAgICBpZiAoIXNob3VsZEVtaXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2xpdC1kZWJ1ZycsIHtcbiAgICAgICAgICAgIGRldGFpbDogZXZlbnQsXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgOiB1bmRlZmluZWQ7XG4vLyBVc2VkIGZvciBjb25uZWN0aW5nIGJlZ2luUmVuZGVyIGFuZCBlbmRSZW5kZXIgZXZlbnRzIHdoZW4gdGhlcmUgYXJlIG5lc3RlZFxuLy8gcmVuZGVycyB3aGVuIGVycm9ycyBhcmUgdGhyb3duIHByZXZlbnRpbmcgYW4gZW5kUmVuZGVyIGV2ZW50IGZyb20gYmVpbmdcbi8vIGNhbGxlZC5cbmxldCBkZWJ1Z0xvZ1JlbmRlcklkID0gMDtcbi8qKlxuICogYHRydWVgIGlmIHdlJ3JlIGJ1aWxkaW5nIGZvciBnb29nbGUzIHdpdGggdGVtcG9yYXJ5IGJhY2stY29tcGF0IGhlbHBlcnMuXG4gKiBUaGlzIGV4cG9ydCBpcyBub3QgcHJlc2VudCBpbiBwcm9kIGJ1aWxkcy5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgSU5URVJOQUwgPSB0cnVlO1xubGV0IGlzc3VlV2FybmluZztcbmlmIChERVZfTU9ERSkge1xuICAgIChfYSA9IGdsb2JhbFRoaXMubGl0SXNzdWVkV2FybmluZ3MpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IChnbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzID0gbmV3IFNldCgpKTtcbiAgICAvLyBJc3N1ZSBhIHdhcm5pbmcsIGlmIHdlIGhhdmVuJ3QgYWxyZWFkeS5cbiAgICBpc3N1ZVdhcm5pbmcgPSAoY29kZSwgd2FybmluZykgPT4ge1xuICAgICAgICB3YXJuaW5nICs9IGNvZGVcbiAgICAgICAgICAgID8gYCBTZWUgaHR0cHM6Ly9saXQuZGV2L21zZy8ke2NvZGV9IGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgICAgICAgIDogJyc7XG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncy5oYXMod2FybmluZykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbiAgICAgICAgICAgIGdsb2JhbFRoaXMubGl0SXNzdWVkV2FybmluZ3MuYWRkKHdhcm5pbmcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpc3N1ZVdhcm5pbmcoJ2Rldi1tb2RlJywgYExpdCBpcyBpbiBkZXYgbW9kZS4gTm90IHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uIWApO1xufVxuY29uc3Qgd3JhcCA9IEVOQUJMRV9TSEFEWURPTV9OT1BBVENIICYmXG4gICAgKChfYiA9IHdpbmRvdy5TaGFkeURPTSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmluVXNlKSAmJlxuICAgICgoX2MgPSB3aW5kb3cuU2hhZHlET00pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5ub1BhdGNoKSA9PT0gdHJ1ZVxuICAgID8gd2luZG93LlNoYWR5RE9NLndyYXBcbiAgICA6IChub2RlKSA9PiBub2RlO1xuY29uc3QgdHJ1c3RlZFR5cGVzID0gZ2xvYmFsVGhpcy50cnVzdGVkVHlwZXM7XG4vKipcbiAqIE91ciBUcnVzdGVkVHlwZVBvbGljeSBmb3IgSFRNTCB3aGljaCBpcyBkZWNsYXJlZCB1c2luZyB0aGUgaHRtbCB0ZW1wbGF0ZVxuICogdGFnIGZ1bmN0aW9uLlxuICpcbiAqIFRoYXQgSFRNTCBpcyBhIGRldmVsb3Blci1hdXRob3JlZCBjb25zdGFudCwgYW5kIGlzIHBhcnNlZCB3aXRoIGlubmVySFRNTFxuICogYmVmb3JlIGFueSB1bnRydXN0ZWQgZXhwcmVzc2lvbnMgaGF2ZSBiZWVuIG1peGVkIGluLiBUaGVyZWZvciBpdCBpc1xuICogY29uc2lkZXJlZCBzYWZlIGJ5IGNvbnN0cnVjdGlvbi5cbiAqL1xuY29uc3QgcG9saWN5ID0gdHJ1c3RlZFR5cGVzXG4gICAgPyB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KCdsaXQtaHRtbCcsIHtcbiAgICAgICAgY3JlYXRlSFRNTDogKHMpID0+IHMsXG4gICAgfSlcbiAgICA6IHVuZGVmaW5lZDtcbmNvbnN0IGlkZW50aXR5RnVuY3Rpb24gPSAodmFsdWUpID0+IHZhbHVlO1xuY29uc3Qgbm9vcFNhbml0aXplciA9IChfbm9kZSwgX25hbWUsIF90eXBlKSA9PiBpZGVudGl0eUZ1bmN0aW9uO1xuLyoqIFNldHMgdGhlIGdsb2JhbCBzYW5pdGl6ZXIgZmFjdG9yeS4gKi9cbmNvbnN0IHNldFNhbml0aXplciA9IChuZXdTYW5pdGl6ZXIpID0+IHtcbiAgICBpZiAoIUVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgIT09IG5vb3BTYW5pdGl6ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRlbXB0ZWQgdG8gb3ZlcndyaXRlIGV4aXN0aW5nIGxpdC1odG1sIHNlY3VyaXR5IHBvbGljeS5gICtcbiAgICAgICAgICAgIGAgc2V0U2FuaXRpemVET01WYWx1ZUZhY3Rvcnkgc2hvdWxkIGJlIGNhbGxlZCBhdCBtb3N0IG9uY2UuYCk7XG4gICAgfVxuICAgIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCA9IG5ld1Nhbml0aXplcjtcbn07XG4vKipcbiAqIE9ubHkgdXNlZCBpbiBpbnRlcm5hbCB0ZXN0cywgbm90IGEgcGFydCBvZiB0aGUgcHVibGljIEFQSS5cbiAqL1xuY29uc3QgX3Rlc3RPbmx5Q2xlYXJTYW5pdGl6ZXJGYWN0b3J5RG9Ob3RDYWxsT3JFbHNlID0gKCkgPT4ge1xuICAgIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCA9IG5vb3BTYW5pdGl6ZXI7XG59O1xuY29uc3QgY3JlYXRlU2FuaXRpemVyID0gKG5vZGUsIG5hbWUsIHR5cGUpID0+IHtcbiAgICByZXR1cm4gc2FuaXRpemVyRmFjdG9yeUludGVybmFsKG5vZGUsIG5hbWUsIHR5cGUpO1xufTtcbi8vIEFkZGVkIHRvIGFuIGF0dHJpYnV0ZSBuYW1lIHRvIG1hcmsgdGhlIGF0dHJpYnV0ZSBhcyBib3VuZCBzbyB3ZSBjYW4gZmluZFxuLy8gaXQgZWFzaWx5LlxuY29uc3QgYm91bmRBdHRyaWJ1dGVTdWZmaXggPSAnJGxpdCQnO1xuLy8gVGhpcyBtYXJrZXIgaXMgdXNlZCBpbiBtYW55IHN5bnRhY3RpYyBwb3NpdGlvbnMgaW4gSFRNTCwgc28gaXQgbXVzdCBiZVxuLy8gYSB2YWxpZCBlbGVtZW50IG5hbWUgYW5kIGF0dHJpYnV0ZSBuYW1lLiBXZSBkb24ndCBzdXBwb3J0IGR5bmFtaWMgbmFtZXMgKHlldClcbi8vIGJ1dCB0aGlzIGF0IGxlYXN0IGVuc3VyZXMgdGhhdCB0aGUgcGFyc2UgdHJlZSBpcyBjbG9zZXIgdG8gdGhlIHRlbXBsYXRlXG4vLyBpbnRlbnRpb24uXG5jb25zdCBtYXJrZXIgPSBgbGl0JCR7U3RyaW5nKE1hdGgucmFuZG9tKCkpLnNsaWNlKDkpfSRgO1xuLy8gU3RyaW5nIHVzZWQgdG8gdGVsbCBpZiBhIGNvbW1lbnQgaXMgYSBtYXJrZXIgY29tbWVudFxuY29uc3QgbWFya2VyTWF0Y2ggPSAnPycgKyBtYXJrZXI7XG4vLyBUZXh0IHVzZWQgdG8gaW5zZXJ0IGEgY29tbWVudCBtYXJrZXIgbm9kZS4gV2UgdXNlIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb25cbi8vIHN5bnRheCBiZWNhdXNlIGl0J3Mgc2xpZ2h0bHkgc21hbGxlciwgYnV0IHBhcnNlcyBhcyBhIGNvbW1lbnQgbm9kZS5cbmNvbnN0IG5vZGVNYXJrZXIgPSBgPCR7bWFya2VyTWF0Y2h9PmA7XG5jb25zdCBkID0gZG9jdW1lbnQ7XG4vLyBDcmVhdGVzIGEgZHluYW1pYyBtYXJrZXIuIFdlIG5ldmVyIGhhdmUgdG8gc2VhcmNoIGZvciB0aGVzZSBpbiB0aGUgRE9NLlxuY29uc3QgY3JlYXRlTWFya2VyID0gKHYgPSAnJykgPT4gZC5jcmVhdGVDb21tZW50KHYpO1xuY29uc3QgaXNQcmltaXRpdmUgPSAodmFsdWUpID0+IHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlICE9ICdmdW5jdGlvbicpO1xuY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5jb25zdCBpc0l0ZXJhYmxlID0gKHZhbHVlKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiBpc0FycmF5KHZhbHVlKSB8fFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB0eXBlb2YgKChfYSA9IHZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbU3ltYm9sLml0ZXJhdG9yXSkgPT09ICdmdW5jdGlvbic7XG59O1xuY29uc3QgU1BBQ0VfQ0hBUiA9IGBbIFxcdFxcblxcZlxccl1gO1xuY29uc3QgQVRUUl9WQUxVRV9DSEFSID0gYFteIFxcdFxcblxcZlxcclwiJ1xcYDw+PV1gO1xuY29uc3QgTkFNRV9DSEFSID0gYFteXFxcXHNcIic+PS9dYDtcbi8vIFRoZXNlIHJlZ2V4ZXMgcmVwcmVzZW50IHRoZSBmaXZlIHBhcnNpbmcgc3RhdGVzIHRoYXQgd2UgY2FyZSBhYm91dCBpbiB0aGVcbi8vIFRlbXBsYXRlJ3MgSFRNTCBzY2FubmVyLiBUaGV5IG1hdGNoIHRoZSAqZW5kKiBvZiB0aGUgc3RhdGUgdGhleSdyZSBuYW1lZFxuLy8gYWZ0ZXIuXG4vLyBEZXBlbmRpbmcgb24gdGhlIG1hdGNoLCB3ZSB0cmFuc2l0aW9uIHRvIGEgbmV3IHN0YXRlLiBJZiB0aGVyZSdzIG5vIG1hdGNoLFxuLy8gd2Ugc3RheSBpbiB0aGUgc2FtZSBzdGF0ZS5cbi8vIE5vdGUgdGhhdCB0aGUgcmVnZXhlcyBhcmUgc3RhdGVmdWwuIFdlIHV0aWxpemUgbGFzdEluZGV4IGFuZCBzeW5jIGl0XG4vLyBhY3Jvc3MgdGhlIG11bHRpcGxlIHJlZ2V4ZXMgdXNlZC4gSW4gYWRkaXRpb24gdG8gdGhlIGZpdmUgcmVnZXhlcyBiZWxvd1xuLy8gd2UgYWxzbyBkeW5hbWljYWxseSBjcmVhdGUgYSByZWdleCB0byBmaW5kIHRoZSBtYXRjaGluZyBlbmQgdGFncyBmb3IgcmF3XG4vLyB0ZXh0IGVsZW1lbnRzLlxuLyoqXG4gKiBFbmQgb2YgdGV4dCBpczogYDxgIGZvbGxvd2VkIGJ5OlxuICogICAoY29tbWVudCBzdGFydCkgb3IgKHRhZykgb3IgKGR5bmFtaWMgdGFnIGJpbmRpbmcpXG4gKi9cbmNvbnN0IHRleHRFbmRSZWdleCA9IC88KD86KCEtLXxcXC9bXmEtekEtWl0pfChcXC8/W2EtekEtWl1bXj5cXHNdKil8KFxcLz8kKSkvZztcbmNvbnN0IENPTU1FTlRfU1RBUlQgPSAxO1xuY29uc3QgVEFHX05BTUUgPSAyO1xuY29uc3QgRFlOQU1JQ19UQUdfTkFNRSA9IDM7XG5jb25zdCBjb21tZW50RW5kUmVnZXggPSAvLS0+L2c7XG4vKipcbiAqIENvbW1lbnRzIG5vdCBzdGFydGVkIHdpdGggPCEtLSwgbGlrZSA8L3ssIGNhbiBiZSBlbmRlZCBieSBhIHNpbmdsZSBgPmBcbiAqL1xuY29uc3QgY29tbWVudDJFbmRSZWdleCA9IC8+L2c7XG4vKipcbiAqIFRoZSB0YWdFbmQgcmVnZXggbWF0Y2hlcyB0aGUgZW5kIG9mIHRoZSBcImluc2lkZSBhbiBvcGVuaW5nXCIgdGFnIHN5bnRheFxuICogcG9zaXRpb24uIEl0IGVpdGhlciBtYXRjaGVzIGEgYD5gLCBhbiBhdHRyaWJ1dGUtbGlrZSBzZXF1ZW5jZSwgb3IgdGhlIGVuZFxuICogb2YgdGhlIHN0cmluZyBhZnRlciBhIHNwYWNlIChhdHRyaWJ1dGUtbmFtZSBwb3NpdGlvbiBlbmRpbmcpLlxuICpcbiAqIFNlZSBhdHRyaWJ1dGVzIGluIHRoZSBIVE1MIHNwZWM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjZWxlbWVudHMtYXR0cmlidXRlc1xuICpcbiAqIFwiIFxcdFxcblxcZlxcclwiIGFyZSBIVE1MIHNwYWNlIGNoYXJhY3RlcnM6XG4gKiBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jYXNjaWktd2hpdGVzcGFjZVxuICpcbiAqIFNvIGFuIGF0dHJpYnV0ZSBpczpcbiAqICAqIFRoZSBuYW1lOiBhbnkgY2hhcmFjdGVyIGV4Y2VwdCBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLCAoXCIpLCAoJyksIFwiPlwiLFxuICogICAgXCI9XCIsIG9yIFwiL1wiLiBOb3RlOiB0aGlzIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBIVE1MIHNwZWMgd2hpY2ggYWxzbyBleGNsdWRlcyBjb250cm9sIGNoYXJhY3RlcnMuXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnkgXCI9XCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieTpcbiAqICAgICogQW55IGNoYXJhY3RlciBleGNlcHQgc3BhY2UsICgnKSwgKFwiKSwgXCI8XCIsIFwiPlwiLCBcIj1cIiwgKGApLCBvclxuICogICAgKiAoXCIpIHRoZW4gYW55IG5vbi0oXCIpLCBvclxuICogICAgKiAoJykgdGhlbiBhbnkgbm9uLSgnKVxuICovXG5jb25zdCB0YWdFbmRSZWdleCA9IG5ldyBSZWdFeHAoYD58JHtTUEFDRV9DSEFSfSg/Oigke05BTUVfQ0hBUn0rKSgke1NQQUNFX0NIQVJ9Kj0ke1NQQUNFX0NIQVJ9Kig/OiR7QVRUUl9WQUxVRV9DSEFSfXwoXCJ8Jyl8KSl8JClgLCAnZycpO1xuY29uc3QgRU5USVJFX01BVENIID0gMDtcbmNvbnN0IEFUVFJJQlVURV9OQU1FID0gMTtcbmNvbnN0IFNQQUNFU19BTkRfRVFVQUxTID0gMjtcbmNvbnN0IFFVT1RFX0NIQVIgPSAzO1xuY29uc3Qgc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXggPSAvJy9nO1xuY29uc3QgZG91YmxlUXVvdGVBdHRyRW5kUmVnZXggPSAvXCIvZztcbi8qKlxuICogTWF0Y2hlcyB0aGUgcmF3IHRleHQgZWxlbWVudHMuXG4gKlxuICogQ29tbWVudHMgYXJlIG5vdCBwYXJzZWQgd2l0aGluIHJhdyB0ZXh0IGVsZW1lbnRzLCBzbyB3ZSBuZWVkIHRvIHNlYXJjaCB0aGVpclxuICogdGV4dCBjb250ZW50IGZvciBtYXJrZXIgc3RyaW5ncy5cbiAqL1xuY29uc3QgcmF3VGV4dEVsZW1lbnQgPSAvXig/OnNjcmlwdHxzdHlsZXx0ZXh0YXJlYXx0aXRsZSkkL2k7XG4vKiogVGVtcGxhdGVSZXN1bHQgdHlwZXMgKi9cbmNvbnN0IEhUTUxfUkVTVUxUID0gMTtcbmNvbnN0IFNWR19SRVNVTFQgPSAyO1xuLy8gVGVtcGxhdGVQYXJ0IHR5cGVzXG4vLyBJTVBPUlRBTlQ6IHRoZXNlIG11c3QgbWF0Y2ggdGhlIHZhbHVlcyBpbiBQYXJ0VHlwZVxuY29uc3QgQVRUUklCVVRFX1BBUlQgPSAxO1xuY29uc3QgQ0hJTERfUEFSVCA9IDI7XG5jb25zdCBQUk9QRVJUWV9QQVJUID0gMztcbmNvbnN0IEJPT0xFQU5fQVRUUklCVVRFX1BBUlQgPSA0O1xuY29uc3QgRVZFTlRfUEFSVCA9IDU7XG5jb25zdCBFTEVNRU5UX1BBUlQgPSA2O1xuY29uc3QgQ09NTUVOVF9QQVJUID0gNztcbi8qKlxuICogR2VuZXJhdGVzIGEgdGVtcGxhdGUgbGl0ZXJhbCB0YWcgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgVGVtcGxhdGVSZXN1bHQgd2l0aFxuICogdGhlIGdpdmVuIHJlc3VsdCB0eXBlLlxuICovXG5jb25zdCB0YWcgPSAodHlwZSkgPT4gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4ge1xuICAgIC8vIFdhcm4gYWdhaW5zdCB0ZW1wbGF0ZXMgb2N0YWwgZXNjYXBlIHNlcXVlbmNlc1xuICAgIC8vIFdlIGRvIHRoaXMgaGVyZSByYXRoZXIgdGhhbiBpbiByZW5kZXIgc28gdGhhdCB0aGUgd2FybmluZyBpcyBjbG9zZXIgdG8gdGhlXG4gICAgLy8gdGVtcGxhdGUgZGVmaW5pdGlvbi5cbiAgICBpZiAoREVWX01PREUgJiYgc3RyaW5ncy5zb21lKChzKSA9PiBzID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU29tZSB0ZW1wbGF0ZSBzdHJpbmdzIGFyZSB1bmRlZmluZWQuXFxuJyArXG4gICAgICAgICAgICAnVGhpcyBpcyBwcm9iYWJseSBjYXVzZWQgYnkgaWxsZWdhbCBvY3RhbCBlc2NhcGUgc2VxdWVuY2VzLicpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICBbJ18kbGl0VHlwZSQnXTogdHlwZSxcbiAgICAgICAgc3RyaW5ncyxcbiAgICAgICAgdmFsdWVzLFxuICAgIH07XG59O1xuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBIVE1MIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgaGVhZGVyID0gKHRpdGxlOiBzdHJpbmcpID0+IGh0bWxgPGgxPiR7dGl0bGV9PC9oMT5gO1xuICogYGBgXG4gKlxuICogVGhlIGBodG1sYCB0YWcgcmV0dXJucyBhIGRlc2NyaXB0aW9uIG9mIHRoZSBET00gdG8gcmVuZGVyIGFzIGEgdmFsdWUuIEl0IGlzXG4gKiBsYXp5LCBtZWFuaW5nIG5vIHdvcmsgaXMgZG9uZSB1bnRpbCB0aGUgdGVtcGxhdGUgaXMgcmVuZGVyZWQuIFdoZW4gcmVuZGVyaW5nLFxuICogaWYgYSB0ZW1wbGF0ZSBjb21lcyBmcm9tIHRoZSBzYW1lIGV4cHJlc3Npb24gYXMgYSBwcmV2aW91c2x5IHJlbmRlcmVkIHJlc3VsdCxcbiAqIGl0J3MgZWZmaWNpZW50bHkgdXBkYXRlZCBpbnN0ZWFkIG9mIHJlcGxhY2VkLlxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IHRhZyhIVE1MX1JFU1VMVCk7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIFNWRyBmcmFnbWVudCB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IHJlY3QgPSBzdmdgPHJlY3Qgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCI+PC9yZWN0PmA7XG4gKlxuICogY29uc3QgbXlJbWFnZSA9IGh0bWxgXG4gKiAgIDxzdmcgdmlld0JveD1cIjAgMCAxMCAxMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAqICAgICAke3JlY3R9XG4gKiAgIDwvc3ZnPmA7XG4gKiBgYGBcbiAqXG4gKiBUaGUgYHN2Z2AgKnRhZyBmdW5jdGlvbiogc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgU1ZHIGZyYWdtZW50cywgb3IgZWxlbWVudHNcbiAqIHRoYXQgd291bGQgYmUgY29udGFpbmVkICoqaW5zaWRlKiogYW4gYDxzdmc+YCBIVE1MIGVsZW1lbnQuIEEgY29tbW9uIGVycm9yIGlzXG4gKiBwbGFjaW5nIGFuIGA8c3ZnPmAgKmVsZW1lbnQqIGluIGEgdGVtcGxhdGUgdGFnZ2VkIHdpdGggdGhlIGBzdmdgIHRhZ1xuICogZnVuY3Rpb24uIFRoZSBgPHN2Zz5gIGVsZW1lbnQgaXMgYW4gSFRNTCBlbGVtZW50IGFuZCBzaG91bGQgYmUgdXNlZCB3aXRoaW4gYVxuICogdGVtcGxhdGUgdGFnZ2VkIHdpdGggdGhlIHtAbGlua2NvZGUgaHRtbH0gdGFnIGZ1bmN0aW9uLlxuICpcbiAqIEluIExpdEVsZW1lbnQgdXNhZ2UsIGl0J3MgaW52YWxpZCB0byByZXR1cm4gYW4gU1ZHIGZyYWdtZW50IGZyb20gdGhlXG4gKiBgcmVuZGVyKClgIG1ldGhvZCwgYXMgdGhlIFNWRyBmcmFnbWVudCB3aWxsIGJlIGNvbnRhaW5lZCB3aXRoaW4gdGhlIGVsZW1lbnQnc1xuICogc2hhZG93IHJvb3QgYW5kIHRodXMgY2Fubm90IGJlIHVzZWQgd2l0aGluIGFuIGA8c3ZnPmAgSFRNTCBlbGVtZW50LlxuICovXG5leHBvcnQgY29uc3Qgc3ZnID0gdGFnKFNWR19SRVNVTFQpO1xuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyB0aGF0IGEgdmFsdWUgd2FzIGhhbmRsZWQgYnkgYSBkaXJlY3RpdmUgYW5kXG4gKiBzaG91bGQgbm90IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vQ2hhbmdlID0gU3ltYm9sLmZvcignbGl0LW5vQ2hhbmdlJyk7XG4vKipcbiAqIEEgc2VudGluZWwgdmFsdWUgdGhhdCBzaWduYWxzIGEgQ2hpbGRQYXJ0IHRvIGZ1bGx5IGNsZWFyIGl0cyBjb250ZW50LlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBidXR0b24gPSBodG1sYCR7XG4gKiAgdXNlci5pc0FkbWluXG4gKiAgICA/IGh0bWxgPGJ1dHRvbj5ERUxFVEU8L2J1dHRvbj5gXG4gKiAgICA6IG5vdGhpbmdcbiAqIH1gO1xuICogYGBgXG4gKlxuICogUHJlZmVyIHVzaW5nIGBub3RoaW5nYCBvdmVyIG90aGVyIGZhbHN5IHZhbHVlcyBhcyBpdCBwcm92aWRlcyBhIGNvbnNpc3RlbnRcbiAqIGJlaGF2aW9yIGJldHdlZW4gdmFyaW91cyBleHByZXNzaW9uIGJpbmRpbmcgY29udGV4dHMuXG4gKlxuICogSW4gY2hpbGQgZXhwcmVzc2lvbnMsIGB1bmRlZmluZWRgLCBgbnVsbGAsIGAnJ2AsIGFuZCBgbm90aGluZ2AgYWxsIGJlaGF2ZSB0aGVcbiAqIHNhbWUgYW5kIHJlbmRlciBubyBub2Rlcy4gSW4gYXR0cmlidXRlIGV4cHJlc3Npb25zLCBgbm90aGluZ2AgX3JlbW92ZXNfIHRoZVxuICogYXR0cmlidXRlLCB3aGlsZSBgdW5kZWZpbmVkYCBhbmQgYG51bGxgIHdpbGwgcmVuZGVyIGFuIGVtcHR5IHN0cmluZy4gSW5cbiAqIHByb3BlcnR5IGV4cHJlc3Npb25zIGBub3RoaW5nYCBiZWNvbWVzIGB1bmRlZmluZWRgLlxuICovXG5leHBvcnQgY29uc3Qgbm90aGluZyA9IFN5bWJvbC5mb3IoJ2xpdC1ub3RoaW5nJyk7XG4vKipcbiAqIFRoZSBjYWNoZSBvZiBwcmVwYXJlZCB0ZW1wbGF0ZXMsIGtleWVkIGJ5IHRoZSB0YWdnZWQgVGVtcGxhdGVTdHJpbmdzQXJyYXlcbiAqIGFuZCBfbm90XyBhY2NvdW50aW5nIGZvciB0aGUgc3BlY2lmaWMgdGVtcGxhdGUgdGFnIHVzZWQuIFRoaXMgbWVhbnMgdGhhdFxuICogdGVtcGxhdGUgdGFncyBjYW5ub3QgYmUgZHluYW1pYyAtIHRoZSBtdXN0IHN0YXRpY2FsbHkgYmUgb25lIG9mIGh0bWwsIHN2ZyxcbiAqIG9yIGF0dHIuIFRoaXMgcmVzdHJpY3Rpb24gc2ltcGxpZmllcyB0aGUgY2FjaGUgbG9va3VwLCB3aGljaCBpcyBvbiB0aGUgaG90XG4gKiBwYXRoIGZvciByZW5kZXJpbmcuXG4gKi9cbmNvbnN0IHRlbXBsYXRlQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBSZW5kZXJzIGEgdmFsdWUsIHVzdWFsbHkgYSBsaXQtaHRtbCBUZW1wbGF0ZVJlc3VsdCwgdG8gdGhlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIGNvbnRhaW5lclxuICogQHBhcmFtIG9wdGlvbnNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbmRlciA9ICh2YWx1ZSwgY29udGFpbmVyLCBvcHRpb25zKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgY29uc3QgcmVuZGVySWQgPSBERVZfTU9ERSA/IGRlYnVnTG9nUmVuZGVySWQrKyA6IDA7XG4gICAgY29uc3QgcGFydE93bmVyTm9kZSA9IChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yZW5kZXJCZWZvcmUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGNvbnRhaW5lcjtcbiAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgbGV0IHBhcnQgPSBwYXJ0T3duZXJOb2RlWydfJGxpdFBhcnQkJ107XG4gICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAga2luZDogJ2JlZ2luIHJlbmRlcicsXG4gICAgICAgIGlkOiByZW5kZXJJZCxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgcGFydCxcbiAgICB9KTtcbiAgICBpZiAocGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGVuZE5vZGUgPSAoX2IgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucmVuZGVyQmVmb3JlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBudWxsO1xuICAgICAgICAvLyBJbnRlcm5hbCBtb2RpZmljYXRpb246IGRvbid0IGNsZWFyIGNvbnRhaW5lciB0byBtYXRjaCBsaXQtaHRtbCAyLjBcbiAgICAgICAgaWYgKElOVEVSTkFMICYmXG4gICAgICAgICAgICAoKF9jID0gb3B0aW9ucykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNsZWFyQ29udGFpbmVyRm9yTGl0Mk1pZ3JhdGlvbk9ubHkpID09PVxuICAgICAgICAgICAgICAgIHRydWUpIHtcbiAgICAgICAgICAgIGxldCBuID0gY29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAvLyBDbGVhciBvbmx5IHVwIHRvIHRoZSBgZW5kTm9kZWAgYWthIGByZW5kZXJCZWZvcmVgIG5vZGUuXG4gICAgICAgICAgICB3aGlsZSAobiAmJiBuICE9PSBlbmROb2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IG4ubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBuID0gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICBwYXJ0T3duZXJOb2RlWydfJGxpdFBhcnQkJ10gPSBwYXJ0ID0gbmV3IENoaWxkUGFydChjb250YWluZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1hcmtlcigpLCBlbmROb2RlKSwgZW5kTm9kZSwgdW5kZWZpbmVkLCBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCA/IG9wdGlvbnMgOiB7fSk7XG4gICAgfVxuICAgIHBhcnQuXyRzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAga2luZDogJ2VuZCByZW5kZXInLFxuICAgICAgICBpZDogcmVuZGVySWQsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIHBhcnQsXG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnQ7XG59O1xuaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgIHJlbmRlci5zZXRTYW5pdGl6ZXIgPSBzZXRTYW5pdGl6ZXI7XG4gICAgcmVuZGVyLmNyZWF0ZVNhbml0aXplciA9IGNyZWF0ZVNhbml0aXplcjtcbiAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgcmVuZGVyLl90ZXN0T25seUNsZWFyU2FuaXRpemVyRmFjdG9yeURvTm90Q2FsbE9yRWxzZSA9XG4gICAgICAgICAgICBfdGVzdE9ubHlDbGVhclNhbml0aXplckZhY3RvcnlEb05vdENhbGxPckVsc2U7XG4gICAgfVxufVxuY29uc3Qgd2Fsa2VyID0gZC5jcmVhdGVUcmVlV2Fsa2VyKGQsIDEyOSAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVH0gKi8sIG51bGwsIGZhbHNlKTtcbmxldCBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgPSBub29wU2FuaXRpemVyO1xuLyoqXG4gKiBSZXR1cm5zIGFuIEhUTUwgc3RyaW5nIGZvciB0aGUgZ2l2ZW4gVGVtcGxhdGVTdHJpbmdzQXJyYXkgYW5kIHJlc3VsdCB0eXBlXG4gKiAoSFRNTCBvciBTVkcpLCBhbG9uZyB3aXRoIHRoZSBjYXNlLXNlbnNpdGl2ZSBib3VuZCBhdHRyaWJ1dGUgbmFtZXMgaW5cbiAqIHRlbXBsYXRlIG9yZGVyLiBUaGUgSFRNTCBjb250YWlucyBjb21tZW50IGNvbW1lbnQgbWFya2VycyBkZW5vdGluZyB0aGVcbiAqIGBDaGlsZFBhcnRgcyBhbmQgc3VmZml4ZXMgb24gYm91bmQgYXR0cmlidXRlcyBkZW5vdGluZyB0aGUgYEF0dHJpYnV0ZVBhcnRzYC5cbiAqXG4gKiBAcGFyYW0gc3RyaW5ncyB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5XG4gKiBAcGFyYW0gdHlwZSBIVE1MIG9yIFNWR1xuICogQHJldHVybiBBcnJheSBjb250YWluaW5nIGBbaHRtbCwgYXR0ck5hbWVzXWAgKGFycmF5IHJldHVybmVkIGZvciB0ZXJzZW5lc3MsXG4gKiAgICAgdG8gYXZvaWQgb2JqZWN0IGZpZWxkcyBzaW5jZSB0aGlzIGNvZGUgaXMgc2hhcmVkIHdpdGggbm9uLW1pbmlmaWVkIFNTUlxuICogICAgIGNvZGUpXG4gKi9cbmNvbnN0IGdldFRlbXBsYXRlSHRtbCA9IChzdHJpbmdzLCB0eXBlKSA9PiB7XG4gICAgLy8gSW5zZXJ0IG1ha2VycyBpbnRvIHRoZSB0ZW1wbGF0ZSBIVE1MIHRvIHJlcHJlc2VudCB0aGUgcG9zaXRpb24gb2ZcbiAgICAvLyBiaW5kaW5ncy4gVGhlIGZvbGxvd2luZyBjb2RlIHNjYW5zIHRoZSB0ZW1wbGF0ZSBzdHJpbmdzIHRvIGRldGVybWluZSB0aGVcbiAgICAvLyBzeW50YWN0aWMgcG9zaXRpb24gb2YgdGhlIGJpbmRpbmdzLiBUaGV5IGNhbiBiZSBpbiB0ZXh0IHBvc2l0aW9uLCB3aGVyZVxuICAgIC8vIHdlIGluc2VydCBhbiBIVE1MIGNvbW1lbnQsIGF0dHJpYnV0ZSB2YWx1ZSBwb3NpdGlvbiwgd2hlcmUgd2UgaW5zZXJ0IGFcbiAgICAvLyBzZW50aW5lbCBzdHJpbmcgYW5kIHJlLXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZSwgb3IgaW5zaWRlIGEgdGFnIHdoZXJlXG4gICAgLy8gd2UgaW5zZXJ0IHRoZSBzZW50aW5lbCBzdHJpbmcuXG4gICAgY29uc3QgbCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAvLyBTdG9yZXMgdGhlIGNhc2Utc2Vuc2l0aXZlIGJvdW5kIGF0dHJpYnV0ZSBuYW1lcyBpbiB0aGUgb3JkZXIgb2YgdGhlaXJcbiAgICAvLyBwYXJ0cy4gRWxlbWVudFBhcnRzIGFyZSBhbHNvIHJlZmxlY3RlZCBpbiB0aGlzIGFycmF5IGFzIHVuZGVmaW5lZFxuICAgIC8vIHJhdGhlciB0aGFuIGEgc3RyaW5nLCB0byBkaXNhbWJpZ3VhdGUgZnJvbSBhdHRyaWJ1dGUgYmluZGluZ3MuXG4gICAgY29uc3QgYXR0ck5hbWVzID0gW107XG4gICAgbGV0IGh0bWwgPSB0eXBlID09PSBTVkdfUkVTVUxUID8gJzxzdmc+JyA6ICcnO1xuICAgIC8vIFdoZW4gd2UncmUgaW5zaWRlIGEgcmF3IHRleHQgdGFnIChub3QgaXQncyB0ZXh0IGNvbnRlbnQpLCB0aGUgcmVnZXhcbiAgICAvLyB3aWxsIHN0aWxsIGJlIHRhZ1JlZ2V4IHNvIHdlIGNhbiBmaW5kIGF0dHJpYnV0ZXMsIGJ1dCB3aWxsIHN3aXRjaCB0b1xuICAgIC8vIHRoaXMgcmVnZXggd2hlbiB0aGUgdGFnIGVuZHMuXG4gICAgbGV0IHJhd1RleHRFbmRSZWdleDtcbiAgICAvLyBUaGUgY3VycmVudCBwYXJzaW5nIHN0YXRlLCByZXByZXNlbnRlZCBhcyBhIHJlZmVyZW5jZSB0byBvbmUgb2YgdGhlXG4gICAgLy8gcmVnZXhlc1xuICAgIGxldCByZWdleCA9IHRleHRFbmRSZWdleDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBzID0gc3RyaW5nc1tpXTtcbiAgICAgICAgLy8gVGhlIGluZGV4IG9mIHRoZSBlbmQgb2YgdGhlIGxhc3QgYXR0cmlidXRlIG5hbWUuIFdoZW4gdGhpcyBpc1xuICAgICAgICAvLyBwb3NpdGl2ZSBhdCBlbmQgb2YgYSBzdHJpbmcsIGl0IG1lYW5zIHdlJ3JlIGluIGFuIGF0dHJpYnV0ZSB2YWx1ZVxuICAgICAgICAvLyBwb3NpdGlvbiBhbmQgbmVlZCB0byByZXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZS5cbiAgICAgICAgLy8gV2UgYWxzbyB1c2UgYSBzcGVjaWFsIHZhbHVlIG9mIC0yIHRvIGluZGljYXRlIHRoYXQgd2UgZW5jb3VudGVyZWRcbiAgICAgICAgLy8gdGhlIGVuZCBvZiBhIHN0cmluZyBpbiBhdHRyaWJ1dGUgbmFtZSBwb3NpdGlvbi5cbiAgICAgICAgbGV0IGF0dHJOYW1lRW5kSW5kZXggPSAtMTtcbiAgICAgICAgbGV0IGF0dHJOYW1lO1xuICAgICAgICBsZXQgbGFzdEluZGV4ID0gMDtcbiAgICAgICAgbGV0IG1hdGNoO1xuICAgICAgICAvLyBUaGUgY29uZGl0aW9ucyBpbiB0aGlzIGxvb3AgaGFuZGxlIHRoZSBjdXJyZW50IHBhcnNlIHN0YXRlLCBhbmQgdGhlXG4gICAgICAgIC8vIGFzc2lnbm1lbnRzIHRvIHRoZSBgcmVnZXhgIHZhcmlhYmxlIGFyZSB0aGUgc3RhdGUgdHJhbnNpdGlvbnMuXG4gICAgICAgIHdoaWxlIChsYXN0SW5kZXggPCBzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIHN0YXJ0IHNlYXJjaGluZyBmcm9tIHdoZXJlIHdlIHByZXZpb3VzbHkgbGVmdCBvZmZcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICAgIG1hdGNoID0gcmVnZXguZXhlYyhzKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdEluZGV4ID0gcmVnZXgubGFzdEluZGV4O1xuICAgICAgICAgICAgaWYgKHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hbQ09NTUVOVF9TVEFSVF0gPT09ICchLS0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gY29tbWVudEVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtDT01NRU5UX1NUQVJUXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIHN0YXJ0ZWQgYSB3ZWlyZCBjb21tZW50LCBsaWtlIDwve1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9IGNvbW1lbnQyRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoW1RBR19OQU1FXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyYXdUZXh0RWxlbWVudC50ZXN0KG1hdGNoW1RBR19OQU1FXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlY29yZCBpZiB3ZSBlbmNvdW50ZXIgYSByYXctdGV4dCBlbGVtZW50LiBXZSdsbCBzd2l0Y2ggdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgcmVnZXggYXQgdGhlIGVuZCBvZiB0aGUgdGFnLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3VGV4dEVuZFJlZ2V4ID0gbmV3IFJlZ0V4cChgPC8ke21hdGNoW1RBR19OQU1FXX1gLCAnZycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoW0RZTkFNSUNfVEFHX05BTUVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JpbmRpbmdzIGluIHRhZyBuYW1lcyBhcmUgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHVzZSBzdGF0aWMgdGVtcGxhdGVzIGluc3RlYWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTZWUgaHR0cHM6Ly9saXQuZGV2L2RvY3MvdGVtcGxhdGVzL2V4cHJlc3Npb25zLyNzdGF0aWMtZXhwcmVzc2lvbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2V4ID09PSB0YWdFbmRSZWdleCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaFtFTlRJUkVfTUFUQ0hdID09PSAnPicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5kIG9mIGEgdGFnLiBJZiB3ZSBoYWQgc3RhcnRlZCBhIHJhdy10ZXh0IGVsZW1lbnQsIHVzZSB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZ2V4XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gcmF3VGV4dEVuZFJlZ2V4ICE9PSBudWxsICYmIHJhd1RleHRFbmRSZWdleCAhPT0gdm9pZCAwID8gcmF3VGV4dEVuZFJlZ2V4IDogdGV4dEVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBtYXkgYmUgZW5kaW5nIGFuIHVucXVvdGVkIGF0dHJpYnV0ZSB2YWx1ZSwgc28gbWFrZSBzdXJlIHdlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIGFueSBwZW5kaW5nIGF0dHJOYW1lRW5kSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWVFbmRJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtBVFRSSUJVVEVfTkFNRV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBdHRyaWJ1dGUgbmFtZSBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZUVuZEluZGV4ID0gLTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZUVuZEluZGV4ID0gcmVnZXgubGFzdEluZGV4IC0gbWF0Y2hbU1BBQ0VTX0FORF9FUVVBTFNdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWUgPSBtYXRjaFtBVFRSSUJVVEVfTkFNRV07XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoW1FVT1RFX0NIQVJdID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRhZ0VuZFJlZ2V4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtYXRjaFtRVU9URV9DSEFSXSA9PT0gJ1wiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVnZXggPT09IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4IHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgcmVnZXggPSB0YWdFbmRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2V4ID09PSBjb21tZW50RW5kUmVnZXggfHwgcmVnZXggPT09IGNvbW1lbnQyRW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICByZWdleCA9IHRleHRFbmRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE5vdCBvbmUgb2YgdGhlIGZpdmUgc3RhdGUgcmVnZXhlcywgc28gaXQgbXVzdCBiZSB0aGUgZHluYW1pY2FsbHlcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGVkIHJhdyB0ZXh0IHJlZ2V4IGFuZCB3ZSdyZSBhdCB0aGUgY2xvc2Ugb2YgdGhhdCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgcmF3VGV4dEVuZFJlZ2V4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIGF0dHJOYW1lRW5kSW5kZXgsIHdoaWNoIGluZGljYXRlcyB0aGF0IHdlIHNob3VsZFxuICAgICAgICAgICAgLy8gcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUsIGFzc2VydCB0aGF0IHdlJ3JlIGluIGEgdmFsaWQgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBwb3NpdGlvbiAtIGVpdGhlciBpbiBhIHRhZywgb3IgYSBxdW90ZWQgYXR0cmlidXRlIHZhbHVlLlxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTEgfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gdGFnRW5kUmVnZXggfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXggfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gZG91YmxlUXVvdGVBdHRyRW5kUmVnZXgsICd1bmV4cGVjdGVkIHBhcnNlIHN0YXRlIEInKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIGZvdXIgY2FzZXM6XG4gICAgICAgIC8vICAxLiBXZSdyZSBpbiB0ZXh0IHBvc2l0aW9uLCBhbmQgbm90IGluIGEgcmF3IHRleHQgZWxlbWVudFxuICAgICAgICAvLyAgICAgKHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXgpOiBpbnNlcnQgYSBjb21tZW50IG1hcmtlci5cbiAgICAgICAgLy8gIDIuIFdlIGhhdmUgYSBub24tbmVnYXRpdmUgYXR0ck5hbWVFbmRJbmRleCB3aGljaCBtZWFucyB3ZSBuZWVkIHRvXG4gICAgICAgIC8vICAgICByZXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZSB0byBhZGQgYSBib3VuZCBhdHRyaWJ1dGUgc3VmZml4LlxuICAgICAgICAvLyAgMy4gV2UncmUgYXQgdGhlIG5vbi1maXJzdCBiaW5kaW5nIGluIGEgbXVsdGktYmluZGluZyBhdHRyaWJ1dGUsIHVzZSBhXG4gICAgICAgIC8vICAgICBwbGFpbiBtYXJrZXIuXG4gICAgICAgIC8vICA0LiBXZSdyZSBzb21ld2hlcmUgZWxzZSBpbnNpZGUgdGhlIHRhZy4gSWYgd2UncmUgaW4gYXR0cmlidXRlIG5hbWVcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uIChhdHRyTmFtZUVuZEluZGV4ID09PSAtMiksIGFkZCBhIHNlcXVlbnRpYWwgc3VmZml4IHRvXG4gICAgICAgIC8vICAgICBnZW5lcmF0ZSBhIHVuaXF1ZSBhdHRyaWJ1dGUgbmFtZS5cbiAgICAgICAgLy8gRGV0ZWN0IGEgYmluZGluZyBuZXh0IHRvIHNlbGYtY2xvc2luZyB0YWcgZW5kIGFuZCBpbnNlcnQgYSBzcGFjZSB0b1xuICAgICAgICAvLyBzZXBhcmF0ZSB0aGUgbWFya2VyIGZyb20gdGhlIHRhZyBlbmQ6XG4gICAgICAgIGNvbnN0IGVuZCA9IHJlZ2V4ID09PSB0YWdFbmRSZWdleCAmJiBzdHJpbmdzW2kgKyAxXS5zdGFydHNXaXRoKCcvPicpID8gJyAnIDogJyc7XG4gICAgICAgIGh0bWwgKz1cbiAgICAgICAgICAgIHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXhcbiAgICAgICAgICAgICAgICA/IHMgKyBub2RlTWFya2VyXG4gICAgICAgICAgICAgICAgOiBhdHRyTmFtZUVuZEluZGV4ID49IDBcbiAgICAgICAgICAgICAgICAgICAgPyAoYXR0ck5hbWVzLnB1c2goYXR0ck5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGljZSgwLCBhdHRyTmFtZUVuZEluZGV4KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm91bmRBdHRyaWJ1dGVTdWZmaXggK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpY2UoYXR0ck5hbWVFbmRJbmRleCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlciArXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRcbiAgICAgICAgICAgICAgICAgICAgOiBzICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlciArXG4gICAgICAgICAgICAgICAgICAgICAgICAoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTIgPyAoYXR0ck5hbWVzLnB1c2godW5kZWZpbmVkKSwgaSkgOiBlbmQpO1xuICAgIH1cbiAgICBjb25zdCBodG1sUmVzdWx0ID0gaHRtbCArIChzdHJpbmdzW2xdIHx8ICc8Pz4nKSArICh0eXBlID09PSBTVkdfUkVTVUxUID8gJzwvc3ZnPicgOiAnJyk7XG4gICAgLy8gQSBzZWN1cml0eSBjaGVjayB0byBwcmV2ZW50IHNwb29maW5nIG9mIExpdCB0ZW1wbGF0ZSByZXN1bHRzLlxuICAgIC8vIEluIHRoZSBmdXR1cmUsIHdlIG1heSBiZSBhYmxlIHRvIHJlcGxhY2UgdGhpcyB3aXRoIEFycmF5LmlzVGVtcGxhdGVPYmplY3QsXG4gICAgLy8gdGhvdWdoIHdlIG1pZ2h0IG5lZWQgdG8gbWFrZSB0aGF0IGNoZWNrIGluc2lkZSBvZiB0aGUgaHRtbCBhbmQgc3ZnXG4gICAgLy8gZnVuY3Rpb25zLCBiZWNhdXNlIHByZWNvbXBpbGVkIHRlbXBsYXRlcyBkb24ndCBjb21lIGluIGFzXG4gICAgLy8gVGVtcGxhdGVTdHJpbmdBcnJheSBvYmplY3RzLlxuICAgIGlmICghQXJyYXkuaXNBcnJheShzdHJpbmdzKSB8fCAhc3RyaW5ncy5oYXNPd25Qcm9wZXJ0eSgncmF3JykpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAnaW52YWxpZCB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5JztcbiAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICAgICAgICBgSW50ZXJuYWwgRXJyb3I6IGV4cGVjdGVkIHRlbXBsYXRlIHN0cmluZ3MgdG8gYmUgYW4gYXJyYXkgYCArXG4gICAgICAgICAgICAgICAgICAgIGB3aXRoIGEgJ3JhdycgZmllbGQuIFBsZWFzZSBmaWxlIGEgYnVnIGF0IGAgK1xuICAgICAgICAgICAgICAgICAgICBgaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzL25ldz90ZW1wbGF0ZT1idWdfcmVwb3J0Lm1kIGAgK1xuICAgICAgICAgICAgICAgICAgICBgYW5kIGluY2x1ZGUgaW5mb3JtYXRpb24gYWJvdXQgeW91ciBidWlsZCB0b29saW5nLCBpZiBhbnkuYDtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIC8vIFJldHVybmVkIGFzIGFuIGFycmF5IGZvciB0ZXJzZW5lc3NcbiAgICByZXR1cm4gW1xuICAgICAgICBwb2xpY3kgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBwb2xpY3kuY3JlYXRlSFRNTChodG1sUmVzdWx0KVxuICAgICAgICAgICAgOiBodG1sUmVzdWx0LFxuICAgICAgICBhdHRyTmFtZXMsXG4gICAgXTtcbn07XG5jbGFzcyBUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICB7IHN0cmluZ3MsIFsnXyRsaXRUeXBlJCddOiB0eXBlIH0sIG9wdGlvbnMpIHtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLnBhcnRzID0gW107XG4gICAgICAgIGxldCBub2RlO1xuICAgICAgICBsZXQgbm9kZUluZGV4ID0gMDtcbiAgICAgICAgbGV0IGF0dHJOYW1lSW5kZXggPSAwO1xuICAgICAgICBjb25zdCBwYXJ0Q291bnQgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gdGhpcy5wYXJ0cztcbiAgICAgICAgLy8gQ3JlYXRlIHRlbXBsYXRlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgW2h0bWwsIGF0dHJOYW1lc10gPSBnZXRUZW1wbGF0ZUh0bWwoc3RyaW5ncywgdHlwZSk7XG4gICAgICAgIHRoaXMuZWwgPSBUZW1wbGF0ZS5jcmVhdGVFbGVtZW50KGh0bWwsIG9wdGlvbnMpO1xuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSB0aGlzLmVsLmNvbnRlbnQ7XG4gICAgICAgIC8vIFJlcGFyZW50IFNWRyBub2RlcyBpbnRvIHRlbXBsYXRlIHJvb3RcbiAgICAgICAgaWYgKHR5cGUgPT09IFNWR19SRVNVTFQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmVsLmNvbnRlbnQ7XG4gICAgICAgICAgICBjb25zdCBzdmdFbGVtZW50ID0gY29udGVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgc3ZnRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kKC4uLnN2Z0VsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2FsayB0aGUgdGVtcGxhdGUgdG8gZmluZCBiaW5kaW5nIG1hcmtlcnMgYW5kIGNyZWF0ZSBUZW1wbGF0ZVBhcnRzXG4gICAgICAgIHdoaWxlICgobm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpKSAhPT0gbnVsbCAmJiBwYXJ0cy5sZW5ndGggPCBwYXJ0Q291bnQpIHtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhZyA9IG5vZGUubG9jYWxOYW1lO1xuICAgICAgICAgICAgICAgICAgICAvLyBXYXJuIGlmIGB0ZXh0YXJlYWAgaW5jbHVkZXMgYW4gZXhwcmVzc2lvbiBhbmQgdGhyb3cgaWYgYHRlbXBsYXRlYFxuICAgICAgICAgICAgICAgICAgICAvLyBkb2VzIHNpbmNlIHRoZXNlIGFyZSBub3Qgc3VwcG9ydGVkLiBXZSBkbyB0aGlzIGJ5IGNoZWNraW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIGlubmVySFRNTCBmb3IgYW55dGhpbmcgdGhhdCBsb29rcyBsaWtlIGEgbWFya2VyLiBUaGlzIGNhdGNoZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FzZXMgbGlrZSBiaW5kaW5ncyBpbiB0ZXh0YXJlYSB0aGVyZSBtYXJrZXJzIHR1cm4gaW50byB0ZXh0IG5vZGVzLlxuICAgICAgICAgICAgICAgICAgICBpZiAoL14oPzp0ZXh0YXJlYXx0ZW1wbGF0ZSkkL2kudGVzdCh0YWcpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmlubmVySFRNTC5pbmNsdWRlcyhtYXJrZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtID0gYEV4cHJlc3Npb25zIGFyZSBub3Qgc3VwcG9ydGVkIGluc2lkZSBcXGAke3RhZ31cXGAgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGVsZW1lbnRzLiBTZWUgaHR0cHM6Ly9saXQuZGV2L21zZy9leHByZXNzaW9uLWluLSR7dGFnfSBmb3IgbW9yZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWcgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVXYXJuaW5nKCcnLCBtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUT0RPIChqdXN0aW5mYWduYW5pKTogZm9yIGF0dGVtcHRlZCBkeW5hbWljIHRhZyBuYW1lcywgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgICAvLyBpbmNyZW1lbnQgdGhlIGJpbmRpbmdJbmRleCwgYW5kIGl0J2xsIGJlIG9mZiBieSAxIGluIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gYW5kIG9mZiBieSB0d28gYWZ0ZXIgaXQuXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGRlZmVyIHJlbW92aW5nIGJvdW5kIGF0dHJpYnV0ZXMgYmVjYXVzZSBvbiBJRSB3ZSBtaWdodCBub3QgYmVcbiAgICAgICAgICAgICAgICAgICAgLy8gaXRlcmF0aW5nIGF0dHJpYnV0ZXMgaW4gdGhlaXIgdGVtcGxhdGUgb3JkZXIsIGFuZCB3b3VsZCBzb21ldGltZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGFuIGF0dHJpYnV0ZSB0aGF0IHdlIHN0aWxsIG5lZWQgdG8gY3JlYXRlIGEgcGFydCBmb3IuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJzVG9SZW1vdmUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIG5vZGUuZ2V0QXR0cmlidXRlTmFtZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYG5hbWVgIGlzIHRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgd2UncmUgaXRlcmF0aW5nIG92ZXIsIGJ1dCBub3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIF9uZWNjZXNzYXJpbHlfIHRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgd2Ugd2lsbCBjcmVhdGUgYSBwYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IuIFRoZXkgY2FuIGJlIGRpZmZlcmVudCBpbiBicm93c2VycyB0aGF0IGRvbid0IGl0ZXJhdGUgb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gc291cmNlIG9yZGVyLiBJbiB0aGF0IGNhc2UgdGhlIGF0dHJOYW1lcyBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGFpbnMgdGhlIGF0dHJpYnV0ZSBuYW1lIHdlJ2xsIHByb2Nlc3MgbmV4dC4gV2Ugb25seSBuZWVkIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlIG5hbWUgaGVyZSB0byBrbm93IGlmIHdlIHNob3VsZCBwcm9jZXNzIGEgYm91bmQgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbiB0aGlzIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZS5lbmRzV2l0aChib3VuZEF0dHJpYnV0ZVN1ZmZpeCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLnN0YXJ0c1dpdGgobWFya2VyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWxOYW1lID0gYXR0ck5hbWVzW2F0dHJOYW1lSW5kZXgrK107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnNUb1JlbW92ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFsTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvd2VyY2FzZSBmb3IgY2FzZS1zZW5zaXRpdmUgU1ZHIGF0dHJpYnV0ZXMgbGlrZSB2aWV3Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbm9kZS5nZXRBdHRyaWJ1dGUocmVhbE5hbWUudG9Mb3dlckNhc2UoKSArIGJvdW5kQXR0cmlidXRlU3VmZml4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGljcyA9IHZhbHVlLnNwbGl0KG1hcmtlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG0gPSAvKFsuP0BdKT8oLiopLy5leGVjKHJlYWxOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBVFRSSUJVVEVfUEFSVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBub2RlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBtWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nczogc3RhdGljcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0b3I6IG1bMV0gPT09ICcuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gUHJvcGVydHlQYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtWzFdID09PSAnPydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBCb29sZWFuQXR0cmlidXRlUGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1bMV0gPT09ICdAJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBFdmVudFBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQXR0cmlidXRlUGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEVMRU1FTlRfUEFSVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBub2RlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgYXR0cnNUb1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGJlbmNobWFyayB0aGUgcmVnZXggYWdhaW5zdCB0ZXN0aW5nIGZvciBlYWNoXG4gICAgICAgICAgICAgICAgLy8gb2YgdGhlIDMgcmF3IHRleHQgZWxlbWVudCBuYW1lcy5cbiAgICAgICAgICAgICAgICBpZiAocmF3VGV4dEVsZW1lbnQudGVzdChub2RlLnRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciByYXcgdGV4dCBlbGVtZW50cyB3ZSBuZWVkIHRvIHNwbGl0IHRoZSB0ZXh0IGNvbnRlbnQgb25cbiAgICAgICAgICAgICAgICAgICAgLy8gbWFya2VycywgY3JlYXRlIGEgVGV4dCBub2RlIGZvciBlYWNoIHNlZ21lbnQsIGFuZCBjcmVhdGVcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBUZW1wbGF0ZVBhcnQgZm9yIGVhY2ggbWFya2VyLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdzID0gbm9kZS50ZXh0Q29udGVudC5zcGxpdChtYXJrZXIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0SW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gdHJ1c3RlZFR5cGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnVzdGVkVHlwZXMuZW1wdHlTY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgdGV4dCBub2RlIGZvciBlYWNoIGxpdGVyYWwgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2Ugbm9kZXMgYXJlIGFsc28gdXNlZCBhcyB0aGUgbWFya2VycyBmb3Igbm9kZSBwYXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgY2FuJ3QgdXNlIGVtcHR5IHRleHQgbm9kZXMgYXMgbWFya2VycyBiZWNhdXNlIHRoZXkncmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vcm1hbGl6ZWQgd2hlbiBjbG9uaW5nIGluIElFIChjb3VsZCBzaW1wbGlmeSB3aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJRSBpcyBubyBsb25nZXIgc3VwcG9ydGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kKHN0cmluZ3NbaV0sIGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXYWxrIHBhc3QgdGhlIG1hcmtlciBub2RlIHdlIGp1c3QgYWRkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHsgdHlwZTogQ0hJTERfUEFSVCwgaW5kZXg6ICsrbm9kZUluZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90ZSBiZWNhdXNlIHRoaXMgbWFya2VyIGlzIGFkZGVkIGFmdGVyIHRoZSB3YWxrZXIncyBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub2RlLCBpdCB3aWxsIGJlIHdhbGtlZCB0byBpbiB0aGUgb3V0ZXIgbG9vcCAoYW5kIGlnbm9yZWQpLCBzb1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0byBhZGp1c3Qgbm9kZUluZGV4IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kKHN0cmluZ3NbbGFzdEluZGV4XSwgY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBub2RlLmRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT09IG1hcmtlck1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goeyB0eXBlOiBDSElMRF9QQVJULCBpbmRleDogbm9kZUluZGV4IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChpID0gbm9kZS5kYXRhLmluZGV4T2YobWFya2VyLCBpICsgMSkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tbWVudCBub2RlIGhhcyBhIGJpbmRpbmcgbWFya2VyIGluc2lkZSwgbWFrZSBhbiBpbmFjdGl2ZSBwYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgYmluZGluZyB3b24ndCB3b3JrLCBidXQgc3Vic2VxdWVudCBiaW5kaW5ncyB3aWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHsgdHlwZTogQ09NTUVOVF9QQVJULCBpbmRleDogbm9kZUluZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSB0byB0aGUgZW5kIG9mIHRoZSBtYXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgaSArPSBtYXJrZXIubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICBraW5kOiAndGVtcGxhdGUgcHJlcCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcyxcbiAgICAgICAgICAgIGNsb25hYmxlVGVtcGxhdGU6IHRoaXMuZWwsXG4gICAgICAgICAgICBwYXJ0czogdGhpcy5wYXJ0cyxcbiAgICAgICAgICAgIHN0cmluZ3MsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBPdmVycmlkZGVuIHZpYSBgbGl0SHRtbFBvbHlmaWxsU3VwcG9ydGAgdG8gcHJvdmlkZSBwbGF0Zm9ybSBzdXBwb3J0LlxuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIHN0YXRpYyBjcmVhdGVFbGVtZW50KGh0bWwsIF9vcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVzb2x2ZURpcmVjdGl2ZShwYXJ0LCB2YWx1ZSwgcGFyZW50ID0gcGFydCwgYXR0cmlidXRlSW5kZXgpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICB2YXIgX2Q7XG4gICAgLy8gQmFpbCBlYXJseSBpZiB0aGUgdmFsdWUgaXMgZXhwbGljaXRseSBub0NoYW5nZS4gTm90ZSwgdGhpcyBtZWFucyBhbnlcbiAgICAvLyBuZXN0ZWQgZGlyZWN0aXZlIGlzIHN0aWxsIGF0dGFjaGVkIGFuZCBpcyBub3QgcnVuLlxuICAgIGlmICh2YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBsZXQgY3VycmVudERpcmVjdGl2ZSA9IGF0dHJpYnV0ZUluZGV4ICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyAoX2EgPSBwYXJlbnQuX19kaXJlY3RpdmVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbYXR0cmlidXRlSW5kZXhdXG4gICAgICAgIDogcGFyZW50Ll9fZGlyZWN0aXZlO1xuICAgIGNvbnN0IG5leHREaXJlY3RpdmVDb25zdHJ1Y3RvciA9IGlzUHJpbWl0aXZlKHZhbHVlKVxuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6IC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgICAgICB2YWx1ZVsnXyRsaXREaXJlY3RpdmUkJ107XG4gICAgaWYgKChjdXJyZW50RGlyZWN0aXZlID09PSBudWxsIHx8IGN1cnJlbnREaXJlY3RpdmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnREaXJlY3RpdmUuY29uc3RydWN0b3IpICE9PSBuZXh0RGlyZWN0aXZlQ29uc3RydWN0b3IpIHtcbiAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgKF9iID0gY3VycmVudERpcmVjdGl2ZSA9PT0gbnVsbCB8fCBjdXJyZW50RGlyZWN0aXZlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50RGlyZWN0aXZlWydfJG5vdGlmeURpcmVjdGl2ZUNvbm5lY3Rpb25DaGFuZ2VkJ10pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKGN1cnJlbnREaXJlY3RpdmUsIGZhbHNlKTtcbiAgICAgICAgaWYgKG5leHREaXJlY3RpdmVDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjdXJyZW50RGlyZWN0aXZlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudERpcmVjdGl2ZSA9IG5ldyBuZXh0RGlyZWN0aXZlQ29uc3RydWN0b3IocGFydCk7XG4gICAgICAgICAgICBjdXJyZW50RGlyZWN0aXZlLl8kaW5pdGlhbGl6ZShwYXJ0LCBwYXJlbnQsIGF0dHJpYnV0ZUluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0cmlidXRlSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgKChfYyA9IChfZCA9IHBhcmVudCkuX19kaXJlY3RpdmVzKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAoX2QuX19kaXJlY3RpdmVzID0gW10pKVthdHRyaWJ1dGVJbmRleF0gPVxuICAgICAgICAgICAgICAgIGN1cnJlbnREaXJlY3RpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQuX19kaXJlY3RpdmUgPSBjdXJyZW50RGlyZWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjdXJyZW50RGlyZWN0aXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSByZXNvbHZlRGlyZWN0aXZlKHBhcnQsIGN1cnJlbnREaXJlY3RpdmUuXyRyZXNvbHZlKHBhcnQsIHZhbHVlLnZhbHVlcyksIGN1cnJlbnREaXJlY3RpdmUsIGF0dHJpYnV0ZUluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBBbiB1cGRhdGVhYmxlIGluc3RhbmNlIG9mIGEgVGVtcGxhdGUuIEhvbGRzIHJlZmVyZW5jZXMgdG8gdGhlIFBhcnRzIHVzZWQgdG9cbiAqIHVwZGF0ZSB0aGUgdGVtcGxhdGUgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFRlbXBsYXRlSW5zdGFuY2Uge1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBwYXJlbnQpIHtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl9wYXJ0cyA9IFtdO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl8kdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICB9XG4gICAgLy8gQ2FsbGVkIGJ5IENoaWxkUGFydCBwYXJlbnROb2RlIGdldHRlclxuICAgIGdldCBwYXJlbnROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJHBhcmVudC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICAvLyBTZWUgY29tbWVudCBpbiBEaXNjb25uZWN0YWJsZSBpbnRlcmZhY2UgZm9yIHdoeSB0aGlzIGlzIGEgZ2V0dGVyXG4gICAgZ2V0IF8kaXNDb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kcGFyZW50Ll8kaXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIC8vIFRoaXMgbWV0aG9kIGlzIHNlcGFyYXRlIGZyb20gdGhlIGNvbnN0cnVjdG9yIGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm4gYVxuICAgIC8vIERvY3VtZW50RnJhZ21lbnQgYW5kIHdlIGRvbid0IHdhbnQgdG8gaG9sZCBvbnRvIGl0IHdpdGggYW4gaW5zdGFuY2UgZmllbGQuXG4gICAgX2Nsb25lKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCB7IGVsOiB7IGNvbnRlbnQgfSwgcGFydHM6IHBhcnRzLCB9ID0gdGhpcy5fJHRlbXBsYXRlO1xuICAgICAgICBjb25zdCBmcmFnbWVudCA9ICgoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY3JlYXRpb25TY29wZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZCkuaW1wb3J0Tm9kZShjb250ZW50LCB0cnVlKTtcbiAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gZnJhZ21lbnQ7XG4gICAgICAgIGxldCBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgIGxldCBub2RlSW5kZXggPSAwO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IHRlbXBsYXRlUGFydCA9IHBhcnRzWzBdO1xuICAgICAgICB3aGlsZSAodGVtcGxhdGVQYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChub2RlSW5kZXggPT09IHRlbXBsYXRlUGFydC5pbmRleCkge1xuICAgICAgICAgICAgICAgIGxldCBwYXJ0O1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gQ0hJTERfUEFSVCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gbmV3IENoaWxkUGFydChub2RlLCBub2RlLm5leHRTaWJsaW5nLCB0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGVtcGxhdGVQYXJ0LnR5cGUgPT09IEFUVFJJQlVURV9QQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBuZXcgdGVtcGxhdGVQYXJ0LmN0b3Iobm9kZSwgdGVtcGxhdGVQYXJ0Lm5hbWUsIHRlbXBsYXRlUGFydC5zdHJpbmdzLCB0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGVtcGxhdGVQYXJ0LnR5cGUgPT09IEVMRU1FTlRfUEFSVCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gbmV3IEVsZW1lbnRQYXJ0KG5vZGUsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlUGFydCA9IHBhcnRzWysrcGFydEluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlSW5kZXggIT09ICh0ZW1wbGF0ZVBhcnQgPT09IG51bGwgfHwgdGVtcGxhdGVQYXJ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0ZW1wbGF0ZVBhcnQuaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG4gICAgX3VwZGF0ZSh2YWx1ZXMpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fcGFydHMpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnc2V0IHBhcnQnLFxuICAgICAgICAgICAgICAgICAgICBwYXJ0LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVzW2ldLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZUluZGV4OiBpLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlSW5zdGFuY2U6IHRoaXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnQuc3RyaW5ncyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQuXyRzZXRWYWx1ZSh2YWx1ZXMsIHBhcnQsIGkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgbnVtYmVyIG9mIHZhbHVlcyB0aGUgcGFydCBjb25zdW1lcyBpcyBwYXJ0LnN0cmluZ3MubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSB2YWx1ZXMgYXJlIGluIGJldHdlZW4gdGVtcGxhdGUgc3BhbnMuIFdlIGluY3JlbWVudCBpIGJ5IDFcbiAgICAgICAgICAgICAgICAgICAgLy8gbGF0ZXIgaW4gdGhlIGxvb3AsIHNvIGluY3JlbWVudCBpdCBieSBwYXJ0LnN0cmluZ3MubGVuZ3RoIC0gMiBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGkgKz0gcGFydC5zdHJpbmdzLmxlbmd0aCAtIDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBDaGlsZFBhcnQge1xuICAgIGNvbnN0cnVjdG9yKHN0YXJ0Tm9kZSwgZW5kTm9kZSwgcGFyZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy50eXBlID0gQ0hJTERfUEFSVDtcbiAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbm90aGluZztcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBmaWVsZHMgd2lsbCBiZSBwYXRjaGVkIG9udG8gQ2hpbGRQYXJ0cyB3aGVuIHJlcXVpcmVkIGJ5XG4gICAgICAgIC8vIEFzeW5jRGlyZWN0aXZlXG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuXyRzdGFydE5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgIHRoaXMuXyRlbmROb2RlID0gZW5kTm9kZTtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgLy8gTm90ZSBfX2lzQ29ubmVjdGVkIGlzIG9ubHkgZXZlciBhY2Nlc3NlZCBvbiBSb290UGFydHMgKGkuZS4gd2hlbiB0aGVyZSBpc1xuICAgICAgICAvLyBubyBfJHBhcmVudCk7IHRoZSB2YWx1ZSBvbiBhIG5vbi1yb290LXBhcnQgaXMgXCJkb24ndCBjYXJlXCIsIGJ1dCBjaGVja2luZ1xuICAgICAgICAvLyBmb3IgcGFyZW50IHdvdWxkIGJlIG1vcmUgY29kZVxuICAgICAgICB0aGlzLl9faXNDb25uZWN0ZWQgPSAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaXNDb25uZWN0ZWQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHRydWU7XG4gICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgIC8vIEV4cGxpY2l0bHkgaW5pdGlhbGl6ZSBmb3IgY29uc2lzdGVudCBjbGFzcyBzaGFwZS5cbiAgICAgICAgICAgIHRoaXMuX3RleHRTYW5pdGl6ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gU2VlIGNvbW1lbnQgaW4gRGlzY29ubmVjdGFibGUgaW50ZXJmYWNlIGZvciB3aHkgdGhpcyBpcyBhIGdldHRlclxuICAgIGdldCBfJGlzQ29ubmVjdGVkKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAvLyBDaGlsZFBhcnRzIHRoYXQgYXJlIG5vdCBhdCB0aGUgcm9vdCBzaG91bGQgYWx3YXlzIGJlIGNyZWF0ZWQgd2l0aCBhXG4gICAgICAgIC8vIHBhcmVudDsgb25seSBSb290Q2hpbGROb2RlJ3Mgd29uJ3QsIHNvIHRoZXkgcmV0dXJuIHRoZSBsb2NhbCBpc0Nvbm5lY3RlZFxuICAgICAgICAvLyBzdGF0ZVxuICAgICAgICByZXR1cm4gKF9iID0gKF9hID0gdGhpcy5fJHBhcmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLl8kaXNDb25uZWN0ZWQpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHRoaXMuX19pc0Nvbm5lY3RlZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHBhcmVudCBub2RlIGludG8gd2hpY2ggdGhlIHBhcnQgcmVuZGVycyBpdHMgY29udGVudC5cbiAgICAgKlxuICAgICAqIEEgQ2hpbGRQYXJ0J3MgY29udGVudCBjb25zaXN0cyBvZiBhIHJhbmdlIG9mIGFkamFjZW50IGNoaWxkIG5vZGVzIG9mXG4gICAgICogYC5wYXJlbnROb2RlYCwgcG9zc2libHkgYm9yZGVyZWQgYnkgJ21hcmtlciBub2RlcycgKGAuc3RhcnROb2RlYCBhbmRcbiAgICAgKiBgLmVuZE5vZGVgKS5cbiAgICAgKlxuICAgICAqIC0gSWYgYm90aCBgLnN0YXJ0Tm9kZWAgYW5kIGAuZW5kTm9kZWAgYXJlIG5vbi1udWxsLCB0aGVuIHRoZSBwYXJ0J3MgY29udGVudFxuICAgICAqIGNvbnNpc3RzIG9mIGFsbCBzaWJsaW5ncyBiZXR3ZWVuIGAuc3RhcnROb2RlYCBhbmQgYC5lbmROb2RlYCwgZXhjbHVzaXZlbHkuXG4gICAgICpcbiAgICAgKiAtIElmIGAuc3RhcnROb2RlYCBpcyBub24tbnVsbCBidXQgYC5lbmROb2RlYCBpcyBudWxsLCB0aGVuIHRoZSBwYXJ0J3NcbiAgICAgKiBjb250ZW50IGNvbnNpc3RzIG9mIGFsbCBzaWJsaW5ncyBmb2xsb3dpbmcgYC5zdGFydE5vZGVgLCB1cCB0byBhbmRcbiAgICAgKiBpbmNsdWRpbmcgdGhlIGxhc3QgY2hpbGQgb2YgYC5wYXJlbnROb2RlYC4gSWYgYC5lbmROb2RlYCBpcyBub24tbnVsbCwgdGhlblxuICAgICAqIGAuc3RhcnROb2RlYCB3aWxsIGFsd2F5cyBiZSBub24tbnVsbC5cbiAgICAgKlxuICAgICAqIC0gSWYgYm90aCBgLmVuZE5vZGVgIGFuZCBgLnN0YXJ0Tm9kZWAgYXJlIG51bGwsIHRoZW4gdGhlIHBhcnQncyBjb250ZW50XG4gICAgICogY29uc2lzdHMgb2YgYWxsIGNoaWxkIG5vZGVzIG9mIGAucGFyZW50Tm9kZWAuXG4gICAgICovXG4gICAgZ2V0IHBhcmVudE5vZGUoKSB7XG4gICAgICAgIGxldCBwYXJlbnROb2RlID0gd3JhcCh0aGlzLl8kc3RhcnROb2RlKS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl8kcGFyZW50O1xuICAgICAgICBpZiAocGFyZW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHBhcmVudE5vZGUubm9kZVR5cGUgPT09IDExIC8qIE5vZGUuRE9DVU1FTlRfRlJBR01FTlQgKi8pIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBwYXJlbnROb2RlIGlzIGEgRG9jdW1lbnRGcmFnbWVudCwgaXQgbWF5IGJlIGJlY2F1c2UgdGhlIERPTSBpc1xuICAgICAgICAgICAgLy8gc3RpbGwgaW4gdGhlIGNsb25lZCBmcmFnbWVudCBkdXJpbmcgaW5pdGlhbCByZW5kZXI7IGlmIHNvLCBnZXQgdGhlIHJlYWxcbiAgICAgICAgICAgIC8vIHBhcmVudE5vZGUgdGhlIHBhcnQgd2lsbCBiZSBjb21taXR0ZWQgaW50byBieSBhc2tpbmcgdGhlIHBhcmVudC5cbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyZW50Tm9kZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHBhcnQncyBsZWFkaW5nIG1hcmtlciBub2RlLCBpZiBhbnkuIFNlZSBgLnBhcmVudE5vZGVgIGZvciBtb3JlXG4gICAgICogaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgZ2V0IHN0YXJ0Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRzdGFydE5vZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJ0J3MgdHJhaWxpbmcgbWFya2VyIG5vZGUsIGlmIGFueS4gU2VlIGAucGFyZW50Tm9kZWAgZm9yIG1vcmVcbiAgICAgKiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgZW5kTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRlbmROb2RlO1xuICAgIH1cbiAgICBfJHNldFZhbHVlKHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQgPSB0aGlzKSB7XG4gICAgICAgIGlmIChERVZfTU9ERSAmJiB0aGlzLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhpcyBcXGBDaGlsZFBhcnRcXGAgaGFzIG5vIFxcYHBhcmVudE5vZGVcXGAgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYWNjZXB0IGEgdmFsdWUuIFRoaXMgbGlrZWx5IG1lYW5zIHRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIHBhcnQgd2FzIG1hbmlwdWxhdGVkIGluIGFuIHVuc3VwcG9ydGVkIHdheSBvdXRzaWRlIG9mIExpdCdzIGNvbnRyb2wgc3VjaCB0aGF0IHRoZSBwYXJ0J3MgbWFya2VyIG5vZGVzIHdlcmUgZWplY3RlZCBmcm9tIERPTS4gRm9yIGV4YW1wbGUsIHNldHRpbmcgdGhlIGVsZW1lbnQncyBcXGBpbm5lckhUTUxcXGAgb3IgXFxgdGV4dENvbnRlbnRcXGAgY2FuIGRvIHRoaXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQpO1xuICAgICAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpKSB7XG4gICAgICAgICAgICAvLyBOb24tcmVuZGVyaW5nIGNoaWxkIHZhbHVlcy4gSXQncyBpbXBvcnRhbnQgdGhhdCB0aGVzZSBkbyBub3QgcmVuZGVyXG4gICAgICAgICAgICAvLyBlbXB0eSB0ZXh0IG5vZGVzIHRvIGF2b2lkIGlzc3VlcyB3aXRoIHByZXZlbnRpbmcgZGVmYXVsdCA8c2xvdD5cbiAgICAgICAgICAgIC8vIGZhbGxiYWNrIGNvbnRlbnQuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG5vdGhpbmcgfHwgdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fJGNvbW1pdHRlZFZhbHVlICE9PSBub3RoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnY29tbWl0IG5vdGhpbmcgdG8gY2hpbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHRoaXMuXyRzdGFydE5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHRoaXMuXyRlbmROb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiB0aGlzLl8kcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fJGNsZWFyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSAhPT0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlICYmIHZhbHVlICE9PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZVsnXyRsaXRUeXBlJCddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZS5ub2RlVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21taXROb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0l0ZXJhYmxlKHZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0SXRlcmFibGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2ssIHdpbGwgcmVuZGVyIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9pbnNlcnQobm9kZSwgcmVmID0gdGhpcy5fJGVuZE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHdyYXAod3JhcCh0aGlzLl8kc3RhcnROb2RlKS5wYXJlbnROb2RlKS5pbnNlcnRCZWZvcmUobm9kZSwgcmVmKTtcbiAgICB9XG4gICAgX2NvbW1pdE5vZGUodmFsdWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodGhpcy5fJGNvbW1pdHRlZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fJGNsZWFyKCk7XG4gICAgICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTICYmXG4gICAgICAgICAgICAgICAgc2FuaXRpemVyRmFjdG9yeUludGVybmFsICE9PSBub29wU2FuaXRpemVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZU5hbWUgPSAoX2EgPSB0aGlzLl8kc3RhcnROb2RlLnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ub2RlTmFtZTtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Tm9kZU5hbWUgPT09ICdTVFlMRScgfHwgcGFyZW50Tm9kZU5hbWUgPT09ICdTQ1JJUFQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gJ0ZvcmJpZGRlbic7XG4gICAgICAgICAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudE5vZGVOYW1lID09PSAnU1RZTEUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBMaXQgZG9lcyBub3Qgc3VwcG9ydCBiaW5kaW5nIGluc2lkZSBzdHlsZSBub2Rlcy4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgVGhpcyBpcyBhIHNlY3VyaXR5IHJpc2ssIGFzIHN0eWxlIGluamVjdGlvbiBhdHRhY2tzIGNhbiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBleGZpbHRyYXRlIGRhdGEgYW5kIHNwb29mIFVJcy4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgQ29uc2lkZXIgaW5zdGVhZCB1c2luZyBjc3NcXGAuLi5cXGAgbGl0ZXJhbHMgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdG8gY29tcG9zZSBzdHlsZXMsIGFuZCBtYWtlIGRvIGR5bmFtaWMgc3R5bGluZyB3aXRoIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGNzcyBjdXN0b20gcHJvcGVydGllcywgOjpwYXJ0cywgPHNsb3Q+cywgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYW5kIGJ5IG11dGF0aW5nIHRoZSBET00gcmF0aGVyIHRoYW4gc3R5bGVzaGVldHMuYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgTGl0IGRvZXMgbm90IHN1cHBvcnQgYmluZGluZyBpbnNpZGUgc2NyaXB0IG5vZGVzLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBUaGlzIGlzIGEgc2VjdXJpdHkgcmlzaywgYXMgaXQgY291bGQgYWxsb3cgYXJiaXRyYXJ5IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGNvZGUgZXhlY3V0aW9uLmA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCBub2RlJyxcbiAgICAgICAgICAgICAgICBzdGFydDogdGhpcy5fJHN0YXJ0Tm9kZSxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHRoaXMuXyRwYXJlbnQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gdGhpcy5faW5zZXJ0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfY29tbWl0VGV4dCh2YWx1ZSkge1xuICAgICAgICAvLyBJZiB0aGUgY29tbWl0dGVkIHZhbHVlIGlzIGEgcHJpbWl0aXZlIGl0IG1lYW5zIHdlIGNhbGxlZCBfY29tbWl0VGV4dCBvblxuICAgICAgICAvLyB0aGUgcHJldmlvdXMgcmVuZGVyLCBhbmQgd2Uga25vdyB0aGF0IHRoaXMuXyRzdGFydE5vZGUubmV4dFNpYmxpbmcgaXMgYVxuICAgICAgICAvLyBUZXh0IG5vZGUuIFdlIGNhbiBub3cganVzdCByZXBsYWNlIHRoZSB0ZXh0IGNvbnRlbnQgKC5kYXRhKSBvZiB0aGUgbm9kZS5cbiAgICAgICAgaWYgKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAhPT0gbm90aGluZyAmJlxuICAgICAgICAgICAgaXNQcmltaXRpdmUodGhpcy5fJGNvbW1pdHRlZFZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RleHRTYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90ZXh0U2FuaXRpemVyID0gY3JlYXRlU2FuaXRpemVyKG5vZGUsICdkYXRhJywgJ3Byb3BlcnR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fdGV4dFNhbml0aXplcih2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgdGV4dCcsXG4gICAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUodGV4dE5vZGUpO1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gc2V0dGluZyB0ZXh0IGNvbnRlbnQsIGZvciBzZWN1cml0eSBwdXJwb3NlcyBpdCBtYXR0ZXJzIGEgbG90XG4gICAgICAgICAgICAgICAgLy8gd2hhdCB0aGUgcGFyZW50IGlzLiBGb3IgZXhhbXBsZSwgPHN0eWxlPiBhbmQgPHNjcmlwdD4gbmVlZCB0byBiZVxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZWQgd2l0aCBjYXJlLCB3aGlsZSA8c3Bhbj4gZG9lcyBub3QuIFNvIGZpcnN0IHdlIG5lZWQgdG8gcHV0IGFcbiAgICAgICAgICAgICAgICAvLyB0ZXh0IG5vZGUgaW50byB0aGUgZG9jdW1lbnQsIHRoZW4gd2UgY2FuIHNhbml0aXplIGl0cyBjb250ZW50LlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90ZXh0U2FuaXRpemVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGV4dFNhbml0aXplciA9IGNyZWF0ZVNhbml0aXplcih0ZXh0Tm9kZSwgJ2RhdGEnLCAncHJvcGVydHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl90ZXh0U2FuaXRpemVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnY29tbWl0IHRleHQnLFxuICAgICAgICAgICAgICAgICAgICBub2RlOiB0ZXh0Tm9kZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5kYXRhID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21taXROb2RlKGQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnY29tbWl0IHRleHQnLFxuICAgICAgICAgICAgICAgICAgICBub2RlOiB3cmFwKHRoaXMuXyRzdGFydE5vZGUpLm5leHRTaWJsaW5nLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBfY29tbWl0VGVtcGxhdGVSZXN1bHQocmVzdWx0KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgY29uc3QgeyB2YWx1ZXMsIFsnXyRsaXRUeXBlJCddOiB0eXBlIH0gPSByZXN1bHQ7XG4gICAgICAgIC8vIElmICRsaXRUeXBlJCBpcyBhIG51bWJlciwgcmVzdWx0IGlzIGEgcGxhaW4gVGVtcGxhdGVSZXN1bHQgYW5kIHdlIGdldFxuICAgICAgICAvLyB0aGUgdGVtcGxhdGUgZnJvbSB0aGUgdGVtcGxhdGUgY2FjaGUuIElmIG5vdCwgcmVzdWx0IGlzIGFcbiAgICAgICAgLy8gQ29tcGlsZWRUZW1wbGF0ZVJlc3VsdCBhbmQgXyRsaXRUeXBlJCBpcyBhIENvbXBpbGVkVGVtcGxhdGUgYW5kIHdlIG5lZWRcbiAgICAgICAgLy8gdG8gY3JlYXRlIHRoZSA8dGVtcGxhdGU+IGVsZW1lbnQgdGhlIGZpcnN0IHRpbWUgd2Ugc2VlIGl0LlxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHR5cGVvZiB0eXBlID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgPyB0aGlzLl8kZ2V0VGVtcGxhdGUocmVzdWx0KVxuICAgICAgICAgICAgOiAodHlwZS5lbCA9PT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgKHR5cGUuZWwgPSBUZW1wbGF0ZS5jcmVhdGVFbGVtZW50KHR5cGUuaCwgdGhpcy5vcHRpb25zKSksXG4gICAgICAgICAgICAgICAgdHlwZSk7XG4gICAgICAgIGlmICgoKF9hID0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuXyR0ZW1wbGF0ZSkgPT09IHRlbXBsYXRlKSB7XG4gICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgIGtpbmQ6ICd0ZW1wbGF0ZSB1cGRhdGluZycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgaW5zdGFuY2U6IHRoaXMuXyRjb21taXR0ZWRWYWx1ZSxcbiAgICAgICAgICAgICAgICBwYXJ0czogdGhpcy5fJGNvbW1pdHRlZFZhbHVlLl9wYXJ0cyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUuX3VwZGF0ZSh2YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVGVtcGxhdGVJbnN0YW5jZSh0ZW1wbGF0ZSwgdGhpcyk7XG4gICAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IGluc3RhbmNlLl9jbG9uZSh0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICBraW5kOiAndGVtcGxhdGUgaW5zdGFudGlhdGVkJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgICAgICAgICBwYXJ0czogaW5zdGFuY2UuX3BhcnRzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgICBmcmFnbWVudCxcbiAgICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGluc3RhbmNlLl91cGRhdGUodmFsdWVzKTtcbiAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAga2luZDogJ3RlbXBsYXRlIGluc3RhbnRpYXRlZCBhbmQgdXBkYXRlZCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgICAgICAgcGFydHM6IGluc3RhbmNlLl9wYXJ0cyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgZnJhZ21lbnQsXG4gICAgICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9jb21taXROb2RlKGZyYWdtZW50KTtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE92ZXJyaWRkZW4gdmlhIGBsaXRIdG1sUG9seWZpbGxTdXBwb3J0YCB0byBwcm92aWRlIHBsYXRmb3JtIHN1cHBvcnQuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kZ2V0VGVtcGxhdGUocmVzdWx0KSB7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUuZ2V0KHJlc3VsdC5zdHJpbmdzKTtcbiAgICAgICAgaWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlQ2FjaGUuc2V0KHJlc3VsdC5zdHJpbmdzLCAodGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUocmVzdWx0KSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG4gICAgX2NvbW1pdEl0ZXJhYmxlKHZhbHVlKSB7XG4gICAgICAgIC8vIEZvciBhbiBJdGVyYWJsZSwgd2UgY3JlYXRlIGEgbmV3IEluc3RhbmNlUGFydCBwZXIgaXRlbSwgdGhlbiBzZXQgaXRzXG4gICAgICAgIC8vIHZhbHVlIHRvIHRoZSBpdGVtLiBUaGlzIGlzIGEgbGl0dGxlIGJpdCBvZiBvdmVyaGVhZCBmb3IgZXZlcnkgaXRlbSBpblxuICAgICAgICAvLyBhbiBJdGVyYWJsZSwgYnV0IGl0IGxldHMgdXMgcmVjdXJzZSBlYXNpbHkgYW5kIGVmZmljaWVudGx5IHVwZGF0ZSBBcnJheXNcbiAgICAgICAgLy8gb2YgVGVtcGxhdGVSZXN1bHRzIHRoYXQgd2lsbCBiZSBjb21tb25seSByZXR1cm5lZCBmcm9tIGV4cHJlc3Npb25zIGxpa2U6XG4gICAgICAgIC8vIGFycmF5Lm1hcCgoaSkgPT4gaHRtbGAke2l9YCksIGJ5IHJldXNpbmcgZXhpc3RpbmcgVGVtcGxhdGVJbnN0YW5jZXMuXG4gICAgICAgIC8vIElmIHZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIHRoZSBwcmV2aW91cyByZW5kZXIgd2FzIG9mIGFuXG4gICAgICAgIC8vIGl0ZXJhYmxlIGFuZCB2YWx1ZSB3aWxsIGNvbnRhaW4gdGhlIENoaWxkUGFydHMgZnJvbSB0aGUgcHJldmlvdXNcbiAgICAgICAgLy8gcmVuZGVyLiBJZiB2YWx1ZSBpcyBub3QgYW4gYXJyYXksIGNsZWFyIHRoaXMgcGFydCBhbmQgbWFrZSBhIG5ld1xuICAgICAgICAvLyBhcnJheSBmb3IgQ2hpbGRQYXJ0cy5cbiAgICAgICAgaWYgKCFpc0FycmF5KHRoaXMuXyRjb21taXR0ZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fJGNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGV0cyB1cyBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGl0ZW1zIHdlIHN0YW1wZWQgc28gd2UgY2FuIGNsZWFyIGxlZnRvdmVyXG4gICAgICAgIC8vIGl0ZW1zIGZyb20gYSBwcmV2aW91cyByZW5kZXJcbiAgICAgICAgY29uc3QgaXRlbVBhcnRzID0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IGl0ZW1QYXJ0O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0SW5kZXggPT09IGl0ZW1QYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBubyBleGlzdGluZyBwYXJ0LCBjcmVhdGUgYSBuZXcgb25lXG4gICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IHRlc3QgcGVyZiBpbXBhY3Qgb2YgYWx3YXlzIGNyZWF0aW5nIHR3byBwYXJ0c1xuICAgICAgICAgICAgICAgIC8vIGluc3RlYWQgb2Ygc2hhcmluZyBwYXJ0cyBiZXR3ZWVuIG5vZGVzXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzLzEyNjZcbiAgICAgICAgICAgICAgICBpdGVtUGFydHMucHVzaCgoaXRlbVBhcnQgPSBuZXcgQ2hpbGRQYXJ0KHRoaXMuX2luc2VydChjcmVhdGVNYXJrZXIoKSksIHRoaXMuX2luc2VydChjcmVhdGVNYXJrZXIoKSksIHRoaXMsIHRoaXMub3B0aW9ucykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJldXNlIGFuIGV4aXN0aW5nIHBhcnRcbiAgICAgICAgICAgICAgICBpdGVtUGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbVBhcnQuXyRzZXRWYWx1ZShpdGVtKTtcbiAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0SW5kZXggPCBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBpdGVtUGFydHMgYWx3YXlzIGhhdmUgZW5kIG5vZGVzXG4gICAgICAgICAgICB0aGlzLl8kY2xlYXIoaXRlbVBhcnQgJiYgd3JhcChpdGVtUGFydC5fJGVuZE5vZGUpLm5leHRTaWJsaW5nLCBwYXJ0SW5kZXgpO1xuICAgICAgICAgICAgLy8gVHJ1bmNhdGUgdGhlIHBhcnRzIGFycmF5IHNvIF92YWx1ZSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAgICAgICAgaXRlbVBhcnRzLmxlbmd0aCA9IHBhcnRJbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBub2RlcyBjb250YWluZWQgd2l0aGluIHRoaXMgUGFydCBmcm9tIHRoZSBET00uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RhcnQgU3RhcnQgbm9kZSB0byBjbGVhciBmcm9tLCBmb3IgY2xlYXJpbmcgYSBzdWJzZXQgb2YgdGhlIHBhcnQnc1xuICAgICAqICAgICBET00gKHVzZWQgd2hlbiB0cnVuY2F0aW5nIGl0ZXJhYmxlcylcbiAgICAgKiBAcGFyYW0gZnJvbSAgV2hlbiBgc3RhcnRgIGlzIHNwZWNpZmllZCwgdGhlIGluZGV4IHdpdGhpbiB0aGUgaXRlcmFibGUgZnJvbVxuICAgICAqICAgICB3aGljaCBDaGlsZFBhcnRzIGFyZSBiZWluZyByZW1vdmVkLCB1c2VkIGZvciBkaXNjb25uZWN0aW5nIGRpcmVjdGl2ZXMgaW5cbiAgICAgKiAgICAgdGhvc2UgUGFydHMuXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfJGNsZWFyKHN0YXJ0ID0gd3JhcCh0aGlzLl8kc3RhcnROb2RlKS5uZXh0U2libGluZywgZnJvbSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuXyRub3RpZnlDb25uZWN0aW9uQ2hhbmdlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcywgZmFsc2UsIHRydWUsIGZyb20pO1xuICAgICAgICB3aGlsZSAoc3RhcnQgJiYgc3RhcnQgIT09IHRoaXMuXyRlbmROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBuID0gd3JhcChzdGFydCkubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB3cmFwKHN0YXJ0KS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHN0YXJ0ID0gbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbXBsZW1lbnRhdGlvbiBvZiBSb290UGFydCdzIGBpc0Nvbm5lY3RlZGAuIE5vdGUgdGhhdCB0aGlzIG1ldG9kXG4gICAgICogc2hvdWxkIG9ubHkgYmUgY2FsbGVkIG9uIGBSb290UGFydGBzICh0aGUgYENoaWxkUGFydGAgcmV0dXJuZWQgZnJvbSBhXG4gICAgICogdG9wLWxldmVsIGByZW5kZXIoKWAgY2FsbCkuIEl0IGhhcyBubyBlZmZlY3Qgb24gbm9uLXJvb3QgQ2hpbGRQYXJ0cy5cbiAgICAgKiBAcGFyYW0gaXNDb25uZWN0ZWQgV2hldGhlciB0byBzZXRcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBzZXRDb25uZWN0ZWQoaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodGhpcy5fJHBhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9faXNDb25uZWN0ZWQgPSBpc0Nvbm5lY3RlZDtcbiAgICAgICAgICAgIChfYSA9IHRoaXMuXyRub3RpZnlDb25uZWN0aW9uQ2hhbmdlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcywgaXNDb25uZWN0ZWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BhcnQuc2V0Q29ubmVjdGVkKCkgbWF5IG9ubHkgYmUgY2FsbGVkIG9uIGEgJyArXG4gICAgICAgICAgICAgICAgJ1Jvb3RQYXJ0IHJldHVybmVkIGZyb20gcmVuZGVyKCkuJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzLCBwYXJlbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy50eXBlID0gQVRUUklCVVRFX1BBUlQ7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbm90aGluZztcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmVjdGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgaWYgKHN0cmluZ3MubGVuZ3RoID4gMiB8fCBzdHJpbmdzWzBdICE9PSAnJyB8fCBzdHJpbmdzWzFdICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbmV3IEFycmF5KHN0cmluZ3MubGVuZ3RoIC0gMSkuZmlsbChuZXcgU3RyaW5nKCkpO1xuICAgICAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgdGhpcy5fc2FuaXRpemVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCB0YWdOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnRhZ05hbWU7XG4gICAgfVxuICAgIC8vIFNlZSBjb21tZW50IGluIERpc2Nvbm5lY3RhYmxlIGludGVyZmFjZSBmb3Igd2h5IHRoaXMgaXMgYSBnZXR0ZXJcbiAgICBnZXQgXyRpc0Nvbm5lY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRwYXJlbnQuXyRpc0Nvbm5lY3RlZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhpcyBwYXJ0IGJ5IHJlc29sdmluZyB0aGUgdmFsdWUgZnJvbSBwb3NzaWJseSBtdWx0aXBsZVxuICAgICAqIHZhbHVlcyBhbmQgc3RhdGljIHN0cmluZ3MgYW5kIGNvbW1pdHRpbmcgaXQgdG8gdGhlIERPTS5cbiAgICAgKiBJZiB0aGlzIHBhcnQgaXMgc2luZ2xlLXZhbHVlZCwgYHRoaXMuX3N0cmluZ3NgIHdpbGwgYmUgdW5kZWZpbmVkLCBhbmQgdGhlXG4gICAgICogbWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdpdGggYSBzaW5nbGUgdmFsdWUgYXJndW1lbnQuIElmIHRoaXMgcGFydCBpc1xuICAgICAqIG11bHRpLXZhbHVlLCBgdGhpcy5fc3RyaW5nc2Agd2lsbCBiZSBkZWZpbmVkLCBhbmQgdGhlIG1ldGhvZCBpcyBjYWxsZWRcbiAgICAgKiB3aXRoIHRoZSB2YWx1ZSBhcnJheSBvZiB0aGUgcGFydCdzIG93bmluZyBUZW1wbGF0ZUluc3RhbmNlLCBhbmQgYW4gb2Zmc2V0XG4gICAgICogaW50byB0aGUgdmFsdWUgYXJyYXkgZnJvbSB3aGljaCB0aGUgdmFsdWVzIHNob3VsZCBiZSByZWFkLlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG92ZXJsb2FkZWQgdGhpcyB3YXkgdG8gZWxpbWluYXRlIHNob3J0LWxpdmVkIGFycmF5IHNsaWNlc1xuICAgICAqIG9mIHRoZSB0ZW1wbGF0ZSBpbnN0YW5jZSB2YWx1ZXMsIGFuZCBhbGxvdyBhIGZhc3QtcGF0aCBmb3Igc2luZ2xlLXZhbHVlZFxuICAgICAqIHBhcnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBwYXJ0IHZhbHVlLCBvciBhbiBhcnJheSBvZiB2YWx1ZXMgZm9yIG11bHRpLXZhbHVlZCBwYXJ0c1xuICAgICAqIEBwYXJhbSB2YWx1ZUluZGV4IHRoZSBpbmRleCB0byBzdGFydCByZWFkaW5nIHZhbHVlcyBmcm9tLiBgdW5kZWZpbmVkYCBmb3JcbiAgICAgKiAgIHNpbmdsZS12YWx1ZWQgcGFydHNcbiAgICAgKiBAcGFyYW0gbm9Db21taXQgY2F1c2VzIHRoZSBwYXJ0IHRvIG5vdCBjb21taXQgaXRzIHZhbHVlIHRvIHRoZSBET00uIFVzZWRcbiAgICAgKiAgIGluIGh5ZHJhdGlvbiB0byBwcmltZSBhdHRyaWJ1dGUgcGFydHMgd2l0aCB0aGVpciBmaXJzdC1yZW5kZXJlZCB2YWx1ZSxcbiAgICAgKiAgIGJ1dCBub3Qgc2V0IHRoZSBhdHRyaWJ1dGUsIGFuZCBpbiBTU1IgdG8gbm8tb3AgdGhlIERPTSBvcGVyYXRpb24gYW5kXG4gICAgICogICBjYXB0dXJlIHRoZSB2YWx1ZSBmb3Igc2VyaWFsaXphdGlvbi5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIF8kc2V0VmFsdWUodmFsdWUsIGRpcmVjdGl2ZVBhcmVudCA9IHRoaXMsIHZhbHVlSW5kZXgsIG5vQ29tbWl0KSB7XG4gICAgICAgIGNvbnN0IHN0cmluZ3MgPSB0aGlzLnN0cmluZ3M7XG4gICAgICAgIC8vIFdoZXRoZXIgYW55IG9mIHRoZSB2YWx1ZXMgaGFzIGNoYW5nZWQsIGZvciBkaXJ0eS1jaGVja2luZ1xuICAgICAgICBsZXQgY2hhbmdlID0gZmFsc2U7XG4gICAgICAgIGlmIChzdHJpbmdzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFNpbmdsZS12YWx1ZSBiaW5kaW5nIGNhc2VcbiAgICAgICAgICAgIHZhbHVlID0gcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZSwgZGlyZWN0aXZlUGFyZW50LCAwKTtcbiAgICAgICAgICAgIGNoYW5nZSA9XG4gICAgICAgICAgICAgICAgIWlzUHJpbWl0aXZlKHZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICAodmFsdWUgIT09IHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAmJiB2YWx1ZSAhPT0gbm9DaGFuZ2UpO1xuICAgICAgICAgICAgaWYgKGNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gSW50ZXJwb2xhdGlvbiBjYXNlXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhbHVlID0gc3RyaW5nc1swXTtcbiAgICAgICAgICAgIGxldCBpLCB2O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0cmluZ3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdiA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgdmFsdWVzW3ZhbHVlSW5kZXggKyBpXSwgZGlyZWN0aXZlUGFyZW50LCBpKTtcbiAgICAgICAgICAgICAgICBpZiAodiA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHVzZXItcHJvdmlkZWQgdmFsdWUgaXMgYG5vQ2hhbmdlYCwgdXNlIHRoZSBwcmV2aW91cyB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjaGFuZ2UgfHwgKGNoYW5nZSA9ICFpc1ByaW1pdGl2ZSh2KSB8fCB2ICE9PSB0aGlzLl8kY29tbWl0dGVkVmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgIGlmICh2ID09PSBub3RoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbm90aGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgIT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gKHYgIT09IG51bGwgJiYgdiAhPT0gdm9pZCAwID8gdiA6ICcnKSArIHN0cmluZ3NbaSArIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBXZSBhbHdheXMgcmVjb3JkIGVhY2ggdmFsdWUsIGV2ZW4gaWYgb25lIGlzIGBub3RoaW5nYCwgZm9yIGZ1dHVyZVxuICAgICAgICAgICAgICAgIC8vIGNoYW5nZSBkZXRlY3Rpb24uXG4gICAgICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlW2ldID0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlICYmICFub0NvbW1pdCkge1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfY29tbWl0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBub3RoaW5nKSB7XG4gICAgICAgICAgICB3cmFwKHRoaXMuZWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Nhbml0aXplciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nhbml0aXplciA9IHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCh0aGlzLmVsZW1lbnQsIHRoaXMubmFtZSwgJ2F0dHJpYnV0ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3Nhbml0aXplcih2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwID8gdmFsdWUgOiAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgYXR0cmlidXRlJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd3JhcCh0aGlzLmVsZW1lbnQpLnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwID8gdmFsdWUgOiAnJykpO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgUHJvcGVydHlQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFBST1BFUlRZX1BBUlQ7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfY29tbWl0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Nhbml0aXplciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2FuaXRpemVyID0gc2FuaXRpemVyRmFjdG9yeUludGVybmFsKHRoaXMuZWxlbWVudCwgdGhpcy5uYW1lLCAncHJvcGVydHknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fc2FuaXRpemVyKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAga2luZDogJ2NvbW1pdCBwcm9wZXJ0eScsXG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHRoaXMuZWxlbWVudFt0aGlzLm5hbWVdID0gdmFsdWUgPT09IG5vdGhpbmcgPyB1bmRlZmluZWQgOiB2YWx1ZTtcbiAgICB9XG59XG4vLyBUZW1wb3Jhcnkgd29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9jcmJ1Zy5jb20vOTkzMjY4XG4vLyBDdXJyZW50bHksIGFueSBhdHRyaWJ1dGUgc3RhcnRpbmcgd2l0aCBcIm9uXCIgaXMgY29uc2lkZXJlZCB0byBiZSBhXG4vLyBUcnVzdGVkU2NyaXB0IHNvdXJjZS4gU3VjaCBib29sZWFuIGF0dHJpYnV0ZXMgbXVzdCBiZSBzZXQgdG8gdGhlIGVxdWl2YWxlbnRcbi8vIHRydXN0ZWQgZW1wdHlTY3JpcHQgdmFsdWUuXG5jb25zdCBlbXB0eVN0cmluZ0ZvckJvb2xlYW5BdHRyaWJ1dGUgPSB0cnVzdGVkVHlwZXNcbiAgICA/IHRydXN0ZWRUeXBlcy5lbXB0eVNjcmlwdFxuICAgIDogJyc7XG5jbGFzcyBCb29sZWFuQXR0cmlidXRlUGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBCT09MRUFOX0FUVFJJQlVURV9QQVJUO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgX2NvbW1pdFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICBraW5kOiAnY29tbWl0IGJvb2xlYW4gYXR0cmlidXRlJyxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiAhISh2YWx1ZSAmJiB2YWx1ZSAhPT0gbm90aGluZyksXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUgIT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCBlbXB0eVN0cmluZ0ZvckJvb2xlYW5BdHRyaWJ1dGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd3JhcCh0aGlzLmVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgRXZlbnRQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgc3RyaW5ncywgcGFyZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MsIHBhcmVudCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMudHlwZSA9IEVWRU5UX1BBUlQ7XG4gICAgICAgIGlmIChERVZfTU9ERSAmJiB0aGlzLnN0cmluZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBIFxcYDwke2VsZW1lbnQubG9jYWxOYW1lfT5cXGAgaGFzIGEgXFxgQCR7bmFtZX09Li4uXFxgIGxpc3RlbmVyIHdpdGggYCArXG4gICAgICAgICAgICAgICAgJ2ludmFsaWQgY29udGVudC4gRXZlbnQgbGlzdGVuZXJzIGluIHRlbXBsYXRlcyBtdXN0IGhhdmUgZXhhY3RseSAnICtcbiAgICAgICAgICAgICAgICAnb25lIGV4cHJlc3Npb24gYW5kIG5vIHN1cnJvdW5kaW5nIHRleHQuJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRXZlbnRQYXJ0IGRvZXMgbm90IHVzZSB0aGUgYmFzZSBfJHNldFZhbHVlL19yZXNvbHZlVmFsdWUgaW1wbGVtZW50YXRpb25cbiAgICAvLyBzaW5jZSB0aGUgZGlydHkgY2hlY2tpbmcgaXMgbW9yZSBjb21wbGV4XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kc2V0VmFsdWUobmV3TGlzdGVuZXIsIGRpcmVjdGl2ZVBhcmVudCA9IHRoaXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBuZXdMaXN0ZW5lciA9XG4gICAgICAgICAgICAoX2EgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIG5ld0xpc3RlbmVyLCBkaXJlY3RpdmVQYXJlbnQsIDApKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBub3RoaW5nO1xuICAgICAgICBpZiAobmV3TGlzdGVuZXIgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2xkTGlzdGVuZXIgPSB0aGlzLl8kY29tbWl0dGVkVmFsdWU7XG4gICAgICAgIC8vIElmIHRoZSBuZXcgdmFsdWUgaXMgbm90aGluZyBvciBhbnkgb3B0aW9ucyBjaGFuZ2Ugd2UgaGF2ZSB0byByZW1vdmUgdGhlXG4gICAgICAgIC8vIHBhcnQgYXMgYSBsaXN0ZW5lci5cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVtb3ZlTGlzdGVuZXIgPSAobmV3TGlzdGVuZXIgPT09IG5vdGhpbmcgJiYgb2xkTGlzdGVuZXIgIT09IG5vdGhpbmcpIHx8XG4gICAgICAgICAgICBuZXdMaXN0ZW5lci5jYXB0dXJlICE9PVxuICAgICAgICAgICAgICAgIG9sZExpc3RlbmVyLmNhcHR1cmUgfHxcbiAgICAgICAgICAgIG5ld0xpc3RlbmVyLm9uY2UgIT09XG4gICAgICAgICAgICAgICAgb2xkTGlzdGVuZXIub25jZSB8fFxuICAgICAgICAgICAgbmV3TGlzdGVuZXIucGFzc2l2ZSAhPT1cbiAgICAgICAgICAgICAgICBvbGRMaXN0ZW5lci5wYXNzaXZlO1xuICAgICAgICAvLyBJZiB0aGUgbmV3IHZhbHVlIGlzIG5vdCBub3RoaW5nIGFuZCB3ZSByZW1vdmVkIHRoZSBsaXN0ZW5lciwgd2UgaGF2ZVxuICAgICAgICAvLyB0byBhZGQgdGhlIHBhcnQgYXMgYSBsaXN0ZW5lci5cbiAgICAgICAgY29uc3Qgc2hvdWxkQWRkTGlzdGVuZXIgPSBuZXdMaXN0ZW5lciAhPT0gbm90aGluZyAmJlxuICAgICAgICAgICAgKG9sZExpc3RlbmVyID09PSBub3RoaW5nIHx8IHNob3VsZFJlbW92ZUxpc3RlbmVyKTtcbiAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgZXZlbnQgbGlzdGVuZXInLFxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgdmFsdWU6IG5ld0xpc3RlbmVyLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXI6IHNob3VsZFJlbW92ZUxpc3RlbmVyLFxuICAgICAgICAgICAgYWRkTGlzdGVuZXI6IHNob3VsZEFkZExpc3RlbmVyLFxuICAgICAgICAgICAgb2xkTGlzdGVuZXIsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2hvdWxkUmVtb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcywgb2xkTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRBZGRMaXN0ZW5lcikge1xuICAgICAgICAgICAgLy8gQmV3YXJlOiBJRTExIGFuZCBDaHJvbWUgNDEgZG9uJ3QgbGlrZSB1c2luZyB0aGUgbGlzdGVuZXIgYXMgdGhlXG4gICAgICAgICAgICAvLyBvcHRpb25zIG9iamVjdC4gRmlndXJlIG91dCBob3cgdG8gZGVhbCB3LyB0aGlzIGluIElFMTEgLSBtYXliZVxuICAgICAgICAgICAgLy8gcGF0Y2ggYWRkRXZlbnRMaXN0ZW5lcj9cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcywgbmV3TGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5ld0xpc3RlbmVyO1xuICAgIH1cbiAgICBoYW5kbGVFdmVudChldmVudCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlLmNhbGwoKF9iID0gKF9hID0gdGhpcy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaG9zdCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogdGhpcy5lbGVtZW50LCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgRWxlbWVudFBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHBhcmVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnR5cGUgPSBFTEVNRU5UX1BBUlQ7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIC8vIFNlZSBjb21tZW50IGluIERpc2Nvbm5lY3RhYmxlIGludGVyZmFjZSBmb3Igd2h5IHRoaXMgaXMgYSBnZXR0ZXJcbiAgICBnZXQgXyRpc0Nvbm5lY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRwYXJlbnQuXyRpc0Nvbm5lY3RlZDtcbiAgICB9XG4gICAgXyRzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAga2luZDogJ2NvbW1pdCB0byBlbGVtZW50IGJpbmRpbmcnLFxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgICAgICByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlKTtcbiAgICB9XG59XG4vKipcbiAqIEVORCBVU0VSUyBTSE9VTEQgTk9UIFJFTFkgT04gVEhJUyBPQkpFQ1QuXG4gKlxuICogUHJpdmF0ZSBleHBvcnRzIGZvciB1c2UgYnkgb3RoZXIgTGl0IHBhY2thZ2VzLCBub3QgaW50ZW5kZWQgZm9yIHVzZSBieVxuICogZXh0ZXJuYWwgdXNlcnMuXG4gKlxuICogV2UgY3VycmVudGx5IGRvIG5vdCBtYWtlIGEgbWFuZ2xlZCByb2xsdXAgYnVpbGQgb2YgdGhlIGxpdC1zc3IgY29kZS4gSW4gb3JkZXJcbiAqIHRvIGtlZXAgYSBudW1iZXIgb2YgKG90aGVyd2lzZSBwcml2YXRlKSB0b3AtbGV2ZWwgZXhwb3J0cyAgbWFuZ2xlZCBpbiB0aGVcbiAqIGNsaWVudCBzaWRlIGNvZGUsIHdlIGV4cG9ydCBhIF8kTEggb2JqZWN0IGNvbnRhaW5pbmcgdGhvc2UgbWVtYmVycyAob3JcbiAqIGhlbHBlciBtZXRob2RzIGZvciBhY2Nlc3NpbmcgcHJpdmF0ZSBmaWVsZHMgb2YgdGhvc2UgbWVtYmVycyksIGFuZCB0aGVuXG4gKiByZS1leHBvcnQgdGhlbSBmb3IgdXNlIGluIGxpdC1zc3IuIFRoaXMga2VlcHMgbGl0LXNzciBhZ25vc3RpYyB0byB3aGV0aGVyIHRoZVxuICogY2xpZW50LXNpZGUgY29kZSBpcyBiZWluZyB1c2VkIGluIGBkZXZgIG1vZGUgb3IgYHByb2RgIG1vZGUuXG4gKlxuICogVGhpcyBoYXMgYSB1bmlxdWUgbmFtZSwgdG8gZGlzYW1iaWd1YXRlIGl0IGZyb20gcHJpdmF0ZSBleHBvcnRzIGluXG4gKiBsaXQtZWxlbWVudCwgd2hpY2ggcmUtZXhwb3J0cyBhbGwgb2YgbGl0LWh0bWwuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IF8kTEggPSB7XG4gICAgLy8gVXNlZCBpbiBsaXQtc3NyXG4gICAgX2JvdW5kQXR0cmlidXRlU3VmZml4OiBib3VuZEF0dHJpYnV0ZVN1ZmZpeCxcbiAgICBfbWFya2VyOiBtYXJrZXIsXG4gICAgX21hcmtlck1hdGNoOiBtYXJrZXJNYXRjaCxcbiAgICBfSFRNTF9SRVNVTFQ6IEhUTUxfUkVTVUxULFxuICAgIF9nZXRUZW1wbGF0ZUh0bWw6IGdldFRlbXBsYXRlSHRtbCxcbiAgICAvLyBVc2VkIGluIGh5ZHJhdGVcbiAgICBfVGVtcGxhdGVJbnN0YW5jZTogVGVtcGxhdGVJbnN0YW5jZSxcbiAgICBfaXNJdGVyYWJsZTogaXNJdGVyYWJsZSxcbiAgICBfcmVzb2x2ZURpcmVjdGl2ZTogcmVzb2x2ZURpcmVjdGl2ZSxcbiAgICAvLyBVc2VkIGluIHRlc3RzIGFuZCBwcml2YXRlLXNzci1zdXBwb3J0XG4gICAgX0NoaWxkUGFydDogQ2hpbGRQYXJ0LFxuICAgIF9BdHRyaWJ1dGVQYXJ0OiBBdHRyaWJ1dGVQYXJ0LFxuICAgIF9Cb29sZWFuQXR0cmlidXRlUGFydDogQm9vbGVhbkF0dHJpYnV0ZVBhcnQsXG4gICAgX0V2ZW50UGFydDogRXZlbnRQYXJ0LFxuICAgIF9Qcm9wZXJ0eVBhcnQ6IFByb3BlcnR5UGFydCxcbiAgICBfRWxlbWVudFBhcnQ6IEVsZW1lbnRQYXJ0LFxufTtcbi8vIEFwcGx5IHBvbHlmaWxscyBpZiBhdmFpbGFibGVcbmNvbnN0IHBvbHlmaWxsU3VwcG9ydCA9IERFVl9NT0RFXG4gICAgPyB3aW5kb3cubGl0SHRtbFBvbHlmaWxsU3VwcG9ydERldk1vZGVcbiAgICA6IHdpbmRvdy5saXRIdG1sUG9seWZpbGxTdXBwb3J0O1xucG9seWZpbGxTdXBwb3J0ID09PSBudWxsIHx8IHBvbHlmaWxsU3VwcG9ydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9seWZpbGxTdXBwb3J0KFRlbXBsYXRlLCBDaGlsZFBhcnQpO1xuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBsaXQtaHRtbCB1c2FnZS5cbigoX2QgPSBnbG9iYWxUaGlzLmxpdEh0bWxWZXJzaW9ucykgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogKGdsb2JhbFRoaXMubGl0SHRtbFZlcnNpb25zID0gW10pKS5wdXNoKCcyLjIuMScpO1xuaWYgKERFVl9NT0RFICYmIGdsb2JhbFRoaXMubGl0SHRtbFZlcnNpb25zLmxlbmd0aCA+IDEpIHtcbiAgICBpc3N1ZVdhcm5pbmcoJ211bHRpcGxlLXZlcnNpb25zJywgYE11bHRpcGxlIHZlcnNpb25zIG9mIExpdCBsb2FkZWQuIGAgK1xuICAgICAgICBgTG9hZGluZyBtdWx0aXBsZSB2ZXJzaW9ucyBpcyBub3QgcmVjb21tZW5kZWQuYCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtaHRtbC5qcy5tYXAiLCJleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvY3VzdG9tLWVsZW1lbnQuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcHJvcGVydHkuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvc3RhdGUuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvZXZlbnQtb3B0aW9ucy5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hbGwuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYXN5bmMuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYXNzaWduZWQtZWxlbWVudHMuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYXNzaWduZWQtbm9kZXMuanNcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlY29yYXRvcnMuanMubWFwXG4iLCJleHBvcnQqZnJvbVwibGl0LWh0bWwvZGlyZWN0aXZlcy9pZi1kZWZpbmVkLmpzXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pZi1kZWZpbmVkLmpzLm1hcFxuIiwiaW1wb3J0XCJAbGl0L3JlYWN0aXZlLWVsZW1lbnRcIjtpbXBvcnRcImxpdC1odG1sXCI7ZXhwb3J0KmZyb21cImxpdC1lbGVtZW50L2xpdC1lbGVtZW50LmpzXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogQ29tcG9uZW50cyAqL1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9idXR0b24nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9jaGVja2JveCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3NkcGktaXRlbSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3NlbGVjdCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3RleHRhcmVhJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvdGV4dGZpZWxkJztcclxuaW1wb3J0ICcuL3N0cmVhbS1kZWNrL2Nvbm5lY3QnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2RvY3VtZW50JztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9