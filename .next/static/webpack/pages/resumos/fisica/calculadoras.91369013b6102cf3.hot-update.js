"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/resumos/fisica/calculadoras",{

/***/ "./src/components/calculadoras/calculadorasDeEnergia/Ec.js":
/*!*****************************************************************!*\
  !*** ./src/components/calculadoras/calculadorasDeEnergia/Ec.js ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EcCalculadora; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _themes_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../themes/components */ \"./src/themes/components.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction EcCalculadora() {\n    var calcularaEc = function calcularaEc() {\n        var resutadoDoCalculo = massa * (velocidade * velocidade) / 2;\n        setResultado(resutadoDoCalculo);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), /*#__PURE__*/ massa = ref[0], setMassa = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), velocidade = ref1[0], setVelocidade = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), resultado = ref2[0], setResultado = ref2[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"jsx-f9e17264943046d9\" + \" \" + \"Ec\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_themes_components__WEBPACK_IMPORTED_MODULE_2__.Titulo, {\n                        tag: \"h2\",\n                        cl: \"pr\",\n                        tm: \"m\",\n                        children: [\n                            \" \",\n                            \"energia Energia Cinetica \",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\gabriel-projetos\\\\Resumos\\\\src\\\\components\\\\calculadoras\\\\calculadorasDeEnergia\\\\Ec.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_themes_components__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        evento: function(e) {\n                            setMassa(e.target.value);\n                        },\n                        type: \"number\",\n                        placeholder: \"massa em kg\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\gabriel-projetos\\\\Resumos\\\\src\\\\components\\\\calculadoras\\\\calculadorasDeEnergia\\\\Ec.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_themes_components__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        evento: function(e) {\n                            setVelocidade(e.target.value);\n                        },\n                        type: \"number\",\n                        placeholder: \"velocidade em m/s\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\gabriel-projetos\\\\Resumos\\\\src\\\\components\\\\calculadoras\\\\calculadorasDeEnergia\\\\Ec.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_themes_components__WEBPACK_IMPORTED_MODULE_2__.Botao, {\n                        evento: function(e) {\n                            return calcularaEc();\n                        },\n                        children: \" Calcular \"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\gabriel-projetos\\\\Resumos\\\\src\\\\components\\\\calculadoras\\\\calculadorasDeEnergia\\\\Ec.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-f9e17264943046d9\" + \" \" + \"resultado\",\n                        children: resultado\n                    }, void 0, false, {\n                        fileName: \"F:\\\\gabriel-projetos\\\\Resumos\\\\src\\\\components\\\\calculadoras\\\\calculadorasDeEnergia\\\\Ec.js\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\gabriel-projetos\\\\Resumos\\\\src\\\\components\\\\calculadoras\\\\calculadorasDeEnergia\\\\Ec.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"f9e17264943046d9\",\n                children: \".Ec.jsx-f9e17264943046d9{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:200px}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true);\n};\n_s(EcCalculadora, \"vbqcGr/6BaaK1ETmInB26GkyFIw=\");\n_c = EcCalculadora;\nvar _c;\n$RefreshReg$(_c, \"EcCalculadora\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYWxjdWxhZG9yYXMvY2FsY3VsYWRvcmFzRGVFbmVyZ2lhL0VjLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWtFO0FBQ2pDOztBQUNqQixTQUFTSSxhQUFhLEdBQUU7UUFLM0JDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFHO1FBRW5CLElBQU1DLGlCQUFpQixHQUFHQyxLQUFLLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHQSxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQy9EQyxZQUFZLENBQUNILGlCQUFpQixDQUFDO0tBSWxDOztJQVZELElBQXlCSCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLGdCQUp6QyxLQUlnQixHQUFhQSxHQUFZLEdBQXpCLEVBSmhCLFFBSXlCLEdBQUlBLEdBQVksR0FBaEI7SUFDckIsSUFBbUNBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFMbkQsVUFLcUIsR0FBa0JBLElBQVksR0FBOUIsRUFMckIsYUFLbUMsR0FBSUEsSUFBWSxHQUFoQjtJQUMvQixJQUFpQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQU5qRCxTQU1vQixHQUFpQkEsSUFBWSxHQUE3QixFQU5wQixZQU1pQyxHQUFJQSxJQUFZLEdBQWhCO0lBVTdCLHFCQUtJOzswQkFFQSw4REFBQ1UsU0FBTzswREFBVyxJQUFJOztrQ0FHdkIsOERBQUNYLHNEQUFNO3dCQUFDWSxHQUFHLEVBQUMsSUFBSTt3QkFBQ0MsRUFBRSxFQUFDLElBQUk7d0JBQUNDLEVBQUUsRUFBQyxHQUFHOzs0QkFDNUIsR0FBRzs0QkFBQywyQkFDb0I7NEJBQUMsR0FBRzs7Ozs7OzRCQUN0QjtrQ0FHTCw4REFBQ2YscURBQUs7d0JBQUNnQixNQUFNLEVBQUUsU0FBQ0MsQ0FBQyxFQUFLOzRCQUNsQlIsUUFBUSxDQUFDUSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO3lCQUUzQjt3QkFDREMsSUFBSSxFQUFDLFFBQVE7d0JBQUNDLFdBQVcsRUFBRyxhQUFhOzs7Ozs0QkFDdkM7a0NBRUYsOERBQUNyQixxREFBSzt3QkFBQ2dCLE1BQU0sRUFBR0MsU0FBQUEsQ0FBQyxFQUFFOzRCQUNmUCxhQUFhLENBQUNPLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7eUJBQ2hDO3dCQUNEQyxJQUFJLEVBQUMsUUFBUTt3QkFBQ0MsV0FBVyxFQUFDLG1CQUFtQjs7Ozs7NEJBQzNDO2tDQUVGLDhEQUFDdEIscURBQUs7d0JBQUNpQixNQUFNLEVBQUVDLFNBQUFBLENBQUM7bUNBQUliLFdBQVcsRUFBRTt5QkFBQTtrQ0FBRSxZQUFVOzs7Ozs0QkFBUTtrQ0FDckQsOERBQUNrQixLQUFHO2tFQUFXLFdBQVc7a0NBQUVYLFNBQVM7Ozs7OzRCQUFPOzs7Ozs7b0JBRXRDOzs7Ozs7b0JBZ0JQLENBR047Q0FDSjtHQWxFd0JSLGFBQWE7QUFBYkEsS0FBQUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYWxjdWxhZG9yYXMvY2FsY3VsYWRvcmFzRGVFbmVyZ2lhL0VjLmpzPzZlMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm90YW8sIElucHV0LCBUaXR1bG8gfSBmcm9tIFwiLi4vLi4vLi4vdGhlbWVzL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuZXhwb3J0IGRlZmF1bHQgIGZ1bmN0aW9uIEVjQ2FsY3VsYWRvcmEoKXtcclxuXHJcbiAgICBjb25zdCBbbWFzc2Esc2V0TWFzc2FdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt2ZWxvY2lkYWRlLHNldFZlbG9jaWRhZGVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtyZXN1bHRhZG8sc2V0UmVzdWx0YWRvXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhcmFFYyAoKXsgXHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3V0YWRvRG9DYWxjdWxvID0gbWFzc2EgKiAodmVsb2NpZGFkZSAqIHZlbG9jaWRhZGUpIC8gMiBcclxuICAgICAgICBzZXRSZXN1bHRhZG8ocmVzdXRhZG9Eb0NhbGN1bG8pXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgPD5cclxuICAgICAgICBcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJFY1wiPlxyXG5cclxuXHJcbiAgICAgICAgPFRpdHVsbyB0YWc9XCJoMlwiIGNsPVwicHJcIiB0bT1cIm1cIj5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIGVuZXJnaWEgRW5lcmdpYSBDaW5ldGljYSB7XCIgXCJ9XHJcbiAgICAgICAgPC9UaXR1bG8+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8SW5wdXQgZXZlbnRvPXsoZSApPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TWFzc2EoZS50YXJnZXQudmFsdWUpXHJcblxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXIgPSBcIm1hc3NhIGVtIGtnXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxJbnB1dCBldmVudG89eyhlPT57XHJcbiAgICAgICAgICAgICAgICBzZXRWZWxvY2lkYWRlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwidmVsb2NpZGFkZSBlbSBtL3NcIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEJvdGFvIGV2ZW50bz17ZSA9PiBjYWxjdWxhcmFFYygpfT4gQ2FsY3VsYXIgPC9Cb3Rhbz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRhZG9cIj57cmVzdWx0YWRvfTwvZGl2PlxyXG5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLkVjIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcblxyXG5cclxuICAgIClcclxufSAiXSwibmFtZXMiOlsiQm90YW8iLCJJbnB1dCIsIlRpdHVsbyIsInVzZVN0YXRlIiwiRWNDYWxjdWxhZG9yYSIsImNhbGN1bGFyYUVjIiwicmVzdXRhZG9Eb0NhbGN1bG8iLCJtYXNzYSIsInZlbG9jaWRhZGUiLCJzZXRSZXN1bHRhZG8iLCJzZXRNYXNzYSIsInNldFZlbG9jaWRhZGUiLCJyZXN1bHRhZG8iLCJzZWN0aW9uIiwidGFnIiwiY2wiLCJ0bSIsImV2ZW50byIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/calculadoras/calculadorasDeEnergia/Ec.js\n");

/***/ })

});