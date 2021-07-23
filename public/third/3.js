(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "5Azo":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-auth-fields_9.entry.js ***!
  \*****************************************************************************************/
/*! exports provided: amplify_auth_fields, amplify_code_field, amplify_country_dial_code, amplify_email_field, amplify_form_section, amplify_password_field, amplify_phone_field, amplify_select, amplify_username_field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_auth_fields", function() { return AmplifyAuthFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_code_field", function() { return AmplifyCodeField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_country_dial_code", function() { return AmplifyCountryDialCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_email_field", function() { return AmplifyEmailField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_form_section", function() { return AmplifyFormSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_password_field", function() { return AmplifyPasswordField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_phone_field", function() { return AmplifyPhoneField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_select", function() { return AmplifySelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_username_field", function() { return AmplifyUsernameField; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "WVmh");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Translations-c833f663.js */ "sPRy");
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-d7afd96c.js */ "tZvK");






const componentFieldMapping = {
    username: (ff) => (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-username-field", { label: ff.label, placeholder: ff.placeholder, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled, hint: ff.hint })),
    password: (ff) => (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-password-field", { label: ff.label, placeholder: ff.placeholder, hint: ff.hint, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled })),
    email: (ff) => (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-email-field", { label: ff.label, placeholder: ff.placeholder, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled, hint: ff.hint })),
    code: (ff) => (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-code-field", { label: ff.label, placeholder: ff.placeholder, hint: ff.hint, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: Object.assign(Object.assign({}, ff.inputProps), { min: '0' }), disabled: ff.disabled })),
    // TODO: Will create a phone field component once the dial country code component is in
    phone_number: (ff) => (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-phone-field", { label: ff.label, placeholder: ff.placeholder, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled, dialCode: ff.dialCode, hint: ff.hint })),
    default: (ff) => (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-field", { label: ff.label, type: ff.type, placeholder: ff.placeholder, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled, hint: ff.hint })),
};

const amplifyAuthFieldsCss = ".auth-fields{margin-bottom:2rem}";

const AmplifyAuthFields = class {
    constructor(hostRef) {
        Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    constructFormFieldOptions(formFields) {
        const content = [];
        if (formFields === undefined)
            return '';
        formFields.forEach((formField) => {
            if (typeof formField === 'string') {
                content.push(componentFieldMapping[formField](formField));
            }
            else if (Object.keys(componentFieldMapping).includes(formField.type)) {
                content.push(componentFieldMapping[formField.type](formField));
            }
            else {
                content.push(componentFieldMapping['default'](formField));
            }
        });
        return content;
    }
    render() {
        return (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "auth-fields" }, this.constructFormFieldOptions(this.formFields)));
    }
};
AmplifyAuthFields.style = amplifyAuthFieldsCss;

const AmplifyCodeField = class {
    constructor(hostRef) {
        Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__["k"];
        /** Used for the code label */
        this.label = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].CODE_LABEL;
        /** Used for the placeholder label */
        this.placeholder = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].CODE_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    render() {
        return (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-field", { fieldId: this.fieldId, label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.label), placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.placeholder), type: "number", hint: this.hint, required: this.required, handleInputChange: this.handleInputChange, value: this.value, inputProps: this.inputProps, disabled: this.disabled }));
    }
};

const countryDialCodes = [
    { label: '+1', value: '+1' },
    { label: '+7', value: '+7' },
    { label: '+20', value: '+20' },
    { label: '+27', value: '+27' },
    { label: '+30', value: '+30' },
    { label: '+31', value: '+31' },
    { label: '+32', value: '+32' },
    { label: '+33', value: '+33' },
    { label: '+34', value: '+34' },
    { label: '+36', value: '+36' },
    { label: '+39', value: '+39' },
    { label: '+40', value: '+40' },
    { label: '+41', value: '+41' },
    { label: '+43', value: '+43' },
    { label: '+44', value: '+44' },
    { label: '+45', value: '+45' },
    { label: '+46', value: '+46' },
    { label: '+47', value: '+47' },
    { label: '+48', value: '+48' },
    { label: '+49', value: '+49' },
    { label: '+51', value: '+51' },
    { label: '+52', value: '+52' },
    { label: '+53', value: '+53' },
    { label: '+54', value: '+54' },
    { label: '+55', value: '+55' },
    { label: '+56', value: '+56' },
    { label: '+57', value: '+57' },
    { label: '+58', value: '+58' },
    { label: '+60', value: '+60' },
    { label: '+61', value: '+61' },
    { label: '+62', value: '+62' },
    { label: '+63', value: '+63' },
    { label: '+64', value: '+64' },
    { label: '+65', value: '+65' },
    { label: '+66', value: '+66' },
    { label: '+81', value: '+81' },
    { label: '+82', value: '+82' },
    { label: '+84', value: '+84' },
    { label: '+86', value: '+86' },
    { label: '+90', value: '+90' },
    { label: '+91', value: '+91' },
    { label: '+92', value: '+92' },
    { label: '+93', value: '+93' },
    { label: '+94', value: '+94' },
    { label: '+95', value: '+95' },
    { label: '+98', value: '+98' },
    { label: '+212', value: '+212' },
    { label: '+213', value: '+213' },
    { label: '+216', value: '+216' },
    { label: '+218', value: '+218' },
    { label: '+220', value: '+220' },
    { label: '+221', value: '+221' },
    { label: '+222', value: '+222' },
    { label: '+223', value: '+223' },
    { label: '+224', value: '+224' },
    { label: '+225', value: '+225' },
    { label: '+226', value: '+226' },
    { label: '+227', value: '+227' },
    { label: '+228', value: '+228' },
    { label: '+229', value: '+229' },
    { label: '+230', value: '+230' },
    { label: '+231', value: '+231' },
    { label: '+232', value: '+232' },
    { label: '+233', value: '+233' },
    { label: '+234', value: '+234' },
    { label: '+235', value: '+235' },
    { label: '+236', value: '+236' },
    { label: '+237', value: '+237' },
    { label: '+238', value: '+238' },
    { label: '+239', value: '+239' },
    { label: '+240', value: '+240' },
    { label: '+241', value: '+241' },
    { label: '+242', value: '+242' },
    { label: '+243', value: '+243' },
    { label: '+244', value: '+244' },
    { label: '+245', value: '+245' },
    { label: '+246', value: '+246' },
    { label: '+248', value: '+248' },
    { label: '+249', value: '+249' },
    { label: '+250', value: '+250' },
    { label: '+251', value: '+251' },
    { label: '+252', value: '+252' },
    { label: '+253', value: '+253' },
    { label: '+254', value: '+254' },
    { label: '+255', value: '+255' },
    { label: '+256', value: '+256' },
    { label: '+257', value: '+257' },
    { label: '+258', value: '+258' },
    { label: '+260', value: '+260' },
    { label: '+261', value: '+261' },
    { label: '+262', value: '+262' },
    { label: '+263', value: '+263' },
    { label: '+264', value: '+264' },
    { label: '+265', value: '+265' },
    { label: '+266', value: '+266' },
    { label: '+267', value: '+267' },
    { label: '+268', value: '+268' },
    { label: '+269', value: '+269' },
    { label: '+290', value: '+290' },
    { label: '+291', value: '+291' },
    { label: '+297', value: '+297' },
    { label: '+298', value: '+298' },
    { label: '+299', value: '+299' },
    { label: '+345', value: '+345' },
    { label: '+350', value: '+350' },
    { label: '+351', value: '+351' },
    { label: '+352', value: '+352' },
    { label: '+353', value: '+353' },
    { label: '+354', value: '+354' },
    { label: '+355', value: '+355' },
    { label: '+356', value: '+356' },
    { label: '+357', value: '+357' },
    { label: '+358', value: '+358' },
    { label: '+359', value: '+359' },
    { label: '+370', value: '+370' },
    { label: '+371', value: '+371' },
    { label: '+372', value: '+372' },
    { label: '+373', value: '+373' },
    { label: '+374', value: '+374' },
    { label: '+375', value: '+375' },
    { label: '+376', value: '+376' },
    { label: '+377', value: '+377' },
    { label: '+378', value: '+378' },
    { label: '+379', value: '+379' },
    { label: '+380', value: '+380' },
    { label: '+381', value: '+381' },
    { label: '+382', value: '+382' },
    { label: '+385', value: '+385' },
    { label: '+386', value: '+386' },
    { label: '+387', value: '+387' },
    { label: '+389', value: '+389' },
    { label: '+420', value: '+420' },
    { label: '+421', value: '+421' },
    { label: '+423', value: '+423' },
    { label: '+500', value: '+500' },
    { label: '+501', value: '+501' },
    { label: '+502', value: '+502' },
    { label: '+503', value: '+503' },
    { label: '+504', value: '+504' },
    { label: '+505', value: '+505' },
    { label: '+506', value: '+506' },
    { label: '+507', value: '+507' },
    { label: '+508', value: '+508' },
    { label: '+509', value: '+509' },
    { label: '+537', value: '+537' },
    { label: '+590', value: '+590' },
    { label: '+591', value: '+591' },
    { label: '+593', value: '+593' },
    { label: '+594', value: '+594' },
    { label: '+595', value: '+595' },
    { label: '+596', value: '+596' },
    { label: '+597', value: '+597' },
    { label: '+598', value: '+598' },
    { label: '+599', value: '+599' },
    { label: '+670', value: '+670' },
    { label: '+672', value: '+672' },
    { label: '+673', value: '+673' },
    { label: '+674', value: '+674' },
    { label: '+675', value: '+675' },
    { label: '+676', value: '+676' },
    { label: '+677', value: '+677' },
    { label: '+678', value: '+678' },
    { label: '+679', value: '+679' },
    { label: '+680', value: '+680' },
    { label: '+681', value: '+681' },
    { label: '+682', value: '+682' },
    { label: '+683', value: '+683' },
    { label: '+685', value: '+685' },
    { label: '+686', value: '+686' },
    { label: '+687', value: '+687' },
    { label: '+688', value: '+688' },
    { label: '+689', value: '+689' },
    { label: '+690', value: '+690' },
    { label: '+691', value: '+691' },
    { label: '+692', value: '+692' },
    { label: '+850', value: '+850' },
    { label: '+852', value: '+852' },
    { label: '+853', value: '+853' },
    { label: '+855', value: '+855' },
    { label: '+856', value: '+856' },
    { label: '+872', value: '+872' },
    { label: '+880', value: '+880' },
    { label: '+886', value: '+886' },
    { label: '+960', value: '+960' },
    { label: '+961', value: '+961' },
    { label: '+962', value: '+962' },
    { label: '+963', value: '+963' },
    { label: '+964', value: '+964' },
    { label: '+965', value: '+965' },
    { label: '+966', value: '+966' },
    { label: '+967', value: '+967' },
    { label: '+968', value: '+968' },
    { label: '+970', value: '+970' },
    { label: '+971', value: '+971' },
    { label: '+972', value: '+972' },
    { label: '+973', value: '+973' },
    { label: '+974', value: '+974' },
    { label: '+975', value: '+975' },
    { label: '+976', value: '+976' },
    { label: '+977', value: '+977' },
    { label: '+992', value: '+992' },
    { label: '+993', value: '+993' },
    { label: '+994', value: '+994' },
    { label: '+995', value: '+995' },
    { label: '+996', value: '+996' },
    { label: '+998', value: '+998' },
];

const AmplifyCountryDialCode = class {
    constructor(hostRef) {
        Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The ID of the field.  Should match with its corresponding input's ID. */
        this.fieldId = _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__["C"];
        /** The options of the country dial code select input. */
        this.options = countryDialCodes;
        /** Default selected dial code */
        this.dialCode = '+1';
    }
    componentWillLoad() {
        this.setSelectedDialCode();
    }
    watchDialCodeHandler() {
        this.setSelectedDialCode();
    }
    setSelectedDialCode() {
        if (typeof this.dialCode === 'number') {
            this.selectedDialCode = `+${this.dialCode}`;
        }
        else {
            this.selectedDialCode = this.dialCode;
        }
    }
    render() {
        return (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-select", { fieldId: this.fieldId, options: this.options, handleInputChange: this.handleInputChange, selected: this.selectedDialCode }));
    }
    static get watchers() { return {
        "dialCode": ["watchDialCodeHandler"]
    }; }
};

const AmplifyEmailField = class {
    constructor(hostRef) {
        Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__["E"];
        /** Used for the EMAIL label */
        this.label = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].EMAIL_LABEL;
        /** Used for the placeholder label */
        this.placeholder = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].EMAIL_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    render() {
        return (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-field", { fieldId: this.fieldId, label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.label), placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.placeholder), type: "email", name: "email", required: this.required, handleInputChange: this.handleInputChange, value: this.value, inputProps: this.inputProps, disabled: this.disabled, hint: this.hint }));
    }
};

const amplifyFormSectionCss = "amplify-form-section{--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-md-sub);--subtitle-size:var(--amplify-grey);--subtitle-color:var(--amplify-grey);--footer-color:var(--amplify-grey);--footer-size:var(--amplify-text-sm);--font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.form-section-header{margin:1rem 0 1.5rem 0}.form-section-header .header{color:var(--header-color);font-size:var(--header-size);font-weight:700;margin-bottom:0.75rem}.form-section-header .subtitle{font-weight:400;font-size:var(--amplify-text-sm);color:var(--subtitle-color)}.form-section-footer{font-family:var(--font-family);font-weight:var(--font-weight);font-size:var(--footer-size);color:var(--footer-color);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}@media (min-width: 672px){.form-section-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}}.form-section-footer *+*{margin-top:15px}";

const AmplifyFormSection = class {
    constructor(hostRef) {
        Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** (Optional) Used as a the default value within the default footer slot */
        this.submitButtonText = 'Submit';
        /** String prefix for the data-test attributes in this component primarily used for testing purposes */
        this.testDataPrefix = 'form-section';
        /** Loading state for the form */
        this.loading = false;
        /** Secondary footer component or text */
        this.secondaryFooterContent = null;
    }
    // eslint-disable-next-line
    handleFormSubmit(ev) {
        this.handleSubmit(ev.detail);
    }
    render() {
        return (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", { onSubmit: this.handleSubmit }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-section", null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "amplify-form-section-header" }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "form-section-header" }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", { class: "header", "data-test": this.testDataPrefix + '-header-section' }, this.headerText), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "subtitle" }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "subtitle" }))))), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "amplify-form-section-footer" }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "form-section-footer" }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { type: "submit", "data-test": this.testDataPrefix + '-' + this.testDataPrefix + '-button' }, this.loading ? (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-loading-spinner", null)) : (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.submitButtonText))), this.secondaryFooterContent))))));
    }
};
AmplifyFormSection.style = amplifyFormSectionCss;

