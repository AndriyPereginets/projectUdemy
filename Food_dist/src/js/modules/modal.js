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

export default modal;