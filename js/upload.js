'use strict';
(function () {
  const uploadFile = document.querySelector(`#upload-file`);
  const uploadCancel = document.querySelector(`#upload-cancel`);
  const imgUpload = document.querySelector(`.img-upload__overlay`);
  const hashtagInput = imgUpload.querySelector(`.text__hashtags`);
  const body = document.querySelector(`body`);

  const onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  const openPopup = function () {
    imgUpload.classList.remove(`hidden`);
    body.classList.add(`modal-open`);
    document.addEventListener(`keydown`, onPopupEscPress);
  };

  const closePopup = function () {
    imgUpload.classList.add(`hidden`);
    body.classList.remove(`modal-open`);
    uploadFile.value = ``;
    document.removeEventListener(`keydown`, onPopupEscPress);
  };

  uploadFile.addEventListener(`change`, function () {
    openPopup();
  });

  uploadCancel.addEventListener(`click`, function () {
    closePopup();
  });

  hashtagInput.addEventListener(`focus`, function () {
    document.removeEventListener(`keydown`, onPopupEscPress);
  });

  hashtagInput.addEventListener(`blur`, function () {
    document.addEventListener(`keydown`, onPopupEscPress);
  });
})();
