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