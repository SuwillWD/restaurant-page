/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/home-image.jpg */ "./src/assets/home-image.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/menu-starters.jpg */ "./src/assets/menu-starters.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/menu-main.jpg */ "./src/assets/menu-main.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/menu-dessert.jpg */ "./src/assets/menu-dessert.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/menu-drinks.jpg */ "./src/assets/menu-drinks.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/about-image.jpg */ "./src/assets/about-image.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    font-family: 'Poppins', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
    background-color: rgb(16, 16, 16);
}

nav {
    display: flex;
    gap: 20px;
}

header button {
    background-color: transparent;
    color: white;
    border: none;
}

header nav button,
#sign-in-btn {
    font-size: 22px;
    font-weight: 400;
    padding: 10px;
}

#restaurant-name {
    font-weight: 700;
    font-size: 40px;
    font-style: italic;
}

header nav button:hover,
#sign-in-btn:hover {
    border-bottom: 2px solid white;
    cursor: pointer;
}

#content {
    display: flex;
    flex: 1;
}

#home-img {
    width: 40%;
    height: 100%;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 2s ease;
}

#home-hero {
    padding: 120px 80px;
    background-image: linear-gradient(rgb(33, 33, 33) 80%, white 20%);
    color: white;
    flex: 1;
    transition: all 4s ease;
}

#home-hero h1 {
    font-size: 20px;
    margin-bottom: 25px;
}

#home-hero h1:nth-child(2) {
    font-size: 48px;
}

#home-hero button,
#sign-in-btn {
    padding: 10px 60px;
    color: white;
    background-color: transparent;
    font-size: 22px;
    border-radius: 20px;
    border: 2px solid rgb(149, 149, 149);
}

#home-hero button:hover,
#sign-in-btn:hover {
    color: rgb(226, 226, 226);
    border-color: rgb(100, 100, 100);
    cursor: pointer;
}

.menu-content {
    padding: 0 5% 5% 5%;
    width: 100%;
    background-color: rgb(40, 23, 23);
    color: white;
}

.menu-content .hero {
    display: flex;
    justify-content: space-around;
    font-size: 48px;
    align-items: center;
    border-bottom: 2px solid white;
    padding: 40px 0;
}

.menu-content .hero i {
    font-size: 100px;
}

.category {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 5% 0;
    border-bottom: 2px solid white;
    align-items: center;
}

.category-content {
    width: 100%;
    margin: 0 40px;
}

.category-content div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 30px 0;
    font-size: 28px;
}

.category-content div:first-child {
    font-size: 42px;
    font-weight: 700;
}

.category-img {
    width: 900px;
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

#starter-img {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

#entries-img {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

#desserts-img {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

#drinks-img {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}

#about-content {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
    background-color: rgb(255, 255, 255);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2% 25% 15% 25%;
    color: white;
}

#about-content h1 {
    font-size: 60px;
}

#about-content p {
    font-size: 22px;
}

#contact-content {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 20% 80%;
    width: 100%;
    height: 100%;
}

#contact-content #hero {
    grid-column: 1 / 3;
    padding: 20px;
    text-align: center;
    font-size: 30px;    
    background-color: rgb(68, 39, 6);
    color: white;
    margin-bottom: 30px;
}

#contact-content #form form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    padding: 0 0 0 30%;
    font-size: 18px;
}

form input,
form textarea {
    font-size: 22px;
    width: 60%;
}

form button {
    padding: 5px 20px;
    background-color: black;
    color: white;
    border-radius: 20px;
    width: 20%;
}

#contact-content #alternate p {
    font-size: 24px;
    margin-bottom: 20px;
}

