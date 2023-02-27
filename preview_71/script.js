'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

/* const widht = box.clientWidth;
const height = box.clientHeight; */

/* const widht = box.offsetWidth;
const height = box.offsetHeight; */

const widht = box.scrollWidth;
const height = box.scrollHeight;

console.log(widht, height);

btn.addEventListener('click', () => {
    /* box.style.height = box.scrollHeight + 'px'; */
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.display);

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.cli);



