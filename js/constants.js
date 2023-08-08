const COMMENTS_DOSE = 5;

const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASHTAGS_VOLUME = 5;

const HASHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const ErrorText = {
  INVALID_COUNT: `Количество хештегов не должно превышать ${MAX_HASHTAGS_VOLUME}`,
  NOT_UNIQUE: 'Введён невалидный хэш-тег',
  INVALID_PATTERN: 'Хештег не должен повторяться'
};

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const EffectsOptions = {
  CHROME: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  SEPIA: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
  },
  MARVIN: {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    start: 100,
  },
  PHOBOS: {
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    start: 3,
  },
  HEAT: {
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    start: 3,
  }
};

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Загрузка...'
};

const ALERT_SHOW_TIME = 5000;

const POST_DATA_URL = 'https://29.javascript.pages.academy/kekstagram';
const GET_DATA_URL = 'https://29.javascript.pages.academy/kekstagram/data';

const ERROR_MESSAGE = 'Ошибка загрузки сервера';

const RANDON_PHOTOS_NUMBER = 10;

const RERENDER_DELAY = 500;

export {
  COMMENTS_DOSE,
  MAX_DESCRIPTION_LENGTH,
  MAX_HASHTAGS_VOLUME,
  ErrorText,
  EffectsOptions,
  HASHTAG_SYMBOLS,
  SCALE_STEP,
  MIN_SCALE,
  MAX_SCALE,
  POST_DATA_URL,
  GET_DATA_URL,
  SubmitButtonText,
  ALERT_SHOW_TIME,
  ERROR_MESSAGE,
  RANDON_PHOTOS_NUMBER,
  RERENDER_DELAY
};
