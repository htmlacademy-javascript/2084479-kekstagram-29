import { checkLength } from './utils.js';
import {
  MAX_DESCRIPTION_LENGTH,
  MAX_HASHTAGS_VOLUME,
  HASHTAG_SYMBOLS,
  MAX_HASHTAGS_LENGTH
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
  },
);

const validateDescription = (value) => checkLength(value, MAX_DESCRIPTION_LENGTH);

pristine.addValidator(
  descriptionField,
  validateDescription,
  `Длинна строки не должна превышать ${MAX_DESCRIPTION_LENGTH} символов`
);

const validateHashtagsVolume = (value) => value.replace(/ +/g, ' ').trim().split(' ').length <= MAX_HASHTAGS_VOLUME;

pristine.addValidator(
  hashtagsField,
  validateHashtagsVolume,
  `Количество хештегов не должно превышать ${MAX_HASHTAGS_VOLUME}`,

  true
);

const validateHashtag = (value) => {
  const tags = value.replace(/ +/g, ' ').trim().split(' ');
  return !tags.some((tag) => !HASHTAG_SYMBOLS.test(tag));
};

pristine.addValidator(
  hashtagsField,
  validateHashtag,
  `хэш-тег начинается с символа # (решётка);
  строка после решётки должна состоять из букв и чисел и не может содержать пробелы,
  спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
  хеш-тег не может состоять только из одной решётки;
  максимальная длина одного хэш-тега ${MAX_HASHTAGS_LENGTH} символов, включая решётку;`,

  true
);

const validateUniqueHashtag = (value) => {
  const tags = value.replace(/ +/g, ' ').trim().toLowerCase().split(' ');
  const uniqueTags = [...new Set(tags)];
  return tags.length === uniqueTags.length;
};

pristine.addValidator(
  hashtagsField,
  validateUniqueHashtag,
  'Хештег не должен повторяться',

  true
);

const validateForm = () => pristine.validate();

export { validateForm };
