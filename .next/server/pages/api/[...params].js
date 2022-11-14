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
exports.id = "pages/api/[...params]";
exports.ids = ["pages/api/[...params]"];
exports.modules = {

/***/ "(api)/./pages/api/[...params].js":
/*!**********************************!*\
  !*** ./pages/api/[...params].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    const params = req.query.params;\n    res.status(200).json(params);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvWy4uLnBhcmFtc10uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLE1BQU1DLFNBQVNGLElBQUlHLEtBQUssQ0FBQ0QsTUFBTTtJQUMvQkQsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0g7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vcGFnZXMvYXBpL1suLi5wYXJhbXNdLmpzPzY4NzIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBwYXJhbXMgPSByZXEucXVlcnkucGFyYW1zO1xuICByZXMuc3RhdHVzKDIwMCkuanNvbihwYXJhbXMpO1xufVxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwYXJhbXMiLCJxdWVyeSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/[...params].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/[...params].js"));
module.exports = __webpack_exports__;

})();