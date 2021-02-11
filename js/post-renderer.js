import { createPost } from './data'

const getPosts = (total) => new Array(total).fill(null).map(() => createPost(total));

getPosts(25)


