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
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <button .disabled=${this.disabled} .value=${this.value || ''}>
                <slot></slot>
            </button>
        `;
    }
};
Button = __decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('sdpi-button')
], Button);



/***/ }),

/***/ "./src/components/calendar.ts":
/*!************************************!*\
  !*** ./src/components/calendar.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Calendar": () => (/* binding */ Calendar)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/if-defined.js */ "./node_modules/lit/directives/if-defined.js");
/* harmony import */ var lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/directives/ref.js */ "./node_modules/lit/directives/ref.js");
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers */ "./src/controllers/index.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins */ "./src/mixins/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let Calendar = class Calendar extends (0,_mixins__WEBPACK_IMPORTED_MODULE_5__.Persisted)((0,_mixins__WEBPACK_IMPORTED_MODULE_5__.Focusable)((0,_mixins__WEBPACK_IMPORTED_MODULE_5__.Input)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement))) {
    constructor() {
        super(...arguments);
        this.store = new _controllers__WEBPACK_IMPORTED_MODULE_4__.StoreController(this);
        this.dataListController = new _controllers__WEBPACK_IMPORTED_MODULE_4__.DataListController(this);
        this.type = 'date';
    }
    static get styles() {
        return [
            ...super.styles,
            lit__WEBPACK_IMPORTED_MODULE_0__.css `
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
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <input
                ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_3__.ref)(this.focusElement)}
                type=${this.type}
                list=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)((_a = this.dataListController.dataList) === null || _a === void 0 ? void 0 : _a.id)}
                max=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.max)}
                min=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.min)}
                step=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.step)}
                .disabled=${this.disabled}
                .value=${this.value || ''}
                @change="${(ev) => this.store.save(ev.target.value)}"
            />
            ${this.dataListController.dataList}
        `;
    }
};
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)(),
    __metadata("design:type", String)
], Calendar.prototype, "max", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)(),
    __metadata("design:type", String)
], Calendar.prototype, "min", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Number }),
    __metadata("design:type", Number)
], Calendar.prototype, "step", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)(),
    __metadata("design:type", String)
], Calendar.prototype, "type", void 0);
Calendar = __decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('sdpi-calendar')
], Calendar);



/***/ }),

/***/ "./src/components/checkbox-list.ts":
/*!*****************************************!*\
  !*** ./src/components/checkbox-list.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxList": () => (/* binding */ CheckboxList)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _controllers_child_nodes_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/child-nodes-controller */ "./src/controllers/child-nodes-controller.ts");
/* harmony import */ var _controllers_store_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/store-controller */ "./src/controllers/store-controller.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins */ "./src/mixins/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let CheckboxList = class CheckboxList extends (0,_mixins__WEBPACK_IMPORTED_MODULE_4__.Gridded)((0,_mixins__WEBPACK_IMPORTED_MODULE_4__.Persisted)((0,_mixins__WEBPACK_IMPORTED_MODULE_4__.Checkable)((0,_mixins__WEBPACK_IMPORTED_MODULE_4__.Input)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement)))) {
    constructor() {
        super(...arguments);
        this._childNodes = new _controllers_child_nodes_controller__WEBPACK_IMPORTED_MODULE_2__.ChildNodesController(this, ['option']);
        this._store = new _controllers_store_controller__WEBPACK_IMPORTED_MODULE_3__.StoreController(this);
    }
    render() {
        return this.renderGrid(this._childNodes.items.map((option) => this.renderCheckable('checkbox', lit__WEBPACK_IMPORTED_MODULE_0__.html `<input
                        type="checkbox"
                        .checked=${(this.value && this.value.indexOf(option.value) > -1) || false}
                        .disabled=${this.disabled || option.disabled}
                        .value=${option.value}
                        @change=${this.handleChange}
                    />`, option.text)));
    }
    handleChange(ev) {
        const values = new Set(this.value);
        if (ev.target.checked) {
            values.add(ev.target.value);
        }
        else {
            values.delete(ev.target.value);
        }
        this._store.save(Array.from(values));
    }
};
CheckboxList = __decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('sdpi-checkbox-list')
], CheckboxList);



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
/* harmony import */ var lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/ref.js */ "./node_modules/lit/directives/ref.js");
/* harmony import */ var _controllers_store_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/store-controller */ "./src/controllers/store-controller.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins */ "./src/mixins/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let Checkbox = class Checkbox extends (0,_mixins__WEBPACK_IMPORTED_MODULE_4__.Persisted)((0,_mixins__WEBPACK_IMPORTED_MODULE_4__.Focusable)((0,_mixins__WEBPACK_IMPORTED_MODULE_4__.Checkable)((0,_mixins__WEBPACK_IMPORTED_MODULE_4__.Input)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement)))) {
    constructor() {
        super(...arguments);
        this._store = new _controllers_store_controller__WEBPACK_IMPORTED_MODULE_3__.StoreController(this);
    }
    render() {
        return this.renderCheckable('checkbox', lit__WEBPACK_IMPORTED_MODULE_0__.html `<input
                ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_2__.ref)(this.focusElement)}
                type="checkbox"
                .checked=${this.value || false}
                .disabled=${this.disabled}
                @change=${(ev) => this._store.save(ev.target.checked)}
            />`, this.label);
    }
};
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)(),
    __metadata("design:type", String)
], Checkbox.prototype, "label", void 0);
Checkbox = __decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('sdpi-checkbox')
], Checkbox);



/***/ }),

/***/ "./src/components/color.ts":
/*!*********************************!*\
  !*** ./src/components/color.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/ref.js */ "./node_modules/lit/directives/ref.js");
/* harmony import */ var _controllers_store_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/store-controller */ "./src/controllers/store-controller.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins */ "./src/mixins/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let Color = class Color extends (0,_mixins__WEBPACK_IMPORTED_MODULE_4__.Persisted)((0,_mixins__WEBPACK_IMPORTED_MODULE_4__.Focusable)((0,_mixins__WEBPACK_IMPORTED_MODULE_4__.Input)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement))) {
    constructor() {
        super(...arguments);
        this._store = new _controllers_store_controller__WEBPACK_IMPORTED_MODULE_3__.StoreController(this);
    }
    static get styles() {
        return [
            ...super.styles,
            lit__WEBPACK_IMPORTED_MODULE_0__.css `
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
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <input
                type="color"
                ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_2__.ref)(this.focusElement)}
                .disabled=${this.disabled}
                .defaultValue=${this.value || ''}
                @change=${(ev) => this._store.save(ev.target.value)}
            />
        `;
    }
};
Color = __decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('sdpi-color')
], Color);



/***/ }),

/***/ "./src/components/file.ts":
/*!********************************!*\
  !*** ./src/components/file.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "File": () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/ref.js */ "./node_modules/lit/directives/ref.js");
/* harmony import */ var lit_directives_until_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/directives/until.js */ "./node_modules/lit/directives/until.js");
/* harmony import */ var _controllers_store_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/store-controller */ "./src/controllers/store-controller.ts");
/* harmony import */ var _core_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/file */ "./src/core/file.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins */ "./src/mixins/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let File = class File extends (0,_mixins__WEBPACK_IMPORTED_MODULE_6__.Persisted)((0,_mixins__WEBPACK_IMPORTED_MODULE_6__.Focusable)((0,_mixins__WEBPACK_IMPORTED_MODULE_6__.Input)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement))) {
    constructor() {
        super(...arguments);
        this._store = new _controllers_store_controller__WEBPACK_IMPORTED_MODULE_4__.StoreController(this);
        this.label = '...';
    }
    static get styles() {
        return [
            ...super.styles,
            lit__WEBPACK_IMPORTED_MODULE_0__.css `
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
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div class="container">
                <input
                    ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_2__.ref)(this.focusElement)}
                    type="file"
                    id="file_input"
                    .accept=${this.accept || ''}
                    .disabled=${this.disabled}
                    @change="${async (ev) => this._store.save(await (0,_core_file__WEBPACK_IMPORTED_MODULE_5__.sanitize)(ev.target.value))}"
                />
                <label class="value" for="file_input">
                    <span .title=${this.value || ''}>${(0,lit_directives_until_js__WEBPACK_IMPORTED_MODULE_3__.until)((0,_core_file__WEBPACK_IMPORTED_MODULE_5__.getFileName)(this.value || ''))}</span>
                </label>
                <label class="button">
                    <sdpi-button .disabled=${this.disabled} @click=${() => { var _a; return (_a = this.focusElement.value) === null || _a === void 0 ? void 0 : _a.click(); }}> ${this.label} </sdpi-button>
                </label>
            </div>
        `;
    }
};
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)(),
    __metadata("design:type", String)
], File.prototype, "accept", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)(),
    __metadata("design:type", Object)
], File.prototype, "label", void 0);
File = __decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('sdpi-file')
], File);



/***/ }),

/***/ "./src/components/password.ts":
/*!************************************!*\
  !*** ./src/components/password.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Password": () => (/* binding */ Password)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/if-defined.js */ "./node_modules/lit/directives/if-defined.js");
/* harmony import */ var lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/directives/ref.js */ "./node_modules/lit/directives/ref.js");
/* harmony import */ var _controllers_store_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/store-controller */ "./src/controllers/store-controller.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins */ "./src/mixins/index.ts");
/* harmony import */ var _styles_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/host */ "./src/styles/host.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let Password = class Password extends (0,_mixins__WEBPACK_IMPORTED_MODULE_5__.Persisted)((0,_mixins__WEBPACK_IMPORTED_MODULE_5__.Focusable)((0,_mixins__WEBPACK_IMPORTED_MODULE_5__.Input)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement))) {
    constructor() {
        super(...arguments);
        this._store = new _controllers_store_controller__WEBPACK_IMPORTED_MODULE_4__.StoreController(this);
    }
    static get styles() {
        return [
            ...super.styles,
            _styles_host__WEBPACK_IMPORTED_MODULE_6__.hostStyle,
            lit__WEBPACK_IMPORTED_MODULE_0__.css `
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
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <input
                ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_3__.ref)(this.focusElement)}
                type="password"
                maxlength=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.maxLength)}
                .disabled=${this.disabled}
                .value=${this.value || ''}
                @input=${(ev) => this._store.save(ev.target.value)}
            />
        `;
    }
};
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({
        attribute: 'maxlength',
        type: Number
    }),
    __metadata("design:type", Number)
], Password.prototype, "maxLength", void 0);
Password = __decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('sdpi-password')
], Password);



/***/ }),

/***/ "./src/components/radio.ts":
/*!*********************************!*\
  !*** ./src/components/radio.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Radio": () => (/* binding */ Radio)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _controllers_child_nodes_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/child-nodes-controller */ "./src/controllers/child-nodes-controller.ts");
/* harmony import */ var _controllers_store_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/store-controller */ "./src/controllers/store-controller.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins */ "./src/mixins/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let Radio = class Radio extends (0,_mixins__WEBPACK_IMPORTED_MODULE_4__.Gridded)((0,_mixins__WEBPACK_IMPORTED_MODULE_4__.Persisted)((0,_mixins__WEBPACK_IMPORTED_MODULE_4__.Checkable)((0,_mixins__WEBPACK_IMPORTED_MODULE_4__.Input)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement)))) {
    constructor() {
        super(...arguments);
        this._childNodes = new _controllers_child_nodes_controller__WEBPACK_IMPORTED_MODULE_2__.ChildNodesController(this, ['option']);
        this._store = new _controllers_store_controller__WEBPACK_IMPORTED_MODULE_3__.StoreController(this);
    }
    render() {
        return this.renderGrid(this._childNodes.items.map((option) => this.renderCheckable('radio', lit__WEBPACK_IMPORTED_MODULE_0__.html `<input
                        type="radio"
                        name="_"
                        .checked=${this.value === option.value}
                        .disabled=${this.disabled || option.disabled}
                        .value=${option.value}
                        @change=${(ev) => this._store.save(ev.target.value)}
                    />`, option.text)));
    }
};
Radio = __decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('sdpi-radio')
], Radio);



/***/ }),

/***/ "./src/components/range.ts":
/*!*********************************!*\
  !*** ./src/components/range.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Range": () => (/* binding */ Range)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/if-defined.js */ "./node_modules/lit/directives/if-defined.js");
/* harmony import */ var lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/directives/ref.js */ "./node_modules/lit/directives/ref.js");
/* harmony import */ var _controllers_store_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/store-controller */ "./src/controllers/store-controller.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins */ "./src/mixins/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let Range = class Range extends (0,_mixins__WEBPACK_IMPORTED_MODULE_5__.Persisted)((0,_mixins__WEBPACK_IMPORTED_MODULE_5__.Focusable)((0,_mixins__WEBPACK_IMPORTED_MODULE_5__.Input)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement))) {
    constructor() {
        super(...arguments);
        this._store = new _controllers_store_controller__WEBPACK_IMPORTED_MODULE_4__.StoreController(this);
        this.showLabels = false;
    }
    static get styles() {
        return [
            ...super.styles,
            lit__WEBPACK_IMPORTED_MODULE_0__.css `
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
        const input = lit__WEBPACK_IMPORTED_MODULE_0__.html `<input
            ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_3__.ref)(this.focusElement)}
            type="range"
            max=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.max)}
            min=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.min)}
            step=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.step)}
            .disabled=${this.disabled}
            .title=${((_a = this.value) === null || _a === void 0 ? void 0 : _a.toString()) || ''}
            .value=${((_b = this.value) === null || _b === void 0 ? void 0 : _b.toString()) || ''}
            @change=${(ev) => this._store.save(ev.target.valueAsNumber)}
        />`;
        if (this.showLabels) {
            return lit__WEBPACK_IMPORTED_MODULE_0__.html `<div class="container">
                <div aria-disabled=${this.disabled} role="button" @click=${() => !this.disabled && this.min !== undefined && this._store.save(this.min)}>${this.min}</div>
                <div>${input}</div>
                <div aria-disabled=${this.disabled} role="button" @click=${() => !this.disabled && this.max !== undefined && this._store.save(this.max)}>${this.max}</div>
            </div>`;
        }
        else {
            return input;
        }
    }
};
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Number }),
    __metadata("design:type", Number)
], Range.prototype, "max", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Number }),
    __metadata("design:type", Number)
], Range.prototype, "min", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({
        attribute: 'showlabels',
        type: Boolean
    }),
    __metadata("design:type", Object)
], Range.prototype, "showLabels", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Number }),
    __metadata("design:type", Number)
], Range.prototype, "step", void 0);
Range = __decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('sdpi-range')
], Range);



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
/* harmony import */ var lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/ref.js */ "./node_modules/lit/directives/ref.js");
/* harmony import */ var _controllers_child_nodes_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/child-nodes-controller */ "./src/controllers/child-nodes-controller.ts");
/* harmony import */ var _controllers_store_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/store-controller */ "./src/controllers/store-controller.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins */ "./src/mixins/index.ts");
/* harmony import */ var _styles_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/host */ "./src/styles/host.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let Select = class Select extends (0,_mixins__WEBPACK_IMPORTED_MODULE_5__.Persisted)((0,_mixins__WEBPACK_IMPORTED_MODULE_5__.Focusable)((0,_mixins__WEBPACK_IMPORTED_MODULE_5__.Input)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement))) {
    constructor() {
        super(...arguments);
        this._childNodes = new _controllers_child_nodes_controller__WEBPACK_IMPORTED_MODULE_3__.ChildNodesController(this, ['optgroup', 'option']);
        this._store = new _controllers_store_controller__WEBPACK_IMPORTED_MODULE_4__.StoreController(this);
    }
    static get styles() {
        return [
            ...super.styles,
            _styles_host__WEBPACK_IMPORTED_MODULE_6__.hostStyle,
            lit__WEBPACK_IMPORTED_MODULE_0__.css `
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
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <select ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_2__.ref)(this.focusElement)} .disabled=${this.disabled} .value=${this.value || ''} @change=${(ev) => this._store.save(ev.target.value)}>
                <option value="" disabled .hidden=${!this.placeholder || this.value !== undefined}>${this.placeholder}</option>
                ${this.renderChildNodes()}
            </select>
        `;
    }
    renderChildNodes() {
        if (this.childNodes.length === 0) {
            return undefined;
        }
        const mapOptions = (item) => {
            if (item instanceof HTMLOptGroupElement) {
                return lit__WEBPACK_IMPORTED_MODULE_0__.html `<optgroup .label=${item.label}>${Array.from(item.childNodes).map(mapOptions)}</optgroup>`;
            }
            else if (item instanceof HTMLOptionElement) {
                return lit__WEBPACK_IMPORTED_MODULE_0__.html `<option .disabled=${item.disabled} .value=${item.text}>${item.label}</option>`;
            }
            else {
                return undefined;
            }
        };
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `${this._childNodes.items.map(mapOptions)}`;
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
/* harmony import */ var lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/directives/ref.js */ "./node_modules/lit/directives/ref.js");
/* harmony import */ var _controllers_store_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/store-controller */ "./src/controllers/store-controller.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins */ "./src/mixins/index.ts");
/* harmony import */ var _styles_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/host */ "./src/styles/host.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let Textarea = class Textarea extends (0,_mixins__WEBPACK_IMPORTED_MODULE_5__.Persisted)((0,_mixins__WEBPACK_IMPORTED_MODULE_5__.Focusable)((0,_mixins__WEBPACK_IMPORTED_MODULE_5__.Input)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement))) {
    constructor() {
        super(...arguments);
        this._store = new _controllers_store_controller__WEBPACK_IMPORTED_MODULE_4__.StoreController(this);
        this.rows = 3;
        this.showLength = false;
    }
    static get styles() {
        return [
            ...super.styles,
            _styles_host__WEBPACK_IMPORTED_MODULE_6__.hostStyle,
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
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <textarea
                ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_3__.ref)(this.focusElement)}
                type="textarea"
                maxlength=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.maxLength)}
                .disabled=${this.disabled}
                .id=${this.inputId}
                .rows=${this.rows}
                .value=${this.value || ''}
                @input=${(ev) => this._store.save(ev.target.value)}
            ></textarea>
            ${this.getLengthLabel()}
        `;
    }
    getLengthLabel() {
        var _a;
        if (this.showLength || this.maxLength) {
            const maxLengthLabel = this.maxLength ? lit__WEBPACK_IMPORTED_MODULE_0__.html `/${this.maxLength}` : undefined;
            return lit__WEBPACK_IMPORTED_MODULE_0__.html `<label class="length" for=${this.inputId}>${((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) || 0}${maxLengthLabel}</label>`;
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
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/if-defined.js */ "./node_modules/lit/directives/if-defined.js");
/* harmony import */ var lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/directives/ref.js */ "./node_modules/lit/directives/ref.js");
/* harmony import */ var _controllers_store_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/store-controller */ "./src/controllers/store-controller.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins */ "./src/mixins/index.ts");
/* harmony import */ var _styles_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/host */ "./src/styles/host.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let Textfield = class Textfield extends (0,_mixins__WEBPACK_IMPORTED_MODULE_5__.Persisted)((0,_mixins__WEBPACK_IMPORTED_MODULE_5__.Focusable)((0,_mixins__WEBPACK_IMPORTED_MODULE_5__.Input)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement))) {
    constructor() {
        super(...arguments);
        this._store = new _controllers_store_controller__WEBPACK_IMPORTED_MODULE_4__.StoreController(this);
        this.pattern = '';
        this.placeholder = '';
        this.required = false;
    }
    static get styles() {
        return [
            ...super.styles,
            _styles_host__WEBPACK_IMPORTED_MODULE_6__.hostStyle,
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
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <input
                ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_3__.ref)(this.focusElement)}
                type="text"
                maxlength=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.maxLength)}
                .disabled=${this.disabled}
                .pattern=${this.pattern}
                .placeholder=${this.placeholder}
                .required=${this.required}
                .value=${this.value || ''}
                @input=${(ev) => this._store.save(ev.target.value)}
            />
        `;
    }
};
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({
        attribute: 'maxlength',
        type: Number
    }),
    __metadata("design:type", Number)
], Textfield.prototype, "maxLength", void 0);
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
    constructor(host, nodeNames) {
        this.host = host;
        this.nodeNames = nodeNames;
        this.items = [];
        this.host.addController(this);
        this.observer = new MutationObserver(this.handleMutation.bind(this));
    }
    hostConnected() {
        this.observer.observe(this.host, { childList: true });
    }
    hostDisconnected() {
        this.observer.disconnect();
    }
    handleMutation(mutations) {
        let requestUpdate = false;
        mutations.forEach((mutation) => {
            for (const added of mutation.addedNodes) {
                if (this.nodeNames.indexOf(added.nodeName.toLowerCase()) > -1) {
                    requestUpdate = true;
                    this.items.push(added);
                }
            }
            mutation.removedNodes.forEach((node) => {
                const index = this.items.indexOf(node);
                if (index !== -1) {
                    requestUpdate = true;
                    this.items.splice(index, 1);
                }
            });
        });
        if (requestUpdate) {
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
}


/***/ }),

/***/ "./src/controllers/data-list-controller.ts":
/*!*************************************************!*\
  !*** ./src/controllers/data-list-controller.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataListController": () => (/* binding */ DataListController)
/* harmony export */ });
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils */ "./src/core/utils.ts");
/* harmony import */ var _child_nodes_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./child-nodes-controller */ "./src/controllers/child-nodes-controller.ts");


class DataListController extends _child_nodes_controller__WEBPACK_IMPORTED_MODULE_1__.ChildNodesController {
    constructor(host) {
        super(host, ['datalist']);
    }
    mutated(ev) {
        if (this.items.length === 0) {
            this.dataList = undefined;
        }
        else if (this.dataList === undefined || this.dataList.id !== this.items[0].id) {
            this.items[0].id = this.items[0].id || (0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.getUUID)();
            this.dataList = this.items[0].cloneNode(true);
        }
        else {
            ev.preventRequestUpdate = true;
        }
    }
}


/***/ }),

/***/ "./src/controllers/index.ts":
/*!**********************************!*\
  !*** ./src/controllers/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildNodesController": () => (/* reexport safe */ _child_nodes_controller__WEBPACK_IMPORTED_MODULE_0__.ChildNodesController),
/* harmony export */   "DataListController": () => (/* reexport safe */ _data_list_controller__WEBPACK_IMPORTED_MODULE_1__.DataListController),
/* harmony export */   "StoreController": () => (/* reexport safe */ _store_controller__WEBPACK_IMPORTED_MODULE_2__.StoreController)
/* harmony export */ });
/* harmony import */ var _child_nodes_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./child-nodes-controller */ "./src/controllers/child-nodes-controller.ts");
/* harmony import */ var _data_list_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-list-controller */ "./src/controllers/data-list-controller.ts");
/* harmony import */ var _store_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store-controller */ "./src/controllers/store-controller.ts");





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
        if (this._host.setting) {
            this._save = (0,_stream_deck_settings__WEBPACK_IMPORTED_MODULE_0__.useSettings)(this._host.setting, this._host.isGlobal, (value) => (this._host.value = value));
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

/***/ "./src/core/file.ts":
/*!**************************!*\
  !*** ./src/core/file.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFileName": () => (/* binding */ getFileName),
/* harmony export */   "isWindows": () => (/* binding */ isWindows),
/* harmony export */   "sanitize": () => (/* binding */ sanitize)
/* harmony export */ });
/* harmony import */ var _stream_deck_stream_deck_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stream-deck/stream-deck-client */ "./src/stream-deck/stream-deck-client.ts");

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
    const connectionInfo = await _stream_deck_stream_deck_client__WEBPACK_IMPORTED_MODULE_0__["default"].getConnectionInfo();
    return connectionInfo.info.application.platform == 'windows';
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

/***/ "./src/mixins/checkable.ts":
/*!*********************************!*\
  !*** ./src/mixins/checkable.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkable": () => (/* binding */ Checkable)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils */ "./src/core/utils.ts");


const Checkable = (superClass) => {
    class Checkable extends superClass {
        static get styles() {
            return [
                (0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.asArray)(super.styles),
                lit__WEBPACK_IMPORTED_MODULE_0__.css `
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
            return lit__WEBPACK_IMPORTED_MODULE_0__.html `
                <label class="checkable-container">
                    ${input}
                    <span class="checkable-symbol" role=${type}></span>
                    ${label ? lit__WEBPACK_IMPORTED_MODULE_0__.html `<span class="checkable-text">${label}</span>` : undefined}
                </label>
            `;
        }
    }
    return Checkable;
};


/***/ }),

/***/ "./src/mixins/focusable.ts":
/*!*********************************!*\
  !*** ./src/mixins/focusable.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Focusable": () => (/* binding */ Focusable)
/* harmony export */ });
/* harmony import */ var lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit/directives/ref.js */ "./node_modules/lit/directives/ref.js");

const Focusable = (superClass) => {
    class Focusable extends superClass {
        constructor() {
            super(...arguments);
            this.focusElement = (0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_0__.createRef)();
        }
        get canFocus() {
            return this.focusElement.value !== undefined;
        }
        focus() {
            var _a;
            console.log((_a = this.focusElement.value) === null || _a === void 0 ? void 0 : _a.type);
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


/***/ }),

/***/ "./src/mixins/gridded.ts":
/*!*******************************!*\
  !*** ./src/mixins/gridded.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gridded": () => (/* binding */ Gridded)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils */ "./src/core/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



const Gridded = (superClass) => {
    class Gridded extends superClass {
        constructor() {
            super(...arguments);
            this.columns = 1;
        }
        static get styles() {
            return [
                (0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.asArray)(super.styles),
                lit__WEBPACK_IMPORTED_MODULE_0__.css `
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
            return lit__WEBPACK_IMPORTED_MODULE_0__.html `<div class="gridded-container">${items.map((item) => lit__WEBPACK_IMPORTED_MODULE_0__.html `<div class="gridded-item gridded-col-${this.columns}">${item}</div>`)}</div>`;
        }
    }
    __decorate([
        (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Number }),
        __metadata("design:type", Object)
    ], Gridded.prototype, "columns", void 0);
    return Gridded;
};


/***/ }),

/***/ "./src/mixins/index.ts":
/*!*****************************!*\
  !*** ./src/mixins/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkable": () => (/* reexport safe */ _checkable__WEBPACK_IMPORTED_MODULE_0__.Checkable),
/* harmony export */   "Focusable": () => (/* reexport safe */ _focusable__WEBPACK_IMPORTED_MODULE_1__.Focusable),
/* harmony export */   "Gridded": () => (/* reexport safe */ _gridded__WEBPACK_IMPORTED_MODULE_2__.Gridded),
/* harmony export */   "Input": () => (/* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_3__.Input),
/* harmony export */   "Persisted": () => (/* reexport safe */ _persisted__WEBPACK_IMPORTED_MODULE_4__.Persisted)
/* harmony export */ });
/* harmony import */ var _checkable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkable */ "./src/mixins/checkable.ts");
/* harmony import */ var _focusable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusable */ "./src/mixins/focusable.ts");
/* harmony import */ var _gridded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gridded */ "./src/mixins/gridded.ts");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input */ "./src/mixins/input.ts");
/* harmony import */ var _persisted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./persisted */ "./src/mixins/persisted.ts");







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
    }
    __decorate([
        (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean }),
        __metadata("design:type", Object)
    ], Input.prototype, "disabled", void 0);
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
    ], Persisted.prototype, "setting", void 0);
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
                onChange((0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.get)(key, data.payload.settings));
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

/***/ "./node_modules/lit-html/development/async-directive.js":
/*!**************************************************************!*\
  !*** ./node_modules/lit-html/development/async-directive.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncDirective": () => (/* binding */ AsyncDirective),
/* harmony export */   "directive": () => (/* reexport safe */ _directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)
/* harmony export */ });
/* harmony import */ var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive-helpers.js */ "./node_modules/lit-html/development/directive-helpers.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive.js */ "./node_modules/lit-html/development/directive.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */



const DEV_MODE = true;
/**
 * Recursively walks down the tree of Parts/TemplateInstances/Directives to set
 * the connected state of directives and run `disconnected`/ `reconnected`
 * callbacks.
 *
 * @return True if there were children to disconnect; false otherwise
 */
const notifyChildrenConnectedChanged = (parent, isConnected) => {
    var _a, _b;
    const children = parent._$disconnectableChildren;
    if (children === undefined) {
        return false;
    }
    for (const obj of children) {
        // The existence of `_$notifyDirectiveConnectionChanged` is used as a "brand" to
        // disambiguate AsyncDirectives from other DisconnectableChildren
        // (as opposed to using an instanceof check to know when to call it); the
        // redundancy of "Directive" in the API name is to avoid conflicting with
        // `_$notifyConnectionChanged`, which exists `ChildParts` which are also in
        // this list
        // Disconnect Directive (and any nested directives contained within)
        // This property needs to remain unminified.
        (_b = (_a = obj)['_$notifyDirectiveConnectionChanged']) === null || _b === void 0 ? void 0 : _b.call(_a, isConnected, false);
        // Disconnect Part/TemplateInstance
        notifyChildrenConnectedChanged(obj, isConnected);
    }
    return true;
};
/**
 * Removes the given child from its parent list of disconnectable children, and
 * if the parent list becomes empty as a result, removes the parent from its
 * parent, and so forth up the tree when that causes subsequent parent lists to
 * become empty.
 */
const removeDisconnectableFromParent = (obj) => {
    let parent, children;
    do {
        if ((parent = obj._$parent) === undefined) {
            break;
        }
        children = parent._$disconnectableChildren;
        children.delete(obj);
        obj = parent;
    } while ((children === null || children === void 0 ? void 0 : children.size) === 0);
};
const addDisconnectableToParent = (obj) => {
    // Climb the parent tree, creating a sparse tree of children needing
    // disconnection
    for (let parent; (parent = obj._$parent); obj = parent) {
        let children = parent._$disconnectableChildren;
        if (children === undefined) {
            parent._$disconnectableChildren = children = new Set();
        }
        else if (children.has(obj)) {
            // Once we've reached a parent that already contains this child, we
            // can short-circuit
            break;
        }
        children.add(obj);
        installDisconnectAPI(parent);
    }
};
/**
 * Changes the parent reference of the ChildPart, and updates the sparse tree of
 * Disconnectable children accordingly.
 *
 * Note, this method will be patched onto ChildPart instances and called from
 * the core code when parts are moved between different parents.
 */
function reparentDisconnectables(newParent) {
    if (this._$disconnectableChildren !== undefined) {
        removeDisconnectableFromParent(this);
        this._$parent = newParent;
        addDisconnectableToParent(this);
    }
    else {
        this._$parent = newParent;
    }
}
/**
 * Sets the connected state on any directives contained within the committed
 * value of this part (i.e. within a TemplateInstance or iterable of
 * ChildParts) and runs their `disconnected`/`reconnected`s, as well as within
 * any directives stored on the ChildPart (when `valueOnly` is false).
 *
 * `isClearingValue` should be passed as `true` on a top-level part that is
 * clearing itself, and not as a result of recursively disconnecting directives
 * as part of a `clear` operation higher up the tree. This both ensures that any
 * directive on this ChildPart that produced a value that caused the clear
 * operation is not disconnected, and also serves as a performance optimization
 * to avoid needless bookkeeping when a subtree is going away; when clearing a
 * subtree, only the top-most part need to remove itself from the parent.
 *
 * `fromPartIndex` is passed only in the case of a partial `_clear` running as a
 * result of truncating an iterable.
 *
 * Note, this method will be patched onto ChildPart instances and called from the
 * core code when parts are cleared or the connection state is changed by the
 * user.
 */
function notifyChildPartConnectedChanged(isConnected, isClearingValue = false, fromPartIndex = 0) {
    const value = this._$committedValue;
    const children = this._$disconnectableChildren;
    if (children === undefined || children.size === 0) {
        return;
    }
    if (isClearingValue) {
        if (Array.isArray(value)) {
            // Iterable case: Any ChildParts created by the iterable should be
            // disconnected and removed from this ChildPart's disconnectable
            // children (starting at `fromPartIndex` in the case of truncation)
            for (let i = fromPartIndex; i < value.length; i++) {
                notifyChildrenConnectedChanged(value[i], false);
                removeDisconnectableFromParent(value[i]);
            }
        }
        else if (value != null) {
            // TemplateInstance case: If the value has disconnectable children (will
            // only be in the case that it is a TemplateInstance), we disconnect it
            // and remove it from this ChildPart's disconnectable children
            notifyChildrenConnectedChanged(value, false);
            removeDisconnectableFromParent(value);
        }
    }
    else {
        notifyChildrenConnectedChanged(this, isConnected);
    }
}
/**
 * Patches disconnection API onto ChildParts.
 */
const installDisconnectAPI = (obj) => {
    var _a, _b;
    var _c, _d;
    if (obj.type == _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.CHILD) {
        (_a = (_c = obj)._$notifyConnectionChanged) !== null && _a !== void 0 ? _a : (_c._$notifyConnectionChanged = notifyChildPartConnectedChanged);
        (_b = (_d = obj)._$reparentDisconnectables) !== null && _b !== void 0 ? _b : (_d._$reparentDisconnectables = reparentDisconnectables);
    }
};
/**
 * An abstract `Directive` base class whose `disconnected` method will be
 * called when the part containing the directive is cleared as a result of
 * re-rendering, or when the user calls `part.setConnected(false)` on
 * a part that was previously rendered containing the directive (as happens
 * when e.g. a LitElement disconnects from the DOM).
 *
 * If `part.setConnected(true)` is subsequently called on a
 * containing part, the directive's `reconnected` method will be called prior
 * to its next `update`/`render` callbacks. When implementing `disconnected`,
 * `reconnected` should also be implemented to be compatible with reconnection.
 *
 * Note that updates may occur while the directive is disconnected. As such,
 * directives should generally check the `this.isConnected` flag during
 * render/update to determine whether it is safe to subscribe to resources
 * that may prevent garbage collection.
 */
class AsyncDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
    constructor() {
        super(...arguments);
        // @internal
        this._$disconnectableChildren = undefined;
    }
    /**
     * Initialize the part with internal fields
     * @param part
     * @param parent
     * @param attributeIndex
     */
    _$initialize(part, parent, attributeIndex) {
        super._$initialize(part, parent, attributeIndex);
        addDisconnectableToParent(this);
        this.isConnected = part._$isConnected;
    }
    // This property needs to remain unminified.
    /**
     * Called from the core code when a directive is going away from a part (in
     * which case `shouldRemoveFromParent` should be true), and from the
     * `setChildrenConnected` helper function when recursively changing the
     * connection state of a tree (in which case `shouldRemoveFromParent` should
     * be false).
     *
     * @param isConnected
     * @param isClearingDirective - True when the directive itself is being
     *     removed; false when the tree is being disconnected
     * @internal
     */
    ['_$notifyDirectiveConnectionChanged'](isConnected, isClearingDirective = true) {
        var _a, _b;
        if (isConnected !== this.isConnected) {
            this.isConnected = isConnected;
            if (isConnected) {
                (_a = this.reconnected) === null || _a === void 0 ? void 0 : _a.call(this);
            }
            else {
                (_b = this.disconnected) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
        if (isClearingDirective) {
            notifyChildrenConnectedChanged(this, isConnected);
            removeDisconnectableFromParent(this);
        }
    }
    /**
     * Sets the value of the directive's Part outside the normal `update`/`render`
     * lifecycle of a directive.
     *
     * This method should not be called synchronously from a directive's `update`
     * or `render`.
     *
     * @param directive The directive to update
     * @param value The value to set
     */
    setValue(value) {
        if ((0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isSingleExpression)(this.__part)) {
            this.__part._$setValue(value, this);
        }
        else {
            // this.__attributeIndex will be defined in this case, but
            // assert it in dev mode
            if (DEV_MODE && this.__attributeIndex === undefined) {
                throw new Error(`Expected this.__attributeIndex to be a number`);
            }
            const newValues = [...this.__part._$committedValue];
            newValues[this.__attributeIndex] = value;
            this.__part._$setValue(newValues, this, 0);
        }
    }
    /**
     * User callbacks for implementing logic to release any resources/subscriptions
     * that may have been retained by this directive. Since directives may also be
     * re-connected, `reconnected` should also be implemented to restore the
     * working state of the directive prior to the next render.
     */
    disconnected() { }
    reconnected() { }
}
//# sourceMappingURL=async-directive.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directive-helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/lit-html/development/directive-helpers.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateResultType": () => (/* binding */ TemplateResultType),
/* harmony export */   "clearPart": () => (/* binding */ clearPart),
/* harmony export */   "getCommittedValue": () => (/* binding */ getCommittedValue),
/* harmony export */   "getDirectiveClass": () => (/* binding */ getDirectiveClass),
/* harmony export */   "insertPart": () => (/* binding */ insertPart),
/* harmony export */   "isDirectiveResult": () => (/* binding */ isDirectiveResult),
/* harmony export */   "isPrimitive": () => (/* binding */ isPrimitive),
/* harmony export */   "isSingleExpression": () => (/* binding */ isSingleExpression),
/* harmony export */   "isTemplateResult": () => (/* binding */ isTemplateResult),
/* harmony export */   "removePart": () => (/* binding */ removePart),
/* harmony export */   "setChildPartValue": () => (/* binding */ setChildPartValue),
/* harmony export */   "setCommittedValue": () => (/* binding */ setCommittedValue)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b;

const { _ChildPart: ChildPart } = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__._$LH;
const ENABLE_SHADYDOM_NOPATCH = true;
const wrap = ENABLE_SHADYDOM_NOPATCH &&
    ((_a = window.ShadyDOM) === null || _a === void 0 ? void 0 : _a.inUse) &&
    ((_b = window.ShadyDOM) === null || _b === void 0 ? void 0 : _b.noPatch) === true
    ? window.ShadyDOM.wrap
    : (node) => node;
/**
 * Tests if a value is a primitive value.
 *
 * See https://tc39.github.io/ecma262/#sec-typeof-operator
 */
const isPrimitive = (value) => value === null || (typeof value != 'object' && typeof value != 'function');
const TemplateResultType = {
    HTML: 1,
    SVG: 2,
};
/**
 * Tests if a value is a TemplateResult.
 */
const isTemplateResult = (value, type) => {
    var _a, _b;
    return type === undefined
        ? // This property needs to remain unminified.
            ((_a = value) === null || _a === void 0 ? void 0 : _a['_$litType$']) !== undefined
        : ((_b = value) === null || _b === void 0 ? void 0 : _b['_$litType$']) === type;
};
/**
 * Tests if a value is a DirectiveResult.
 */
const isDirectiveResult = (value) => { var _a; 
// This property needs to remain unminified.
return ((_a = value) === null || _a === void 0 ? void 0 : _a['_$litDirective$']) !== undefined; };
/**
 * Retrieves the Directive class for a DirectiveResult
 */
const getDirectiveClass = (value) => { var _a; 
// This property needs to remain unminified.
return (_a = value) === null || _a === void 0 ? void 0 : _a['_$litDirective$']; };
/**
 * Tests whether a part has only a single-expression with no strings to
 * interpolate between.
 *
 * Only AttributePart and PropertyPart can have multiple expressions.
 * Multi-expression parts have a `strings` property and single-expression
 * parts do not.
 */
const isSingleExpression = (part) => part.strings === undefined;
const createMarker = () => document.createComment('');
/**
 * Inserts a ChildPart into the given container ChildPart's DOM, either at the
 * end of the container ChildPart, or before the optional `refPart`.
 *
 * This does not add the part to the containerPart's committed value. That must
 * be done by callers.
 *
 * @param containerPart Part within which to add the new ChildPart
 * @param refPart Part before which to add the new ChildPart; when omitted the
 *     part added to the end of the `containerPart`
 * @param part Part to insert, or undefined to create a new part
 */
const insertPart = (containerPart, refPart, part) => {
    var _a;
    const container = wrap(containerPart._$startNode).parentNode;
    const refNode = refPart === undefined ? containerPart._$endNode : refPart._$startNode;
    if (part === undefined) {
        const startNode = wrap(container).insertBefore(createMarker(), refNode);
        const endNode = wrap(container).insertBefore(createMarker(), refNode);
        part = new ChildPart(startNode, endNode, containerPart, containerPart.options);
    }
    else {
        const endNode = wrap(part._$endNode).nextSibling;
        const oldParent = part._$parent;
        const parentChanged = oldParent !== containerPart;
        if (parentChanged) {
            (_a = part._$reparentDisconnectables) === null || _a === void 0 ? void 0 : _a.call(part, containerPart);
            // Note that although `_$reparentDisconnectables` updates the part's
            // `_$parent` reference after unlinking from its current parent, that
            // method only exists if Disconnectables are present, so we need to
            // unconditionally set it here
            part._$parent = containerPart;
            // Since the _$isConnected getter is somewhat costly, only
            // read it once we know the subtree has directives that need
            // to be notified
            let newConnectionState;
            if (part._$notifyConnectionChanged !== undefined &&
                (newConnectionState = containerPart._$isConnected) !==
                    oldParent._$isConnected) {
                part._$notifyConnectionChanged(newConnectionState);
            }
        }
        if (endNode !== refNode || parentChanged) {
            let start = part._$startNode;
            while (start !== endNode) {
                const n = wrap(start).nextSibling;
                wrap(container).insertBefore(start, refNode);
                start = n;
            }
        }
    }
    return part;
};
/**
 * Sets the value of a Part.
 *
 * Note that this should only be used to set/update the value of user-created
 * parts (i.e. those created using `insertPart`); it should not be used
 * by directives to set the value of the directive's container part. Directives
 * should return a value from `update`/`render` to update their part state.
 *
 * For directives that require setting their part value asynchronously, they
 * should extend `AsyncDirective` and call `this.setValue()`.
 *
 * @param part Part to set
 * @param value Value to set
 * @param index For `AttributePart`s, the index to set
 * @param directiveParent Used internally; should not be set by user
 */
const setChildPartValue = (part, value, directiveParent = part) => {
    part._$setValue(value, directiveParent);
    return part;
};
// A sentinal value that can never appear as a part value except when set by
// live(). Used to force a dirty-check to fail and cause a re-render.
const RESET_VALUE = {};
/**
 * Sets the committed value of a ChildPart directly without triggering the
 * commit stage of the part.
 *
 * This is useful in cases where a directive needs to update the part such
 * that the next update detects a value change or not. When value is omitted,
 * the next update will be guaranteed to be detected as a change.
 *
 * @param part
 * @param value
 */
const setCommittedValue = (part, value = RESET_VALUE) => (part._$committedValue = value);
/**
 * Returns the committed value of a ChildPart.
 *
 * The committed value is used for change detection and efficient updates of
 * the part. It can differ from the value set by the template or directive in
 * cases where the template value is transformed before being commited.
 *
 * - `TemplateResult`s are committed as a `TemplateInstance`
 * - Iterables are committed as `Array<ChildPart>`
 * - All other types are committed as the template value or value returned or
 *   set by a directive.
 *
 * @param part
 */
const getCommittedValue = (part) => part._$committedValue;
/**
 * Removes a ChildPart from the DOM, including any of its content.
 *
 * @param part The Part to remove
 */
const removePart = (part) => {
    var _a;
    (_a = part._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(part, false, true);
    let start = part._$startNode;
    const end = wrap(part._$endNode).nextSibling;
    while (start !== end) {
        const n = wrap(start).nextSibling;
        wrap(start).remove();
        start = n;
    }
};
const clearPart = (part) => {
    part._$clear();
};
//# sourceMappingURL=directive-helpers.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directive.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/development/directive.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directive": () => (/* binding */ Directive),
/* harmony export */   "PartType": () => (/* binding */ PartType),
/* harmony export */   "directive": () => (/* binding */ directive)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const PartType = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6,
};
/**
 * Creates a user-facing directive function from a Directive class. This
 * function has the same parameters as the directive's render() method.
 */
const directive = (c) => (...values) => ({
    // This property needs to remain unminified.
    ['_$litDirective$']: c,
    values,
});
/**
 * Base class for creating custom directives. Users should extend this class,
 * implement `render` and/or `update`, and then pass their subclass to
 * `directive`.
 */
class Directive {
    constructor(_partInfo) { }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    /** @internal */
    _$initialize(part, parent, attributeIndex) {
        this.__part = part;
        this._$parent = parent;
        this.__attributeIndex = attributeIndex;
    }
    /** @internal */
    _$resolve(part, props) {
        return this.update(part, props);
    }
    update(_part, props) {
        return this.render(...props);
    }
}
//# sourceMappingURL=directive.js.map

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

/***/ "./node_modules/lit-html/development/directives/private-async-helpers.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/private-async-helpers.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pauser": () => (/* binding */ Pauser),
/* harmony export */   "PseudoWeakRef": () => (/* binding */ PseudoWeakRef),
/* harmony export */   "forAwaitOf": () => (/* binding */ forAwaitOf)
/* harmony export */ });
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
// Note, this module is not included in package exports so that it's private to
// our first-party directives. If it ends up being useful, we can open it up and
// export it.
/**
 * Helper to iterate an AsyncIterable in its own closure.
 * @param iterable The iterable to iterate
 * @param callback The callback to call for each value. If the callback returns
 * `false`, the loop will be broken.
 */
const forAwaitOf = async (iterable, callback) => {
    for await (const v of iterable) {
        if ((await callback(v)) === false) {
            return;
        }
    }
};
/**
 * Holds a reference to an instance that can be disconnected and reconnected,
 * so that a closure over the ref (e.g. in a then function to a promise) does
 * not strongly hold a ref to the instance. Approximates a WeakRef but must
 * be manually connected & disconnected to the backing instance.
 */
class PseudoWeakRef {
    constructor(ref) {
        this._ref = ref;
    }
    /**
     * Disassociates the ref with the backing instance.
     */
    disconnect() {
        this._ref = undefined;
    }
    /**
     * Reassociates the ref with the backing instance.
     */
    reconnect(ref) {
        this._ref = ref;
    }
    /**
     * Retrieves the backing instance (will be undefined when disconnected)
     */
    deref() {
        return this._ref;
    }
}
/**
 * A helper to pause and resume waiting on a condition in an async function
 */
class Pauser {
    constructor() {
        this._promise = undefined;
        this._resolve = undefined;
    }
    /**
     * When paused, returns a promise to be awaited; when unpaused, returns
     * undefined. Note that in the microtask between the pauser being resumed
     * an an await of this promise resolving, the pauser could be paused again,
     * hence callers should check the promise in a loop when awaiting.
     * @returns A promise to be awaited when paused or undefined
     */
    get() {
        return this._promise;
    }
    /**
     * Creates a promise to be awaited
     */
    pause() {
        var _a;
        (_a = this._promise) !== null && _a !== void 0 ? _a : (this._promise = new Promise((resolve) => (this._resolve = resolve)));
    }
    /**
     * Resolves the promise which may be awaited
     */
    resume() {
        var _a;
        (_a = this._resolve) === null || _a === void 0 ? void 0 : _a.call(this);
        this._promise = this._resolve = undefined;
    }
}
//# sourceMappingURL=private-async-helpers.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directives/ref.js":
/*!*************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/ref.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRef": () => (/* binding */ createRef),
/* harmony export */   "ref": () => (/* binding */ ref)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _async_directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../async-directive.js */ "./node_modules/lit-html/development/async-directive.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


/**
 * Creates a new Ref object, which is container for a reference to an element.
 */
const createRef = () => new Ref();
/**
 * An object that holds a ref value.
 */
class Ref {
}
// When callbacks are used for refs, this map tracks the last value the callback
// was called with, for ensuring a directive doesn't clear the ref if the ref
// has already been rendered to a new spot
const lastElementForCallback = new WeakMap();
class RefDirective extends _async_directive_js__WEBPACK_IMPORTED_MODULE_1__.AsyncDirective {
    render(_ref) {
        return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
    }
    update(part, [ref]) {
        var _a;
        const refChanged = ref !== this._ref;
        if (refChanged && this._ref !== undefined) {
            // The ref passed to the directive has changed;
            // unset the previous ref's value
            this._updateRefValue(undefined);
        }
        if (refChanged || this._lastElementForRef !== this._element) {
            // We either got a new ref or this is the first render;
            // store the ref/element & update the ref value
            this._ref = ref;
            this._context = (_a = part.options) === null || _a === void 0 ? void 0 : _a.host;
            this._updateRefValue((this._element = part.element));
        }
        return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
    }
    _updateRefValue(element) {
        if (typeof this._ref === 'function') {
            // If the current ref was called with a previous value, call with
            // `undefined`; We do this to ensure callbacks are called in a consistent
            // way regardless of whether a ref might be moving up in the tree (in
            // which case it would otherwise be called with the new value before the
            // previous one unsets it) and down in the tree (where it would be unset
            // before being set)
            if (lastElementForCallback.get(this._ref) !== undefined) {
                this._ref.call(this._context, undefined);
            }
            lastElementForCallback.set(this._ref, element);
            // Call the ref with the new element value
            if (element !== undefined) {
                this._ref.call(this._context, element);
            }
        }
        else {
            this._ref.value = element;
        }
    }
    get _lastElementForRef() {
        var _a;
        return typeof this._ref === 'function'
            ? lastElementForCallback.get(this._ref)
            : (_a = this._ref) === null || _a === void 0 ? void 0 : _a.value;
    }
    disconnected() {
        // Only clear the box if our element is still the one in it (i.e. another
        // directive instance hasn't rendered its element to it before us); that
        // only happens in the event of the directive being cleared (not via manual
        // disconnection)
        if (this._lastElementForRef === this._element) {
            this._updateRefValue(undefined);
        }
    }
    reconnected() {
        // If we were manually disconnected, we can safely put our element back in
        // the box, since no rendering could have occurred to change its state
        this._updateRefValue(this._element);
    }
}
/**
 * Sets the value of a Ref object or calls a ref callback with the element it's
 * bound to.
 *
 * A Ref object acts as a container for a reference to an element. A ref
 * callback is a function that takes an element as its only argument.
 *
 * The ref directive sets the value of the Ref object or calls the ref callback
 * during rendering, if the referenced element changed.
 *
 * Note: If a ref callback is rendered to a different element position or is
 * removed in a subsequent render, it will first be called with `undefined`,
 * followed by another call with the new element it was rendered to (if any).
 *
 * ```js
 * // Using Ref object
 * const inputRef = createRef();
 * render(html`<input ${ref(inputRef)}>`, container);
 * inputRef.value.focus();
 *
 * // Using callback
 * const callback = (inputElement) => inputElement.focus();
 * render(html`<input ${ref(callback)}>`, container);
 * ```
 */
const ref = (0,_async_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(RefDirective);
//# sourceMappingURL=ref.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directives/until.js":
/*!***************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/until.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UntilDirective": () => (/* binding */ UntilDirective),
/* harmony export */   "until": () => (/* binding */ until)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
/* harmony import */ var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directive-helpers.js */ "./node_modules/lit-html/development/directive-helpers.js");
/* harmony import */ var _async_directive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../async-directive.js */ "./node_modules/lit-html/development/async-directive.js");
/* harmony import */ var _private_async_helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./private-async-helpers.js */ "./node_modules/lit-html/development/directives/private-async-helpers.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */





const isPromise = (x) => {
    return !(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.isPrimitive)(x) && typeof x.then === 'function';
};
// Effectively infinity, but a SMI.
const _infinity = 0x3fffffff;
class UntilDirective extends _async_directive_js__WEBPACK_IMPORTED_MODULE_3__.AsyncDirective {
    constructor() {
        super(...arguments);
        this.__lastRenderedIndex = _infinity;
        this.__values = [];
        this.__weakThis = new _private_async_helpers_js__WEBPACK_IMPORTED_MODULE_4__.PseudoWeakRef(this);
        this.__pauser = new _private_async_helpers_js__WEBPACK_IMPORTED_MODULE_4__.Pauser();
    }
    render(...args) {
        var _a;
        return (_a = args.find((x) => !isPromise(x))) !== null && _a !== void 0 ? _a : _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
    }
    update(_part, args) {
        const previousValues = this.__values;
        let previousLength = previousValues.length;
        this.__values = args;
        const weakThis = this.__weakThis;
        const pauser = this.__pauser;
        // If our initial render occurs while disconnected, ensure that the pauser
        // and weakThis are in the disconnected state
        if (!this.isConnected) {
            this.disconnected();
        }
        for (let i = 0; i < args.length; i++) {
            // If we've rendered a higher-priority value already, stop.
            if (i > this.__lastRenderedIndex) {
                break;
            }
            const value = args[i];
            // Render non-Promise values immediately
            if (!isPromise(value)) {
                this.__lastRenderedIndex = i;
                // Since a lower-priority value will never overwrite a higher-priority
                // synchronous value, we can stop processing now.
                return value;
            }
            // If this is a Promise we've already handled, skip it.
            if (i < previousLength && value === previousValues[i]) {
                continue;
            }
            // We have a Promise that we haven't seen before, so priorities may have
            // changed. Forget what we rendered before.
            this.__lastRenderedIndex = _infinity;
            previousLength = 0;
            // Note, the callback avoids closing over `this` so that the directive
            // can be gc'ed before the promise resolves; instead `this` is retrieved
            // from `weakThis`, which can break the hard reference in the closure when
            // the directive disconnects
            Promise.resolve(value).then(async (result) => {
                // If we're disconnected, wait until we're (maybe) reconnected
                // The while loop here handles the case that the connection state
                // thrashes, causing the pauser to resume and then get re-paused
                while (pauser.get()) {
                    await pauser.get();
                }
                // If the callback gets here and there is no `this`, it means that the
                // directive has been disconnected and garbage collected and we don't
                // need to do anything else
                const _this = weakThis.deref();
                if (_this !== undefined) {
                    const index = _this.__values.indexOf(value);
                    // If state.values doesn't contain the value, we've re-rendered without
                    // the value, so don't render it. Then, only render if the value is
                    // higher-priority than what's already been rendered.
                    if (index > -1 && index < _this.__lastRenderedIndex) {
                        _this.__lastRenderedIndex = index;
                        _this.setValue(result);
                    }
                }
            });
        }
        return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
    }
    disconnected() {
        this.__weakThis.disconnect();
        this.__pauser.pause();
    }
    reconnected() {
        this.__weakThis.reconnect(this);
        this.__pauser.resume();
    }
}
/**
 * Renders one of a series of values, including Promises, to a Part.
 *
 * Values are rendered in priority order, with the first argument having the
 * highest priority and the last argument having the lowest priority. If a
 * value is a Promise, low-priority values will be rendered until it resolves.
 *
 * The priority of values can be used to create placeholder content for async
 * data. For example, a Promise with pending content can be the first,
 * highest-priority, argument, and a non_promise loading indicator template can
 * be used as the second, lower-priority, argument. The loading indicator will
 * render immediately, and the primary content will render when the Promise
 * resolves.
 *
 * Example:
 *
 * ```js
 * const content = fetch('./content.txt').then(r => r.text());
 * html`${until(content, html`<span>Loading...</span>`)}`
 * ```
 */
const until = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(UntilDirective);
/**
 * The type of the class that powers this directive. Necessary for naming the
 * directive's return type.
 */
// export type {UntilDirective};
//# sourceMappingURL=until.js.map

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

/***/ "./node_modules/lit/directives/ref.js":
/*!********************************************!*\
  !*** ./node_modules/lit/directives/ref.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRef": () => (/* reexport safe */ lit_html_directives_ref_js__WEBPACK_IMPORTED_MODULE_0__.createRef),
/* harmony export */   "ref": () => (/* reexport safe */ lit_html_directives_ref_js__WEBPACK_IMPORTED_MODULE_0__.ref)
/* harmony export */ });
/* harmony import */ var lit_html_directives_ref_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/ref.js */ "./node_modules/lit-html/development/directives/ref.js");

//# sourceMappingURL=ref.js.map


/***/ }),

/***/ "./node_modules/lit/directives/until.js":
/*!**********************************************!*\
  !*** ./node_modules/lit/directives/until.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UntilDirective": () => (/* reexport safe */ lit_html_directives_until_js__WEBPACK_IMPORTED_MODULE_0__.UntilDirective),
/* harmony export */   "until": () => (/* reexport safe */ lit_html_directives_until_js__WEBPACK_IMPORTED_MODULE_0__.until)
/* harmony export */ });
/* harmony import */ var lit_html_directives_until_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/until.js */ "./node_modules/lit-html/development/directives/until.js");

//# sourceMappingURL=until.js.map


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
/* harmony import */ var _components_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/calendar */ "./src/components/calendar.ts");
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/checkbox */ "./src/components/checkbox.ts");
/* harmony import */ var _components_checkbox_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/checkbox-list */ "./src/components/checkbox-list.ts");
/* harmony import */ var _components_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/color */ "./src/components/color.ts");
/* harmony import */ var _components_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/file */ "./src/components/file.ts");
/* harmony import */ var _components_password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/password */ "./src/components/password.ts");
/* harmony import */ var _components_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/radio */ "./src/components/radio.ts");
/* harmony import */ var _components_range__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/range */ "./src/components/range.ts");
/* harmony import */ var _components_sdpi_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sdpi-item */ "./src/components/sdpi-item.ts");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/select */ "./src/components/select.ts");
/* harmony import */ var _components_textarea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/textarea */ "./src/components/textarea.ts");
/* harmony import */ var _components_textfield__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/textfield */ "./src/components/textfield.ts");
/* harmony import */ var _stream_deck_connect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stream-deck/connect */ "./src/stream-deck/connect.ts");
/* harmony import */ var _styles_document__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/document */ "./src/styles/document.ts");
















})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsK0JBQStCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxlQUFlO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGLE1BQU07QUFDL0YsNENBQTRDLGVBQWU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZB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Ozs7O0FDclBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxQztBQUNyQyxRQUFRLHdCQUF3QixFQUFFLDhDQUFJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyx1Q0FBdUM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHVDQUF1QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLDBFQUEwRSxpREFBTztBQUN4Rjs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGdCQUFnQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrQkFBK0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxJQUFJO0FBQ2hGLCtFQUErRSxLQUFLO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxlQUFlO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxzQ0FBc0M7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxvQ0FBb0M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHNDQUFzQztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTSxTQUFTLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLCtCQUErQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQkFBa0IsZUFBZSxLQUFLO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2NkM4aUI7QUFDOWlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDRCtDO0FBQy9DOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0R3QztBQUN4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEMEM7QUFDMUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0R1RjtBQUN2Rjs7Ozs7OztVQ0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0w2QjtBQUNFO0FBQ0E7QUFDSztBQUNSO0FBQ0Q7QUFDSTtBQUNIO0FBQ0E7QUFDSTtBQUNIO0FBQ0U7QUFDQztBQUNEO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uLnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvY29tcG9uZW50cy9jYWxlbmRhci50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvbXBvbmVudHMvY2hlY2tib3gtbGlzdC50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvbXBvbmVudHMvY2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb21wb25lbnRzL2NvbG9yLnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvY29tcG9uZW50cy9maWxlLnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvY29tcG9uZW50cy9wYXNzd29yZC50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvbXBvbmVudHMvcmFkaW8udHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb21wb25lbnRzL3JhbmdlLnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvY29tcG9uZW50cy9zZHBpLWl0ZW0udHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb21wb25lbnRzL3NlbGVjdC50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvbXBvbmVudHMvdGV4dGFyZWEudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb21wb25lbnRzL3RleHRmaWVsZC50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvbnRyb2xsZXJzL2NoaWxkLW5vZGVzLWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb250cm9sbGVycy9kYXRhLWxpc3QtY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvbnRyb2xsZXJzL2luZGV4LnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvY29udHJvbGxlcnMvc3RvcmUtY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvcmUvZXZlbnRzLnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvY29yZS9maWxlLnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvY29yZS9wcm9taXNlcy50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvcmUvdGltZW91dC50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvcmUvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9taXhpbnMvY2hlY2thYmxlLnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvbWl4aW5zL2ZvY3VzYWJsZS50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL21peGlucy9ncmlkZGVkLnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvbWl4aW5zL2luZGV4LnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvbWl4aW5zL2lucHV0LnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvbWl4aW5zL3BlcnNpc3RlZC50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL3N0cmVhbS1kZWNrL2Nvbm5lY3QudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9zdHJlYW0tZGVjay9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL3N0cmVhbS1kZWNrL3N0cmVhbS1kZWNrLWNsaWVudC50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL3N0eWxlcy9kb2N1bWVudC50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL3N0eWxlcy9ob3N0LnRzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2Nzcy10YWcuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9iYXNlLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvY3VzdG9tLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9ldmVudC1vcHRpb25zLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hbGwuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3NpZ25lZC1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9zZHBpLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzc2lnbmVkLW5vZGVzLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvcXVlcnktYXN5bmMuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9xdWVyeS5qcyIsIndlYnBhY2s6Ly9zZHBpLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL3N0YXRlLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L3JlYWN0aXZlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9saXQtZWxlbWVudC9kZXZlbG9wbWVudC9saXQtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zZHBpLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2FzeW5jLWRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9zZHBpLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2RpcmVjdGl2ZS1oZWxwZXJzLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvZGV2ZWxvcG1lbnQvZGlyZWN0aXZlLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvZGV2ZWxvcG1lbnQvZGlyZWN0aXZlcy9pZi1kZWZpbmVkLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvZGV2ZWxvcG1lbnQvZGlyZWN0aXZlcy9wcml2YXRlLWFzeW5jLWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9kZXZlbG9wbWVudC9kaXJlY3RpdmVzL3JlZi5qcyIsIndlYnBhY2s6Ly9zZHBpLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2RpcmVjdGl2ZXMvdW50aWwuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9kZXZlbG9wbWVudC9saXQtaHRtbC5qcyIsIndlYnBhY2s6Ly9zZHBpLy4vbm9kZV9tb2R1bGVzL2xpdC9kZWNvcmF0b3JzLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvbGl0L2RpcmVjdGl2ZXMvaWYtZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly9zZHBpLy4vbm9kZV9tb2R1bGVzL2xpdC9kaXJlY3RpdmVzL3JlZi5qcyIsIndlYnBhY2s6Ly9zZHBpLy4vbm9kZV9tb2R1bGVzL2xpdC9kaXJlY3RpdmVzL3VudGlsLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvbGl0L2luZGV4LmpzIiwid2VicGFjazovL3NkcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2RwaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2RwaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NkcGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4uL21peGlucyc7XHJcbmltcG9ydCB7IGhvc3RTdHlsZSB9IGZyb20gJy4uL3N0eWxlcy9ob3N0JztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdzZHBpLWJ1dHRvbicpXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBJbnB1dDx0eXBlb2YgTGl0RWxlbWVudCwgc3RyaW5nPihMaXRFbGVtZW50KSB7XHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAuLi5zdXBlci5zdHlsZXMsXHJcbiAgICAgICAgICAgIGhvc3RTdHlsZSxcclxuICAgICAgICAgICAgY3NzYFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aW5kb3ctYmctY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5Njk2OTY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc3BhY2VyKSAqIDEuNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0NjQ2O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b246bm90KDpkaXNhYmxlZCk6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aW5kb3ctYmctY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzY0NjQ2NDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk2OTY5NjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b246ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWxgXHJcbiAgICAgICAgICAgIDxidXR0b24gLmRpc2FibGVkPSR7dGhpcy5kaXNhYmxlZH0gLnZhbHVlPSR7dGhpcy52YWx1ZSB8fCAnJ30+XHJcbiAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xyXG4gICAgICAgICdzZHBpLWJ1dHRvbic6IEJ1dHRvbjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjc3MsIGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcclxuaW1wb3J0IHsgaWZEZWZpbmVkIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvaWYtZGVmaW5lZC5qcyc7XHJcbmltcG9ydCB7IHJlZiB9IGZyb20gJ2xpdC9kaXJlY3RpdmVzL3JlZi5qcyc7XHJcblxyXG5pbXBvcnQgeyBEYXRhTGlzdENvbnRyb2xsZXIsIFN0b3JlQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzJztcclxuaW1wb3J0IHsgRm9jdXNhYmxlLCBJbnB1dCwgUGVyc2lzdGVkIH0gZnJvbSAnLi4vbWl4aW5zJztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdzZHBpLWNhbGVuZGFyJylcclxuZXhwb3J0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgUGVyc2lzdGVkKEZvY3VzYWJsZShJbnB1dDx0eXBlb2YgTGl0RWxlbWVudCwgc3RyaW5nPihMaXRFbGVtZW50KSkpIHtcclxuICAgIHByaXZhdGUgc3RvcmUgPSBuZXcgU3RvcmVDb250cm9sbGVyKHRoaXMpO1xyXG4gICAgcHJpdmF0ZSBkYXRhTGlzdENvbnRyb2xsZXIgPSBuZXcgRGF0YUxpc3RDb250cm9sbGVyKHRoaXMpO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAuLi5zdXBlci5zdHlsZXMsXHJcbiAgICAgICAgICAgIGNzc2BcclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1iZy1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1zcGFjZXIpICsgMXB4KSB2YXIoLS1zcGFjZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9J3RpbWUnXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1zcGFjZXIpICsgMnB4KSB2YXIoLS1zcGFjZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0OmRpc2FibGVkIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgOjotd2Via2l0LWNsZWFyLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNiAxNiclM0UlM0NnIGZpbGw9JyUyMzlDOUM5QyclM0UlM0NwYXRoIGQ9J00xNSwxNSBMMS43NzYzNTY4NGUtMTUsMTUgTDEuNzc2MzU2ODRlLTE1LDEgTDE1LDEgTDE1LDE1IFogTTUsNyBMNSw4IEw2LDggTDYsNyBMNSw3IFogTTMsNyBMMyw4IEw0LDggTDQsNyBMMyw3IFogTTcsNyBMNyw4IEw4LDggTDgsNyBMNyw3IFogTTksNyBMOSw4IEwxMCw4IEwxMCw3IEw5LDcgWiBNMTEsNyBMMTEsOCBMMTIsOCBMMTIsNyBMMTEsNyBaIE0zLDkgTDMsMTAgTDQsMTAgTDQsOSBMMyw5IFogTTUsOSBMNSwxMCBMNiwxMCBMNiw5IEw1LDkgWiBNNyw5IEw3LDEwIEw4LDEwIEw4LDkgTDcsOSBaIE05LDkgTDksMTAgTDEwLDEwIEwxMCw5IEw5LDkgWiBNMTEsOSBMMTEsMTAgTDEyLDEwIEwxMiw5IEwxMSw5IFogTTMsMTEgTDMsMTIgTDQsMTIgTDQsMTEgTDMsMTEgWiBNNSwxMSBMNSwxMiBMNiwxMiBMNiwxMSBMNSwxMSBaIE03LDExIEw3LDEyIEw4LDEyIEw4LDExIEw3LDExIFogTTksMTEgTDksMTIgTDEwLDEyIEwxMCwxMSBMOSwxMSBaIE0xMSwxMSBMMTEsMTIgTDEyLDEyIEwxMiwxMSBMMTEsMTEgWiBNMTQsNCBMMTQsMiBMMSwyIEwxLDQgTDE0LDQgWicvJTNFJTNDcmVjdCB3aWR0aD0nMScgaGVpZ2h0PScxJyB4PScyJy8lM0UlM0NyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIHg9JzEyJy8lM0UlM0MvZyUzRSUzQy9zdmclM0UlMEFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wIGxlZnQgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGNhbGModmFyKC0tc3BhY2VyKSAvIDIpIDAgMDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDE2IDE2JyUzRSUzQ2cgZmlsbD0nJTIzQ0VDRUNFJyUzRSUzQ3BhdGggZD0nTTE1LDE1IEwxLjc3NjM1Njg0ZS0xNSwxNSBMMS43NzYzNTY4NGUtMTUsMSBMMTUsMSBMMTUsMTUgWiBNNSw3IEw1LDggTDYsOCBMNiw3IEw1LDcgWiBNMyw3IEwzLDggTDQsOCBMNCw3IEwzLDcgWiBNNyw3IEw3LDggTDgsOCBMOCw3IEw3LDcgWiBNOSw3IEw5LDggTDEwLDggTDEwLDcgTDksNyBaIE0xMSw3IEwxMSw4IEwxMiw4IEwxMiw3IEwxMSw3IFogTTMsOSBMMywxMCBMNCwxMCBMNCw5IEwzLDkgWiBNNSw5IEw1LDEwIEw2LDEwIEw2LDkgTDUsOSBaIE03LDkgTDcsMTAgTDgsMTAgTDgsOSBMNyw5IFogTTksOSBMOSwxMCBMMTAsMTAgTDEwLDkgTDksOSBaIE0xMSw5IEwxMSwxMCBMMTIsMTAgTDEyLDkgTDExLDkgWiBNMywxMSBMMywxMiBMNCwxMiBMNCwxMSBMMywxMSBaIE01LDExIEw1LDEyIEw2LDEyIEw2LDExIEw1LDExIFogTTcsMTEgTDcsMTIgTDgsMTIgTDgsMTEgTDcsMTEgWiBNOSwxMSBMOSwxMiBMMTAsMTIgTDEwLDExIEw5LDExIFogTTExLDExIEwxMSwxMiBMMTIsMTIgTDEyLDExIEwxMSwxMSBaIE0xNCw0IEwxNCwyIEwxLDIgTDEsNCBMMTQsNCBaJy8lM0UlM0NyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIHg9JzInLyUzRSUzQ3JlY3Qgd2lkdGg9JzEnIGhlaWdodD0nMScgeD0nMTInLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRSUwQVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbGF0ZXN0IGFjY2VwdGFibGUgZGF0YS5cclxuICAgICAqIHtAbGlua1xyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgcHVibGljIG1heD86IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBlYXJsaWVzdCBhY2NlcHRhYmxlIGRhdGUuXHJcbiAgICAgKi9cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwdWJsaWMgbWluPzogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHN0ZXAgYXR0cmlidXRlIGlzIGEgbnVtYmVyIHRoYXQgc3BlY2lmaWVzIHRoZSBncmFudWxhcml0eSB0aGF0IHRoZSB2YWx1ZSBtdXN0IGFkaGVyZSB0bywgb3IgdGhlIHNwZWNpYWwgdmFsdWUgYW55LiBPbmx5IHZhbHVlcyB3aGljaCBhcmUgZXF1YWwgdG8gdGhlIGJhc2lzIGZvciBzdGVwcGluZyAobWluIGlmIHNwZWNpZmllZCwgdmFsdWUgb3RoZXJ3aXNlLCBhbmQgYW4gYXBwcm9wcmlhdGUgZGVmYXVsdCB2YWx1ZSBpZiBuZWl0aGVyIG9mIHRob3NlIGlzIHByb3ZpZGVkKSBhcmUgdmFsaWQuXHJcbiAgICAgKi9cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxyXG4gICAgcHVibGljIHN0ZXA/OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHRoZSB0eXBlIG9mIGNhbGVuZGFyIGlucHV0IHRvIHJlbmRlcjsgcG9zc2libGUgdHlwZXMgYXJlICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ21vbnRoJywgJ3dlZWsnLCBvciAndGltZScuXHJcbiAgICAgKi9cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwdWJsaWMgdHlwZTogJ2RhdGUnIHwgJ2RhdGV0aW1lLWxvY2FsJyB8ICdtb250aCcgfCAnd2VlaycgfCAndGltZScgPSAnZGF0ZSc7XHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWxgXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgJHtyZWYodGhpcy5mb2N1c0VsZW1lbnQpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT0ke3RoaXMudHlwZX1cclxuICAgICAgICAgICAgICAgIGxpc3Q9JHtpZkRlZmluZWQodGhpcy5kYXRhTGlzdENvbnRyb2xsZXIuZGF0YUxpc3Q/LmlkKX1cclxuICAgICAgICAgICAgICAgIG1heD0ke2lmRGVmaW5lZCh0aGlzLm1heCl9XHJcbiAgICAgICAgICAgICAgICBtaW49JHtpZkRlZmluZWQodGhpcy5taW4pfVxyXG4gICAgICAgICAgICAgICAgc3RlcD0ke2lmRGVmaW5lZCh0aGlzLnN0ZXApfVxyXG4gICAgICAgICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMudmFsdWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVwiJHsoZXY6IEhUTUxJbnB1dEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB0aGlzLnN0b3JlLnNhdmUoZXYudGFyZ2V0LnZhbHVlKX1cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAke3RoaXMuZGF0YUxpc3RDb250cm9sbGVyLmRhdGFMaXN0fVxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xyXG4gICAgICAgICdzZHBpLWNhbGVuZGFyJzogQ2FsZW5kYXI7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcblxyXG5pbXBvcnQgeyBDaGlsZE5vZGVzQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL2NoaWxkLW5vZGVzLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBTdG9yZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy9zdG9yZS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgQ2hlY2thYmxlLCBHcmlkZGVkLCBJbnB1dCwgUGVyc2lzdGVkIH0gZnJvbSAnLi4vbWl4aW5zJztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdzZHBpLWNoZWNrYm94LWxpc3QnKVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hMaXN0IGV4dGVuZHMgR3JpZGRlZChQZXJzaXN0ZWQoQ2hlY2thYmxlKElucHV0PHR5cGVvZiBMaXRFbGVtZW50LCBzdHJpbmdbXT4oTGl0RWxlbWVudCkpKSkge1xyXG4gICAgcHJpdmF0ZSBfY2hpbGROb2RlcyA9IG5ldyBDaGlsZE5vZGVzQ29udHJvbGxlcih0aGlzLCBbJ29wdGlvbiddKTtcclxuICAgIHByaXZhdGUgX3N0b3JlID0gbmV3IFN0b3JlQ29udHJvbGxlcih0aGlzKTtcclxuXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHByb3RlY3RlZCByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyR3JpZChcclxuICAgICAgICAgICAgdGhpcy5fY2hpbGROb2Rlcy5pdGVtcy5tYXAoKG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2hlY2thYmxlKFxyXG4gICAgICAgICAgICAgICAgICAgICdjaGVja2JveCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbGA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNrZWQ9JHsodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmluZGV4T2Yob3B0aW9uLnZhbHVlKSA+IC0xKSB8fCBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5kaXNhYmxlZCB8fCBvcHRpb24uZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZT0ke29wdGlvbi52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+YCxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgYSBjaGVja2JveCBzdGF0ZSBjaGFuZ2luZy5cclxuICAgICAqIEBwYXJhbSBldiBUaGUgZXZlbnQgZGF0YS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2UoZXY6IEhUTUxJbnB1dEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gbmV3IFNldCh0aGlzLnZhbHVlKTtcclxuICAgICAgICBpZiAoZXYudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgdmFsdWVzLmFkZChldi50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhbHVlcy5kZWxldGUoZXYudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3N0b3JlLnNhdmUoQXJyYXkuZnJvbSh2YWx1ZXMpKTtcclxuICAgIH1cclxufVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XHJcbiAgICAgICAgJ3NkcGktY2hlY2tib3gtbGlzdCc6IENoZWNrYm94TGlzdDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBodG1sLCBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcbmltcG9ydCB7IHJlZiB9IGZyb20gJ2xpdC9kaXJlY3RpdmVzL3JlZi5qcyc7XHJcblxyXG5pbXBvcnQgeyBTdG9yZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy9zdG9yZS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgQ2hlY2thYmxlLCBGb2N1c2FibGUsIElucHV0LCBQZXJzaXN0ZWQgfSBmcm9tICcuLi9taXhpbnMnO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ3NkcGktY2hlY2tib3gnKVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBQZXJzaXN0ZWQoRm9jdXNhYmxlKENoZWNrYWJsZShJbnB1dDx0eXBlb2YgTGl0RWxlbWVudCwgYm9vbGVhbj4oTGl0RWxlbWVudCkpKSkge1xyXG4gICAgcHJpdmF0ZSBfc3RvcmUgPSBuZXcgU3RvcmVDb250cm9sbGVyKHRoaXMpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgb3B0aW9uYWwgbGFiZWwgdG8gYmUgc2hvd24gbmV4dCB0byB0aGUgY2hlY2stYm94LlxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgcHVibGljIGxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNoZWNrYWJsZShcclxuICAgICAgICAgICAgJ2NoZWNrYm94JyxcclxuICAgICAgICAgICAgaHRtbGA8aW5wdXRcclxuICAgICAgICAgICAgICAgICR7cmVmKHRoaXMuZm9jdXNFbGVtZW50KX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAuY2hlY2tlZD0ke3RoaXMudmFsdWUgfHwgZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgQGNoYW5nZT0keyhldjogSFRNTElucHV0RXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHRoaXMuX3N0b3JlLnNhdmUoZXYudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgICAvPmAsXHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcclxuICAgICAgICAnc2RwaS1jaGVja2JveCc6IENoZWNrYm94O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNzcywgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcbmltcG9ydCB7IHJlZiB9IGZyb20gJ2xpdC9kaXJlY3RpdmVzL3JlZi5qcyc7XHJcblxyXG5pbXBvcnQgeyBTdG9yZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy9zdG9yZS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgRm9jdXNhYmxlLCBJbnB1dCwgUGVyc2lzdGVkIH0gZnJvbSAnLi4vbWl4aW5zJztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdzZHBpLWNvbG9yJylcclxuZXhwb3J0IGNsYXNzIENvbG9yIGV4dGVuZHMgUGVyc2lzdGVkKEZvY3VzYWJsZShJbnB1dDx0eXBlb2YgTGl0RWxlbWVudCwgc3RyaW5nPihMaXRFbGVtZW50KSkpIHtcclxuICAgIHByaXZhdGUgX3N0b3JlID0gbmV3IFN0b3JlQ29udHJvbGxlcih0aGlzKTtcclxuXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAuLi5zdXBlci5zdHlsZXMsXHJcbiAgICAgICAgICAgIGNzc2BcclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1iZy1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBodG1sYFxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAke3JlZih0aGlzLmZvY3VzRWxlbWVudCl9XHJcbiAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgLmRlZmF1bHRWYWx1ZT0ke3RoaXMudmFsdWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBAY2hhbmdlPSR7KGV2OiBIVE1MSW5wdXRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdGhpcy5fc3RvcmUuc2F2ZShldi50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xyXG4gICAgICAgICdzZHBpLWNvbG9yJzogQ29sb3I7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3NzLCBodG1sLCBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcbmltcG9ydCB7IHJlZiB9IGZyb20gJ2xpdC9kaXJlY3RpdmVzL3JlZi5qcyc7XHJcbmltcG9ydCB7IHVudGlsIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvdW50aWwuanMnO1xyXG5cclxuaW1wb3J0IHsgU3RvcmVDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvc3RvcmUtY29udHJvbGxlcic7XHJcbmltcG9ydCB7IGdldEZpbGVOYW1lLCBzYW5pdGl6ZSB9IGZyb20gJy4uL2NvcmUvZmlsZSc7XHJcbmltcG9ydCB7IEZvY3VzYWJsZSwgSW5wdXQsIFBlcnNpc3RlZCB9IGZyb20gJy4uL21peGlucyc7XHJcblxyXG5AY3VzdG9tRWxlbWVudCgnc2RwaS1maWxlJylcclxuZXhwb3J0IGNsYXNzIEZpbGUgZXh0ZW5kcyBQZXJzaXN0ZWQoRm9jdXNhYmxlKElucHV0PHR5cGVvZiBMaXRFbGVtZW50LCBzdHJpbmc+KExpdEVsZW1lbnQpKSkge1xyXG4gICAgcHJpdmF0ZSBfc3RvcmUgPSBuZXcgU3RvcmVDb250cm9sbGVyKHRoaXMpO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAuLi5zdXBlci5zdHlsZXMsXHJcbiAgICAgICAgICAgIGNzc2BcclxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6ZGlzYWJsZWQgfiBsYWJlbC52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxhYmVsLnZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1iZy1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlucHV0LWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGFiZWwudmFsdWUgPiBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGFiZWwuYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0tc3BhY2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXBzIHRvIHRoZSBgYWNjZXB0YCBhdHRyaWJ1dGUgb2YgdGhlIHVuZGVybHlpbmcgaW5wdXQuXHJcbiAgICAgKi9cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwdWJsaWMgYWNjZXB0Pzogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxhYmVsIGRpc3BsYXllZCBpbiB0aGUgYnV0dG9uIHVzZWQgdG8gYWN0aXZhdGUgdGhlIGZpbGUgaW5wdXQuXHJcbiAgICAgKi9cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwdWJsaWMgbGFiZWwgPSAnLi4uJztcclxuXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gaHRtbGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgJHtyZWYodGhpcy5mb2N1c0VsZW1lbnQpfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGVfaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC5hY2NlcHQ9JHt0aGlzLmFjY2VwdCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCIke2FzeW5jIChldjogSFRNTElucHV0RXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHRoaXMuX3N0b3JlLnNhdmUoYXdhaXQgc2FuaXRpemUoZXYudGFyZ2V0LnZhbHVlKSl9XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ2YWx1ZVwiIGZvcj1cImZpbGVfaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAudGl0bGU9JHt0aGlzLnZhbHVlIHx8ICcnfT4ke3VudGlsKGdldEZpbGVOYW1lKHRoaXMudmFsdWUgfHwgJycpKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNkcGktYnV0dG9uIC5kaXNhYmxlZD0ke3RoaXMuZGlzYWJsZWR9IEBjbGljaz0keygpID0+IHRoaXMuZm9jdXNFbGVtZW50LnZhbHVlPy5jbGljaygpfT4gJHt0aGlzLmxhYmVsfSA8L3NkcGktYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxufVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XHJcbiAgICAgICAgJ3NkcGktZmlsZSc6IEZpbGU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3NzLCBodG1sLCBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcbmltcG9ydCB7IGlmRGVmaW5lZCB9IGZyb20gJ2xpdC9kaXJlY3RpdmVzL2lmLWRlZmluZWQuanMnO1xyXG5pbXBvcnQgeyByZWYgfSBmcm9tICdsaXQvZGlyZWN0aXZlcy9yZWYuanMnO1xyXG5cclxuaW1wb3J0IHsgU3RvcmVDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvc3RvcmUtY29udHJvbGxlcic7XHJcbmltcG9ydCB7IEZvY3VzYWJsZSwgSW5wdXQsIFBlcnNpc3RlZCB9IGZyb20gJy4uL21peGlucyc7XHJcbmltcG9ydCB7IGhvc3RTdHlsZSB9IGZyb20gJy4uL3N0eWxlcy9ob3N0JztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdzZHBpLXBhc3N3b3JkJylcclxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkIGV4dGVuZHMgUGVyc2lzdGVkKEZvY3VzYWJsZShJbnB1dDx0eXBlb2YgTGl0RWxlbWVudCwgc3RyaW5nPihMaXRFbGVtZW50KSkpIHtcclxuICAgIHByaXZhdGUgX3N0b3JlID0gbmV3IFN0b3JlQ29udHJvbGxlcih0aGlzKTtcclxuXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAuLi5zdXBlci5zdHlsZXMsXHJcbiAgICAgICAgICAgIGhvc3RTdHlsZSxcclxuICAgICAgICAgICAgY3NzYFxyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWJnLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXNwYWNlcikgKyAzcHgpIHZhcigtLXNwYWNlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbWF4aW11bSBsZW5ndGggdGhlIHRleHQgdmFsdWUgY2FuIGJlLlxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGF0dHJpYnV0ZTogJ21heGxlbmd0aCcsXHJcbiAgICAgICAgdHlwZTogTnVtYmVyXHJcbiAgICB9KVxyXG4gICAgcHVibGljIG1heExlbmd0aD86IG51bWJlcjtcclxuXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHByb3RlY3RlZCByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWxgXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgJHtyZWYodGhpcy5mb2N1c0VsZW1lbnQpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIG1heGxlbmd0aD0ke2lmRGVmaW5lZCh0aGlzLm1heExlbmd0aCl9XHJcbiAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy52YWx1ZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgIEBpbnB1dD0keyhldjogSFRNTElucHV0RXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHRoaXMuX3N0b3JlLnNhdmUoZXYudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG59XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcclxuICAgICAgICAnc2RwaS1wYXNzd29yZCc6IFBhc3N3b3JkO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xyXG5cclxuaW1wb3J0IHsgQ2hpbGROb2Rlc0NvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy9jaGlsZC1ub2Rlcy1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgU3RvcmVDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvc3RvcmUtY29udHJvbGxlcic7XHJcbmltcG9ydCB7IENoZWNrYWJsZSwgR3JpZGRlZCwgSW5wdXQsIFBlcnNpc3RlZCB9IGZyb20gJy4uL21peGlucyc7XHJcblxyXG5AY3VzdG9tRWxlbWVudCgnc2RwaS1yYWRpbycpXHJcbmV4cG9ydCBjbGFzcyBSYWRpbyBleHRlbmRzIEdyaWRkZWQoUGVyc2lzdGVkKENoZWNrYWJsZShJbnB1dDx0eXBlb2YgTGl0RWxlbWVudCwgc3RyaW5nPihMaXRFbGVtZW50KSkpKSB7XHJcbiAgICBwcml2YXRlIF9jaGlsZE5vZGVzID0gbmV3IENoaWxkTm9kZXNDb250cm9sbGVyKHRoaXMsIFsnb3B0aW9uJ10pO1xyXG4gICAgcHJpdmF0ZSBfc3RvcmUgPSBuZXcgU3RvcmVDb250cm9sbGVyKHRoaXMpO1xyXG5cclxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJHcmlkKFxyXG4gICAgICAgICAgICB0aGlzLl9jaGlsZE5vZGVzLml0ZW1zLm1hcCgob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGVja2FibGUoXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JhZGlvJyxcclxuICAgICAgICAgICAgICAgICAgICBodG1sYDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiX1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2VkPSR7dGhpcy52YWx1ZSA9PT0gb3B0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLmRpc2FibGVkIHx8IG9wdGlvbi5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlPSR7b3B0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7KGV2OiBIVE1MSW5wdXRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdGhpcy5fc3RvcmUuc2F2ZShldi50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+YCxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XHJcbiAgICAgICAgJ3NkcGktcmFkaW8nOiBSYWRpbztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjc3MsIGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcclxuaW1wb3J0IHsgaWZEZWZpbmVkIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvaWYtZGVmaW5lZC5qcyc7XHJcbmltcG9ydCB7IHJlZiB9IGZyb20gJ2xpdC9kaXJlY3RpdmVzL3JlZi5qcyc7XHJcblxyXG5pbXBvcnQgeyBTdG9yZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy9zdG9yZS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgRm9jdXNhYmxlLCBJbnB1dCwgUGVyc2lzdGVkIH0gZnJvbSAnLi4vbWl4aW5zJztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdzZHBpLXJhbmdlJylcclxuZXhwb3J0IGNsYXNzIFJhbmdlIGV4dGVuZHMgUGVyc2lzdGVkKEZvY3VzYWJsZShJbnB1dDx0eXBlb2YgTGl0RWxlbWVudCwgbnVtYmVyPihMaXRFbGVtZW50KSkpIHtcclxuICAgIHByaXZhdGUgX3N0b3JlID0gbmV3IFN0b3JlQ29udHJvbGxlcih0aGlzKTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzdHlsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgLi4uc3VwZXIuc3R5bGVzLFxyXG4gICAgICAgICAgICBjc3NgXHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6ZGlzYWJsZWQsXHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyID4gZGl2W2FyaWEtZGlzYWJsZWQ9J3RydWUnXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWlucHV0LWJnLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjM2MzYzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtZm9udC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC00cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dDpkaXNhYmxlZDo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dDo6LXdlYmtpdC1zbGlkZXItdGh1bWI6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyID4gZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZGl2W3JvbGU9J2J1dHRvbiddIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgdmFyKC0tc3BhY2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbWF4aW11bSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXHJcbiAgICBwdWJsaWMgbWF4PzogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG1pbmltdW0gdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxyXG4gICAgcHVibGljIG1pbj86IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gYHRydWVgLCB0aGUgYG1pbmAgYW5kIGBtYXhgIHZhbHVlcyBhcmUgc2hvd24gb24gZWl0aGVyIHNpZGUgb2YgdGhlIGlucHV0LlxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGF0dHJpYnV0ZTogJ3Nob3dsYWJlbHMnLFxyXG4gICAgICAgIHR5cGU6IEJvb2xlYW5cclxuICAgIH0pXHJcbiAgICBwdWJsaWMgc2hvd0xhYmVscyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoZSBncmFudWxhcml0eSB0aGF0IHRoZSB2YWx1ZSBtdXN0IGFkaGVyZSB0by5cclxuICAgICAqL1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXHJcbiAgICBwdWJsaWMgc3RlcD86IG51bWJlcjtcclxuXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHByb3RlY3RlZCByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBodG1sYDxpbnB1dFxyXG4gICAgICAgICAgICAke3JlZih0aGlzLmZvY3VzRWxlbWVudCl9XHJcbiAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgIG1heD0ke2lmRGVmaW5lZCh0aGlzLm1heCl9XHJcbiAgICAgICAgICAgIG1pbj0ke2lmRGVmaW5lZCh0aGlzLm1pbil9XHJcbiAgICAgICAgICAgIHN0ZXA9JHtpZkRlZmluZWQodGhpcy5zdGVwKX1cclxuICAgICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgLnRpdGxlPSR7dGhpcy52YWx1ZT8udG9TdHJpbmcoKSB8fCAnJ31cclxuICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy52YWx1ZT8udG9TdHJpbmcoKSB8fCAnJ31cclxuICAgICAgICAgICAgQGNoYW5nZT0keyhldjogSFRNTElucHV0RXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHRoaXMuX3N0b3JlLnNhdmUoZXYudGFyZ2V0LnZhbHVlQXNOdW1iZXIpfVxyXG4gICAgICAgIC8+YDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0xhYmVscykge1xyXG4gICAgICAgICAgICByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGFyaWEtZGlzYWJsZWQ9JHt0aGlzLmRpc2FibGVkfSByb2xlPVwiYnV0dG9uXCIgQGNsaWNrPSR7KCkgPT4gIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5taW4gIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9zdG9yZS5zYXZlKHRoaXMubWluKX0+JHt0aGlzLm1pbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+JHtpbnB1dH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgYXJpYS1kaXNhYmxlZD0ke3RoaXMuZGlzYWJsZWR9IHJvbGU9XCJidXR0b25cIiBAY2xpY2s9JHsoKSA9PiAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLm1heCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX3N0b3JlLnNhdmUodGhpcy5tYXgpfT4ke3RoaXMubWF4fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xyXG4gICAgICAgICdzZHBpLXJhbmdlJzogUmFuZ2U7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3NzLCBodG1sLCBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcblxyXG5pbXBvcnQgeyBJRm9jdXNhYmxlIH0gZnJvbSAnLi4vbWl4aW5zJztcclxuaW1wb3J0IHsgaG9zdFN0eWxlIH0gZnJvbSAnLi4vc3R5bGVzL2hvc3QnO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ3NkcGktaXRlbScpXHJcbmV4cG9ydCBjbGFzcyBTZHBpSXRlbSBleHRlbmRzIExpdEVsZW1lbnQge1xyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlcyA9IFtcclxuICAgICAgICBob3N0U3R5bGUsXHJcbiAgICAgICAgY3NzYFxyXG4gICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMjJweDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5NXB4IDFmcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIGxhYmVsLlxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgcHVibGljIGxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYWJlbCA/IGh0bWxgPGxhYmVsPiR7dGhpcy5sYWJlbH06PC9sYWJlbD5gIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gaHRtbGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBncmlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj48bGFiZWwgQGNsaWNrPSR7dGhpcy5oYW5kbGVMYWJlbENsaWNrfT4ke2xhYmVsfTwvbGFiZWw+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPjxzbG90Pjwvc2xvdD48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGhlIGxhYmVsIG9mIHRoZSBpdGVtIGJlaW5nIGNsaWNrZWQsIGFuZCBhdHRlbXB0cyB0byBmaW5kIGFuIGVsZW1lbnQgdGhhdCBjYW4gYmUgZm9jdXNlZC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVMYWJlbENsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbSBvZiB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSkge1xyXG4gICAgICAgICAgICBjb25zdCBmb2N1c2FibGUgPSBlbGVtIGFzIHVua25vd24gYXMgSUZvY3VzYWJsZTtcclxuICAgICAgICAgICAgaWYgKGZvY3VzYWJsZS5jYW5Gb2N1cykge1xyXG4gICAgICAgICAgICAgICAgZm9jdXNhYmxlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xyXG4gICAgICAgICdzZHBpLWl0ZW0nOiBTZHBpSXRlbTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjc3MsIGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcclxuaW1wb3J0IHsgcmVmIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvcmVmLmpzJztcclxuXHJcbmltcG9ydCB7IENoaWxkTm9kZXNDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvY2hpbGQtbm9kZXMtY29udHJvbGxlcic7XHJcbmltcG9ydCB7IFN0b3JlQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3N0b3JlLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBGb2N1c2FibGUsIElucHV0LCBQZXJzaXN0ZWQgfSBmcm9tICcuLi9taXhpbnMnO1xyXG5pbXBvcnQgeyBob3N0U3R5bGUgfSBmcm9tICcuLi9zdHlsZXMvaG9zdCc7XHJcblxyXG5AY3VzdG9tRWxlbWVudCgnc2RwaS1zZWxlY3QnKVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgUGVyc2lzdGVkKEZvY3VzYWJsZShJbnB1dDx0eXBlb2YgTGl0RWxlbWVudCwgc3RyaW5nPihMaXRFbGVtZW50KSkpIHtcclxuICAgIHByaXZhdGUgX2NoaWxkTm9kZXMgPSBuZXcgQ2hpbGROb2Rlc0NvbnRyb2xsZXIodGhpcywgWydvcHRncm91cCcsICdvcHRpb24nXSk7XHJcbiAgICBwcml2YXRlIF9zdG9yZSA9IG5ldyBTdG9yZUNvbnRyb2xsZXIodGhpcyk7XHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzdHlsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgLi4uc3VwZXIuc3R5bGVzLFxyXG4gICAgICAgICAgICBob3N0U3R5bGUsXHJcbiAgICAgICAgICAgIGNzc2BcclxuICAgICAgICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtYmctY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc3BhY2VyKSArIDFweCkgMDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0OmRpc2FibGVkIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG9wdGlvbmFsIHBsYWNlaG9sZGVyIHRleHQ7IGFkZGVkIGFzIHRoZSBmaXJzdCBpdGVtIHdpdGhpbiB0aGUgc2VsZWN0LCBhcyBhIGRpc2FibGUgb3B0aW9uLCBhbmQgc2VsZWN0ZWQgYnkgZGVmYXVsdC5cclxuICAgICAqL1xyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHB1YmxpYyBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHByb3RlY3RlZCByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWxgXHJcbiAgICAgICAgICAgIDxzZWxlY3QgJHtyZWYodGhpcy5mb2N1c0VsZW1lbnQpfSAuZGlzYWJsZWQ9JHt0aGlzLmRpc2FibGVkfSAudmFsdWU9JHt0aGlzLnZhbHVlIHx8ICcnfSBAY2hhbmdlPSR7KGV2OiBIVE1MSW5wdXRFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHRoaXMuX3N0b3JlLnNhdmUoZXYudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgLmhpZGRlbj0keyF0aGlzLnBsYWNlaG9sZGVyIHx8IHRoaXMudmFsdWUgIT09IHVuZGVmaW5lZH0+JHt0aGlzLnBsYWNlaG9sZGVyfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgJHt0aGlzLnJlbmRlckNoaWxkTm9kZXMoKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG9wdGlvbiBncm91cHMgYW5kIG9wdGlvbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBgX2NoaWxkTm9kZXNDb250cm9sbGVyLmNoaWxkTm9kZXNgLlxyXG4gICAgICogQHJldHVybnMge3Vua25vd259IFRoZSBIVE1MIHRlbXBsYXRlIHRoYXQgY29udGFpbnMgdGhlIG9wdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVuZGVyQ2hpbGROb2RlcygpOiB1bmtub3duIHtcclxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWFwT3B0aW9ucyA9IChpdGVtOiBOb2RlKTogdW5rbm93biA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgSFRNTE9wdEdyb3VwRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgPG9wdGdyb3VwIC5sYWJlbD0ke2l0ZW0ubGFiZWx9PiR7QXJyYXkuZnJvbShpdGVtLmNoaWxkTm9kZXMpLm1hcChtYXBPcHRpb25zKX08L29wdGdyb3VwPmA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbSBpbnN0YW5jZW9mIEhUTUxPcHRpb25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGA8b3B0aW9uIC5kaXNhYmxlZD0ke2l0ZW0uZGlzYWJsZWR9IC52YWx1ZT0ke2l0ZW0udGV4dH0+JHtpdGVtLmxhYmVsfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGh0bWxgJHt0aGlzLl9jaGlsZE5vZGVzLml0ZW1zLm1hcChtYXBPcHRpb25zKX1gO1xyXG4gICAgfVxyXG59XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcclxuICAgICAgICAnc2RwaS1zZWxlY3QnOiBTZWxlY3Q7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3NzLCBodG1sLCBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcbmltcG9ydCB7IGlmRGVmaW5lZCB9IGZyb20gJ2xpdC9kaXJlY3RpdmVzL2lmLWRlZmluZWQuanMnO1xyXG5pbXBvcnQgeyByZWYgfSBmcm9tICdsaXQvZGlyZWN0aXZlcy9yZWYuanMnO1xyXG5cclxuaW1wb3J0IHsgU3RvcmVDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvc3RvcmUtY29udHJvbGxlcic7XHJcbmltcG9ydCB7IEZvY3VzYWJsZSwgSW5wdXQsIFBlcnNpc3RlZCB9IGZyb20gJy4uL21peGlucyc7XHJcbmltcG9ydCB7IGhvc3RTdHlsZSB9IGZyb20gJy4uL3N0eWxlcy9ob3N0JztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdzZHBpLXRleHRhcmVhJylcclxuZXhwb3J0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgUGVyc2lzdGVkKEZvY3VzYWJsZShJbnB1dDx0eXBlb2YgTGl0RWxlbWVudCwgc3RyaW5nPihMaXRFbGVtZW50KSkpIHtcclxuICAgIHByaXZhdGUgX3N0b3JlID0gbmV3IFN0b3JlQ29udHJvbGxlcih0aGlzKTtcclxuXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAuLi5zdXBlci5zdHlsZXMsXHJcbiAgICAgICAgICAgIGhvc3RTdHlsZSxcclxuICAgICAgICAgICAgY3NzYFxyXG4gICAgICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWJnLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXNwYWNlcikgKyAzcHgpIHZhcigtLXNwYWNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRleHRhcmVhOmRpc2FibGVkIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmxlbmd0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtYXhpbXVtIGxlbmd0aCB0aGUgdGV4dCB2YWx1ZSBjYW4gYmUuXHJcbiAgICAgKi9cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgYXR0cmlidXRlOiAnbWF4bGVuZ3RoJyxcclxuICAgICAgICB0eXBlOiBOdW1iZXJcclxuICAgIH0pXHJcbiAgICBwdWJsaWMgbWF4TGVuZ3RoPzogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB0aGUgcm93cyBwcm9wZXJ0eSBvZiB0aGUgdGV4dCBhcmVhLlxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcclxuICAgIHB1YmxpYyByb3dzID0gMztcclxuXHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0byBzaG93IHRoZSBsZW5ndGggb2YgdGhlIHRleHQgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgYXR0cmlidXRlOiAnc2hvd2xlbmd0aCcsXHJcbiAgICAgICAgdHlwZTogQm9vbGVhblxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBzaG93TGVuZ3RoID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBodG1sYFxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICR7cmVmKHRoaXMuZm9jdXNFbGVtZW50KX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICBtYXhsZW5ndGg9JHtpZkRlZmluZWQodGhpcy5tYXhMZW5ndGgpfVxyXG4gICAgICAgICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIC5pZD0ke3RoaXMuaW5wdXRJZH1cclxuICAgICAgICAgICAgICAgIC5yb3dzPSR7dGhpcy5yb3dzfVxyXG4gICAgICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy52YWx1ZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgIEBpbnB1dD0keyhldjogSFRNTElucHV0RXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHRoaXMuX3N0b3JlLnNhdmUoZXYudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICR7dGhpcy5nZXRMZW5ndGhMYWJlbCgpfVxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBsYWJlbCB0aGF0IGRlbm90ZXMgdGhlIGxlbmd0aCBvZiB0aGUgdGV4dCBhcmVhLlxyXG4gICAgICogQHJldHVybnMge3Vua25vd259IFRoZSB0ZW1wbGF0ZSB1c2VkIHRvIHJlbmRlciB0aGUgbGVuZ3RoIG9mIHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRMZW5ndGhMYWJlbCgpOiB1bmtub3duIHtcclxuICAgICAgICBpZiAodGhpcy5zaG93TGVuZ3RoIHx8IHRoaXMubWF4TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heExlbmd0aExhYmVsID0gdGhpcy5tYXhMZW5ndGggPyBodG1sYC8ke3RoaXMubWF4TGVuZ3RofWAgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBodG1sYDxsYWJlbCBjbGFzcz1cImxlbmd0aFwiIGZvcj0ke3RoaXMuaW5wdXRJZH0+JHt0aGlzLnZhbHVlPy5sZW5ndGggfHwgMH0ke21heExlbmd0aExhYmVsfTwvbGFiZWw+YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xyXG4gICAgICAgICdzZHBpLXRleHRhcmVhJzogVGV4dGFyZWE7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3NzLCBodG1sLCBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XHJcbmltcG9ydCB7IGlmRGVmaW5lZCB9IGZyb20gJ2xpdC9kaXJlY3RpdmVzL2lmLWRlZmluZWQuanMnO1xyXG5pbXBvcnQgeyByZWYgfSBmcm9tICdsaXQvZGlyZWN0aXZlcy9yZWYuanMnO1xyXG5cclxuaW1wb3J0IHsgU3RvcmVDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvc3RvcmUtY29udHJvbGxlcic7XHJcbmltcG9ydCB7IEZvY3VzYWJsZSwgSW5wdXQsIFBlcnNpc3RlZCB9IGZyb20gJy4uL21peGlucyc7XHJcbmltcG9ydCB7IGhvc3RTdHlsZSB9IGZyb20gJy4uL3N0eWxlcy9ob3N0JztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdzZHBpLXRleHRmaWVsZCcpXHJcbmV4cG9ydCBjbGFzcyBUZXh0ZmllbGQgZXh0ZW5kcyBQZXJzaXN0ZWQoRm9jdXNhYmxlKElucHV0PHR5cGVvZiBMaXRFbGVtZW50LCBzdHJpbmc+KExpdEVsZW1lbnQpKSkge1xyXG4gICAgcHJpdmF0ZSBfc3RvcmUgPSBuZXcgU3RvcmVDb250cm9sbGVyKHRoaXMpO1xyXG5cclxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIC4uLnN1cGVyLnN0eWxlcyxcclxuICAgICAgICAgICAgaG9zdFN0eWxlLFxyXG4gICAgICAgICAgICBjc3NgXHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtYmctY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc3BhY2VyKSArIDNweCkgdmFyKC0tc3BhY2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dDpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0OnJlcXVpcmVkIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5OCUgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6cmVxdWlyZWQ6dmFsaWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSTVJaUJvWldsbmFIUTlJamtpSUhacFpYZENiM2c5SWpBZ01DQTVJRGtpUGp4d2IyeDVaMjl1SUdacGJHdzlJaU5FT0VRNFJEZ2lJSEJ2YVc1MGN6MGlOUzR5SURFZ05pNHlJREVnTmk0eUlEY2dNeTR5SURjZ015NHlJRFlnTlM0eUlEWWlJSFJ5WVc1elptOXliVDBpY205MFlYUmxLRFF3SURRdU5qYzNJRFFwSWk4K1BDOXpkbWMrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dDpyZXF1aXJlZDppbnZhbGlkIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0k1SWlCb1pXbG5hSFE5SWpraUlIWnBaWGRDYjNnOUlqQWdNQ0E1SURraVBnb2dJQ0FnUEhCaGRHZ2dabWxzYkQwaUkwUTRSRGhFT0NJZ1pEMGlUVFF1TlN3d0lFTTJMams0TlRJNE1UTTNMQzAwTGpVMk5UTTROemd5WlMweE5pQTVMREl1TURFME56RTROak1nT1N3MExqVWdRemtzTmk0NU9EVXlPREV6TnlBMkxqazROVEk0TVRNM0xEa2dOQzQxTERrZ1F6SXVNREUwTnpFNE5qTXNPU0F6TGpBME16VTVNVGc0WlMweE5pdzJMams0TlRJNE1UTTNJREFzTkM0MUlFTXRNeTR3TkRNMU9URTRPR1V0TVRZc01pNHdNVFEzTVRnMk15QXlMakF4TkRjeE9EWXpMRFF1TlRZMU16ZzNPREpsTFRFMklEUXVOU3d3SUZvZ1RUUXNNU0JNTkN3MklFdzFMRFlnVERVc01TQk1OQ3d4SUZvZ1RUUXVOU3c0SUVNMExqYzNOakUwTWpNM0xEZ2dOU3czTGpjM05qRTBNak0zSURVc055NDFJRU0xTERjdU1qSXpPRFUzTmpNZ05DNDNOell4TkRJek55dzNJRFF1TlN3M0lFTTBMakl5TXpnMU56WXpMRGNnTkN3M0xqSXlNemcxTnpZeklEUXNOeTQxSUVNMExEY3VOemMyTVRReU16Y2dOQzR5TWpNNE5UYzJNeXc0SURRdU5TdzRJRm9pTHo0S0lDQThMM04yWno0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbWF4aW11bSBsZW5ndGggdGhlIHRleHQgdmFsdWUgY2FuIGJlLlxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGF0dHJpYnV0ZTogJ21heGxlbmd0aCcsXHJcbiAgICAgICAgdHlwZTogTnVtYmVyXHJcbiAgICB9KVxyXG4gICAgcHVibGljIG1heExlbmd0aD86IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvcHRpb25hbCBwYXR0ZXJuIHRvIGJlIGFwcGxpZWQgd2hlbiB2YWxpZGF0aW5nIHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHB1YmxpYyBwYXR0ZXJuID0gJyc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgb3B0aW9uYWwgcGxhY2Vob2xkZXIgdGV4dCB0byBiZSBzaG93biB3aXRoaW4gdGhlIGlucHV0LlxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgcHVibGljIHBsYWNlaG9sZGVyID0gJyc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNldHRpbmcgaXMgcmVxdWlyZWQuXHJcbiAgICAgKi9cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcclxuICAgIHB1YmxpYyByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gaHRtbGBcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAke3JlZih0aGlzLmZvY3VzRWxlbWVudCl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBtYXhsZW5ndGg9JHtpZkRlZmluZWQodGhpcy5tYXhMZW5ndGgpfVxyXG4gICAgICAgICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIC5wYXR0ZXJuPSR7dGhpcy5wYXR0ZXJufVxyXG4gICAgICAgICAgICAgICAgLnBsYWNlaG9sZGVyPSR7dGhpcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZD0ke3RoaXMucmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLnZhbHVlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgQGlucHV0PSR7KGV2OiBIVE1MSW5wdXRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdGhpcy5fc3RvcmUuc2F2ZShldi50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xyXG4gICAgICAgICdzZHBpLXRleHRmaWVsZCc6IFRleHRmaWVsZDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdGl2ZUNvbnRyb2xsZXIsIFJlYWN0aXZlQ29udHJvbGxlckhvc3QgfSBmcm9tICdsaXQnO1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGEgY29udHJvbGxlciB0aGF0IG9ic2VydmVzIHRoZSBjaGlsZCBub2RlcyBvZiB0aGUgaG9zdCwgYW5kIGV4cG9zZXMgdGhlbSB2aWEgYGNoaWxkTm9kZXNgLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENoaWxkTm9kZXNDb250cm9sbGVyPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+IGltcGxlbWVudHMgUmVhY3RpdmVDb250cm9sbGVyIHtcclxuICAgIHByaXZhdGUgb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyBhIG5ldyBjaGlsZCBub2RlIGNvbnRyb2xsZXIgY2FwYWJsZSBvZiBvYnNlcnZpbmcgdGhlIGNoaWxkIG5vZGVzIG9mIHRoZSBob3N0LCBleHBvc2VkIHZpYSBgY2hpbGROb2Rlc2AuXHJcbiAgICAgKiBAcGFyYW0gaG9zdCBUaGUgaG9zdCBub2RlLlxyXG4gICAgICogQHBhcmFtIG5vZGVOYW1lcyBUaGUgbmFtZSBvZiB0aGUgbm9kZSB0eXBlcyB0byBvYnNlcnZlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3Q6IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgJiBOb2RlLCBwcml2YXRlIG5vZGVOYW1lczogS1tdKSB7XHJcbiAgICAgICAgdGhpcy5ob3N0LmFkZENvbnRyb2xsZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuaGFuZGxlTXV0YXRpb24uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjaGlsZCBub2RlcyBhc3NvY2lhdGVkIHdpdGggdGhlIGhvc3QuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpdGVtczogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdW10gPSBbXTtcclxuXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHB1YmxpYyBob3N0Q29ubmVjdGVkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmhvc3QsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgcHVibGljIGhvc3REaXNjb25uZWN0ZWQ/KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlZCB3aGVuIGFuIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIG9ic2VydmVkIGBub2RlTmFtZXNgIGlzIGFkZGVkIG9yIHJlbW92ZWQ7IG9jY3VycyBiZWZvcmUgYHJlcXVlc3RVcGRhdGVgLlxyXG4gICAgICogQHBhcmFtIGV2IFRoZSBldmVudCBhcmd1bWVudHMuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBtdXRhdGVkPyhldjogeyBwcmV2ZW50UmVxdWVzdFVwZGF0ZTogYm9vbGVhbiB9KTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEludm9rZWQgd2hlbiBhIG11dGF0aW9uIG9jY3VycyB3aXRoaW4gdGhlIGBvYnNlcnZlcmAsIGkuZS4gYSBub2RlIHdhcyBhZGRlZCBvciByZW1vdmVkIGZyb20gdGhlIGBob3N0YC5cclxuICAgICAqIEBwYXJhbSBtdXRhdGlvbnMgVGhlIG11dGF0aW9ucyB0aGF0IG9jY3VycmVkLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZU11dGF0aW9uKG11dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSk6IHZvaWQge1xyXG4gICAgICAgIGxldCByZXF1ZXN0VXBkYXRlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAvLyBBZGQgbmV3IG5vZGVzLlxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFkZGVkIG9mIG11dGF0aW9uLmFkZGVkTm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGVOYW1lcy5pbmRleE9mKDxLPmFkZGVkLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0VXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goYWRkZWQgYXMgSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIG9sZCBub2Rlcy5cclxuICAgICAgICAgICAgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKG5vZGUgYXMgSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0VXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBBcyBhIG5vZGUgY2hhbmdlZDsgdHJpZ2dlciB0aGUgbXV0YXRlZCBoYW5kbGVyLCBhbmQgYXR0ZW1wdCB0byByZXF1ZXN0IGFuIHVwZGF0ZS5cclxuICAgICAgICBpZiAocmVxdWVzdFVwZGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tdXRhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzID0geyBwcmV2ZW50UmVxdWVzdFVwZGF0ZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXV0YXRlZChhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5wcmV2ZW50UmVxdWVzdFVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5ob3N0LnJlcXVlc3RVcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3RpdmVDb250cm9sbGVySG9zdCB9IGZyb20gJ2xpdCc7XHJcblxyXG5pbXBvcnQgeyBnZXRVVUlEIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XHJcbmltcG9ydCB7IENoaWxkTm9kZXNDb250cm9sbGVyIH0gZnJvbSAnLi9jaGlsZC1ub2Rlcy1jb250cm9sbGVyJztcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhIGNvbnRyb2xsZXIgdGhhdCBvYnNlcnZlcyB0aGUgY2hpbGQgbm9kZXMgb2YgdGhlIGhvc3QgZm9yIGEgSFRNTERhdGFMaXN0RWxlbWVudCwgYW5kIGNhY2hlcyBhIGNsb25lIG9mIHRoZSBpbnN0YW5jZSBmb3IgcmVuZGVyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERhdGFMaXN0Q29udHJvbGxlciBleHRlbmRzIENoaWxkTm9kZXNDb250cm9sbGVyPCdkYXRhbGlzdCc+IHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBkYXRhIGxpc3QuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkYXRhTGlzdD86IEhUTUxEYXRhTGlzdEVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyBhIG5ldyBkYXRhIGxpc3QgY29udHJvbGxlciByZXNwb25zaWJsZSBmb3IgZGV0ZXJtaW5pbmcgdGhlIGRhdGEgbGlzdCBhc3NvY2lhdGVkIHdpdGggdGhlIGhvc3QuXHJcbiAgICAgKiBAcGFyYW0gaG9zdCBUaGUgaG9zdCBub2RlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0OiBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0ICYgTm9kZSkge1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFsnZGF0YWxpc3QnXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICBwcm90ZWN0ZWQgbXV0YXRlZChldjogeyBwcmV2ZW50UmVxdWVzdFVwZGF0ZTogYm9vbGVhbiB9KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIFRoZSBkYXRhIGxpc3Qgd2FzIHJlbW92ZWQuXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUxpc3QgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRhdGFMaXN0ID09PSB1bmRlZmluZWQgfHwgdGhpcy5kYXRhTGlzdC5pZCAhPT0gdGhpcy5pdGVtc1swXS5pZCkge1xyXG4gICAgICAgICAgICAvLyBUaGUgZGF0YSBsaXN0IGlzIG5vdCBzZXQsIG9yIGRpZmZlcnMgdG8gdGhlIGN1cnJlbnQgb25lLlxyXG4gICAgICAgICAgICB0aGlzLml0ZW1zWzBdLmlkID0gdGhpcy5pdGVtc1swXS5pZCB8fCBnZXRVVUlEKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUxpc3QgPSA8SFRNTERhdGFMaXN0RWxlbWVudD50aGlzLml0ZW1zWzBdLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUaGUgW2ZpcnN0XSBkYXRhIGxpc3QgaGFzIG5vdCBjaGFuZ2VkLlxyXG4gICAgICAgICAgICBldi5wcmV2ZW50UmVxdWVzdFVwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCB7IENoaWxkTm9kZXNDb250cm9sbGVyIH0gZnJvbSAnLi9jaGlsZC1ub2Rlcy1jb250cm9sbGVyJztcclxuZXhwb3J0IHsgRGF0YUxpc3RDb250cm9sbGVyIH0gZnJvbSAnLi9kYXRhLWxpc3QtY29udHJvbGxlcic7XHJcbmV4cG9ydCB7IFN0b3JlQ29udHJvbGxlciB9IGZyb20gJy4vc3RvcmUtY29udHJvbGxlcic7XHJcbiIsImltcG9ydCB7IFJlYWN0aXZlQ29udHJvbGxlciwgUmVhY3RpdmVDb250cm9sbGVySG9zdCB9IGZyb20gJ2xpdCc7XHJcblxyXG5pbXBvcnQgeyB1c2VTZXR0aW5ncyB9IGZyb20gJy4uL3N0cmVhbS1kZWNrL3NldHRpbmdzJztcclxuXHJcbnR5cGUgUmVhY3RpdmVTdG9yZUNvbnRyb2xsZXJIb3N0PFQ+ID0gUmVhY3RpdmVDb250cm9sbGVySG9zdCAmIHtcclxuICAgIGlzR2xvYmFsOiBib29sZWFuO1xyXG4gICAgc2V0dGluZz86IHN0cmluZztcclxuICAgIHZhbHVlPzogVDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhIGNvbnRyb2xsZXIgdGhhdCBpcyBjYXBhYmxlIG9mIHBlcnNpc3RpbmcgYW5kIHJldHJpZXZpbmcgZGF0YSB0byBhbmQgZnJvbSB0aGUgU3RyZWFtIERlY2tzIHNldHRpbmdzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0b3JlQ29udHJvbGxlcjxUPiBpbXBsZW1lbnRzIFJlYWN0aXZlQ29udHJvbGxlciB7XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIGEgbmV3IGNoaWxkIG5vZGUgY29udHJvbGxlciBjYXBhYmxlIG9mIG9ic2VydmluZyB0aGUgY2hpbGQgbm9kZXMgb2YgdGhlIGhvc3QsIGV4cG9zZWQgdmlhIGBjaGlsZE5vZGVzYC5cclxuICAgICAqIEBwYXJhbSBob3N0IFRoZSBob3N0IG5vZGUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGhvc3Q6IFJlYWN0aXZlU3RvcmVDb250cm9sbGVySG9zdDxUPikge1xyXG4gICAgICAgICh0aGlzLl9ob3N0ID0gaG9zdCkuYWRkQ29udHJvbGxlcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBob3N0IHRoZSBjb250cm9sbGVyIGlzIGNvbm5lY3RlZCB0by5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaG9zdDogUmVhY3RpdmVTdG9yZUNvbnRyb2xsZXJIb3N0PFQ+O1xyXG5cclxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgcHVibGljIGhvc3RDb25uZWN0ZWQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hvc3Quc2V0dGluZykge1xyXG4gICAgICAgICAgICB0aGlzLl9zYXZlID0gdXNlU2V0dGluZ3M8VD4odGhpcy5faG9zdC5zZXR0aW5nLCB0aGlzLl9ob3N0LmlzR2xvYmFsLCAodmFsdWUpID0+ICh0aGlzLl9ob3N0LnZhbHVlID0gdmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlcyB0aGUgYHZhbHVlYCB0byB0aGUgU3RyZWFtIERlY2sgc2V0dGluZ3MuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHNhdmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzYXZlKHZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5faG9zdC52YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fc2F2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zYXZlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJzaXN0cyB0aGUgYHZhbHVlYCB0byB0aGUgU3RyZWFtIERlY2sgc2V0dGluZ3MuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHBlcnNpc3QuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3NhdmU/OiAodmFsdWU6IFQpID0+IHZvaWQ7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFByb3ZpZGVzIGFuIGV2ZW50IGRpc3BhdGNoZXIgd2hlcmVieSBoYW5kbGVycyBjYW4gc3Vic2NyaWJlIHRvIGV2ZW50cyB0aGF0IGFyZSBsYXRlciBkaXNwYXRjaGVkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEV2ZW50TWFuYWdlcjxUPiBpbXBsZW1lbnRzIElFdmVudERpc3BhdGNoZXI8VD4sIElFdmVudFN1YnNjcmliZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVyczogSUV2ZW50SGFuZGxlcjxUPltdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwYXRjaGVzIHRoZSBldmVudCBmb3IgYWxsIGhhbmRsZXJzLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgZWFjaCBoYW5kbGVyIHdpdGguXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwYXRjaChhcmdzOiBUKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIHRoaXMuaGFuZGxlcnMpIHtcclxuICAgICAgICAgICAgaGFuZGxlcihhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBoYW5kbGVyIHRvIHRoZSBldmVudC5cclxuICAgICAqIEBwYXJhbSB7SUV2ZW50SGFuZGxlcjxUPn0gaGFuZGxlciBUaGUgaGFuZGxlciB0byBhZGQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdWJzY3JpYmUoaGFuZGxlcjogSUV2ZW50SGFuZGxlcjxUPik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVuc3Vic2NyaWJlcyB0aGUgaGFuZGxlciBmcm9tIHRoZSBldmVudC5cclxuICAgICAqIEBwYXJhbSB7SUV2ZW50SGFuZGxlcjxUPn0gaGFuZGxlciBUaGUgaGFuZGxlciB0byByZW1vdmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1bnN1YnNjcmliZShoYW5kbGVyOiBJRXZlbnRIYW5kbGVyPFQ+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IHRoaXMuaGFuZGxlcnMuZmlsdGVyKChoKSA9PiBoICE9PSBoYW5kbGVyKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGV2ZW50IHN1YnNjcmliZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudFN1YnNjcmliZXI8VD4ge1xyXG4gICAgc3Vic2NyaWJlKGhhbmRsZXI6IElFdmVudEhhbmRsZXI8VD4pOiB2b2lkO1xyXG4gICAgdW5zdWJzY3JpYmUoaGFuZGxlcjogSUV2ZW50SGFuZGxlcjxUPik6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCBkaXNwYXRjaGVyXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudERpc3BhdGNoZXI8VD4ge1xyXG4gICAgZGlzcGF0Y2goYXJnczogVCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCBoYW5kbGVyLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnRIYW5kbGVyPFQ+IHtcclxuICAgIChhcmdzOiBUKTogdm9pZDtcclxufVxyXG4iLCJpbXBvcnQgc3RyZWFtRGVja0NsaWVudCBmcm9tICcuLi9zdHJlYW0tZGVjay9zdHJlYW0tZGVjay1jbGllbnQnO1xyXG5cclxuLyoqXHJcbiAqIEdldHMgdGhlIGZpbGUgbmFtZSBmcm9tIHRoZSBwYXRoLlxyXG4gKiBAcGFyYW0gcGF0aCBUaGUgcGF0aC5cclxuICogQHJldHVybnMge3N0cmluZ30gR2V0cyB0aGUgbmFtZSBvZiB0aGUgZmlsZS5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGaWxlTmFtZShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgY29uc3QgZGl2aWRlciA9IChhd2FpdCBpc1dpbmRvd3MoKSkgPyAnXFxcXCcgOiAnLyc7XHJcbiAgICBjb25zdCBzZWdtZW50cyA9IHBhdGguc3BsaXQoZGl2aWRlcik7XHJcblxyXG4gICAgcmV0dXJuIHNlZ21lbnRzLmxlbmd0aCA9PSAxID8gcGF0aCA6IHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0cyB0aGUgc2FuaXRpemVkIHBhdGguXHJcbiAqIEBwYXJhbSBwYXRoIFRoZSByYXcgcGF0aCAoaS5lLiB0aG9zZSByZXR1cm5lZCBieSBhbiBpbnB1dCkuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW5pdGl6ZWQgcGF0aC5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYW5pdGl6ZShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgLy8gRGVjb2RlIGFuZCBzYW5pdGl6ZSB0aGUgdmFsdWUuXHJcbiAgICBjb25zdCBkZWNvZGVkVmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQocGF0aC5yZXBsYWNlKC9eQzpcXFxcZmFrZXBhdGhcXFxcLywgJycpKTtcclxuICAgIHJldHVybiAoYXdhaXQgaXNXaW5kb3dzKCkpID8gZGVjb2RlZFZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cCgnLycsICdnJyksICdcXFxcJykgOiBkZWNvZGVkVmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBsYXRmb3JtIGlzIFdpbmRvd3Mgb3IgTWFjIGJhc2VkIG9uIHRoZSBjb25uZWN0aW9uLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSB3aGVuIHRoZSBwbGF0Zm9ybSBpcyB3aW5kb3dzOyBvdGhlcndpc2UgZmFsc2UuXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNXaW5kb3dzKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgY29ubmVjdGlvbkluZm8gPSBhd2FpdCBzdHJlYW1EZWNrQ2xpZW50LmdldENvbm5lY3Rpb25JbmZvKCk7XHJcbiAgICByZXR1cm4gY29ubmVjdGlvbkluZm8uaW5mby5hcHBsaWNhdGlvbi5wbGF0Zm9ybSA9PSAnd2luZG93cyc7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFByb3ZpZGVzIGEgcHJvbWlzZSBjb21wbGV0aW9uIHNvdXJjZSB3aGVyZWJ5IGEgcHJvbWlzZSBjYW4gYmUgcmVzb2x2ZWQgYXQgYSBsYXRlciBzdGFnZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9taXNlQ29tcGxldGlvblNvdXJjZTxUPiB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9wcm9taXNlOiBQcm9taXNlPFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgYSBwcm9taXNlIGNvbXBsZXRpb24gc291cmNlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlamVjdD86IChyZWFzb24/OiB1bmtub3duKSA9PiB2b2lkO1xyXG4gICAgcHJpdmF0ZSByZXNvbHZlPzogKHZhbHVlOiBUIHwgUHJvbWlzZUxpa2U8VD4pID0+IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBwcm9taXNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHByb21pc2UoKTogUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSByZXN1bHQgb2YgdGhlIGlubmVyIHByb21pc2UuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0UmVzdWx0KHZhbHVlOiBUIHwgUHJvbWlzZUxpa2U8VD4pOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5yZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVqZWN0cyB0aGUgaW5uZXIgcHJvbWlzZS5cclxuICAgICAqIEBwYXJhbSByZWFzb24gVGhlIHJlYXNvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEV4Y2VwdGlvbihyZWFzb24/OiB1bmtub3duKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBJbnZva2VzIHRoZSBgY2FsbGJhY2tgIGFmdGVyIHRoZSBnaXZlbiBgdGltZW91dGA7IGNhbGxpbmcgdGhlIHJldHVybmluZyBmdW5jdGlvbiB3aWxsIHJlc2V0IHRoZSB0aW1lb3V0LCB0aHVzIGFsbG93aW5nIGZvciBhIGRlbGF5IGluIHRoZSBpbnZvY2F0aW9uIG9mIHRoZSBgY2FsbGJhY2tgLlxyXG4gKiBAcGFyYW0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB0aW1lb3V0IGV4cGlyZXMuXHJcbiAqIEBwYXJhbSB0aW1lb3V0IFRoZSB0aW1lb3V0IGR1cmF0aW9uLlxyXG4gKiBAcmV0dXJucyBBIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIGZvciB0aGUgdGltZW91dCB0byBiZSByZS1zZXQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVsYXkoY2FsbGJhY2s6IChkYXRhOiB1bmtub3duIHwgdW5kZWZpbmVkKSA9PiB2b2lkLCB0aW1lb3V0OiBudW1iZXIpOiAoZGF0YTogdW5rbm93biB8IHVuZGVmaW5lZCkgPT4gdm9pZCB7XHJcbiAgICBsZXQgaGFuZGxlOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gKGRhdGE6IHVua25vd24gfCB1bmRlZmluZWQsIC4uLmFyZ3M6IHVua25vd25bXSkgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xyXG4gICAgICAgIGhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2soZGF0YSksIHRpbWVvdXQsIGFyZ3MpO1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBDU1NSZXN1bHRBcnJheSwgQ1NTUmVzdWx0R3JvdXAsIENTU1Jlc3VsdE9yTmF0aXZlIH0gZnJvbSAnbGl0JztcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIGBDU1NSZXN1bHRHcm91cGAgdG8gYW4gYXJyYXkuXHJcbiAqIEBwYXJhbSBzdHlsZXMgVGhlIHN0eWxlcyB0byBjb252ZXJ0LlxyXG4gKiBAcmV0dXJucyBUaGUgYXJyYXkgb2YgYENTU1Jlc3VsdE9yTmF0aXZlYCBvciBgQ1NTUmVzdWx0QXJyYXlgLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFzQXJyYXkoc3R5bGVzPzogQ1NTUmVzdWx0R3JvdXApOiAoQ1NTUmVzdWx0T3JOYXRpdmUgfCBDU1NSZXN1bHRBcnJheSlbXSB7XHJcbiAgICBpZiAoc3R5bGVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGVzKSkge1xyXG4gICAgICAgIHJldHVybiBbLi4uc3R5bGVzXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW3N0eWxlc107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSAndW5pcXVlJyBpZGVudGlmaWVyLlxyXG4gKiBAcmV0dXJucyBUaGUgdW5pcXVlIGlkZW50aWZpZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVVJRCgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgY2hyNCA9ICgpID0+IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKC00KTtcclxuICAgIHJldHVybiBjaHI0KCkgKyBjaHI0KCkgKyAnLScgKyBjaHI0KCkgKyAnLScgKyBjaHI0KCkgKyAnLScgKyBjaHI0KCkgKyAnLScgKyBjaHI0KCkgKyBjaHI0KCkgKyBjaHI0KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCB0aGUgc3BlY2lmaWVkIGBwYXRoYCBmcm9tIHRoZSBgc291cmNlYCBvYmplY3QuXHJcbiAqIEBwYXJhbSBwYXRoIFRoZSBwYXRoIHRvIHRoZSBwcm9wZXJ0eSB0byBnZXQuXHJcbiAqIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgdGhhdCBpcyBiZWluZyByZWFkIGZyb20uXHJcbiAqIEByZXR1cm5zIFRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkuXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0KHBhdGg6IHN0cmluZywgc291cmNlOiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3QgcHJvcHM6IHN0cmluZ1tdID0gQXJyYXkuaXNBcnJheShwYXRoKSA/IHBhdGggOiBwYXRoLnNwbGl0KCcuJyk7XHJcbiAgICByZXR1cm4gcHJvcHMucmVkdWNlKChvYmosIHByb3ApID0+IG9iaiAmJiBvYmpbcHJvcF0sIHNvdXJjZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBzcGVjaWZpZWQgYHZhbHVlYCBvbiB0aGUgYHRhcmdldGAgb2JqZWN0IGF0IHRoZSBkZXNpcmVkIHByb3BlcnR5IGBwYXRoYC5cclxuICogQHBhcmFtIHBhdGggVGhlIHBhdGggdG8gdGhlIHByb3BlcnR5IHRvIHNldC5cclxuICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCB0aGF0IGlzIGJlaW5nIHdyaXR0ZW4gdG8uXHJcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gd3JpdGUuXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0KHBhdGg6IHN0cmluZywgdGFyZ2V0OiBhbnksIHZhbHVlOiB1bmtub3duKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXJ0cyA9IHBhdGguc3BsaXQoJy4nKTtcclxuICAgIHBhcnRzLnJlZHVjZSgob2JqLCBwcm9wLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGkgPT09IHBhcnRzLmxlbmd0aCAtIDEgPyAob2JqW3Byb3BdID0gdmFsdWUpIDogb2JqW3Byb3BdIHx8IChvYmpbcHJvcF0gPSB7fSk7XHJcbiAgICB9LCB0YXJnZXQpO1xyXG59XHJcbiIsImltcG9ydCB7IGNzcywgQ1NTUmVzdWx0R3JvdXAsIGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xyXG5cclxuaW1wb3J0IHsgYXNBcnJheSB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGEgbWl4aW4gdGhhdCBjb250YWlucyBmdW5jdGlvbmFsaXR5IGZvciByZW5kZXJpbmcgaW5wdXRzIHRoYXQgY2FuIGJlIGNoZWNrZWQsIGkuZS4gcmFkaW8gYnV0dG9ucyBhbmQgY2hlY2tib3hlcywgYW5kIHJlbmRlcnMgdGhlaXIgY2hlY2sgc3RhdGUgdXNpbmcgbW9yZSB1c2VyLWZyaWVuZGx5IHJlcHJlc2VudGF0aW9ucy5cclxuICogQHBhcmFtIHN1cGVyQ2xhc3MgVGhlIHN1cGVyIGNsYXNzIHRoYXQgdGhpcyBtaXhpbiB3aWxsIGV4dGVuZC5cclxuICogQHJldHVybnMgVGhlIG1peGluIGFzIGEgY2xhc3MgdGhhdCBleHRlbmRzIGBzdXBlckNsYXNzYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBDaGVja2FibGUgPSA8VEJhc2UgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxMaXRFbGVtZW50PiAmIHsgc3R5bGVzPzogQ1NTUmVzdWx0R3JvdXAgfT4oc3VwZXJDbGFzczogVEJhc2UpID0+IHtcclxuICAgIGNsYXNzIENoZWNrYWJsZSBleHRlbmRzIHN1cGVyQ2xhc3Mge1xyXG4gICAgICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIGFzQXJyYXkoc3VwZXIuc3R5bGVzKSxcclxuICAgICAgICAgICAgICAgIGNzc2BcclxuICAgICAgICAgICAgICAgICAgICA6aG9zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tY2hlY2tib3gtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2FibGUtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlcikgMCAwIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2FibGUtY29udGFpbmVyID4gaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrYWJsZS1jb250YWluZXIgPiBpbnB1dDpub3QoOmRpc2FibGVkKSB+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2hlY2thYmxlLWNvbnRhaW5lciA+IGlucHV0OmRpc2FibGVkIH4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2FibGUtY29udGFpbmVyID4gLmNoZWNrYWJsZS1zeW1ib2wge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZy1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgdmFyKC0tY2hlY2tib3gtc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogdmFyKC0tY2hlY2tib3gtc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1jaGVja2JveC1zaXplKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2FibGUtY29udGFpbmVyID4gaW5wdXRbdHlwZT0ncmFkaW8nXSB+IC5jaGVja2FibGUtc3ltYm9sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrYWJsZS1jb250YWluZXIgPiAuY2hlY2thYmxlLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDEgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCB2YXIoLS1zcGFjZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrYWJsZS1jb250YWluZXIgPiBpbnB1dDpjaGVja2VkIH4gLmNoZWNrYWJsZS1zeW1ib2wge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzdmIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2hlY2thYmxlLWNvbnRhaW5lciA+IGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCB+IC5jaGVja2FibGUtc3ltYm9sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMCcgdmlld0JveD0nMCAwIDEyIDEwJyUzRSUzQ3BvbHlnb24gZmlsbD0nJTIzRkZGJyBwb2ludHM9JzcuMiA3LjUgNy4yIC0xLjMgOC43IC0xLjMgOC42IDkuMSAyLjcgOC43IDIuNyA3LjInIHRyYW5zZm9ybT0ncm90YXRlKDM3IDUuNzE4IDMuODk2KScvJTNFJTNDL3N2ZyUzRSUwQVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2FibGUtY29udGFpbmVyID4gaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkIH4gLmNoZWNrYWJsZS1zeW1ib2wge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzYnIGhlaWdodD0nNicgdmlld0JveD0nMCAwIDYgNiclM0UlM0NjaXJjbGUgY3g9JzMnIGN5PSczJyByPSczJyBmaWxsPSclMjNGRkYnLyUzRSUzQy9zdmclM0UlMEFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVuZGVycyB0aGUgZ2l2ZW4gYGlucHV0YCBpbiBhIG1vcmUgdXNlci1mcmllbmRseSB3YXksIHdoaWxzdCBhbHNvIG1haW50YWluaW5nIGFjY2Vzc2liaWxpdHkuXHJcbiAgICAgICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIGlucHV0LlxyXG4gICAgICAgICAqIEBwYXJhbSBpbnB1dCBUaGUgaW5wdXQgdG8gc3Vic3RpdHV0ZS5cclxuICAgICAgICAgKiBAcGFyYW0gbGFiZWwgT3B0aW9uYWwgbGFiZWwgdG8gYmUgZGlzcGxheWVkIG5leHQgdG8gdGhlIGlucHV0LlxyXG4gICAgICAgICAqIEByZXR1cm5zIFRoZSBIVE1MIHRlbXBsYXRlIHRoYXQgY29udGFpbnMgdGhlIGNoZWNrYWJsZSBpbnB1dC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgcmVuZGVyQ2hlY2thYmxlKHR5cGU6ICdjaGVja2JveCcgfCAncmFkaW8nLCBpbnB1dDogdW5rbm93biwgbGFiZWw/OiBzdHJpbmcpOiB1bmtub3duIHtcclxuICAgICAgICAgICAgcmV0dXJuIGh0bWxgXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2FibGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrYWJsZS1zeW1ib2xcIiByb2xlPSR7dHlwZX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICR7bGFiZWwgPyBodG1sYDxzcGFuIGNsYXNzPVwiY2hlY2thYmxlLXRleHRcIj4ke2xhYmVsfTwvc3Bhbj5gIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIENoZWNrYWJsZTtcclxufTtcclxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVJlZiwgUmVmIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvcmVmLmpzJztcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhIG1peGluIHRoYXQgY29udGFpbnMgYW4gZWxlbWVudCB0aGF0IGlzIGZvY3VzYWJsZS5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJRm9jdXNhYmxlIHtcclxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBlbGVtZW50IGNhbiBnYWluIGZvY3VzLlxyXG4gICAgICovXHJcbiAgICBjYW5Gb2N1czogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgdGhhdCBjYW4gZ2FpbiBmb2N1cy5cclxuICAgICAqL1xyXG4gICAgZm9jdXNFbGVtZW50OiBSZWY8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRm9jdXMgdGhlIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGZvY3VzKCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhIG1peGluIHRoYXQgY29udGFpbnMgYW4gZWxlbWVudCB0aGF0IGlzIGZvY3VzYWJsZSB0aHVzIGFsbG93aW5nIGZvciBpbXByb3ZlZCBhY2Nlc3NpYmlsaXR5IG9mIGNvbXBvbmVudHMgdGhhdCBjb25zdW1lIHRoZSBzaGFkb3cgRE9NLlxyXG4gKiBAcGFyYW0gc3VwZXJDbGFzcyBUaGUgc3VwZXIgY2xhc3MgdGhhdCB0aGlzIG1peGluIHdpbGwgZXh0ZW5kLlxyXG4gKiBAcmV0dXJucyBUaGUgbWl4aW4gYXMgYSBjbGFzcyB0aGF0IGV4dGVuZHMgYHN1cGVyQ2xhc3NgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEZvY3VzYWJsZSA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcclxuICAgIGNsYXNzIEZvY3VzYWJsZSBleHRlbmRzIHN1cGVyQ2xhc3MgaW1wbGVtZW50cyBJRm9jdXNhYmxlIHtcclxuICAgICAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgICAgICBwdWJsaWMgZm9jdXNFbGVtZW50OiBSZWY8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+ID0gY3JlYXRlUmVmKCk7XHJcblxyXG4gICAgICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXQgY2FuRm9jdXMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvY3VzRWxlbWVudC52YWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICAgICAgcHVibGljIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvY3VzRWxlbWVudC52YWx1ZT8udHlwZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZvY3VzRWxlbWVudC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmZvY3VzRWxlbWVudC52YWx1ZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5mb2N1c0VsZW1lbnQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSAhY2hlY2tib3guY2hlY2tlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbGUnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNFbGVtZW50LnZhbHVlLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNFbGVtZW50LnZhbHVlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gRm9jdXNhYmxlIGFzIENvbnN0cnVjdG9yPElGb2N1c2FibGU+ICYgVDtcclxufTtcclxuIiwiaW1wb3J0IHsgY3NzLCBDU1NSZXN1bHRHcm91cCwgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xyXG5cclxuaW1wb3J0IHsgYXNBcnJheSB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGEgbWl4aW4gdGhhdCBjb250YWlucyBoZWxwZXIgbWV0aG9kcyBmb3IgY3JlYXRpbmcgZWxlbWVudHMgdGhhdCBzaG91bGQgYmUgcmVuZGVyZWQgaW4gYSBncmlkIHVzaW5nIGNvbHVtbnMuXHJcbiAqIEBwYXJhbSBzdXBlckNsYXNzIFRoZSBzdXBlciBjbGFzcyB0aGF0IHRoaXMgbWl4aW4gd2lsbCBleHRlbmQuXHJcbiAqIEByZXR1cm5zIFRoZSBtaXhpbiBhcyBhIGNsYXNzIHRoYXQgZXh0ZW5kcyBgc3VwZXJDbGFzc2AuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgR3JpZGRlZCA9IDxUQmFzZSBleHRlbmRzIENvbnN0cnVjdG9yPExpdEVsZW1lbnQ+ICYgeyBzdHlsZXM/OiBDU1NSZXN1bHRHcm91cCB9PihzdXBlckNsYXNzOiBUQmFzZSkgPT4ge1xyXG4gICAgY2xhc3MgR3JpZGRlZCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xyXG4gICAgICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIGFzQXJyYXkoc3VwZXIuc3R5bGVzKSxcclxuICAgICAgICAgICAgICAgIGNzc2BcclxuICAgICAgICAgICAgICAgICAgICAuZ3JpZGRlZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZ3JpZGRlZC1jb250YWluZXIgPiAuZ3JpZGRlZC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIHZhcigtLXNwYWNlcikgMCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZ3JpZGRlZC1jb250YWluZXIgPiAuZ3JpZGRlZC1jb2wtMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZ3JpZGRlZC1jb250YWluZXIgPiAuZ3JpZGRlZC1jb2wtMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoKDEwMCUgLyAyKSAtICh2YXIoLS1zcGFjZXIpICogMSAvIDIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5ncmlkZGVkLWNvbnRhaW5lciA+IC5ncmlkZGVkLWNvbC0zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNpczogY2FsYygoMTAwJSAvIDMgLSAodmFyKC0tc3BhY2VyKSAqIDIgLyAzKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmdyaWRkZWQtY29udGFpbmVyID4gLmdyaWRkZWQtY29sLTQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKCgxMDAlIC8gNCAtICh2YXIoLS1zcGFjZXIpICogMyAvIDQpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZ3JpZGRlZC1jb250YWluZXIgPiAuZ3JpZGRlZC1jb2wtNSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoKDEwMCUgLyA1IC0gKHZhcigtLXNwYWNlcikgKiA0IC8gNSkpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5ncmlkZGVkLWNvbnRhaW5lciA+IC5ncmlkZGVkLWNvbC02IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNpczogY2FsYygoMTAwJSAvIDYgLSAodmFyKC0tc3BhY2VyKSAqIDUgLyA2KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmdyaWRkZWQtY29udGFpbmVyID4gLmdyaWRkZWQtY29sLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgLmdyaWRkZWQtY29udGFpbmVyID4gLmdyaWRkZWQtY29sLTI6bnRoLWNoaWxkKDJuKSxcclxuICAgICAgICAgICAgICAgICAgICAuZ3JpZGRlZC1jb250YWluZXIgPiAuZ3JpZGRlZC1jb2wtMzpudGgtY2hpbGQoM24pLFxyXG4gICAgICAgICAgICAgICAgICAgIC5ncmlkZGVkLWNvbnRhaW5lciA+IC5ncmlkZGVkLWNvbC00Om50aC1jaGlsZCg0biksXHJcbiAgICAgICAgICAgICAgICAgICAgLmdyaWRkZWQtY29udGFpbmVyID4gLmdyaWRkZWQtY29sLTU6bnRoLWNoaWxkKDVuKSxcclxuICAgICAgICAgICAgICAgICAgICAuZ3JpZGRlZC1jb250YWluZXIgPiAuZ3JpZGRlZC1jb2wtNjpudGgtY2hpbGQoNm4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgb3Igc2V0cyB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgdGhlIGdyaWQgY29udGFpbnMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXHJcbiAgICAgICAgcHVibGljIGNvbHVtbnMgPSAxO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZW5kZXJzIHRoZSBnaXZlbiBpdGVtcyB0byBhIGdyaWQgd2l0aCB0aGUgc3BlY2lmaWVkIGBjb2x1bW5zYC5cclxuICAgICAgICAgKiBAcGFyYW0gaXRlbXMgVGhlIGl0ZW1zIHRvIHJlbmRlci5cclxuICAgICAgICAgKiBAcmV0dXJucyBUaGUgSFRNTCB0ZW1wbGF0ZSB0aGF0IGNvbnRhaW5zIHRoZSBpdGVtcyByZW5kZXJlZCBpbiBhIGdyaWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIHJlbmRlckdyaWQoaXRlbXM6IHVua25vd25bXSk6IHVua25vd24ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwiZ3JpZGRlZC1jb250YWluZXJcIj4ke2l0ZW1zLm1hcCgoaXRlbSkgPT4gaHRtbGA8ZGl2IGNsYXNzPVwiZ3JpZGRlZC1pdGVtIGdyaWRkZWQtY29sLSR7dGhpcy5jb2x1bW5zfVwiPiR7aXRlbX08L2Rpdj5gKX08L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gR3JpZGRlZDtcclxufTtcclxuIiwiZXhwb3J0IHsgQ2hlY2thYmxlIH0gZnJvbSAnLi9jaGVja2FibGUnO1xyXG5leHBvcnQgeyBGb2N1c2FibGUsIElGb2N1c2FibGUgfSBmcm9tICcuL2ZvY3VzYWJsZSc7XHJcbmV4cG9ydCB7IEdyaWRkZWQgfSBmcm9tICcuL2dyaWRkZWQnO1xyXG5leHBvcnQgeyBJbnB1dCB9IGZyb20gJy4vaW5wdXQnO1xyXG5leHBvcnQgeyBQZXJzaXN0ZWQgfSBmcm9tICcuL3BlcnNpc3RlZCc7XHJcbiIsImltcG9ydCB7IGNzcywgQ1NTUmVzdWx0R3JvdXAsIExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcclxuXHJcbmltcG9ydCB7IGFzQXJyYXksIGdldFVVSUQgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcclxuaW1wb3J0IHsgaG9zdFN0eWxlIH0gZnJvbSAnLi4vc3R5bGVzL2hvc3QnO1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGEgbWl4aW4gdGhhdCByZXByZXNlbnRzIHRoZSB0eXBpY2FsIHByb3BlcnRpZXMgZm91bmQgb24gYW4gaW5wdXQuXHJcbiAqIEBwYXJhbSBzdXBlckNsYXNzIFRoZSBzdXBlciBjbGFzcyB0aGF0IHRoaXMgbWl4aW4gd2lsbCBleHRlbmQuXHJcbiAqIEByZXR1cm5zIFRoZSBtaXhpbiBhcyBhIGNsYXNzIHRoYXQgZXh0ZW5kcyBgc3VwZXJDbGFzc2AuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgSW5wdXQgPSA8VEJhc2UgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxMaXRFbGVtZW50PiAmIHsgc3R5bGVzPzogQ1NTUmVzdWx0R3JvdXAgfSwgVFZhbHVlPihzdXBlckNsYXNzOiBUQmFzZSkgPT4ge1xyXG4gICAgY2xhc3MgSW5wdXQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcclxuICAgICAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldCBzdHlsZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBhc0FycmF5KHN1cGVyLnN0eWxlcyksXHJcbiAgICAgICAgICAgICAgICBob3N0U3R5bGUsXHJcbiAgICAgICAgICAgICAgICBjc3NgXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEJveCBtb2RlbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogQmFja2dyb3VuZCBhbmQgdHlwb2dyYXBoeSAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW5wdXQtZm9udC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXRzIG9yIHNldHMgdGhlIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxyXG4gICAgICAgIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXRzIG9yIHNldHMgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IGZhbHNlIH0pXHJcbiAgICAgICAgcHVibGljIHZhbHVlPzogVFZhbHVlO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgaW5wdXQgaWRlbnRpZmllci5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgaW5wdXRJZCA9IGdldFVVSUQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gSW5wdXQ7XHJcbn07XHJcbiIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhIG1peGluIHRoYXQgY29udGFpbnMgaW5mb3JtYXRpb24gcmVsYXRpbmcgdG8gcGVyc2lzdGluZyBkYXRhIHdpdGhpbiB0aGUgU3RyZWFtIERlY2sgc2V0dGluZ3MuXHJcbiAqIEBwYXJhbSBzdXBlckNsYXNzIFRoZSBzdXBlciBjbGFzcyB0aGF0IHRoaXMgbWl4aW4gd2lsbCBleHRlbmQuXHJcbiAqIEByZXR1cm5zIFRoZSBtaXhpbiBhcyBhIGNsYXNzIHRoYXQgZXh0ZW5kcyBgc3VwZXJDbGFzc2AuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUGVyc2lzdGVkID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxMaXRFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xyXG4gICAgY2xhc3MgUGVyc2lzdGVkIGV4dGVuZHMgc3VwZXJDbGFzcyB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogV2hlbiB0cnVlLCB0aGUgc2V0dGluZyB3aWxsIGJlIHBlcnNpc3RlZCBhZ2FpbnN0IHRoZSBnbG9iYWwgc2V0dGluZ3MuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgQHByb3BlcnR5KHtcclxuICAgICAgICAgICAgYXR0cmlidXRlOiAnZ2xvYmFsJyxcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcHVibGljIGlzR2xvYmFsID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBwcm9wZXJ0eSBrZXkgb2Ygd2hpY2ggdGhlIHZhbHVlIGlzIHBlcnNpc3RlZCBhZ2FpbnN0IGluIHRoZSBzZXR0aW5ncywgZS5nLiAnbmFtZScgd291bGQgcmVzdWx0IGluIHRoZSBzZXR0aW5ncyBiZWluZyB7ICduYW1lJzogdmFsdWUsIC4uLiB9LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEBwcm9wZXJ0eSgpXHJcbiAgICAgICAgcHVibGljIHNldHRpbmc/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFBlcnNpc3RlZDtcclxufTtcclxuIiwiaW1wb3J0IHN0cmVhbURlY2tDbGllbnQgZnJvbSAnLi9zdHJlYW0tZGVjay1jbGllbnQnO1xyXG5cclxuLyogVGhlIFN0cmVhbSBEZWNrIGNsaWVudCAqL1xyXG53aW5kb3cuc3RyZWFtRGVja0NsaWVudCA9IHN0cmVhbURlY2tDbGllbnQ7XHJcblxyXG5jb25zdCBleGlzdGluZyA9IHdpbmRvdy5jb25uZWN0RWxnYXRvU3RyZWFtRGVja1NvY2tldDtcclxuXHJcbi8qKlxyXG4gKiBDYWxsZWQgYnkgdGhlIFN0cmVhbSBEZWNrIHRvIGVuYWJsZSByZWdpc3RyYXRpb24gb2YgdGhlIHByb3BlcnR5IGluc3BlY3Rvci5cclxuICogQHBhcmFtIGluUG9ydCBUaGUgcG9ydCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSB0aGUgV2ViU29ja2V0LlxyXG4gKiBAcGFyYW0gaW5Qcm9wZXJ0eUluc3BlY3RvclVVSUQgQSB1bmlxdWUgaWRlbnRpZmllciBzdHJpbmcgdG8gcmVnaXN0ZXIgUHJvcGVydHkgSW5zcGVjdG9yIHdpdGggU3RyZWFtIERlY2sgc29mdHdhcmUuXHJcbiAqIEBwYXJhbSBpblJlZ2lzdGVyRXZlbnQgVGhlIGV2ZW50IHR5cGUgdGhhdCBzaG91bGQgYmUgdXNlZCB0byByZWdpc3RlciB0aGUgcGx1Z2luIG9uY2UgdGhlIFdlYlNvY2tldCBpcyBvcGVuZWQuIEZvciBQcm9wZXJ0eSBJbnNwZWN0b3IgdGhpcyBpcyBcInJlZ2lzdGVyUHJvcGVydHlJbnNwZWN0b3JcIi5cclxuICogQHBhcmFtIGluSW5mbyBBIGpzb24gb2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFwcGxpY2F0aW9uLlxyXG4gKiBAcGFyYW0gaW5BY3Rpb25JbmZvIEEganNvbiBvYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYWN0aW9uLlxyXG4gKi9cclxud2luZG93LmNvbm5lY3RFbGdhdG9TdHJlYW1EZWNrU29ja2V0ID0gZnVuY3Rpb24gKGluUG9ydDogc3RyaW5nLCBpblByb3BlcnR5SW5zcGVjdG9yVVVJRDogc3RyaW5nLCBpblJlZ2lzdGVyRXZlbnQ6IHN0cmluZywgaW5JbmZvOiBzdHJpbmcsIGluQWN0aW9uSW5mbzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoZXhpc3RpbmcpIHtcclxuICAgICAgICBleGlzdGluZyhpblBvcnQsIGluUHJvcGVydHlJbnNwZWN0b3JVVUlELCBpblJlZ2lzdGVyRXZlbnQsIGluSW5mbywgaW5BY3Rpb25JbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHJlYW1EZWNrQ2xpZW50LmNvbm5lY3QoaW5Qb3J0LCBpblByb3BlcnR5SW5zcGVjdG9yVVVJRCwgaW5SZWdpc3RlckV2ZW50LCBpbkluZm8sIGluQWN0aW9uSW5mbyk7XHJcbn07XHJcbiIsImltcG9ydCB7IERpZFJlY2VpdmVHbG9iYWxTZXR0aW5nc0V2ZW50LCBEaWRSZWNlaXZlU2V0dGluZ3NFdmVudCB9IGZyb20gJ3N0cmVhbS1kZWNrJztcclxuXHJcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAnLi4vY29yZS90aW1lb3V0JztcclxuaW1wb3J0IHsgZ2V0LCBzZXQgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcclxuaW1wb3J0IHN0cmVhbURlY2tDbGllbnQgZnJvbSAnLi9zdHJlYW0tZGVjay1jbGllbnQnO1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGEgc3RvcmUgZm9yIG1hbmFnaW5nIHNldHRpbmdzIHN0b3JlZCB3aXRoaW4gdGhlIFN0cmVhbSBEZWNrLlxyXG4gKi9cclxuY2xhc3MgU2V0dGluZ3Mge1xyXG4gICAgcHJpdmF0ZSBfZ2xvYmFsU2V0dGluZ3M/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcclxuICAgIHByaXZhdGUgX3NldHRpbmdzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgc2V0dGluZ3MgdXNlZCB0byBwZXJzaXN0IGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN0cmVhbURlY2tDbGllbnQuZGlkUmVjZWl2ZUdsb2JhbFNldHRpbmdzLnN1YnNjcmliZSgoZGF0YTogRGlkUmVjZWl2ZUdsb2JhbFNldHRpbmdzRXZlbnQpID0+ICh0aGlzLl9nbG9iYWxTZXR0aW5ncyA9IGRhdGEucGF5bG9hZC5zZXR0aW5ncykpO1xyXG4gICAgICAgIHN0cmVhbURlY2tDbGllbnQuZGlkUmVjZWl2ZVNldHRpbmdzLnN1YnNjcmliZSgoZGF0YTogRGlkUmVjZWl2ZVNldHRpbmdzRXZlbnQpID0+ICh0aGlzLl9zZXR0aW5ncyA9IGRhdGEucGF5bG9hZC5zZXR0aW5ncykpO1xyXG5cclxuICAgICAgICBzdHJlYW1EZWNrQ2xpZW50LmdldEdsb2JhbFNldHRpbmdzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcnMgdGhlIHRoZSBnaXZlbiBrZXkgYXMgYSBzZXR0aW5nIHRvIGJlIHBlcnNpc3RlZCBpbiB0aGUgU3RyZWFtIERlY2s7IHdoZW4gdGhlIHNldHRpbmdzIGNoYW5nZSwgdGhlIGNhbGxiYWNrIGlzIGludm9rZWQuIFRoaXMgcmV0dXJucyBhIGZ1bmN0aW9uIGNhcGFibGUgb2YgcGVyc2lzdGluZyB0aGUgdmFsdWUgYWdhaW5zdCB0aGUga2V5LlxyXG4gICAgICogQHBhcmFtIGtleSBUaGUgc2V0dGluZ3Mga2V5LlxyXG4gICAgICogQHBhcmFtIGlzR2xvYmFsIERldGVybWluZXMgd2hldGhlciB0aGUgc2V0dGluZyBpcyBhIGdsb2JhbCBzZXR0aW5nLlxyXG4gICAgICogQHBhcmFtIG9uQ2hhbmdlIFRoZSBjYWxsYmFjayBpbnZva2VkIHdoZW4gdGhlIHNldHRpbmcgY2hhbmdlcy5cclxuICAgICAqIEByZXR1cm5zIEEgZGVsZWdhdGUgdGhhdCBhbGxvd3MgZm9yIHVwZGF0aW5nIHRoZSBzZXR0aW5nIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXI8VD4oa2V5OiBzdHJpbmcsIGlzR2xvYmFsOiBib29sZWFuLCBvbkNoYW5nZTogKHZhbHVlPzogVCkgPT4gdm9pZCwgdGltZW91dDogbnVtYmVyIHwgbnVsbCA9IDI1MCk6ICh2YWx1ZT86IHVua25vd24pID0+IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmdDaGFuZ2VIYW5kbGVyID0gKGRhdGE6IERpZFJlY2VpdmVHbG9iYWxTZXR0aW5nc0V2ZW50IHwgRGlkUmVjZWl2ZVNldHRpbmdzRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5wYXlsb2FkICYmIGRhdGEucGF5bG9hZC5zZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoZ2V0KGtleSwgZGF0YS5wYXlsb2FkLnNldHRpbmdzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gY2hhbmdlcy5cclxuICAgICAgICBpZiAoaXNHbG9iYWwpIHtcclxuICAgICAgICAgICAgc3RyZWFtRGVja0NsaWVudC5kaWRSZWNlaXZlR2xvYmFsU2V0dGluZ3Muc3Vic2NyaWJlKHNldHRpbmdDaGFuZ2VIYW5kbGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdHJlYW1EZWNrQ2xpZW50LmRpZFJlY2VpdmVTZXR0aW5ncy5zdWJzY3JpYmUoc2V0dGluZ0NoYW5nZUhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBzZXR0ZXIgdGhhdCBhbGxvd3MgZm9yIHRoZSB2YWx1ZSB0byBiZSBzYXZlZCB0byB0aGUgc3RvcmUuXHJcbiAgICAgICAgaWYgKHRpbWVvdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlbGF5KCh2YWx1ZSkgPT4gc2V0dGluZ3Muc2V0KGtleSwgaXNHbG9iYWwsIHZhbHVlKSwgdGltZW91dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZT86IHVua25vd24pID0+IHNldHRpbmdzLnNldChrZXksIGlzR2xvYmFsLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmFsdWUsIGZvciB0aGUgc3BlY2lmaWVkIGtleSwgdG8gdGhlIHBlcnNpc3RlbnQgc2V0dGluZ3MuXHJcbiAgICAgKiBAcGFyYW0ga2V5IFRoZSBzZXR0aW5ncyBrZXkuXHJcbiAgICAgKiBAcGFyYW0gaXNHbG9iYWwgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzZXR0aW5nIGlzIGEgZ2xvYmFsIHNldHRpbmcuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHNldHRpbmdzIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNldChrZXk6IHN0cmluZywgaXNHbG9iYWw6IGJvb2xlYW4sIHZhbHVlPzogdW5rbm93bik6IHZvaWQge1xyXG4gICAgICAgIGlmIChpc0dsb2JhbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZ2xvYmFsU2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgIHNldChrZXksIHRoaXMuX2dsb2JhbFNldHRpbmdzLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RyZWFtRGVja0NsaWVudC5zZXRHbG9iYWxTZXR0aW5ncyh0aGlzLl9nbG9iYWxTZXR0aW5ncyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBzZXQoa2V5LCB0aGlzLl9zZXR0aW5ncywgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0cmVhbURlY2tDbGllbnQuc2V0U2V0dGluZ3ModGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3MoKTtcclxuZXhwb3J0IGNvbnN0IHVzZVNldHRpbmdzID0gc2V0dGluZ3MucmVnaXN0ZXI7XHJcbiIsImltcG9ydCB7IEFjdGlvbkluZm8sIEFzRXZlbnQsIERpZFJlY2VpdmVHbG9iYWxTZXR0aW5nc0V2ZW50LCBEaWRSZWNlaXZlU2V0dGluZ3NFdmVudCwgRXZlbnRSZWNlaXZlZCwgRXZlbnRTZW50LCBSZWdpc3RyYXRpb25JbmZvIH0gZnJvbSAnc3RyZWFtLWRlY2snO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi4vY29yZS9ldmVudHMnO1xyXG5pbXBvcnQgeyBQcm9taXNlQ29tcGxldGlvblNvdXJjZSB9IGZyb20gJy4uL2NvcmUvcHJvbWlzZXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29ubmVjdGlvbkluZm8ge1xyXG4gICAgYWN0aW9uSW5mbzogQWN0aW9uSW5mbztcclxuICAgIGluZm86IFJlZ2lzdHJhdGlvbkluZm87XHJcbiAgICBwcm9wZXJ0eUluc3BlY3RvclVVSUQ6IHN0cmluZztcclxuICAgIHJlZ2lzdGVyRXZlbnQ6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGEgU3RyZWFtIERlY2sgY2xpZW50IHdyYXBwZXIgZm9yIHRoZSBjb25uZWN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0cmVhbURlY2tDbGllbnQge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY29ubmVjdGlvbiA9IG5ldyBQcm9taXNlQ29tcGxldGlvblNvdXJjZTxXZWJTb2NrZXQ+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jb25uZWN0aW9uSW5mbyA9IG5ldyBQcm9taXNlQ29tcGxldGlvblNvdXJjZTxJQ29ubmVjdGlvbkluZm8+KCk7XHJcbiAgICBwcml2YXRlIF93ZWJTb2NrZXQ/OiBXZWJTb2NrZXQ7XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IGRpZFJlY2VpdmVHbG9iYWxTZXR0aW5ncyA9IG5ldyBFdmVudE1hbmFnZXI8RGlkUmVjZWl2ZUdsb2JhbFNldHRpbmdzRXZlbnQ+KCk7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZGlkUmVjZWl2ZVNldHRpbmdzID0gbmV3IEV2ZW50TWFuYWdlcjxEaWRSZWNlaXZlU2V0dGluZ3NFdmVudD4oKTtcclxuICAgIHB1YmxpYyByZWFkb25seSBtZXNzYWdlID0gbmV3IEV2ZW50TWFuYWdlcjxFdmVudFJlY2VpdmVkPigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29ubmVjdHMgdG8gdGhlIFN0cmVhbSBEZWNrLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgVGhlIHBvcnQgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgdGhlIFdlYlNvY2tldC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eUluc3BlY3RvclVVSUQgQSB1bmlxdWUgaWRlbnRpZmllciBzdHJpbmcgdG8gcmVnaXN0ZXIgUHJvcGVydHkgSW5zcGVjdG9yIHdpdGggU3RyZWFtIERlY2sgc29mdHdhcmUuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVnaXN0ZXJFdmVudCBUaGUgZXZlbnQgdHlwZSB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHJlZ2lzdGVyIHRoZSBwbHVnaW4gb25jZSB0aGUgV2ViU29ja2V0IGlzIG9wZW5lZC4gRm9yIFByb3BlcnR5IEluc3BlY3RvciB0aGlzIGlzIFwicmVnaXN0ZXJQcm9wZXJ0eUluc3BlY3RvclwiLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGluZm8gQSBKU09OIG9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhcHBsaWNhdGlvbi5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25JbmZvIEEgSlNPTiBvYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgY29ubmVjdChwb3J0OiBzdHJpbmcsIHByb3BlcnR5SW5zcGVjdG9yVVVJRDogc3RyaW5nLCByZWdpc3RlckV2ZW50OiBzdHJpbmcsIGluZm86IHN0cmluZywgYWN0aW9uSW5mbz86IHN0cmluZyB8IHVuZGVmaW5lZCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICghdGhpcy5fd2ViU29ja2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3Rpb25JbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uSW5mbzogYWN0aW9uSW5mbyA/IEpTT04ucGFyc2UoYWN0aW9uSW5mbykgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgaW5mbzogSlNPTi5wYXJzZShpbmZvKSxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5SW5zcGVjdG9yVVVJRDogcHJvcGVydHlJbnNwZWN0b3JVVUlELFxyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJFdmVudDogcmVnaXN0ZXJFdmVudFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb25JbmZvLmFjdGlvbkluZm8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlkUmVjZWl2ZVNldHRpbmdzLmRpc3BhdGNoKGNvbm5lY3Rpb25JbmZvLmFjdGlvbkluZm8pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uSW5mby5zZXRSZXN1bHQoY29ubmVjdGlvbkluZm8pO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVnaXN0ZXIgdGhlIHdlYiBzb2NrZXQuXHJcbiAgICAgICAgICAgIHRoaXMuX3dlYlNvY2tldCA9IG5ldyBXZWJTb2NrZXQoYHdzOi8vbG9jYWxob3N0OiR7cG9ydH1gKTtcclxuICAgICAgICAgICAgdGhpcy5fd2ViU29ja2V0Lm9ub3BlbiA9IHRoaXMuaGFuZGxlT3Blbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl93ZWJTb2NrZXQub25tZXNzYWdlID0gdGhpcy5oYW5kbGVNZXNzYWdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVxdWVzdCB0aGUgZ2xvYmFsIHBlcnNpc3RlbnQgZGF0YS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBnbG9iYWwgc2V0dGluZ3MgYXMgYSBwcm9taXNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0R2xvYmFsU2V0dGluZ3MoKTogUHJvbWlzZTxEaWRSZWNlaXZlR2xvYmFsU2V0dGluZ3NFdmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnZ2V0R2xvYmFsU2V0dGluZ3MnLCAoZXYpID0+IGV2LmV2ZW50ID09PSAnZGlkUmVjZWl2ZUdsb2JhbFNldHRpbmdzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlIGRhdGEgc2VjdXJlbHkgYW5kIGdsb2JhbGx5IGZvciB0aGUgcGx1Z2luLlxyXG4gICAgICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLmVsZ2F0by5jb20vZG9jdW1lbnRhdGlvbi9zdHJlYW0tZGVjay9zZGsvZXZlbnRzLXNlbnQvI3NldGdsb2JhbHNldHRpbmdzfVxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBnbG9iYWwgc2V0dGluZ3MuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRHbG9iYWxTZXR0aW5ncyh2YWx1ZT86IHVua25vd24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbmQoJ3NldEdsb2JhbFNldHRpbmdzJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgc2V0dGluZ3MuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc2V0dGluZ3MgYXMgYSBwcm9taXNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U2V0dGluZ3MoKTogUHJvbWlzZTxEaWRSZWNlaXZlU2V0dGluZ3NFdmVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnZ2V0U2V0dGluZ3MnLCAoZXYpID0+IGV2LmV2ZW50ID09PSAnZGlkUmVjZWl2ZVNldHRpbmdzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlIGRhdGEgcGVyc2lzdGVudGx5IGZvciB0aGUgYWN0aW9uJ3MgaW5zdGFuY2UuXHJcbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIuZWxnYXRvLmNvbS9kb2N1bWVudGF0aW9uL3N0cmVhbS1kZWNrL3Nkay9ldmVudHMtc2VudC8jc2V0c2V0dGluZ3N9XHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHNldHRpbmdzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0U2V0dGluZ3ModmFsdWU/OiB1bmtub3duKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZW5kKCdzZXRTZXR0aW5ncycsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGNvbm5lY3Rpb24gaW5mb3JtYXRpb24gdXNlZCB0byBjb25uZWN0IHRvIHRoZSBTdHJlYW0gRGVjay5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb25uZWN0aW9uIGluZm9ybWF0aW9uIGFzIGEgcHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldENvbm5lY3Rpb25JbmZvKCk6IFByb21pc2U8SUNvbm5lY3Rpb25JbmZvPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25JbmZvLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kcyB0aGUgZ2l2ZW4gYHNlbmRgIGV2ZW50IGFsb25nIHdpdGggdGhlIGBwYXlsb2FkYCB0byB0aGUgU3RyZWFtIERlY2ssIGFuZCBjb250aW51YWxseSBhd2FpdHMgYSByZXNwb25zZSBtZXNzYWdlIHRoYXQgbWF0Y2hlcyB0aGUgYGlzQ29tcGxldGVgIGRlbGVnYXRlLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbmQgVGhlIGV2ZW50IHRvIHNlbmQuXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBpc0NvbXBsZXRlIFRoZSBkZWxlZ2F0ZSBpbnZva2VzIHVwb24gcmVjZWl2aW5nIGEgbWVzc2FnZSBmcm9tIHRoZSBTdHJlYW0gRGVjazsgd2hlbiBgdHJ1ZWAsIHRoaXMgcHJvbWlzZSBpcyBmdWxmaWxsZWQuXHJcbiAgICAgKiBAcGFyYW0ge3Vua25vd259IHBheWxvYWQgVGhlIG9wdGlvbmFsIHBheWxvYWQuXHJcbiAgICAgKiBAcmV0dXJucyB7QXNFdmVudDxUUmVjZWl2ZWQ+fSBUaGUgZmlyc3QgZXZlbnQgcmVjZWl2ZWQgdGhhdCBmdWxmaWxsZWQgdGhlIGBpc0NvbXBsZXRlYCBkZWxlZ2F0ZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBnZXQ8VFNlbnQgZXh0ZW5kcyBFdmVudFNlbnRbJ2V2ZW50J10sIFRSZWNlaXZlZCBleHRlbmRzIEV2ZW50UmVjZWl2ZWRbJ2V2ZW50J10+KFxyXG4gICAgICAgIHNlbmQ6IFRTZW50LFxyXG4gICAgICAgIGlzQ29tcGxldGU6IChldjogRXZlbnRSZWNlaXZlZCkgPT4gYm9vbGVhbixcclxuICAgICAgICBwYXlsb2FkPzogdW5rbm93blxyXG4gICAgKTogUHJvbWlzZTxBc0V2ZW50PFRSZWNlaXZlZD4+IHtcclxuICAgICAgICBjb25zdCByZXNvbHZlciA9IG5ldyBQcm9taXNlQ29tcGxldGlvblNvdXJjZTxBc0V2ZW50PFRSZWNlaXZlZD4+KCk7XHJcblxyXG4gICAgICAgIC8vIENvbnN0cnVjdCB0aGUgdGVtcG9yYXJ5IGxpc3RlbmVyIHRoYXQgaXMgcmVtb3ZlZCB3aGVuIHRoZSBjYWxsYmFjayBjYW4gYmUgZnVsaWxsZWQuXHJcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSAoYXJnczogRXZlbnRSZWNlaXZlZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNDb21wbGV0ZShhcmdzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLnVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmVyLnNldFJlc3VsdCg8QXNFdmVudDxUUmVjZWl2ZWQ+PmFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQXdhaXQgbWVzc2FnZSwgYW5kIHNlbmQgdGhlIHJlcXVlc3QuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLnN1YnNjcmliZShsaXN0ZW5lcik7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZW5kKHNlbmQsIHBheWxvYWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzb2x2ZXIucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbmRzIGEgcmVxdWVzdCB0byB0aGUgU3RyZWFtIERlY2suXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXHJcbiAgICAgKiBAcGFyYW0ge3Vua25vd259IHBheWxvYWQgVGhlIG9wdGlvbmFsIHBheWxvYWQuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgc2VuZDxUIGV4dGVuZHMgRXZlbnRTZW50WydldmVudCddPihldmVudDogVCwgcGF5bG9hZD86IHVua25vd24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25uZWN0aW9uSW5mbyA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb25JbmZvLnByb21pc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnNlbmQoXHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbm5lY3Rpb25JbmZvLnByb3BlcnR5SW5zcGVjdG9yVVVJRCxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogY29ubmVjdGlvbkluZm8uYWN0aW9uSW5mby5hY3Rpb25cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFVuYWJsZSB0byBzZW5kIHJlcXVlc3QgJyR7ZXZlbnR9JyBhcyB0aGVyZSBpcyBubyBjb25uZWN0aW9uLmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGhlIHVuZGVybHlpbmcgd2ViIHNvY2tldCBjb25uZWN0aW9uIGJlaW5nIGVzdGFibGlzaGVkIHdpdGggdGhlIFN0cmVhbSBEZWNrLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZU9wZW4oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgY29ubmVjdGlvbkluZm8gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uSW5mby5wcm9taXNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fd2ViU29ja2V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWJTb2NrZXQuc2VuZChcclxuICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBjb25uZWN0aW9uSW5mby5yZWdpc3RlckV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dWlkOiBjb25uZWN0aW9uSW5mby5wcm9wZXJ0eUluc3BlY3RvclVVSURcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uLnNldFJlc3VsdCh0aGlzLl93ZWJTb2NrZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGlvbi5zZXRFeGNlcHRpb24oZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgcmVjZWl2aW5nIGEgbWVzc2FnZSBmcm9tIHRoZSBTdHJlYW0gRGVjay5cclxuICAgICAqIEBwYXJhbSBldiBUaGUgbWVzc2FnZSBldmVudCB0aGF0IGNvbnRhaW5zIHRoZSBkYXRhIHJlY2VpdmVkLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZU1lc3NhZ2UoZXY6IE1lc3NhZ2VFdmVudDxzdHJpbmc+KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZGF0YTogRXZlbnRSZWNlaXZlZCA9IEpTT04ucGFyc2UoZXYuZGF0YSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZGF0YS5ldmVudCkge1xyXG4gICAgICAgICAgICBjYXNlICdkaWRSZWNlaXZlR2xvYmFsU2V0dGluZ3MnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWRSZWNlaXZlR2xvYmFsU2V0dGluZ3MuZGlzcGF0Y2goPERpZFJlY2VpdmVHbG9iYWxTZXR0aW5nc0V2ZW50PmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdkaWRSZWNlaXZlU2V0dGluZ3MnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWRSZWNlaXZlU2V0dGluZ3MuZGlzcGF0Y2goPERpZFJlY2VpdmVTZXR0aW5nc0V2ZW50PmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHJlYW1EZWNrQ2xpZW50ID0gbmV3IFN0cmVhbURlY2tDbGllbnQoKTtcclxuZXhwb3J0IGRlZmF1bHQgc3RyZWFtRGVja0NsaWVudDtcclxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhIGNvbW1vbiBzZXQgb2YgQ1NTIHN0eWxlcyB0aGF0IGFyZSBhcHBsaWVkIHRvIHRoZSBkb2N1bWVudC5cclxuICovXHJcbmNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuc3R5bGUuaW5uZXJIVE1MID0gY3NzYFxyXG4gICAgLyogU3R5bGVzIGFkZGVkIGJ5IHNkcGkgbGlicmFyeS4gKi9cclxuICAgIGh0bWwsXHJcbiAgICBib2R5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xyXG4gICAgfVxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IDVweDtcclxuICAgIH1cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICB9XHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgc2xhdGVncmV5O1xyXG4gICAgfVxyXG5gLmNzc1RleHQ7XHJcblxyXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztcclxuXHJcbmV4cG9ydCBjb25zdCBob3N0U3R5bGUgPSBjc3NgXHJcbiAgICA6aG9zdCB7XHJcbiAgICAgICAgLyogQm94IG1vZGVsICovXHJcbiAgICAgICAgLS1zcGFjZXI6IDRweDtcclxuXHJcbiAgICAgICAgLyogQ29sb3JzICovXHJcbiAgICAgICAgLS13aW5kb3ctYmctY29sb3I6ICMyZDJkMmQ7XHJcbiAgICAgICAgLS1mb250LWNvbG9yOiAjOWE5YTlhO1xyXG4gICAgICAgIC0taW5wdXQtYmctY29sb3I6ICMzZDNkM2Q7XHJcbiAgICAgICAgLS1pbnB1dC1mb250LWNvbG9yOiAjZDhkOGQ4O1xyXG5cclxuICAgICAgICAtLXNjcm9sbGJhci1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHJcbiAgICAgICAgLyogVHlwb2dyYXBoeSAqL1xyXG4gICAgICAgIC0tZm9udC1mYW1pbHk6IEFyaWFsLCAnU2Vnb2UgVUknLCBSb2JvdG8sIEhlbHZldGljYSBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJztcclxuICAgICAgICAtLWZvbnQtc2l6ZTogOHB0O1xyXG4gICAgfVxyXG5gO1xyXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbi8qKlxuICogV2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIGBhZG9wdGVkU3R5bGVTaGVldHNgLlxuICovXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzID0gd2luZG93LlNoYWRvd1Jvb3QgJiZcbiAgICAod2luZG93LlNoYWR5Q1NTID09PSB1bmRlZmluZWQgfHwgd2luZG93LlNoYWR5Q1NTLm5hdGl2ZVNoYWRvdykgJiZcbiAgICAnYWRvcHRlZFN0eWxlU2hlZXRzJyBpbiBEb2N1bWVudC5wcm90b3R5cGUgJiZcbiAgICAncmVwbGFjZScgaW4gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGU7XG5jb25zdCBjb25zdHJ1Y3Rpb25Ub2tlbiA9IFN5bWJvbCgpO1xuY29uc3Qgc3R5bGVTaGVldENhY2hlID0gbmV3IE1hcCgpO1xuLyoqXG4gKiBBIGNvbnRhaW5lciBmb3IgYSBzdHJpbmcgb2YgQ1NTIHRleHQsIHRoYXQgbWF5IGJlIHVzZWQgdG8gY3JlYXRlIGEgQ1NTU3R5bGVTaGVldC5cbiAqXG4gKiBDU1NSZXN1bHQgaXMgdGhlIHJldHVybiB2YWx1ZSBvZiBgY3NzYC10YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbHMgYW5kXG4gKiBgdW5zYWZlQ1NTKClgLiBJbiBvcmRlciB0byBlbnN1cmUgdGhhdCBDU1NSZXN1bHRzIGFyZSBvbmx5IGNyZWF0ZWQgdmlhIHRoZVxuICogYGNzc2AgdGFnIGFuZCBgdW5zYWZlQ1NTKClgLCBDU1NSZXN1bHQgY2Fubm90IGJlIGNvbnN0cnVjdGVkIGRpcmVjdGx5LlxuICovXG5leHBvcnQgY2xhc3MgQ1NTUmVzdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcihjc3NUZXh0LCBzYWZlVG9rZW4pIHtcbiAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgdGhpc1snXyRjc3NSZXN1bHQkJ10gPSB0cnVlO1xuICAgICAgICBpZiAoc2FmZVRva2VuICE9PSBjb25zdHJ1Y3Rpb25Ub2tlbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDU1NSZXN1bHQgaXMgbm90IGNvbnN0cnVjdGFibGUuIFVzZSBgdW5zYWZlQ1NTYCBvciBgY3NzYCBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgfVxuICAgIC8vIE5vdGUsIHRoaXMgaXMgYSBnZXR0ZXIgc28gdGhhdCBpdCdzIGxhenkuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zXG4gICAgLy8gc3R5bGVzaGVldHMgYXJlIG5vdCBjcmVhdGVkIHVudGlsIHRoZSBmaXJzdCBlbGVtZW50IGluc3RhbmNlIGlzIG1hZGUuXG4gICAgZ2V0IHN0eWxlU2hlZXQoKSB7XG4gICAgICAgIC8vIE5vdGUsIGlmIGBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHNgIGlzIHRydWUgdGhlbiB3ZSBhc3N1bWVcbiAgICAgICAgLy8gQ1NTU3R5bGVTaGVldCBpcyBjb25zdHJ1Y3RhYmxlLlxuICAgICAgICBsZXQgc3R5bGVTaGVldCA9IHN0eWxlU2hlZXRDYWNoZS5nZXQodGhpcy5jc3NUZXh0KTtcbiAgICAgICAgaWYgKHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyAmJiBzdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0eWxlU2hlZXRDYWNoZS5zZXQodGhpcy5jc3NUZXh0LCAoc3R5bGVTaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCkpKTtcbiAgICAgICAgICAgIHN0eWxlU2hlZXQucmVwbGFjZVN5bmModGhpcy5jc3NUZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVTaGVldDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNzc1RleHQ7XG4gICAgfVxufVxuY29uc3QgdGV4dEZyb21DU1NSZXN1bHQgPSAodmFsdWUpID0+IHtcbiAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgIGlmICh2YWx1ZVsnXyRjc3NSZXN1bHQkJ10gPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmNzc1RleHQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYWx1ZSBwYXNzZWQgdG8gJ2NzcycgZnVuY3Rpb24gbXVzdCBiZSBhICdjc3MnIGZ1bmN0aW9uIHJlc3VsdDogYCArXG4gICAgICAgICAgICBgJHt2YWx1ZX0uIFVzZSAndW5zYWZlQ1NTJyB0byBwYXNzIG5vbi1saXRlcmFsIHZhbHVlcywgYnV0IHRha2UgY2FyZSBgICtcbiAgICAgICAgICAgIGB0byBlbnN1cmUgcGFnZSBzZWN1cml0eS5gKTtcbiAgICB9XG59O1xuLyoqXG4gKiBXcmFwIGEgdmFsdWUgZm9yIGludGVycG9sYXRpb24gaW4gYSB7QGxpbmtjb2RlIGNzc30gdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWwuXG4gKlxuICogVGhpcyBpcyB1bnNhZmUgYmVjYXVzZSB1bnRydXN0ZWQgQ1NTIHRleHQgY2FuIGJlIHVzZWQgdG8gcGhvbmUgaG9tZVxuICogb3IgZXhmaWx0cmF0ZSBkYXRhIHRvIGFuIGF0dGFja2VyIGNvbnRyb2xsZWQgc2l0ZS4gVGFrZSBjYXJlIHRvIG9ubHkgdXNlXG4gKiB0aGlzIHdpdGggdHJ1c3RlZCBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHVuc2FmZUNTUyA9ICh2YWx1ZSkgPT4gbmV3IENTU1Jlc3VsdCh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpLCBjb25zdHJ1Y3Rpb25Ub2tlbik7XG4vKipcbiAqIEEgdGVtcGxhdGUgbGl0ZXJhbCB0YWcgd2hpY2ggY2FuIGJlIHVzZWQgd2l0aCBMaXRFbGVtZW50J3NcbiAqIHtAbGlua2NvZGUgTGl0RWxlbWVudC5zdHlsZXN9IHByb3BlcnR5IHRvIHNldCBlbGVtZW50IHN0eWxlcy5cbiAqXG4gKiBGb3Igc2VjdXJpdHkgcmVhc29ucywgb25seSBsaXRlcmFsIHN0cmluZyB2YWx1ZXMgYW5kIG51bWJlciBtYXkgYmUgdXNlZCBpblxuICogZW1iZWRkZWQgZXhwcmVzc2lvbnMuIFRvIGluY29ycG9yYXRlIG5vbi1saXRlcmFsIHZhbHVlcyB7QGxpbmtjb2RlIHVuc2FmZUNTU31cbiAqIG1heSBiZSB1c2VkIGluc2lkZSBhbiBleHByZXNzaW9uLlxuICovXG5leHBvcnQgY29uc3QgY3NzID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4ge1xuICAgIGNvbnN0IGNzc1RleHQgPSBzdHJpbmdzLmxlbmd0aCA9PT0gMVxuICAgICAgICA/IHN0cmluZ3NbMF1cbiAgICAgICAgOiB2YWx1ZXMucmVkdWNlKChhY2MsIHYsIGlkeCkgPT4gYWNjICsgdGV4dEZyb21DU1NSZXN1bHQodikgKyBzdHJpbmdzW2lkeCArIDFdLCBzdHJpbmdzWzBdKTtcbiAgICByZXR1cm4gbmV3IENTU1Jlc3VsdChjc3NUZXh0LCBjb25zdHJ1Y3Rpb25Ub2tlbik7XG59O1xuLyoqXG4gKiBBcHBsaWVzIHRoZSBnaXZlbiBzdHlsZXMgdG8gYSBgc2hhZG93Um9vdGAuIFdoZW4gU2hhZG93IERPTSBpc1xuICogYXZhaWxhYmxlIGJ1dCBgYWRvcHRlZFN0eWxlU2hlZXRzYCBpcyBub3QsIHN0eWxlcyBhcmUgYXBwZW5kZWQgdG8gdGhlXG4gKiBgc2hhZG93Um9vdGAgdG8gW21pbWljIHNwZWMgYmVoYXZpb3JdKGh0dHBzOi8vd2ljZy5naXRodWIuaW8vY29uc3RydWN0LXN0eWxlc2hlZXRzLyN1c2luZy1jb25zdHJ1Y3RlZC1zdHlsZXNoZWV0cykuXG4gKiBOb3RlLCB3aGVuIHNoaW1taW5nIGlzIHVzZWQsIGFueSBzdHlsZXMgdGhhdCBhcmUgc3Vic2VxdWVudGx5IHBsYWNlZCBpbnRvXG4gKiB0aGUgc2hhZG93Um9vdCBzaG91bGQgYmUgcGxhY2VkICpiZWZvcmUqIGFueSBzaGltbWVkIGFkb3B0ZWQgc3R5bGVzLiBUaGlzXG4gKiB3aWxsIG1hdGNoIHNwZWMgYmVoYXZpb3IgdGhhdCBnaXZlcyBhZG9wdGVkIHNoZWV0cyBwcmVjZWRlbmNlIG92ZXIgc3R5bGVzIGluXG4gKiBzaGFkb3dSb290LlxuICovXG5leHBvcnQgY29uc3QgYWRvcHRTdHlsZXMgPSAocmVuZGVyUm9vdCwgc3R5bGVzKSA9PiB7XG4gICAgaWYgKHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cykge1xuICAgICAgICByZW5kZXJSb290LmFkb3B0ZWRTdHlsZVNoZWV0cyA9IHN0eWxlcy5tYXAoKHMpID0+IHMgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0ID8gcyA6IHMuc3R5bGVTaGVldCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdHlsZXMuZm9yRWFjaCgocykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIGNvbnN0IG5vbmNlID0gd2luZG93WydsaXROb25jZSddO1xuICAgICAgICAgICAgaWYgKG5vbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgbm9uY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBzLmNzc1RleHQ7XG4gICAgICAgICAgICByZW5kZXJSb290LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmNvbnN0IGNzc1Jlc3VsdEZyb21TdHlsZVNoZWV0ID0gKHNoZWV0KSA9PiB7XG4gICAgbGV0IGNzc1RleHQgPSAnJztcbiAgICBmb3IgKGNvbnN0IHJ1bGUgb2Ygc2hlZXQuY3NzUnVsZXMpIHtcbiAgICAgICAgY3NzVGV4dCArPSBydWxlLmNzc1RleHQ7XG4gICAgfVxuICAgIHJldHVybiB1bnNhZmVDU1MoY3NzVGV4dCk7XG59O1xuZXhwb3J0IGNvbnN0IGdldENvbXBhdGlibGVTdHlsZSA9IHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0c1xuICAgID8gKHMpID0+IHNcbiAgICA6IChzKSA9PiBzIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldCA/IGNzc1Jlc3VsdEZyb21TdHlsZVNoZWV0KHMpIDogcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNzcy10YWcuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5leHBvcnQgY29uc3QgbGVnYWN5UHJvdG90eXBlTWV0aG9kID0gKGRlc2NyaXB0b3IsIHByb3RvLCBuYW1lKSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBuYW1lLCBkZXNjcmlwdG9yKTtcbn07XG5leHBvcnQgY29uc3Qgc3RhbmRhcmRQcm90b3R5cGVNZXRob2QgPSAoZGVzY3JpcHRvciwgZWxlbWVudCkgPT4gKHtcbiAgICBraW5kOiAnbWV0aG9kJyxcbiAgICBwbGFjZW1lbnQ6ICdwcm90b3R5cGUnLFxuICAgIGtleTogZWxlbWVudC5rZXksXG4gICAgZGVzY3JpcHRvcixcbn0pO1xuLyoqXG4gKiBIZWxwZXIgZm9yIGRlY29yYXRpbmcgYSBwcm9wZXJ0eSB0aGF0IGlzIGNvbXBhdGlibGUgd2l0aCBib3RoIFR5cGVTY3JpcHRcbiAqIGFuZCBCYWJlbCBkZWNvcmF0b3JzLiBUaGUgb3B0aW9uYWwgYGZpbmlzaGVyYCBjYW4gYmUgdXNlZCB0byBwZXJmb3JtIHdvcmsgb25cbiAqIHRoZSBjbGFzcy4gVGhlIG9wdGlvbmFsIGBkZXNjcmlwdG9yYCBzaG91bGQgcmV0dXJuIGEgUHJvcGVydHlEZXNjcmlwdG9yXG4gKiB0byBpbnN0YWxsIGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIGZpbmlzaGVyIHtmdW5jdGlvbn0gT3B0aW9uYWwgZmluaXNoZXIgbWV0aG9kOyByZWNlaXZlcyB0aGUgZWxlbWVudFxuICogY29uc3RydWN0b3IgYW5kIHByb3BlcnR5IGtleSBhcyBhcmd1bWVudHMgYW5kIGhhcyBubyByZXR1cm4gdmFsdWUuXG4gKiBAcGFyYW0gZGVzY3JpcHRvciB7ZnVuY3Rpb259IE9wdGlvbmFsIGRlc2NyaXB0b3IgbWV0aG9kOyByZWNlaXZlcyB0aGVcbiAqIHByb3BlcnR5IGtleSBhcyBhbiBhcmd1bWVudCBhbmQgcmV0dXJucyBhIHByb3BlcnR5IGRlc2NyaXB0b3IgdG8gZGVmaW5lIGZvclxuICogdGhlIGdpdmVuIHByb3BlcnR5LlxuICogQHJldHVybnMge0NsYXNzRWxlbWVudHx2b2lkfVxuICovXG5leHBvcnQgY29uc3QgZGVjb3JhdGVQcm9wZXJ0eSA9ICh7IGZpbmlzaGVyLCBkZXNjcmlwdG9yLCB9KSA9PiAocHJvdG9PckRlc2NyaXB0b3IsIG5hbWVcbi8vIE5vdGUgVHlwZVNjcmlwdCByZXF1aXJlcyB0aGUgcmV0dXJuIHR5cGUgdG8gYmUgYHZvaWR8YW55YFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbikgPT4ge1xuICAgIHZhciBfYTtcbiAgICAvLyBUeXBlU2NyaXB0IC8gQmFiZWwgbGVnYWN5IG1vZGVcbiAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGN0b3IgPSBwcm90b09yRGVzY3JpcHRvclxuICAgICAgICAgICAgLmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoZGVzY3JpcHRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG9PckRlc2NyaXB0b3IsIG5hbWUsIGRlc2NyaXB0b3IobmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmlzaGVyID09PSBudWxsIHx8IGZpbmlzaGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmaW5pc2hlcihjdG9yLCBuYW1lKTtcbiAgICAgICAgLy8gQmFiZWwgc3RhbmRhcmQgbW9kZVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gTm90ZSwgdGhlIEBwcm9wZXJ0eSBkZWNvcmF0b3Igc2F2ZXMgYGtleWAgYXMgYG9yaWdpbmFsS2V5YFxuICAgICAgICAvLyBzbyB0cnkgdG8gdXNlIGl0IGhlcmUuXG4gICAgICAgIGNvbnN0IGtleSA9IFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAoX2EgPSBwcm90b09yRGVzY3JpcHRvci5vcmlnaW5hbEtleSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogcHJvdG9PckRlc2NyaXB0b3Iua2V5O1xuICAgICAgICBjb25zdCBpbmZvID0gZGVzY3JpcHRvciAhPSB1bmRlZmluZWRcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIGtpbmQ6ICdtZXRob2QnLFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3Byb3RvdHlwZScsXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3I6IGRlc2NyaXB0b3IocHJvdG9PckRlc2NyaXB0b3Iua2V5KSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogeyAuLi5wcm90b09yRGVzY3JpcHRvciwga2V5IH07XG4gICAgICAgIGlmIChmaW5pc2hlciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGluZm8uZmluaXNoZXIgPSBmdW5jdGlvbiAoY3Rvcikge1xuICAgICAgICAgICAgICAgIGZpbmlzaGVyKGN0b3IsIGtleSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3QgbGVnYWN5Q3VzdG9tRWxlbWVudCA9ICh0YWdOYW1lLCBjbGF6eikgPT4ge1xuICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgY2xhenopO1xuICAgIC8vIENhc3QgYXMgYW55IGJlY2F1c2UgVFMgZG9lc24ndCByZWNvZ25pemUgdGhlIHJldHVybiB0eXBlIGFzIGJlaW5nIGFcbiAgICAvLyBzdWJ0eXBlIG9mIHRoZSBkZWNvcmF0ZWQgY2xhc3Mgd2hlbiBjbGF6eiBpcyB0eXBlZCBhc1xuICAgIC8vIGBDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD5gIGZvciBzb21lIHJlYXNvbi5cbiAgICAvLyBgQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+YCBpcyBoZWxwZnVsIHRvIG1ha2Ugc3VyZSB0aGUgZGVjb3JhdG9yIGlzXG4gICAgLy8gYXBwbGllZCB0byBlbGVtZW50cyBob3dldmVyLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgcmV0dXJuIGNsYXp6O1xufTtcbmNvbnN0IHN0YW5kYXJkQ3VzdG9tRWxlbWVudCA9ICh0YWdOYW1lLCBkZXNjcmlwdG9yKSA9PiB7XG4gICAgY29uc3QgeyBraW5kLCBlbGVtZW50cyB9ID0gZGVzY3JpcHRvcjtcbiAgICByZXR1cm4ge1xuICAgICAgICBraW5kLFxuICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgLy8gVGhpcyBjYWxsYmFjayBpcyBjYWxsZWQgb25jZSB0aGUgY2xhc3MgaXMgb3RoZXJ3aXNlIGZ1bGx5IGRlZmluZWRcbiAgICAgICAgZmluaXNoZXIoY2xhenopIHtcbiAgICAgICAgICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgY2xhenopO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuLyoqXG4gKiBDbGFzcyBkZWNvcmF0b3IgZmFjdG9yeSB0aGF0IGRlZmluZXMgdGhlIGRlY29yYXRlZCBjbGFzcyBhcyBhIGN1c3RvbSBlbGVtZW50LlxuICpcbiAqIGBgYGpzXG4gKiBAY3VzdG9tRWxlbWVudCgnbXktZWxlbWVudCcpXG4gKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYGA7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICogQHBhcmFtIHRhZ05hbWUgVGhlIHRhZyBuYW1lIG9mIHRoZSBjdXN0b20gZWxlbWVudCB0byBkZWZpbmUuXG4gKi9cbmV4cG9ydCBjb25zdCBjdXN0b21FbGVtZW50ID0gKHRhZ05hbWUpID0+IChjbGFzc09yRGVzY3JpcHRvcikgPT4gdHlwZW9mIGNsYXNzT3JEZXNjcmlwdG9yID09PSAnZnVuY3Rpb24nXG4gICAgPyBsZWdhY3lDdXN0b21FbGVtZW50KHRhZ05hbWUsIGNsYXNzT3JEZXNjcmlwdG9yKVxuICAgIDogc3RhbmRhcmRDdXN0b21FbGVtZW50KHRhZ05hbWUsIGNsYXNzT3JEZXNjcmlwdG9yKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWN1c3RvbS1lbGVtZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuaW1wb3J0IHsgZGVjb3JhdGVQcm9wZXJ0eSB9IGZyb20gJy4vYmFzZS5qcyc7XG4vKipcbiAqIEFkZHMgZXZlbnQgbGlzdGVuZXIgb3B0aW9ucyB0byBhIG1ldGhvZCB1c2VkIGFzIGFuIGV2ZW50IGxpc3RlbmVyIGluIGFcbiAqIGxpdC1odG1sIHRlbXBsYXRlLlxuICpcbiAqIEBwYXJhbSBvcHRpb25zIEFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBldmVudCBsaXN0ZW5lciBvcHRpb25zIGFzIGFjY2VwdGVkIGJ5XG4gKiBgRXZlbnRUYXJnZXQjYWRkRXZlbnRMaXN0ZW5lcmAgYW5kIGBFdmVudFRhcmdldCNyZW1vdmVFdmVudExpc3RlbmVyYC5cbiAqXG4gKiBDdXJyZW50IGJyb3dzZXJzIHN1cHBvcnQgdGhlIGBjYXB0dXJlYCwgYHBhc3NpdmVgLCBhbmQgYG9uY2VgIG9wdGlvbnMuIFNlZTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudFRhcmdldC9hZGRFdmVudExpc3RlbmVyI1BhcmFtZXRlcnNcbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgY2xpY2tlZCA9IGZhbHNlO1xuICpcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYFxuICogICAgICAgPGRpdiBAY2xpY2s9JHt0aGlzLl9vbkNsaWNrfT5cbiAqICAgICAgICAgPGJ1dHRvbj48L2J1dHRvbj5cbiAqICAgICAgIDwvZGl2PlxuICogICAgIGA7XG4gKiAgIH1cbiAqXG4gKiAgIEBldmVudE9wdGlvbnMoe2NhcHR1cmU6IHRydWV9KVxuICogICBfb25DbGljayhlKSB7XG4gKiAgICAgdGhpcy5jbGlja2VkID0gdHJ1ZTtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBldmVudE9wdGlvbnMob3B0aW9ucykge1xuICAgIHJldHVybiBkZWNvcmF0ZVByb3BlcnR5KHtcbiAgICAgICAgZmluaXNoZXI6IChjdG9yLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGN0b3IucHJvdG90eXBlW25hbWVdLCBvcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50LW9wdGlvbnMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5jb25zdCBzdGFuZGFyZFByb3BlcnR5ID0gKG9wdGlvbnMsIGVsZW1lbnQpID0+IHtcbiAgICAvLyBXaGVuIGRlY29yYXRpbmcgYW4gYWNjZXNzb3IsIHBhc3MgaXQgdGhyb3VnaCBhbmQgYWRkIHByb3BlcnR5IG1ldGFkYXRhLlxuICAgIC8vIE5vdGUsIHRoZSBgaGFzT3duUHJvcGVydHlgIGNoZWNrIGluIGBjcmVhdGVQcm9wZXJ0eWAgZW5zdXJlcyB3ZSBkb24ndFxuICAgIC8vIHN0b21wIG92ZXIgdGhlIHVzZXIncyBhY2Nlc3Nvci5cbiAgICBpZiAoZWxlbWVudC5raW5kID09PSAnbWV0aG9kJyAmJlxuICAgICAgICBlbGVtZW50LmRlc2NyaXB0b3IgJiZcbiAgICAgICAgISgndmFsdWUnIGluIGVsZW1lbnQuZGVzY3JpcHRvcikpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmVsZW1lbnQsXG4gICAgICAgICAgICBmaW5pc2hlcihjbGF6eikge1xuICAgICAgICAgICAgICAgIGNsYXp6LmNyZWF0ZVByb3BlcnR5KGVsZW1lbnQua2V5LCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGVQcm9wZXJ0eSgpIHRha2VzIGNhcmUgb2YgZGVmaW5pbmcgdGhlIHByb3BlcnR5LCBidXQgd2Ugc3RpbGxcbiAgICAgICAgLy8gbXVzdCByZXR1cm4gc29tZSBraW5kIG9mIGRlc2NyaXB0b3IsIHNvIHJldHVybiBhIGRlc2NyaXB0b3IgZm9yIGFuXG4gICAgICAgIC8vIHVudXNlZCBwcm90b3R5cGUgZmllbGQuIFRoZSBmaW5pc2hlciBjYWxscyBjcmVhdGVQcm9wZXJ0eSgpLlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2luZDogJ2ZpZWxkJyxcbiAgICAgICAgICAgIGtleTogU3ltYm9sKCksXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICAgICAgZGVzY3JpcHRvcjoge30sXG4gICAgICAgICAgICAvLyBzdG9yZSB0aGUgb3JpZ2luYWwga2V5IHNvIHN1YnNlcXVlbnQgZGVjb3JhdG9ycyBoYXZlIGFjY2VzcyB0byBpdC5cbiAgICAgICAgICAgIG9yaWdpbmFsS2V5OiBlbGVtZW50LmtleSxcbiAgICAgICAgICAgIC8vIFdoZW4gQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1kZWNvcmF0b3JzIGltcGxlbWVudHMgaW5pdGlhbGl6ZXJzLFxuICAgICAgICAgICAgLy8gZG8gdGhpcyBpbnN0ZWFkIG9mIHRoZSBpbml0aWFsaXplciBiZWxvdy4gU2VlOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy85MjYwIGV4dHJhczogW1xuICAgICAgICAgICAgLy8gICB7XG4gICAgICAgICAgICAvLyAgICAga2luZDogJ2luaXRpYWxpemVyJyxcbiAgICAgICAgICAgIC8vICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICAgICAgLy8gICAgIGluaXRpYWxpemVyOiBkZXNjcmlwdG9yLmluaXRpYWxpemVyLFxuICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAvLyBdLFxuICAgICAgICAgICAgaW5pdGlhbGl6ZXIoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50LmluaXRpYWxpemVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbZWxlbWVudC5rZXldID0gZWxlbWVudC5pbml0aWFsaXplci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmaW5pc2hlcihjbGF6eikge1xuICAgICAgICAgICAgICAgIGNsYXp6LmNyZWF0ZVByb3BlcnR5KGVsZW1lbnQua2V5LCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxufTtcbmNvbnN0IGxlZ2FjeVByb3BlcnR5ID0gKG9wdGlvbnMsIHByb3RvLCBuYW1lKSA9PiB7XG4gICAgcHJvdG8uY29uc3RydWN0b3IuY3JlYXRlUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG59O1xuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB3aGljaCBjcmVhdGVzIGEgcmVhY3RpdmUgcHJvcGVydHkgdGhhdCByZWZsZWN0cyBhXG4gKiBjb3JyZXNwb25kaW5nIGF0dHJpYnV0ZSB2YWx1ZS4gV2hlbiBhIGRlY29yYXRlZCBwcm9wZXJ0eSBpcyBzZXRcbiAqIHRoZSBlbGVtZW50IHdpbGwgdXBkYXRlIGFuZCByZW5kZXIuIEEge0BsaW5rY29kZSBQcm9wZXJ0eURlY2xhcmF0aW9ufSBtYXlcbiAqIG9wdGlvbmFsbHkgYmUgc3VwcGxpZWQgdG8gY29uZmlndXJlIHByb3BlcnR5IGZlYXR1cmVzLlxuICpcbiAqIFRoaXMgZGVjb3JhdG9yIHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIHB1YmxpYyBmaWVsZHMuIEFzIHB1YmxpYyBmaWVsZHMsXG4gKiBwcm9wZXJ0aWVzIHNob3VsZCBiZSBjb25zaWRlcmVkIGFzIHByaW1hcmlseSBzZXR0YWJsZSBieSBlbGVtZW50IHVzZXJzLFxuICogZWl0aGVyIHZpYSBhdHRyaWJ1dGUgb3IgdGhlIHByb3BlcnR5IGl0c2VsZi5cbiAqXG4gKiBHZW5lcmFsbHksIHByb3BlcnRpZXMgdGhhdCBhcmUgY2hhbmdlZCBieSB0aGUgZWxlbWVudCBzaG91bGQgYmUgcHJpdmF0ZSBvclxuICogcHJvdGVjdGVkIGZpZWxkcyBhbmQgc2hvdWxkIHVzZSB0aGUge0BsaW5rY29kZSBzdGF0ZX0gZGVjb3JhdG9yLlxuICpcbiAqIEhvd2V2ZXIsIHNvbWV0aW1lcyBlbGVtZW50IGNvZGUgZG9lcyBuZWVkIHRvIHNldCBhIHB1YmxpYyBwcm9wZXJ0eS4gVGhpc1xuICogc2hvdWxkIHR5cGljYWxseSBvbmx5IGJlIGRvbmUgaW4gcmVzcG9uc2UgdG8gdXNlciBpbnRlcmFjdGlvbiwgYW5kIGFuIGV2ZW50XG4gKiBzaG91bGQgYmUgZmlyZWQgaW5mb3JtaW5nIHRoZSB1c2VyOyBmb3IgZXhhbXBsZSwgYSBjaGVja2JveCBzZXRzIGl0c1xuICogYGNoZWNrZWRgIHByb3BlcnR5IHdoZW4gY2xpY2tlZCBhbmQgZmlyZXMgYSBgY2hhbmdlZGAgZXZlbnQuIE11dGF0aW5nIHB1YmxpY1xuICogcHJvcGVydGllcyBzaG91bGQgdHlwaWNhbGx5IG5vdCBiZSBkb25lIGZvciBub24tcHJpbWl0aXZlIChvYmplY3Qgb3IgYXJyYXkpXG4gKiBwcm9wZXJ0aWVzLiBJbiBvdGhlciBjYXNlcyB3aGVuIGFuIGVsZW1lbnQgbmVlZHMgdG8gbWFuYWdlIHN0YXRlLCBhIHByaXZhdGVcbiAqIHByb3BlcnR5IGRlY29yYXRlZCB2aWEgdGhlIHtAbGlua2NvZGUgc3RhdGV9IGRlY29yYXRvciBzaG91bGQgYmUgdXNlZC4gV2hlblxuICogbmVlZGVkLCBzdGF0ZSBwcm9wZXJ0aWVzIGNhbiBiZSBpbml0aWFsaXplZCB2aWEgcHVibGljIHByb3BlcnRpZXMgdG9cbiAqIGZhY2lsaXRhdGUgY29tcGxleCBpbnRlcmFjdGlvbnMuXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAqICAgY2xpY2tlZCA9IGZhbHNlO1xuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKiBARXhwb3J0RGVjb3JhdGVkSXRlbXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5KG9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIHJldHVybiAocHJvdG9PckRlc2NyaXB0b3IsIG5hbWUpID0+IG5hbWUgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGxlZ2FjeVByb3BlcnR5KG9wdGlvbnMsIHByb3RvT3JEZXNjcmlwdG9yLCBuYW1lKVxuICAgICAgICA6IHN0YW5kYXJkUHJvcGVydHkob3B0aW9ucywgcHJvdG9PckRlc2NyaXB0b3IpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvcGVydHkuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5pbXBvcnQgeyBkZWNvcmF0ZVByb3BlcnR5IH0gZnJvbSAnLi9iYXNlLmpzJztcbi8qKlxuICogQSBwcm9wZXJ0eSBkZWNvcmF0b3IgdGhhdCBjb252ZXJ0cyBhIGNsYXNzIHByb3BlcnR5IGludG8gYSBnZXR0ZXJcbiAqIHRoYXQgZXhlY3V0ZXMgYSBxdWVyeVNlbGVjdG9yQWxsIG9uIHRoZSBlbGVtZW50J3MgcmVuZGVyUm9vdC5cbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3IgQSBET01TdHJpbmcgY29udGFpbmluZyBvbmUgb3IgbW9yZSBzZWxlY3RvcnMgdG8gbWF0Y2guXG4gKlxuICogU2VlOlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L3F1ZXJ5U2VsZWN0b3JBbGxcbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQHF1ZXJ5QWxsKCdkaXYnKVxuICogICBkaXZzO1xuICpcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYFxuICogICAgICAgPGRpdiBpZD1cImZpcnN0XCI+PC9kaXY+XG4gKiAgICAgICA8ZGl2IGlkPVwic2Vjb25kXCI+PC9kaXY+XG4gKiAgICAgYDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUFsbChzZWxlY3Rvcikge1xuICAgIHJldHVybiBkZWNvcmF0ZVByb3BlcnR5KHtcbiAgICAgICAgZGVzY3JpcHRvcjogKF9uYW1lKSA9PiAoe1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IHRoaXMucmVuZGVyUm9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBbXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LWFsbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbnZhciBfYTtcbi8qXG4gKiBJTVBPUlRBTlQ6IEZvciBjb21wYXRpYmlsaXR5IHdpdGggdHNpY2tsZSBhbmQgdGhlIENsb3N1cmUgSlMgY29tcGlsZXIsIGFsbFxuICogcHJvcGVydHkgZGVjb3JhdG9ycyAoYnV0IG5vdCBjbGFzcyBkZWNvcmF0b3JzKSBpbiB0aGlzIGZpbGUgdGhhdCBoYXZlXG4gKiBhbiBARXhwb3J0RGVjb3JhdGVkSXRlbXMgYW5ub3RhdGlvbiBtdXN0IGJlIGRlZmluZWQgYXMgYSByZWd1bGFyIGZ1bmN0aW9uLFxuICogbm90IGFuIGFycm93IGZ1bmN0aW9uLlxuICovXG5pbXBvcnQgeyBkZWNvcmF0ZVByb3BlcnR5IH0gZnJvbSAnLi9iYXNlLmpzJztcbi8qKlxuICogQSB0aW55IG1vZHVsZSBzY29wZWQgcG9seWZpbGwgZm9yIEhUTUxTbG90RWxlbWVudC5hc3NpZ25lZEVsZW1lbnRzLlxuICovXG5jb25zdCBzbG90QXNzaWduZWRFbGVtZW50cyA9ICgoX2EgPSB3aW5kb3cuSFRNTFNsb3RFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHJvdG90eXBlLmFzc2lnbmVkRWxlbWVudHMpICE9IG51bGxcbiAgICA/IChzbG90LCBvcHRzKSA9PiBzbG90LmFzc2lnbmVkRWxlbWVudHMob3B0cylcbiAgICA6IChzbG90LCBvcHRzKSA9PiBzbG90XG4gICAgICAgIC5hc3NpZ25lZE5vZGVzKG9wdHMpXG4gICAgICAgIC5maWx0ZXIoKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKTtcbi8qKlxuICogQSBwcm9wZXJ0eSBkZWNvcmF0b3IgdGhhdCBjb252ZXJ0cyBhIGNsYXNzIHByb3BlcnR5IGludG8gYSBnZXR0ZXIgdGhhdFxuICogcmV0dXJucyB0aGUgYGFzc2lnbmVkRWxlbWVudHNgIG9mIHRoZSBnaXZlbiBgc2xvdGAuIFByb3ZpZGVzIGEgZGVjbGFyYXRpdmVcbiAqIHdheSB0byB1c2VcbiAqIFtgSFRNTFNsb3RFbGVtZW50LmFzc2lnbmVkRWxlbWVudHNgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTFNsb3RFbGVtZW50L2Fzc2lnbmVkRWxlbWVudHMpLlxuICpcbiAqIENhbiBiZSBwYXNzZWQgYW4gb3B0aW9uYWwge0BsaW5rY29kZSBRdWVyeUFzc2lnbmVkRWxlbWVudHNPcHRpb25zfSBvYmplY3QuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqIGBgYHRzXG4gKiBjbGFzcyBNeUVsZW1lbnQge1xuICogICBAcXVlcnlBc3NpZ25lZEVsZW1lbnRzKHsgc2xvdDogJ2xpc3QnIH0pXG4gKiAgIGxpc3RJdGVtcyE6IEFycmF5PEhUTUxFbGVtZW50PjtcbiAqICAgQHF1ZXJ5QXNzaWduZWRFbGVtZW50cygpXG4gKiAgIHVubmFtZWRTbG90RWxzITogQXJyYXk8SFRNTEVsZW1lbnQ+O1xuICpcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYFxuICogICAgICAgPHNsb3QgbmFtZT1cImxpc3RcIj48L3Nsb3Q+XG4gKiAgICAgICA8c2xvdD48L3Nsb3Q+XG4gKiAgICAgYDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKlxuICogTm90ZSwgdGhlIHR5cGUgb2YgdGhpcyBwcm9wZXJ0eSBzaG91bGQgYmUgYW5ub3RhdGVkIGFzIGBBcnJheTxIVE1MRWxlbWVudD5gLlxuICpcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QXNzaWduZWRFbGVtZW50cyhvcHRpb25zKSB7XG4gICAgY29uc3QgeyBzbG90LCBzZWxlY3RvciB9ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge307XG4gICAgcmV0dXJuIGRlY29yYXRlUHJvcGVydHkoe1xuICAgICAgICBkZXNjcmlwdG9yOiAoX25hbWUpID0+ICh7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsb3RTZWxlY3RvciA9IGBzbG90JHtzbG90ID8gYFtuYW1lPSR7c2xvdH1dYCA6ICc6bm90KFtuYW1lXSknfWA7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2xvdEVsID0gKF9hID0gdGhpcy5yZW5kZXJSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcihzbG90U2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gc2xvdEVsICE9IG51bGwgPyBzbG90QXNzaWduZWRFbGVtZW50cyhzbG90RWwsIG9wdGlvbnMpIDogW107XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50cy5maWx0ZXIoKG5vZGUpID0+IG5vZGUubWF0Y2hlcyhzZWxlY3RvcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeS1hc3NpZ25lZC1lbGVtZW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbi8qXG4gKiBJTVBPUlRBTlQ6IEZvciBjb21wYXRpYmlsaXR5IHdpdGggdHNpY2tsZSBhbmQgdGhlIENsb3N1cmUgSlMgY29tcGlsZXIsIGFsbFxuICogcHJvcGVydHkgZGVjb3JhdG9ycyAoYnV0IG5vdCBjbGFzcyBkZWNvcmF0b3JzKSBpbiB0aGlzIGZpbGUgdGhhdCBoYXZlXG4gKiBhbiBARXhwb3J0RGVjb3JhdGVkSXRlbXMgYW5ub3RhdGlvbiBtdXN0IGJlIGRlZmluZWQgYXMgYSByZWd1bGFyIGZ1bmN0aW9uLFxuICogbm90IGFuIGFycm93IGZ1bmN0aW9uLlxuICovXG5pbXBvcnQgeyBkZWNvcmF0ZVByb3BlcnR5IH0gZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCB7IHF1ZXJ5QXNzaWduZWRFbGVtZW50cyB9IGZyb20gJy4vcXVlcnktYXNzaWduZWQtZWxlbWVudHMuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QXNzaWduZWROb2RlcyhzbG90T3JPcHRpb25zLCBmbGF0dGVuLCBzZWxlY3Rvcikge1xuICAgIC8vIE5vcm1hbGl6ZSB0aGUgb3ZlcmxvYWRlZCBhcmd1bWVudHMuXG4gICAgbGV0IHNsb3QgPSBzbG90T3JPcHRpb25zO1xuICAgIGxldCBhc3NpZ25lZE5vZGVzT3B0aW9ucztcbiAgICBpZiAodHlwZW9mIHNsb3RPck9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHNsb3QgPSBzbG90T3JPcHRpb25zLnNsb3Q7XG4gICAgICAgIGFzc2lnbmVkTm9kZXNPcHRpb25zID0gc2xvdE9yT3B0aW9ucztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFzc2lnbmVkTm9kZXNPcHRpb25zID0geyBmbGF0dGVuIH07XG4gICAgfVxuICAgIC8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgcXVlcnlBc3NpZ25lZE5vZGVzIHdpdGggYSBzZWxlY3RvciBiZWhhdmVzXG4gICAgLy8gZXhhY3RseSBsaWtlIHF1ZXJ5QXNzaWduZWRFbGVtZW50cyB3aXRoIGEgc2VsZWN0b3IuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBxdWVyeUFzc2lnbmVkRWxlbWVudHMoe1xuICAgICAgICAgICAgc2xvdDogc2xvdCxcbiAgICAgICAgICAgIGZsYXR0ZW4sXG4gICAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkZWNvcmF0ZVByb3BlcnR5KHtcbiAgICAgICAgZGVzY3JpcHRvcjogKF9uYW1lKSA9PiAoe1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2xvdFNlbGVjdG9yID0gYHNsb3Qke3Nsb3QgPyBgW25hbWU9JHtzbG90fV1gIDogJzpub3QoW25hbWVdKSd9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90RWwgPSAoX2EgPSB0aGlzLnJlbmRlclJvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKHNsb3RTZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfYiA9IHNsb3RFbCA9PT0gbnVsbCB8fCBzbG90RWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsb3RFbC5hc3NpZ25lZE5vZGVzKGFzc2lnbmVkTm9kZXNPcHRpb25zKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogW107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeS1hc3NpZ25lZC1ub2Rlcy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmltcG9ydCB7IGRlY29yYXRlUHJvcGVydHkgfSBmcm9tICcuL2Jhc2UuanMnO1xuLy8gTm90ZSwgaW4gdGhlIGZ1dHVyZSwgd2UgbWF5IGV4dGVuZCB0aGlzIGRlY29yYXRvciB0byBzdXBwb3J0IHRoZSB1c2UgY2FzZVxuLy8gd2hlcmUgdGhlIHF1ZXJpZWQgZWxlbWVudCBtYXkgbmVlZCB0byBkbyB3b3JrIHRvIGJlY29tZSByZWFkeSB0byBpbnRlcmFjdFxuLy8gd2l0aCAoZS5nLiBsb2FkIHNvbWUgaW1wbGVtZW50YXRpb24gY29kZSkuIElmIHNvLCB3ZSBtaWdodCBlbGVjdCB0b1xuLy8gYWRkIGEgc2Vjb25kIGFyZ3VtZW50IGRlZmluaW5nIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcnVuIHRvIG1ha2UgdGhlXG4vLyBxdWVyaWVkIGVsZW1lbnQgbG9hZGVkL3VwZGF0ZWQvcmVhZHkuXG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHRoYXQgY29udmVydHMgYSBjbGFzcyBwcm9wZXJ0eSBpbnRvIGEgZ2V0dGVyIHRoYXRcbiAqIHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIHJlc3VsdCBvZiBhIHF1ZXJ5U2VsZWN0b3Igb24gdGhlXG4gKiBlbGVtZW50J3MgcmVuZGVyUm9vdCBkb25lIGFmdGVyIHRoZSBlbGVtZW50J3MgYHVwZGF0ZUNvbXBsZXRlYCBwcm9taXNlXG4gKiByZXNvbHZlcy4gV2hlbiB0aGUgcXVlcmllZCBwcm9wZXJ0eSBtYXkgY2hhbmdlIHdpdGggZWxlbWVudCBzdGF0ZSwgdGhpc1xuICogZGVjb3JhdG9yIGNhbiBiZSB1c2VkIGluc3RlYWQgb2YgcmVxdWlyaW5nIHVzZXJzIHRvIGF3YWl0IHRoZVxuICogYHVwZGF0ZUNvbXBsZXRlYCBiZWZvcmUgYWNjZXNzaW5nIHRoZSBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3IgQSBET01TdHJpbmcgY29udGFpbmluZyBvbmUgb3IgbW9yZSBzZWxlY3RvcnMgdG8gbWF0Y2guXG4gKlxuICogU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvcXVlcnlTZWxlY3RvclxuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBNeUVsZW1lbnQge1xuICogICBAcXVlcnlBc3luYygnI2ZpcnN0JylcbiAqICAgZmlyc3Q7XG4gKlxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICA8ZGl2IGlkPVwiZmlyc3RcIj48L2Rpdj5cbiAqICAgICAgIDxkaXYgaWQ9XCJzZWNvbmRcIj48L2Rpdj5cbiAqICAgICBgO1xuICogICB9XG4gKiB9XG4gKlxuICogLy8gZXh0ZXJuYWwgdXNhZ2VcbiAqIGFzeW5jIGRvU29tZXRoaW5nV2l0aEZpcnN0KCkge1xuICogIChhd2FpdCBhTXlFbGVtZW50LmZpcnN0KS5kb1NvbWV0aGluZygpO1xuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUFzeW5jKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGRlY29yYXRlUHJvcGVydHkoe1xuICAgICAgICBkZXNjcmlwdG9yOiAoX25hbWUpID0+ICh7XG4gICAgICAgICAgICBhc3luYyBnZXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMucmVuZGVyUm9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIH0pLFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYXN5bmMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5pbXBvcnQgeyBkZWNvcmF0ZVByb3BlcnR5IH0gZnJvbSAnLi9iYXNlLmpzJztcbi8qKlxuICogQSBwcm9wZXJ0eSBkZWNvcmF0b3IgdGhhdCBjb252ZXJ0cyBhIGNsYXNzIHByb3BlcnR5IGludG8gYSBnZXR0ZXIgdGhhdFxuICogZXhlY3V0ZXMgYSBxdWVyeVNlbGVjdG9yIG9uIHRoZSBlbGVtZW50J3MgcmVuZGVyUm9vdC5cbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3IgQSBET01TdHJpbmcgY29udGFpbmluZyBvbmUgb3IgbW9yZSBzZWxlY3RvcnMgdG8gbWF0Y2guXG4gKiBAcGFyYW0gY2FjaGUgQW4gb3B0aW9uYWwgYm9vbGVhbiB3aGljaCB3aGVuIHRydWUgcGVyZm9ybXMgdGhlIERPTSBxdWVyeSBvbmx5XG4gKiAgICAgb25jZSBhbmQgY2FjaGVzIHRoZSByZXN1bHQuXG4gKlxuICogU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvcXVlcnlTZWxlY3RvclxuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBNeUVsZW1lbnQge1xuICogICBAcXVlcnkoJyNmaXJzdCcpXG4gKiAgIGZpcnN0O1xuICpcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYFxuICogICAgICAgPGRpdiBpZD1cImZpcnN0XCI+PC9kaXY+XG4gKiAgICAgICA8ZGl2IGlkPVwic2Vjb25kXCI+PC9kaXY+XG4gKiAgICAgYDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeShzZWxlY3RvciwgY2FjaGUpIHtcbiAgICByZXR1cm4gZGVjb3JhdGVQcm9wZXJ0eSh7XG4gICAgICAgIGRlc2NyaXB0b3I6IChuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IHRoaXMucmVuZGVyUm9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBudWxsO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gdHlwZW9mIG5hbWUgPT09ICdzeW1ib2wnID8gU3ltYm9sKCkgOiBgX18ke25hbWV9YDtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSAoX2IgPSAoX2EgPSB0aGlzLnJlbmRlclJvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trZXldO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuLypcbiAqIElNUE9SVEFOVDogRm9yIGNvbXBhdGliaWxpdHkgd2l0aCB0c2lja2xlIGFuZCB0aGUgQ2xvc3VyZSBKUyBjb21waWxlciwgYWxsXG4gKiBwcm9wZXJ0eSBkZWNvcmF0b3JzIChidXQgbm90IGNsYXNzIGRlY29yYXRvcnMpIGluIHRoaXMgZmlsZSB0aGF0IGhhdmVcbiAqIGFuIEBFeHBvcnREZWNvcmF0ZWRJdGVtcyBhbm5vdGF0aW9uIG11c3QgYmUgZGVmaW5lZCBhcyBhIHJlZ3VsYXIgZnVuY3Rpb24sXG4gKiBub3QgYW4gYXJyb3cgZnVuY3Rpb24uXG4gKi9cbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnLi9wcm9wZXJ0eS5qcyc7XG4vKipcbiAqIERlY2xhcmVzIGEgcHJpdmF0ZSBvciBwcm90ZWN0ZWQgcmVhY3RpdmUgcHJvcGVydHkgdGhhdCBzdGlsbCB0cmlnZ2Vyc1xuICogdXBkYXRlcyB0byB0aGUgZWxlbWVudCB3aGVuIGl0IGNoYW5nZXMuIEl0IGRvZXMgbm90IHJlZmxlY3QgZnJvbSB0aGVcbiAqIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlLlxuICpcbiAqIFByb3BlcnRpZXMgZGVjbGFyZWQgdGhpcyB3YXkgbXVzdCBub3QgYmUgdXNlZCBmcm9tIEhUTUwgb3IgSFRNTCB0ZW1wbGF0aW5nXG4gKiBzeXN0ZW1zLCB0aGV5J3JlIHNvbGVseSBmb3IgcHJvcGVydGllcyBpbnRlcm5hbCB0byB0aGUgZWxlbWVudC4gVGhlc2VcbiAqIHByb3BlcnRpZXMgbWF5IGJlIHJlbmFtZWQgYnkgb3B0aW1pemF0aW9uIHRvb2xzIGxpa2UgY2xvc3VyZSBjb21waWxlci5cbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gcHJvcGVydHkoe1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBzdGF0ZTogdHJ1ZSxcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXRlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIF9hLCBfYiwgX2M7XG52YXIgX2Q7XG4vKipcbiAqIFVzZSB0aGlzIG1vZHVsZSBpZiB5b3Ugd2FudCB0byBjcmVhdGUgeW91ciBvd24gYmFzZSBjbGFzcyBleHRlbmRpbmdcbiAqIHtAbGluayBSZWFjdGl2ZUVsZW1lbnR9LlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cbmltcG9ydCB7IGdldENvbXBhdGlibGVTdHlsZSwgYWRvcHRTdHlsZXMsIH0gZnJvbSAnLi9jc3MtdGFnLmpzJztcbmV4cG9ydCAqIGZyb20gJy4vY3NzLXRhZy5qcyc7XG5jb25zdCBERVZfTU9ERSA9IHRydWU7XG5sZXQgcmVxdWVzdFVwZGF0ZVRoZW5hYmxlO1xubGV0IGlzc3VlV2FybmluZztcbmNvbnN0IHRydXN0ZWRUeXBlcyA9IHdpbmRvd1xuICAgIC50cnVzdGVkVHlwZXM7XG4vLyBUZW1wb3Jhcnkgd29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9jcmJ1Zy5jb20vOTkzMjY4XG4vLyBDdXJyZW50bHksIGFueSBhdHRyaWJ1dGUgc3RhcnRpbmcgd2l0aCBcIm9uXCIgaXMgY29uc2lkZXJlZCB0byBiZSBhXG4vLyBUcnVzdGVkU2NyaXB0IHNvdXJjZS4gU3VjaCBib29sZWFuIGF0dHJpYnV0ZXMgbXVzdCBiZSBzZXQgdG8gdGhlIGVxdWl2YWxlbnRcbi8vIHRydXN0ZWQgZW1wdHlTY3JpcHQgdmFsdWUuXG5jb25zdCBlbXB0eVN0cmluZ0ZvckJvb2xlYW5BdHRyaWJ1dGUgPSB0cnVzdGVkVHlwZXNcbiAgICA/IHRydXN0ZWRUeXBlcy5lbXB0eVNjcmlwdFxuICAgIDogJyc7XG5jb25zdCBwb2x5ZmlsbFN1cHBvcnQgPSBERVZfTU9ERVxuICAgID8gd2luZG93LnJlYWN0aXZlRWxlbWVudFBvbHlmaWxsU3VwcG9ydERldk1vZGVcbiAgICA6IHdpbmRvdy5yZWFjdGl2ZUVsZW1lbnRQb2x5ZmlsbFN1cHBvcnQ7XG5pZiAoREVWX01PREUpIHtcbiAgICAvLyBFbnN1cmUgd2FybmluZ3MgYXJlIGlzc3VlZCBvbmx5IDF4LCBldmVuIGlmIG11bHRpcGxlIHZlcnNpb25zIG9mIExpdFxuICAgIC8vIGFyZSBsb2FkZWQuXG4gICAgY29uc3QgaXNzdWVkV2FybmluZ3MgPSAoKF9hID0gZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKGdsb2JhbFRoaXMubGl0SXNzdWVkV2FybmluZ3MgPSBuZXcgU2V0KCkpKTtcbiAgICAvLyBJc3N1ZSBhIHdhcm5pbmcsIGlmIHdlIGhhdmVuJ3QgYWxyZWFkeS5cbiAgICBpc3N1ZVdhcm5pbmcgPSAoY29kZSwgd2FybmluZykgPT4ge1xuICAgICAgICB3YXJuaW5nICs9IGAgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvJHtjb2RlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICBpZiAoIWlzc3VlZFdhcm5pbmdzLmhhcyh3YXJuaW5nKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKHdhcm5pbmcpO1xuICAgICAgICAgICAgaXNzdWVkV2FybmluZ3MuYWRkKHdhcm5pbmcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpc3N1ZVdhcm5pbmcoJ2Rldi1tb2RlJywgYExpdCBpcyBpbiBkZXYgbW9kZS4gTm90IHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uIWApO1xuICAgIC8vIElzc3VlIHBvbHlmaWxsIHN1cHBvcnQgd2FybmluZy5cbiAgICBpZiAoKChfYiA9IHdpbmRvdy5TaGFkeURPTSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmluVXNlKSAmJiBwb2x5ZmlsbFN1cHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpc3N1ZVdhcm5pbmcoJ3BvbHlmaWxsLXN1cHBvcnQtbWlzc2luZycsIGBTaGFkb3cgRE9NIGlzIGJlaW5nIHBvbHlmaWxsZWQgdmlhIFxcYFNoYWR5RE9NXFxgIGJ1dCBgICtcbiAgICAgICAgICAgIGB0aGUgXFxgcG9seWZpbGwtc3VwcG9ydFxcYCBtb2R1bGUgaGFzIG5vdCBiZWVuIGxvYWRlZC5gKTtcbiAgICB9XG4gICAgcmVxdWVzdFVwZGF0ZVRoZW5hYmxlID0gKG5hbWUpID0+ICh7XG4gICAgICAgIHRoZW46IChvbmZ1bGZpbGxlZCwgX29ucmVqZWN0ZWQpID0+IHtcbiAgICAgICAgICAgIGlzc3VlV2FybmluZygncmVxdWVzdC11cGRhdGUtcHJvbWlzZScsIGBUaGUgXFxgcmVxdWVzdFVwZGF0ZVxcYCBtZXRob2Qgc2hvdWxkIG5vIGxvbmdlciByZXR1cm4gYSBQcm9taXNlIGJ1dCBgICtcbiAgICAgICAgICAgICAgICBgZG9lcyBzbyBvbiBcXGAke25hbWV9XFxgLiBVc2UgXFxgdXBkYXRlQ29tcGxldGVcXGAgaW5zdGVhZC5gKTtcbiAgICAgICAgICAgIGlmIChvbmZ1bGZpbGxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb25mdWxmaWxsZWQoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pO1xufVxuLyoqXG4gKiBVc2VmdWwgZm9yIHZpc3VhbGl6aW5nIGFuZCBsb2dnaW5nIGluc2lnaHRzIGludG8gd2hhdCB0aGUgTGl0IHRlbXBsYXRlIHN5c3RlbSBpcyBkb2luZy5cbiAqXG4gKiBDb21waWxlZCBvdXQgb2YgcHJvZCBtb2RlIGJ1aWxkcy5cbiAqL1xuY29uc3QgZGVidWdMb2dFdmVudCA9IERFVl9NT0RFXG4gICAgPyAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hvdWxkRW1pdCA9IHdpbmRvd1xuICAgICAgICAgICAgLmVtaXRMaXREZWJ1Z0xvZ0V2ZW50cztcbiAgICAgICAgaWYgKCFzaG91bGRFbWl0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdsaXQtZGVidWcnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IGV2ZW50LFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIDogdW5kZWZpbmVkO1xuLypcbiAqIFdoZW4gdXNpbmcgQ2xvc3VyZSBDb21waWxlciwgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eShwcm9wZXJ0eSwgb2JqZWN0KSBpc1xuICogcmVwbGFjZWQgYXQgY29tcGlsZSB0aW1lIGJ5IHRoZSBtdW5nZWQgbmFtZSBmb3Igb2JqZWN0W3Byb3BlcnR5XS4gV2UgY2Fubm90XG4gKiBhbGlhcyB0aGlzIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvIHVzZSBhIHNtYWxsIHNoaW0gdGhhdCBoYXMgdGhlIHNhbWVcbiAqIGJlaGF2aW9yIHdoZW4gbm90IGNvbXBpbGluZy5cbiAqL1xuLypAX19JTkxJTkVfXyovXG5jb25zdCBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5ID0gKHByb3AsIF9vYmopID0+IHByb3A7XG5leHBvcnQgY29uc3QgZGVmYXVsdENvbnZlcnRlciA9IHtcbiAgICB0b0F0dHJpYnV0ZSh2YWx1ZSwgdHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID8gZW1wdHlTdHJpbmdGb3JCb29sZWFuQXR0cmlidXRlIDogbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgT2JqZWN0OlxuICAgICAgICAgICAgY2FzZSBBcnJheTpcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdmFsdWUgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgIHBhc3MgdGhpcyB0aHJvdWdoXG4gICAgICAgICAgICAgICAgLy8gdG8gYWxsb3cgcmVtb3Zpbmcvbm8gY2hhbmdlIGJlaGF2aW9yLlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPT0gbnVsbCA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIGZyb21BdHRyaWJ1dGUodmFsdWUsIHR5cGUpIHtcbiAgICAgICAgbGV0IGZyb21WYWx1ZSA9IHZhbHVlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgICAgICAgICBmcm9tVmFsdWUgPSB2YWx1ZSAhPT0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTnVtYmVyOlxuICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IHZhbHVlID09PSBudWxsID8gbnVsbCA6IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE9iamVjdDpcbiAgICAgICAgICAgIGNhc2UgQXJyYXk6XG4gICAgICAgICAgICAgICAgLy8gRG8gKm5vdCogZ2VuZXJhdGUgZXhjZXB0aW9uIHdoZW4gaW52YWxpZCBKU09OIGlzIHNldCBhcyBlbGVtZW50c1xuICAgICAgICAgICAgICAgIC8vIGRvbid0IG5vcm1hbGx5IGNvbXBsYWluIG9uIGJlaW5nIG1pcy1jb25maWd1cmVkLlxuICAgICAgICAgICAgICAgIC8vIFRPRE8oc29ydmVsbCk6IERvIGdlbmVyYXRlIGV4Y2VwdGlvbiBpbiAqZGV2IG1vZGUqLlxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFzc2VydCB0byBhZGhlcmUgdG8gQmF6ZWwncyBcIm11c3QgdHlwZSBhc3NlcnQgSlNPTiBwYXJzZVwiIHJ1bGUuXG4gICAgICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJvbVZhbHVlO1xuICAgIH0sXG59O1xuLyoqXG4gKiBDaGFuZ2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyBkaWZmZXJlbnQgZnJvbSBgb2xkVmFsdWVgLlxuICogVGhpcyBtZXRob2QgaXMgdXNlZCBhcyB0aGUgZGVmYXVsdCBmb3IgYSBwcm9wZXJ0eSdzIGBoYXNDaGFuZ2VkYCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdEVxdWFsID0gKHZhbHVlLCBvbGQpID0+IHtcbiAgICAvLyBUaGlzIGVuc3VyZXMgKG9sZD09TmFOLCB2YWx1ZT09TmFOKSBhbHdheXMgcmV0dXJucyBmYWxzZVxuICAgIHJldHVybiBvbGQgIT09IHZhbHVlICYmIChvbGQgPT09IG9sZCB8fCB2YWx1ZSA9PT0gdmFsdWUpO1xufTtcbmNvbnN0IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uID0ge1xuICAgIGF0dHJpYnV0ZTogdHJ1ZSxcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgY29udmVydGVyOiBkZWZhdWx0Q29udmVydGVyLFxuICAgIHJlZmxlY3Q6IGZhbHNlLFxuICAgIGhhc0NoYW5nZWQ6IG5vdEVxdWFsLFxufTtcbi8qKlxuICogVGhlIENsb3N1cmUgSlMgQ29tcGlsZXIgZG9lc24ndCBjdXJyZW50bHkgaGF2ZSBnb29kIHN1cHBvcnQgZm9yIHN0YXRpY1xuICogcHJvcGVydHkgc2VtYW50aWNzIHdoZXJlIFwidGhpc1wiIGlzIGR5bmFtaWMgKGUuZy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY2xvc3VyZS1jb21waWxlci9pc3N1ZXMvMzE3NyBhbmQgb3RoZXJzKSBzbyB3ZSB1c2VcbiAqIHRoaXMgaGFjayB0byBieXBhc3MgYW55IHJld3JpdGluZyBieSB0aGUgY29tcGlsZXIuXG4gKi9cbmNvbnN0IGZpbmFsaXplZCA9ICdmaW5hbGl6ZWQnO1xuLyoqXG4gKiBCYXNlIGVsZW1lbnQgY2xhc3Mgd2hpY2ggbWFuYWdlcyBlbGVtZW50IHByb3BlcnRpZXMgYW5kIGF0dHJpYnV0ZXMuIFdoZW5cbiAqIHByb3BlcnRpZXMgY2hhbmdlLCB0aGUgYHVwZGF0ZWAgbWV0aG9kIGlzIGFzeW5jaHJvbm91c2x5IGNhbGxlZC4gVGhpcyBtZXRob2RcbiAqIHNob3VsZCBiZSBzdXBwbGllZCBieSBzdWJjbGFzc2VycyB0byByZW5kZXIgdXBkYXRlcyBhcyBkZXNpcmVkLlxuICogQG5vSW5oZXJpdERvY1xuICovXG5leHBvcnQgY2xhc3MgUmVhY3RpdmVFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBpZiB0aGVyZSBpcyBhIHBlbmRpbmcgdXBkYXRlIGFzIGEgcmVzdWx0IG9mIGNhbGxpbmcgYHJlcXVlc3RVcGRhdGUoKWAuXG4gICAgICAgICAqIFNob3VsZCBvbmx5IGJlIHJlYWQuXG4gICAgICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSXMgc2V0IHRvIGB0cnVlYCBhZnRlciB0aGUgZmlyc3QgdXBkYXRlLiBUaGUgZWxlbWVudCBjb2RlIGNhbm5vdCBhc3N1bWVcbiAgICAgICAgICogdGhhdCBgcmVuZGVyUm9vdGAgZXhpc3RzIGJlZm9yZSB0aGUgZWxlbWVudCBgaGFzVXBkYXRlZGAuXG4gICAgICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhhc1VwZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWUgb2YgY3VycmVudGx5IHJlZmxlY3RpbmcgcHJvcGVydHlcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBudWxsO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaW5pdGlhbGl6ZXIgZnVuY3Rpb24gdG8gdGhlIGNsYXNzIHRoYXQgaXMgY2FsbGVkIGR1cmluZyBpbnN0YW5jZVxuICAgICAqIGNvbnN0cnVjdGlvbi5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgdXNlZnVsIGZvciBjb2RlIHRoYXQgcnVucyBhZ2FpbnN0IGEgYFJlYWN0aXZlRWxlbWVudGBcbiAgICAgKiBzdWJjbGFzcywgc3VjaCBhcyBhIGRlY29yYXRvciwgdGhhdCBuZWVkcyB0byBkbyB3b3JrIGZvciBlYWNoXG4gICAgICogaW5zdGFuY2UsIHN1Y2ggYXMgc2V0dGluZyB1cCBhIGBSZWFjdGl2ZUNvbnRyb2xsZXJgLlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjb25zdCBteURlY29yYXRvciA9ICh0YXJnZXQ6IHR5cGVvZiBSZWFjdGl2ZUVsZW1lbnQsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICogICB0YXJnZXQuYWRkSW5pdGlhbGl6ZXIoKGluc3RhbmNlOiBSZWFjdGl2ZUVsZW1lbnQpID0+IHtcbiAgICAgKiAgICAgLy8gVGhpcyBpcyBydW4gZHVyaW5nIGNvbnN0cnVjdGlvbiBvZiB0aGUgZWxlbWVudFxuICAgICAqICAgICBuZXcgTXlDb250cm9sbGVyKGluc3RhbmNlKTtcbiAgICAgKiAgIH0pO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIERlY29yYXRpbmcgYSBmaWVsZCB3aWxsIHRoZW4gY2F1c2UgZWFjaCBpbnN0YW5jZSB0byBydW4gYW4gaW5pdGlhbGl6ZXJcbiAgICAgKiB0aGF0IGFkZHMgYSBjb250cm9sbGVyOlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICAgKiAgIEBteURlY29yYXRvciBmb287XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogSW5pdGlhbGl6ZXJzIGFyZSBzdG9yZWQgcGVyLWNvbnN0cnVjdG9yLiBBZGRpbmcgYW4gaW5pdGlhbGl6ZXIgdG8gYVxuICAgICAqIHN1YmNsYXNzIGRvZXMgbm90IGFkZCBpdCB0byBhIHN1cGVyY2xhc3MuIFNpbmNlIGluaXRpYWxpemVycyBhcmUgcnVuIGluXG4gICAgICogY29uc3RydWN0b3JzLCBpbml0aWFsaXplcnMgd2lsbCBydW4gaW4gb3JkZXIgb2YgdGhlIGNsYXNzIGhpZXJhcmNoeSxcbiAgICAgKiBzdGFydGluZyB3aXRoIHN1cGVyY2xhc3NlcyBhbmQgcHJvZ3Jlc3NpbmcgdG8gdGhlIGluc3RhbmNlJ3MgY2xhc3MuXG4gICAgICpcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBhZGRJbml0aWFsaXplcihpbml0aWFsaXplcikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX2luaXRpYWxpemVycykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKHRoaXMuX2luaXRpYWxpemVycyA9IFtdKTtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZXJzLnB1c2goaW5pdGlhbGl6ZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBhdHRyaWJ1dGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHJlZ2lzdGVyZWQgcHJvcGVydGllcy5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBjYXRlZ29yeSBhdHRyaWJ1dGVzXG4gICAgICovXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIC8vIG5vdGU6IHBpZ2d5IGJhY2tpbmcgb24gdGhpcyB0byBlbnN1cmUgd2UncmUgZmluYWxpemVkLlxuICAgICAgICB0aGlzLmZpbmFsaXplKCk7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgdGhpcy5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKCh2LCBwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5fX2F0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShwLCB2KTtcbiAgICAgICAgICAgIGlmIChhdHRyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcC5zZXQoYXR0ciwgcCk7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwcm9wZXJ0eSBhY2Nlc3NvciBvbiB0aGUgZWxlbWVudCBwcm90b3R5cGUgaWYgb25lIGRvZXMgbm90IGV4aXN0XG4gICAgICogYW5kIHN0b3JlcyBhIHtAbGlua2NvZGUgUHJvcGVydHlEZWNsYXJhdGlvbn0gZm9yIHRoZSBwcm9wZXJ0eSB3aXRoIHRoZVxuICAgICAqIGdpdmVuIG9wdGlvbnMuIFRoZSBwcm9wZXJ0eSBzZXR0ZXIgY2FsbHMgdGhlIHByb3BlcnR5J3MgYGhhc0NoYW5nZWRgXG4gICAgICogcHJvcGVydHkgb3B0aW9uIG9yIHVzZXMgYSBzdHJpY3QgaWRlbnRpdHkgY2hlY2sgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90XG4gICAgICogdG8gcmVxdWVzdCBhbiB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBtYXkgYmUgb3ZlcnJpZGRlbiB0byBjdXN0b21pemUgcHJvcGVydGllczsgaG93ZXZlcixcbiAgICAgKiB3aGVuIGRvaW5nIHNvLCBpdCdzIGltcG9ydGFudCB0byBjYWxsIGBzdXBlci5jcmVhdGVQcm9wZXJ0eWAgdG8gZW5zdXJlXG4gICAgICogdGhlIHByb3BlcnR5IGlzIHNldHVwIGNvcnJlY3RseS4gVGhpcyBtZXRob2QgY2FsbHNcbiAgICAgKiBgZ2V0UHJvcGVydHlEZXNjcmlwdG9yYCBpbnRlcm5hbGx5IHRvIGdldCBhIGRlc2NyaXB0b3IgdG8gaW5zdGFsbC5cbiAgICAgKiBUbyBjdXN0b21pemUgd2hhdCBwcm9wZXJ0aWVzIGRvIHdoZW4gdGhleSBhcmUgZ2V0IG9yIHNldCwgb3ZlcnJpZGVcbiAgICAgKiBgZ2V0UHJvcGVydHlEZXNjcmlwdG9yYC4gVG8gY3VzdG9taXplIHRoZSBvcHRpb25zIGZvciBhIHByb3BlcnR5LFxuICAgICAqIGltcGxlbWVudCBgY3JlYXRlUHJvcGVydHlgIGxpa2UgdGhpczpcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogc3RhdGljIGNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgKiAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtteU9wdGlvbjogdHJ1ZX0pO1xuICAgICAqICAgc3VwZXIuY3JlYXRlUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgcHJvcGVydGllc1xuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zID0gZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBpZiB0aGlzIGlzIGEgc3RhdGUgcHJvcGVydHksIGZvcmNlIHRoZSBhdHRyaWJ1dGUgdG8gZmFsc2UuXG4gICAgICAgIGlmIChvcHRpb25zLnN0YXRlKSB7XG4gICAgICAgICAgICAvLyBDYXN0IGFzIGFueSBzaW5jZSB0aGlzIGlzIHJlYWRvbmx5LlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIG9wdGlvbnMuYXR0cmlidXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm90ZSwgc2luY2UgdGhpcyBjYW4gYmUgY2FsbGVkIGJ5IHRoZSBgQHByb3BlcnR5YCBkZWNvcmF0b3Igd2hpY2hcbiAgICAgICAgLy8gaXMgY2FsbGVkIGJlZm9yZSBgZmluYWxpemVgLCB3ZSBlbnN1cmUgZmluYWxpemF0aW9uIGhhcyBiZWVuIGtpY2tlZCBvZmYuXG4gICAgICAgIHRoaXMuZmluYWxpemUoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50UHJvcGVydGllcy5zZXQobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIC8vIERvIG5vdCBnZW5lcmF0ZSBhbiBhY2Nlc3NvciBpZiB0aGUgcHJvdG90eXBlIGFscmVhZHkgaGFzIG9uZSwgc2luY2VcbiAgICAgICAgLy8gaXQgd291bGQgYmUgbG9zdCBvdGhlcndpc2UgYW5kIHRoYXQgd291bGQgbmV2ZXIgYmUgdGhlIHVzZXIncyBpbnRlbnRpb247XG4gICAgICAgIC8vIEluc3RlYWQsIHdlIGV4cGVjdCB1c2VycyB0byBjYWxsIGByZXF1ZXN0VXBkYXRlYCB0aGVtc2VsdmVzIGZyb21cbiAgICAgICAgLy8gdXNlci1kZWZpbmVkIGFjY2Vzc29ycy4gTm90ZSB0aGF0IGlmIHRoZSBzdXBlciBoYXMgYW4gYWNjZXNzb3Igd2Ugd2lsbFxuICAgICAgICAvLyBzdGlsbCBvdmVyd3JpdGUgaXRcbiAgICAgICAgaWYgKCFvcHRpb25zLm5vQWNjZXNzb3IgJiYgIXRoaXMucHJvdG90eXBlLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0eXBlb2YgbmFtZSA9PT0gJ3N5bWJvbCcgPyBTeW1ib2woKSA6IGBfXyR7bmFtZX1gO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHRoaXMuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMucHJvdG90eXBlLCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBjbGFzcyBkb2Vzbid0IGhhdmUgaXRzIG93biBzZXQsIGNyZWF0ZSBvbmUgYW5kIGluaXRpYWxpemVcbiAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCB0aGUgdmFsdWVzIGluIHRoZSBzZXQgZnJvbSB0aGUgbmVhcmVzdCBhbmNlc3RvciBjbGFzcywgaWYgYW55LlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoJ19fcmVhY3RpdmVQcm9wZXJ0eUtleXMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3JlYWN0aXZlUHJvcGVydHlLZXlzID0gbmV3IFNldCgoX2EgPSB0aGlzLl9fcmVhY3RpdmVQcm9wZXJ0eUtleXMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fcmVhY3RpdmVQcm9wZXJ0eUtleXMuYWRkKG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvcGVydHkgZGVzY3JpcHRvciB0byBiZSBkZWZpbmVkIG9uIHRoZSBnaXZlbiBuYW1lZCBwcm9wZXJ0eS5cbiAgICAgKiBJZiBubyBkZXNjcmlwdG9yIGlzIHJldHVybmVkLCB0aGUgcHJvcGVydHkgd2lsbCBub3QgYmVjb21lIGFuIGFjY2Vzc29yLlxuICAgICAqIEZvciBleGFtcGxlLFxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICAgKiAgIHN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKSB7XG4gICAgICogICAgIGNvbnN0IGRlZmF1bHREZXNjcmlwdG9yID1cbiAgICAgKiAgICAgICAgIHN1cGVyLmdldFByb3BlcnR5RGVzY3JpcHRvcihuYW1lLCBrZXksIG9wdGlvbnMpO1xuICAgICAqICAgICBjb25zdCBzZXR0ZXIgPSBkZWZhdWx0RGVzY3JpcHRvci5zZXQ7XG4gICAgICogICAgIHJldHVybiB7XG4gICAgICogICAgICAgZ2V0OiBkZWZhdWx0RGVzY3JpcHRvci5nZXQsXG4gICAgICogICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICogICAgICAgICBzZXR0ZXIuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICogICAgICAgICAvLyBjdXN0b20gYWN0aW9uLlxuICAgICAqICAgICAgIH0sXG4gICAgICogICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAqICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgKiAgICAgfVxuICAgICAqICAgfVxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trZXldO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHByb3BlcnR5IG9wdGlvbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBwcm9wZXJ0eS5cbiAgICAgKiBUaGVzZSBvcHRpb25zIGFyZSBkZWZpbmVkIHdpdGggYSBgUHJvcGVydHlEZWNsYXJhdGlvbmAgdmlhIHRoZSBgcHJvcGVydGllc2BcbiAgICAgKiBvYmplY3Qgb3IgdGhlIGBAcHJvcGVydHlgIGRlY29yYXRvciBhbmQgYXJlIHJlZ2lzdGVyZWQgaW5cbiAgICAgKiBgY3JlYXRlUHJvcGVydHkoLi4uKWAuXG4gICAgICpcbiAgICAgKiBOb3RlLCB0aGlzIG1ldGhvZCBzaG91bGQgYmUgY29uc2lkZXJlZCBcImZpbmFsXCIgYW5kIG5vdCBvdmVycmlkZGVuLiBUb1xuICAgICAqIGN1c3RvbWl6ZSB0aGUgb3B0aW9ucyBmb3IgYSBnaXZlbiBwcm9wZXJ0eSwgb3ZlcnJpZGVcbiAgICAgKiB7QGxpbmtjb2RlIGNyZWF0ZVByb3BlcnR5fS5cbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGZpbmFsXG4gICAgICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UHJvcGVydHlPcHRpb25zKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuZ2V0KG5hbWUpIHx8IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHByb3BlcnR5IGFjY2Vzc29ycyBmb3IgcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzLCBzZXRzIHVwIGVsZW1lbnRcbiAgICAgKiBzdHlsaW5nLCBhbmQgZW5zdXJlcyBhbnkgc3VwZXJjbGFzc2VzIGFyZSBhbHNvIGZpbmFsaXplZC4gUmV0dXJucyB0cnVlIGlmXG4gICAgICogdGhlIGVsZW1lbnQgd2FzIGZpbmFsaXplZC5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5hbGl6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoZmluYWxpemVkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbZmluYWxpemVkXSA9IHRydWU7XG4gICAgICAgIC8vIGZpbmFsaXplIGFueSBzdXBlcmNsYXNzZXNcbiAgICAgICAgY29uc3Qgc3VwZXJDdG9yID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpO1xuICAgICAgICBzdXBlckN0b3IuZmluYWxpemUoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50UHJvcGVydGllcyA9IG5ldyBNYXAoc3VwZXJDdG9yLmVsZW1lbnRQcm9wZXJ0aWVzKTtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBNYXAgcG9wdWxhdGVkIGluIG9ic2VydmVkQXR0cmlidXRlc1xuICAgICAgICB0aGlzLl9fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy8gbWFrZSBhbnkgcHJvcGVydGllc1xuICAgICAgICAvLyBOb3RlLCBvbmx5IHByb2Nlc3MgXCJvd25cIiBwcm9wZXJ0aWVzIHNpbmNlIHRoaXMgZWxlbWVudCB3aWxsIGluaGVyaXRcbiAgICAgICAgLy8gYW55IHByb3BlcnRpZXMgZGVmaW5lZCBvbiB0aGUgc3VwZXJDbGFzcywgYW5kIGZpbmFsaXphdGlvbiBlbnN1cmVzXG4gICAgICAgIC8vIHRoZSBlbnRpcmUgcHJvdG90eXBlIGNoYWluIGlzIGZpbmFsaXplZC5cbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgncHJvcGVydGllcycsIHRoaXMpKSkge1xuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgICAgICAgICAvLyBzdXBwb3J0IHN5bWJvbHMgaW4gcHJvcGVydGllcyAoSUUxMSBkb2VzIG5vdCBzdXBwb3J0IHRoaXMpXG4gICAgICAgICAgICBjb25zdCBwcm9wS2V5cyA9IFtcbiAgICAgICAgICAgICAgICAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm9wcyksXG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhwcm9wcyksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgLy8gVGhpcyBmb3Ivb2YgaXMgb2sgYmVjYXVzZSBwcm9wS2V5cyBpcyBhbiBhcnJheVxuICAgICAgICAgICAgZm9yIChjb25zdCBwIG9mIHByb3BLZXlzKSB7XG4gICAgICAgICAgICAgICAgLy8gbm90ZSwgdXNlIG9mIGBhbnlgIGlzIGR1ZSB0byBUeXBlU2NyaXB0IGxhY2sgb2Ygc3VwcG9ydCBmb3Igc3ltYm9sIGluXG4gICAgICAgICAgICAgICAgLy8gaW5kZXggdHlwZXNcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvcGVydHkocCwgcHJvcHNbcF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudFN0eWxlcyA9IHRoaXMuZmluYWxpemVTdHlsZXModGhpcy5zdHlsZXMpO1xuICAgICAgICAvLyBERVYgbW9kZSB3YXJuaW5nc1xuICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgIGNvbnN0IHdhcm5SZW1vdmVkT3JSZW5hbWVkID0gKG5hbWUsIHJlbmFtZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBpc3N1ZVdhcm5pbmcocmVuYW1lZCA/ICdyZW5hbWVkLWFwaScgOiAncmVtb3ZlZC1hcGknLCBgXFxgJHtuYW1lfVxcYCBpcyBpbXBsZW1lbnRlZCBvbiBjbGFzcyAke3RoaXMubmFtZX0uIEl0IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGhhcyBiZWVuICR7cmVuYW1lZCA/ICdyZW5hbWVkJyA6ICdyZW1vdmVkJ30gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgaW4gdGhpcyB2ZXJzaW9uIG9mIExpdEVsZW1lbnQuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHdhcm5SZW1vdmVkT3JSZW5hbWVkKCdpbml0aWFsaXplJyk7XG4gICAgICAgICAgICB3YXJuUmVtb3ZlZE9yUmVuYW1lZCgncmVxdWVzdFVwZGF0ZUludGVybmFsJyk7XG4gICAgICAgICAgICB3YXJuUmVtb3ZlZE9yUmVuYW1lZCgnX2dldFVwZGF0ZUNvbXBsZXRlJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRha2VzIHRoZSBzdHlsZXMgdGhlIHVzZXIgc3VwcGxpZWQgdmlhIHRoZSBgc3RhdGljIHN0eWxlc2AgcHJvcGVydHkgYW5kXG4gICAgICogcmV0dXJucyB0aGUgYXJyYXkgb2Ygc3R5bGVzIHRvIGFwcGx5IHRvIHRoZSBlbGVtZW50LlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGludGVncmF0ZSBpbnRvIGEgc3R5bGUgbWFuYWdlbWVudCBzeXN0ZW0uXG4gICAgICpcbiAgICAgKiBTdHlsZXMgYXJlIGRlZHVwbGljYXRlZCBwcmVzZXJ2aW5nIHRoZSBfbGFzdF8gaW5zdGFuY2UgaW4gdGhlIGxpc3QuIFRoaXNcbiAgICAgKiBpcyBhIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiB0byBhdm9pZCBkdXBsaWNhdGVkIHN0eWxlcyB0aGF0IGNhbiBvY2N1clxuICAgICAqIGVzcGVjaWFsbHkgd2hlbiBjb21wb3NpbmcgdmlhIHN1YmNsYXNzaW5nLiBUaGUgbGFzdCBpdGVtIGlzIGtlcHQgdG8gdHJ5XG4gICAgICogdG8gcHJlc2VydmUgdGhlIGNhc2NhZGUgb3JkZXIgd2l0aCB0aGUgYXNzdW1wdGlvbiB0aGF0IGl0J3MgbW9zdCBpbXBvcnRhbnRcbiAgICAgKiB0aGF0IGxhc3QgYWRkZWQgc3R5bGVzIG92ZXJyaWRlIHByZXZpb3VzIHN0eWxlcy5cbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGNhdGVnb3J5IHN0eWxlc1xuICAgICAqL1xuICAgIHN0YXRpYyBmaW5hbGl6ZVN0eWxlcyhzdHlsZXMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudFN0eWxlcyA9IFtdO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZXMpKSB7XG4gICAgICAgICAgICAvLyBEZWR1cGUgdGhlIGZsYXR0ZW5lZCBhcnJheSBpbiByZXZlcnNlIG9yZGVyIHRvIHByZXNlcnZlIHRoZSBsYXN0IGl0ZW1zLlxuICAgICAgICAgICAgLy8gQ2FzdGluZyB0byBBcnJheTx1bmtub3duPiB3b3JrcyBhcm91bmQgVFMgZXJyb3IgdGhhdFxuICAgICAgICAgICAgLy8gYXBwZWFycyB0byBjb21lIGZyb20gdHJ5aW5nIHRvIGZsYXR0ZW4gYSB0eXBlIENTU1Jlc3VsdEFycmF5LlxuICAgICAgICAgICAgY29uc3Qgc2V0ID0gbmV3IFNldChzdHlsZXMuZmxhdChJbmZpbml0eSkucmV2ZXJzZSgpKTtcbiAgICAgICAgICAgIC8vIFRoZW4gcHJlc2VydmUgb3JpZ2luYWwgb3JkZXIgYnkgYWRkaW5nIHRoZSBzZXQgaXRlbXMgaW4gcmV2ZXJzZSBvcmRlci5cbiAgICAgICAgICAgIGZvciAoY29uc3QgcyBvZiBzZXQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50U3R5bGVzLnVuc2hpZnQoZ2V0Q29tcGF0aWJsZVN0eWxlKHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZWxlbWVudFN0eWxlcy5wdXNoKGdldENvbXBhdGlibGVTdHlsZShzdHlsZXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudFN0eWxlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJvcGVydHkgbmFtZSBmb3IgdGhlIGdpdmVuIGF0dHJpYnV0ZSBgbmFtZWAuXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgX19hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkobmFtZSwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBvcHRpb25zLmF0dHJpYnV0ZTtcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZSA9PT0gZmFsc2VcbiAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICA6IHR5cGVvZiBhdHRyaWJ1dGUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICA6IHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICA/IG5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgb25seSBvdmVycmlkZSBwb2ludCBmb3IgY3VzdG9taXppbmcgd29yayBkb25lIHdoZW4gZWxlbWVudHNcbiAgICAgKiBhcmUgY29uc3RydWN0ZWQuXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLl9fdXBkYXRlUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMpID0+ICh0aGlzLmVuYWJsZVVwZGF0aW5nID0gcmVzKSk7XG4gICAgICAgIHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fX3NhdmVJbnN0YW5jZVByb3BlcnRpZXMoKTtcbiAgICAgICAgLy8gZW5zdXJlcyBmaXJzdCB1cGRhdGUgd2lsbCBiZSBjYXVnaHQgYnkgYW4gZWFybHkgYWNjZXNzIG9mXG4gICAgICAgIC8vIGB1cGRhdGVDb21wbGV0ZWBcbiAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgICAgIChfYSA9IHRoaXMuY29uc3RydWN0b3IuX2luaXRpYWxpemVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKGkpID0+IGkodGhpcykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBgUmVhY3RpdmVDb250cm9sbGVyYCB0byBwYXJ0aWNpcGF0ZSBpbiB0aGUgZWxlbWVudCdzIHJlYWN0aXZlXG4gICAgICogdXBkYXRlIGN5Y2xlLiBUaGUgZWxlbWVudCBhdXRvbWF0aWNhbGx5IGNhbGxzIGludG8gYW55IHJlZ2lzdGVyZWRcbiAgICAgKiBjb250cm9sbGVycyBkdXJpbmcgaXRzIGxpZmVjeWNsZSBjYWxsYmFja3MuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgZWxlbWVudCBpcyBjb25uZWN0ZWQgd2hlbiBgYWRkQ29udHJvbGxlcigpYCBpcyBjYWxsZWQsIHRoZVxuICAgICAqIGNvbnRyb2xsZXIncyBgaG9zdENvbm5lY3RlZCgpYCBjYWxsYmFjayB3aWxsIGJlIGltbWVkaWF0ZWx5IGNhbGxlZC5cbiAgICAgKiBAY2F0ZWdvcnkgY29udHJvbGxlcnNcbiAgICAgKi9cbiAgICBhZGRDb250cm9sbGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgKChfYSA9IHRoaXMuX19jb250cm9sbGVycykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKHRoaXMuX19jb250cm9sbGVycyA9IFtdKSkucHVzaChjb250cm9sbGVyKTtcbiAgICAgICAgLy8gSWYgYSBjb250cm9sbGVyIGlzIGFkZGVkIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIGNvbm5lY3RlZCxcbiAgICAgICAgLy8gY2FsbCBob3N0Q29ubmVjdGVkLiBOb3RlLCByZS11c2luZyBleGlzdGVuY2Ugb2YgYHJlbmRlclJvb3RgIGhlcmVcbiAgICAgICAgLy8gKHdoaWNoIGlzIHNldCBpbiBjb25uZWN0ZWRDYWxsYmFjaykgdG8gYXZvaWQgdGhlIG5lZWQgdG8gdHJhY2sgYVxuICAgICAgICAvLyBmaXJzdCBjb25uZWN0ZWQgc3RhdGUuXG4gICAgICAgIGlmICh0aGlzLnJlbmRlclJvb3QgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAoX2IgPSBjb250cm9sbGVyLmhvc3RDb25uZWN0ZWQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKGNvbnRyb2xsZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBgUmVhY3RpdmVDb250cm9sbGVyYCBmcm9tIHRoZSBlbGVtZW50LlxuICAgICAqIEBjYXRlZ29yeSBjb250cm9sbGVyc1xuICAgICAqL1xuICAgIHJlbW92ZUNvbnRyb2xsZXIoY29udHJvbGxlcikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIE5vdGUsIGlmIHRoZSBpbmRleE9mIGlzIC0xLCB0aGUgPj4+IHdpbGwgZmxpcCB0aGUgc2lnbiB3aGljaCBtYWtlcyB0aGVcbiAgICAgICAgLy8gc3BsaWNlIGRvIG5vdGhpbmcuXG4gICAgICAgIChfYSA9IHRoaXMuX19jb250cm9sbGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNwbGljZSh0aGlzLl9fY29udHJvbGxlcnMuaW5kZXhPZihjb250cm9sbGVyKSA+Pj4gMCwgMSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpeGVzIGFueSBwcm9wZXJ0aWVzIHNldCBvbiB0aGUgaW5zdGFuY2UgYmVmb3JlIHVwZ3JhZGUgdGltZS5cbiAgICAgKiBPdGhlcndpc2UgdGhlc2Ugd291bGQgc2hhZG93IHRoZSBhY2Nlc3NvciBhbmQgYnJlYWsgdGhlc2UgcHJvcGVydGllcy5cbiAgICAgKiBUaGUgcHJvcGVydGllcyBhcmUgc3RvcmVkIGluIGEgTWFwIHdoaWNoIGlzIHBsYXllZCBiYWNrIGFmdGVyIHRoZVxuICAgICAqIGNvbnN0cnVjdG9yIHJ1bnMuIE5vdGUsIG9uIHZlcnkgb2xkIHZlcnNpb25zIG9mIFNhZmFyaSAoPD05KSBvciBDaHJvbWVcbiAgICAgKiAoPD00MSksIHByb3BlcnRpZXMgY3JlYXRlZCBmb3IgbmF0aXZlIHBsYXRmb3JtIHByb3BlcnRpZXMgbGlrZSAoYGlkYCBvclxuICAgICAqIGBuYW1lYCkgbWF5IG5vdCBoYXZlIGRlZmF1bHQgdmFsdWVzIHNldCBpbiB0aGUgZWxlbWVudCBjb25zdHJ1Y3Rvci4gT25cbiAgICAgKiB0aGVzZSBicm93c2VycyBuYXRpdmUgcHJvcGVydGllcyBhcHBlYXIgb24gaW5zdGFuY2VzIGFuZCB0aGVyZWZvcmUgdGhlaXJcbiAgICAgKiBkZWZhdWx0IHZhbHVlIHdpbGwgb3ZlcndyaXRlIGFueSBlbGVtZW50IGRlZmF1bHQgKGUuZy4gaWYgdGhlIGVsZW1lbnQgc2V0c1xuICAgICAqIHRoaXMuaWQgPSAnaWQnIGluIHRoZSBjb25zdHJ1Y3RvciwgdGhlICdpZCcgd2lsbCBiZWNvbWUgJycgc2luY2UgdGhpcyBpc1xuICAgICAqIHRoZSBuYXRpdmUgcGxhdGZvcm0gZGVmYXVsdCkuXG4gICAgICovXG4gICAgX19zYXZlSW5zdGFuY2VQcm9wZXJ0aWVzKCkge1xuICAgICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3IgbG9vcHNcbiAgICAgICAgLy8gZXhwZWN0aW5nIGFycmF5c1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRQcm9wZXJ0aWVzLmZvckVhY2goKF92LCBwKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMuc2V0KHAsIHRoaXNbcF0pO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzW3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbm9kZSBpbnRvIHdoaWNoIHRoZSBlbGVtZW50IHNob3VsZCByZW5kZXIgYW5kIGJ5IGRlZmF1bHRcbiAgICAgKiBjcmVhdGVzIGFuZCByZXR1cm5zIGFuIG9wZW4gc2hhZG93Um9vdC4gSW1wbGVtZW50IHRvIGN1c3RvbWl6ZSB3aGVyZSB0aGVcbiAgICAgKiBlbGVtZW50J3MgRE9NIGlzIHJlbmRlcmVkLiBGb3IgZXhhbXBsZSwgdG8gcmVuZGVyIGludG8gdGhlIGVsZW1lbnQnc1xuICAgICAqIGNoaWxkTm9kZXMsIHJldHVybiBgdGhpc2AuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIFJldHVybnMgYSBub2RlIGludG8gd2hpY2ggdG8gcmVuZGVyLlxuICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgKi9cbiAgICBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHJlbmRlclJvb3QgPSAoX2EgPSB0aGlzLnNoYWRvd1Jvb3QpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHRoaXMuYXR0YWNoU2hhZG93KHRoaXMuY29uc3RydWN0b3Iuc2hhZG93Um9vdE9wdGlvbnMpO1xuICAgICAgICBhZG9wdFN0eWxlcyhyZW5kZXJSb290LCB0aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRTdHlsZXMpO1xuICAgICAgICByZXR1cm4gcmVuZGVyUm9vdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT24gZmlyc3QgY29ubmVjdGlvbiwgY3JlYXRlcyB0aGUgZWxlbWVudCdzIHJlbmRlclJvb3QsIHNldHMgdXBcbiAgICAgKiBlbGVtZW50IHN0eWxpbmcsIGFuZCBlbmFibGVzIHVwZGF0aW5nLlxuICAgICAqIEBjYXRlZ29yeSBsaWZlY3ljbGVcbiAgICAgKi9cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBjcmVhdGUgcmVuZGVyUm9vdCBiZWZvcmUgZmlyc3QgdXBkYXRlLlxuICAgICAgICBpZiAodGhpcy5yZW5kZXJSb290ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUm9vdCA9IHRoaXMuY3JlYXRlUmVuZGVyUm9vdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5hYmxlVXBkYXRpbmcodHJ1ZSk7XG4gICAgICAgIChfYSA9IHRoaXMuX19jb250cm9sbGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKGMpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gYy5ob3N0Q29ubmVjdGVkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjKTsgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE5vdGUsIHRoaXMgbWV0aG9kIHNob3VsZCBiZSBjb25zaWRlcmVkIGZpbmFsIGFuZCBub3Qgb3ZlcnJpZGRlbi4gSXQgaXNcbiAgICAgKiBvdmVycmlkZGVuIG9uIHRoZSBlbGVtZW50IGluc3RhbmNlIHdpdGggYSBmdW5jdGlvbiB0aGF0IHRyaWdnZXJzIHRoZSBmaXJzdFxuICAgICAqIHVwZGF0ZS5cbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGVuYWJsZVVwZGF0aW5nKF9yZXF1ZXN0ZWRVcGRhdGUpIHsgfVxuICAgIC8qKlxuICAgICAqIEFsbG93cyBmb3IgYHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKClgIGluIGV4dGVuc2lvbnMgd2hpbGVcbiAgICAgKiByZXNlcnZpbmcgdGhlIHBvc3NpYmlsaXR5IG9mIG1ha2luZyBub24tYnJlYWtpbmcgZmVhdHVyZSBhZGRpdGlvbnNcbiAgICAgKiB3aGVuIGRpc2Nvbm5lY3RpbmcgYXQgc29tZSBwb2ludCBpbiB0aGUgZnV0dXJlLlxuICAgICAqIEBjYXRlZ29yeSBsaWZlY3ljbGVcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChjKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGMuaG9zdERpc2Nvbm5lY3RlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoYyk7IH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTeW5jaHJvbml6ZXMgcHJvcGVydHkgdmFsdWVzIHdoZW4gYXR0cmlidXRlcyBjaGFuZ2UuXG4gICAgICpcbiAgICAgKiBTcGVjaWZpY2FsbHksIHdoZW4gYW4gYXR0cmlidXRlIGlzIHNldCwgdGhlIGNvcnJlc3BvbmRpbmcgcHJvcGVydHkgaXMgc2V0LlxuICAgICAqIFlvdSBzaG91bGQgcmFyZWx5IG5lZWQgdG8gaW1wbGVtZW50IHRoaXMgY2FsbGJhY2suIElmIHRoaXMgbWV0aG9kIGlzXG4gICAgICogb3ZlcnJpZGRlbiwgYHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBfb2xkLCB2YWx1ZSlgIG11c3QgYmVcbiAgICAgKiBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBTZWUgW3VzaW5nIHRoZSBsaWZlY3ljbGUgY2FsbGJhY2tzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9XZWJfQ29tcG9uZW50cy9Vc2luZ19jdXN0b21fZWxlbWVudHMjdXNpbmdfdGhlX2xpZmVjeWNsZV9jYWxsYmFja3MpXG4gICAgICogb24gTUROIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYC5cbiAgICAgKiBAY2F0ZWdvcnkgYXR0cmlidXRlc1xuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBfb2xkLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl8kYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIF9fcHJvcGVydHlUb0F0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmNvbnN0cnVjdG9yLl9fYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICBpZiAoYXR0ciAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbnMucmVmbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgdG9BdHRyaWJ1dGUgPSAoX2IgPSAoX2EgPSBvcHRpb25zLmNvbnZlcnRlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvQXR0cmlidXRlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBkZWZhdWx0Q29udmVydGVyLnRvQXR0cmlidXRlO1xuICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gdG9BdHRyaWJ1dGUodmFsdWUsIG9wdGlvbnMudHlwZSk7XG4gICAgICAgICAgICBpZiAoREVWX01PREUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmVuYWJsZWRXYXJuaW5ncy5pbmRleE9mKCdtaWdyYXRpb24nKSA+PSAwICYmXG4gICAgICAgICAgICAgICAgYXR0clZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpc3N1ZVdhcm5pbmcoJ3VuZGVmaW5lZC1hdHRyaWJ1dGUtdmFsdWUnLCBgVGhlIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgdGhlICR7bmFtZX0gcHJvcGVydHkgaXMgYCArXG4gICAgICAgICAgICAgICAgICAgIGB1bmRlZmluZWQgb24gZWxlbWVudCAke3RoaXMubG9jYWxOYW1lfS4gVGhlIGF0dHJpYnV0ZSB3aWxsIGJlIGAgK1xuICAgICAgICAgICAgICAgICAgICBgcmVtb3ZlZCwgYnV0IGluIHRoZSBwcmV2aW91cyB2ZXJzaW9uIG9mIFxcYFJlYWN0aXZlRWxlbWVudFxcYCwgYCArXG4gICAgICAgICAgICAgICAgICAgIGB0aGUgYXR0cmlidXRlIHdvdWxkIG5vdCBoYXZlIGNoYW5nZWQuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUcmFjayBpZiB0aGUgcHJvcGVydHkgaXMgYmVpbmcgcmVmbGVjdGVkIHRvIGF2b2lkXG4gICAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBwcm9wZXJ0eSBhZ2FpbiB2aWEgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AuIE5vdGU6XG4gICAgICAgICAgICAvLyAxLiB0aGlzIHRha2VzIGFkdmFudGFnZSBvZiB0aGUgZmFjdCB0aGF0IHRoZSBjYWxsYmFjayBpcyBzeW5jaHJvbm91cy5cbiAgICAgICAgICAgIC8vIDIuIHdpbGwgYmVoYXZlIGluY29ycmVjdGx5IGlmIG11bHRpcGxlIGF0dHJpYnV0ZXMgYXJlIGluIHRoZSByZWFjdGlvblxuICAgICAgICAgICAgLy8gc3RhY2sgYXQgdGltZSBvZiBjYWxsaW5nLiBIb3dldmVyLCBzaW5jZSB3ZSBwcm9jZXNzIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIC8vIGluIGB1cGRhdGVgIHRoaXMgc2hvdWxkIG5vdCBiZSBwb3NzaWJsZSAob3IgYW4gZXh0cmVtZSBjb3JuZXIgY2FzZVxuICAgICAgICAgICAgLy8gdGhhdCB3ZSdkIGxpa2UgdG8gZGlzY292ZXIpLlxuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbmFtZTtcbiAgICAgICAgICAgIGlmIChhdHRyVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0clZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgbm90IHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJGF0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIGNvbnN0IGN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICAvLyBOb3RlLCBoaW50IHRoaXMgYXMgYW4gYEF0dHJpYnV0ZU1hcGAgc28gY2xvc3VyZSBjbGVhcmx5IHVuZGVyc3RhbmRzXG4gICAgICAgIC8vIHRoZSB0eXBlOyBpdCBoYXMgaXNzdWVzIHdpdGggdHJhY2tpbmcgdHlwZXMgdGhyb3VnaCBzdGF0aWNzXG4gICAgICAgIGNvbnN0IHByb3BOYW1lID0gY3Rvci5fX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAuZ2V0KG5hbWUpO1xuICAgICAgICAvLyBVc2UgdHJhY2tpbmcgaW5mbyB0byBhdm9pZCByZWZsZWN0aW5nIGEgcHJvcGVydHkgdmFsdWUgdG8gYW4gYXR0cmlidXRlXG4gICAgICAgIC8vIGlmIGl0IHdhcyBqdXN0IHNldCBiZWNhdXNlIHRoZSBhdHRyaWJ1dGUgY2hhbmdlZC5cbiAgICAgICAgaWYgKHByb3BOYW1lICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSAhPT0gcHJvcE5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjdG9yLmdldFByb3BlcnR5T3B0aW9ucyhwcm9wTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0ZXIgPSBvcHRpb25zLmNvbnZlcnRlcjtcbiAgICAgICAgICAgIGNvbnN0IGZyb21BdHRyaWJ1dGUgPSAoX2MgPSAoX2IgPSAoX2EgPSBjb252ZXJ0ZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mcm9tQXR0cmlidXRlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAodHlwZW9mIGNvbnZlcnRlciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgID8gY29udmVydGVyXG4gICAgICAgICAgICAgICAgOiBudWxsKSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogZGVmYXVsdENvbnZlcnRlci5mcm9tQXR0cmlidXRlO1xuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gcHJvcE5hbWU7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgdGhpc1twcm9wTmFtZV0gPSBmcm9tQXR0cmlidXRlKHZhbHVlLCBvcHRpb25zLnR5cGUpO1xuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSBub3QgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVxdWVzdHMgYW4gdXBkYXRlIHdoaWNoIGlzIHByb2Nlc3NlZCBhc3luY2hyb25vdXNseS4gVGhpcyBzaG91bGQgYmUgY2FsbGVkXG4gICAgICogd2hlbiBhbiBlbGVtZW50IHNob3VsZCB1cGRhdGUgYmFzZWQgb24gc29tZSBzdGF0ZSBub3QgdHJpZ2dlcmVkIGJ5IHNldHRpbmdcbiAgICAgKiBhIHJlYWN0aXZlIHByb3BlcnR5LiBJbiB0aGlzIGNhc2UsIHBhc3Mgbm8gYXJndW1lbnRzLiBJdCBzaG91bGQgYWxzbyBiZVxuICAgICAqIGNhbGxlZCB3aGVuIG1hbnVhbGx5IGltcGxlbWVudGluZyBhIHByb3BlcnR5IHNldHRlci4gSW4gdGhpcyBjYXNlLCBwYXNzIHRoZVxuICAgICAqIHByb3BlcnR5IGBuYW1lYCBhbmQgYG9sZFZhbHVlYCB0byBlbnN1cmUgdGhhdCBhbnkgY29uZmlndXJlZCBwcm9wZXJ0eVxuICAgICAqIG9wdGlvbnMgYXJlIGhvbm9yZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBuYW1lIG9mIHJlcXVlc3RpbmcgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0gb2xkVmFsdWUgb2xkIHZhbHVlIG9mIHJlcXVlc3RpbmcgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBwcm9wZXJ0eSBvcHRpb25zIHRvIHVzZSBpbnN0ZWFkIG9mIHRoZSBwcmV2aW91c2x5XG4gICAgICogICAgIGNvbmZpZ3VyZWQgb3B0aW9uc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgcmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucykge1xuICAgICAgICBsZXQgc2hvdWxkUmVxdWVzdFVwZGF0ZSA9IHRydWU7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSBwcm9wZXJ0eSBrZXksIHBlcmZvcm0gcHJvcGVydHkgdXBkYXRlIHN0ZXBzLlxuICAgICAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zID1cbiAgICAgICAgICAgICAgICBvcHRpb25zIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZ2V0UHJvcGVydHlPcHRpb25zKG5hbWUpO1xuICAgICAgICAgICAgY29uc3QgaGFzQ2hhbmdlZCA9IG9wdGlvbnMuaGFzQ2hhbmdlZCB8fCBub3RFcXVhbDtcbiAgICAgICAgICAgIGlmIChoYXNDaGFuZ2VkKHRoaXNbbmFtZV0sIG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMuc2V0KG5hbWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRvIHJlZmxlY3RpbmcgcHJvcGVydGllcyBzZXQuXG4gICAgICAgICAgICAgICAgLy8gTm90ZSwgaXQncyBpbXBvcnRhbnQgdGhhdCBldmVyeSBjaGFuZ2UgaGFzIGEgY2hhbmNlIHRvIGFkZCB0aGVcbiAgICAgICAgICAgICAgICAvLyBwcm9wZXJ0eSB0byBgX3JlZmxlY3RpbmdQcm9wZXJ0aWVzYC4gVGhpcyBlbnN1cmVzIHNldHRpbmdcbiAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGUgKyBwcm9wZXJ0eSByZWZsZWN0cyBjb3JyZWN0bHkuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucmVmbGVjdCA9PT0gdHJ1ZSAmJiB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ICE9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcy5zZXQobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQWJvcnQgdGhlIHJlcXVlc3QgaWYgdGhlIHByb3BlcnR5IHNob3VsZCBub3QgYmUgY29uc2lkZXJlZCBjaGFuZ2VkLlxuICAgICAgICAgICAgICAgIHNob3VsZFJlcXVlc3RVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNVcGRhdGVQZW5kaW5nICYmIHNob3VsZFJlcXVlc3RVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX191cGRhdGVQcm9taXNlID0gdGhpcy5fX2VucXVldWVVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3RlLCBzaW5jZSB0aGlzIG5vIGxvbmdlciByZXR1cm5zIGEgcHJvbWlzZSwgaW4gZGV2IG1vZGUgd2UgcmV0dXJuIGFcbiAgICAgICAgLy8gdGhlbmFibGUgd2hpY2ggd2FybnMgaWYgaXQncyBjYWxsZWQuXG4gICAgICAgIHJldHVybiBERVZfTU9ERVxuICAgICAgICAgICAgPyByZXF1ZXN0VXBkYXRlVGhlbmFibGUodGhpcy5sb2NhbE5hbWUpXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCB0aGUgZWxlbWVudCB0byBhc3luY2hyb25vdXNseSB1cGRhdGUuXG4gICAgICovXG4gICAgYXN5bmMgX19lbnF1ZXVlVXBkYXRlKCkge1xuICAgICAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyA9IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgYW55IHByZXZpb3VzIHVwZGF0ZSBoYXMgcmVzb2x2ZWQgYmVmb3JlIHVwZGF0aW5nLlxuICAgICAgICAgICAgLy8gVGhpcyBgYXdhaXRgIGFsc28gZW5zdXJlcyB0aGF0IHByb3BlcnR5IGNoYW5nZXMgYXJlIGJhdGNoZWQuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fdXBkYXRlUHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gUmVmaXJlIGFueSBwcmV2aW91cyBlcnJvcnMgYXN5bmMgc28gdGhleSBkbyBub3QgZGlzcnVwdCB0aGUgdXBkYXRlXG4gICAgICAgICAgICAvLyBjeWNsZS4gRXJyb3JzIGFyZSByZWZpcmVkIHNvIGRldmVsb3BlcnMgaGF2ZSBhIGNoYW5jZSB0byBvYnNlcnZlXG4gICAgICAgICAgICAvLyB0aGVtLCBhbmQgdGhpcyBjYW4gYmUgZG9uZSBieSBpbXBsZW1lbnRpbmdcbiAgICAgICAgICAgIC8vIGB3aW5kb3cub251bmhhbmRsZWRyZWplY3Rpb25gLlxuICAgICAgICAgICAgUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zY2hlZHVsZVVwZGF0ZSgpO1xuICAgICAgICAvLyBJZiBgc2NoZWR1bGVVcGRhdGVgIHJldHVybnMgYSBQcm9taXNlLCB3ZSBhd2FpdCBpdC4gVGhpcyBpcyBkb25lIHRvXG4gICAgICAgIC8vIGVuYWJsZSBjb29yZGluYXRpbmcgdXBkYXRlcyB3aXRoIGEgc2NoZWR1bGVyLiBOb3RlLCB0aGUgcmVzdWx0IGlzXG4gICAgICAgIC8vIGNoZWNrZWQgdG8gYXZvaWQgZGVsYXlpbmcgYW4gYWRkaXRpb25hbCBtaWNyb3Rhc2sgdW5sZXNzIHdlIG5lZWQgdG8uXG4gICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgYXdhaXQgcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhdGhpcy5pc1VwZGF0ZVBlbmRpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNjaGVkdWxlcyBhbiBlbGVtZW50IHVwZGF0ZS4gWW91IGNhbiBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjaGFuZ2UgdGhlXG4gICAgICogdGltaW5nIG9mIHVwZGF0ZXMgYnkgcmV0dXJuaW5nIGEgUHJvbWlzZS4gVGhlIHVwZGF0ZSB3aWxsIGF3YWl0IHRoZVxuICAgICAqIHJldHVybmVkIFByb21pc2UsIGFuZCB5b3Ugc2hvdWxkIHJlc29sdmUgdGhlIFByb21pc2UgdG8gYWxsb3cgdGhlIHVwZGF0ZVxuICAgICAqIHRvIHByb2NlZWQuIElmIHRoaXMgbWV0aG9kIGlzIG92ZXJyaWRkZW4sIGBzdXBlci5zY2hlZHVsZVVwZGF0ZSgpYFxuICAgICAqIG11c3QgYmUgY2FsbGVkLlxuICAgICAqXG4gICAgICogRm9yIGluc3RhbmNlLCB0byBzY2hlZHVsZSB1cGRhdGVzIHRvIG9jY3VyIGp1c3QgYmVmb3JlIHRoZSBuZXh0IGZyYW1lOlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBvdmVycmlkZSBwcm90ZWN0ZWQgYXN5bmMgc2NoZWR1bGVVcGRhdGUoKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgICogICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJlc29sdmUoKSkpO1xuICAgICAqICAgc3VwZXIuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBzY2hlZHVsZVVwZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVyZm9ybVVwZGF0ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhbiBlbGVtZW50IHVwZGF0ZS4gTm90ZSwgaWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBkdXJpbmcgdGhlXG4gICAgICogdXBkYXRlLCBgZmlyc3RVcGRhdGVkYCBhbmQgYHVwZGF0ZWRgIHdpbGwgbm90IGJlIGNhbGxlZC5cbiAgICAgKlxuICAgICAqIENhbGwgYHBlcmZvcm1VcGRhdGUoKWAgdG8gaW1tZWRpYXRlbHkgcHJvY2VzcyBhIHBlbmRpbmcgdXBkYXRlLiBUaGlzIHNob3VsZFxuICAgICAqIGdlbmVyYWxseSBub3QgYmUgbmVlZGVkLCBidXQgaXQgY2FuIGJlIGRvbmUgaW4gcmFyZSBjYXNlcyB3aGVuIHlvdSBuZWVkIHRvXG4gICAgICogdXBkYXRlIHN5bmNocm9ub3VzbHkuXG4gICAgICpcbiAgICAgKiBOb3RlOiBUbyBlbnN1cmUgYHBlcmZvcm1VcGRhdGUoKWAgc3luY2hyb25vdXNseSBjb21wbGV0ZXMgYSBwZW5kaW5nIHVwZGF0ZSxcbiAgICAgKiBpdCBzaG91bGQgbm90IGJlIG92ZXJyaWRkZW4uIEluIExpdEVsZW1lbnQgMi54IGl0IHdhcyBzdWdnZXN0ZWQgdG8gb3ZlcnJpZGVcbiAgICAgKiBgcGVyZm9ybVVwZGF0ZSgpYCB0byBhbHNvIGN1c3RvbWl6aW5nIHVwZGF0ZSBzY2hlZHVsaW5nLiBJbnN0ZWFkLCB5b3Ugc2hvdWxkIG5vd1xuICAgICAqIG92ZXJyaWRlIGBzY2hlZHVsZVVwZGF0ZSgpYC4gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggTGl0RWxlbWVudCAyLngsXG4gICAgICogc2NoZWR1bGluZyB1cGRhdGVzIHZpYSBgcGVyZm9ybVVwZGF0ZSgpYCBjb250aW51ZXMgdG8gd29yaywgYnV0IHdpbGwgbWFrZVxuICAgICAqIGFsc28gY2FsbGluZyBgcGVyZm9ybVVwZGF0ZSgpYCB0byBzeW5jaHJvbm91c2x5IHByb2Nlc3MgdXBkYXRlcyBkaWZmaWN1bHQuXG4gICAgICpcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHBlcmZvcm1VcGRhdGUoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIC8vIEFib3J0IGFueSB1cGRhdGUgaWYgb25lIGlzIG5vdCBwZW5kaW5nIHdoZW4gdGhpcyBpcyBjYWxsZWQuXG4gICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiBgcGVyZm9ybVVwZGF0ZWAgaXMgY2FsbGVkIGVhcmx5IHRvIFwiZmx1c2hcIlxuICAgICAgICAvLyB0aGUgdXBkYXRlLlxuICAgICAgICBpZiAoIXRoaXMuaXNVcGRhdGVQZW5kaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHsga2luZDogJ3VwZGF0ZScgfSk7XG4gICAgICAgIC8vIGNyZWF0ZSByZW5kZXJSb290IGJlZm9yZSBmaXJzdCB1cGRhdGUuXG4gICAgICAgIGlmICghdGhpcy5oYXNVcGRhdGVkKSB7XG4gICAgICAgICAgICAvLyBQcm9kdWNlIHdhcm5pbmcgaWYgYW55IGNsYXNzIHByb3BlcnRpZXMgYXJlIHNoYWRvd2VkIGJ5IGNsYXNzIGZpZWxkc1xuICAgICAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhZG93ZWRQcm9wZXJ0aWVzID0gW107XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5jb25zdHJ1Y3Rvci5fX3JlYWN0aXZlUHJvcGVydHlLZXlzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHApICYmICEoKF9hID0gdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhhcyhwKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd2VkUHJvcGVydGllcy5wdXNoKHApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHNoYWRvd2VkUHJvcGVydGllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZm9sbG93aW5nIHByb3BlcnRpZXMgb24gZWxlbWVudCAke3RoaXMubG9jYWxOYW1lfSB3aWxsIG5vdCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGB0cmlnZ2VyIHVwZGF0ZXMgYXMgZXhwZWN0ZWQgYmVjYXVzZSB0aGV5IGFyZSBzZXQgdXNpbmcgY2xhc3MgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgZmllbGRzOiAke3NoYWRvd2VkUHJvcGVydGllcy5qb2luKCcsICcpfS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgTmF0aXZlIGNsYXNzIGZpZWxkcyBhbmQgc29tZSBjb21waWxlZCBvdXRwdXQgd2lsbCBvdmVyd3JpdGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgYWNjZXNzb3JzIHVzZWQgZm9yIGRldGVjdGluZyBjaGFuZ2VzLiBTZWUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgaHR0cHM6Ly9saXQuZGV2L21zZy9jbGFzcy1maWVsZC1zaGFkb3dpbmcgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgZm9yIG1vcmUgaW5mb3JtYXRpb24uYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE1peGluIGluc3RhbmNlIHByb3BlcnRpZXMgb25jZSwgaWYgdGhleSBleGlzdC5cbiAgICAgICAgaWYgKHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgICAgICAgICAgLy8gZXhwZWN0aW5nIGFycmF5c1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMuZm9yRWFjaCgodiwgcCkgPT4gKHRoaXNbcF0gPSB2KSk7XG4gICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzaG91bGRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2hhbmdlZFByb3BlcnRpZXMgPSB0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzaG91bGRVcGRhdGUgPSB0aGlzLnNob3VsZFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aWxsVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChjKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGMuaG9zdFVwZGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoYyk7IH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX19tYXJrVXBkYXRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBQcmV2ZW50IGBmaXJzdFVwZGF0ZWRgIGFuZCBgdXBkYXRlZGAgZnJvbSBydW5uaW5nIHdoZW4gdGhlcmUncyBhblxuICAgICAgICAgICAgLy8gdXBkYXRlIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gRW5zdXJlIGVsZW1lbnQgY2FuIGFjY2VwdCBhZGRpdGlvbmFsIHVwZGF0ZXMgYWZ0ZXIgYW4gZXhjZXB0aW9uLlxuICAgICAgICAgICAgdGhpcy5fX21hcmtVcGRhdGVkKCk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSB1cGRhdGUgaXMgbm8gbG9uZ2VyIGNvbnNpZGVyZWQgcGVuZGluZyBhbmQgZnVydGhlciB1cGRhdGVzIGFyZSBub3cgYWxsb3dlZC5cbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fJGRpZFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCBiZWZvcmUgYHVwZGF0ZSgpYCB0byBjb21wdXRlIHZhbHVlcyBuZWVkZWQgZHVyaW5nIHRoZSB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBJbXBsZW1lbnQgYHdpbGxVcGRhdGVgIHRvIGNvbXB1dGUgcHJvcGVydHkgdmFsdWVzIHRoYXQgZGVwZW5kIG9uIG90aGVyXG4gICAgICogcHJvcGVydGllcyBhbmQgYXJlIHVzZWQgaW4gdGhlIHJlc3Qgb2YgdGhlIHVwZGF0ZSBwcm9jZXNzLlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiB3aWxsVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICogICAvLyBvbmx5IG5lZWQgdG8gY2hlY2sgY2hhbmdlZCBwcm9wZXJ0aWVzIGZvciBhbiBleHBlbnNpdmUgY29tcHV0YXRpb24uXG4gICAgICogICBpZiAoY2hhbmdlZFByb3BlcnRpZXMuaGFzKCdmaXJzdE5hbWUnKSB8fCBjaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2xhc3ROYW1lJykpIHtcbiAgICAgKiAgICAgdGhpcy5zaGEgPSBjb21wdXRlU0hBKGAke3RoaXMuZmlyc3ROYW1lfSAke3RoaXMubGFzdE5hbWV9YCk7XG4gICAgICogICB9XG4gICAgICogfVxuICAgICAqXG4gICAgICogcmVuZGVyKCkge1xuICAgICAqICAgcmV0dXJuIGh0bWxgU0hBOiAke3RoaXMuc2hhfWA7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICB3aWxsVXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllcykgeyB9XG4gICAgLy8gTm90ZSwgdGhpcyBpcyBhbiBvdmVycmlkZSBwb2ludCBmb3IgcG9seWZpbGwtc3VwcG9ydC5cbiAgICAvLyBAaW50ZXJuYWxcbiAgICBfJGRpZFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX19jb250cm9sbGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKGMpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gYy5ob3N0VXBkYXRlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoYyk7IH0pO1xuICAgICAgICBpZiAoIXRoaXMuaGFzVXBkYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5oYXNVcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICBpZiAoREVWX01PREUgJiZcbiAgICAgICAgICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nICYmXG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmVuYWJsZWRXYXJuaW5ncy5pbmRleE9mKCdjaGFuZ2UtaW4tdXBkYXRlJykgPj0gMCkge1xuICAgICAgICAgICAgaXNzdWVXYXJuaW5nKCdjaGFuZ2UtaW4tdXBkYXRlJywgYEVsZW1lbnQgJHt0aGlzLmxvY2FsTmFtZX0gc2NoZWR1bGVkIGFuIHVwZGF0ZSBgICtcbiAgICAgICAgICAgICAgICBgKGdlbmVyYWxseSBiZWNhdXNlIGEgcHJvcGVydHkgd2FzIHNldCkgYCArXG4gICAgICAgICAgICAgICAgYGFmdGVyIGFuIHVwZGF0ZSBjb21wbGV0ZWQsIGNhdXNpbmcgYSBuZXcgdXBkYXRlIHRvIGJlIHNjaGVkdWxlZC4gYCArXG4gICAgICAgICAgICAgICAgYFRoaXMgaXMgaW5lZmZpY2llbnQgYW5kIHNob3VsZCBiZSBhdm9pZGVkIHVubGVzcyB0aGUgbmV4dCB1cGRhdGUgYCArXG4gICAgICAgICAgICAgICAgYGNhbiBvbmx5IGJlIHNjaGVkdWxlZCBhcyBhIHNpZGUgZWZmZWN0IG9mIHRoZSBwcmV2aW91cyB1cGRhdGUuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX19tYXJrVXBkYXRlZCgpIHtcbiAgICAgICAgdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGVsZW1lbnQgaGFzIGNvbXBsZXRlZCB1cGRhdGluZy5cbiAgICAgKiBUaGUgUHJvbWlzZSB2YWx1ZSBpcyBhIGJvb2xlYW4gdGhhdCBpcyBgdHJ1ZWAgaWYgdGhlIGVsZW1lbnQgY29tcGxldGVkIHRoZVxuICAgICAqIHVwZGF0ZSB3aXRob3V0IHRyaWdnZXJpbmcgYW5vdGhlciB1cGRhdGUuIFRoZSBQcm9taXNlIHJlc3VsdCBpcyBgZmFsc2VgIGlmXG4gICAgICogYSBwcm9wZXJ0eSB3YXMgc2V0IGluc2lkZSBgdXBkYXRlZCgpYC4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGFuXG4gICAgICogZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHRoZSB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBUbyBhd2FpdCBhZGRpdGlvbmFsIGFzeW5jaHJvbm91cyB3b3JrLCBvdmVycmlkZSB0aGUgYGdldFVwZGF0ZUNvbXBsZXRlYFxuICAgICAqIG1ldGhvZC4gRm9yIGV4YW1wbGUsIGl0IGlzIHNvbWV0aW1lcyB1c2VmdWwgdG8gYXdhaXQgYSByZW5kZXJlZCBlbGVtZW50XG4gICAgICogYmVmb3JlIGZ1bGZpbGxpbmcgdGhpcyBQcm9taXNlLiBUbyBkbyB0aGlzLCBmaXJzdCBhd2FpdFxuICAgICAqIGBzdXBlci5nZXRVcGRhdGVDb21wbGV0ZSgpYCwgdGhlbiBhbnkgc3Vic2VxdWVudCBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gQSBwcm9taXNlIG9mIGEgYm9vbGVhbiB0aGF0IHJlc29sdmVzIHRvIHRydWUgaWYgdGhlIHVwZGF0ZSBjb21wbGV0ZWRcbiAgICAgKiAgICAgd2l0aG91dCB0cmlnZ2VyaW5nIGFub3RoZXIgdXBkYXRlLlxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgZ2V0IHVwZGF0ZUNvbXBsZXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRVcGRhdGVDb21wbGV0ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSBwb2ludCBmb3IgdGhlIGB1cGRhdGVDb21wbGV0ZWAgcHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEl0IGlzIG5vdCBzYWZlIHRvIG92ZXJyaWRlIHRoZSBgdXBkYXRlQ29tcGxldGVgIGdldHRlciBkaXJlY3RseSBkdWUgdG8gYVxuICAgICAqIGxpbWl0YXRpb24gaW4gVHlwZVNjcmlwdCB3aGljaCBtZWFucyBpdCBpcyBub3QgcG9zc2libGUgdG8gY2FsbCBhXG4gICAgICogc3VwZXJjbGFzcyBnZXR0ZXIgKGUuZy4gYHN1cGVyLnVwZGF0ZUNvbXBsZXRlLnRoZW4oLi4uKWApIHdoZW4gdGhlIHRhcmdldFxuICAgICAqIGxhbmd1YWdlIGlzIEVTNSAoaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8zMzgpLlxuICAgICAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBvdmVycmlkZGVuIGluc3RlYWQuIEZvciBleGFtcGxlOlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICAgKiAgIG92ZXJyaWRlIGFzeW5jIGdldFVwZGF0ZUNvbXBsZXRlKCkge1xuICAgICAqICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdXBlci5nZXRVcGRhdGVDb21wbGV0ZSgpO1xuICAgICAqICAgICBhd2FpdCB0aGlzLl9teUNoaWxkLnVwZGF0ZUNvbXBsZXRlO1xuICAgICAqICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAqICAgfVxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEByZXR1cm4gQSBwcm9taXNlIG9mIGEgYm9vbGVhbiB0aGF0IHJlc29sdmVzIHRvIHRydWUgaWYgdGhlIHVwZGF0ZSBjb21wbGV0ZWRcbiAgICAgKiAgICAgd2l0aG91dCB0cmlnZ2VyaW5nIGFub3RoZXIgdXBkYXRlLlxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgZ2V0VXBkYXRlQ29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fdXBkYXRlUHJvbWlzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udHJvbHMgd2hldGhlciBvciBub3QgYHVwZGF0ZSgpYCBzaG91bGQgYmUgY2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgcmVxdWVzdHNcbiAgICAgKiBhbiB1cGRhdGUuIEJ5IGRlZmF1bHQsIHRoaXMgbWV0aG9kIGFsd2F5cyByZXR1cm5zIGB0cnVlYCwgYnV0IHRoaXMgY2FuIGJlXG4gICAgICogY3VzdG9taXplZCB0byBjb250cm9sIHdoZW4gdG8gdXBkYXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgc2hvdWxkVXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZWxlbWVudC4gVGhpcyBtZXRob2QgcmVmbGVjdHMgcHJvcGVydHkgdmFsdWVzIHRvIGF0dHJpYnV0ZXMuXG4gICAgICogSXQgY2FuIGJlIG92ZXJyaWRkZW4gdG8gcmVuZGVyIGFuZCBrZWVwIHVwZGF0ZWQgZWxlbWVudCBET00uXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXJcbiAgICAgKiBhbm90aGVyIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3JcbiAgICAgICAgICAgIC8vIGxvb3BzIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcy5mb3JFYWNoKCh2LCBrKSA9PiB0aGlzLl9fcHJvcGVydHlUb0F0dHJpYnV0ZShrLCB0aGlzW2tdLCB2KSk7XG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX21hcmtVcGRhdGVkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbmV2ZXIgdGhlIGVsZW1lbnQgaXMgdXBkYXRlZC4gSW1wbGVtZW50IHRvIHBlcmZvcm1cbiAgICAgKiBwb3N0LXVwZGF0aW5nIHRhc2tzIHZpYSBET00gQVBJcywgZm9yIGV4YW1wbGUsIGZvY3VzaW5nIGFuIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgdHJpZ2dlciB0aGUgZWxlbWVudCB0byB1cGRhdGVcbiAgICAgKiBhZ2FpbiBhZnRlciB0aGlzIHVwZGF0ZSBjeWNsZSBjb21wbGV0ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICB1cGRhdGVkKF9jaGFuZ2VkUHJvcGVydGllcykgeyB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBlbGVtZW50IGlzIGZpcnN0IHVwZGF0ZWQuIEltcGxlbWVudCB0byBwZXJmb3JtIG9uZSB0aW1lXG4gICAgICogd29yayBvbiB0aGUgZWxlbWVudCBhZnRlciB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGZpcnN0VXBkYXRlZCgpIHtcbiAgICAgKiAgIHRoaXMucmVuZGVyUm9vdC5nZXRFbGVtZW50QnlJZCgnbXktdGV4dC1hcmVhJykuZm9jdXMoKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgdHJpZ2dlciB0aGUgZWxlbWVudCB0byB1cGRhdGVcbiAgICAgKiBhZ2FpbiBhZnRlciB0aGlzIHVwZGF0ZSBjeWNsZSBjb21wbGV0ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBmaXJzdFVwZGF0ZWQoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7IH1cbn1cbl9kID0gZmluYWxpemVkO1xuLyoqXG4gKiBNYXJrcyBjbGFzcyBhcyBoYXZpbmcgZmluaXNoZWQgY3JlYXRpbmcgcHJvcGVydGllcy5cbiAqL1xuUmVhY3RpdmVFbGVtZW50W19kXSA9IHRydWU7XG4vKipcbiAqIE1lbW9pemVkIGxpc3Qgb2YgYWxsIGVsZW1lbnQgcHJvcGVydGllcywgaW5jbHVkaW5nIGFueSBzdXBlcmNsYXNzIHByb3BlcnRpZXMuXG4gKiBDcmVhdGVkIGxhemlseSBvbiB1c2VyIHN1YmNsYXNzZXMgd2hlbiBmaW5hbGl6aW5nIHRoZSBjbGFzcy5cbiAqIEBub2NvbGxhcHNlXG4gKiBAY2F0ZWdvcnkgcHJvcGVydGllc1xuICovXG5SZWFjdGl2ZUVsZW1lbnQuZWxlbWVudFByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4vKipcbiAqIE1lbW9pemVkIGxpc3Qgb2YgYWxsIGVsZW1lbnQgc3R5bGVzLlxuICogQ3JlYXRlZCBsYXppbHkgb24gdXNlciBzdWJjbGFzc2VzIHdoZW4gZmluYWxpemluZyB0aGUgY2xhc3MuXG4gKiBAbm9jb2xsYXBzZVxuICogQGNhdGVnb3J5IHN0eWxlc1xuICovXG5SZWFjdGl2ZUVsZW1lbnQuZWxlbWVudFN0eWxlcyA9IFtdO1xuLyoqXG4gKiBPcHRpb25zIHVzZWQgd2hlbiBjYWxsaW5nIGBhdHRhY2hTaGFkb3dgLiBTZXQgdGhpcyBwcm9wZXJ0eSB0byBjdXN0b21pemVcbiAqIHRoZSBvcHRpb25zIGZvciB0aGUgc2hhZG93Um9vdDsgZm9yIGV4YW1wbGUsIHRvIGNyZWF0ZSBhIGNsb3NlZFxuICogc2hhZG93Um9vdDogYHttb2RlOiAnY2xvc2VkJ31gLlxuICpcbiAqIE5vdGUsIHRoZXNlIG9wdGlvbnMgYXJlIHVzZWQgaW4gYGNyZWF0ZVJlbmRlclJvb3RgLiBJZiB0aGlzIG1ldGhvZFxuICogaXMgY3VzdG9taXplZCwgb3B0aW9ucyBzaG91bGQgYmUgcmVzcGVjdGVkIGlmIHBvc3NpYmxlLlxuICogQG5vY29sbGFwc2VcbiAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAqL1xuUmVhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3RPcHRpb25zID0geyBtb2RlOiAnb3BlbicgfTtcbi8vIEFwcGx5IHBvbHlmaWxscyBpZiBhdmFpbGFibGVcbnBvbHlmaWxsU3VwcG9ydCA9PT0gbnVsbCB8fCBwb2x5ZmlsbFN1cHBvcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBvbHlmaWxsU3VwcG9ydCh7IFJlYWN0aXZlRWxlbWVudCB9KTtcbi8vIERldiBtb2RlIHdhcm5pbmdzLi4uXG5pZiAoREVWX01PREUpIHtcbiAgICAvLyBEZWZhdWx0IHdhcm5pbmcgc2V0LlxuICAgIFJlYWN0aXZlRWxlbWVudC5lbmFibGVkV2FybmluZ3MgPSBbJ2NoYW5nZS1pbi11cGRhdGUnXTtcbiAgICBjb25zdCBlbnN1cmVPd25XYXJuaW5ncyA9IGZ1bmN0aW9uIChjdG9yKSB7XG4gICAgICAgIGlmICghY3Rvci5oYXNPd25Qcm9wZXJ0eShKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdlbmFibGVkV2FybmluZ3MnLCBjdG9yKSkpIHtcbiAgICAgICAgICAgIGN0b3IuZW5hYmxlZFdhcm5pbmdzID0gY3Rvci5lbmFibGVkV2FybmluZ3Muc2xpY2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVhY3RpdmVFbGVtZW50LmVuYWJsZVdhcm5pbmcgPSBmdW5jdGlvbiAod2FybmluZykge1xuICAgICAgICBlbnN1cmVPd25XYXJuaW5ncyh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlZFdhcm5pbmdzLmluZGV4T2Yod2FybmluZykgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZWRXYXJuaW5ncy5wdXNoKHdhcm5pbmcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZWFjdGl2ZUVsZW1lbnQuZGlzYWJsZVdhcm5pbmcgPSBmdW5jdGlvbiAod2FybmluZykge1xuICAgICAgICBlbnN1cmVPd25XYXJuaW5ncyh0aGlzKTtcbiAgICAgICAgY29uc3QgaSA9IHRoaXMuZW5hYmxlZFdhcm5pbmdzLmluZGV4T2Yod2FybmluZyk7XG4gICAgICAgIGlmIChpID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZFdhcm5pbmdzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIFJlYWN0aXZlRWxlbWVudCB1c2FnZS5cbigoX2MgPSBnbG9iYWxUaGlzLnJlYWN0aXZlRWxlbWVudFZlcnNpb25zKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAoZ2xvYmFsVGhpcy5yZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucyA9IFtdKSkucHVzaCgnMS4zLjEnKTtcbmlmIChERVZfTU9ERSAmJiBnbG9iYWxUaGlzLnJlYWN0aXZlRWxlbWVudFZlcnNpb25zLmxlbmd0aCA+IDEpIHtcbiAgICBpc3N1ZVdhcm5pbmcoJ211bHRpcGxlLXZlcnNpb25zJywgYE11bHRpcGxlIHZlcnNpb25zIG9mIExpdCBsb2FkZWQuIExvYWRpbmcgbXVsdGlwbGUgdmVyc2lvbnMgYCArXG4gICAgICAgIGBpcyBub3QgcmVjb21tZW5kZWQuYCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdGl2ZS1lbGVtZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIF9hLCBfYiwgX2M7XG4vKipcbiAqIFRoZSBtYWluIExpdEVsZW1lbnQgbW9kdWxlLCB3aGljaCBkZWZpbmVzIHRoZSB7QGxpbmtjb2RlIExpdEVsZW1lbnR9IGJhc2VcbiAqIGNsYXNzIGFuZCByZWxhdGVkIEFQSXMuXG4gKlxuICogIExpdEVsZW1lbnQgY29tcG9uZW50cyBjYW4gZGVmaW5lIGEgdGVtcGxhdGUgYW5kIGEgc2V0IG9mIG9ic2VydmVkXG4gKiBwcm9wZXJ0aWVzLiBDaGFuZ2luZyBhbiBvYnNlcnZlZCBwcm9wZXJ0eSB0cmlnZ2VycyBhIHJlLXJlbmRlciBvZiB0aGVcbiAqIGVsZW1lbnQuXG4gKlxuICogIEltcG9ydCB7QGxpbmtjb2RlIExpdEVsZW1lbnR9IGFuZCB7QGxpbmtjb2RlIGh0bWx9IGZyb20gdGhpcyBtb2R1bGUgdG9cbiAqIGNyZWF0ZSBhIGNvbXBvbmVudDpcbiAqXG4gKiAgYGBganNcbiAqIGltcG9ydCB7TGl0RWxlbWVudCwgaHRtbH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuICpcbiAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICpcbiAqICAgLy8gRGVjbGFyZSBvYnNlcnZlZCBwcm9wZXJ0aWVzXG4gKiAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAqICAgICByZXR1cm4ge1xuICogICAgICAgYWRqZWN0aXZlOiB7fVxuICogICAgIH1cbiAqICAgfVxuICpcbiAqICAgY29uc3RydWN0b3IoKSB7XG4gKiAgICAgdGhpcy5hZGplY3RpdmUgPSAnYXdlc29tZSc7XG4gKiAgIH1cbiAqXG4gKiAgIC8vIERlZmluZSB0aGUgZWxlbWVudCdzIHRlbXBsYXRlXG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGA8cD55b3VyICR7YWRqZWN0aXZlfSB0ZW1wbGF0ZSBoZXJlPC9wPmA7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ215LWVsZW1lbnQnLCBNeUVsZW1lbnQpO1xuICogYGBgXG4gKlxuICogYExpdEVsZW1lbnRgIGV4dGVuZHMge0BsaW5rY29kZSBSZWFjdGl2ZUVsZW1lbnR9IGFuZCBhZGRzIGxpdC1odG1sXG4gKiB0ZW1wbGF0aW5nLiBUaGUgYFJlYWN0aXZlRWxlbWVudGAgY2xhc3MgaXMgcHJvdmlkZWQgZm9yIHVzZXJzIHRoYXQgd2FudCB0b1xuICogYnVpbGQgdGhlaXIgb3duIGN1c3RvbSBlbGVtZW50IGJhc2UgY2xhc3NlcyB0aGF0IGRvbid0IHVzZSBsaXQtaHRtbC5cbiAqXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqL1xuaW1wb3J0IHsgUmVhY3RpdmVFbGVtZW50IH0gZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50JztcbmltcG9ydCB7IHJlbmRlciwgbm9DaGFuZ2UgfSBmcm9tICdsaXQtaHRtbCc7XG5leHBvcnQgKiBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQnO1xuZXhwb3J0ICogZnJvbSAnbGl0LWh0bWwnO1xuLy8gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV4cG9ydCBSZWFjdGl2ZUVsZW1lbnQgYXMgVXBkYXRpbmdFbGVtZW50LiBOb3RlLFxuLy8gSUUgdHJhbnNwaWxhdGlvbiByZXF1aXJlcyBleHBvcnRpbmcgbGlrZSB0aGlzLlxuZXhwb3J0IGNvbnN0IFVwZGF0aW5nRWxlbWVudCA9IFJlYWN0aXZlRWxlbWVudDtcbmNvbnN0IERFVl9NT0RFID0gdHJ1ZTtcbmxldCBpc3N1ZVdhcm5pbmc7XG5pZiAoREVWX01PREUpIHtcbiAgICAvLyBFbnN1cmUgd2FybmluZ3MgYXJlIGlzc3VlZCBvbmx5IDF4LCBldmVuIGlmIG11bHRpcGxlIHZlcnNpb25zIG9mIExpdFxuICAgIC8vIGFyZSBsb2FkZWQuXG4gICAgY29uc3QgaXNzdWVkV2FybmluZ3MgPSAoKF9hID0gZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKGdsb2JhbFRoaXMubGl0SXNzdWVkV2FybmluZ3MgPSBuZXcgU2V0KCkpKTtcbiAgICAvLyBJc3N1ZSBhIHdhcm5pbmcsIGlmIHdlIGhhdmVuJ3QgYWxyZWFkeS5cbiAgICBpc3N1ZVdhcm5pbmcgPSAoY29kZSwgd2FybmluZykgPT4ge1xuICAgICAgICB3YXJuaW5nICs9IGAgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvJHtjb2RlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICBpZiAoIWlzc3VlZFdhcm5pbmdzLmhhcyh3YXJuaW5nKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKHdhcm5pbmcpO1xuICAgICAgICAgICAgaXNzdWVkV2FybmluZ3MuYWRkKHdhcm5pbmcpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8qKlxuICogQmFzZSBlbGVtZW50IGNsYXNzIHRoYXQgbWFuYWdlcyBlbGVtZW50IHByb3BlcnRpZXMgYW5kIGF0dHJpYnV0ZXMsIGFuZFxuICogcmVuZGVycyBhIGxpdC1odG1sIHRlbXBsYXRlLlxuICpcbiAqIFRvIGRlZmluZSBhIGNvbXBvbmVudCwgc3ViY2xhc3MgYExpdEVsZW1lbnRgIGFuZCBpbXBsZW1lbnQgYVxuICogYHJlbmRlcmAgbWV0aG9kIHRvIHByb3ZpZGUgdGhlIGNvbXBvbmVudCdzIHRlbXBsYXRlLiBEZWZpbmUgcHJvcGVydGllc1xuICogdXNpbmcgdGhlIHtAbGlua2NvZGUgTGl0RWxlbWVudC5wcm9wZXJ0aWVzIHByb3BlcnRpZXN9IHByb3BlcnR5IG9yIHRoZVxuICoge0BsaW5rY29kZSBwcm9wZXJ0eX0gZGVjb3JhdG9yLlxuICovXG5leHBvcnQgY2xhc3MgTGl0RWxlbWVudCBleHRlbmRzIFJlYWN0aXZlRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlbmRlck9wdGlvbnMgPSB7IGhvc3Q6IHRoaXMgfTtcbiAgICAgICAgdGhpcy5fX2NoaWxkUGFydCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICAgICAqL1xuICAgIGNyZWF0ZVJlbmRlclJvb3QoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIF9iO1xuICAgICAgICBjb25zdCByZW5kZXJSb290ID0gc3VwZXIuY3JlYXRlUmVuZGVyUm9vdCgpO1xuICAgICAgICAvLyBXaGVuIGFkb3B0ZWRTdHlsZVNoZWV0cyBhcmUgc2hpbW1lZCwgdGhleSBhcmUgaW5zZXJ0ZWQgaW50byB0aGVcbiAgICAgICAgLy8gc2hhZG93Um9vdCBieSBjcmVhdGVSZW5kZXJSb290LiBBZGp1c3QgdGhlIHJlbmRlckJlZm9yZSBub2RlIHNvIHRoYXRcbiAgICAgICAgLy8gYW55IHN0eWxlcyBpbiBMaXQgY29udGVudCByZW5kZXIgYmVmb3JlIGFkb3B0ZWRTdHlsZVNoZWV0cy4gVGhpcyBpc1xuICAgICAgICAvLyBpbXBvcnRhbnQgc28gdGhhdCBhZG9wdGVkU3R5bGVTaGVldHMgaGF2ZSBwcmVjZWRlbmNlIG92ZXIgc3R5bGVzIGluXG4gICAgICAgIC8vIHRoZSBzaGFkb3dSb290LlxuICAgICAgICAoX2EgPSAoX2IgPSB0aGlzLnJlbmRlck9wdGlvbnMpLnJlbmRlckJlZm9yZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKF9iLnJlbmRlckJlZm9yZSA9IHJlbmRlclJvb3QuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiByZW5kZXJSb290O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBlbGVtZW50LiBUaGlzIG1ldGhvZCByZWZsZWN0cyBwcm9wZXJ0eSB2YWx1ZXMgdG8gYXR0cmlidXRlc1xuICAgICAqIGFuZCBjYWxscyBgcmVuZGVyYCB0byByZW5kZXIgRE9NIHZpYSBsaXQtaHRtbC4gU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZVxuICAgICAqIHRoaXMgbWV0aG9kIHdpbGwgKm5vdCogdHJpZ2dlciBhbm90aGVyIHVwZGF0ZS5cbiAgICAgKiBAcGFyYW0gY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgICAvLyBTZXR0aW5nIHByb3BlcnRpZXMgaW4gYHJlbmRlcmAgc2hvdWxkIG5vdCB0cmlnZ2VyIGFuIHVwZGF0ZS4gU2luY2VcbiAgICAgICAgLy8gdXBkYXRlcyBhcmUgYWxsb3dlZCBhZnRlciBzdXBlci51cGRhdGUsIGl0J3MgaW1wb3J0YW50IHRvIGNhbGwgYHJlbmRlcmBcbiAgICAgICAgLy8gYmVmb3JlIHRoYXQuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyT3B0aW9ucy5pc0Nvbm5lY3RlZCA9IHRoaXMuaXNDb25uZWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgdGhpcy5fX2NoaWxkUGFydCA9IHJlbmRlcih2YWx1ZSwgdGhpcy5yZW5kZXJSb290LCB0aGlzLnJlbmRlck9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBhZGRlZCB0byB0aGUgZG9jdW1lbnQncyBET00uXG4gICAgICpcbiAgICAgKiBJbiBgY29ubmVjdGVkQ2FsbGJhY2soKWAgeW91IHNob3VsZCBzZXR1cCB0YXNrcyB0aGF0IHNob3VsZCBvbmx5IG9jY3VyIHdoZW5cbiAgICAgKiB0aGUgZWxlbWVudCBpcyBjb25uZWN0ZWQgdG8gdGhlIGRvY3VtZW50LiBUaGUgbW9zdCBjb21tb24gb2YgdGhlc2UgaXNcbiAgICAgKiBhZGRpbmcgZXZlbnQgbGlzdGVuZXJzIHRvIG5vZGVzIGV4dGVybmFsIHRvIHRoZSBlbGVtZW50LCBsaWtlIGEga2V5ZG93blxuICAgICAqIGV2ZW50IGhhbmRsZXIgYWRkZWQgdG8gdGhlIHdpbmRvdy5cbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICogICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAqICAgYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUtleWRvd24pO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIFR5cGljYWxseSwgYW55dGhpbmcgZG9uZSBpbiBgY29ubmVjdGVkQ2FsbGJhY2soKWAgc2hvdWxkIGJlIHVuZG9uZSB3aGVuIHRoZVxuICAgICAqIGVsZW1lbnQgaXMgZGlzY29ubmVjdGVkLCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2soKWAuXG4gICAgICpcbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NoaWxkUGFydCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldENvbm5lY3RlZCh0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBkb2N1bWVudCdzIERPTS5cbiAgICAgKlxuICAgICAqIFRoaXMgY2FsbGJhY2sgaXMgdGhlIG1haW4gc2lnbmFsIHRvIHRoZSBlbGVtZW50IHRoYXQgaXQgbWF5IG5vIGxvbmdlciBiZVxuICAgICAqIHVzZWQuIGBkaXNjb25uZWN0ZWRDYWxsYmFjaygpYCBzaG91bGQgZW5zdXJlIHRoYXQgbm90aGluZyBpcyBob2xkaW5nIGFcbiAgICAgKiByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgKHN1Y2ggYXMgZXZlbnQgbGlzdGVuZXJzIGFkZGVkIHRvIG5vZGVzIGV4dGVybmFsXG4gICAgICogdG8gdGhlIGVsZW1lbnQpLCBzbyB0aGF0IGl0IGlzIGZyZWUgdG8gYmUgZ2FyYmFnZSBjb2xsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAqICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgKiAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlS2V5ZG93bik7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQW4gZWxlbWVudCBtYXkgYmUgcmUtY29ubmVjdGVkIGFmdGVyIGJlaW5nIGRpc2Nvbm5lY3RlZC5cbiAgICAgKlxuICAgICAqIEBjYXRlZ29yeSBsaWZlY3ljbGVcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY2hpbGRQYXJ0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0Q29ubmVjdGVkKGZhbHNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBlYWNoIHVwZGF0ZSB0byBwZXJmb3JtIHJlbmRlcmluZyB0YXNrcy4gVGhpcyBtZXRob2QgbWF5IHJldHVyblxuICAgICAqIGFueSB2YWx1ZSByZW5kZXJhYmxlIGJ5IGxpdC1odG1sJ3MgYENoaWxkUGFydGAgLSB0eXBpY2FsbHkgYVxuICAgICAqIGBUZW1wbGF0ZVJlc3VsdGAuIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyXG4gICAgICogdGhlIGVsZW1lbnQgdG8gdXBkYXRlLlxuICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBub0NoYW5nZTtcbiAgICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGlzIGNsYXNzIGlzIG1hcmtlZCBhcyBgZmluYWxpemVkYCBhcyBhbiBvcHRpbWl6YXRpb24gZW5zdXJpbmdcbiAqIGl0IHdpbGwgbm90IG5lZWRsZXNzbHkgdHJ5IHRvIGBmaW5hbGl6ZWAuXG4gKlxuICogTm90ZSB0aGlzIHByb3BlcnR5IG5hbWUgaXMgYSBzdHJpbmcgdG8gcHJldmVudCBicmVha2luZyBDbG9zdXJlIEpTIENvbXBpbGVyXG4gKiBvcHRpbWl6YXRpb25zLiBTZWUgQGxpdC9yZWFjdGl2ZS1lbGVtZW50IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICovXG5MaXRFbGVtZW50WydmaW5hbGl6ZWQnXSA9IHRydWU7XG4vLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuTGl0RWxlbWVudFsnXyRsaXRFbGVtZW50JCddID0gdHJ1ZTtcbi8vIEluc3RhbGwgaHlkcmF0aW9uIGlmIGF2YWlsYWJsZVxuKF9iID0gZ2xvYmFsVGhpcy5saXRFbGVtZW50SHlkcmF0ZVN1cHBvcnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKGdsb2JhbFRoaXMsIHsgTGl0RWxlbWVudCB9KTtcbi8vIEFwcGx5IHBvbHlmaWxscyBpZiBhdmFpbGFibGVcbmNvbnN0IHBvbHlmaWxsU3VwcG9ydCA9IERFVl9NT0RFXG4gICAgPyBnbG9iYWxUaGlzLmxpdEVsZW1lbnRQb2x5ZmlsbFN1cHBvcnREZXZNb2RlXG4gICAgOiBnbG9iYWxUaGlzLmxpdEVsZW1lbnRQb2x5ZmlsbFN1cHBvcnQ7XG5wb2x5ZmlsbFN1cHBvcnQgPT09IG51bGwgfHwgcG9seWZpbGxTdXBwb3J0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb2x5ZmlsbFN1cHBvcnQoeyBMaXRFbGVtZW50IH0pO1xuLy8gREVWIG1vZGUgd2FybmluZ3NcbmlmIChERVZfTU9ERSkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbiAgICAvLyBOb3RlLCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIGNsb3N1cmUgY29tcGlsYXRpb24sIHRoaXMgYWNjZXNzXG4gICAgLy8gbmVlZHMgdG8gYmUgYXMgYSBzdHJpbmcgcHJvcGVydHkgaW5kZXguXG4gICAgTGl0RWxlbWVudFsnZmluYWxpemUnXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZmluYWxpemVkID0gUmVhY3RpdmVFbGVtZW50LmZpbmFsaXplLmNhbGwodGhpcyk7XG4gICAgICAgIGlmICghZmluYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd2FyblJlbW92ZWRPclJlbmFtZWQgPSAob2JqLCBuYW1lLCByZW5hbWVkID0gZmFsc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdG9yTmFtZSA9ICh0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nID8gb2JqIDogb2JqLmNvbnN0cnVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAubmFtZTtcbiAgICAgICAgICAgICAgICBpc3N1ZVdhcm5pbmcocmVuYW1lZCA/ICdyZW5hbWVkLWFwaScgOiAncmVtb3ZlZC1hcGknLCBgXFxgJHtuYW1lfVxcYCBpcyBpbXBsZW1lbnRlZCBvbiBjbGFzcyAke2N0b3JOYW1lfS4gSXQgYCArXG4gICAgICAgICAgICAgICAgICAgIGBoYXMgYmVlbiAke3JlbmFtZWQgPyAncmVuYW1lZCcgOiAncmVtb3ZlZCd9IGAgK1xuICAgICAgICAgICAgICAgICAgICBgaW4gdGhpcyB2ZXJzaW9uIG9mIExpdEVsZW1lbnQuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHdhcm5SZW1vdmVkT3JSZW5hbWVkKHRoaXMsICdyZW5kZXInKTtcbiAgICAgICAgd2FyblJlbW92ZWRPclJlbmFtZWQodGhpcywgJ2dldFN0eWxlcycsIHRydWUpO1xuICAgICAgICB3YXJuUmVtb3ZlZE9yUmVuYW1lZCh0aGlzLnByb3RvdHlwZSwgJ2Fkb3B0U3R5bGVzJyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG59XG4vKipcbiAqIEVORCBVU0VSUyBTSE9VTEQgTk9UIFJFTFkgT04gVEhJUyBPQkpFQ1QuXG4gKlxuICogUHJpdmF0ZSBleHBvcnRzIGZvciB1c2UgYnkgb3RoZXIgTGl0IHBhY2thZ2VzLCBub3QgaW50ZW5kZWQgZm9yIHVzZSBieVxuICogZXh0ZXJuYWwgdXNlcnMuXG4gKlxuICogV2UgY3VycmVudGx5IGRvIG5vdCBtYWtlIGEgbWFuZ2xlZCByb2xsdXAgYnVpbGQgb2YgdGhlIGxpdC1zc3IgY29kZS4gSW4gb3JkZXJcbiAqIHRvIGtlZXAgYSBudW1iZXIgb2YgKG90aGVyd2lzZSBwcml2YXRlKSB0b3AtbGV2ZWwgZXhwb3J0cyAgbWFuZ2xlZCBpbiB0aGVcbiAqIGNsaWVudCBzaWRlIGNvZGUsIHdlIGV4cG9ydCBhIF8kTEUgb2JqZWN0IGNvbnRhaW5pbmcgdGhvc2UgbWVtYmVycyAob3JcbiAqIGhlbHBlciBtZXRob2RzIGZvciBhY2Nlc3NpbmcgcHJpdmF0ZSBmaWVsZHMgb2YgdGhvc2UgbWVtYmVycyksIGFuZCB0aGVuXG4gKiByZS1leHBvcnQgdGhlbSBmb3IgdXNlIGluIGxpdC1zc3IuIFRoaXMga2VlcHMgbGl0LXNzciBhZ25vc3RpYyB0byB3aGV0aGVyIHRoZVxuICogY2xpZW50LXNpZGUgY29kZSBpcyBiZWluZyB1c2VkIGluIGBkZXZgIG1vZGUgb3IgYHByb2RgIG1vZGUuXG4gKlxuICogVGhpcyBoYXMgYSB1bmlxdWUgbmFtZSwgdG8gZGlzYW1iaWd1YXRlIGl0IGZyb20gcHJpdmF0ZSBleHBvcnRzIGluXG4gKiBsaXQtaHRtbCwgc2luY2UgdGhpcyBtb2R1bGUgcmUtZXhwb3J0cyBhbGwgb2YgbGl0LWh0bWwuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IF8kTEUgPSB7XG4gICAgXyRhdHRyaWJ1dGVUb1Byb3BlcnR5OiAoZWwsIG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBlbC5fJGF0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgIH0sXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgXyRjaGFuZ2VkUHJvcGVydGllczogKGVsKSA9PiBlbC5fJGNoYW5nZWRQcm9wZXJ0aWVzLFxufTtcbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgTGl0RWxlbWVudCB1c2FnZS5cbigoX2MgPSBnbG9iYWxUaGlzLmxpdEVsZW1lbnRWZXJzaW9ucykgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogKGdsb2JhbFRoaXMubGl0RWxlbWVudFZlcnNpb25zID0gW10pKS5wdXNoKCczLjIuMCcpO1xuaWYgKERFVl9NT0RFICYmIGdsb2JhbFRoaXMubGl0RWxlbWVudFZlcnNpb25zLmxlbmd0aCA+IDEpIHtcbiAgICBpc3N1ZVdhcm5pbmcoJ211bHRpcGxlLXZlcnNpb25zJywgYE11bHRpcGxlIHZlcnNpb25zIG9mIExpdCBsb2FkZWQuIExvYWRpbmcgbXVsdGlwbGUgdmVyc2lvbnMgYCArXG4gICAgICAgIGBpcyBub3QgcmVjb21tZW5kZWQuYCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtZWxlbWVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmltcG9ydCB7IGlzU2luZ2xlRXhwcmVzc2lvbiB9IGZyb20gJy4vZGlyZWN0aXZlLWhlbHBlcnMuanMnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBQYXJ0VHlwZSB9IGZyb20gJy4vZGlyZWN0aXZlLmpzJztcbmV4cG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlLmpzJztcbmNvbnN0IERFVl9NT0RFID0gdHJ1ZTtcbi8qKlxuICogUmVjdXJzaXZlbHkgd2Fsa3MgZG93biB0aGUgdHJlZSBvZiBQYXJ0cy9UZW1wbGF0ZUluc3RhbmNlcy9EaXJlY3RpdmVzIHRvIHNldFxuICogdGhlIGNvbm5lY3RlZCBzdGF0ZSBvZiBkaXJlY3RpdmVzIGFuZCBydW4gYGRpc2Nvbm5lY3RlZGAvIGByZWNvbm5lY3RlZGBcbiAqIGNhbGxiYWNrcy5cbiAqXG4gKiBAcmV0dXJuIFRydWUgaWYgdGhlcmUgd2VyZSBjaGlsZHJlbiB0byBkaXNjb25uZWN0OyBmYWxzZSBvdGhlcndpc2VcbiAqL1xuY29uc3Qgbm90aWZ5Q2hpbGRyZW5Db25uZWN0ZWRDaGFuZ2VkID0gKHBhcmVudCwgaXNDb25uZWN0ZWQpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50Ll8kZGlzY29ubmVjdGFibGVDaGlsZHJlbjtcbiAgICBpZiAoY2hpbGRyZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgb2JqIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgIC8vIFRoZSBleGlzdGVuY2Ugb2YgYF8kbm90aWZ5RGlyZWN0aXZlQ29ubmVjdGlvbkNoYW5nZWRgIGlzIHVzZWQgYXMgYSBcImJyYW5kXCIgdG9cbiAgICAgICAgLy8gZGlzYW1iaWd1YXRlIEFzeW5jRGlyZWN0aXZlcyBmcm9tIG90aGVyIERpc2Nvbm5lY3RhYmxlQ2hpbGRyZW5cbiAgICAgICAgLy8gKGFzIG9wcG9zZWQgdG8gdXNpbmcgYW4gaW5zdGFuY2VvZiBjaGVjayB0byBrbm93IHdoZW4gdG8gY2FsbCBpdCk7IHRoZVxuICAgICAgICAvLyByZWR1bmRhbmN5IG9mIFwiRGlyZWN0aXZlXCIgaW4gdGhlIEFQSSBuYW1lIGlzIHRvIGF2b2lkIGNvbmZsaWN0aW5nIHdpdGhcbiAgICAgICAgLy8gYF8kbm90aWZ5Q29ubmVjdGlvbkNoYW5nZWRgLCB3aGljaCBleGlzdHMgYENoaWxkUGFydHNgIHdoaWNoIGFyZSBhbHNvIGluXG4gICAgICAgIC8vIHRoaXMgbGlzdFxuICAgICAgICAvLyBEaXNjb25uZWN0IERpcmVjdGl2ZSAoYW5kIGFueSBuZXN0ZWQgZGlyZWN0aXZlcyBjb250YWluZWQgd2l0aGluKVxuICAgICAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICAoX2IgPSAoX2EgPSBvYmopWydfJG5vdGlmeURpcmVjdGl2ZUNvbm5lY3Rpb25DaGFuZ2VkJ10pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCBpc0Nvbm5lY3RlZCwgZmFsc2UpO1xuICAgICAgICAvLyBEaXNjb25uZWN0IFBhcnQvVGVtcGxhdGVJbnN0YW5jZVxuICAgICAgICBub3RpZnlDaGlsZHJlbkNvbm5lY3RlZENoYW5nZWQob2JqLCBpc0Nvbm5lY3RlZCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbi8qKlxuICogUmVtb3ZlcyB0aGUgZ2l2ZW4gY2hpbGQgZnJvbSBpdHMgcGFyZW50IGxpc3Qgb2YgZGlzY29ubmVjdGFibGUgY2hpbGRyZW4sIGFuZFxuICogaWYgdGhlIHBhcmVudCBsaXN0IGJlY29tZXMgZW1wdHkgYXMgYSByZXN1bHQsIHJlbW92ZXMgdGhlIHBhcmVudCBmcm9tIGl0c1xuICogcGFyZW50LCBhbmQgc28gZm9ydGggdXAgdGhlIHRyZWUgd2hlbiB0aGF0IGNhdXNlcyBzdWJzZXF1ZW50IHBhcmVudCBsaXN0cyB0b1xuICogYmVjb21lIGVtcHR5LlxuICovXG5jb25zdCByZW1vdmVEaXNjb25uZWN0YWJsZUZyb21QYXJlbnQgPSAob2JqKSA9PiB7XG4gICAgbGV0IHBhcmVudCwgY2hpbGRyZW47XG4gICAgZG8ge1xuICAgICAgICBpZiAoKHBhcmVudCA9IG9iai5fJHBhcmVudCkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRyZW4gPSBwYXJlbnQuXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuO1xuICAgICAgICBjaGlsZHJlbi5kZWxldGUob2JqKTtcbiAgICAgICAgb2JqID0gcGFyZW50O1xuICAgIH0gd2hpbGUgKChjaGlsZHJlbiA9PT0gbnVsbCB8fCBjaGlsZHJlbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2hpbGRyZW4uc2l6ZSkgPT09IDApO1xufTtcbmNvbnN0IGFkZERpc2Nvbm5lY3RhYmxlVG9QYXJlbnQgPSAob2JqKSA9PiB7XG4gICAgLy8gQ2xpbWIgdGhlIHBhcmVudCB0cmVlLCBjcmVhdGluZyBhIHNwYXJzZSB0cmVlIG9mIGNoaWxkcmVuIG5lZWRpbmdcbiAgICAvLyBkaXNjb25uZWN0aW9uXG4gICAgZm9yIChsZXQgcGFyZW50OyAocGFyZW50ID0gb2JqLl8kcGFyZW50KTsgb2JqID0gcGFyZW50KSB7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHBhcmVudC5fJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW47XG4gICAgICAgIGlmIChjaGlsZHJlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwYXJlbnQuXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuID0gY2hpbGRyZW4gPSBuZXcgU2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4uaGFzKG9iaikpIHtcbiAgICAgICAgICAgIC8vIE9uY2Ugd2UndmUgcmVhY2hlZCBhIHBhcmVudCB0aGF0IGFscmVhZHkgY29udGFpbnMgdGhpcyBjaGlsZCwgd2VcbiAgICAgICAgICAgIC8vIGNhbiBzaG9ydC1jaXJjdWl0XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjaGlsZHJlbi5hZGQob2JqKTtcbiAgICAgICAgaW5zdGFsbERpc2Nvbm5lY3RBUEkocGFyZW50KTtcbiAgICB9XG59O1xuLyoqXG4gKiBDaGFuZ2VzIHRoZSBwYXJlbnQgcmVmZXJlbmNlIG9mIHRoZSBDaGlsZFBhcnQsIGFuZCB1cGRhdGVzIHRoZSBzcGFyc2UgdHJlZSBvZlxuICogRGlzY29ubmVjdGFibGUgY2hpbGRyZW4gYWNjb3JkaW5nbHkuXG4gKlxuICogTm90ZSwgdGhpcyBtZXRob2Qgd2lsbCBiZSBwYXRjaGVkIG9udG8gQ2hpbGRQYXJ0IGluc3RhbmNlcyBhbmQgY2FsbGVkIGZyb21cbiAqIHRoZSBjb3JlIGNvZGUgd2hlbiBwYXJ0cyBhcmUgbW92ZWQgYmV0d2VlbiBkaWZmZXJlbnQgcGFyZW50cy5cbiAqL1xuZnVuY3Rpb24gcmVwYXJlbnREaXNjb25uZWN0YWJsZXMobmV3UGFyZW50KSB7XG4gICAgaWYgKHRoaXMuXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVtb3ZlRGlzY29ubmVjdGFibGVGcm9tUGFyZW50KHRoaXMpO1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gbmV3UGFyZW50O1xuICAgICAgICBhZGREaXNjb25uZWN0YWJsZVRvUGFyZW50KHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IG5ld1BhcmVudDtcbiAgICB9XG59XG4vKipcbiAqIFNldHMgdGhlIGNvbm5lY3RlZCBzdGF0ZSBvbiBhbnkgZGlyZWN0aXZlcyBjb250YWluZWQgd2l0aGluIHRoZSBjb21taXR0ZWRcbiAqIHZhbHVlIG9mIHRoaXMgcGFydCAoaS5lLiB3aXRoaW4gYSBUZW1wbGF0ZUluc3RhbmNlIG9yIGl0ZXJhYmxlIG9mXG4gKiBDaGlsZFBhcnRzKSBhbmQgcnVucyB0aGVpciBgZGlzY29ubmVjdGVkYC9gcmVjb25uZWN0ZWRgcywgYXMgd2VsbCBhcyB3aXRoaW5cbiAqIGFueSBkaXJlY3RpdmVzIHN0b3JlZCBvbiB0aGUgQ2hpbGRQYXJ0ICh3aGVuIGB2YWx1ZU9ubHlgIGlzIGZhbHNlKS5cbiAqXG4gKiBgaXNDbGVhcmluZ1ZhbHVlYCBzaG91bGQgYmUgcGFzc2VkIGFzIGB0cnVlYCBvbiBhIHRvcC1sZXZlbCBwYXJ0IHRoYXQgaXNcbiAqIGNsZWFyaW5nIGl0c2VsZiwgYW5kIG5vdCBhcyBhIHJlc3VsdCBvZiByZWN1cnNpdmVseSBkaXNjb25uZWN0aW5nIGRpcmVjdGl2ZXNcbiAqIGFzIHBhcnQgb2YgYSBgY2xlYXJgIG9wZXJhdGlvbiBoaWdoZXIgdXAgdGhlIHRyZWUuIFRoaXMgYm90aCBlbnN1cmVzIHRoYXQgYW55XG4gKiBkaXJlY3RpdmUgb24gdGhpcyBDaGlsZFBhcnQgdGhhdCBwcm9kdWNlZCBhIHZhbHVlIHRoYXQgY2F1c2VkIHRoZSBjbGVhclxuICogb3BlcmF0aW9uIGlzIG5vdCBkaXNjb25uZWN0ZWQsIGFuZCBhbHNvIHNlcnZlcyBhcyBhIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvblxuICogdG8gYXZvaWQgbmVlZGxlc3MgYm9va2tlZXBpbmcgd2hlbiBhIHN1YnRyZWUgaXMgZ29pbmcgYXdheTsgd2hlbiBjbGVhcmluZyBhXG4gKiBzdWJ0cmVlLCBvbmx5IHRoZSB0b3AtbW9zdCBwYXJ0IG5lZWQgdG8gcmVtb3ZlIGl0c2VsZiBmcm9tIHRoZSBwYXJlbnQuXG4gKlxuICogYGZyb21QYXJ0SW5kZXhgIGlzIHBhc3NlZCBvbmx5IGluIHRoZSBjYXNlIG9mIGEgcGFydGlhbCBgX2NsZWFyYCBydW5uaW5nIGFzIGFcbiAqIHJlc3VsdCBvZiB0cnVuY2F0aW5nIGFuIGl0ZXJhYmxlLlxuICpcbiAqIE5vdGUsIHRoaXMgbWV0aG9kIHdpbGwgYmUgcGF0Y2hlZCBvbnRvIENoaWxkUGFydCBpbnN0YW5jZXMgYW5kIGNhbGxlZCBmcm9tIHRoZVxuICogY29yZSBjb2RlIHdoZW4gcGFydHMgYXJlIGNsZWFyZWQgb3IgdGhlIGNvbm5lY3Rpb24gc3RhdGUgaXMgY2hhbmdlZCBieSB0aGVcbiAqIHVzZXIuXG4gKi9cbmZ1bmN0aW9uIG5vdGlmeUNoaWxkUGFydENvbm5lY3RlZENoYW5nZWQoaXNDb25uZWN0ZWQsIGlzQ2xlYXJpbmdWYWx1ZSA9IGZhbHNlLCBmcm9tUGFydEluZGV4ID0gMCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW47XG4gICAgaWYgKGNoaWxkcmVuID09PSB1bmRlZmluZWQgfHwgY2hpbGRyZW4uc2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc0NsZWFyaW5nVmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAvLyBJdGVyYWJsZSBjYXNlOiBBbnkgQ2hpbGRQYXJ0cyBjcmVhdGVkIGJ5IHRoZSBpdGVyYWJsZSBzaG91bGQgYmVcbiAgICAgICAgICAgIC8vIGRpc2Nvbm5lY3RlZCBhbmQgcmVtb3ZlZCBmcm9tIHRoaXMgQ2hpbGRQYXJ0J3MgZGlzY29ubmVjdGFibGVcbiAgICAgICAgICAgIC8vIGNoaWxkcmVuIChzdGFydGluZyBhdCBgZnJvbVBhcnRJbmRleGAgaW4gdGhlIGNhc2Ugb2YgdHJ1bmNhdGlvbilcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBmcm9tUGFydEluZGV4OyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBub3RpZnlDaGlsZHJlbkNvbm5lY3RlZENoYW5nZWQodmFsdWVbaV0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZW1vdmVEaXNjb25uZWN0YWJsZUZyb21QYXJlbnQodmFsdWVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIFRlbXBsYXRlSW5zdGFuY2UgY2FzZTogSWYgdGhlIHZhbHVlIGhhcyBkaXNjb25uZWN0YWJsZSBjaGlsZHJlbiAod2lsbFxuICAgICAgICAgICAgLy8gb25seSBiZSBpbiB0aGUgY2FzZSB0aGF0IGl0IGlzIGEgVGVtcGxhdGVJbnN0YW5jZSksIHdlIGRpc2Nvbm5lY3QgaXRcbiAgICAgICAgICAgIC8vIGFuZCByZW1vdmUgaXQgZnJvbSB0aGlzIENoaWxkUGFydCdzIGRpc2Nvbm5lY3RhYmxlIGNoaWxkcmVuXG4gICAgICAgICAgICBub3RpZnlDaGlsZHJlbkNvbm5lY3RlZENoYW5nZWQodmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgIHJlbW92ZURpc2Nvbm5lY3RhYmxlRnJvbVBhcmVudCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5vdGlmeUNoaWxkcmVuQ29ubmVjdGVkQ2hhbmdlZCh0aGlzLCBpc0Nvbm5lY3RlZCk7XG4gICAgfVxufVxuLyoqXG4gKiBQYXRjaGVzIGRpc2Nvbm5lY3Rpb24gQVBJIG9udG8gQ2hpbGRQYXJ0cy5cbiAqL1xuY29uc3QgaW5zdGFsbERpc2Nvbm5lY3RBUEkgPSAob2JqKSA9PiB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICB2YXIgX2MsIF9kO1xuICAgIGlmIChvYmoudHlwZSA9PSBQYXJ0VHlwZS5DSElMRCkge1xuICAgICAgICAoX2EgPSAoX2MgPSBvYmopLl8kbm90aWZ5Q29ubmVjdGlvbkNoYW5nZWQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IChfYy5fJG5vdGlmeUNvbm5lY3Rpb25DaGFuZ2VkID0gbm90aWZ5Q2hpbGRQYXJ0Q29ubmVjdGVkQ2hhbmdlZCk7XG4gICAgICAgIChfYiA9IChfZCA9IG9iaikuXyRyZXBhcmVudERpc2Nvbm5lY3RhYmxlcykgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogKF9kLl8kcmVwYXJlbnREaXNjb25uZWN0YWJsZXMgPSByZXBhcmVudERpc2Nvbm5lY3RhYmxlcyk7XG4gICAgfVxufTtcbi8qKlxuICogQW4gYWJzdHJhY3QgYERpcmVjdGl2ZWAgYmFzZSBjbGFzcyB3aG9zZSBgZGlzY29ubmVjdGVkYCBtZXRob2Qgd2lsbCBiZVxuICogY2FsbGVkIHdoZW4gdGhlIHBhcnQgY29udGFpbmluZyB0aGUgZGlyZWN0aXZlIGlzIGNsZWFyZWQgYXMgYSByZXN1bHQgb2ZcbiAqIHJlLXJlbmRlcmluZywgb3Igd2hlbiB0aGUgdXNlciBjYWxscyBgcGFydC5zZXRDb25uZWN0ZWQoZmFsc2UpYCBvblxuICogYSBwYXJ0IHRoYXQgd2FzIHByZXZpb3VzbHkgcmVuZGVyZWQgY29udGFpbmluZyB0aGUgZGlyZWN0aXZlIChhcyBoYXBwZW5zXG4gKiB3aGVuIGUuZy4gYSBMaXRFbGVtZW50IGRpc2Nvbm5lY3RzIGZyb20gdGhlIERPTSkuXG4gKlxuICogSWYgYHBhcnQuc2V0Q29ubmVjdGVkKHRydWUpYCBpcyBzdWJzZXF1ZW50bHkgY2FsbGVkIG9uIGFcbiAqIGNvbnRhaW5pbmcgcGFydCwgdGhlIGRpcmVjdGl2ZSdzIGByZWNvbm5lY3RlZGAgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIHByaW9yXG4gKiB0byBpdHMgbmV4dCBgdXBkYXRlYC9gcmVuZGVyYCBjYWxsYmFja3MuIFdoZW4gaW1wbGVtZW50aW5nIGBkaXNjb25uZWN0ZWRgLFxuICogYHJlY29ubmVjdGVkYCBzaG91bGQgYWxzbyBiZSBpbXBsZW1lbnRlZCB0byBiZSBjb21wYXRpYmxlIHdpdGggcmVjb25uZWN0aW9uLlxuICpcbiAqIE5vdGUgdGhhdCB1cGRhdGVzIG1heSBvY2N1ciB3aGlsZSB0aGUgZGlyZWN0aXZlIGlzIGRpc2Nvbm5lY3RlZC4gQXMgc3VjaCxcbiAqIGRpcmVjdGl2ZXMgc2hvdWxkIGdlbmVyYWxseSBjaGVjayB0aGUgYHRoaXMuaXNDb25uZWN0ZWRgIGZsYWcgZHVyaW5nXG4gKiByZW5kZXIvdXBkYXRlIHRvIGRldGVybWluZSB3aGV0aGVyIGl0IGlzIHNhZmUgdG8gc3Vic2NyaWJlIHRvIHJlc291cmNlc1xuICogdGhhdCBtYXkgcHJldmVudCBnYXJiYWdlIGNvbGxlY3Rpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBBc3luY0RpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8vIEBpbnRlcm5hbFxuICAgICAgICB0aGlzLl8kZGlzY29ubmVjdGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgcGFydCB3aXRoIGludGVybmFsIGZpZWxkc1xuICAgICAqIEBwYXJhbSBwYXJ0XG4gICAgICogQHBhcmFtIHBhcmVudFxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVJbmRleFxuICAgICAqL1xuICAgIF8kaW5pdGlhbGl6ZShwYXJ0LCBwYXJlbnQsIGF0dHJpYnV0ZUluZGV4KSB7XG4gICAgICAgIHN1cGVyLl8kaW5pdGlhbGl6ZShwYXJ0LCBwYXJlbnQsIGF0dHJpYnV0ZUluZGV4KTtcbiAgICAgICAgYWRkRGlzY29ubmVjdGFibGVUb1BhcmVudCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IHBhcnQuXyRpc0Nvbm5lY3RlZDtcbiAgICB9XG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgZnJvbSB0aGUgY29yZSBjb2RlIHdoZW4gYSBkaXJlY3RpdmUgaXMgZ29pbmcgYXdheSBmcm9tIGEgcGFydCAoaW5cbiAgICAgKiB3aGljaCBjYXNlIGBzaG91bGRSZW1vdmVGcm9tUGFyZW50YCBzaG91bGQgYmUgdHJ1ZSksIGFuZCBmcm9tIHRoZVxuICAgICAqIGBzZXRDaGlsZHJlbkNvbm5lY3RlZGAgaGVscGVyIGZ1bmN0aW9uIHdoZW4gcmVjdXJzaXZlbHkgY2hhbmdpbmcgdGhlXG4gICAgICogY29ubmVjdGlvbiBzdGF0ZSBvZiBhIHRyZWUgKGluIHdoaWNoIGNhc2UgYHNob3VsZFJlbW92ZUZyb21QYXJlbnRgIHNob3VsZFxuICAgICAqIGJlIGZhbHNlKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpc0Nvbm5lY3RlZFxuICAgICAqIEBwYXJhbSBpc0NsZWFyaW5nRGlyZWN0aXZlIC0gVHJ1ZSB3aGVuIHRoZSBkaXJlY3RpdmUgaXRzZWxmIGlzIGJlaW5nXG4gICAgICogICAgIHJlbW92ZWQ7IGZhbHNlIHdoZW4gdGhlIHRyZWUgaXMgYmVpbmcgZGlzY29ubmVjdGVkXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgWydfJG5vdGlmeURpcmVjdGl2ZUNvbm5lY3Rpb25DaGFuZ2VkJ10oaXNDb25uZWN0ZWQsIGlzQ2xlYXJpbmdEaXJlY3RpdmUgPSB0cnVlKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGlmIChpc0Nvbm5lY3RlZCAhPT0gdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGlzQ29ubmVjdGVkO1xuICAgICAgICAgICAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5yZWNvbm5lY3RlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLmRpc2Nvbm5lY3RlZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQ2xlYXJpbmdEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIG5vdGlmeUNoaWxkcmVuQ29ubmVjdGVkQ2hhbmdlZCh0aGlzLCBpc0Nvbm5lY3RlZCk7XG4gICAgICAgICAgICByZW1vdmVEaXNjb25uZWN0YWJsZUZyb21QYXJlbnQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIGRpcmVjdGl2ZSdzIFBhcnQgb3V0c2lkZSB0aGUgbm9ybWFsIGB1cGRhdGVgL2ByZW5kZXJgXG4gICAgICogbGlmZWN5Y2xlIG9mIGEgZGlyZWN0aXZlLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2Qgc2hvdWxkIG5vdCBiZSBjYWxsZWQgc3luY2hyb25vdXNseSBmcm9tIGEgZGlyZWN0aXZlJ3MgYHVwZGF0ZWBcbiAgICAgKiBvciBgcmVuZGVyYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkaXJlY3RpdmUgVGhlIGRpcmVjdGl2ZSB0byB1cGRhdGVcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldFxuICAgICAqL1xuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmIChpc1NpbmdsZUV4cHJlc3Npb24odGhpcy5fX3BhcnQpKSB7XG4gICAgICAgICAgICB0aGlzLl9fcGFydC5fJHNldFZhbHVlKHZhbHVlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMuX19hdHRyaWJ1dGVJbmRleCB3aWxsIGJlIGRlZmluZWQgaW4gdGhpcyBjYXNlLCBidXRcbiAgICAgICAgICAgIC8vIGFzc2VydCBpdCBpbiBkZXYgbW9kZVxuICAgICAgICAgICAgaWYgKERFVl9NT0RFICYmIHRoaXMuX19hdHRyaWJ1dGVJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCB0aGlzLl9fYXR0cmlidXRlSW5kZXggdG8gYmUgYSBudW1iZXJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlcyA9IFsuLi50aGlzLl9fcGFydC5fJGNvbW1pdHRlZFZhbHVlXTtcbiAgICAgICAgICAgIG5ld1ZhbHVlc1t0aGlzLl9fYXR0cmlidXRlSW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9fcGFydC5fJHNldFZhbHVlKG5ld1ZhbHVlcywgdGhpcywgMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogVXNlciBjYWxsYmFja3MgZm9yIGltcGxlbWVudGluZyBsb2dpYyB0byByZWxlYXNlIGFueSByZXNvdXJjZXMvc3Vic2NyaXB0aW9uc1xuICAgICAqIHRoYXQgbWF5IGhhdmUgYmVlbiByZXRhaW5lZCBieSB0aGlzIGRpcmVjdGl2ZS4gU2luY2UgZGlyZWN0aXZlcyBtYXkgYWxzbyBiZVxuICAgICAqIHJlLWNvbm5lY3RlZCwgYHJlY29ubmVjdGVkYCBzaG91bGQgYWxzbyBiZSBpbXBsZW1lbnRlZCB0byByZXN0b3JlIHRoZVxuICAgICAqIHdvcmtpbmcgc3RhdGUgb2YgdGhlIGRpcmVjdGl2ZSBwcmlvciB0byB0aGUgbmV4dCByZW5kZXIuXG4gICAgICovXG4gICAgZGlzY29ubmVjdGVkKCkgeyB9XG4gICAgcmVjb25uZWN0ZWQoKSB7IH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzeW5jLWRpcmVjdGl2ZS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbnZhciBfYSwgX2I7XG5pbXBvcnQgeyBfJExIIH0gZnJvbSAnLi9saXQtaHRtbC5qcyc7XG5jb25zdCB7IF9DaGlsZFBhcnQ6IENoaWxkUGFydCB9ID0gXyRMSDtcbmNvbnN0IEVOQUJMRV9TSEFEWURPTV9OT1BBVENIID0gdHJ1ZTtcbmNvbnN0IHdyYXAgPSBFTkFCTEVfU0hBRFlET01fTk9QQVRDSCAmJlxuICAgICgoX2EgPSB3aW5kb3cuU2hhZHlET00pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pblVzZSkgJiZcbiAgICAoKF9iID0gd2luZG93LlNoYWR5RE9NKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iubm9QYXRjaCkgPT09IHRydWVcbiAgICA/IHdpbmRvdy5TaGFkeURPTS53cmFwXG4gICAgOiAobm9kZSkgPT4gbm9kZTtcbi8qKlxuICogVGVzdHMgaWYgYSB2YWx1ZSBpcyBhIHByaW1pdGl2ZSB2YWx1ZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdHlwZW9mLW9wZXJhdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBpc1ByaW1pdGl2ZSA9ICh2YWx1ZSkgPT4gdmFsdWUgPT09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUgIT0gJ2Z1bmN0aW9uJyk7XG5leHBvcnQgY29uc3QgVGVtcGxhdGVSZXN1bHRUeXBlID0ge1xuICAgIEhUTUw6IDEsXG4gICAgU1ZHOiAyLFxufTtcbi8qKlxuICogVGVzdHMgaWYgYSB2YWx1ZSBpcyBhIFRlbXBsYXRlUmVzdWx0LlxuICovXG5leHBvcnQgY29uc3QgaXNUZW1wbGF0ZVJlc3VsdCA9ICh2YWx1ZSwgdHlwZSkgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgcmV0dXJuIHR5cGUgPT09IHVuZGVmaW5lZFxuICAgICAgICA/IC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgICAgICAoKF9hID0gdmFsdWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVsnXyRsaXRUeXBlJCddKSAhPT0gdW5kZWZpbmVkXG4gICAgICAgIDogKChfYiA9IHZhbHVlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2JbJ18kbGl0VHlwZSQnXSkgPT09IHR5cGU7XG59O1xuLyoqXG4gKiBUZXN0cyBpZiBhIHZhbHVlIGlzIGEgRGlyZWN0aXZlUmVzdWx0LlxuICovXG5leHBvcnQgY29uc3QgaXNEaXJlY3RpdmVSZXN1bHQgPSAodmFsdWUpID0+IHsgdmFyIF9hOyBcbi8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG5yZXR1cm4gKChfYSA9IHZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbJ18kbGl0RGlyZWN0aXZlJCddKSAhPT0gdW5kZWZpbmVkOyB9O1xuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIERpcmVjdGl2ZSBjbGFzcyBmb3IgYSBEaXJlY3RpdmVSZXN1bHRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldERpcmVjdGl2ZUNsYXNzID0gKHZhbHVlKSA9PiB7IHZhciBfYTsgXG4vLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxucmV0dXJuIChfYSA9IHZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbJ18kbGl0RGlyZWN0aXZlJCddOyB9O1xuLyoqXG4gKiBUZXN0cyB3aGV0aGVyIGEgcGFydCBoYXMgb25seSBhIHNpbmdsZS1leHByZXNzaW9uIHdpdGggbm8gc3RyaW5ncyB0b1xuICogaW50ZXJwb2xhdGUgYmV0d2Vlbi5cbiAqXG4gKiBPbmx5IEF0dHJpYnV0ZVBhcnQgYW5kIFByb3BlcnR5UGFydCBjYW4gaGF2ZSBtdWx0aXBsZSBleHByZXNzaW9ucy5cbiAqIE11bHRpLWV4cHJlc3Npb24gcGFydHMgaGF2ZSBhIGBzdHJpbmdzYCBwcm9wZXJ0eSBhbmQgc2luZ2xlLWV4cHJlc3Npb25cbiAqIHBhcnRzIGRvIG5vdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzU2luZ2xlRXhwcmVzc2lvbiA9IChwYXJ0KSA9PiBwYXJ0LnN0cmluZ3MgPT09IHVuZGVmaW5lZDtcbmNvbnN0IGNyZWF0ZU1hcmtlciA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuLyoqXG4gKiBJbnNlcnRzIGEgQ2hpbGRQYXJ0IGludG8gdGhlIGdpdmVuIGNvbnRhaW5lciBDaGlsZFBhcnQncyBET00sIGVpdGhlciBhdCB0aGVcbiAqIGVuZCBvZiB0aGUgY29udGFpbmVyIENoaWxkUGFydCwgb3IgYmVmb3JlIHRoZSBvcHRpb25hbCBgcmVmUGFydGAuXG4gKlxuICogVGhpcyBkb2VzIG5vdCBhZGQgdGhlIHBhcnQgdG8gdGhlIGNvbnRhaW5lclBhcnQncyBjb21taXR0ZWQgdmFsdWUuIFRoYXQgbXVzdFxuICogYmUgZG9uZSBieSBjYWxsZXJzLlxuICpcbiAqIEBwYXJhbSBjb250YWluZXJQYXJ0IFBhcnQgd2l0aGluIHdoaWNoIHRvIGFkZCB0aGUgbmV3IENoaWxkUGFydFxuICogQHBhcmFtIHJlZlBhcnQgUGFydCBiZWZvcmUgd2hpY2ggdG8gYWRkIHRoZSBuZXcgQ2hpbGRQYXJ0OyB3aGVuIG9taXR0ZWQgdGhlXG4gKiAgICAgcGFydCBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBgY29udGFpbmVyUGFydGBcbiAqIEBwYXJhbSBwYXJ0IFBhcnQgdG8gaW5zZXJ0LCBvciB1bmRlZmluZWQgdG8gY3JlYXRlIGEgbmV3IHBhcnRcbiAqL1xuZXhwb3J0IGNvbnN0IGluc2VydFBhcnQgPSAoY29udGFpbmVyUGFydCwgcmVmUGFydCwgcGFydCkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBjb250YWluZXIgPSB3cmFwKGNvbnRhaW5lclBhcnQuXyRzdGFydE5vZGUpLnBhcmVudE5vZGU7XG4gICAgY29uc3QgcmVmTm9kZSA9IHJlZlBhcnQgPT09IHVuZGVmaW5lZCA/IGNvbnRhaW5lclBhcnQuXyRlbmROb2RlIDogcmVmUGFydC5fJHN0YXJ0Tm9kZTtcbiAgICBpZiAocGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0Tm9kZSA9IHdyYXAoY29udGFpbmVyKS5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIHJlZk5vZGUpO1xuICAgICAgICBjb25zdCBlbmROb2RlID0gd3JhcChjb250YWluZXIpLmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgcmVmTm9kZSk7XG4gICAgICAgIHBhcnQgPSBuZXcgQ2hpbGRQYXJ0KHN0YXJ0Tm9kZSwgZW5kTm9kZSwgY29udGFpbmVyUGFydCwgY29udGFpbmVyUGFydC5vcHRpb25zKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGVuZE5vZGUgPSB3cmFwKHBhcnQuXyRlbmROb2RlKS5uZXh0U2libGluZztcbiAgICAgICAgY29uc3Qgb2xkUGFyZW50ID0gcGFydC5fJHBhcmVudDtcbiAgICAgICAgY29uc3QgcGFyZW50Q2hhbmdlZCA9IG9sZFBhcmVudCAhPT0gY29udGFpbmVyUGFydDtcbiAgICAgICAgaWYgKHBhcmVudENoYW5nZWQpIHtcbiAgICAgICAgICAgIChfYSA9IHBhcnQuXyRyZXBhcmVudERpc2Nvbm5lY3RhYmxlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwocGFydCwgY29udGFpbmVyUGFydCk7XG4gICAgICAgICAgICAvLyBOb3RlIHRoYXQgYWx0aG91Z2ggYF8kcmVwYXJlbnREaXNjb25uZWN0YWJsZXNgIHVwZGF0ZXMgdGhlIHBhcnQnc1xuICAgICAgICAgICAgLy8gYF8kcGFyZW50YCByZWZlcmVuY2UgYWZ0ZXIgdW5saW5raW5nIGZyb20gaXRzIGN1cnJlbnQgcGFyZW50LCB0aGF0XG4gICAgICAgICAgICAvLyBtZXRob2Qgb25seSBleGlzdHMgaWYgRGlzY29ubmVjdGFibGVzIGFyZSBwcmVzZW50LCBzbyB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAvLyB1bmNvbmRpdGlvbmFsbHkgc2V0IGl0IGhlcmVcbiAgICAgICAgICAgIHBhcnQuXyRwYXJlbnQgPSBjb250YWluZXJQYXJ0O1xuICAgICAgICAgICAgLy8gU2luY2UgdGhlIF8kaXNDb25uZWN0ZWQgZ2V0dGVyIGlzIHNvbWV3aGF0IGNvc3RseSwgb25seVxuICAgICAgICAgICAgLy8gcmVhZCBpdCBvbmNlIHdlIGtub3cgdGhlIHN1YnRyZWUgaGFzIGRpcmVjdGl2ZXMgdGhhdCBuZWVkXG4gICAgICAgICAgICAvLyB0byBiZSBub3RpZmllZFxuICAgICAgICAgICAgbGV0IG5ld0Nvbm5lY3Rpb25TdGF0ZTtcbiAgICAgICAgICAgIGlmIChwYXJ0Ll8kbm90aWZ5Q29ubmVjdGlvbkNoYW5nZWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIChuZXdDb25uZWN0aW9uU3RhdGUgPSBjb250YWluZXJQYXJ0Ll8kaXNDb25uZWN0ZWQpICE9PVxuICAgICAgICAgICAgICAgICAgICBvbGRQYXJlbnQuXyRpc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIHBhcnQuXyRub3RpZnlDb25uZWN0aW9uQ2hhbmdlZChuZXdDb25uZWN0aW9uU3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlbmROb2RlICE9PSByZWZOb2RlIHx8IHBhcmVudENoYW5nZWQpIHtcbiAgICAgICAgICAgIGxldCBzdGFydCA9IHBhcnQuXyRzdGFydE5vZGU7XG4gICAgICAgICAgICB3aGlsZSAoc3RhcnQgIT09IGVuZE5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuID0gd3JhcChzdGFydCkubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgd3JhcChjb250YWluZXIpLmluc2VydEJlZm9yZShzdGFydCwgcmVmTm9kZSk7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSBuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXJ0O1xufTtcbi8qKlxuICogU2V0cyB0aGUgdmFsdWUgb2YgYSBQYXJ0LlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIHNob3VsZCBvbmx5IGJlIHVzZWQgdG8gc2V0L3VwZGF0ZSB0aGUgdmFsdWUgb2YgdXNlci1jcmVhdGVkXG4gKiBwYXJ0cyAoaS5lLiB0aG9zZSBjcmVhdGVkIHVzaW5nIGBpbnNlcnRQYXJ0YCk7IGl0IHNob3VsZCBub3QgYmUgdXNlZFxuICogYnkgZGlyZWN0aXZlcyB0byBzZXQgdGhlIHZhbHVlIG9mIHRoZSBkaXJlY3RpdmUncyBjb250YWluZXIgcGFydC4gRGlyZWN0aXZlc1xuICogc2hvdWxkIHJldHVybiBhIHZhbHVlIGZyb20gYHVwZGF0ZWAvYHJlbmRlcmAgdG8gdXBkYXRlIHRoZWlyIHBhcnQgc3RhdGUuXG4gKlxuICogRm9yIGRpcmVjdGl2ZXMgdGhhdCByZXF1aXJlIHNldHRpbmcgdGhlaXIgcGFydCB2YWx1ZSBhc3luY2hyb25vdXNseSwgdGhleVxuICogc2hvdWxkIGV4dGVuZCBgQXN5bmNEaXJlY3RpdmVgIGFuZCBjYWxsIGB0aGlzLnNldFZhbHVlKClgLlxuICpcbiAqIEBwYXJhbSBwYXJ0IFBhcnQgdG8gc2V0XG4gKiBAcGFyYW0gdmFsdWUgVmFsdWUgdG8gc2V0XG4gKiBAcGFyYW0gaW5kZXggRm9yIGBBdHRyaWJ1dGVQYXJ0YHMsIHRoZSBpbmRleCB0byBzZXRcbiAqIEBwYXJhbSBkaXJlY3RpdmVQYXJlbnQgVXNlZCBpbnRlcm5hbGx5OyBzaG91bGQgbm90IGJlIHNldCBieSB1c2VyXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRDaGlsZFBhcnRWYWx1ZSA9IChwYXJ0LCB2YWx1ZSwgZGlyZWN0aXZlUGFyZW50ID0gcGFydCkgPT4ge1xuICAgIHBhcnQuXyRzZXRWYWx1ZSh2YWx1ZSwgZGlyZWN0aXZlUGFyZW50KTtcbiAgICByZXR1cm4gcGFydDtcbn07XG4vLyBBIHNlbnRpbmFsIHZhbHVlIHRoYXQgY2FuIG5ldmVyIGFwcGVhciBhcyBhIHBhcnQgdmFsdWUgZXhjZXB0IHdoZW4gc2V0IGJ5XG4vLyBsaXZlKCkuIFVzZWQgdG8gZm9yY2UgYSBkaXJ0eS1jaGVjayB0byBmYWlsIGFuZCBjYXVzZSBhIHJlLXJlbmRlci5cbmNvbnN0IFJFU0VUX1ZBTFVFID0ge307XG4vKipcbiAqIFNldHMgdGhlIGNvbW1pdHRlZCB2YWx1ZSBvZiBhIENoaWxkUGFydCBkaXJlY3RseSB3aXRob3V0IHRyaWdnZXJpbmcgdGhlXG4gKiBjb21taXQgc3RhZ2Ugb2YgdGhlIHBhcnQuXG4gKlxuICogVGhpcyBpcyB1c2VmdWwgaW4gY2FzZXMgd2hlcmUgYSBkaXJlY3RpdmUgbmVlZHMgdG8gdXBkYXRlIHRoZSBwYXJ0IHN1Y2hcbiAqIHRoYXQgdGhlIG5leHQgdXBkYXRlIGRldGVjdHMgYSB2YWx1ZSBjaGFuZ2Ugb3Igbm90LiBXaGVuIHZhbHVlIGlzIG9taXR0ZWQsXG4gKiB0aGUgbmV4dCB1cGRhdGUgd2lsbCBiZSBndWFyYW50ZWVkIHRvIGJlIGRldGVjdGVkIGFzIGEgY2hhbmdlLlxuICpcbiAqIEBwYXJhbSBwYXJ0XG4gKiBAcGFyYW0gdmFsdWVcbiAqL1xuZXhwb3J0IGNvbnN0IHNldENvbW1pdHRlZFZhbHVlID0gKHBhcnQsIHZhbHVlID0gUkVTRVRfVkFMVUUpID0+IChwYXJ0Ll8kY29tbWl0dGVkVmFsdWUgPSB2YWx1ZSk7XG4vKipcbiAqIFJldHVybnMgdGhlIGNvbW1pdHRlZCB2YWx1ZSBvZiBhIENoaWxkUGFydC5cbiAqXG4gKiBUaGUgY29tbWl0dGVkIHZhbHVlIGlzIHVzZWQgZm9yIGNoYW5nZSBkZXRlY3Rpb24gYW5kIGVmZmljaWVudCB1cGRhdGVzIG9mXG4gKiB0aGUgcGFydC4gSXQgY2FuIGRpZmZlciBmcm9tIHRoZSB2YWx1ZSBzZXQgYnkgdGhlIHRlbXBsYXRlIG9yIGRpcmVjdGl2ZSBpblxuICogY2FzZXMgd2hlcmUgdGhlIHRlbXBsYXRlIHZhbHVlIGlzIHRyYW5zZm9ybWVkIGJlZm9yZSBiZWluZyBjb21taXRlZC5cbiAqXG4gKiAtIGBUZW1wbGF0ZVJlc3VsdGBzIGFyZSBjb21taXR0ZWQgYXMgYSBgVGVtcGxhdGVJbnN0YW5jZWBcbiAqIC0gSXRlcmFibGVzIGFyZSBjb21taXR0ZWQgYXMgYEFycmF5PENoaWxkUGFydD5gXG4gKiAtIEFsbCBvdGhlciB0eXBlcyBhcmUgY29tbWl0dGVkIGFzIHRoZSB0ZW1wbGF0ZSB2YWx1ZSBvciB2YWx1ZSByZXR1cm5lZCBvclxuICogICBzZXQgYnkgYSBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHBhcnRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldENvbW1pdHRlZFZhbHVlID0gKHBhcnQpID0+IHBhcnQuXyRjb21taXR0ZWRWYWx1ZTtcbi8qKlxuICogUmVtb3ZlcyBhIENoaWxkUGFydCBmcm9tIHRoZSBET00sIGluY2x1ZGluZyBhbnkgb2YgaXRzIGNvbnRlbnQuXG4gKlxuICogQHBhcmFtIHBhcnQgVGhlIFBhcnQgdG8gcmVtb3ZlXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVQYXJ0ID0gKHBhcnQpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgKF9hID0gcGFydC5fJG5vdGlmeUNvbm5lY3Rpb25DaGFuZ2VkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChwYXJ0LCBmYWxzZSwgdHJ1ZSk7XG4gICAgbGV0IHN0YXJ0ID0gcGFydC5fJHN0YXJ0Tm9kZTtcbiAgICBjb25zdCBlbmQgPSB3cmFwKHBhcnQuXyRlbmROb2RlKS5uZXh0U2libGluZztcbiAgICB3aGlsZSAoc3RhcnQgIT09IGVuZCkge1xuICAgICAgICBjb25zdCBuID0gd3JhcChzdGFydCkubmV4dFNpYmxpbmc7XG4gICAgICAgIHdyYXAoc3RhcnQpLnJlbW92ZSgpO1xuICAgICAgICBzdGFydCA9IG47XG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBjbGVhclBhcnQgPSAocGFydCkgPT4ge1xuICAgIHBhcnQuXyRjbGVhcigpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpcmVjdGl2ZS1oZWxwZXJzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuZXhwb3J0IGNvbnN0IFBhcnRUeXBlID0ge1xuICAgIEFUVFJJQlVURTogMSxcbiAgICBDSElMRDogMixcbiAgICBQUk9QRVJUWTogMyxcbiAgICBCT09MRUFOX0FUVFJJQlVURTogNCxcbiAgICBFVkVOVDogNSxcbiAgICBFTEVNRU5UOiA2LFxufTtcbi8qKlxuICogQ3JlYXRlcyBhIHVzZXItZmFjaW5nIGRpcmVjdGl2ZSBmdW5jdGlvbiBmcm9tIGEgRGlyZWN0aXZlIGNsYXNzLiBUaGlzXG4gKiBmdW5jdGlvbiBoYXMgdGhlIHNhbWUgcGFyYW1ldGVycyBhcyB0aGUgZGlyZWN0aXZlJ3MgcmVuZGVyKCkgbWV0aG9kLlxuICovXG5leHBvcnQgY29uc3QgZGlyZWN0aXZlID0gKGMpID0+ICguLi52YWx1ZXMpID0+ICh7XG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICBbJ18kbGl0RGlyZWN0aXZlJCddOiBjLFxuICAgIHZhbHVlcyxcbn0pO1xuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBjcmVhdGluZyBjdXN0b20gZGlyZWN0aXZlcy4gVXNlcnMgc2hvdWxkIGV4dGVuZCB0aGlzIGNsYXNzLFxuICogaW1wbGVtZW50IGByZW5kZXJgIGFuZC9vciBgdXBkYXRlYCwgYW5kIHRoZW4gcGFzcyB0aGVpciBzdWJjbGFzcyB0b1xuICogYGRpcmVjdGl2ZWAuXG4gKi9cbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJ0SW5mbykgeyB9XG4gICAgLy8gU2VlIGNvbW1lbnQgaW4gRGlzY29ubmVjdGFibGUgaW50ZXJmYWNlIGZvciB3aHkgdGhpcyBpcyBhIGdldHRlclxuICAgIGdldCBfJGlzQ29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJHBhcmVudC5fJGlzQ29ubmVjdGVkO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgXyRpbml0aWFsaXplKHBhcnQsIHBhcmVudCwgYXR0cmlidXRlSW5kZXgpIHtcbiAgICAgICAgdGhpcy5fX3BhcnQgPSBwYXJ0O1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLl9fYXR0cmlidXRlSW5kZXggPSBhdHRyaWJ1dGVJbmRleDtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kcmVzb2x2ZShwYXJ0LCBwcm9wcykge1xuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUocGFydCwgcHJvcHMpO1xuICAgIH1cbiAgICB1cGRhdGUoX3BhcnQsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlciguLi5wcm9wcyk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlyZWN0aXZlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuaW1wb3J0IHsgbm90aGluZyB9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcbi8qKlxuICogRm9yIEF0dHJpYnV0ZVBhcnRzLCBzZXRzIHRoZSBhdHRyaWJ1dGUgaWYgdGhlIHZhbHVlIGlzIGRlZmluZWQgYW5kIHJlbW92ZXNcbiAqIHRoZSBhdHRyaWJ1dGUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiBGb3Igb3RoZXIgcGFydCB0eXBlcywgdGhpcyBkaXJlY3RpdmUgaXMgYSBuby1vcC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlmRGVmaW5lZCA9ICh2YWx1ZSkgPT4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogbm90aGluZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlmLWRlZmluZWQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG4vLyBOb3RlLCB0aGlzIG1vZHVsZSBpcyBub3QgaW5jbHVkZWQgaW4gcGFja2FnZSBleHBvcnRzIHNvIHRoYXQgaXQncyBwcml2YXRlIHRvXG4vLyBvdXIgZmlyc3QtcGFydHkgZGlyZWN0aXZlcy4gSWYgaXQgZW5kcyB1cCBiZWluZyB1c2VmdWwsIHdlIGNhbiBvcGVuIGl0IHVwIGFuZFxuLy8gZXhwb3J0IGl0LlxuLyoqXG4gKiBIZWxwZXIgdG8gaXRlcmF0ZSBhbiBBc3luY0l0ZXJhYmxlIGluIGl0cyBvd24gY2xvc3VyZS5cbiAqIEBwYXJhbSBpdGVyYWJsZSBUaGUgaXRlcmFibGUgdG8gaXRlcmF0ZVxuICogQHBhcmFtIGNhbGxiYWNrIFRoZSBjYWxsYmFjayB0byBjYWxsIGZvciBlYWNoIHZhbHVlLiBJZiB0aGUgY2FsbGJhY2sgcmV0dXJuc1xuICogYGZhbHNlYCwgdGhlIGxvb3Agd2lsbCBiZSBicm9rZW4uXG4gKi9cbmV4cG9ydCBjb25zdCBmb3JBd2FpdE9mID0gYXN5bmMgKGl0ZXJhYmxlLCBjYWxsYmFjaykgPT4ge1xuICAgIGZvciBhd2FpdCAoY29uc3QgdiBvZiBpdGVyYWJsZSkge1xuICAgICAgICBpZiAoKGF3YWl0IGNhbGxiYWNrKHYpKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAqIEhvbGRzIGEgcmVmZXJlbmNlIHRvIGFuIGluc3RhbmNlIHRoYXQgY2FuIGJlIGRpc2Nvbm5lY3RlZCBhbmQgcmVjb25uZWN0ZWQsXG4gKiBzbyB0aGF0IGEgY2xvc3VyZSBvdmVyIHRoZSByZWYgKGUuZy4gaW4gYSB0aGVuIGZ1bmN0aW9uIHRvIGEgcHJvbWlzZSkgZG9lc1xuICogbm90IHN0cm9uZ2x5IGhvbGQgYSByZWYgdG8gdGhlIGluc3RhbmNlLiBBcHByb3hpbWF0ZXMgYSBXZWFrUmVmIGJ1dCBtdXN0XG4gKiBiZSBtYW51YWxseSBjb25uZWN0ZWQgJiBkaXNjb25uZWN0ZWQgdG8gdGhlIGJhY2tpbmcgaW5zdGFuY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBQc2V1ZG9XZWFrUmVmIHtcbiAgICBjb25zdHJ1Y3RvcihyZWYpIHtcbiAgICAgICAgdGhpcy5fcmVmID0gcmVmO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNhc3NvY2lhdGVzIHRoZSByZWYgd2l0aCB0aGUgYmFja2luZyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLl9yZWYgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlYXNzb2NpYXRlcyB0aGUgcmVmIHdpdGggdGhlIGJhY2tpbmcgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVjb25uZWN0KHJlZikge1xuICAgICAgICB0aGlzLl9yZWYgPSByZWY7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgYmFja2luZyBpbnN0YW5jZSAod2lsbCBiZSB1bmRlZmluZWQgd2hlbiBkaXNjb25uZWN0ZWQpXG4gICAgICovXG4gICAgZGVyZWYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWY7XG4gICAgfVxufVxuLyoqXG4gKiBBIGhlbHBlciB0byBwYXVzZSBhbmQgcmVzdW1lIHdhaXRpbmcgb24gYSBjb25kaXRpb24gaW4gYW4gYXN5bmMgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFBhdXNlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3Jlc29sdmUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZW4gcGF1c2VkLCByZXR1cm5zIGEgcHJvbWlzZSB0byBiZSBhd2FpdGVkOyB3aGVuIHVucGF1c2VkLCByZXR1cm5zXG4gICAgICogdW5kZWZpbmVkLiBOb3RlIHRoYXQgaW4gdGhlIG1pY3JvdGFzayBiZXR3ZWVuIHRoZSBwYXVzZXIgYmVpbmcgcmVzdW1lZFxuICAgICAqIGFuIGFuIGF3YWl0IG9mIHRoaXMgcHJvbWlzZSByZXNvbHZpbmcsIHRoZSBwYXVzZXIgY291bGQgYmUgcGF1c2VkIGFnYWluLFxuICAgICAqIGhlbmNlIGNhbGxlcnMgc2hvdWxkIGNoZWNrIHRoZSBwcm9taXNlIGluIGEgbG9vcCB3aGVuIGF3YWl0aW5nLlxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0byBiZSBhd2FpdGVkIHdoZW4gcGF1c2VkIG9yIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwcm9taXNlIHRvIGJlIGF3YWl0ZWRcbiAgICAgKi9cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9wcm9taXNlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiAodGhpcy5fcmVzb2x2ZSA9IHJlc29sdmUpKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIHRoZSBwcm9taXNlIHdoaWNoIG1heSBiZSBhd2FpdGVkXG4gICAgICovXG4gICAgcmVzdW1lKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX3Jlc29sdmUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLl9wcm9taXNlID0gdGhpcy5fcmVzb2x2ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcml2YXRlLWFzeW5jLWhlbHBlcnMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5pbXBvcnQgeyBub3RoaW5nIH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuaW1wb3J0IHsgZGlyZWN0aXZlLCBBc3luY0RpcmVjdGl2ZSB9IGZyb20gJy4uL2FzeW5jLWRpcmVjdGl2ZS5qcyc7XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgUmVmIG9iamVjdCwgd2hpY2ggaXMgY29udGFpbmVyIGZvciBhIHJlZmVyZW5jZSB0byBhbiBlbGVtZW50LlxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlUmVmID0gKCkgPT4gbmV3IFJlZigpO1xuLyoqXG4gKiBBbiBvYmplY3QgdGhhdCBob2xkcyBhIHJlZiB2YWx1ZS5cbiAqL1xuY2xhc3MgUmVmIHtcbn1cbi8vIFdoZW4gY2FsbGJhY2tzIGFyZSB1c2VkIGZvciByZWZzLCB0aGlzIG1hcCB0cmFja3MgdGhlIGxhc3QgdmFsdWUgdGhlIGNhbGxiYWNrXG4vLyB3YXMgY2FsbGVkIHdpdGgsIGZvciBlbnN1cmluZyBhIGRpcmVjdGl2ZSBkb2Vzbid0IGNsZWFyIHRoZSByZWYgaWYgdGhlIHJlZlxuLy8gaGFzIGFscmVhZHkgYmVlbiByZW5kZXJlZCB0byBhIG5ldyBzcG90XG5jb25zdCBsYXN0RWxlbWVudEZvckNhbGxiYWNrID0gbmV3IFdlYWtNYXAoKTtcbmNsYXNzIFJlZkRpcmVjdGl2ZSBleHRlbmRzIEFzeW5jRGlyZWN0aXZlIHtcbiAgICByZW5kZXIoX3JlZikge1xuICAgICAgICByZXR1cm4gbm90aGluZztcbiAgICB9XG4gICAgdXBkYXRlKHBhcnQsIFtyZWZdKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgcmVmQ2hhbmdlZCA9IHJlZiAhPT0gdGhpcy5fcmVmO1xuICAgICAgICBpZiAocmVmQ2hhbmdlZCAmJiB0aGlzLl9yZWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gVGhlIHJlZiBwYXNzZWQgdG8gdGhlIGRpcmVjdGl2ZSBoYXMgY2hhbmdlZDtcbiAgICAgICAgICAgIC8vIHVuc2V0IHRoZSBwcmV2aW91cyByZWYncyB2YWx1ZVxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlUmVmVmFsdWUodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVmQ2hhbmdlZCB8fCB0aGlzLl9sYXN0RWxlbWVudEZvclJlZiAhPT0gdGhpcy5fZWxlbWVudCkge1xuICAgICAgICAgICAgLy8gV2UgZWl0aGVyIGdvdCBhIG5ldyByZWYgb3IgdGhpcyBpcyB0aGUgZmlyc3QgcmVuZGVyO1xuICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHJlZi9lbGVtZW50ICYgdXBkYXRlIHRoZSByZWYgdmFsdWVcbiAgICAgICAgICAgIHRoaXMuX3JlZiA9IHJlZjtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSAoX2EgPSBwYXJ0Lm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ob3N0O1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlUmVmVmFsdWUoKHRoaXMuX2VsZW1lbnQgPSBwYXJ0LmVsZW1lbnQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm90aGluZztcbiAgICB9XG4gICAgX3VwZGF0ZVJlZlZhbHVlKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9yZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBjdXJyZW50IHJlZiB3YXMgY2FsbGVkIHdpdGggYSBwcmV2aW91cyB2YWx1ZSwgY2FsbCB3aXRoXG4gICAgICAgICAgICAvLyBgdW5kZWZpbmVkYDsgV2UgZG8gdGhpcyB0byBlbnN1cmUgY2FsbGJhY2tzIGFyZSBjYWxsZWQgaW4gYSBjb25zaXN0ZW50XG4gICAgICAgICAgICAvLyB3YXkgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIGEgcmVmIG1pZ2h0IGJlIG1vdmluZyB1cCBpbiB0aGUgdHJlZSAoaW5cbiAgICAgICAgICAgIC8vIHdoaWNoIGNhc2UgaXQgd291bGQgb3RoZXJ3aXNlIGJlIGNhbGxlZCB3aXRoIHRoZSBuZXcgdmFsdWUgYmVmb3JlIHRoZVxuICAgICAgICAgICAgLy8gcHJldmlvdXMgb25lIHVuc2V0cyBpdCkgYW5kIGRvd24gaW4gdGhlIHRyZWUgKHdoZXJlIGl0IHdvdWxkIGJlIHVuc2V0XG4gICAgICAgICAgICAvLyBiZWZvcmUgYmVpbmcgc2V0KVxuICAgICAgICAgICAgaWYgKGxhc3RFbGVtZW50Rm9yQ2FsbGJhY2suZ2V0KHRoaXMuX3JlZikgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlZi5jYWxsKHRoaXMuX2NvbnRleHQsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0RWxlbWVudEZvckNhbGxiYWNrLnNldCh0aGlzLl9yZWYsIGVsZW1lbnQpO1xuICAgICAgICAgICAgLy8gQ2FsbCB0aGUgcmVmIHdpdGggdGhlIG5ldyBlbGVtZW50IHZhbHVlXG4gICAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVmLmNhbGwodGhpcy5fY29udGV4dCwgZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZWYudmFsdWUgPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBfbGFzdEVsZW1lbnRGb3JSZWYoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9yZWYgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gbGFzdEVsZW1lbnRGb3JDYWxsYmFjay5nZXQodGhpcy5fcmVmKVxuICAgICAgICAgICAgOiAoX2EgPSB0aGlzLl9yZWYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS52YWx1ZTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkKCkge1xuICAgICAgICAvLyBPbmx5IGNsZWFyIHRoZSBib3ggaWYgb3VyIGVsZW1lbnQgaXMgc3RpbGwgdGhlIG9uZSBpbiBpdCAoaS5lLiBhbm90aGVyXG4gICAgICAgIC8vIGRpcmVjdGl2ZSBpbnN0YW5jZSBoYXNuJ3QgcmVuZGVyZWQgaXRzIGVsZW1lbnQgdG8gaXQgYmVmb3JlIHVzKTsgdGhhdFxuICAgICAgICAvLyBvbmx5IGhhcHBlbnMgaW4gdGhlIGV2ZW50IG9mIHRoZSBkaXJlY3RpdmUgYmVpbmcgY2xlYXJlZCAobm90IHZpYSBtYW51YWxcbiAgICAgICAgLy8gZGlzY29ubmVjdGlvbilcbiAgICAgICAgaWYgKHRoaXMuX2xhc3RFbGVtZW50Rm9yUmVmID09PSB0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVSZWZWYWx1ZSh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlY29ubmVjdGVkKCkge1xuICAgICAgICAvLyBJZiB3ZSB3ZXJlIG1hbnVhbGx5IGRpc2Nvbm5lY3RlZCwgd2UgY2FuIHNhZmVseSBwdXQgb3VyIGVsZW1lbnQgYmFjayBpblxuICAgICAgICAvLyB0aGUgYm94LCBzaW5jZSBubyByZW5kZXJpbmcgY291bGQgaGF2ZSBvY2N1cnJlZCB0byBjaGFuZ2UgaXRzIHN0YXRlXG4gICAgICAgIHRoaXMuX3VwZGF0ZVJlZlZhbHVlKHRoaXMuX2VsZW1lbnQpO1xuICAgIH1cbn1cbi8qKlxuICogU2V0cyB0aGUgdmFsdWUgb2YgYSBSZWYgb2JqZWN0IG9yIGNhbGxzIGEgcmVmIGNhbGxiYWNrIHdpdGggdGhlIGVsZW1lbnQgaXQnc1xuICogYm91bmQgdG8uXG4gKlxuICogQSBSZWYgb2JqZWN0IGFjdHMgYXMgYSBjb250YWluZXIgZm9yIGEgcmVmZXJlbmNlIHRvIGFuIGVsZW1lbnQuIEEgcmVmXG4gKiBjYWxsYmFjayBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW4gZWxlbWVudCBhcyBpdHMgb25seSBhcmd1bWVudC5cbiAqXG4gKiBUaGUgcmVmIGRpcmVjdGl2ZSBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgUmVmIG9iamVjdCBvciBjYWxscyB0aGUgcmVmIGNhbGxiYWNrXG4gKiBkdXJpbmcgcmVuZGVyaW5nLCBpZiB0aGUgcmVmZXJlbmNlZCBlbGVtZW50IGNoYW5nZWQuXG4gKlxuICogTm90ZTogSWYgYSByZWYgY2FsbGJhY2sgaXMgcmVuZGVyZWQgdG8gYSBkaWZmZXJlbnQgZWxlbWVudCBwb3NpdGlvbiBvciBpc1xuICogcmVtb3ZlZCBpbiBhIHN1YnNlcXVlbnQgcmVuZGVyLCBpdCB3aWxsIGZpcnN0IGJlIGNhbGxlZCB3aXRoIGB1bmRlZmluZWRgLFxuICogZm9sbG93ZWQgYnkgYW5vdGhlciBjYWxsIHdpdGggdGhlIG5ldyBlbGVtZW50IGl0IHdhcyByZW5kZXJlZCB0byAoaWYgYW55KS5cbiAqXG4gKiBgYGBqc1xuICogLy8gVXNpbmcgUmVmIG9iamVjdFxuICogY29uc3QgaW5wdXRSZWYgPSBjcmVhdGVSZWYoKTtcbiAqIHJlbmRlcihodG1sYDxpbnB1dCAke3JlZihpbnB1dFJlZil9PmAsIGNvbnRhaW5lcik7XG4gKiBpbnB1dFJlZi52YWx1ZS5mb2N1cygpO1xuICpcbiAqIC8vIFVzaW5nIGNhbGxiYWNrXG4gKiBjb25zdCBjYWxsYmFjayA9IChpbnB1dEVsZW1lbnQpID0+IGlucHV0RWxlbWVudC5mb2N1cygpO1xuICogcmVuZGVyKGh0bWxgPGlucHV0ICR7cmVmKGNhbGxiYWNrKX0+YCwgY29udGFpbmVyKTtcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgcmVmID0gZGlyZWN0aXZlKFJlZkRpcmVjdGl2ZSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWYuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5pbXBvcnQgeyBub0NoYW5nZSB9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZS5qcyc7XG5pbXBvcnQgeyBpc1ByaW1pdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZS1oZWxwZXJzLmpzJztcbmltcG9ydCB7IEFzeW5jRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXN5bmMtZGlyZWN0aXZlLmpzJztcbmltcG9ydCB7IFBhdXNlciwgUHNldWRvV2Vha1JlZiB9IGZyb20gJy4vcHJpdmF0ZS1hc3luYy1oZWxwZXJzLmpzJztcbmNvbnN0IGlzUHJvbWlzZSA9ICh4KSA9PiB7XG4gICAgcmV0dXJuICFpc1ByaW1pdGl2ZSh4KSAmJiB0eXBlb2YgeC50aGVuID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIEVmZmVjdGl2ZWx5IGluZmluaXR5LCBidXQgYSBTTUkuXG5jb25zdCBfaW5maW5pdHkgPSAweDNmZmZmZmZmO1xuZXhwb3J0IGNsYXNzIFVudGlsRGlyZWN0aXZlIGV4dGVuZHMgQXN5bmNEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLl9fbGFzdFJlbmRlcmVkSW5kZXggPSBfaW5maW5pdHk7XG4gICAgICAgIHRoaXMuX192YWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fX3dlYWtUaGlzID0gbmV3IFBzZXVkb1dlYWtSZWYodGhpcyk7XG4gICAgICAgIHRoaXMuX19wYXVzZXIgPSBuZXcgUGF1c2VyKCk7XG4gICAgfVxuICAgIHJlbmRlciguLi5hcmdzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IGFyZ3MuZmluZCgoeCkgPT4gIWlzUHJvbWlzZSh4KSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG5vQ2hhbmdlO1xuICAgIH1cbiAgICB1cGRhdGUoX3BhcnQsIGFyZ3MpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZXMgPSB0aGlzLl9fdmFsdWVzO1xuICAgICAgICBsZXQgcHJldmlvdXNMZW5ndGggPSBwcmV2aW91c1ZhbHVlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuX192YWx1ZXMgPSBhcmdzO1xuICAgICAgICBjb25zdCB3ZWFrVGhpcyA9IHRoaXMuX193ZWFrVGhpcztcbiAgICAgICAgY29uc3QgcGF1c2VyID0gdGhpcy5fX3BhdXNlcjtcbiAgICAgICAgLy8gSWYgb3VyIGluaXRpYWwgcmVuZGVyIG9jY3VycyB3aGlsZSBkaXNjb25uZWN0ZWQsIGVuc3VyZSB0aGF0IHRoZSBwYXVzZXJcbiAgICAgICAgLy8gYW5kIHdlYWtUaGlzIGFyZSBpbiB0aGUgZGlzY29ubmVjdGVkIHN0YXRlXG4gICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIElmIHdlJ3ZlIHJlbmRlcmVkIGEgaGlnaGVyLXByaW9yaXR5IHZhbHVlIGFscmVhZHksIHN0b3AuXG4gICAgICAgICAgICBpZiAoaSA+IHRoaXMuX19sYXN0UmVuZGVyZWRJbmRleCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhcmdzW2ldO1xuICAgICAgICAgICAgLy8gUmVuZGVyIG5vbi1Qcm9taXNlIHZhbHVlcyBpbW1lZGlhdGVseVxuICAgICAgICAgICAgaWYgKCFpc1Byb21pc2UodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2xhc3RSZW5kZXJlZEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAvLyBTaW5jZSBhIGxvd2VyLXByaW9yaXR5IHZhbHVlIHdpbGwgbmV2ZXIgb3ZlcndyaXRlIGEgaGlnaGVyLXByaW9yaXR5XG4gICAgICAgICAgICAgICAgLy8gc3luY2hyb25vdXMgdmFsdWUsIHdlIGNhbiBzdG9wIHByb2Nlc3Npbmcgbm93LlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBQcm9taXNlIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCwgc2tpcCBpdC5cbiAgICAgICAgICAgIGlmIChpIDwgcHJldmlvdXNMZW5ndGggJiYgdmFsdWUgPT09IHByZXZpb3VzVmFsdWVzW2ldKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBXZSBoYXZlIGEgUHJvbWlzZSB0aGF0IHdlIGhhdmVuJ3Qgc2VlbiBiZWZvcmUsIHNvIHByaW9yaXRpZXMgbWF5IGhhdmVcbiAgICAgICAgICAgIC8vIGNoYW5nZWQuIEZvcmdldCB3aGF0IHdlIHJlbmRlcmVkIGJlZm9yZS5cbiAgICAgICAgICAgIHRoaXMuX19sYXN0UmVuZGVyZWRJbmRleCA9IF9pbmZpbml0eTtcbiAgICAgICAgICAgIHByZXZpb3VzTGVuZ3RoID0gMDtcbiAgICAgICAgICAgIC8vIE5vdGUsIHRoZSBjYWxsYmFjayBhdm9pZHMgY2xvc2luZyBvdmVyIGB0aGlzYCBzbyB0aGF0IHRoZSBkaXJlY3RpdmVcbiAgICAgICAgICAgIC8vIGNhbiBiZSBnYydlZCBiZWZvcmUgdGhlIHByb21pc2UgcmVzb2x2ZXM7IGluc3RlYWQgYHRoaXNgIGlzIHJldHJpZXZlZFxuICAgICAgICAgICAgLy8gZnJvbSBgd2Vha1RoaXNgLCB3aGljaCBjYW4gYnJlYWsgdGhlIGhhcmQgcmVmZXJlbmNlIGluIHRoZSBjbG9zdXJlIHdoZW5cbiAgICAgICAgICAgIC8vIHRoZSBkaXJlY3RpdmUgZGlzY29ubmVjdHNcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihhc3luYyAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgZGlzY29ubmVjdGVkLCB3YWl0IHVudGlsIHdlJ3JlIChtYXliZSkgcmVjb25uZWN0ZWRcbiAgICAgICAgICAgICAgICAvLyBUaGUgd2hpbGUgbG9vcCBoZXJlIGhhbmRsZXMgdGhlIGNhc2UgdGhhdCB0aGUgY29ubmVjdGlvbiBzdGF0ZVxuICAgICAgICAgICAgICAgIC8vIHRocmFzaGVzLCBjYXVzaW5nIHRoZSBwYXVzZXIgdG8gcmVzdW1lIGFuZCB0aGVuIGdldCByZS1wYXVzZWRcbiAgICAgICAgICAgICAgICB3aGlsZSAocGF1c2VyLmdldCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHBhdXNlci5nZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNhbGxiYWNrIGdldHMgaGVyZSBhbmQgdGhlcmUgaXMgbm8gYHRoaXNgLCBpdCBtZWFucyB0aGF0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGRpcmVjdGl2ZSBoYXMgYmVlbiBkaXNjb25uZWN0ZWQgYW5kIGdhcmJhZ2UgY29sbGVjdGVkIGFuZCB3ZSBkb24ndFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gZG8gYW55dGhpbmcgZWxzZVxuICAgICAgICAgICAgICAgIGNvbnN0IF90aGlzID0gd2Vha1RoaXMuZGVyZWYoKTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IF90aGlzLl9fdmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBzdGF0ZS52YWx1ZXMgZG9lc24ndCBjb250YWluIHRoZSB2YWx1ZSwgd2UndmUgcmUtcmVuZGVyZWQgd2l0aG91dFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdmFsdWUsIHNvIGRvbid0IHJlbmRlciBpdC4gVGhlbiwgb25seSByZW5kZXIgaWYgdGhlIHZhbHVlIGlzXG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZ2hlci1wcmlvcml0eSB0aGFuIHdoYXQncyBhbHJlYWR5IGJlZW4gcmVuZGVyZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xICYmIGluZGV4IDwgX3RoaXMuX19sYXN0UmVuZGVyZWRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX19sYXN0UmVuZGVyZWRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0VmFsdWUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub0NoYW5nZTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkKCkge1xuICAgICAgICB0aGlzLl9fd2Vha1RoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgICB0aGlzLl9fcGF1c2VyLnBhdXNlKCk7XG4gICAgfVxuICAgIHJlY29ubmVjdGVkKCkge1xuICAgICAgICB0aGlzLl9fd2Vha1RoaXMucmVjb25uZWN0KHRoaXMpO1xuICAgICAgICB0aGlzLl9fcGF1c2VyLnJlc3VtZSgpO1xuICAgIH1cbn1cbi8qKlxuICogUmVuZGVycyBvbmUgb2YgYSBzZXJpZXMgb2YgdmFsdWVzLCBpbmNsdWRpbmcgUHJvbWlzZXMsIHRvIGEgUGFydC5cbiAqXG4gKiBWYWx1ZXMgYXJlIHJlbmRlcmVkIGluIHByaW9yaXR5IG9yZGVyLCB3aXRoIHRoZSBmaXJzdCBhcmd1bWVudCBoYXZpbmcgdGhlXG4gKiBoaWdoZXN0IHByaW9yaXR5IGFuZCB0aGUgbGFzdCBhcmd1bWVudCBoYXZpbmcgdGhlIGxvd2VzdCBwcmlvcml0eS4gSWYgYVxuICogdmFsdWUgaXMgYSBQcm9taXNlLCBsb3ctcHJpb3JpdHkgdmFsdWVzIHdpbGwgYmUgcmVuZGVyZWQgdW50aWwgaXQgcmVzb2x2ZXMuXG4gKlxuICogVGhlIHByaW9yaXR5IG9mIHZhbHVlcyBjYW4gYmUgdXNlZCB0byBjcmVhdGUgcGxhY2Vob2xkZXIgY29udGVudCBmb3IgYXN5bmNcbiAqIGRhdGEuIEZvciBleGFtcGxlLCBhIFByb21pc2Ugd2l0aCBwZW5kaW5nIGNvbnRlbnQgY2FuIGJlIHRoZSBmaXJzdCxcbiAqIGhpZ2hlc3QtcHJpb3JpdHksIGFyZ3VtZW50LCBhbmQgYSBub25fcHJvbWlzZSBsb2FkaW5nIGluZGljYXRvciB0ZW1wbGF0ZSBjYW5cbiAqIGJlIHVzZWQgYXMgdGhlIHNlY29uZCwgbG93ZXItcHJpb3JpdHksIGFyZ3VtZW50LiBUaGUgbG9hZGluZyBpbmRpY2F0b3Igd2lsbFxuICogcmVuZGVyIGltbWVkaWF0ZWx5LCBhbmQgdGhlIHByaW1hcnkgY29udGVudCB3aWxsIHJlbmRlciB3aGVuIHRoZSBQcm9taXNlXG4gKiByZXNvbHZlcy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBjb250ZW50ID0gZmV0Y2goJy4vY29udGVudC50eHQnKS50aGVuKHIgPT4gci50ZXh0KCkpO1xuICogaHRtbGAke3VudGlsKGNvbnRlbnQsIGh0bWxgPHNwYW4+TG9hZGluZy4uLjwvc3Bhbj5gKX1gXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IHVudGlsID0gZGlyZWN0aXZlKFVudGlsRGlyZWN0aXZlKTtcbi8qKlxuICogVGhlIHR5cGUgb2YgdGhlIGNsYXNzIHRoYXQgcG93ZXJzIHRoaXMgZGlyZWN0aXZlLiBOZWNlc3NhcnkgZm9yIG5hbWluZyB0aGVcbiAqIGRpcmVjdGl2ZSdzIHJldHVybiB0eXBlLlxuICovXG4vLyBleHBvcnQgdHlwZSB7VW50aWxEaXJlY3RpdmV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW50aWwuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2EsIF9iLCBfYywgX2Q7XG5jb25zdCBERVZfTU9ERSA9IHRydWU7XG5jb25zdCBFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MgPSB0cnVlO1xuY29uc3QgRU5BQkxFX1NIQURZRE9NX05PUEFUQ0ggPSB0cnVlO1xuLyoqXG4gKiBVc2VmdWwgZm9yIHZpc3VhbGl6aW5nIGFuZCBsb2dnaW5nIGluc2lnaHRzIGludG8gd2hhdCB0aGUgTGl0IHRlbXBsYXRlIHN5c3RlbSBpcyBkb2luZy5cbiAqXG4gKiBDb21waWxlZCBvdXQgb2YgcHJvZCBtb2RlIGJ1aWxkcy5cbiAqL1xuY29uc3QgZGVidWdMb2dFdmVudCA9IERFVl9NT0RFXG4gICAgPyAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hvdWxkRW1pdCA9IHdpbmRvd1xuICAgICAgICAgICAgLmVtaXRMaXREZWJ1Z0xvZ0V2ZW50cztcbiAgICAgICAgaWYgKCFzaG91bGRFbWl0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdsaXQtZGVidWcnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IGV2ZW50LFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIDogdW5kZWZpbmVkO1xuLy8gVXNlZCBmb3IgY29ubmVjdGluZyBiZWdpblJlbmRlciBhbmQgZW5kUmVuZGVyIGV2ZW50cyB3aGVuIHRoZXJlIGFyZSBuZXN0ZWRcbi8vIHJlbmRlcnMgd2hlbiBlcnJvcnMgYXJlIHRocm93biBwcmV2ZW50aW5nIGFuIGVuZFJlbmRlciBldmVudCBmcm9tIGJlaW5nXG4vLyBjYWxsZWQuXG5sZXQgZGVidWdMb2dSZW5kZXJJZCA9IDA7XG4vKipcbiAqIGB0cnVlYCBpZiB3ZSdyZSBidWlsZGluZyBmb3IgZ29vZ2xlMyB3aXRoIHRlbXBvcmFyeSBiYWNrLWNvbXBhdCBoZWxwZXJzLlxuICogVGhpcyBleHBvcnQgaXMgbm90IHByZXNlbnQgaW4gcHJvZCBidWlsZHMuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IElOVEVSTkFMID0gdHJ1ZTtcbmxldCBpc3N1ZVdhcm5pbmc7XG5pZiAoREVWX01PREUpIHtcbiAgICAoX2EgPSBnbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncyA9IG5ldyBTZXQoKSk7XG4gICAgLy8gSXNzdWUgYSB3YXJuaW5nLCBpZiB3ZSBoYXZlbid0IGFscmVhZHkuXG4gICAgaXNzdWVXYXJuaW5nID0gKGNvZGUsIHdhcm5pbmcpID0+IHtcbiAgICAgICAgd2FybmluZyArPSBjb2RlXG4gICAgICAgICAgICA/IGAgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvJHtjb2RlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICAgICAgICA6ICcnO1xuICAgICAgICBpZiAoIWdsb2JhbFRoaXMubGl0SXNzdWVkV2FybmluZ3MuaGFzKHdhcm5pbmcpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4od2FybmluZyk7XG4gICAgICAgICAgICBnbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzLmFkZCh3YXJuaW5nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaXNzdWVXYXJuaW5nKCdkZXYtbW9kZScsIGBMaXQgaXMgaW4gZGV2IG1vZGUuIE5vdCByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiFgKTtcbn1cbmNvbnN0IHdyYXAgPSBFTkFCTEVfU0hBRFlET01fTk9QQVRDSCAmJlxuICAgICgoX2IgPSB3aW5kb3cuU2hhZHlET00pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pblVzZSkgJiZcbiAgICAoKF9jID0gd2luZG93LlNoYWR5RE9NKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Mubm9QYXRjaCkgPT09IHRydWVcbiAgICA/IHdpbmRvdy5TaGFkeURPTS53cmFwXG4gICAgOiAobm9kZSkgPT4gbm9kZTtcbmNvbnN0IHRydXN0ZWRUeXBlcyA9IGdsb2JhbFRoaXMudHJ1c3RlZFR5cGVzO1xuLyoqXG4gKiBPdXIgVHJ1c3RlZFR5cGVQb2xpY3kgZm9yIEhUTUwgd2hpY2ggaXMgZGVjbGFyZWQgdXNpbmcgdGhlIGh0bWwgdGVtcGxhdGVcbiAqIHRhZyBmdW5jdGlvbi5cbiAqXG4gKiBUaGF0IEhUTUwgaXMgYSBkZXZlbG9wZXItYXV0aG9yZWQgY29uc3RhbnQsIGFuZCBpcyBwYXJzZWQgd2l0aCBpbm5lckhUTUxcbiAqIGJlZm9yZSBhbnkgdW50cnVzdGVkIGV4cHJlc3Npb25zIGhhdmUgYmVlbiBtaXhlZCBpbi4gVGhlcmVmb3IgaXQgaXNcbiAqIGNvbnNpZGVyZWQgc2FmZSBieSBjb25zdHJ1Y3Rpb24uXG4gKi9cbmNvbnN0IHBvbGljeSA9IHRydXN0ZWRUeXBlc1xuICAgID8gdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSgnbGl0LWh0bWwnLCB7XG4gICAgICAgIGNyZWF0ZUhUTUw6IChzKSA9PiBzLFxuICAgIH0pXG4gICAgOiB1bmRlZmluZWQ7XG5jb25zdCBpZGVudGl0eUZ1bmN0aW9uID0gKHZhbHVlKSA9PiB2YWx1ZTtcbmNvbnN0IG5vb3BTYW5pdGl6ZXIgPSAoX25vZGUsIF9uYW1lLCBfdHlwZSkgPT4gaWRlbnRpdHlGdW5jdGlvbjtcbi8qKiBTZXRzIHRoZSBnbG9iYWwgc2FuaXRpemVyIGZhY3RvcnkuICovXG5jb25zdCBzZXRTYW5pdGl6ZXIgPSAobmV3U2FuaXRpemVyKSA9PiB7XG4gICAgaWYgKCFFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2FuaXRpemVyRmFjdG9yeUludGVybmFsICE9PSBub29wU2FuaXRpemVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0ZW1wdGVkIHRvIG92ZXJ3cml0ZSBleGlzdGluZyBsaXQtaHRtbCBzZWN1cml0eSBwb2xpY3kuYCArXG4gICAgICAgICAgICBgIHNldFNhbml0aXplRE9NVmFsdWVGYWN0b3J5IHNob3VsZCBiZSBjYWxsZWQgYXQgbW9zdCBvbmNlLmApO1xuICAgIH1cbiAgICBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgPSBuZXdTYW5pdGl6ZXI7XG59O1xuLyoqXG4gKiBPbmx5IHVzZWQgaW4gaW50ZXJuYWwgdGVzdHMsIG5vdCBhIHBhcnQgb2YgdGhlIHB1YmxpYyBBUEkuXG4gKi9cbmNvbnN0IF90ZXN0T25seUNsZWFyU2FuaXRpemVyRmFjdG9yeURvTm90Q2FsbE9yRWxzZSA9ICgpID0+IHtcbiAgICBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgPSBub29wU2FuaXRpemVyO1xufTtcbmNvbnN0IGNyZWF0ZVNhbml0aXplciA9IChub2RlLCBuYW1lLCB0eXBlKSA9PiB7XG4gICAgcmV0dXJuIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbChub2RlLCBuYW1lLCB0eXBlKTtcbn07XG4vLyBBZGRlZCB0byBhbiBhdHRyaWJ1dGUgbmFtZSB0byBtYXJrIHRoZSBhdHRyaWJ1dGUgYXMgYm91bmQgc28gd2UgY2FuIGZpbmRcbi8vIGl0IGVhc2lseS5cbmNvbnN0IGJvdW5kQXR0cmlidXRlU3VmZml4ID0gJyRsaXQkJztcbi8vIFRoaXMgbWFya2VyIGlzIHVzZWQgaW4gbWFueSBzeW50YWN0aWMgcG9zaXRpb25zIGluIEhUTUwsIHNvIGl0IG11c3QgYmVcbi8vIGEgdmFsaWQgZWxlbWVudCBuYW1lIGFuZCBhdHRyaWJ1dGUgbmFtZS4gV2UgZG9uJ3Qgc3VwcG9ydCBkeW5hbWljIG5hbWVzICh5ZXQpXG4vLyBidXQgdGhpcyBhdCBsZWFzdCBlbnN1cmVzIHRoYXQgdGhlIHBhcnNlIHRyZWUgaXMgY2xvc2VyIHRvIHRoZSB0ZW1wbGF0ZVxuLy8gaW50ZW50aW9uLlxuY29uc3QgbWFya2VyID0gYGxpdCQke1N0cmluZyhNYXRoLnJhbmRvbSgpKS5zbGljZSg5KX0kYDtcbi8vIFN0cmluZyB1c2VkIHRvIHRlbGwgaWYgYSBjb21tZW50IGlzIGEgbWFya2VyIGNvbW1lbnRcbmNvbnN0IG1hcmtlck1hdGNoID0gJz8nICsgbWFya2VyO1xuLy8gVGV4dCB1c2VkIHRvIGluc2VydCBhIGNvbW1lbnQgbWFya2VyIG5vZGUuIFdlIHVzZSBwcm9jZXNzaW5nIGluc3RydWN0aW9uXG4vLyBzeW50YXggYmVjYXVzZSBpdCdzIHNsaWdodGx5IHNtYWxsZXIsIGJ1dCBwYXJzZXMgYXMgYSBjb21tZW50IG5vZGUuXG5jb25zdCBub2RlTWFya2VyID0gYDwke21hcmtlck1hdGNofT5gO1xuY29uc3QgZCA9IGRvY3VtZW50O1xuLy8gQ3JlYXRlcyBhIGR5bmFtaWMgbWFya2VyLiBXZSBuZXZlciBoYXZlIHRvIHNlYXJjaCBmb3IgdGhlc2UgaW4gdGhlIERPTS5cbmNvbnN0IGNyZWF0ZU1hcmtlciA9ICh2ID0gJycpID0+IGQuY3JlYXRlQ29tbWVudCh2KTtcbmNvbnN0IGlzUHJpbWl0aXZlID0gKHZhbHVlKSA9PiB2YWx1ZSA9PT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZSAhPSAnZnVuY3Rpb24nKTtcbmNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuY29uc3QgaXNJdGVyYWJsZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgfHxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgdHlwZW9mICgoX2EgPSB2YWx1ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW1N5bWJvbC5pdGVyYXRvcl0pID09PSAnZnVuY3Rpb24nO1xufTtcbmNvbnN0IFNQQUNFX0NIQVIgPSBgWyBcXHRcXG5cXGZcXHJdYDtcbmNvbnN0IEFUVFJfVkFMVUVfQ0hBUiA9IGBbXiBcXHRcXG5cXGZcXHJcIidcXGA8Pj1dYDtcbmNvbnN0IE5BTUVfQ0hBUiA9IGBbXlxcXFxzXCInPj0vXWA7XG4vLyBUaGVzZSByZWdleGVzIHJlcHJlc2VudCB0aGUgZml2ZSBwYXJzaW5nIHN0YXRlcyB0aGF0IHdlIGNhcmUgYWJvdXQgaW4gdGhlXG4vLyBUZW1wbGF0ZSdzIEhUTUwgc2Nhbm5lci4gVGhleSBtYXRjaCB0aGUgKmVuZCogb2YgdGhlIHN0YXRlIHRoZXkncmUgbmFtZWRcbi8vIGFmdGVyLlxuLy8gRGVwZW5kaW5nIG9uIHRoZSBtYXRjaCwgd2UgdHJhbnNpdGlvbiB0byBhIG5ldyBzdGF0ZS4gSWYgdGhlcmUncyBubyBtYXRjaCxcbi8vIHdlIHN0YXkgaW4gdGhlIHNhbWUgc3RhdGUuXG4vLyBOb3RlIHRoYXQgdGhlIHJlZ2V4ZXMgYXJlIHN0YXRlZnVsLiBXZSB1dGlsaXplIGxhc3RJbmRleCBhbmQgc3luYyBpdFxuLy8gYWNyb3NzIHRoZSBtdWx0aXBsZSByZWdleGVzIHVzZWQuIEluIGFkZGl0aW9uIHRvIHRoZSBmaXZlIHJlZ2V4ZXMgYmVsb3dcbi8vIHdlIGFsc28gZHluYW1pY2FsbHkgY3JlYXRlIGEgcmVnZXggdG8gZmluZCB0aGUgbWF0Y2hpbmcgZW5kIHRhZ3MgZm9yIHJhd1xuLy8gdGV4dCBlbGVtZW50cy5cbi8qKlxuICogRW5kIG9mIHRleHQgaXM6IGA8YCBmb2xsb3dlZCBieTpcbiAqICAgKGNvbW1lbnQgc3RhcnQpIG9yICh0YWcpIG9yIChkeW5hbWljIHRhZyBiaW5kaW5nKVxuICovXG5jb25zdCB0ZXh0RW5kUmVnZXggPSAvPCg/OighLS18XFwvW15hLXpBLVpdKXwoXFwvP1thLXpBLVpdW14+XFxzXSopfChcXC8/JCkpL2c7XG5jb25zdCBDT01NRU5UX1NUQVJUID0gMTtcbmNvbnN0IFRBR19OQU1FID0gMjtcbmNvbnN0IERZTkFNSUNfVEFHX05BTUUgPSAzO1xuY29uc3QgY29tbWVudEVuZFJlZ2V4ID0gLy0tPi9nO1xuLyoqXG4gKiBDb21tZW50cyBub3Qgc3RhcnRlZCB3aXRoIDwhLS0sIGxpa2UgPC97LCBjYW4gYmUgZW5kZWQgYnkgYSBzaW5nbGUgYD5gXG4gKi9cbmNvbnN0IGNvbW1lbnQyRW5kUmVnZXggPSAvPi9nO1xuLyoqXG4gKiBUaGUgdGFnRW5kIHJlZ2V4IG1hdGNoZXMgdGhlIGVuZCBvZiB0aGUgXCJpbnNpZGUgYW4gb3BlbmluZ1wiIHRhZyBzeW50YXhcbiAqIHBvc2l0aW9uLiBJdCBlaXRoZXIgbWF0Y2hlcyBhIGA+YCwgYW4gYXR0cmlidXRlLWxpa2Ugc2VxdWVuY2UsIG9yIHRoZSBlbmRcbiAqIG9mIHRoZSBzdHJpbmcgYWZ0ZXIgYSBzcGFjZSAoYXR0cmlidXRlLW5hbWUgcG9zaXRpb24gZW5kaW5nKS5cbiAqXG4gKiBTZWUgYXR0cmlidXRlcyBpbiB0aGUgSFRNTCBzcGVjOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI2VsZW1lbnRzLWF0dHJpYnV0ZXNcbiAqXG4gKiBcIiBcXHRcXG5cXGZcXHJcIiBhcmUgSFRNTCBzcGFjZSBjaGFyYWN0ZXJzOlxuICogaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI2FzY2lpLXdoaXRlc3BhY2VcbiAqXG4gKiBTbyBhbiBhdHRyaWJ1dGUgaXM6XG4gKiAgKiBUaGUgbmFtZTogYW55IGNoYXJhY3RlciBleGNlcHQgYSB3aGl0ZXNwYWNlIGNoYXJhY3RlciwgKFwiKSwgKCcpLCBcIj5cIixcbiAqICAgIFwiPVwiLCBvciBcIi9cIi4gTm90ZTogdGhpcyBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgSFRNTCBzcGVjIHdoaWNoIGFsc28gZXhjbHVkZXMgY29udHJvbCBjaGFyYWN0ZXJzLlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5IFwiPVwiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnk6XG4gKiAgICAqIEFueSBjaGFyYWN0ZXIgZXhjZXB0IHNwYWNlLCAoJyksIChcIiksIFwiPFwiLCBcIj5cIiwgXCI9XCIsIChgKSwgb3JcbiAqICAgICogKFwiKSB0aGVuIGFueSBub24tKFwiKSwgb3JcbiAqICAgICogKCcpIHRoZW4gYW55IG5vbi0oJylcbiAqL1xuY29uc3QgdGFnRW5kUmVnZXggPSBuZXcgUmVnRXhwKGA+fCR7U1BBQ0VfQ0hBUn0oPzooJHtOQU1FX0NIQVJ9KykoJHtTUEFDRV9DSEFSfSo9JHtTUEFDRV9DSEFSfSooPzoke0FUVFJfVkFMVUVfQ0hBUn18KFwifCcpfCkpfCQpYCwgJ2cnKTtcbmNvbnN0IEVOVElSRV9NQVRDSCA9IDA7XG5jb25zdCBBVFRSSUJVVEVfTkFNRSA9IDE7XG5jb25zdCBTUEFDRVNfQU5EX0VRVUFMUyA9IDI7XG5jb25zdCBRVU9URV9DSEFSID0gMztcbmNvbnN0IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4ID0gLycvZztcbmNvbnN0IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4ID0gL1wiL2c7XG4vKipcbiAqIE1hdGNoZXMgdGhlIHJhdyB0ZXh0IGVsZW1lbnRzLlxuICpcbiAqIENvbW1lbnRzIGFyZSBub3QgcGFyc2VkIHdpdGhpbiByYXcgdGV4dCBlbGVtZW50cywgc28gd2UgbmVlZCB0byBzZWFyY2ggdGhlaXJcbiAqIHRleHQgY29udGVudCBmb3IgbWFya2VyIHN0cmluZ3MuXG4gKi9cbmNvbnN0IHJhd1RleHRFbGVtZW50ID0gL14oPzpzY3JpcHR8c3R5bGV8dGV4dGFyZWF8dGl0bGUpJC9pO1xuLyoqIFRlbXBsYXRlUmVzdWx0IHR5cGVzICovXG5jb25zdCBIVE1MX1JFU1VMVCA9IDE7XG5jb25zdCBTVkdfUkVTVUxUID0gMjtcbi8vIFRlbXBsYXRlUGFydCB0eXBlc1xuLy8gSU1QT1JUQU5UOiB0aGVzZSBtdXN0IG1hdGNoIHRoZSB2YWx1ZXMgaW4gUGFydFR5cGVcbmNvbnN0IEFUVFJJQlVURV9QQVJUID0gMTtcbmNvbnN0IENISUxEX1BBUlQgPSAyO1xuY29uc3QgUFJPUEVSVFlfUEFSVCA9IDM7XG5jb25zdCBCT09MRUFOX0FUVFJJQlVURV9QQVJUID0gNDtcbmNvbnN0IEVWRU5UX1BBUlQgPSA1O1xuY29uc3QgRUxFTUVOVF9QQVJUID0gNjtcbmNvbnN0IENPTU1FTlRfUEFSVCA9IDc7XG4vKipcbiAqIEdlbmVyYXRlcyBhIHRlbXBsYXRlIGxpdGVyYWwgdGFnIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFRlbXBsYXRlUmVzdWx0IHdpdGhcbiAqIHRoZSBnaXZlbiByZXN1bHQgdHlwZS5cbiAqL1xuY29uc3QgdGFnID0gKHR5cGUpID0+IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IHtcbiAgICAvLyBXYXJuIGFnYWluc3QgdGVtcGxhdGVzIG9jdGFsIGVzY2FwZSBzZXF1ZW5jZXNcbiAgICAvLyBXZSBkbyB0aGlzIGhlcmUgcmF0aGVyIHRoYW4gaW4gcmVuZGVyIHNvIHRoYXQgdGhlIHdhcm5pbmcgaXMgY2xvc2VyIHRvIHRoZVxuICAgIC8vIHRlbXBsYXRlIGRlZmluaXRpb24uXG4gICAgaWYgKERFVl9NT0RFICYmIHN0cmluZ3Muc29tZSgocykgPT4gcyA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1NvbWUgdGVtcGxhdGUgc3RyaW5ncyBhcmUgdW5kZWZpbmVkLlxcbicgK1xuICAgICAgICAgICAgJ1RoaXMgaXMgcHJvYmFibHkgY2F1c2VkIGJ5IGlsbGVnYWwgb2N0YWwgZXNjYXBlIHNlcXVlbmNlcy4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgWydfJGxpdFR5cGUkJ106IHR5cGUsXG4gICAgICAgIHN0cmluZ3MsXG4gICAgICAgIHZhbHVlcyxcbiAgICB9O1xufTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gSFRNTCB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IGhlYWRlciA9ICh0aXRsZTogc3RyaW5nKSA9PiBodG1sYDxoMT4ke3RpdGxlfTwvaDE+YDtcbiAqIGBgYFxuICpcbiAqIFRoZSBgaHRtbGAgdGFnIHJldHVybnMgYSBkZXNjcmlwdGlvbiBvZiB0aGUgRE9NIHRvIHJlbmRlciBhcyBhIHZhbHVlLiBJdCBpc1xuICogbGF6eSwgbWVhbmluZyBubyB3b3JrIGlzIGRvbmUgdW50aWwgdGhlIHRlbXBsYXRlIGlzIHJlbmRlcmVkLiBXaGVuIHJlbmRlcmluZyxcbiAqIGlmIGEgdGVtcGxhdGUgY29tZXMgZnJvbSB0aGUgc2FtZSBleHByZXNzaW9uIGFzIGEgcHJldmlvdXNseSByZW5kZXJlZCByZXN1bHQsXG4gKiBpdCdzIGVmZmljaWVudGx5IHVwZGF0ZWQgaW5zdGVhZCBvZiByZXBsYWNlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWwgPSB0YWcoSFRNTF9SRVNVTFQpO1xuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBTVkcgZnJhZ21lbnQgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCByZWN0ID0gc3ZnYDxyZWN0IHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiPjwvcmVjdD5gO1xuICpcbiAqIGNvbnN0IG15SW1hZ2UgPSBodG1sYFxuICogICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTAgMTBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gKiAgICAgJHtyZWN0fVxuICogICA8L3N2Zz5gO1xuICogYGBgXG4gKlxuICogVGhlIGBzdmdgICp0YWcgZnVuY3Rpb24qIHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIFNWRyBmcmFnbWVudHMsIG9yIGVsZW1lbnRzXG4gKiB0aGF0IHdvdWxkIGJlIGNvbnRhaW5lZCAqKmluc2lkZSoqIGFuIGA8c3ZnPmAgSFRNTCBlbGVtZW50LiBBIGNvbW1vbiBlcnJvciBpc1xuICogcGxhY2luZyBhbiBgPHN2Zz5gICplbGVtZW50KiBpbiBhIHRlbXBsYXRlIHRhZ2dlZCB3aXRoIHRoZSBgc3ZnYCB0YWdcbiAqIGZ1bmN0aW9uLiBUaGUgYDxzdmc+YCBlbGVtZW50IGlzIGFuIEhUTUwgZWxlbWVudCBhbmQgc2hvdWxkIGJlIHVzZWQgd2l0aGluIGFcbiAqIHRlbXBsYXRlIHRhZ2dlZCB3aXRoIHRoZSB7QGxpbmtjb2RlIGh0bWx9IHRhZyBmdW5jdGlvbi5cbiAqXG4gKiBJbiBMaXRFbGVtZW50IHVzYWdlLCBpdCdzIGludmFsaWQgdG8gcmV0dXJuIGFuIFNWRyBmcmFnbWVudCBmcm9tIHRoZVxuICogYHJlbmRlcigpYCBtZXRob2QsIGFzIHRoZSBTVkcgZnJhZ21lbnQgd2lsbCBiZSBjb250YWluZWQgd2l0aGluIHRoZSBlbGVtZW50J3NcbiAqIHNoYWRvdyByb290IGFuZCB0aHVzIGNhbm5vdCBiZSB1c2VkIHdpdGhpbiBhbiBgPHN2Zz5gIEhUTUwgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN2ZyA9IHRhZyhTVkdfUkVTVUxUKTtcbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgdGhhdCBhIHZhbHVlIHdhcyBoYW5kbGVkIGJ5IGEgZGlyZWN0aXZlIGFuZFxuICogc2hvdWxkIG5vdCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG4gKi9cbmV4cG9ydCBjb25zdCBub0NoYW5nZSA9IFN5bWJvbC5mb3IoJ2xpdC1ub0NoYW5nZScpO1xuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyBhIENoaWxkUGFydCB0byBmdWxseSBjbGVhciBpdHMgY29udGVudC5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgYnV0dG9uID0gaHRtbGAke1xuICogIHVzZXIuaXNBZG1pblxuICogICAgPyBodG1sYDxidXR0b24+REVMRVRFPC9idXR0b24+YFxuICogICAgOiBub3RoaW5nXG4gKiB9YDtcbiAqIGBgYFxuICpcbiAqIFByZWZlciB1c2luZyBgbm90aGluZ2Agb3ZlciBvdGhlciBmYWxzeSB2YWx1ZXMgYXMgaXQgcHJvdmlkZXMgYSBjb25zaXN0ZW50XG4gKiBiZWhhdmlvciBiZXR3ZWVuIHZhcmlvdXMgZXhwcmVzc2lvbiBiaW5kaW5nIGNvbnRleHRzLlxuICpcbiAqIEluIGNoaWxkIGV4cHJlc3Npb25zLCBgdW5kZWZpbmVkYCwgYG51bGxgLCBgJydgLCBhbmQgYG5vdGhpbmdgIGFsbCBiZWhhdmUgdGhlXG4gKiBzYW1lIGFuZCByZW5kZXIgbm8gbm9kZXMuIEluIGF0dHJpYnV0ZSBleHByZXNzaW9ucywgYG5vdGhpbmdgIF9yZW1vdmVzXyB0aGVcbiAqIGF0dHJpYnV0ZSwgd2hpbGUgYHVuZGVmaW5lZGAgYW5kIGBudWxsYCB3aWxsIHJlbmRlciBhbiBlbXB0eSBzdHJpbmcuIEluXG4gKiBwcm9wZXJ0eSBleHByZXNzaW9ucyBgbm90aGluZ2AgYmVjb21lcyBgdW5kZWZpbmVkYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdGhpbmcgPSBTeW1ib2wuZm9yKCdsaXQtbm90aGluZycpO1xuLyoqXG4gKiBUaGUgY2FjaGUgb2YgcHJlcGFyZWQgdGVtcGxhdGVzLCBrZXllZCBieSB0aGUgdGFnZ2VkIFRlbXBsYXRlU3RyaW5nc0FycmF5XG4gKiBhbmQgX25vdF8gYWNjb3VudGluZyBmb3IgdGhlIHNwZWNpZmljIHRlbXBsYXRlIHRhZyB1c2VkLiBUaGlzIG1lYW5zIHRoYXRcbiAqIHRlbXBsYXRlIHRhZ3MgY2Fubm90IGJlIGR5bmFtaWMgLSB0aGUgbXVzdCBzdGF0aWNhbGx5IGJlIG9uZSBvZiBodG1sLCBzdmcsXG4gKiBvciBhdHRyLiBUaGlzIHJlc3RyaWN0aW9uIHNpbXBsaWZpZXMgdGhlIGNhY2hlIGxvb2t1cCwgd2hpY2ggaXMgb24gdGhlIGhvdFxuICogcGF0aCBmb3IgcmVuZGVyaW5nLlxuICovXG5jb25zdCB0ZW1wbGF0ZUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogUmVuZGVycyBhIHZhbHVlLCB1c3VhbGx5IGEgbGl0LWh0bWwgVGVtcGxhdGVSZXN1bHQsIHRvIHRoZSBjb250YWluZXIuXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBjb250YWluZXJcbiAqIEBwYXJhbSBvcHRpb25zXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPSAodmFsdWUsIGNvbnRhaW5lciwgb3B0aW9ucykgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGNvbnN0IHJlbmRlcklkID0gREVWX01PREUgPyBkZWJ1Z0xvZ1JlbmRlcklkKysgOiAwO1xuICAgIGNvbnN0IHBhcnRPd25lck5vZGUgPSAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucmVuZGVyQmVmb3JlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBjb250YWluZXI7XG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGxldCBwYXJ0ID0gcGFydE93bmVyTm9kZVsnXyRsaXRQYXJ0JCddO1xuICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgIGtpbmQ6ICdiZWdpbiByZW5kZXInLFxuICAgICAgICBpZDogcmVuZGVySWQsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIHBhcnQsXG4gICAgfSk7XG4gICAgaWYgKHBhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBlbmROb2RlID0gKF9iID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnJlbmRlckJlZm9yZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogbnVsbDtcbiAgICAgICAgLy8gSW50ZXJuYWwgbW9kaWZpY2F0aW9uOiBkb24ndCBjbGVhciBjb250YWluZXIgdG8gbWF0Y2ggbGl0LWh0bWwgMi4wXG4gICAgICAgIGlmIChJTlRFUk5BTCAmJlxuICAgICAgICAgICAgKChfYyA9IG9wdGlvbnMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jbGVhckNvbnRhaW5lckZvckxpdDJNaWdyYXRpb25Pbmx5KSA9PT1cbiAgICAgICAgICAgICAgICB0cnVlKSB7XG4gICAgICAgICAgICBsZXQgbiA9IGNvbnRhaW5lci5maXJzdENoaWxkO1xuICAgICAgICAgICAgLy8gQ2xlYXIgb25seSB1cCB0byB0aGUgYGVuZE5vZGVgIGFrYSBgcmVuZGVyQmVmb3JlYCBub2RlLlxuICAgICAgICAgICAgd2hpbGUgKG4gJiYgbiAhPT0gZW5kTm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBuLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIG4ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgbiA9IG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgcGFydE93bmVyTm9kZVsnXyRsaXRQYXJ0JCddID0gcGFydCA9IG5ldyBDaGlsZFBhcnQoY29udGFpbmVyLmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgZW5kTm9kZSksIGVuZE5vZGUsIHVuZGVmaW5lZCwgb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge30pO1xuICAgIH1cbiAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWUpO1xuICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgIGtpbmQ6ICdlbmQgcmVuZGVyJyxcbiAgICAgICAgaWQ6IHJlbmRlcklkLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBwYXJ0LFxuICAgIH0pO1xuICAgIHJldHVybiBwYXJ0O1xufTtcbmlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICByZW5kZXIuc2V0U2FuaXRpemVyID0gc2V0U2FuaXRpemVyO1xuICAgIHJlbmRlci5jcmVhdGVTYW5pdGl6ZXIgPSBjcmVhdGVTYW5pdGl6ZXI7XG4gICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgIHJlbmRlci5fdGVzdE9ubHlDbGVhclNhbml0aXplckZhY3RvcnlEb05vdENhbGxPckVsc2UgPVxuICAgICAgICAgICAgX3Rlc3RPbmx5Q2xlYXJTYW5pdGl6ZXJGYWN0b3J5RG9Ob3RDYWxsT3JFbHNlO1xuICAgIH1cbn1cbmNvbnN0IHdhbGtlciA9IGQuY3JlYXRlVHJlZVdhbGtlcihkLCAxMjkgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR9ICovLCBudWxsLCBmYWxzZSk7XG5sZXQgc2FuaXRpemVyRmFjdG9yeUludGVybmFsID0gbm9vcFNhbml0aXplcjtcbi8qKlxuICogUmV0dXJucyBhbiBIVE1MIHN0cmluZyBmb3IgdGhlIGdpdmVuIFRlbXBsYXRlU3RyaW5nc0FycmF5IGFuZCByZXN1bHQgdHlwZVxuICogKEhUTUwgb3IgU1ZHKSwgYWxvbmcgd2l0aCB0aGUgY2FzZS1zZW5zaXRpdmUgYm91bmQgYXR0cmlidXRlIG5hbWVzIGluXG4gKiB0ZW1wbGF0ZSBvcmRlci4gVGhlIEhUTUwgY29udGFpbnMgY29tbWVudCBjb21tZW50IG1hcmtlcnMgZGVub3RpbmcgdGhlXG4gKiBgQ2hpbGRQYXJ0YHMgYW5kIHN1ZmZpeGVzIG9uIGJvdW5kIGF0dHJpYnV0ZXMgZGVub3RpbmcgdGhlIGBBdHRyaWJ1dGVQYXJ0c2AuXG4gKlxuICogQHBhcmFtIHN0cmluZ3MgdGVtcGxhdGUgc3RyaW5ncyBhcnJheVxuICogQHBhcmFtIHR5cGUgSFRNTCBvciBTVkdcbiAqIEByZXR1cm4gQXJyYXkgY29udGFpbmluZyBgW2h0bWwsIGF0dHJOYW1lc11gIChhcnJheSByZXR1cm5lZCBmb3IgdGVyc2VuZXNzLFxuICogICAgIHRvIGF2b2lkIG9iamVjdCBmaWVsZHMgc2luY2UgdGhpcyBjb2RlIGlzIHNoYXJlZCB3aXRoIG5vbi1taW5pZmllZCBTU1JcbiAqICAgICBjb2RlKVxuICovXG5jb25zdCBnZXRUZW1wbGF0ZUh0bWwgPSAoc3RyaW5ncywgdHlwZSkgPT4ge1xuICAgIC8vIEluc2VydCBtYWtlcnMgaW50byB0aGUgdGVtcGxhdGUgSFRNTCB0byByZXByZXNlbnQgdGhlIHBvc2l0aW9uIG9mXG4gICAgLy8gYmluZGluZ3MuIFRoZSBmb2xsb3dpbmcgY29kZSBzY2FucyB0aGUgdGVtcGxhdGUgc3RyaW5ncyB0byBkZXRlcm1pbmUgdGhlXG4gICAgLy8gc3ludGFjdGljIHBvc2l0aW9uIG9mIHRoZSBiaW5kaW5ncy4gVGhleSBjYW4gYmUgaW4gdGV4dCBwb3NpdGlvbiwgd2hlcmVcbiAgICAvLyB3ZSBpbnNlcnQgYW4gSFRNTCBjb21tZW50LCBhdHRyaWJ1dGUgdmFsdWUgcG9zaXRpb24sIHdoZXJlIHdlIGluc2VydCBhXG4gICAgLy8gc2VudGluZWwgc3RyaW5nIGFuZCByZS13cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUsIG9yIGluc2lkZSBhIHRhZyB3aGVyZVxuICAgIC8vIHdlIGluc2VydCB0aGUgc2VudGluZWwgc3RyaW5nLlxuICAgIGNvbnN0IGwgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgLy8gU3RvcmVzIHRoZSBjYXNlLXNlbnNpdGl2ZSBib3VuZCBhdHRyaWJ1dGUgbmFtZXMgaW4gdGhlIG9yZGVyIG9mIHRoZWlyXG4gICAgLy8gcGFydHMuIEVsZW1lbnRQYXJ0cyBhcmUgYWxzbyByZWZsZWN0ZWQgaW4gdGhpcyBhcnJheSBhcyB1bmRlZmluZWRcbiAgICAvLyByYXRoZXIgdGhhbiBhIHN0cmluZywgdG8gZGlzYW1iaWd1YXRlIGZyb20gYXR0cmlidXRlIGJpbmRpbmdzLlxuICAgIGNvbnN0IGF0dHJOYW1lcyA9IFtdO1xuICAgIGxldCBodG1sID0gdHlwZSA9PT0gU1ZHX1JFU1VMVCA/ICc8c3ZnPicgOiAnJztcbiAgICAvLyBXaGVuIHdlJ3JlIGluc2lkZSBhIHJhdyB0ZXh0IHRhZyAobm90IGl0J3MgdGV4dCBjb250ZW50KSwgdGhlIHJlZ2V4XG4gICAgLy8gd2lsbCBzdGlsbCBiZSB0YWdSZWdleCBzbyB3ZSBjYW4gZmluZCBhdHRyaWJ1dGVzLCBidXQgd2lsbCBzd2l0Y2ggdG9cbiAgICAvLyB0aGlzIHJlZ2V4IHdoZW4gdGhlIHRhZyBlbmRzLlxuICAgIGxldCByYXdUZXh0RW5kUmVnZXg7XG4gICAgLy8gVGhlIGN1cnJlbnQgcGFyc2luZyBzdGF0ZSwgcmVwcmVzZW50ZWQgYXMgYSByZWZlcmVuY2UgdG8gb25lIG9mIHRoZVxuICAgIC8vIHJlZ2V4ZXNcbiAgICBsZXQgcmVnZXggPSB0ZXh0RW5kUmVnZXg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgcyA9IHN0cmluZ3NbaV07XG4gICAgICAgIC8vIFRoZSBpbmRleCBvZiB0aGUgZW5kIG9mIHRoZSBsYXN0IGF0dHJpYnV0ZSBuYW1lLiBXaGVuIHRoaXMgaXNcbiAgICAgICAgLy8gcG9zaXRpdmUgYXQgZW5kIG9mIGEgc3RyaW5nLCBpdCBtZWFucyB3ZSdyZSBpbiBhbiBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgICAgLy8gcG9zaXRpb24gYW5kIG5lZWQgdG8gcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUuXG4gICAgICAgIC8vIFdlIGFsc28gdXNlIGEgc3BlY2lhbCB2YWx1ZSBvZiAtMiB0byBpbmRpY2F0ZSB0aGF0IHdlIGVuY291bnRlcmVkXG4gICAgICAgIC8vIHRoZSBlbmQgb2YgYSBzdHJpbmcgaW4gYXR0cmlidXRlIG5hbWUgcG9zaXRpb24uXG4gICAgICAgIGxldCBhdHRyTmFtZUVuZEluZGV4ID0gLTE7XG4gICAgICAgIGxldCBhdHRyTmFtZTtcbiAgICAgICAgbGV0IGxhc3RJbmRleCA9IDA7XG4gICAgICAgIGxldCBtYXRjaDtcbiAgICAgICAgLy8gVGhlIGNvbmRpdGlvbnMgaW4gdGhpcyBsb29wIGhhbmRsZSB0aGUgY3VycmVudCBwYXJzZSBzdGF0ZSwgYW5kIHRoZVxuICAgICAgICAvLyBhc3NpZ25tZW50cyB0byB0aGUgYHJlZ2V4YCB2YXJpYWJsZSBhcmUgdGhlIHN0YXRlIHRyYW5zaXRpb25zLlxuICAgICAgICB3aGlsZSAobGFzdEluZGV4IDwgcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBzdGFydCBzZWFyY2hpbmcgZnJvbSB3aGVyZSB3ZSBwcmV2aW91c2x5IGxlZnQgb2ZmXG4gICAgICAgICAgICByZWdleC5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICBtYXRjaCA9IHJlZ2V4LmV4ZWMocyk7XG4gICAgICAgICAgICBpZiAobWF0Y2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhc3RJbmRleCA9IHJlZ2V4Lmxhc3RJbmRleDtcbiAgICAgICAgICAgIGlmIChyZWdleCA9PT0gdGV4dEVuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoW0NPTU1FTlRfU1RBUlRdID09PSAnIS0tJykge1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9IGNvbW1lbnRFbmRSZWdleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hbQ09NTUVOVF9TVEFSVF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBzdGFydGVkIGEgd2VpcmQgY29tbWVudCwgbGlrZSA8L3tcbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSBjb21tZW50MkVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtUQUdfTkFNRV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmF3VGV4dEVsZW1lbnQudGVzdChtYXRjaFtUQUdfTkFNRV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWNvcmQgaWYgd2UgZW5jb3VudGVyIGEgcmF3LXRleHQgZWxlbWVudC4gV2UnbGwgc3dpdGNoIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHJlZ2V4IGF0IHRoZSBlbmQgb2YgdGhlIHRhZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd1RleHRFbmRSZWdleCA9IG5ldyBSZWdFeHAoYDwvJHttYXRjaFtUQUdfTkFNRV19YCwgJ2cnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtEWU5BTUlDX1RBR19OQU1FXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCaW5kaW5ncyBpbiB0YWcgbmFtZXMgYXJlIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSB1c2Ugc3RhdGljIHRlbXBsYXRlcyBpbnN0ZWFkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU2VlIGh0dHBzOi8vbGl0LmRldi9kb2NzL3RlbXBsYXRlcy9leHByZXNzaW9ucy8jc3RhdGljLWV4cHJlc3Npb25zJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSB0YWdFbmRSZWdleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZWdleCA9PT0gdGFnRW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hbRU5USVJFX01BVENIXSA9PT0gJz4nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVuZCBvZiBhIHRhZy4gSWYgd2UgaGFkIHN0YXJ0ZWQgYSByYXctdGV4dCBlbGVtZW50LCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgICAgICAvLyByZWdleFxuICAgICAgICAgICAgICAgICAgICByZWdleCA9IHJhd1RleHRFbmRSZWdleCAhPT0gbnVsbCAmJiByYXdUZXh0RW5kUmVnZXggIT09IHZvaWQgMCA/IHJhd1RleHRFbmRSZWdleCA6IHRleHRFbmRSZWdleDtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgbWF5IGJlIGVuZGluZyBhbiB1bnF1b3RlZCBhdHRyaWJ1dGUgdmFsdWUsIHNvIG1ha2Ugc3VyZSB3ZVxuICAgICAgICAgICAgICAgICAgICAvLyBjbGVhciBhbnkgcGVuZGluZyBhdHRyTmFtZUVuZEluZGV4XG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lRW5kSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hbQVRUUklCVVRFX05BTUVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXR0cmlidXRlIG5hbWUgcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWVFbmRJbmRleCA9IC0yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWVFbmRJbmRleCA9IHJlZ2V4Lmxhc3RJbmRleCAtIG1hdGNoW1NQQUNFU19BTkRfRVFVQUxTXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lID0gbWF0Y2hbQVRUUklCVVRFX05BTUVdO1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFtRVU9URV9DSEFSXSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0YWdFbmRSZWdleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbWF0Y2hbUVVPVEVfQ0hBUl0gPT09ICdcIidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkb3VibGVRdW90ZUF0dHJFbmRSZWdleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2V4ID09PSBkb3VibGVRdW90ZUF0dHJFbmRSZWdleCB8fFxuICAgICAgICAgICAgICAgIHJlZ2V4ID09PSBzaW5nbGVRdW90ZUF0dHJFbmRSZWdleCkge1xuICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZWdleCA9PT0gY29tbWVudEVuZFJlZ2V4IHx8IHJlZ2V4ID09PSBjb21tZW50MkVuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgcmVnZXggPSB0ZXh0RW5kUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBOb3Qgb25lIG9mIHRoZSBmaXZlIHN0YXRlIHJlZ2V4ZXMsIHNvIGl0IG11c3QgYmUgdGhlIGR5bmFtaWNhbGx5XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlZCByYXcgdGV4dCByZWdleCBhbmQgd2UncmUgYXQgdGhlIGNsb3NlIG9mIHRoYXQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIHJhd1RleHRFbmRSZWdleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSBhdHRyTmFtZUVuZEluZGV4LCB3aGljaCBpbmRpY2F0ZXMgdGhhdCB3ZSBzaG91bGRcbiAgICAgICAgICAgIC8vIHJld3JpdGUgdGhlIGF0dHJpYnV0ZSBuYW1lLCBhc3NlcnQgdGhhdCB3ZSdyZSBpbiBhIHZhbGlkIGF0dHJpYnV0ZVxuICAgICAgICAgICAgLy8gcG9zaXRpb24gLSBlaXRoZXIgaW4gYSB0YWcsIG9yIGEgcXVvdGVkIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGF0dHJOYW1lRW5kSW5kZXggPT09IC0xIHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IHRhZ0VuZFJlZ2V4IHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4IHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4LCAndW5leHBlY3RlZCBwYXJzZSBzdGF0ZSBCJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgaGF2ZSBmb3VyIGNhc2VzOlxuICAgICAgICAvLyAgMS4gV2UncmUgaW4gdGV4dCBwb3NpdGlvbiwgYW5kIG5vdCBpbiBhIHJhdyB0ZXh0IGVsZW1lbnRcbiAgICAgICAgLy8gICAgIChyZWdleCA9PT0gdGV4dEVuZFJlZ2V4KTogaW5zZXJ0IGEgY29tbWVudCBtYXJrZXIuXG4gICAgICAgIC8vICAyLiBXZSBoYXZlIGEgbm9uLW5lZ2F0aXZlIGF0dHJOYW1lRW5kSW5kZXggd2hpY2ggbWVhbnMgd2UgbmVlZCB0b1xuICAgICAgICAvLyAgICAgcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUgdG8gYWRkIGEgYm91bmQgYXR0cmlidXRlIHN1ZmZpeC5cbiAgICAgICAgLy8gIDMuIFdlJ3JlIGF0IHRoZSBub24tZmlyc3QgYmluZGluZyBpbiBhIG11bHRpLWJpbmRpbmcgYXR0cmlidXRlLCB1c2UgYVxuICAgICAgICAvLyAgICAgcGxhaW4gbWFya2VyLlxuICAgICAgICAvLyAgNC4gV2UncmUgc29tZXdoZXJlIGVsc2UgaW5zaWRlIHRoZSB0YWcuIElmIHdlJ3JlIGluIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgIC8vICAgICBwb3NpdGlvbiAoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTIpLCBhZGQgYSBzZXF1ZW50aWFsIHN1ZmZpeCB0b1xuICAgICAgICAvLyAgICAgZ2VuZXJhdGUgYSB1bmlxdWUgYXR0cmlidXRlIG5hbWUuXG4gICAgICAgIC8vIERldGVjdCBhIGJpbmRpbmcgbmV4dCB0byBzZWxmLWNsb3NpbmcgdGFnIGVuZCBhbmQgaW5zZXJ0IGEgc3BhY2UgdG9cbiAgICAgICAgLy8gc2VwYXJhdGUgdGhlIG1hcmtlciBmcm9tIHRoZSB0YWcgZW5kOlxuICAgICAgICBjb25zdCBlbmQgPSByZWdleCA9PT0gdGFnRW5kUmVnZXggJiYgc3RyaW5nc1tpICsgMV0uc3RhcnRzV2l0aCgnLz4nKSA/ICcgJyA6ICcnO1xuICAgICAgICBodG1sICs9XG4gICAgICAgICAgICByZWdleCA9PT0gdGV4dEVuZFJlZ2V4XG4gICAgICAgICAgICAgICAgPyBzICsgbm9kZU1hcmtlclxuICAgICAgICAgICAgICAgIDogYXR0ck5hbWVFbmRJbmRleCA+PSAwXG4gICAgICAgICAgICAgICAgICAgID8gKGF0dHJOYW1lcy5wdXNoKGF0dHJOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpY2UoMCwgYXR0ck5hbWVFbmRJbmRleCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdW5kQXR0cmlidXRlU3VmZml4ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWNlKGF0dHJOYW1lRW5kSW5kZXgpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kXG4gICAgICAgICAgICAgICAgICAgIDogcyArXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGF0dHJOYW1lRW5kSW5kZXggPT09IC0yID8gKGF0dHJOYW1lcy5wdXNoKHVuZGVmaW5lZCksIGkpIDogZW5kKTtcbiAgICB9XG4gICAgY29uc3QgaHRtbFJlc3VsdCA9IGh0bWwgKyAoc3RyaW5nc1tsXSB8fCAnPD8+JykgKyAodHlwZSA9PT0gU1ZHX1JFU1VMVCA/ICc8L3N2Zz4nIDogJycpO1xuICAgIC8vIEEgc2VjdXJpdHkgY2hlY2sgdG8gcHJldmVudCBzcG9vZmluZyBvZiBMaXQgdGVtcGxhdGUgcmVzdWx0cy5cbiAgICAvLyBJbiB0aGUgZnV0dXJlLCB3ZSBtYXkgYmUgYWJsZSB0byByZXBsYWNlIHRoaXMgd2l0aCBBcnJheS5pc1RlbXBsYXRlT2JqZWN0LFxuICAgIC8vIHRob3VnaCB3ZSBtaWdodCBuZWVkIHRvIG1ha2UgdGhhdCBjaGVjayBpbnNpZGUgb2YgdGhlIGh0bWwgYW5kIHN2Z1xuICAgIC8vIGZ1bmN0aW9ucywgYmVjYXVzZSBwcmVjb21waWxlZCB0ZW1wbGF0ZXMgZG9uJ3QgY29tZSBpbiBhc1xuICAgIC8vIFRlbXBsYXRlU3RyaW5nQXJyYXkgb2JqZWN0cy5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3RyaW5ncykgfHwgIXN0cmluZ3MuaGFzT3duUHJvcGVydHkoJ3JhdycpKSB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gJ2ludmFsaWQgdGVtcGxhdGUgc3RyaW5ncyBhcnJheSc7XG4gICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICAgICAgYEludGVybmFsIEVycm9yOiBleHBlY3RlZCB0ZW1wbGF0ZSBzdHJpbmdzIHRvIGJlIGFuIGFycmF5IGAgK1xuICAgICAgICAgICAgICAgICAgICBgd2l0aCBhICdyYXcnIGZpZWxkLiBQbGVhc2UgZmlsZSBhIGJ1ZyBhdCBgICtcbiAgICAgICAgICAgICAgICAgICAgYGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy9uZXc/dGVtcGxhdGU9YnVnX3JlcG9ydC5tZCBgICtcbiAgICAgICAgICAgICAgICAgICAgYGFuZCBpbmNsdWRlIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgYnVpbGQgdG9vbGluZywgaWYgYW55LmA7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICAvLyBSZXR1cm5lZCBhcyBhbiBhcnJheSBmb3IgdGVyc2VuZXNzXG4gICAgcmV0dXJuIFtcbiAgICAgICAgcG9saWN5ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gcG9saWN5LmNyZWF0ZUhUTUwoaHRtbFJlc3VsdClcbiAgICAgICAgICAgIDogaHRtbFJlc3VsdCxcbiAgICAgICAgYXR0ck5hbWVzLFxuICAgIF07XG59O1xuY2xhc3MgVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgeyBzdHJpbmdzLCBbJ18kbGl0VHlwZSQnXTogdHlwZSB9LCBvcHRpb25zKSB7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5wYXJ0cyA9IFtdO1xuICAgICAgICBsZXQgbm9kZTtcbiAgICAgICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgICAgIGxldCBhdHRyTmFtZUluZGV4ID0gMDtcbiAgICAgICAgY29uc3QgcGFydENvdW50ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBwYXJ0cyA9IHRoaXMucGFydHM7XG4gICAgICAgIC8vIENyZWF0ZSB0ZW1wbGF0ZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IFtodG1sLCBhdHRyTmFtZXNdID0gZ2V0VGVtcGxhdGVIdG1sKHN0cmluZ3MsIHR5cGUpO1xuICAgICAgICB0aGlzLmVsID0gVGVtcGxhdGUuY3JlYXRlRWxlbWVudChodG1sLCBvcHRpb25zKTtcbiAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gdGhpcy5lbC5jb250ZW50O1xuICAgICAgICAvLyBSZXBhcmVudCBTVkcgbm9kZXMgaW50byB0ZW1wbGF0ZSByb290XG4gICAgICAgIGlmICh0eXBlID09PSBTVkdfUkVTVUxUKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5lbC5jb250ZW50O1xuICAgICAgICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHN2Z0VsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZCguLi5zdmdFbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdhbGsgdGhlIHRlbXBsYXRlIHRvIGZpbmQgYmluZGluZyBtYXJrZXJzIGFuZCBjcmVhdGUgVGVtcGxhdGVQYXJ0c1xuICAgICAgICB3aGlsZSAoKG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKSkgIT09IG51bGwgJiYgcGFydHMubGVuZ3RoIDwgcGFydENvdW50KSB7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWcgPSBub2RlLmxvY2FsTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2FybiBpZiBgdGV4dGFyZWFgIGluY2x1ZGVzIGFuIGV4cHJlc3Npb24gYW5kIHRocm93IGlmIGB0ZW1wbGF0ZWBcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9lcyBzaW5jZSB0aGVzZSBhcmUgbm90IHN1cHBvcnRlZC4gV2UgZG8gdGhpcyBieSBjaGVja2luZ1xuICAgICAgICAgICAgICAgICAgICAvLyBpbm5lckhUTUwgZm9yIGFueXRoaW5nIHRoYXQgbG9va3MgbGlrZSBhIG1hcmtlci4gVGhpcyBjYXRjaGVzXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhc2VzIGxpa2UgYmluZGluZ3MgaW4gdGV4dGFyZWEgdGhlcmUgbWFya2VycyB0dXJuIGludG8gdGV4dCBub2Rlcy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKC9eKD86dGV4dGFyZWF8dGVtcGxhdGUpJC9pLnRlc3QodGFnKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwuaW5jbHVkZXMobWFya2VyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbSA9IGBFeHByZXNzaW9ucyBhcmUgbm90IHN1cHBvcnRlZCBpbnNpZGUgXFxgJHt0YWd9XFxgIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBlbGVtZW50cy4gU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvZXhwcmVzc2lvbi1pbi0ke3RhZ30gZm9yIG1vcmUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluZm9ybWF0aW9uLmA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlV2FybmluZygnJywgbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGZvciBhdHRlbXB0ZWQgZHluYW1pYyB0YWcgbmFtZXMsIHdlIGRvbid0XG4gICAgICAgICAgICAgICAgLy8gaW5jcmVtZW50IHRoZSBiaW5kaW5nSW5kZXgsIGFuZCBpdCdsbCBiZSBvZmYgYnkgMSBpbiB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIGFuZCBvZmYgYnkgdHdvIGFmdGVyIGl0LlxuICAgICAgICAgICAgICAgIGlmIChub2RlLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBkZWZlciByZW1vdmluZyBib3VuZCBhdHRyaWJ1dGVzIGJlY2F1c2Ugb24gSUUgd2UgbWlnaHQgbm90IGJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGluZyBhdHRyaWJ1dGVzIGluIHRoZWlyIHRlbXBsYXRlIG9yZGVyLCBhbmQgd291bGQgc29tZXRpbWVzXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBhbiBhdHRyaWJ1dGUgdGhhdCB3ZSBzdGlsbCBuZWVkIHRvIGNyZWF0ZSBhIHBhcnQgZm9yLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyc1RvUmVtb3ZlID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBub2RlLmdldEF0dHJpYnV0ZU5hbWVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBuYW1lYCBpcyB0aGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHdlJ3JlIGl0ZXJhdGluZyBvdmVyLCBidXQgbm90XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBfbmVjY2Vzc2FyaWx5XyB0aGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHdlIHdpbGwgY3JlYXRlIGEgcGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yLiBUaGV5IGNhbiBiZSBkaWZmZXJlbnQgaW4gYnJvd3NlcnMgdGhhdCBkb24ndCBpdGVyYXRlIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIHNvdXJjZSBvcmRlci4gSW4gdGhhdCBjYXNlIHRoZSBhdHRyTmFtZXMgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5zIHRoZSBhdHRyaWJ1dGUgbmFtZSB3ZSdsbCBwcm9jZXNzIG5leHQuIFdlIG9ubHkgbmVlZCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZSBuYW1lIGhlcmUgdG8ga25vdyBpZiB3ZSBzaG91bGQgcHJvY2VzcyBhIGJvdW5kIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb24gdGhpcyBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUuZW5kc1dpdGgoYm91bmRBdHRyaWJ1dGVTdWZmaXgpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS5zdGFydHNXaXRoKG1hcmtlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFsTmFtZSA9IGF0dHJOYW1lc1thdHRyTmFtZUluZGV4KytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzVG9SZW1vdmUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVhbE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMb3dlcmNhc2UgZm9yIGNhc2Utc2Vuc2l0aXZlIFNWRyBhdHRyaWJ1dGVzIGxpa2Ugdmlld0JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKHJlYWxOYW1lLnRvTG93ZXJDYXNlKCkgKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRpY3MgPSB2YWx1ZS5zcGxpdChtYXJrZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtID0gLyhbLj9AXSk/KC4qKS8uZXhlYyhyZWFsTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQVRUUklCVVRFX1BBUlQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogbm9kZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbVsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ3M6IHN0YXRpY3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdG9yOiBtWzFdID09PSAnLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFByb3BlcnR5UGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbVsxXSA9PT0gJz8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQm9vbGVhbkF0dHJpYnV0ZVBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtWzFdID09PSAnQCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gRXZlbnRQYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IEF0dHJpYnV0ZVBhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFTEVNRU5UX1BBUlQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogbm9kZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGF0dHJzVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBiZW5jaG1hcmsgdGhlIHJlZ2V4IGFnYWluc3QgdGVzdGluZyBmb3IgZWFjaFxuICAgICAgICAgICAgICAgIC8vIG9mIHRoZSAzIHJhdyB0ZXh0IGVsZW1lbnQgbmFtZXMuXG4gICAgICAgICAgICAgICAgaWYgKHJhd1RleHRFbGVtZW50LnRlc3Qobm9kZS50YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgcmF3IHRleHQgZWxlbWVudHMgd2UgbmVlZCB0byBzcGxpdCB0aGUgdGV4dCBjb250ZW50IG9uXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmtlcnMsIGNyZWF0ZSBhIFRleHQgbm9kZSBmb3IgZWFjaCBzZWdtZW50LCBhbmQgY3JlYXRlXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgVGVtcGxhdGVQYXJ0IGZvciBlYWNoIG1hcmtlci5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5ncyA9IG5vZGUudGV4dENvbnRlbnQuc3BsaXQobWFya2VyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHRydXN0ZWRUeXBlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1c3RlZFR5cGVzLmVtcHR5U2NyaXB0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRleHQgbm9kZSBmb3IgZWFjaCBsaXRlcmFsIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZXNlIG5vZGVzIGFyZSBhbHNvIHVzZWQgYXMgdGhlIG1hcmtlcnMgZm9yIG5vZGUgcGFydHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGNhbid0IHVzZSBlbXB0eSB0ZXh0IG5vZGVzIGFzIG1hcmtlcnMgYmVjYXVzZSB0aGV5J3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3JtYWxpemVkIHdoZW4gY2xvbmluZyBpbiBJRSAoY291bGQgc2ltcGxpZnkgd2hlblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSUUgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFwcGVuZChzdHJpbmdzW2ldLCBjcmVhdGVNYXJrZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2FsayBwYXN0IHRoZSBtYXJrZXIgbm9kZSB3ZSBqdXN0IGFkZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7IHR5cGU6IENISUxEX1BBUlQsIGluZGV4OiArK25vZGVJbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdGUgYmVjYXVzZSB0aGlzIG1hcmtlciBpcyBhZGRlZCBhZnRlciB0aGUgd2Fsa2VyJ3MgY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9kZSwgaXQgd2lsbCBiZSB3YWxrZWQgdG8gaW4gdGhlIG91dGVyIGxvb3AgKGFuZCBpZ25vcmVkKSwgc29cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gYWRqdXN0IG5vZGVJbmRleCBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFwcGVuZChzdHJpbmdzW2xhc3RJbmRleF0sIGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gbm9kZS5kYXRhO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhID09PSBtYXJrZXJNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHsgdHlwZTogQ0hJTERfUEFSVCwgaW5kZXg6IG5vZGVJbmRleCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgoaSA9IG5vZGUuZGF0YS5pbmRleE9mKG1hcmtlciwgaSArIDEpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbW1lbnQgbm9kZSBoYXMgYSBiaW5kaW5nIG1hcmtlciBpbnNpZGUsIG1ha2UgYW4gaW5hY3RpdmUgcGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGJpbmRpbmcgd29uJ3Qgd29yaywgYnV0IHN1YnNlcXVlbnQgYmluZGluZ3Mgd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7IHR5cGU6IENPTU1FTlRfUEFSVCwgaW5kZXg6IG5vZGVJbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgdG8gdGhlIGVuZCBvZiB0aGUgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgKz0gbWFya2VyLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAga2luZDogJ3RlbXBsYXRlIHByZXAnLFxuICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMsXG4gICAgICAgICAgICBjbG9uYWJsZVRlbXBsYXRlOiB0aGlzLmVsLFxuICAgICAgICAgICAgcGFydHM6IHRoaXMucGFydHMsXG4gICAgICAgICAgICBzdHJpbmdzLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gT3ZlcnJpZGRlbiB2aWEgYGxpdEh0bWxQb2x5ZmlsbFN1cHBvcnRgIHRvIHByb3ZpZGUgcGxhdGZvcm0gc3VwcG9ydC5cbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBzdGF0aWMgY3JlYXRlRWxlbWVudChodG1sLCBfb3B0aW9ucykge1xuICAgICAgICBjb25zdCBlbCA9IGQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlc29sdmVEaXJlY3RpdmUocGFydCwgdmFsdWUsIHBhcmVudCA9IHBhcnQsIGF0dHJpYnV0ZUluZGV4KSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgdmFyIF9kO1xuICAgIC8vIEJhaWwgZWFybHkgaWYgdGhlIHZhbHVlIGlzIGV4cGxpY2l0bHkgbm9DaGFuZ2UuIE5vdGUsIHRoaXMgbWVhbnMgYW55XG4gICAgLy8gbmVzdGVkIGRpcmVjdGl2ZSBpcyBzdGlsbCBhdHRhY2hlZCBhbmQgaXMgbm90IHJ1bi5cbiAgICBpZiAodmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgbGV0IGN1cnJlbnREaXJlY3RpdmUgPSBhdHRyaWJ1dGVJbmRleCAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gKF9hID0gcGFyZW50Ll9fZGlyZWN0aXZlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW2F0dHJpYnV0ZUluZGV4XVxuICAgICAgICA6IHBhcmVudC5fX2RpcmVjdGl2ZTtcbiAgICBjb25zdCBuZXh0RGlyZWN0aXZlQ29uc3RydWN0b3IgPSBpc1ByaW1pdGl2ZSh2YWx1ZSlcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICAgICAgdmFsdWVbJ18kbGl0RGlyZWN0aXZlJCddO1xuICAgIGlmICgoY3VycmVudERpcmVjdGl2ZSA9PT0gbnVsbCB8fCBjdXJyZW50RGlyZWN0aXZlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50RGlyZWN0aXZlLmNvbnN0cnVjdG9yKSAhPT0gbmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yKSB7XG4gICAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgIChfYiA9IGN1cnJlbnREaXJlY3RpdmUgPT09IG51bGwgfHwgY3VycmVudERpcmVjdGl2ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudERpcmVjdGl2ZVsnXyRub3RpZnlEaXJlY3RpdmVDb25uZWN0aW9uQ2hhbmdlZCddKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChjdXJyZW50RGlyZWN0aXZlLCBmYWxzZSk7XG4gICAgICAgIGlmIChuZXh0RGlyZWN0aXZlQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY3VycmVudERpcmVjdGl2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnREaXJlY3RpdmUgPSBuZXcgbmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yKHBhcnQpO1xuICAgICAgICAgICAgY3VycmVudERpcmVjdGl2ZS5fJGluaXRpYWxpemUocGFydCwgcGFyZW50LCBhdHRyaWJ1dGVJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dHJpYnV0ZUluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICgoX2MgPSAoX2QgPSBwYXJlbnQpLl9fZGlyZWN0aXZlcykgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogKF9kLl9fZGlyZWN0aXZlcyA9IFtdKSlbYXR0cmlidXRlSW5kZXhdID1cbiAgICAgICAgICAgICAgICBjdXJyZW50RGlyZWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50Ll9fZGlyZWN0aXZlID0gY3VycmVudERpcmVjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY3VycmVudERpcmVjdGl2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbHVlID0gcmVzb2x2ZURpcmVjdGl2ZShwYXJ0LCBjdXJyZW50RGlyZWN0aXZlLl8kcmVzb2x2ZShwYXJ0LCB2YWx1ZS52YWx1ZXMpLCBjdXJyZW50RGlyZWN0aXZlLCBhdHRyaWJ1dGVJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogQW4gdXBkYXRlYWJsZSBpbnN0YW5jZSBvZiBhIFRlbXBsYXRlLiBIb2xkcyByZWZlcmVuY2VzIHRvIHRoZSBQYXJ0cyB1c2VkIHRvXG4gKiB1cGRhdGUgdGhlIHRlbXBsYXRlIGluc3RhbmNlLlxuICovXG5jbGFzcyBUZW1wbGF0ZUluc3RhbmNlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZSwgcGFyZW50KSB7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fcGFydHMgPSBbXTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmVjdGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fJHRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuICAgIC8vIENhbGxlZCBieSBDaGlsZFBhcnQgcGFyZW50Tm9kZSBnZXR0ZXJcbiAgICBnZXQgcGFyZW50Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRwYXJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgLy8gU2VlIGNvbW1lbnQgaW4gRGlzY29ubmVjdGFibGUgaW50ZXJmYWNlIGZvciB3aHkgdGhpcyBpcyBhIGdldHRlclxuICAgIGdldCBfJGlzQ29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJHBhcmVudC5fJGlzQ29ubmVjdGVkO1xuICAgIH1cbiAgICAvLyBUaGlzIG1ldGhvZCBpcyBzZXBhcmF0ZSBmcm9tIHRoZSBjb25zdHJ1Y3RvciBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuIGFcbiAgICAvLyBEb2N1bWVudEZyYWdtZW50IGFuZCB3ZSBkb24ndCB3YW50IHRvIGhvbGQgb250byBpdCB3aXRoIGFuIGluc3RhbmNlIGZpZWxkLlxuICAgIF9jbG9uZShvcHRpb25zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgeyBlbDogeyBjb250ZW50IH0sIHBhcnRzOiBwYXJ0cywgfSA9IHRoaXMuXyR0ZW1wbGF0ZTtcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSAoKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNyZWF0aW9uU2NvcGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGQpLmltcG9ydE5vZGUoY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IGZyYWdtZW50O1xuICAgICAgICBsZXQgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICBsZXQgbm9kZUluZGV4ID0gMDtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGxldCB0ZW1wbGF0ZVBhcnQgPSBwYXJ0c1swXTtcbiAgICAgICAgd2hpbGUgKHRlbXBsYXRlUGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAobm9kZUluZGV4ID09PSB0ZW1wbGF0ZVBhcnQuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFydDtcbiAgICAgICAgICAgICAgICBpZiAodGVtcGxhdGVQYXJ0LnR5cGUgPT09IENISUxEX1BBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IG5ldyBDaGlsZFBhcnQobm9kZSwgbm9kZS5uZXh0U2libGluZywgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSBBVFRSSUJVVEVfUEFSVCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gbmV3IHRlbXBsYXRlUGFydC5jdG9yKG5vZGUsIHRlbXBsYXRlUGFydC5uYW1lLCB0ZW1wbGF0ZVBhcnQuc3RyaW5ncywgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSBFTEVNRU5UX1BBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IG5ldyBFbGVtZW50UGFydChub2RlLCB0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVBhcnQgPSBwYXJ0c1srK3BhcnRJbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZUluZGV4ICE9PSAodGVtcGxhdGVQYXJ0ID09PSBudWxsIHx8IHRlbXBsYXRlUGFydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGVtcGxhdGVQYXJ0LmluZGV4KSkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxuICAgIF91cGRhdGUodmFsdWVzKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHRoaXMuX3BhcnRzKSB7XG4gICAgICAgICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ3NldCBwYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgcGFydCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVJbmRleDogaSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUluc3RhbmNlOiB0aGlzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0LnN0cmluZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWVzLCBwYXJ0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG51bWJlciBvZiB2YWx1ZXMgdGhlIHBhcnQgY29uc3VtZXMgaXMgcGFydC5zdHJpbmdzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgdmFsdWVzIGFyZSBpbiBiZXR3ZWVuIHRlbXBsYXRlIHNwYW5zLiBXZSBpbmNyZW1lbnQgaSBieSAxXG4gICAgICAgICAgICAgICAgICAgIC8vIGxhdGVyIGluIHRoZSBsb29wLCBzbyBpbmNyZW1lbnQgaXQgYnkgcGFydC5zdHJpbmdzLmxlbmd0aCAtIDIgaGVyZVxuICAgICAgICAgICAgICAgICAgICBpICs9IHBhcnQuc3RyaW5ncy5sZW5ndGggLSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5fJHNldFZhbHVlKHZhbHVlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgQ2hpbGRQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydE5vZGUsIGVuZE5vZGUsIHBhcmVudCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMudHlwZSA9IENISUxEX1BBUlQ7XG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgZmllbGRzIHdpbGwgYmUgcGF0Y2hlZCBvbnRvIENoaWxkUGFydHMgd2hlbiByZXF1aXJlZCBieVxuICAgICAgICAvLyBBc3luY0RpcmVjdGl2ZVxuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl8kc3RhcnROb2RlID0gc3RhcnROb2RlO1xuICAgICAgICB0aGlzLl8kZW5kTm9kZSA9IGVuZE5vZGU7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIC8vIE5vdGUgX19pc0Nvbm5lY3RlZCBpcyBvbmx5IGV2ZXIgYWNjZXNzZWQgb24gUm9vdFBhcnRzIChpLmUuIHdoZW4gdGhlcmUgaXNcbiAgICAgICAgLy8gbm8gXyRwYXJlbnQpOyB0aGUgdmFsdWUgb24gYSBub24tcm9vdC1wYXJ0IGlzIFwiZG9uJ3QgY2FyZVwiLCBidXQgY2hlY2tpbmdcbiAgICAgICAgLy8gZm9yIHBhcmVudCB3b3VsZCBiZSBtb3JlIGNvZGVcbiAgICAgICAgdGhpcy5fX2lzQ29ubmVjdGVkID0gKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmlzQ29ubmVjdGVkKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB0cnVlO1xuICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICAvLyBFeHBsaWNpdGx5IGluaXRpYWxpemUgZm9yIGNvbnNpc3RlbnQgY2xhc3Mgc2hhcGUuXG4gICAgICAgICAgICB0aGlzLl90ZXh0U2FuaXRpemVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFNlZSBjb21tZW50IGluIERpc2Nvbm5lY3RhYmxlIGludGVyZmFjZSBmb3Igd2h5IHRoaXMgaXMgYSBnZXR0ZXJcbiAgICBnZXQgXyRpc0Nvbm5lY3RlZCgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgLy8gQ2hpbGRQYXJ0cyB0aGF0IGFyZSBub3QgYXQgdGhlIHJvb3Qgc2hvdWxkIGFsd2F5cyBiZSBjcmVhdGVkIHdpdGggYVxuICAgICAgICAvLyBwYXJlbnQ7IG9ubHkgUm9vdENoaWxkTm9kZSdzIHdvbid0LCBzbyB0aGV5IHJldHVybiB0aGUgbG9jYWwgaXNDb25uZWN0ZWRcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IHRoaXMuXyRwYXJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5fJGlzQ29ubmVjdGVkKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB0aGlzLl9faXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJlbnQgbm9kZSBpbnRvIHdoaWNoIHRoZSBwYXJ0IHJlbmRlcnMgaXRzIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBBIENoaWxkUGFydCdzIGNvbnRlbnQgY29uc2lzdHMgb2YgYSByYW5nZSBvZiBhZGphY2VudCBjaGlsZCBub2RlcyBvZlxuICAgICAqIGAucGFyZW50Tm9kZWAsIHBvc3NpYmx5IGJvcmRlcmVkIGJ5ICdtYXJrZXIgbm9kZXMnIChgLnN0YXJ0Tm9kZWAgYW5kXG4gICAgICogYC5lbmROb2RlYCkuXG4gICAgICpcbiAgICAgKiAtIElmIGJvdGggYC5zdGFydE5vZGVgIGFuZCBgLmVuZE5vZGVgIGFyZSBub24tbnVsbCwgdGhlbiB0aGUgcGFydCdzIGNvbnRlbnRcbiAgICAgKiBjb25zaXN0cyBvZiBhbGwgc2libGluZ3MgYmV0d2VlbiBgLnN0YXJ0Tm9kZWAgYW5kIGAuZW5kTm9kZWAsIGV4Y2x1c2l2ZWx5LlxuICAgICAqXG4gICAgICogLSBJZiBgLnN0YXJ0Tm9kZWAgaXMgbm9uLW51bGwgYnV0IGAuZW5kTm9kZWAgaXMgbnVsbCwgdGhlbiB0aGUgcGFydCdzXG4gICAgICogY29udGVudCBjb25zaXN0cyBvZiBhbGwgc2libGluZ3MgZm9sbG93aW5nIGAuc3RhcnROb2RlYCwgdXAgdG8gYW5kXG4gICAgICogaW5jbHVkaW5nIHRoZSBsYXN0IGNoaWxkIG9mIGAucGFyZW50Tm9kZWAuIElmIGAuZW5kTm9kZWAgaXMgbm9uLW51bGwsIHRoZW5cbiAgICAgKiBgLnN0YXJ0Tm9kZWAgd2lsbCBhbHdheXMgYmUgbm9uLW51bGwuXG4gICAgICpcbiAgICAgKiAtIElmIGJvdGggYC5lbmROb2RlYCBhbmQgYC5zdGFydE5vZGVgIGFyZSBudWxsLCB0aGVuIHRoZSBwYXJ0J3MgY29udGVudFxuICAgICAqIGNvbnNpc3RzIG9mIGFsbCBjaGlsZCBub2RlcyBvZiBgLnBhcmVudE5vZGVgLlxuICAgICAqL1xuICAgIGdldCBwYXJlbnROb2RlKCkge1xuICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fJHBhcmVudDtcbiAgICAgICAgaWYgKHBhcmVudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBwYXJlbnROb2RlLm5vZGVUeXBlID09PSAxMSAvKiBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UICovKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgcGFyZW50Tm9kZSBpcyBhIERvY3VtZW50RnJhZ21lbnQsIGl0IG1heSBiZSBiZWNhdXNlIHRoZSBET00gaXNcbiAgICAgICAgICAgIC8vIHN0aWxsIGluIHRoZSBjbG9uZWQgZnJhZ21lbnQgZHVyaW5nIGluaXRpYWwgcmVuZGVyOyBpZiBzbywgZ2V0IHRoZSByZWFsXG4gICAgICAgICAgICAvLyBwYXJlbnROb2RlIHRoZSBwYXJ0IHdpbGwgYmUgY29tbWl0dGVkIGludG8gYnkgYXNraW5nIHRoZSBwYXJlbnQuXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcmVudE5vZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJ0J3MgbGVhZGluZyBtYXJrZXIgbm9kZSwgaWYgYW55LiBTZWUgYC5wYXJlbnROb2RlYCBmb3IgbW9yZVxuICAgICAqIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGdldCBzdGFydE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kc3RhcnROb2RlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgcGFydCdzIHRyYWlsaW5nIG1hcmtlciBub2RlLCBpZiBhbnkuIFNlZSBgLnBhcmVudE5vZGVgIGZvciBtb3JlXG4gICAgICogaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgZ2V0IGVuZE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kZW5kTm9kZTtcbiAgICB9XG4gICAgXyRzZXRWYWx1ZSh2YWx1ZSwgZGlyZWN0aXZlUGFyZW50ID0gdGhpcykge1xuICAgICAgICBpZiAoREVWX01PREUgJiYgdGhpcy5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoaXMgXFxgQ2hpbGRQYXJ0XFxgIGhhcyBubyBcXGBwYXJlbnROb2RlXFxgIGFuZCB0aGVyZWZvcmUgY2Fubm90IGFjY2VwdCBhIHZhbHVlLiBUaGlzIGxpa2VseSBtZWFucyB0aGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBwYXJ0IHdhcyBtYW5pcHVsYXRlZCBpbiBhbiB1bnN1cHBvcnRlZCB3YXkgb3V0c2lkZSBvZiBMaXQncyBjb250cm9sIHN1Y2ggdGhhdCB0aGUgcGFydCdzIG1hcmtlciBub2RlcyB3ZXJlIGVqZWN0ZWQgZnJvbSBET00uIEZvciBleGFtcGxlLCBzZXR0aW5nIHRoZSBlbGVtZW50J3MgXFxgaW5uZXJIVE1MXFxgIG9yIFxcYHRleHRDb250ZW50XFxgIGNhbiBkbyB0aGlzLmApO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZSwgZGlyZWN0aXZlUGFyZW50KTtcbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuICAgICAgICAgICAgLy8gTm9uLXJlbmRlcmluZyBjaGlsZCB2YWx1ZXMuIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlc2UgZG8gbm90IHJlbmRlclxuICAgICAgICAgICAgLy8gZW1wdHkgdGV4dCBub2RlcyB0byBhdm9pZCBpc3N1ZXMgd2l0aCBwcmV2ZW50aW5nIGRlZmF1bHQgPHNsb3Q+XG4gICAgICAgICAgICAvLyBmYWxsYmFjayBjb250ZW50LlxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBub3RoaW5nIHx8IHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAhPT0gbm90aGluZykge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCBub3RoaW5nIHRvIGNoaWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiB0aGlzLl8kc3RhcnROb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiB0aGlzLl8kZW5kTm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogdGhpcy5fJHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXyRjbGVhcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBub3RoaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgIT09IHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAmJiB2YWx1ZSAhPT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21taXRUZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWVbJ18kbGl0VHlwZSQnXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21taXRUZW1wbGF0ZVJlc3VsdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUubm9kZVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNJdGVyYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdEl0ZXJhYmxlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrLCB3aWxsIHJlbmRlciB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB0aGlzLl9jb21taXRUZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfaW5zZXJ0KG5vZGUsIHJlZiA9IHRoaXMuXyRlbmROb2RlKSB7XG4gICAgICAgIHJldHVybiB3cmFwKHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkucGFyZW50Tm9kZSkuaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZik7XG4gICAgfVxuICAgIF9jb21taXROb2RlKHZhbHVlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjbGVhcigpO1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUyAmJlxuICAgICAgICAgICAgICAgIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCAhPT0gbm9vcFNhbml0aXplcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGVOYW1lID0gKF9hID0gdGhpcy5fJHN0YXJ0Tm9kZS5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eubm9kZU5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudE5vZGVOYW1lID09PSAnU1RZTEUnIHx8IHBhcmVudE5vZGVOYW1lID09PSAnU0NSSVBUJykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9ICdGb3JiaWRkZW4nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnROb2RlTmFtZSA9PT0gJ1NUWUxFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgTGl0IGRvZXMgbm90IHN1cHBvcnQgYmluZGluZyBpbnNpZGUgc3R5bGUgbm9kZXMuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFRoaXMgaXMgYSBzZWN1cml0eSByaXNrLCBhcyBzdHlsZSBpbmplY3Rpb24gYXR0YWNrcyBjYW4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZXhmaWx0cmF0ZSBkYXRhIGFuZCBzcG9vZiBVSXMuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYENvbnNpZGVyIGluc3RlYWQgdXNpbmcgY3NzXFxgLi4uXFxgIGxpdGVyYWxzIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRvIGNvbXBvc2Ugc3R5bGVzLCBhbmQgbWFrZSBkbyBkeW5hbWljIHN0eWxpbmcgd2l0aCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBjc3MgY3VzdG9tIHByb3BlcnRpZXMsIDo6cGFydHMsIDxzbG90PnMsIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGFuZCBieSBtdXRhdGluZyB0aGUgRE9NIHJhdGhlciB0aGFuIHN0eWxlc2hlZXRzLmA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYExpdCBkb2VzIG5vdCBzdXBwb3J0IGJpbmRpbmcgaW5zaWRlIHNjcmlwdCBub2Rlcy4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgVGhpcyBpcyBhIHNlY3VyaXR5IHJpc2ssIGFzIGl0IGNvdWxkIGFsbG93IGFyYml0cmFyeSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBjb2RlIGV4ZWN1dGlvbi5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgbm9kZScsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IHRoaXMuXyRzdGFydE5vZGUsXG4gICAgICAgICAgICAgICAgcGFyZW50OiB0aGlzLl8kcGFyZW50LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IHRoaXMuX2luc2VydCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2NvbW1pdFRleHQodmFsdWUpIHtcbiAgICAgICAgLy8gSWYgdGhlIGNvbW1pdHRlZCB2YWx1ZSBpcyBhIHByaW1pdGl2ZSBpdCBtZWFucyB3ZSBjYWxsZWQgX2NvbW1pdFRleHQgb25cbiAgICAgICAgLy8gdGhlIHByZXZpb3VzIHJlbmRlciwgYW5kIHdlIGtub3cgdGhhdCB0aGlzLl8kc3RhcnROb2RlLm5leHRTaWJsaW5nIGlzIGFcbiAgICAgICAgLy8gVGV4dCBub2RlLiBXZSBjYW4gbm93IGp1c3QgcmVwbGFjZSB0aGUgdGV4dCBjb250ZW50ICguZGF0YSkgb2YgdGhlIG5vZGUuXG4gICAgICAgIGlmICh0aGlzLl8kY29tbWl0dGVkVmFsdWUgIT09IG5vdGhpbmcgJiZcbiAgICAgICAgICAgIGlzUHJpbWl0aXZlKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB3cmFwKHRoaXMuXyRzdGFydE5vZGUpLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90ZXh0U2FuaXRpemVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGV4dFNhbml0aXplciA9IGNyZWF0ZVNhbml0aXplcihub2RlLCAnZGF0YScsICdwcm9wZXJ0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3RleHRTYW5pdGl6ZXIodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICBraW5kOiAnY29tbWl0IHRleHQnLFxuICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21taXROb2RlKHRleHROb2RlKTtcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHNldHRpbmcgdGV4dCBjb250ZW50LCBmb3Igc2VjdXJpdHkgcHVycG9zZXMgaXQgbWF0dGVycyBhIGxvdFxuICAgICAgICAgICAgICAgIC8vIHdoYXQgdGhlIHBhcmVudCBpcy4gRm9yIGV4YW1wbGUsIDxzdHlsZT4gYW5kIDxzY3JpcHQ+IG5lZWQgdG8gYmVcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGVkIHdpdGggY2FyZSwgd2hpbGUgPHNwYW4+IGRvZXMgbm90LiBTbyBmaXJzdCB3ZSBuZWVkIHRvIHB1dCBhXG4gICAgICAgICAgICAgICAgLy8gdGV4dCBub2RlIGludG8gdGhlIGRvY3VtZW50LCB0aGVuIHdlIGNhbiBzYW5pdGl6ZSBpdHMgY29udGVudC5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdGV4dFNhbml0aXplciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RleHRTYW5pdGl6ZXIgPSBjcmVhdGVTYW5pdGl6ZXIodGV4dE5vZGUsICdkYXRhJywgJ3Byb3BlcnR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fdGV4dFNhbml0aXplcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCB0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogdGV4dE5vZGUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGUuZGF0YSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZShkLmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCB0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogd3JhcCh0aGlzLl8kc3RhcnROb2RlKS5uZXh0U2libGluZyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHJlc3VsdCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgIGNvbnN0IHsgdmFsdWVzLCBbJ18kbGl0VHlwZSQnXTogdHlwZSB9ID0gcmVzdWx0O1xuICAgICAgICAvLyBJZiAkbGl0VHlwZSQgaXMgYSBudW1iZXIsIHJlc3VsdCBpcyBhIHBsYWluIFRlbXBsYXRlUmVzdWx0IGFuZCB3ZSBnZXRcbiAgICAgICAgLy8gdGhlIHRlbXBsYXRlIGZyb20gdGhlIHRlbXBsYXRlIGNhY2hlLiBJZiBub3QsIHJlc3VsdCBpcyBhXG4gICAgICAgIC8vIENvbXBpbGVkVGVtcGxhdGVSZXN1bHQgYW5kIF8kbGl0VHlwZSQgaXMgYSBDb21waWxlZFRlbXBsYXRlIGFuZCB3ZSBuZWVkXG4gICAgICAgIC8vIHRvIGNyZWF0ZSB0aGUgPHRlbXBsYXRlPiBlbGVtZW50IHRoZSBmaXJzdCB0aW1lIHdlIHNlZSBpdC5cbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0eXBlb2YgdHlwZSA9PT0gJ251bWJlcidcbiAgICAgICAgICAgID8gdGhpcy5fJGdldFRlbXBsYXRlKHJlc3VsdClcbiAgICAgICAgICAgIDogKHR5cGUuZWwgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICh0eXBlLmVsID0gVGVtcGxhdGUuY3JlYXRlRWxlbWVudCh0eXBlLmgsIHRoaXMub3B0aW9ucykpLFxuICAgICAgICAgICAgICAgIHR5cGUpO1xuICAgICAgICBpZiAoKChfYSA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLl8kdGVtcGxhdGUpID09PSB0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICBraW5kOiAndGVtcGxhdGUgdXBkYXRpbmcnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLFxuICAgICAgICAgICAgICAgIGluc3RhbmNlOiB0aGlzLl8kY29tbWl0dGVkVmFsdWUsXG4gICAgICAgICAgICAgICAgcGFydHM6IHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5fcGFydHMsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlLl91cGRhdGUodmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRlbXBsYXRlSW5zdGFuY2UodGVtcGxhdGUsIHRoaXMpO1xuICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBpbnN0YW5jZS5fY2xvbmUodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAga2luZDogJ3RlbXBsYXRlIGluc3RhbnRpYXRlZCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgICAgICAgcGFydHM6IGluc3RhbmNlLl9wYXJ0cyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgZnJhZ21lbnQsXG4gICAgICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbnN0YW5jZS5fdXBkYXRlKHZhbHVlcyk7XG4gICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgIGtpbmQ6ICd0ZW1wbGF0ZSBpbnN0YW50aWF0ZWQgYW5kIHVwZGF0ZWQnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLFxuICAgICAgICAgICAgICAgIGluc3RhbmNlLFxuICAgICAgICAgICAgICAgIHBhcnRzOiBpbnN0YW5jZS5fcGFydHMsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgIGZyYWdtZW50LFxuICAgICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZShmcmFnbWVudCk7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBPdmVycmlkZGVuIHZpYSBgbGl0SHRtbFBvbHlmaWxsU3VwcG9ydGAgdG8gcHJvdmlkZSBwbGF0Zm9ybSBzdXBwb3J0LlxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJGdldFRlbXBsYXRlKHJlc3VsdCkge1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmdldChyZXN1bHQuc3RyaW5ncyk7XG4gICAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZUNhY2hlLnNldChyZXN1bHQuc3RyaW5ncywgKHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuICAgIF9jb21taXRJdGVyYWJsZSh2YWx1ZSkge1xuICAgICAgICAvLyBGb3IgYW4gSXRlcmFibGUsIHdlIGNyZWF0ZSBhIG5ldyBJbnN0YW5jZVBhcnQgcGVyIGl0ZW0sIHRoZW4gc2V0IGl0c1xuICAgICAgICAvLyB2YWx1ZSB0byB0aGUgaXRlbS4gVGhpcyBpcyBhIGxpdHRsZSBiaXQgb2Ygb3ZlcmhlYWQgZm9yIGV2ZXJ5IGl0ZW0gaW5cbiAgICAgICAgLy8gYW4gSXRlcmFibGUsIGJ1dCBpdCBsZXRzIHVzIHJlY3Vyc2UgZWFzaWx5IGFuZCBlZmZpY2llbnRseSB1cGRhdGUgQXJyYXlzXG4gICAgICAgIC8vIG9mIFRlbXBsYXRlUmVzdWx0cyB0aGF0IHdpbGwgYmUgY29tbW9ubHkgcmV0dXJuZWQgZnJvbSBleHByZXNzaW9ucyBsaWtlOlxuICAgICAgICAvLyBhcnJheS5tYXAoKGkpID0+IGh0bWxgJHtpfWApLCBieSByZXVzaW5nIGV4aXN0aW5nIFRlbXBsYXRlSW5zdGFuY2VzLlxuICAgICAgICAvLyBJZiB2YWx1ZSBpcyBhbiBhcnJheSwgdGhlbiB0aGUgcHJldmlvdXMgcmVuZGVyIHdhcyBvZiBhblxuICAgICAgICAvLyBpdGVyYWJsZSBhbmQgdmFsdWUgd2lsbCBjb250YWluIHRoZSBDaGlsZFBhcnRzIGZyb20gdGhlIHByZXZpb3VzXG4gICAgICAgIC8vIHJlbmRlci4gSWYgdmFsdWUgaXMgbm90IGFuIGFycmF5LCBjbGVhciB0aGlzIHBhcnQgYW5kIG1ha2UgYSBuZXdcbiAgICAgICAgLy8gYXJyYXkgZm9yIENoaWxkUGFydHMuXG4gICAgICAgIGlmICghaXNBcnJheSh0aGlzLl8kY29tbWl0dGVkVmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuXyRjbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIExldHMgdXMga2VlcCB0cmFjayBvZiBob3cgbWFueSBpdGVtcyB3ZSBzdGFtcGVkIHNvIHdlIGNhbiBjbGVhciBsZWZ0b3ZlclxuICAgICAgICAvLyBpdGVtcyBmcm9tIGEgcHJldmlvdXMgcmVuZGVyXG4gICAgICAgIGNvbnN0IGl0ZW1QYXJ0cyA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZTtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGxldCBpdGVtUGFydDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAocGFydEluZGV4ID09PSBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgbm8gZXhpc3RpbmcgcGFydCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiB0ZXN0IHBlcmYgaW1wYWN0IG9mIGFsd2F5cyBjcmVhdGluZyB0d28gcGFydHNcbiAgICAgICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIHNoYXJpbmcgcGFydHMgYmV0d2VlbiBub2Rlc1xuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy8xMjY2XG4gICAgICAgICAgICAgICAgaXRlbVBhcnRzLnB1c2goKGl0ZW1QYXJ0ID0gbmV3IENoaWxkUGFydCh0aGlzLl9pbnNlcnQoY3JlYXRlTWFya2VyKCkpLCB0aGlzLl9pbnNlcnQoY3JlYXRlTWFya2VyKCkpLCB0aGlzLCB0aGlzLm9wdGlvbnMpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBSZXVzZSBhbiBleGlzdGluZyBwYXJ0XG4gICAgICAgICAgICAgICAgaXRlbVBhcnQgPSBpdGVtUGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW1QYXJ0Ll8kc2V0VmFsdWUoaXRlbSk7XG4gICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydEluZGV4IDwgaXRlbVBhcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gaXRlbVBhcnRzIGFsd2F5cyBoYXZlIGVuZCBub2Rlc1xuICAgICAgICAgICAgdGhpcy5fJGNsZWFyKGl0ZW1QYXJ0ICYmIHdyYXAoaXRlbVBhcnQuXyRlbmROb2RlKS5uZXh0U2libGluZywgcGFydEluZGV4KTtcbiAgICAgICAgICAgIC8vIFRydW5jYXRlIHRoZSBwYXJ0cyBhcnJheSBzbyBfdmFsdWUgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgICAgICAgIGl0ZW1QYXJ0cy5sZW5ndGggPSBwYXJ0SW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgbm9kZXMgY29udGFpbmVkIHdpdGhpbiB0aGlzIFBhcnQgZnJvbSB0aGUgRE9NLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0YXJ0IFN0YXJ0IG5vZGUgdG8gY2xlYXIgZnJvbSwgZm9yIGNsZWFyaW5nIGEgc3Vic2V0IG9mIHRoZSBwYXJ0J3NcbiAgICAgKiAgICAgRE9NICh1c2VkIHdoZW4gdHJ1bmNhdGluZyBpdGVyYWJsZXMpXG4gICAgICogQHBhcmFtIGZyb20gIFdoZW4gYHN0YXJ0YCBpcyBzcGVjaWZpZWQsIHRoZSBpbmRleCB3aXRoaW4gdGhlIGl0ZXJhYmxlIGZyb21cbiAgICAgKiAgICAgd2hpY2ggQ2hpbGRQYXJ0cyBhcmUgYmVpbmcgcmVtb3ZlZCwgdXNlZCBmb3IgZGlzY29ubmVjdGluZyBkaXJlY3RpdmVzIGluXG4gICAgICogICAgIHRob3NlIFBhcnRzLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgXyRjbGVhcihzdGFydCA9IHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkubmV4dFNpYmxpbmcsIGZyb20pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl8kbm90aWZ5Q29ubmVjdGlvbkNoYW5nZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMsIGZhbHNlLCB0cnVlLCBmcm9tKTtcbiAgICAgICAgd2hpbGUgKHN0YXJ0ICYmIHN0YXJ0ICE9PSB0aGlzLl8kZW5kTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgbiA9IHdyYXAoc3RhcnQpLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgd3JhcChzdGFydCkucmVtb3ZlKCk7XG4gICAgICAgICAgICBzdGFydCA9IG47XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50YXRpb24gb2YgUm9vdFBhcnQncyBgaXNDb25uZWN0ZWRgLiBOb3RlIHRoYXQgdGhpcyBtZXRvZFxuICAgICAqIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBvbiBgUm9vdFBhcnRgcyAodGhlIGBDaGlsZFBhcnRgIHJldHVybmVkIGZyb20gYVxuICAgICAqIHRvcC1sZXZlbCBgcmVuZGVyKClgIGNhbGwpLiBJdCBoYXMgbm8gZWZmZWN0IG9uIG5vbi1yb290IENoaWxkUGFydHMuXG4gICAgICogQHBhcmFtIGlzQ29ubmVjdGVkIFdoZXRoZXIgdG8gc2V0XG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgc2V0Q29ubmVjdGVkKGlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRoaXMuXyRwYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fX2lzQ29ubmVjdGVkID0gaXNDb25uZWN0ZWQ7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLl8kbm90aWZ5Q29ubmVjdGlvbkNoYW5nZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMsIGlzQ29ubmVjdGVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwYXJ0LnNldENvbm5lY3RlZCgpIG1heSBvbmx5IGJlIGNhbGxlZCBvbiBhICcgK1xuICAgICAgICAgICAgICAgICdSb290UGFydCByZXR1cm5lZCBmcm9tIHJlbmRlcigpLicpO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgc3RyaW5ncywgcGFyZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IEFUVFJJQlVURV9QQVJUO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIGlmIChzdHJpbmdzLmxlbmd0aCA+IDIgfHwgc3RyaW5nc1swXSAhPT0gJycgfHwgc3RyaW5nc1sxXSAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5ldyBBcnJheShzdHJpbmdzLmxlbmd0aCAtIDEpLmZpbGwobmV3IFN0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBub3RoaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nhbml0aXplciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgdGFnTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC50YWdOYW1lO1xuICAgIH1cbiAgICAvLyBTZWUgY29tbWVudCBpbiBEaXNjb25uZWN0YWJsZSBpbnRlcmZhY2UgZm9yIHdoeSB0aGlzIGlzIGEgZ2V0dGVyXG4gICAgZ2V0IF8kaXNDb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kcGFyZW50Ll8kaXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoaXMgcGFydCBieSByZXNvbHZpbmcgdGhlIHZhbHVlIGZyb20gcG9zc2libHkgbXVsdGlwbGVcbiAgICAgKiB2YWx1ZXMgYW5kIHN0YXRpYyBzdHJpbmdzIGFuZCBjb21taXR0aW5nIGl0IHRvIHRoZSBET00uXG4gICAgICogSWYgdGhpcyBwYXJ0IGlzIHNpbmdsZS12YWx1ZWQsIGB0aGlzLl9zdHJpbmdzYCB3aWxsIGJlIHVuZGVmaW5lZCwgYW5kIHRoZVxuICAgICAqIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCB3aXRoIGEgc2luZ2xlIHZhbHVlIGFyZ3VtZW50LiBJZiB0aGlzIHBhcnQgaXNcbiAgICAgKiBtdWx0aS12YWx1ZSwgYHRoaXMuX3N0cmluZ3NgIHdpbGwgYmUgZGVmaW5lZCwgYW5kIHRoZSBtZXRob2QgaXMgY2FsbGVkXG4gICAgICogd2l0aCB0aGUgdmFsdWUgYXJyYXkgb2YgdGhlIHBhcnQncyBvd25pbmcgVGVtcGxhdGVJbnN0YW5jZSwgYW5kIGFuIG9mZnNldFxuICAgICAqIGludG8gdGhlIHZhbHVlIGFycmF5IGZyb20gd2hpY2ggdGhlIHZhbHVlcyBzaG91bGQgYmUgcmVhZC5cbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBvdmVybG9hZGVkIHRoaXMgd2F5IHRvIGVsaW1pbmF0ZSBzaG9ydC1saXZlZCBhcnJheSBzbGljZXNcbiAgICAgKiBvZiB0aGUgdGVtcGxhdGUgaW5zdGFuY2UgdmFsdWVzLCBhbmQgYWxsb3cgYSBmYXN0LXBhdGggZm9yIHNpbmdsZS12YWx1ZWRcbiAgICAgKiBwYXJ0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgcGFydCB2YWx1ZSwgb3IgYW4gYXJyYXkgb2YgdmFsdWVzIGZvciBtdWx0aS12YWx1ZWQgcGFydHNcbiAgICAgKiBAcGFyYW0gdmFsdWVJbmRleCB0aGUgaW5kZXggdG8gc3RhcnQgcmVhZGluZyB2YWx1ZXMgZnJvbS4gYHVuZGVmaW5lZGAgZm9yXG4gICAgICogICBzaW5nbGUtdmFsdWVkIHBhcnRzXG4gICAgICogQHBhcmFtIG5vQ29tbWl0IGNhdXNlcyB0aGUgcGFydCB0byBub3QgY29tbWl0IGl0cyB2YWx1ZSB0byB0aGUgRE9NLiBVc2VkXG4gICAgICogICBpbiBoeWRyYXRpb24gdG8gcHJpbWUgYXR0cmlidXRlIHBhcnRzIHdpdGggdGhlaXIgZmlyc3QtcmVuZGVyZWQgdmFsdWUsXG4gICAgICogICBidXQgbm90IHNldCB0aGUgYXR0cmlidXRlLCBhbmQgaW4gU1NSIHRvIG5vLW9wIHRoZSBET00gb3BlcmF0aW9uIGFuZFxuICAgICAqICAgY2FwdHVyZSB0aGUgdmFsdWUgZm9yIHNlcmlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfJHNldFZhbHVlKHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQgPSB0aGlzLCB2YWx1ZUluZGV4LCBub0NvbW1pdCkge1xuICAgICAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5zdHJpbmdzO1xuICAgICAgICAvLyBXaGV0aGVyIGFueSBvZiB0aGUgdmFsdWVzIGhhcyBjaGFuZ2VkLCBmb3IgZGlydHktY2hlY2tpbmdcbiAgICAgICAgbGV0IGNoYW5nZSA9IGZhbHNlO1xuICAgICAgICBpZiAoc3RyaW5ncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBTaW5nbGUtdmFsdWUgYmluZGluZyBjYXNlXG4gICAgICAgICAgICB2YWx1ZSA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgdmFsdWUsIGRpcmVjdGl2ZVBhcmVudCwgMCk7XG4gICAgICAgICAgICBjaGFuZ2UgPVxuICAgICAgICAgICAgICAgICFpc1ByaW1pdGl2ZSh2YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKHZhbHVlICE9PSB0aGlzLl8kY29tbWl0dGVkVmFsdWUgJiYgdmFsdWUgIT09IG5vQ2hhbmdlKTtcbiAgICAgICAgICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEludGVycG9sYXRpb24gY2FzZVxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWU7XG4gICAgICAgICAgICB2YWx1ZSA9IHN0cmluZ3NbMF07XG4gICAgICAgICAgICBsZXQgaSwgdjtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHYgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlc1t2YWx1ZUluZGV4ICsgaV0sIGRpcmVjdGl2ZVBhcmVudCwgaSk7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyLXByb3ZpZGVkIHZhbHVlIGlzIGBub0NoYW5nZWAsIHVzZSB0aGUgcHJldmlvdXMgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hhbmdlIHx8IChjaGFuZ2UgPSAhaXNQcmltaXRpdmUodikgfHwgdiAhPT0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAodiA9PT0gbm90aGluZykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlICE9PSBub3RoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICs9ICh2ICE9PSBudWxsICYmIHYgIT09IHZvaWQgMCA/IHYgOiAnJykgKyBzdHJpbmdzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gV2UgYWx3YXlzIHJlY29yZCBlYWNoIHZhbHVlLCBldmVuIGlmIG9uZSBpcyBgbm90aGluZ2AsIGZvciBmdXR1cmVcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgZGV0ZWN0aW9uLlxuICAgICAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZVtpXSA9IHY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZSAmJiAhbm9Db21taXQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgX2NvbW1pdFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbm90aGluZykge1xuICAgICAgICAgICAgd3JhcCh0aGlzLmVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYW5pdGl6ZXIgPSBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwodGhpcy5lbGVtZW50LCB0aGlzLm5hbWUsICdhdHRyaWJ1dGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9zYW5pdGl6ZXIodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICBraW5kOiAnY29tbWl0IGF0dHJpYnV0ZScsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogJycpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIFByb3BlcnR5UGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBQUk9QRVJUWV9QQVJUO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgX2NvbW1pdFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nhbml0aXplciA9IHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCh0aGlzLmVsZW1lbnQsIHRoaXMubmFtZSwgJ3Byb3BlcnR5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3Nhbml0aXplcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgcHJvcGVydHknLFxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB0aGlzLmVsZW1lbnRbdGhpcy5uYW1lXSA9IHZhbHVlID09PSBub3RoaW5nID8gdW5kZWZpbmVkIDogdmFsdWU7XG4gICAgfVxufVxuLy8gVGVtcG9yYXJ5IHdvcmthcm91bmQgZm9yIGh0dHBzOi8vY3JidWcuY29tLzk5MzI2OFxuLy8gQ3VycmVudGx5LCBhbnkgYXR0cmlidXRlIHN0YXJ0aW5nIHdpdGggXCJvblwiIGlzIGNvbnNpZGVyZWQgdG8gYmUgYVxuLy8gVHJ1c3RlZFNjcmlwdCBzb3VyY2UuIFN1Y2ggYm9vbGVhbiBhdHRyaWJ1dGVzIG11c3QgYmUgc2V0IHRvIHRoZSBlcXVpdmFsZW50XG4vLyB0cnVzdGVkIGVtcHR5U2NyaXB0IHZhbHVlLlxuY29uc3QgZW1wdHlTdHJpbmdGb3JCb29sZWFuQXR0cmlidXRlID0gdHJ1c3RlZFR5cGVzXG4gICAgPyB0cnVzdGVkVHlwZXMuZW1wdHlTY3JpcHRcbiAgICA6ICcnO1xuY2xhc3MgQm9vbGVhbkF0dHJpYnV0ZVBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gQk9PTEVBTl9BVFRSSUJVVEVfUEFSVDtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF9jb21taXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAga2luZDogJ2NvbW1pdCBib29sZWFuIGF0dHJpYnV0ZScsXG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogISEodmFsdWUgJiYgdmFsdWUgIT09IG5vdGhpbmcpLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlICE9PSBub3RoaW5nKSB7XG4gICAgICAgICAgICB3cmFwKHRoaXMuZWxlbWVudCkuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgZW1wdHlTdHJpbmdGb3JCb29sZWFuQXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIEV2ZW50UGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MsIHBhcmVudCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzLCBwYXJlbnQsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBFVkVOVF9QQVJUO1xuICAgICAgICBpZiAoREVWX01PREUgJiYgdGhpcy5zdHJpbmdzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQSBcXGA8JHtlbGVtZW50LmxvY2FsTmFtZX0+XFxgIGhhcyBhIFxcYEAke25hbWV9PS4uLlxcYCBsaXN0ZW5lciB3aXRoIGAgK1xuICAgICAgICAgICAgICAgICdpbnZhbGlkIGNvbnRlbnQuIEV2ZW50IGxpc3RlbmVycyBpbiB0ZW1wbGF0ZXMgbXVzdCBoYXZlIGV4YWN0bHkgJyArXG4gICAgICAgICAgICAgICAgJ29uZSBleHByZXNzaW9uIGFuZCBubyBzdXJyb3VuZGluZyB0ZXh0LicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEV2ZW50UGFydCBkb2VzIG5vdCB1c2UgdGhlIGJhc2UgXyRzZXRWYWx1ZS9fcmVzb2x2ZVZhbHVlIGltcGxlbWVudGF0aW9uXG4gICAgLy8gc2luY2UgdGhlIGRpcnR5IGNoZWNraW5nIGlzIG1vcmUgY29tcGxleFxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJHNldFZhbHVlKG5ld0xpc3RlbmVyLCBkaXJlY3RpdmVQYXJlbnQgPSB0aGlzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbmV3TGlzdGVuZXIgPVxuICAgICAgICAgICAgKF9hID0gcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCBuZXdMaXN0ZW5lciwgZGlyZWN0aXZlUGFyZW50LCAwKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbm90aGluZztcbiAgICAgICAgaWYgKG5ld0xpc3RlbmVyID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9sZExpc3RlbmVyID0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlO1xuICAgICAgICAvLyBJZiB0aGUgbmV3IHZhbHVlIGlzIG5vdGhpbmcgb3IgYW55IG9wdGlvbnMgY2hhbmdlIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZVxuICAgICAgICAvLyBwYXJ0IGFzIGEgbGlzdGVuZXIuXG4gICAgICAgIGNvbnN0IHNob3VsZFJlbW92ZUxpc3RlbmVyID0gKG5ld0xpc3RlbmVyID09PSBub3RoaW5nICYmIG9sZExpc3RlbmVyICE9PSBub3RoaW5nKSB8fFxuICAgICAgICAgICAgbmV3TGlzdGVuZXIuY2FwdHVyZSAhPT1cbiAgICAgICAgICAgICAgICBvbGRMaXN0ZW5lci5jYXB0dXJlIHx8XG4gICAgICAgICAgICBuZXdMaXN0ZW5lci5vbmNlICE9PVxuICAgICAgICAgICAgICAgIG9sZExpc3RlbmVyLm9uY2UgfHxcbiAgICAgICAgICAgIG5ld0xpc3RlbmVyLnBhc3NpdmUgIT09XG4gICAgICAgICAgICAgICAgb2xkTGlzdGVuZXIucGFzc2l2ZTtcbiAgICAgICAgLy8gSWYgdGhlIG5ldyB2YWx1ZSBpcyBub3Qgbm90aGluZyBhbmQgd2UgcmVtb3ZlZCB0aGUgbGlzdGVuZXIsIHdlIGhhdmVcbiAgICAgICAgLy8gdG8gYWRkIHRoZSBwYXJ0IGFzIGEgbGlzdGVuZXIuXG4gICAgICAgIGNvbnN0IHNob3VsZEFkZExpc3RlbmVyID0gbmV3TGlzdGVuZXIgIT09IG5vdGhpbmcgJiZcbiAgICAgICAgICAgIChvbGRMaXN0ZW5lciA9PT0gbm90aGluZyB8fCBzaG91bGRSZW1vdmVMaXN0ZW5lcik7XG4gICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICBraW5kOiAnY29tbWl0IGV2ZW50IGxpc3RlbmVyJyxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBuZXdMaXN0ZW5lcixcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyOiBzaG91bGRSZW1vdmVMaXN0ZW5lcixcbiAgICAgICAgICAgIGFkZExpc3RlbmVyOiBzaG91bGRBZGRMaXN0ZW5lcixcbiAgICAgICAgICAgIG9sZExpc3RlbmVyLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNob3VsZFJlbW92ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMsIG9sZExpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkQWRkTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIC8vIEJld2FyZTogSUUxMSBhbmQgQ2hyb21lIDQxIGRvbid0IGxpa2UgdXNpbmcgdGhlIGxpc3RlbmVyIGFzIHRoZVxuICAgICAgICAgICAgLy8gb3B0aW9ucyBvYmplY3QuIEZpZ3VyZSBvdXQgaG93IHRvIGRlYWwgdy8gdGhpcyBpbiBJRTExIC0gbWF5YmVcbiAgICAgICAgICAgIC8vIHBhdGNoIGFkZEV2ZW50TGlzdGVuZXI/XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMsIG5ld0xpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBuZXdMaXN0ZW5lcjtcbiAgICB9XG4gICAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5jYWxsKChfYiA9IChfYSA9IHRoaXMub3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhvc3QpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHRoaXMuZWxlbWVudCwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIEVsZW1lbnRQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBwYXJlbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy50eXBlID0gRUxFTUVOVF9QQVJUO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICAvLyBTZWUgY29tbWVudCBpbiBEaXNjb25uZWN0YWJsZSBpbnRlcmZhY2UgZm9yIHdoeSB0aGlzIGlzIGEgZ2V0dGVyXG4gICAgZ2V0IF8kaXNDb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kcGFyZW50Ll8kaXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIF8kc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgdG8gZWxlbWVudCBiaW5kaW5nJyxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgICAgcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZSk7XG4gICAgfVxufVxuLyoqXG4gKiBFTkQgVVNFUlMgU0hPVUxEIE5PVCBSRUxZIE9OIFRISVMgT0JKRUNULlxuICpcbiAqIFByaXZhdGUgZXhwb3J0cyBmb3IgdXNlIGJ5IG90aGVyIExpdCBwYWNrYWdlcywgbm90IGludGVuZGVkIGZvciB1c2UgYnlcbiAqIGV4dGVybmFsIHVzZXJzLlxuICpcbiAqIFdlIGN1cnJlbnRseSBkbyBub3QgbWFrZSBhIG1hbmdsZWQgcm9sbHVwIGJ1aWxkIG9mIHRoZSBsaXQtc3NyIGNvZGUuIEluIG9yZGVyXG4gKiB0byBrZWVwIGEgbnVtYmVyIG9mIChvdGhlcndpc2UgcHJpdmF0ZSkgdG9wLWxldmVsIGV4cG9ydHMgIG1hbmdsZWQgaW4gdGhlXG4gKiBjbGllbnQgc2lkZSBjb2RlLCB3ZSBleHBvcnQgYSBfJExIIG9iamVjdCBjb250YWluaW5nIHRob3NlIG1lbWJlcnMgKG9yXG4gKiBoZWxwZXIgbWV0aG9kcyBmb3IgYWNjZXNzaW5nIHByaXZhdGUgZmllbGRzIG9mIHRob3NlIG1lbWJlcnMpLCBhbmQgdGhlblxuICogcmUtZXhwb3J0IHRoZW0gZm9yIHVzZSBpbiBsaXQtc3NyLiBUaGlzIGtlZXBzIGxpdC1zc3IgYWdub3N0aWMgdG8gd2hldGhlciB0aGVcbiAqIGNsaWVudC1zaWRlIGNvZGUgaXMgYmVpbmcgdXNlZCBpbiBgZGV2YCBtb2RlIG9yIGBwcm9kYCBtb2RlLlxuICpcbiAqIFRoaXMgaGFzIGEgdW5pcXVlIG5hbWUsIHRvIGRpc2FtYmlndWF0ZSBpdCBmcm9tIHByaXZhdGUgZXhwb3J0cyBpblxuICogbGl0LWVsZW1lbnQsIHdoaWNoIHJlLWV4cG9ydHMgYWxsIG9mIGxpdC1odG1sLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBfJExIID0ge1xuICAgIC8vIFVzZWQgaW4gbGl0LXNzclxuICAgIF9ib3VuZEF0dHJpYnV0ZVN1ZmZpeDogYm91bmRBdHRyaWJ1dGVTdWZmaXgsXG4gICAgX21hcmtlcjogbWFya2VyLFxuICAgIF9tYXJrZXJNYXRjaDogbWFya2VyTWF0Y2gsXG4gICAgX0hUTUxfUkVTVUxUOiBIVE1MX1JFU1VMVCxcbiAgICBfZ2V0VGVtcGxhdGVIdG1sOiBnZXRUZW1wbGF0ZUh0bWwsXG4gICAgLy8gVXNlZCBpbiBoeWRyYXRlXG4gICAgX1RlbXBsYXRlSW5zdGFuY2U6IFRlbXBsYXRlSW5zdGFuY2UsXG4gICAgX2lzSXRlcmFibGU6IGlzSXRlcmFibGUsXG4gICAgX3Jlc29sdmVEaXJlY3RpdmU6IHJlc29sdmVEaXJlY3RpdmUsXG4gICAgLy8gVXNlZCBpbiB0ZXN0cyBhbmQgcHJpdmF0ZS1zc3Itc3VwcG9ydFxuICAgIF9DaGlsZFBhcnQ6IENoaWxkUGFydCxcbiAgICBfQXR0cmlidXRlUGFydDogQXR0cmlidXRlUGFydCxcbiAgICBfQm9vbGVhbkF0dHJpYnV0ZVBhcnQ6IEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LFxuICAgIF9FdmVudFBhcnQ6IEV2ZW50UGFydCxcbiAgICBfUHJvcGVydHlQYXJ0OiBQcm9wZXJ0eVBhcnQsXG4gICAgX0VsZW1lbnRQYXJ0OiBFbGVtZW50UGFydCxcbn07XG4vLyBBcHBseSBwb2x5ZmlsbHMgaWYgYXZhaWxhYmxlXG5jb25zdCBwb2x5ZmlsbFN1cHBvcnQgPSBERVZfTU9ERVxuICAgID8gd2luZG93LmxpdEh0bWxQb2x5ZmlsbFN1cHBvcnREZXZNb2RlXG4gICAgOiB3aW5kb3cubGl0SHRtbFBvbHlmaWxsU3VwcG9ydDtcbnBvbHlmaWxsU3VwcG9ydCA9PT0gbnVsbCB8fCBwb2x5ZmlsbFN1cHBvcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBvbHlmaWxsU3VwcG9ydChUZW1wbGF0ZSwgQ2hpbGRQYXJ0KTtcbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgbGl0LWh0bWwgdXNhZ2UuXG4oKF9kID0gZ2xvYmFsVGhpcy5saXRIdG1sVmVyc2lvbnMpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IChnbG9iYWxUaGlzLmxpdEh0bWxWZXJzaW9ucyA9IFtdKSkucHVzaCgnMi4yLjEnKTtcbmlmIChERVZfTU9ERSAmJiBnbG9iYWxUaGlzLmxpdEh0bWxWZXJzaW9ucy5sZW5ndGggPiAxKSB7XG4gICAgaXNzdWVXYXJuaW5nKCdtdWx0aXBsZS12ZXJzaW9ucycsIGBNdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXQgbG9hZGVkLiBgICtcbiAgICAgICAgYExvYWRpbmcgbXVsdGlwbGUgdmVyc2lvbnMgaXMgbm90IHJlY29tbWVuZGVkLmApO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWh0bWwuanMubWFwIiwiZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2N1c3RvbS1lbGVtZW50LmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3Byb3BlcnR5LmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3N0YXRlLmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2V2ZW50LW9wdGlvbnMuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnkuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYWxsLmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzeW5jLmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzc2lnbmVkLWVsZW1lbnRzLmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzc2lnbmVkLW5vZGVzLmpzXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWNvcmF0b3JzLmpzLm1hcFxuIiwiZXhwb3J0KmZyb21cImxpdC1odG1sL2RpcmVjdGl2ZXMvaWYtZGVmaW5lZC5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aWYtZGVmaW5lZC5qcy5tYXBcbiIsImV4cG9ydCpmcm9tXCJsaXQtaHRtbC9kaXJlY3RpdmVzL3JlZi5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVmLmpzLm1hcFxuIiwiZXhwb3J0KmZyb21cImxpdC1odG1sL2RpcmVjdGl2ZXMvdW50aWwuanNcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVudGlsLmpzLm1hcFxuIiwiaW1wb3J0XCJAbGl0L3JlYWN0aXZlLWVsZW1lbnRcIjtpbXBvcnRcImxpdC1odG1sXCI7ZXhwb3J0KmZyb21cImxpdC1lbGVtZW50L2xpdC1lbGVtZW50LmpzXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogQ29tcG9uZW50cyAqL1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9idXR0b24nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9jYWxlbmRhcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2NoZWNrYm94JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvY2hlY2tib3gtbGlzdCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2NvbG9yJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZmlsZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3Bhc3N3b3JkJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvcmFkaW8nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9yYW5nZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3NkcGktaXRlbSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3NlbGVjdCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3RleHRhcmVhJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvdGV4dGZpZWxkJztcclxuaW1wb3J0ICcuL3N0cmVhbS1kZWNrL2Nvbm5lY3QnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2RvY3VtZW50JztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9