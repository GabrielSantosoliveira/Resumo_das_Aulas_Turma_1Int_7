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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EcCalculadora; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _themes_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../themes/components */ \"./src/themes/components.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction EcCalculadora() {\n    var calcularaEc = function calcularaEc() {\n        var resutadoDoCalculo = massa * (velocidade * velocidade) / 2;\n        setResultado(resutadoDoCalculo);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), /*#__PURE__*/ massa = ref[0], setMassa = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), velocidade = ref1[0], setVelocidade = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), resultado = ref2[0], setResultado = ref2[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"jsx-4c06bb2a89aabb48\" + \" \" + \"Ec\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_themes_components__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        evento: function(e) {\n                            setMassa(e.target.value);\n                        },\n                        type: \"number\",\n                        placeholder: \"massa em kg\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\gabriel-projetos\\\\Resumos\\\\src\\\\components\\\\calculadoras\\\\calculadorasDeEnergia\\\\Ec.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_themes_components__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        evento: function(e) {\n                            setVelocidade(e.target.value);\n                        },\n                        type: \"number\",\n                        placeholder: \"velocidade em m/s\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\gabriel-projetos\\\\Resumos\\\\src\\\\components\\\\calculadoras\\\\calculadorasDeEnergia\\\\Ec.js\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_themes_components__WEBPACK_IMPORTED_MODULE_2__.Botao, {\n                        evento: function(e) {\n                            return c;\n                        },\n                        children: \" Calcular \"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\gabriel-projetos\\\\Resumos\\\\src\\\\components\\\\calculadoras\\\\calculadorasDeEnergia\\\\Ec.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\gabriel-projetos\\\\Resumos\\\\src\\\\components\\\\calculadoras\\\\calculadorasDeEnergia\\\\Ec.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"4c06bb2a89aabb48\",\n                children: \".Ec.jsx-4c06bb2a89aabb48{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:400px}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true);\n};\n_s(EcCalculadora, \"vbqcGr/6BaaK1ETmInB26GkyFIw=\");\n_c = EcCalculadora;\nvar _c;\n$RefreshReg$(_c, \"EcCalculadora\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYWxjdWxhZG9yYXMvY2FsY3VsYWRvcmFzRGVFbmVyZ2lhL0VjLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBEO0FBQ3pCOztBQUNqQixTQUFTRyxhQUFhLEdBQUU7UUFLM0JDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFHO1FBRW5CLElBQU1DLGlCQUFpQixHQUFHQyxLQUFLLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHQSxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQy9EQyxZQUFZLENBQUNILGlCQUFpQixDQUFDO0tBSWxDOztJQVZELElBQXlCSCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLGdCQUp6QyxLQUlnQixHQUFhQSxHQUFZLEdBQXpCLEVBSmhCLFFBSXlCLEdBQUlBLEdBQVksR0FBaEI7SUFDckIsSUFBbUNBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFMbkQsVUFLcUIsR0FBa0JBLElBQVksR0FBOUIsRUFMckIsYUFLbUMsR0FBSUEsSUFBWSxHQUFoQjtJQUMvQixJQUFpQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQU5qRCxTQU1vQixHQUFpQkEsSUFBWSxHQUE3QixFQU5wQixZQU1pQyxHQUFJQSxJQUFZLEdBQWhCO0lBVTdCLHFCQUtJOzswQkFFQSw4REFBQ1UsU0FBTzswREFBVyxJQUFJOztrQ0FHbkIsOERBQUNYLHFEQUFLO3dCQUFDWSxNQUFNLEVBQUUsU0FBQ0MsQ0FBQyxFQUFLOzRCQUNsQkwsUUFBUSxDQUFDSyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO3lCQUUzQjt3QkFDREMsSUFBSSxFQUFDLFFBQVE7d0JBQUNDLFdBQVcsRUFBRyxhQUFhOzs7Ozs0QkFDdkM7a0NBRUYsOERBQUNqQixxREFBSzt3QkFBQ1ksTUFBTSxFQUFHQyxTQUFBQSxDQUFDLEVBQUU7NEJBQ2ZKLGFBQWEsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQzt5QkFDaEM7d0JBQ0RDLElBQUksRUFBQyxRQUFRO3dCQUFDQyxXQUFXLEVBQUMsbUJBQW1COzs7Ozs0QkFDM0M7a0NBRUYsOERBQUNsQixxREFBSzt3QkFBQ2EsTUFBTSxFQUFFQyxTQUFBQSxDQUFDO21DQUFJSyxDQUFDO3lCQUFBO2tDQUFFLFlBQVU7Ozs7OzRCQUFROzs7Ozs7b0JBRW5DOzs7Ozs7b0JBZ0JQLENBR047Q0FDSjtHQTNEd0JoQixhQUFhO0FBQWJBLEtBQUFBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FsY3VsYWRvcmFzL2NhbGN1bGFkb3Jhc0RlRW5lcmdpYS9FYy5qcz82ZTIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvdGFvLCBJbnB1dCB9IGZyb20gXCIuLi8uLi8uLi90aGVtZXMvY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5leHBvcnQgZGVmYXVsdCAgZnVuY3Rpb24gRWNDYWxjdWxhZG9yYSgpe1xyXG5cclxuICAgIGNvbnN0IFttYXNzYSxzZXRNYXNzYV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3ZlbG9jaWRhZGUsc2V0VmVsb2NpZGFkZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3Jlc3VsdGFkbyxzZXRSZXN1bHRhZG9dID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGZ1bmN0aW9uIGNhbGN1bGFyYUVjICgpeyBcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdXRhZG9Eb0NhbGN1bG8gPSBtYXNzYSAqICh2ZWxvY2lkYWRlICogdmVsb2NpZGFkZSkgLyAyIFxyXG4gICAgICAgIHNldFJlc3VsdGFkbyhyZXN1dGFkb0RvQ2FsY3VsbylcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICA8PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkVjXCI+XHJcblxyXG5cclxuICAgICAgICAgICAgPElucHV0IGV2ZW50bz17KGUgKT0+IHtcclxuICAgICAgICAgICAgICAgIHNldE1hc3NhKGUudGFyZ2V0LnZhbHVlKVxyXG5cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyID0gXCJtYXNzYSBlbSBrZ1wiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8SW5wdXQgZXZlbnRvPXsoZT0+e1xyXG4gICAgICAgICAgICAgICAgc2V0VmVsb2NpZGFkZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cInZlbG9jaWRhZGUgZW0gbS9zXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxCb3RhbyBldmVudG89e2UgPT4gY30+IENhbGN1bGFyIDwvQm90YW8+XHJcblxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuRWMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8Lz5cclxuXHJcblxyXG4gICAgKVxyXG59ICJdLCJuYW1lcyI6WyJCb3RhbyIsIklucHV0IiwidXNlU3RhdGUiLCJFY0NhbGN1bGFkb3JhIiwiY2FsY3VsYXJhRWMiLCJyZXN1dGFkb0RvQ2FsY3VsbyIsIm1hc3NhIiwidmVsb2NpZGFkZSIsInNldFJlc3VsdGFkbyIsInNldE1hc3NhIiwic2V0VmVsb2NpZGFkZSIsInJlc3VsdGFkbyIsInNlY3Rpb24iLCJldmVudG8iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/calculadoras/calculadorasDeEnergia/Ec.js\n");

/***/ })

});