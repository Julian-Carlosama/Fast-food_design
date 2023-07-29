const Mslider = document.querySelector('.Main-slider');
const MainSlidesContainer = document.querySelector('.Main-slides-container');
const MainSlides = document.querySelectorAll('.Mslide');
const iconsContainer = document.getElementById('slider-icons');

let currentIndex = 0;
const MainSlideWidth = MainSlides[0].clientWidth;
const numMainSlides = MainSlides.length;
const intervalTime = 5000;

// Calcular el ancho de cada slide en función del número de slides
/*const slideWidth = 100 / numMainSlides;
MainSlides.forEach(slide => {
	slide.style.width = `${slideWidth}%`;
});*/


function setActiveIcon() {
	const icons = document.querySelectorAll('.Icon');
    icons.forEach((icon, index) => {
        if (index === currentIndex) {
            icon.classList.add('active');
        } else {
            icon.classList.remove('active');
        }
    });
}

function nextMSlide() {
  currentIndex++
  if (currentIndex >= numMainSlides ) {
    currentIndex = 0;
    MainSlidesContainer.style.transition = 'none';
    MainSlidesContainer.style.transform = 'translateX(0)';
    setTimeout(() => {
        MainSlidesContainer.style.transition = 'transform 0.5s ease';
    }, 50)
  } else {
    MainSlidesContainer.style.transform = `translateX(-${currentIndex * MainSlideWidth}px)`;
  }
  setActiveIcon();
}

setInterval(nextMSlide, intervalTime);

for (let i = 0; i < numMainSlides; i++) {
    const icon = document.createElement('span');
    icon.classList.add('Icon');
    iconsContainer.appendChild(icon);

	// Agregar evento de clic a cada ícono
    icon.addEventListener('click', () => {
        currentIndex = i;
        MainSlidesContainer.style.transform = `translateX(-${currentIndex * MainSlideWidth}px)`;
        setActiveIcon();
    });
}
