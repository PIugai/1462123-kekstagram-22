import { getRandomArrayElement, getRandomIntFromRange } from './util.js';
import { generateComments } from './generate-comments.js'
import { POST_DESCRIPTIONS } from './data.js'

const POST_COUNT = 25;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;

const generatePosts = () => {
  let posts = [];
  for (let i = 0; i <= POST_COUNT; i++) {
    posts.push({
      id: i,
      url: `photos/${getRandomIntFromRange(1, POST_COUNT)}.jpg`,
      desc: getRandomArrayElement(POST_DESCRIPTIONS),
      likes: getRandomIntFromRange(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
      comments: generateComments(),
    })
  }
  return posts
}

const mockData = generatePosts()

export { mockData }