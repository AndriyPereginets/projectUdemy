

const btn = document.querySelector('button'),
      btns = document.querySelectorAll('button');
let i = 0;
const deletElements = (e) => {
    console.log(e.target);
    i++;
    if (i === 3) {
        btn.removeEventListener('click', deletElements);    
    }
};
btn.addEventListener('click', deletElements);
/* btn.addEventListener('click', (e) => {
    e.target.remove();
    /* console.log(e.target); */
   /*  console.log('Vazia'); 
 }); */

 const link = document.querySelector('a');

       link.addEventListener('click', (event) => {
            event.preventDefault();

            console.log(event.target);
       });

btns.forEach(item => {
    item.addEventListener('click', deletElements);
});

