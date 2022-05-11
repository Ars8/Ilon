const sliders = (triggerSelector, sliderSelector1, sliderSelector2, sliderSelector3) => {
    const trigger = document.querySelector(triggerSelector),
          slider1 = document.querySelector(sliderSelector1),
          slider2 = document.querySelector(sliderSelector2),
          slider3 = document.querySelector(sliderSelector3),
          activeSlide = document.querySelector('.main');
          slider1.style.display = "flex";

    trigger.addEventListener('click', () => {
        switch (trigger.className) {
            case 'main__slider__nav__item1':
                activeSlide.style.backgroundImage = "url('../assets/img/Rectangle5.png')";
                slider1.style.display = "flex";
                slider2.style.display = "none";
                slider3.style.display = "none";
                break;

            case 'main__slider__nav__item2':
                activeSlide.style.backgroundImage = "url('../assets/img/Rectangle6.png')";
                slider1.style.display = "none";
                slider2.style.display = "flex";
                slider3.style.display = "none";
                break;

            case 'main__slider__nav__item3':
                activeSlide.style.backgroundImage = "url('../assets/img/Rectangle7.png')";
                slider1.style.display = "none";
                slider2.style.display = "none";
                slider3.style.display = "flex";
                break;
        
            default:
                break;
        }
    })
}
export default sliders;