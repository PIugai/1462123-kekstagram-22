// Constants
const PHOTO_POST_COUNT = 25;
const MAX_VALUE = 5;
const MIN_VALUE = 1;
const LIKES_MIN_VALUE = 15;
const LIKES_MAX_VALUE = 200;

const POST_DESCRIPTIONS = [
  'В жизни каждого человека есть радостные мгновения, которые хочется навсегда сохранить в памяти.',
  'Безусловно, лучшие моменты весёлого приключения хочется запечатлеть на фотоаппарат, чтобы сохранить надолго в памяти.',
  'Рассматривая снимок, погружаешься в атмосферу тёплых летних дней, проведённых с друзьями.',
  'Фотографии помогают на мгновение остановить время — надолго сохранить в памяти моменты, связанные с приятными событиями.',
];

const POST_COMMENTS = [
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Главное - верить в себя. Мнение окружающих меняется ежедневно',
];

const USER_NAMES = [
  'Андрей',
  'Виталий',
  'Екатерина',
  'Михаил',
  'Иван',
];

// Funtions Helpers
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

const isGreaterThanMaxStringLength = (input, max) => {
  if (typeof input === 'string' || input instanceof String) {
    return input.length <= max;
  }
  return 'Введен неверный формат данных.';
}

// Posts Creation Functions
const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(MIN_VALUE, elements.length - 1)];
}

const createComment = (id) => {
  return {
    id: id,
    avatar: `img/avatar-${getRandomInt(MIN_VALUE, MAX_VALUE)}.svg`,
    message: getRandomArrayElement(POST_COMMENTS),
    name: getRandomArrayElement(USER_NAMES),
  }
}


const createPost = (id) => {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    desc: getRandomArrayElement(POST_DESCRIPTIONS),
    likes: getRandomInt(LIKES_MIN_VALUE, LIKES_MAX_VALUE),
    comments: new Array(getRandomInt(MIN_VALUE, MAX_VALUE)).fill(null).map(() => createComment(id)),
  }
}

const getPosts = (PHOTO_POST_COUNT) => new Array(PHOTO_POST_COUNT).fill(null).map(() => createPost(getRandomInt(MIN_VALUE, PHOTO_POST_COUNT)));

isGreaterThanMaxStringLength(1,2);
getPosts(PHOTO_POST_COUNT);
