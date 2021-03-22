import { getRandomInt, getRandomArrayElement } from './util.js'
import { POST_COMMENTS, USER_NAMES } from './data.js'

const MAX_VALUE = 4;
const MIN_VALUE = 1;

const generateComment = (i, index) => {
  return {
    id: index,
    avatar: `img/avatar-${getRandomInt(MIN_VALUE, MAX_VALUE)}.svg`,
    message: POST_COMMENTS[getRandomInt(MIN_VALUE, MAX_VALUE)],
    name: getRandomArrayElement(USER_NAMES, MAX_VALUE),
  }
}

export { generateComment }
