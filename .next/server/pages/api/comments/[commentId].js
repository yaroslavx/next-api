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
exports.id = "pages/api/comments/[commentId]";
exports.ids = ["pages/api/comments/[commentId]"];
exports.modules = {

/***/ "(api)/./data/comments.js":
/*!**************************!*\
  !*** ./data/comments.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"comments\": () => (/* binding */ comments)\n/* harmony export */ });\nconst comments = [\n    {\n        id: 1,\n        text: \"This is the first comment\"\n    },\n    {\n        id: 2,\n        text: \"This is the second comment\"\n    },\n    {\n        id: 3,\n        text: \"This is the third comment\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhL2NvbW1lbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxXQUFXO0lBQ3RCO1FBQ0VDLElBQUk7UUFDSkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsSUFBSTtRQUNKQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxJQUFJO1FBQ0pDLE1BQU07SUFDUjtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL2RhdGEvY29tbWVudHMuanM/ZjNhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29tbWVudHMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0ZXh0OiAnVGhpcyBpcyB0aGUgZmlyc3QgY29tbWVudCcsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0ZXh0OiAnVGhpcyBpcyB0aGUgc2Vjb25kIGNvbW1lbnQnLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGV4dDogJ1RoaXMgaXMgdGhlIHRoaXJkIGNvbW1lbnQnLFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJjb21tZW50cyIsImlkIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./data/comments.js\n");

/***/ }),

/***/ "(api)/./pages/api/comments/[commentId].js":
/*!*******************************************!*\
  !*** ./pages/api/comments/[commentId].js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data_comments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/comments */ \"(api)/./data/comments.js\");\n\nfunction handler(req, res) {\n    const { commentId  } = req.query;\n    if (req.method === \"GET\") {\n        res.status(200).json(_data_comments__WEBPACK_IMPORTED_MODULE_0__.comments.find((comment)=>comment.id === parseInt(commentId)));\n    } else if (req.method === \"DELETE\") {\n        const index = _data_comments__WEBPACK_IMPORTED_MODULE_0__.comments.findIndex((comment)=>comment.id === parseInt(commentId));\n        _data_comments__WEBPACK_IMPORTED_MODULE_0__.comments.splice(index, 1);\n        res.send(201).json(\"Comment has deleted\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMvW2NvbW1lbnRJZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0Q7QUFFbkMsU0FBU0MsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsTUFBTSxFQUFFQyxVQUFTLEVBQUUsR0FBR0YsSUFBSUcsS0FBSztJQUMvQixJQUFJSCxJQUFJSSxNQUFNLEtBQUssT0FBTztRQUN4QkgsSUFDR0ksTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQ1IseURBQWEsQ0FBQyxDQUFDVSxVQUFZQSxRQUFRQyxFQUFFLEtBQUtDLFNBQVNSO0lBQzdELE9BQU8sSUFBSUYsSUFBSUksTUFBTSxLQUFLLFVBQVU7UUFDbEMsTUFBTU8sUUFBUWIsOERBQWtCLENBQzlCLENBQUNVLFVBQVlBLFFBQVFDLEVBQUUsS0FBS0MsU0FBU1I7UUFFdkNKLDJEQUFlLENBQUNhLE9BQU87UUFDdkJWLElBQUlhLElBQUksQ0FBQyxLQUFLUixJQUFJLENBQUM7SUFDckIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL2FwaS9jb21tZW50cy9bY29tbWVudElkXS5qcz80ZTBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbW1lbnRzIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS9jb21tZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgeyBjb21tZW50SWQgfSA9IHJlcS5xdWVyeTtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgcmVzXG4gICAgICAuc3RhdHVzKDIwMClcbiAgICAgIC5qc29uKGNvbW1lbnRzLmZpbmQoKGNvbW1lbnQpID0+IGNvbW1lbnQuaWQgPT09IHBhcnNlSW50KGNvbW1lbnRJZCkpKTtcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSAnREVMRVRFJykge1xuICAgIGNvbnN0IGluZGV4ID0gY29tbWVudHMuZmluZEluZGV4KFxuICAgICAgKGNvbW1lbnQpID0+IGNvbW1lbnQuaWQgPT09IHBhcnNlSW50KGNvbW1lbnRJZClcbiAgICApO1xuICAgIGNvbW1lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmVzLnNlbmQoMjAxKS5qc29uKCdDb21tZW50IGhhcyBkZWxldGVkJyk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjb21tZW50cyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb21tZW50SWQiLCJxdWVyeSIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJmaW5kIiwiY29tbWVudCIsImlkIiwicGFyc2VJbnQiLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments/[commentId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comments/[commentId].js"));
module.exports = __webpack_exports__;

})();