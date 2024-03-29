import { openBigPicture } from './big-picture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');
const pictureFragment = document.createDocumentFragment();

const photos = [];

const clearContainer = () => {
  document.querySelectorAll('.picture').forEach((item) => {
    item.remove();
  });
};

const renderThumbnail = (pictures) => {
  photos.length = 0;
  photos.push(...pictures.slice());
  clearContainer();
  pictures.forEach((element) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.dataset.id = element.id;
    pictureElement.querySelector('.picture__img').src = element.url;
    pictureElement.querySelector('.picture__img').alt = element.description;
    pictureElement.querySelector('.picture__comments').textContent = element.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = element.likes;
    pictureFragment.append(pictureElement);
  });

  pictureContainer.append(pictureFragment);
};

pictureContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('picture__img')) {
    const id = evt.target.closest('.picture').dataset.id;
    openBigPicture(photos.find((item) => item.id === id * 1));
  }
});

export { renderThumbnail };
