const slider = document.querySelector('.slider');
const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');

let currentIndexs = 0;
const slideWidth = slides[0].clientWidth;
const numSlides = slides.length;
const intervalTimes = 3000;

function nextSlide() {
	currentIndexs = (currentIndexs + 1) % numSlides;
	slidesContainer.style.transform = `translateX(-${currentIndexs * slideWidth}px)`;

	if (currentIndexs >= numSlides * 2) {
		slidesContainer.style.transition = 'none';
    currentIndexs = numSlides;
    slidesContainer.style.transform = `translateX(-${currentIndexs * slideWidth}px)`;
    slidesContainer.style.transition = 'transform 0.5s ease';
    currentIndexs++;
    slidesContainer.style.transform = `translateX(-${currentIndexs * slideWidth}px)`;
	  }
	

}

setInterval(nextSlide, intervalTimes);
