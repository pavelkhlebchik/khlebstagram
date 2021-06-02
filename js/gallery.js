'use strict';

(function () {
  const body = document.querySelector(`body`);
  const picturesContainer = document.querySelector(`.pictures`);
  const pictures = picturesContainer.querySelectorAll(`.picture`);
  const bigPicture = document.querySelector(`.big-picture`);
  // const socialCommentsCount = bigPicture.querySelector(`.social__comment-count`);
  // const commentsLoader = bigPicture.querySelector(`.comments-loader`);
  const closeBigPicture = bigPicture.querySelector(`.big-picture__cancel`);

  const showBigPictureInfo = function (info) {
    bigPicture.querySelector(`.big-picture__img img`).src = info.url;
    bigPicture.querySelector(`.social__caption`).textContent = info.description;
    bigPicture.querySelector(`.comments-count`).textContent = window.picture.generateComments().length;
    bigPicture.querySelector(`.likes-count`).textContent = info.likes;
  };

  const showPictures = function () {
    for (let i = 0; i < pictures.length; i++) {
      pictures[i].addEventListener(`click`, function () {
        showBigPictureInfo(window.picture.generatePosts()[i]);
        bigPicture.classList.remove(`hidden`);
        body.classList.add(`modal-open`);
      });
      closeBigPicture.addEventListener(`click`, function () {
        bigPicture.classList.add(`hidden`);
        body.classList.remove(`modal-open`);
      });
    }
  };

  showPictures();
})();
