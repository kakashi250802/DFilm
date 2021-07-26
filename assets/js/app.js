var films = 'https://api.themoviedb.org/3/discover/movie?api_key=8bfca905d4df325f15ac040c0d49e2d1&language=vi';
var filmsHot = 'https://api.themoviedb.org/3/discover/movie?api_key=8bfca905d4df325f15ac040c0d49e2d1&year=2021&language=vi&sort_by=popularity.desc&include_adult=true&include_video=false&page=2&with_watch_monetization_types=flatrate';

function start() {
    getFilms(renderData);
    getFilmsHot(renderfilmHot);

}


// function 
function getFilms(callback) {
    fetch(films)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function getFilmsHot(callback) {
    fetch(filmsHot)

    .then(function(response) {
            return response.json();
        })
        .then(callback);
}
// https://api.themoviedb.org/3/person/popular?api_key=8bfca905d4df325f15ac040c0d49e2d1&language=vi&page=1