const AmplifyPasswordField = class {
    constructor(hostRef) {
        Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__["l"];
        /** Used for the password label */
        this.label = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PASSWORD_LABEL;
        /** Used for the placeholder label */
        this.placeholder = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PASSWORD_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    render() {
        return (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-field", { type: "password", name: "password", fieldId: this.fieldId, label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.label), placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.placeholder), hint: this.hint, required: this.required, handleInputChange: this.handleInputChange, value: this.value, inputProps: this.inputProps, disabled: this.disabled }));
    }
};

const amplifyPhoneFieldCss = ".phone-field{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:start;align-items:flex-start;width:100%}.phone-field input{border-left:none;border-radius:0 3px 3px 0}";

const AmplifyPhoneField = class {
    constructor(hostRef) {
        Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__["b"];
        /** Used for the Phone label */
        this.label = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PHONE_LABEL;
        /** Used for the placeholder label */
        this.placeholder = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PHONE_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    render() {
        return (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-field", { label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.label), hint: this.hint }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "phone-field", slot: "input" }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-country-dial-code", { dialCode: this.dialCode, handleInputChange: this.handleInputChange }), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-input", { fieldId: this.fieldId, type: "tel", handleInputChange: this.handleInputChange, placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.placeholder), name: this.fieldId, value: this.value, inputProps: this.inputProps, disabled: this.disabled, required: this.required })))));
    }
};
AmplifyPhoneField.style = amplifyPhoneFieldCss;

const amplifySelectCss = ":host{--color:var(--amplify-secondary-color);--background-color:var(--amplify-secondary-contrast);--border-color:var(--amplify-light-grey);--border-focus:var(--amplify-primary-color);--background-image:linear-gradient(45deg, transparent 50%, gray 50%),\n  \tlinear-gradient(135deg, gray 50%, transparent 50%),\n  \tlinear-gradient(to right, #ccc, #ccc)}.select{padding:1rem 1.75rem 1rem 1rem;font-size:var(--amplify-text-sm);color:var(--color);background-color:var(--background-color);border:1px solid var(--border-color);border-radius:3px 0 0 3px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-flex-preferred-size:auto;flex-basis:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0;height:3.125rem;background-image:var(--background-image);background-position:calc(100% - 1rem) calc(1em + 0.5rem), calc(100% - 0.7rem) calc(1em + 0.5rem), calc(100% - 2.5em) 0.5em;background-size:6px 5px, 6px 5px, 0px 1.5em;background-repeat:no-repeat}.select :focus{outline:none;border-color:var(--border-focus)}";

const DEFAULT_SELECT_OPTION = [{ label: '', value: 1 }];
const logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('amplify-select');
const AmplifySelect = class {
    constructor(hostRef) {
        Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The options of the select input. Must be an Array of Objects with an Object shape of {label: string, value: string|number} */
        this.options = DEFAULT_SELECT_OPTION;
    }
    componentWillLoad() {
        this.selectOptions = this.contructSelectOptions(this.options);
    }
    handleSelectOptionsChange() {
        this.selectOptions = this.contructSelectOptions(this.options);
    }
    isSelectedOptionValid(selected) {
        if (selected && !this.options.some(option => option.value === selected)) {
            logger.warn('Selected option does not exist in options values, falling back to initial option');
            return false;
        }
        return true;
    }
    contructSelectOptions(opts) {
        this.isSelectedOptionValid(this.selected);
        const content = [];
        opts.forEach((opt) => {
            content.push(Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("option", { value: opt.value, selected: opt.value === this.selected }, opt.label));
        });
        return content;
    }
    render() {
        return (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("select", { name: this.fieldId, id: this.fieldId, class: "select", onChange: this.handleInputChange }, this.selectOptions));
    }
    static get watchers() { return {
        "options": ["handleSelectOptionsChange"],
        "selected": ["handleSelectOptionsChange"]
    }; }
};
AmplifySelect.style = amplifySelectCss;

const AmplifyUsernameField = class {
    constructor(hostRef) {
        Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__["m"];
        /** Used for the username label */
        this.label = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].USERNAME_LABEL;
        /** Used for the placeholder label */
        this.placeholder = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].USERNAME_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    render() {
        return (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-field", { name: "username", fieldId: this.fieldId, label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.label), placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.placeholder), required: this.required, handleInputChange: this.handleInputChange, value: this.value, inputProps: this.inputProps, disabled: this.disabled, hint: this.hint }));
    }
};




/***/ }),

/***/ "sPRy":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/Translations-c833f663.js ***!
  \***********************************************************************************/
/*! exports provided: T */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return Translations; });
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");


