/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const listMovies = document.querySelector('.promo__interactive-list');
const reklama = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector('.promo__genre');
const bg = document.querySelector('.promo__bg');

reklama.forEach(item => {
    item.remove();
});

genre.textContent = 'Драма';
bg.style.backgroundImage = 'url("img/bg.jpg")';


const movieDB = {
    movies: [
        "Логан",
        "Лига плюща",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

listMovies.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    listMovies.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${film}
         <div class="delete"></div>
    </li>
    `.toLowerCase();
});
