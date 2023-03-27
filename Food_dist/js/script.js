window.addEventListener('DOMContentLoaded', () => {
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
       

        /// Slider

        const slides = document.querySelectorAll('.offer__slide'),
            prev = document.querySelector('.offer__slider-prev'),
            next = document.querySelector('.offer__slider-next'),
            current = document.querySelector('#current'),
            total = document.querySelector('#total');

            let slideIndex = 1;

            showSlides(slideIndex);

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


}); 


 