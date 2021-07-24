var films = 'https://api.themoviedb.org/3/discover/movie?api_key=8bfca905d4df325f15ac040c0d49e2d1&language=vi';

function start() {
    getFilmSlides(renderData);

}


// function 
function getFilmSlides(callback) {
    fetch(films)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}