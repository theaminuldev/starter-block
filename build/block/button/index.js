/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base/SubPanelsStack.js":
/*!************************************!*\
  !*** ./src/base/SubPanelsStack.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class SubPanelsStack {
  constructor(parent) {
    this.parent = parent;
    //console.log(parent);
  }

  getId() {
    // Implement your logic here
  }
  getTitle() {
    // Implement your logic here
  }
  getPanelId(panelBaseId) {
    // Implement your logic here
    return panelBaseId;
  }
  addPanel(id, args, options = {}) {
    // console.log(id);
    // console.log(args);
    return this.parent.addPanel(this.getPanelId(id), args, options);
  }
  updatePanel(id, args, options = {}) {
    this.parent.updatePanel(this.getPanelId(id), args, options);
  }
  removePanel(id) {
    this.parent.removePanel(this.getPanelId(id));
  }
  addGroupPanel(groupName, args, options = {}) {
    args.name = this.getPanelId(args.name);
    this.parent.addGroupPanel(groupName, args, options);
  }
  addResponsivePanel(id, args, options = {}) {
    this.parent.addResponsivePanel(this.getPanelId(id), args, options);
  }
  updateResponsivePanel(id, args) {
    this.parent.updateResponsivePanel(this.getPanelId(id), args);
  }
  removeResponsivePanel(id) {
    this.parent.removeResponsivePanel(this.getPanelId(id));
  }
  startPanelsSection(id, args = {}) {
    this.parent.startPanelsSection(this.getPanelId(id), args);
  }
  endPanelsSection() {
    this.parent.endPanelsSection();
  }
  startPanelsTabs(id) {
    this.parent.startPanelsTabs(this.getPanelId(id));
  }
  startPanelsTab(id, args) {
    this.parent.startPanelsTab(this.getPanelId(id), args);
  }
  endPanelsTab() {
    this.parent.endPanelsTab();
  }
  endPanelsTabs() {
    this.parent.endPanelsTabs();
  }
}
/* harmony default export */ __webpack_exports__["default"] = (SubPanelsStack);

/***/ }),

/***/ "./src/block/button/index.js":
/*!***********************************!*\
  !*** ./src/block/button/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_SubPanelsStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../base/SubPanelsStack */ "./src/base/SubPanelsStack.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/block/button/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/block/button/style.scss");








class Block extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    // console.log(this);
    // this.registerControls = this.registerControls.bind(this);
    // this.subPanelsStack = new SubPanelsStack(this);
    // this.addPanel = new SubPanelsStack(this).addPanel
    this.subPanelsStack = new _base_SubPanelsStack__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.addPanel = this.subPanelsStack.addPanel.bind(this.subPanelsStack); // Bind the method
    this.init();
  }
  init = () => {
    (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('create-block/starter-block-button', {
      // Localize title using wp.i18n.__()
      apiVersion: 3,
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Example block scaffolded with Create Block tool.'),
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Block Button'),
      // Category Options: common, formatting, layout, widgets, embed
      category: 'common',
      // Dashicons Options – https://goo.gl/aTM1DQ
      icon: 'wordpress-alt',
      // Limit to 3 Keywords / Phrases
      keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Example'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Block Button'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Code Samples')],
      textdomain: "block",
      edit: this.editBlock,
      save: this.saveBlock
    });
    // this.addPanel = new SubPanelsStack(this).addPanel; // Extract the method
    this.registerPanels(); // Call the registerControls method
  };

  registerPanels = () => {
    this.addPanel('BlockButtonTitle', {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Title', 'block'),
      type: '',
      label_block: true,
      dynamic: {
        active: true
      },
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Cool Number', 'block'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Cool Number', 'block')
    });
    // this.addPanel(
    // 	'BlockButtonUrl',
    // 	{
    // 		label: __('Url', 'block'),
    // 		type: ControlsManager.URL,
    // 		label_block: true,
    // 		dynamic: {
    // 			active: true,
    // 		},
    // 		placeholder: __('https://your-link.com', 'block'),
    // 		separator: 'before',
    // 	}
    // )
    // this.addPanel(
    // 	'BlockButtonIcon',
    // 	{
    // 		label: __('Icon', 'block'),
    // 		type: ControlsManager.ICON,
    // 		label_block: true,
    // 		dynamic: {
    // 			active: true,
    // 		},
    // 		fa4compatibility: 'icon',
    // 		default: {
    // 			value: 'fas fa-star',
    // 			library: 'fa-solid',
    // 		},
    // 	}
    // )
  };

  editBlock = () => {
    return this.renderBlock();
  };
  saveBlock = () => {
    return this.renderBlock(false);
  };
  renderBlock = (isEditor = true) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      ...(isEditor ? (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)() : _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save())
    }, isEditor ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Starter Block – hello from the editor!', 'starter-block') : 'Starter Block – hello from the saved content!');
  };
}
new Block();

/***/ }),

/***/ "./src/block/button/editor.scss":
/*!**************************************!*\
  !*** ./src/block/button/editor.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block/button/style.scss":
/*!*************************************!*\
  !*** ./src/block/button/style.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"block/button/index": 0,
/******/ 			"block/button/style-index": 0
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkstarter_block"] = self["webpackChunkstarter_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["block/button/style-index"], function() { return __webpack_require__("./src/block/button/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map