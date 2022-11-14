"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/comments/[commentId]";
exports.ids = ["pages/comments/[commentId]"];
exports.modules = {

/***/ "./data/comments.js":
/*!**************************!*\
  !*** ./data/comments.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"comments\": () => (/* binding */ comments)\n/* harmony export */ });\nconst comments = [\n    {\n        id: 1,\n        text: \"This is the first comment\"\n    },\n    {\n        id: 2,\n        text: \"This is the second comment\"\n    },\n    {\n        id: 3,\n        text: \"This is the third comment\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2NvbW1lbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxXQUFXO0lBQ3RCO1FBQ0VDLElBQUk7UUFDSkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsSUFBSTtRQUNKQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxJQUFJO1FBQ0pDLE1BQU07SUFDUjtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL2RhdGEvY29tbWVudHMuanM/ZjNhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29tbWVudHMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0ZXh0OiAnVGhpcyBpcyB0aGUgZmlyc3QgY29tbWVudCcsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0ZXh0OiAnVGhpcyBpcyB0aGUgc2Vjb25kIGNvbW1lbnQnLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGV4dDogJ1RoaXMgaXMgdGhlIHRoaXJkIGNvbW1lbnQnLFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJjb21tZW50cyIsImlkIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/comments.js\n");

/***/ }),

/***/ "./pages/comments/[commentId].js":
/*!***************************************!*\
  !*** ./pages/comments/[commentId].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/comments */ \"./data/comments.js\");\n\n\n\nconst SingleComment = ({ comment  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            comment.id,\n            \" \",\n            comment.text\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleComment);\nconst getStaticPaths = async ()=>{\n    return {\n        paths: [\n            {\n                params: {\n                    commentId: \"1\"\n                }\n            }\n        ],\n        fallback: false\n    };\n};\nconst getStaticProps = async (context)=>{\n    const { commentId  } = context.params;\n    const comment = _data_comments__WEBPACK_IMPORTED_MODULE_2__.comments.find((comment)=>comment.id === parseInt(commentId));\n    return {\n        props: {\n            comment\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21tZW50cy9bY29tbWVudElkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ3FCO0FBRS9DLE1BQU1FLGdCQUFnQixDQUFDLEVBQUVDLFFBQU8sRUFBRSxHQUFLO0lBQ3JDLHFCQUNFOztZQUNHQSxRQUFRQyxFQUFFO1lBQUM7WUFBRUQsUUFBUUUsSUFBSTs7O0FBR2hDO0FBRUEsaUVBQWVILGFBQWFBLEVBQUM7QUFFdEIsTUFBTUksaUJBQWlCLFVBQVk7SUFDeEMsT0FBTztRQUNMQyxPQUFPO1lBQUM7Z0JBQUVDLFFBQVE7b0JBQUVDLFdBQVc7Z0JBQUk7WUFBRTtTQUFFO1FBQ3ZDQyxVQUFVLEtBQUs7SUFDakI7QUFDRixFQUFFO0FBRUssTUFBTUMsaUJBQWlCLE9BQU9DLFVBQVk7SUFDL0MsTUFBTSxFQUFFSCxVQUFTLEVBQUUsR0FBR0csUUFBUUosTUFBTTtJQUNwQyxNQUFNTCxVQUFVRix5REFBYSxDQUMzQixDQUFDRSxVQUFZQSxRQUFRQyxFQUFFLEtBQUtVLFNBQVNMO0lBR3ZDLE9BQU87UUFDTE0sT0FBTztZQUNMWjtRQUNGO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi9wYWdlcy9jb21tZW50cy9bY29tbWVudElkXS5qcz9iOWZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21tZW50cyB9IGZyb20gJy4uLy4uL2RhdGEvY29tbWVudHMnO1xuXG5jb25zdCBTaW5nbGVDb21tZW50ID0gKHsgY29tbWVudCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtjb21tZW50LmlkfSB7Y29tbWVudC50ZXh0fVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ29tbWVudDtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHBhdGhzOiBbeyBwYXJhbXM6IHsgY29tbWVudElkOiAnMScgfSB9XSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCB7IGNvbW1lbnRJZCB9ID0gY29udGV4dC5wYXJhbXM7XG4gIGNvbnN0IGNvbW1lbnQgPSBjb21tZW50cy5maW5kKFxuICAgIChjb21tZW50KSA9PiBjb21tZW50LmlkID09PSBwYXJzZUludChjb21tZW50SWQpXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY29tbWVudCxcbiAgICB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbW1lbnRzIiwiU2luZ2xlQ29tbWVudCIsImNvbW1lbnQiLCJpZCIsInRleHQiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwicGFyYW1zIiwiY29tbWVudElkIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJmaW5kIiwicGFyc2VJbnQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/comments/[commentId].js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/comments/[commentId].js"));
module.exports = __webpack_exports__;

})();