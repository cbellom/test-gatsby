(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "mwoW":
/*!************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-s3-image.entry.js ***!
  \************************************************************************************/
/*! exports provided: amplify_s3_image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_s3_image", function() { return AmplifyS3Image; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "WVmh");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-types-f257c0f2.js */ "H8iN");
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants-d7afd96c.js */ "tZvK");
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-amplify/storage */ "l1VB");
/* harmony import */ var _storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage-helpers-95bd359a.js */ "TX1d");







const amplifyS3ImageCss = ":host{height:inherit;width:inherit;--height:inherit;--width:inherit}img{height:var(--height);width:var(--width)}";

const logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('S3Image');
const AmplifyS3Image = class {
    constructor(hostRef) {
        Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = 'binary/octet-stream';
        /** The access level of the image */
        this.level = _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_2__["A"].Public;
    }
    async watchHandler() {
        await this.load();
    }
    async componentWillLoad() {
        await this.load();
    }
    async load() {
        const { imgKey, path, body, contentType, level, track, identityId } = this;
        if (!imgKey && !path) {
            logger.debug('empty imgKey and path');
            return;
        }
        const key = imgKey || path;
        logger.debug('loading ' + key + '...');
        try {
            if (body) {
                await Object(_storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_5__["p"])(imgKey, body, level, track, contentType, logger);
            }
            this.src = await Object(_storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_5__["g"])(key, level, track, identityId, logger);
        }
        catch (err) {
            logger.debug(err);
            throw new Error(err);
        }
    }
    render() {
        return (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, this.src && (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", Object.assign({ src: this.src, alt: this.alt, onLoad: this.handleOnLoad, onError: this.handleOnError }, this.imgProps)))));
    }
    static get watchers() { return {
        "body": ["watchHandler"]
    }; }
};
AmplifyS3Image.style = amplifyS3ImageCss;




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
//# sourceMappingURL=12.js.map