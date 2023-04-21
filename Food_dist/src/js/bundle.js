/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
            // Calc


            const activeButh = document.querySelectorAll('.calculating__choose-item');
            const result = document.querySelector('.calculating__result span');
    
        
            let sex, height, weight, age, ratio;
    
           if (localStorage.getItem('sex')) {
                sex = localStorage.getItem('sex');
            } else {
                sex = 'female';
                localStorage.setItem('sex', 'female');
            }
    
    
    
           if (localStorage.getItem('ratio')) {
                ratio = localStorage.getItem('ratio');
            } else {
                ratio = 1.375;
                localStorage.setItem('ratio', 1.375);
            }
    
    
            function initLocalSettings(selector, activeClass) {
                const elements = document.querySelectorAll(selector);
    
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                    if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                        elem.classList.add(activeClass);
                    } if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                        elem.classList.add(activeClass);
                    }
                });
            } 
    
            initLocalSettings('#gender div', 'calculating__choose-item_active');
            initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
    
            function calcTotal() {
                if (!sex || !height || !weight || !age || !ratio) {
                    result.textContent = '______';
                    return;
                } 
    
                if (sex === 'female') {
                    result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
                } else {
                    result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
                }
            }
    
            calcTotal();
    
            function getStaticInfo(selector, activeClass) {
                const elements = document.querySelectorAll(selector);
    
                elements.forEach((elem) => {
                    elem.addEventListener('click', (e) =>{
                        if (e.target.getAttribute('data-ratio')) {
                            ratio = +e.target.getAttribute('data-ratio');
                            localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                        } else {
                            sex = e.target.getAttribute('id');
                            localStorage.setItem('sex', e.target.getAttribute('id'));
                        }
        
                        
        
                        elements.forEach((elem) => {
                            elem.classList.remove(activeClass);
                            e.target.classList.add(activeClass);
                            calcTotal();
                        });
        
                        
                    });
                });
            }
    
    
            getStaticInfo('#gender div', 'calculating__choose-item_active');
            getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active');
    
            function getDynamicInfo(selector) {
                const input = document.querySelector(selector);
    
                input.addEventListener('input', () => {
    
                if (input.value.match(/\D/g)) {
                    input.style.border = '1px solid red';
                } else {
                    input.style.border = 'none';
                }
    
                    switch(input.getAttribute('id')) {
                        case 'height':
                            height = +input.value;
                            break;
                        case 'weight':
                            weight = +input.value;
                            break;
                        case 'age':
                            age = +input.value;
                            break;
                    }
    
                    calcTotal();
                });
            }
    
            getDynamicInfo('#height');
            getDynamicInfo('#weight');
            getDynamicInfo('#age');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cards() {
            /// Classes for cards
        class MenuCard {
            constructor(src, alt,title, desc, price, parentSelector, ...classes) {
                this.src = src;
                this.alt = alt;
                this.title = title;
                this.desc = desc;
                this.price = price;
                this.classes = classes;
                this.parent = document.querySelector(parentSelector);
                this.transfer = 27;
                this.changeToUAH();
            }

            changeToUAH() {
                this.price = this.price * this.transfer;
            }

            render() {
                const element = document.createElement('div');

                if (this.classes.length == 0) {
                    this.element = 'menu__item';
                    element.classList.add(this.element);
                } else {
                    this.classes.forEach(className => element.classList.add(className));
                }

                element.innerHTML =`
                        <img src=${this.src} alt=${this.alt}>
                        <h3 class="menu__item-subtitle">${this.title}</h3>
                        <div class="menu__item-descr">${this.desc}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                        </div>
                `;

                this.parent.append(element);

            }

        }

        new MenuCard(
            "img/tabs/vegy.jpg",
            "vegy",
            'Меню "Фитнес"',
            'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            9,
            '.menu .container'
        ).render();

        new MenuCard(
            "img/tabs/elite.jpg",
            "elite",
            'Меню “Премиум”',
            'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
            28,
            '.menu .container'
        ).render();

        new MenuCard(
            "img/tabs/post.jpg",
            "post",
            'Меню "Постное"',
            'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
            12,
            '.menu .container'
        ).render();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function forms() {
            /// Forms
            const forms = document.querySelectorAll('form');
            const massage = {
                loading: 'Завантаження',
                success: 'Дякую, незабаром з вами зконтактують',
                failure: 'Упс, щось не так'
            };
    
            forms.forEach(item => {
                bindPostData(item);
            });
    
    
            const postData = async (url, data) => {
                const res = await fetch(url, {
                    method: "POST",
                    headers: {'Content-type': 'multipart/form-data'},
                    body: data
                });
    
                return await res.json();
            };
    
            function bindPostData(form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
    
                    const statusMassage = document.createElement('div');
                    statusMassage.classList.add('status');
                    statusMassage.textContent = massage.loading;
                    form.append(statusMassage);
                    
                    
                    const formData = new FormData(form);
                                    
                    postData('http://localhost:3000/requests', formData)
                    .then(data => {
                        console.log(data);
                        statusMassage.remove();
                    })
                    .catch(() => {
                        statusMassage.textContent = massage.failure;
                    })
                    .finally(() => {
                        form.reset();
                    });                              
                });
            }
    
            fetch('http://localhost:3000')
                .then(data => data.json())
                .then(res => console.log(res));    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function modal() {
        /// Modal

        const modalPush = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('[data-close]');
           
            function openModal() {
                modal.classList.toggle('show');
                document.body.style.overflow = 'hidden';
                clearInterval(modalTimerID);
            }

            function closeModal() {
                modal.classList.toggle('show');
                document.body.style.overflow = '';
            }
                   
             modalPush.forEach(btn => {
                btn.addEventListener('click', openModal);
             });

            
            modalClose.addEventListener('click', closeModal);

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.code === "Escape" && modal.classList.contains('show')) {
                    closeModal();
                }
            });

           const modalTimerID = setTimeout(openModal, 5000);

           function showModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.
                documentElement.scrollHeight -1) {
                openModal();
                window.removeEventListener('scroll', showModalByScroll);
            }
           }

           window.addEventListener('scroll', showModalByScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider() {
           /// Slider

           const slides = document.querySelectorAll('.offer__slide'),
           slider = document.querySelector('.offer__slider'),
           prev = document.querySelector('.offer__slider-prev'),
           next = document.querySelector('.offer__slider-next'),
           current = document.querySelector('#current'),
           total = document.querySelector('#total'),
           slidesWrapper = document.querySelector('.offer__slider-wrapper'),
           slidesField = document.querySelector('.offer_slider-inner'),
           width = window.getComputedStyle(slidesWrapper).width;


           let slideIndex = 1;
           let offset = 0;

           if (slides.length < 10 ) {
               total.textContent = `0${slides.length}`;
               current.textContent = `0${slideIndex}`;
           } else {
               total.textContent = slides.length;
               current.textContent = slideIndex;
           }

           slidesField.style.width = 100 * slides.length + '%';
           slidesField.style.display = 'flex';
           slidesField.style.transition = '0.5s all';

           slidesWrapper.style.overflow = 'hidden';


           slides.forEach(slide => {
               slide.style.width = width;
           });

           slider.style.position = 'relative';

           const indicators = document.createElement('ol'),
               dots = [];
           indicators.classList.add('carousel-indicators');

           slider.append(indicators);

           for (let i = 0; i < slides.length; i++) {
               const dot = document.createElement('li');
               dot.setAttribute('data-slide-to', i + 1);
               dot.classList.add('dot');

               if (i == 0) {
                   dot.style.opacity = 1;
               }

               indicators.append(dot);
               dots.push(dot);
           }

        
       function rep (rep) {
               return +rep.replace(/\D/g, '');
           }

           next.addEventListener('click', () => {
               if (offset == rep(width) * (slider.length -1)) {
                   offset = 0;
               } else {
                   offset += rep(width);
               }
               
               slidesField.style.transform = `translateX(-${offset}px)`;

               if (slideIndex == slides.length) {
                   slideIndex = 1;
               } else {
                   slideIndex++;
               }

               if (slides.length < 10) {
                   current.textContent = `0${slideIndex}`;
               } else {
                   current.textContent = slideIndex;
               }

               dots.forEach(dot => dot.style.opacity = '.5');
               dots[slideIndex - 1].style.opacity = 1;
           });
           function dotsForEach(dots) {
               dots.forEach(dot => dot.style.opacity = '.5');
               dots[slideIndex - 1].style.opacity = 1;
           }
       
       

           

           prev.addEventListener('click', () => {
               if (offset == 0) {
                   offset = rep(width)  * (slider.length -1);
               } else {
                   offset -= rep(width) ;
               }
               
               slidesField.style.transform = `translateX(-${offset}px)`;

               if (slideIndex == 1) {
                   slideIndex = slides.length;
               } else {
                   slideIndex--;
               }

               if (slides.length < 10) {
                   current.textContent = `0${slideIndex}`;
               } else {
                   current.textContent = slideIndex;
               }

               dotsForEach(dots);
});

           

           dots.forEach(dot => {
               dot.addEventListener('click', (e) => {
                   const slideTo = e.target.getAttribute('data-slide-to');

                   slideIndex = slideTo;
                   offset = rep(width)  * (slideTo -1);

                   slidesField.style.transform = `translateX(-${offset}px)`;

                   if (slides.length < 10) {
                       current.textContent = `0${slideIndex}`;
                   } else {
                       current.textContent = slideIndex;
                   }
   

                   dotsForEach(dots);
               });
           });

           

        /*    showSlides(slideIndex);

           if (slides.length < 10 ) {
               total.textContent = `0${slides.length}`;
           } else {
               total.textContent = slides.length;
           }

       function showSlides(n) {
           if (n > slides.length) {
               slideIndex = 1;
           }

           if (n < 1) {
               slideIndex = slides.length;
           }

           slides.forEach(item => item.style.display = 'none');

           slides[slideIndex - 1].style.display = 'block';

           if (slides.length < 10 ) {
               current.textContent = `0${slideIndex}`;
           } else {
               current.textContent = slideIndex;
           }
       }

       function plusSlides(n) {
           showSlides(slideIndex += n);
       }

       prev.addEventListener('click', () => {
           plusSlides(-1);
       });

       next.addEventListener('click', () => {
           plusSlides(1);
       });
 */
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs() {
        /// tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show' , 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer() {
    /// timer
    const dedline = '2023-06-03';

    function getTimeRemaining (endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)), 
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000 ) % 60);

            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
    }

    function getZero (num) {
        if (num >= 0, num < 10) {
            return `0${num}`;
        } else {
            return num;
        }

    }

    function setClock (selector, endTime) {
        const timer = document.querySelector(selector),
            days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

            updateClock();

            function updateClock () {
                const t = getTimeRemaining(endTime);
                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
    }
    setClock('.timer', dedline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");









window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])();
}); 

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map