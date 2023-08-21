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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Nunito', sans-serif; */
    color: white;
    fill: white;
}

@font-face {
  font-family: "San Francisco";
  font-weight: 400;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
}

:root {
    --font-pri-color: white;
    --font-sec-color: rgba(255, 255, 255, 0.5);
}


body {
    font-family: "San Francisco";
    height: 100vh;
    width: 100vw;
    background: linear-gradient(135deg, rgba(0,55,115,1) 0%, rgba(3,166,199,1) 100%);
    display: grid;
    grid-template-rows: 6rem 1fr 3rem;
}

.loader {
    grid-row: 2 / 3;
    padding-top: 5rem;
    justify-self: center;
}

header {
    display: grid;
    grid-template-columns: 1fr 4fr 2fr;
    align-items: center;
    padding: 2rem 9rem 0rem 9rem;
}

.logo {
    display: grid;
    grid-template-columns: 1fr 5rem;
    align-items: center;
    justify-items: center;
}

.logo h1 {
    font-size: 4rem;
}

.nav{
    grid-column: 3 / 4;
    display: grid;
    grid-template-columns: 5fr 1fr 1fr;
    gap: 1rem;
    justify-items: center;
}

#search {
    height: 100%;
    width: 15rem;
    border-radius: 1rem;
    border: none;
    background-color: #0e2d44;
    border: 3px solid #0e2d44;
    padding-left: 1rem;
}

#search:focus {
    outline: none;
    border: 3px solid white;
}

.conv {
    padding: 0.6em 2em;
    border-radius: 1.5rem;
    white-space: nowrap;
    border: none;
    background-color: #0e2d44;
    border: 3px solid #0e2d44;
}

.conv-selected {
    border: 3px solid white;
}

main {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
}

.main-inner {
    width: 80%;
    display: grid;
    grid-template-columns: 2fr 1fr;
}

.primary-info {
    display: grid;
    align-content: center;
    gap: 1rem;

}

#location {
    font-size: 3rem;
}

#time {
    font-size: 1.5rem;
    color: var(--font-sec-color);
}

.temp {
    width: 60%;
    display: grid;
    grid-template-columns: 10rem 1fr;
    align-items: center;
    gap: 1rem;
}

.symbol {
    padding-top: 1rem;
}

#temp-info {
    font-size: 3rem;
}

#feels-like, #temp-desc {
    font-size: 1.5rem;
    color: var(--font-sec-color);
}

.temp h1 {
    font-size: 9rem;
}

.secondary-info {
    align-self: center;
    height: 70%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    align-items: center;
    padding-top: 5rem;
}

.sec-info {
    display: grid;
    grid-template-rows: min-content 5rem;
    gap: 2rem;
}

.sec-info span {
    color: var(--font-sec-color);
}

.sec-info h3 {
    font-size: 2.3rem;
}

.sec-info svg {
    height: 60%;
    margin-left: 1rem;
}


footer {
  display: grid;
  grid-template-columns: auto 30px;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1rem;
  user-select: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,uCAAuC;IACvC,YAAY;IACZ,WAAW;AACf;;AAEA;EACE,4BAA4B;EAC5B,gBAAgB;EAChB,0HAA0H;AAC5H;;AAEA;IACI,uBAAuB;IACvB,0CAA0C;AAC9C;;;AAGA;IACI,4BAA4B;IAC5B,aAAa;IACb,YAAY;IACZ,gFAAgF;IAChF,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,kCAAkC;IAClC,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,yBAAyB;IACzB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,mBAAmB;IACnB,YAAY;IACZ,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,SAAS;;AAEb;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,4BAA4B;AAChC;;AAEA;IACI,UAAU;IACV,aAAa;IACb,gCAAgC;IAChC,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,4BAA4B;AAChC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,SAAS;IACT,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,SAAS;AACb;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;;AAGA;EACE,aAAa;EACb,gCAAgC;EAChC,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,eAAe;EACf,iBAAiB;AACnB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* font-family: 'Nunito', sans-serif; */\n    color: white;\n    fill: white;\n}\n\n@font-face {\n  font-family: \"San Francisco\";\n  font-weight: 400;\n  src: url(\"https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff\");\n}\n\n:root {\n    --font-pri-color: white;\n    --font-sec-color: rgba(255, 255, 255, 0.5);\n}\n\n\nbody {\n    font-family: \"San Francisco\";\n    height: 100vh;\n    width: 100vw;\n    background: linear-gradient(135deg, rgba(0,55,115,1) 0%, rgba(3,166,199,1) 100%);\n    display: grid;\n    grid-template-rows: 6rem 1fr 3rem;\n}\n\n.loader {\n    grid-row: 2 / 3;\n    padding-top: 5rem;\n    justify-self: center;\n}\n\nheader {\n    display: grid;\n    grid-template-columns: 1fr 4fr 2fr;\n    align-items: center;\n    padding: 2rem 9rem 0rem 9rem;\n}\n\n.logo {\n    display: grid;\n    grid-template-columns: 1fr 5rem;\n    align-items: center;\n    justify-items: center;\n}\n\n.logo h1 {\n    font-size: 4rem;\n}\n\n.nav{\n    grid-column: 3 / 4;\n    display: grid;\n    grid-template-columns: 5fr 1fr 1fr;\n    gap: 1rem;\n    justify-items: center;\n}\n\n#search {\n    height: 100%;\n    width: 15rem;\n    border-radius: 1rem;\n    border: none;\n    background-color: #0e2d44;\n    border: 3px solid #0e2d44;\n    padding-left: 1rem;\n}\n\n#search:focus {\n    outline: none;\n    border: 3px solid white;\n}\n\n.conv {\n    padding: 0.6em 2em;\n    border-radius: 1.5rem;\n    white-space: nowrap;\n    border: none;\n    background-color: #0e2d44;\n    border: 3px solid #0e2d44;\n}\n\n.conv-selected {\n    border: 3px solid white;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n}\n\n.main-inner {\n    width: 80%;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n}\n\n.primary-info {\n    display: grid;\n    align-content: center;\n    gap: 1rem;\n\n}\n\n#location {\n    font-size: 3rem;\n}\n\n#time {\n    font-size: 1.5rem;\n    color: var(--font-sec-color);\n}\n\n.temp {\n    width: 60%;\n    display: grid;\n    grid-template-columns: 10rem 1fr;\n    align-items: center;\n    gap: 1rem;\n}\n\n.symbol {\n    padding-top: 1rem;\n}\n\n#temp-info {\n    font-size: 3rem;\n}\n\n#feels-like, #temp-desc {\n    font-size: 1.5rem;\n    color: var(--font-sec-color);\n}\n\n.temp h1 {\n    font-size: 9rem;\n}\n\n.secondary-info {\n    align-self: center;\n    height: 70%;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    gap: 1rem;\n    align-items: center;\n    padding-top: 5rem;\n}\n\n.sec-info {\n    display: grid;\n    grid-template-rows: min-content 5rem;\n    gap: 2rem;\n}\n\n.sec-info span {\n    color: var(--font-sec-color);\n}\n\n.sec-info h3 {\n    font-size: 2.3rem;\n}\n\n.sec-info svg {\n    height: 60%;\n    margin-left: 1rem;\n}\n\n\nfooter {\n  display: grid;\n  grid-template-columns: auto 30px;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  font-size: 1rem;\n  user-select: none;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/modules/api.js");


