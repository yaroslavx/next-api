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
exports.id = "pages/comments";
exports.ids = ["pages/comments"];
exports.modules = {

/***/ "./pages/comments/index.js":
/*!*********************************!*\
  !*** ./pages/comments/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CommentsPage = ()=>{\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fetchComments = async ()=>{\n        const res = await fetch(\"/api/comments\");\n        const data = await res.json();\n        setComments(data);\n    };\n    const handleInput = (e)=>{\n        setComment(e.target.value);\n    };\n    const sendComment = async ()=>{\n        const res = await fetch(\"/api/comments\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                comment\n            })\n        });\n        const data = await res.json();\n        setComment(\"\");\n        console.log(data);\n        fetchComments();\n    };\n    const deleteComment = async (commentId)=>{\n        const res = await fetch(`api/comments/${commentId}`, {\n            method: \"DELETE\"\n        });\n        const data = await res.json();\n        console.log(data);\n        fetchComments();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: fetchComments,\n                children: \"Load comments\"\n            }, void 0, false, {\n                fileName: \"/Users/yaroslav/Projects/next-api/pages/comments/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            comments && comments.map((comment)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        comment.id,\n                        \" \",\n                        comment.text,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>deleteComment(comment.id),\n                            children: \"Delete comment\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yaroslav/Projects/next-api/pages/comments/index.js\",\n                            lineNumber: 48,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, comment.id, true, {\n                    fileName: \"/Users/yaroslav/Projects/next-api/pages/comments/index.js\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: comment,\n                onChange: handleInput\n            }, void 0, false, {\n                fileName: \"/Users/yaroslav/Projects/next-api/pages/comments/index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: sendComment,\n                children: \"Send comment\"\n            }, void 0, false, {\n                fileName: \"/Users/yaroslav/Projects/next-api/pages/comments/index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentsPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21tZW50cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXdDO0FBRXhDLE1BQU1FLGVBQWUsSUFBTTtJQUN6QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUMsSUFBSTtJQUM3QyxNQUFNLENBQUNJLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7SUFFdkMsTUFBTU0sZ0JBQWdCLFVBQVk7UUFDaEMsTUFBTUMsTUFBTSxNQUFNQyxNQUFNO1FBQ3hCLE1BQU1DLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtRQUMzQlAsWUFBWU07SUFDZDtJQUVBLE1BQU1FLGNBQWMsQ0FBQ0MsSUFBTTtRQUN6QlAsV0FBV08sRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQzNCO0lBRUEsTUFBTUMsY0FBYyxVQUFZO1FBQzlCLE1BQU1SLE1BQU0sTUFBTUMsTUFBTSxpQkFBaUI7WUFDdkNRLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFaEI7WUFBUTtRQUNqQztRQUNBLE1BQU1LLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtRQUMzQkwsV0FBVztRQUNYZ0IsUUFBUUMsR0FBRyxDQUFDYjtRQUNaSDtJQUNGO0lBRUEsTUFBTWlCLGdCQUFnQixPQUFPQyxZQUFjO1FBQ3pDLE1BQU1qQixNQUFNLE1BQU1DLE1BQU0sQ0FBQyxhQUFhLEVBQUVnQixVQUFVLENBQUMsRUFBRTtZQUNuRFIsUUFBUTtRQUNWO1FBQ0EsTUFBTVAsT0FBTyxNQUFNRixJQUFJRyxJQUFJO1FBQzNCVyxRQUFRQyxHQUFHLENBQUNiO1FBQ1pIO0lBQ0Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNtQjtnQkFBT0MsU0FBU3BCOzBCQUFlOzs7Ozs7WUFDL0JKLFlBQ0NBLFNBQVN5QixHQUFHLENBQUMsQ0FBQ3ZCLFVBQVk7Z0JBQ3hCLHFCQUNFLDhEQUFDd0I7O3dCQUNFeEIsUUFBUXlCLEVBQUU7d0JBQUM7d0JBQUV6QixRQUFRMEIsSUFBSTtzQ0FDMUIsOERBQUNMOzRCQUFPQyxTQUFTLElBQU1ILGNBQWNuQixRQUFReUIsRUFBRTtzQ0FBRzs7Ozs7OzttQkFGMUN6QixRQUFReUIsRUFBRTs7Ozs7WUFPeEI7MEJBRUYsOERBQUNFO2dCQUFNQyxNQUFLO2dCQUFPbEIsT0FBT1Y7Z0JBQVM2QixVQUFVdEI7Ozs7OzswQkFDN0MsOERBQUNjO2dCQUFPQyxTQUFTWDswQkFBYTs7Ozs7Ozs7QUFHcEM7QUFFQSxpRUFBZWQsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vcGFnZXMvY29tbWVudHMvaW5kZXguanM/MjU4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENvbW1lbnRzUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGZldGNoQ29tbWVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvY29tbWVudHMnKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBzZXRDb21tZW50cyhkYXRhKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbnB1dCA9IChlKSA9PiB7XG4gICAgc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3Qgc2VuZENvbW1lbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvY29tbWVudHMnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbW1lbnQgfSksXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgc2V0Q29tbWVudCgnJyk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgZmV0Y2hDb21tZW50cygpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUNvbW1lbnQgPSBhc3luYyAoY29tbWVudElkKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGFwaS9jb21tZW50cy8ke2NvbW1lbnRJZH1gLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGZldGNoQ29tbWVudHMoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoQ29tbWVudHN9PkxvYWQgY29tbWVudHM8L2J1dHRvbj5cbiAgICAgIHtjb21tZW50cyAmJlxuICAgICAgICBjb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2NvbW1lbnQuaWR9PlxuICAgICAgICAgICAgICB7Y29tbWVudC5pZH0ge2NvbW1lbnQudGV4dH1cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVDb21tZW50KGNvbW1lbnQuaWQpfT5cbiAgICAgICAgICAgICAgICBEZWxldGUgY29tbWVudFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuXG4gICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e2NvbW1lbnR9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dH0gLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17c2VuZENvbW1lbnR9PlNlbmQgY29tbWVudDwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHNQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb21tZW50c1BhZ2UiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwiY29tbWVudCIsInNldENvbW1lbnQiLCJmZXRjaENvbW1lbnRzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImhhbmRsZUlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VuZENvbW1lbnQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlQ29tbWVudCIsImNvbW1lbnRJZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJkaXYiLCJpZCIsInRleHQiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/comments/index.js\n");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/comments/index.js"));
module.exports = __webpack_exports__;

})();