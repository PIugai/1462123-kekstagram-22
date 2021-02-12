import { getUniqueRandomInteger, getRandomArrayElement } from './util'

const MAX_VALUE = 5;
const MIN_VALUE = 1;

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

export default createComment
