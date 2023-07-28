import { validateForm } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import {
  showPopupSuccess,
  showPopupError,
} from './popups.js';
import { SUBMIT_BUTTON_TEXT } from './constants.js';

const uploadControl = document.querySelector('.img-upload__input');
const uploadModal = document.querySelector('.img-upload__overlay');
const uploadModalImage = uploadModal.querySelector('.img-upload__preview img');
const uploadModalEffectsControlIcons = uploadModal.querySelectorAll('.effects__preview');
const uploadModalCancel = document.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');

const renderPreviewImage = () => {
  const fileImage = uploadControl.files[0];
  uploadModalImage.src = URL.createObjectURL(fileImage);
  uploadModalEffectsControlIcons.forEach((icon) => {
    icon.style.backgroundImage = `url("${URL.createObjectURL(fileImage)}")`;
  });
};

const showModal = () => {
  uploadModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  renderPreviewImage();
  document.addEventListener('keydown', onEscForm);
  uploadModal.addEventListener('click', onClickOutside);
  resetScale();
  resetEffects();
};

const closeModal = () => {
  uploadModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadForm.reset();
  document.removeEventListener('keydown', onEscForm);
  uploadModal.removeEventListener('click', onClickOutside);
};

const disabledSubmitButton = () => {
  submitButton.textContent = SUBMIT_BUTTON_TEXT.SENDING;
  submitButton.disabled = true;
};

const enabledSubmitButton = () => {
  submitButton.textContent = SUBMIT_BUTTON_TEXT.IDLE;
  submitButton.disabled = false;
};

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (validateForm()) {
    evt.preventDefault();
    disabledSubmitButton();

    postPhoto(new FormData(evt.target))
      .then((response) => {
        if (response.ok) {
        showPopupSuccess();
        closeModal();
      } else {
        showPopupError();
        document.removeEventListener('keydown', onEscForm);
      }
    })
    .catch(() => {
      showPopupError();
      document.removeEventListener('keydown', onEscForm);
    })
    .finally(() => {
        enabledSubmitButton();
    });
  }
});

uploadControl.addEventListener('change', () => {
  showModal();
});

uploadModalCancel.addEventListener('click', () => {
  closeModal();
});

function onEscForm(evt) {
  const isFocusedInput = evt.target.classList.contains('text__hashtags') || evt.target.classList.contains('text__description');
  if (isFocusedInput) {
    return false;
  }
  if (evt.key === 'Escape') {
    closeModal();
  }
}

function onClickOutside(evt) {
  if (evt.target.classList.contains('img-upload__overlay')) {
    closeModal();
  }
}

export { onEscForm };
