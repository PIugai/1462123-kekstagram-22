import { generatePost } from './generate-post.js'

const renderPost = (total) => new Array(total).fill(null).map(() => generatePost(total));

export { renderPost }