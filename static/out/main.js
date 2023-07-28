/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./static/index/index.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/index/index.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body{
    margin: 0;
}
#wrapper{
    margin-top: 40px;
    margin-left: 7%;
    margin-right: 7%;
}
/*header*/
header{
    background-color: rgba(19, 20, 20, 0.945);
    height: 50px;
    margin: 0;
    padding: 0;
}

.menu{
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 5%;
    margin-right: 5%;
}

.menu_logo{
    display: flex;
    font-weight: bold;
    
}
.menu_timeLoad{
    color: white;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
}
#errorInTime{
    position: fixed; top: 0; left: 0; right: 0;
    color: red;
    font-weight: bold;
    font-size: 20px;
    background-color: black;
}
#timeLoad{
    margin-left: 5px;
    margin-right: 5px;
}

#folderIcon{
    width: 30px;
    height: 30px;
    margin-top: auto;
    margin-bottom: auto;
}
#titleSiteFolderIcon{
    font-weight: bold;
    margin-left: 10px;
    margin-top: auto;
    margin-bottom: auto;
    color: white;
}

/*button all folder*/
#wrapper_allFolder,#wrapper_sortingTypeRadio{
    width: 100%;
    display: flex;
    justify-content: center;
}
#wrapper_sortingTypeRadio{
    margin-top: 20px;
}
#allFolder{
    font-size: 16px;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(65, 178, 226, 0.726);
    border: none;
    text-align: center;
    text-decoration: none;
    box-shadow: -3px 0px 10px 0px rgba(0, 0, 0, 0.5);
    transition: 0.5s;

}
#allFolder:hover{
    cursor: pointer;
    background-color: rgba(65, 178, 226, 0.952);
    transition: 0.5s;
}

/*sorting*/
label{
    font-weight: bold;
}

#separator{
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    height: 2px;
    width: 80%;
    background-color: black;
    border-radius: 50%;
}

#buttonsPath{
    display: flex;
    margin-top: 20px;
    display: flex;
}
#wrapperButtonsPath{
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    display: flex;
}
#back{
    font-size: 14px;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(39, 104, 133, 0.726);
    border: none;
    text-align: center;
    text-decoration: none;
    box-shadow: -3px 0px 10px 0px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
}

#back:hover{
    cursor: pointer;
    background-color: rgba(39, 103, 133, 0.89);
    transition: 0.5s;
}
#forward:hover{
    cursor: pointer;
    background-color: rgba(39, 103, 133, 0.89);
    transition: 0.5s;
}
#currentCertainFolder{
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
}

footer{
    background-color: rgba(19, 20, 20, 0.945);
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    
}

/*ceratainFolsder*/
#folders{
    font-size: 18px;
    margin-top: 20px;
}
.files{
    margin-left: 50px;
    font-size: 17px;

    display: none;
}

.wrapperDivFolder,.wrapperDivFile{
    display: flex;
    justify-content: space-between;
    margin-bottom: 9px;
    transition: 0.3s;
}
.wrapperDivFolder:hover,.wrapperDivFile:hover{
    border-bottom: 1px solid rgba(65, 178, 226, 0.952);
    transition: 0.3s;
}
.ceratainFolder,.certainFile{
    margin-bottom: 9px;
    transition: 0.3s;
    margin-top: auto;
    margin-bottom: auto;
}

.ceratainFolder:hover{
    cursor: pointer;
    color: rgba(27, 74, 94, 0.726);
    transition: 0.3s;
}
.certainFile:hover{
    color: rgba(27, 74, 94, 0.726);
    transition: 0.3s;
}
#wrapperDescriptionSizeFile{
    display: flex;
    justify-content: right;
    border-bottom: 1px solid black;
    padding-bottom: 5px;
}
#descriptionSizeFile{
    font-size: 15px;
    width: 200px;
    text-align: end;
}
.folderSign{
    /*visibility: hidden;*/
    margin-right: 5px;
    width: 17px;
    height: 17px;
    margin-top: auto;
    margin-bottom: auto;
    transition: 0.3s;
}
.fileSign{
    margin-right: 5px;
    width: 17px;
    height: 17px;
    margin-top: auto;
    margin-bottom: auto;
    transition: 0.3s;
}
.arrowSign{
    opacity: 0.8;
    margin-right: 10px;
    width: 19px;
    height: 19px;
    margin-top: auto;
    margin-bottom: auto;
    transition: 0.3s;
}
.arrowSign:hover{
    opacity: 1;
    transition: 0.3s;
    cursor: pointer;
}
.arrowSignHidden{
    visibility: hidden;
    margin-right: 8px;
    width: 19px;
    height: 19px;
    margin-top: auto;
    margin-bottom: auto;
    transition: 0.3s;
}
/*.wrapperDivFolder:hover .folderSign{
    visibility: visible;
    transition: 0.3s;
}*/
.ceratainFolderSize,.certainFileSize{
    font-weight: bold;
    margin-left: 10px;
    margin-top: auto;
    margin-bottom: auto;
}

.wrapperDivFolderAndImg, .wrapperDivFileAndImg {
    display: flex;
}



/*loader*/

