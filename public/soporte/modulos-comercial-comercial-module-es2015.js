(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-comercial-comercial-module"],{

/***/ "59uI":
/*!********************************************************************************************************!*\
  !*** ./src/app/modulos/comercial/vista/seleccionar-tipo-empresa/seleccionar-tipo-empresa.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: SeleccionarTipoEmpresaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionarTipoEmpresaComponent", function() { return SeleccionarTipoEmpresaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _app_shared_modelos_enums_paisAmbiente_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/modelos/enums/paisAmbiente.enum */ "ppAF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _componentes_registro_empresa_mexico_registro_empresa_mexico_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../componentes/registro-empresa-mexico/registro-empresa-mexico.component */ "oEYy");
/* harmony import */ var _componentes_registro_empresa_colombia_registro_empresa_colombia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../componentes/registro-empresa-colombia/registro-empresa-colombia.component */ "x6y1");







function SeleccionarTipoEmpresaComponent_app_registro_empresa_mexico_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-registro-empresa-mexico");
} }
function SeleccionarTipoEmpresaComponent_app_registro_empresa_colombia_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-registro-empresa-colombia");
} }
class SeleccionarTipoEmpresaComponent {
    constructor() {
        this.PaisAmbiente = _app_shared_modelos_enums_paisAmbiente_enum__WEBPACK_IMPORTED_MODULE_2__["PaisAmbiente"];
    }
    ngOnInit() {
        this.pais = _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].envCountry;
    }
}
SeleccionarTipoEmpresaComponent.ɵfac = function SeleccionarTipoEmpresaComponent_Factory(t) { return new (t || SeleccionarTipoEmpresaComponent)(); };
SeleccionarTipoEmpresaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SeleccionarTipoEmpresaComponent, selectors: [["app-seleccionar-tipo-empresa"]], decls: 3, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"]], template: function SeleccionarTipoEmpresaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SeleccionarTipoEmpresaComponent_app_registro_empresa_mexico_1_Template, 1, 0, "app-registro-empresa-mexico", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SeleccionarTipoEmpresaComponent_app_registro_empresa_colombia_2_Template, 1, 0, "app-registro-empresa-colombia", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.pais);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.PaisAmbiente.MX);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.PaisAmbiente.CO);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _componentes_registro_empresa_mexico_registro_empresa_mexico_component__WEBPACK_IMPORTED_MODULE_4__["RegistroEmpresaMexicoComponent"], _componentes_registro_empresa_colombia_registro_empresa_colombia_component__WEBPACK_IMPORTED_MODULE_5__["RegistroEmpresaColombiaComponent"]], styles: ["app-registro-empresa-mexico[_ngcontent-%COMP%]  form, app-registro-empresa-colombia[_ngcontent-%COMP%]  form {\n  margin-top: 20px;\n}\napp-registro-empresa-mexico[_ngcontent-%COMP%]  form .form-group, app-registro-empresa-colombia[_ngcontent-%COMP%]  form .form-group {\n  padding: 0;\n  height: 100px;\n  margin: 8px 0 10px 0;\n  position: relative;\n}\napp-registro-empresa-mexico[_ngcontent-%COMP%]  form .form-group label, app-registro-empresa-colombia[_ngcontent-%COMP%]  form .form-group label {\n  font-size: 14px;\n  color: #000;\n}\napp-registro-empresa-mexico[_ngcontent-%COMP%]  form .form-group input, app-registro-empresa-colombia[_ngcontent-%COMP%]  form .form-group input {\n  color: #000;\n  height: 48px !important;\n  font-weight: 300;\n  border-radius: 2px;\n  background-color: #fff;\n}\napp-registro-empresa-mexico[_ngcontent-%COMP%]  form .form-group input[type=checkbox], app-registro-empresa-mexico[_ngcontent-%COMP%]  form .form-group input[type=radio], app-registro-empresa-colombia[_ngcontent-%COMP%]  form .form-group input[type=checkbox], app-registro-empresa-colombia[_ngcontent-%COMP%]  form .form-group input[type=radio] {\n  height: auto !important;\n  margin: 5px;\n  border: none;\n  box-shadow: none;\n}\napp-registro-empresa-mexico[_ngcontent-%COMP%]  form .form-group .descript, app-registro-empresa-colombia[_ngcontent-%COMP%]  form .form-group .descript {\n  margin: 30px 0 0 0;\n  color: #fff;\n  display: inline-block;\n}\napp-registro-empresa-mexico[_ngcontent-%COMP%]  .ng-valid:not(form), app-registro-empresa-mexico[_ngcontent-%COMP%]  .ng-valid:not(form).required, app-registro-empresa-colombia[_ngcontent-%COMP%]  .ng-valid:not(form), app-registro-empresa-colombia[_ngcontent-%COMP%]  .ng-valid:not(form).required {\n  border: 1px solid lightgreen;\n}\napp-registro-empresa-mexico[_ngcontent-%COMP%]  .ng-invalid:not(form).ng-dirty.ng-touched, app-registro-empresa-colombia[_ngcontent-%COMP%]  .ng-invalid:not(form).ng-dirty.ng-touched {\n  border: 1px solid lightcoral;\n}\napp-registro-empresa-mexico[_ngcontent-%COMP%]  #botonContinuar, app-registro-empresa-colombia[_ngcontent-%COMP%]  #botonContinuar {\n  margin-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy9jb21lcmNpYWwvdmlzdGEvc2VsZWNjaW9uYXItdGlwby1lbXByZXNhL3NlbGVjY2lvbmFyLXRpcG8tZW1wcmVzYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGdCQUFBO0FBREo7QUFFSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUFOO0FBQ007RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUNSO0FBQ007RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDUjtBQUNNOzs7RUFFRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQUFNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFFUjtBQUlFOzs7RUFFRSw0QkFBQTtBQURKO0FBSUU7RUFDRSw0QkFBQTtBQUZKO0FBS0U7RUFDRSxtQkFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxvcy9jb21lcmNpYWwvdmlzdGEvc2VsZWNjaW9uYXItdGlwby1lbXByZXNhL3NlbGVjY2lvbmFyLXRpcG8tZW1wcmVzYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1yZWdpc3Ryby1lbXByZXNhLW1leGljbzo6bmctZGVlcCwgYXBwLXJlZ2lzdHJvLWVtcHJlc2EtY29sb21iaWE6Om5nLWRlZXAge1xuXG4gIGZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICBtYXJnaW46IDhweCAwIDEwcHggMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgIH1cbiAgICAgIGlucHV0IHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddLFxuICAgICAgaW5wdXRbdHlwZT0ncmFkaW8nXSB7XG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuICAgICAgLmRlc2NyaXB0IHtcbiAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgLm5nLXZhbGlkOm5vdChmb3JtKSxcbiAgLm5nLXZhbGlkOm5vdChmb3JtKS5yZXF1aXJlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbjtcbiAgfVxuXG4gIC5uZy1pbnZhbGlkOm5vdChmb3JtKS5uZy1kaXJ0eS5uZy10b3VjaGVke1xuICAgIGJvcmRlcjoxcHggc29saWQgbGlnaHRjb3JhbDtcbiAgfVxuXG4gICNib3RvbkNvbnRpbnVhcntcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeleccionarTipoEmpresaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-seleccionar-tipo-empresa',
                templateUrl: './seleccionar-tipo-empresa.component.html',
                styleUrls: ['./seleccionar-tipo-empresa.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6HRF":
/*!*********************************************************************!*\
  !*** ./src/app/modulos/comercial/validador/expresionesRegulares.ts ***!
  \*********************************************************************/
/*! exports provided: validarTextoSinNumero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validarTextoSinNumero", function() { return validarTextoSinNumero; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");

const validarTextoSinNumero = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u0178][a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u0178\.\- ']*$/),
    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2),
    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(70),
];


/***/ }),

/***/ "6d7M":
/*!******************************************************************************************!*\
  !*** ./src/app/modulos/comercial/componentes/menu-izquierdo/menu-izquierdo.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MenuIzquierdoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuIzquierdoComponent", function() { return MenuIzquierdoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_shared_modelos_enums_paisAmbiente_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/modelos/enums/paisAmbiente.enum */ "ppAF");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");








function MenuIzquierdoComponent_div_1_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Invitaciones empresa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("es-seleccionado", ctx_r2.opcionSeleccionada.lista);
} }
function MenuIzquierdoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "contact_mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Registrar empresa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MenuIzquierdoComponent_div_1_button_5_Template, 4, 2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Notificaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("es-seleccionado", ctx_r0.opcionSeleccionada.home);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pais === ctx_r0.PaisAmbiente.MX);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("es-seleccionado", ctx_r0.opcionSeleccionada.notificaciones);
} }
function MenuIzquierdoComponent_div_2_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("es-seleccionado", ctx_r3.opcionSeleccionada.lista);
} }
function MenuIzquierdoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "contact_mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuIzquierdoComponent_div_2_button_4_Template, 3, 2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("es-seleccionado", ctx_r1.opcionSeleccionada.home);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.pais === ctx_r1.PaisAmbiente.MX);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("es-seleccionado", ctx_r1.opcionSeleccionada.notificaciones);
} }
class MenuIzquierdoComponent {
    constructor(router) {
        this.router = router;
        this.opcionSeleccionada = {
            home: false,
            lista: false,
            notificaciones: false,
        };
        this.PaisAmbiente = _app_shared_modelos_enums_paisAmbiente_enum__WEBPACK_IMPORTED_MODULE_1__["PaisAmbiente"];
    }
    ngOnInit() {
        this.router.events.subscribe((val) => {
            this.obtenerSeccionSeleccionada(val.url);
        });
        this.pais = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].envCountry;
    }
    obtenerSeccionSeleccionada(url) {
        if (url) {
            if (url.includes('invitaciones-empresa')) {
                this.seleccionarOption('lista');
            }
            else if (url.includes('notificaciones')) {
                this.seleccionarOption('notificaciones');
            }
            else {
                this.seleccionarOption('home');
            }
        }
    }
    seleccionarOption(nombre) {
        this.opcionSeleccionada = {};
        this.opcionSeleccionada[nombre] = true;
    }
}
MenuIzquierdoComponent.ɵfac = function MenuIzquierdoComponent_Factory(t) { return new (t || MenuIzquierdoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MenuIzquierdoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuIzquierdoComponent, selectors: [["app-menu-izquierdo"]], inputs: { abrirMenu: "abrirMenu", isAdmin: "isAdmin" }, decls: 3, vars: 2, consts: [["class", "side-bar side-bar-open", 4, "ngIf"], ["class", "side-bar side-bar-collapsed", 4, "ngIf"], [1, "side-bar", "side-bar-open"], ["mat-button", "", "routerLink", "/comercial"], ["mat-button", "", "routerLink", "/comercial/invitaciones-empresa", 3, "es-seleccionado", 4, "ngIf"], ["mat-button", "", "routerLink", "/comercial/notificaciones"], ["mat-button", "", "routerLink", "/comercial/invitaciones-empresa"], [1, "side-bar", "side-bar-collapsed"]], template: function MenuIzquierdoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuIzquierdoComponent_div_1_Template, 10, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuIzquierdoComponent_div_2_Template, 8, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.abrirMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.abrirMenu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: [".side-bar-open[_ngcontent-%COMP%], .side-bar-collapsed[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 200px;\n  position: relative;\n}\n\n.side-bar-collapsed[_ngcontent-%COMP%] {\n  width: 70px;\n}\n\n.side-bar-collapsed[_ngcontent-%COMP%], .side-bar-open[_ngcontent-%COMP%] {\n  background: #9223E0;\n}\n\n.side-bar[_ngcontent-%COMP%] {\n  padding-top: 60px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  color: white;\n  text-align: left;\n  padding-left: 25px;\n  padding-right: 25px;\n  height: 50px;\n}\n\n.es-seleccionado[_ngcontent-%COMP%] {\n  background-color: #791abc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy9jb21lcmNpYWwvY29tcG9uZW50ZXMvbWVudS1penF1aWVyZG8vbWVudS1penF1aWVyZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvY29tZXJjaWFsL2NvbXBvbmVudGVzL21lbnUtaXpxdWllcmRvL21lbnUtaXpxdWllcmRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtYmFyLW9wZW4sIC5zaWRlLWJhci1jb2xsYXBzZWQge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNpZGUtYmFyLWNvbGxhcHNlZCB7XG4gIHdpZHRoOiA3MHB4O1xufVxuXG4uc2lkZS1iYXItY29sbGFwc2VkLCAuc2lkZS1iYXItb3BlbiB7XG4gIGJhY2tncm91bmQ6ICM5MjIzRTA7XG59XG5cbi5zaWRlLWJhciB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5lcy1zZWxlY2Npb25hZG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzkxYWJjO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuIzquierdoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-izquierdo',
                templateUrl: './menu-izquierdo.component.html',
                styleUrls: ['./menu-izquierdo.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { abrirMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isAdmin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Q+JC":
/*!*******************************************************!*\
  !*** ./src/app/modulos/comercial/comercial.module.ts ***!
  \*******************************************************/
/*! exports provided: ComercialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialModule", function() { return ComercialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _comercial_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comercial.component */ "hnF2");
/* harmony import */ var _vista_seleccionar_tipo_empresa_seleccionar_tipo_empresa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vista/seleccionar-tipo-empresa/seleccionar-tipo-empresa.component */ "59uI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _componentes_registro_empresa_mexico_registro_empresa_mexico_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/registro-empresa-mexico/registro-empresa-mexico.component */ "oEYy");
/* harmony import */ var _componentes_registro_empresa_colombia_registro_empresa_colombia_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/registro-empresa-colombia/registro-empresa-colombia.component */ "x6y1");
/* harmony import */ var _componentes_menu_izquierdo_menu_izquierdo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/menu-izquierdo/menu-izquierdo.component */ "6d7M");
/* harmony import */ var _vista_notificar_notificar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vista/notificar/notificar.component */ "w9WA");
/* harmony import */ var _componentes_subir_layout_subir_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/subir-layout/subir-layout.component */ "q+E7");
/* harmony import */ var ngx_uploader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-uploader */ "aO0x");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _core_guards_pais_ambiente_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/guards/pais-ambiente.guard */ "/9Ug");
/* harmony import */ var _shared_modelos_enums_paisAmbiente_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/modelos/enums/paisAmbiente.enum */ "ppAF");
/* harmony import */ var _shared_componentes_invitaciones_empresa_invitaciones_empresa_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/componentes/invitaciones-empresa/invitaciones-empresa.component */ "4Ox3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../material/material.module */ "B8FV");




















