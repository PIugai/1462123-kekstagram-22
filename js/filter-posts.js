import { renderPosts } from './render-posts.js';
import { debounce, shuffleArray } from './util.js'

const RENDER_DELAY = 500;
const RANDOM_POSTS_COUNT = 10;

const imageFilters = document.querySelector('.img-filters');
const imageFiltersForm = document.querySelector('.img-filters__form');
const imageFiltersButton = document.querySelectorAll('.img-filters__button');


const showFilters = () => {
  imageFilters.classList.remove('img-filters--inactive');
};

const clearPosts = () => {
  const previousPosts = document.querySelectorAll('.picture');
  previousPosts.forEach(post => post.remove());
};

const getRandomPosts = (posts) => {
  const copyPosts = posts.slice();
  const randomPosts = shuffleArray(copyPosts).slice(RANDOM_POSTS_COUNT);
  renderPosts(randomPosts.slice(0, RANDOM_POSTS_COUNT));
};

const sortPostsByComments = (posts) => {
  const sortedPosts = posts.slice().sort((postA, postB) => postB.comments.length - postA.comments.length);
  renderPosts(sortedPosts);
};

const onFilterFormChange = (evt, posts) => {
  if (evt.target.classList.contains('img-filters__button--active') || !evt.target.classList.contains('img-filters__button')) {
    return;
  }
  imageFiltersButton.forEach(button => button.classList.remove('img-filters__button--active'));
  evt.target.classList.add('img-filters__button--active');
  switch (evt.target.id) {
    case 'filter-default':
      clearPosts();
      renderPosts(posts);
      break;
    case 'filter-random':
      clearPosts();
      getRandomPosts(posts)
      break;
    case 'filter-discussed':
      clearPosts();
      sortPostsByComments(posts)
      break;
  }
};

const setPictureFilter = (data) => {
  imageFiltersForm.addEventListener('click', debounce((evt) => onFilterFormChange(evt, data), RENDER_DELAY))
};

export { showFilters, setPictureFilter };