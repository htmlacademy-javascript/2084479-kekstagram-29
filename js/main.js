import { getPhotos } from './data.js';
import { renderThumbnail } from './thumbnail.js';
import './form.js';


renderThumbnail(getPhotos());