var AuthStrings;
(function (AuthStrings) {
    AuthStrings["BACK_TO_SIGN_IN"] = "Back to Sign In";
    AuthStrings["CHANGE_PASSWORD_ACTION"] = "Change";
    AuthStrings["CHANGE_PASSWORD"] = "Change Password";
    AuthStrings["CODE_LABEL"] = "Verification code";
    AuthStrings["CODE_PLACEHOLDER"] = "Enter code";
    AuthStrings["CONFIRM_SIGN_UP_CODE_LABEL"] = "Confirmation Code";
    AuthStrings["CONFIRM_SIGN_UP_CODE_PLACEHOLDER"] = "Enter your code";
    AuthStrings["CONFIRM_SIGN_UP_HEADER_TEXT"] = "Confirm Sign up";
    AuthStrings["CONFIRM_SIGN_UP_LOST_CODE"] = "Lost your code?";
    AuthStrings["CONFIRM_SIGN_UP_RESEND_CODE"] = "Resend Code";
    AuthStrings["CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT"] = "Confirm";
    AuthStrings["CONFIRM_SMS_CODE"] = "Confirm SMS Code";
    AuthStrings["CONFIRM_TOTP_CODE"] = "Confirm TOTP Code";
    AuthStrings["CONFIRM"] = "Confirm";
    AuthStrings["CREATE_ACCOUNT_TEXT"] = "Create account";
    AuthStrings["EMAIL_LABEL"] = "Email Address *";
    AuthStrings["EMAIL_PLACEHOLDER"] = "Enter your email address";
    AuthStrings["FORGOT_PASSWORD_TEXT"] = "Forgot your password?";
    AuthStrings["LESS_THAN_TWO_MFA_VALUES_MESSAGE"] = "Less than two MFA types available";
    AuthStrings["NEW_PASSWORD_LABEL"] = "New password";
    AuthStrings["NEW_PASSWORD_PLACEHOLDER"] = "Enter your new password";
    AuthStrings["NO_ACCOUNT_TEXT"] = "No account?";
    AuthStrings["USERNAME_REMOVE_WHITESPACE"] = "Username cannot contain whitespace";
    AuthStrings["PASSWORD_REMOVE_WHITESPACE"] = "Password cannot start or end with whitespace";
    AuthStrings["PASSWORD_LABEL"] = "Password *";
    AuthStrings["PASSWORD_PLACEHOLDER"] = "Enter your password";
    AuthStrings["PHONE_LABEL"] = "Phone Number *";
    AuthStrings["PHONE_PLACEHOLDER"] = "(555) 555-1212";
    AuthStrings["QR_CODE_ALT"] = "qrcode";
    AuthStrings["RESET_PASSWORD_TEXT"] = "Reset password";
    AuthStrings["RESET_YOUR_PASSWORD"] = "Reset your password";
    AuthStrings["SELECT_MFA_TYPE_HEADER_TEXT"] = "Select MFA Type";
    AuthStrings["SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT"] = "Verify";
    AuthStrings["SEND_CODE"] = "Send Code";
    AuthStrings["SUBMIT"] = "Submit";
    AuthStrings["SETUP_TOTP_REQUIRED"] = "TOTP needs to be configured";
    AuthStrings["SIGN_IN_ACTION"] = "Sign In";
    AuthStrings["SIGN_IN_HEADER_TEXT"] = "Sign in to your account";
    AuthStrings["SIGN_IN_TEXT"] = "Sign in";
    AuthStrings["SIGN_IN_WITH_AMAZON"] = "Sign in with Amazon";
    AuthStrings["SIGN_IN_WITH_AUTH0"] = "Sign in with Auth0";
    AuthStrings["SIGN_IN_WITH_AWS"] = "Sign in with AWS";
    AuthStrings["SIGN_IN_WITH_FACEBOOK"] = "Sign in with Facebook";
    AuthStrings["SIGN_IN_WITH_GOOGLE"] = "Sign in with Google";
    AuthStrings["SIGN_OUT"] = "Sign Out";
    AuthStrings["SIGN_UP_EMAIL_PLACEHOLDER"] = "Email";
    AuthStrings["SIGN_UP_HAVE_ACCOUNT_TEXT"] = "Have an account?";
    AuthStrings["SIGN_UP_HEADER_TEXT"] = "Create a new account";
    AuthStrings["SIGN_UP_PASSWORD_PLACEHOLDER"] = "Password";
    AuthStrings["SIGN_UP_SUBMIT_BUTTON_TEXT"] = "Create Account";
    AuthStrings["SIGN_UP_USERNAME_PLACEHOLDER"] = "Username";
    AuthStrings["SUCCESS_MFA_TYPE"] = "Success! Your MFA Type is now:";
    AuthStrings["TOTP_HEADER_TEXT"] = "Scan then enter verification code";
    AuthStrings["TOTP_LABEL"] = "Enter Security Code:";
    AuthStrings["TOTP_ISSUER"] = "AWSCognito";
    AuthStrings["TOTP_SETUP_FAILURE"] = "TOTP Setup has failed";
    AuthStrings["TOTP_SUBMIT_BUTTON_TEXT"] = "Verify Security Token";
    AuthStrings["TOTP_SUCCESS_MESSAGE"] = "Setup TOTP successfully!";
    AuthStrings["UNABLE_TO_SETUP_MFA_AT_THIS_TIME"] = "Failed! Unable to configure MFA at this time";
    AuthStrings["USERNAME_LABEL"] = "Username *";
    AuthStrings["USERNAME_PLACEHOLDER"] = "Enter your username";
    AuthStrings["VERIFY_CONTACT_EMAIL_LABEL"] = "Email";
    AuthStrings["VERIFY_CONTACT_HEADER_TEXT"] = "Account recovery requires verified contact information";
    AuthStrings["VERIFY_CONTACT_PHONE_LABEL"] = "Phone Number";
    AuthStrings["VERIFY_CONTACT_SUBMIT_LABEL"] = "Submit";
    AuthStrings["VERIFY_CONTACT_VERIFY_LABEL"] = "Verify";
    AuthStrings["ADDRESS_LABEL"] = "Address";
    AuthStrings["ADDRESS_PLACEHOLDER"] = "Enter your address";
    AuthStrings["NICKNAME_LABEL"] = "Nickname";
    AuthStrings["NICKNAME_PLACEHOLDER"] = "Enter your nickname";
    AuthStrings["BIRTHDATE_LABEL"] = "Birthday";
    AuthStrings["BIRTHDATE_PLACEHOLDER"] = "Enter your birthday";
    AuthStrings["PICTURE_LABEL"] = "Picture URL";
    AuthStrings["PICTURE_PLACEHOLDER"] = "Enter your picture URL";
    AuthStrings["FAMILY_NAME_LABEL"] = "Family Name";
    AuthStrings["FAMILY_NAME_PLACEHOLDER"] = "Enter your family name";
    AuthStrings["PREFERRED_USERNAME_LABEL"] = "Preferred Username";
    AuthStrings["PREFERRED_USERNAME_PLACEHOLDER"] = "Enter your preferred username";
    AuthStrings["GENDER_LABEL"] = "Gender";
    AuthStrings["GENDER_PLACEHOLDER"] = "Enter your gender";
    AuthStrings["PROFILE_LABEL"] = "Profile URL";
    AuthStrings["PROFILE_PLACEHOLDER"] = "Enter your profile URL";
    AuthStrings["GIVEN_NAME_LABEL"] = "First Name";
    AuthStrings["GIVEN_NAME_PLACEHOLDER"] = "Enter your first name";
    AuthStrings["ZONEINFO_LABEL"] = "Time zone";
    AuthStrings["ZONEINFO_PLACEHOLDER"] = "Enter your time zone";
    AuthStrings["LOCALE_LABEL"] = "Locale";
    AuthStrings["LOCALE_PLACEHOLDER"] = "Enter your locale";
    AuthStrings["UPDATED_AT_LABEL"] = "Updated At";
    AuthStrings["UPDATED_AT_PLACEHOLDER"] = "Enter the time the information was last updated";
    AuthStrings["MIDDLE_NAME_LABEL"] = "Middle Name";
    AuthStrings["MIDDLE_NAME_PLACEHOLDER"] = "Enter your middle name";
    AuthStrings["WEBSITE_LABEL"] = "Website";
    AuthStrings["WEBSITE_PLACEHOLDER"] = "Enter your website";
    AuthStrings["NAME_LABEL"] = "Full Name";
    AuthStrings["NAME_PLACEHOLDER"] = "Enter your full name";
    AuthStrings["PHOTO_PICKER_TITLE"] = "Picker Title";
    AuthStrings["PHOTO_PICKER_HINT"] = "Ancillary text or content may occupy this space here";
    AuthStrings["PHOTO_PICKER_PLACEHOLDER_HINT"] = "Placeholder hint";
    AuthStrings["PHOTO_PICKER_BUTTON_TEXT"] = "Button";
    AuthStrings["IMAGE_PICKER_TITLE"] = "Add Profile Photo";
    AuthStrings["IMAGE_PICKER_HINT"] = "Preview the image before upload";
    AuthStrings["IMAGE_PICKER_PLACEHOLDER_HINT"] = "Tap to image select";
    AuthStrings["IMAGE_PICKER_BUTTON_TEXT"] = "Upload";
    AuthStrings["PICKER_TEXT"] = "Pick a file";
    AuthStrings["TEXT_FALLBACK_CONTENT"] = "Fallback Content";
    AuthStrings["CONFIRM_SIGN_UP_FAILED"] = "Confirm Sign Up Failed";
    AuthStrings["SIGN_UP_FAILED"] = "Sign Up Failed";
})(AuthStrings || (AuthStrings = {}));
var InteractionsStrings;
(function (InteractionsStrings) {
    InteractionsStrings["CHATBOT_TITLE"] = "ChatBot Lex";
    InteractionsStrings["TEXT_INPUT_PLACEHOLDER"] = "Write a message";
    InteractionsStrings["VOICE_INPUT_PLACEHOLDER"] = "Click mic to speak";
    InteractionsStrings["CHAT_DISABLED_ERROR"] = "Error: Either voice or text must be enabled for the chatbot";
    InteractionsStrings["NO_BOT_NAME_ERROR"] = "Error: Bot name must be provided to ChatBot";
})(InteractionsStrings || (InteractionsStrings = {}));
const Translations = Object.assign(Object.assign(Object.assign({}, AuthStrings), _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_0__["AuthErrorStrings"]), InteractionsStrings);




