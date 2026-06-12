// ===========================
// TOP LARGE SLIDER
// ===========================
const mainSlider = document.querySelector(".hero-main-image");
if (mainSlider) {
    const mainSlides = mainSlider.querySelectorAll(".slide");

    const nextBtn = mainSlider.querySelector(".next");

    const prevBtn = mainSlider.querySelector(".prev");

    let current = 0;

    function showSlide(index) {

        mainSlides.forEach((slide) => {
            slide.classList.remove("active");
        });

        mainSlides[index].classList.add("active");
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {

            current++;

            if (current >= mainSlides.length) {
                current = 0;
            }

            showSlide(current);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {

            current--;

            if (current < 0) {
                current = mainSlides.length - 1;
            }

            showSlide(current);
        });
    }

    setInterval(() => {

        current++;

        if (current >= mainSlides.length) {
            current = 0;
        }

        showSlide(current);

    }, 4000);
}


// ===========================
// BOTTOM TWO AUTO SLIDERS
// ===========================

const smallSliders = document.querySelectorAll(".hero-small-image");

smallSliders.forEach((slider) => {

    const slides = slider.querySelectorAll(".slide");

    let currentSlide = 0;

    setInterval(() => {

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active");

    }, 3000);

});