exports.id = 206;
exports.ids = [206];
exports.modules = {

/***/ 1057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/Navbar.jsx




const Navbar = ()=>{
    const navbarItems = [
        {
            name: "Linkedin",
            path: "https://linkedin.com/in/hire-jacob"
        }
    ];
    return /*#__PURE__*/ _jsx("nav", {
        className: "px-10 py-4 z-20 bg-gray-100 text-black",
        children: /*#__PURE__*/ _jsxs("ul", {
            className: "flex items-center space-x-4 text-md md:text-xl",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "ml-30 rounded-lg w-full",
                    children: /*#__PURE__*/ _jsx(Link, {
                        href: "/",
                        legacyBehavior: true,
                        children: /*#__PURE__*/ _jsx("a", {
                            className: "text-5xl",
                            children: "Jacob Goldfarb"
                        })
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "flex justify-end",
                    children: navbarItems.map((item, index)=>/*#__PURE__*/ _jsx("li", {
                            className: "px-6",
                            children: /*#__PURE__*/ _jsx(Link, {
                                href: item.path,
                                legacyBehavior: true,
                                children: /*#__PURE__*/ _jsx("a", {
                                    className: "hover:text-gray-900",
                                    children: item.name
                                })
                            })
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = ((/* unused pure expression or super */ null && (Navbar)));

;// CONCATENATED MODULE: ./components/Footer.js


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: " text-center py-4 mt-auto",
        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
            children: "\xa9 2023 Jacob Goldfarb. All rights reserved."
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Layout.js





const Layout = ({ children, title, description, keywords })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col min-h-screen relative bg-white text-black",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: `Jacob Goldfarb | ${title}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "keywords",
                        content: keywords
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                className: "my-auto mx-10 md:ml-20 flex flex-col items-center flex-grow relative z-10",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    children: children
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(components_Footer, {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ }),

/***/ 6004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);


function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;