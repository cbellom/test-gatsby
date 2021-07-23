(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "pHM5":
/*!******************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/helpers-80b400b1.js ***!
  \******************************************************************************/
/*! exports provided: a, b, c, d, e, g, h, i, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dispatchToastHubEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return composePhoneNumberInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkUsernameAlias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dispatchAuthStateChangeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return closestElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getRequiredAttributesMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return handlePhoneNumberChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isHintValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return onAuthUIStateChange; });
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "s1tr");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Translations-c833f663.js */ "sPRy");
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-d7afd96c.js */ "tZvK");






const logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["Logger"]('helpers');
/**
 * Finds closest element that matches the selector from the ancestor tree.
 * Trasverses through shadow DOM and slots.
 *
 * Adpated from: https://stackoverflow.com/a/56105394
 */
const closestElement = (selector, base) => {
    function _closestFrom(el) {
        if (!el || el === document || el === window)
            return null;
        if (el.matches(selector))
            return base; // return if current element matches the selector
        if (el.assignedSlot)
            el = el.assignedSlot; // traverse up slots if slotted
        const found = el.closest(selector);
        return found ? found : _closestFrom(el.getRootNode().host); // try to traverse up shadows
    }
    return _closestFrom(base);
};
const dispatchToastHubEvent = (error) => {
    _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["Hub"].dispatch(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__["U"], {
        event: _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__["T"],
        message: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(error.message),
    });
};
const dispatchAuthStateChangeEvent = (nextAuthState, data) => {
    _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["Hub"].dispatch(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__["U"], {
        event: _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__["a"],
        message: nextAuthState,
        data,
    });
};
const composePhoneNumberInput = (phoneNumber) => {
    if (!phoneNumber.phoneNumberValue) {
        throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__["P"]);
    }
    const sanitizedPhoneNumberValue = phoneNumber.phoneNumberValue.replace(/[-()\s]/g, '');
    return `${phoneNumber.countryDialCodeValue}${sanitizedPhoneNumberValue}`;
};
const checkUsernameAlias = (usernameAlias) => {
    if (!(usernameAlias in _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["U"])) {
        throw new Error(`Invalid username Alias - ${usernameAlias}. Instead use ${Object.values(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["U"])}`);
    }
};
const onAuthUIStateChange = (authStateHandler) => {
    const authUIStateHandler = async (data) => {
        const { payload } = data;
        switch (payload.event) {
            case _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__["a"]:
                if (payload.message) {
                    if (payload.message === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].SignedIn) {
                        // for AuthState.SignedIn, use an Auth Guard
                        try {
                            const user = await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["default"].currentAuthenticatedUser();
                            authStateHandler(payload.message, user);
                        }
                        catch (e) {
                            logger.error('User is not authenticated');
                        }
                    }
                    else {
                        authStateHandler(payload.message, payload.data);
                    }
                }
                break;
        }
    };
    _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["Hub"].listen(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__["U"], authUIStateHandler);
    const unsubscribe = () => {
        // Replace user's `authStateHandler` with a noop so that we don't trigger side-effects during the async `authUIStateHandler` when unsubscribed
        authStateHandler = () => { };
        _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["Hub"].remove(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__["U"], authUIStateHandler);
    };
    return unsubscribe;
};
const isHintValid = field => {
    return !(field['hint'] === null || typeof field['hint'] === 'string');
};
// Required attributes come from https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
const getRequiredAttributesMap = () => ({
    address: {
        label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].ADDRESS_LABEL),
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].ADDRESS_PLACEHOLDER),
    },
    nickname: {
        label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].NICKNAME_LABEL),
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].NICKNAME_PLACEHOLDER),
    },
    birthdate: {
        label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].BIRTHDATE_LABEL),
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].BIRTHDATE_PLACEHOLDER),
    },
    phone_number: {
        label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PHONE_LABEL),
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PHONE_PLACEHOLDER),
    },
    email: {
        lable: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].EMAIL_LABEL),
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].EMAIL_PLACEHOLDER),
    },
    picture: {
        label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PICTURE_LABEL),
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PICTURE_PLACEHOLDER),
    },
    family_name: {
        label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].FAMILY_NAME_LABEL),
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].FAMILY_NAME_PLACEHOLDER),
    },
    preferred_username: {
        label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PREFERRED_USERNAME_LABEL),
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PREFERRED_USERNAME_PLACEHOLDER),
    },
    gender: {
        label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].GENDER_LABEL),
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].GENDER_PLACEHOLDER),
    },
    profile: {
        label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PROFILE_LABEL),
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PROFILE_PLACEHOLDER),
    },
    given_name: {
        label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].GIVEN_NAME_LABEL),
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].GIVEN_NAME_PLACEHOLDER),
    },
    zoneinfo: {
        label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].ZONEINFO_LABEL),
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].ZONEINFO_PLACEHOLDER),
    },
    locale: {
        label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].LOCALE_LABEL),
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].LOCALE_PLACEHOLDER),
    },
    updated_at: {
        label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].UPDATED_AT_LABEL),
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].UPDATED_AT_PLACEHOLDER),
    },
    middle_name: {
        label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].MIDDLE_NAME_LABEL),
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].MIDDLE_NAME_PLACEHOLDER),
    },
    website: {
        label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].WEBSITE_LABEL),
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].WEBSITE_PLACEHOLDER),
    },
    name: {
        label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].NAME_LABEL),
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].NAME_PLACEHOLDER),
    },
});
function handlePhoneNumberChange(event, phoneNumber) {
    const name = event.target.name;
    const value = event.target.value;
    /** Cognito expects to have a string be passed when signing up. Since the Select input is separate
     * input from the phone number input, we need to first capture both components values and combined
     * them together.
     */
    if (name === _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__["C"]) {
        phoneNumber.countryDialCodeValue = value;
    }
    if (name === _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__["b"]) {
        phoneNumber.phoneNumberValue = value;
    }
}




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
//# sourceMappingURL=0.js.map