const routes = [
    {
        path: '',
        component: _comercial_component__WEBPACK_IMPORTED_MODULE_2__["ComercialComponent"],
        children: [
            {
                path: '',
                component: _vista_seleccionar_tipo_empresa_seleccionar_tipo_empresa_component__WEBPACK_IMPORTED_MODULE_3__["SeleccionarTipoEmpresaComponent"],
                pathMatch: 'full',
            },
            {
                path: 'invitaciones-empresa',
                component: _shared_componentes_invitaciones_empresa_invitaciones_empresa_component__WEBPACK_IMPORTED_MODULE_15__["InvitacionesEmpresaComponent"],
                canLoad: [_core_guards_pais_ambiente_guard__WEBPACK_IMPORTED_MODULE_13__["PaisAmbienteGuard"]],
                data: { paises: [_shared_modelos_enums_paisAmbiente_enum__WEBPACK_IMPORTED_MODULE_14__["PaisAmbiente"].MX] },
            },
            {
                path: 'notificaciones',
                component: _vista_notificar_notificar_component__WEBPACK_IMPORTED_MODULE_8__["NotificarComponent"],
            },
            { path: '**', redirectTo: 'login' },
        ],
    },
];
class ComercialModule {
}
ComercialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComercialModule });
ComercialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComercialModule_Factory(t) { return new (t || ComercialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ngx_uploader__WEBPACK_IMPORTED_MODULE_10__["NgxUploaderModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComercialModule, { declarations: [_comercial_component__WEBPACK_IMPORTED_MODULE_2__["ComercialComponent"],
        _vista_seleccionar_tipo_empresa_seleccionar_tipo_empresa_component__WEBPACK_IMPORTED_MODULE_3__["SeleccionarTipoEmpresaComponent"],
        _componentes_registro_empresa_mexico_registro_empresa_mexico_component__WEBPACK_IMPORTED_MODULE_5__["RegistroEmpresaMexicoComponent"],
        _componentes_registro_empresa_colombia_registro_empresa_colombia_component__WEBPACK_IMPORTED_MODULE_6__["RegistroEmpresaColombiaComponent"],
        _componentes_menu_izquierdo_menu_izquierdo_component__WEBPACK_IMPORTED_MODULE_7__["MenuIzquierdoComponent"],
        _vista_notificar_notificar_component__WEBPACK_IMPORTED_MODULE_8__["NotificarComponent"],
        _componentes_subir_layout_subir_layout_component__WEBPACK_IMPORTED_MODULE_9__["SubirLayoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], ngx_uploader__WEBPACK_IMPORTED_MODULE_10__["NgxUploaderModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComercialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _comercial_component__WEBPACK_IMPORTED_MODULE_2__["ComercialComponent"],
                    _vista_seleccionar_tipo_empresa_seleccionar_tipo_empresa_component__WEBPACK_IMPORTED_MODULE_3__["SeleccionarTipoEmpresaComponent"],
                    _componentes_registro_empresa_mexico_registro_empresa_mexico_component__WEBPACK_IMPORTED_MODULE_5__["RegistroEmpresaMexicoComponent"],
                    _componentes_registro_empresa_colombia_registro_empresa_colombia_component__WEBPACK_IMPORTED_MODULE_6__["RegistroEmpresaColombiaComponent"],
                    _componentes_menu_izquierdo_menu_izquierdo_component__WEBPACK_IMPORTED_MODULE_7__["MenuIzquierdoComponent"],
                    _vista_notificar_notificar_component__WEBPACK_IMPORTED_MODULE_8__["NotificarComponent"],
                    _componentes_subir_layout_subir_layout_component__WEBPACK_IMPORTED_MODULE_9__["SubirLayoutComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                    ngx_uploader__WEBPACK_IMPORTED_MODULE_10__["NgxUploaderModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "SYpj":
/*!******************************************************************************!*\
  !*** ./src/app/modulos/comercial/modelo/tipo-identificacion-empresa.enum.ts ***!
  \******************************************************************************/
/*! exports provided: TipoIdentificacionEmpresa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoIdentificacionEmpresa", function() { return TipoIdentificacionEmpresa; });
var TipoIdentificacionEmpresa;
(function (TipoIdentificacionEmpresa) {
    TipoIdentificacionEmpresa["REGISTRO_PATRONAL"] = "REGISTRO_PATRONAL";
    TipoIdentificacionEmpresa["RFC"] = "RFC";
    TipoIdentificacionEmpresa["NIT"] = "NIT";
    TipoIdentificacionEmpresa["CEDULA"] = "CEDULA";
})(TipoIdentificacionEmpresa || (TipoIdentificacionEmpresa = {}));


/***/ }),

/***/ "aO0x":
/*!************************************************************!*\
  !*** ./node_modules/ngx-uploader/fesm2015/ngx-uploader.js ***!
  \************************************************************/
/*! exports provided: NgFileDropDirective, NgFileSelectDirective, NgUploaderService, NgxUploaderModule, UploadStatus, humanizeBytes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgFileDropDirective", function() { return NgFileDropDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgFileSelectDirective", function() { return NgFileSelectDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgUploaderService", function() { return NgUploaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUploaderModule", function() { return NgxUploaderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadStatus", function() { return UploadStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humanizeBytes", function() { return humanizeBytes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





var UploadStatus;
(function (UploadStatus) {
    UploadStatus[UploadStatus["Queue"] = 0] = "Queue";
    UploadStatus[UploadStatus["Uploading"] = 1] = "Uploading";
    UploadStatus[UploadStatus["Done"] = 2] = "Done";
    UploadStatus[UploadStatus["Cancelled"] = 3] = "Cancelled";
})(UploadStatus || (UploadStatus = {}));

function humanizeBytes(bytes) {
    if (bytes === 0) {
        return '0 Byte';
    }
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
class NgUploaderService {
    constructor(concurrency = Number.POSITIVE_INFINITY, contentTypes = ['*'], maxUploads = Number.POSITIVE_INFINITY, maxFileSize = Number.POSITIVE_INFINITY) {
        this.queue = [];
        this.serviceEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.uploadScheduler = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subs = [];
        this.contentTypes = contentTypes;
        this.maxUploads = maxUploads;
        this.maxFileSize = maxFileSize;
        this.uploadScheduler
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(upload => this.startUpload(upload), concurrency))
            .subscribe(uploadOutput => this.serviceEvents.emit(uploadOutput));
    }
    handleFiles(incomingFiles) {
        const allowedIncomingFiles = [].reduce.call(incomingFiles, (acc, checkFile, i) => {
            const futureQueueLength = acc.length + this.queue.length + 1;
            if (this.isContentTypeAllowed(checkFile.type) &&
                futureQueueLength <= this.maxUploads &&
                this.isFileSizeAllowed(checkFile.size)) {
                acc = acc.concat(checkFile);
            }
            else {
                const rejectedFile = this.makeUploadFile(checkFile, i);
                this.serviceEvents.emit({ type: 'rejected', file: rejectedFile });
            }
            return acc;
        }, []);
        this.queue.push(...[].map.call(allowedIncomingFiles, (file, i) => {
            const uploadFile = this.makeUploadFile(file, i);
            this.serviceEvents.emit({ type: 'addedToQueue', file: uploadFile });
            return uploadFile;
        }));
        this.serviceEvents.emit({ type: 'allAddedToQueue' });
    }
    initInputEvents(input) {
        return input.subscribe((event) => {
            switch (event.type) {
                case 'uploadFile':
                    const uploadFileIndex = this.queue.findIndex(file => file === event.file);
                    if (uploadFileIndex !== -1 && event.file) {
                        this.uploadScheduler.next({ file: this.queue[uploadFileIndex], event: event });
                    }
                    break;
                case 'uploadAll':
                    const files = this.queue.filter(file => file.progress.status === UploadStatus.Queue);
                    files.forEach(file => this.uploadScheduler.next({ file: file, event: event }));
                    break;
                case 'cancel':
                    const id = event.id || null;
                    if (!id) {
                        return;
                    }
                    const subs = this.subs.filter(sub => sub.id === id);
                    subs.forEach(sub => {
                        if (sub.sub) {
                            sub.sub.unsubscribe();
                            const fileIndex = this.queue.findIndex(file => file.id === id);
                            if (fileIndex !== -1) {
                                this.queue[fileIndex].progress.status = UploadStatus.Cancelled;
                                this.serviceEvents.emit({ type: 'cancelled', file: this.queue[fileIndex] });
                            }
                        }
                    });
                    break;
                case 'cancelAll':
                    this.subs.forEach(sub => {
                        if (sub.sub) {
                            sub.sub.unsubscribe();
                        }
                        const file = this.queue.find(uploadFile => uploadFile.id === sub.id);
                        if (file) {
                            file.progress.status = UploadStatus.Cancelled;
                            this.serviceEvents.emit({ type: 'cancelled', file: file });
                        }
                    });
                    break;
                case 'remove':
                    if (!event.id) {
                        return;
                    }
                    const i = this.queue.findIndex(file => file.id === event.id);
                    if (i !== -1) {
                        const file = this.queue[i];
                        this.queue.splice(i, 1);
                        this.serviceEvents.emit({ type: 'removed', file: file });
                    }
                    break;
                case 'removeAll':
                    if (this.queue.length) {
                        this.queue = [];
                        this.serviceEvents.emit({ type: 'removedAll' });
                    }
                    break;
            }
        });
    }
    startUpload(upload) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            const sub = this.uploadFile(upload.file, upload.event)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
                if (!observer.closed) {
                    observer.complete();
                }
            }))
                .subscribe(output => {
                observer.next(output);
            }, err => {
                observer.error(err);
                observer.complete();
            }, () => {
                observer.complete();
            });
            this.subs.push({ id: upload.file.id, sub: sub });
        });
    }
    uploadFile(file, event) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            const url = event.url || '';
            const method = event.method || 'POST';
            const data = event.data || {};
            const headers = event.headers || {};
            const xhr = new XMLHttpRequest();
            const time = new Date().getTime();
            let progressStartTime = (file.progress.data && file.progress.data.startTime) || time;
            let speed = 0;
            let eta = null;
            xhr.upload.addEventListener('progress', (e) => {
                if (e.lengthComputable) {
                    const percentage = Math.round((e.loaded * 100) / e.total);
                    const diff = new Date().getTime() - time;
                    speed = Math.round((e.loaded / diff) * 1000);
                    progressStartTime = (file.progress.data && file.progress.data.startTime) || new Date().getTime();
                    eta = Math.ceil((e.total - e.loaded) / speed);
                    file.progress = {
                        status: UploadStatus.Uploading,
                        data: {
                            percentage: percentage,
                            speed: speed,
                            speedHuman: `${humanizeBytes(speed)}/s`,
                            startTime: progressStartTime,
                            endTime: null,
                            eta: eta,
                            etaHuman: this.secondsToHuman(eta)
                        }
                    };
                    observer.next({ type: 'uploading', file: file });
                }
            }, false);
            xhr.upload.addEventListener('error', (e) => {
                observer.error(e);
                observer.complete();
            });
            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    const speedAverage = Math.round((file.size / (new Date().getTime() - progressStartTime)) * 1000);
                    file.progress = {
                        status: UploadStatus.Done,
                        data: {
                            percentage: 100,
                            speed: speedAverage,
                            speedHuman: `${humanizeBytes(speedAverage)}/s`,
                            startTime: progressStartTime,
                            endTime: new Date().getTime(),
                            eta: eta,
                            etaHuman: this.secondsToHuman(eta || 0)
                        }
                    };
                    file.responseStatus = xhr.status;
                    try {
                        file.response = JSON.parse(xhr.response);
                    }
                    catch (e) {
                        file.response = xhr.response;
                    }
                    file.responseHeaders = this.parseResponseHeaders(xhr.getAllResponseHeaders());
                    observer.next({ type: 'done', file: file });
                    observer.complete();
                }
            };
            xhr.open(method, url, true);
            xhr.withCredentials = event.withCredentials ? true : false;
            try {
                const uploadFile = file.nativeFile;
                const uploadIndex = this.queue.findIndex(outFile => outFile.nativeFile === uploadFile);
                if (this.queue[uploadIndex].progress.status === UploadStatus.Cancelled) {
                    observer.complete();
                }
                Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]));
                let bodyToSend;
                if (event.includeWebKitFormBoundary !== false) {
                    Object.keys(data).forEach(key => file.form.append(key, data[key]));
                    file.form.append(event.fieldName || 'file', uploadFile, uploadFile.name);
                    bodyToSend = file.form;
                }
                else {
                    bodyToSend = uploadFile;
                }
                this.serviceEvents.emit({ type: 'start', file: file });
                xhr.send(bodyToSend);
            }
            catch (e) {
                observer.complete();
            }
            return () => {
                xhr.abort();
            };
        });
    }
    secondsToHuman(sec) {
        return new Date(sec * 1000).toISOString().substr(11, 8);
    }
    generateId() {
        return Math.random().toString(36).substring(7);
    }
    setContentTypes(contentTypes) {
        if (typeof contentTypes !== 'undefined' && contentTypes instanceof Array) {
            if (contentTypes.find((type) => type === '*') !== undefined) {
                this.contentTypes = ['*'];
            }
            else {
                this.contentTypes = contentTypes;
            }
            return;
        }
        this.contentTypes = ['*'];
    }
    allContentTypesAllowed() {
        return this.contentTypes.find((type) => type === '*') !== undefined;
    }
    isContentTypeAllowed(mimetype) {
        if (this.allContentTypesAllowed()) {
            return true;
        }
        return this.contentTypes.find((type) => type === mimetype) !== undefined;
    }
    isFileSizeAllowed(fileSize) {
        if (!this.maxFileSize) {
            return true;
        }
        return fileSize <= this.maxFileSize;
    }
    makeUploadFile(file, index) {
        return {
            fileIndex: index,
            id: this.generateId(),
            name: file.name,
            size: file.size,
            type: file.type,
            form: new FormData(),
            progress: {
                status: UploadStatus.Queue,
                data: {
                    percentage: 0,
                    speed: 0,
                    speedHuman: `${humanizeBytes(0)}/s`,
                    startTime: null,
                    endTime: null,
                    eta: null,
                    etaHuman: null
                }
            },
            lastModifiedDate: new Date(file.lastModified),
            sub: undefined,
            nativeFile: file
        };
    }
    parseResponseHeaders(httpHeaders) {
        if (!httpHeaders) {
            return;
        }
        return httpHeaders
            .split('\n')
            .map((x) => x.split(/: */, 2))
            .filter((x) => x[0])
            .reduce((acc, x) => {
            acc[x[0]] = x[1];
            return acc;
        }, {});
    }
}

class NgFileDropDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.stopEvent = (e) => {
            e.stopPropagation();
            e.preventDefault();
        };
        this.uploadOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this._sub = [];
        const concurrency = this.options && this.options.concurrency || Number.POSITIVE_INFINITY;
        const allowedContentTypes = this.options && this.options.allowedContentTypes || ['*'];
        const maxUploads = this.options && this.options.maxUploads || Number.POSITIVE_INFINITY;
        const maxFileSize = this.options && this.options.maxFileSize || Number.POSITIVE_INFINITY;
        this.upload = new NgUploaderService(concurrency, allowedContentTypes, maxUploads, maxFileSize);
        this.el = this.elementRef.nativeElement;
        this._sub.push(this.upload.serviceEvents.subscribe((event) => {
            this.uploadOutput.emit(event);
        }));
        if (this.uploadInput instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) {
            this._sub.push(this.upload.initInputEvents(this.uploadInput));
        }
        this.el.addEventListener('drop', this.stopEvent, false);
        this.el.addEventListener('dragenter', this.stopEvent, false);
        this.el.addEventListener('dragover', this.stopEvent, false);
    }
    ngOnDestroy() {
        this._sub.forEach(sub => sub.unsubscribe());
    }
    onDrop(e) {
        e.stopPropagation();
        e.preventDefault();
        const event = { type: 'drop' };
        this.uploadOutput.emit(event);
        this.upload.handleFiles(e.dataTransfer.files);
    }
    onDragOver(e) {
        if (!e) {
            return;
        }
        const event = { type: 'dragOver' };
        this.uploadOutput.emit(event);
    }
    onDragLeave(e) {
        if (!e) {
            return;
        }
        const event = { type: 'dragOut' };
        this.uploadOutput.emit(event);
    }
}
NgFileDropDirective.ɵfac = function NgFileDropDirective_Factory(t) { return new (t || NgFileDropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NgFileDropDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgFileDropDirective, selectors: [["", "ngFileDrop", ""]], hostBindings: function NgFileDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function NgFileDropDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); })("dragover", function NgFileDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function NgFileDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); });
    } }, inputs: { options: "options", uploadInput: "uploadInput" }, outputs: { uploadOutput: "uploadOutput" } });
NgFileDropDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
NgFileDropDirective.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    uploadInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    uploadOutput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }],
    onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgFileDropDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ngFileDrop]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { uploadOutput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
        }], onDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragover', ['$event']]
        }], onDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragleave', ['$event']]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], uploadInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class NgFileSelectDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.fileListener = () => {
            if (this.el.files) {
                this.upload.handleFiles(this.el.files);
            }
        };
        this.uploadOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this._sub = [];
        const concurrency = this.options && this.options.concurrency || Number.POSITIVE_INFINITY;
        const allowedContentTypes = this.options && this.options.allowedContentTypes || ['*'];
        const maxUploads = this.options && this.options.maxUploads || Number.POSITIVE_INFINITY;
        const maxFileSize = this.options && this.options.maxFileSize || Number.POSITIVE_INFINITY;
        this.upload = new NgUploaderService(concurrency, allowedContentTypes, maxUploads, maxFileSize);
        this.el = this.elementRef.nativeElement;
        this.el.addEventListener('change', this.fileListener, false);
        this._sub.push(this.upload.serviceEvents.subscribe((event) => {
            this.uploadOutput.emit(event);
        }));
        if (this.uploadInput instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) {
            this._sub.push(this.upload.initInputEvents(this.uploadInput));
        }
    }
    ngOnDestroy() {
        if (this.el) {
            this.el.removeEventListener('change', this.fileListener, false);
            this._sub.forEach(sub => sub.unsubscribe());
        }
    }
}
NgFileSelectDirective.ɵfac = function NgFileSelectDirective_Factory(t) { return new (t || NgFileSelectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NgFileSelectDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgFileSelectDirective, selectors: [["", "ngFileSelect", ""]], inputs: { options: "options", uploadInput: "uploadInput" }, outputs: { uploadOutput: "uploadOutput" } });
NgFileSelectDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
NgFileSelectDirective.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    uploadInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    uploadOutput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgFileSelectDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ngFileSelect]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { uploadOutput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], uploadInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class NgxUploaderModule {
}
NgxUploaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxUploaderModule });
NgxUploaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxUploaderModule_Factory(t) { return new (t || NgxUploaderModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxUploaderModule, { declarations: [NgFileDropDirective, NgFileSelectDirective], exports: [NgFileDropDirective, NgFileSelectDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxUploaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [NgFileDropDirective, NgFileSelectDirective],
                exports: [NgFileDropDirective, NgFileSelectDirective]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-uploader
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-uploader.js.map

/***/ }),

/***/ "hnF2":
/*!**********************************************************!*\
  !*** ./src/app/modulos/comercial/comercial.component.ts ***!
  \**********************************************************/
/*! exports provided: ComercialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialComponent", function() { return ComercialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_shared_modelos_enums_paisAmbiente_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/modelos/enums/paisAmbiente.enum */ "ppAF");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "tqRt");
/* harmony import */ var _app_shared_servicios_cargando_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/servicios/cargando.service */ "8mHT");
/* harmony import */ var _app_shared_servicios_cookies_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/servicios/cookies-utils.service */ "Shws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _shared_componentes_btn_cerrar_session_btn_cerrar_session_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/componentes/btn-cerrar-session/btn-cerrar-session.component */ "vBoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _componentes_menu_izquierdo_menu_izquierdo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/menu-izquierdo/menu-izquierdo.component */ "6d7M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");


















