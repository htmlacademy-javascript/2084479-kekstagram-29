import { EffectsOptions } from './constants.js';

const sliderElement = document.querySelector('.effect-level__slider');
const radioList = document.querySelector('.effects__list');
const valueElement = document.querySelector('.effect-level__value');
const image = document.querySelector('.img-upload__preview img');
const sliderBlock = document.querySelector('.img-upload__effect-level');
const originalRadio = document.querySelector('#effect-none');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  connect: 'lower',
});

const updateSliderOption = (effect) => {
  sliderElement.noUiSlider
    .updateOptions(EffectsOptions[effect.toUpperCase()]);
};

const renderEffect = (effect) => {
  let filterStyle = '';
  switch (effect) {
    case 'chrome':
      filterStyle = `grayscale(${valueElement.value})`;
      break;
    case 'sepia':
      filterStyle = `sepia(${valueElement.value})`;
      break;
    case 'marvin':
      filterStyle = `invert(${valueElement.value}%)`;
      break;
    case 'phobos':
      filterStyle = `blur(${valueElement.value}px)`;
      break;
    case 'heat':
      filterStyle = `brightness(${valueElement.value})`;
      break;
  }
  image.style.filter = filterStyle;
};

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
  renderEffect(document.querySelector('.effects__radio:checked').value);
});

const defaultImage = () => {
  sliderBlock.classList.add('hidden');
  image.style.filter = '';
};

radioList.addEventListener('change', (evt) => {
  if (evt.target.name === 'effect') {
    if (evt.target.value === 'none') {
      defaultImage();
    } else {
      updateSliderOption(evt.target.value);
      renderEffect(evt.target.value);
      sliderBlock.classList.remove('hidden');
    }
    updateSliderOption(evt.target.value);
  }
});

const resetEffects = () => {
  defaultImage();
  originalRadio.checked = true;
};

export { resetEffects };
