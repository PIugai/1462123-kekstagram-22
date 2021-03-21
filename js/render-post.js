// import { fullPictureView } from './big-picture.js'

const similarListElement = document.querySelector('.pictures');
const similarPostTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderSimilarPost = (posts) => {
  const similarListFragment = document.createDocumentFragment();

  posts.forEach(({ url, desc, likes, comments, id }) => {
    const postElement = similarPostTemplate.cloneNode(true);
    const pictureImgElement = postElement.querySelector('.picture__img')
    pictureImgElement.src = url;
    pictureImgElement.alt = desc;
    postElement.querySelector('.picture__likes').innerText = likes;
    postElement.querySelector('.picture__comments').innerText = comments.length;
    pictureImgElement.id = id;
    similarListFragment.appendChild(postElement);
  });

  similarListElement.appendChild(similarListFragment);
};

export { renderSimilarPost }