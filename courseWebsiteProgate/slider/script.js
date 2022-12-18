let slideIndex = 0;


function updateSlide(i) {
  slideIndex += i;
  runSlide(slideIndex);
}

function runSlide(l) {
  const sliderItem = document.getElementsByClassName('slider-item');
  if (l > sliderItem.length - 1) {
    slideIndex = 0;
  }
  if (l < 0) {
    slideIndex = 3;
  }
  for (let i = 0; i < sliderItem.length; i++) {
    sliderItem[i].style.display = "none";
  }
  sliderItem[slideIndex].style.display="block";
}

runSlide(slideIndex);