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

module.exports = slider;