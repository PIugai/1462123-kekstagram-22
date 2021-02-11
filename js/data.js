import { getRandomInt, getRandomArrayElement, getUniqueRandomInteger } from './util';

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

const createComment = (id) => {
  return {
    id: getUniqueRandomInteger(MIN_VALUE, id),
    avatar: `img/avatar-${getUniqueRandomInteger(MIN_VALUE, MAX_VALUE)}.svg`,
    message: getRandomArrayElement(POST_COMMENTS, MAX_VALUE),
    name: getRandomArrayElement(USER_NAMES, MAX_VALUE),
  }
}


const createPost = (id) => {
  return {
    id: getUniqueRandomInteger(MIN_VALUE, id),
    url: `photos/${getUniqueRandomInteger(MIN_VALUE, id)}.jpg`,
    desc: getRandomArrayElement(POST_DESCRIPTIONS, MAX_VALUE),
    likes: getRandomInt(LIKES_MIN_VALUE, LIKES_MAX_VALUE),
    comments: new Array(getRandomInt(MIN_VALUE, MAX_VALUE)).fill(null).map(() => createComment(id)),
  }
}

export { createPost }
