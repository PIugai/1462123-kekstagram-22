import { isEscEvent } from './util.js'
import { tagsInputHandler, descriptionInputHandler } from './validate-input.js'
import { bodyContainer } from './big-picture.js';
import { setScaleControls, setSlider, removeSlider } from './editor.js';
import { sendDataAsync } from './api.js';
import { showUploadErrorMessage, showUploadSuccessMessage } from './upload-message.js'

const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const editor = uploadForm.querySelector('.img-upload__overlay');
const closeButton = editor.querySelector('.img-upload__cancel');
const tagsInput = uploadForm.querySelector('.text__hashtags');
const descriptionInput = uploadForm.querySelector('.text__description');

const showImageEditor = () => {
  editor.classList.remove('hidden');
  bodyContainer.classList.add('modal-open');
  closeButton.addEventListener('click', closeButtonHandler);
  descriptionInput.addEventListener('input', descriptionInputHandler);
  tagsInput.addEventListener('input', tagsInputHandler);
  document.addEventListener('keydown', documentKeydownHandler);
  setScaleControls();
  setSlider();
}

const hideImageEditor = () => {
  editor.classList.add('hidden');
  bodyContainer.classList.remove('modal-open');
  uploadInput.value = '';
  removeSlider();
}

const closeButtonHandler = () => {
  hideImageEditor();
}

const uploadInputHandler = () => {
  showImageEditor();
}

const documentKeydownHandler = (evt) => {
  if (isEscEvent(evt) && document.activeElement !== tagsInput && document.activeElement !== descriptionInput) {
    hideImageEditor();
  }
}

const resetPage = () => {
  hideImageEditor();
};

const onSuccessMessage = () => {
  showUploadSuccessMessage();
  resetPage();
};

const onErrorMessage = () => {
  showUploadErrorMessage();
  resetPage();
};

uploadInput.addEventListener('change', uploadInputHandler);

const setUserFormSubmit = () => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendDataAsync(
      onSuccessMessage,
      onErrorMessage,
      new FormData(evt.target),
    );
  })
}

export { setUserFormSubmit }