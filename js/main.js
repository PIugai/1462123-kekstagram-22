import { getData } from './api.js';
import { renderPosts } from './render-posts.js';
import { showFilters, setPictureFilter } from './filter-posts.js';
import { setUserFormSubmit } from './image-upload.js';
import './image-upload.js';
import './editor.js';

getData((data) => {
  renderPosts(data)
  showFilters()
  setPictureFilter(data);
})

setUserFormSubmit();