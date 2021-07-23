(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "ATNG":
/*!********************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-icon.entry.js ***!
  \********************************************************************************/
/*! exports provided: amplify_icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_icon", function() { return AmplifyIcon; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "WVmh");
/* harmony import */ var _icons_c10e1d4d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons-c10e1d4d.js */ "Yx9k");



const amplifyIconCss = ".sc-amplify-icon-h{--width:auto;--height:auto;--icon-fill-color:var(--amplify-white)}svg.sc-amplify-icon{fill:var(--icon-fill-color);width:var(--width);height:var(--height)}";

const AmplifyIcon = class {
    constructor(hostRef) {
        Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    validateName(newValue) {
        const isBlank = typeof newValue == null;
        if (isBlank) {
            throw new Error('name: required');
        }
    }
    // https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes
    render() {
        return _icons_c10e1d4d_js__WEBPACK_IMPORTED_MODULE_1__["i"][this.name]();
    }
    static get watchers() { return {
        "name": ["validateName"]
    }; }
};
AmplifyIcon.style = amplifyIconCss;




/***/ })

}]);
//# sourceMappingURL=24.js.map