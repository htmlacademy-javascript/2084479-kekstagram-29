import { onEscForm } from './form.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const closePopup = () => {
  document.querySelector('.popup').remove();
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onClickOutside);
  document.addEventListener('keydown', onEscForm);
  document.body.classList.remove('modal-open');
};

const showPopupSuccess = () => {
  const successPopupElement = successTemplate.cloneNode(true);
  document.body.append(successPopupElement);
  successPopupElement.classList.add('popup');
  document.body.classList.add('modal-open');

  const closePopupSuccess = document.querySelector('.success__button');
  closePopupSuccess.addEventListener('click', closePopup());
  document.addEventListener('keydown', onEscKeydown);
  document.addEventListener('click', onClickOutside);
};

const showPopupError = () => {
  const errorPopupElement = errorTemplate.cloneNode(true);
  document.body.append(errorPopupElement);
  errorPopupElement.classList.add('popup');
  document.body.classList.add('modal-open');
};


function onEscKeydown(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
}

function onClickOutside(evt) {
  if (evt.target.classList.contains('overlay')) {
    closePopup();
  }
}

export {
  showPopupSuccess,
  showPopupError,
};
