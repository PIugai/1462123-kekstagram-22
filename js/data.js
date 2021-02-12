import { getRandomInt, getRandomArrayElement, getUniqueRandomInteger } from './util';
import createComment from './comment-creator'

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
