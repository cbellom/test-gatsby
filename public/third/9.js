(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "GWfx":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-federated-sign-in.entry.js ***!
  \*********************************************************************************************/
/*! exports provided: amplify_federated_sign_in */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_federated_sign_in", function() { return AmplifyFederatedSignIn; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "WVmh");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "s1tr");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-d7afd96c.js */ "tZvK");






const logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-federated-sign-in');
const AmplifyFederatedSignIn = class {
    constructor(hostRef) {
        Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The current authentication state. */
        this.authState = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn;
        /** Federated credentials & configuration. */
        this.federated = {};
    }
    componentWillLoad() {
        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].configure !== 'function') {
            throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__["N"]);
        }
        const { oauth = {} } = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].configure();
        // backward compatibility
        if (oauth['domain']) {
            this.federated.oauth_config = Object.assign(Object.assign({}, this.federated.oauth_config), oauth);
        }
        else if (oauth['awsCognito']) {
            this.federated.oauth_config = Object.assign(Object.assign({}, this.federated.oauth_config), oauth['awsCognito']);
        }
        if (oauth['auth0']) {
            this.federated.auth0 = Object.assign(Object.assign({}, this.federated.auth0), oauth['auth0']);
        }
    }
    render() {
        if (!this.federated) {
            logger.debug('federated prop is empty. show nothing');
            logger.debug('federated={google_client_id: , facebook_app_id: , amazon_client_id}');
            return null;
        }
        if (!Object.values(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"]).includes(this.authState)) {
            return null;
        }
        logger.debug('federated Config is', this.federated);
        return (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { "data-test": "federated-sign-in-section" }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-section", { "data-test": "federated-sign-in-body-section" }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-federated-buttons", { authState: this.authState, "data-test": "federated-sign-in-buttons", federated: this.federated }))));
    }
};




/***/ }),

/***/ "s1tr":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/auth-types-78df304e.js ***!
  \*********************************************************************************/
/*! exports provided: A, C, M, U, a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return AuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return ChallengeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return MfaOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return UsernameAlias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthFormField; });
// TODO: Move these values to or extract them from the Cognito Provider in the Auth category for Auth V2
var AuthState;
(function (AuthState) {
    AuthState["SignUp"] = "signup";
    AuthState["SignOut"] = "signout";
    AuthState["SignIn"] = "signin";
    AuthState["Loading"] = "loading";
    AuthState["SignedOut"] = "signedout";
    AuthState["SignedIn"] = "signedin";
    AuthState["SigningUp"] = "signingup";
    AuthState["ConfirmSignUp"] = "confirmSignUp";
    AuthState["confirmingSignUpCustomFlow"] = "confirmsignupcustomflow";
    AuthState["ConfirmSignIn"] = "confirmSignIn";
    AuthState["confirmingSignInCustomFlow"] = "confirmingsignincustomflow";
    AuthState["VerifyingAttributes"] = "verifyingattributes";
    AuthState["ForgotPassword"] = "forgotpassword";
    AuthState["ResetPassword"] = "resettingpassword";
    AuthState["SettingMFA"] = "settingMFA";
    AuthState["TOTPSetup"] = "TOTPSetup";
    AuthState["CustomConfirmSignIn"] = "customConfirmSignIn";
    AuthState["VerifyContact"] = "verifyContact";
})(AuthState || (AuthState = {}));
var MfaOption;
(function (MfaOption) {
    MfaOption["TOTP"] = "TOTP";
    MfaOption["SMS"] = "SMS";
    MfaOption["NOMFA"] = "NOMFA";
})(MfaOption || (MfaOption = {}));
var ChallengeName;
(function (ChallengeName) {
    ChallengeName["SoftwareTokenMFA"] = "SOFTWARE_TOKEN_MFA";
    ChallengeName["SMSMFA"] = "SMS_MFA";
    ChallengeName["NewPasswordRequired"] = "NEW_PASSWORD_REQUIRED";
    ChallengeName["MFASetup"] = "MFA_SETUP";
    ChallengeName["CustomChallenge"] = "CUSTOM_CHALLENGE";
})(ChallengeName || (ChallengeName = {}));
var AuthFormField;
(function (AuthFormField) {
    AuthFormField["Password"] = "password";
})(AuthFormField || (AuthFormField = {}));
var UsernameAlias;
(function (UsernameAlias) {
    UsernameAlias["username"] = "username";
    UsernameAlias["email"] = "email";
    UsernameAlias["phone_number"] = "phone_number";
})(UsernameAlias || (UsernameAlias = {}));




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
//# sourceMappingURL=9.js.map