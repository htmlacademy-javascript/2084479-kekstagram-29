import { onEscForm } from './form.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const showPopupSuccess = () => {
  const successPopupElement = successTemplate.cloneNode(true);
  document.body.append(successPopupElement);
  successPopupElement.classList.add('popup');

  const closeButtonSuccess = document.querySelector('.success__button');
  closeButtonSuccess.addEventListener('click', closePopup);
  document.addEventListener('keydown', onEscKeydown);
  document.addEventListener('click', onClickOutside);
};

const showPopupError = () => {
  const errorPopupElement = errorTemplate.cloneNode(true);
  document.body.append(errorPopupElement);
  errorPopupElement.classList.add('popup');

  const closeButtonError = document.querySelector('.error__button');
  closeButtonError.addEventListener('click', closePopup);
  document.addEventListener('keydown', onEscKeydown);
  document.addEventListener('click', onClickOutside);

};

function closePopup() {
  document.querySelector('.popup').remove();
  document.removeEventListener('keydown', onEscKeydown);
}

function onEscKeydown(evt) {
  if (evt.key === 'Escape') {
    closePopup();
    document.addEventListener('keydown', onEscForm);
  }
}

function onClickOutside(evt) {
  if (evt.target.classList.contains('success') || evt.target.classList.contains('error')) {
    closePopup();
  }
}

export {
  showPopupSuccess,
  showPopupError,
};