footer {
    padding: 10px;
    background-color: rgb(16, 16, 16);
    font-size: 18px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

footer i {
    color: white;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n\n* {\n    font-family: 'Poppins', sans-serif;\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100vh;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px 60px;\n    background-color: rgb(16, 16, 16);\n}\n\nnav {\n    display: flex;\n    gap: 20px;\n}\n\nheader button {\n    background-color: transparent;\n    color: white;\n    border: none;\n}\n\nheader nav button,\n#sign-in-btn {\n    font-size: 22px;\n    font-weight: 400;\n    padding: 10px;\n}\n\n#restaurant-name {\n    font-weight: 700;\n    font-size: 40px;\n    font-style: italic;\n}\n\nheader nav button:hover,\n#sign-in-btn:hover {\n    border-bottom: 2px solid white;\n    cursor: pointer;\n}\n\n#content {\n    display: flex;\n    flex: 1;\n}\n\n#home-img {\n    width: 40%;\n    height: 100%;\n    background: url(./assets/home-image.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    transition: all 2s ease;\n}\n\n#home-hero {\n    padding: 120px 80px;\n    background-image: linear-gradient(rgb(33, 33, 33) 80%, white 20%);\n    color: white;\n    flex: 1;\n    transition: all 4s ease;\n}\n\n#home-hero h1 {\n    font-size: 20px;\n    margin-bottom: 25px;\n}\n\n#home-hero h1:nth-child(2) {\n    font-size: 48px;\n}\n\n#home-hero button,\n#sign-in-btn {\n    padding: 10px 60px;\n    color: white;\n    background-color: transparent;\n    font-size: 22px;\n    border-radius: 20px;\n    border: 2px solid rgb(149, 149, 149);\n}\n\n#home-hero button:hover,\n#sign-in-btn:hover {\n    color: rgb(226, 226, 226);\n    border-color: rgb(100, 100, 100);\n    cursor: pointer;\n}\n\n.menu-content {\n    padding: 0 5% 5% 5%;\n    width: 100%;\n    background-color: rgb(40, 23, 23);\n    color: white;\n}\n\n.menu-content .hero {\n    display: flex;\n    justify-content: space-around;\n    font-size: 48px;\n    align-items: center;\n    border-bottom: 2px solid white;\n    padding: 40px 0;\n}\n\n.menu-content .hero i {\n    font-size: 100px;\n}\n\n.category {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    padding: 5% 0;\n    border-bottom: 2px solid white;\n    align-items: center;\n}\n\n.category-content {\n    width: 100%;\n    margin: 0 40px;\n}\n\n.category-content div {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    margin: 30px 0;\n    font-size: 28px;\n}\n\n.category-content div:first-child {\n    font-size: 42px;\n    font-weight: 700;\n}\n\n.category-img {\n    width: 900px;\n    height: 400px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n}\n\n#starter-img {\n    background-image: url(./assets/menu-starters.jpg);\n}\n\n#entries-img {\n    background-image: url(./assets/menu-main.jpg);\n}\n\n#desserts-img {\n    background-image: url(./assets/menu-dessert.jpg);\n}\n\n#drinks-img {\n    background-image: url(./assets/menu-drinks.jpg);\n}\n\n#about-content {\n    background: url(./assets/about-image.jpg);\n    background-color: rgb(255, 255, 255);\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 2% 25% 15% 25%;\n    color: white;\n}\n\n#about-content h1 {\n    font-size: 60px;\n}\n\n#about-content p {\n    font-size: 22px;\n}\n\n#contact-content {\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n    grid-template-rows: 20% 80%;\n    width: 100%;\n    height: 100%;\n}\n\n#contact-content #hero {\n    grid-column: 1 / 3;\n    padding: 20px;\n    text-align: center;\n    font-size: 30px;    \n    background-color: rgb(68, 39, 6);\n    color: white;\n    margin-bottom: 30px;\n}\n\n#contact-content #form form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 15px;\n    padding: 0 0 0 30%;\n    font-size: 18px;\n}\n\nform input,\nform textarea {\n    font-size: 22px;\n    width: 60%;\n}\n\nform button {\n    padding: 5px 20px;\n    background-color: black;\n    color: white;\n    border-radius: 20px;\n    width: 20%;\n}\n\n#contact-content #alternate p {\n    font-size: 24px;\n    margin-bottom: 20px;\n}\n\nfooter {\n    padding: 10px;\n    background-color: rgb(16, 16, 16);\n    font-size: 18px;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\nfooter i {\n    color: white;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderAbout)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


/* 
    * renderAbout function
    * Dynamically creates content for the content div
*/
function renderAbout () {
    _index__WEBPACK_IMPORTED_MODULE_0__.contentDiv.textContent = "";

    const aboutDiv = document.createElement('div');
    aboutDiv.setAttribute('id', 'about-content');

    const aboutH1 = document.createElement('h1');
    aboutH1.textContent = 'About Us';

    const aboutP = document.createElement('p');
    aboutP.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, labore! Rerum accusamus, aut eum, cupiditate in maiores voluptates aspernatur voluptatem provident necessitatibus, iure alias quia iste ducimus magnam ut voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, facere consectetur dignissimos consequatur reiciendis minus blanditiis. Dignissimos adipisci placeat tenetur excepturi natus, corrupti incidunt, sint sapiente voluptates illo ad quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, mollitia! Cupiditate repudiandae, architecto tempore eius, tempora harum ullam incidunt perspiciatis quis officia repellat in nesciunt enim suscipit voluptatem deleniti ut?';

    aboutDiv.appendChild(aboutH1);
    aboutDiv.appendChild(aboutP);
    
    _index__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(aboutDiv);
};


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderContact)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


/* 
    * renderContact function
    * Dynamically creates content for the content div
*/
function renderContact () {
    _index__WEBPACK_IMPORTED_MODULE_0__.contentDiv.textContent = "";

    const contactContentDiv = document.createElement('div');
    contactContentDiv.setAttribute('id', 'contact-content');

    const contactHeroDiv = document.createElement('div');
    contactHeroDiv.setAttribute('id', 'hero');

    const heroH1 = document.createElement('h1');
    heroH1.textContent = 'CONTACT US';

    contactHeroDiv.appendChild(heroH1);

    const formDiv = document.createElement('div');
    formDiv.setAttribute('id', 'form');

    const form = document.createElement('form');

    const fullNameLabel = document.createElement('label');
    const emailLabel = document.createElement('label');
    const commentLabel = document.createElement('label');

    fullNameLabel.setAttribute('for', 'full-name');
    fullNameLabel.textContent = 'Full Name*';

    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email*';

    commentLabel.setAttribute('for', 'comment');
    commentLabel.textContent = 'Comment*';

    const fullNameInput = document.createElement('input');
    const emailInput = document.createElement('input');
    const commentInput = document.createElement('textarea');

    fullNameInput.setAttribute('type', 'text');
    fullNameInput.setAttribute('id', 'full-name');
    fullNameInput.setAttribute('max-length', 40);
    fullNameInput.setAttribute('min-length', 5);
    // fullNameInput.setAttribute('required');

    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    // emailInput.setAttribute('required');

    commentInput.setAttribute('id', 'comment');
    commentInput.setAttribute('rows', 5);
    // commentInput.setAttribute('required');

    const formBtn = document.createElement('button');
    formBtn.textContent = 'Submit';
    formBtn.setAttribute('type', 'submit');

    form.appendChild(fullNameLabel);
    form.appendChild(fullNameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(commentLabel);
    form.appendChild(commentInput);
    form.appendChild(formBtn);

    formDiv.appendChild(form);

    const alternativeDiv = document.createElement('div');
    alternativeDiv.setAttribute('id', 'alternate');

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');

    p1.textContent = 'Alternatively,';
    p2.innerHTML = '<i class="bx bx-current-location"></i> Apt. 636 463 Cyndy Light, New Simonfurt, MN 97692';
    p3.innerHTML = '<i class="bx bx-phone"></i> +1 (115) 380-0505';
    p4.innerHTML = '<i class="bx bx-envelope"></i> alexschmitt@realemail.com';

    alternativeDiv.appendChild(p1);
    alternativeDiv.appendChild(p2);
    alternativeDiv.appendChild(p3);
    alternativeDiv.appendChild(p4);

    contactContentDiv.appendChild(contactHeroDiv);
    contactContentDiv.appendChild(formDiv);
    contactContentDiv.appendChild(alternativeDiv);

    _index__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(contactContentDiv);
};


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHome)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function renderHome () {
    _index__WEBPACK_IMPORTED_MODULE_0__.contentDiv.textContent = "";

    const imgDiv = document.createElement('div');
    imgDiv.setAttribute('id', 'home-img');

    const heroDiv = document.createElement('div');
    heroDiv.setAttribute('id', 'home-hero');

    const heroWelcome = document.createElement('h1');
    heroWelcome.textContent = "WELCOME TO SPOCHER'S";

    const heroPitch = document.createElement('h1');
    heroPitch.textContent = "Experience The Ultimate BBQ Adventure: Where Flavor Meets Tradition";

    const heroBtn = document.createElement('button');
    heroBtn.textContent = "Book A Table";

    heroDiv.appendChild(heroWelcome);
    heroDiv.appendChild(heroPitch);
    heroDiv.appendChild(heroBtn);

    _index__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(imgDiv);
    _index__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(heroDiv);
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentDiv: () => (/* binding */ contentDiv),
/* harmony export */   createDiv: () => (/* binding */ createDiv),
/* harmony export */   createP: () => (/* binding */ createP)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// Get HTML elements that requires user interaction
const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');
const aboutBtn = document.getElementById('about'); 
const contentDiv = document.getElementById('content');

// Export the contentDiv so that all modules can access it and render content in it dynamically 
// Also exports createDiv and createP to create div and p html elements


// Get the function from all the modules that rendres renderes the main content






// renderContentDiv calls the appropriate render function according to the user's interaction
const renderContentDiv = (function () {
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();

    homeBtn.onclick = () => (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    menuBtn.onclick = () => (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    contactBtn.onclick = () => (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
    aboutBtn.onclick = () => (0,_about__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

// create div element
function createDiv () {
    return document.createElement('div');
};

// create p element
function createP () {
    return document.createElement('p');
};

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMenu)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


/* 
    * renderMenu function
    * Dynamically creates content for the content div
*/
function renderMenu () {
    _index__WEBPACK_IMPORTED_MODULE_0__.contentDiv.textContent = "";

    const menuContent = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    menuContent.setAttribute('class', 'menu-content');

    const menuHero = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    menuHero.setAttribute('class', 'hero');

    menuHero.innerHTML = '<i class="bx bx-fork"></i> <h1>Our Awesome BBQ Menu</h1> <i class="bx bx-knife bx-rotate-270"></i>';

    const startersDiv = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    startersDiv.setAttribute('class', 'category');

    const entriesDiv = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    entriesDiv.setAttribute('class', 'category');

    const dessertsDiv = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    dessertsDiv.setAttribute('class', 'category');

    const drinksDiv = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    drinksDiv.setAttribute('class', 'category');

    const startersContent = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    startersContent.setAttribute('class', 'category-content');

    const entriesContent = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    entriesContent.setAttribute('class', 'category-content');

    const dessertsContent = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    dessertsContent.setAttribute('class', 'category-content');

    const drinksContent = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    drinksContent.setAttribute('class', 'category-content');

    const startersImg = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    startersImg.setAttribute('class', 'category-img');
    startersImg.setAttribute('id', 'starter-img');

    const entriesImg = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    entriesImg.setAttribute('class', 'category-img');
    entriesImg.setAttribute('id', 'entries-img');

    const dessertsImg = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    dessertsImg.setAttribute('class', 'category-img');
    dessertsImg.setAttribute('id', 'desserts-img');

    const drinksImg = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    drinksImg.setAttribute('class', 'category-img');
    drinksImg.setAttribute('id', 'drinks-img');

    let p1 ,p2;

    const startDiv1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    startDiv1.textContent = 'STARTERS';

    const startDiv2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p1.textContent = 'PAN FRIED CHIKFEA CAKE';
    p2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p2.textContent = '$ 12.00';
    startDiv2.appendChild(p1);
    startDiv2.appendChild(p2);

    const startDiv3 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p1.textContent = 'MEXICAN BBQ';
    p2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p2.textContent = '$ 10.00';
    startDiv3.appendChild(p1);
    startDiv3.appendChild(p2);

    const startDiv4 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p1.textContent = 'CRUDITTE PLATTER';
    p2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p2.textContent = '$ 9.00';
    startDiv4.appendChild(p1);
    startDiv4.appendChild(p2);

    const startDiv5 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p1.textContent = 'MIXED MEAT TACOS';
    p2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p2.textContent = '$ 7.00';
    startDiv5.appendChild(p1);
    startDiv5.appendChild(p2);

    const entriesDiv1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    entriesDiv1.textContent = 'ENTRIES';

    const entriesDiv2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p1.textContent = 'SMOTHERED BBQ CHOPS';
    p2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p2.textContent = '$ 12.00';
    entriesDiv2.appendChild(p1);
    entriesDiv2.appendChild(p2);

    const entriesDiv3 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p1.textContent = 'PIT BEEF';
    p2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p2.textContent = '$ 12.00';
    entriesDiv3.appendChild(p1);
    entriesDiv3.appendChild(p2);

    const entriesDiv4 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p1.textContent = 'TAGLEATA';
    p2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p2.textContent = '$ 12.00';
    entriesDiv4.appendChild(p1);
    entriesDiv4.appendChild(p2);

    const entriesDiv5 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p1.textContent = 'SHREDDED LAMP PORTO';
    p2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p2.textContent = '$ 12.00';
    entriesDiv5.appendChild(p1);
    entriesDiv5.appendChild(p2);

    const dessertsDiv1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    dessertsDiv1.textContent = 'DESSERTS';

    const dessertsDiv2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p1.textContent = 'DORIS VIENNESE TABLE';
    p2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p2.textContent = '$ 12.00';
    dessertsDiv2.appendChild(p1);
    dessertsDiv2.appendChild(p2);

    const dessertsDiv3 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p1.textContent = 'TIRAMISU';
    p2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p2.textContent = '$ 12.00';
    dessertsDiv3.appendChild(p1);
    dessertsDiv3.appendChild(p2);

    const dessertsDiv4 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p1.textContent = 'TARTUFFO CAPPUCCINO';
    p2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p2.textContent = '$ 12.00';
    dessertsDiv4.appendChild(p1);
    dessertsDiv4.appendChild(p2);

    const dessertsDiv5 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p1.textContent = 'PANNA COTTA';
    p2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p2.textContent = '$ 12.00';
    dessertsDiv5.appendChild(p1);
    dessertsDiv5.appendChild(p2);

    const drinksDiv1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    drinksDiv1.textContent = 'DRINKS';

    const drinksDiv2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p1.textContent = 'WHITE WHINE';
    p2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p2.textContent = '$ 12.00';
    drinksDiv2.appendChild(p1);
    drinksDiv2.appendChild(p2);

    const drinksDiv3 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p1.textContent = 'LOCAL BEER';
    p2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p2.textContent = '$ 12.00';
    drinksDiv3.appendChild(p1);
    drinksDiv3.appendChild(p2);

    const drinksDiv4 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p1.textContent = 'FRESH ICED TEA';
    p2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p2.textContent = '$ 12.00';
    drinksDiv4.appendChild(p1);
    drinksDiv4.appendChild(p2);

    const drinksDiv5 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
    p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p1.textContent = 'MOJITO';
    p2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createP)();
    p2.textContent = '$ 12.00';
    drinksDiv5.appendChild(p1);
    drinksDiv5.appendChild(p2);

    startersContent.appendChild(startDiv1);
    startersContent.appendChild(startDiv2);
    startersContent.appendChild(startDiv3);
    startersContent.appendChild(startDiv4);
    startersContent.appendChild(startDiv5);

    entriesContent.appendChild(entriesDiv1);
    entriesContent.appendChild(entriesDiv2);
    entriesContent.appendChild(entriesDiv3);
    entriesContent.appendChild(entriesDiv4);
    entriesContent.appendChild(entriesDiv5);

    dessertsContent.appendChild(dessertsDiv1);
    dessertsContent.appendChild(dessertsDiv2);
    dessertsContent.appendChild(dessertsDiv3);
    dessertsContent.appendChild(dessertsDiv4);
    dessertsContent.appendChild(dessertsDiv5);

    drinksContent.appendChild(drinksDiv1);
    drinksContent.appendChild(drinksDiv2);
    drinksContent.appendChild(drinksDiv3);
    drinksContent.appendChild(drinksDiv4);
    drinksContent.appendChild(drinksDiv5);

    startersDiv.appendChild(startersContent);
    startersDiv.appendChild(startersImg);

    entriesDiv.appendChild(entriesImg);
    entriesDiv.appendChild(entriesContent);

    dessertsDiv.appendChild(dessertsContent);
    dessertsDiv.appendChild(dessertsImg);

    drinksDiv.appendChild(drinksImg);
    drinksDiv.appendChild(drinksContent);

    menuContent.appendChild(menuHero);
    menuContent.appendChild(startersDiv);
    menuContent.appendChild(entriesDiv);
    menuContent.appendChild(dessertsDiv);
    menuContent.appendChild(drinksDiv);

    _index__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(menuContent);
};

/***/ }),

/***/ "./src/assets/about-image.jpg":
/*!************************************!*\
  !*** ./src/assets/about-image.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e60584e605c3e9079a0.jpg";

/***/ }),

/***/ "./src/assets/home-image.jpg":
/*!***********************************!*\
  !*** ./src/assets/home-image.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d788f8dee4e1cbec271d.jpg";

/***/ }),

