'use strict';

(function () {
  const pictures = picturesContainer.querySelectorAll(`.picture`);

  const showPictures = function () {
    for (let i = 0; i < pictures.length; i++) {
      pictures[i].addEventListener(`click`, function () {
        showBigPictureInfo(posts[i]);
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
