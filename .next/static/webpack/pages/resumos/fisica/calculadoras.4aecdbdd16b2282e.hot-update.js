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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EcCalculadora; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _themes_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../themes/components */ \"./src/themes/components.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction EcCalculadora() {\n    var calcularaEc = function calcularaEc() {\n        var resutadoDoCalculo = massa * (velocidade * velocidade) / 2;\n        setResultado(resutadoDoCalculo);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), /*#__PURE__*/ massa = ref[0], setMassa = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), velocidade = ref1[0], setVelocidade = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), resultado = ref2[0], setResultado = ref2[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"jsx-f9e17264943046d9\" + \" \" + \"Ec\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n                        tag: \"h2\",\n                        cl: \"pr\",\n                        tm: \"m\",\n                        children: [\n                            \" \",\n                            \"energia Energia Cinetica \",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\gabriel-projetos\\\\Resumos\\\\src\\\\components\\\\calculadoras\\\\calculadorasDeEnergia\\\\Ec.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Paragrafo, {\n                        tag: \"p\",\n                        children: \" a gravidade da terra e de 10m/s \"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\gabriel-projetos\\\\Resumos\\\\src\\\\components\\\\calculadoras\\\\calculadorasDeEnergia\\\\Ec.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_themes_components__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        evento: function(e) {\n                            setMassa(e.target.value);\n                        },\n                        type: \"number\",\n                        placeholder: \"massa em kg\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\gabriel-projetos\\\\Resumos\\\\src\\\\components\\\\calculadoras\\\\calculadorasDeEnergia\\\\Ec.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_themes_components__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        evento: function(e) {\n                            setVelocidade(e.target.value);\n                        },\n                        type: \"number\",\n                        placeholder: \"velocidade em m/s\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\gabriel-projetos\\\\Resumos\\\\src\\\\components\\\\calculadoras\\\\calculadorasDeEnergia\\\\Ec.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_themes_components__WEBPACK_IMPORTED_MODULE_2__.Botao, {\n                        evento: function(e) {\n                            return calcularaEc();\n                        },\n                        children: \" Calcular \"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\gabriel-projetos\\\\Resumos\\\\src\\\\components\\\\calculadoras\\\\calculadorasDeEnergia\\\\Ec.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-f9e17264943046d9\" + \" \" + \"resultado\",\n                        children: resultado\n                    }, void 0, false, {\n                        fileName: \"F:\\\\gabriel-projetos\\\\Resumos\\\\src\\\\components\\\\calculadoras\\\\calculadorasDeEnergia\\\\Ec.js\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\gabriel-projetos\\\\Resumos\\\\src\\\\components\\\\calculadoras\\\\calculadorasDeEnergia\\\\Ec.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"f9e17264943046d9\",\n                children: \".Ec.jsx-f9e17264943046d9{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:200px}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true);\n};\n_s(EcCalculadora, \"vbqcGr/6BaaK1ETmInB26GkyFIw=\");\n_c = EcCalculadora;\nvar _c;\n$RefreshReg$(_c, \"EcCalculadora\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYWxjdWxhZG9yYXMvY2FsY3VsYWRvcmFzRGVFbmVyZ2lhL0VjLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBEO0FBQ3pCOztBQUNqQixTQUFTRyxhQUFhLEdBQUU7UUFLM0JDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFHO1FBRW5CLElBQU1DLGlCQUFpQixHQUFHQyxLQUFLLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHQSxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQy9EQyxZQUFZLENBQUNILGlCQUFpQixDQUFDO0tBSWxDOztJQVZELElBQXlCSCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLGdCQUp6QyxLQUlnQixHQUFhQSxHQUFZLEdBQXpCLEVBSmhCLFFBSXlCLEdBQUlBLEdBQVksR0FBaEI7SUFDckIsSUFBbUNBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFMbkQsVUFLcUIsR0FBa0JBLElBQVksR0FBOUIsRUFMckIsYUFLbUMsR0FBSUEsSUFBWSxHQUFoQjtJQUMvQixJQUFpQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQU5qRCxTQU1vQixHQUFpQkEsSUFBWSxHQUE3QixFQU5wQixZQU1pQyxHQUFJQSxJQUFZLEdBQWhCO0lBVTdCLHFCQUtJOzswQkFFQSw4REFBQ1UsU0FBTzswREFBVyxJQUFJOztrQ0FHdkIsOERBQUNDLE1BQU07d0JBQUNDLEdBQUcsRUFBQyxJQUFJO3dCQUFDQyxFQUFFLEVBQUMsSUFBSTt3QkFBQ0MsRUFBRSxFQUFDLEdBQUc7OzRCQUM1QixHQUFHOzRCQUFDLDJCQUNvQjs0QkFBQyxHQUFHOzs7Ozs7NEJBQ3RCO2tDQUNULDhEQUFDQyxTQUFTO3dCQUFDSCxHQUFHLEVBQUMsR0FBRztrQ0FBQyxtQ0FBaUM7Ozs7OzRCQUFZO2tDQUU1RCw4REFBQ2IscURBQUs7d0JBQUNpQixNQUFNLEVBQUUsU0FBQ0MsQ0FBQyxFQUFLOzRCQUNsQlYsUUFBUSxDQUFDVSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO3lCQUUzQjt3QkFDREMsSUFBSSxFQUFDLFFBQVE7d0JBQUNDLFdBQVcsRUFBRyxhQUFhOzs7Ozs0QkFDdkM7a0NBRUYsOERBQUN0QixxREFBSzt3QkFBQ2lCLE1BQU0sRUFBR0MsU0FBQUEsQ0FBQyxFQUFFOzRCQUNmVCxhQUFhLENBQUNTLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7eUJBQ2hDO3dCQUNEQyxJQUFJLEVBQUMsUUFBUTt3QkFBQ0MsV0FBVyxFQUFDLG1CQUFtQjs7Ozs7NEJBQzNDO2tDQUVGLDhEQUFDdkIscURBQUs7d0JBQUNrQixNQUFNLEVBQUVDLFNBQUFBLENBQUM7bUNBQUlmLFdBQVcsRUFBRTt5QkFBQTtrQ0FBRSxZQUFVOzs7Ozs0QkFBUTtrQ0FDckQsOERBQUNvQixLQUFHO2tFQUFXLFdBQVc7a0NBQUViLFNBQVM7Ozs7OzRCQUFPOzs7Ozs7b0JBRXRDOzs7Ozs7b0JBZ0JQLENBR047Q0FDSjtHQWxFd0JSLGFBQWE7QUFBYkEsS0FBQUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYWxjdWxhZG9yYXMvY2FsY3VsYWRvcmFzRGVFbmVyZ2lhL0VjLmpzPzZlMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm90YW8sIElucHV0IH0gZnJvbSBcIi4uLy4uLy4uL3RoZW1lcy9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmV4cG9ydCBkZWZhdWx0ICBmdW5jdGlvbiBFY0NhbGN1bGFkb3JhKCl7XHJcblxyXG4gICAgY29uc3QgW21hc3NhLHNldE1hc3NhXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbdmVsb2NpZGFkZSxzZXRWZWxvY2lkYWRlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbcmVzdWx0YWRvLHNldFJlc3VsdGFkb10gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXJhRWMgKCl7IFxyXG5cclxuICAgICAgICBjb25zdCByZXN1dGFkb0RvQ2FsY3VsbyA9IG1hc3NhICogKHZlbG9jaWRhZGUgKiB2ZWxvY2lkYWRlKSAvIDIgXHJcbiAgICAgICAgc2V0UmVzdWx0YWRvKHJlc3V0YWRvRG9DYWxjdWxvKVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiRWNcIj5cclxuXHJcblxyXG4gICAgICAgIDxUaXR1bG8gdGFnPVwiaDJcIiBjbD1cInByXCIgdG09XCJtXCI+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICBlbmVyZ2lhIEVuZXJnaWEgQ2luZXRpY2Ege1wiIFwifVxyXG4gICAgICAgIDwvVGl0dWxvPlxyXG4gICAgICAgIDxQYXJhZ3JhZm8gdGFnPVwicFwiPiBhIGdyYXZpZGFkZSBkYSB0ZXJyYSBlIGRlIDEwbS9zIDwvUGFyYWdyYWZvPlxyXG5cclxuICAgICAgICAgICAgPElucHV0IGV2ZW50bz17KGUgKT0+IHtcclxuICAgICAgICAgICAgICAgIHNldE1hc3NhKGUudGFyZ2V0LnZhbHVlKVxyXG5cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyID0gXCJtYXNzYSBlbSBrZ1wiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8SW5wdXQgZXZlbnRvPXsoZT0+e1xyXG4gICAgICAgICAgICAgICAgc2V0VmVsb2NpZGFkZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cInZlbG9jaWRhZGUgZW0gbS9zXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxCb3RhbyBldmVudG89e2UgPT4gY2FsY3VsYXJhRWMoKX0+IENhbGN1bGFyIDwvQm90YW8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0YWRvXCI+e3Jlc3VsdGFkb308L2Rpdj5cclxuXHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5FYyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG5cclxuXHJcbiAgICApXHJcbn0gIl0sIm5hbWVzIjpbIkJvdGFvIiwiSW5wdXQiLCJ1c2VTdGF0ZSIsIkVjQ2FsY3VsYWRvcmEiLCJjYWxjdWxhcmFFYyIsInJlc3V0YWRvRG9DYWxjdWxvIiwibWFzc2EiLCJ2ZWxvY2lkYWRlIiwic2V0UmVzdWx0YWRvIiwic2V0TWFzc2EiLCJzZXRWZWxvY2lkYWRlIiwicmVzdWx0YWRvIiwic2VjdGlvbiIsIlRpdHVsbyIsInRhZyIsImNsIiwidG0iLCJQYXJhZ3JhZm8iLCJldmVudG8iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/calculadoras/calculadorasDeEnergia/Ec.js\n");

/***/ })

});