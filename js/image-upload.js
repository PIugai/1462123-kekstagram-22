import { bodyContainer } from './big-picture.js';
import { setScaleControls, setSlider, removeSlider } from './editor.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const editor = uploadForm.querySelector('.img-upload__overlay');
const closeButton = editor.querySelector('.img-upload__cancel');

const showImageEditor = () => {
  editor.classList.remove('hidden');
  bodyContainer.classList.add('modal-open');
  closeButton.addEventListener('click', closeButtonHandler);
  setScaleControls();
  setSlider();
}

const hideImageEditor = () => {
  editor.classList.add('hidden');
  bodyContainer.classList.remove('modal-open');
  closeButton.removeEventListener('click', closeButtonHandler);
  uploadInput.value = '';
  removeSlider();
}

const closeButtonHandler = () => {
  hideImageEditor();
}

const uploadInputHandler = () => {
  showImageEditor();
}

uploadInput.addEventListener('change', uploadInputHandler);