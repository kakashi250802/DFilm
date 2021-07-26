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

function renderfilmHot(todo_list) {
    // console.log(todo_list.results)
    var results = todo_list.results;
    var htmls = results.map(function(todo_item, index) {
        return `
        <!-- film -->
        <div class="col-2" data-index="${index}">
            <div class="product-film">
                <div class="product-film-img">
                    <div style="background: url('https://image.tmdb.org/t/p/w500/${todo_item.poster_path}');
                   
    width: 197px;
    height: 262px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
                    "></div>
                </div>
                <div class="product-film-inf">
                    <div class="product-btn">
                        <a href="#" class="btn-flat btn-hover">Xem ngay
                            <i class="bx bx-play-circle"></i>
                        </a>
                    </div>
                    <div class="product-film-name">
                        <h3>${todo_item.original_title}</h3>
                        <p>${todo_item.title}</p>
                    </div>
                    <div class="product-film-wiew-rate">
                        <p class="view-info"><i class='bx bxs-show'></i> &#160;${todo_item.vote_count}</p>
                        <ul class="star-voted">
                            <li><a href="#"><i class='bx bxs-star' ></i></a></li>
                            <li><a href="#"><i class='bx bxs-star' ></i></a></li>
                            <li><a href="#"><i class='bx bxs-star' ></i></a></li>
                            <li><a href="#"><i class='bx bxs-star-half' ></i></a></li>
                            <li><a href="#"><i class='bx bx-star' ></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- end film -->
    `;
    })


    var html = htmls.join('');
    document.querySelector('.section > .container > .row').insertAdjacentHTML('beforeend', html);
}
start();
console.log(document.querySelectorAll('.slide'))
let slide_index = 0;
let slide_play = true;
var slides = document.querySelectorAll('.slide');

setInterval(() => {
    var slides = document.querySelectorAll('.slide');
    if (slides.length > 1) {
        return this.slides = slides;
    }
}, 100)
let nowSlide_index = document.querySelectorAll('.slide-index i');
hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active');
    });
    nowSlide_index.forEach(e => {
        e.classList.remove('active');
    })
}
nowSlide_index.forEach((slideIndex, index) => {
    slideIndex.addEventListener('click', () => {
        slide_index = index;
        hideAllSlide();
        slides[index].classList.add('active');
        // nowSlide_index[index].classList.add('active');

    });
})
showSlide = () => {
    hideAllSlide();
    slides[slide_index].classList.add('active');
    // nowSlide_index[slide_index].classList.add('active');
}
console.log(slides[1])
    // slides[0].classList.add(active);

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1;
prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1;
// pause slide wwhen hover slide

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false);
// play slide wwhen leave slide

document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true);
// Slide control
document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide();
    showSlide();
});
document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide();
    showSlide();
});


setInterval(() => {
    if (!slide_play) return
    nextSlide()
    showSlide()

}, 3000);
// scroll left films
var maxFilmOffset = document.querySelector('.section > .container > .row').offsetWidth;
// var now_offset = ;
scrollItem = () => {
    document.querySelector('.slide-next-flim').addEventListener('click', () => {
        document.querySelector('.section > .container > .row').scrollLeft += 500;
    });
}
scrollItem();