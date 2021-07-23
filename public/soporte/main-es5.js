(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+dUk":
    /*!***************************************************************************!*\
      !*** ./src/app/shared/componentes/custom-modal/custom-modal.component.ts ***!
      \***************************************************************************/

    /*! exports provided: CustomModalComponent */

    /***/
    function dUk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomModalComponent", function () {
        return CustomModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/modulos/dashboard/modelo/enums/CustomModalTypes.enum */
      "bti7");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      function CustomModalComponent_ng_container_1_ng_container_8_ng_container_1_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fila_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fila_r12);
        }
      }

      function CustomModalComponent_ng_container_1_ng_container_8_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomModalComponent_ng_container_1_ng_container_8_ng_container_1_p_2_Template, 2, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.dataModal.mensaje);
        }
      }

      function CustomModalComponent_ng_container_1_ng_container_8_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.dataModal.mensaje);
        }
      }

      function CustomModalComponent_ng_container_1_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomModalComponent_ng_container_1_ng_container_8_ng_container_1_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomModalComponent_ng_container_1_ng_container_8_ng_template_2_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.esArreglo(ctx_r5.dataModal.mensaje))("ngIfElse", _r9);
        }
      }

      function CustomModalComponent_ng_container_1_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CustomModalComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "error_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustomModalComponent_ng_container_1_ng_container_8_Template, 4, 2, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CustomModalComponent_ng_container_1_ng_template_9_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.dataModal.mensaje)("ngIfElse", _r6);
        }
      }

      function CustomModalComponent_ng_container_2_ng_container_8_ng_container_1_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fila_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fila_r20);
        }
      }

      function CustomModalComponent_ng_container_2_ng_container_8_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomModalComponent_ng_container_2_ng_container_8_ng_container_1_p_2_Template, 2, 1, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.dataModal.mensaje);
        }
      }

      function CustomModalComponent_ng_container_2_ng_container_8_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.dataModal.mensaje);
        }
      }

      function CustomModalComponent_ng_container_2_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomModalComponent_ng_container_2_ng_container_8_ng_container_1_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomModalComponent_ng_container_2_ng_container_8_ng_template_2_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.esArreglo(ctx_r13.dataModal.mensaje))("ngIfElse", _r17);
        }
      }

      function CustomModalComponent_ng_container_2_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CustomModalComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustomModalComponent_ng_container_2_ng_container_8_Template, 4, 2, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CustomModalComponent_ng_container_2_ng_template_9_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dataModal.mensaje)("ngIfElse", _r14);
        }
      }

      function CustomModalComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "info_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.dataModal.mensaje);
        }
      }

      function CustomModalComponent_ng_container_4_ng_container_8_ng_container_1_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fila_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fila_r28);
        }
      }

      function CustomModalComponent_ng_container_4_ng_container_8_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomModalComponent_ng_container_4_ng_container_8_ng_container_1_p_2_Template, 2, 1, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.dataModal.mensaje);
        }
      }

      function CustomModalComponent_ng_container_4_ng_container_8_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.dataModal.mensaje);
        }
      }

      function CustomModalComponent_ng_container_4_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomModalComponent_ng_container_4_ng_container_8_ng_container_1_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomModalComponent_ng_container_4_ng_container_8_ng_template_2_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.esArreglo(ctx_r21.dataModal.mensaje))("ngIfElse", _r25);
        }
      }

      function CustomModalComponent_ng_container_4_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ocurrio un error, intentalo de nuevo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CustomModalComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustomModalComponent_ng_container_4_ng_container_8_Template, 4, 2, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CustomModalComponent_ng_container_4_ng_template_9_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataModal.mensaje)("ngIfElse", _r22);
        }
      }

      function CustomModalComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Aceptar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.dataModal.mensaje);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        }
      }

      var CustomModalComponent = /*#__PURE__*/function () {
        function CustomModalComponent(data, dialogRef) {
          _classCallCheck(this, CustomModalComponent);

          this.data = data;
          this.dialogRef = dialogRef;
          this.customModalType = _app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_2__["CustomModalType"];
          this.dataModal = data;
        }

        _createClass(CustomModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }, {
          key: "esArreglo",
          value: function esArreglo(value) {
            return value instanceof Array;
          }
        }]);

        return CustomModalComponent;
      }();

      CustomModalComponent.ɵfac = function CustomModalComponent_Factory(t) {
        return new (t || CustomModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
      };

      CustomModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CustomModalComponent,
        selectors: [["app-custom-modal"]],
        decls: 6,
        vars: 6,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3899745494263946041$$APP_SHARED_COMPONENTES_CUSTOM_MODAL_CUSTOM_MODAL_COMPONENT_TS___1 = goog.getMsg("Por alguna raz\xF3n no se ha podido completar la operaci\xF3n. Int\xE9ntalo m\xE1s tarde.");
            i18n_0 = MSG_EXTERNAL_3899745494263946041$$APP_SHARED_COMPONENTES_CUSTOM_MODAL_CUSTOM_MODAL_COMPONENT_TS___1;
          } else {
            i18n_0 = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral([":\u241F1ceacaad699964f40fa8dc6ba27af90b9762fd51\u241F3899745494263946041:Por alguna raz\xF3n no se ha podido completar la operaci\xF3n. Int\xE9ntalo m\xE1s tarde."])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2900041338651564810$$APP_SHARED_COMPONENTES_CUSTOM_MODAL_CUSTOM_MODAL_COMPONENT_TS___3 = goog.getMsg("\xA1La operacion se ha completado exitosamente!");
            i18n_2 = MSG_EXTERNAL_2900041338651564810$$APP_SHARED_COMPONENTES_CUSTOM_MODAL_CUSTOM_MODAL_COMPONENT_TS___3;
          } else {
            i18n_2 = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([":\u241F3ab3aefab62cfb5bba9903cfd79dc47e426c5e26\u241F2900041338651564810:\xA1La operacion se ha completado exitosamente!"])));
          }

          return [[1, "custom-modal", 3, "ngClass"], [4, "ngIf"], [1, "modal-header"], ["id", "cerrarModal", "type", "button", "mat-dialog-close", ""], [1, "info-modal"], [4, "ngIf", "ngIfElse"], ["mensajeGenerico", ""], ["mensajeSimple", ""], [1, "lista"], ["id", "mensajeErroneo", 4, "ngFor", "ngForOf"], ["id", "mensajeErroneo"], i18n_0, ["type", "button", "mat-dialog-close", ""], ["id", "mensajeExitoso", 4, "ngFor", "ngForOf"], ["id", "mensajeExitoso"], i18n_2, ["id", "mensajeInformativo"], ["id", "mensajeAlerta", 4, "ngFor", "ngForOf"], ["id", "mensajeAlerta"], [1, "info-modal", "btns-modal"], ["mat-button", "", 1, "mat-button", "btns-primary", "dark-bg", 3, "mat-dialog-close"]];
        },
        template: function CustomModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomModalComponent_ng_container_1_Template, 11, 2, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomModalComponent_ng_container_2_Template, 11, 2, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomModalComponent_ng_container_3_Template, 10, 1, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomModalComponent_ng_container_4_Template, 11, 2, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomModalComponent_ng_container_5_Template, 15, 3, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.dataModal.cssClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataModal.tipo === ctx.customModalType.ERROR);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataModal.tipo === ctx.customModalType.SUCCESS);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataModal.tipo === ctx.customModalType.INFO);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataModal.tipo === ctx.customModalType.WARNING);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataModal.tipo === ctx.customModalType.CONFIRMATION);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        styles: [".custom-modal[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  height: 100%;\n}\n.custom-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n}\n.custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: center;\n  padding-bottom: 50px;\n}\n.custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  margin-bottom: 50px;\n}\n.custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  margin-bottom: 15px;\n  font-weight: 300;\n}\n.custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   .icon-check[_ngcontent-%COMP%] {\n  margin: 0 auto 35px;\n  display: block;\n}\n.custom-modal[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.custom-modal[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  padding: 8px 22px;\n  font-size: 16px;\n  font-weight: 400;\n  min-width: auto;\n  color: #fff;\n  border: 2px solid #fff;\n}\n.custom-modal[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: #c3c3c3;\n  outline: 0;\n}\n.custom-modal-error[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  border: none;\n  text-align: right;\n  padding: 10px 15px 0;\n}\n.custom-modal-error[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n}\n.custom-modal-error[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.custom-modal-error[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  width: auto;\n  height: auto;\n}\n.custom-modal-error[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .custom-modal-error[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .custom-modal-error[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.custom-modal-error[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.custom-modal-error[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.custom-modal-error[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .accept[_ngcontent-%COMP%] {\n  border: 2px solid #00CCA3;\n}\n.custom-modal-error[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .accept[_ngcontent-%COMP%]:hover {\n  border-color: #00ffcc;\n}\n.custom-modal-success[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  border: none;\n  text-align: right;\n  padding: 10px 15px 0;\n}\n.custom-modal-success[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n}\n.custom-modal-success[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n.custom-modal-success[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.custom-modal-success[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  width: auto;\n  height: auto;\n}\n.custom-modal-success[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .custom-modal-success[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .custom-modal-success[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.custom-modal-success[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: Bariol_Regular;\n}\n.custom-modal-success[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Bariol_Regular;\n}\n.custom-modal-success[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .accept[_ngcontent-%COMP%] {\n  border: 2px solid #00CCA3;\n}\n.custom-modal-success[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .accept[_ngcontent-%COMP%]:hover {\n  border-color: #00ffcc;\n}\n.custom-modal-information[_ngcontent-%COMP%] {\n  padding: 100px 50px;\n}\n.custom-modal-information[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  border: none;\n  text-align: right;\n  padding: 10px 15px;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n}\n.custom-modal-information[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n}\n.custom-modal-information[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.custom-modal-information[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  border: 2px solid #D0021B;\n}\n.custom-modal-information[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]:hover {\n  border-color: #ff001f;\n}\n.custom-modal-information[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .accept[_ngcontent-%COMP%] {\n  border: 2px solid #00CCA3;\n}\n.custom-modal-information[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .accept[_ngcontent-%COMP%]:hover {\n  border-color: #00ffcc;\n}\n.custom-modal-medium-information[_ngcontent-%COMP%] {\n  box-shadow: 10px 10px 5px #888888 !important;\n  background: #10ADCC;\n  border-radius: 0;\n  padding: 10px 10px 50px;\n}\n.custom-modal-medium-information[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  border: none;\n  padding: 10px 15px;\n}\n.custom-modal-medium-information[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  border: none;\n  text-align: center;\n  padding: 10px 50px 10px 50px;\n}\n.custom-modal-medium-information[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.custom-modal-medium-information[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #fff;\n  font-weight: 200;\n}\n.custom-modal-medium-information[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 200;\n  margin-bottom: 30px;\n}\n.custom-modal-medium-information[_ngcontent-%COMP%]   .close-modal[_ngcontent-%COMP%] {\n  background: url(/assets/images/close-modal.png) no-repeat;\n  height: 15px;\n  width: 15px;\n  display: block;\n  border: none;\n  float: right;\n}\n.custom-modal-medium-information[_ngcontent-%COMP%]   .close-modal[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n.custom-modal-warning[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  border: none;\n  text-align: right;\n  padding: 10px 15px 0;\n}\n.custom-modal-warning[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  \n  color: #5F259F;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n}\n.custom-modal-warning[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n.custom-modal-warning[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.custom-modal-warning[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  width: auto;\n  height: auto;\n}\n.custom-modal-warning[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .custom-modal-warning[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .custom-modal-warning[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #d32a2a;\n}\n.custom-modal-warning[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: Bariol_Regular;\n}\n.custom-modal-warning[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #000000;\n  \n  font-family: Bariol_Regular;\n}\n.custom-modal-warning[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .accept[_ngcontent-%COMP%] {\n  \n  background-color: #f44336;\n  border: 2px solid #9400D3;\n  color: #5F259F;\n}\n.custom-modal-warning[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .accept[_ngcontent-%COMP%]:hover {\n  border-color: #5F259F;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudGVzL2N1c3RvbS1tb2RhbC9jdXN0b20tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3N0eWxlcy92YXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQUY7QUFFSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUFOO0FBR0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFESjtBQUVNO0VBQ0Usa0JBQUE7QUFBUjtBQUVNO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUNRO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNWO0FBRU07RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFBUjtBQUdFO0VBQ0UsY0FBQTtBQURKO0FBRUk7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUFOO0FBQ007RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUFDUjtBQU1FO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFISjtBQUtNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUhSO0FBT0U7RUFDRSxrQkFBQTtBQUxKO0FBTUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKUjtBQU1JO0VBQ0ksV0FBQTtBQUpSO0FBTUk7RUFDSSxlQUFBO0FBSlI7QUFRSTtFQUNFLFdBQUE7QUFOTjtBQVFJO0VBQ0UseUJBQUE7QUFOTjtBQU9NO0VBQ0UscUJBQUE7QUFMUjtBQWFFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFWSjtBQVlNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVZSO0FBWU07RUFDRSxVQUFBO0FBVlI7QUFjRTtFQUNFLGtCQUFBO0FBWko7QUFhSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVhSO0FBYUk7RUFDSSxXQUFBO0FBWFI7QUFhSTtFQUNJLGVBQUE7RUFDQSwyQkN4R007QUQ2RmQ7QUFlSTtFQUNFLFdBQUE7RUFDQSwyQkM5R1E7QURpR2Q7QUFlSTtFQUNFLHlCQUFBO0FBYk47QUFjTTtFQUNFLHFCQUFBO0FBWlI7QUFrQkE7RUFDRSxtQkFBQTtBQWZGO0FBZ0JFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBZEo7QUFnQk07RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBZFI7QUFvQkk7RUFDRSxXQUFBO0FBbEJOO0FBb0JJO0VBQ0UseUJBQUE7QUFsQk47QUFtQk07RUFDRSxxQkFBQTtBQWpCUjtBQW9CSTtFQUNFLHlCQUFBO0FBbEJOO0FBbUJNO0VBQ0UscUJBQUE7QUFqQlI7QUF1QkE7RUFDRSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQXBCRjtBQXFCRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQW5CSjtBQXFCRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBbkJKO0FBb0JJO0VBQ0UsZUFBQTtBQWxCTjtBQW9CSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFsQk47QUFvQkk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWxCTjtBQXFCRTtFQUNFLHlEQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFuQko7QUFvQkk7RUFDRSxVQUFBO0FBbEJOO0FBeUJFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUF0Qko7QUF3Qk07RUFDRSxrQkFBQTtFQUNBLGNDN05PO0VEOE5QLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXRCUjtBQXdCTTtFQUNFLFVBQUE7QUF0QlI7QUEwQkU7RUFDRSxrQkFBQTtBQXhCSjtBQXlCSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXZCTjtBQXlCSTtFQUNFLGNDdk9JO0FEZ05WO0FBeUJJO0VBQ0UsZUFBQTtFQUNBLDJCQ3RPUTtBRCtNZDtBQTJCSTtFQUNFLGNBQUE7RUFDRCx5QkFBQTtFQUNDLDJCQzdPUTtBRG9OZDtBQTJCSTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNDaFFTO0FEdU9mO0FBMEJNO0VBQ0cscUJDbFFNO0VEbVFOLHlCQUFBO0FBeEJUIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudGVzL2N1c3RvbS1tb2RhbC9jdXN0b20tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifmFzc2V0cy9zdHlsZXMvdmFyXCI7XG4uY3VzdG9tLW1vZGFse1xuICBvcGFjaXR5OiAuOTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAubW9kYWwtaGVhZGVyIHtcbiAgICBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gIH1cbiAgLmluZm8tbW9kYWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgcHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgdWx7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgbGl7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5pY29uLWNoZWNre1xuICAgICAgICBtYXJnaW46IDAgYXV0byAzNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG4gIC5idG5zLW1vZGFsIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBidXR0b257XG4gICAgICBib3JkZXItcmFkaXVzOjMwcHg7XG4gICAgICBwYWRkaW5nOiA4cHggMjJweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICAmOmhvdmVye1xuICAgICAgICBib3JkZXItY29sb3I6ICNjM2MzYzM7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jdXN0b20tbW9kYWwtZXJyb3Ige1xuICAubW9kYWwtaGVhZGVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZzogMTBweCAxNXB4IDA7XG4gICAgYnV0dG9ue1xuICAgICAgbWF0LWljb257XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5pbmZvLW1vZGFse1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXQtaWNvbntcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICBwLCBsaSwgbWF0LWljb257XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgfVxuICAuYnRucy1tb2RhbCB7XG4gICAgYnV0dG9ue1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIC5hY2NlcHR7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBDQ0EzO1xuICAgICAgJjpob3ZlcntcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDBmZmNjO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi5jdXN0b20tbW9kYWwtc3VjY2VzcyB7XG4gIC5tb2RhbC1oZWFkZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMDtcbiAgICBidXR0b257XG4gICAgICBtYXQtaWNvbntcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgIH1cbiAgICAgICY6Zm9jdXN7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5pbmZvLW1vZGFse1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXQtaWNvbntcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICBwLCBsaSwgbWF0LWljb257XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnRTZWNvbmQtUjtcbiAgICB9XG4gIH1cbiAgLmJ0bnMtbW9kYWwge1xuICAgIGJ1dHRvbntcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250U2Vjb25kLVI7XG4gICAgfVxuICAgIC5hY2NlcHR7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBDQ0EzO1xuICAgICAgJjpob3ZlcntcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDBmZmNjO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY3VzdG9tLW1vZGFsLWluZm9ybWF0aW9ue1xuICBwYWRkaW5nOiAxMDBweCA1MHB4O1xuICAubW9kYWwtaGVhZGVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTVweDtcbiAgICB0b3A6IDE1cHg7XG4gICAgYnV0dG9ue1xuICAgICAgbWF0LWljb257XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuYnRucy1tb2RhbCB7XG4gICAgYnV0dG9ue1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIC5jYW5jZWx7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjRDAwMjFCO1xuICAgICAgJjpob3ZlcntcbiAgICAgICAgYm9yZGVyLWNvbG9yOiNmZjAwMWY7XG4gICAgICB9XG4gICAgfVxuICAgIC5hY2NlcHR7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBDQ0EzO1xuICAgICAgJjpob3ZlcntcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDBmZmNjO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY3VzdG9tLW1vZGFsLW1lZGl1bS1pbmZvcm1hdGlvbntcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAjODg4ODg4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICMxMEFEQ0M7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDEwcHggMTBweCA1MHB4O1xuICAubW9kYWwtaGVhZGVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICB9XG4gIC5tb2RhbC1ib2R5e1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCA1MHB4IDEwcHggNTBweDtcbiAgICBhe1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgfVxuICAgIHAge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG4gIH1cbiAgLmNsb3NlLW1vZGFse1xuICAgIGJhY2tncm91bmQ6dXJsKC9hc3NldHMvaW1hZ2VzL2Nsb3NlLW1vZGFsLnBuZykgbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgICY6Zm9jdXN7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgIH1cbiAgfVxufVxuXG5cbi5jdXN0b20tbW9kYWwtd2FybmluZyB7XG4gIC5tb2RhbC1oZWFkZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMDtcbiAgICBidXR0b257XG4gICAgICBtYXQtaWNvbntcbiAgICAgICAgLypjb2xvcjogIzAwMDAwMDsqL1xuICAgICAgICBjb2xvcjogJGNvbG9yUHVycGxlMjtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgfVxuICAgICAgJjpmb2N1c3tcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmluZm8tbW9kYWx7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hdC1pY29ue1xuICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICAgIHAsIGxpLCBtYXQtaWNvbntcbiAgICAgIGNvbG9yOiAkY29sb3JSZWQ7XG4gICAgfVxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250U2Vjb25kLVI7XG4gICAgfVxuICB9XG4gIC5idG5zLW1vZGFsIHtcbiAgICBidXR0b257XG4gICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgLyogY29sb3I6ICRjb2xvclB1cnBsZTI7Ki9cbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udFNlY29uZC1SO1xuICAgIH1cbiAgICAuYWNjZXB0e1xuICAgICAgLypib3JkZXI6IDJweCBzb2xpZCAjMDBDQ0EzOyovXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgIzk0MDBEMztcbiAgICAgIGNvbG9yOiAkY29sb3JQdXJwbGUyO1xuICAgICAgJjpob3ZlcntcbiAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yUHVycGxlMjtcbiAgICAgICAgIC8qYm9yZGVyLWNvbG9yOiAjMDBmZmNjOyovXG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiJGNvbG9yV2hpdGU6ICNmZmZmZmY7XG4kY29sb3JCbGFjazojMDAwO1xuJGNvbG9yR3JlZW46IzAwQkZCMztcbiRjb2xvckdyZWVuMjojMDBFNkRDO1xuJGNvbG9yR3JlZW4zOiM2NEY0RTY7XG4kY29sb3JQdXJwbGU6ICM5MjIzRTA7XG4kY29sb3JQdXJwbGUyOiAjNUYyNTlGO1xuJGNvbG9yUHVycGxlMzogI0E5NUVFQTtcbiRjb2xvckdyZXk6ICNGN0Y3Rjc7XG4kY29sb3JHcmV5MjA6ICNEOEQ4RDg7XG4kY29sb3JHcmV5NDA6IzlCOUI5QjtcbiRjb2xvckdyZXk4MDogIzM0MzQzNDtcbiRjb2xvckJsdWU6ICNGNkY5RkU7XG5cbiRjb2xvclJlZDojZDMyYTJhO1xuJGNvbG9yWWVsbG93OiAjZmZmZjQxO1xuJGNvbG9yWWVsbG93MjogI0UzRTgyOTtcblxuJGZvbnRQcmltYXJ5Okdlb21hbmlzdFdvcmQtQm9sZDtcbiRmb250U2Vjb25kLVI6QmFyaW9sX1JlZ3VsYXI7XG4kZm9udFNlY29uZC1JOkJhcmlvbF9SZWd1bGFyX0l0YWxpYztcbiRmb250U2Vjb25kLUI6QmFyaW9sX0JvbGQ7XG5cbiRjb2xvckdyZXkzOiAjYzNjOGQxO1xuJGNvbG9yR3JleTQ6cmdiYSgkY29sb3JHcmV5MjAsIDAuNTApO1xuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-custom-modal',
            templateUrl: './custom-modal.component.html',
            styleUrls: ['./custom-modal.component.scss']
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "/9Ug":
    /*!****************************************************!*\
      !*** ./src/app/core/guards/pais-ambiente.guard.ts ***!
      \****************************************************/

    /*! exports provided: PaisAmbienteGuard */

    /***/
    function Ug(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaisAmbienteGuard", function () {
        return PaisAmbienteGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var PaisAmbienteGuard = /*#__PURE__*/function () {
        function PaisAmbienteGuard(router) {
          _classCallCheck(this, PaisAmbienteGuard);

          this.router = router;
        }

        _createClass(PaisAmbienteGuard, [{
          key: "canLoad",
          value: function canLoad(route, segments) {
            var paisAmbiente = _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].envCountry;
            var paisesValidos = route.data.paises;

            if (paisesValidos.some(function (pais) {
              return pais === paisAmbiente;
            })) {
              return true;
            } else {
              this.router.navigateByUrl('pais-invalido');
              return false;
            }
          }
        }]);

        return PaisAmbienteGuard;
      }();

      PaisAmbienteGuard.ɵfac = function PaisAmbienteGuard_Factory(t) {
        return new (t || PaisAmbienteGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      PaisAmbienteGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PaisAmbienteGuard,
        factory: PaisAmbienteGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaisAmbienteGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/camilobellomelo/workspace/suam/webappoperaciones/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0NIx":
    /*!***************************************************!*\
      !*** ./src/app/modulos/usuario/usuario.module.ts ***!
      \***************************************************/

    /*! exports provided: UsuarioModule */

    /***/
    function NIx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsuarioModule", function () {
        return UsuarioModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _usuario_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./usuario.routing */
      "v0hW");
      /* harmony import */


      var _vistas_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./vistas/login/login.component */
      "8fuW");
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @material/material.module */
      "B8FV");
      /* harmony import */


      var _app_modulos_usuario_vistas_pais_invalido_pais_invalido_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @app/modulos/usuario/vistas/pais-invalido/pais-invalido.component */
      "uTA1");
      /* harmony import */


      var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @app/shared/shared.module */
      "PCNd");

      var UsuarioModule = function UsuarioModule() {
        _classCallCheck(this, UsuarioModule);
      };

      UsuarioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UsuarioModule
      });
      UsuarioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UsuarioModule_Factory(t) {
          return new (t || UsuarioModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _usuario_routing__WEBPACK_IMPORTED_MODULE_3__["UsuarioRoutingModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsuarioModule, {
          declarations: [_vistas_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _app_modulos_usuario_vistas_pais_invalido_pais_invalido_component__WEBPACK_IMPORTED_MODULE_6__["PaisInvalidoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _usuario_routing__WEBPACK_IMPORTED_MODULE_3__["UsuarioRoutingModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _usuario_routing__WEBPACK_IMPORTED_MODULE_3__["UsuarioRoutingModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
            declarations: [_vistas_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _app_modulos_usuario_vistas_pais_invalido_pais_invalido_component__WEBPACK_IMPORTED_MODULE_6__["PaisInvalidoComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "3t/0":
    /*!***********************************************!*\
      !*** ./src/app/core/guards/auth-rol.guard.ts ***!
      \***********************************************/

    /*! exports provided: AuthRolGuard */

    /***/
    function t0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRolGuard", function () {
        return AuthRolGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "tqRt");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _servicios_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../servicios/api.service */
      "k5QC");

      var AuthRolGuard = /*#__PURE__*/function () {
        function AuthRolGuard(store, router, apiService) {
          _classCallCheck(this, AuthRolGuard);

          this.store = store;
          this.router = router;
          this.apiService = apiService;
        }

        _createClass(AuthRolGuard, [{
          key: "canLoad",
          value: function canLoad(route, segments) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var rol;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      rol = route.data.rol;
                      return _context.abrupt("return", this.validarRol(rol));

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "validarRol",
          value: function validarRol(rolRequerido) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var sesion;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.apiService.getCurrentUser();

                    case 2:
                      sesion = _context2.sent;

                      if (!sesion) {
                        _context2.next = 5;
                        break;
                      }

                      return _context2.abrupt("return", this.store.select('usuario', 'rol').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rolUsuario) {
                        if (rolUsuario === rolRequerido) {
                          return true;
                        }

                        _this.router.navigate(['/login']);

                        return false;
                      })).toPromise());

                    case 5:
                      return _context2.abrupt("return", true);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return AuthRolGuard;
      }();

      AuthRolGuard.ɵfac = function AuthRolGuard_Factory(t) {
        return new (t || AuthRolGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_servicios_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]));
      };

      AuthRolGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthRolGuard,
        factory: AuthRolGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthRolGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _servicios_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "464K":
    /*!***********************************!*\
      !*** ./src/app/CombineEffects.ts ***!
      \***********************************/

    /*! exports provided: rootEffects */

    /***/
    function K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "rootEffects", function () {
        return rootEffects;
      });

      var rootEffects = [];
      /***/
    },

    /***/
    "4Ox3":
    /*!*******************************************************************************************!*\
      !*** ./src/app/shared/componentes/invitaciones-empresa/invitaciones-empresa.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: InvitacionesEmpresaComponent */

    /***/
    function Ox3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvitacionesEmpresaComponent", function () {
        return InvitacionesEmpresaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @app/modulos/dashboard/modelo/enums/CustomModalTypes.enum */
      "bti7");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _modal_actualizar_fecha_invitacion_empresa_modal_actualizar_fecha_invitacion_empresa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../modal-actualizar-fecha-invitacion-empresa/modal-actualizar-fecha-invitacion-empresa.component */
      "NrxG");
      /* harmony import */


      var _app_shared_servicios_custom_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @app/shared/servicios/custom-modal.service */
      "XD+r");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _app_shared_servicios_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @app/shared/servicios/shared.service */
      "IuWr");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/sort */
      "LUZP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function InvitacionesEmpresaComponent_tr_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvitacionesEmpresaComponent_tr_25_Template_a_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var invitacion_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.copiarLink(invitacion_r3.idCorto);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var invitacion_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", invitacion_r3.codigoPais, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", invitacion_r3.nombre, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, invitacion_r3.fechaCreacion, "yyyy/MM/dd HH:mm:ss"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Campa\xF1a:", invitacion_r3.idCorto, "");
        }
      }

      function InvitacionesEmpresaComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " La fecha de expiraci\xF3n se actualiz\xF3 exitosamente! :D ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvitacionesEmpresaComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " El enlace se ha copiado al portapapeles. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var InvitacionesEmpresaComponent = /*#__PURE__*/function () {
        function InvitacionesEmpresaComponent(customModalService, dialog, sharedService) {
          _classCallCheck(this, InvitacionesEmpresaComponent);

          this.customModalService = customModalService;
          this.dialog = dialog;
          this.sharedService = sharedService;
          this.actualizanCompleta = false;
          this.mensajeCopiado = false;
          this._length = 100;
          this._pageSize = 10;
          this._pageSizeOptions = [10, 25, 50, 100];
          this._pageIndex = 0;
          this._columnaSeleccionada = 'default';
          this._direction = 'default';
          this.filtroControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(301), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9\xC0-\xD6\xD8-\xF6\xF8-\u0178][a-zA-Z0-9\xC0-\xD6\xD8-\xF6\xF8-\u0178 ().&@,#-]{0,301}$")]);
        }

        _createClass(InvitacionesEmpresaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.consultarInvitaciones();
          }
        }, {
          key: "changePage",
          value: function changePage($event) {
            this._pageIndex = $event.pageIndex;
            this._pageSize = $event.pageSize;
            this.filtroControl.reset();
            this.consultarInvitaciones();
          }
        }, {
          key: "sortData",
          value: function sortData($event) {
            if ($event.direction) {
              this._columnaSeleccionada = $event.active;
              this._direction = $event.direction;
            } else {
              this._columnaSeleccionada = 'default';
              this._direction = 'default';
            }

            this.filtroControl.reset();
            this.consultarInvitaciones();
          }
        }, {
          key: "abrirModalActualizarFechaExpiracion",
          value: function abrirModalActualizarFechaExpiracion(uuidInvitacion, nombreEmpresa) {
            var _this2 = this;

            this.dialog.open(_modal_actualizar_fecha_invitacion_empresa_modal_actualizar_fecha_invitacion_empresa_component__WEBPACK_IMPORTED_MODULE_4__["ModalActualizarFechaInvitacionEmpresaComponent"], {
              data: {
                uuidInvitacion: uuidInvitacion,
                nombreEmpresa: nombreEmpresa
              },
              panelClass: 'medium-screen-dialog'
            }).afterClosed().subscribe(function (nuevoComentario) {
              if (nuevoComentario) {
                _this2.actualizanCompleta = true;
                setTimeout(function () {
                  _this2.actualizanCompleta = false;
                }, 1500);
              }
            });
          }
        }, {
          key: "consultarInvitaciones",
          value: function consultarInvitaciones() {
            var _this3 = this;

            var offset = this._pageIndex * this._pageSize;
            var valorAFiltrar = this.filtroControl.value && this.filtroControl.valid ? this.filtroControl.value : '';
            this.sharedService.consultarInvitacionesEmpresa(valorAFiltrar, offset, this._pageSize, this._columnaSeleccionada, this._direction).subscribe(function (invEmpresaSinContrato) {
              _this3.invitacionesEmpresa = invEmpresaSinContrato.invitacionesEmpresasSinContrato;
              _this3.invitacionesEmpresaFiltradas = _this3.invitacionesEmpresa;
              _this3._length = invEmpresaSinContrato.totalInvitaciones;
            }, function (err) {
              return _this3.customModalService.abrirModal(_app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_1__["CustomModalType"].ERROR);
            });
          }
        }, {
          key: "copiarLink",
          value: function copiarLink(campania) {
            var _this4 = this;

            var origen = 'M';
            var selBox = document.createElement('textarea');
            selBox.style.position = 'fixed';
            selBox.style.left = '0';
            selBox.style.top = '0';
            selBox.style.opacity = '0';
            var enlace = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].sitioDescargas + '?o=' + origen + '&c=' + campania;
            selBox.value = enlace;
            document.body.appendChild(selBox);
            selBox.focus();
            selBox.select();
            document.execCommand('copy');
            document.body.removeChild(selBox);
            this.mensajeCopiado = true;
            window.open(enlace, 'scrollbars=yes');
            setTimeout(function () {
              _this4.mensajeCopiado = false;
            }, 2000);
          }
        }, {
          key: "onKey",
          value: function onKey(e) {
            !this.filtroControl.value && this.consultarInvitaciones();
          }
        }]);

        return InvitacionesEmpresaComponent;
      }();

      InvitacionesEmpresaComponent.ɵfac = function InvitacionesEmpresaComponent_Factory(t) {
        return new (t || InvitacionesEmpresaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_servicios_custom_modal_service__WEBPACK_IMPORTED_MODULE_5__["CustomModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_servicios_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]));
      };

      InvitacionesEmpresaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InvitacionesEmpresaComponent,
        selectors: [["app-invitaciones-empresa"]],
        decls: 28,
        vars: 8,
        consts: [[1, "row"], [1, "col-md-12"], [1, "input-group"], ["type", "text", "matInput", "", "name", "search", "placeholder", "Nombre de empresa", 1, "input-search__style", 3, "formControl", "keyup"], ["mat-icon-button", "", "color", "primary", "type", "button", 1, "custom-btnicon__bg", 3, "disabled", "click"], [1, "paginator"], [3, "length", "pageSize", "pageSizeOptions", "page"], [1, "table-responsive"], ["matSort", "", 3, "matSortChange"], ["mat-sort-header", "codigoPais"], ["mat-sort-header", "nombre"], ["mat-sort-header", "fechaCreacion"], ["mat-sort-header", "id"], [4, "ngFor", "ngForOf"], ["class", "proceso-mensaje__exito", 4, "ngIf"], ["class", "mensaje-copiado__exito", 4, "ngIf"], [2, "cursor", "pointer", 3, "click"], [1, "proceso-mensaje__exito"], [1, "mensaje-copiado__exito"]],
        template: function InvitacionesEmpresaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invitaciones de empresas sin contrato");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function InvitacionesEmpresaComponent_Template_input_keyup_5_listener($event) {
              return ctx.onKey($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvitacionesEmpresaComponent_Template_button_click_6_listener() {
              return ctx.filtroControl.value && ctx.consultarInvitaciones();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-paginator", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function InvitacionesEmpresaComponent_Template_mat_paginator_page_11_listener($event) {
              return ctx.changePage($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function InvitacionesEmpresaComponent_Template_table_matSortChange_14_listener($event) {
              return ctx.sortData($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pa\xEDs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Empresa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Fecha de creaci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "URL Campa\xF1a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, InvitacionesEmpresaComponent_tr_25_Template, 11, 7, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, InvitacionesEmpresaComponent_div_26_Template, 3, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, InvitacionesEmpresaComponent_div_27_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.filtroControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.filtroControl.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx._length)("pageSize", ctx._pageSize)("pageSizeOptions", ctx._pageSizeOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.invitacionesEmpresaFiltradas);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actualizanCompleta);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mensajeCopiado);
          }
        },
        directives: [_angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSort"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]],
        styles: [".custom-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.custom-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover, mat-dialog-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(0.9);\n  transform-origin: center;\n}\n.custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin: 0;\n  font-family: GeomanistWord-Bold;\n  margin-bottom: 10px;\n}\n.custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: Bariol_Bold;\n}\n.custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: Bariol_Bold;\n}\n.custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: Bariol_Regular;\n  font-size: 18px;\n}\n.custom-modal[_ngcontent-%COMP%]   .mat-dialog-actions[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .mat-dialog-actions[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 30px 0px;\n  margin: 0;\n  margin-bottom: 0;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%] {\n  width: 844px !important;\n  max-width: 844px !important;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(0.9);\n  transform-origin: center;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin: 0;\n  font-family: GeomanistWord-Bold;\n  margin-bottom: 10px;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: Bariol_Bold;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: Bariol_Bold;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: Bariol_Regular;\n  font-size: 18px;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .mat-dialog-actions[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 30px 0px;\n  margin: 0;\n  margin-bottom: 0;\n}\n.modal-ahorro[_ngcontent-%COMP%] {\n  padding-bottom: 40px;\n  height: 100%;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  margin-bottom: 50px;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #ffffff;\n  font-size: 16px;\n  margin-bottom: 15px;\n  font-weight: 300;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   .icon-check[_ngcontent-%COMP%] {\n  margin: 0 auto 35px;\n  display: block;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: auto;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  border: 2px solid #D0021B;\n  margin-right: 20px;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]:hover {\n  border-color: #ff001f;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .accept[_ngcontent-%COMP%] {\n  border: 2px solid #00CCA3;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .accept[_ngcontent-%COMP%]:hover {\n  border-color: #00ffcc;\n}\n.modal-success[_ngcontent-%COMP%] {\n  background: #04BF94;\n}\n.modal-alert[_ngcontent-%COMP%] {\n  background: #E27E30;\n  opacity: 0.9;\n  padding: 20px;\n  height: 100%;\n}\n.modal-warning[_ngcontent-%COMP%] {\n  background: #e2d249;\n  opacity: 0.9;\n  padding: 20px;\n  height: 100%;\n}\n  .mat-dialog-container .modal-body {\n  padding: 0 60px;\n  text-align: center;\n}\n  .mat-dialog-container .modal-body h1,   .mat-dialog-container .modal-body h2 {\n  font-family: GeomanistWord-Bold;\n  color: #343434;\n  font-size: 32px;\n  margin-top: 0;\n}\n  .mat-dialog-container .modal-body p {\n  color: #343434;\n  font-family: Bariol_Regular;\n  font-size: 18px;\n}\n  .mat-dialog-container .modal-body textarea {\n  border: none;\n  border-radius: 4px;\n  color: #343434;\n}\n  .mat-dialog-container .modal-header,   .mat-dialog-container .modal-footer {\n  border: none;\n}\n  .mat-dialog-container .modal-header .close {\n  margin-right: 15px;\n  color: #343434;\n  opacity: 1;\n}\n  .mat-dialog-container .modal-header .close .mat-icon {\n  text-shadow: none;\n  font-size: 26px;\n}\n  .mat-dialog-container .modal-header .close:focus {\n  outline: 0;\n}\n  .mat-dialog-container .modal-footer .btns-footer {\n  text-align: center;\n  margin-bottom: 30px;\n}\n  .mat-dialog-container .modal-footer .btns-footer button {\n  float: none;\n}\n  .mat-dialog-container button.mat-button {\n  line-height: normal;\n}\n  .mat-dialog-container img {\n  margin: 0 auto 30px;\n  display: block;\n}\n  .mat-dialog-container p {\n  text-align: center;\n}\n  .btns-rectangular-white {\n  box-shadow: inherit;\n}\n  .btns-rectangular-white:hover {\n  background: rgba(255, 255, 255, 0.21);\n}\n  .modal {\n  padding-left: 15px;\n  padding-top: 50px;\n}\n  .modal .modal-dialog {\n  width: 95%;\n}\n  .full-screen-dialog {\n  max-width: none !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n  .custom-modal {\n  height: 100%;\n}\n  .custom-modal .info-modal {\n  padding: 0 64px;\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n  .custom-modal .info-modal ul {\n  list-style: none;\n  margin: 0;\n  margin-bottom: 50px;\n}\n  .custom-modal .info-modal ul li {\n  text-align: center;\n  font-size: 16px;\n  margin-bottom: 15px;\n  font-weight: 300;\n}\n  .custom-modal .info-modal .icon-check {\n  margin: 0 auto 35px;\n  display: block;\n}\n  .custom-modal .btns-modal {\n  margin: 0 auto;\n}\n  .custom-modal .btns-modal button {\n  border-radius: 30px;\n  padding: 8px 25px;\n  font-size: 16px;\n  font-weight: 300;\n  min-width: auto;\n}\n  .custom-modal .btns-modal button:hover,   .custom-modal .btns-modal button:focus {\n  outline: 0;\n}\n  .custom-modal .mat-dialog-actions .mat-button + .mat-button,   .custom-modal .mat-dialog-actions .mat-button + .mat-raised-button,   .custom-modal .mat-dialog-actions .mat-raised-button + .mat-button,   .custom-modal .mat-dialog-actions .mat-raised-button + .mat-raised-button {\n  margin-left: inherit;\n}\n  .custom-modal-warning {\n  padding-bottom: 40px;\n}\n  .custom-modal-warning .modal-header {\n  border: none;\n  text-align: right;\n}\n  .custom-modal-warning .modal-header button mat-icon {\n  color: #292929;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n}\n  .custom-modal-warning .info-modal {\n  padding: 0 0 10px;\n  text-align: center;\n}\n  .custom-modal-warning .info-modal p,   .custom-modal-warning .info-modal li,   .custom-modal-warning .info-modal mat-icon {\n  color: #292929;\n}\n  .custom-modal-warning .info-modal mat-icon {\n  font-size: 70px;\n  height: 100px;\n  width: 100px;\n}\n  .custom-modal-warning .btns-modal button {\n  color: #292929;\n}\n  .custom-modal-warning .btns-modal .cancel {\n  border: 2px solid #D0021B;\n}\n  .custom-modal-warning .btns-modal .cancel:hover {\n  border-color: #ff001f;\n}\n  .custom-modal-warning .btns-modal .accept {\n  background-color: #f44336;\n  border: 2px solid #00CCA3;\n}\n  .custom-modal-warning .btns-modal .accept:hover {\n  border-color: #00ffcc;\n}\n  .custom-modal-success .modal-header {\n  border: none;\n  text-align: right;\n}\n  .custom-modal-success .modal-header button mat-icon {\n  color: #fff;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n}\n  .custom-modal-success .info-modal {\n  text-align: center;\n}\n  .custom-modal-success .info-modal mat-icon {\n  font-size: 70px;\n  height: 100px;\n  width: 100px;\n}\n  .custom-modal-success .info-modal p,   .custom-modal-success .info-modal li,   .custom-modal-success .info-modal mat-icon {\n  color: #fff;\n}\n  .custom-modal-success .info-modal p {\n  font-size: 18px;\n}\n  .custom-modal-success .btns-modal button {\n  color: #fff;\n}\n  .custom-modal-success .btns-modal .accept {\n  border: 2px solid #00CCA3;\n}\n  .custom-modal-success .btns-modal .accept:hover {\n  border-color: #00ffcc;\n}\n  .custom-modal-success .modal-header {\n  border: none;\n  text-align: right;\n}\n  .custom-modal-success .modal-header button mat-icon {\n  color: #fff;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n}\n  .custom-modal-success .info-modal {\n  text-align: center;\n}\n  .custom-modal-success .info-modal mat-icon {\n  font-size: 70px;\n  height: 100px;\n  width: 100px;\n}\n  .custom-modal-success .info-modal p,   .custom-modal-success .info-modal li,   .custom-modal-success .info-modal mat-icon {\n  color: #fff;\n}\n  .custom-modal-success .info-modal p {\n  font-size: 18px;\n}\n  .custom-modal-success .btns-modal button {\n  color: #fff;\n}\n  .custom-modal-success .btns-modal .accept {\n  border: 2px solid #00CCA3;\n}\n  .custom-modal-success .btns-modal .accept:hover {\n  border-color: #00ffcc;\n}\n  .custom-modal-error .modal-header {\n  border: none;\n  text-align: right;\n}\n  .custom-modal-error .modal-header button mat-icon {\n  color: #343434;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n}\n  .custom-modal-error .info-modal p,   .custom-modal-error .info-modal li,   .custom-modal-error .info-modal h3 {\n  color: #343434;\n}\n  .custom-modal-error .info-modal p {\n  font-size: 18px;\n}\n  .custom-modal-error .btns-modal button {\n  color: #fff;\n}\n  .custom-modal-error .btns-modal .accept {\n  border: 2px solid #00CCA3;\n}\n  .custom-modal-error .btns-modal .accept:hover {\n  border-color: #00ffcc;\n}\n  .modal-vertical-btns .btns-modal .mat-button {\n  display: block;\n  margin: 0 auto 10px;\n  text-align: center;\n}\n  .modal-vertical-btns .btns-modal .mat-button .mat-button-focus-overlay {\n  background: none;\n}\n  .modal-vertical-btns .btns-modal .mat-button:focus {\n  outline: 0;\n}\n  .modal-vertical-btns .btns-modal .link-white span {\n  color: #fff;\n  text-align: center;\n}\n  .custom-modal-medium-information {\n  box-shadow: 10px 10px 5px #888888 !important;\n  background: #00BFB3;\n  border-radius: 0;\n  padding: 10px 10px 50px;\n}\n  .custom-modal-medium-information .modal-header {\n  border: none;\n}\n  .custom-modal-medium-information .modal-body {\n  border: none;\n  text-align: center;\n  padding: 10px 50px 10px 50px;\n}\n  .custom-modal-medium-information .modal-body a {\n  cursor: pointer;\n}\n  .custom-modal-medium-information .modal-body h2 {\n  font-size: 18px;\n  color: #fff;\n  font-weight: 400;\n}\n  .custom-modal-medium-information .modal-body p {\n  color: #fff;\n  font-weight: 300;\n  font-size: 16px;\n}\n  .custom-modal-medium-information .close-modal {\n  background: url(/assets/images/close-modal.png) no-repeat;\n  height: 15px;\n  width: 15px;\n  display: block;\n  border: none;\n  float: right;\n}\n  .custom-modal-medium-information .close-modal:focus {\n  outline: 0;\n}\n  .modal-color-aqua mat-dialog-container {\n  background: #00BFB3;\n}\n  .modal-color-yellow mat-dialog-container {\n  background: #ffff41;\n}\n  mat-form-field .mat-form-field-underline .mat-form-field-ripple {\n  background-color: #9223E0;\n}\n  .mat-form-field-invalid .mat-form-field-underline .mat-form-field-ripple {\n  background-color: #d32a2a;\n}\n@font-face {\n  font-family: GeomanistWord-Bold;\n  src: url(\"/assets/fonts/GeomanistWord-Bold.eot\"), url(\"/assets/fonts/GeomanistWord-Bold.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/GeomanistWord-Bold.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: Bariol_Regular;\n  src: url(\"/assets/fonts/bariol_regular.eot\"), url(\"/assets/fonts/bariol_regular.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/bariol_regular.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: Bariol_Regular_Italic;\n  src: url(\"/assets/fonts/bariol_regular_italic.eot\"), url(\"/assets/fonts/bariol_regular_italic.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/bariol_regular_italic.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: Bariol_Bold;\n  src: url(\"/assets/fonts/bariol_bold.eot\"), url(\"/assets/fonts/bariol_bold.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/bariol_bold.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@-webkit-keyframes entrada {\n  0% {\n    transform: translateY(25px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n@keyframes entrada {\n  0% {\n    transform: translateY(25px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n.fade-b-t[_ngcontent-%COMP%] {\n  -webkit-animation: entrada 0.5s ease;\n          animation: entrada 0.5s ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0;\n}\n\nbutton.mat-button[_ngcontent-%COMP%] {\n  font-family: inherit;\n  line-height: normal;\n}\n.mat-button.btns-primary[_ngcontent-%COMP%] {\n  border: solid 0px transparent;\n  border-radius: 4px;\n  padding: 14px 28px;\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: normal;\n  font-family: Bariol_Regular;\n  min-width: 225px;\n  background: #9223E0;\n  transition: all 0.4s;\n  overflow: hidden;\n}\n.mat-button.btns-primary[_ngcontent-%COMP%]:focus, .mat-button.btns-primary[_ngcontent-%COMP%]:visited {\n  outline: 0;\n}\n.mat-button.btns-primary[_ngcontent-%COMP%]:hover   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  opacity: 0;\n  background: none;\n}\n.mat-button.btns-primary[_ngcontent-%COMP%]:hover {\n  background: #5F259F;\n}\n.mat-button.btns-primary[disabled][disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #9B9B9B;\n  background: #F7F7F7;\n}\n.mat-button.btns-secondary[_ngcontent-%COMP%] {\n  border: solid 2px #9223E0;\n  border-radius: 25px;\n  padding: 8px 16px;\n  color: #9223E0;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: Bariol_Bold;\n  min-width: 225px;\n  background: transparent;\n  transition: all 0.4s;\n  overflow: hidden;\n  min-width: 146px;\n}\n.mat-button.btns-secondary[_ngcontent-%COMP%]:focus, .mat-button.btns-secondary[_ngcontent-%COMP%]:visited {\n  outline: 0;\n}\n.mat-button.btns-secondary[_ngcontent-%COMP%]:hover   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  opacity: 0;\n  background: none;\n}\n.mat-button.btns-secondary[_ngcontent-%COMP%]:hover, .mat-button.btns-secondary[disabled][disabled][_ngcontent-%COMP%]:hover {\n  background: #9223E0;\n  color: #ffffff;\n}\n.mat-button.btns-secondary[disabled][disabled][_ngcontent-%COMP%], .mat-button.btns-secondary.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #9223E0;\n}\nspan.mat-button.btns-secondary[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n.mat-button.btns-secondary.btns-sec-red[_ngcontent-%COMP%] {\n  border-color: #d32a2a;\n  color: #d32a2a;\n}\n.mat-button.btns-secondary.btns-sec-red[_ngcontent-%COMP%]:hover {\n  background: #d32a2a;\n  color: #ffffff;\n}\n.mat-button.clear-bg[_ngcontent-%COMP%]:hover {\n  background: #9223E0;\n}\n.mat-button.clear-bg[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.mat-button.dark-bg[_ngcontent-%COMP%] {\n  background: #00BFB3;\n}\n.mat-button.dark-bg[_ngcontent-%COMP%]:hover {\n  background: #00a69b;\n}\n.mat-button.dark-bg[_ngcontent-%COMP%]:disabled {\n  background: #64F4E6;\n}\n.mat-button.dark-bg[disabled][disabled][_ngcontent-%COMP%] {\n  opacity: 1;\n  color: #9B9B9B;\n  background: #F7F7F7;\n}\n.mat-button.btns-secondary.dark-bg[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n  color: #ffffff;\n  background: transparent;\n  padding: 10px 39px;\n}\n.mat-button.btns-secondary.dark-bg[_ngcontent-%COMP%]:hover {\n  border-color: #ffffff;\n  background: #ffffff;\n  color: #00BFB3;\n}\n.mat-button.btns-secondary.dark-bg[_ngcontent-%COMP%]:disabled {\n  background: #64F4E6;\n}\n.mat-button.btns-secondary.dark-bg[disabled][disabled][_ngcontent-%COMP%] {\n  opacity: 1;\n}\narticle[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]:hover   .mat-button-focus-overlay[_ngcontent-%COMP%], article[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]:focus   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-family: GeomanistWord-Bold;\n}\np[_ngcontent-%COMP%], a[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], li[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: Bariol_Regular;\n}\nstrong[_ngcontent-%COMP%], b[_ngcontent-%COMP%], .link[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  font-family: Bariol_Bold;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: Bariol_Regular;\n}\n\n.custom-btnicon__bg[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);\n}\n.input-search__style[_ngcontent-%COMP%] {\n  height: 41px;\n  padding-left: 7px;\n  width: 160px;\n  background: #ccc;\n  margin-right: 10px;\n  border-radius: 12px;\n  color: #9223E0;\n  transition: 1s;\n}\n.input-search__style[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border: 1px solid #ccc;\n}\n.btn-ver-mas[_ngcontent-%COMP%] {\n  background: #00BFB3;\n  color: #ffffff;\n}\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  height: 48px;\n  align-items: center;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #C8C8C8;\n  padding: 10px 15px;\n  color: #241656;\n  font-size: 16px;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n  text-align: center;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4) {\n  text-align: center;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #C8C8C8;\n  padding: 8px 15px;\n  vertical-align: middle;\n  font-size: 14px;\n  color: #000000;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #000000;\n  margin: 0;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #9B9B9B;\n  font-size: 13px;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  text-align: center;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n  text-align: center;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #22659e;\n  text-decoration: none;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .high[_ngcontent-%COMP%] {\n  color: #D0021B;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .medium[_ngcontent-%COMP%] {\n  color: #ED9354;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .low[_ngcontent-%COMP%] {\n  color: #00CCA3;\n}\n  mat-paginator .mat-paginator-container {\n  background: #F4F4F4;\n}\n  mat-paginator .mat-paginator-page-size-label,   mat-paginator .mat-paginator-range-label {\n  color: #000;\n  font-size: 16px;\n  font-family: Bariol_Regular;\n}\n  mat-paginator .mat-form-field {\n  height: 30px;\n}\n  .see-more-button .mat-button-focus-overlay {\n  display: none;\n}\n  .see-more-button span {\n  color: #00BFB3;\n  font-size: 16px;\n}\n  .see-more-button span:hover {\n  color: #00E6DC;\n}\n.proceso-mensaje__exito[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 80px;\n  right: 40px;\n  padding: 8px 20px;\n  border-radius: 12px;\n  background: #00BFB3;\n  -webkit-animation-name: myAnimation;\n          animation-name: myAnimation;\n  -webkit-animation-duration: 1000ms;\n          animation-duration: 1000ms;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.proceso-mensaje__exito[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: #fff;\n  font-weight: 600;\n}\n.mensaje-copiado__exito[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 80px;\n  right: 40px;\n  padding: 8px 20px;\n  border-radius: 12px;\n  background: #00BFB3;\n  -webkit-animation-name: myAnimation;\n          animation-name: myAnimation;\n  -webkit-animation-duration: 1000ms;\n          animation-duration: 1000ms;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.mensaje-copiado__exito[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: #fff;\n  font-weight: 600;\n}\n@-webkit-keyframes myAnimation {\n  0% {\n    opacity: 0;\n    transform: scale(1.7);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.7);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes myAnimation {\n  0% {\n    opacity: 0;\n    transform: scale(1.7);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.7);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL21vZGFscy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50ZXMvaW52aXRhY2lvbmVzLWVtcHJlc2EvaW52aXRhY2lvbmVzLWVtcHJlc2EuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3N0eWxlcy92YXIuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL21peGluLnNjc3MiLCJzcmMvYXNzZXRzL3N0eWxlcy9tYXRlcmlhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0UsMEJBQUE7QUNITjtBREtNO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtBQ0hSO0FEU0k7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUNQTjtBRFVJO0VBQ0UsZUFBQTtFQUNBLHdCRUhRO0FETGQ7QURXSTtFQUNFLGVBQUE7RUFDQSx3QkVSUTtBRERkO0FEWUk7RUFDRSwyQkVkUTtFRmVSLGVBQUE7QUNWTjtBRGNFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ1pKO0FEZ0JBO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtBQ2JGO0FEaUJNO0VBQ0UsMEJBQUE7QUNmUjtBRGlCUTtFQUNFLHFCQUFBO0VBQ0Esd0JBQUE7QUNmVjtBRHFCTTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsK0JFaERLO0VGaURMLG1CQUFBO0FDbkJSO0FEc0JNO0VBQ0UsZUFBQTtFQUNBLHdCRW5ETTtBRCtCZDtBRHVCTTtFQUNFLGVBQUE7RUFDQSx3QkV4RE07QURtQ2Q7QUR3Qk07RUFDRSwyQkU5RE07RUYrRE4sZUFBQTtBQ3RCUjtBRDBCSTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUN4Qk47QUQ2QkE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUMxQkY7QUQ2Qkk7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQzNCTjtBRDZCTTtFQUNFLGtCQUFBO0VBQ0EsY0UzR0s7RUY0R0wsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUMzQlI7QUQrQkk7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUM3Qk47QURpQ0U7RUFDRSxjQUFBO0FDL0JKO0FEaUNJO0VBQ0UsZUFBQTtBQy9CTjtBRGlDTTtFQUNFLFVBQUE7QUMvQlI7QURtQ0k7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FDakNOO0FEbUNNO0VBQ0UscUJBQUE7QUNqQ1I7QURxQ0k7RUFDRSx5QkFBQTtBQ25DTjtBRHFDTTtFQUNFLHFCQUFBO0FDbkNSO0FEeUNBO0VBQ0UsbUJBQUE7QUN0Q0Y7QUR5Q0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ3RDRjtBRHlDQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDdENGO0FEMkNJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDeENOO0FEMENNO0VBQ0UsK0JFN0pLO0VGOEpMLGNFcktNO0VGc0tOLGVBQUE7RUFDQSxhQUFBO0FDeENSO0FEMkNNO0VBQ0UsY0UzS007RUY0S04sMkJFcEtNO0VGcUtOLGVBQUE7QUN6Q1I7QUQ0Q007RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRW5MTTtBRHlJZDtBRDhDSTtFQUNFLFlBQUE7QUM1Q047QUQrQ0k7RUFDRSxrQkFBQTtFQUNBLGNFN0xRO0VGOExSLFVBQUE7QUM3Q047QUQrQ007RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUM3Q1I7QURnRE07RUFDRSxVQUFBO0FDOUNSO0FEbURNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ2pEUjtBRG1EUTtFQUNFLFdBQUE7QUNqRFY7QURzREk7RUFDRSxtQkFBQTtBQ3BETjtBRHVESTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ3JETjtBRHdESTtFQUNFLGtCQUFBO0FDdEROO0FEMERFO0VBQ0UsbUJBQUE7QUN4REo7QUQwREk7RUFDRSxxQ0FBQTtBQ3hETjtBRDRERTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUMxREo7QUQ0REk7RUFDRSxVQUFBO0FDMUROO0FEOERFO0VBQ0UsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQzVESjtBRCtERTtFQUNFLFlBQUE7QUM3REo7QUQrREk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQzdETjtBRCtETTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDN0RSO0FEK0RRO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQzdEVjtBRGlFTTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQy9EUjtBRG1FSTtFQUNFLGNBQUE7QUNqRU47QURtRU07RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2pFUjtBRG1FUTtFQUNFLFVBQUE7QUNqRVY7QURzRUk7RUFDRSxvQkFBQTtBQ3BFTjtBRHdFRTtFQUNFLG9CQUFBO0FDdEVKO0FEd0VJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDdEVOO0FEeUVRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ3ZFVjtBRDRFSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUMxRU47QUQ0RU07RUFDRSxjQUFBO0FDMUVSO0FENkVNO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDM0VSO0FEZ0ZNO0VBQ0UsY0FBQTtBQzlFUjtBRGlGTTtFQUNFLHlCQUFBO0FDL0VSO0FEaUZRO0VBQ0UscUJBQUE7QUMvRVY7QURtRk07RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0FDakZSO0FEbUZRO0VBQ0UscUJBQUE7QUNqRlY7QUR3Rkk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUN0Rk47QUR5RlE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDdkZWO0FENEZJO0VBQ0Usa0JBQUE7QUMxRk47QUQ0Rk07RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUMxRlI7QUQ2Rk07RUFDRSxXQUFBO0FDM0ZSO0FEOEZNO0VBQ0UsZUFBQTtBQzVGUjtBRGlHTTtFQUNFLFdBQUE7QUMvRlI7QURrR007RUFDRSx5QkFBQTtBQ2hHUjtBRGtHUTtFQUNFLHFCQUFBO0FDaEdWO0FEdUdJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDckdOO0FEd0dRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ3RHVjtBRDJHSTtFQUNFLGtCQUFBO0FDekdOO0FEMkdNO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDekdSO0FENEdNO0VBQ0UsV0FBQTtBQzFHUjtBRDZHTTtFQUNFLGVBQUE7QUMzR1I7QURnSE07RUFDRSxXQUFBO0FDOUdSO0FEaUhNO0VBQ0UseUJBQUE7QUMvR1I7QURpSFE7RUFDRSxxQkFBQTtBQy9HVjtBRHNISTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ3BITjtBRHVIUTtFQUNFLGNFM2NJO0VGNGNKLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ3JIVjtBRDJITTtFQUNFLGNFcmRNO0FENFZkO0FENEhNO0VBQ0UsZUFBQTtBQzFIUjtBRCtITTtFQUNFLFdBQUE7QUM3SFI7QURnSU07RUFDRSx5QkFBQTtBQzlIUjtBRGdJUTtFQUNFLHFCQUFBO0FDOUhWO0FEc0lNO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNwSVI7QURzSVE7RUFDRSxnQkFBQTtBQ3BJVjtBRHVJUTtFQUNFLFVBQUE7QUNySVY7QUQwSVE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUN4SVY7QUQ4SUU7RUFDRSw0Q0FBQTtFQUNBLG1CRWhoQlE7RUZpaEJSLGdCQUFBO0VBQ0EsdUJBQUE7QUM1SUo7QUQ4SUk7RUFDRSxZQUFBO0FDNUlOO0FEK0lJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUM3SU47QUQrSU07RUFDRSxlQUFBO0FDN0lSO0FEZ0pNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQzlJUjtBRGlKTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUMvSVI7QURtSkk7RUFDRSx5REFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDakpOO0FEbUpNO0VBQ0UsVUFBQTtBQ2pKUjtBRHVKSTtFQUNFLG1CRTlqQk07QUR5YVo7QUQwSkk7RUFDRSxtQkV2akJRO0FEK1pkO0FENEpFO0VBQ0UseUJFdGtCVTtBRDRhZDtBRDZKRTtFQUNFLHlCRWprQk07QURzYVY7QUVuYkU7RUFDRSwrQkFTRjtFQVJFLDBMQUFBO0VBR0EsbUJBT0Y7RUFORSxrQkFPRjtBRjZhRjtBRTFiRTtFQUNFLDJCQWVGO0VBZEUsOEtBQUE7RUFHQSxtQkFhRjtFQVpFLGtCQWFGO0FGNmFGO0FFaGNFO0VBQ0Usa0NBcUJGO0VBcEJFLG1NQUFBO0VBR0EsbUJBbUJGO0VBbEJFLGtCQW1CRjtBRjZhRjtBRXRjRTtFQUNFLHdCQTBCZTtFQXpCZixxS0FBQTtFQUdBLG1CQXNCd0Q7RUFyQnhELGtCQXFCZ0U7QUZpYnBFO0FFMVZBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUY0VkY7RUUxVkE7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUY0VkY7QUFDRjtBRXBXQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VGNFZGO0VFMVZBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VGNFZGO0FBQ0Y7QUV6VkE7RUFDRSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLFVBQUE7QUYyVkY7QUd2ZEEsVUFBQTtBQUNBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtBSDBkRjtBR3hkQTtFRCtCRSw2QkFBQTtFQUNBLGtCQy9COEI7RURnQzlCLGtCQUFBO0VBQ0EsY0Q1Q1c7RUM2Q1gsZUNsQ3NEO0VEbUN0RCxtQkNuQzJFO0VEb0MzRSwyQkQ1Qlk7RUM2QlosZ0JDckNtRjtFRHNDbkYsbUJENUNZO0VDNkNaLG9CQUFBO0VBQ0EsZ0JBQUE7QUY2YkY7QUU1YkU7RUFFRSxVQUFBO0FGNmJKO0FFMWJJO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FGNGJOO0FHM2VFO0VBQ0UsbUJGUFc7QURvZmY7QUczZUU7RUFDRSxZQUFBO0VBQ0EsY0ZQUztFRVFULG1CRlZRO0FEdWZaO0FHMWVBO0VEb0JFLHlCQUFBO0VBQ0EsbUJDcEJnQztFRHFCaEMsaUJBQUE7RUFDQSxjRHZDWTtFQ3dDWixlQ3ZCeUQ7RUR3QnpELGlCQ3hCOEU7RUR5QjlFLHdCRDFCWTtFQzJCWixnQkMxQm9GO0VEMkJwRix1QkMzQjJGO0VENEIzRixvQkFBQTtFQUNBLGdCQUFBO0VDNUJBLGdCQUFBO0FIdWZGO0FFMWRFO0VBRUUsVUFBQTtBRjJkSjtBRXhkSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBRjBkTjtBRzdmRTtFQUNFLG1CRnBCVTtFRXFCVixjRjFCUztBRHloQmI7QUc3ZkU7RUFFRSxZQUFBO0VBQ0EsY0YxQlU7QUR3aEJkO0FHMWZBO0VBQ0UsZUFBQTtBSDZmRjtBRzFmQTtFQUNFLHFCRjFCUTtFRTJCUixjRjNCUTtBRHdoQlY7QUc1ZkU7RUFDRSxtQkY3Qk07RUU4Qk4sY0Y1Q1M7QUQwaUJiO0FHMWZFO0VBQ0UsbUJGNUNVO0FEeWlCZDtBRzNmRTtFQUNFLFlBQUE7QUg2Zko7QUcxZkE7RUFDRSxtQkZ0RFU7QURtakJaO0FHNWZFO0VBQ0UsbUJBQUE7QUg4Zko7QUc1ZkU7RUFDRSxtQkZ6RFM7QUR1akJiO0FHNWZFO0VBQ0UsVUFBQTtFQUNBLGNGdkRTO0VFd0RULG1CRjFEUTtBRHdqQlo7QUcxZkE7RUFDRSxxQkZ2RVc7RUV3RVgsY0Z4RVc7RUV5RVgsdUJBQUE7RUFDQSxrQkFBQTtBSDZmRjtBRzVmRTtFQUNFLHFCRjVFUztFRTZFVCxtQkY3RVM7RUU4RVQsY0Y1RVE7QUQwa0JaO0FHNWZFO0VBQ0UsbUJGN0VTO0FEMmtCYjtBRzVmRTtFQUNFLFVBQUE7QUg4Zko7QUd4Zkc7RUFDRSx1QkFBQTtBSDJmTDtBR3ZmQSxjQUFBO0FBRUEsb0JBQUE7QUFDQTtFQUNFLCtCRmpGVztBRDBrQmI7QUd0ZkE7RUFDRSwyQkZwRlk7QUQ2a0JkO0FHdGZBO0VBQ0Usd0JGdEZZO0FEK2tCZDtBR3RmQTtFQUNFLDJCRjVGWTtBRHFsQmQ7QUd0ZkEsMkJBQUE7QUgvR0E7RUFDSSxtQkFBQTtFQUdBLCtDQUFBO0FBeW1CSjtBQXRtQkE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0NaVTtFRGFWLGNBQUE7QUF5bUJKO0FBeG1CSTtFQUNJLG1CQ3BCSztFRHFCTCxzQkFBQTtBQTBtQlI7QUF0bUJBO0VBQ0ksbUJDeEJRO0VEeUJSLGNDM0JTO0FEb29CYjtBQXRtQkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBeW1CSjtBQXRtQkE7RUFDSSxXQUFBO0FBeW1CSjtBQXZtQlE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUF5bUJaO0FBeG1CWTtFQUNJLGtCQUFBO0FBMG1CaEI7QUF4bUJZO0VBQ0ksa0JBQUE7QUEwbUJoQjtBQXBtQlE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXNtQlo7QUFybUJZO0VBQ0ksY0FBQTtFQUNBLFNBQUE7QUF1bUJoQjtBQXJtQlk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQXVtQmhCO0FBcm1CWTtFQUNJLGtCQUFBO0FBdW1CaEI7QUFybUJZO0VBQ0ksa0JBQUE7QUF1bUJoQjtBQXJtQlk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUF1bUJoQjtBQXBtQlE7RUFDSSxjQUFBO0FBc21CWjtBQXBtQlE7RUFDSSxjQUFBO0FBc21CWjtBQXBtQlE7RUFDSSxjQUFBO0FBc21CWjtBQTlsQlE7RUFDSSxtQkFBQTtBQWltQlo7QUEvbEJROztFQUVJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMkJDbEZFO0FEbXJCZDtBQS9sQlE7RUFDSSxZQUFBO0FBaW1CWjtBQTdsQlE7RUFDSSxhQUFBO0FBK2xCWjtBQTdsQlE7RUFDSSxjQzlHQTtFRCtHQSxlQUFBO0FBK2xCWjtBQTlsQlk7RUFDSSxjQ2hISDtBRGd0QmI7QUF6bEJBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQzlIUTtFRHFJUixtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUFzbEJKO0FBOWxCSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFnbUJSO0FBeGxCQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkNoSlE7RUR1SlIsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FBcWxCSjtBQTdsQkk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBK2xCUjtBQXRsQkE7RUFDSTtJQUNFLFVBQUE7SUFDQSxxQkFBQTtFQXlsQko7RUF2bEJFO0lBQ0UsWUFBQTtJQUNBLHFCQUFBO0VBeWxCSjtFQXZsQkU7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUF5bEJKO0FBQ0Y7QUFybUJBO0VBQ0k7SUFDRSxVQUFBO0lBQ0EscUJBQUE7RUF5bEJKO0VBdmxCRTtJQUNFLFlBQUE7SUFDQSxxQkFBQTtFQXlsQko7RUF2bEJFO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VBeWxCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudGVzL2ludml0YWNpb25lcy1lbXByZXNhL2ludml0YWNpb25lcy1lbXByZXNhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhclwiO1xuXG4uY3VzdG9tLW1vZGFsLCBtYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIC5tb2RhbC1oZWFkZXIge1xuICAgIC5tYXQtaWNvbiB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGl2Lm1vZGFsLWJvZHksIC5pbmZvLW1vZGFsIHtcbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LWZhbWlseTogJGZvbnRQcmltYXJ5O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICBmb250LWZhbWlseTogJGZvbnRTZWNvbmQtQjtcbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICBmb250LWZhbWlseTogJGZvbnRTZWNvbmQtQjtcbiAgICB9XG5cbiAgICBwLCBzdHJvbmcsIGEsIGJ1dHRvbiB7XG4gICAgICBmb250LWZhbWlseTogJGZvbnRTZWNvbmQtUjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gIH1cblxuICAubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuXG4ubW9kYWwtZWRpdGFyLXNlc2lvbmVzIHtcbiAgd2lkdGg6IDg0NHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogODQ0cHggIWltcG9ydGFudDtcblxuICBtYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICAubWF0LWljb24ge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXYubW9kYWwtYm9keSwgLmluZm8tbW9kYWwge1xuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250UHJpbWFyeTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udFNlY29uZC1CO1xuICAgICAgfVxuXG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250U2Vjb25kLUI7XG4gICAgICB9XG5cbiAgICAgIHAsIHN0cm9uZywgYSwgYnV0dG9uIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250U2Vjb25kLVI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgcGFkZGluZzogMzBweCAwcHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxufVxuXG4ubW9kYWwtYWhvcnJvIHtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGhlaWdodDogMTAwJTtcblxuICAuaW5mby1tb2RhbCB7XG4gICAgdWwge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogJGNvbG9yV2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaWNvbi1jaGVjayB7XG4gICAgICBtYXJnaW46IDAgYXV0byAzNXB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgLmJ0bnMtbW9kYWwge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIG1pbi13aWR0aDogYXV0bztcblxuICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhbmNlbCB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjRDAwMjFCO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmYwMDFmO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hY2NlcHQge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwQ0NBMztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwZmZjYztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm1vZGFsLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiAjMDRCRjk0O1xufVxuXG4ubW9kYWwtYWxlcnQge1xuICBiYWNrZ3JvdW5kOiAjRTI3RTMwO1xuICBvcGFjaXR5OiAuOTtcbiAgcGFkZGluZzogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubW9kYWwtd2FybmluZyB7XG4gIGJhY2tncm91bmQ6ICNlMmQyNDk7XG4gIG9wYWNpdHk6IC45O1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbjo6bmctZGVlcCB7XG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgLm1vZGFsLWJvZHkge1xuICAgICAgcGFkZGluZzogMCA2MHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICBoMSwgaDIge1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnRQcmltYXJ5O1xuICAgICAgICBjb2xvcjogJGNvbG9yR3JleTgwO1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogJGNvbG9yR3JleTgwO1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnRTZWNvbmQtUjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuXG4gICAgICB0ZXh0YXJlYSB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBjb2xvcjogJGNvbG9yR3JleTgwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tb2RhbC1oZWFkZXIsIC5tb2RhbC1mb290ZXIge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuICAgIC5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgIGNvbG9yOiAkY29sb3JHcmV5ODA7XG4gICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAubWF0LWljb24ge1xuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgfVxuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9kYWwtZm9vdGVyIHtcbiAgICAgIC5idG5zLWZvb3RlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYnV0dG9uLm1hdC1idXR0b24ge1xuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMzBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5idG5zLXJlY3Rhbmd1bGFyLXdoaXRlIHtcbiAgICBib3gtc2hhZG93OiBpbmhlcml0O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjEpO1xuICAgIH1cbiAgfVxuXG4gIC5tb2RhbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuXG4gICAgLm1vZGFsLWRpYWxvZyB7XG4gICAgICB3aWR0aDogOTUlO1xuICAgIH1cbiAgfVxuXG4gIC5mdWxsLXNjcmVlbi1kaWFsb2cge1xuICAgIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5jdXN0b20tbW9kYWwge1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC5pbmZvLW1vZGFsIHtcbiAgICAgIHBhZGRpbmc6IDAgNjRweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaWNvbi1jaGVjayB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDM1cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG5zLW1vZGFsIHtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMjVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBtaW4td2lkdGg6IGF1dG87XG5cbiAgICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZGlhbG9nLWFjdGlvbnMgLm1hdC1idXR0b24gKyAubWF0LWJ1dHRvbiwgLm1hdC1kaWFsb2ctYWN0aW9ucyAubWF0LWJ1dHRvbiArIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1kaWFsb2ctYWN0aW9ucyAubWF0LXJhaXNlZC1idXR0b24gKyAubWF0LWJ1dHRvbiwgLm1hdC1kaWFsb2ctYWN0aW9ucyAubWF0LXJhaXNlZC1idXR0b24gKyAubWF0LXJhaXNlZC1idXR0b24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IGluaGVyaXQ7XG4gICAgfVxuICB9XG5cbiAgLmN1c3RvbS1tb2RhbC13YXJuaW5nIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcblxuICAgIC5tb2RhbC1oZWFkZXIge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICBjb2xvcjogIzI5MjkyOTtcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmluZm8tbW9kYWwge1xuICAgICAgcGFkZGluZzogMCAwIDEwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIHAsIGxpLCBtYXQtaWNvbiB7XG4gICAgICAgIGNvbG9yOiAjMjkyOTI5O1xuICAgICAgfVxuXG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG5zLW1vZGFsIHtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiAjMjkyOTI5O1xuICAgICAgfVxuXG4gICAgICAuY2FuY2VsIHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0QwMDIxQjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNmZjAwMWY7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFjY2VwdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMENDQTM7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDBmZmNjO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmN1c3RvbS1tb2RhbC1zdWNjZXNzIHtcbiAgICAubW9kYWwtaGVhZGVyIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5pbmZvLW1vZGFsIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgbWF0LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDcwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIH1cblxuICAgICAgcCwgbGksIG1hdC1pY29uIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bnMtbW9kYWwge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIC5hY2NlcHQge1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBDQ0EzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwZmZjYztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jdXN0b20tbW9kYWwtc3VjY2VzcyB7XG4gICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mby1tb2RhbCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICB9XG5cbiAgICAgIHAsIGxpLCBtYXQtaWNvbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG5zLW1vZGFsIHtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuXG4gICAgICAuYWNjZXB0IHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwQ0NBMztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMGZmY2M7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY3VzdG9tLW1vZGFsLWVycm9yIHtcbiAgICAubW9kYWwtaGVhZGVyIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgY29sb3I6ICRjb2xvckdyZXk4MDtcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmluZm8tbW9kYWwge1xuICAgICAgcCwgbGksIGgzIHtcbiAgICAgICAgY29sb3I6ICRjb2xvckdyZXk4MDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRucy1tb2RhbCB7XG4gICAgICBidXR0b24ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cblxuICAgICAgLmFjY2VwdCB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMENDQTM7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDBmZmNjO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1vZGFsLXZlcnRpY2FsLWJ0bnMge1xuICAgIC5idG5zLW1vZGFsIHtcbiAgICAgIC5tYXQtYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubGluay13aGl0ZSB7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jdXN0b20tbW9kYWwtbWVkaXVtLWluZm9ybWF0aW9uIHtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4ICM4ODg4ODggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JHcmVlbjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCA1MHB4O1xuXG4gICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICBib3JkZXI6IG5vbmVcbiAgICB9XG5cbiAgICAubW9kYWwtYm9keSB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxMHB4IDUwcHggMTBweCA1MHB4O1xuXG4gICAgICBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jbG9zZS1tb2RhbCB7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvY2xvc2UtbW9kYWwucG5nKSBuby1yZXBlYXQ7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubW9kYWwtY29sb3ItYXF1YSB7XG4gICAgbWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogJGNvbG9yR3JlZW47XG4gICAgfVxuICB9XG5cbiAgLm1vZGFsLWNvbG9yLXllbGxvdyB7XG4gICAgbWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogJGNvbG9yWWVsbG93O1xuICAgIH1cbiAgfVxuXG4gIG1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yUHVycGxlO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JSZWQ7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJ+YXNzZXRzL3N0eWxlcy9tYXRlcmlhbC5zY3NzXCI7XG5cblxuLmN1c3RvbS1idG5pY29uX19iZyB7XG4gICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNnB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA2cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG59XG5cbi5pbnB1dC1zZWFyY2hfX3N0eWxle1xuICAgIGhlaWdodDogNDFweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgYmFja2dyb3VuZDogI2NjYztcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBjb2xvcjogJGNvbG9yUHVycGxlO1xuICAgIHRyYW5zaXRpb246IDFzO1xuICAgICY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3JXaGl0ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICB9XG59XG5cbi5idG4tdmVyLW1hc3tcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JHcmVlbjtcbiAgICBjb2xvcjogJGNvbG9yV2hpdGU7XG5cbn1cbi5pbnB1dC1ncm91cHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG50YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0aGVhZHtcbiAgICAgICAgdGh7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQzhDOEM4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICAgICAgY29sb3I6ICMyNDE2NTY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAmOm50aC1jaGlsZCgzKXtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOm50aC1jaGlsZCg0KXtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGJvZHl7XG5cbiAgICAgICAgdGR7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQzhDOEM4O1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5QjlCOUI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpudGgtY2hpbGQoNCl7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpudGgtY2hpbGQoNSl7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYTpob3ZlcntcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIyNjU5ZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmhpZ2h7XG4gICAgICAgICAgICBjb2xvcjogI0QwMDIxQjtcbiAgICAgICAgfVxuICAgICAgICAubWVkaXVte1xuICAgICAgICAgICAgY29sb3I6ICNFRDkzNTQ7XG4gICAgICAgIH1cbiAgICAgICAgLmxvd3tcbiAgICAgICAgICAgIGNvbG9yOiAjMDBDQ0EzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbjo6bmctZGVlcHtcbiAgICBtYXQtcGFnaW5hdG9ye1xuICAgICAgICAubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y0RjRGNDtcbiAgICAgICAgfVxuICAgICAgICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUtbGFiZWwsXG4gICAgICAgIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWxhYmVse1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnRTZWNvbmQtUjtcbiAgICAgICAgfVxuICAgICAgICAubWF0LWZvcm0tZmllbGR7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNlZS1tb3JlLWJ1dHRvbiB7XG4gICAgICAgIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBzcGFue1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvckdyZWVuO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yR3JlZW4yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5wcm9jZXNvLW1lbnNhamVfX2V4aXRve1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDgwcHg7XG4gICAgcmlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JHcmVlbjtcbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgfVxuICAgIGFuaW1hdGlvbi1uYW1lOiBteUFuaW1hdGlvbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1lbnNhamUtY29waWFkb19fZXhpdG97XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogODBweDtcbiAgICByaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICRjb2xvckdyZWVuO1xuICAgIHAge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICB9XG4gICAgYW5pbWF0aW9uLW5hbWU6IG15QW5pbWF0aW9uO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuXG59XG5cbkBrZXlmcmFtZXMgbXlBbmltYXRpb257XG4gICAgMCV7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjcpO1xuICAgIH1cbiAgICA1MCV7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gIH1cbiIsIiRjb2xvcldoaXRlOiAjZmZmZmZmO1xuJGNvbG9yQmxhY2s6IzAwMDtcbiRjb2xvckdyZWVuOiMwMEJGQjM7XG4kY29sb3JHcmVlbjI6IzAwRTZEQztcbiRjb2xvckdyZWVuMzojNjRGNEU2O1xuJGNvbG9yUHVycGxlOiAjOTIyM0UwO1xuJGNvbG9yUHVycGxlMjogIzVGMjU5RjtcbiRjb2xvclB1cnBsZTM6ICNBOTVFRUE7XG4kY29sb3JHcmV5OiAjRjdGN0Y3O1xuJGNvbG9yR3JleTIwOiAjRDhEOEQ4O1xuJGNvbG9yR3JleTQwOiM5QjlCOUI7XG4kY29sb3JHcmV5ODA6ICMzNDM0MzQ7XG4kY29sb3JCbHVlOiAjRjZGOUZFO1xuXG4kY29sb3JSZWQ6I2QzMmEyYTtcbiRjb2xvclllbGxvdzogI2ZmZmY0MTtcbiRjb2xvclllbGxvdzI6ICNFM0U4Mjk7XG5cbiRmb250UHJpbWFyeTpHZW9tYW5pc3RXb3JkLUJvbGQ7XG4kZm9udFNlY29uZC1SOkJhcmlvbF9SZWd1bGFyO1xuJGZvbnRTZWNvbmQtSTpCYXJpb2xfUmVndWxhcl9JdGFsaWM7XG4kZm9udFNlY29uZC1COkJhcmlvbF9Cb2xkO1xuXG4kY29sb3JHcmV5MzogI2MzYzhkMTtcbiRjb2xvckdyZXk0OnJnYmEoJGNvbG9yR3JleTIwLCAwLjUwKTtcbiIsIkBtaXhpbiBmb250LWZhY2UoJG5hbWUsICRzcmMsICR3ZWlnaHQsICRzdHlsZSkge1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJG5hbWU7XG4gICAgc3JjOiB1cmwocXVvdGUoJHNyYyArICcuZW90JykpLFxuICAgICAgdXJsKHF1b3RlKCRzcmMgKyAnLmVvdD9pZWZpeCcpKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG4gICAgICB1cmwoJHNyYysnLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogJHdlaWdodDtcbiAgICBmb250LXN0eWxlOiAkc3R5bGU7XG4gIH1cbn1cbkBpbmNsdWRlIGZvbnQtZmFjZShcbiAgR2VvbWFuaXN0V29yZC1Cb2xkLFxuICAvIGFzc2V0cy9mb250cy9HZW9tYW5pc3RXb3JkLUJvbGQsXG4gIG5vcm1hbCxcbiAgbm9ybWFsXG4pO1xuQGluY2x1ZGUgZm9udC1mYWNlKFxuICBCYXJpb2xfUmVndWxhcixcbiAgLyBhc3NldHMvZm9udHMvYmFyaW9sX3JlZ3VsYXIsXG4gIG5vcm1hbCxcbiAgbm9ybWFsXG4pO1xuQGluY2x1ZGUgZm9udC1mYWNlKFxuICBCYXJpb2xfUmVndWxhcl9JdGFsaWMsXG4gIC8gYXNzZXRzL2ZvbnRzL2JhcmlvbF9yZWd1bGFyX2l0YWxpYyxcbiAgbm9ybWFsLFxuICBpdGFsaWNcbik7XG5AaW5jbHVkZSBmb250LWZhY2UoQmFyaW9sX0JvbGQsIC8gYXNzZXRzL2ZvbnRzL2JhcmlvbF9ib2xkLCBub3JtYWwsIG5vcm1hbCk7XG5cbkBtaXhpbiBidG5zKFxuICAkYm9yZGVyLFxuICAkcmFkaXVzLFxuICAkcGFkZGluZyxcbiAgJGNvbG9yLFxuICAkZm9udC1zaXplLFxuICAkZmFtaWx5LFxuICAkd2VpZ2h0LFxuICAkd2lkdGgsXG4gICRiZ1xuKSB7XG4gIGJvcmRlcjogc29saWQgJGJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgcGFkZGluZzogJHBhZGRpbmcgJHBhZGRpbmcgKiAyO1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xuICBmb250LWZhbWlseTogJGZhbWlseTtcbiAgbWluLXdpZHRoOiAkd2lkdGg7XG4gIGJhY2tncm91bmQ6ICRiZztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gICY6Zm9jdXMsXG4gICY6dmlzaXRlZCB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbGluaygkY29sb3IsICRzaXplLWZvbnQsICR3ZWlnaHQpIHtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC1zaXplOiAkc2l6ZS1mb250O1xuICBmb250LXdlaWdodDogJHdlaWdodDtcbn1cblxuQG1peGluIGljb25zKCRiZ2ksICR3aWR0aCwgJGhlaWdodCwgJG1hcmdpbikge1xuICBiYWNrZ3JvdW5kOiAkYmdpO1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAkbWFyZ2luO1xufVxuXG5AbWl4aW4gbWVkaWEoJGNvbnN1bHRhKSB7XG4gICRtZWRpYS14eHM6ICcobWF4LXdpZHRoIDogMzIwcHgpJzsgLy8gaVBob25lIFJldGluYVxuICAkbWVkaWEteHM6ICcobWF4LXdpZHRoIDogNDgwcHgpJzsgLy8gVGVsZWZvbm9zXG4gICRtZWRpYS1zbTogJyhtYXgtd2lkdGg6IDc2OHB4KSc7IC8vIFRhYmxldHNcbiAgJG1lZGlhLW1kOiAnKG1heC13aWR0aDogOTkycHgpJzsgLy8gRXNjcml0b3Jpb3NcbiAgJG1lZGlhLWxnOiAnKG1heC13aWR0aDogMTIwMHB4KSc7IC8vIFJlc29sdWNpb25lcyBncmFuZGVzXG4gICRtZWRpYS14bGc6ICcobWF4LXdpZHRoOiAxNjAwcHgpJzsgLy8gUmVzb2x1Y2lvbmVzIGV4dHJhZ3JhbmRlc1xuXG4gIEBpZiAkY29uc3VsdGEgPT0geHhzIHtcbiAgICBAbWVkaWEgI3skbWVkaWEteHhzfSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbiAgQGlmICRjb25zdWx0YSA9PSB4cyB7XG4gICAgQG1lZGlhICN7JG1lZGlhLXhzfSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJGNvbnN1bHRhID09IHNtIHtcbiAgICBAbWVkaWEgI3skbWVkaWEtc219IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkY29uc3VsdGEgPT0gbWQge1xuICAgIEBtZWRpYSAjeyRtZWRpYS1tZH0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRjb25zdWx0YSA9PSBsZyB7XG4gICAgQG1lZGlhICN7JG1lZGlhLWxnfSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJGNvbnN1bHRhID09IHhsZyB7XG4gICAgQG1lZGlhICN7JG1lZGlhLXhsZ30ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgZW50cmFkYSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjVweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5mYWRlLWItdCB7XG4gIGFuaW1hdGlvbjogZW50cmFkYSAwLjVzIGVhc2U7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBvcGFjaXR5OiAwO1xufVxuIiwiQGltcG9ydCBcInZhclwiO1xuQGltcG9ydCBcIm1vZGFsc1wiO1xuQGltcG9ydCBcIm1peGluXCI7XG5AaW1wb3J0IFwibWVkaWFxdWVyaWVzXCI7XG5cbi8qQnV0dG9ucyovXG5idXR0b24ubWF0LWJ1dHRvbntcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG4ubWF0LWJ1dHRvbi5idG5zLXByaW1hcnkge1xuICBAaW5jbHVkZSBidG5zKDBweCB0cmFuc3BhcmVudCw0cHgsIDE0cHgsICRjb2xvcldoaXRlLCAyMHB4LCAkZm9udFNlY29uZC1SLCBub3JtYWwsIDIyNXB4LCAkY29sb3JQdXJwbGUpO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JQdXJwbGUyO1xuICB9XG4gICZbZGlzYWJsZWRdW2Rpc2FibGVkXXtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY29sb3I6ICRjb2xvckdyZXk0MDtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JHcmV5O1xuICB9XG59XG4ubWF0LWJ1dHRvbi5idG5zLXNlY29uZGFyeSB7XG4gIEBpbmNsdWRlIGJ0bnMoMnB4ICRjb2xvclB1cnBsZSwgMjVweCwgOHB4LCAkY29sb3JQdXJwbGUsIDE2cHgsICRmb250U2Vjb25kLUIsIGJvbGQsIDIyNXB4LCB0cmFuc3BhcmVudCk7XG4gIG1pbi13aWR0aDogMTQ2cHg7XG4gICY6aG92ZXIsJltkaXNhYmxlZF1bZGlzYWJsZWRdOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JQdXJwbGU7XG4gICAgY29sb3I6ICRjb2xvcldoaXRlO1xuICB9XG4gICZbZGlzYWJsZWRdW2Rpc2FibGVkXSwgXG4gICYuZGlzYWJsZWR7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGNvbG9yOiAkY29sb3JQdXJwbGU7XG4gIH1cbn1cblxuc3Bhbi5tYXQtYnV0dG9uLmJ0bnMtc2Vjb25kYXJ5IHtcbiAgcGFkZGluZzowIDE2cHg7XG59XG5cbi5tYXQtYnV0dG9uLmJ0bnMtc2Vjb25kYXJ5LmJ0bnMtc2VjLXJlZCB7XG4gIGJvcmRlci1jb2xvcjogJGNvbG9yUmVkO1xuICBjb2xvcjogJGNvbG9yUmVkO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JSZWQ7XG4gICAgY29sb3I6ICRjb2xvcldoaXRlO1xuICB9XG59XG4ubWF0LWJ1dHRvbi5jbGVhci1iZ3tcbiAgJjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JQdXJwbGU7XG4gIH1cbiAgJjpkaXNhYmxlZHtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxufVxuLm1hdC1idXR0b24uZGFyay1iZ3tcbiAgYmFja2dyb3VuZDokY29sb3JHcmVlbjtcbiAgJjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJGNvbG9yR3JlZW4sNSUpO1xuICB9XG4gICY6ZGlzYWJsZWR7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yR3JlZW4zO1xuICB9XG4gICZbZGlzYWJsZWRdW2Rpc2FibGVkXXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAkY29sb3JHcmV5NDA7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yR3JleTtcbiAgfVxufVxuXG4ubWF0LWJ1dHRvbi5idG5zLXNlY29uZGFyeS5kYXJrLWJnIHtcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3JXaGl0ZTtcbiAgY29sb3I6ICRjb2xvcldoaXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTBweCAzOXB4O1xuICAmOmhvdmVye1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yV2hpdGU7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yV2hpdGU7XG4gICAgY29sb3I6ICRjb2xvckdyZWVuO1xuICB9XG4gICY6ZGlzYWJsZWR7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yR3JlZW4zO1xuICB9XG4gICZbZGlzYWJsZWRdW2Rpc2FibGVkXXtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5hcnRpY2xlIHtcbiAgJiAuYWRkLWJ1dHRvbjpob3ZlciwgXG4gICYgLmFkZC1idXR0b246Zm9jdXMge1xuICAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtcbiAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICB9XG59IFxufVxuLypFbmQgYnV0dG9ucyovXG5cbi8qZXN0aWxvcyBnZW5lcmFsZXMqL1xuaDEsaDIsaDMsaDQsaDUsaDYge1xuICBmb250LWZhbWlseTogJGZvbnRQcmltYXJ5O1xufVxuXG5wLCBhLCB1bCBsaSwgb2wsIGxpLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udFNlY29uZC1SO1xufVxuXG5zdHJvbmcsIGIsIC5saW5rLCB0aCB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udFNlY29uZC1CO1xufVxuXG50YWJsZSB0ZCB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udFNlY29uZC1SO1xufVxuXG4vKmZpbiBkZSBlc3RpbG9zIGdlbmVyYWxlcyovIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvitacionesEmpresaComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-invitaciones-empresa',
            templateUrl: './invitaciones-empresa.component.html',
            styleUrls: ['./invitaciones-empresa.component.scss']
          }]
        }], function () {
          return [{
            type: _app_shared_servicios_custom_modal_service__WEBPACK_IMPORTED_MODULE_5__["CustomModalService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: _app_shared_servicios_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "559a":
    /*!******************************************************************************!*\
      !*** ./src/app/modulos/coaching/state-management/actions/coaching.action.ts ***!
      \******************************************************************************/

    /*! exports provided: CONSULTA_COACHES_SUCCESS, CONSULTA_SESIONES_COACH_SUCCESS, CONSULTA_TEMAS_SUCCESS, ACTUALIZAR_ZONA_HORARIA, CONSULTA_SESIONES_COACH_EXPIRED */

    /***/
    function a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONSULTA_COACHES_SUCCESS", function () {
        return CONSULTA_COACHES_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONSULTA_SESIONES_COACH_SUCCESS", function () {
        return CONSULTA_SESIONES_COACH_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONSULTA_TEMAS_SUCCESS", function () {
        return CONSULTA_TEMAS_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ACTUALIZAR_ZONA_HORARIA", function () {
        return ACTUALIZAR_ZONA_HORARIA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONSULTA_SESIONES_COACH_EXPIRED", function () {
        return CONSULTA_SESIONES_COACH_EXPIRED;
      });

      var CONSULTA_COACHES_SUCCESS = '@lapso-operaciones/CONSULTA_COACHES_SUCCESS';
      var CONSULTA_SESIONES_COACH_SUCCESS = '@lapso-operaciones/CONSULTA_SESIONES_COACH_SUCCESS';
      var CONSULTA_TEMAS_SUCCESS = '@lapso-operaciones/CONSULTA_TEMAS_SUCCESSS';
      var ACTUALIZAR_ZONA_HORARIA = '@lapso-operaciones/ACTUALIZAR_ZONA_HORARIA';
      var CONSULTA_SESIONES_COACH_EXPIRED = '@lapso-operaciones/CONSULTA_SESIONES_COACH_EXPIRED';
      /***/
    },

    /***/
    "8fuW":
    /*!*****************************************************************!*\
      !*** ./src/app/modulos/usuario/vistas/login/login.component.ts ***!
      \*****************************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function fuW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _state_management_actions_usuario_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../state-management/actions/usuario.action */
      "PsGn");
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "tqRt");
      /* harmony import */


      var _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/servicios/api.service */
      "k5QC");
      /* harmony import */


      var _app_shared_idle_user_idle_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @app/shared/idle-user/idle-usuario.service */
      "omux");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      function LoginComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(ngZone, router, store, apiService, userIdle) {
          _classCallCheck(this, LoginComponent);

          this.ngZone = ngZone;
          this.router = router;
          this.store = store;
          this.apiService = apiService;
          this.userIdle = userIdle;
          this.mostrarLoginError = false;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "autenticar",
          value: function autenticar(usuario, password) {
            var _this5 = this;

            this.cargando = true;
            this.apiService.singIn(usuario, password).then(function (cognitoUserSession) {
              return {
                sub: cognitoUserSession.attributes.sub,
                username: cognitoUserSession.username,
                email: cognitoUserSession.attributes.email,
                rol: cognitoUserSession.attributes['custom:role'],
                uuid: cognitoUserSession.attributes['custom:uuid'],
                pais: cognitoUserSession.attributes['custom:pais']
              };
            }).then(function (userData) {
              _this5.cargando = false;

              _this5.store.dispatch({
                type: _state_management_actions_usuario_action__WEBPACK_IMPORTED_MODULE_1__["AUTENTICAR_USUARIO_SUCCESS"],
                payload: userData
              });

              _this5.mostrarLoginError = false;

              _this5.userIdle.startWatching();

              _this5.redireccionar(userData.rol, userData.pais);
            }, function (err) {
              console.error(err);
              _this5.mostrarLoginError = true;
              _this5.cargando = false;
            });
          }
        }, {
          key: "redireccionar",
          value: function redireccionar(rol, pais) {
            var _this6 = this;

            this.ngZone.run(function () {
              if (_this6.paisUsuarioHabilitadoParaPaisAmbiente(pais)) {
                if (rol === 'coach') {
                  _this6.router.navigateByUrl('coaching');
                } else if (rol === 'comercial') {
                  _this6.router.navigateByUrl('comercial');
                } else {
                  _this6.router.navigateByUrl('dashboard');
                }
              } else {
                _this6.apiService.singOut();

                _this6.mostrarLoginError = true;
              }
            });
          }
        }, {
          key: "paisUsuarioHabilitadoParaPaisAmbiente",
          value: function paisUsuarioHabilitadoParaPaisAmbiente(pais) {
            return !pais || pais.split('-').some(function (value) {
              return value.toUpperCase() === _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].envCountry.toUpperCase();
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_servicios_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_idle_user_idle_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UserIdleService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 16,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5752331855682104921$$APP_MODULOS_USUARIO_VISTAS_LOGIN_LOGIN_COMPONENT_TS_1 = goog.getMsg("Ingresar");
            i18n_0 = MSG_EXTERNAL_5752331855682104921$$APP_MODULOS_USUARIO_VISTAS_LOGIN_LOGIN_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([":\u241F66e9daee15cbf831a40b0f4c5df884ec139f710f\u241F5752331855682104921:Ingresar"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7525651885547210767$$APP_MODULOS_USUARIO_VISTAS_LOGIN_LOGIN_COMPONENT_TS__3 = goog.getMsg("El usuario o contrase\xF1a no coinciden");
            i18n_2 = MSG_EXTERNAL_7525651885547210767$$APP_MODULOS_USUARIO_VISTAS_LOGIN_LOGIN_COMPONENT_TS__3;
          } else {
            i18n_2 = $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([":\u241F382921ad1b301ebdc2abeb6e2994a8003a5bd6b7\u241F7525651885547210767:El usuario o contrase\xF1a no coinciden"])));
          }

          return [[1, "landing"], [1, "overlay-landing"], [1, "inner"], [1, "content-landing", "fade-b-t"], [1, "brand-landing"], ["src", "../../../../../assets/images/logo-qiip-dark.svg", "alt", ""], ["id", "formularioLogin", "autocomplete", "off", 1, "form", 3, "ngSubmit"], ["informacionContacto", "ngForm"], [1, "form-group"], ["type", "text", "name", "usuario", "id", "inputUsuarioCorreo", "ngModel", "", "placeholder", "Usuario o Correo electr\xF3nico", "required", "", 1, "form-control"], ["id", "inputContrasena", "type", "password", "name", "password", "ngModel", "", "placeholder", "Contrase\xF1a", "required", "", 1, "form-control", 3, "keyup.enter"], ["class", "login-error", 4, "ngIf"], ["mat-button", "", "id", "botonIniciarSesion", "type", "submit", 1, "btns-primary", "dark-bg", 3, "disabled"], i18n_0, [1, "login-error"], ["id", "errorLogin"], i18n_2];
        },
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

              return ctx.autenticar(_r0.value.usuario, _r0.value.password);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function LoginComponent_Template_input_keyup_enter_12_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

              return _r0.valid;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_div_13_Template, 3, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](15, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarLoginError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid || ctx.cargando);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
        styles: ["@font-face {\n  font-family: GeomanistWord-Bold;\n  src: url(\"/assets/fonts/GeomanistWord-Bold.eot\"), url(\"/assets/fonts/GeomanistWord-Bold.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/GeomanistWord-Bold.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: Bariol_Regular;\n  src: url(\"/assets/fonts/bariol_regular.eot\"), url(\"/assets/fonts/bariol_regular.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/bariol_regular.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: Bariol_Regular_Italic;\n  src: url(\"/assets/fonts/bariol_regular_italic.eot\"), url(\"/assets/fonts/bariol_regular_italic.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/bariol_regular_italic.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: Bariol_Bold;\n  src: url(\"/assets/fonts/bariol_bold.eot\"), url(\"/assets/fonts/bariol_bold.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/bariol_bold.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@-webkit-keyframes entrada {\n  0% {\n    transform: translateY(25px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n@keyframes entrada {\n  0% {\n    transform: translateY(25px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n.fade-b-t[_ngcontent-%COMP%] {\n  -webkit-animation: entrada 0.5s ease;\n          animation: entrada 0.5s ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0;\n}\n.custom-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.custom-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover, mat-dialog-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(0.9);\n  transform-origin: center;\n}\n.custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin: 0;\n  font-family: GeomanistWord-Bold;\n  margin-bottom: 10px;\n}\n.custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: Bariol_Bold;\n}\n.custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: Bariol_Bold;\n}\n.custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: Bariol_Regular;\n  font-size: 18px;\n}\n.custom-modal[_ngcontent-%COMP%]   .mat-dialog-actions[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .mat-dialog-actions[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 30px 0px;\n  margin: 0;\n  margin-bottom: 0;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%] {\n  width: 844px !important;\n  max-width: 844px !important;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(0.9);\n  transform-origin: center;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin: 0;\n  font-family: GeomanistWord-Bold;\n  margin-bottom: 10px;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: Bariol_Bold;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: Bariol_Bold;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: Bariol_Regular;\n  font-size: 18px;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .mat-dialog-actions[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 30px 0px;\n  margin: 0;\n  margin-bottom: 0;\n}\n.modal-ahorro[_ngcontent-%COMP%] {\n  padding-bottom: 40px;\n  height: 100%;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  margin-bottom: 50px;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #ffffff;\n  font-size: 16px;\n  margin-bottom: 15px;\n  font-weight: 300;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   .icon-check[_ngcontent-%COMP%] {\n  margin: 0 auto 35px;\n  display: block;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: auto;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  border: 2px solid #D0021B;\n  margin-right: 20px;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]:hover {\n  border-color: #ff001f;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .accept[_ngcontent-%COMP%] {\n  border: 2px solid #00CCA3;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .accept[_ngcontent-%COMP%]:hover {\n  border-color: #00ffcc;\n}\n.modal-success[_ngcontent-%COMP%] {\n  background: #04BF94;\n}\n.modal-alert[_ngcontent-%COMP%] {\n  background: #E27E30;\n  opacity: 0.9;\n  padding: 20px;\n  height: 100%;\n}\n.modal-warning[_ngcontent-%COMP%] {\n  background: #e2d249;\n  opacity: 0.9;\n  padding: 20px;\n  height: 100%;\n}\n  .mat-dialog-container .modal-body {\n  padding: 0 60px;\n  text-align: center;\n}\n  .mat-dialog-container .modal-body h1,   .mat-dialog-container .modal-body h2 {\n  font-family: GeomanistWord-Bold;\n  color: #343434;\n  font-size: 32px;\n  margin-top: 0;\n}\n  .mat-dialog-container .modal-body p {\n  color: #343434;\n  font-family: Bariol_Regular;\n  font-size: 18px;\n}\n  .mat-dialog-container .modal-body textarea {\n  border: none;\n  border-radius: 4px;\n  color: #343434;\n}\n  .mat-dialog-container .modal-header,   .mat-dialog-container .modal-footer {\n  border: none;\n}\n  .mat-dialog-container .modal-header .close {\n  margin-right: 15px;\n  color: #343434;\n  opacity: 1;\n}\n  .mat-dialog-container .modal-header .close .mat-icon {\n  text-shadow: none;\n  font-size: 26px;\n}\n  .mat-dialog-container .modal-header .close:focus {\n  outline: 0;\n}\n  .mat-dialog-container .modal-footer .btns-footer {\n  text-align: center;\n  margin-bottom: 30px;\n}\n  .mat-dialog-container .modal-footer .btns-footer button {\n  float: none;\n}\n  .mat-dialog-container button.mat-button {\n  line-height: normal;\n}\n  .mat-dialog-container img {\n  margin: 0 auto 30px;\n  display: block;\n}\n  .mat-dialog-container p {\n  text-align: center;\n}\n  .btns-rectangular-white {\n  box-shadow: inherit;\n}\n  .btns-rectangular-white:hover {\n  background: rgba(255, 255, 255, 0.21);\n}\n  .modal {\n  padding-left: 15px;\n  padding-top: 50px;\n}\n  .modal .modal-dialog {\n  width: 95%;\n}\n  .full-screen-dialog {\n  max-width: none !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n  .custom-modal {\n  height: 100%;\n}\n  .custom-modal .info-modal {\n  padding: 0 64px;\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n  .custom-modal .info-modal ul {\n  list-style: none;\n  margin: 0;\n  margin-bottom: 50px;\n}\n  .custom-modal .info-modal ul li {\n  text-align: center;\n  font-size: 16px;\n  margin-bottom: 15px;\n  font-weight: 300;\n}\n  .custom-modal .info-modal .icon-check {\n  margin: 0 auto 35px;\n  display: block;\n}\n  .custom-modal .btns-modal {\n  margin: 0 auto;\n}\n  .custom-modal .btns-modal button {\n  border-radius: 30px;\n  padding: 8px 25px;\n  font-size: 16px;\n  font-weight: 300;\n  min-width: auto;\n}\n  .custom-modal .btns-modal button:hover,   .custom-modal .btns-modal button:focus {\n  outline: 0;\n}\n  .custom-modal .mat-dialog-actions .mat-button + .mat-button,   .custom-modal .mat-dialog-actions .mat-button + .mat-raised-button,   .custom-modal .mat-dialog-actions .mat-raised-button + .mat-button,   .custom-modal .mat-dialog-actions .mat-raised-button + .mat-raised-button {\n  margin-left: inherit;\n}\n  .custom-modal-warning {\n  padding-bottom: 40px;\n}\n  .custom-modal-warning .modal-header {\n  border: none;\n  text-align: right;\n}\n  .custom-modal-warning .modal-header button mat-icon {\n  color: #292929;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n}\n  .custom-modal-warning .info-modal {\n  padding: 0 0 10px;\n  text-align: center;\n}\n  .custom-modal-warning .info-modal p,   .custom-modal-warning .info-modal li,   .custom-modal-warning .info-modal mat-icon {\n  color: #292929;\n}\n  .custom-modal-warning .info-modal mat-icon {\n  font-size: 70px;\n  height: 100px;\n  width: 100px;\n}\n  .custom-modal-warning .btns-modal button {\n  color: #292929;\n}\n  .custom-modal-warning .btns-modal .cancel {\n  border: 2px solid #D0021B;\n}\n  .custom-modal-warning .btns-modal .cancel:hover {\n  border-color: #ff001f;\n}\n  .custom-modal-warning .btns-modal .accept {\n  background-color: #f44336;\n  border: 2px solid #00CCA3;\n}\n  .custom-modal-warning .btns-modal .accept:hover {\n  border-color: #00ffcc;\n}\n  .custom-modal-success .modal-header {\n  border: none;\n  text-align: right;\n}\n  .custom-modal-success .modal-header button mat-icon {\n  color: #fff;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n}\n  .custom-modal-success .info-modal {\n  text-align: center;\n}\n  .custom-modal-success .info-modal mat-icon {\n  font-size: 70px;\n  height: 100px;\n  width: 100px;\n}\n  .custom-modal-success .info-modal p,   .custom-modal-success .info-modal li,   .custom-modal-success .info-modal mat-icon {\n  color: #fff;\n}\n  .custom-modal-success .info-modal p {\n  font-size: 18px;\n}\n  .custom-modal-success .btns-modal button {\n  color: #fff;\n}\n  .custom-modal-success .btns-modal .accept {\n  border: 2px solid #00CCA3;\n}\n  .custom-modal-success .btns-modal .accept:hover {\n  border-color: #00ffcc;\n}\n  .custom-modal-success .modal-header {\n  border: none;\n  text-align: right;\n}\n  .custom-modal-success .modal-header button mat-icon {\n  color: #fff;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n}\n  .custom-modal-success .info-modal {\n  text-align: center;\n}\n  .custom-modal-success .info-modal mat-icon {\n  font-size: 70px;\n  height: 100px;\n  width: 100px;\n}\n  .custom-modal-success .info-modal p,   .custom-modal-success .info-modal li,   .custom-modal-success .info-modal mat-icon {\n  color: #fff;\n}\n  .custom-modal-success .info-modal p {\n  font-size: 18px;\n}\n  .custom-modal-success .btns-modal button {\n  color: #fff;\n}\n  .custom-modal-success .btns-modal .accept {\n  border: 2px solid #00CCA3;\n}\n  .custom-modal-success .btns-modal .accept:hover {\n  border-color: #00ffcc;\n}\n  .custom-modal-error .modal-header {\n  border: none;\n  text-align: right;\n}\n  .custom-modal-error .modal-header button mat-icon {\n  color: #343434;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n}\n  .custom-modal-error .info-modal p,   .custom-modal-error .info-modal li,   .custom-modal-error .info-modal h3 {\n  color: #343434;\n}\n  .custom-modal-error .info-modal p {\n  font-size: 18px;\n}\n  .custom-modal-error .btns-modal button {\n  color: #fff;\n}\n  .custom-modal-error .btns-modal .accept {\n  border: 2px solid #00CCA3;\n}\n  .custom-modal-error .btns-modal .accept:hover {\n  border-color: #00ffcc;\n}\n  .modal-vertical-btns .btns-modal .mat-button {\n  display: block;\n  margin: 0 auto 10px;\n  text-align: center;\n}\n  .modal-vertical-btns .btns-modal .mat-button .mat-button-focus-overlay {\n  background: none;\n}\n  .modal-vertical-btns .btns-modal .mat-button:focus {\n  outline: 0;\n}\n  .modal-vertical-btns .btns-modal .link-white span {\n  color: #fff;\n  text-align: center;\n}\n  .custom-modal-medium-information {\n  box-shadow: 10px 10px 5px #888888 !important;\n  background: #00BFB3;\n  border-radius: 0;\n  padding: 10px 10px 50px;\n}\n  .custom-modal-medium-information .modal-header {\n  border: none;\n}\n  .custom-modal-medium-information .modal-body {\n  border: none;\n  text-align: center;\n  padding: 10px 50px 10px 50px;\n}\n  .custom-modal-medium-information .modal-body a {\n  cursor: pointer;\n}\n  .custom-modal-medium-information .modal-body h2 {\n  font-size: 18px;\n  color: #fff;\n  font-weight: 400;\n}\n  .custom-modal-medium-information .modal-body p {\n  color: #fff;\n  font-weight: 300;\n  font-size: 16px;\n}\n  .custom-modal-medium-information .close-modal {\n  background: url(/assets/images/close-modal.png) no-repeat;\n  height: 15px;\n  width: 15px;\n  display: block;\n  border: none;\n  float: right;\n}\n  .custom-modal-medium-information .close-modal:focus {\n  outline: 0;\n}\n  .modal-color-aqua mat-dialog-container {\n  background: #00BFB3;\n}\n  .modal-color-yellow mat-dialog-container {\n  background: #ffff41;\n}\n  mat-form-field .mat-form-field-underline .mat-form-field-ripple {\n  background-color: #9223E0;\n}\n  .mat-form-field-invalid .mat-form-field-underline .mat-form-field-ripple {\n  background-color: #d32a2a;\n}\n@font-face {\n  font-family: GeomanistWord-Bold;\n  src: url(\"/assets/fonts/GeomanistWord-Bold.eot\"), url(\"/assets/fonts/GeomanistWord-Bold.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/GeomanistWord-Bold.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: Bariol_Regular;\n  src: url(\"/assets/fonts/bariol_regular.eot\"), url(\"/assets/fonts/bariol_regular.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/bariol_regular.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: Bariol_Regular_Italic;\n  src: url(\"/assets/fonts/bariol_regular_italic.eot\"), url(\"/assets/fonts/bariol_regular_italic.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/bariol_regular_italic.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: Bariol_Bold;\n  src: url(\"/assets/fonts/bariol_bold.eot\"), url(\"/assets/fonts/bariol_bold.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/bariol_bold.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@keyframes entrada {\n  0% {\n    transform: translateY(25px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n.fade-b-t[_ngcontent-%COMP%] {\n  -webkit-animation: entrada 0.5s ease;\n          animation: entrada 0.5s ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0;\n}\n\nbutton.mat-button[_ngcontent-%COMP%] {\n  font-family: inherit;\n  line-height: normal;\n}\n.mat-button.btns-primary[_ngcontent-%COMP%] {\n  border: solid 0px transparent;\n  border-radius: 4px;\n  padding: 14px 28px;\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: normal;\n  font-family: Bariol_Regular;\n  min-width: 225px;\n  background: #9223E0;\n  transition: all 0.4s;\n  overflow: hidden;\n}\n.mat-button.btns-primary[_ngcontent-%COMP%]:focus, .mat-button.btns-primary[_ngcontent-%COMP%]:visited {\n  outline: 0;\n}\n.mat-button.btns-primary[_ngcontent-%COMP%]:hover   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  opacity: 0;\n  background: none;\n}\n.mat-button.btns-primary[_ngcontent-%COMP%]:hover {\n  background: #5F259F;\n}\n.mat-button.btns-primary[disabled][disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #9B9B9B;\n  background: #F7F7F7;\n}\n.mat-button.btns-secondary[_ngcontent-%COMP%] {\n  border: solid 2px #9223E0;\n  border-radius: 25px;\n  padding: 8px 16px;\n  color: #9223E0;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: Bariol_Bold;\n  min-width: 225px;\n  background: transparent;\n  transition: all 0.4s;\n  overflow: hidden;\n  min-width: 146px;\n}\n.mat-button.btns-secondary[_ngcontent-%COMP%]:focus, .mat-button.btns-secondary[_ngcontent-%COMP%]:visited {\n  outline: 0;\n}\n.mat-button.btns-secondary[_ngcontent-%COMP%]:hover   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  opacity: 0;\n  background: none;\n}\n.mat-button.btns-secondary[_ngcontent-%COMP%]:hover, .mat-button.btns-secondary[disabled][disabled][_ngcontent-%COMP%]:hover {\n  background: #9223E0;\n  color: #ffffff;\n}\n.mat-button.btns-secondary[disabled][disabled][_ngcontent-%COMP%], .mat-button.btns-secondary.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #9223E0;\n}\nspan.mat-button.btns-secondary[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n.mat-button.btns-secondary.btns-sec-red[_ngcontent-%COMP%] {\n  border-color: #d32a2a;\n  color: #d32a2a;\n}\n.mat-button.btns-secondary.btns-sec-red[_ngcontent-%COMP%]:hover {\n  background: #d32a2a;\n  color: #ffffff;\n}\n.mat-button.clear-bg[_ngcontent-%COMP%]:hover {\n  background: #9223E0;\n}\n.mat-button.clear-bg[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.mat-button.dark-bg[_ngcontent-%COMP%] {\n  background: #00BFB3;\n}\n.mat-button.dark-bg[_ngcontent-%COMP%]:hover {\n  background: #00a69b;\n}\n.mat-button.dark-bg[_ngcontent-%COMP%]:disabled {\n  background: #64F4E6;\n}\n.mat-button.dark-bg[disabled][disabled][_ngcontent-%COMP%] {\n  opacity: 1;\n  color: #9B9B9B;\n  background: #F7F7F7;\n}\n.mat-button.btns-secondary.dark-bg[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n  color: #ffffff;\n  background: transparent;\n  padding: 10px 39px;\n}\n.mat-button.btns-secondary.dark-bg[_ngcontent-%COMP%]:hover {\n  border-color: #ffffff;\n  background: #ffffff;\n  color: #00BFB3;\n}\n.mat-button.btns-secondary.dark-bg[_ngcontent-%COMP%]:disabled {\n  background: #64F4E6;\n}\n.mat-button.btns-secondary.dark-bg[disabled][disabled][_ngcontent-%COMP%] {\n  opacity: 1;\n}\narticle[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]:hover   .mat-button-focus-overlay[_ngcontent-%COMP%], article[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]:focus   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-family: GeomanistWord-Bold;\n}\np[_ngcontent-%COMP%], a[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], li[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: Bariol_Regular;\n}\nstrong[_ngcontent-%COMP%], b[_ngcontent-%COMP%], .link[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  font-family: Bariol_Bold;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: Bariol_Regular;\n}\n\n.landing[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  margin: auto;\n  background: url(/assets/images/image-login.jpg) no-repeat center;\n  background-size: cover;\n  display: table;\n  top: 0;\n}\n.landing[_ngcontent-%COMP%]   .overlay-landing[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(146, 35, 224, 0.2);\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  display: table;\n}\n.landing[_ngcontent-%COMP%]   .overlay-landing[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  width: 100%;\n  max-width: none;\n}\n.landing[_ngcontent-%COMP%]   .overlay-landing[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .content-landing[_ngcontent-%COMP%] {\n  max-width: 288px;\n  margin: auto;\n  text-align: center;\n}\n.landing[_ngcontent-%COMP%]   .overlay-landing[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .content-landing[_ngcontent-%COMP%]   .brand-landing[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.landing[_ngcontent-%COMP%]   .overlay-landing[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .content-landing[_ngcontent-%COMP%]   .brand-landing[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 145px;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #343434;\n  height: 48px;\n  font-weight: 300;\n  background-color: #ffffff;\n  border: solid 1px #D8D8D8;\n  font-size: 18px;\n}\n.pass.link[_ngcontent-%COMP%] {\n  color: #64F4E6;\n  font-size: 16px;\n  text-decoration: none;\n  font-family: Bariol_Regular;\n  margin-bottom: 20px;\n  display: inline-block;\n}\n.pass.link[_ngcontent-%COMP%]:hover, .pass.link[_ngcontent-%COMP%]:focus {\n  color: #64F4E6;\n}\n.login-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ff0a0a;\n  background: #000;\n  font-size: 16px;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL21peGluLnNjc3MiLCJzcmMvYXBwL21vZHVsb3MvdXN1YXJpby92aXN0YXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3N0eWxlcy9tb2RhbHMuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL3Zhci5zY3NzIiwic3JjL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLCtCQVNGO0VBUkUsMExBQUE7RUFHQSxtQkFPRjtFQU5FLGtCQU9GO0FDVEY7QURKRTtFQUNFLDJCQWVGO0VBZEUsOEtBQUE7RUFHQSxtQkFhRjtFQVpFLGtCQWFGO0FDVEY7QURWRTtFQUNFLGtDQXFCRjtFQXBCRSxtTUFBQTtFQUdBLG1CQW1CRjtFQWxCRSxrQkFtQkY7QUNURjtBRGhCRTtFQUNFLHdCQTBCZTtFQXpCZixxS0FBQTtFQUdBLG1CQXNCd0Q7RUFyQnhELGtCQXFCZ0U7QUNMcEU7QUQ0RkE7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQzFGRjtFRDRGQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQzFGRjtBQUNGO0FEa0ZBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUMxRkY7RUQ0RkE7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUMxRkY7QUFDRjtBRDZGQTtFQUNFLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsVUFBQTtBQzNGRjtBQ2xDSTtFQUNFLDBCQUFBO0FEcUNOO0FDbkNNO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtBRHFDUjtBQy9CSTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBRGlDTjtBQzlCSTtFQUNFLGVBQUE7RUFDQSx3QkNIUTtBRm1DZDtBQzdCSTtFQUNFLGVBQUE7RUFDQSx3QkNSUTtBRnVDZDtBQzVCSTtFQUNFLDJCQ2RRO0VEZVIsZUFBQTtBRDhCTjtBQzFCRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUQ0Qko7QUN4QkE7RUFDRSx1QkFBQTtFQUNBLDJCQUFBO0FEMkJGO0FDdkJNO0VBQ0UsMEJBQUE7QUR5QlI7QUN2QlE7RUFDRSxxQkFBQTtFQUNBLHdCQUFBO0FEeUJWO0FDbkJNO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSwrQkNoREs7RURpREwsbUJBQUE7QURxQlI7QUNsQk07RUFDRSxlQUFBO0VBQ0Esd0JDbkRNO0FGdUVkO0FDakJNO0VBQ0UsZUFBQTtFQUNBLHdCQ3hETTtBRjJFZDtBQ2hCTTtFQUNFLDJCQzlETTtFRCtETixlQUFBO0FEa0JSO0FDZEk7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FEZ0JOO0FDWEE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QURjRjtBQ1hJO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QURhTjtBQ1hNO0VBQ0Usa0JBQUE7RUFDQSxjQzNHSztFRDRHTCxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRGFSO0FDVEk7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QURXTjtBQ1BFO0VBQ0UsY0FBQTtBRFNKO0FDUEk7RUFDRSxlQUFBO0FEU047QUNQTTtFQUNFLFVBQUE7QURTUjtBQ0xJO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBRE9OO0FDTE07RUFDRSxxQkFBQTtBRE9SO0FDSEk7RUFDRSx5QkFBQTtBREtOO0FDSE07RUFDRSxxQkFBQTtBREtSO0FDQ0E7RUFDRSxtQkFBQTtBREVGO0FDQ0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBREVGO0FDQ0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBREVGO0FDR0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QURBTjtBQ0VNO0VBQ0UsK0JDN0pLO0VEOEpMLGNDcktNO0VEc0tOLGVBQUE7RUFDQSxhQUFBO0FEQVI7QUNHTTtFQUNFLGNDM0tNO0VENEtOLDJCQ3BLTTtFRHFLTixlQUFBO0FERFI7QUNJTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNDbkxNO0FGaUxkO0FDTUk7RUFDRSxZQUFBO0FESk47QUNPSTtFQUNFLGtCQUFBO0VBQ0EsY0M3TFE7RUQ4TFIsVUFBQTtBRExOO0FDT007RUFDRSxpQkFBQTtFQUNBLGVBQUE7QURMUjtBQ1FNO0VBQ0UsVUFBQTtBRE5SO0FDV007RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FEVFI7QUNXUTtFQUNFLFdBQUE7QURUVjtBQ2NJO0VBQ0UsbUJBQUE7QURaTjtBQ2VJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FEYk47QUNnQkk7RUFDRSxrQkFBQTtBRGROO0FDa0JFO0VBQ0UsbUJBQUE7QURoQko7QUNrQkk7RUFDRSxxQ0FBQTtBRGhCTjtBQ29CRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QURsQko7QUNvQkk7RUFDRSxVQUFBO0FEbEJOO0FDc0JFO0VBQ0UsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRHBCSjtBQ3VCRTtFQUNFLFlBQUE7QURyQko7QUN1Qkk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRHJCTjtBQ3VCTTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FEckJSO0FDdUJRO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRHJCVjtBQ3lCTTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBRHZCUjtBQzJCSTtFQUNFLGNBQUE7QUR6Qk47QUMyQk07RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRHpCUjtBQzJCUTtFQUNFLFVBQUE7QUR6QlY7QUM4Qkk7RUFDRSxvQkFBQTtBRDVCTjtBQ2dDRTtFQUNFLG9CQUFBO0FEOUJKO0FDZ0NJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FEOUJOO0FDaUNRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRC9CVjtBQ29DSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QURsQ047QUNvQ007RUFDRSxjQUFBO0FEbENSO0FDcUNNO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FEbkNSO0FDd0NNO0VBQ0UsY0FBQTtBRHRDUjtBQ3lDTTtFQUNFLHlCQUFBO0FEdkNSO0FDeUNRO0VBQ0UscUJBQUE7QUR2Q1Y7QUMyQ007RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0FEekNSO0FDMkNRO0VBQ0UscUJBQUE7QUR6Q1Y7QUNnREk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUQ5Q047QUNpRFE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEL0NWO0FDb0RJO0VBQ0Usa0JBQUE7QURsRE47QUNvRE07RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QURsRFI7QUNxRE07RUFDRSxXQUFBO0FEbkRSO0FDc0RNO0VBQ0UsZUFBQTtBRHBEUjtBQ3lETTtFQUNFLFdBQUE7QUR2RFI7QUMwRE07RUFDRSx5QkFBQTtBRHhEUjtBQzBEUTtFQUNFLHFCQUFBO0FEeERWO0FDK0RJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FEN0ROO0FDZ0VRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRDlEVjtBQ21FSTtFQUNFLGtCQUFBO0FEakVOO0FDbUVNO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FEakVSO0FDb0VNO0VBQ0UsV0FBQTtBRGxFUjtBQ3FFTTtFQUNFLGVBQUE7QURuRVI7QUN3RU07RUFDRSxXQUFBO0FEdEVSO0FDeUVNO0VBQ0UseUJBQUE7QUR2RVI7QUN5RVE7RUFDRSxxQkFBQTtBRHZFVjtBQzhFSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBRDVFTjtBQytFUTtFQUNFLGNDM2NJO0VENGNKLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRDdFVjtBQ21GTTtFQUNFLGNDcmRNO0FGb1lkO0FDb0ZNO0VBQ0UsZUFBQTtBRGxGUjtBQ3VGTTtFQUNFLFdBQUE7QURyRlI7QUN3Rk07RUFDRSx5QkFBQTtBRHRGUjtBQ3dGUTtFQUNFLHFCQUFBO0FEdEZWO0FDOEZNO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUQ1RlI7QUM4RlE7RUFDRSxnQkFBQTtBRDVGVjtBQytGUTtFQUNFLFVBQUE7QUQ3RlY7QUNrR1E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QURoR1Y7QUNzR0U7RUFDRSw0Q0FBQTtFQUNBLG1CQ2hoQlE7RURpaEJSLGdCQUFBO0VBQ0EsdUJBQUE7QURwR0o7QUNzR0k7RUFDRSxZQUFBO0FEcEdOO0FDdUdJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QURyR047QUN1R007RUFDRSxlQUFBO0FEckdSO0FDd0dNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRHRHUjtBQ3lHTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUR2R1I7QUMyR0k7RUFDRSx5REFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEekdOO0FDMkdNO0VBQ0UsVUFBQTtBRHpHUjtBQytHSTtFQUNFLG1CQzlqQk07QUZpZFo7QUNrSEk7RUFDRSxtQkN2akJRO0FGdWNkO0FDb0hFO0VBQ0UseUJDdGtCVTtBRm9kZDtBQ3FIRTtFQUNFLHlCQ2prQk07QUY4Y1Y7QUQzZEU7RUFDRSwrQkFTRjtFQVJFLDBMQUFBO0VBR0EsbUJBT0Y7RUFORSxrQkFPRjtBQ3FkRjtBRGxlRTtFQUNFLDJCQWVGO0VBZEUsOEtBQUE7RUFHQSxtQkFhRjtFQVpFLGtCQWFGO0FDcWRGO0FEeGVFO0VBQ0Usa0NBcUJGO0VBcEJFLG1NQUFBO0VBR0EsbUJBbUJGO0VBbEJFLGtCQW1CRjtBQ3FkRjtBRDllRTtFQUNFLHdCQTBCZTtFQXpCZixxS0FBQTtFQUdBLG1CQXNCd0Q7RUFyQnhELGtCQXFCZ0U7QUN5ZHBFO0FEbFlBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUNvWUY7RURsWUE7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUNvWUY7QUFDRjtBRGpZQTtFQUNFLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsVUFBQTtBQ21ZRjtBRy9mQSxVQUFBO0FBQ0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FIa2dCRjtBR2hnQkE7RUorQkUsNkJBQUE7RUFDQSxrQkkvQjhCO0VKZ0M5QixrQkFBQTtFQUNBLGNHNUNXO0VINkNYLGVJbENzRDtFSm1DdEQsbUJJbkMyRTtFSm9DM0UsMkJHNUJZO0VINkJaLGdCSXJDbUY7RUpzQ25GLG1CRzVDWTtFSDZDWixvQkFBQTtFQUNBLGdCQUFBO0FDcWVGO0FEcGVFO0VBRUUsVUFBQTtBQ3FlSjtBRGxlSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ29lTjtBR25oQkU7RUFDRSxtQkRQVztBRjRoQmY7QUduaEJFO0VBQ0UsWUFBQTtFQUNBLGNEUFM7RUNRVCxtQkRWUTtBRitoQlo7QUdsaEJBO0VKb0JFLHlCQUFBO0VBQ0EsbUJJcEJnQztFSnFCaEMsaUJBQUE7RUFDQSxjR3ZDWTtFSHdDWixlSXZCeUQ7RUp3QnpELGlCSXhCOEU7RUp5QjlFLHdCRzFCWTtFSDJCWixnQkkxQm9GO0VKMkJwRix1QkkzQjJGO0VKNEIzRixvQkFBQTtFQUNBLGdCQUFBO0VJNUJBLGdCQUFBO0FIK2hCRjtBRGxnQkU7RUFFRSxVQUFBO0FDbWdCSjtBRGhnQkk7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNrZ0JOO0FHcmlCRTtFQUNFLG1CRHBCVTtFQ3FCVixjRDFCUztBRmlrQmI7QUdyaUJFO0VBRUUsWUFBQTtFQUNBLGNEMUJVO0FGZ2tCZDtBR2xpQkE7RUFDRSxlQUFBO0FIcWlCRjtBR2xpQkE7RUFDRSxxQkQxQlE7RUMyQlIsY0QzQlE7QUZna0JWO0FHcGlCRTtFQUNFLG1CRDdCTTtFQzhCTixjRDVDUztBRmtsQmI7QUdsaUJFO0VBQ0UsbUJENUNVO0FGaWxCZDtBR25pQkU7RUFDRSxZQUFBO0FIcWlCSjtBR2xpQkE7RUFDRSxtQkR0RFU7QUYybEJaO0FHcGlCRTtFQUNFLG1CQUFBO0FIc2lCSjtBR3BpQkU7RUFDRSxtQkR6RFM7QUYrbEJiO0FHcGlCRTtFQUNFLFVBQUE7RUFDQSxjRHZEUztFQ3dEVCxtQkQxRFE7QUZnbUJaO0FHbGlCQTtFQUNFLHFCRHZFVztFQ3dFWCxjRHhFVztFQ3lFWCx1QkFBQTtFQUNBLGtCQUFBO0FIcWlCRjtBR3BpQkU7RUFDRSxxQkQ1RVM7RUM2RVQsbUJEN0VTO0VDOEVULGNENUVRO0FGa25CWjtBR3BpQkU7RUFDRSxtQkQ3RVM7QUZtbkJiO0FHcGlCRTtFQUNFLFVBQUE7QUhzaUJKO0FHaGlCRztFQUNFLHVCQUFBO0FIbWlCTDtBRy9oQkEsY0FBQTtBQUVBLG9CQUFBO0FBQ0E7RUFDRSwrQkRqRlc7QUZrbkJiO0FHOWhCQTtFQUNFLDJCRHBGWTtBRnFuQmQ7QUc5aEJBO0VBQ0Usd0JEdEZZO0FGdW5CZDtBRzloQkE7RUFDRSwyQkQ1Rlk7QUY2bkJkO0FHOWhCQSwyQkFBQTtBSDlHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0VBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0FBZ3BCRjtBQS9vQkU7RUFDRSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFpcEJKO0FBaHBCSTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWtwQk47QUFqcEJNO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFtcEJSO0FBbHBCUTtFQUNFLG1CQUFBO0FBb3BCVjtBQW5wQlU7RUFDRSxZQUFBO0FBcXBCWjtBQTVvQkU7RUFDRSxjRWhDVTtFRmlDVixZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkU5Q1M7RUYrQ1QseUJBQUE7RUFDQSxlQUFBO0FBK29CSjtBQTVvQkM7RUFDQyxjRWhEVztFRmlEWCxlQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkVwQ1k7RUZxQ1osbUJBQUE7RUFDQSxxQkFBQTtBQStvQkY7QUE5b0JFO0VBQ0UsY0V2RFM7QUZ1c0JiO0FBNW9CRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQStvQkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bG9zL3VzdWFyaW8vdmlzdGFzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGZvbnQtZmFjZSgkbmFtZSwgJHNyYywgJHdlaWdodCwgJHN0eWxlKSB7XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAkbmFtZTtcbiAgICBzcmM6IHVybChxdW90ZSgkc3JjICsgJy5lb3QnKSksXG4gICAgICB1cmwocXVvdGUoJHNyYyArICcuZW90P2llZml4JykpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgIHVybCgkc3JjKycud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xuICAgIGZvbnQtc3R5bGU6ICRzdHlsZTtcbiAgfVxufVxuQGluY2x1ZGUgZm9udC1mYWNlKFxuICBHZW9tYW5pc3RXb3JkLUJvbGQsXG4gIC8gYXNzZXRzL2ZvbnRzL0dlb21hbmlzdFdvcmQtQm9sZCxcbiAgbm9ybWFsLFxuICBub3JtYWxcbik7XG5AaW5jbHVkZSBmb250LWZhY2UoXG4gIEJhcmlvbF9SZWd1bGFyLFxuICAvIGFzc2V0cy9mb250cy9iYXJpb2xfcmVndWxhcixcbiAgbm9ybWFsLFxuICBub3JtYWxcbik7XG5AaW5jbHVkZSBmb250LWZhY2UoXG4gIEJhcmlvbF9SZWd1bGFyX0l0YWxpYyxcbiAgLyBhc3NldHMvZm9udHMvYmFyaW9sX3JlZ3VsYXJfaXRhbGljLFxuICBub3JtYWwsXG4gIGl0YWxpY1xuKTtcbkBpbmNsdWRlIGZvbnQtZmFjZShCYXJpb2xfQm9sZCwgLyBhc3NldHMvZm9udHMvYmFyaW9sX2JvbGQsIG5vcm1hbCwgbm9ybWFsKTtcblxuQG1peGluIGJ0bnMoXG4gICRib3JkZXIsXG4gICRyYWRpdXMsXG4gICRwYWRkaW5nLFxuICAkY29sb3IsXG4gICRmb250LXNpemUsXG4gICRmYW1pbHksXG4gICR3ZWlnaHQsXG4gICR3aWR0aCxcbiAgJGJnXG4pIHtcbiAgYm9yZGVyOiBzb2xpZCAkYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICBwYWRkaW5nOiAkcGFkZGluZyAkcGFkZGluZyAqIDI7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XG4gIGZvbnQtZmFtaWx5OiAkZmFtaWx5O1xuICBtaW4td2lkdGg6ICR3aWR0aDtcbiAgYmFja2dyb3VuZDogJGJnO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJjpmb2N1cyxcbiAgJjp2aXNpdGVkIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG4gICY6aG92ZXIge1xuICAgIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBsaW5rKCRjb2xvciwgJHNpemUtZm9udCwgJHdlaWdodCkge1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXNpemU6ICRzaXplLWZvbnQ7XG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xufVxuXG5AbWl4aW4gaWNvbnMoJGJnaSwgJHdpZHRoLCAkaGVpZ2h0LCAkbWFyZ2luKSB7XG4gIGJhY2tncm91bmQ6ICRiZ2k7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46ICRtYXJnaW47XG59XG5cbkBtaXhpbiBtZWRpYSgkY29uc3VsdGEpIHtcbiAgJG1lZGlhLXh4czogJyhtYXgtd2lkdGggOiAzMjBweCknOyAvLyBpUGhvbmUgUmV0aW5hXG4gICRtZWRpYS14czogJyhtYXgtd2lkdGggOiA0ODBweCknOyAvLyBUZWxlZm9ub3NcbiAgJG1lZGlhLXNtOiAnKG1heC13aWR0aDogNzY4cHgpJzsgLy8gVGFibGV0c1xuICAkbWVkaWEtbWQ6ICcobWF4LXdpZHRoOiA5OTJweCknOyAvLyBFc2NyaXRvcmlvc1xuICAkbWVkaWEtbGc6ICcobWF4LXdpZHRoOiAxMjAwcHgpJzsgLy8gUmVzb2x1Y2lvbmVzIGdyYW5kZXNcbiAgJG1lZGlhLXhsZzogJyhtYXgtd2lkdGg6IDE2MDBweCknOyAvLyBSZXNvbHVjaW9uZXMgZXh0cmFncmFuZGVzXG5cbiAgQGlmICRjb25zdWx0YSA9PSB4eHMge1xuICAgIEBtZWRpYSAjeyRtZWRpYS14eHN9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuICBAaWYgJGNvbnN1bHRhID09IHhzIHtcbiAgICBAbWVkaWEgI3skbWVkaWEteHN9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkY29uc3VsdGEgPT0gc20ge1xuICAgIEBtZWRpYSAjeyRtZWRpYS1zbX0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRjb25zdWx0YSA9PSBtZCB7XG4gICAgQG1lZGlhICN7JG1lZGlhLW1kfSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJGNvbnN1bHRhID09IGxnIHtcbiAgICBAbWVkaWEgI3skbWVkaWEtbGd9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkY29uc3VsdGEgPT0geGxnIHtcbiAgICBAbWVkaWEgI3skbWVkaWEteGxnfSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBlbnRyYWRhIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNXB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmZhZGUtYi10IHtcbiAgYW5pbWF0aW9uOiBlbnRyYWRhIDAuNXMgZWFzZTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIG9wYWNpdHk6IDA7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL21peGluXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9tYXRlcmlhbFwiO1xuXG4ubGFuZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaW1hZ2UtbG9naW4uanBnKSBuby1yZXBlYXQgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgdG9wOiAwO1xuICAub3ZlcmxheS1sYW5kaW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3JQdXJwbGUsLjIpO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIC5pbm5lciB7XG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgLmNvbnRlbnQtbGFuZGluZyB7XG4gICAgICAgIG1heC13aWR0aDogMjg4cHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAuYnJhbmQtbGFuZGluZyB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDE0NXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIH1cbiAgICAgfVxuICAgfVxuIH1cblxuIGZvcm17XG4gIGlucHV0IHtcbiAgICBjb2xvcjogJGNvbG9yR3JleTgwO1xuICAgIGhlaWdodDogNDhweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcldoaXRlO1xuICAgIGJvcmRlcjogc29saWQgMXB4ICRjb2xvckdyZXkyMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiB9XG4gLnBhc3MubGluayB7XG4gIGNvbG9yOiAkY29sb3JHcmVlbjM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogJGZvbnRTZWNvbmQtUjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAmOmhvdmVyLCY6Zm9jdXMge1xuICAgIGNvbG9yOiAkY29sb3JHcmVlbjM7XG4gIH1cbn1cbiAubG9naW4tZXJyb3J7XG4gIHB7XG4gICAgY29sb3I6ICNmZjBhMGE7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuIH1cblxuXG5cblxuXG5cblxuIiwiQGltcG9ydCBcInZhclwiO1xuXG4uY3VzdG9tLW1vZGFsLCBtYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIC5tb2RhbC1oZWFkZXIge1xuICAgIC5tYXQtaWNvbiB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGl2Lm1vZGFsLWJvZHksIC5pbmZvLW1vZGFsIHtcbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LWZhbWlseTogJGZvbnRQcmltYXJ5O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICBmb250LWZhbWlseTogJGZvbnRTZWNvbmQtQjtcbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICBmb250LWZhbWlseTogJGZvbnRTZWNvbmQtQjtcbiAgICB9XG5cbiAgICBwLCBzdHJvbmcsIGEsIGJ1dHRvbiB7XG4gICAgICBmb250LWZhbWlseTogJGZvbnRTZWNvbmQtUjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gIH1cblxuICAubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuXG4ubW9kYWwtZWRpdGFyLXNlc2lvbmVzIHtcbiAgd2lkdGg6IDg0NHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogODQ0cHggIWltcG9ydGFudDtcblxuICBtYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICAubWF0LWljb24ge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXYubW9kYWwtYm9keSwgLmluZm8tbW9kYWwge1xuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250UHJpbWFyeTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udFNlY29uZC1CO1xuICAgICAgfVxuXG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250U2Vjb25kLUI7XG4gICAgICB9XG5cbiAgICAgIHAsIHN0cm9uZywgYSwgYnV0dG9uIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250U2Vjb25kLVI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgcGFkZGluZzogMzBweCAwcHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxufVxuXG4ubW9kYWwtYWhvcnJvIHtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGhlaWdodDogMTAwJTtcblxuICAuaW5mby1tb2RhbCB7XG4gICAgdWwge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogJGNvbG9yV2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaWNvbi1jaGVjayB7XG4gICAgICBtYXJnaW46IDAgYXV0byAzNXB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgLmJ0bnMtbW9kYWwge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIG1pbi13aWR0aDogYXV0bztcblxuICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhbmNlbCB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjRDAwMjFCO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmYwMDFmO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hY2NlcHQge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwQ0NBMztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwZmZjYztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm1vZGFsLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiAjMDRCRjk0O1xufVxuXG4ubW9kYWwtYWxlcnQge1xuICBiYWNrZ3JvdW5kOiAjRTI3RTMwO1xuICBvcGFjaXR5OiAuOTtcbiAgcGFkZGluZzogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubW9kYWwtd2FybmluZyB7XG4gIGJhY2tncm91bmQ6ICNlMmQyNDk7XG4gIG9wYWNpdHk6IC45O1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbjo6bmctZGVlcCB7XG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgLm1vZGFsLWJvZHkge1xuICAgICAgcGFkZGluZzogMCA2MHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICBoMSwgaDIge1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnRQcmltYXJ5O1xuICAgICAgICBjb2xvcjogJGNvbG9yR3JleTgwO1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogJGNvbG9yR3JleTgwO1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnRTZWNvbmQtUjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuXG4gICAgICB0ZXh0YXJlYSB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBjb2xvcjogJGNvbG9yR3JleTgwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tb2RhbC1oZWFkZXIsIC5tb2RhbC1mb290ZXIge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuICAgIC5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgIGNvbG9yOiAkY29sb3JHcmV5ODA7XG4gICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAubWF0LWljb24ge1xuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgfVxuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9kYWwtZm9vdGVyIHtcbiAgICAgIC5idG5zLWZvb3RlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYnV0dG9uLm1hdC1idXR0b24ge1xuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMzBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5idG5zLXJlY3Rhbmd1bGFyLXdoaXRlIHtcbiAgICBib3gtc2hhZG93OiBpbmhlcml0O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjEpO1xuICAgIH1cbiAgfVxuXG4gIC5tb2RhbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuXG4gICAgLm1vZGFsLWRpYWxvZyB7XG4gICAgICB3aWR0aDogOTUlO1xuICAgIH1cbiAgfVxuXG4gIC5mdWxsLXNjcmVlbi1kaWFsb2cge1xuICAgIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5jdXN0b20tbW9kYWwge1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC5pbmZvLW1vZGFsIHtcbiAgICAgIHBhZGRpbmc6IDAgNjRweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaWNvbi1jaGVjayB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDM1cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG5zLW1vZGFsIHtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMjVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBtaW4td2lkdGg6IGF1dG87XG5cbiAgICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZGlhbG9nLWFjdGlvbnMgLm1hdC1idXR0b24gKyAubWF0LWJ1dHRvbiwgLm1hdC1kaWFsb2ctYWN0aW9ucyAubWF0LWJ1dHRvbiArIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1kaWFsb2ctYWN0aW9ucyAubWF0LXJhaXNlZC1idXR0b24gKyAubWF0LWJ1dHRvbiwgLm1hdC1kaWFsb2ctYWN0aW9ucyAubWF0LXJhaXNlZC1idXR0b24gKyAubWF0LXJhaXNlZC1idXR0b24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IGluaGVyaXQ7XG4gICAgfVxuICB9XG5cbiAgLmN1c3RvbS1tb2RhbC13YXJuaW5nIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcblxuICAgIC5tb2RhbC1oZWFkZXIge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICBjb2xvcjogIzI5MjkyOTtcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmluZm8tbW9kYWwge1xuICAgICAgcGFkZGluZzogMCAwIDEwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIHAsIGxpLCBtYXQtaWNvbiB7XG4gICAgICAgIGNvbG9yOiAjMjkyOTI5O1xuICAgICAgfVxuXG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG5zLW1vZGFsIHtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiAjMjkyOTI5O1xuICAgICAgfVxuXG4gICAgICAuY2FuY2VsIHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0QwMDIxQjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNmZjAwMWY7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFjY2VwdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMENDQTM7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDBmZmNjO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmN1c3RvbS1tb2RhbC1zdWNjZXNzIHtcbiAgICAubW9kYWwtaGVhZGVyIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5pbmZvLW1vZGFsIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgbWF0LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDcwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIH1cblxuICAgICAgcCwgbGksIG1hdC1pY29uIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bnMtbW9kYWwge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIC5hY2NlcHQge1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBDQ0EzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwZmZjYztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jdXN0b20tbW9kYWwtc3VjY2VzcyB7XG4gICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mby1tb2RhbCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICB9XG5cbiAgICAgIHAsIGxpLCBtYXQtaWNvbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG5zLW1vZGFsIHtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuXG4gICAgICAuYWNjZXB0IHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwQ0NBMztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMGZmY2M7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY3VzdG9tLW1vZGFsLWVycm9yIHtcbiAgICAubW9kYWwtaGVhZGVyIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgY29sb3I6ICRjb2xvckdyZXk4MDtcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmluZm8tbW9kYWwge1xuICAgICAgcCwgbGksIGgzIHtcbiAgICAgICAgY29sb3I6ICRjb2xvckdyZXk4MDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRucy1tb2RhbCB7XG4gICAgICBidXR0b24ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cblxuICAgICAgLmFjY2VwdCB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMENDQTM7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDBmZmNjO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1vZGFsLXZlcnRpY2FsLWJ0bnMge1xuICAgIC5idG5zLW1vZGFsIHtcbiAgICAgIC5tYXQtYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubGluay13aGl0ZSB7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jdXN0b20tbW9kYWwtbWVkaXVtLWluZm9ybWF0aW9uIHtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4ICM4ODg4ODggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JHcmVlbjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCA1MHB4O1xuXG4gICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICBib3JkZXI6IG5vbmVcbiAgICB9XG5cbiAgICAubW9kYWwtYm9keSB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxMHB4IDUwcHggMTBweCA1MHB4O1xuXG4gICAgICBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jbG9zZS1tb2RhbCB7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvY2xvc2UtbW9kYWwucG5nKSBuby1yZXBlYXQ7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubW9kYWwtY29sb3ItYXF1YSB7XG4gICAgbWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogJGNvbG9yR3JlZW47XG4gICAgfVxuICB9XG5cbiAgLm1vZGFsLWNvbG9yLXllbGxvdyB7XG4gICAgbWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogJGNvbG9yWWVsbG93O1xuICAgIH1cbiAgfVxuXG4gIG1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yUHVycGxlO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JSZWQ7XG4gIH1cbn1cbiIsIiRjb2xvcldoaXRlOiAjZmZmZmZmO1xuJGNvbG9yQmxhY2s6IzAwMDtcbiRjb2xvckdyZWVuOiMwMEJGQjM7XG4kY29sb3JHcmVlbjI6IzAwRTZEQztcbiRjb2xvckdyZWVuMzojNjRGNEU2O1xuJGNvbG9yUHVycGxlOiAjOTIyM0UwO1xuJGNvbG9yUHVycGxlMjogIzVGMjU5RjtcbiRjb2xvclB1cnBsZTM6ICNBOTVFRUE7XG4kY29sb3JHcmV5OiAjRjdGN0Y3O1xuJGNvbG9yR3JleTIwOiAjRDhEOEQ4O1xuJGNvbG9yR3JleTQwOiM5QjlCOUI7XG4kY29sb3JHcmV5ODA6ICMzNDM0MzQ7XG4kY29sb3JCbHVlOiAjRjZGOUZFO1xuXG4kY29sb3JSZWQ6I2QzMmEyYTtcbiRjb2xvclllbGxvdzogI2ZmZmY0MTtcbiRjb2xvclllbGxvdzI6ICNFM0U4Mjk7XG5cbiRmb250UHJpbWFyeTpHZW9tYW5pc3RXb3JkLUJvbGQ7XG4kZm9udFNlY29uZC1SOkJhcmlvbF9SZWd1bGFyO1xuJGZvbnRTZWNvbmQtSTpCYXJpb2xfUmVndWxhcl9JdGFsaWM7XG4kZm9udFNlY29uZC1COkJhcmlvbF9Cb2xkO1xuXG4kY29sb3JHcmV5MzogI2MzYzhkMTtcbiRjb2xvckdyZXk0OnJnYmEoJGNvbG9yR3JleTIwLCAwLjUwKTtcbiIsIkBpbXBvcnQgXCJ2YXJcIjtcbkBpbXBvcnQgXCJtb2RhbHNcIjtcbkBpbXBvcnQgXCJtaXhpblwiO1xuQGltcG9ydCBcIm1lZGlhcXVlcmllc1wiO1xuXG4vKkJ1dHRvbnMqL1xuYnV0dG9uLm1hdC1idXR0b257XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuLm1hdC1idXR0b24uYnRucy1wcmltYXJ5IHtcbiAgQGluY2x1ZGUgYnRucygwcHggdHJhbnNwYXJlbnQsNHB4LCAxNHB4LCAkY29sb3JXaGl0ZSwgMjBweCwgJGZvbnRTZWNvbmQtUiwgbm9ybWFsLCAyMjVweCwgJGNvbG9yUHVycGxlKTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yUHVycGxlMjtcbiAgfVxuICAmW2Rpc2FibGVkXVtkaXNhYmxlZF17XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGNvbG9yOiAkY29sb3JHcmV5NDA7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yR3JleTtcbiAgfVxufVxuLm1hdC1idXR0b24uYnRucy1zZWNvbmRhcnkge1xuICBAaW5jbHVkZSBidG5zKDJweCAkY29sb3JQdXJwbGUsIDI1cHgsIDhweCwgJGNvbG9yUHVycGxlLCAxNnB4LCAkZm9udFNlY29uZC1CLCBib2xkLCAyMjVweCwgdHJhbnNwYXJlbnQpO1xuICBtaW4td2lkdGg6IDE0NnB4O1xuICAmOmhvdmVyLCZbZGlzYWJsZWRdW2Rpc2FibGVkXTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yUHVycGxlO1xuICAgIGNvbG9yOiAkY29sb3JXaGl0ZTtcbiAgfVxuICAmW2Rpc2FibGVkXVtkaXNhYmxlZF0sIFxuICAmLmRpc2FibGVke1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjb2xvcjogJGNvbG9yUHVycGxlO1xuICB9XG59XG5cbnNwYW4ubWF0LWJ1dHRvbi5idG5zLXNlY29uZGFyeSB7XG4gIHBhZGRpbmc6MCAxNnB4O1xufVxuXG4ubWF0LWJ1dHRvbi5idG5zLXNlY29uZGFyeS5idG5zLXNlYy1yZWQge1xuICBib3JkZXItY29sb3I6ICRjb2xvclJlZDtcbiAgY29sb3I6ICRjb2xvclJlZDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yUmVkO1xuICAgIGNvbG9yOiAkY29sb3JXaGl0ZTtcbiAgfVxufVxuLm1hdC1idXR0b24uY2xlYXItYmd7XG4gICY6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yUHVycGxlO1xuICB9XG4gICY6ZGlzYWJsZWR7XG4gICAgb3BhY2l0eTogLjU7XG4gIH1cbn1cbi5tYXQtYnV0dG9uLmRhcmstYmd7XG4gIGJhY2tncm91bmQ6JGNvbG9yR3JlZW47XG4gICY6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKCRjb2xvckdyZWVuLDUlKTtcbiAgfVxuICAmOmRpc2FibGVke1xuICAgIGJhY2tncm91bmQ6ICRjb2xvckdyZWVuMztcbiAgfVxuICAmW2Rpc2FibGVkXVtkaXNhYmxlZF17XG4gICAgb3BhY2l0eTogMTtcbiAgICBjb2xvcjogJGNvbG9yR3JleTQwO1xuICAgIGJhY2tncm91bmQ6ICRjb2xvckdyZXk7XG4gIH1cbn1cblxuLm1hdC1idXR0b24uYnRucy1zZWNvbmRhcnkuZGFyay1iZyB7XG4gIGJvcmRlci1jb2xvcjogJGNvbG9yV2hpdGU7XG4gIGNvbG9yOiAkY29sb3JXaGl0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDEwcHggMzlweDtcbiAgJjpob3ZlcntcbiAgICBib3JkZXItY29sb3I6ICRjb2xvcldoaXRlO1xuICAgIGJhY2tncm91bmQ6ICRjb2xvcldoaXRlO1xuICAgIGNvbG9yOiAkY29sb3JHcmVlbjtcbiAgfVxuICAmOmRpc2FibGVke1xuICAgIGJhY2tncm91bmQ6ICRjb2xvckdyZWVuMztcbiAgfVxuICAmW2Rpc2FibGVkXVtkaXNhYmxlZF17XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuYXJ0aWNsZSB7XG4gICYgLmFkZC1idXR0b246aG92ZXIsIFxuICAmIC5hZGQtYnV0dG9uOmZvY3VzIHtcbiAgIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7XG4gICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgfVxufSBcbn1cbi8qRW5kIGJ1dHRvbnMqL1xuXG4vKmVzdGlsb3MgZ2VuZXJhbGVzKi9cbmgxLGgyLGgzLGg0LGg1LGg2IHtcbiAgZm9udC1mYW1pbHk6ICRmb250UHJpbWFyeTtcbn1cblxucCwgYSwgdWwgbGksIG9sLCBsaSwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xuICBmb250LWZhbWlseTogJGZvbnRTZWNvbmQtUjtcbn1cblxuc3Ryb25nLCBiLCAubGluaywgdGgge1xuICBmb250LWZhbWlseTogJGZvbnRTZWNvbmQtQjtcbn1cblxudGFibGUgdGQge1xuICBmb250LWZhbWlseTogJGZvbnRTZWNvbmQtUjtcbn1cblxuLypmaW4gZGUgZXN0aWxvcyBnZW5lcmFsZXMqLyJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
          }, {
            type: _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
          }, {
            type: _app_shared_idle_user_idle_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UserIdleService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8mHT":
    /*!******************************************************!*\
      !*** ./src/app/shared/servicios/cargando.service.ts ***!
      \******************************************************/

    /*! exports provided: CargandoService */

    /***/
    function mHT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CargandoService", function () {
        return CargandoService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var CargandoService = /*#__PURE__*/function () {
        function CargandoService() {
          _classCallCheck(this, CargandoService);

          this.cargar$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        }

        _createClass(CargandoService, [{
          key: "mostrarCargando",
          value: function mostrarCargando() {
            this.cargar$.next(true);
          }
        }, {
          key: "ocultarCargando",
          value: function ocultarCargando() {
            this.cargar$.next(false);
          }
        }]);

        return CargandoService;
      }();

      CargandoService.ɵfac = function CargandoService_Factory(t) {
        return new (t || CargandoService)();
      };

      CargandoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CargandoService,
        factory: CargandoService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CargandoService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: true,
        envName: 'mx-dev',
        envCountry: 'MX',
        zone: 'America/Mexico_City',
        apiGateway: 'https://api2.qiip.com.mx/dev',
        region: 'us-east-1',
        identityPoolId: 'us-east-1:d65e8fa3-dcb3-473b-97e8-4305b5de777e',
        userPoolId: 'us-east-1_u8DDtNzFL',
        clientId: 'd4fk0ahuop1a2j3d0tmeb3bj0',
        invokeUrl: 'https://api2.qiip.com.mx/dev',
        idPaisCoaching: 23,
        sitioEmpresas: 'https://devempresas.qiip.com.mx/#/',
        sitioDescargas: 'https://devmobile.qiip.com.mx/',
        endPointNotificacion: 'https://api2.qiip.com.mx/dev/notificacion/',
        aws: {
          Auth: {
            region: 'us-east-1',
            identityPoolId: 'us-east-1:d65e8fa3-dcb3-473b-97e8-4305b5de777e',
            userPoolId: 'us-east-1_u8DDtNzFL',
            userPoolWebClientId: 'd4fk0ahuop1a2j3d0tmeb3bj0'
          },
          API: {
            endpoints: [{
              name: 'qiipApiGateway',
              endpoint: 'https://apicelula2.qiip.com.mx/'
            }]
          }
        }
      };
      /***/
    },

    /***/
    "B8FV":
    /*!*****************************************************!*\
      !*** ./src/app/modulos/material/material.module.ts ***!
      \*****************************************************/

    /*! exports provided: MaterialModule */

    /***/
    function B8FV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "Ynp+");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "40+f");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/radio */
      "zQhy");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/sort */
      "LUZP");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "pu8Q");
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      "DejY");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "vrAh");
      /* harmony import */


      var _app_modulos_material_paginador_espanol__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @app/modulos/material/paginador-espanol */
      "CpSy");

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MaterialModule
      });
      MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MaterialModule_Factory(t) {
          return new (t || MaterialModule)();
        },
        providers: [{
          provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorIntl"],
          useValue: Object(_app_modulos_material_paginador_espanol__WEBPACK_IMPORTED_MODULE_27__["getSpanishPaginatorIntl"])()
        }],
        imports: [[_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__["MatMomentDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"]], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__["MatMomentDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
          imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__["MatMomentDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"]],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__["MatMomentDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__["MatMomentDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"]],
            declarations: [],
            exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__["MatMomentDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"]],
            providers: [{
              provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorIntl"],
              useValue: Object(_app_modulos_material_paginador_espanol__WEBPACK_IMPORTED_MODULE_27__["getSpanishPaginatorIntl"])()
            }]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "CpSy":
    /*!*******************************************************!*\
      !*** ./src/app/modulos/material/paginador-espanol.ts ***!
      \*******************************************************/

    /*! exports provided: getSpanishPaginatorIntl */

    /***/
    function CpSy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSpanishPaginatorIntl", function () {
        return getSpanishPaginatorIntl;
      });
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");

      var spanishRangeLabel = function spanishRangeLabel(page, pageSize, length) {
        if (length === 0 || pageSize === 0) {
          return "0 de ".concat(length);
        }

        length = Math.max(length, 0);
        var startIndex = page * pageSize;
        var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return "".concat(startIndex + 1, " - ").concat(endIndex, " de ").concat(length);
      };

      function getSpanishPaginatorIntl() {
        var paginatorIntl = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginatorIntl"]();
        paginatorIntl.itemsPerPageLabel = 'Registros por página:';
        paginatorIntl.nextPageLabel = 'Siguiente página';
        paginatorIntl.previousPageLabel = 'Página anterior';
        paginatorIntl.getRangeLabel = spanishRangeLabel;
        return paginatorIntl;
      }
      /***/

    },

    /***/
    "IuWr":
    /*!****************************************************!*\
      !*** ./src/app/shared/servicios/shared.service.ts ***!
      \****************************************************/

    /*! exports provided: SharedService */

    /***/
    function IuWr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedService", function () {
        return SharedService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/internal-compatibility */
      "w0v+");
      /* harmony import */


      var _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/servicios/api.service */
      "k5QC");

      var SharedService = /*#__PURE__*/function () {
        function SharedService(apiService) {
          _classCallCheck(this, SharedService);

          this.apiService = apiService;
        }

        _createClass(SharedService, [{
          key: "consultarInvitacionesEmpresa",
          value: function consultarInvitacionesEmpresa(nombreEmpresa, offset, limit, ordernarPorColumna, tipoOrden) {
            return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__["fromPromise"])(this.apiService.get('empresa/sin_contrato/invitaciones', {
              nombre_empresa: nombreEmpresa,
              offset: offset,
              limit: limit,
              ordernar_por: ordernarPorColumna,
              tipo_orden: tipoOrden
            }));
          }
        }, {
          key: "actualizarFechaExpiracionInvitacionEmpresaSinContrato",
          value: function actualizarFechaExpiracionInvitacionEmpresaSinContrato(data) {
            return this.apiService.post('empresa/sin_contrato/invitaciones/actualizar_fecha_expiracion', data);
          }
        }]);

        return SharedService;
      }();

      SharedService.ɵfac = function SharedService_Factory(t) {
        return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_servicios_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
      };

      SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SharedService,
        factory: SharedService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "MQsH":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/shared/componentes/mostrar-error-formularios/mostrar-error-formularios.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: MostrarErrorFormulariosComponent */

    /***/
    function MQsH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MostrarErrorFormulariosComponent", function () {
        return MostrarErrorFormulariosComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function MostrarErrorFormulariosComponent_ul_0_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var error_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r2, " ");
        }
      }

      function MostrarErrorFormulariosComponent_ul_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MostrarErrorFormulariosComponent_ul_0_li_1_Template, 2, 1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.listaErrores());
        }
      }

      var MostrarErrorFormulariosComponent = /*#__PURE__*/function () {
        function MostrarErrorFormulariosComponent() {
          _classCallCheck(this, MostrarErrorFormulariosComponent);

          this.tipoMensaje = 'pattern';
        }

        _createClass(MostrarErrorFormulariosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "listaErrores",
          value: function listaErrores() {
            var _this7 = this;

            var keysErrores = Object.keys(this.control.errors);

            if (keysErrores.some(function (field) {
              return field === 'required';
            })) {
              keysErrores = keysErrores.filter(function (field) {
                return field === 'required';
              });
            }

            return keysErrores.map(function (field) {
              return _this7.obtenerMensaje(field, _this7.control.errors[field], _this7.contexto, _this7.tipoMensaje);
            });
          }
        }, {
          key: "obtenerMensaje",
          value: function obtenerMensaje(type, params, contexto, mensajePersonalizado) {
            return MostrarErrorFormulariosComponent.errorMessages[type](params, contexto, mensajePersonalizado);
          }
        }], [{
          key: "obtenerMensajeSegnContexto",
          value: function obtenerMensajeSegnContexto(contexto) {
            var mensaje = '';

            switch (contexto) {
              case 'numero':
                mensaje = 'Debe contener una combinación de al menos un número, una letras mayúsculas y minúsculas ';
                break;

              default:
                mensaje = 'El correo electrónico no posee un formato válido';
            }

            return mensaje;
          }
        }]);

        return MostrarErrorFormulariosComponent;
      }();

      MostrarErrorFormulariosComponent.errorMessages = {
        required: function required() {
          return 'Este campo es requerido';
        },
        email: function email() {
          return 'El correo electrónico no posee un formato válido';
        },
        repetido: function repetido() {
          return 'No es posible repetir información';
        },
        minlength: function minlength(params) {
          return 'El número mínimo de caracteres es ' + params.requiredLength;
        },
        min: function min(params) {
          return 'El valor minimo es ' + params.min;
        },
        maxlength: function maxlength(params) {
          return 'El número máximo de caracteres es ' + params.requiredLength;
        },
        max: function max(params) {
          return 'El valor maximo es ' + params.max;
        },
        pattern: function pattern(params, contexto, mensaje) {
          return !contexto ? 'Ups, el formato no es válido' : MostrarErrorFormulariosComponent.obtenerMensajeSegnContexto(contexto);
        },
        validateEqual: function validateEqual(params, contexto) {
          return 'Parece que ' + contexto + '  no coincide. Inténtalo de nuevo.';
        },
        numeroInvalido: function numeroInvalido(params) {
          return 'Revisa de nuevo, no es un número valido.';
        },
        invalidRegistroPatronal: function invalidRegistroPatronal(params) {
          return 'El registro patronal no posee un formato válido.';
        },
        invalidNIT: function invalidNIT(params) {
          return 'El NIT no posee un formato válido (Ej. XXXXXXXXXXX-X).';
        },
        matDatepickerMin: function matDatepickerMin(params) {
          return 'Fecha invalida';
        }
      };

      MostrarErrorFormulariosComponent.ɵfac = function MostrarErrorFormulariosComponent_Factory(t) {
        return new (t || MostrarErrorFormulariosComponent)();
      };

      MostrarErrorFormulariosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MostrarErrorFormulariosComponent,
        selectors: [["app-mostrar-error-formularios"]],
        inputs: {
          control: "control",
          contexto: "contexto",
          tipoMensaje: "tipoMensaje"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["class", "contextual ng-star-inserted", 4, "ngFor", "ngForOf"], [1, "contextual", "ng-star-inserted"]],
        template: function MostrarErrorFormulariosComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MostrarErrorFormulariosComponent_ul_0_Template, 2, 1, "ul", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.invalid && (ctx.control == null ? null : ctx.control.errors) && ((ctx.control == null ? null : ctx.control.dirty) || ctx.control.touched));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding-left: 0px;\n}\nul[_ngcontent-%COMP%]   .ng-star-inserted[_ngcontent-%COMP%] {\n  float: left;\n  margin: 0;\n  color: #e62c17;\n  transform: translateY(4px);\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudGVzL21vc3RyYXItZXJyb3ItZm9ybXVsYXJpb3MvbW9zdHJhci1lcnJvci1mb3JtdWxhcmlvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUFJO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FBRU4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50ZXMvbW9zdHJhci1lcnJvci1mb3JtdWxhcmlvcy9tb3N0cmFyLWVycm9yLWZvcm11bGFyaW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIC5uZy1zdGFyLWluc2VydGVkIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6ICNlNjJjMTc7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICAiXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MostrarErrorFormulariosComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-mostrar-error-formularios',
            template: " <ul\n    *ngIf=\"\n      control.invalid && control?.errors && (control?.dirty || control.touched)\n    \"\n  >\n    <li\n      *ngFor=\"let error of listaErrores()\"\n      class=\"contextual ng-star-inserted\"\n    >\n      {{ error }}\n    </li>\n  </ul>",
            styleUrls: ['./mostrar-error-formularios.component.scss']
          }]
        }], function () {
          return [];
        }, {
          control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          contexto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tipoMensaje: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "MhrC":
    /*!********************************************************!*\
      !*** ./src/app/shared/idle-user/idle-usuario.class.ts ***!
      \********************************************************/

    /*! exports provided: UserIdleConfig */

    /***/
    function MhrC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserIdleConfig", function () {
        return UserIdleConfig;
      });

      var UserIdleConfig = function UserIdleConfig() {
        _classCallCheck(this, UserIdleConfig);
      };
      /***/

    },

    /***/
    "NrxG":
    /*!*************************************************************************************************************************************!*\
      !*** ./src/app/shared/componentes/modal-actualizar-fecha-invitacion-empresa/modal-actualizar-fecha-invitacion-empresa.component.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: ModalActualizarFechaInvitacionEmpresaComponent */

    /***/
    function NrxG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalActualizarFechaInvitacionEmpresaComponent", function () {
        return ModalActualizarFechaInvitacionEmpresaComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment-timezone */
      "f0Wu");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _app_shared_servicios_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/shared/servicios/shared.service */
      "IuWr");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var ModalActualizarFechaInvitacionEmpresaComponent = /*#__PURE__*/function () {
        function ModalActualizarFechaInvitacionEmpresaComponent(dialogRef, data, sharedService) {
          var _this8 = this;

          _classCallCheck(this, ModalActualizarFechaInvitacionEmpresaComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.sharedService = sharedService;
          this.error = '';
          this.fechaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({
            value: '',
            disabled: true
          }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);

          this.myFilter = function (d) {
            var day = d.isAfter(_this8.obtenerFecha(new Date()));
            return day;
          };

          this.uuidInvitacion = data.uuidInvitacion;
        }

        _createClass(ModalActualizarFechaInvitacionEmpresaComponent, [{
          key: "actualizarFecha",
          value: function actualizarFecha(fecha) {
            var _this9 = this;

            var fechaExpiracion = this.formatearFecha(fecha);
            this.sharedService.actualizarFechaExpiracionInvitacionEmpresaSinContrato({
              uuidInvitacion: this.uuidInvitacion,
              fechaExpiracion: fechaExpiracion
            }).then(function () {
              return _this9.dialogRef.close('Exitoso');
            })["catch"](function () {
              _this9.error = ':(, Prueba nuevamente con una fecha diferente.';
            });
          }
        }, {
          key: "formatearFecha",
          value: function formatearFecha(fecha) {
            return moment_timezone__WEBPACK_IMPORTED_MODULE_3__(fecha.toDate()).tz('America/Mexico_City').hour(23).format('YYYY-MM-DDTHH:mm:ss.SSSZ');
          }
        }, {
          key: "obtenerFecha",
          value: function obtenerFecha(fecha) {
            var hoy = moment_timezone__WEBPACK_IMPORTED_MODULE_3__(fecha);
            return hoy.tz('America/Mexico_City').toDate();
          }
        }]);

        return ModalActualizarFechaInvitacionEmpresaComponent;
      }();

      ModalActualizarFechaInvitacionEmpresaComponent.ɵfac = function ModalActualizarFechaInvitacionEmpresaComponent_Factory(t) {
        return new (t || ModalActualizarFechaInvitacionEmpresaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_servicios_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]));
      };

      ModalActualizarFechaInvitacionEmpresaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ModalActualizarFechaInvitacionEmpresaComponent,
        selectors: [["app-modal-actualizar-fecha-invitacion-empresa"]],
        decls: 17,
        vars: 7,
        consts: [[1, "modal-info", "blue"], [1, "modal-header", "omega"], ["type", "button", "data-dismiss", "modal", "mat-dialog-close", "", 1, "close"], [1, "modal-body"], [3, "click"], ["matInput", "", "disabled", "", "placeholder", "Nueva Fecha de expiraci\xF3n", 3, "matDatepickerFilter", "formControl", "matDatepicker"], ["matSuffix", "", 3, "for"], ["disabled", "false"], ["picker", ""], ["mat-button", "", 1, "btn-submit__style", 3, "disabled", "click"], [1, "error"]],
        template: function ModalActualizarFechaInvitacionEmpresaComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalActualizarFechaInvitacionEmpresaComponent_Template_mat_form_field_click_8_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);

              return _r0.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-datepicker-toggle", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "mat-datepicker", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalActualizarFechaInvitacionEmpresaComponent_Template_button_click_13_listener() {
              return ctx.actualizarFecha(ctx.fechaControl.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Actualizar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Empresa: ", ctx.data.nombreEmpresa, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepickerFilter", ctx.myFilter)("formControl", ctx.fechaControl)("matDatepicker", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.fechaControl.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.error);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
        styles: [".custom-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.custom-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover, mat-dialog-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(0.9);\n  transform-origin: center;\n}\n.custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin: 0;\n  font-family: GeomanistWord-Bold;\n  margin-bottom: 10px;\n}\n.custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: Bariol_Bold;\n}\n.custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: Bariol_Bold;\n}\n.custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .custom-modal[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: Bariol_Regular;\n  font-size: 18px;\n}\n.custom-modal[_ngcontent-%COMP%]   .mat-dialog-actions[_ngcontent-%COMP%], mat-dialog-container[_ngcontent-%COMP%]   .mat-dialog-actions[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 30px 0px;\n  margin: 0;\n  margin-bottom: 0;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%] {\n  width: 844px !important;\n  max-width: 844px !important;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(0.9);\n  transform-origin: center;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin: 0;\n  font-family: GeomanistWord-Bold;\n  margin-bottom: 10px;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: Bariol_Bold;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: Bariol_Bold;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   div.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: Bariol_Regular;\n  font-size: 18px;\n}\n.modal-editar-sesiones[_ngcontent-%COMP%]   mat-dialog-container[_ngcontent-%COMP%]   .mat-dialog-actions[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 30px 0px;\n  margin: 0;\n  margin-bottom: 0;\n}\n.modal-ahorro[_ngcontent-%COMP%] {\n  padding-bottom: 40px;\n  height: 100%;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  margin-bottom: 50px;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #ffffff;\n  font-size: 16px;\n  margin-bottom: 15px;\n  font-weight: 300;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .info-modal[_ngcontent-%COMP%]   .icon-check[_ngcontent-%COMP%] {\n  margin: 0 auto 35px;\n  display: block;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: auto;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  border: 2px solid #D0021B;\n  margin-right: 20px;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]:hover {\n  border-color: #ff001f;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .accept[_ngcontent-%COMP%] {\n  border: 2px solid #00CCA3;\n}\n.modal-ahorro[_ngcontent-%COMP%]   .btns-modal[_ngcontent-%COMP%]   .accept[_ngcontent-%COMP%]:hover {\n  border-color: #00ffcc;\n}\n.modal-success[_ngcontent-%COMP%] {\n  background: #04BF94;\n}\n.modal-alert[_ngcontent-%COMP%] {\n  background: #E27E30;\n  opacity: 0.9;\n  padding: 20px;\n  height: 100%;\n}\n.modal-warning[_ngcontent-%COMP%] {\n  background: #e2d249;\n  opacity: 0.9;\n  padding: 20px;\n  height: 100%;\n}\n  .mat-dialog-container .modal-body {\n  padding: 0 60px;\n  text-align: center;\n}\n  .mat-dialog-container .modal-body h1,   .mat-dialog-container .modal-body h2 {\n  font-family: GeomanistWord-Bold;\n  color: #343434;\n  font-size: 32px;\n  margin-top: 0;\n}\n  .mat-dialog-container .modal-body p {\n  color: #343434;\n  font-family: Bariol_Regular;\n  font-size: 18px;\n}\n  .mat-dialog-container .modal-body textarea {\n  border: none;\n  border-radius: 4px;\n  color: #343434;\n}\n  .mat-dialog-container .modal-header,   .mat-dialog-container .modal-footer {\n  border: none;\n}\n  .mat-dialog-container .modal-header .close {\n  margin-right: 15px;\n  color: #343434;\n  opacity: 1;\n}\n  .mat-dialog-container .modal-header .close .mat-icon {\n  text-shadow: none;\n  font-size: 26px;\n}\n  .mat-dialog-container .modal-header .close:focus {\n  outline: 0;\n}\n  .mat-dialog-container .modal-footer .btns-footer {\n  text-align: center;\n  margin-bottom: 30px;\n}\n  .mat-dialog-container .modal-footer .btns-footer button {\n  float: none;\n}\n  .mat-dialog-container button.mat-button {\n  line-height: normal;\n}\n  .mat-dialog-container img {\n  margin: 0 auto 30px;\n  display: block;\n}\n  .mat-dialog-container p {\n  text-align: center;\n}\n  .btns-rectangular-white {\n  box-shadow: inherit;\n}\n  .btns-rectangular-white:hover {\n  background: rgba(255, 255, 255, 0.21);\n}\n  .modal {\n  padding-left: 15px;\n  padding-top: 50px;\n}\n  .modal .modal-dialog {\n  width: 95%;\n}\n  .full-screen-dialog {\n  max-width: none !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n  .custom-modal {\n  height: 100%;\n}\n  .custom-modal .info-modal {\n  padding: 0 64px;\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n  .custom-modal .info-modal ul {\n  list-style: none;\n  margin: 0;\n  margin-bottom: 50px;\n}\n  .custom-modal .info-modal ul li {\n  text-align: center;\n  font-size: 16px;\n  margin-bottom: 15px;\n  font-weight: 300;\n}\n  .custom-modal .info-modal .icon-check {\n  margin: 0 auto 35px;\n  display: block;\n}\n  .custom-modal .btns-modal {\n  margin: 0 auto;\n}\n  .custom-modal .btns-modal button {\n  border-radius: 30px;\n  padding: 8px 25px;\n  font-size: 16px;\n  font-weight: 300;\n  min-width: auto;\n}\n  .custom-modal .btns-modal button:hover,   .custom-modal .btns-modal button:focus {\n  outline: 0;\n}\n  .custom-modal .mat-dialog-actions .mat-button + .mat-button,   .custom-modal .mat-dialog-actions .mat-button + .mat-raised-button,   .custom-modal .mat-dialog-actions .mat-raised-button + .mat-button,   .custom-modal .mat-dialog-actions .mat-raised-button + .mat-raised-button {\n  margin-left: inherit;\n}\n  .custom-modal-warning {\n  padding-bottom: 40px;\n}\n  .custom-modal-warning .modal-header {\n  border: none;\n  text-align: right;\n}\n  .custom-modal-warning .modal-header button mat-icon {\n  color: #292929;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n}\n  .custom-modal-warning .info-modal {\n  padding: 0 0 10px;\n  text-align: center;\n}\n  .custom-modal-warning .info-modal p,   .custom-modal-warning .info-modal li,   .custom-modal-warning .info-modal mat-icon {\n  color: #292929;\n}\n  .custom-modal-warning .info-modal mat-icon {\n  font-size: 70px;\n  height: 100px;\n  width: 100px;\n}\n  .custom-modal-warning .btns-modal button {\n  color: #292929;\n}\n  .custom-modal-warning .btns-modal .cancel {\n  border: 2px solid #D0021B;\n}\n  .custom-modal-warning .btns-modal .cancel:hover {\n  border-color: #ff001f;\n}\n  .custom-modal-warning .btns-modal .accept {\n  background-color: #f44336;\n  border: 2px solid #00CCA3;\n}\n  .custom-modal-warning .btns-modal .accept:hover {\n  border-color: #00ffcc;\n}\n  .custom-modal-success .modal-header {\n  border: none;\n  text-align: right;\n}\n  .custom-modal-success .modal-header button mat-icon {\n  color: #fff;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n}\n  .custom-modal-success .info-modal {\n  text-align: center;\n}\n  .custom-modal-success .info-modal mat-icon {\n  font-size: 70px;\n  height: 100px;\n  width: 100px;\n}\n  .custom-modal-success .info-modal p,   .custom-modal-success .info-modal li,   .custom-modal-success .info-modal mat-icon {\n  color: #fff;\n}\n  .custom-modal-success .info-modal p {\n  font-size: 18px;\n}\n  .custom-modal-success .btns-modal button {\n  color: #fff;\n}\n  .custom-modal-success .btns-modal .accept {\n  border: 2px solid #00CCA3;\n}\n  .custom-modal-success .btns-modal .accept:hover {\n  border-color: #00ffcc;\n}\n  .custom-modal-success .modal-header {\n  border: none;\n  text-align: right;\n}\n  .custom-modal-success .modal-header button mat-icon {\n  color: #fff;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n}\n  .custom-modal-success .info-modal {\n  text-align: center;\n}\n  .custom-modal-success .info-modal mat-icon {\n  font-size: 70px;\n  height: 100px;\n  width: 100px;\n}\n  .custom-modal-success .info-modal p,   .custom-modal-success .info-modal li,   .custom-modal-success .info-modal mat-icon {\n  color: #fff;\n}\n  .custom-modal-success .info-modal p {\n  font-size: 18px;\n}\n  .custom-modal-success .btns-modal button {\n  color: #fff;\n}\n  .custom-modal-success .btns-modal .accept {\n  border: 2px solid #00CCA3;\n}\n  .custom-modal-success .btns-modal .accept:hover {\n  border-color: #00ffcc;\n}\n  .custom-modal-error .modal-header {\n  border: none;\n  text-align: right;\n}\n  .custom-modal-error .modal-header button mat-icon {\n  color: #343434;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n}\n  .custom-modal-error .info-modal p,   .custom-modal-error .info-modal li,   .custom-modal-error .info-modal h3 {\n  color: #343434;\n}\n  .custom-modal-error .info-modal p {\n  font-size: 18px;\n}\n  .custom-modal-error .btns-modal button {\n  color: #fff;\n}\n  .custom-modal-error .btns-modal .accept {\n  border: 2px solid #00CCA3;\n}\n  .custom-modal-error .btns-modal .accept:hover {\n  border-color: #00ffcc;\n}\n  .modal-vertical-btns .btns-modal .mat-button {\n  display: block;\n  margin: 0 auto 10px;\n  text-align: center;\n}\n  .modal-vertical-btns .btns-modal .mat-button .mat-button-focus-overlay {\n  background: none;\n}\n  .modal-vertical-btns .btns-modal .mat-button:focus {\n  outline: 0;\n}\n  .modal-vertical-btns .btns-modal .link-white span {\n  color: #fff;\n  text-align: center;\n}\n  .custom-modal-medium-information {\n  box-shadow: 10px 10px 5px #888888 !important;\n  background: #00BFB3;\n  border-radius: 0;\n  padding: 10px 10px 50px;\n}\n  .custom-modal-medium-information .modal-header {\n  border: none;\n}\n  .custom-modal-medium-information .modal-body {\n  border: none;\n  text-align: center;\n  padding: 10px 50px 10px 50px;\n}\n  .custom-modal-medium-information .modal-body a {\n  cursor: pointer;\n}\n  .custom-modal-medium-information .modal-body h2 {\n  font-size: 18px;\n  color: #fff;\n  font-weight: 400;\n}\n  .custom-modal-medium-information .modal-body p {\n  color: #fff;\n  font-weight: 300;\n  font-size: 16px;\n}\n  .custom-modal-medium-information .close-modal {\n  background: url(/assets/images/close-modal.png) no-repeat;\n  height: 15px;\n  width: 15px;\n  display: block;\n  border: none;\n  float: right;\n}\n  .custom-modal-medium-information .close-modal:focus {\n  outline: 0;\n}\n  .modal-color-aqua mat-dialog-container {\n  background: #00BFB3;\n}\n  .modal-color-yellow mat-dialog-container {\n  background: #ffff41;\n}\n  mat-form-field .mat-form-field-underline .mat-form-field-ripple {\n  background-color: #9223E0;\n}\n  .mat-form-field-invalid .mat-form-field-underline .mat-form-field-ripple {\n  background-color: #d32a2a;\n}\n@font-face {\n  font-family: GeomanistWord-Bold;\n  src: url(\"/assets/fonts/GeomanistWord-Bold.eot\"), url(\"/assets/fonts/GeomanistWord-Bold.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/GeomanistWord-Bold.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: Bariol_Regular;\n  src: url(\"/assets/fonts/bariol_regular.eot\"), url(\"/assets/fonts/bariol_regular.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/bariol_regular.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: Bariol_Regular_Italic;\n  src: url(\"/assets/fonts/bariol_regular_italic.eot\"), url(\"/assets/fonts/bariol_regular_italic.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/bariol_regular_italic.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: Bariol_Bold;\n  src: url(\"/assets/fonts/bariol_bold.eot\"), url(\"/assets/fonts/bariol_bold.eot?iefix\") format(\"embedded-opentype\"), url(/assets/fonts/bariol_bold.woff) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@-webkit-keyframes entrada {\n  0% {\n    transform: translateY(25px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n@keyframes entrada {\n  0% {\n    transform: translateY(25px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n.fade-b-t[_ngcontent-%COMP%] {\n  -webkit-animation: entrada 0.5s ease;\n          animation: entrada 0.5s ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0;\n}\n\nbutton.mat-button[_ngcontent-%COMP%] {\n  font-family: inherit;\n  line-height: normal;\n}\n.mat-button.btns-primary[_ngcontent-%COMP%] {\n  border: solid 0px transparent;\n  border-radius: 4px;\n  padding: 14px 28px;\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: normal;\n  font-family: Bariol_Regular;\n  min-width: 225px;\n  background: #9223E0;\n  transition: all 0.4s;\n  overflow: hidden;\n}\n.mat-button.btns-primary[_ngcontent-%COMP%]:focus, .mat-button.btns-primary[_ngcontent-%COMP%]:visited {\n  outline: 0;\n}\n.mat-button.btns-primary[_ngcontent-%COMP%]:hover   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  opacity: 0;\n  background: none;\n}\n.mat-button.btns-primary[_ngcontent-%COMP%]:hover {\n  background: #5F259F;\n}\n.mat-button.btns-primary[disabled][disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #9B9B9B;\n  background: #F7F7F7;\n}\n.mat-button.btns-secondary[_ngcontent-%COMP%] {\n  border: solid 2px #9223E0;\n  border-radius: 25px;\n  padding: 8px 16px;\n  color: #9223E0;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: Bariol_Bold;\n  min-width: 225px;\n  background: transparent;\n  transition: all 0.4s;\n  overflow: hidden;\n  min-width: 146px;\n}\n.mat-button.btns-secondary[_ngcontent-%COMP%]:focus, .mat-button.btns-secondary[_ngcontent-%COMP%]:visited {\n  outline: 0;\n}\n.mat-button.btns-secondary[_ngcontent-%COMP%]:hover   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  opacity: 0;\n  background: none;\n}\n.mat-button.btns-secondary[_ngcontent-%COMP%]:hover, .mat-button.btns-secondary[disabled][disabled][_ngcontent-%COMP%]:hover {\n  background: #9223E0;\n  color: #ffffff;\n}\n.mat-button.btns-secondary[disabled][disabled][_ngcontent-%COMP%], .mat-button.btns-secondary.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #9223E0;\n}\nspan.mat-button.btns-secondary[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n.mat-button.btns-secondary.btns-sec-red[_ngcontent-%COMP%] {\n  border-color: #d32a2a;\n  color: #d32a2a;\n}\n.mat-button.btns-secondary.btns-sec-red[_ngcontent-%COMP%]:hover {\n  background: #d32a2a;\n  color: #ffffff;\n}\n.mat-button.clear-bg[_ngcontent-%COMP%]:hover {\n  background: #9223E0;\n}\n.mat-button.clear-bg[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.mat-button.dark-bg[_ngcontent-%COMP%] {\n  background: #00BFB3;\n}\n.mat-button.dark-bg[_ngcontent-%COMP%]:hover {\n  background: #00a69b;\n}\n.mat-button.dark-bg[_ngcontent-%COMP%]:disabled {\n  background: #64F4E6;\n}\n.mat-button.dark-bg[disabled][disabled][_ngcontent-%COMP%] {\n  opacity: 1;\n  color: #9B9B9B;\n  background: #F7F7F7;\n}\n.mat-button.btns-secondary.dark-bg[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n  color: #ffffff;\n  background: transparent;\n  padding: 10px 39px;\n}\n.mat-button.btns-secondary.dark-bg[_ngcontent-%COMP%]:hover {\n  border-color: #ffffff;\n  background: #ffffff;\n  color: #00BFB3;\n}\n.mat-button.btns-secondary.dark-bg[_ngcontent-%COMP%]:disabled {\n  background: #64F4E6;\n}\n.mat-button.btns-secondary.dark-bg[disabled][disabled][_ngcontent-%COMP%] {\n  opacity: 1;\n}\narticle[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]:hover   .mat-button-focus-overlay[_ngcontent-%COMP%], article[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]:focus   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-family: GeomanistWord-Bold;\n}\np[_ngcontent-%COMP%], a[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], li[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: Bariol_Regular;\n}\nstrong[_ngcontent-%COMP%], b[_ngcontent-%COMP%], .link[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  font-family: Bariol_Bold;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: Bariol_Regular;\n}\n\n.modal-info[_ngcontent-%COMP%] {\n  height: 260px;\n  padding-top: 20px;\n  text-align: center;\n}\n.modal-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  color: #ffffff;\n}\n.modal-info[_ngcontent-%COMP%]   .btn-submit__style[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  margin-top: 20px;\n  background: #9223E0;\n  color: #fff;\n  padding: 10px 20px;\n}\n.modal-info[_ngcontent-%COMP%]   .btn-submit__style[_ngcontent-%COMP%]:disabled {\n  background: #9B9B9B;\n}\n.modal-info[_ngcontent-%COMP%]     .mat-form-field-flex {\n  background: #f8f5f5 !important;\n  width: 225px;\n}\n.modal-info[_ngcontent-%COMP%]     .mat-form-field-flex input {\n  padding-left: 15px;\n}\n.modal-info[_ngcontent-%COMP%]     .mat-form-field-flex .mat-form-field-label {\n  padding-left: 15px;\n}\n.modal-info[_ngcontent-%COMP%]     .mat-icon-button {\n  width: 35px !important;\n  height: 35px !important;\n}\n.modal-info[_ngcontent-%COMP%]     .mat-icon-button span.mat-button-wrapper {\n  font-size: 32px;\n}\n.error[_ngcontent-%COMP%] {\n  color: #d32a2a;\n  font-weight: 800;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL21vZGFscy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50ZXMvbW9kYWwtYWN0dWFsaXphci1mZWNoYS1pbnZpdGFjaW9uLWVtcHJlc2EvbW9kYWwtYWN0dWFsaXphci1mZWNoYS1pbnZpdGFjaW9uLWVtcHJlc2EuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3N0eWxlcy92YXIuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL21peGluLnNjc3MiLCJzcmMvYXNzZXRzL3N0eWxlcy9tYXRlcmlhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0UsMEJBQUE7QUNITjtBREtNO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtBQ0hSO0FEU0k7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUNQTjtBRFVJO0VBQ0UsZUFBQTtFQUNBLHdCRUhRO0FETGQ7QURXSTtFQUNFLGVBQUE7RUFDQSx3QkVSUTtBRERkO0FEWUk7RUFDRSwyQkVkUTtFRmVSLGVBQUE7QUNWTjtBRGNFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ1pKO0FEZ0JBO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtBQ2JGO0FEaUJNO0VBQ0UsMEJBQUE7QUNmUjtBRGlCUTtFQUNFLHFCQUFBO0VBQ0Esd0JBQUE7QUNmVjtBRHFCTTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsK0JFaERLO0VGaURMLG1CQUFBO0FDbkJSO0FEc0JNO0VBQ0UsZUFBQTtFQUNBLHdCRW5ETTtBRCtCZDtBRHVCTTtFQUNFLGVBQUE7RUFDQSx3QkV4RE07QURtQ2Q7QUR3Qk07RUFDRSwyQkU5RE07RUYrRE4sZUFBQTtBQ3RCUjtBRDBCSTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUN4Qk47QUQ2QkE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUMxQkY7QUQ2Qkk7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQzNCTjtBRDZCTTtFQUNFLGtCQUFBO0VBQ0EsY0UzR0s7RUY0R0wsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUMzQlI7QUQrQkk7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUM3Qk47QURpQ0U7RUFDRSxjQUFBO0FDL0JKO0FEaUNJO0VBQ0UsZUFBQTtBQy9CTjtBRGlDTTtFQUNFLFVBQUE7QUMvQlI7QURtQ0k7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FDakNOO0FEbUNNO0VBQ0UscUJBQUE7QUNqQ1I7QURxQ0k7RUFDRSx5QkFBQTtBQ25DTjtBRHFDTTtFQUNFLHFCQUFBO0FDbkNSO0FEeUNBO0VBQ0UsbUJBQUE7QUN0Q0Y7QUR5Q0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ3RDRjtBRHlDQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDdENGO0FEMkNJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDeENOO0FEMENNO0VBQ0UsK0JFN0pLO0VGOEpMLGNFcktNO0VGc0tOLGVBQUE7RUFDQSxhQUFBO0FDeENSO0FEMkNNO0VBQ0UsY0UzS007RUY0S04sMkJFcEtNO0VGcUtOLGVBQUE7QUN6Q1I7QUQ0Q007RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRW5MTTtBRHlJZDtBRDhDSTtFQUNFLFlBQUE7QUM1Q047QUQrQ0k7RUFDRSxrQkFBQTtFQUNBLGNFN0xRO0VGOExSLFVBQUE7QUM3Q047QUQrQ007RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUM3Q1I7QURnRE07RUFDRSxVQUFBO0FDOUNSO0FEbURNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ2pEUjtBRG1EUTtFQUNFLFdBQUE7QUNqRFY7QURzREk7RUFDRSxtQkFBQTtBQ3BETjtBRHVESTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ3JETjtBRHdESTtFQUNFLGtCQUFBO0FDdEROO0FEMERFO0VBQ0UsbUJBQUE7QUN4REo7QUQwREk7RUFDRSxxQ0FBQTtBQ3hETjtBRDRERTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUMxREo7QUQ0REk7RUFDRSxVQUFBO0FDMUROO0FEOERFO0VBQ0UsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQzVESjtBRCtERTtFQUNFLFlBQUE7QUM3REo7QUQrREk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQzdETjtBRCtETTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDN0RSO0FEK0RRO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQzdEVjtBRGlFTTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQy9EUjtBRG1FSTtFQUNFLGNBQUE7QUNqRU47QURtRU07RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2pFUjtBRG1FUTtFQUNFLFVBQUE7QUNqRVY7QURzRUk7RUFDRSxvQkFBQTtBQ3BFTjtBRHdFRTtFQUNFLG9CQUFBO0FDdEVKO0FEd0VJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDdEVOO0FEeUVRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ3ZFVjtBRDRFSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUMxRU47QUQ0RU07RUFDRSxjQUFBO0FDMUVSO0FENkVNO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDM0VSO0FEZ0ZNO0VBQ0UsY0FBQTtBQzlFUjtBRGlGTTtFQUNFLHlCQUFBO0FDL0VSO0FEaUZRO0VBQ0UscUJBQUE7QUMvRVY7QURtRk07RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0FDakZSO0FEbUZRO0VBQ0UscUJBQUE7QUNqRlY7QUR3Rkk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUN0Rk47QUR5RlE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDdkZWO0FENEZJO0VBQ0Usa0JBQUE7QUMxRk47QUQ0Rk07RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUMxRlI7QUQ2Rk07RUFDRSxXQUFBO0FDM0ZSO0FEOEZNO0VBQ0UsZUFBQTtBQzVGUjtBRGlHTTtFQUNFLFdBQUE7QUMvRlI7QURrR007RUFDRSx5QkFBQTtBQ2hHUjtBRGtHUTtFQUNFLHFCQUFBO0FDaEdWO0FEdUdJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDckdOO0FEd0dRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ3RHVjtBRDJHSTtFQUNFLGtCQUFBO0FDekdOO0FEMkdNO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDekdSO0FENEdNO0VBQ0UsV0FBQTtBQzFHUjtBRDZHTTtFQUNFLGVBQUE7QUMzR1I7QURnSE07RUFDRSxXQUFBO0FDOUdSO0FEaUhNO0VBQ0UseUJBQUE7QUMvR1I7QURpSFE7RUFDRSxxQkFBQTtBQy9HVjtBRHNISTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ3BITjtBRHVIUTtFQUNFLGNFM2NJO0VGNGNKLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ3JIVjtBRDJITTtFQUNFLGNFcmRNO0FENFZkO0FENEhNO0VBQ0UsZUFBQTtBQzFIUjtBRCtITTtFQUNFLFdBQUE7QUM3SFI7QURnSU07RUFDRSx5QkFBQTtBQzlIUjtBRGdJUTtFQUNFLHFCQUFBO0FDOUhWO0FEc0lNO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNwSVI7QURzSVE7RUFDRSxnQkFBQTtBQ3BJVjtBRHVJUTtFQUNFLFVBQUE7QUNySVY7QUQwSVE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUN4SVY7QUQ4SUU7RUFDRSw0Q0FBQTtFQUNBLG1CRWhoQlE7RUZpaEJSLGdCQUFBO0VBQ0EsdUJBQUE7QUM1SUo7QUQ4SUk7RUFDRSxZQUFBO0FDNUlOO0FEK0lJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUM3SU47QUQrSU07RUFDRSxlQUFBO0FDN0lSO0FEZ0pNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQzlJUjtBRGlKTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUMvSVI7QURtSkk7RUFDRSx5REFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDakpOO0FEbUpNO0VBQ0UsVUFBQTtBQ2pKUjtBRHVKSTtFQUNFLG1CRTlqQk07QUR5YVo7QUQwSkk7RUFDRSxtQkV2akJRO0FEK1pkO0FENEpFO0VBQ0UseUJFdGtCVTtBRDRhZDtBRDZKRTtFQUNFLHlCRWprQk07QURzYVY7QUVuYkU7RUFDRSwrQkFTRjtFQVJFLDBMQUFBO0VBR0EsbUJBT0Y7RUFORSxrQkFPRjtBRjZhRjtBRTFiRTtFQUNFLDJCQWVGO0VBZEUsOEtBQUE7RUFHQSxtQkFhRjtFQVpFLGtCQWFGO0FGNmFGO0FFaGNFO0VBQ0Usa0NBcUJGO0VBcEJFLG1NQUFBO0VBR0EsbUJBbUJGO0VBbEJFLGtCQW1CRjtBRjZhRjtBRXRjRTtFQUNFLHdCQTBCZTtFQXpCZixxS0FBQTtFQUdBLG1CQXNCd0Q7RUFyQnhELGtCQXFCZ0U7QUZpYnBFO0FFMVZBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUY0VkY7RUUxVkE7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUY0VkY7QUFDRjtBRXBXQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VGNFZGO0VFMVZBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VGNFZGO0FBQ0Y7QUV6VkE7RUFDRSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLFVBQUE7QUYyVkY7QUd2ZEEsVUFBQTtBQUNBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtBSDBkRjtBR3hkQTtFRCtCRSw2QkFBQTtFQUNBLGtCQy9COEI7RURnQzlCLGtCQUFBO0VBQ0EsY0Q1Q1c7RUM2Q1gsZUNsQ3NEO0VEbUN0RCxtQkNuQzJFO0VEb0MzRSwyQkQ1Qlk7RUM2QlosZ0JDckNtRjtFRHNDbkYsbUJENUNZO0VDNkNaLG9CQUFBO0VBQ0EsZ0JBQUE7QUY2YkY7QUU1YkU7RUFFRSxVQUFBO0FGNmJKO0FFMWJJO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FGNGJOO0FHM2VFO0VBQ0UsbUJGUFc7QURvZmY7QUczZUU7RUFDRSxZQUFBO0VBQ0EsY0ZQUztFRVFULG1CRlZRO0FEdWZaO0FHMWVBO0VEb0JFLHlCQUFBO0VBQ0EsbUJDcEJnQztFRHFCaEMsaUJBQUE7RUFDQSxjRHZDWTtFQ3dDWixlQ3ZCeUQ7RUR3QnpELGlCQ3hCOEU7RUR5QjlFLHdCRDFCWTtFQzJCWixnQkMxQm9GO0VEMkJwRix1QkMzQjJGO0VENEIzRixvQkFBQTtFQUNBLGdCQUFBO0VDNUJBLGdCQUFBO0FIdWZGO0FFMWRFO0VBRUUsVUFBQTtBRjJkSjtBRXhkSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBRjBkTjtBRzdmRTtFQUNFLG1CRnBCVTtFRXFCVixjRjFCUztBRHloQmI7QUc3ZkU7RUFFRSxZQUFBO0VBQ0EsY0YxQlU7QUR3aEJkO0FHMWZBO0VBQ0UsZUFBQTtBSDZmRjtBRzFmQTtFQUNFLHFCRjFCUTtFRTJCUixjRjNCUTtBRHdoQlY7QUc1ZkU7RUFDRSxtQkY3Qk07RUU4Qk4sY0Y1Q1M7QUQwaUJiO0FHMWZFO0VBQ0UsbUJGNUNVO0FEeWlCZDtBRzNmRTtFQUNFLFlBQUE7QUg2Zko7QUcxZkE7RUFDRSxtQkZ0RFU7QURtakJaO0FHNWZFO0VBQ0UsbUJBQUE7QUg4Zko7QUc1ZkU7RUFDRSxtQkZ6RFM7QUR1akJiO0FHNWZFO0VBQ0UsVUFBQTtFQUNBLGNGdkRTO0VFd0RULG1CRjFEUTtBRHdqQlo7QUcxZkE7RUFDRSxxQkZ2RVc7RUV3RVgsY0Z4RVc7RUV5RVgsdUJBQUE7RUFDQSxrQkFBQTtBSDZmRjtBRzVmRTtFQUNFLHFCRjVFUztFRTZFVCxtQkY3RVM7RUU4RVQsY0Y1RVE7QUQwa0JaO0FHNWZFO0VBQ0UsbUJGN0VTO0FEMmtCYjtBRzVmRTtFQUNFLFVBQUE7QUg4Zko7QUd4Zkc7RUFDRSx1QkFBQTtBSDJmTDtBR3ZmQSxjQUFBO0FBRUEsb0JBQUE7QUFDQTtFQUNFLCtCRmpGVztBRDBrQmI7QUd0ZkE7RUFDRSwyQkZwRlk7QUQ2a0JkO0FHdGZBO0VBQ0Usd0JGdEZZO0FEK2tCZDtBR3RmQTtFQUNFLDJCRjVGWTtBRHFsQmQ7QUd0ZkEsMkJBQUE7QUgvR0E7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXltQko7QUF2bUJJO0VBQ0ksbUJBQUE7RUFDQSxjQ1ZLO0FEbW5CYjtBQXZtQkk7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJDWE07RURZTixXQUFBO0VBQ0Esa0JBQUE7QUF5bUJSO0FBeG1CUTtFQUNJLG1CQ1ZDO0FEb25CYjtBQXRtQkk7RUFDSSw4QkFBQTtFQUNBLFlBQUE7QUF3bUJSO0FBdm1CUTtFQUNJLGtCQUFBO0FBeW1CWjtBQXZtQlE7RUFDSSxrQkFBQTtBQXltQlo7QUFybUJJO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQXVtQlI7QUF0bUJRO0VBQ0ksZUFBQTtBQXdtQlo7QUFubUJBO0VBQ0ksY0MvQk07RURnQ04sZ0JBQUE7RUFDQSxnQkFBQTtBQXNtQkoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50ZXMvbW9kYWwtYWN0dWFsaXphci1mZWNoYS1pbnZpdGFjaW9uLWVtcHJlc2EvbW9kYWwtYWN0dWFsaXphci1mZWNoYS1pbnZpdGFjaW9uLWVtcHJlc2EuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyXCI7XG5cbi5jdXN0b20tbW9kYWwsIG1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgLm1vZGFsLWhlYWRlciB7XG4gICAgLm1hdC1pY29uIHtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkaXYubW9kYWwtYm9keSwgLmluZm8tbW9kYWwge1xuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udFByaW1hcnk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udFNlY29uZC1CO1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udFNlY29uZC1CO1xuICAgIH1cblxuICAgIHAsIHN0cm9uZywgYSwgYnV0dG9uIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udFNlY29uZC1SO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG5cbi5tb2RhbC1lZGl0YXItc2VzaW9uZXMge1xuICB3aWR0aDogODQ0cHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA4NDRweCAhaW1wb3J0YW50O1xuXG4gIG1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICAubW9kYWwtaGVhZGVyIHtcbiAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpdi5tb2RhbC1ib2R5LCAuaW5mby1tb2RhbCB7XG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnRQcmltYXJ5O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250U2Vjb25kLUI7XG4gICAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnRTZWNvbmQtQjtcbiAgICAgIH1cblxuICAgICAgcCwgc3Ryb25nLCBhLCBidXR0b24ge1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnRTZWNvbmQtUjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG59XG5cbi5tb2RhbC1haG9ycm8ge1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5pbmZvLW1vZGFsIHtcbiAgICB1bCB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcblxuICAgICAgbGkge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAkY29sb3JXaGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pY29uLWNoZWNrIHtcbiAgICAgIG1hcmdpbjogMCBhdXRvIDM1cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cblxuICAuYnRucy1tb2RhbCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICBidXR0b24ge1xuICAgICAgbWluLXdpZHRoOiBhdXRvO1xuXG4gICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FuY2VsIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNEMDAyMUI7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICNmZjAwMWY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFjY2VwdCB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBDQ0EzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDBmZmNjO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubW9kYWwtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQ6ICMwNEJGOTQ7XG59XG5cbi5tb2RhbC1hbGVydCB7XG4gIGJhY2tncm91bmQ6ICNFMjdFMzA7XG4gIG9wYWNpdHk6IC45O1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tb2RhbC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZDogI2UyZDI0OTtcbiAgb3BhY2l0eTogLjk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIHtcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICAubW9kYWwtYm9keSB7XG4gICAgICBwYWRkaW5nOiAwIDYwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIGgxLCBoMiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udFByaW1hcnk7XG4gICAgICAgIGNvbG9yOiAkY29sb3JHcmV5ODA7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiAkY29sb3JHcmV5ODA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udFNlY29uZC1SO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG5cbiAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGNvbG9yOiAkY29sb3JHcmV5ODA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1vZGFsLWhlYWRlciwgLm1vZGFsLWZvb3RlciB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuXG4gICAgLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgY29sb3I6ICRjb2xvckdyZXk4MDtcbiAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgLmJ0bnMtZm9vdGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBidXR0b24ubWF0LWJ1dHRvbiB7XG4gICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBtYXJnaW46IDAgYXV0byAzMHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLmJ0bnMtcmVjdGFuZ3VsYXItd2hpdGUge1xuICAgIGJveC1zaGFkb3c6IGluaGVyaXQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMSk7XG4gICAgfVxuICB9XG5cbiAgLm1vZGFsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG5cbiAgICAubW9kYWwtZGlhbG9nIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgfVxuICB9XG5cbiAgLmZ1bGwtc2NyZWVuLWRpYWxvZyB7XG4gICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmN1c3RvbS1tb2RhbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLmluZm8tbW9kYWwge1xuICAgICAgcGFkZGluZzogMCA2NHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pY29uLWNoZWNrIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMzVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bnMtbW9kYWwge1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAyNXB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcblxuICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1kaWFsb2ctYWN0aW9ucyAubWF0LWJ1dHRvbiArIC5tYXQtYnV0dG9uLCAubWF0LWRpYWxvZy1hY3Rpb25zIC5tYXQtYnV0dG9uICsgLm1hdC1yYWlzZWQtYnV0dG9uLCAubWF0LWRpYWxvZy1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbiArIC5tYXQtYnV0dG9uLCAubWF0LWRpYWxvZy1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbiArIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogaW5oZXJpdDtcbiAgICB9XG4gIH1cblxuICAuY3VzdG9tLW1vZGFsLXdhcm5pbmcge1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuXG4gICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgIGNvbG9yOiAjMjkyOTI5O1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mby1tb2RhbCB7XG4gICAgICBwYWRkaW5nOiAwIDAgMTBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgcCwgbGksIG1hdC1pY29uIHtcbiAgICAgICAgY29sb3I6ICMyOTI5Mjk7XG4gICAgICB9XG5cbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bnMtbW9kYWwge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgY29sb3I6ICMyOTI5Mjk7XG4gICAgICB9XG5cbiAgICAgIC5jYW5jZWwge1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRDAwMjFCO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmMDAxZjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYWNjZXB0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwQ0NBMztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMGZmY2M7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY3VzdG9tLW1vZGFsLXN1Y2Nlc3Mge1xuICAgIC5tb2RhbC1oZWFkZXIge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmluZm8tbW9kYWwge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgfVxuXG4gICAgICBwLCBsaSwgbWF0LWljb24ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRucy1tb2RhbCB7XG4gICAgICBidXR0b24ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cblxuICAgICAgLmFjY2VwdCB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMENDQTM7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDBmZmNjO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmN1c3RvbS1tb2RhbC1zdWNjZXNzIHtcbiAgICAubW9kYWwtaGVhZGVyIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5pbmZvLW1vZGFsIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgbWF0LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDcwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIH1cblxuICAgICAgcCwgbGksIG1hdC1pY29uIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bnMtbW9kYWwge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIC5hY2NlcHQge1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBDQ0EzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwZmZjYztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jdXN0b20tbW9kYWwtZXJyb3Ige1xuICAgIC5tb2RhbC1oZWFkZXIge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICBjb2xvcjogJGNvbG9yR3JleTgwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mby1tb2RhbCB7XG4gICAgICBwLCBsaSwgaDMge1xuICAgICAgICBjb2xvcjogJGNvbG9yR3JleTgwO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG5zLW1vZGFsIHtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuXG4gICAgICAuYWNjZXB0IHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwQ0NBMztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMGZmY2M7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubW9kYWwtdmVydGljYWwtYnRucyB7XG4gICAgLmJ0bnMtbW9kYWwge1xuICAgICAgLm1hdC1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5saW5rLXdoaXRlIHtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmN1c3RvbS1tb2RhbC1tZWRpdW0taW5mb3JtYXRpb24ge1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggIzg4ODg4OCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICRjb2xvckdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDUwcHg7XG5cbiAgICAubW9kYWwtaGVhZGVyIHtcbiAgICAgIGJvcmRlcjogbm9uZVxuICAgIH1cblxuICAgIC5tb2RhbC1ib2R5IHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEwcHggNTBweCAxMHB4IDUwcHg7XG5cbiAgICAgIGEge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNsb3NlLW1vZGFsIHtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9jbG9zZS1tb2RhbC5wbmcpIG5vLXJlcGVhdDtcbiAgICAgIGhlaWdodDogMTVweDtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmbG9hdDogcmlnaHQ7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1jb2xvci1hcXVhIHtcbiAgICBtYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3JHcmVlbjtcbiAgICB9XG4gIH1cblxuICAubW9kYWwtY29sb3IteWVsbG93IHtcbiAgICBtYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3JZZWxsb3c7XG4gICAgfVxuICB9XG5cbiAgbWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JQdXJwbGU7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvclJlZDtcbiAgfVxufVxuIiwiQGltcG9ydCBcIn5hc3NldHMvc3R5bGVzL21hdGVyaWFsLnNjc3NcIjtcbkBpbXBvcnQgXCJ+YXNzZXRzL3N0eWxlcy92YXJcIjtcblxuLm1vZGFsLWluZm97XG4gICAgaGVpZ2h0OiAyNjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgaDEge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICBjb2xvcjogJGNvbG9yV2hpdGU7IFxuICAgIH1cbiAgICAuYnRuLXN1Ym1pdF9fc3R5bGV7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yUHVycGxlO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAmOmRpc2FibGVke1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yR3JleTQwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjVmNSAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMjI1cHg7XG4gICAgICAgIGlucHV0e1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICA6Om5nLWRlZXAgLm1hdC1pY29uLWJ1dHRvbntcbiAgICAgICAgd2lkdGg6IDM1cHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHNwYW4ubWF0LWJ1dHRvbi13cmFwcGVye1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4OyBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmVycm9ye1xuICAgIGNvbG9yOiAkY29sb3JSZWQ7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufSIsIiRjb2xvcldoaXRlOiAjZmZmZmZmO1xuJGNvbG9yQmxhY2s6IzAwMDtcbiRjb2xvckdyZWVuOiMwMEJGQjM7XG4kY29sb3JHcmVlbjI6IzAwRTZEQztcbiRjb2xvckdyZWVuMzojNjRGNEU2O1xuJGNvbG9yUHVycGxlOiAjOTIyM0UwO1xuJGNvbG9yUHVycGxlMjogIzVGMjU5RjtcbiRjb2xvclB1cnBsZTM6ICNBOTVFRUE7XG4kY29sb3JHcmV5OiAjRjdGN0Y3O1xuJGNvbG9yR3JleTIwOiAjRDhEOEQ4O1xuJGNvbG9yR3JleTQwOiM5QjlCOUI7XG4kY29sb3JHcmV5ODA6ICMzNDM0MzQ7XG4kY29sb3JCbHVlOiAjRjZGOUZFO1xuXG4kY29sb3JSZWQ6I2QzMmEyYTtcbiRjb2xvclllbGxvdzogI2ZmZmY0MTtcbiRjb2xvclllbGxvdzI6ICNFM0U4Mjk7XG5cbiRmb250UHJpbWFyeTpHZW9tYW5pc3RXb3JkLUJvbGQ7XG4kZm9udFNlY29uZC1SOkJhcmlvbF9SZWd1bGFyO1xuJGZvbnRTZWNvbmQtSTpCYXJpb2xfUmVndWxhcl9JdGFsaWM7XG4kZm9udFNlY29uZC1COkJhcmlvbF9Cb2xkO1xuXG4kY29sb3JHcmV5MzogI2MzYzhkMTtcbiRjb2xvckdyZXk0OnJnYmEoJGNvbG9yR3JleTIwLCAwLjUwKTtcbiIsIkBtaXhpbiBmb250LWZhY2UoJG5hbWUsICRzcmMsICR3ZWlnaHQsICRzdHlsZSkge1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJG5hbWU7XG4gICAgc3JjOiB1cmwocXVvdGUoJHNyYyArICcuZW90JykpLFxuICAgICAgdXJsKHF1b3RlKCRzcmMgKyAnLmVvdD9pZWZpeCcpKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG4gICAgICB1cmwoJHNyYysnLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogJHdlaWdodDtcbiAgICBmb250LXN0eWxlOiAkc3R5bGU7XG4gIH1cbn1cbkBpbmNsdWRlIGZvbnQtZmFjZShcbiAgR2VvbWFuaXN0V29yZC1Cb2xkLFxuICAvIGFzc2V0cy9mb250cy9HZW9tYW5pc3RXb3JkLUJvbGQsXG4gIG5vcm1hbCxcbiAgbm9ybWFsXG4pO1xuQGluY2x1ZGUgZm9udC1mYWNlKFxuICBCYXJpb2xfUmVndWxhcixcbiAgLyBhc3NldHMvZm9udHMvYmFyaW9sX3JlZ3VsYXIsXG4gIG5vcm1hbCxcbiAgbm9ybWFsXG4pO1xuQGluY2x1ZGUgZm9udC1mYWNlKFxuICBCYXJpb2xfUmVndWxhcl9JdGFsaWMsXG4gIC8gYXNzZXRzL2ZvbnRzL2JhcmlvbF9yZWd1bGFyX2l0YWxpYyxcbiAgbm9ybWFsLFxuICBpdGFsaWNcbik7XG5AaW5jbHVkZSBmb250LWZhY2UoQmFyaW9sX0JvbGQsIC8gYXNzZXRzL2ZvbnRzL2JhcmlvbF9ib2xkLCBub3JtYWwsIG5vcm1hbCk7XG5cbkBtaXhpbiBidG5zKFxuICAkYm9yZGVyLFxuICAkcmFkaXVzLFxuICAkcGFkZGluZyxcbiAgJGNvbG9yLFxuICAkZm9udC1zaXplLFxuICAkZmFtaWx5LFxuICAkd2VpZ2h0LFxuICAkd2lkdGgsXG4gICRiZ1xuKSB7XG4gIGJvcmRlcjogc29saWQgJGJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgcGFkZGluZzogJHBhZGRpbmcgJHBhZGRpbmcgKiAyO1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xuICBmb250LWZhbWlseTogJGZhbWlseTtcbiAgbWluLXdpZHRoOiAkd2lkdGg7XG4gIGJhY2tncm91bmQ6ICRiZztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gICY6Zm9jdXMsXG4gICY6dmlzaXRlZCB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbGluaygkY29sb3IsICRzaXplLWZvbnQsICR3ZWlnaHQpIHtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC1zaXplOiAkc2l6ZS1mb250O1xuICBmb250LXdlaWdodDogJHdlaWdodDtcbn1cblxuQG1peGluIGljb25zKCRiZ2ksICR3aWR0aCwgJGhlaWdodCwgJG1hcmdpbikge1xuICBiYWNrZ3JvdW5kOiAkYmdpO1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAkbWFyZ2luO1xufVxuXG5AbWl4aW4gbWVkaWEoJGNvbnN1bHRhKSB7XG4gICRtZWRpYS14eHM6ICcobWF4LXdpZHRoIDogMzIwcHgpJzsgLy8gaVBob25lIFJldGluYVxuICAkbWVkaWEteHM6ICcobWF4LXdpZHRoIDogNDgwcHgpJzsgLy8gVGVsZWZvbm9zXG4gICRtZWRpYS1zbTogJyhtYXgtd2lkdGg6IDc2OHB4KSc7IC8vIFRhYmxldHNcbiAgJG1lZGlhLW1kOiAnKG1heC13aWR0aDogOTkycHgpJzsgLy8gRXNjcml0b3Jpb3NcbiAgJG1lZGlhLWxnOiAnKG1heC13aWR0aDogMTIwMHB4KSc7IC8vIFJlc29sdWNpb25lcyBncmFuZGVzXG4gICRtZWRpYS14bGc6ICcobWF4LXdpZHRoOiAxNjAwcHgpJzsgLy8gUmVzb2x1Y2lvbmVzIGV4dHJhZ3JhbmRlc1xuXG4gIEBpZiAkY29uc3VsdGEgPT0geHhzIHtcbiAgICBAbWVkaWEgI3skbWVkaWEteHhzfSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbiAgQGlmICRjb25zdWx0YSA9PSB4cyB7XG4gICAgQG1lZGlhICN7JG1lZGlhLXhzfSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJGNvbnN1bHRhID09IHNtIHtcbiAgICBAbWVkaWEgI3skbWVkaWEtc219IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkY29uc3VsdGEgPT0gbWQge1xuICAgIEBtZWRpYSAjeyRtZWRpYS1tZH0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRjb25zdWx0YSA9PSBsZyB7XG4gICAgQG1lZGlhICN7JG1lZGlhLWxnfSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJGNvbnN1bHRhID09IHhsZyB7XG4gICAgQG1lZGlhICN7JG1lZGlhLXhsZ30ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgZW50cmFkYSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjVweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5mYWRlLWItdCB7XG4gIGFuaW1hdGlvbjogZW50cmFkYSAwLjVzIGVhc2U7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBvcGFjaXR5OiAwO1xufVxuIiwiQGltcG9ydCBcInZhclwiO1xuQGltcG9ydCBcIm1vZGFsc1wiO1xuQGltcG9ydCBcIm1peGluXCI7XG5AaW1wb3J0IFwibWVkaWFxdWVyaWVzXCI7XG5cbi8qQnV0dG9ucyovXG5idXR0b24ubWF0LWJ1dHRvbntcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG4ubWF0LWJ1dHRvbi5idG5zLXByaW1hcnkge1xuICBAaW5jbHVkZSBidG5zKDBweCB0cmFuc3BhcmVudCw0cHgsIDE0cHgsICRjb2xvcldoaXRlLCAyMHB4LCAkZm9udFNlY29uZC1SLCBub3JtYWwsIDIyNXB4LCAkY29sb3JQdXJwbGUpO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JQdXJwbGUyO1xuICB9XG4gICZbZGlzYWJsZWRdW2Rpc2FibGVkXXtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY29sb3I6ICRjb2xvckdyZXk0MDtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JHcmV5O1xuICB9XG59XG4ubWF0LWJ1dHRvbi5idG5zLXNlY29uZGFyeSB7XG4gIEBpbmNsdWRlIGJ0bnMoMnB4ICRjb2xvclB1cnBsZSwgMjVweCwgOHB4LCAkY29sb3JQdXJwbGUsIDE2cHgsICRmb250U2Vjb25kLUIsIGJvbGQsIDIyNXB4LCB0cmFuc3BhcmVudCk7XG4gIG1pbi13aWR0aDogMTQ2cHg7XG4gICY6aG92ZXIsJltkaXNhYmxlZF1bZGlzYWJsZWRdOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JQdXJwbGU7XG4gICAgY29sb3I6ICRjb2xvcldoaXRlO1xuICB9XG4gICZbZGlzYWJsZWRdW2Rpc2FibGVkXSwgXG4gICYuZGlzYWJsZWR7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGNvbG9yOiAkY29sb3JQdXJwbGU7XG4gIH1cbn1cblxuc3Bhbi5tYXQtYnV0dG9uLmJ0bnMtc2Vjb25kYXJ5IHtcbiAgcGFkZGluZzowIDE2cHg7XG59XG5cbi5tYXQtYnV0dG9uLmJ0bnMtc2Vjb25kYXJ5LmJ0bnMtc2VjLXJlZCB7XG4gIGJvcmRlci1jb2xvcjogJGNvbG9yUmVkO1xuICBjb2xvcjogJGNvbG9yUmVkO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JSZWQ7XG4gICAgY29sb3I6ICRjb2xvcldoaXRlO1xuICB9XG59XG4ubWF0LWJ1dHRvbi5jbGVhci1iZ3tcbiAgJjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JQdXJwbGU7XG4gIH1cbiAgJjpkaXNhYmxlZHtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxufVxuLm1hdC1idXR0b24uZGFyay1iZ3tcbiAgYmFja2dyb3VuZDokY29sb3JHcmVlbjtcbiAgJjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJGNvbG9yR3JlZW4sNSUpO1xuICB9XG4gICY6ZGlzYWJsZWR7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yR3JlZW4zO1xuICB9XG4gICZbZGlzYWJsZWRdW2Rpc2FibGVkXXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAkY29sb3JHcmV5NDA7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yR3JleTtcbiAgfVxufVxuXG4ubWF0LWJ1dHRvbi5idG5zLXNlY29uZGFyeS5kYXJrLWJnIHtcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3JXaGl0ZTtcbiAgY29sb3I6ICRjb2xvcldoaXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTBweCAzOXB4O1xuICAmOmhvdmVye1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yV2hpdGU7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yV2hpdGU7XG4gICAgY29sb3I6ICRjb2xvckdyZWVuO1xuICB9XG4gICY6ZGlzYWJsZWR7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yR3JlZW4zO1xuICB9XG4gICZbZGlzYWJsZWRdW2Rpc2FibGVkXXtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5hcnRpY2xlIHtcbiAgJiAuYWRkLWJ1dHRvbjpob3ZlciwgXG4gICYgLmFkZC1idXR0b246Zm9jdXMge1xuICAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtcbiAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICB9XG59IFxufVxuLypFbmQgYnV0dG9ucyovXG5cbi8qZXN0aWxvcyBnZW5lcmFsZXMqL1xuaDEsaDIsaDMsaDQsaDUsaDYge1xuICBmb250LWZhbWlseTogJGZvbnRQcmltYXJ5O1xufVxuXG5wLCBhLCB1bCBsaSwgb2wsIGxpLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udFNlY29uZC1SO1xufVxuXG5zdHJvbmcsIGIsIC5saW5rLCB0aCB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udFNlY29uZC1CO1xufVxuXG50YWJsZSB0ZCB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udFNlY29uZC1SO1xufVxuXG4vKmZpbiBkZSBlc3RpbG9zIGdlbmVyYWxlcyovIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModalActualizarFechaInvitacionEmpresaComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-modal-actualizar-fecha-invitacion-empresa',
            templateUrl: './modal-actualizar-fecha-invitacion-empresa.component.html',
            styleUrls: ['./modal-actualizar-fecha-invitacion-empresa.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _app_shared_servicios_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _componentes_formularios_remplazar_letras_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./componentes/formularios/remplazar-letras.pipe */
      "qcd3");
      /* harmony import */


      var _componentes_btn_cerrar_session_btn_cerrar_session_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./componentes/btn-cerrar-session/btn-cerrar-session.component */
      "vBoq");
      /* harmony import */


      var _app_modulos_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @app/modulos/material/material.module */
      "B8FV");
      /* harmony import */


      var _app_shared_idle_user_idle_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @app/shared/idle-user/idle-usuario.service */
      "omux");
      /* harmony import */


      var _componentes_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./componentes/custom-modal/custom-modal.component */
      "+dUk");
      /* harmony import */


      var _servicios_custom_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./servicios/custom-modal.service */
      "XD+r");
      /* harmony import */


      var _componentes_mostrar_error_formularios_mostrar_error_formularios_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./componentes/mostrar-error-formularios/mostrar-error-formularios.component */
      "MQsH");
      /* harmony import */


      var _componentes_modal_actualizar_fecha_invitacion_empresa_modal_actualizar_fecha_invitacion_empresa_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./componentes/modal-actualizar-fecha-invitacion-empresa/modal-actualizar-fecha-invitacion-empresa.component */
      "NrxG");
      /* harmony import */


      var _componentes_invitaciones_empresa_invitaciones_empresa_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./componentes/invitaciones-empresa/invitaciones-empresa.component */
      "4Ox3");
      /* harmony import */


      var _servicios_shared_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./servicios/shared.service */
      "IuWr");
      /* harmony import */


      var _app_shared_servicios_cookies_utils_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @app/shared/servicios/cookies-utils.service */
      "Shws");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-cookie-service */
      "z4EA");
      /* harmony import */


      var _app_shared_pipes_HumanizePipe_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @app/shared/pipes/HumanizePipe.pipe */
      "rwFa");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        providers: [_app_shared_idle_user_idle_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UserIdleService"], _servicios_custom_modal_service__WEBPACK_IMPORTED_MODULE_8__["CustomModalService"], _servicios_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"], _app_shared_servicios_cookies_utils_service__WEBPACK_IMPORTED_MODULE_13__["CookiesUtilsService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__["CookieService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_modulos_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_componentes_formularios_remplazar_letras_pipe__WEBPACK_IMPORTED_MODULE_3__["RemplazarLetrasPipe"], _componentes_btn_cerrar_session_btn_cerrar_session_component__WEBPACK_IMPORTED_MODULE_4__["BtnCerrarSessionComponent"], _componentes_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_7__["CustomModalComponent"], _componentes_mostrar_error_formularios_mostrar_error_formularios_component__WEBPACK_IMPORTED_MODULE_9__["MostrarErrorFormulariosComponent"], _componentes_modal_actualizar_fecha_invitacion_empresa_modal_actualizar_fecha_invitacion_empresa_component__WEBPACK_IMPORTED_MODULE_10__["ModalActualizarFechaInvitacionEmpresaComponent"], _componentes_invitaciones_empresa_invitaciones_empresa_component__WEBPACK_IMPORTED_MODULE_11__["InvitacionesEmpresaComponent"], _app_shared_pipes_HumanizePipe_pipe__WEBPACK_IMPORTED_MODULE_15__["HumanizePipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_modulos_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]],
          exports: [_componentes_formularios_remplazar_letras_pipe__WEBPACK_IMPORTED_MODULE_3__["RemplazarLetrasPipe"], _componentes_btn_cerrar_session_btn_cerrar_session_component__WEBPACK_IMPORTED_MODULE_4__["BtnCerrarSessionComponent"], _componentes_mostrar_error_formularios_mostrar_error_formularios_component__WEBPACK_IMPORTED_MODULE_9__["MostrarErrorFormulariosComponent"], _componentes_invitaciones_empresa_invitaciones_empresa_component__WEBPACK_IMPORTED_MODULE_11__["InvitacionesEmpresaComponent"], _app_shared_pipes_HumanizePipe_pipe__WEBPACK_IMPORTED_MODULE_15__["HumanizePipe"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_modulos_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]],
            providers: [_app_shared_idle_user_idle_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UserIdleService"], _servicios_custom_modal_service__WEBPACK_IMPORTED_MODULE_8__["CustomModalService"], _servicios_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"], _app_shared_servicios_cookies_utils_service__WEBPACK_IMPORTED_MODULE_13__["CookiesUtilsService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__["CookieService"]],
            declarations: [_componentes_formularios_remplazar_letras_pipe__WEBPACK_IMPORTED_MODULE_3__["RemplazarLetrasPipe"], _componentes_btn_cerrar_session_btn_cerrar_session_component__WEBPACK_IMPORTED_MODULE_4__["BtnCerrarSessionComponent"], _componentes_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_7__["CustomModalComponent"], _componentes_mostrar_error_formularios_mostrar_error_formularios_component__WEBPACK_IMPORTED_MODULE_9__["MostrarErrorFormulariosComponent"], _componentes_modal_actualizar_fecha_invitacion_empresa_modal_actualizar_fecha_invitacion_empresa_component__WEBPACK_IMPORTED_MODULE_10__["ModalActualizarFechaInvitacionEmpresaComponent"], _componentes_invitaciones_empresa_invitaciones_empresa_component__WEBPACK_IMPORTED_MODULE_11__["InvitacionesEmpresaComponent"], _app_shared_pipes_HumanizePipe_pipe__WEBPACK_IMPORTED_MODULE_15__["HumanizePipe"]],
            exports: [_componentes_formularios_remplazar_letras_pipe__WEBPACK_IMPORTED_MODULE_3__["RemplazarLetrasPipe"], _componentes_btn_cerrar_session_btn_cerrar_session_component__WEBPACK_IMPORTED_MODULE_4__["BtnCerrarSessionComponent"], _componentes_mostrar_error_formularios_mostrar_error_formularios_component__WEBPACK_IMPORTED_MODULE_9__["MostrarErrorFormulariosComponent"], _componentes_invitaciones_empresa_invitaciones_empresa_component__WEBPACK_IMPORTED_MODULE_11__["InvitacionesEmpresaComponent"], _app_shared_pipes_HumanizePipe_pipe__WEBPACK_IMPORTED_MODULE_15__["HumanizePipe"]],
            entryComponents: [_componentes_modal_actualizar_fecha_invitacion_empresa_modal_actualizar_fecha_invitacion_empresa_component__WEBPACK_IMPORTED_MODULE_10__["ModalActualizarFechaInvitacionEmpresaComponent"], _componentes_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_7__["CustomModalComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "PsGn":
    /*!****************************************************************************!*\
      !*** ./src/app/modulos/usuario/state-management/actions/usuario.action.ts ***!
      \****************************************************************************/

    /*! exports provided: AUTENTICAR_USUARIO_SUCCESS, CERRAR_SESSION_SUCCESS */

    /***/
    function PsGn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AUTENTICAR_USUARIO_SUCCESS", function () {
        return AUTENTICAR_USUARIO_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CERRAR_SESSION_SUCCESS", function () {
        return CERRAR_SESSION_SUCCESS;
      });

      var AUTENTICAR_USUARIO_SUCCESS = '@lapso-operaciones/AUTENTICAR_USUARIO_SUCCESS';
      var CERRAR_SESSION_SUCCESS = '@lapso-operaciones/CERRAR_SESSION_SUCCESS';
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Shws":
    /*!***********************************************************!*\
      !*** ./src/app/shared/servicios/cookies-utils.service.ts ***!
      \***********************************************************/

    /*! exports provided: CookiesUtilsService */

    /***/
    function Shws(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CookiesUtilsService", function () {
        return CookiesUtilsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-cookie-service */
      "z4EA");

      var CookiesUtilsService = /*#__PURE__*/function () {
        function CookiesUtilsService(cookieService) {
          _classCallCheck(this, CookiesUtilsService);

          this.cookieService = cookieService;
        }

        _createClass(CookiesUtilsService, [{
          key: "guardarInformacionCookie",
          value: function guardarInformacionCookie(identificadorCookie, valorDatos) {
            var expiracionTiempo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
            var jsonDatos = JSON.stringify(valorDatos);
            this.cookieService.set(identificadorCookie, jsonDatos, expiracionTiempo, '/');
          }
        }, {
          key: "obtenerInformacionCookie",
          value: function obtenerInformacionCookie(identificadorCookie) {
            var stringCookie = this.cookieService.get(identificadorCookie);
            var jsonCookie = stringCookie ? JSON.parse(stringCookie) : '';
            return jsonCookie;
          }
        }, {
          key: "eliminarCookies",
          value: function eliminarCookies(parametro) {
            parametro ? this.cookieService["delete"](parametro) : this.cookieService.deleteAll();
          }
        }]);

        return CookiesUtilsService;
      }();

      CookiesUtilsService.ɵfac = function CookiesUtilsService_Factory(t) {
        return new (t || CookiesUtilsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]));
      };

      CookiesUtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CookiesUtilsService,
        factory: CookiesUtilsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookiesUtilsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _usuario_state_management_actions_usuario_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @usuario/state-management/actions/usuario.action */
      "PsGn");
      /* harmony import */


      var _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/servicios/api.service */
      "k5QC");
      /* harmony import */


      var _app_shared_idle_user_idle_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/shared/idle-user/idle-usuario.service */
      "omux");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "tqRt");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(apiService, userIdle, store) {
          _classCallCheck(this, AppComponent);

          this.apiService = apiService;
          this.userIdle = userIdle;
          this.store = store;
          console.log('WebAppOperaciones Version: ', __webpack_require__(
          /*! ../../package.json */
          "kiQV").version + '');
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validarSesionUsuario();
          }
        }, {
          key: "validarSesionUsuario",
          value: function validarSesionUsuario() {
            var _this10 = this;

            this.apiService.getCurrentUser().then(function (cognitoUserSession) {
              return {
                sub: cognitoUserSession.attributes.sub,
                username: cognitoUserSession.username,
                email: cognitoUserSession.attributes.email,
                rol: cognitoUserSession.attributes['custom:role'],
                uuid: cognitoUserSession.attributes['custom:uuid'],
                pais: cognitoUserSession.attributes['custom:pais']
              };
            }).then(function (userData) {
              _this10.userIdle.startWatching();

              _this10.store.dispatch({
                type: _usuario_state_management_actions_usuario_action__WEBPACK_IMPORTED_MODULE_1__["AUTENTICAR_USUARIO_SUCCESS"],
                payload: userData
              });
            }, function (err) {
              return console.error('ERROR obteniendo session', err);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_servicios_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_idle_user_idle_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UserIdleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }, {
            type: _app_shared_idle_user_idle_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UserIdleService"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "UCRO":
    /*!************************************!*\
      !*** ./src/app/CombineReducers.ts ***!
      \************************************/

    /*! exports provided: rootReducer */

    /***/
    function UCRO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "rootReducer", function () {
        return rootReducer;
      });
      /* harmony import */


      var _usuario_state_management_reducers_usuario_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @usuario/state-management/reducers/usuario.reducer */
      "mv7o");
      /* harmony import */


      var _coaching_state_management_reducers_coaching_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @coaching/state-management/reducers/coaching.reducer */
      "gTJV");

      var rootReducer = {
        usuario: _usuario_state_management_reducers_usuario_reducer__WEBPACK_IMPORTED_MODULE_0__["usuarioReducer"],
        coaching: _coaching_state_management_reducers_coaching_reducer__WEBPACK_IMPORTED_MODULE_1__["coachingReducer"]
      };
      /***/
    },

    /***/
    "XD+r":
    /*!**********************************************************!*\
      !*** ./src/app/shared/servicios/custom-modal.service.ts ***!
      \**********************************************************/

    /*! exports provided: CustomModalService */

    /***/
    function XDR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomModalService", function () {
        return CustomModalService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @app/modulos/dashboard/modelo/enums/CustomModalTypes.enum */
      "bti7");
      /* harmony import */


      var _componentes_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../componentes/custom-modal/custom-modal.component */
      "+dUk");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");

      var CustomModalService = /*#__PURE__*/function () {
        function CustomModalService(dialog) {
          _classCallCheck(this, CustomModalService);

          this.dialog = dialog;
          this.modalSuccess = {
            tipo: _app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_1__["CustomModalType"].SUCCESS,
            panelClass: ['medium-screen-dialog', 'modal-color-aqua'],
            cssClass: 'custom-modal-success'
          };
          this.modalError = {
            tipo: _app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_1__["CustomModalType"].ERROR,
            panelClass: ['medium-screen-dialog'],
            cssClass: 'custom-modal-error'
          };
          this.modalInfo = {
            tipo: _app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_1__["CustomModalType"].INFO,
            width: '100%',
            height: '100%',
            panelClass: ['full-screen-dialog', 'modal-color-aqua'],
            cssClass: 'custom-modal-information'
          };
          this.modalWarning = {
            tipo: _app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_1__["CustomModalType"].WARNING,
            panelClass: ['medium-screen-dialog'],
            cssClass: 'custom-modal-warning'
          };
          this.modalConfirmation = {
            tipo: _app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_1__["CustomModalType"].WARNING,
            panelClass: ['medium-screen-dialog'],
            cssClass: 'custom-modal-warning'
          };
        }

        _createClass(CustomModalService, [{
          key: "abrirModal",
          value: function abrirModal(type, data, afterClosedModal) {
            var config = this.obtenerModal(type);
            var dialog;
            dialog = this.dialog.open(_componentes_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_2__["CustomModalComponent"], {
              height: config.height,
              width: config.width,
              panelClass: config.panelClass,
              data: Object.assign({}, config, {
                tipo: type
              }, data)
            });
            dialog.afterClosed().subscribe(function () {
              if (afterClosedModal) {
                afterClosedModal();
              }
            });
            return dialog;
          }
        }, {
          key: "obtenerModal",
          value: function obtenerModal(type) {
            switch (type) {
              case _app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_1__["CustomModalType"].SUCCESS:
                return this.modalSuccess;

              case _app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_1__["CustomModalType"].ERROR:
                return this.modalError;

              case _app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_1__["CustomModalType"].INFO:
                return this.modalInfo;

              case _app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_1__["CustomModalType"].WARNING:
                return this.modalWarning;

              case _app_modulos_dashboard_modelo_enums_CustomModalTypes_enum__WEBPACK_IMPORTED_MODULE_1__["CustomModalType"].CONFIRMATION:
                return this.modalConfirmation;
            }
          }
        }]);

        return CustomModalService;
      }();

      CustomModalService.ɵfac = function CustomModalService_Factory(t) {
        return new (t || CustomModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]));
      };

      CustomModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CustomModalService,
        factory: CustomModalService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomModalService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _CombineReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./CombineReducers */
      "UCRO");
      /* harmony import */


      var _CombineEffects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./CombineEffects */
      "464K");
      /* harmony import */


      var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/locales/es-MX */
      "LMmM");
      /* harmony import */


      var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/effects */
      "7bNT");
      /* harmony import */


      var _core_guards_pais_ambiente_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/guards/pais-ambiente.guard */
      "/9Ug");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/store */
      "tqRt");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @app/app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_shared_servicios_cargando_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @app/shared/servicios/cargando.service */
      "8mHT");
      /* harmony import */


      var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _core_guards_auth_router_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @core/guards/auth-router.guard */
      "h3to");
      /* harmony import */


      var _app_app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @app/app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _usuario_usuario_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @usuario/usuario.module */
      "0NIx");
      /* harmony import */


      var _qiip_lib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @qiip/lib */
      "NPoq");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_14__["registerLocaleData"])(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_3___default.a);

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_14__["HashLocationStrategy"]
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],
          useValue: 'es-mx'
        }, _core_guards_auth_router_guard__WEBPACK_IMPORTED_MODULE_12__["AuthRouterGuard"], _app_shared_servicios_cargando_service__WEBPACK_IMPORTED_MODULE_10__["CargandoService"], _core_guards_pais_ambiente_guard__WEBPACK_IMPORTED_MODULE_5__["PaisAmbienteGuard"]],
        imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_CombineReducers__WEBPACK_IMPORTED_MODULE_1__["rootReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot(_CombineEffects__WEBPACK_IMPORTED_MODULE_2__["rootEffects"]), _app_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _usuario_usuario_module__WEBPACK_IMPORTED_MODULE_15__["UsuarioModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _qiip_lib__WEBPACK_IMPORTED_MODULE_16__["QiipLibModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
          imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsRootModule"], _app_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _usuario_usuario_module__WEBPACK_IMPORTED_MODULE_15__["UsuarioModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _qiip_lib__WEBPACK_IMPORTED_MODULE_16__["QiipLibModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
            imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_CombineReducers__WEBPACK_IMPORTED_MODULE_1__["rootReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot(_CombineEffects__WEBPACK_IMPORTED_MODULE_2__["rootEffects"]), _app_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _usuario_usuario_module__WEBPACK_IMPORTED_MODULE_15__["UsuarioModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _qiip_lib__WEBPACK_IMPORTED_MODULE_16__["QiipLibModule"]],
            providers: [{
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"],
              useClass: _angular_common__WEBPACK_IMPORTED_MODULE_14__["HashLocationStrategy"]
            }, {
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],
              useValue: 'es-mx'
            }, _core_guards_auth_router_guard__WEBPACK_IMPORTED_MODULE_12__["AuthRouterGuard"], _app_shared_servicios_cargando_service__WEBPACK_IMPORTED_MODULE_10__["CargandoService"], _core_guards_pais_ambiente_guard__WEBPACK_IMPORTED_MODULE_5__["PaisAmbienteGuard"]],
            bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bti7":
    /*!*************************************************************************!*\
      !*** ./src/app/modulos/dashboard/modelo/enums/CustomModalTypes.enum.ts ***!
      \*************************************************************************/

    /*! exports provided: CustomModalType */

    /***/
    function bti7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomModalType", function () {
        return CustomModalType;
      });

      var CustomModalType;

      (function (CustomModalType) {
        CustomModalType[CustomModalType["SUCCESS"] = 0] = "SUCCESS";
        CustomModalType[CustomModalType["ERROR"] = 1] = "ERROR";
        CustomModalType[CustomModalType["INFO"] = 2] = "INFO";
        CustomModalType[CustomModalType["WARNING"] = 3] = "WARNING";
        CustomModalType[CustomModalType["CONFIRMATION"] = 4] = "CONFIRMATION";
      })(CustomModalType || (CustomModalType = {}));
      /***/

    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "eZJZ":
    /*!********************************************!*\
      !*** ./src/app/core/guards/login.guard.ts ***!
      \********************************************/

    /*! exports provided: LoginGuardService */

    /***/
    function eZJZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginGuardService", function () {
        return LoginGuardService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "tqRt");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/servicios/api.service */
      "k5QC");

      var LoginGuardService = /*#__PURE__*/function () {
        function LoginGuardService(store, router, apiService) {
          _classCallCheck(this, LoginGuardService);

          this.store = store;
          this.router = router;
          this.apiService = apiService;
        }

        _createClass(LoginGuardService, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", this.validarAccesoSegunRol());

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "validarAccesoSegunRol",
          value: function validarAccesoSegunRol() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this11 = this;

              var sesion;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.prev = 0;
                      _context4.next = 3;
                      return this.apiService.getCurrentUser();

                    case 3:
                      sesion = _context4.sent;

                      if (!sesion) {
                        _context4.next = 8;
                        break;
                      }

                      return _context4.abrupt("return", this.store.select('usuario', 'rol').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
                        switch (x) {
                          case 'operador-back':
                            _this11.redirect('dashboard');

                            break;

                          case 'coach':
                            _this11.redirect('coaching');

                            break;

                          case 'comercial':
                            _this11.redirect('comercial');

                            break;

                          default:
                            _this11.redirect('rol-invalido');

                            break;
                        }

                        return false;
                      })).toPromise());

                    case 8:
                      return _context4.abrupt("return", true);

                    case 9:
                      _context4.next = 14;
                      break;

                    case 11:
                      _context4.prev = 11;
                      _context4.t0 = _context4["catch"](0);
                      return _context4.abrupt("return", true);

                    case 14:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[0, 11]]);
            }));
          }
        }, {
          key: "redirect",
          value: function redirect(path) {
            var currentURL = window.location.href;

            if (currentURL.indexOf(path) === -1) {
              this.router.navigate([path]);
            }
          }
        }]);

        return LoginGuardService;
      }();

      LoginGuardService.ɵfac = function LoginGuardService_Factory(t) {
        return new (t || LoginGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_servicios_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]));
      };

      LoginGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LoginGuardService,
        factory: LoginGuardService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginGuardService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "gTJV":
    /*!********************************************************************************!*\
      !*** ./src/app/modulos/coaching/state-management/reducers/coaching.reducer.ts ***!
      \********************************************************************************/

    /*! exports provided: coachingReducer */

    /***/
    function gTJV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coachingReducer", function () {
        return coachingReducer;
      });
      /* harmony import */


      var _actions_coaching_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../actions/coaching.action */
      "559a");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../environments/environment */
      "AytR");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment-timezone */
      "f0Wu");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);

      var initialState = {
        idCoach: null,
        nombreCompleto: null,
        idSesion: null,
        rol: null,
        sesionesVigentes: [],
        sesionesVencidas: [],
        sesionesAgendadas: [],
        temas: [],
        coaches: [],
        zonaHoraria: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].zone
      };

      function coachingReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

        var _ref = arguments.length > 1 ? arguments[1] : undefined,
            type = _ref.type,
            payload = _ref.payload;

        switch (type) {
          case _actions_coaching_action__WEBPACK_IMPORTED_MODULE_0__["CONSULTA_SESIONES_COACH_SUCCESS"]:
            return Object.assign({}, state, {
              idCoach: payload.idCoach,
              nombreCompleto: payload.nombreCompleto,
              idSesion: payload.idSesion,
              rol: payload.rol,
              sesionesVigentes: actualizarFechasSegunZona(payload.sesionesVigentes, state.zonaHoraria)
            });

          case _actions_coaching_action__WEBPACK_IMPORTED_MODULE_0__["CONSULTA_SESIONES_COACH_EXPIRED"]:
            return Object.assign({}, state, {
              sesionesVencidas: actualizarFechasSegunZona(payload.sesionesVigentes, state.zonaHoraria)
            });

          case _actions_coaching_action__WEBPACK_IMPORTED_MODULE_0__["CONSULTA_TEMAS_SUCCESS"]:
            return Object.assign({}, state, {
              temas: payload
            });

          case _actions_coaching_action__WEBPACK_IMPORTED_MODULE_0__["CONSULTA_COACHES_SUCCESS"]:
            return Object.assign({}, state, {
              coaches: payload
            });

          case _actions_coaching_action__WEBPACK_IMPORTED_MODULE_0__["ACTUALIZAR_ZONA_HORARIA"]:
            return Object.assign({}, state, {
              zonaHoraria: payload,
              sesionesVigentes: actualizarFechasSegunZona(state.sesionesVigentes, payload),
              sesionesVencidas: actualizarFechasSegunZona(state.sesionesVencidas, payload)
            });

          default:
            return state;
        }
      }

      function actualizarFechasSegunZona(sesionesVigentes, zonaHoraria) {
        return sesionesVigentes.map(function (value) {
          return Object.assign(Object.assign({}, value), {
            fechaInicioMoment: moment_timezone__WEBPACK_IMPORTED_MODULE_2__(value.fechaInicio).tz(zonaHoraria),
            fechaFinMoment: moment_timezone__WEBPACK_IMPORTED_MODULE_2__(value.fechaFin).tz(zonaHoraria)
          });
        });
      }
      /***/

    },

    /***/
    "h3to":
    /*!**************************************************!*\
      !*** ./src/app/core/guards/auth-router.guard.ts ***!
      \**************************************************/

    /*! exports provided: AuthRouterGuard */

    /***/
    function h3to(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRouterGuard", function () {
        return AuthRouterGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/servicios/api.service */
      "k5QC");

      var AuthRouterGuard = /*#__PURE__*/function () {
        function AuthRouterGuard(router, apiService) {
          _classCallCheck(this, AuthRouterGuard);

          this.router = router;
          this.apiService = apiService;
        }

        _createClass(AuthRouterGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return this.validarAccesoSegunSesion();
          }
        }, {
          key: "canLoad",
          value: function canLoad(route, segments) {
            return this.validarAccesoSegunSesion();
          }
        }, {
          key: "validarAccesoSegunSesion",
          value: function validarAccesoSegunSesion() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var sesion;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;
                      _context5.next = 3;
                      return this.apiService.getCurrentUser();

                    case 3:
                      sesion = _context5.sent;

                      if (!sesion) {
                        _context5.next = 8;
                        break;
                      }

                      return _context5.abrupt("return", true);

                    case 8:
                      return _context5.abrupt("return", this.denegarAcceso());

                    case 9:
                      _context5.next = 14;
                      break;

                    case 11:
                      _context5.prev = 11;
                      _context5.t0 = _context5["catch"](0);
                      return _context5.abrupt("return", this.denegarAcceso());

                    case 14:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[0, 11]]);
            }));
          }
        }, {
          key: "denegarAcceso",
          value: function denegarAcceso() {
            this.router.navigate(['login']);
            return false;
          }
        }]);

        return AuthRouterGuard;
      }();

      AuthRouterGuard.ɵfac = function AuthRouterGuard_Factory(t) {
        return new (t || AuthRouterGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_servicios_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      AuthRouterGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthRouterGuard,
        factory: AuthRouterGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthRouterGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "k5QC":
    /*!***********************************************!*\
      !*** ./src/app/core/servicios/api.service.ts ***!
      \***********************************************/

    /*! exports provided: ApiService */

    /***/
    function k5QC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @aws-amplify/auth */
      "AO/9");
      /* harmony import */


      var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @aws-amplify/api */
      "Gyle");
      /* harmony import */


      var _qiip_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @qiip/core */
      "YTi3");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(utilsService) {
          _classCallCheck(this, ApiService);

          this.utilsService = utilsService;
          this.API_NAME = 'qiipApiGateway';
          this.headers = {
            'Content-Type': 'application/json'
          };
        }

        _createClass(ApiService, [{
          key: "getCurrentUser",
          value: function getCurrentUser() {
            return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["default"].currentAuthenticatedUser();
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var sesion;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.prev = 0;
                      _context6.next = 3;
                      return this.getCurrentUser();

                    case 3:
                      sesion = _context6.sent;
                      return _context6.abrupt("return", !!sesion);

                    case 7:
                      _context6.prev = 7;
                      _context6.t0 = _context6["catch"](0);
                      return _context6.abrupt("return", false);

                    case 10:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[0, 7]]);
            }));
          }
        }, {
          key: "getCurrentSesion",
          value: function getCurrentSesion() {
            return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["default"].currentSession();
          }
        }, {
          key: "confirmSignUp",
          value: function confirmSignUp(phone, code) {
            return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["default"].confirmSignUp(phone, code);
          }
        }, {
          key: "signUp",
          value: function signUp(body) {
            return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["default"].signUp(body);
          }
        }, {
          key: "singIn",
          value: function singIn(user, password) {
            return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["default"].signIn(user, password);
          }
        }, {
          key: "singOut",
          value: function singOut() {
            return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["default"].signOut();
          }
        }, {
          key: "get",
          value: function get(url, queryParams, headers) {
            return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_3__["default"].get(this.API_NAME, url, {
              headers: this.getHeaders(headers),
              queryStringParameters: queryParams
            });
          }
        }, {
          key: "getBlob",
          value: function getBlob(url, queryParams, headers) {
            return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_3__["default"].get(this.API_NAME, url, {
              headers: this.getHeaders(headers),
              queryStringParameters: queryParams,
              responseType: 'blob'
            });
          }
        }, {
          key: "post",
          value: function post(url, body, headers) {
            return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_3__["default"].post(this.API_NAME, url, {
              headers: this.getHeaders(headers),
              body: body
            });
          }
        }, {
          key: "refreshSesion",
          value: function refreshSesion() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var cognitoUser, currentSession;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.prev = 0;
                      _context7.next = 3;
                      return this.getCurrentUser();

                    case 3:
                      cognitoUser = _context7.sent;
                      _context7.next = 6;
                      return this.getCurrentSesion();

                    case 6:
                      currentSession = _context7.sent;
                      cognitoUser.refreshSession(currentSession.getRefreshToken(), function (err, session) {
                        console.error('session', err, session);
                      });
                      return _context7.abrupt("return");

                    case 11:
                      _context7.prev = 11;
                      _context7.t0 = _context7["catch"](0);
                      console.error('Unable to refresh Token', _context7.t0);
                      return _context7.abrupt("return");

                    case 15:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[0, 11]]);
            }));
          }
        }, {
          key: "getCorrelationIdHeader",
          value: function getCorrelationIdHeader() {
            return {
              'correlation-id': this.utilsService.uuid()
            };
          }
        }, {
          key: "getHeaders",
          value: function getHeaders(headers) {
            return Object.assign({}, this.headers, headers, this.getCorrelationIdHeader());
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_qiip_core__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _qiip_core__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kiQV":
    /*!**********************!*\
      !*** ./package.json ***!
      \**********************/

    /*! exports provided: name, version, license, scripts, husky, lint-staged, private, dependencies, devDependencies, lastCommit, default */

    /***/
    function kiQV(module) {
      module.exports = JSON.parse("{\"name\":\"web-app-operaciones\",\"version\":\"1.27.0\",\"license\":\"MIT\",\"scripts\":{\"ng-high-memory:pe-dev\":\"node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng build --c=pe-dev\",\"ng-high-memory:mx-dev\":\"node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng build --c=mx-dev\",\"ng-high-memory:co-dev\":\"node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng build --c=co-dev\",\"ng-high-memory:pe-qa\":\"node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng build --configuration=pe-qa\",\"ng-high-memory:mx-qa\":\"node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng build --configuration=mx-qa\",\"ng-high-memory:co-qa\":\"node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng build --configuration=co-qa\",\"ng-high-memory:pe-prod\":\"node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng build --configuration=pe-production\",\"ng-high-memory:mx-prod\":\"node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng build --configuration=mx-production\",\"ng-high-memory:co-prod\":\"node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng build --configuration=co-production\",\"ng\":\"ng\",\"preinstall\":\"\",\"start\":\"ng serve\",\"build\":\"ng build --prod\",\"test\":\"ng test --watch=false --code-coverage\",\"test:coverage\":\"ng test --code-coverage true --watch false\",\"view:coverage\":\"http-server -c-1 -o -p 9875 ./coverage\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"i18n\":\"ng xi18n --i18nFormat=xlf --progress --outputPath i18n\",\"extract-i18n\":\"ng xi18n --i18nFormat=xlf --i18n-locale es --progress --output-path i18n && xliffmerge --profile xliffmerge.json es es-CO\",\"precommit\":\"lint-staged\",\"postinstall\":\"ngcc\"},\"husky\":{\"hooks\":{\"pre-commit\":\"lint-staged\",\"pre-push\":\"npm test\"}},\"lint-staged\":{\"{src,test}/**/*.ts*\":[\"prettier --write --single-quote\",\"git add\"]},\"private\":true,\"dependencies\":{\"@angular-devkit/build-angular\":\"~0.1001.7\",\"@angular/animations\":\"10.1.6\",\"@angular/cdk\":\"10.2.5\",\"@angular/common\":\"10.1.6\",\"@angular/compiler\":\"10.1.6\",\"@angular/core\":\"^10.1.6\",\"@angular/forms\":\"10.1.6\",\"@angular/http\":\"7.1.0\",\"@angular/localize\":\"~10.1.6\",\"@angular/material\":\"10.2.5\",\"@angular/material-moment-adapter\":\"10.2.5\",\"@angular/platform-browser\":\"10.1.6\",\"@angular/platform-browser-dynamic\":\"10.1.6\",\"@angular/platform-server\":\"10.1.6\",\"@angular/router\":\"10.1.6\",\"@aws-amplify/api\":\"^3.1.20\",\"@aws-amplify/auth\":\"^3.3.2\",\"@aws-amplify/core\":\"^3.4.3\",\"@ngrx/core\":\"1.2.0\",\"@ngrx/effects\":\"10.0.1\",\"@ngrx/store\":\"10.0.1\",\"@qiip/core\":\"^1.0.16\",\"@qiip/lib\":\"^2.0.33\",\"angular-momentjs\":\"^0.2.2\",\"clear\":\"^0.1.0\",\"core-js\":\"^3.6.5\",\"guid-typescript\":\"^1.0.9\",\"intl\":\"^1.2.5\",\"moment\":\"^2.29.1\",\"moment-timezone\":\"^0.5.31\",\"ng-bullet\":\"^1.0.3\",\"ng-recaptcha\":\"^6.0.2\",\"ngx-cookie-service\":\"10.1.1\",\"ngx-uploader\":\"^10.0.0\",\"ramda\":\"0.27.1\",\"rxjs\":\"6.6.3\",\"tslib\":\"^2.0.3\",\"zone.js\":\"~0.11.1\"},\"devDependencies\":{\"@angular/cli\":\"10.1.7\",\"@angular/compiler-cli\":\"^10.1.6\",\"@angular/language-service\":\"10.1.6\",\"@types/jasmine\":\"~3.5.14\",\"@types/jasminewd2\":\"~2.0.8\",\"@types/moment\":\"^2.13.0\",\"@types/moment-timezone\":\"^0.5.13\",\"@types/node\":\"^14.11.8\",\"codelyzer\":\"^6.0.1\",\"faker\":\"^5.1.0\",\"husky\":\"^4.3.0\",\"jasmine-core\":\"~3.6.0\",\"jasmine-marbles\":\"^0.6.0\",\"jasmine-spec-reporter\":\"~6.0.0\",\"karma\":\"~5.2.3\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-cli\":\"~2.0.0\",\"karma-coverage-istanbul-reporter\":\"~3.0.3\",\"karma-jasmine\":\"~4.0.1\",\"karma-jasmine-html-reporter\":\"^1.5.4\",\"karma-phantomjs-launcher\":\"^1.0.4\",\"karma-spec-reporter\":\"0.0.32\",\"lint-staged\":\"^10.4.1\",\"prettier\":\"^2.1.2\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~9.0.0\",\"tslint\":\"~6.1.0\",\"tslint-config-airbnb\":\"^5.11.2\",\"tslint-config-prettier\":\"^1.18.0\",\"typescript\":\"4.0.3\"},\"lastCommit\":\"913fd1429b0a1466b3b9e0525c538c90f15d14d2\"}");
      /***/
    },

    /***/
    "mv7o":
    /*!******************************************************************************!*\
      !*** ./src/app/modulos/usuario/state-management/reducers/usuario.reducer.ts ***!
      \******************************************************************************/

    /*! exports provided: usuarioReducer */

    /***/
    function mv7o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "usuarioReducer", function () {
        return usuarioReducer;
      });
      /* harmony import */


      var _actions_usuario_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../actions/usuario.action */
      "PsGn");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      "tqRt");

      var initialState = {
        sub: null,
        username: null,
        email: null,
        rol: null,
        uuid: null,
        pais: null
      };
      var appReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({});

      function usuarioReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

        var _ref2 = arguments.length > 1 ? arguments[1] : undefined,
            type = _ref2.type,
            payload = _ref2.payload;

        switch (type) {
          case _actions_usuario_action__WEBPACK_IMPORTED_MODULE_0__["AUTENTICAR_USUARIO_SUCCESS"]:
            return Object.assign({}, state, {
              sub: payload.sub,
              username: payload.username,
              email: payload.email,
              rol: payload.rol,
              uuid: payload.uuid,
              pais: payload.pais
            });

          case _actions_usuario_action__WEBPACK_IMPORTED_MODULE_0__["CERRAR_SESSION_SUCCESS"]:
            return appReducer(undefined, type);

          default:
            return state;
        }
      }
      /***/

    },

    /***/
    "omux":
    /*!**********************************************************!*\
      !*** ./src/app/shared/idle-user/idle-usuario.service.ts ***!
      \**********************************************************/

    /*! exports provided: UserIdleService */

    /***/
    function omux(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserIdleService", function () {
        return UserIdleService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _idle_usuario_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./idle-usuario.class */
      "MhrC");
      /* harmony import */


      var _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/servicios/api.service */
      "k5QC");
      /**
       * User's idle service.
       */


      var UserIdleService = /*#__PURE__*/function () {
        function UserIdleService(config, apiService) {
          _classCallCheck(this, UserIdleService);

          this.apiService = apiService;
          this.timerStart$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.timeout$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * Idle value in seconds.
           * Default equals to 10 minutes.
           */

          this.idle = 1;
          /**
           * Timeout value in seconds.
           * Default equals to 5 minutes.
           */

          this.timeout = 300;
          /**
           * Ping value in seconds.
           * * Default equals to 2 minutes.
           */

          this.ping = 100;
          this.activityEvents$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'mousemove'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'keydown'));
          this.idle$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.activityEvents$);
        }
        /**
         * Start watching for user idle and setup timer and ping.
         */


        _createClass(UserIdleService, [{
          key: "startWatching",
          value: function startWatching() {
            var _this12 = this;

            if (this.idleSubscription) {
              this.idleSubscription.unsubscribe();
            } // If any of user events is not active for idle-seconds when start timer.


            this.idleSubscription = this.idle$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["bufferTime"])(3000), // Starting point of detecting of user's inactivity
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (arr) {
              return !arr.length && !_this12.isInactivityTimer;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              return _this12.isInactivityTimer = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(_this12.activityEvents$, Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(_this12.idle * 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) {
                return _this12.timerStart$.next(true);
              }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) {
                if (x !== 0) {
                  _this12.resetTimer();
                }
              }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                return _this12.isInactivityTimer = false;
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.onTimerStart(), this.onTimeout())).subscribe();
            this.setupTimer(this.timeout);
            this.setupPing(this.ping);
            this.ping$.subscribe(function (x) {
              return _this12.apiService.refreshSesion();
            });
          }
        }, {
          key: "stopWatching",
          value: function stopWatching() {
            this.stopTimer();

            if (this.idleSubscription) {
              this.idleSubscription.unsubscribe();
              this.cerrarSesion();
            }
          }
        }, {
          key: "stopTimer",
          value: function stopTimer() {
            this.timerStart$.next(false);
          }
        }, {
          key: "resetTimer",
          value: function resetTimer() {
            this.stopTimer();
            this.isTimeout = false;
          }
          /**
           * Return observable for timer's countdown number that emits after idle.
           */

        }, {
          key: "onTimerStart",
          value: function onTimerStart() {
            var _this13 = this;

            return this.timerStart$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (start) {
              return start ? _this13.timer$ : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
          }
          /**
           * Return observable for timeout is fired.
           */

        }, {
          key: "onTimeout",
          value: function onTimeout() {
            var _this14 = this;

            return this.timeout$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (timeout) {
              return !!timeout;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              _this14.isTimeout = true;

              _this14.stopWatching();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
              return true;
            }));
          }
          /**
           * Set config values.
           */

        }, {
          key: "setConfigValues",
          value: function setConfigValues(config) {
            if (this.idleSubscription && !this.idleSubscription.closed) {
              console.error('Call stopWatching() before set config values');
              return;
            }

            if (config.idle) {
              this.idle = config.idle;
            }

            if (config.ping) {
              this.ping = config.ping;
            }

            if (config.timeout) {
              this.timeout = config.timeout;
            }
          }
          /**
           * Setup timer.
           *
           * Counts every seconds and return n+1 and fire timeout for last count.
           * @param timeout Timeout in seconds.
           */

        }, {
          key: "setupTimer",
          value: function setupTimer(timeout) {
            var _this15 = this;

            this.timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(timeout), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
              return 1;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(function (acc, n) {
              return acc + n;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (count) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.next = 2;
                        return this.apiService.isAuthenticated();

                      case 2:
                        if (!_context8.sent) {
                          _context8.next = 6;
                          break;
                        }

                        if (count === timeout) {
                          this.timeout$.next(true);
                        }

                        _context8.next = 7;
                        break;

                      case 6:
                        this.cerrarSesion();

                      case 7:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));
            }));
          }
          /**
           * Setup ping.
           *
           * Pings every ping-seconds only if is not timeout.
           */

        }, {
          key: "setupPing",
          value: function setupPing(ping) {
            var _this16 = this;

            this.ping$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(ping * 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () {
              return !_this16.isTimeout;
            }));
          }
        }, {
          key: "cerrarSesion",
          value: function cerrarSesion() {
            this.apiService.singOut();
            setTimeout(function () {
              window.location.reload();
            }, 100);
          }
        }]);

        return UserIdleService;
      }();

      UserIdleService.ɵfac = function UserIdleService_Factory(t) {
        return new (t || UserIdleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_idle_usuario_class__WEBPACK_IMPORTED_MODULE_4__["UserIdleConfig"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_servicios_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]));
      };

      UserIdleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UserIdleService,
        factory: UserIdleService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserIdleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _idle_usuario_class__WEBPACK_IMPORTED_MODULE_4__["UserIdleConfig"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qcd3":
    /*!*************************************************************************!*\
      !*** ./src/app/shared/componentes/formularios/remplazar-letras.pipe.ts ***!
      \*************************************************************************/

    /*! exports provided: RemplazarLetrasPipe */

    /***/
    function qcd3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemplazarLetrasPipe", function () {
        return RemplazarLetrasPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var RemplazarLetrasPipe = /*#__PURE__*/function () {
        function RemplazarLetrasPipe() {
          _classCallCheck(this, RemplazarLetrasPipe);
        }

        _createClass(RemplazarLetrasPipe, [{
          key: "transform",
          value: function transform(value, args) {
            try {
              var regEx = new RegExp("".concat(args), 'g');
              return value.replace(regEx, ' ');
            } catch (e) {
              return '';
            }
          }
        }]);

        return RemplazarLetrasPipe;
      }();

      RemplazarLetrasPipe.ɵfac = function RemplazarLetrasPipe_Factory(t) {
        return new (t || RemplazarLetrasPipe)();
      };

      RemplazarLetrasPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "remplazarLetras",
        type: RemplazarLetrasPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RemplazarLetrasPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'remplazarLetras'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "rwFa":
    /*!***************************************************!*\
      !*** ./src/app/shared/pipes/HumanizePipe.pipe.ts ***!
      \***************************************************/

    /*! exports provided: HumanizePipe */

    /***/
    function rwFa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HumanizePipe", function () {
        return HumanizePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var HumanizePipe = /*#__PURE__*/function () {
        function HumanizePipe() {
          _classCallCheck(this, HumanizePipe);
        }

        _createClass(HumanizePipe, [{
          key: "transform",
          value: function transform(value) {
            try {
              return value ? value.replace(/_/g, ' ').toLowerCase().replace(/^\w/, function (c) {
                return c.toUpperCase();
              }) : null;
            } catch (e) {
              return value;
            }
          }
        }]);

        return HumanizePipe;
      }();

      HumanizePipe.ɵfac = function HumanizePipe_Factory(t) {
        return new (t || HumanizePipe)();
      };

      HumanizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "humanize",
        type: HumanizePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HumanizePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'humanize'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "uTA1":
    /*!*********************************************************************************!*\
      !*** ./src/app/modulos/usuario/vistas/pais-invalido/pais-invalido.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: PaisInvalidoComponent */

    /***/
    function uTA1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaisInvalidoComponent", function () {
        return PaisInvalidoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _shared_componentes_btn_cerrar_session_btn_cerrar_session_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../shared/componentes/btn-cerrar-session/btn-cerrar-session.component */
      "vBoq");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");

      var PaisInvalidoComponent = /*#__PURE__*/function () {
        function PaisInvalidoComponent() {
          _classCallCheck(this, PaisInvalidoComponent);
        }

        _createClass(PaisInvalidoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PaisInvalidoComponent;
      }();

      PaisInvalidoComponent.ɵfac = function PaisInvalidoComponent_Factory(t) {
        return new (t || PaisInvalidoComponent)();
      };

      PaisInvalidoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaisInvalidoComponent,
        selectors: [["app-pais-invalido"]],
        decls: 21,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1568977820152405784$$APP_MODULOS_USUARIO_VISTAS_PAIS_INVALIDO_PAIS_INVALIDO_COMPONENT_TS_1 = goog.getMsg("{$startTagStrong}Esta funcion no esta habilitada para tu pais.{$closeTagStrong}", {
              "startTagStrong": "\uFFFD#18\uFFFD",
              "closeTagStrong": "\uFFFD/#18\uFFFD"
            });
            i18n_0 = MSG_EXTERNAL_1568977820152405784$$APP_MODULOS_USUARIO_VISTAS_PAIS_INVALIDO_PAIS_INVALIDO_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([":\u241Fa9b33fee90d3e07bd71cc7a153bea31d32d5d43d\u241F1568977820152405784:", ":START_TAG_STRONG:Esta funcion no esta habilitada para tu pais.", ":CLOSE_TAG_STRONG:"])), "\uFFFD#18\uFFFD", "\uFFFD/#18\uFFFD");
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_440641876575554575$$APP_MODULOS_USUARIO_VISTAS_PAIS_INVALIDO_PAIS_INVALIDO_COMPONENT_TS_3 = goog.getMsg(" Tu usuario no puede acceder a esta funcionalidad porque no esta habilitada para tu pais. ");
            i18n_2 = MSG_EXTERNAL_440641876575554575$$APP_MODULOS_USUARIO_VISTAS_PAIS_INVALIDO_PAIS_INVALIDO_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([":\u241F9d8508e060e8e143168aa28bb5a2b71bbf1c5054\u241F440641876575554575: Tu usuario no puede acceder a esta funcionalidad porque no esta habilitada para tu pais. "])));
          }

          return [["color", "primary"], ["src", "../../../assets/images/brand.png", "alt", ""], [1, "example-spacer"], ["mat-flat-button", "", "color", "primary", 3, "matMenuTriggerFor"], ["menu", "matMenu"], [1, "menu-content"], [1, "content"], [1, "section-resume"], i18n_0, i18n_2];
        },
        template: function PaisInvalidoComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "btn-cerrar-session");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](17, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](20, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _shared_componentes_btn_cerrar_session_btn_cerrar_session_component__WEBPACK_IMPORTED_MODULE_5__["BtnCerrarSessionComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"]],
        styles: [".example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 70px;\n  height: auto;\n}\n\n.content[_ngcontent-%COMP%] {\n  height: calc(100% - 64px);\n  background: white;\n  padding: 30px;\n  max-width: 1280px;\n  margin: auto;\n}\n\n.menu-content[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  font-size: x-large;\n}\n\nbtn-cerrar-session[_ngcontent-%COMP%]  button {\n  min-width: 250px !important;\n}\n\n.content-grey[_ngcontent-%COMP%] {\n  padding: 15px;\n  background: #F9F9F9;\n  margin-bottom: 50px;\n}\n\n.section-resume[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy91c3VhcmlvL3Zpc3Rhcy9wYWlzLWludmFsaWRvL3BhaXMtaW52YWxpZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBR0U7RUFDRSwyQkFBQTtBQUFKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxvcy91c3VhcmlvL3Zpc3Rhcy9wYWlzLWludmFsaWRvL3BhaXMtaW52YWxpZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1pY29uIHtcbiAgcGFkZGluZzogMCAxNHB4O1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMzBweDtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLm1lbnUtY29udGVudCB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi51c2VyLW5hbWUge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbmJ0bi1jZXJyYXItc2Vzc2lvbjo6bmctZGVlcCB7XG4gIGJ1dHRvbiB7XG4gICAgbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICB9XG59XG4uY29udGVudC1ncmV5IHtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogI0Y5RjlGOTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnNlY3Rpb24tcmVzdW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaisInvalidoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-pais-invalido',
            templateUrl: './pais-invalido.component.html',
            styleUrls: ['./pais-invalido.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "v0hW":
    /*!****************************************************!*\
      !*** ./src/app/modulos/usuario/usuario.routing.ts ***!
      \****************************************************/

    /*! exports provided: UsuarioRoutingModule */

    /***/
    function v0hW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsuarioRoutingModule", function () {
        return UsuarioRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _vistas_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vistas/login/login.component */
      "8fuW");
      /* harmony import */


      var _core_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/guards/login.guard */
      "eZJZ");
      /* harmony import */


      var _app_modulos_usuario_vistas_pais_invalido_pais_invalido_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/modulos/usuario/vistas/pais-invalido/pais-invalido.component */
      "uTA1");
      /* harmony import */


      var _core_guards_auth_router_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/guards/auth-router.guard */
      "h3to");

      var routes = [{
        path: 'login',
        component: _vistas_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        canActivate: [_core_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuardService"]]
      }, {
        path: 'pais-invalido',
        component: _app_modulos_usuario_vistas_pais_invalido_pais_invalido_component__WEBPACK_IMPORTED_MODULE_4__["PaisInvalidoComponent"],
        canActivate: [_core_guards_auth_router_guard__WEBPACK_IMPORTED_MODULE_5__["AuthRouterGuard"]]
      }];

      var UsuarioRoutingModule = function UsuarioRoutingModule() {
        _classCallCheck(this, UsuarioRoutingModule);
      };

      UsuarioRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UsuarioRoutingModule
      });
      UsuarioRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UsuarioRoutingModule_Factory(t) {
          return new (t || UsuarioRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsuarioRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vBoq":
    /*!***************************************************************************************!*\
      !*** ./src/app/shared/componentes/btn-cerrar-session/btn-cerrar-session.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: BtnCerrarSessionComponent */

    /***/
    function vBoq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BtnCerrarSessionComponent", function () {
        return BtnCerrarSessionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/servicios/api.service */
      "k5QC");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var BtnCerrarSessionComponent = /*#__PURE__*/function () {
        function BtnCerrarSessionComponent(apiService) {
          _classCallCheck(this, BtnCerrarSessionComponent);

          this.apiService = apiService;
        }

        _createClass(BtnCerrarSessionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "cerrarSesion",
          value: function cerrarSesion() {
            this.apiService.singOut();
            setTimeout(function () {
              window.location.reload();
            }, 100);
          }
        }]);

        return BtnCerrarSessionComponent;
      }();

      BtnCerrarSessionComponent.ɵfac = function BtnCerrarSessionComponent_Factory(t) {
        return new (t || BtnCerrarSessionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_servicios_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      BtnCerrarSessionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BtnCerrarSessionComponent,
        selectors: [["btn-cerrar-session"]],
        decls: 2,
        vars: 0,
        consts: [["mat-button", "", 1, "btns-primary", "dark-bg", 3, "click"]],
        template: function BtnCerrarSessionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BtnCerrarSessionComponent_Template_button_click_0_listener() {
              return ctx.cerrarSesion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cerrar sesi\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
        styles: [".btns-primary[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  min-width: 100px;\n  padding: 14px 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudGVzL2J0bi1jZXJyYXItc2Vzc2lvbi9idG4tY2VycmFyLXNlc3Npb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRlcy9idG4tY2VycmFyLXNlc3Npb24vYnRuLWNlcnJhci1zZXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bnMtcHJpbWFyeXtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDE0cHggMThweDtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BtnCerrarSessionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'btn-cerrar-session',
            templateUrl: './btn-cerrar-session.component.html',
            styleUrls: ['./btn-cerrar-session.component.scss']
          }]
        }], function () {
          return [{
            type: _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _core_guards_auth_router_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/guards/auth-router.guard */
      "h3to");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _core_guards_auth_rol_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/guards/auth-rol.guard */
      "3t/0");

      var routes = [{
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        canLoad: [_core_guards_auth_router_guard__WEBPACK_IMPORTED_MODULE_1__["AuthRouterGuard"], _core_guards_auth_rol_guard__WEBPACK_IMPORTED_MODULE_3__["AuthRolGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modulos-dashboard-dashboard-module */
          [__webpack_require__.e("common"), __webpack_require__.e("modulos-dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
          /*! ./modulos/dashboard/dashboard.module */
          "5TqR")).then(function (m) {
            return m.DashboardModule;
          });
        },
        data: {
          rol: 'operador-back'
        }
      }, {
        path: 'comercial',
        canLoad: [_core_guards_auth_router_guard__WEBPACK_IMPORTED_MODULE_1__["AuthRouterGuard"], _core_guards_auth_rol_guard__WEBPACK_IMPORTED_MODULE_3__["AuthRolGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modulos-comercial-comercial-module */
          [__webpack_require__.e("common"), __webpack_require__.e("modulos-comercial-comercial-module")]).then(__webpack_require__.bind(null,
          /*! ./modulos/comercial/comercial.module */
          "Q+JC")).then(function (m) {
            return m.ComercialModule;
          });
        },
        data: {
          rol: 'comercial'
        }
      }, {
        path: 'coaching',
        canLoad: [_core_guards_auth_router_guard__WEBPACK_IMPORTED_MODULE_1__["AuthRouterGuard"], _core_guards_auth_rol_guard__WEBPACK_IMPORTED_MODULE_3__["AuthRolGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modulos-coaching-coaching-module */
          [__webpack_require__.e("common"), __webpack_require__.e("modulos-coaching-coaching-module")]).then(__webpack_require__.bind(null,
          /*! ./modulos/coaching/coaching.module */
          "w2AE")).then(function (m) {
            return m.CoachingModule;
          });
        },
        data: {
          rol: 'coach'
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
              relativeLinkResolution: 'legacy'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @aws-amplify/core */
      "GOuw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      _aws_amplify_core__WEBPACK_IMPORTED_MODULE_2__["default"].configure({
        Auth: {
          region: 'us-east-1',
          identityPoolId: 'us-east-1:d65e8fa3-dcb3-473b-97e8-4305b5de777e',
          userPoolId: 'us-east-1_u8DDtNzFL',
          userPoolWebClientId: 'd4fk0ahuop1a2j3d0tmeb3bj0'
        },
        API: {
          endpoints: [{
            name: 'qiipApiGateway',
            endpoint: 'https://apidev.qiip.com.mx/'
          }]
        }
      });

      if (_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map