import { getDataAsync } from './api.js';
import { renderPosts } from './render-posts.js';
import { setUserFormSubmit } from './image-upload.js';

import './image-upload.js';
import './editor.js';

getDataAsync((data) => {
  renderPosts(data)
})
setUserFormSubmit();