function ComercialComponent_mat_progress_bar_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 14);
} }
function ComercialComponent_mat_icon_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComercialComponent_mat_icon_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ComercialComponent {
    constructor(store, cargandoService, cookiesService) {
        this.store = store;
        this.cargandoService = cargandoService;
        this.cookiesService = cookiesService;
        this.PaisAmbiente = _app_shared_modelos_enums_paisAmbiente_enum__WEBPACK_IMPORTED_MODULE_1__["PaisAmbiente"];
    }
    ngOnInit() {
        this.username$ = this.store.select('usuario', 'username');
        this.cargando$ = this.cargandoService.cargar$.asObservable();
        this.pais = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].envCountry;
    }
    subscribeSideNavChange() {
        this.sideNav.openedChange.asObservable().subscribe((opened) => {
            if (!this.obtenerEstadoMenu() && this.sideNav.opened) {
                this.sideNav.close();
            }
        });
    }
    obtenerEstadoMenu() {
        return this.cookiesService.obtenerInformacionCookie('mostrarMenuIzquierdo');
    }
    actualizarEstadoMenu(mostarMenu) {
        this.cookiesService.guardarInformacionCookie('mostrarMenuIzquierdo', mostarMenu);
    }
}
ComercialComponent.ɵfac = function ComercialComponent_Factory(t) { return new (t || ComercialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_servicios_cargando_service__WEBPACK_IMPORTED_MODULE_5__["CargandoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_servicios_cookies_utils_service__WEBPACK_IMPORTED_MODULE_6__["CookiesUtilsService"])); };
ComercialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComercialComponent, selectors: [["app-comercial"]], viewQuery: function ComercialComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sideNav = _t.first);
    } }, decls: 29, vars: 14, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7237425027568132936$$APP_MODULOS_COMERCIAL_COMERCIAL_COMPONENT_TS_1 = goog.getMsg("Comercial");
        i18n_0 = MSG_EXTERNAL_7237425027568132936$$APP_MODULOS_COMERCIAL_COMERCIAL_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟2cd1e5c04232a6f24f64770f41cc3646c59de42b␟7237425027568132936:Comercial`;
    } return [["color", "primary"], ["src", "../assets/images/brand.png", "alt", ""], [1, "example-spacer"], ["mat-flat-button", "", "color", "primary", 3, "matMenuTriggerFor"], ["menu", "matMenu"], [1, "menu-content"], [1, "user-name"], i18n_0, ["mode", "indeterminate", "color", "secondary", 4, "ngIf"], ["mode", "side", "opened", "true"], ["sidenav", ""], ["mat-button", "", 1, "button-toogle-menu", 3, "click"], [4, "ngIf"], [3, "abrirMenu"], ["mode", "indeterminate", "color", "secondary"]]; }, template: function ComercialComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-menu", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](15, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "btn-cerrar-session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ComercialComponent_mat_progress_bar_18_Template, 1, 0, "mat-progress-bar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-sidenav", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComercialComponent_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); _r2.toggle(); return ctx.actualizarEstadoMenu(_r2.opened); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ComercialComponent_mat_icon_24_Template, 2, 0, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ComercialComponent_mat_icon_25_Template, 2, 0, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-menu-izquierdo", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, ctx.username$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 12, ctx.cargando$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("menu-open", _r2.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r2.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("abrirMenu", _r2.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("full-width-with-collapsed-menu", !_r2.opened);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"], _shared_componentes_btn_cerrar_session_btn_cerrar_session_component__WEBPACK_IMPORTED_MODULE_11__["BtnCerrarSessionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _componentes_menu_izquierdo_menu_izquierdo_component__WEBPACK_IMPORTED_MODULE_13__["MenuIzquierdoComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterOutlet"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 70px;\n  height: auto;\n}\n\n.background-grey[_ngcontent-%COMP%] {\n  min-height: calc(100% - 64px);\n  background: #f5f5f5;\n  width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 30px;\n  max-width: 1280px;\n  margin: auto;\n}\n\n.menu-content[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  font-size: x-large;\n}\n\nbtn-cerrar-session[_ngcontent-%COMP%]  button {\n  min-width: 250px !important;\n}\n\n.elementos-navegacion[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  border-bottom: 1px solid #fff;\n}\n\n.elementos-navegacion[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n}\n\n.full-width-with-collapsed-menu[_ngcontent-%COMP%] {\n  margin-left: 60px !important;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: calc(100% - 64px);\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  padding: 30px;\n  overflow-x: hidden;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background: #9223E0 !important;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #9223E0 !important;\n}\n\n.mat-sidenav[_ngcontent-%COMP%] {\n  background: #9223E0;\n  overflow-y: hidden;\n  transform: translate3d(0, 0, 0);\n  visibility: visible !important;\n  position: fixed;\n  top: 54px;\n}\n\n.mat-sidenav[_ngcontent-%COMP%]     .mat-drawer-inner-container {\n  height: auto;\n}\n\n.button-toogle-menu[_ngcontent-%COMP%] {\n  color: white;\n  position: absolute;\n  right: 0px;\n  top: 10px;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy9jb21lcmNpYWwvY29tZXJjaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFHRTtFQUNFLDJCQUFBO0FBQUo7O0FBS0U7RUFDRSxXQUFBO0VBQ0EsNkJBQUE7QUFGSjs7QUFJSTtFQUNFLGtCQUFBO0FBRk47O0FBT0E7RUFDRSw0QkFBQTtBQUpGOztBQU9BO0VBQ0UseUJBQUE7QUFKRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUhGOztBQUtBO0VBQ0UsOEJBQUE7QUFGRjs7QUFHRTtFQUNFLDhCQUFBO0FBREo7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBREY7O0FBR0U7RUFDRSxZQUFBO0FBREo7O0FBS0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvY29tZXJjaWFsL2NvbWVyY2lhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5pbWcge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYmFja2dyb3VuZC1ncmV5IHtcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMzBweDtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLm1lbnUtY29udGVudCB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi51c2VyLW5hbWUge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbmJ0bi1jZXJyYXItc2Vzc2lvbjo6bmctZGVlcCB7XG4gIGJ1dHRvbiB7XG4gICAgbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5lbGVtZW50b3MtbmF2ZWdhY2lvbiB7XG4gIGEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxuICB9XG59XG5cbi5mdWxsLXdpZHRoLXdpdGgtY29sbGFwc2VkLW1lbnUge1xuICBtYXJnaW4tbGVmdDogNjBweCAhaW1wb3J0YW50O1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xufVxubWF0LXNpZGVuYXYtY29udGVudCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogIzkyMjNFMCAhaW1wb3J0YW50O1xuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICM5MjIzRTAgIWltcG9ydGFudDtcbiAgfVxufVxuLm1hdC1zaWRlbmF2IHtcbiAgYmFja2dyb3VuZDogIzkyMjNFMDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1NHB4O1xuXG4gIDo6bmctZGVlcCAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuXG4uYnV0dG9uLXRvb2dsZS1tZW51e1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAxMHB4O1xuICB6LWluZGV4OiAxMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComercialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comercial',
                templateUrl: './comercial.component.html',
                styleUrls: ['./comercial.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _app_shared_servicios_cargando_service__WEBPACK_IMPORTED_MODULE_5__["CargandoService"] }, { type: _app_shared_servicios_cookies_utils_service__WEBPACK_IMPORTED_MODULE_6__["CookiesUtilsService"] }]; }, { sideNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], { static: true }]
        }] }); })();


/***/ }),

/***/ "mP+Q":
/*!********************************************************************!*\
  !*** ./src/app/modulos/comercial/modelo/tipo-notificacion.enum.ts ***!
  \********************************************************************/
/*! exports provided: TipoNotificacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoNotificacion", function() { return TipoNotificacion; });
var TipoNotificacion;
(function (TipoNotificacion) {
    TipoNotificacion["PUSH"] = "PUSH";
    TipoNotificacion["SMS"] = "SMS";
    TipoNotificacion["CORREO"] = "E_MAIL";
})(TipoNotificacion || (TipoNotificacion = {}));


/***/ }),

/***/ "oEYy":
/*!************************************************************************************************************!*\
  !*** ./src/app/modulos/comercial/componentes/registro-empresa-mexico/registro-empresa-mexico.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: RegistroEmpresaMexicoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroEmpresaMexicoComponent", function() { return RegistroEmpresaMexicoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modulos/dashboard/modelo/enums/CustomModalTypes.enum */ "bti7");
/* harmony import */ var _app_modulos_comercial_validador_registro_empresa_validador__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modulos/comercial/validador/registro-empresa.validador */ "ty5s");
/* harmony import */ var _app_modulos_comercial_modelo_tipo_identificacion_empresa_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modulos/comercial/modelo/tipo-identificacion-empresa.enum */ "SYpj");
/* harmony import */ var _app_modulos_comercial_validador_expresionesRegulares__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modulos/comercial/validador/expresionesRegulares */ "6HRF");
/* harmony import */ var _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/servicios/api.service */ "k5QC");
/* harmony import */ var _app_shared_servicios_custom_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/servicios/custom-modal.service */ "XD+r");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "tqRt");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _shared_componentes_mostrar_error_formularios_mostrar_error_formularios_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/componentes/mostrar-error-formularios/mostrar-error-formularios.component */ "MQsH");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");


















function RegistroEmpresaMexicoComponent_ng_container_35_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El formato del Registro patronal no es valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroEmpresaMexicoComponent_ng_container_35_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El formato del RFC no es valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroEmpresaMexicoComponent_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistroEmpresaMexicoComponent_ng_container_35_p_1_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistroEmpresaMexicoComponent_ng_container_35_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.identificacion.dirty && ctx_r0.formularioEmpresa.errors["invalidRegistroPatronal"] && !ctx_r0.formularioEmpresa.errors["invalidRegistroPatronal"].valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.identificacion.dirty && ctx_r0.formularioEmpresa.errors["invalidRFC"] && !ctx_r0.formularioEmpresa.errors["invalidRFC"].valid);
} }
class RegistroEmpresaMexicoComponent {
    constructor(fb, apiService, customModal, store) {
        this.fb = fb;
        this.apiService = apiService;
        this.customModal = customModal;
        this.store = store;
        this.cargando = false;
        this.TipoIdentificacionEmpresa = _app_modulos_comercial_modelo_tipo_identificacion_empresa_enum__WEBPACK_IMPORTED_MODULE_5__["TipoIdentificacionEmpresa"];
    }
    ngOnInit() {
        this.formularioEmpresa = this.crearFormulario(this.fb);
    }
    crearFormulario(fb) {
        return fb.group({
            identificacion: fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            tipoIdEmpresa: fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            nombreAdministrador: fb.control('', [
                ..._app_modulos_comercial_validador_expresionesRegulares__WEBPACK_IMPORTED_MODULE_6__["validarTextoSinNumero"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(301),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
            ]),
            totalEmpleados: fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2147483647),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            nombre: fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(301),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u0178][a-zA-Z0-9\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u0178 ().&@,#-]{0,301}$'),
            ]),
            correoAdministrador: fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(301),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                this.validarEmailCampo,
            ]),
        }, {
            validator: Object(_app_modulos_comercial_validador_registro_empresa_validador__WEBPACK_IMPORTED_MODULE_4__["identificacionMexicoValidador"])('tipoIdEmpresa', 'identificacion'),
            updateOn: 'blur',
        });
    }
    enviarFormulario() {
        if (this.formularioEmpresa.valid) {
            this.store
                .select('usuario', 'sub')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                .subscribe((value) => {
                this.userSub = value;
                this.registrarEmpresa();
            });
        }
    }
    registrarEmpresa() {
        this.cargando = true;
        const result = Object.assign(Object.assign({}, this.formularioEmpresa.value), { codigoPais: 'MX', idUsuario: this.userSub });
        this.apiService
            .post('empresa/sin_contrato/registrar', result)
            .then(() => {
            this.customModal.abrirModal(_app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_3__["CustomModalType"].SUCCESS, {
                mensaje: 'Los cambios se han realizado con éxito.',
            });
            this.formularioEmpresa.reset();
            this.cargando = false;
        })
            .catch((e) => {
            this.cargando = false;
            switch (e.data.codigo) {
                case 'empresa.identificacion.duplicada':
                    this.customModal.abrirModal(_app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_3__["CustomModalType"].ERROR, {
                        mensaje: 'Esta identificacion no se encuentra disponible.',
                    });
                    break;
                case 'empresa.identificacion.salesforce.no-existe':
                    this.customModal.abrirModal(_app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_3__["CustomModalType"].ERROR, {
                        mensaje: 'La empresa no se encuentra registrada en salesforce',
                    });
                    break;
                default:
                    this.customModal.abrirModal(_app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_3__["CustomModalType"].ERROR, {
                        mensaje: 'Sucedio un error inesperado en la aplicación.',
                    });
            }
        });
    }
    validarEnBlurYHacerTrim(control) {
        const valor = control.value;
        control.setValue(valor.trim());
        control.markAsDirty();
    }
    get identificacion() {
        return this.formularioEmpresa.get('identificacion');
    }
    get tipoIdEmpresa() {
        return this.formularioEmpresa.get('tipoIdEmpresa');
    }
    get nombreAdministrador() {
        return this.formularioEmpresa.get('nombreAdministrador');
    }
    get totalEmpleados() {
        return this.formularioEmpresa.get('totalEmpleados');
    }
    get nombre() {
        return this.formularioEmpresa.get('nombre');
    }
    get correoAdministrador() {
        return this.formularioEmpresa.get('correoAdministrador');
    }
    validarEnBlur(control) {
        control.markAsDirty();
    }
    validarEmailCampo(control) {
        const regExpr = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const emailValue = control.value
            ? regExpr.test(String(control.value).toLowerCase())
            : true;
        if (!emailValue) {
            return { pattern: true };
        }
        return null;
    }
}
RegistroEmpresaMexicoComponent.ɵfac = function RegistroEmpresaMexicoComponent_Factory(t) { return new (t || RegistroEmpresaMexicoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_servicios_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_servicios_custom_modal_service__WEBPACK_IMPORTED_MODULE_8__["CustomModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"])); };
RegistroEmpresaMexicoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistroEmpresaMexicoComponent, selectors: [["app-registro-empresa-mexico"]], decls: 57, vars: 19, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7059486325564059345$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_MEXICO_REGISTRO_EMPRESA_MEXICO_COMPONENT_TS_1 = goog.getMsg("Tipo de idetificaci\u00F3n");
        i18n_0 = MSG_EXTERNAL_7059486325564059345$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_MEXICO_REGISTRO_EMPRESA_MEXICO_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟2b63fbedbafe4703fd9dff0e176128548d7d9648␟7059486325564059345:Tipo de idetificación`;
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_723288048376964666$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_MEXICO_REGISTRO_EMPRESA_MEXICO_COMPONENT_TS_3 = goog.getMsg("N\u00FAmero de identificaci\u00F3n");
        i18n_2 = MSG_EXTERNAL_723288048376964666$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_MEXICO_REGISTRO_EMPRESA_MEXICO_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟046bc4762f842d50ab38dc730e3ebeafa1a12eab␟723288048376964666:Número de identificación`;
    } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3920229854226705678$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_MEXICO_REGISTRO_EMPRESA_MEXICO_COMPONENT_TS_5 = goog.getMsg("Nombre del administrador");
        i18n_4 = MSG_EXTERNAL_3920229854226705678$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_MEXICO_REGISTRO_EMPRESA_MEXICO_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟e0d3c794d8e6992ae2a0815432f776a46fca8381␟3920229854226705678:Nombre del administrador`;
    } var i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6664669237619441017$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_MEXICO_REGISTRO_EMPRESA_MEXICO_COMPONENT_TS_7 = goog.getMsg("Correo del representante de la empresa");
        i18n_6 = MSG_EXTERNAL_6664669237619441017$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_MEXICO_REGISTRO_EMPRESA_MEXICO_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟058f94ec8a6160db16ffd5709257418b74d9fdd2␟6664669237619441017:Correo del representante de la empresa`;
    } return [[1, "radio-group__tipo-empresa"], ["value", "1", 3, "disabled"], ["value", "2", 3, "checked"], ["value", "3", 3, "disabled"], ["autocomplete", "off", "id", "formularioCuenta", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "nombre", 1, "control-label"], ["formControlName", "nombre", "id", "nombre", "type", "text", "maxlength", "301", "placeholder", "Escribe el nombre de la empresa", 1, "form-control", 3, "blur"], ["id", "erroresNombre", 3, "control"], ["for", "tipoIdEmpresa", 1, "control-label"], i18n_0, ["formControlName", "tipoIdEmpresa", "id", "tipoIdEmpresa", "placeholder", "Selecciona el tipo de identificaci\u00F3n de la empresa", 3, "blur"], [3, "value"], ["id", "erroresTipoIdEmpresa", 3, "control"], ["for", "identificacion", 1, "control-label"], i18n_2, ["formControlName", "identificacion", "id", "identificacion", "type", "text", "maxlength", "17", "placeholder", "Escribe el n\u00FAmero de identificaci\u00F3n de la empresa", 1, "form-control", 3, "blur"], ["id", "erroresIdentificacion", 3, "control"], [4, "ngIf"], ["for", "nombreAdministrador", 1, "control-label"], i18n_4, ["formControlName", "nombreAdministrador", "id", "nombreAdministrador", "type", "text", "maxlength", "301", "placeholder", "Escribe el nombre del administrador de la empresa", 1, "form-control", 3, "blur"], ["id", "erroresNombreAdministrador", 3, "control"], ["for", "totalEmpleados", 1, "control-label"], ["formControlName", "totalEmpleados", "id", "totalEmpleados", "type", "number", "maxlength", "10", "placeholder", "Escribe el total de empleados", 1, "form-control", 3, "blur"], ["id", "erroresTotal", 3, "control"], ["for", "correoAdministrador", 1, "control-label"], i18n_6, ["formControlName", "correoAdministrador", "id", "correoAdministrador", "type", "text", "maxlength", "301", "placeholder", "Escribe el correo del representante de la empresa", 1, "form-control", 3, "blur"], ["id", "erroresCorreoAdministrador", 3, "control"], [1, "col-md-12", "col-xs-12", "omega"], ["color", "primary", "mat-button", "", "type", "submit", 1, "mat-button", "btns-primary", "align-r", 3, "disabled"], ["class", "error", 4, "ngIf"], [1, "error"]]; }, template: function RegistroEmpresaMexicoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Selecciona el tipo de cuenta que tienes y escribe los ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " siguientes datos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-radio-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "La empresa no subir\u00E1 lista de colaboradores pero si subir\u00E1 el documento de descuentos de n\u00F3mina.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "La empresa no subir\u00E1 lista de colaboradores ni documento de descuentos de n\u00F3mina.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-radio-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "La empresa subir\u00E1 los documentos de lista de colaboradores y descuentos de n\u00F3mina.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistroEmpresaMexicoComponent_Template_form_ngSubmit_11_listener() { return ctx.enviarFormulario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nombre de la empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function RegistroEmpresaMexicoComponent_Template_input_blur_17_listener() { return ctx.validarEnBlur(ctx.nombre); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-mostrar-error-formularios", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](22, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function RegistroEmpresaMexicoComponent_Template_mat_select_blur_23_listener() { return ctx.validarEnBlur(ctx.tipoIdEmpresa); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "RFC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Registro patronal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-mostrar-error-formularios", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](32, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function RegistroEmpresaMexicoComponent_Template_input_blur_33_listener() { return ctx.validarEnBlurYHacerTrim(ctx.identificacion); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-mostrar-error-formularios", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RegistroEmpresaMexicoComponent_ng_container_35_Template, 3, 2, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](39, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function RegistroEmpresaMexicoComponent_Template_input_blur_40_listener() { return ctx.validarEnBlurYHacerTrim(ctx.nombreAdministrador); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-mostrar-error-formularios", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Total de empleados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function RegistroEmpresaMexicoComponent_Template_input_blur_46_listener() { return ctx.validarEnBlur(ctx.totalEmpleados); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-mostrar-error-formularios", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](51, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function RegistroEmpresaMexicoComponent_Template_input_blur_52_listener() { return ctx.validarEnBlurYHacerTrim(ctx.correoAdministrador); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-mostrar-error-formularios", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Guardar cambios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formularioEmpresa);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.TipoIdentificacionEmpresa.RFC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-test-id", "tipoIdEmpresaOpcionRFC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.TipoIdentificacionEmpresa.REGISTRO_PATRONAL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-test-id", "tipoIdEmpresaOpcionREGISTRO_PATRONAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.tipoIdEmpresa);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-invalid", ctx.formularioEmpresa.errors && (ctx.formularioEmpresa.errors["invalidNIT"] || ctx.formularioEmpresa.errors["invalidCedula"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.identificacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identificacion.value && ctx.formularioEmpresa.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.nombreAdministrador);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.totalEmpleados);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.correoAdministrador);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formularioEmpresa.valid || ctx.cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "botonContinuar");
    } }, directives: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _shared_componentes_mostrar_error_formularios_mostrar_error_formularios_component__WEBPACK_IMPORTED_MODULE_11__["MostrarErrorFormulariosComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"]], styles: [".radio-group__tipo-empresa[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\nmat-select[_ngcontent-%COMP%] {\n  background: white;\n  padding: 13px 10px;\n  border-radius: 2px;\n  border: 1px solid #ccc;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #e62c17;\n  margin: 15px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy9jb21lcmNpYWwvY29tcG9uZW50ZXMvcmVnaXN0cm8tZW1wcmVzYS1tZXhpY28vcmVnaXN0cm8tZW1wcmVzYS1tZXhpY28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxvcy9jb21lcmNpYWwvY29tcG9uZW50ZXMvcmVnaXN0cm8tZW1wcmVzYS1tZXhpY28vcmVnaXN0cm8tZW1wcmVzYS1tZXhpY28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFkaW8tZ3JvdXBfX3RpcG8tZW1wcmVzYSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5tYXQtc2VsZWN0e1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTNweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG4uZXJyb3Ige1xuICBjb2xvcjogI2U2MmMxNztcbiAgbWFyZ2luOiAxNXB4IDAgMCAwO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistroEmpresaMexicoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registro-empresa-mexico',
                templateUrl: './registro-empresa-mexico.component.html',
                styleUrls: ['./registro-empresa-mexico.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }, { type: _app_shared_servicios_custom_modal_service__WEBPACK_IMPORTED_MODULE_8__["CustomModalService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] }]; }, null); })();


/***/ }),

/***/ "q+E7":
/*!**************************************************************************************!*\
  !*** ./src/app/modulos/comercial/componentes/subir-layout/subir-layout.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SubirLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubirLayoutComponent", function() { return SubirLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var ngx_uploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-uploader */ "aO0x");
/* harmony import */ var _app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modulos/dashboard/modelo/enums/CustomModalTypes.enum */ "bti7");
/* harmony import */ var _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/servicios/api.service */ "k5QC");
/* harmony import */ var _app_shared_servicios_custom_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/servicios/custom-modal.service */ "XD+r");








const _c0 = ["file"];
class SubirLayoutComponent {
    constructor(apiService, customModalService) {
        this.apiService = apiService;
        this.customModalService = customModalService;
        this.cargando = false;
        this.endPoint = 'enviar_mensajes';
        this.enviarEstadoLayout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.uploadInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.humanizeBytes = ngx_uploader__WEBPACK_IMPORTED_MODULE_2__["humanizeBytes"];
    }
    ngOnInit() {
        this.options = {
            concurrency: 0,
            allowedContentTypes: [
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'application/msexcel',
                'application/vnd.ms-excel',
            ],
        };
    }
    ngOnDestroy() {
        if (this.empresaSubscription) {
            this.empresaSubscription.unsubscribe();
        }
    }
    onUploadOutput(output) {
        this.validarTipoDeArchivo(output);
        if (output.type === 'addedToQueue' && typeof output.file !== 'undefined') {
            setTimeout(() => {
                if (output.file.size > 635000) {
                    this.eliminarDocumento();
                    this.customModalService.abrirModal(_app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_3__["CustomModalType"].ERROR, {
                        mensaje: 'Recuerda cargar un archivo menor a 635 kb',
                    });
                }
                else {
                    this.files = output.file;
                    this.nombre = output.file.name;
                }
            }, 200);
        }
        else if (output.type === 'uploading' &&
            typeof output.file !== 'undefined') {
            this.cargando = true;
            this.enviarEstadoLayout.emit({
                estado: false,
                estadoSubidaDocumento: output.file.progress.data.percentage,
            });
        }
        else if (output.type === 'done') {
            this._disabled = false;
            this.cargando = false;
            switch (output.file.responseStatus) {
                case 200:
                    this.cargaExcelExitosa(output.file.response);
                    break;
                case 400:
                    this.mostrarModalErrorValidacion(output.file.response);
                    break;
                case 0:
                    this.mostrarModalErrorPersonalizado('No pudimos enviar la notificación, recuerda cargar un archivo máximo con 20.000 registros');
                    break;
                default:
                    this.mostrarModalError();
            }
            this.eliminarDocumento();
        }
    }
    validarTipoDeArchivo(output) {
        if (typeof output.file !== 'undefined' &&
            !this.options.allowedContentTypes.some((value) => value === output.file.type)) {
            this.customModalService.abrirModal(_app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_3__["CustomModalType"].ERROR, {
                mensaje: 'El archivo no es válido. Solo puedes subir documentos tipo XLS ó XLSX',
            });
        }
    }
    eliminarDocumento() {
        this.uploadInput.emit({ type: 'removeAll' });
        this.uploadInput.emit({ type: 'cancelAll' });
        this.files = null;
        this.file.nativeElement.value = null;
        this.nombre = null;
    }
    startUpload(body) {
        this._disabled = true;
        this.cargando = true;
        this.apiService.getCurrentSesion().then((sesion) => {
            const accessToken = sesion.getAccessToken();
            const jwt = accessToken.getJwtToken();
            const event = {
                type: 'uploadFile',
                file: this.files,
                url: _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endPointNotificacion + this.endPoint,
                method: 'POST',
                headers: { ['Authorization']: 'Bearer ' + jwt },
                data: body,
            };
            this.uploadInput.emit(event);
        });
    }
    mostrarModalError() {
        const dialog = this.customModalService.abrirModal(_app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_3__["CustomModalType"].ERROR, {
            mensaje: 'La notificación no pudo ser enviada',
        });
        dialog.afterClosed().subscribe(() => {
            this._disabled = false;
        });
    }
    mostrarModalErrorPersonalizado(mensaje) {
        const dialog = this.customModalService.abrirModal(_app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_3__["CustomModalType"].ERROR, {
            mensaje,
        });
        dialog.afterClosed().subscribe(() => {
            this._disabled = false;
        });
    }
    mostrarModalErrorValidacion(errorValidacion) {
        const dialog = this.customModalService.abrirModal(_app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_3__["CustomModalType"].ERROR, {
            mensaje: ['La notificación no pudo ser enviada', errorValidacion.mensaje],
        });
        dialog.afterClosed().subscribe(() => {
            this._disabled = false;
        });
    }
    cargaExcelExitosa(respuesta) {
        let dialog = this.customModalService.abrirModal(_app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_3__["CustomModalType"].SUCCESS, {
            mensaje: respuesta.mensaje,
        });
        if (dialog) {
            dialog.afterClosed().subscribe(() => {
                this._disabled = false;
                this.enviarEstadoLayout.emit('modalCerrado');
            });
        }
    }
}
SubirLayoutComponent.ɵfac = function SubirLayoutComponent_Factory(t) { return new (t || SubirLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_servicios_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_servicios_custom_modal_service__WEBPACK_IMPORTED_MODULE_5__["CustomModalService"])); };
SubirLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubirLayoutComponent, selectors: [["app-subir-layout"]], viewQuery: function SubirLayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.file = _t.first);
    } }, inputs: { disabled: "disabled", endPoint: "endPoint" }, outputs: { enviarEstadoLayout: "enviarEstadoLayout" }, decls: 7, vars: 5, consts: [[1, "loading-status"], ["id", "upload_button"], [1, "contenedor-input"], ["type", "file", "name", "file", "id", "file", "ngFileSelect", "", 3, "disabled", "options", "uploadInput", "uploadOutput"], ["file", ""], [1, "btns", "mat-button"]], template: function SubirLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("uploadOutput", function SubirLayoutComponent_Template_input_uploadOutput_3_listener($event) { return ctx.onUploadOutput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Seleccionar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled || ctx._disabled)("options", ctx.options)("uploadInput", ctx.uploadInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.disabled || ctx._disabled);
    } }, directives: [ngx_uploader__WEBPACK_IMPORTED_MODULE_2__["NgFileSelectDirective"]], styles: ["#upload_button[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n#upload_button[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n#upload_button.add-button[_ngcontent-%COMP%] {\n  color: #9223E0;\n  padding-left: 0;\n  padding-top: 15px;\n}\n#upload_button.add-button[_ngcontent-%COMP%]   .mat-button-ripple[_ngcontent-%COMP%] {\n  display: none;\n}\n#upload_button.add-button[_ngcontent-%COMP%]:hover {\n  color: #5a297e;\n}\n#upload_button.add-button[_ngcontent-%COMP%]:disabled {\n  color: #5c5c5c;\n}\n#upload_button[_ngcontent-%COMP%]   .btns-primary[_ngcontent-%COMP%] {\n  line-height: 1;\n}\nmat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\ninput[_ngcontent-%COMP%]   [type=file][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\np[_ngcontent-%COMP%] {\n  color: #5c5c5c;\n}\nspan[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-top: 6px;\n  font-weight: 700;\n  background-color: #9223e0;\n  color: white;\n  border-radius: 0;\n}\nspan.disabled[_ngcontent-%COMP%] {\n  background-color: #5c5c5c !important;\n  cursor: not-allowed !important;\n}\nspan[_ngcontent-%COMP%]:hover {\n  background-color: #5a297e;\n}\n.loading-status[_ngcontent-%COMP%], #upload_button[_ngcontent-%COMP%], .contenedor-input[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy9jb21lcmNpYWwvY29tcG9uZW50ZXMvc3ViaXItbGF5b3V0L3N1YmlyLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7QUFFSjtBQUFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVKO0FBREk7RUFDRSxhQUFBO0FBR047QUFESTtFQUNFLGNBQUE7QUFHTjtBQURJO0VBQ0UsY0FBQTtBQUdOO0FBQUU7RUFDRSxjQUFBO0FBRUo7QUFDQTtFQUNFLHNCQUFBO0FBRUY7QUFBQTtFQUNFLGVBQUE7QUFHRjtBQURBO0VBQ0UsY0FBQTtBQUlGO0FBRkE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBS0Y7QUFKRTtFQUNFLG9DQUFBO0VBQ0EsOEJBQUE7QUFNSjtBQUpFO0VBQ0UseUJBQUE7QUFNSjtBQUhBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUFNRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvY29tZXJjaWFsL2NvbXBvbmVudGVzL3N1YmlyLWxheW91dC9zdWJpci1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdXBsb2FkX2J1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaW5wdXRbdHlwZT0nZmlsZSddIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICYuYWRkLWJ1dHRvbntcbiAgICBjb2xvcjogIzkyMjNFMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgLm1hdC1idXR0b24tcmlwcGxlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfSBcbiAgICAmOmhvdmVye1xuICAgICAgY29sb3I6IHJnYig5MCwgNDEsIDEyNik7XG4gICAgfVxuICAgICY6ZGlzYWJsZWR7XG4gICAgICBjb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xuICAgIH1cbiAgfVxuICAuYnRucy1wcmltYXJ5e1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG59XG5tYXQtaWNvbntcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbmlucHV0IFt0eXBlPSdmaWxlJ10ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5wIHtcbiAgY29sb3I6IHJnYig5MiwgOTIsIDkyKTs7XG59XG5zcGFuIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTIyM2UwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gICYuZGlzYWJsZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA5MiwgOTIpICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xuICB9XG4gICY6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkwLCA0MSwgMTI2KTtcbiAgfVxufVxuLmxvYWRpbmctc3RhdHVzLCAjdXBsb2FkX2J1dHRvbiwgLmNvbnRlbmVkb3ItaW5wdXQsIHNwYW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubirLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subir-layout',
                templateUrl: './subir-layout.component.html',
                styleUrls: ['./subir-layout.component.scss'],
            }]
    }], function () { return [{ type: _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _app_shared_servicios_custom_modal_service__WEBPACK_IMPORTED_MODULE_5__["CustomModalService"] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], endPoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], enviarEstadoLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], file: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['file', { static: true }]
        }] }); })();


/***/ }),

/***/ "ty5s":
/*!***************************************************************************!*\
  !*** ./src/app/modulos/comercial/validador/registro-empresa.validador.ts ***!
  \***************************************************************************/
/*! exports provided: identificacionColombiaValidador, identificacionMexicoValidador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identificacionColombiaValidador", function() { return identificacionColombiaValidador; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identificacionMexicoValidador", function() { return identificacionMexicoValidador; });
/* harmony import */ var _modelo_tipo_identificacion_empresa_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modelo/tipo-identificacion-empresa.enum */ "SYpj");

function identificacionColombiaValidador(tipoIdentificacion, identificacion) {
    return (group) => {
        const tipoIdentificacionControl = group.controls[tipoIdentificacion];
        const identificacionControl = group.controls[identificacion];
        if (tipoIdentificacionControl.value === _modelo_tipo_identificacion_empresa_enum__WEBPACK_IMPORTED_MODULE_0__["TipoIdentificacionEmpresa"].NIT) {
            const validNit = new RegExp(/^[0-9]{8,15}-{1}[0-9]{1}$/).test(String(identificacionControl.value).toLowerCase());
            return validNit
                ? null
                : { invalidNIT: { valid: false, value: identificacionControl.value } };
        }
        else {
            const validCedula = new RegExp(/^[1-9][0-9]{5,10}$/).test(String(identificacionControl.value).toLowerCase());
            return validCedula
                ? null
                : {
                    invalidCedula: { valid: false, value: identificacionControl.value },
                };
        }
    };
}
function identificacionMexicoValidador(tipoIdentificacion, identificacion) {
    return (group) => {
        const tipoIdentificacionControl = group.controls[tipoIdentificacion];
        const identificacionControl = group.controls[identificacion];
        if (tipoIdentificacionControl.value ===
            _modelo_tipo_identificacion_empresa_enum__WEBPACK_IMPORTED_MODULE_0__["TipoIdentificacionEmpresa"].REGISTRO_PATRONAL) {
            const validRP = new RegExp(/^[a-zA-Z0-9]{11}[a-zA-Z0-9]{0,2}$/).test(String(identificacionControl.value).toLowerCase());
            return validRP
                ? null
                : {
                    invalidRegistroPatronal: {
                        valid: false,
                        value: identificacionControl.value,
                    },
                };
        }
        else {
            const validRFC = /^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/.test(String(identificacionControl.value));
            return validRFC
                ? null
                : { invalidRFC: { valid: false, value: identificacionControl.value } };
        }
    };
}


/***/ }),

/***/ "w9WA":
/*!**************************************************************************!*\
  !*** ./src/app/modulos/comercial/vista/notificar/notificar.component.ts ***!
  \**************************************************************************/
/*! exports provided: NotificarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificarComponent", function() { return NotificarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_modulos_comercial_modelo_tipo_notificacion_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modulos/comercial/modelo/tipo-notificacion.enum */ "mP+Q");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "tqRt");
/* harmony import */ var _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/servicios/api.service */ "k5QC");
/* harmony import */ var _shared_componentes_mostrar_error_formularios_mostrar_error_formularios_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/componentes/mostrar-error-formularios/mostrar-error-formularios.component */ "MQsH");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _componentes_subir_layout_subir_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../componentes/subir-layout/subir-layout.component */ "q+E7");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");



















const _c0 = ["cargaArchivo"];
function NotificarComponent_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const accion_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", accion_r2.valor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](accion_r2.descripcion);
} }
class NotificarComponent {
    constructor(fb, store, http, apiService) {
        this.fb = fb;
        this.store = store;
        this.http = http;
        this.apiService = apiService;
        this.cargando = false;
        this.TipoNotificacion = _app_modulos_comercial_modelo_tipo_notificacion_enum__WEBPACK_IMPORTED_MODULE_3__["TipoNotificacion"];
        this.limitesMensaje = {
            SMS: 160,
            PUSH: 240,
            CORREO: 500,
        };
    }
    ngOnInit() {
        this.formulario = this.crearFormulario(this.fb);
        this.store
            .select('usuario', 'sub')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe((value) => {
            this.userSub = value;
        });
        this.obtenerAcciones();
    }
    crearFormulario(fb) {
        return fb.group({
            titulo: fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(65),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
            ]),
            tipo: fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            campana: fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(65),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
            ]),
            accion: fb.control(''),
            descripcion: fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(160),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
            ]),
            checkTodos: fb.control(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    enviarFormulario() {
        if (this.formulario.valid) {
            const datosFormulario = this.formulario.value;
            const body = {
                idCampania: datosFormulario.campana,
                titulo: datosFormulario.titulo,
                mensaje: datosFormulario.descripcion,
                medios: datosFormulario.tipo,
                todos: datosFormulario.checkTodos,
                accion: datosFormulario.accion,
                idUsuario: this.userSub,
            };
            if (!this.checkTodos.value && this.cargaArchivo.files) {
                this.cargaArchivo.startUpload(body);
            }
            else {
                this.enviarPeticionTodos(body);
            }
        }
    }
    get titulo() {
        return this.formulario.get('titulo');
    }
    get tipo() {
        return this.formulario.get('tipo');
    }
    get campana() {
        return this.formulario.get('campana');
    }
    get accion() {
        return this.formulario.get('accion');
    }
    get descripcion() {
        return this.formulario.get('descripcion');
    }
    get checkTodos() {
        return this.formulario.get('checkTodos');
    }
    validarEnBlur(control) {
        const valor = control.value;
        control.setValue(valor.trim());
        control.markAsDirty();
    }
    validarEnBlurYHacerTrim(control) {
        const valor = control.value;
        control.setValue(valor.trim());
        control.markAsDirty();
    }
    errorArchivoRequerido() {
        return !this.checkTodos.value && !this.cargaArchivo.files;
    }
    seleccionCambio() {
        if (this.checkTodos.value && this.cargaArchivo) {
            this.cargaArchivo.eliminarDocumento();
        }
    }
    actualizaValidaciones() {
        const mediosSeleccionados = this.tipo.value;
        if (mediosSeleccionados.some((medio) => medio === _app_modulos_comercial_modelo_tipo_notificacion_enum__WEBPACK_IMPORTED_MODULE_3__["TipoNotificacion"].SMS)) {
            this.descripcion.setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.limitesMensaje.SMS),
            ]);
        }
        else if (mediosSeleccionados.some((medio) => medio === _app_modulos_comercial_modelo_tipo_notificacion_enum__WEBPACK_IMPORTED_MODULE_3__["TipoNotificacion"].PUSH)) {
            this.descripcion.setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.limitesMensaje.PUSH),
            ]);
        }
        else {
            this.descripcion.setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.limitesMensaje.CORREO),
            ]);
        }
        this.descripcion.updateValueAndValidity();
        this.formulario.updateValueAndValidity();
    }
    enviarPeticionTodos(body) {
        this.cargando = true;
        this.apiService
            .getCurrentSesion()
            .then((sesion) => {
            const accessToken = sesion.getAccessToken();
            const jwt = accessToken.getJwtToken();
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                    ['Authorization']: 'Bearer ' + jwt,
                }),
            };
            const url = _env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].endPointNotificacion + this.cargaArchivo.endPoint;
            return this.http
                .post(url, body, httpOptions)
                .toPromise();
        })
            .then((respuesta) => {
            this.cargando = false;
            this.cargaArchivo.cargaExcelExitosa(respuesta);
        }, () => {
            this.cargando = false;
            this.cargaArchivo.mostrarModalError();
        });
    }
    obtenerAcciones() {
        this.apiService.get('notificacion/acciones').then((acciones) => {
            this.acciones = acciones;
        });
    }
}
NotificarComponent.ɵfac = function NotificarComponent_Factory(t) { return new (t || NotificarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_servicios_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"])); };
NotificarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificarComponent, selectors: [["app-notificar"]], viewQuery: function NotificarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cargaArchivo = _t.first);
    } }, decls: 57, vars: 13, consts: function () { var i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1070390441670850729$$APP_MODULOS_COMERCIAL_VISTA_NOTIFICAR_NOTIFICAR_COMPONENT_TS_2 = goog.getMsg("Notificaciones");
        i18n_1 = MSG_EXTERNAL_1070390441670850729$$APP_MODULOS_COMERCIAL_VISTA_NOTIFICAR_NOTIFICAR_COMPONENT_TS_2;
    }
    else {
        i18n_1 = $localize `:␟7ae17b1338d7081440a2b39905a5fc9558c45019␟1070390441670850729:Notificaciones`;
    } var i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8331458230102334089$$APP_MODULOS_COMERCIAL_VISTA_NOTIFICAR_NOTIFICAR_COMPONENT_TS_4 = goog.getMsg("T\u00EDtulo");
        i18n_3 = MSG_EXTERNAL_8331458230102334089$$APP_MODULOS_COMERCIAL_VISTA_NOTIFICAR_NOTIFICAR_COMPONENT_TS_4;
    }
    else {
        i18n_3 = $localize `:␟474bf12b729ea585af34e59baa9f28b58c472a8f␟8331458230102334089:Título`;
    } var i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2759773909798147145$$APP_MODULOS_COMERCIAL_VISTA_NOTIFICAR_NOTIFICAR_COMPONENT_TS_6 = goog.getMsg("Tipo");
        i18n_5 = MSG_EXTERNAL_2759773909798147145$$APP_MODULOS_COMERCIAL_VISTA_NOTIFICAR_NOTIFICAR_COMPONENT_TS_6;
    }
    else {
        i18n_5 = $localize `:␟e43756328653a293fc3ebdb76543c381de114946␟2759773909798147145:Tipo`;
    } var i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8024686887641078251$$APP_MODULOS_COMERCIAL_VISTA_NOTIFICAR_NOTIFICAR_COMPONENT_TS_8 = goog.getMsg("Notificaci\u00F3n");
        i18n_7 = MSG_EXTERNAL_8024686887641078251$$APP_MODULOS_COMERCIAL_VISTA_NOTIFICAR_NOTIFICAR_COMPONENT_TS_8;
    }
    else {
        i18n_7 = $localize `:␟29ef3ca65d61624e4d28f8060fdd7021b62c4c38␟8024686887641078251:Notificación`;
    } var i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3017812207417069355$$APP_MODULOS_COMERCIAL_VISTA_NOTIFICAR_NOTIFICAR_COMPONENT_TS_10 = goog.getMsg("Acci\u00F3n (opcional)");
        i18n_9 = MSG_EXTERNAL_3017812207417069355$$APP_MODULOS_COMERCIAL_VISTA_NOTIFICAR_NOTIFICAR_COMPONENT_TS_10;
    }
    else {
        i18n_9 = $localize `:␟12f030bd78f4c900e5dcddfe999022c6a09daebe␟3017812207417069355:Acción (opcional)`;
    } var i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4335631122235048461$$APP_MODULOS_COMERCIAL_VISTA_NOTIFICAR_NOTIFICAR_COMPONENT_TS_12 = goog.getMsg("Enviar a:");
        i18n_11 = MSG_EXTERNAL_4335631122235048461$$APP_MODULOS_COMERCIAL_VISTA_NOTIFICAR_NOTIFICAR_COMPONENT_TS_12;
    }
    else {
        i18n_11 = $localize `:␟f3e741a98d3aa6ff5815c45c840b6c9162818960␟4335631122235048461:Enviar a:`;
    } var i18n_13; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6622337318903833425$$APP_MODULOS_COMERCIAL_VISTA_NOTIFICAR_NOTIFICAR_COMPONENT_TS_14 = goog.getMsg("Subir archivo");
        i18n_13 = MSG_EXTERNAL_6622337318903833425$$APP_MODULOS_COMERCIAL_VISTA_NOTIFICAR_NOTIFICAR_COMPONENT_TS_14;
    }
    else {
        i18n_13 = $localize `:␟08a3de98a18344763f6ea401e8f4eac9539ec9a0␟6622337318903833425:Subir archivo`;
    } var i18n_15; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6181392829528060012$$APP_MODULOS_COMERCIAL_VISTA_NOTIFICAR_NOTIFICAR_COMPONENT_TS_16 = goog.getMsg("Mensaje");
        i18n_15 = MSG_EXTERNAL_6181392829528060012$$APP_MODULOS_COMERCIAL_VISTA_NOTIFICAR_NOTIFICAR_COMPONENT_TS_16;
    }
    else {
        i18n_15 = $localize `:␟38cc40c69774001dcc89ef3492d09f6ed47302e8␟6181392829528060012:Mensaje`;
    } var i18n_17; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7424761403033201931$$APP_MODULOS_COMERCIAL_VISTA_NOTIFICAR_NOTIFICAR_COMPONENT_TS_18 = goog.getMsg(" Enviar ");
        i18n_17 = MSG_EXTERNAL_7424761403033201931$$APP_MODULOS_COMERCIAL_VISTA_NOTIFICAR_NOTIFICAR_COMPONENT_TS_18;
    }
    else {
        i18n_17 = $localize `:␟f442a0c81cb35ecb89dff56f73953edf108bdd76␟7424761403033201931: Enviar `;
    } return [i18n_1, [1, "contenedor-formulario"], ["autocomplete", "off", "id", "formulario", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "titulo", 1, "control-label"], i18n_3, ["formControlName", "titulo", "id", "titulo", "type", "text", "maxlength", "301", "placeholder", "T\u00EDtulo de notificaci\u00F3n", 1, "form-control", 3, "blur"], ["id", "erroresTitulo", 3, "control"], ["for", "tipo", 1, "control-label"], i18n_5, ["formControlName", "tipo", "id", "tipo", "multiple", "", "placeholder", "SMS, Notificaci\u00F3n push", 3, "selectionChange"], [3, "value"], ["id", "erroresTipo", 3, "control"], ["for", "campana", 1, "control-label"], i18n_7, ["formControlName", "campana", "id", "campana", "type", "text", "maxlength", "301", "placeholder", "Identificador de la notificaci\u00F3n", 1, "form-control", 3, "blur"], ["id", "erroresCampana", 3, "control"], ["for", "accion", 1, "control-label"], i18n_9, ["formControlName", "accion", "id", "accion", "placeholder", "Accion"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "erroresAccion", 3, "control"], [1, "col-md-6", 2, "display", "none"], ["for", "checkTodos", 1, "control-label"], i18n_11, ["formControlName", "checkTodos", "id", "checkTodos", "type", "text", 1, "form-control", 3, "change"], [1, "form-group", "form-upload"], ["for", "archivo", 1, "control-label"], i18n_13, [1, "campo-archivo"], [3, "disabled"], ["cargaArchivo", ""], [1, "col-md-12"], [1, "form-group", "form-descripcion"], ["for", "descripcion", 1, "control-label"], i18n_15, ["matInput", "", "formControlName", "descripcion", "id", "descripcion", "type", "text", "placeholder", "Texto de la notificaci\u00F3n", 1, "form-control", 3, "blur"], ["id", "erroresDescripcion", 3, "control"], ["mat-button", "", "type", "submit", "color", "primary", 1, "mat-button", "btns-primary", "align-r", 3, "disabled"], i18n_17]; }, template: function NotificarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NotificarComponent_Template_form_ngSubmit_3_listener() { return ctx.enviarFormulario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function NotificarComponent_Template_input_blur_9_listener() { return ctx.validarEnBlurYHacerTrim(ctx.titulo); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-mostrar-error-formularios", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function NotificarComponent_Template_mat_select_selectionChange_15_listener() { return ctx.actualizaValidaciones(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "SMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Notificaci\u00F3n Push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-mostrar-error-formularios", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](24, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function NotificarComponent_Template_input_blur_25_listener() { return ctx.validarEnBlurYHacerTrim(ctx.campana); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-mostrar-error-formularios", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](30, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, NotificarComponent_mat_option_32_Template, 2, 2, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-mostrar-error-formularios", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](37, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-checkbox", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NotificarComponent_Template_mat_checkbox_change_38_listener() { return ctx.seleccionCambio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u00BFTodos los usuarios? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](43, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-subir-layout", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](51, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "textarea", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function NotificarComponent_Template_textarea_blur_52_listener() { return ctx.validarEnBlurYHacerTrim(ctx.descripcion); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-mostrar-error-formularios", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](56, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.TipoNotificacion.SMS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.TipoNotificacion.PUSH);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.tipo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.campana);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.acciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.accion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r1.nombre || "No se ha seleccionado ning\u00FAn archivo", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.checkTodos.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formulario.valid || ctx.cargando || ctx.errorArchivoRequerido() || _r1.cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "botonEnviar");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _shared_componentes_mostrar_error_formularios_mostrar_error_formularios_component__WEBPACK_IMPORTED_MODULE_8__["MostrarErrorFormulariosComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _componentes_subir_layout_subir_layout_component__WEBPACK_IMPORTED_MODULE_13__["SubirLayoutComponent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"]], styles: ["@font-face {\n  font-family: GeomanistWord-Bold;\n  src: url(\"/assets/fonts/GeomanistWord-Bold.eot\"), url(\"/assets/fonts/GeomanistWord-Bold.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/GeomanistWord-Bold.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: Bariol_Regular;\n  src: url(\"/assets/fonts/bariol_regular.eot\"), url(\"/assets/fonts/bariol_regular.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/bariol_regular.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: Bariol_Regular_Italic;\n  src: url(\"/assets/fonts/bariol_regular_italic.eot\"), url(\"/assets/fonts/bariol_regular_italic.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/bariol_regular_italic.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: Bariol_Bold;\n  src: url(\"/assets/fonts/bariol_bold.eot\"), url(\"/assets/fonts/bariol_bold.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/bariol_bold.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@-webkit-keyframes entrada {\n  0% {\n    transform: translateY(25px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n@keyframes entrada {\n  0% {\n    transform: translateY(25px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n.fade-b-t[_ngcontent-%COMP%] {\n  -webkit-animation: entrada 0.5s ease;\n          animation: entrada 0.5s ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0;\n}\nmat-select[_ngcontent-%COMP%] {\n  background: white;\n  padding: 13px 10px;\n  border-radius: 2px;\n  border: 1px solid #ccc;\n}\n.error[_ngcontent-%COMP%] {\n  color: #e62c17;\n  margin: 15px 0 0 0;\n}\nform[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\nform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  padding: 0;\n  height: 100px;\n  margin: 8px 0 10px 0;\n  position: relative;\n}\nform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #000;\n}\nform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #000;\n  height: 48px !important;\n  font-weight: 300;\n  border-radius: 2px;\n  background-color: #fff;\n}\nform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  height: auto !important;\n  margin: 5px;\n  border: none;\n  box-shadow: none;\n}\nform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .descript[_ngcontent-%COMP%] {\n  margin: 30px 0 0 0;\n  color: #fff;\n  display: inline-block;\n}\n.ng-valid[_ngcontent-%COMP%]:not(form), .ng-valid[_ngcontent-%COMP%]:not(form).required {\n  border: 1px solid lightgreen;\n}\n.ng-invalid[_ngcontent-%COMP%]:not(form).ng-dirty.ng-touched {\n  border: 1px solid lightcoral;\n}\n#botonContinuar[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.form-descripcion[_ngcontent-%COMP%] {\n  height: auto !important;\n}\nmat-checkbox[_ngcontent-%COMP%] {\n  border: none !important;\n  background-color: transparent !important;\n  box-shadow: none;\n}\n.campo-archivo[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 13px 10px;\n  border-radius: 2px 15px 15px 2px;\n  border: 1px solid #ccc;\n  position: relative;\n  color: #9e9e9e;\n}\napp-subir-layout[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n}\n.contenedor-formulario[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #f3f3f3;\n}\n.btns-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 1 !important;\n  color: #ffffff !important;\n  background: #c7c7c7 !important;\n}\n.ayuda[_ngcontent-%COMP%] {\n  font-size: small;\n  color: #a5a5a5;\n}\n@media (max-width: 768px) {\n  .campo-archivo[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    background: transparent;\n    padding-bottom: 5px;\n    border: none;\n  }\n\n  app-subir-layout[_ngcontent-%COMP%] {\n    position: relative;\n    height: 40px;\n    width: 100%;\n    border-radius: 15px;\n  }\n\n  app-subir-layout[_ngcontent-%COMP%]  span {\n    border-radius: 15px;\n    padding-top: 0px;\n  }\n  app-subir-layout[_ngcontent-%COMP%]  .loading-status, app-subir-layout[_ngcontent-%COMP%]  #upload_button, app-subir-layout[_ngcontent-%COMP%]  .contenedor-input, app-subir-layout[_ngcontent-%COMP%]  span {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL21peGluLnNjc3MiLCJzcmMvYXBwL21vZHVsb3MvY29tZXJjaWFsL3Zpc3RhL25vdGlmaWNhci9ub3RpZmljYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSwrQkFTRjtFQVJFLDBMQUFBO0VBR0EsbUJBT0Y7RUFORSxrQkFPRjtBQ1RGO0FESkU7RUFDRSwyQkFlRjtFQWRFLDhLQUFBO0VBR0EsbUJBYUY7RUFaRSxrQkFhRjtBQ1RGO0FEVkU7RUFDRSxrQ0FxQkY7RUFwQkUsbU1BQUE7RUFHQSxtQkFtQkY7RUFsQkUsa0JBbUJGO0FDVEY7QURoQkU7RUFDRSx3QkEwQmU7RUF6QmYscUtBQUE7RUFHQSxtQkFzQndEO0VBckJ4RCxrQkFxQmdFO0FDTHBFO0FENEZBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUMxRkY7RUQ0RkE7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUMxRkY7QUFDRjtBRGtGQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VDMUZGO0VENEZBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VDMUZGO0FBQ0Y7QUQ2RkE7RUFDRSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLFVBQUE7QUMzRkY7QUFuQ0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQXNDSjtBQXBDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQXVDSjtBQW5DQTtFQUNJLGdCQUFBO0FBc0NKO0FBckNJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBdUNOO0FBdENNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUF3Q1I7QUF0Q007RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUF3Q1I7QUF0Q007O0VBRUUsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBd0NSO0FBdENNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUF3Q1I7QUFsQ0U7O0VBRUUsNEJBQUE7QUFxQ0o7QUFsQ0U7RUFDRSw0QkFBQTtBQXFDSjtBQWxDRTtFQUNFLG1CQUFBO0FBcUNKO0FBbENFO0VBQ0ksdUJBQUE7QUFxQ047QUFuQ0U7RUFDRSx1QkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7QUFzQ0o7QUFwQ0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXVDSjtBQXJDRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0FBd0NKO0FBdENBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBeUNGO0FBdENBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0FBeUNGO0FBdkNBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBMENGO0FEekNJO0VDS0Y7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtFQXdDRjs7RUF0Q0E7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUF5Q0Y7O0VBdENFO0lBQ0UsbUJBQUE7SUFDQSxnQkFBQTtFQXlDSjtFQXZDRTtJQUNFLFdBQUE7RUF5Q0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvY29tZXJjaWFsL3Zpc3RhL25vdGlmaWNhci9ub3RpZmljYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gZm9udC1mYWNlKCRuYW1lLCAkc3JjLCAkd2VpZ2h0LCAkc3R5bGUpIHtcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICRuYW1lO1xuICAgIHNyYzogdXJsKHF1b3RlKCRzcmMgKyAnLmVvdCcpKSxcbiAgICAgIHVybChxdW90ZSgkc3JjICsgJy5lb3Q/aWVmaXgnKSkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgICAgdXJsKCRzcmMrJy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XG4gICAgZm9udC1zdHlsZTogJHN0eWxlO1xuICB9XG59XG5AaW5jbHVkZSBmb250LWZhY2UoXG4gIEdlb21hbmlzdFdvcmQtQm9sZCxcbiAgLyBhc3NldHMvZm9udHMvR2VvbWFuaXN0V29yZC1Cb2xkLFxuICBub3JtYWwsXG4gIG5vcm1hbFxuKTtcbkBpbmNsdWRlIGZvbnQtZmFjZShcbiAgQmFyaW9sX1JlZ3VsYXIsXG4gIC8gYXNzZXRzL2ZvbnRzL2JhcmlvbF9yZWd1bGFyLFxuICBub3JtYWwsXG4gIG5vcm1hbFxuKTtcbkBpbmNsdWRlIGZvbnQtZmFjZShcbiAgQmFyaW9sX1JlZ3VsYXJfSXRhbGljLFxuICAvIGFzc2V0cy9mb250cy9iYXJpb2xfcmVndWxhcl9pdGFsaWMsXG4gIG5vcm1hbCxcbiAgaXRhbGljXG4pO1xuQGluY2x1ZGUgZm9udC1mYWNlKEJhcmlvbF9Cb2xkLCAvIGFzc2V0cy9mb250cy9iYXJpb2xfYm9sZCwgbm9ybWFsLCBub3JtYWwpO1xuXG5AbWl4aW4gYnRucyhcbiAgJGJvcmRlcixcbiAgJHJhZGl1cyxcbiAgJHBhZGRpbmcsXG4gICRjb2xvcixcbiAgJGZvbnQtc2l6ZSxcbiAgJGZhbWlseSxcbiAgJHdlaWdodCxcbiAgJHdpZHRoLFxuICAkYmdcbikge1xuICBib3JkZXI6IHNvbGlkICRib3JkZXI7XG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gIHBhZGRpbmc6ICRwYWRkaW5nICRwYWRkaW5nICogMjtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBmb250LXdlaWdodDogJHdlaWdodDtcbiAgZm9udC1mYW1pbHk6ICRmYW1pbHk7XG4gIG1pbi13aWR0aDogJHdpZHRoO1xuICBiYWNrZ3JvdW5kOiAkYmc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAmOmZvY3VzLFxuICAmOnZpc2l0ZWQge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGxpbmsoJGNvbG9yLCAkc2l6ZS1mb250LCAkd2VpZ2h0KSB7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtc2l6ZTogJHNpemUtZm9udDtcbiAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XG59XG5cbkBtaXhpbiBpY29ucygkYmdpLCAkd2lkdGgsICRoZWlnaHQsICRtYXJnaW4pIHtcbiAgYmFja2dyb3VuZDogJGJnaTtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogJG1hcmdpbjtcbn1cblxuQG1peGluIG1lZGlhKCRjb25zdWx0YSkge1xuICAkbWVkaWEteHhzOiAnKG1heC13aWR0aCA6IDMyMHB4KSc7IC8vIGlQaG9uZSBSZXRpbmFcbiAgJG1lZGlhLXhzOiAnKG1heC13aWR0aCA6IDQ4MHB4KSc7IC8vIFRlbGVmb25vc1xuICAkbWVkaWEtc206ICcobWF4LXdpZHRoOiA3NjhweCknOyAvLyBUYWJsZXRzXG4gICRtZWRpYS1tZDogJyhtYXgtd2lkdGg6IDk5MnB4KSc7IC8vIEVzY3JpdG9yaW9zXG4gICRtZWRpYS1sZzogJyhtYXgtd2lkdGg6IDEyMDBweCknOyAvLyBSZXNvbHVjaW9uZXMgZ3JhbmRlc1xuICAkbWVkaWEteGxnOiAnKG1heC13aWR0aDogMTYwMHB4KSc7IC8vIFJlc29sdWNpb25lcyBleHRyYWdyYW5kZXNcblxuICBAaWYgJGNvbnN1bHRhID09IHh4cyB7XG4gICAgQG1lZGlhICN7JG1lZGlhLXh4c30ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG4gIEBpZiAkY29uc3VsdGEgPT0geHMge1xuICAgIEBtZWRpYSAjeyRtZWRpYS14c30ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRjb25zdWx0YSA9PSBzbSB7XG4gICAgQG1lZGlhICN7JG1lZGlhLXNtfSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJGNvbnN1bHRhID09IG1kIHtcbiAgICBAbWVkaWEgI3skbWVkaWEtbWR9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkY29uc3VsdGEgPT0gbGcge1xuICAgIEBtZWRpYSAjeyRtZWRpYS1sZ30ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRjb25zdWx0YSA9PSB4bGcge1xuICAgIEBtZWRpYSAjeyRtZWRpYS14bGd9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGVudHJhZGEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1cHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uZmFkZS1iLXQge1xuICBhbmltYXRpb246IGVudHJhZGEgMC41cyBlYXNlO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgb3BhY2l0eTogMDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhclwiO1xuQGltcG9ydCBcIi5+YXNzZXRzL3N0eWxlcy9taXhpbi5zY3NzXCI7XG5cbm1hdC1zZWxlY3R7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMTNweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuLmVycm9yIHtcbiAgICBjb2xvcjogI2U2MmMxNztcbiAgICBtYXJnaW46IDE1cHggMCAwIDA7XG59XG5cblxuZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIG1hcmdpbjogOHB4IDAgMTBweCAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgfVxuICAgICAgaW5wdXQge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICAgIGlucHV0W3R5cGU9J2NoZWNrYm94J10sXG4gICAgICBpbnB1dFt0eXBlPSdyYWRpbyddIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG4gICAgICAuZGVzY3JpcHQge1xuICAgICAgICBtYXJnaW46IDMwcHggMCAwIDA7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAubmctdmFsaWQ6bm90KGZvcm0pLFxuICAubmctdmFsaWQ6bm90KGZvcm0pLnJlcXVpcmVkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZWVuO1xuICB9XG5cbiAgLm5nLWludmFsaWQ6bm90KGZvcm0pLm5nLWRpcnR5Lm5nLXRvdWNoZWR7XG4gICAgYm9yZGVyOjFweCBzb2xpZCBsaWdodGNvcmFsO1xuICB9XG5cbiAgI2JvdG9uQ29udGludWFye1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cblxuICAuZm9ybS1kZXNjcmlwY2lvbiB7XG4gICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICBtYXQtY2hlY2tib3gge1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAuY2FtcG8tYXJjaGl2byB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAxM3B4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4IDE1cHggMTVweCAycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6IHJnYigxNTgsIDE1OCwgMTU4KTtcbiAgfVxuICBhcHAtc3ViaXItbGF5b3V0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuLmNvbnRlbmVkb3ItZm9ybXVsYXJpbyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG59XG5cbi5idG5zLXByaW1hcnk6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNjN2M3YzcgIWltcG9ydGFudDtcbn1cbi5heXVkYSB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiAjYTVhNWE1O1xufVxuXG4vL1Jlc3BvbnNpdmVcbkBpbmNsdWRlIG1lZGlhKHNtKSB7XG5cbiAgLmNhbXBvLWFyY2hpdm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBhcHAtc3ViaXItbGF5b3V0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cbiAgYXBwLXN1YmlyLWxheW91dDo6bmctZGVlcCB7XG4gICAgc3BhbiB7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICB9XG4gICAgLmxvYWRpbmctc3RhdHVzLCAjdXBsb2FkX2J1dHRvbiwgLmNvbnRlbmVkb3ItaW5wdXQsIHNwYW4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notificar',
                templateUrl: './notificar.component.html',
                styleUrls: ['./notificar.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }]; }, { cargaArchivo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cargaArchivo', { static: true }]
        }] }); })();


/***/ }),

/***/ "x6y1":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modulos/comercial/componentes/registro-empresa-colombia/registro-empresa-colombia.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: RegistroEmpresaColombiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroEmpresaColombiaComponent", function() { return RegistroEmpresaColombiaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modulos/dashboard/modelo/enums/CustomModalTypes.enum */ "bti7");
/* harmony import */ var _app_modulos_comercial_modelo_tipo_identificacion_empresa_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modulos/comercial/modelo/tipo-identificacion-empresa.enum */ "SYpj");
/* harmony import */ var _app_modulos_comercial_validador_registro_empresa_validador__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modulos/comercial/validador/registro-empresa.validador */ "ty5s");
/* harmony import */ var _app_modulos_comercial_validador_expresionesRegulares__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modulos/comercial/validador/expresionesRegulares */ "6HRF");
/* harmony import */ var _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/servicios/api.service */ "k5QC");
/* harmony import */ var _app_shared_servicios_custom_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/servicios/custom-modal.service */ "XD+r");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "tqRt");
/* harmony import */ var _shared_componentes_mostrar_error_formularios_mostrar_error_formularios_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/componentes/mostrar-error-formularios/mostrar-error-formularios.component */ "MQsH");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");

















function RegistroEmpresaColombiaComponent_ng_container_27_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El formato del NIT no es valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroEmpresaColombiaComponent_ng_container_27_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El formato de la identificacion no es valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroEmpresaColombiaComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistroEmpresaColombiaComponent_ng_container_27_p_1_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistroEmpresaColombiaComponent_ng_container_27_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.identificacion.dirty && ctx_r0.formularioEmpresa.errors["invalidNIT"] && !ctx_r0.formularioEmpresa.errors["invalidNIT"].valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.identificacion.dirty && ctx_r0.formularioEmpresa.errors["invalidCedula"] && !ctx_r0.formularioEmpresa.errors["invalidCedula"].valid);
} }
class RegistroEmpresaColombiaComponent {
    constructor(fb, apiService, customModal, store) {
        this.fb = fb;
        this.apiService = apiService;
        this.customModal = customModal;
        this.store = store;
        this.cargando = false;
        this.TipoIdentificacionEmpresa = _app_modulos_comercial_modelo_tipo_identificacion_empresa_enum__WEBPACK_IMPORTED_MODULE_4__["TipoIdentificacionEmpresa"];
    }
    ngOnInit() {
        this.formularioEmpresa = this.crearFormulario(this.fb);
    }
    crearFormulario(fb) {
        return fb.group({
            identificacion: fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            tipoIdEmpresa: fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            totalEmpleados: fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2147483647),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10),
            ]),
            nombre: fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(301),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
            ]),
            nombreAdministrador: fb.control('', [
                ..._app_modulos_comercial_validador_expresionesRegulares__WEBPACK_IMPORTED_MODULE_6__["validarTextoSinNumero"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(301),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
            ]),
            correoAdministrador: fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(301),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                this.validarEmailCampo,
            ]),
        }, {
            validator: Object(_app_modulos_comercial_validador_registro_empresa_validador__WEBPACK_IMPORTED_MODULE_5__["identificacionColombiaValidador"])('tipoIdEmpresa', 'identificacion'),
        });
    }
    enviarFormulario() {
        if (this.formularioEmpresa.valid) {
            this.store
                .select('usuario', 'sub')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                .subscribe((value) => {
                this.userSub = value;
                this.registrarEmpresa();
            });
        }
    }
    registrarEmpresa() {
        this.correo = this.formularioEmpresa.get('correoAdministrador').value;
        this.cargando = true;
        const result = Object.assign(Object.assign({}, this.formularioEmpresa.value), { codigoPais: 'CO', idUsuario: this.userSub, correoAdministrador: this.correo.toLowerCase() });
        this.apiService
            .post('empresa/sin_contrato/registrar', result)
            .then(() => {
            this.customModal.abrirModal(_app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_3__["CustomModalType"].SUCCESS, {
                mensaje: 'Los cambios se han realizado con éxito.',
            });
            this.formularioEmpresa.reset();
            this.cargando = false;
        })
            .catch((e) => {
            this.cargando = false;
            switch (e.data.codigo) {
                case 'empresa.identificacion.duplicada':
                    this.customModal.abrirModal(_app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_3__["CustomModalType"].ERROR, {
                        mensaje: 'Esta identificacion no se encuentra disponible.',
                    });
                    break;
                case 'empresa.identificacion.salesforce.no-existe':
                    this.customModal.abrirModal(_app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_3__["CustomModalType"].ERROR, {
                        mensaje: 'La empresa no se encuentra registrada en salesforce',
                    });
                    break;
                default:
                    this.customModal.abrirModal(_app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_3__["CustomModalType"].ERROR, {
                        mensaje: 'Sucedio un error inesperado en la aplicación.',
                    });
            }
        });
    }
    get identificacion() {
        return this.formularioEmpresa.get('identificacion');
    }
    get tipoIdEmpresa() {
        return this.formularioEmpresa.get('tipoIdEmpresa');
    }
    get totalEmpleados() {
        return this.formularioEmpresa.get('totalEmpleados');
    }
    get nombre() {
        return this.formularioEmpresa.get('nombre');
    }
    get nombreAdministrador() {
        return this.formularioEmpresa.get('nombreAdministrador');
    }
    get correoAdministrador() {
        return this.formularioEmpresa.get('correoAdministrador');
    }
    validarEnBlur(control) {
        const valor = control.value;
        control.setValue(valor.trim());
        control.markAsDirty();
    }
    validarEnBlurYHacerTrim(control) {
        const valor = control.value;
        control.setValue(valor.trim());
        control.markAsDirty();
    }
    validarEmailCampo(control) {
        const regExpr = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const emailValue = control.value
            ? regExpr.test(String(control.value).toLowerCase())
            : true;
        if (!emailValue) {
            return { pattern: true };
        }
        return null;
    }
}
RegistroEmpresaColombiaComponent.ɵfac = function RegistroEmpresaColombiaComponent_Factory(t) { return new (t || RegistroEmpresaColombiaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_servicios_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_servicios_custom_modal_service__WEBPACK_IMPORTED_MODULE_8__["CustomModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"])); };
RegistroEmpresaColombiaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistroEmpresaColombiaComponent, selectors: [["app-registro-empresa-colombia"]], decls: 49, vars: 16, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4454287070737801648$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_COLOMBIA_REGISTRO_EMPRESA_COLOMBIA_COMPONENT_TS_1 = goog.getMsg("Ingresa la informaci\u00F3n de la empresa que deseas {$lineBreak} registrar en qiip:", { "lineBreak": "\uFFFD#2\uFFFD\uFFFD/#2\uFFFD" });
        i18n_0 = MSG_EXTERNAL_4454287070737801648$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_COLOMBIA_REGISTRO_EMPRESA_COLOMBIA_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟f206d6849ea20a3a423790f695c74b036843065c␟4454287070737801648:Ingresa la información de la empresa que deseas ${"\uFFFD#2\uFFFD\uFFFD/#2\uFFFD"}:LINE_BREAK: registrar en qiip:`;
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4513548925328753715$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_COLOMBIA_REGISTRO_EMPRESA_COLOMBIA_COMPONENT_TS_3 = goog.getMsg("Nombre de la empresa");
        i18n_2 = MSG_EXTERNAL_4513548925328753715$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_COLOMBIA_REGISTRO_EMPRESA_COLOMBIA_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟fbdc611eba5be905ff2f383754df3d3a704fa1a7␟4513548925328753715:Nombre de la empresa`;
    } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9031601144796515992$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_COLOMBIA_REGISTRO_EMPRESA_COLOMBIA_COMPONENT_TS_5 = goog.getMsg("Tipo de indetificaci\u00F3n");
        i18n_4 = MSG_EXTERNAL_9031601144796515992$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_COLOMBIA_REGISTRO_EMPRESA_COLOMBIA_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟d931f1b816cf5c3a6b1292d2883a372e1b99ae9f␟9031601144796515992:Tipo de indetificación`;
    } var i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_723288048376964666$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_COLOMBIA_REGISTRO_EMPRESA_COLOMBIA_COMPONENT_TS_7 = goog.getMsg("N\u00FAmero de identificaci\u00F3n");
        i18n_6 = MSG_EXTERNAL_723288048376964666$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_COLOMBIA_REGISTRO_EMPRESA_COLOMBIA_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟046bc4762f842d50ab38dc730e3ebeafa1a12eab␟723288048376964666:Número de identificación`;
    } var i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3920229854226705678$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_COLOMBIA_REGISTRO_EMPRESA_COLOMBIA_COMPONENT_TS_9 = goog.getMsg("Nombre del administrador");
        i18n_8 = MSG_EXTERNAL_3920229854226705678$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_COLOMBIA_REGISTRO_EMPRESA_COLOMBIA_COMPONENT_TS_9;
    }
    else {
        i18n_8 = $localize `:␟e0d3c794d8e6992ae2a0815432f776a46fca8381␟3920229854226705678:Nombre del administrador`;
    } var i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2462815718889425385$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_COLOMBIA_REGISTRO_EMPRESA_COLOMBIA_COMPONENT_TS_11 = goog.getMsg("Correo del administrador");
        i18n_10 = MSG_EXTERNAL_2462815718889425385$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_COLOMBIA_REGISTRO_EMPRESA_COLOMBIA_COMPONENT_TS_11;
    }
    else {
        i18n_10 = $localize `:␟4d224fe5b97b90d7c2b34ee2d6ae3417bef5219d␟2462815718889425385:Correo del administrador`;
    } var i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3768822001825512149$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_COLOMBIA_REGISTRO_EMPRESA_COLOMBIA_COMPONENT_TS_13 = goog.getMsg("Total de empleados");
        i18n_12 = MSG_EXTERNAL_3768822001825512149$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_COLOMBIA_REGISTRO_EMPRESA_COLOMBIA_COMPONENT_TS_13;
    }
    else {
        i18n_12 = $localize `:␟cbc6a90ccaa5c6d8ae8448a85dab78e31ef893ac␟3768822001825512149:Total de empleados`;
    } var i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5036632537830175553$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_COLOMBIA_REGISTRO_EMPRESA_COLOMBIA_COMPONENT_TS_15 = goog.getMsg("Guardar cambios ");
        i18n_14 = MSG_EXTERNAL_5036632537830175553$$APP_MODULOS_COMERCIAL_COMPONENTES_REGISTRO_EMPRESA_COLOMBIA_REGISTRO_EMPRESA_COLOMBIA_COMPONENT_TS_15;
    }
    else {
        i18n_14 = $localize `:␟cbc313032f5beb7f49b46c3762f512c44c231358␟5036632537830175553:Guardar cambios `;
    } return [i18n_0, ["autocomplete", "off", "id", "formularioEmpresa", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "nombre", 1, "control-label"], i18n_2, ["formControlName", "nombre", "id", "nombre", "type", "text", "maxlength", "301", "placeholder", "Escribe el nombre de la empresa", 1, "form-control", 3, "blur"], ["id", "erroresNombre", 3, "control"], ["for", "tipoIdEmpresa", 1, "control-label"], i18n_4, ["formControlName", "tipoIdEmpresa", "id", "tipoIdEmpresa", "placeholder", "Selecciona el tipo de identificaci\u00F3n de la empresa", 3, "blur"], [3, "value"], ["id", "erroresTipoIdEmpresa", 3, "control"], ["for", "identificacion", 1, "control-label"], i18n_6, ["formControlName", "identificacion", "id", "identificacion", "type", "text", "maxlength", "17", "placeholder", "Escribe el n\u00FAmero de identificaci\u00F3n de la empresa", 1, "form-control", 3, "blur"], ["id", "erroresIdentificacion", 3, "control"], [4, "ngIf"], ["for", "nombreAdministrador", 1, "control-label"], i18n_8, ["formControlName", "nombreAdministrador", "id", "nombreAdministrador", "type", "text", "maxlength", "301", "placeholder", "Escribe el nombre del administrador de la empresa", 1, "form-control", 3, "blur"], ["id", "erroresNombreAdministrador", 3, "control"], ["for", "correoAdministrador", 1, "control-label"], i18n_10, ["formControlName", "correoAdministrador", "id", "correoAdministrador", "type", "text", "maxlength", "301", "placeholder", "Escribe el correo del administrador de la empresa", 1, "form-control", 3, "blur"], ["id", "erroresCorreoAdministrador", 3, "control"], ["for", "totalEmpleados", 1, "control-label"], i18n_12, ["formControlName", "totalEmpleados", "id", "totalEmpleados", "type", "text", "maxlength", "10", "placeholder", "Escribe el total de empleados", 1, "form-control", 3, "blur"], ["id", "erroresTotal", 3, "control"], [1, "col-md-12", "col-xs-12", "omega"], ["color", "primary", "mat-button", "", "type", "submit", 1, "mat-button", "btns-primary", "align-r", 3, "disabled"], i18n_14, ["class", "error", 4, "ngIf"], [1, "error"]]; }, template: function RegistroEmpresaColombiaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistroEmpresaColombiaComponent_Template_form_ngSubmit_3_listener() { return ctx.enviarFormulario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function RegistroEmpresaColombiaComponent_Template_input_blur_9_listener() { return ctx.validarEnBlurYHacerTrim(ctx.nombre); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-mostrar-error-formularios", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function RegistroEmpresaColombiaComponent_Template_mat_select_blur_15_listener() { return ctx.validarEnBlur(ctx.tipoIdEmpresa); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "NIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "C\u00E9dula");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-mostrar-error-formularios", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](24, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function RegistroEmpresaColombiaComponent_Template_input_blur_25_listener() { return ctx.validarEnBlurYHacerTrim(ctx.identificacion); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-mostrar-error-formularios", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RegistroEmpresaColombiaComponent_ng_container_27_Template, 3, 2, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](31, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function RegistroEmpresaColombiaComponent_Template_input_blur_32_listener() { return ctx.validarEnBlurYHacerTrim(ctx.nombreAdministrador); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-mostrar-error-formularios", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](37, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function RegistroEmpresaColombiaComponent_Template_input_blur_38_listener() { return ctx.validarEnBlurYHacerTrim(ctx.correoAdministrador); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-mostrar-error-formularios", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](43, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function RegistroEmpresaColombiaComponent_Template_input_blur_44_listener() { return ctx.validarEnBlurYHacerTrim(ctx.totalEmpleados); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-mostrar-error-formularios", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](48, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formularioEmpresa);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.TipoIdentificacionEmpresa.NIT);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-test-id", "tipoIdEmpresaOpcionNIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.TipoIdentificacionEmpresa.CEDULA);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-test-id", "tipoIdEmpresaOpcionCEDULA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.tipoIdEmpresa);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-invalid", ctx.formularioEmpresa.errors && (ctx.formularioEmpresa.errors["invalidNIT"] || ctx.formularioEmpresa.errors["invalidCedula"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.identificacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identificacion.value && ctx.formularioEmpresa.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.nombreAdministrador);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.correoAdministrador);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.totalEmpleados);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formularioEmpresa.valid || ctx.cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "botonContinuar");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _shared_componentes_mostrar_error_formularios_mostrar_error_formularios_component__WEBPACK_IMPORTED_MODULE_10__["MostrarErrorFormulariosComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"]], styles: ["mat-select[_ngcontent-%COMP%] {\n  background: white;\n  padding: 13px 10px;\n  border-radius: 2px;\n  border: 1px solid #ccc;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #e62c17;\n  margin: 15px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy9jb21lcmNpYWwvY29tcG9uZW50ZXMvcmVnaXN0cm8tZW1wcmVzYS1jb2xvbWJpYS9yZWdpc3Ryby1lbXByZXNhLWNvbG9tYmlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxvcy9jb21lcmNpYWwvY29tcG9uZW50ZXMvcmVnaXN0cm8tZW1wcmVzYS1jb2xvbWJpYS9yZWdpc3Ryby1lbXByZXNhLWNvbG9tYmlhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNlbGVjdHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDEzcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuLmVycm9yIHtcbiAgY29sb3I6ICNlNjJjMTc7XG4gIG1hcmdpbjogMTVweCAwIDAgMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistroEmpresaColombiaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registro-empresa-colombia',
                templateUrl: './registro-empresa-colombia.component.html',
                styleUrls: ['./registro-empresa-colombia.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }, { type: _app_shared_servicios_custom_modal_service__WEBPACK_IMPORTED_MODULE_8__["CustomModalService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modulos-comercial-comercial-module-es2015.js.map