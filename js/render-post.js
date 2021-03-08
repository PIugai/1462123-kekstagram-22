import { generatePost } from './generate-post.js'

const renderPost = (total) => new Array(total).fill(null).map((i) => generatePost(i));

export { renderPost }