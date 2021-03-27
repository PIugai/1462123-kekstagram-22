import { isEscEvent } from './util.js';
import { listElement } from './render-posts.js';

const bigPicture = document.querySelector('.big-picture')
const socialCommentCountBlock = document.querySelector('.social__comment-count')
const commentsLoader = document.querySelector('.comments-loader')
const bodyContainer = document.querySelector('body')
const closeButton = bigPicture.querySelector('.big-picture__cancel');


const showBigPicture = (data) => {
  renderBigPicture(data)
  bigPicture.classList.remove('hidden')
  socialCommentCountBlock.classList.add('hidden')
  commentsLoader.classList.add('hidden')
  bodyContainer.classList.add('modal-open')
  closeButton.addEventListener('click', closeButtonHandler);
  document.addEventListener('keydown', keyDownHandler);
}

const renderBigPicture = ({ url, comments, likes, description }) => {
  const socialComments = bigPicture.querySelector('.social__comments');

  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url
  bigPicture.querySelector('.likes-count').innerText = likes
  bigPicture.querySelector('.comments-count').innerText = comments.length
  bigPicture.querySelector('.social__caption').innerText = description
  
  const commentsArray = comments.map((currentValue) => {
    return createComment(currentValue)
  });

  socialComments.innerHTML = commentsArray.join('');
}

const createComment = (object) => {
  return (
    `<li class="social__comment">
      <img
        class="social__picture"
        src="${object.avatar}"
        alt="${object.name}"
        width="35" height="35">
      <p class="social__text">
        ${object.message}
      </p>
    </li>`
  )
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
  document.removeEventListener('keydown', keyDownHandler);
  closeButton.removeEventListener('click', closeButtonHandler);
}

const closeButtonHandler = () => {
  hideBigPicture();
}

export { showBigPicture, bodyContainer }