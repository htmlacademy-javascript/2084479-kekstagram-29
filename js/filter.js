import { renderThumbnail } from './thumbnail.js';
import {
  RANDON_PHOTOS_NUMBER,
  RERENDER_DELAY
} from './constants.js';
import { debounce } from './utils.js';

const filterBlock = document.querySelector('.img-filters');

const showFilters = () => {
  filterBlock.classList.remove('img-filters--inactive');
};

const setFiltersButton = (filtersButton) => {
  document.querySelector('.img-filters__button--active')
    .classList.remove('img-filters__button--active');

  filtersButton.classList.add('img-filters__button--active');
};

const filterPhotos = (filter, photos) => {
  switch (filter) {
    case 'filter-default':
      return photos;

    case 'filter-random':
      return [...photos]
        .sort(() => Math.random() - 0.5)
        .slice(0, RANDON_PHOTOS_NUMBER);

    case 'filter-discussed':
      return [...photos]
        .sort((a, b) => b.comments.length - a.comments.length);
  }
};

const setFilters = (photos) => {
  showFilters();
  renderThumbnail(photos);

  filterBlock.addEventListener('click', debounce((evt) => {
    if (evt.target.classList.contains('img-filters__button')) {
      const id = evt.target.id;
      renderThumbnail(filterPhotos(id, photos));
      setFiltersButton(evt.target);
    }
  }, RERENDER_DELAY));
};

export { setFilters };
