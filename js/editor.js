import { EffectsData } from './effects.js'

const editor = document.querySelector('.img-upload__overlay');
const scaleUpButton = editor.querySelector('.scale__control--bigger');
const scaleDownButton = editor.querySelector('.scale__control--smaller');
const scaleInput = editor.querySelector('.scale__control--value');
const uploadForm = document.querySelector('.img-upload__form');
const preview = uploadForm.querySelector('.img-upload__preview');
const effectsList = uploadForm.querySelector('.effects__list');
const sliderBlock = uploadForm.querySelector('.img-upload__effect-level');
const effectLevelInput = uploadForm.querySelector('.effect-level__value');
const slider = uploadForm.querySelector('.effect-level__slider');
const SCALE_DEFAULT = 100;
const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
let scale = SCALE_DEFAULT;
let currentEffect = '';

const setScaleControls = () => {
  scaleInput.value = SCALE_DEFAULT + '%';
  scaleUpButton.addEventListener('click', scaleUpClickHandle);
  scaleDownButton.addEventListener('click', scaleDownClickHandle);
}

const scaleUpClickHandle = () => {
  if (scale < SCALE_MAX) {
    scale += SCALE_STEP;
    scaleInput.value = scale + '%';
    preview.style.transform = 'scale(' + scale/SCALE_MAX + ')';
  }
}

const scaleDownClickHandle = () => {
  if (scale > SCALE_MIN) {
    scale -= SCALE_STEP;
    scaleInput.value = scale + '%';
    preview.style.transform = 'scale(' + scale/SCALE_MAX + ')';
  }
}

/* global noUiSlider:readonly */

const setSlider = () => {
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
  sliderBlock.classList.add('hidden');
  effectsList.addEventListener('change', effectsListChangeHandle);
}

const effectsListChangeHandle = (evt) => {
  clearEffect();
  setEffect(evt);
}

const clearEffect = () => {
  preview.className = 'img-upload__preview';
}

const removeSlider = () => {
  slider.noUiSlider.destroy();
  preview.style.filter = '';
  preview.className = 'img-upload__preview';
  effectLevelInput.value = '';
}

const setEffect = (evt) => {
  currentEffect = EffectsData[evt.target.value];
  preview.className = 'img-upload__preview';

  if (!currentEffect) {
    effectLevelInput.value = '';
    sliderBlock.classList.add('hidden');
  } else {
    sliderBlock.classList.remove('hidden');
    preview.classList.add(currentEffect.class);
    slider.noUiSlider.updateOptions({
      range: {
        min: EffectsData[evt.target.value].min,
        max: EffectsData[evt.target.value].max,
      },
      start: EffectsData[evt.target.value].start,
      step: EffectsData[evt.target.value].step,
    });
    getSliderValue(EffectsData[evt.target.value].filter, EffectsData[evt.target.value].units);
  }
}

const getSliderValue = (filter, units) => {
  slider.noUiSlider.on('update', (values, handle) => {
    effectLevelInput.value = values[handle];
    if (units) {
      preview.style.filter = `${filter}(${effectLevelInput.value}${units})`;
    } else {
      preview.style.filter = `${filter}(${effectLevelInput.value})`;
    }
  });
}

export {setSlider, removeSlider, setScaleControls}