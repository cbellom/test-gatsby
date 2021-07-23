(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "svTr":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-form-field_4.entry.js ***!
  \****************************************************************************************/
/*! exports provided: amplify_form_field, amplify_hint, amplify_input, amplify_label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_form_field", function() { return AmplifyFormField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_hint", function() { return AmplifyHint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_input", function() { return AmplifyInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_label", function() { return AmplifyLabel; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "WVmh");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "s1tr");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "sPRy");
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d7afd96c.js */ "tZvK");
/* harmony import */ var _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-80b400b1.js */ "pHM5");








const amplifyFormFieldCss = "amplify-form-field{--label-font-size:var(--amplify-text-md);--description-font-size:var(--amplify-text-sm)}.form-field{margin-bottom:15px}.form-field-label{display:block;font-size:var(--label-font-size);padding-bottom:0.5em}.form-field-description{font-size:var(--description-font-size);padding-top:0.5em}";

const AmplifyFormField = class {
    constructor(hostRef) {
        Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The input type.  Can be any HTML input type. */
        this.type = 'text';
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
        /** (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users. */
        this.placeholder = '';
    }
    render() {
        return (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "form-field" }, this.label && (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "form-field-label" }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-label", { htmlFor: this.fieldId }, this.label))), this.description && (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { id: `${this.fieldId}-description`, class: "form-field-description", "data-test": "form-field-description" }, this.description)), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "input" }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-input", { fieldId: this.fieldId, description: this.description, type: this.type, handleInputChange: this.handleInputChange, placeholder: this.placeholder, name: this.name, value: this.value, inputProps: this.inputProps, disabled: this.disabled, required: this.required }))), this.hint && (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-hint", { id: `${this.fieldId}-hint` }, this.hint))));
    }
};
AmplifyFormField.style = amplifyFormFieldCss;

const amplifyHintCss = ":host{--color:var(--amplify-grey);--font-family:var(--amplify-font-family);--font-size:var(--amplify-text-xs);--font-weight:var(--amplify-font-weight)}.hint{color:var(--color);font-family:var(--font-family);font-weight:var(--font-weight);font-size:var(--font-size);margin-bottom:2.625rem}";

const AmplifyHint = class {
    constructor(hostRef) {
        Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "hint" }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
};
AmplifyHint.style = amplifyHintCss;

const amplifyInputCss = "amplify-input{--color:var(--amplify-secondary-color);--background-color:var(--amplify-secondary-contrast);--border-color:var(--amplify-light-grey);--border-color-focus:var(--amplify-primary-color);--border:1px solid var(--border-color);--margin:0 0 0.625rem 0}[data-autocompleted]{background-color:#e8f0fe !important}.input-host{width:100%}.input{display:block;width:100%;padding:1rem;font-size:var(--amplify-text-sm);color:var(--color);background-color:var(--background-color);background-image:none;border:var(--border);border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:var(--margin);height:3.125rem;line-height:1.1;-webkit-box-shadow:none;box-shadow:none}.input:focus{outline:none;border-color:var(--border-color-focus)}.input:disabled{opacity:0.5}";

const AmplifyInput = class {
    constructor(hostRef) {
        Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The input type.  Can be any HTML input type. */
        this.type = 'text';
        /** The callback, called when the input is modified by the user. */
        this.handleInputChange = () => void 0;
        /** (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users. */
        this.placeholder = '';
        /** Whether the input is a required field */
        this.required = false;
        /** Whether the input has been autocompleted */
        this.autoCompleted = false;
    }
    /**
     * Sets the value of this input to the value in autofill input event.
     */
    setAutoCompleteValue(value) {
        const input = this.el.querySelector('input');
        if (!input)
            return;
        input.value = value;
        // dispatch an input event from this element to the parent form
        input.dispatchEvent(new Event('input'));
        this.autoCompleted = true;
    }
    /**
     * Checks if the target dummy input in `amplify-auth-container` is present have been autofilled.
     * If so, we update this.value with the autofilled value.
     */
    checkAutoCompletion(targetInput) {
        if (!targetInput)
            return;
        if (targetInput.value) {
            // if value is already set, we set the value directly
            this.setAutoCompleteValue(targetInput.value);
        }
        else {
            // if value is not set, we start listening for it
            targetInput.addEventListener('input', e => {
                const value = e.target.value;
                this.setAutoCompleteValue(value);
            });
        }
    }
    disconnectedCallback() {
        this.removeHubListener && this.removeHubListener(); // stop listening to `onAuthUIStateChange`
    }
    componentWillLoad() {
        // the below behaviors are only applicable if `amplify-input` is used by `amplify-authenticator`.
        if (!Object(_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_6__["e"])('amplify-authenticator', this.el))
            return;
        this.removeHubListener = Object(_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_6__["o"])(() => {
            /**
             * When we're using slots, autofilled data will persist between different authState,
             * even though input events are not triggered. This ends up in parent components
             * not picking up input values. For now, we're emptying the input on authState change
             * which is the existing behavior.
             */
            const input = this.el.querySelector('input');
            if (input)
                input.value = '';
            this.autoCompleted = false;
        });
    }
    componentDidLoad() {
        // no-op if this field already has been autofilled or already has an value
        if (this.autoCompleted || this.value)
            return;
        if (/Firefox/.test(navigator.userAgent))
            return; // firefox autofill works
        const container = Object(_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_6__["e"])('amplify-auth-container', this.el);
        const signIn = Object(_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_6__["e"])('amplify-sign-in', this.el);
        // only autocomplete if `amplify-auth-container` is present and input is under `sign-in`.
        if (!container || !signIn)
            return;
        const username = container.querySelector("input[name='username']");
        const password = container.querySelector("input[name='password']");
        if (this.name === 'username' ||
            this.name === 'email' ||
            this.name === 'phone') {
            this.checkAutoCompletion(username);
        }
        else if (this.name === 'password') {
            this.checkAutoCompletion(password);
        }
    }
    render() {
        return (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: "input-host" }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", Object.assign({ id: this.fieldId, "aria-describedby": this.fieldId && this.description
                ? `${this.fieldId}-description`
                : null, "data-autocompleted": this.autoCompleted, type: this.type, onInput: event => {
                this.autoCompleted = false;
                this.handleInputChange(event);
            }, placeholder: this.placeholder, name: this.name, class: "input", value: this.value, disabled: this.disabled, required: this.required }, this.inputProps))));
    }
    get el() { return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
AmplifyInput.style = amplifyInputCss;

const amplifyLabelCss = ":host{--label-color:var(--amplify-secondary-color)}.label{color:var(--label-color);font-size:var(--amplify-text-sm);margin-bottom:16px}";

const AmplifyLabel = class {
    constructor(hostRef) {
        Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: "label", htmlFor: this.htmlFor }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
};
AmplifyLabel.style = amplifyLabelCss;




/***/ })

}]);
//# sourceMappingURL=21.js.map