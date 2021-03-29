import { isEscEvent } from './util.js';
import { listElement } from './render-posts.js'

const MAX_COMMENTS_COUNT = 5;

const bigPicture = document.querySelector('.big-picture')
const socialCommentCountBlock = document.querySelector('.social__comment-count')
const commentsLoader = document.querySelector('.comments-loader')
const bodyContainer = document.querySelector('body')
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentsShown = bigPicture.querySelector('.comments-shown');
const socialComments = bigPicture.querySelector('.social__comments');
const commentTemplate = socialComments.querySelector('.social__comment');
let commentsData = [];
let currentCommentsLength;
let shownCommentsCount;


const showBigPicture = (data) => {
  renderBigPicture(data)
  bigPicture.classList.remove('hidden')
  bodyContainer.classList.add('modal-open')
  closeButton.addEventListener('click', closeButtonHandler);
  document.addEventListener('keydown', keyDownHandler);
}

const createComment = ({avatar, name, message}) => {
  const commentElement = commentTemplate.cloneNode(true);
  const commentPicture = commentElement.querySelector('.social__picture');
  const commentText = commentElement.querySelector('.social__text');

  commentPicture.src = avatar;
  commentPicture.alt = name;
  commentText.textContent = message;

  return commentElement;
};

const createCommentsFragment = (commentsData) => {
  const fragment = document.createDocumentFragment();

  commentsData.forEach((comment) => {
    const newComment = createComment(comment);
    fragment.appendChild(newComment);
  })

  return fragment;
};

const createComments = (commentsData) => {
  const shownComments = commentsData.splice(0, MAX_COMMENTS_COUNT);
  const commentsFragment = createCommentsFragment(shownComments);

  socialComments.appendChild(commentsFragment);
};

const onCommentsLoaderClick = () => {
  if (commentsData.length === 0) {
    commentsLoader.classList.add('hidden');
    return;
  }
  createComments(commentsData);
  shownCommentsCount += MAX_COMMENTS_COUNT;

  if (shownCommentsCount >= currentCommentsLength) {
    shownCommentsCount = currentCommentsLength;
  }

  commentsShown.textContent = shownCommentsCount;

};

const renderBigPicture = ({ url, comments, likes, description }) => {

  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url
  bigPicture.querySelector('.likes-count').innerText = likes
  bigPicture.querySelector('.comments-count').innerText = currentCommentsLength = comments.length
  bigPicture.querySelector('.social__caption').innerText = description
  commentsData = comments.slice()
  if (comments.length > MAX_COMMENTS_COUNT) {
    commentsLoader.classList.remove('hidden');
    commentsLoader.addEventListener('click', onCommentsLoaderClick)
  } else {
    commentsLoader.classList.add('hidden')
  }
  shownCommentsCount = commentsData.length > MAX_COMMENTS_COUNT ? MAX_COMMENTS_COUNT : commentsData.length;
  commentsShown.textContent = shownCommentsCount;
  socialComments.innerHTML = '';
  createComments(commentsData);
}

const keyDownHandler = (evt) => {
  if (isEscEvent(evt)) {
    hideBigPicture();
  }
}

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  listElement.classList.remove('modal-open');
  socialCommentCountBlock.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  bodyContainer.classList.remove('modal-open')
  document.removeEventListener('keydown', keyDownHandler);
  closeButton.removeEventListener('click', closeButtonHandler);
}

const closeButtonHandler = () => {
  hideBigPicture();
}

export { showBigPicture, bodyContainer }