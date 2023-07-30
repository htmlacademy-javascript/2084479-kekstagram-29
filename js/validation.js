import { checkLength } from './utils.js';
import {
  MAX_DESCRIPTION_LENGTH,
  MAX_HASHTAGS_VOLUME,
  HASHTAG_SYMBOLS,
  ErrorText
} from './constants.js';

const uploadForm = document.querySelector('.img-upload__form');
const hashtagsField = document.querySelector('.text__hashtags');
const descriptionField = document.querySelector('.text__description');

const pristine = new Pristine(
  uploadForm,
  {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextTag: 'p',
    errorTextClass: 'form__error'
  }
);

const getTagsArray = (value) => value.replace(/ +/g, ' ')
  .trim()
  .toLowerCase()
  .split(' ');

const validateDescription = (value) => checkLength(value, MAX_DESCRIPTION_LENGTH);

pristine.addValidator(
  descriptionField,
  validateDescription,
  `Длинна строки не должна превышать ${MAX_DESCRIPTION_LENGTH} символов`
);

const validateHashtagsVolume = (value) => getTagsArray(value).length <= MAX_HASHTAGS_VOLUME;

pristine.addValidator(
  hashtagsField,
  validateHashtagsVolume,
  ErrorText.INVALID_COUNT,
  3,
  true
);

const validateHashtag = (value) => {
  const tags = getTagsArray(value);
  return !value.length ? true : !tags.some((tag) => !HASHTAG_SYMBOLS.test(tag));
};

pristine.addValidator(
  hashtagsField,
  validateHashtag,
  ErrorText.NOT_UNIQUE,
  2,
  true
);

const validateUniqueHashtag = (value) => {
  const tags = getTagsArray(value);
  const uniqueTags = [...new Set(tags)];
  return tags.length === uniqueTags.length;
};

pristine.addValidator(
  hashtagsField,
  validateUniqueHashtag,
  ErrorText.INVALID_PATTERN,
  1,
  true
);

const validateForm = () => pristine.validate();

export {
  validateForm,
  pristine
};
