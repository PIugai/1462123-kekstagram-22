import { getDataAsync } from './api.js';
import { renderPosts } from './render-posts.js';
// import { mockData } from './generate-posts.js';
import { setUserFormSubmit } from './image-upload.js';
import { showUploadSuccessMessage } from './upload-message.js';
import './image-upload.js';
import './editor.js';

getDataAsync((data) => {
  renderPosts(data)
})
setUserFormSubmit(showUploadSuccessMessage);