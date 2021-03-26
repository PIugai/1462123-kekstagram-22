import { hasDuplicates } from './util.js';

const uploadForm = document.querySelector('.img-upload__form');
const tags = uploadForm.querySelector('.text__hashtags');
const description = uploadForm.querySelector('.text__description');
const pattern = /^[A-Za-z0-9а-яА-Я]+$/;
const MAX_TAGS_COUNT = 5;
const MAX_TAGS_LENGTH = 20;
const MAX_DESCRIPTION_LENGTH = 140;

const tagsInputHandler = () => {
  const tagsString = tags.value;
  const tagsArray = tagsString.split(' ').map(tag => tag.toLowerCase());
  const message = validateTags(tagsArray);
  message ? tags.setCustomValidity(message) : tags.setCustomValidity('');
  tags.reportValidity();
}

const validateTag = (tag) => {
  if (tag[0] !== '#') {
    return 'Теги должны начинаться с символа # (решётка)';
  }
  if (tag.length === 1) {
    return 'Хеш-тег не может состоять только из одной решётки';
  }
  if (!tag.slice(1).match(pattern)) {
    return 'Теги должны состоять только из букв и чисел';
  }
  if (tag.length > MAX_TAGS_LENGTH) {
    return `Слишком длинный Тег. Максимальная длина: ${MAX_TAGS_LENGTH}`;
  }
}

const validateTags = (tags) => {
  if (hasDuplicates(tags)) {
    return 'Удалите повторяющиеся теги';
  }
  if (tags.length > MAX_TAGS_COUNT) {
    return ` Нельзя указать больше ${MAX_TAGS_COUNT} хэш-тегов`;
  }
  for (let i = 0; i < tags.length; i++) {
    const validityMessage = validateTag(tags[i]);
    if (validityMessage) {
      return validityMessage;
    }
  }
}

const descriptionInputHandler = () => {
  if (description.value.length > MAX_DESCRIPTION_LENGTH) {
    description.setCustomValidity(`Длина комментария не может составлять больше ${MAX_DESCRIPTION_LENGTH}.`);
  } else {
    description.setCustomValidity('');
  }
}

export { tagsInputHandler, descriptionInputHandler }