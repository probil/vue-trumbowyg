(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"), require("trumbowyg"), require("trumbowyg/dist/ui/icons.svg"));
	else if(typeof define === 'function' && define.amd)
		define("VueTrumbowyg", ["jquery", "trumbowyg", "trumbowyg/dist/ui/icons.svg"], factory);
	else if(typeof exports === 'object')
		exports["VueTrumbowyg"] = factory(require("jquery"), require("trumbowyg"), require("trumbowyg/dist/ui/icons.svg"));
	else
		root["VueTrumbowyg"] = factory(root["jQuery"], root["trumbowyg"], root["trumbowyg/dist/ui/icons.svg"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trumbowygPlugin", function() { return trumbowygPlugin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_vue__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return __WEBPACK_IMPORTED_MODULE_0__component_vue__["a"]; });


var trumbowygPlugin = function trumbowygPlugin(Vue, params) {
  var name = 'trumbowyg';
  if (typeof params === 'string') name = params;

  Vue.component(name, __WEBPACK_IMPORTED_MODULE_0__component_vue__["a" /* default */]);
};

__WEBPACK_IMPORTED_MODULE_0__component_vue__["a" /* default */].install = trumbowygPlugin;

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__component_vue__["a" /* default */]);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_component_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10b9f212_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_component_vue__ = __webpack_require__(7);
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_component_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10b9f212_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_component_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_trumbowyg__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_trumbowyg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_trumbowyg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_trumbowyg_dist_ui_icons_svg__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_trumbowyg_dist_ui_icons_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_trumbowyg_dist_ui_icons_svg__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//




// You have to import css yourself

// You have to configure webpack to load svg files


// https://alex-d.github.io/Trumbowyg/documentation/#events
var events = ['focus', 'blur', 'change', 'resize', 'paste', 'openfullscreen', 'closefullscreen', 'close'];

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'trumbowyg',
  props: {
    value: {
      default: null,
      required: true,
      validator: function validator(value) {
        return value === null || typeof value === 'string' || value instanceof String;
      }
    },
    // http://alex-d.github.io/Trumbowyg/documentation.html#basic-options
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    // https://alex-d.github.io/Trumbowyg/documentation/#svg-icons
    svgPath: {
      type: [String, Boolean],
      default: __WEBPACK_IMPORTED_MODULE_2_trumbowyg_dist_ui_icons_svg___default.a
    }
  },
  data: function data() {
    return {
      // jQuery DOM
      el: null
    };
  },
  mounted: function mounted() {
    // Return early if instance is already loaded
    if (this.el) return;

    // Store DOM
    this.el = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.$el);

    // Init editor with config
    this.el.trumbowyg(_extends({ svgPath: this.svgPath }, this.config));
    // Set initial value
    this.el.trumbowyg('html', this.value);

    // Watch for further changes
    this.el.on('tbwchange', this.onChange);
    this.el.on('tbwpaste', this.onChange);

    // Register events
    this.registerEvents();
  },
  beforeDestroy: function beforeDestroy() {
    // Free up memory
    if (this.el) {
      this.el.trumbowyg('destroy');
      this.el = null;
    }
  },

  watch: {
    /**
     * Listen to change from outside of component and update DOM
     *
     * @param newValue String
     */
    value: function value(newValue) {
      if (this.el) {
        // Prevent multiple input events
        if (newValue === this.el.trumbowyg('html')) return;
        // Set new value
        this.el.trumbowyg('html', newValue);
      }
    }
  },
  methods: {
    /**
     * Emit input event with current editor value
     * This will update v-model on parent component
     * This method gets called when value gets changed by editor itself
     *
     * @param event
     */
    onChange: function onChange(event) {
      this.$emit('input', event.target.value);
    },


    /**
     * Emit all available events
     */
    registerEvents: function registerEvents() {
      var _this = this;

      events.forEach(function (name) {
        _this.el.on('tbw' + name, function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this.$emit.apply(_this, ['tbw-' + name].concat(args));
        });
      });
    }
  }
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('textarea')}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});