import { generatePost } from './generate-post.js'
const POST_AMOUNT = 25;

const renderPost = (total) => new Array(total).fill(null).map((i, index) => generatePost(i, index));

const similarListElement = document.querySelector('.pictures');
const similarPostTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarPosts = renderPost(POST_AMOUNT);
console.log(similarPosts)

const renderSimilarPost = () => {
  const similarListFragment = document.createDocumentFragment();

  similarPosts.forEach(({url, desc, likes}) => {
    const postElement = similarPostTemplate.cloneNode(true);
    postElement.querySelector('.picture__img')["src"] = url;
    postElement.querySelector('.picture__img')["alt"] = desc;
    postElement.querySelector('.picture__likes').innerText = likes;
    similarListFragment.appendChild(postElement);
  });
  
  similarListElement.appendChild(similarListFragment);
};

export { renderSimilarPost }