/***/ "./src/assets/menu-dessert.jpg":
/*!*************************************!*\
  !*** ./src/assets/menu-dessert.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbf7f0a69b18c1474d9e.jpg";

/***/ }),

/***/ "./src/assets/menu-drinks.jpg":
/*!************************************!*\
  !*** ./src/assets/menu-drinks.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f93207d85f5a2f81e6a1.jpg";

/***/ }),

/***/ "./src/assets/menu-main.jpg":
/*!**********************************!*\
  !*** ./src/assets/menu-main.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "65f7d87dd68b5e6b85df.jpg";

/***/ }),

/***/ "./src/assets/menu-starters.jpg":
/*!**************************************!*\
  !*** ./src/assets/menu-starters.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "705a00a90f1c62d7087c.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFV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QUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaG9tZS1pbWFnZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9tZW51LXN0YXJ0ZXJzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL21lbnUtbWFpbi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9tZW51LWRlc3NlcnQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvbWVudS1kcmlua3MuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYWJvdXQtaW1hZ2UuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweCA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNiwgMTYsIDE2KTtcbn1cblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDtcbn1cblxuaGVhZGVyIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuaGVhZGVyIG5hdiBidXR0b24sXG4jc2lnbi1pbi1idG4ge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbiNyZXN0YXVyYW50LW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuaGVhZGVyIG5hdiBidXR0b246aG92ZXIsXG4jc2lnbi1pbi1idG46aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG59XG5cbiNob21lLWltZyB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZTtcbn1cblxuI2hvbWUtaGVybyB7XG4gICAgcGFkZGluZzogMTIwcHggODBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDMzLCAzMywgMzMpIDgwJSwgd2hpdGUgMjAlKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZmxleDogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNHMgZWFzZTtcbn1cblxuI2hvbWUtaGVybyBoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbiNob21lLWhlcm8gaDE6bnRoLWNoaWxkKDIpIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG59XG5cbiNob21lLWhlcm8gYnV0dG9uLFxuI3NpZ24taW4tYnRuIHtcbiAgICBwYWRkaW5nOiAxMHB4IDYwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNDksIDE0OSwgMTQ5KTtcbn1cblxuI2hvbWUtaGVybyBidXR0b246aG92ZXIsXG4jc2lnbi1pbi1idG46aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoMjI2LCAyMjYsIDIyNik7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwIDUlIDUlIDUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgMjMsIDIzKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5tZW51LWNvbnRlbnQgLmhlcm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgIHBhZGRpbmc6IDQwcHggMDtcbn1cblxuLm1lbnUtY29udGVudCAuaGVybyBpIHtcbiAgICBmb250LXNpemU6IDEwMHB4O1xufVxuXG4uY2F0ZWdvcnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDUlIDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXRlZ29yeS1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgNDBweDtcbn1cblxuLmNhdGVnb3J5LWNvbnRlbnQgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5jYXRlZ29yeS1jb250ZW50IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgZm9udC1zaXplOiA0MnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jYXRlZ29yeS1pbWcge1xuICAgIHdpZHRoOiA5MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbiNzdGFydGVyLWltZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4jZW50cmllcy1pbWcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuI2Rlc3NlcnRzLWltZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuXG4jZHJpbmtzLWltZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xufVxuXG4jYWJvdXQtY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIlIDI1JSAxNSUgMjUlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2Fib3V0LWNvbnRlbnQgaDEge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuI2Fib3V0LWNvbnRlbnQgcCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4jY29udGFjdC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDUwJSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgODAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuI2NvbnRhY3QtY29udGVudCAjaGVybyB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDsgICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY4LCAzOSwgNik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbiNjb250YWN0LWNvbnRlbnQgI2Zvcm0gZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTVweDtcbiAgICBwYWRkaW5nOiAwIDAgMCAzMCU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5mb3JtIGlucHV0LFxuZm9ybSB0ZXh0YXJlYSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHdpZHRoOiA2MCU7XG59XG5cbmZvcm0gYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB3aWR0aDogMjAlO1xufVxuXG4jY29udGFjdC1jb250ZW50ICNhbHRlcm5hdGUgcCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmZvb3RlciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYsIDE2LCAxNik7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG5mb290ZXIgaSB7XG4gICAgY29sb3I6IHdoaXRlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLGtDQUFrQztJQUNsQyxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixrQkFBa0I7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QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHggNjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2LCAxNiwgMTYpO1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbmhlYWRlciBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmhlYWRlciBuYXYgYnV0dG9uLFxcbiNzaWduLWluLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI3Jlc3RhdXJhbnQtbmFtZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5oZWFkZXIgbmF2IGJ1dHRvbjpob3ZlcixcXG4jc2lnbi1pbi1idG46aG92ZXIge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4jaG9tZS1pbWcge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2Fzc2V0cy9ob21lLWltYWdlLmpwZyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlO1xcbn1cXG5cXG4jaG9tZS1oZXJvIHtcXG4gICAgcGFkZGluZzogMTIwcHggODBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigzMywgMzMsIDMzKSA4MCUsIHdoaXRlIDIwJSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZmxleDogMTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDRzIGVhc2U7XFxufVxcblxcbiNob21lLWhlcm8gaDEge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcbiNob21lLWhlcm8gaDE6bnRoLWNoaWxkKDIpIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4jaG9tZS1oZXJvIGJ1dHRvbixcXG4jc2lnbi1pbi1idG4ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDYwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE0OSwgMTQ5LCAxNDkpO1xcbn1cXG5cXG4jaG9tZS1oZXJvIGJ1dHRvbjpob3ZlcixcXG4jc2lnbi1pbi1idG46aG92ZXIge1xcbiAgICBjb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xcbiAgICBib3JkZXItY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMCA1JSA1JSA1JTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgMjMsIDIzKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVudS1jb250ZW50IC5oZXJvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBwYWRkaW5nOiA0MHB4IDA7XFxufVxcblxcbi5tZW51LWNvbnRlbnQgLmhlcm8gaSB7XFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxufVxcblxcbi5jYXRlZ29yeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDUlIDA7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhdGVnb3J5LWNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIDQwcHg7XFxufVxcblxcbi5jYXRlZ29yeS1jb250ZW50IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMzBweCAwO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbi5jYXRlZ29yeS1jb250ZW50IGRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIGZvbnQtc2l6ZTogNDJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmNhdGVnb3J5LWltZyB7XFxuICAgIHdpZHRoOiA5MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4jc3RhcnRlci1pbWcge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvbWVudS1zdGFydGVycy5qcGcpO1xcbn1cXG5cXG4jZW50cmllcy1pbWcge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvbWVudS1tYWluLmpwZyk7XFxufVxcblxcbiNkZXNzZXJ0cy1pbWcge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvbWVudS1kZXNzZXJ0LmpwZyk7XFxufVxcblxcbiNkcmlua3MtaW1nIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL21lbnUtZHJpbmtzLmpwZyk7XFxufVxcblxcbiNhYm91dC1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vYXNzZXRzL2Fib3V0LWltYWdlLmpwZyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyJSAyNSUgMTUlIDI1JTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYWJvdXQtY29udGVudCBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG59XFxuXFxuI2Fib3V0LWNvbnRlbnQgcCB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuI2NvbnRhY3QtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDUwJSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDgwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbnRhY3QtY29udGVudCAjaGVybyB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwcHg7ICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjgsIDM5LCA2KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4jY29udGFjdC1jb250ZW50ICNmb3JtIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAwIDAgMCAzMCU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuZm9ybSBpbnB1dCxcXG5mb3JtIHRleHRhcmVhIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG5cXG4jY29udGFjdC1jb250ZW50ICNhbHRlcm5hdGUgcCB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2LCAxNiwgMTYpO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuZm9vdGVyIGkge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNvbnRlbnREaXYgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG4vKiBcbiAgICAqIHJlbmRlckFib3V0IGZ1bmN0aW9uXG4gICAgKiBEeW5hbWljYWxseSBjcmVhdGVzIGNvbnRlbnQgZm9yIHRoZSBjb250ZW50IGRpdlxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckFib3V0ICgpIHtcbiAgICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dC1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBhYm91dEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBhYm91dEgxLnRleHRDb250ZW50ID0gJ0Fib3V0IFVzJztcblxuICAgIGNvbnN0IGFib3V0UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dFAudGV4dENvbnRlbnQgPSAnTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEZhY2lsaXMsIGxhYm9yZSEgUmVydW0gYWNjdXNhbXVzLCBhdXQgZXVtLCBjdXBpZGl0YXRlIGluIG1haW9yZXMgdm9sdXB0YXRlcyBhc3Blcm5hdHVyIHZvbHVwdGF0ZW0gcHJvdmlkZW50IG5lY2Vzc2l0YXRpYnVzLCBpdXJlIGFsaWFzIHF1aWEgaXN0ZSBkdWNpbXVzIG1hZ25hbSB1dCB2b2x1cHRhdGlidXMhIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNvbHV0YSwgZmFjZXJlIGNvbnNlY3RldHVyIGRpZ25pc3NpbW9zIGNvbnNlcXVhdHVyIHJlaWNpZW5kaXMgbWludXMgYmxhbmRpdGlpcy4gRGlnbmlzc2ltb3MgYWRpcGlzY2kgcGxhY2VhdCB0ZW5ldHVyIGV4Y2VwdHVyaSBuYXR1cywgY29ycnVwdGkgaW5jaWR1bnQsIHNpbnQgc2FwaWVudGUgdm9sdXB0YXRlcyBpbGxvIGFkIHF1YWVyYXQ/IExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE1pbmltYSwgbW9sbGl0aWEhIEN1cGlkaXRhdGUgcmVwdWRpYW5kYWUsIGFyY2hpdGVjdG8gdGVtcG9yZSBlaXVzLCB0ZW1wb3JhIGhhcnVtIHVsbGFtIGluY2lkdW50IHBlcnNwaWNpYXRpcyBxdWlzIG9mZmljaWEgcmVwZWxsYXQgaW4gbmVzY2l1bnQgZW5pbSBzdXNjaXBpdCB2b2x1cHRhdGVtIGRlbGVuaXRpIHV0Pyc7XG5cbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChhYm91dEgxKTtcbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChhYm91dFApO1xuICAgIFxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWJvdXREaXYpO1xufTtcbiIsImltcG9ydCB7IGNvbnRlbnREaXYgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG4vKiBcbiAgICAqIHJlbmRlckNvbnRhY3QgZnVuY3Rpb25cbiAgICAqIER5bmFtaWNhbGx5IGNyZWF0ZXMgY29udGVudCBmb3IgdGhlIGNvbnRlbnQgZGl2XG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQ29udGFjdCAoKSB7XG4gICAgY29udGVudERpdi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBjb25zdCBjb250YWN0Q29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RDb250ZW50RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBjb250YWN0SGVyb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RIZXJvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVybycpO1xuXG4gICAgY29uc3QgaGVyb0gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZXJvSDEudGV4dENvbnRlbnQgPSAnQ09OVEFDVCBVUyc7XG5cbiAgICBjb250YWN0SGVyb0Rpdi5hcHBlbmRDaGlsZChoZXJvSDEpO1xuXG4gICAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1EaXYuc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtJyk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgY29uc3QgZnVsbE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgY29tbWVudExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgIGZ1bGxOYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZnVsbC1uYW1lJyk7XG4gICAgZnVsbE5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdGdWxsIE5hbWUqJztcblxuICAgIGVtYWlsTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZW1haWwnKTtcbiAgICBlbWFpbExhYmVsLnRleHRDb250ZW50ID0gJ0VtYWlsKic7XG5cbiAgICBjb21tZW50TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY29tbWVudCcpO1xuICAgIGNvbW1lbnRMYWJlbC50ZXh0Q29udGVudCA9ICdDb21tZW50Kic7XG5cbiAgICBjb25zdCBmdWxsTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBjb21tZW50SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gICAgZnVsbE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGZ1bGxOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdmdWxsLW5hbWUnKTtcbiAgICBmdWxsTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbWF4LWxlbmd0aCcsIDQwKTtcbiAgICBmdWxsTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbWluLWxlbmd0aCcsIDUpO1xuICAgIC8vIGZ1bGxOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcpO1xuXG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKTtcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZW1haWwnKTtcbiAgICAvLyBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcblxuICAgIGNvbW1lbnRJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbW1lbnQnKTtcbiAgICBjb21tZW50SW5wdXQuc2V0QXR0cmlidXRlKCdyb3dzJywgNSk7XG4gICAgLy8gY29tbWVudElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcblxuICAgIGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBmb3JtQnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGZ1bGxOYW1lTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZnVsbE5hbWVJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChlbWFpbExhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY29tbWVudExhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNvbW1lbnRJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQnRuKTtcblxuICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBjb25zdCBhbHRlcm5hdGl2ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFsdGVybmF0aXZlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWx0ZXJuYXRlJyk7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIHAxLnRleHRDb250ZW50ID0gJ0FsdGVybmF0aXZlbHksJztcbiAgICBwMi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJieCBieC1jdXJyZW50LWxvY2F0aW9uXCI+PC9pPiBBcHQuIDYzNiA0NjMgQ3luZHkgTGlnaHQsIE5ldyBTaW1vbmZ1cnQsIE1OIDk3NjkyJztcbiAgICBwMy5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJieCBieC1waG9uZVwiPjwvaT4gKzEgKDExNSkgMzgwLTA1MDUnO1xuICAgIHA0LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImJ4IGJ4LWVudmVsb3BlXCI+PC9pPiBhbGV4c2NobWl0dEByZWFsZW1haWwuY29tJztcblxuICAgIGFsdGVybmF0aXZlRGl2LmFwcGVuZENoaWxkKHAxKTtcbiAgICBhbHRlcm5hdGl2ZURpdi5hcHBlbmRDaGlsZChwMik7XG4gICAgYWx0ZXJuYXRpdmVEaXYuYXBwZW5kQ2hpbGQocDMpO1xuICAgIGFsdGVybmF0aXZlRGl2LmFwcGVuZENoaWxkKHA0KTtcblxuICAgIGNvbnRhY3RDb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RIZXJvRGl2KTtcbiAgICBjb250YWN0Q29udGVudERpdi5hcHBlbmRDaGlsZChmb3JtRGl2KTtcbiAgICBjb250YWN0Q29udGVudERpdi5hcHBlbmRDaGlsZChhbHRlcm5hdGl2ZURpdik7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50RGl2KTtcbn07XG4iLCJpbXBvcnQgeyBjb250ZW50RGl2IH0gZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckhvbWUgKCkge1xuICAgIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgY29uc3QgaW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1nRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS1pbWcnKTtcblxuICAgIGNvbnN0IGhlcm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS1oZXJvJyk7XG5cbiAgICBjb25zdCBoZXJvV2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVyb1dlbGNvbWUudGV4dENvbnRlbnQgPSBcIldFTENPTUUgVE8gU1BPQ0hFUidTXCI7XG5cbiAgICBjb25zdCBoZXJvUGl0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlcm9QaXRjaC50ZXh0Q29udGVudCA9IFwiRXhwZXJpZW5jZSBUaGUgVWx0aW1hdGUgQkJRIEFkdmVudHVyZTogV2hlcmUgRmxhdm9yIE1lZXRzIFRyYWRpdGlvblwiO1xuXG4gICAgY29uc3QgaGVyb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhlcm9CdG4udGV4dENvbnRlbnQgPSBcIkJvb2sgQSBUYWJsZVwiO1xuXG4gICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChoZXJvV2VsY29tZSk7XG4gICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChoZXJvUGl0Y2gpO1xuICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQoaGVyb0J0bik7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGltZ0Rpdik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZXJvRGl2KTtcbn07IiwiLy8gR2V0IEhUTUwgZWxlbWVudHMgdGhhdCByZXF1aXJlcyB1c2VyIGludGVyYWN0aW9uXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG5jb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dCcpOyBcbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4vLyBFeHBvcnQgdGhlIGNvbnRlbnREaXYgc28gdGhhdCBhbGwgbW9kdWxlcyBjYW4gYWNjZXNzIGl0IGFuZCByZW5kZXIgY29udGVudCBpbiBpdCBkeW5hbWljYWxseSBcbi8vIEFsc28gZXhwb3J0cyBjcmVhdGVEaXYgYW5kIGNyZWF0ZVAgdG8gY3JlYXRlIGRpdiBhbmQgcCBodG1sIGVsZW1lbnRzXG5leHBvcnQgeyBjb250ZW50RGl2LCBjcmVhdGVEaXYsIGNyZWF0ZVAgfTtcblxuLy8gR2V0IHRoZSBmdW5jdGlvbiBmcm9tIGFsbCB0aGUgbW9kdWxlcyB0aGF0IHJlbmRyZXMgcmVuZGVyZXMgdGhlIG1haW4gY29udGVudFxuaW1wb3J0IHJlbmRlckhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHJlbmRlck1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHJlbmRlckNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IHJlbmRlckFib3V0IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy8gcmVuZGVyQ29udGVudERpdiBjYWxscyB0aGUgYXBwcm9wcmlhdGUgcmVuZGVyIGZ1bmN0aW9uIGFjY29yZGluZyB0byB0aGUgdXNlcidzIGludGVyYWN0aW9uXG5jb25zdCByZW5kZXJDb250ZW50RGl2ID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZW5kZXJIb21lKCk7XG5cbiAgICBob21lQnRuLm9uY2xpY2sgPSAoKSA9PiByZW5kZXJIb21lKCk7XG4gICAgbWVudUJ0bi5vbmNsaWNrID0gKCkgPT4gcmVuZGVyTWVudSgpO1xuICAgIGNvbnRhY3RCdG4ub25jbGljayA9ICgpID0+IHJlbmRlckNvbnRhY3QoKTtcbiAgICBhYm91dEJ0bi5vbmNsaWNrID0gKCkgPT4gcmVuZGVyQWJvdXQoKTtcbn0pKCk7XG5cbi8vIGNyZWF0ZSBkaXYgZWxlbWVudFxuZnVuY3Rpb24gY3JlYXRlRGl2ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG59O1xuXG4vLyBjcmVhdGUgcCBlbGVtZW50XG5mdW5jdGlvbiBjcmVhdGVQICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xufTsiLCJpbXBvcnQgeyBjb250ZW50RGl2LCBjcmVhdGVEaXYsIGNyZWF0ZVAgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG4vKiBcbiAgICAqIHJlbmRlck1lbnUgZnVuY3Rpb25cbiAgICAqIER5bmFtaWNhbGx5IGNyZWF0ZXMgY29udGVudCBmb3IgdGhlIGNvbnRlbnQgZGl2XG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTWVudSAoKSB7XG4gICAgY29udGVudERpdi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBjb25zdCBtZW51Q29udGVudCA9IGNyZWF0ZURpdigpO1xuICAgIG1lbnVDb250ZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBtZW51SGVybyA9IGNyZWF0ZURpdigpO1xuICAgIG1lbnVIZXJvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVybycpO1xuXG4gICAgbWVudUhlcm8uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiYnggYngtZm9ya1wiPjwvaT4gPGgxPk91ciBBd2Vzb21lIEJCUSBNZW51PC9oMT4gPGkgY2xhc3M9XCJieCBieC1rbmlmZSBieC1yb3RhdGUtMjcwXCI+PC9pPic7XG5cbiAgICBjb25zdCBzdGFydGVyc0RpdiA9IGNyZWF0ZURpdigpO1xuICAgIHN0YXJ0ZXJzRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2F0ZWdvcnknKTtcblxuICAgIGNvbnN0IGVudHJpZXNEaXYgPSBjcmVhdGVEaXYoKTtcbiAgICBlbnRyaWVzRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2F0ZWdvcnknKTtcblxuICAgIGNvbnN0IGRlc3NlcnRzRGl2ID0gY3JlYXRlRGl2KCk7XG4gICAgZGVzc2VydHNEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXRlZ29yeScpO1xuXG4gICAgY29uc3QgZHJpbmtzRGl2ID0gY3JlYXRlRGl2KCk7XG4gICAgZHJpbmtzRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2F0ZWdvcnknKTtcblxuICAgIGNvbnN0IHN0YXJ0ZXJzQ29udGVudCA9IGNyZWF0ZURpdigpO1xuICAgIHN0YXJ0ZXJzQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhdGVnb3J5LWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IGVudHJpZXNDb250ZW50ID0gY3JlYXRlRGl2KCk7XG4gICAgZW50cmllc0NvbnRlbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXRlZ29yeS1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBkZXNzZXJ0c0NvbnRlbnQgPSBjcmVhdGVEaXYoKTtcbiAgICBkZXNzZXJ0c0NvbnRlbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXRlZ29yeS1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBkcmlua3NDb250ZW50ID0gY3JlYXRlRGl2KCk7XG4gICAgZHJpbmtzQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhdGVnb3J5LWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IHN0YXJ0ZXJzSW1nID0gY3JlYXRlRGl2KCk7XG4gICAgc3RhcnRlcnNJbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXRlZ29yeS1pbWcnKTtcbiAgICBzdGFydGVyc0ltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXJ0ZXItaW1nJyk7XG5cbiAgICBjb25zdCBlbnRyaWVzSW1nID0gY3JlYXRlRGl2KCk7XG4gICAgZW50cmllc0ltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhdGVnb3J5LWltZycpO1xuICAgIGVudHJpZXNJbWcuc2V0QXR0cmlidXRlKCdpZCcsICdlbnRyaWVzLWltZycpO1xuXG4gICAgY29uc3QgZGVzc2VydHNJbWcgPSBjcmVhdGVEaXYoKTtcbiAgICBkZXNzZXJ0c0ltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhdGVnb3J5LWltZycpO1xuICAgIGRlc3NlcnRzSW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzc2VydHMtaW1nJyk7XG5cbiAgICBjb25zdCBkcmlua3NJbWcgPSBjcmVhdGVEaXYoKTtcbiAgICBkcmlua3NJbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXRlZ29yeS1pbWcnKTtcbiAgICBkcmlua3NJbWcuc2V0QXR0cmlidXRlKCdpZCcsICdkcmlua3MtaW1nJyk7XG5cbiAgICBsZXQgcDEgLHAyO1xuXG4gICAgY29uc3Qgc3RhcnREaXYxID0gY3JlYXRlRGl2KCk7XG4gICAgc3RhcnREaXYxLnRleHRDb250ZW50ID0gJ1NUQVJURVJTJztcblxuICAgIGNvbnN0IHN0YXJ0RGl2MiA9IGNyZWF0ZURpdigpO1xuICAgIHAxID0gY3JlYXRlUCgpO1xuICAgIHAxLnRleHRDb250ZW50ID0gJ1BBTiBGUklFRCBDSElLRkVBIENBS0UnO1xuICAgIHAyID0gY3JlYXRlUCgpO1xuICAgIHAyLnRleHRDb250ZW50ID0gJyQgMTIuMDAnO1xuICAgIHN0YXJ0RGl2Mi5hcHBlbmRDaGlsZChwMSk7XG4gICAgc3RhcnREaXYyLmFwcGVuZENoaWxkKHAyKTtcblxuICAgIGNvbnN0IHN0YXJ0RGl2MyA9IGNyZWF0ZURpdigpO1xuICAgIHAxID0gY3JlYXRlUCgpO1xuICAgIHAxLnRleHRDb250ZW50ID0gJ01FWElDQU4gQkJRJztcbiAgICBwMiA9IGNyZWF0ZVAoKTtcbiAgICBwMi50ZXh0Q29udGVudCA9ICckIDEwLjAwJztcbiAgICBzdGFydERpdjMuYXBwZW5kQ2hpbGQocDEpO1xuICAgIHN0YXJ0RGl2My5hcHBlbmRDaGlsZChwMik7XG5cbiAgICBjb25zdCBzdGFydERpdjQgPSBjcmVhdGVEaXYoKTtcbiAgICBwMSA9IGNyZWF0ZVAoKTtcbiAgICBwMS50ZXh0Q29udGVudCA9ICdDUlVESVRURSBQTEFUVEVSJztcbiAgICBwMiA9IGNyZWF0ZVAoKTtcbiAgICBwMi50ZXh0Q29udGVudCA9ICckIDkuMDAnO1xuICAgIHN0YXJ0RGl2NC5hcHBlbmRDaGlsZChwMSk7XG4gICAgc3RhcnREaXY0LmFwcGVuZENoaWxkKHAyKTtcblxuICAgIGNvbnN0IHN0YXJ0RGl2NSA9IGNyZWF0ZURpdigpO1xuICAgIHAxID0gY3JlYXRlUCgpO1xuICAgIHAxLnRleHRDb250ZW50ID0gJ01JWEVEIE1FQVQgVEFDT1MnO1xuICAgIHAyID0gY3JlYXRlUCgpO1xuICAgIHAyLnRleHRDb250ZW50ID0gJyQgNy4wMCc7XG4gICAgc3RhcnREaXY1LmFwcGVuZENoaWxkKHAxKTtcbiAgICBzdGFydERpdjUuYXBwZW5kQ2hpbGQocDIpO1xuXG4gICAgY29uc3QgZW50cmllc0RpdjEgPSBjcmVhdGVEaXYoKTtcbiAgICBlbnRyaWVzRGl2MS50ZXh0Q29udGVudCA9ICdFTlRSSUVTJztcblxuICAgIGNvbnN0IGVudHJpZXNEaXYyID0gY3JlYXRlRGl2KCk7XG4gICAgcDEgPSBjcmVhdGVQKCk7XG4gICAgcDEudGV4dENvbnRlbnQgPSAnU01PVEhFUkVEIEJCUSBDSE9QUyc7XG4gICAgcDIgPSBjcmVhdGVQKCk7XG4gICAgcDIudGV4dENvbnRlbnQgPSAnJCAxMi4wMCc7XG4gICAgZW50cmllc0RpdjIuYXBwZW5kQ2hpbGQocDEpO1xuICAgIGVudHJpZXNEaXYyLmFwcGVuZENoaWxkKHAyKTtcblxuICAgIGNvbnN0IGVudHJpZXNEaXYzID0gY3JlYXRlRGl2KCk7XG4gICAgcDEgPSBjcmVhdGVQKCk7XG4gICAgcDEudGV4dENvbnRlbnQgPSAnUElUIEJFRUYnO1xuICAgIHAyID0gY3JlYXRlUCgpO1xuICAgIHAyLnRleHRDb250ZW50ID0gJyQgMTIuMDAnO1xuICAgIGVudHJpZXNEaXYzLmFwcGVuZENoaWxkKHAxKTtcbiAgICBlbnRyaWVzRGl2My5hcHBlbmRDaGlsZChwMik7XG5cbiAgICBjb25zdCBlbnRyaWVzRGl2NCA9IGNyZWF0ZURpdigpO1xuICAgIHAxID0gY3JlYXRlUCgpO1xuICAgIHAxLnRleHRDb250ZW50ID0gJ1RBR0xFQVRBJztcbiAgICBwMiA9IGNyZWF0ZVAoKTtcbiAgICBwMi50ZXh0Q29udGVudCA9ICckIDEyLjAwJztcbiAgICBlbnRyaWVzRGl2NC5hcHBlbmRDaGlsZChwMSk7XG4gICAgZW50cmllc0RpdjQuYXBwZW5kQ2hpbGQocDIpO1xuXG4gICAgY29uc3QgZW50cmllc0RpdjUgPSBjcmVhdGVEaXYoKTtcbiAgICBwMSA9IGNyZWF0ZVAoKTtcbiAgICBwMS50ZXh0Q29udGVudCA9ICdTSFJFRERFRCBMQU1QIFBPUlRPJztcbiAgICBwMiA9IGNyZWF0ZVAoKTtcbiAgICBwMi50ZXh0Q29udGVudCA9ICckIDEyLjAwJztcbiAgICBlbnRyaWVzRGl2NS5hcHBlbmRDaGlsZChwMSk7XG4gICAgZW50cmllc0RpdjUuYXBwZW5kQ2hpbGQocDIpO1xuXG4gICAgY29uc3QgZGVzc2VydHNEaXYxID0gY3JlYXRlRGl2KCk7XG4gICAgZGVzc2VydHNEaXYxLnRleHRDb250ZW50ID0gJ0RFU1NFUlRTJztcblxuICAgIGNvbnN0IGRlc3NlcnRzRGl2MiA9IGNyZWF0ZURpdigpO1xuICAgIHAxID0gY3JlYXRlUCgpO1xuICAgIHAxLnRleHRDb250ZW50ID0gJ0RPUklTIFZJRU5ORVNFIFRBQkxFJztcbiAgICBwMiA9IGNyZWF0ZVAoKTtcbiAgICBwMi50ZXh0Q29udGVudCA9ICckIDEyLjAwJztcbiAgICBkZXNzZXJ0c0RpdjIuYXBwZW5kQ2hpbGQocDEpO1xuICAgIGRlc3NlcnRzRGl2Mi5hcHBlbmRDaGlsZChwMik7XG5cbiAgICBjb25zdCBkZXNzZXJ0c0RpdjMgPSBjcmVhdGVEaXYoKTtcbiAgICBwMSA9IGNyZWF0ZVAoKTtcbiAgICBwMS50ZXh0Q29udGVudCA9ICdUSVJBTUlTVSc7XG4gICAgcDIgPSBjcmVhdGVQKCk7XG4gICAgcDIudGV4dENvbnRlbnQgPSAnJCAxMi4wMCc7XG4gICAgZGVzc2VydHNEaXYzLmFwcGVuZENoaWxkKHAxKTtcbiAgICBkZXNzZXJ0c0RpdjMuYXBwZW5kQ2hpbGQocDIpO1xuXG4gICAgY29uc3QgZGVzc2VydHNEaXY0ID0gY3JlYXRlRGl2KCk7XG4gICAgcDEgPSBjcmVhdGVQKCk7XG4gICAgcDEudGV4dENvbnRlbnQgPSAnVEFSVFVGRk8gQ0FQUFVDQ0lOTyc7XG4gICAgcDIgPSBjcmVhdGVQKCk7XG4gICAgcDIudGV4dENvbnRlbnQgPSAnJCAxMi4wMCc7XG4gICAgZGVzc2VydHNEaXY0LmFwcGVuZENoaWxkKHAxKTtcbiAgICBkZXNzZXJ0c0RpdjQuYXBwZW5kQ2hpbGQocDIpO1xuXG4gICAgY29uc3QgZGVzc2VydHNEaXY1ID0gY3JlYXRlRGl2KCk7XG4gICAgcDEgPSBjcmVhdGVQKCk7XG4gICAgcDEudGV4dENvbnRlbnQgPSAnUEFOTkEgQ09UVEEnO1xuICAgIHAyID0gY3JlYXRlUCgpO1xuICAgIHAyLnRleHRDb250ZW50ID0gJyQgMTIuMDAnO1xuICAgIGRlc3NlcnRzRGl2NS5hcHBlbmRDaGlsZChwMSk7XG4gICAgZGVzc2VydHNEaXY1LmFwcGVuZENoaWxkKHAyKTtcblxuICAgIGNvbnN0IGRyaW5rc0RpdjEgPSBjcmVhdGVEaXYoKTtcbiAgICBkcmlua3NEaXYxLnRleHRDb250ZW50ID0gJ0RSSU5LUyc7XG5cbiAgICBjb25zdCBkcmlua3NEaXYyID0gY3JlYXRlRGl2KCk7XG4gICAgcDEgPSBjcmVhdGVQKCk7XG4gICAgcDEudGV4dENvbnRlbnQgPSAnV0hJVEUgV0hJTkUnO1xuICAgIHAyID0gY3JlYXRlUCgpO1xuICAgIHAyLnRleHRDb250ZW50ID0gJyQgMTIuMDAnO1xuICAgIGRyaW5rc0RpdjIuYXBwZW5kQ2hpbGQocDEpO1xuICAgIGRyaW5rc0RpdjIuYXBwZW5kQ2hpbGQocDIpO1xuXG4gICAgY29uc3QgZHJpbmtzRGl2MyA9IGNyZWF0ZURpdigpO1xuICAgIHAxID0gY3JlYXRlUCgpO1xuICAgIHAxLnRleHRDb250ZW50ID0gJ0xPQ0FMIEJFRVInO1xuICAgIHAyID0gY3JlYXRlUCgpO1xuICAgIHAyLnRleHRDb250ZW50ID0gJyQgMTIuMDAnO1xuICAgIGRyaW5rc0RpdjMuYXBwZW5kQ2hpbGQocDEpO1xuICAgIGRyaW5rc0RpdjMuYXBwZW5kQ2hpbGQocDIpO1xuXG4gICAgY29uc3QgZHJpbmtzRGl2NCA9IGNyZWF0ZURpdigpO1xuICAgIHAxID0gY3JlYXRlUCgpO1xuICAgIHAxLnRleHRDb250ZW50ID0gJ0ZSRVNIIElDRUQgVEVBJztcbiAgICBwMiA9IGNyZWF0ZVAoKTtcbiAgICBwMi50ZXh0Q29udGVudCA9ICckIDEyLjAwJztcbiAgICBkcmlua3NEaXY0LmFwcGVuZENoaWxkKHAxKTtcbiAgICBkcmlua3NEaXY0LmFwcGVuZENoaWxkKHAyKTtcblxuICAgIGNvbnN0IGRyaW5rc0RpdjUgPSBjcmVhdGVEaXYoKTtcbiAgICBwMSA9IGNyZWF0ZVAoKTtcbiAgICBwMS50ZXh0Q29udGVudCA9ICdNT0pJVE8nO1xuICAgIHAyID0gY3JlYXRlUCgpO1xuICAgIHAyLnRleHRDb250ZW50ID0gJyQgMTIuMDAnO1xuICAgIGRyaW5rc0RpdjUuYXBwZW5kQ2hpbGQocDEpO1xuICAgIGRyaW5rc0RpdjUuYXBwZW5kQ2hpbGQocDIpO1xuXG4gICAgc3RhcnRlcnNDb250ZW50LmFwcGVuZENoaWxkKHN0YXJ0RGl2MSk7XG4gICAgc3RhcnRlcnNDb250ZW50LmFwcGVuZENoaWxkKHN0YXJ0RGl2Mik7XG4gICAgc3RhcnRlcnNDb250ZW50LmFwcGVuZENoaWxkKHN0YXJ0RGl2Myk7XG4gICAgc3RhcnRlcnNDb250ZW50LmFwcGVuZENoaWxkKHN0YXJ0RGl2NCk7XG4gICAgc3RhcnRlcnNDb250ZW50LmFwcGVuZENoaWxkKHN0YXJ0RGl2NSk7XG5cbiAgICBlbnRyaWVzQ29udGVudC5hcHBlbmRDaGlsZChlbnRyaWVzRGl2MSk7XG4gICAgZW50cmllc0NvbnRlbnQuYXBwZW5kQ2hpbGQoZW50cmllc0RpdjIpO1xuICAgIGVudHJpZXNDb250ZW50LmFwcGVuZENoaWxkKGVudHJpZXNEaXYzKTtcbiAgICBlbnRyaWVzQ29udGVudC5hcHBlbmRDaGlsZChlbnRyaWVzRGl2NCk7XG4gICAgZW50cmllc0NvbnRlbnQuYXBwZW5kQ2hpbGQoZW50cmllc0RpdjUpO1xuXG4gICAgZGVzc2VydHNDb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnRzRGl2MSk7XG4gICAgZGVzc2VydHNDb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnRzRGl2Mik7XG4gICAgZGVzc2VydHNDb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnRzRGl2Myk7XG4gICAgZGVzc2VydHNDb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnRzRGl2NCk7XG4gICAgZGVzc2VydHNDb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnRzRGl2NSk7XG5cbiAgICBkcmlua3NDb250ZW50LmFwcGVuZENoaWxkKGRyaW5rc0RpdjEpO1xuICAgIGRyaW5rc0NvbnRlbnQuYXBwZW5kQ2hpbGQoZHJpbmtzRGl2Mik7XG4gICAgZHJpbmtzQ29udGVudC5hcHBlbmRDaGlsZChkcmlua3NEaXYzKTtcbiAgICBkcmlua3NDb250ZW50LmFwcGVuZENoaWxkKGRyaW5rc0RpdjQpO1xuICAgIGRyaW5rc0NvbnRlbnQuYXBwZW5kQ2hpbGQoZHJpbmtzRGl2NSk7XG5cbiAgICBzdGFydGVyc0Rpdi5hcHBlbmRDaGlsZChzdGFydGVyc0NvbnRlbnQpO1xuICAgIHN0YXJ0ZXJzRGl2LmFwcGVuZENoaWxkKHN0YXJ0ZXJzSW1nKTtcblxuICAgIGVudHJpZXNEaXYuYXBwZW5kQ2hpbGQoZW50cmllc0ltZyk7XG4gICAgZW50cmllc0Rpdi5hcHBlbmRDaGlsZChlbnRyaWVzQ29udGVudCk7XG5cbiAgICBkZXNzZXJ0c0Rpdi5hcHBlbmRDaGlsZChkZXNzZXJ0c0NvbnRlbnQpO1xuICAgIGRlc3NlcnRzRGl2LmFwcGVuZENoaWxkKGRlc3NlcnRzSW1nKTtcblxuICAgIGRyaW5rc0Rpdi5hcHBlbmRDaGlsZChkcmlua3NJbWcpO1xuICAgIGRyaW5rc0Rpdi5hcHBlbmRDaGlsZChkcmlua3NDb250ZW50KTtcblxuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1lbnVIZXJvKTtcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChzdGFydGVyc0Rpdik7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZW50cmllc0Rpdik7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzc2VydHNEaXYpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGRyaW5rc0Rpdik7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVDb250ZW50KTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9