'use strict';

(function () {
  const imgUpload = document.querySelector(`.img-upload__overlay`);
  const effectItem = imgUpload.querySelectorAll(`.effects__item`);
  const previewImg = imgUpload.querySelector(`.img-upload__preview img`);


  const getEffects = () => {
    for (let filter of effectItem) {
      filter.addEventListener(`click`, function () {
        switch (filter.firstElementChild.id) {
          case `effect-none`:
            previewImg.className = `effects__preview--none`;
            break;
          case `effect-chrome`:
            previewImg.className = `effects__preview--chrome`;
            break;
          case `effect-sepia`:
            previewImg.className = `effects__preview--sepia`;
            break;
          case `effect-marvin`:
            previewImg.className = `effects__preview--marvin`;
            break;
          case `effect-phobos`:
            previewImg.className = `effects__preview--phobos`;
            break;
          case `effect-heat`:
            previewImg.className = `effects__preview--heat`;
            break;
          default:
            previewImg.className = `effects__preview--none`;
            break;
        }
      });
    }
  };

  getEffects();
})();
