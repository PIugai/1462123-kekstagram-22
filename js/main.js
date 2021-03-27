import { getData } from './api.js';
import { renderPosts } from './render-posts.js';
import { setUserFormSubmit } from './image-upload.js';
import './image-upload.js';
import './editor.js';

getData((data) => {
  renderPosts(data)
})
setUserFormSubmit();