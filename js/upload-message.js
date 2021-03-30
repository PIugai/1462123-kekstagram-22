import { isEscEvent } from './util.js';

const main = document.querySelector('body');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const showUploadSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  main.appendChild(successMessage);
  const successButton = successMessage.querySelector('.success__button');

  const documentKeydownHandler = (evt) => {
    if (isEscEvent(evt)) {
      if (main.contains(successMessage)) {
        main.removeChild(successMessage)
      }
      document.removeEventListener('keydown', documentKeydownHandler);
    }
  }

  const buttonClickHandler = () => {
    main.removeChild(successMessage);
    document.removeEventListener('keydown', documentKeydownHandler);
  }

  successButton.addEventListener('click', buttonClickHandler);
  main.addEventListener('keydown', documentKeydownHandler);
}

const showUploadErrorMessage = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  main.appendChild(errorMessage);
  const errorButton = errorMessage.querySelector('.error__button');

  const documentKeydownHandler = (evt) => {
    if (isEscEvent(evt)) {
      main.removeChild(errorMessage);
      document.removeEventListener('keydown', documentKeydownHandler);
    }
  }

  const buttonClickHandler = () => {
    main.removeChild(errorMessage);
    document.removeEventListener('keydown', documentKeydownHandler);
  }

  errorButton.addEventListener('click', buttonClickHandler);
  main.addEventListener('keydown', documentKeydownHandler);
}

export { showUploadSuccessMessage, showUploadErrorMessage }