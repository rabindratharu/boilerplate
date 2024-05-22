import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ (function(module) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ !function() {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ }();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************************!*\
  !*** ./src/blocks/mega-menu/view.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * WordPress dependencies
 */

var _store = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('create-block/mega-menu-block', {
    state: {
      get isMenuOpen() {
        return Object.values(state.menuOpenedBy).filter(Boolean).length > 0;
      },
      get menuOpenedBy() {
        var context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
        return context.menuOpenedBy;
      }
    },
    actions: {
      toggleMenuOnClick: function toggleMenuOnClick() {
        var context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
        var _getElement = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)(),
          ref = _getElement.ref;
        if (state.menuOpenedBy.click || state.menuOpenedBy.focus) {
          actions.closeMenu('click');
          actions.closeMenu('focus');
        } else {
          context.previousFocus = ref;
          actions.openMenu('click');
        }
      },
      closeMenuOnClick: function closeMenuOnClick() {
        actions.closeMenu('click');
        actions.closeMenu('focus');
      },
      handleMenuKeydown: function handleMenuKeydown(event) {
        if (state.menuOpenedBy.click) {
          // If Escape close the menu.
          if ((event === null || event === void 0 ? void 0 : event.key) === 'Escape') {
            actions.closeMenu('click');
            actions.closeMenu('focus');
          }
        }
      },
      openMenu: function openMenu() {
        var menuOpenedOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'click';
        state.menuOpenedBy[menuOpenedOn] = true;
      },
      closeMenu: function closeMenu() {
        var menuClosedOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'click';
        var context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
        state.menuOpenedBy[menuClosedOn] = false;

        // Reset the menu reference and button focus when closed.
        if (!state.isMenuOpen) {
          var _context$megaMenu;
          if ((_context$megaMenu = context.megaMenu) !== null && _context$megaMenu !== void 0 && _context$megaMenu.contains(window.document.activeElement)) {
            var _context$previousFocu;
            (_context$previousFocu = context.previousFocus) === null || _context$previousFocu === void 0 || _context$previousFocu.focus();
          }
          context.previousFocus = null;
          context.megaMenu = null;
        }
      }
    },
    callbacks: {
      initMenu: function initMenu() {
        var context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
        var _getElement2 = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)(),
          ref = _getElement2.ref;

        // Set the menu reference when initialized.
        if (state.isMenuOpen) {
          context.megaMenu = ref;
        }
      }
    }
  }),
  state = _store.state,
  actions = _store.actions;
}();

//# sourceMappingURL=view.js.map