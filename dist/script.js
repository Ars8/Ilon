/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_showMoreCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showMoreCards */ "./src/js/modules/showMoreCards.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");



window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_0__["default"])('.main__slider__nav__item1', '.main__slider__item1', '.main__slider__item2', '.main__slider__item3');
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_0__["default"])('.main__slider__nav__item2', '.main__slider__item1', '.main__slider__item2', '.main__slider__item3');
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_0__["default"])('.main__slider__nav__item3', '.main__slider__item1', '.main__slider__item2', '.main__slider__item3');
  Object(_modules_showMoreCards__WEBPACK_IMPORTED_MODULE_1__["default"])('.loadMore', '#cards .cards__wrapper');
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelector(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelector('[data-modal]'),
          scroll = calcScroll();
    console.log(trigger);
    console.log(modal);
    console.log(close);
    console.log(windows);
    trigger.addEventListener('click', e => {
      if (e.target) {
        e.preventDefault();
      }

      windows.style.display = 'none';
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scroll}px`;
    });
    close.addEventListener('click', () => {
      windows.style.display = 'none';
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        windows.style.display = 'none';
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      }
    });
  }

  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '600px';
    div.style.height = '600px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  bindModal('.header__buttons-query', '.modal__wrapp', '.modal__input__tittle__close');
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/showMoreCards.js":
/*!*****************************************!*\
  !*** ./src/js/modules/showMoreCards.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);
  btn.addEventListener('click', function () {
    Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["getResource"])('https://jsonplaceholder.typicode.com/posts?_limit=6').then(res => createCards(res)).catch(error => console.log(error));
  });

  function createCards(response) {
    response.forEach(_ref => {
      let {
        title,
        body
      } = _ref;
      let card = document.createElement('div');
      card.classList.add('card__item');
      card.innerHTML = `
                    <img src="./assets/img/Your images here.png" alt />
                    <div class="card__item__text">
                        <h3>bridge</h3>
                        <h4>${title}</h4>
                        <p>${body}</p>
                        <p>Posted by <span>Eugenia</span>, on July 24, 2019</p>
                    </div>
                    <button>Continue reading</button>
            `;
      document.querySelector(wrapper).appendChild(card);
    });
  }

  ;
};

/* harmony default export */ __webpack_exports__["default"] = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sliders = (triggerSelector, sliderSelector1, sliderSelector2, sliderSelector3) => {
  const trigger = document.querySelector(triggerSelector),
        slider1 = document.querySelector(sliderSelector1),
        slider2 = document.querySelector(sliderSelector2),
        slider3 = document.querySelector(sliderSelector3),
        activeSlide = document.querySelector('.main');
  slider1.style.display = "flex";
  trigger.addEventListener('click', () => {
    switch (trigger.className) {
      case 'main__slider__nav__item1':
        activeSlide.style.backgroundImage = "url('../assets/img/Rectangle5.png')";
        slider1.style.display = "flex";
        slider2.style.display = "none";
        slider3.style.display = "none";
        break;

      case 'main__slider__nav__item2':
        activeSlide.style.backgroundImage = "url('../assets/img/Rectangle6.png')";
        slider1.style.display = "none";
        slider2.style.display = "flex";
        slider3.style.display = "none";
        break;

      case 'main__slider__nav__item3':
        activeSlide.style.backgroundImage = "url('../assets/img/Rectangle7.png')";
        slider1.style.display = "none";
        slider2.style.display = "none";
        slider3.style.display = "flex";
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/*! exports provided: getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
const getResource = async url => {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};



/***/ })

/******/ });
//# sourceMappingURL=script.js.map