#f{
    display: none;

    z-index: 1;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: white;
}
#loader {
    display: none;

    position: absolute;
    top:20%;
    left:45%;
    z-index: 2;
    width: 150px;
    height: 150px;
    transform:translate(-50%, -50%);
    border: 16px solid #f3f3f3; /* Светло серый */
    border-top: 16px solid #3498db; /* Синий */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`, "",{"version":3,"sources":["webpack://./static/index/index.css"],"names":[],"mappings":"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","sourcesContent":["body{\n    margin: 0;\n}\n#wrapper{\n    margin-top: 40px;\n    margin-left: 7%;\n    margin-right: 7%;\n}\n/*header*/\nheader{\n    background-color: rgba(19, 20, 20, 0.945);\n    height: 50px;\n    margin: 0;\n    padding: 0;\n}\n\n.menu{\n    display: flex;\n    height: 100%;\n    justify-content: space-between;\n    margin-top: auto;\n    margin-bottom: auto;\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n.menu_logo{\n    display: flex;\n    font-weight: bold;\n    \n}\n.menu_timeLoad{\n    color: white;\n    display: flex;\n    margin-top: auto;\n    margin-bottom: auto;\n}\n#errorInTime{\n    position: fixed; top: 0; left: 0; right: 0;\n    color: red;\n    font-weight: bold;\n    font-size: 20px;\n    background-color: black;\n}\n#timeLoad{\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n#folderIcon{\n    width: 30px;\n    height: 30px;\n    margin-top: auto;\n    margin-bottom: auto;\n}\n#titleSiteFolderIcon{\n    font-weight: bold;\n    margin-left: 10px;\n    margin-top: auto;\n    margin-bottom: auto;\n    color: white;\n}\n\n/*button all folder*/\n#wrapper_allFolder,#wrapper_sortingTypeRadio{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n#wrapper_sortingTypeRadio{\n    margin-top: 20px;\n}\n#allFolder{\n    font-size: 16px;\n    height: 50px;\n    padding: 10px;\n    border-radius: 5px;\n    background-color: rgba(65, 178, 226, 0.726);\n    border: none;\n    text-align: center;\n    text-decoration: none;\n    box-shadow: -3px 0px 10px 0px rgba(0, 0, 0, 0.5);\n    transition: 0.5s;\n\n}\n#allFolder:hover{\n    cursor: pointer;\n    background-color: rgba(65, 178, 226, 0.952);\n    transition: 0.5s;\n}\n\n/*sorting*/\nlabel{\n    font-weight: bold;\n}\n\n#separator{\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10px;\n    height: 2px;\n    width: 80%;\n    background-color: black;\n    border-radius: 50%;\n}\n\n#buttonsPath{\n    display: flex;\n    margin-top: 20px;\n    display: flex;\n}\n#wrapperButtonsPath{\n    margin-left: auto;\n    margin-right: auto;\n    justify-content: space-between;\n    display: flex;\n}\n#back{\n    font-size: 14px;\n    padding: 10px;\n    border-radius: 5px;\n    background-color: rgba(39, 104, 133, 0.726);\n    border: none;\n    text-align: center;\n    text-decoration: none;\n    box-shadow: -3px 0px 10px 0px rgba(0, 0, 0, 0.5);\n    transition: 0.5s;\n}\n\n#back:hover{\n    cursor: pointer;\n    background-color: rgba(39, 103, 133, 0.89);\n    transition: 0.5s;\n}\n#forward:hover{\n    cursor: pointer;\n    background-color: rgba(39, 103, 133, 0.89);\n    transition: 0.5s;\n}\n#currentCertainFolder{\n    text-align: center;\n    font-weight: bold;\n    font-size: 20px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\nfooter{\n    background-color: rgba(19, 20, 20, 0.945);\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100px;\n    \n}\n\n/*ceratainFolsder*/\n#folders{\n    font-size: 18px;\n    margin-top: 20px;\n}\n.files{\n    margin-left: 50px;\n    font-size: 17px;\n\n    display: none;\n}\n\n.wrapperDivFolder,.wrapperDivFile{\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 9px;\n    transition: 0.3s;\n}\n.wrapperDivFolder:hover,.wrapperDivFile:hover{\n    border-bottom: 1px solid rgba(65, 178, 226, 0.952);\n    transition: 0.3s;\n}\n.ceratainFolder,.certainFile{\n    margin-bottom: 9px;\n    transition: 0.3s;\n    margin-top: auto;\n    margin-bottom: auto;\n}\n\n.ceratainFolder:hover{\n    cursor: pointer;\n    color: rgba(27, 74, 94, 0.726);\n    transition: 0.3s;\n}\n.certainFile:hover{\n    color: rgba(27, 74, 94, 0.726);\n    transition: 0.3s;\n}\n#wrapperDescriptionSizeFile{\n    display: flex;\n    justify-content: right;\n    border-bottom: 1px solid black;\n    padding-bottom: 5px;\n}\n#descriptionSizeFile{\n    font-size: 15px;\n    width: 200px;\n    text-align: end;\n}\n.folderSign{\n    /*visibility: hidden;*/\n    margin-right: 5px;\n    width: 17px;\n    height: 17px;\n    margin-top: auto;\n    margin-bottom: auto;\n    transition: 0.3s;\n}\n.fileSign{\n    margin-right: 5px;\n    width: 17px;\n    height: 17px;\n    margin-top: auto;\n    margin-bottom: auto;\n    transition: 0.3s;\n}\n.arrowSign{\n    opacity: 0.8;\n    margin-right: 10px;\n    width: 19px;\n    height: 19px;\n    margin-top: auto;\n    margin-bottom: auto;\n    transition: 0.3s;\n}\n.arrowSign:hover{\n    opacity: 1;\n    transition: 0.3s;\n    cursor: pointer;\n}\n.arrowSignHidden{\n    visibility: hidden;\n    margin-right: 8px;\n    width: 19px;\n    height: 19px;\n    margin-top: auto;\n    margin-bottom: auto;\n    transition: 0.3s;\n}\n/*.wrapperDivFolder:hover .folderSign{\n    visibility: visible;\n    transition: 0.3s;\n}*/\n.ceratainFolderSize,.certainFileSize{\n    font-weight: bold;\n    margin-left: 10px;\n    margin-top: auto;\n    margin-bottom: auto;\n}\n\n.wrapperDivFolderAndImg, .wrapperDivFileAndImg {\n    display: flex;\n}\n\n\n\n/*loader*/\n\n#f{\n    display: none;\n\n    z-index: 1;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: white;\n}\n#loader {\n    display: none;\n\n    position: absolute;\n    top:20%;\n    left:45%;\n    z-index: 2;\n    width: 150px;\n    height: 150px;\n    transform:translate(-50%, -50%);\n    border: 16px solid #f3f3f3; /* Светло серый */\n    border-top: 16px solid #3498db; /* Синий */\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    animation: spin 2s linear infinite;\n  }\n  \n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }"],"sourceRoot":""}]);
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

/***/ "./static/index/index.css":
/*!********************************!*\
  !*** ./static/index/index.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./static/index/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./static/index/el.ts":
/*!****************************!*\
  !*** ./static/index/el.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteFolders = exports.create = void 0;
const req_1 = __webpack_require__(/*! ./req */ "./static/index/req.ts");
//кнопка вывода всех папок из корня
const buttonGetAllFolder = document.getElementById("allFolder");
buttonGetAllFolder.addEventListener("click", req_1.getAllFolder, false);
//кнопка движения назад
var backButton = document.getElementById("back");
backButton.addEventListener("click", req_1.backStep, false);
//время запроса
var timeLoad = document.getElementById("timeLoad");
//getCeratainFilesBlock() находим стрелку по которой кликнули
function getCeratainFilesBlock(e) {
    if (e.target.classList.contains('arrowSign')) {
        if (e.target.parentNode.parentNode.nextSibling.style.display == "block") {
            e.target.parentNode.parentNode.nextSibling.style.display = "none";
            e.target.style.transform = "rotate(0deg)";
        }
        else {
            e.target.parentNode.parentNode.nextSibling.style.display = "block";
            e.target.style.transform = "rotate(3.142rad)";
        }
    }
}
//create() создание нод для отражения папок на странице
function create() {
    const parentDivFolderHolder = document.getElementById("wrapper");
    let divFolderHolder = document.createElement("div");
    divFolderHolder.id = "folders";
    parentDivFolderHolder.append(divFolderHolder);
    req_1.dataResponseWrapper.directories.forEach(function (element) {
        let wrapperDivFolder = document.createElement("div");
        wrapperDivFolder.className = "wrapperDivFolder";
        //блок обертка для изображения и самого пути
        let wrapperDivFolderAndImg = document.createElement("div");
        wrapperDivFolderAndImg.className = "wrapperDivFolderAndImg";
        wrapperDivFolder.append(wrapperDivFolderAndImg);
        //прописывание изображения-стрелки
        let imgArrow = document.createElement('img');
        imgArrow.src = '/static/index/img/arrowIcon.png';
        wrapperDivFolderAndImg.append(imgArrow);
        //прописывание изображения
        let img = document.createElement('img');
        img.src = '/static/index/img/folderIcon.png';
        wrapperDivFolderAndImg.append(img);
        img.className = "folderSign";
        //прописывание пути папки
        let divFolder = document.createElement("div");
        divFolder.className = "ceratainFolder";
        divFolder.append(element.name);
        divFolder.addEventListener('click', req_1.getCeratainFolderTree);
        wrapperDivFolderAndImg.append(divFolder);
        //прописывание размер папки
        let divFolderSize = document.createElement("div");
        divFolderSize.className = "ceratainFolderSize";
        divFolderSize.append(element.size.toString());
        wrapperDivFolder.append(divFolderSize);
        divFolderHolder.append(wrapperDivFolder);
        if (element.files != null) {
            imgArrow.className = "arrowSign";
            imgArrow.addEventListener("click", getCeratainFilesBlock);
            let filesDiv = document.createElement("div");
            filesDiv.className = "files";
            element.files.forEach(function (file) {
                let wrapperDivFile = document.createElement("div");
                wrapperDivFile.className = "wrapperDivFile";
                filesDiv.append(wrapperDivFile);
                //блок обертка для изображения и самого пути
                let wrapperDivFileAndImg = document.createElement("div");
                wrapperDivFileAndImg.className = "wrapperDivFileAndImg";
                wrapperDivFile.append(wrapperDivFileAndImg);
                //прописывание изображения
                let imgFile = document.createElement('img');
                imgFile.src = '/static/index/img/fileIcon.png';
                wrapperDivFileAndImg.append(imgFile);
                imgFile.className = "fileSign";
                //прописывание пути папки
                let divFile = document.createElement("div");
                divFile.className = "certainFile";
                divFile.append(file.name);
                wrapperDivFileAndImg.append(divFile);
                //прописывание размер папки
                let divFileSize = document.createElement("div");
                divFileSize.className = "certainFileSize";
                divFileSize.append(file.size.toString());
                wrapperDivFile.append(divFileSize);
            });
            divFolderHolder.append(filesDiv);
        }
        else {
            imgArrow.className = "arrowSignHidden";
        }
    });
    timeLoad.innerHTML = req_1.dataResponseWrapper.timeExecuting.toString();
    req_1.loader.style.display = "none";
    req_1.f.style.display = "none";
}
exports.create = create;
//deleteFolders() предварительное удаление папок
function deleteFolders() {
    var folders = document.getElementById("folders");
    if (folders != undefined) {
        folders.parentNode.removeChild(folders);
    }
}
exports.deleteFolders = deleteFolders;