/***/ }),

/***/ "tZvK":
/*!********************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/constants-d7afd96c.js ***!
  \********************************************************************************/
/*! exports provided: A, C, E, N, P, S, T, U, a, b, c, d, e, f, g, h, i, j, k, l, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return AUTH_CHANNEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return COUNTRY_DIAL_CODE_SUFFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return EMAIL_SUFFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return NO_AUTH_MODULE_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return PHONE_EMPTY_ERROR_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SETUP_TOTP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return TOAST_AUTH_ERROR_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return UI_AUTH_CHANNEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_STATE_CHANGE_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PHONE_SUFFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AUTHENTICATOR_AUTHSTATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NO_INTERACTIONS_MODULE_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NO_STORAGE_MODULE_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return USER_NOT_SETUP_SOFTWARE_TOKEN_MFA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return USER_NOT_VERIFIED_SOFTWARE_TOKEN_MFA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return COUNTRY_DIAL_CODE_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return AUTH_SOURCE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return CODE_SUFFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return PASSWORD_SUFFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return USERNAME_SUFFIX; });
// Dictionaries
// fieldId constants
const USERNAME_SUFFIX = 'username';
const EMAIL_SUFFIX = 'email';
const CODE_SUFFIX = 'code';
const PHONE_SUFFIX = 'phone';
const PASSWORD_SUFFIX = 'password';
// Country Dial Code common constants
const COUNTRY_DIAL_CODE_SUFFIX = 'country-dial-code-select';
const COUNTRY_DIAL_CODE_DEFAULT = '+1';
// Auth Keys
const AUTH_SOURCE_KEY = 'amplify-auth-source';
const AUTHENTICATOR_AUTHSTATE = 'amplify-authenticator-authState';
// Error message Common Constants
const PHONE_EMPTY_ERROR_MESSAGE = 'Phone number can not be empty';
const NO_AUTH_MODULE_FOUND = 'No Auth module found, please ensure @aws-amplify/auth is imported';
const NO_STORAGE_MODULE_FOUND = 'No Storage module found, please ensure @aws-amplify/storage is imported';
const NO_INTERACTIONS_MODULE_FOUND = 'No Interactions module found, please ensure @aws-amplify/interactions is imported';
// TOTP Messages
const SETUP_TOTP = 'SETUP_TOTP';
// Select MFA Types Messages
const USER_NOT_SETUP_SOFTWARE_TOKEN_MFA = 'User has not set up software token mfa';
const USER_NOT_VERIFIED_SOFTWARE_TOKEN_MFA = 'User has not verified software token mfa';
// Common events
const SUCCESS = 'SUCCESS';
// Hub Events and Channels
const AUTH_CHANNEL = 'auth';
const UI_AUTH_CHANNEL = 'UI Auth';
const TOAST_AUTH_ERROR_EVENT = 'ToastAuthError';
const AUTH_STATE_CHANGE_EVENT = 'AuthStateChange';




/***/ })

}]);
//# sourceMappingURL=3.js.map