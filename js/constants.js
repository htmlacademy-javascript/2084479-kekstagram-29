const COMMENTS_DOSE = 5;

const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASHTAGS_VOLUME = 5;

const HASHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const ALERT_SHOW_TIME = 5000;

const POST_DATA_URL = 'https://29.javascript.pages.academy/kekstagram';
const GET_DATA_URL = 'https://29.javascript.pages.academy/kekstagram/data';

const SUBMIT_BUTTON_TEXT = {
  IDLE: 'Опубликовать',
  SENDING: 'Загрузка...'
};


export {
  COMMENTS_DOSE,
  MAX_DESCRIPTION_LENGTH,
  MAX_HASHTAGS_VOLUME,
  HASHTAG_SYMBOLS,
  SCALE_STEP,
  MIN_SCALE,
  MAX_SCALE,
  POST_DATA_URL,
  GET_DATA_URL,
  SUBMIT_BUTTON_TEXT,
  ALERT_SHOW_TIME
};
