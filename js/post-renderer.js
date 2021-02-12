import { createPost } from './data'

const POST_AMOUNT = 25;

const getPosts = (total) => new Array(total).fill(null).map(() => createPost(total));

getPosts(POST_AMOUNT);


