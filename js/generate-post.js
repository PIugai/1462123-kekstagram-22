import { getRandomInt } from './util.js';
import { generateComment } from './generate-comment.js'
import { POST_DESCRIPTIONS } from './data.js'

const MAX_VALUE = 5;
const MIN_VALUE = 0;
const LIKES_MIN_VALUE = 15;
const LIKES_MAX_VALUE = 200;

const generatePost = (i, index) => {
  return {
    id: index,
    url: `photos/${getRandomInt((MIN_VALUE + 1), index + 2)}.jpg`,
    desc: POST_DESCRIPTIONS[getRandomInt(MIN_VALUE, MAX_VALUE)],
    likes: getRandomInt(LIKES_MIN_VALUE, LIKES_MAX_VALUE),
    comments: new Array(getRandomInt(MIN_VALUE, MAX_VALUE)).fill(null).map((i, index) => generateComment(i, index)),
  }
}

export { generatePost }