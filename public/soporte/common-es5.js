(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "Z65+":
    /*!*********************************************************************!*\
      !*** ./src/app/modulos/dashboard/modelo/enums/EstadosTarea.enum.ts ***!
      \*********************************************************************/

    /*! exports provided: EstadoTarea */

    /***/
    function Z65(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EstadoTarea", function () {
        return EstadoTarea;
      });

      var EstadoTarea;

      (function (EstadoTarea) {
        EstadoTarea[EstadoTarea["NO_VISIBLE"] = 0] = "NO_VISIBLE";
        EstadoTarea[EstadoTarea["PENDIENTE"] = 1] = "PENDIENTE";
        EstadoTarea[EstadoTarea["FINALIZADA"] = 2] = "FINALIZADA";
        EstadoTarea[EstadoTarea["REINTENTADA"] = 3] = "REINTENTADA";
      })(EstadoTarea || (EstadoTarea = {}));
      /***/

    },

    /***/
    "gxqh":
    /*!******************************************************************!*\
      !*** ./src/app/modulos/dashboard/servicios/dashboard.service.ts ***!
      \******************************************************************/

    /*! exports provided: DashboardService */

    /***/
    function gxqh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
        return DashboardService;
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
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      var DashboardService = /*#__PURE__*/function () {
        function DashboardService(api, sanitizer) {
          _classCallCheck(this, DashboardService);

          this.api = api;
          this.sanitizer = sanitizer;
        }

        _createClass(DashboardService, [{
          key: "consultarTareaPorId",
          value: function consultarTareaPorId(idTarea) {
            return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__["fromPromise"])(this.api.get("tarea/".concat(idTarea)));
          }
        }, {
          key: "consultarTareasDocumentalesPorId",
          value: function consultarTareasDocumentalesPorId(idTarea) {
            return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__["fromPromise"])(this.api.get("tarea/documentales/".concat(idTarea, "/documentos")));
          }
        }, {
          key: "consultarEstadoTareaDocumental",
          value: function consultarEstadoTareaDocumental(idTarea) {
            return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__["fromPromise"])(this.api.get("tarea/documentales/".concat(idTarea, "/estado")));
          }
        }, {
          key: "enviarComandoFinalizarTareaDocumental",
          value: function enviarComandoFinalizarTareaDocumental(data) {
            return this.api.post("tarea/finalizar_tarea_documental", data);
          }
        }, {
          key: "enviarComandoFinalizarTareaRevisionListasNegras",
          value: function enviarComandoFinalizarTareaRevisionListasNegras(data) {
            return this.api.post("tarea/finalizar_tarea_empleado_bloqueado", data);
          }
        }, {
          key: "consultarTareasPorEstado",
          value: function consultarTareasPorEstado(estado, offset, limit, orderBy, order) {
            return this.api.get('tarea', {
              estado: estado.toString(),
              offset: offset,
              limit: limit,
              order_by: orderBy,
              order: order
            });
          }
        }, {
          key: "consultarListaTiposRechazo",
          value: function consultarListaTiposRechazo() {
            return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__["fromPromise"])(this.api.get("tarea/documentales/tipo_rechazo"));
          }
        }, {
          key: "descargarDocumento",
          value: function descargarDocumento(idDocumento, nombreDescarga) {
            var _this = this;

            return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__["fromPromise"])(this.api.getBlob("documento/".concat(idDocumento), {}, {
              Accept: 'image/png,image/jpeg,application/pdf'
            }).then(function (respuesta) {
              _this.ejecutarDescargarDirecta(respuesta, nombreDescarga);
            }));
          }
        }, {
          key: "descargarConstanciaFiscal",
          value: function descargarConstanciaFiscal(uuidConstanciaFiscal) {
            var _this2 = this;

            return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__["fromPromise"])(this.api.getBlob("documento/constancias_fiscales/".concat(uuidConstanciaFiscal, "/documento"), {}, {
              Accept: 'image/png,image/jpeg,application/pdf'
            }).then(function (respuesta) {
              _this2.ejecutarDescargarDirecta(respuesta, 'constancia-fiscales');
            }));
          }
        }, {
          key: "previsualizarArchivo",
          value: function previsualizarArchivo(idDocumento) {
            var _this3 = this;

            return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__["fromPromise"])(this.api.getBlob("documento/".concat(idDocumento), {}, {
              Accept: 'image/png,image/jpeg,application/pdf'
            }).then(function (respuesta) {
              var url = window.URL.createObjectURL(respuesta);

              var safeURL = _this3.sanitizer.bypassSecurityTrustUrl(url);

              return _this3.sanitizer.bypassSecurityTrustResourceUrl(safeURL.changingThisBreaksApplicationSecurity);
            }));
          }
        }, {
          key: "ejecutarDescargarDirecta",
          value: function ejecutarDescargarDirecta(respuesta, nombreDescarga) {
            var enlaceTemporal = document.createElement('a');
            document.body.appendChild(enlaceTemporal);
            enlaceTemporal.style = 'display: none';
            var url = window.URL.createObjectURL(respuesta);
            var safeURL = this.sanitizer.bypassSecurityTrustUrl(url);
            enlaceTemporal.href = safeURL.changingThisBreaksApplicationSecurity;
            enlaceTemporal.download = nombreDescarga;
            enlaceTemporal.click();
            window.URL.revokeObjectURL(url);
          }
        }, {
          key: "consultarDatosEmpresaMexico",
          value: function consultarDatosEmpresaMexico(uuidEmpresa) {
            return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__["fromPromise"])(this.api.get("empresa/mexico/".concat(uuidEmpresa)));
          }
        }, {
          key: "registrarDatosEmpresaMexico",
          value: function registrarDatosEmpresaMexico(data) {
            return this.api.post("empresa/mexico/registrar_datos", data);
          }
        }, {
          key: "finalizarTareaGenerica",
          value: function finalizarTareaGenerica(data) {
            return this.api.post("tarea/finalizar_tarea_generica", data);
          }
        }, {
          key: "reintentarTareaGenerica",
          value: function reintentarTareaGenerica(data) {
            return this.api.post("tarea/reintentar_tarea_generica", data);
          }
        }, {
          key: "consultarNombreEmpresaDeUsuario",
          value: function consultarNombreEmpresaDeUsuario(idUsuario) {
            return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__["fromPromise"])(this.api.get("empresa/empleados/".concat(idUsuario, "/nombre_empresa")));
          }
        }, {
          key: "consultarTareasPorTipo",
          value: function consultarTareasPorTipo(tipo, periodo) {
            var queryParams = periodo ? {
              periodo: periodo
            } : {};
            return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__["fromPromise"])(this.api.get("tarea/tareas/tipo/".concat(tipo), queryParams));
          }
        }, {
          key: "consultarTiposTareas",
          value: function consultarTiposTareas() {
            return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__["fromPromise"])(this.api.get("tarea/tipos"));
          }
        }, {
          key: "consultarTareaRevisionDocumentos",
          value: function consultarTareaRevisionDocumentos(idTarea) {
            return this.api.get("tarea/documentos/tarea/".concat(idTarea));
          }
        }, {
          key: "consultarAhorrador",
          value: function consultarAhorrador(idUsuario) {
            return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__["fromPromise"])(this.api.get("ahorro/ahorradores/".concat(idUsuario)));
          }
        }, {
          key: "actualizarEstadoUsuario",
          value: function actualizarEstadoUsuario(data) {
            return this.api.post("servicio/actualizar_estado_usuario", data);
          }
        }, {
          key: "darDeBaja",
          value: function darDeBaja(data) {
            return this.api.post("servicio/dar_de_baja", data);
          }
        }, {
          key: "consultarInvitaciones",
          value: function consultarInvitaciones(periodoFecha, estados) {
            var queryParams = estados && estados.length > 0 ? {
              estados: estados.join(',')
            } : {};
            queryParams = periodoFecha ? Object.assign(Object.assign({}, queryParams), {
              periodo: periodoFecha
            }) : queryParams;
            return this.api.get("reto/invitaciones", queryParams);
          }
        }, {
          key: "generarIncentivos",
          value: function generarIncentivos(data) {
            return this.api.post("reto/generar_incentivos", data);
          }
        }]);

        return DashboardService;
      }();

      DashboardService.ɵfac = function DashboardService_Factory(t) {
        return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_servicios_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]));
      };

      DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DashboardService,
        factory: DashboardService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _core_servicios_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ppAF":
    /*!***********************************************************!*\
      !*** ./src/app/shared/modelos/enums/paisAmbiente.enum.ts ***!
      \***********************************************************/

    /*! exports provided: PaisAmbiente */

    /***/
    function ppAF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaisAmbiente", function () {
        return PaisAmbiente;
      });

      var PaisAmbiente;

      (function (PaisAmbiente) {
        PaisAmbiente["CO"] = "CO";
        PaisAmbiente["MX"] = "MX";
      })(PaisAmbiente || (PaisAmbiente = {}));
      /***/

    },

    /***/
    "xAPS":
    /*!******************************************************************!*\
      !*** ./src/app/modulos/dashboard/modelo/enums/TipoTarea.enum.ts ***!
      \******************************************************************/

    /*! exports provided: TipoTarea */

    /***/
    function xAPS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoTarea", function () {
        return TipoTarea;
      });

      var TipoTarea;

      (function (TipoTarea) {
        TipoTarea[TipoTarea["DESCONOCIDO"] = -1] = "DESCONOCIDO";
        TipoTarea[TipoTarea["TAREA_DOCUMENTAL"] = 1] = "TAREA_DOCUMENTAL";
        TipoTarea[TipoTarea["RECAUDO_NO_IDENTIFIADO"] = 2] = "RECAUDO_NO_IDENTIFIADO";
        TipoTarea[TipoTarea["PREVENCION_LAVADO_DINERO_EMPRESA"] = 3] = "PREVENCION_LAVADO_DINERO_EMPRESA";
        TipoTarea[TipoTarea["PREVENCION_LAVADO_DINERO_PERSONA"] = 4] = "PREVENCION_LAVADO_DINERO_PERSONA";
        TipoTarea[TipoTarea["REVERSION_APORTE_EXTRA"] = 5] = "REVERSION_APORTE_EXTRA";
        TipoTarea[TipoTarea["COMPRA_FONDOS_FALLIDA"] = 6] = "COMPRA_FONDOS_FALLIDA";
        TipoTarea[TipoTarea["VENTA_FONDOS_FALLIDA"] = 7] = "VENTA_FONDOS_FALLIDA";
        TipoTarea[TipoTarea["ALTA_FONDOS_FALLIDA"] = 8] = "ALTA_FONDOS_FALLIDA";
        TipoTarea[TipoTarea["COMPRA_FONDOS_FALLIDA_DESARROLLO"] = 9] = "COMPRA_FONDOS_FALLIDA_DESARROLLO";
        TipoTarea[TipoTarea["VENTA_FONDOS_FALLIDA_DESARROLLO"] = 10] = "VENTA_FONDOS_FALLIDA_DESARROLLO";
        TipoTarea[TipoTarea["ALTA_FONDOS_FALLIDA_DESARROLLO"] = 11] = "ALTA_FONDOS_FALLIDA_DESARROLLO";
        TipoTarea[TipoTarea["REVERSION_FALLIDA_DESARROLLO"] = 12] = "REVERSION_FALLIDA_DESARROLLO";
        TipoTarea[TipoTarea["CONCILIACION_NO_PROCESADA"] = 13] = "CONCILIACION_NO_PROCESADA";
        TipoTarea[TipoTarea["REVISION_LISTAS_NEGRAS"] = 41] = "REVISION_LISTAS_NEGRAS";
        TipoTarea[TipoTarea["TAREA_DOCUMENTAL_GENERICA"] = 999] = "TAREA_DOCUMENTAL_GENERICA";
      })(TipoTarea || (TipoTarea = {}));
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map