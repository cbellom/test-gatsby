(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "GV60":
/*!************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-s3-album.entry.js ***!
  \************************************************************************************/
/*! exports provided: amplify_s3_album */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_s3_album", function() { return AmplifyS3Album; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "WVmh");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-types-f257c0f2.js */ "H8iN");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "sPRy");
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d7afd96c.js */ "tZvK");
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-amplify/storage */ "l1VB");
/* harmony import */ var _storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage-helpers-95bd359a.js */ "TX1d");









// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

const REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

const amplifyS3AlbumCss = ":host{--overlay-bg-color:rgba(0, 0, 0, 0.15)}.album-container{-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;margin:0 auto;padding:0 2rem}.grid-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-1rem -1rem;padding-bottom:3rem}.grid-item{position:relative;-ms-flex:1 0 22rem;flex:1 0 22rem;-ms-flex-positive:1;flex-grow:1;margin:1rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}amplify-s3-image{--width:22rem;--height:20rem;border-radius:5px;-o-object-fit:cover;object-fit:cover}.img-overlay{display:none;width:100%;height:21rem;position:absolute;top:0;left:0;background-color:var(--overlay-bg-color)}.grid-item:hover .img-overlay{display:block}";

const logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('S3Album');
const AmplifyS3Album = class {
    constructor(hostRef) {
        Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = 'binary/octet-stream';
        /** The access level of the files */
        this.level = _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_2__["A"].Public;
        /** Boolean to enable or disable picker */
        this.picker = true;
        /** Picker button text */
        this.pickerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].PICKER_TEXT;
        this.albumItems = [];
        this.imgArr = {};
        this.list = async () => {
            const { path = '', level, track, identityId } = this;
            logger.debug('Album path: ' + path);
            if (!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"].list !== 'function') {
                throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_5__["e"]);
            }
            try {
                const data = await _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"].list(path, {
                    level,
                    track,
                    identityId,
                });
                this.marshal(data);
            }
            catch (error) {
                logger.warn(error);
            }
        };
        this.marshal = (list) => {
            list.forEach((item) => {
                const name = item.key.toLowerCase();
                const ext = name.split('.')[1];
                if (_storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_7__["i"].has(ext)) {
                    if (!item.contentType ||
                        (item.contentType && item.contentType === 'binary/octet-stream')) {
                        item.contentType = this.getContentType(item);
                    }
                }
            });
            const filtered = list.filter((item) => item.contentType && item.contentType.startsWith('image/'));
            let items = this.filter ? this.filter(filtered) : filtered;
            items = this.sort ? this.sort(items) : items;
            this.albumItems = items;
            logger.debug('album items', this.albumItems);
            this.constructImgArray(this.albumItems);
        };
        this.constructImgArray = (list) => {
            list.map(item => {
                this.imgArr[`${item['key']}`] = item['key'];
            });
        };
        this.handlePick = async (event) => {
            const file = event.target.files[0];
            const { path = '', level, track, fileToKey } = this;
            const key = path + Object(_storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_7__["c"])(file, fileToKey);
            try {
                await Object(_storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_7__["p"])(key, file, level, track, file['type'], logger);
            }
            catch (error) {
                logger.error(error);
                throw new Error(error);
            }
            if (Object.keys(this.imgArr).includes(key)) {
                this.albumItems = [...this.albumItems];
                this.imgArr[key] = `${key}-${v4()}`;
            }
            else {
                const filtered = [
                    ...this.albumItems,
                    ...(this.filter ? this.filter([{ key }]) : [{ key }]),
                ];
                this.albumItems = this.sort ? this.sort(filtered) : filtered;
            }
        };
    }
    getContentType(item) {
        return Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["filenameToContentType"])(item.key, 'image/*');
    }
    componentWillLoad() {
        this.list();
    }
    render() {
        return (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "album-container" }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "grid-row" }, this.albumItems.map(item => {
            return (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "grid-item", key: `key-${item.key}` }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-s3-image", { key: this.imgArr[item.key], imgKey: item.key, level: this.level, path: this.path, identityId: this.identityId, track: this.track, handleOnError: this.handleOnError, handleOnLoad: this.handleOnLoad }), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "img-overlay" })));
        }))), this.picker && (Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-picker", { pickerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.pickerText), inputHandler: e => this.handlePick(e), acceptValue: "image/*" }))));
    }
};
AmplifyS3Album.style = amplifyS3AlbumCss;




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
//# sourceMappingURL=5.js.map