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

const getRandomArrayElement = (elements, min) => {
  return elements[getRandomInt(min, elements.length - 1)];
}

const getUniqueRandomInteger = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomInt(min, max);
    if (previousValues.length >= max) {
      throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInt(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const isGreaterThanMaxStringLength = (input, max) => {
  if (typeof input === 'string' || input instanceof String) {
    return input.length <= max;
  }
  return 'Введен неверный формат данных.';
}

export { getRandomInt, getRandomArrayElement, getUniqueRandomInteger, isGreaterThanMaxStringLength }

