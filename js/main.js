import { getData } from './api.js'
import { renderPosts } from './render-posts.js';
import { mockData } from './generate-posts.js';
import './image-upload.js';
import './editor.js';

// renderPosts(mockData);

getData((posts) => {
  renderPosts(posts);
});