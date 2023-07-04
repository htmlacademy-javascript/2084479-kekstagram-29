const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureTitle = bigPicture.querySelector('.social__caption');
const bigPictureComments = bigPicture.querySelector('.comments-count');
const bigPictureCommentItem = bigPicture.querySelector('.social__comment');
const bigPictureCommentContainer = bigPicture.querySelector('.social__comments');

const renderComment = (comment) => {
  const commentElement = bigPictureCommentItem.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((item) => {
    fragment.append(renderComment(item));
  });
  bigPictureCommentContainer.innerHTML = '';
  bigPictureCommentContainer.append(fragment);
};

const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  bigPictureImage.src = photo.url;
  bigPictureLikes.textContent = photo.likes;
  bigPictureTitle.textContent = photo.description;
  bigPictureComments.textContent = photo.comments.length;
  renderComments(photo.comments);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
};

closeButton.addEventListener('click', () => {
  closeBigPicture();
});

export { openBigPicture };
