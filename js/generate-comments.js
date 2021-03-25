import { POST_MESSAGES, USER_NAMES } from './data.js'
import { getRandomIntFromRange, getRandomArrayElement } from './util.js'

const MIN_COMMENT_COUNT = 0;
const MAX_COMMENT_COUNT = 5;
const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;

const generateComments = () => {
  const commentCount = getRandomIntFromRange(MIN_COMMENT_COUNT, MAX_COMMENT_COUNT);
  let comments = [];
  for (let i = 0; i < commentCount; i++) {
    comments.push({
      id: i,
      avatar: `img/avatar-${getRandomIntFromRange(MIN_AVATAR_ID, MAX_AVATAR_ID)}.svg`,
      message: getRandomArrayElement(POST_MESSAGES),
      name: getRandomArrayElement(USER_NAMES),
    });
  }
  return comments
}

export { generateComments }