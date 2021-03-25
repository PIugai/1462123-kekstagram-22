import { showBigPicture } from './big-picture.js'

const listElement = document.querySelector('.pictures');
const postTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPostElement = (element) => {
  const post = postTemplate.cloneNode(true);
  post.querySelector('.picture__img').src = element.url;
  post.querySelector('.picture__comments').textContent = element.comments.length;
  post.querySelector('.picture__likes').textContent = element.likes;
  post.id = element.id
  return post;
}

const renderPosts = (posts) => {
  const picturesSectionFragment = document.createDocumentFragment();
  posts.forEach((post) => {
    picturesSectionFragment.appendChild(createPostElement(post));
  });
  listElement.appendChild(picturesSectionFragment);
  listElement.addEventListener('click', postClickHandler);
}

const postClickHandler = (evt) => {
  if (evt.target.classList.contains('picture__img')) {
    showBigPicture(evt);
  }
}

export { renderPosts, listElement }