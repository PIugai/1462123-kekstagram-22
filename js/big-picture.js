// удалять класс hidden у элемента .big-picture
const bigPicture = document.querySelector('.big-picture')
const socialCommentCountBlock = document.querySelector('.social__comment-count')
const commentsLoader = document.querySelector('.comments-loader')
const bodyContainer = document.querySelector('body')
// Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.
const initialBigPicture = (picturesData) => {
  const containerPictures = document.querySelector('.pictures');
  containerPictures.addEventListener('click', (evt) => {
    const pictureElement = evt.target;
    const CLASS_IMAGE = 'picture__img'
    if (pictureElement.classList.contains(CLASS_IMAGE)) {
      fullPicturePreView(pictureElement, picturesData)
    }
  })
}

const fullPicturePreView = (picture, picturesData) => {
  const pictureId = parseInt(picture.id)
  const pictureElementData = picturesData.find((data) => data.id === pictureId)
  renderBigPicture(pictureElementData)
  picturePreViewOpen()
  socialCommentCountBlock.classList.add('hidden')
  commentsLoader.classList.add('hidden')
  bodyContainer.classList.add('modal-open')
}

const renderBigPicture = ({ url, comments, likes, desc }) => {
  const socialComments = bigPicture.querySelector('.social__comments');

  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url
  bigPicture.querySelector('.likes-count').innerText = likes
  bigPicture.querySelector('.comments-count').innerText = comments.length
  bigPicture.querySelector('.social__caption').innerText = desc
  
  const commentsArray = comments.map((currentValue) => {
    return createComment(currentValue)
  });

  socialComments.innerHTML = commentsArray.join('');
}

const picturePreViewOpen = () => {
  bigPicture.classList.remove('hidden')
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

// Количество лайков likes подставьте как текстовое содержание элемента .likes-count.

// Количество комментариев comments подставьте как текстовое содержание элемента .comments-count.

export { initialBigPicture }