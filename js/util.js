const getRandomInt = (min, max) => {
  if (max <= min) {
    return 'Максимальное значени должно быть больше минимального.';
  } else if (min >= 0 && max >= 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  return 'Диапазон может быть только положительный, включая ноль.';
}

const getRandomArrayElement = (elements, MIN_VALUE) => {
  return elements[getRandomInt(MIN_VALUE, elements.length - 1)];
}

const isGreaterThanMaxStringLength = (input, max) => {
  if (typeof input === 'string' || input instanceof String) {
    return input.length <= max;
  }
  return 'Введен неверный формат данных.';
}

isGreaterThanMaxStringLength( 'Hello World', 2 );

export { getRandomInt, getRandomArrayElement }

