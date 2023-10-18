
const carouselSlide = document.querySelectorAll(".image");
let currentIndex = 0;
let interval = 3000;


function nextSlide(){
    carouselSlide[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselSlide.length;
    carouselSlide[currentIndex].classList.add("active")
}

function startSlide(){
    setInterval(nextSlide, interval);
}

(function(){
    startSlide();
})()





