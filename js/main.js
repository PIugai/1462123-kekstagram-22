import { generatePost } from './generate-post.js'
import { renderSimilarPost } from './render-post.js'
import { initialBigPicture } from './big-picture.js'

const POST_AMOUNT = 25;

const posts = new Array(POST_AMOUNT).fill(null).map((i, index) => generatePost(i, index));

renderSimilarPost(posts);
initialBigPicture(posts);