const UI = (() => {
    async function loadHome() {
        loading()
        await _api__WEBPACK_IMPORTED_MODULE_0__["default"].get()
        let data = _api__WEBPACK_IMPORTED_MODULE_0__["default"].getData()
        loadContent()
        updateDOM(data)
    }

    async function search(location) {
        loading()
        await _api__WEBPACK_IMPORTED_MODULE_0__["default"].get(location)
        let data = _api__WEBPACK_IMPORTED_MODULE_0__["default"].getData()
        loadContent()
        updateDOM(data)
    }

    function loading() {
        document.body.innerHTML = `
            <div class="loader">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                    <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
                </path>
            </svg>
            </div>`
    }

    function loadContent() {
        document.body.innerHTML = `
        <header>
            <div class="logo">
                <h1>Wthr</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z" />
                </svg>
            </div>
            <div class="nav">
                <form action="#" method="get" id="myForm">
                    <input id="search" type="text">
                </form>
                <button class="conv" id="celcius">&degC, kmh</button>
                <button class="conv" id="fahrenheit">&degF, mph</button>
            </div>
        </header>
        <main>
            <div class="main-inner">
                <div class="primary-info">
                    <h2 id="location"></h2>
                    <span id="time"></span>
                    <div class="temp">
                        <div class="symbol">
                        </div>
                        <div class="temperature">
                            <h1 id="temp"></h1>
                        </div>
                    </div>
                    <span id="temp-info"></span>
                    <span id="feels-like"></span>
                </div>
                <div class="secondary-info">
                    <div class="sec-info" id="wind">
                        <span>Wind</span>
                        <h3 id="wind-in"></h3>
                    </div>
                    <div class="sec-info" id="humidity">
                        <span>Humidity</span>
                        <h3 id="hum-in"></h3>
                    </div>
                    <div class="sec-info" id="uv-index">
                        <span>UV Index</span>
                        <h3 id="uv-in"></h3>
                    </div>
                    <div class="sec-info" id="visibility">
                        <span>Visibility</span>
                        <h3 id="vis-in"></h3>
                    </div>
                    <div class="sec-info" id="cloudiness">
                        <span>Cloudiness</span>
                        <h3 id="cloud-in"></h3>
                    </div>
                    <div class="sec-info" id="chance-of-rain">
                        <span>Precipitation</span>
                        <h3 id="rain-in"></h3>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <span>Copyright © 2023 Declankb</span>
            <a href='https://github.com/DeclanKBrown' target='_blank' rel='noopener noreferrer'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' />
                </svg>
            </a>
        </footer>`

        initSearch()
    }

    function initSearch() {
        const form = document.getElementById("myForm");

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const searchInput = document.getElementById("search");
            search(searchInput.value);
        });
    }

    function updateDOM(data) {
        document.querySelector('#location').innerHTML = data.location
        document.querySelector('#time').innerHTML = formatTime(data)
        document.querySelector('.symbol').innerHTML = symbol(data)
        document.querySelector('#temp').innerHTML = data.temp + '&degC'
        document.querySelector('#temp-info').innerHTML = data.condition
        document.querySelector('#feels-like').innerHTML = "Feels like " + data.feels_like + "&degC"
        document.querySelector('#wind-in').innerHTML = data.wind
        document.querySelector('#hum-in').innerHTML = data.humidity + '%'
        document.querySelector('#uv-in').innerHTML = data.uv
        document.querySelector('#vis-in').innerHTML = data.vis + 'km'
        document.querySelector('#cloud-in').innerHTML = data.cloud + '%'
        document.querySelector('#rain-in').innerHTML = data.precip + 'mm'
    }

    function formatTime(data) {
        const day = data.time.split(' ')[0].split('-')[2]
        const month = data.time.split(' ')[0].split('-')[1]
        const year = data.time.split(' ')[0].split('-')[0]
        const clock = data.time.split(' ')[1]
        return `${day}/${month}/${year} | ${clock}`
    }

    function symbol(data) {
        const hour = parseInt(data.time.split(' ')[1].split(':')[0])

        if (hour => 20 || 0) {
            return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z" /></svg>'
        } else if (hour >= 5) {
            return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,16.3L15.82,19.41C16.21,19.8 16.21,20.43 15.82,20.82C15.43,21.21 14.8,21.21 14.41,20.82L12,18.41L9.59,20.82C9.2,21.21 8.57,21.21 8.18,20.82C7.79,20.43 7.79,19.8 8.18,19.41L11.29,16.3C11.5,16.1 11.74,16 12,16C12.26,16 12.5,16.1 12.71,16.3Z" /></svg>'
        } else if (hour > 7) {
            if (data.condition === 'Cloudy') {
                return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z" /></svg>'
            } else if (data.condition === 'Partly cloudy') {
                return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.72,5.5 9.97,4.24 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3M13.55,3.64C13,3.4 12.45,3.23 11.88,3.12L14.37,1.82L15.27,4.71C14.76,4.29 14.19,3.93 13.55,3.64M6.09,4.44C5.6,4.79 5.17,5.19 4.8,5.63L4.91,2.82L7.87,3.5C7.25,3.71 6.65,4.03 6.09,4.44M18,9.71C17.91,9.12 17.78,8.55 17.59,8L19.97,9.5L17.92,11.73C18.03,11.08 18.05,10.4 18,9.71M3.04,11.3C3.11,11.9 3.24,12.47 3.43,13L1.06,11.5L3.1,9.28C3,9.93 2.97,10.61 3.04,11.3M19,18H16V16A4,4 0 0,0 12,12A4,4 0 0,0 8,16H6A2,2 0 0,0 4,18A2,2 0 0,0 6,20H19A1,1 0 0,0 20,19A1,1 0 0,0 19,18Z" /></svg>'
            } else if (data.condition === 'Windy') {
                return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z" /></svg>'
            } else if (data.condition === 'Raining') {
                return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z" /></svg>'
            } else if (data.condition === 'Sunny') {
                return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z" /></svg>'
            } else {
                return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,6L6.69,6.06C7.32,3.72 9.46,2 12,2A5.5,5.5 0 0,1 17.5,7.5L17.42,8.45C17.88,8.16 18.42,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H6A4,4 0 0,1 2,10A4,4 0 0,1 6,6M6,8A2,2 0 0,0 4,10A2,2 0 0,0 6,12H19A1,1 0 0,0 20,11A1,1 0 0,0 19,10H15.5V7.5A3.5,3.5 0 0,0 12,4A3.5,3.5 0 0,0 8.5,7.5V8H6M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z" /></svg>'
            }
        }
    }

    return { loadHome }

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const API = (() => {
    let data = {}

    async function get(location = 'Melbourne') {
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=cec82327ff6049df98a45230232008&q=${location}`, { mode: 'cors' });
            const responseData = await response.json();
            updateData(responseData);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    function updateData(response) {
        data = {
            location: response.location.country + ', ' + response.location.name,
            time: response.location.localtime,
            temp: response.current.temp_c,
            condition: response.current.condition.text,
            feels_like: response.current.feelslike_c,
            wind: response.current.wind_kph + ' ' + response.current.wind_dir,
            humidity: response.current.humidity,
            uv: response.current.uv,
            vis: response.current.vis_km,
            cloud: response.current.cloud,
            precip: response.current.precip_mm 
        }
    }

    function getData() {
        return data;
    }

    return { get, getData }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");



document.addEventListener('DOMContentLoaded', _modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].loadHome)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNTOztBQUU3Qiw4Q0FBOEMsbURBQUUsVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kdWxlcy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAvKiBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7ICovXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZpbGw6IHdoaXRlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU2FuIEZyYW5jaXNjb1wiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vYXBwbGVzb2NpYWwuczMuYW1hem9uYXdzLmNvbS9hc3NldHMvc3R5bGVzL2ZvbnRzL3NhbmZyYW5jaXNjby9zYW5mcmFuY2lzY29kaXNwbGF5LXJlZ3VsYXItd2ViZm9udC53b2ZmXCIpO1xufVxuXG46cm9vdCB7XG4gICAgLS1mb250LXByaS1jb2xvcjogd2hpdGU7XG4gICAgLS1mb250LXNlYy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBcIlNhbiBGcmFuY2lzY29cIjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDAsNTUsMTE1LDEpIDAlLCByZ2JhKDMsMTY2LDE5OSwxKSAxMDAlKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNnJlbSAxZnIgM3JlbTtcbn1cblxuLmxvYWRlciB7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDJmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJyZW0gOXJlbSAwcmVtIDlyZW07XG59XG5cbi5sb2dvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dvIGgxIHtcbiAgICBmb250LXNpemU6IDRyZW07XG59XG5cbi5uYXZ7XG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyIDFmcjtcbiAgICBnYXA6IDFyZW07XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4jc2VhcmNoIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDE1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTJkNDQ7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzBlMmQ0NDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5cbiNzZWFyY2g6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG59XG5cbi5jb252IHtcbiAgICBwYWRkaW5nOiAwLjZlbSAyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTJkNDQ7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzBlMmQ0NDtcbn1cblxuLmNvbnYtc2VsZWN0ZWQge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xufVxuXG5tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW4taW5uZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG59XG5cbi5wcmltYXJ5LWluZm8ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcblxufVxuXG4jbG9jYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuI3RpbWUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LXNlYy1jb2xvcik7XG59XG5cbi50ZW1wIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHJlbSAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5zeW1ib2wge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4jdGVtcC1pbmZvIHtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbiNmZWVscy1saWtlLCAjdGVtcC1kZXNjIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1zZWMtY29sb3IpO1xufVxuXG4udGVtcCBoMSB7XG4gICAgZm9udC1zaXplOiA5cmVtO1xufVxuXG4uc2Vjb25kYXJ5LWluZm8ge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICBnYXA6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcbn1cblxuLnNlYy1pbmZvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgNXJlbTtcbiAgICBnYXA6IDJyZW07XG59XG5cbi5zZWMtaW5mbyBzcGFuIHtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1zZWMtY29sb3IpO1xufVxuXG4uc2VjLWluZm8gaDMge1xuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xufVxuXG4uc2VjLWluZm8gc3ZnIHtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuXG5mb290ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQiwwSEFBMEg7QUFDNUg7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsMENBQTBDO0FBQzlDOzs7QUFHQTtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdGQUFnRjtJQUNoRixhQUFhO0lBQ2IsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsU0FBUztJQUNULHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7ICovXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZmlsbDogd2hpdGU7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYW4gRnJhbmNpc2NvXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcXFwiaHR0cHM6Ly9hcHBsZXNvY2lhbC5zMy5hbWF6b25hd3MuY29tL2Fzc2V0cy9zdHlsZXMvZm9udHMvc2FuZnJhbmNpc2NvL3NhbmZyYW5jaXNjb2Rpc3BsYXktcmVndWxhci13ZWJmb250LndvZmZcXFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWZvbnQtcHJpLWNvbG9yOiB3aGl0ZTtcXG4gICAgLS1mb250LXNlYy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTYW4gRnJhbmNpc2NvXFxcIjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDAsNTUsMTE1LDEpIDAlLCByZ2JhKDMsMTY2LDE5OSwxKSAxMDAlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2cmVtIDFmciAzcmVtO1xcbn1cXG5cXG4ubG9hZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAyZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDJyZW0gOXJlbSAwcmVtIDlyZW07XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLm5hdntcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnIgMWZyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3NlYXJjaCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDE1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTJkNDQ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwZTJkNDQ7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuI3NlYXJjaDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uY29udiB7XFxuICAgIHBhZGRpbmc6IDAuNmVtIDJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTJkNDQ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwZTJkNDQ7XFxufVxcblxcbi5jb252LXNlbGVjdGVkIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1pbm5lciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG59XFxuXFxuLnByaW1hcnktaW5mbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcblxcbn1cXG5cXG4jbG9jYXRpb24ge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiN0aW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LXNlYy1jb2xvcik7XFxufVxcblxcbi50ZW1wIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHJlbSAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnN5bWJvbCB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4jdGVtcC1pbmZvIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jZmVlbHMtbGlrZSwgI3RlbXAtZGVzYyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1zZWMtY29sb3IpO1xcbn1cXG5cXG4udGVtcCBoMSB7XFxuICAgIGZvbnQtc2l6ZTogOXJlbTtcXG59XFxuXFxuLnNlY29uZGFyeS1pbmZvIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcXG59XFxuXFxuLnNlYy1pbmZvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCA1cmVtO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5zZWMtaW5mbyBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtc2VjLWNvbG9yKTtcXG59XFxuXFxuLnNlYy1pbmZvIGgzIHtcXG4gICAgZm9udC1zaXplOiAyLjNyZW07XFxufVxcblxcbi5zZWMtaW5mbyBzdmcge1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDMwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBBUEkgZnJvbSAnLi9hcGknXG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICAgICAgbG9hZGluZygpXG4gICAgICAgIGF3YWl0IEFQSS5nZXQoKVxuICAgICAgICBsZXQgZGF0YSA9IEFQSS5nZXREYXRhKClcbiAgICAgICAgbG9hZENvbnRlbnQoKVxuICAgICAgICB1cGRhdGVET00oZGF0YSlcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBzZWFyY2gobG9jYXRpb24pIHtcbiAgICAgICAgbG9hZGluZygpXG4gICAgICAgIGF3YWl0IEFQSS5nZXQobG9jYXRpb24pXG4gICAgICAgIGxldCBkYXRhID0gQVBJLmdldERhdGEoKVxuICAgICAgICBsb2FkQ29udGVudCgpXG4gICAgICAgIHVwZGF0ZURPTShkYXRhKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRpbmcoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRlclwiPlxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB3aWR0aD1cIjgwcHhcIiBoZWlnaHQ9XCI4MHB4XCIgdmlld0JveD1cIjAgMCA1MCA1MFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDAwXCIgZD1cIk00My45MzUsMjUuMTQ1YzAtMTAuMzE4LTguMzY0LTE4LjY4My0xOC42ODMtMTguNjgzYy0xMC4zMTgsMC0xOC42ODMsOC4zNjUtMTguNjgzLDE4LjY4M2g0LjA2OGMwLTguMDcxLDYuNTQzLTE0LjYxNSwxNC42MTUtMTQuNjE1YzguMDcyLDAsMTQuNjE1LDYuNTQzLDE0LjYxNSwxNC42MTVINDMuOTM1elwiPlxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVUeXBlPVwieG1sXCIgYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiIHR5cGU9XCJyb3RhdGVcIiBmcm9tPVwiMCAyNSAyNVwiIHRvPVwiMzYwIDI1IDI1XCIgZHVyPVwiMC42c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiLz5cbiAgICAgICAgICAgICAgICA8L3BhdGg+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PmBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkQ29udGVudCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgIDxoMT5XdGhyPC9oMT5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk00LDEwQTEsMSAwIDAsMSAzLDlBMSwxIDAgMCwxIDQsOEgxMkEyLDIgMCAwLDAgMTQsNkEyLDIgMCAwLDAgMTIsNEMxMS40NSw0IDEwLjk1LDQuMjIgMTAuNTksNC41OUMxMC4yLDUgOS41Niw1IDkuMTcsNC41OUM4Ljc4LDQuMiA4Ljc4LDMuNTYgOS4xNywzLjE3QzkuOSwyLjQ1IDEwLjksMiAxMiwyQTQsNCAwIDAsMSAxNiw2QTQsNCAwIDAsMSAxMiwxMEg0TTE5LDEyQTEsMSAwIDAsMCAyMCwxMUExLDEgMCAwLDAgMTksMTBDMTguNzIsMTAgMTguNDcsMTAuMTEgMTguMjksMTAuMjlDMTcuOSwxMC42OCAxNy4yNywxMC42OCAxNi44OCwxMC4yOUMxNi41LDkuOSAxNi41LDkuMjcgMTYuODgsOC44OEMxNy40Miw4LjM0IDE4LjE3LDggMTksOEEzLDMgMCAwLDEgMjIsMTFBMywzIDAgMCwxIDE5LDE0SDVBMSwxIDAgMCwxIDQsMTNBMSwxIDAgMCwxIDUsMTJIMTlNMTgsMThINEExLDEgMCAwLDEgMywxN0ExLDEgMCAwLDEgNCwxNkgxOEEzLDMgMCAwLDEgMjEsMTlBMywzIDAgMCwxIDE4LDIyQzE3LjE3LDIyIDE2LjQyLDIxLjY2IDE1Ljg4LDIxLjEyQzE1LjUsMjAuNzMgMTUuNSwyMC4xIDE1Ljg4LDE5LjcxQzE2LjI3LDE5LjMyIDE2LjksMTkuMzIgMTcuMjksMTkuNzFDMTcuNDcsMTkuODkgMTcuNzIsMjAgMTgsMjBBMSwxIDAgMCwwIDE5LDE5QTEsMSAwIDAsMCAxOCwxOFpcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIG1ldGhvZD1cImdldFwiIGlkPVwibXlGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInNlYXJjaFwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjb252XCIgaWQ9XCJjZWxjaXVzXCI+JmRlZ0MsIGttaDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjb252XCIgaWQ9XCJmYWhyZW5oZWl0XCI+JmRlZ0YsIG1waDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW1hcnktaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgaWQ9XCJsb2NhdGlvblwiPjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwidGltZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzeW1ib2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBlcmF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGlkPVwidGVtcFwiPjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwidGVtcC1pbmZvXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImZlZWxzLWxpa2VcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWMtaW5mb1wiIGlkPVwid2luZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+V2luZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBpZD1cIndpbmQtaW5cIj48L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYy1pbmZvXCIgaWQ9XCJodW1pZGl0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SHVtaWRpdHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgaWQ9XCJodW0taW5cIj48L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYy1pbmZvXCIgaWQ9XCJ1di1pbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VVYgSW5kZXg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgaWQ9XCJ1di1pblwiPjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjLWluZm9cIiBpZD1cInZpc2liaWxpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlZpc2liaWxpdHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgaWQ9XCJ2aXMtaW5cIj48L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYy1pbmZvXCIgaWQ9XCJjbG91ZGluZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DbG91ZGluZXNzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGlkPVwiY2xvdWQtaW5cIj48L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYy1pbmZvXCIgaWQ9XCJjaGFuY2Utb2YtcmFpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UHJlY2lwaXRhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBpZD1cInJhaW4taW5cIj48L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8c3Bhbj5Db3B5cmlnaHQgwqkgMjAyMyBEZWNsYW5rYjwvc3Bhbj5cbiAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9EZWNsYW5LQnJvd24nIHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTIsMkExMCwxMCAwIDAsMCAyLDEyQzIsMTYuNDIgNC44NywyMC4xNyA4Ljg0LDIxLjVDOS4zNCwyMS41OCA5LjUsMjEuMjcgOS41LDIxQzkuNSwyMC43NyA5LjUsMjAuMTQgOS41LDE5LjMxQzYuNzMsMTkuOTEgNi4xNCwxNy45NyA2LjE0LDE3Ljk3QzUuNjgsMTYuODEgNS4wMywxNi41IDUuMDMsMTYuNUM0LjEyLDE1Ljg4IDUuMSwxNS45IDUuMSwxNS45QzYuMSwxNS45NyA2LjYzLDE2LjkzIDYuNjMsMTYuOTNDNy41LDE4LjQ1IDguOTcsMTggOS41NCwxNy43NkM5LjYzLDE3LjExIDkuODksMTYuNjcgMTAuMTcsMTYuNDJDNy45NSwxNi4xNyA1LjYyLDE1LjMxIDUuNjIsMTEuNUM1LjYyLDEwLjM5IDYsOS41IDYuNjUsOC43OUM2LjU1LDguNTQgNi4yLDcuNSA2Ljc1LDYuMTVDNi43NSw2LjE1IDcuNTksNS44OCA5LjUsNy4xN0MxMC4yOSw2Ljk1IDExLjE1LDYuODQgMTIsNi44NEMxMi44NSw2Ljg0IDEzLjcxLDYuOTUgMTQuNSw3LjE3QzE2LjQxLDUuODggMTcuMjUsNi4xNSAxNy4yNSw2LjE1QzE3LjgsNy41IDE3LjQ1LDguNTQgMTcuMzUsOC43OUMxOCw5LjUgMTguMzgsMTAuMzkgMTguMzgsMTEuNUMxOC4zOCwxNS4zMiAxNi4wNCwxNi4xNiAxMy44MSwxNi40MUMxNC4xNywxNi43MiAxNC41LDE3LjMzIDE0LjUsMTguMjZDMTQuNSwxOS42IDE0LjUsMjAuNjggMTQuNSwyMUMxNC41LDIxLjI3IDE0LjY2LDIxLjU5IDE1LjE3LDIxLjVDMTkuMTQsMjAuMTYgMjIsMTYuNDIgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlonIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZm9vdGVyPmBcblxuICAgICAgICBpbml0U2VhcmNoKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0U2VhcmNoKCkge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIik7XG5cbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcbiAgICAgICAgICAgIHNlYXJjaChzZWFyY2hJbnB1dC52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZURPTShkYXRhKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbicpLmlubmVySFRNTCA9IGRhdGEubG9jYXRpb25cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpbWUnKS5pbm5lckhUTUwgPSBmb3JtYXRUaW1lKGRhdGEpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zeW1ib2wnKS5pbm5lckhUTUwgPSBzeW1ib2woZGF0YSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAnKS5pbm5lckhUTUwgPSBkYXRhLnRlbXAgKyAnJmRlZ0MnXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wLWluZm8nKS5pbm5lckhUTUwgPSBkYXRhLmNvbmRpdGlvblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbHMtbGlrZScpLmlubmVySFRNTCA9IFwiRmVlbHMgbGlrZSBcIiArIGRhdGEuZmVlbHNfbGlrZSArIFwiJmRlZ0NcIlxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZC1pbicpLmlubmVySFRNTCA9IGRhdGEud2luZFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtLWluJykuaW5uZXJIVE1MID0gZGF0YS5odW1pZGl0eSArICclJ1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXYtaW4nKS5pbm5lckhUTUwgPSBkYXRhLnV2XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aXMtaW4nKS5pbm5lckhUTUwgPSBkYXRhLnZpcyArICdrbSdcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3VkLWluJykuaW5uZXJIVE1MID0gZGF0YS5jbG91ZCArICclJ1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFpbi1pbicpLmlubmVySFRNTCA9IGRhdGEucHJlY2lwICsgJ21tJ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdFRpbWUoZGF0YSkge1xuICAgICAgICBjb25zdCBkYXkgPSBkYXRhLnRpbWUuc3BsaXQoJyAnKVswXS5zcGxpdCgnLScpWzJdXG4gICAgICAgIGNvbnN0IG1vbnRoID0gZGF0YS50aW1lLnNwbGl0KCcgJylbMF0uc3BsaXQoJy0nKVsxXVxuICAgICAgICBjb25zdCB5ZWFyID0gZGF0YS50aW1lLnNwbGl0KCcgJylbMF0uc3BsaXQoJy0nKVswXVxuICAgICAgICBjb25zdCBjbG9jayA9IGRhdGEudGltZS5zcGxpdCgnICcpWzFdXG4gICAgICAgIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn0gfCAke2Nsb2NrfWBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzeW1ib2woZGF0YSkge1xuICAgICAgICBjb25zdCBob3VyID0gcGFyc2VJbnQoZGF0YS50aW1lLnNwbGl0KCcgJylbMV0uc3BsaXQoJzonKVswXSlcblxuICAgICAgICBpZiAoaG91ciA9PiAyMCB8fCBob3VyIDwgNSkge1xuICAgICAgICAgICAgcmV0dXJuICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xNy43NSw0LjA5TDE1LjIyLDYuMDNMMTYuMTMsOS4wOUwxMy41LDcuMjhMMTAuODcsOS4wOUwxMS43OCw2LjAzTDkuMjUsNC4wOUwxMi40NCw0TDEzLjUsMUwxNC41Niw0TDE3Ljc1LDQuMDlNMjEuMjUsMTFMMTkuNjEsMTIuMjVMMjAuMiwxNC4yM0wxOC41LDEzLjA2TDE2LjgsMTQuMjNMMTcuMzksMTIuMjVMMTUuNzUsMTFMMTcuODEsMTAuOTVMMTguNSw5TDE5LjE5LDEwLjk1TDIxLjI1LDExTTE4Ljk3LDE1Ljk1QzE5LjgsMTUuODcgMjAuNjksMTcuMDUgMjAuMTYsMTcuOEMxOS44NCwxOC4yNSAxOS41LDE4LjY3IDE5LjA4LDE5LjA3QzE1LjE3LDIzIDguODQsMjMgNC45NCwxOS4wN0MxLjAzLDE1LjE3IDEuMDMsOC44MyA0Ljk0LDQuOTNDNS4zNCw0LjUzIDUuNzYsNC4xNyA2LjIxLDMuODVDNi45NiwzLjMyIDguMTQsNC4yMSA4LjA2LDUuMDRDNy43OSw3LjkgOC43NSwxMC44NyAxMC45NSwxMy4wNkMxMy4xNCwxNS4yNiAxNi4xLDE2LjIyIDE4Ljk3LDE1Ljk1TTE3LjMzLDE3Ljk3QzE0LjUsMTcuODEgMTEuNywxNi42NCA5LjUzLDE0LjVDNy4zNiwxMi4zMSA2LjIsOS41IDYuMDQsNi42OEMzLjIzLDkuODIgMy4zNCwxNC42NCA2LjM1LDE3LjY2QzkuMzcsMjAuNjcgMTQuMTksMjAuNzggMTcuMzMsMTcuOTdaXCIgLz48L3N2Zz4nXG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA+PSA1KSB7XG4gICAgICAgICAgICByZXR1cm4gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTMsMTJIN0E1LDUgMCAwLDEgMTIsN0E1LDUgMCAwLDEgMTcsMTJIMjFBMSwxIDAgMCwxIDIyLDEzQTEsMSAwIDAsMSAyMSwxNEgzQTEsMSAwIDAsMSAyLDEzQTEsMSAwIDAsMSAzLDEyTTE1LDEyQTMsMyAwIDAsMCAxMiw5QTMsMyAwIDAsMCA5LDEySDE1TTEyLDJMMTQuMzksNS40MkMxMy42NSw1LjE1IDEyLjg0LDUgMTIsNUMxMS4xNiw1IDEwLjM1LDUuMTUgOS42MSw1LjQyTDEyLDJNMy4zNCw3TDcuNSw2LjY1QzYuOSw3LjE2IDYuMzYsNy43OCA1Ljk0LDguNUM1LjUsOS4yNCA1LjI1LDEwIDUuMTEsMTAuNzlMMy4zNCw3TTIwLjY1LDdMMTguODgsMTAuNzlDMTguNzQsMTAgMTguNDcsOS4yMyAxOC4wNSw4LjVDMTcuNjMsNy43OCAxNy4xLDcuMTUgMTYuNSw2LjY0TDIwLjY1LDdNMTIuNzEsMTYuM0wxNS44MiwxOS40MUMxNi4yMSwxOS44IDE2LjIxLDIwLjQzIDE1LjgyLDIwLjgyQzE1LjQzLDIxLjIxIDE0LjgsMjEuMjEgMTQuNDEsMjAuODJMMTIsMTguNDFMOS41OSwyMC44MkM5LjIsMjEuMjEgOC41NywyMS4yMSA4LjE4LDIwLjgyQzcuNzksMjAuNDMgNy43OSwxOS44IDguMTgsMTkuNDFMMTEuMjksMTYuM0MxMS41LDE2LjEgMTEuNzQsMTYgMTIsMTZDMTIuMjYsMTYgMTIuNSwxNi4xIDEyLjcxLDE2LjNaXCIgLz48L3N2Zz4nXG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA+IDcpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmNvbmRpdGlvbiA9PT0gJ0Nsb3VkeScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTYsMTlBNSw1IDAgMCwxIDEsMTRBNSw1IDAgMCwxIDYsOUM3LDYuNjUgOS4zLDUgMTIsNUMxNS40Myw1IDE4LjI0LDcuNjYgMTguNSwxMS4wM0wxOSwxMUE0LDQgMCAwLDEgMjMsMTVBNCw0IDAgMCwxIDE5LDE5SDZNMTksMTNIMTdWMTJBNSw1IDAgMCwwIDEyLDdDOS41LDcgNy40NSw4LjgyIDcuMDYsMTEuMTlDNi43MywxMS4wNyA2LjM3LDExIDYsMTFBMywzIDAgMCwwIDMsMTRBMywzIDAgMCwwIDYsMTdIMTlBMiwyIDAgMCwwIDIxLDE1QTIsMiAwIDAsMCAxOSwxM1pcIiAvPjwvc3ZnPidcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5jb25kaXRpb24gPT09ICdQYXJ0bHkgY2xvdWR5Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTIuNzQsNS40N0MxNS4xLDYuNSAxNi4zNSw5LjAzIDE1LjkyLDExLjQ2QzE3LjE5LDEyLjU2IDE4LDE0LjE5IDE4LDE2VjE2LjE3QzE4LjMxLDE2LjA2IDE4LjY1LDE2IDE5LDE2QTMsMyAwIDAsMSAyMiwxOUEzLDMgMCAwLDEgMTksMjJINkE0LDQgMCAwLDEgMiwxOEE0LDQgMCAwLDEgNiwxNEg2LjI3QzUsMTIuNDUgNC42LDEwLjI0IDUuNSw4LjI2QzYuNzIsNS41IDkuOTcsNC4yNCAxMi43NCw1LjQ3TTExLjkzLDcuM0MxMC4xNiw2LjUgOC4wOSw3LjMxIDcuMzEsOS4wN0M2Ljg1LDEwLjA5IDYuOTMsMTEuMjIgNy40MSwxMi4xM0M4LjUsMTAuODMgMTAuMTYsMTAgMTIsMTBDMTIuNywxMCAxMy4zOCwxMC4xMiAxNCwxMC4zNEMxMy45NCw5LjA2IDEzLjE4LDcuODYgMTEuOTMsNy4zTTEzLjU1LDMuNjRDMTMsMy40IDEyLjQ1LDMuMjMgMTEuODgsMy4xMkwxNC4zNywxLjgyTDE1LjI3LDQuNzFDMTQuNzYsNC4yOSAxNC4xOSwzLjkzIDEzLjU1LDMuNjRNNi4wOSw0LjQ0QzUuNiw0Ljc5IDUuMTcsNS4xOSA0LjgsNS42M0w0LjkxLDIuODJMNy44NywzLjVDNy4yNSwzLjcxIDYuNjUsNC4wMyA2LjA5LDQuNDRNMTgsOS43MUMxNy45MSw5LjEyIDE3Ljc4LDguNTUgMTcuNTksOEwxOS45Nyw5LjVMMTcuOTIsMTEuNzNDMTguMDMsMTEuMDggMTguMDUsMTAuNCAxOCw5LjcxTTMuMDQsMTEuM0MzLjExLDExLjkgMy4yNCwxMi40NyAzLjQzLDEzTDEuMDYsMTEuNUwzLjEsOS4yOEMzLDkuOTMgMi45NywxMC42MSAzLjA0LDExLjNNMTksMThIMTZWMTZBNCw0IDAgMCwwIDEyLDEyQTQsNCAwIDAsMCA4LDE2SDZBMiwyIDAgMCwwIDQsMThBMiwyIDAgMCwwIDYsMjBIMTlBMSwxIDAgMCwwIDIwLDE5QTEsMSAwIDAsMCAxOSwxOFpcIiAvPjwvc3ZnPidcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5jb25kaXRpb24gPT09ICdXaW5keScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTQsMTBBMSwxIDAgMCwxIDMsOUExLDEgMCAwLDEgNCw4SDEyQTIsMiAwIDAsMCAxNCw2QTIsMiAwIDAsMCAxMiw0QzExLjQ1LDQgMTAuOTUsNC4yMiAxMC41OSw0LjU5QzEwLjIsNSA5LjU2LDUgOS4xNyw0LjU5QzguNzgsNC4yIDguNzgsMy41NiA5LjE3LDMuMTdDOS45LDIuNDUgMTAuOSwyIDEyLDJBNCw0IDAgMCwxIDE2LDZBNCw0IDAgMCwxIDEyLDEwSDRNMTksMTJBMSwxIDAgMCwwIDIwLDExQTEsMSAwIDAsMCAxOSwxMEMxOC43MiwxMCAxOC40NywxMC4xMSAxOC4yOSwxMC4yOUMxNy45LDEwLjY4IDE3LjI3LDEwLjY4IDE2Ljg4LDEwLjI5QzE2LjUsOS45IDE2LjUsOS4yNyAxNi44OCw4Ljg4QzE3LjQyLDguMzQgMTguMTcsOCAxOSw4QTMsMyAwIDAsMSAyMiwxMUEzLDMgMCAwLDEgMTksMTRINUExLDEgMCAwLDEgNCwxM0ExLDEgMCAwLDEgNSwxMkgxOU0xOCwxOEg0QTEsMSAwIDAsMSAzLDE3QTEsMSAwIDAsMSA0LDE2SDE4QTMsMyAwIDAsMSAyMSwxOUEzLDMgMCAwLDEgMTgsMjJDMTcuMTcsMjIgMTYuNDIsMjEuNjYgMTUuODgsMjEuMTJDMTUuNSwyMC43MyAxNS41LDIwLjEgMTUuODgsMTkuNzFDMTYuMjcsMTkuMzIgMTYuOSwxOS4zMiAxNy4yOSwxOS43MUMxNy40NywxOS44OSAxNy43MiwyMCAxOCwyMEExLDEgMCAwLDAgMTksMTlBMSwxIDAgMCwwIDE4LDE4WlwiIC8+PC9zdmc+J1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLmNvbmRpdGlvbiA9PT0gJ1JhaW5pbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk05LDEyQzkuNTMsMTIuMTQgOS44NSwxMi42OSA5LjcxLDEzLjIyTDguNDEsMTguMDVDOC4yNywxOC41OSA3LjcyLDE4LjkgNy4xOSwxOC43NkM2LjY1LDE4LjYyIDYuMzQsMTguMDcgNi41LDE3LjU0TDcuNzgsMTIuNzFDNy45MiwxMi4xNyA4LjQ3LDExLjg2IDksMTJNMTMsMTJDMTMuNTMsMTIuMTQgMTMuODUsMTIuNjkgMTMuNzEsMTMuMjJMMTEuNjQsMjAuOTVDMTEuNSwyMS41IDEwLjk1LDIxLjggMTAuNDEsMjEuNjZDOS44OCwyMS41IDkuNTYsMjAuOTcgOS43LDIwLjQzTDExLjc4LDEyLjcxQzExLjkyLDEyLjE3IDEyLjQ3LDExLjg2IDEzLDEyTTE3LDEyQzE3LjUzLDEyLjE0IDE3Ljg1LDEyLjY5IDE3LjcxLDEzLjIyTDE2LjQxLDE4LjA1QzE2LjI3LDE4LjU5IDE1LjcyLDE4LjkgMTUuMTksMTguNzZDMTQuNjUsMTguNjIgMTQuMzQsMTguMDcgMTQuNSwxNy41NEwxNS43OCwxMi43MUMxNS45MiwxMi4xNyAxNi40NywxMS44NiAxNywxMk0xNywxMFY5QTUsNSAwIDAsMCAxMiw0QzkuNSw0IDcuNDUsNS44MiA3LjA2LDguMTlDNi43Myw4LjA3IDYuMzcsOCA2LDhBMywzIDAgMCwwIDMsMTFDMywxMi4xMSAzLjYsMTMuMDggNC41LDEzLjZWMTMuNTlDNSwxMy44NyA1LjE0LDE0LjUgNC44NywxNC45NkM0LjU5LDE1LjQzIDQsMTUuNiAzLjUsMTUuMzJWMTUuMzNDMiwxNC40NyAxLDEyLjg1IDEsMTFBNSw1IDAgMCwxIDYsNkM3LDMuNjUgOS4zLDIgMTIsMkMxNS40MywyIDE4LjI0LDQuNjYgMTguNSw4LjAzTDE5LDhBNCw0IDAgMCwxIDIzLDEyQzIzLDEzLjUgMjIuMiwxNC43NyAyMSwxNS40NlYxNS40NkMyMC41LDE1LjczIDE5LjkxLDE1LjU3IDE5LjYzLDE1LjA5QzE5LjM2LDE0LjYxIDE5LjUsMTQgMjAsMTMuNzJWMTMuNzNDMjAuNiwxMy4zOSAyMSwxMi43NCAyMSwxMkEyLDIgMCAwLDAgMTksMTBIMTdaXCIgLz48L3N2Zz4nXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuY29uZGl0aW9uID09PSAnU3VubnknKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMiw3QTUsNSAwIDAsMSAxNywxMkE1LDUgMCAwLDEgMTIsMTdBNSw1IDAgMCwxIDcsMTJBNSw1IDAgMCwxIDEyLDdNMTIsOUEzLDMgMCAwLDAgOSwxMkEzLDMgMCAwLDAgMTIsMTVBMywzIDAgMCwwIDE1LDEyQTMsMyAwIDAsMCAxMiw5TTEyLDJMMTQuMzksNS40MkMxMy42NSw1LjE1IDEyLjg0LDUgMTIsNUMxMS4xNiw1IDEwLjM1LDUuMTUgOS42MSw1LjQyTDEyLDJNMy4zNCw3TDcuNSw2LjY1QzYuOSw3LjE2IDYuMzYsNy43OCA1Ljk0LDguNUM1LjUsOS4yNCA1LjI1LDEwIDUuMTEsMTAuNzlMMy4zNCw3TTMuMzYsMTdMNS4xMiwxMy4yM0M1LjI2LDE0IDUuNTMsMTQuNzggNS45NSwxNS41QzYuMzcsMTYuMjQgNi45MSwxNi44NiA3LjUsMTcuMzdMMy4zNiwxN00yMC42NSw3TDE4Ljg4LDEwLjc5QzE4Ljc0LDEwIDE4LjQ3LDkuMjMgMTguMDUsOC41QzE3LjYzLDcuNzggMTcuMSw3LjE1IDE2LjUsNi42NEwyMC42NSw3TTIwLjY0LDE3TDE2LjUsMTcuMzZDMTcuMDksMTYuODUgMTcuNjIsMTYuMjIgMTguMDQsMTUuNUMxOC40NiwxNC43NyAxOC43MywxNCAxOC44NywxMy4yMUwyMC42NCwxN00xMiwyMkw5LjU5LDE4LjU2QzEwLjMzLDE4LjgzIDExLjE0LDE5IDEyLDE5QzEyLjgyLDE5IDEzLjYzLDE4LjgzIDE0LjM3LDE4LjU2TDEyLDIyWlwiIC8+PC9zdmc+J1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTYsNkw2LjY5LDYuMDZDNy4zMiwzLjcyIDkuNDYsMiAxMiwyQTUuNSw1LjUgMCAwLDEgMTcuNSw3LjVMMTcuNDIsOC40NUMxNy44OCw4LjE2IDE4LjQyLDggMTksOEEzLDMgMCAwLDEgMjIsMTFBMywzIDAgMCwxIDE5LDE0SDZBNCw0IDAgMCwxIDIsMTBBNCw0IDAgMCwxIDYsNk02LDhBMiwyIDAgMCwwIDQsMTBBMiwyIDAgMCwwIDYsMTJIMTlBMSwxIDAgMCwwIDIwLDExQTEsMSAwIDAsMCAxOSwxMEgxNS41VjcuNUEzLjUsMy41IDAgMCwwIDEyLDRBMy41LDMuNSAwIDAsMCA4LjUsNy41VjhINk0xOCwxOEg0QTEsMSAwIDAsMSAzLDE3QTEsMSAwIDAsMSA0LDE2SDE4QTMsMyAwIDAsMSAyMSwxOUEzLDMgMCAwLDEgMTgsMjJDMTcuMTcsMjIgMTYuNDIsMjEuNjYgMTUuODgsMjEuMTJDMTUuNSwyMC43MyAxNS41LDIwLjEgMTUuODgsMTkuNzFDMTYuMjcsMTkuMzIgMTYuOSwxOS4zMiAxNy4yOSwxOS43MUMxNy40NywxOS44OSAxNy43MiwyMCAxOCwyMEExLDEgMCAwLDAgMTksMTlBMSwxIDAgMCwwIDE4LDE4WlwiIC8+PC9zdmc+J1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbG9hZEhvbWUgfVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBVSSIsImNvbnN0IEFQSSA9ICgoKSA9PiB7XG4gICAgbGV0IGRhdGEgPSB7fVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0KGxvY2F0aW9uID0gJ01lbGJvdXJuZScpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9Y2VjODIzMjdmZjYwNDlkZjk4YTQ1MjMwMjMyMDA4JnE9JHtsb2NhdGlvbn1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHVwZGF0ZURhdGEocmVzcG9uc2VEYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHdlYXRoZXIgZGF0YTonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVEYXRhKHJlc3BvbnNlKSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBsb2NhdGlvbjogcmVzcG9uc2UubG9jYXRpb24uY291bnRyeSArICcsICcgKyByZXNwb25zZS5sb2NhdGlvbi5uYW1lLFxuICAgICAgICAgICAgdGltZTogcmVzcG9uc2UubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgICAgICAgICAgdGVtcDogcmVzcG9uc2UuY3VycmVudC50ZW1wX2MsXG4gICAgICAgICAgICBjb25kaXRpb246IHJlc3BvbnNlLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICBmZWVsc19saWtlOiByZXNwb25zZS5jdXJyZW50LmZlZWxzbGlrZV9jLFxuICAgICAgICAgICAgd2luZDogcmVzcG9uc2UuY3VycmVudC53aW5kX2twaCArICcgJyArIHJlc3BvbnNlLmN1cnJlbnQud2luZF9kaXIsXG4gICAgICAgICAgICBodW1pZGl0eTogcmVzcG9uc2UuY3VycmVudC5odW1pZGl0eSxcbiAgICAgICAgICAgIHV2OiByZXNwb25zZS5jdXJyZW50LnV2LFxuICAgICAgICAgICAgdmlzOiByZXNwb25zZS5jdXJyZW50LnZpc19rbSxcbiAgICAgICAgICAgIGNsb3VkOiByZXNwb25zZS5jdXJyZW50LmNsb3VkLFxuICAgICAgICAgICAgcHJlY2lwOiByZXNwb25zZS5jdXJyZW50LnByZWNpcF9tbSBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldCwgZ2V0RGF0YSB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IEFQSSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL1VJJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkubG9hZEhvbWUpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9