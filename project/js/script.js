'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const listMovies = document.querySelector('.promo__interactive-list'),
        reklama = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        bg = document.querySelector('.promo__bg'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newFilm = addInput.value;
        const favorite = checkbox.checked;

        movieDB.movies.push(newFilm);
        sortArray(movieDB.movies);

    });

    const movieDB = {
        movies: [
            "Логан",
            "Лига плюща",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    createMovieList(movieDB.movies, listMovies);

    movieDB.movies.reset();
    
    const deleteReklama = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

   

    const makeChanges = () => {
        genre.textContent = 'Драма';
        bg.style.backgroundImage = 'url("img/bg.jpg")';
    };
    
    
    
    
    const sortArray = (arr) => {
        arr.sort();
    };

   

    function createMovieList(films, parent) {
    parent.innerHTML = "";

    films.forEach((film, i) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
             <div class="delete"></div>
        </li>`;
    });
    }

    sortArray(movieDB.movies);
    makeChanges();
    deleteReklama(reklama);
    createMovieList(movieDB.movies, listMovies);

});