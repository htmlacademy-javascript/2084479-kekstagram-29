import {
  POST_DATA_URL,
  GET_DATA_URL
} from './constants.js';

import { showAlert } from './utils.js';

const getPhotos = () =>
  fetch(GET_DATA_URL)
    .then((response) => {
      if (!response.ok) {
        showAlert('err');
        throw new Error();
      }
      response.json();
    })
    .catch();


const postPhoto = (body) =>
  fetch(POST_DATA_URL, {
    method: 'POST',
    body
  });

export {
  postPhoto,
  getPhotos
};
