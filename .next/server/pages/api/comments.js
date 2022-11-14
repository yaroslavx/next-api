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
exports.id = "pages/api/comments";
exports.ids = ["pages/api/comments"];
exports.modules = {

/***/ "(api)/./data/comments.js":
/*!**************************!*\
  !*** ./data/comments.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"comments\": () => (/* binding */ comments)\n/* harmony export */ });\nconst comments = [\n    {\n        id: 1,\n        text: \"This is the first comment\"\n    },\n    {\n        id: 2,\n        text: \"This is the second comment\"\n    },\n    {\n        id: 3,\n        text: \"This is the third comment\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhL2NvbW1lbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxXQUFXO0lBQ3RCO1FBQ0VDLElBQUk7UUFDSkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsSUFBSTtRQUNKQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxJQUFJO1FBQ0pDLE1BQU07SUFDUjtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL2RhdGEvY29tbWVudHMuanM/ZjNhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29tbWVudHMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0ZXh0OiAnVGhpcyBpcyB0aGUgZmlyc3QgY29tbWVudCcsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0ZXh0OiAnVGhpcyBpcyB0aGUgc2Vjb25kIGNvbW1lbnQnLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGV4dDogJ1RoaXMgaXMgdGhlIHRoaXJkIGNvbW1lbnQnLFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJjb21tZW50cyIsImlkIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./data/comments.js\n");

/***/ }),

/***/ "(api)/./pages/api/comments/index.js":
/*!*************************************!*\
  !*** ./pages/api/comments/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data_comments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/comments */ \"(api)/./data/comments.js\");\n\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        res.status(200).json(_data_comments__WEBPACK_IMPORTED_MODULE_0__.comments);\n    } else if (req.method === \"POST\") {\n        const text = req.body.comment;\n        const newComment = {\n            id: Date.now(),\n            text\n        };\n        _data_comments__WEBPACK_IMPORTED_MODULE_0__.comments.push(newComment);\n        res.status(201).json(newComment);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0Q7QUFFbkMsU0FBU0MsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDeEJELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNOLG9EQUFRQTtJQUMvQixPQUFPLElBQUlFLElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ2hDLE1BQU1HLE9BQU9MLElBQUlNLElBQUksQ0FBQ0MsT0FBTztRQUM3QixNQUFNQyxhQUFhO1lBQ2pCQyxJQUFJQyxLQUFLQyxHQUFHO1lBQ1pOO1FBQ0Y7UUFDQVAseURBQWEsQ0FBQ1U7UUFDZFAsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0k7SUFDdkIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL2FwaS9jb21tZW50cy9pbmRleC5qcz8wOTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbW1lbnRzIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS9jb21tZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oY29tbWVudHMpO1xuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGNvbnN0IHRleHQgPSByZXEuYm9keS5jb21tZW50O1xuICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB7XG4gICAgICBpZDogRGF0ZS5ub3coKSxcbiAgICAgIHRleHQsXG4gICAgfTtcbiAgICBjb21tZW50cy5wdXNoKG5ld0NvbW1lbnQpO1xuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKG5ld0NvbW1lbnQpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY29tbWVudHMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsInRleHQiLCJib2R5IiwiY29tbWVudCIsIm5ld0NvbW1lbnQiLCJpZCIsIkRhdGUiLCJub3ciLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comments/index.js"));
module.exports = __webpack_exports__;

})();