/***/ }),

/***/ "./static/index/modul/dataResponseWrapper.ts":
/*!***************************************************!*\
  !*** ./static/index/modul/dataResponseWrapper.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataResponseWrapper = void 0;
const responseWrapper_1 = __webpack_require__(/*! ./responseWrapper */ "./static/index/modul/responseWrapper.ts");
class DataResponseWrapper {
    constructor() {
        this.responseWrapper = new responseWrapper_1.ResponseWrapper();
        this.directories = [];
        this.timeExecuting = 0;
    }
}
exports.DataResponseWrapper = DataResponseWrapper;


/***/ }),

/***/ "./static/index/modul/responseWrapper.ts":
/*!***********************************************!*\
  !*** ./static/index/modul/responseWrapper.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseWrapper = void 0;
class ResponseWrapper {
    constructor() {
        this.status = 0;
        this.err = "";
    }
}
exports.ResponseWrapper = ResponseWrapper;


/***/ }),

/***/ "./static/index/req.ts":
/*!*****************************!*\
  !*** ./static/index/req.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initRadioButton = exports.backStep = exports.getCeratainFolderTree = exports.getAllFolder = exports.loader = exports.f = exports.dataResponseWrapper = void 0;
const el_1 = __webpack_require__(/*! ./el */ "./static/index/el.ts");
const dataResponseWrapper_1 = __webpack_require__(/*! ./modul/dataResponseWrapper */ "./static/index/modul/dataResponseWrapper.ts");
__webpack_require__(/*! ./index.css */ "./static/index/index.css");
let params, root, sor;
//основной путь
const ROOTPATH = "/";
var xhr = new XMLHttpRequest();
let back = [];
//время запроса
var errorInTime = document.getElementById("errorInTime");
//время запроса
const timeLoad = document.getElementById("timeLoad");
//кнопка движения назад
const backButton = document.getElementById("back");
backButton.addEventListener("click", backStep, false);
//обозначение дива с текущей директорией
const currentCertainFolder = document.getElementById("currentCertainFolder");
exports.dataResponseWrapper = new dataResponseWrapper_1.DataResponseWrapper();
exports.f = document.getElementById("f");
exports.loader = document.getElementById("loader");
//getAllFolder() получение всех папок через запрос
function getAllFolder() {
    root = ROOTPATH;
    currentCertainFolder.innerHTML = "Текущая директория: " + root;
    params = 'root=' + encodeURIComponent(root);
    getRequest(params);
}
exports.getAllFolder = getAllFolder;
//getCeratainFolderTree() получение папок конкретной папки  через запрос
function getCeratainFolderTree(e) {
    if (back[back.length - 1] != root) {
        back.push(root);
    }
    console.log(back + "FRONT");
    if (e.target.classList.contains('ceratainFolder')) {
        root = e.target.innerHTML;
        console.log(root + " NOVAY ROOOT");
        if (back[back.length - 1] == root) {
            back.pop();
            return;
        }
        currentCertainFolder.innerHTML = "Текущая директория: " + root;
    }
    else {
        return;
    }
    params = 'root=' + encodeURIComponent(root);
    getRequest(params);
}
exports.getCeratainFolderTree = getCeratainFolderTree;
//getRequest() создаем запрос с переданными параметрами
function getRequest(params) {
    errorInTime.style.display = "none";
    exports.loader.style.display = "block";
    exports.f.style.display = "block";
    xhr.open("GET", "/dirSize?" + params, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            exports.dataResponseWrapper = JSON.parse(xhr.responseText);
            console.log(exports.dataResponseWrapper);
            if (exports.dataResponseWrapper.responseWrapper.status == 1) {
                console.log(root + " :root do");
                console.log(back + " :back do");
                root = back[back.length - 1];
                back.pop();
                console.log(root + " :root posle");
                console.log(back + " :back posle");
                currentCertainFolder.innerHTML = "Текущая директория: " + root;
                errorInTime.innerHTML = exports.dataResponseWrapper.responseWrapper.err;
                errorInTime.style.display = "block";
                console.log(exports.dataResponseWrapper.responseWrapper.err);
                exports.loader.style.display = "none";
                exports.f.style.display = "none";
                return "error";
            }
            if (exports.dataResponseWrapper.directories.length == 0) {
                root = back[back.length - 1];
                back.pop();
                currentCertainFolder.innerHTML = "Текущая директория: " + root;
                errorInTime.innerHTML = "Папка пуста";
                errorInTime.style.display = "block";
                console.log("папка пуста");
                exports.loader.style.display = "none";
                exports.f.style.display = "none";
                return "error";
            }
            sortingFolders();
        }
    };
    xhr.send(params);
}
//sorting() сортировка по указанному типу
function sortingFolders() {
    (0, el_1.deleteFolders)();
    sor = document.querySelector('input[name="typeSorting"]:checked').value;
    exports.dataResponseWrapper.directories.sort((a, b) => a.size - b.size);
    exports.dataResponseWrapper.directories.forEach(function (element) {
        if (element.files != null) {
            element.files.sort((a, b) => a.size - b.size);
        }
    });
    if (sor == "desc") {
        exports.dataResponseWrapper.directories.reverse();
        exports.dataResponseWrapper.directories.forEach(function (element) {
            if (element.files != null) {
                element.files.reverse();
            }
        });
    }
    (0, el_1.create)();
}
//backStep() шаг назад
function backStep() {
    if (back.length != 0) {
        console.log(back + " DO");
        root = back.pop();
        console.log(back + " POSLE");
        currentCertainFolder.innerHTML = "Текущая директория: " + root;
        params = 'root=' + encodeURIComponent(root);
        getRequest(params);
    }
}
exports.backStep = backStep;
//добавление слушателя загрузки сраницы для проверки изменения кнопок radioButton и вывода корневых папок
window.addEventListener('load', () => {
    initRadioButton();
    getAllFolder();
});
//initRadioButton() проверки изменения кнопок radioButton
function initRadioButton() {
    document.querySelectorAll('input[name="typeSorting"]').forEach((elem) => {
        elem.addEventListener("change", sortingFolders);
    });
}
exports.initRadioButton = initRadioButton;


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./static/index/req.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksWUFBWSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFB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QUksRUFBRSxFQUFFO1FBQ3BFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSkQsMENBSUM7Ozs7Ozs7VUMzSkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlc2l6ZWZvbGRlci8uL3N0YXRpYy9pbmRleC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vc2l0ZXNpemVmb2xkZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NpdGVzaXplZm9sZGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc2l0ZXNpemVmb2xkZXIvLi9zdGF0aWMvaW5kZXgvaW5kZXguY3NzP2YzYTciLCJ3ZWJwYWNrOi8vc2l0ZXNpemVmb2xkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2l0ZXNpemVmb2xkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NpdGVzaXplZm9sZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NpdGVzaXplZm9sZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NpdGVzaXplZm9sZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc2l0ZXNpemVmb2xkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zaXRlc2l6ZWZvbGRlci8uL3N0YXRpYy9pbmRleC9lbC50cyIsIndlYnBhY2s6Ly9zaXRlc2l6ZWZvbGRlci8uL3N0YXRpYy9pbmRleC9tb2R1bC9kYXRhUmVzcG9uc2VXcmFwcGVyLnRzIiwid2VicGFjazovL3NpdGVzaXplZm9sZGVyLy4vc3RhdGljL2luZGV4L21vZHVsL3Jlc3BvbnNlV3JhcHBlci50cyIsIndlYnBhY2s6Ly9zaXRlc2l6ZWZvbGRlci8uL3N0YXRpYy9pbmRleC9yZXEudHMiLCJ3ZWJwYWNrOi8vc2l0ZXNpemVmb2xkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2l0ZXNpemVmb2xkZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2l0ZXNpemVmb2xkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NpdGVzaXplZm9sZGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2l0ZXNpemVmb2xkZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaXRlc2l6ZWZvbGRlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc2l0ZXNpemVmb2xkZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zaXRlc2l6ZWZvbGRlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vc2l0ZXNpemVmb2xkZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5e1xuICAgIG1hcmdpbjogMDtcbn1cbiN3cmFwcGVye1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDclO1xuICAgIG1hcmdpbi1yaWdodDogNyU7XG59XG4vKmhlYWRlciovXG5oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOSwgMjAsIDIwLCAwLjk0NSk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4ubWVudXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG4ubWVudV9sb2dve1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgXG59XG4ubWVudV90aW1lTG9hZHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG4jZXJyb3JJblRpbWV7XG4gICAgcG9zaXRpb246IGZpeGVkOyB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuI3RpbWVMb2Fke1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbiNmb2xkZXJJY29ue1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG4jdGl0bGVTaXRlRm9sZGVySWNvbntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKmJ1dHRvbiBhbGwgZm9sZGVyKi9cbiN3cmFwcGVyX2FsbEZvbGRlciwjd3JhcHBlcl9zb3J0aW5nVHlwZVJhZGlve1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jd3JhcHBlcl9zb3J0aW5nVHlwZVJhZGlve1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4jYWxsRm9sZGVye1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NSwgMTc4LCAyMjYsIDAuNzI2KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAtM3B4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcblxufVxuI2FsbEZvbGRlcjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NSwgMTc4LCAyMjYsIDAuOTUyKTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4vKnNvcnRpbmcqL1xubGFiZWx7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNzZXBhcmF0b3J7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbiNidXR0b25zUGF0aHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbiN3cmFwcGVyQnV0dG9uc1BhdGh7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuI2JhY2t7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDEwNCwgMTMzLCAwLjcyNik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm94LXNoYWRvdzogLTNweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbiNiYWNrOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAxMDMsIDEzMywgMC44OSk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cbiNmb3J3YXJkOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAxMDMsIDEzMywgMC44OSk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cbiNjdXJyZW50Q2VydGFpbkZvbGRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTksIDIwLCAyMCwgMC45NDUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIFxufVxuXG4vKmNlcmF0YWluRm9sc2RlciovXG4jZm9sZGVyc3tcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5maWxlc3tcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG5cbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ud3JhcHBlckRpdkZvbGRlciwud3JhcHBlckRpdkZpbGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG4ud3JhcHBlckRpdkZvbGRlcjpob3Zlciwud3JhcHBlckRpdkZpbGU6aG92ZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNjUsIDE3OCwgMjI2LCAwLjk1Mik7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5jZXJhdGFpbkZvbGRlciwuY2VydGFpbkZpbGV7XG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4uY2VyYXRhaW5Gb2xkZXI6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiByZ2JhKDI3LCA3NCwgOTQsIDAuNzI2KTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLmNlcnRhaW5GaWxlOmhvdmVye1xuICAgIGNvbG9yOiByZ2JhKDI3LCA3NCwgOTQsIDAuNzI2KTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuI3dyYXBwZXJEZXNjcmlwdGlvblNpemVGaWxle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbiNkZXNjcmlwdGlvblNpemVGaWxle1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xufVxuLmZvbGRlclNpZ257XG4gICAgLyp2aXNpYmlsaXR5OiBoaWRkZW47Ki9cbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB3aWR0aDogMTdweDtcbiAgICBoZWlnaHQ6IDE3cHg7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG4uZmlsZVNpZ257XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgd2lkdGg6IDE3cHg7XG4gICAgaGVpZ2h0OiAxN3B4O1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLmFycm93U2lnbntcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxOXB4O1xuICAgIGhlaWdodDogMTlweDtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5hcnJvd1NpZ246aG92ZXJ7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hcnJvd1NpZ25IaWRkZW57XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIHdpZHRoOiAxOXB4O1xuICAgIGhlaWdodDogMTlweDtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi8qLndyYXBwZXJEaXZGb2xkZXI6aG92ZXIgLmZvbGRlclNpZ257XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufSovXG4uY2VyYXRhaW5Gb2xkZXJTaXplLC5jZXJ0YWluRmlsZVNpemV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4ud3JhcHBlckRpdkZvbGRlckFuZEltZywgLndyYXBwZXJEaXZGaWxlQW5kSW1nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5cblxuLypsb2FkZXIqL1xuXG4jZntcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuI2xvYWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MjAlO1xuICAgIGxlZnQ6NDUlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyog0KHQstC10YLQu9C+INGB0LXRgNGL0LkgKi9cbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7IC8qINCh0LjQvdC40LkgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3RhdGljL2luZGV4L2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQSxTQUFTO0FBQ1Q7SUFDSSx5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRO0lBQzFDLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDJDQUEyQztJQUMzQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnREFBZ0Q7SUFDaEQsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDJDQUEyQztJQUMzQyxnQkFB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WixhQUFhO0lBQ2Isa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsS0FBSyx1QkFBdUIsRUFBRTtJQUM5QixPQUFPLHlCQUF5QixFQUFFO0VBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuI3dyYXBwZXJ7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA3JTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA3JTtcXG59XFxuLypoZWFkZXIqL1xcbmhlYWRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOSwgMjAsIDIwLCAwLjk0NSk7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWVudXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG59XFxuXFxuLm1lbnVfbG9nb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIFxcbn1cXG4ubWVudV90aW1lTG9hZHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbn1cXG4jZXJyb3JJblRpbWV7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgdG9wOiAwOyBsZWZ0OiAwOyByaWdodDogMDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbiN0aW1lTG9hZHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbiNmb2xkZXJJY29ue1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbn1cXG4jdGl0bGVTaXRlRm9sZGVySWNvbntcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qYnV0dG9uIGFsbCBmb2xkZXIqL1xcbiN3cmFwcGVyX2FsbEZvbGRlciwjd3JhcHBlcl9zb3J0aW5nVHlwZVJhZGlve1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiN3cmFwcGVyX3NvcnRpbmdUeXBlUmFkaW97XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbiNhbGxGb2xkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjUsIDE3OCwgMjI2LCAwLjcyNik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IC0zcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG5cXG59XFxuI2FsbEZvbGRlcjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY1LCAxNzgsIDIyNiwgMC45NTIpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4vKnNvcnRpbmcqL1xcbmxhYmVse1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3NlcGFyYXRvcntcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbiNidXR0b25zUGF0aHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuI3dyYXBwZXJCdXR0b25zUGF0aHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jYmFja3tcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDEwNCwgMTMzLCAwLjcyNik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IC0zcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuI2JhY2s6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMTAzLCAxMzMsIDAuODkpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4jZm9yd2FyZDpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAxMDMsIDEzMywgMC44OSk7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbiNjdXJyZW50Q2VydGFpbkZvbGRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5mb290ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTksIDIwLCAyMCwgMC45NDUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIFxcbn1cXG5cXG4vKmNlcmF0YWluRm9sc2RlciovXFxuI2ZvbGRlcnN7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLmZpbGVze1xcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcblxcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ud3JhcHBlckRpdkZvbGRlciwud3JhcHBlckRpdkZpbGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4ud3JhcHBlckRpdkZvbGRlcjpob3Zlciwud3JhcHBlckRpdkZpbGU6aG92ZXJ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDY1LCAxNzgsIDIyNiwgMC45NTIpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4uY2VyYXRhaW5Gb2xkZXIsLmNlcnRhaW5GaWxle1xcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxufVxcblxcbi5jZXJhdGFpbkZvbGRlcjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogcmdiYSgyNywgNzQsIDk0LCAwLjcyNik7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5jZXJ0YWluRmlsZTpob3ZlcntcXG4gICAgY29sb3I6IHJnYmEoMjcsIDc0LCA5NCwgMC43MjYpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4jd3JhcHBlckRlc2NyaXB0aW9uU2l6ZUZpbGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuI2Rlc2NyaXB0aW9uU2l6ZUZpbGV7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcbi5mb2xkZXJTaWdue1xcbiAgICAvKnZpc2liaWxpdHk6IGhpZGRlbjsqL1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgd2lkdGg6IDE3cHg7XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLmZpbGVTaWdue1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgd2lkdGg6IDE3cHg7XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLmFycm93U2lnbntcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiAxOXB4O1xcbiAgICBoZWlnaHQ6IDE5cHg7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5hcnJvd1NpZ246aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFycm93U2lnbkhpZGRlbntcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gICAgd2lkdGg6IDE5cHg7XFxuICAgIGhlaWdodDogMTlweDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLyoud3JhcHBlckRpdkZvbGRlcjpob3ZlciAuZm9sZGVyU2lnbntcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59Ki9cXG4uY2VyYXRhaW5Gb2xkZXJTaXplLC5jZXJ0YWluRmlsZVNpemV7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG59XFxuXFxuLndyYXBwZXJEaXZGb2xkZXJBbmRJbWcsIC53cmFwcGVyRGl2RmlsZUFuZEltZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcblxcblxcbi8qbG9hZGVyKi9cXG5cXG4jZntcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuI2xvYWRlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOjIwJTtcXG4gICAgbGVmdDo0NSU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IC8qINCh0LLQtdGC0LvQviDRgdC10YDRi9C5ICovXFxuICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjsgLyog0KHQuNC90LjQuSAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBzcGluIHtcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2dldEFsbEZvbGRlcixnZXRDZXJhdGFpbkZvbGRlclRyZWUsYmFja1N0ZXAsZGF0YVJlc3BvbnNlV3JhcHBlcixmLGxvYWRlciB9IGZyb20gJy4vcmVxJ1xuXG4vL9C60L3QvtC/0LrQsCDQstGL0LLQvtC00LAg0LLRgdC10YUg0L/QsNC/0L7QuiDQuNC3INC60L7RgNC90Y9cbmNvbnN0IGJ1dHRvbkdldEFsbEZvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsRm9sZGVyXCIpO1xuYnV0dG9uR2V0QWxsRm9sZGVyIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0QWxsRm9sZGVyLCBmYWxzZSk7XG5cbi8v0LrQvdC+0L/QutCwINC00LLQuNC20LXQvdC40Y8g0L3QsNC30LDQtFxudmFyIGJhY2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tcIik7XG5iYWNrQnV0dG9uIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYmFja1N0ZXAsIGZhbHNlKTtcbi8v0LLRgNC10LzRjyDQt9Cw0L/RgNC+0YHQsFxudmFyIHRpbWVMb2FkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lTG9hZFwiKTtcblxuLy9nZXRDZXJhdGFpbkZpbGVzQmxvY2soKSDQvdCw0YXQvtC00LjQvCDRgdGC0YDQtdC70LrRgyDQv9C+INC60L7RgtC+0YDQvtC5INC60LvQuNC60L3Rg9C70LhcbmZ1bmN0aW9uIGdldENlcmF0YWluRmlsZXNCbG9jayhlOmFueSkge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Fycm93U2lnbicpKSB7XG4gICAgICAgIGlmKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5uZXh0U2libGluZy5zdHlsZS5kaXNwbGF5PT1cImJsb2NrXCIpe1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLm5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybT1cInJvdGF0ZSgwZGVnKVwiXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLm5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiICBcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybT1cInJvdGF0ZSgzLjE0MnJhZClcIiAgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vY3JlYXRlKCkg0YHQvtC30LTQsNC90LjQtSDQvdC+0LQg0LTQu9GPINC+0YLRgNCw0LbQtdC90LjRjyDQv9Cw0L/QvtC6INC90LAg0YHRgtGA0LDQvdC40YbQtVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpe1xuICAgIGNvbnN0IHBhcmVudERpdkZvbGRlckhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid3JhcHBlclwiKTtcbiAgICBsZXQgZGl2Rm9sZGVySG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGRpdkZvbGRlckhvbGRlci5pZCA9IFwiZm9sZGVyc1wiO1xuICAgIHBhcmVudERpdkZvbGRlckhvbGRlciEuYXBwZW5kKGRpdkZvbGRlckhvbGRlcik7XG5cbiAgICBkYXRhUmVzcG9uc2VXcmFwcGVyLmRpcmVjdG9yaWVzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBsZXQgd3JhcHBlckRpdkZvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgd3JhcHBlckRpdkZvbGRlci5jbGFzc05hbWU9XCJ3cmFwcGVyRGl2Rm9sZGVyXCI7XG5cbiAgICAgICAgLy/QsdC70L7QuiDQvtCx0LXRgNGC0LrQsCDQtNC70Y8g0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQuCDRgdCw0LzQvtCz0L4g0L/Rg9GC0LhcbiAgICAgICAgbGV0IHdyYXBwZXJEaXZGb2xkZXJBbmRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHdyYXBwZXJEaXZGb2xkZXJBbmRJbWcuY2xhc3NOYW1lPVwid3JhcHBlckRpdkZvbGRlckFuZEltZ1wiO1xuICAgICAgICB3cmFwcGVyRGl2Rm9sZGVyLmFwcGVuZCh3cmFwcGVyRGl2Rm9sZGVyQW5kSW1nKTtcblxuICAgICAgICAvL9C/0YDQvtC/0LjRgdGL0LLQsNC90LjQtSDQuNC30L7QsdGA0LDQttC10L3QuNGPLdGB0YLRgNC10LvQutC4XG4gICAgICAgIGxldCBpbWdBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWdBcnJvdy5zcmMgPScvc3RhdGljL2luZGV4L2ltZy9hcnJvd0ljb24ucG5nJztcbiAgICAgICAgd3JhcHBlckRpdkZvbGRlckFuZEltZy5hcHBlbmQoaW1nQXJyb3cpO1xuXG4gICAgICAgIC8v0L/RgNC+0L/QuNGB0YvQstCw0L3QuNC1INC40LfQvtCx0YDQsNC20LXQvdC40Y9cbiAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWcuc3JjID0nL3N0YXRpYy9pbmRleC9pbWcvZm9sZGVySWNvbi5wbmcnO1xuICAgICAgICB3cmFwcGVyRGl2Rm9sZGVyQW5kSW1nLmFwcGVuZChpbWcpO1xuICAgICAgICBpbWcuY2xhc3NOYW1lPVwiZm9sZGVyU2lnblwiXG5cbiAgICAgICAgLy/Qv9GA0L7Qv9C40YHRi9Cy0LDQvdC40LUg0L/Rg9GC0Lgg0L/QsNC/0LrQuFxuICAgICAgICBsZXQgZGl2Rm9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBkaXZGb2xkZXIuY2xhc3NOYW1lID0gXCJjZXJhdGFpbkZvbGRlclwiO1xuICAgICAgICBkaXZGb2xkZXIuYXBwZW5kKGVsZW1lbnQubmFtZSlcbiAgICAgICAgZGl2Rm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0Q2VyYXRhaW5Gb2xkZXJUcmVlKTtcbiAgICAgICAgd3JhcHBlckRpdkZvbGRlckFuZEltZy5hcHBlbmQoZGl2Rm9sZGVyKTtcblxuICAgICAgICAvL9C/0YDQvtC/0LjRgdGL0LLQsNC90LjQtSDRgNCw0LfQvNC10YAg0L/QsNC/0LrQuFxuICAgICAgICBsZXQgZGl2Rm9sZGVyU2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZGl2Rm9sZGVyU2l6ZS5jbGFzc05hbWUgPSBcImNlcmF0YWluRm9sZGVyU2l6ZVwiO1xuICAgICAgICBcbiAgICAgICAgZGl2Rm9sZGVyU2l6ZS5hcHBlbmQoZWxlbWVudC5zaXplLnRvU3RyaW5nKCkpXG4gICAgICAgIHdyYXBwZXJEaXZGb2xkZXIuYXBwZW5kKGRpdkZvbGRlclNpemUpO1xuXG4gICAgICAgIGRpdkZvbGRlckhvbGRlci5hcHBlbmQod3JhcHBlckRpdkZvbGRlcilcblxuICAgICAgICBpZihlbGVtZW50LmZpbGVzIT1udWxsKXtcbiAgICAgICAgICAgIGltZ0Fycm93LmNsYXNzTmFtZT1cImFycm93U2lnblwiXG4gICAgICAgICAgICBpbWdBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixnZXRDZXJhdGFpbkZpbGVzQmxvY2spXG5cbiAgICAgICAgICAgIGxldCBmaWxlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIGZpbGVzRGl2LmNsYXNzTmFtZT1cImZpbGVzXCI7XG5cbiAgICAgICAgICAgIGVsZW1lbnQuZmlsZXMuZm9yRWFjaChmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXJEaXZGaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgICAgIHdyYXBwZXJEaXZGaWxlLmNsYXNzTmFtZT1cIndyYXBwZXJEaXZGaWxlXCI7XG4gICAgICAgICAgICAgICAgZmlsZXNEaXYuYXBwZW5kKHdyYXBwZXJEaXZGaWxlKVxuXG4gICAgICAgICAgICAgICAgLy/QsdC70L7QuiDQvtCx0LXRgNGC0LrQsCDQtNC70Y8g0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQuCDRgdCw0LzQvtCz0L4g0L/Rg9GC0LhcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlckRpdkZpbGVBbmRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgd3JhcHBlckRpdkZpbGVBbmRJbWcuY2xhc3NOYW1lPVwid3JhcHBlckRpdkZpbGVBbmRJbWdcIjtcbiAgICAgICAgICAgICAgICB3cmFwcGVyRGl2RmlsZS5hcHBlbmQod3JhcHBlckRpdkZpbGVBbmRJbWcpO1xuXG4gICAgICAgICAgICAgICAgIC8v0L/RgNC+0L/QuNGB0YvQstCw0L3QuNC1INC40LfQvtCx0YDQsNC20LXQvdC40Y9cbiAgICAgICAgICAgICAgICBsZXQgaW1nRmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGltZ0ZpbGUuc3JjID0nL3N0YXRpYy9pbmRleC9pbWcvZmlsZUljb24ucG5nJztcbiAgICAgICAgICAgICAgICB3cmFwcGVyRGl2RmlsZUFuZEltZy5hcHBlbmQoaW1nRmlsZSk7XG4gICAgICAgICAgICAgICAgaW1nRmlsZS5jbGFzc05hbWU9XCJmaWxlU2lnblwiXG5cbiAgICAgICAgICAgICAgICAvL9C/0YDQvtC/0LjRgdGL0LLQsNC90LjQtSDQv9GD0YLQuCDQv9Cw0L/QutC4XG4gICAgICAgICAgICAgICAgbGV0IGRpdkZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgZGl2RmlsZS5jbGFzc05hbWUgPSBcImNlcnRhaW5GaWxlXCI7XG4gICAgICAgICAgICAgICAgZGl2RmlsZS5hcHBlbmQoZmlsZS5uYW1lKVxuICAgICAgICAgICAgICAgIHdyYXBwZXJEaXZGaWxlQW5kSW1nLmFwcGVuZChkaXZGaWxlKTtcblxuICAgICAgICAgICAgICAgIC8v0L/RgNC+0L/QuNGB0YvQstCw0L3QuNC1INGA0LDQt9C80LXRgCDQv9Cw0L/QutC4XG4gICAgICAgICAgICAgICAgbGV0IGRpdkZpbGVTaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgICAgIGRpdkZpbGVTaXplLmNsYXNzTmFtZSA9IFwiY2VydGFpbkZpbGVTaXplXCI7XG4gICAgICAgICAgICAgICAgZGl2RmlsZVNpemUuYXBwZW5kKGZpbGUuc2l6ZS50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIHdyYXBwZXJEaXZGaWxlLmFwcGVuZChkaXZGaWxlU2l6ZSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBkaXZGb2xkZXJIb2xkZXIuYXBwZW5kKGZpbGVzRGl2KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpbWdBcnJvdy5jbGFzc05hbWU9XCJhcnJvd1NpZ25IaWRkZW5cIlxuICAgICAgICB9XG4gICAgICB9KTtcblxuXG4gICAgdGltZUxvYWQhLmlubmVySFRNTD1kYXRhUmVzcG9uc2VXcmFwcGVyLnRpbWVFeGVjdXRpbmcudG9TdHJpbmcoKVxuXG4gICAgbG9hZGVyIS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG4gICAgZiEuc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxufVxuXG4vL2RlbGV0ZUZvbGRlcnMoKSDQv9GA0LXQtNCy0LDRgNC40YLQtdC70YzQvdC+0LUg0YPQtNCw0LvQtdC90LjQtSDQv9Cw0L/QvtC6XG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlRm9sZGVycygpe1xuICAgIHZhciBmb2xkZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb2xkZXJzXCIpO1xuICAgIGlmKGZvbGRlcnMhPXVuZGVmaW5lZCl7XG4gICAgICAgIGZvbGRlcnMucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQoZm9sZGVycyk7XG4gICAgfVxufVxuXG5cbiIsImltcG9ydCB7RGlyZWN0b3J5U3lzdGVtfSBmcm9tICcuL2RpcmVjdG9yeVN5c3RlbSdcbmltcG9ydCB7UmVzcG9uc2VXcmFwcGVyfSBmcm9tICcuL3Jlc3BvbnNlV3JhcHBlcidcblxuXG5leHBvcnQgY2xhc3MgRGF0YVJlc3BvbnNlV3JhcHBlcntcbiAgICByZXNwb25zZVdyYXBwZXI6UmVzcG9uc2VXcmFwcGVyPW5ldyBSZXNwb25zZVdyYXBwZXIoKTtcbiAgICBkaXJlY3RvcmllczpEaXJlY3RvcnlTeXN0ZW1bXT1bXTtcbiAgICB0aW1lRXhlY3V0aW5nOm51bWJlcj0wO1xufSIsImV4cG9ydCBjbGFzcyBSZXNwb25zZVdyYXBwZXJ7XG4gICAgc3RhdHVzOm51bWJlcj0wO1xuICAgIGVycjpzdHJpbmc9XCJcIjtcbn0iLCJpbXBvcnQge2NyZWF0ZSxkZWxldGVGb2xkZXJzfSBmcm9tICcuL2VsJ1xuaW1wb3J0IHtEYXRhUmVzcG9uc2VXcmFwcGVyfSBmcm9tICcuL21vZHVsL2RhdGFSZXNwb25zZVdyYXBwZXInXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiXG5cbmxldCBwYXJhbXM6YW55LHJvb3Q6c3RyaW5nLHNvcjpzdHJpbmdcbi8v0L7RgdC90L7QstC90L7QuSDQv9GD0YLRjFxuY29uc3QgUk9PVFBBVEg6c3RyaW5nPVwiL1wiXG5cbnZhciB4aHI9bmV3IFhNTEh0dHBSZXF1ZXN0KClcblxubGV0IGJhY2s6c3RyaW5nW109W11cbi8v0LLRgNC10LzRjyDQt9Cw0L/RgNC+0YHQsFxudmFyIGVycm9ySW5UaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvckluVGltZVwiKTtcbi8v0LLRgNC10LzRjyDQt9Cw0L/RgNC+0YHQsFxuY29uc3QgdGltZUxvYWQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lTG9hZFwiKVxuLy/QutC90L7Qv9C60LAg0LTQstC40LbQtdC90LjRjyDQvdCw0LfQsNC0XG5jb25zdCBiYWNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrXCIpO1xuYmFja0J1dHRvbiEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJhY2tTdGVwLCBmYWxzZSk7XG4vL9C+0LHQvtC30L3QsNGH0LXQvdC40LUg0LTQuNCy0LAg0YEg0YLQtdC60YPRidC10Lkg0LTQuNGA0LXQutGC0L7RgNC40LXQuVxuY29uc3QgY3VycmVudENlcnRhaW5Gb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRDZXJ0YWluRm9sZGVyXCIpO1xuXG5leHBvcnQgdmFyIGRhdGFSZXNwb25zZVdyYXBwZXI9bmV3IERhdGFSZXNwb25zZVdyYXBwZXIoKVxuXG5leHBvcnQgdmFyIGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZcIik7XG5leHBvcnQgdmFyIGxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGVyXCIpO1xuXG4vL2dldEFsbEZvbGRlcigpINC/0L7Qu9GD0YfQtdC90LjQtSDQstGB0LXRhSDQv9Cw0L/QvtC6INGH0LXRgNC10Lcg0LfQsNC/0YDQvtGBXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsRm9sZGVyKCkgeyAgICBcbiAgICByb290PVJPT1RQQVRIXG4gICAgY3VycmVudENlcnRhaW5Gb2xkZXIhLmlubmVySFRNTD1cItCi0LXQutGD0YnQsNGPINC00LjRgNC10LrRgtC+0YDQuNGPOiBcIityb290XG4gICAgcGFyYW1zID0gJ3Jvb3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudChyb290KTtcbiAgICBnZXRSZXF1ZXN0KHBhcmFtcylcblxufVxuXG4vL2dldENlcmF0YWluRm9sZGVyVHJlZSgpINC/0L7Qu9GD0YfQtdC90LjQtSDQv9Cw0L/QvtC6INC60L7QvdC60YDQtdGC0L3QvtC5INC/0LDQv9C60LggINGH0LXRgNC10Lcg0LfQsNC/0YDQvtGBXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2VyYXRhaW5Gb2xkZXJUcmVlKGU6YW55KSB7XG5cbiAgICBpZiAoYmFja1tiYWNrLmxlbmd0aCAtIDFdICE9IHJvb3QpIHtcbiAgICAgICAgYmFjay5wdXNoKHJvb3QpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhiYWNrK1wiRlJPTlRcIilcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZXJhdGFpbkZvbGRlcicpKSB7XG4gICAgICAgIHJvb3Q9ZS50YXJnZXQuaW5uZXJIVE1MXG5cbiAgICAgICAgY29uc29sZS5sb2cocm9vdCtcIiBOT1ZBWSBST09PVFwiKVxuICAgICAgICBpZihiYWNrW2JhY2subGVuZ3RoLTFdPT1yb290KXtcbiAgICAgICAgICAgIGJhY2sucG9wKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRDZXJ0YWluRm9sZGVyIS5pbm5lckhUTUw9XCLQotC10LrRg9GJ0LDRjyDQtNC40YDQtdC60YLQvtGA0LjRjzogXCIrcm9vdFxuICAgIH1lbHNle3JldHVybn1cblxuICAgIHBhcmFtcyA9ICdyb290PScgKyBlbmNvZGVVUklDb21wb25lbnQocm9vdCk7XG5cbiAgICBnZXRSZXF1ZXN0KHBhcmFtcylcblxufVxuXG4vL2dldFJlcXVlc3QoKSDRgdC+0LfQtNCw0LXQvCDQt9Cw0L/RgNC+0YEg0YEg0L/QtdGA0LXQtNCw0L3QvdGL0LzQuCDQv9Cw0YDQsNC80LXRgtGA0LDQvNC4XG5mdW5jdGlvbiBnZXRSZXF1ZXN0KHBhcmFtczphbnkpe1xuICAgIGVycm9ySW5UaW1lIS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG4gICAgbG9hZGVyIS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxuICAgIGYhLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXG5cbiAgICB4aHIub3BlbihcIkdFVFwiLCBcIi9kaXJTaXplP1wiICsgcGFyYW1zLCB0cnVlKTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIGRhdGFSZXNwb25zZVdyYXBwZXIgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVJlc3BvbnNlV3JhcHBlcilcbiAgICAgICAgICAgIGlmKGRhdGFSZXNwb25zZVdyYXBwZXIucmVzcG9uc2VXcmFwcGVyLnN0YXR1cz09MSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm9vdCsgXCIgOnJvb3QgZG9cIilcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhiYWNrKyBcIiA6YmFjayBkb1wiKVxuXG4gICAgICAgICAgICAgICAgcm9vdD1iYWNrW2JhY2subGVuZ3RoLTFdXG4gICAgICAgICAgICAgICAgYmFjay5wb3AoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvb3QrIFwiIDpyb290IHBvc2xlXCIpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmFjaysgXCIgOmJhY2sgcG9zbGVcIilcblxuICAgICAgICAgICAgICAgIGN1cnJlbnRDZXJ0YWluRm9sZGVyIS5pbm5lckhUTUwgPSBcItCi0LXQutGD0YnQsNGPINC00LjRgNC10LrRgtC+0YDQuNGPOiBcIiArIHJvb3Q7XG4gICAgICAgICAgICAgICAgZXJyb3JJblRpbWUhLmlubmVySFRNTD1kYXRhUmVzcG9uc2VXcmFwcGVyLnJlc3BvbnNlV3JhcHBlci5lcnJcbiAgICAgICAgICAgICAgICBlcnJvckluVGltZSEuc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhUmVzcG9uc2VXcmFwcGVyLnJlc3BvbnNlV3JhcHBlci5lcnIpO1xuICAgICAgICAgICAgICAgIGxvYWRlciEuc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIGYhLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJlcnJvclwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZGF0YVJlc3BvbnNlV3JhcHBlci5kaXJlY3Rvcmllcy5sZW5ndGg9PTApe1xuICAgICAgICAgICAgICAgIHJvb3Q9YmFja1tiYWNrLmxlbmd0aC0xXVxuICAgICAgICAgICAgICAgIGJhY2sucG9wKClcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2VydGFpbkZvbGRlciEuaW5uZXJIVE1MID0gXCLQotC10LrRg9GJ0LDRjyDQtNC40YDQtdC60YLQvtGA0LjRjzogXCIgKyByb290O1xuICAgICAgICAgICAgICAgIGVycm9ySW5UaW1lIS5pbm5lckhUTUw9XCLQn9Cw0L/QutCwINC/0YPRgdGC0LBcIlxuICAgICAgICAgICAgICAgIGVycm9ySW5UaW1lIS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLQv9Cw0L/QutCwINC/0YPRgdGC0LBcIik7XG4gICAgICAgICAgICAgICAgbG9hZGVyIS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG4gICAgICAgICAgICAgICAgZiEuc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHJldHVybiBcImVycm9yXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb3J0aW5nRm9sZGVycygpXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB4aHIuc2VuZChwYXJhbXMpO1xufVxuXG5cbi8vc29ydGluZygpINGB0L7RgNGC0LjRgNC+0LLQutCwINC/0L4g0YPQutCw0LfQsNC90L3QvtC80YMg0YLQuNC/0YNcbmZ1bmN0aW9uIHNvcnRpbmdGb2xkZXJzKCl7XG4gICAgZGVsZXRlRm9sZGVycygpXG5cbiAgICBzb3IgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInR5cGVTb3J0aW5nXCJdOmNoZWNrZWQnKSkhLnZhbHVlO1xuXG4gICAgZGF0YVJlc3BvbnNlV3JhcHBlci5kaXJlY3Rvcmllcy5zb3J0KChhLCBiKSA9PiBhLnNpemUgLSBiLnNpemUpO1xuICAgIGRhdGFSZXNwb25zZVdyYXBwZXIuZGlyZWN0b3JpZXMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGlmKGVsZW1lbnQuZmlsZXMhPW51bGwpe1xuICAgICAgICAgICAgZWxlbWVudC5maWxlcy5zb3J0KChhLCBiKSA9PiBhLnNpemUgLSBiLnNpemUpOyAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYoc29yPT1cImRlc2NcIil7XG4gICAgICAgIGRhdGFSZXNwb25zZVdyYXBwZXIuZGlyZWN0b3JpZXMucmV2ZXJzZSgpO1xuICAgICAgICBkYXRhUmVzcG9uc2VXcmFwcGVyLmRpcmVjdG9yaWVzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgaWYoZWxlbWVudC5maWxlcyE9bnVsbCl7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5maWxlcy5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNyZWF0ZSgpXG59XG5cbi8vYmFja1N0ZXAoKSDRiNCw0LMg0L3QsNC30LDQtFxuZXhwb3J0IGZ1bmN0aW9uIGJhY2tTdGVwKCkge1xuICAgIGlmIChiYWNrLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGJhY2srXCIgRE9cIilcblxuICAgICAgICByb290ID0gYmFjay5wb3AoKSE7XG4gICAgICAgIGNvbnNvbGUubG9nKGJhY2srXCIgUE9TTEVcIilcblxuICAgICAgICBjdXJyZW50Q2VydGFpbkZvbGRlciEuaW5uZXJIVE1MID0gXCLQotC10LrRg9GJ0LDRjyDQtNC40YDQtdC60YLQvtGA0LjRjzogXCIgKyByb290O1xuICAgICAgICBwYXJhbXMgPSAncm9vdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHJvb3QpO1xuICAgICAgICBnZXRSZXF1ZXN0KHBhcmFtcyk7XG4gICAgfVxufVxuLy/QtNC+0LHQsNCy0LvQtdC90LjQtSDRgdC70YPRiNCw0YLQtdC70Y8g0LfQsNCz0YDRg9C30LrQuCDRgdGA0LDQvdC40YbRiyDQtNC70Y8g0L/RgNC+0LLQtdGA0LrQuCDQuNC30LzQtdC90LXQvdC40Y8g0LrQvdC+0L/QvtC6IHJhZGlvQnV0dG9uINC4INCy0YvQstC+0LTQsCDQutC+0YDQvdC10LLRi9GFINC/0LDQv9C+0LpcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIGluaXRSYWRpb0J1dHRvbigpXG4gICAgZ2V0QWxsRm9sZGVyKClcbn0pO1xuXG4vL2luaXRSYWRpb0J1dHRvbigpINC/0YDQvtCy0LXRgNC60Lgg0LjQt9C80LXQvdC10L3QuNGPINC60L3QvtC/0L7QuiByYWRpb0J1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRSYWRpb0J1dHRvbigpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJ0eXBlU29ydGluZ1wiXScpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHNvcnRpbmdGb2xkZXJzKTtcbiAgICB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3N0YXRpYy9pbmRleC9yZXEudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=