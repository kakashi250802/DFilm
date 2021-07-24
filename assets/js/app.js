var films = 'https://api.themoviedb.org/3/discover/movie?api_key=8bfca905d4df325f15ac040c0d49e2d1&language=vi';

function start() {
    getfilms(renderData);

}


// function 
function getfilms(callback) {
    fetch(films)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function renderData(todo_list) {
    // console.log(todo_list.results)
    var results = todo_list.results;
    var htmls = results.map(function(todo_item) {
        return `
    <!-- slide item -->
    <div class="slide">
        <div class="info">
            <div class="info-content">
                <h2 class="top-down">
                    ${todo_item.original_title}
                </h2>
                <h3 class="top-down trans-delay-0-2">
                    ${todo_item.title}
                </h3>
                <p class="top-down trans-delay-0-4">
                    ${todo_item.overview}
                </p>
                <div class="top-down trans-delay-0-6">
                    <a href="#" class="btn-flat btn-hover">
                        <span>Xem ngay <i class='bx bx-play-circle'></i></span>
                    </a>
                </div>
            </div>
        </div>
        <div class="img">
            <div style=" 
            background:url('https://image.tmdb.org/t/p/w1280/${todo_item.backdrop_path}');                            
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 100vw;
            height: 110vh;">
            </div>
        </div>
    </div>
    <!-- end slide item -->
    `;
    })


    var html = htmls.join('');
    document.querySelector('.slider > .container').insertAdjacentHTML('beforeend', html);
}
start();