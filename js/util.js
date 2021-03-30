const getRandomIntFromRange = (min, max) => {
  if (max <= min) {
    return 'Максимальное значени должно быть больше минимального.';
  } else if (min >= 0 && max >= 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  return 'Диапазон может быть только положительный, включая ноль.';
}

const getRandomArrayElement = (array) => {
  return array[getRandomIntFromRange(0, array.length - 1)];
}

const isGreaterThanMaxStringLength = (input, max) => {
  if (typeof input === 'string' || input instanceof String) {
    return input.length <= max;
  }
  return 'Введен неверный формат данных.';
}

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
}

const hasDuplicates = (array) => {
  return new Set(array).size !== array.length 
}

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
}

const useDebounce = (cb, timeout) => {
  let timer;
  return (...args) => {
    const callBack = () => cb.apply(this, args);
    clearTimeout(timer);
    timer = setTimeout(callBack, timeout);
  };
};

export { getRandomIntFromRange, getRandomArrayElement, isGreaterThanMaxStringLength, isEscEvent, hasDuplicates, shuffleArray, useDebounce }
