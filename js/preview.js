'use strict';
(function () {
  const imgUpload = document.querySelector(`.img-upload__overlay`);
  const scaleControlSmaller = imgUpload.querySelector(`.scale__controll--smaller`);
  const scaleControlBigger = imgUpload.querySelector(`.scale__controll--bigger`);
  const scaleControlValue = imgUpload.querySelector(`.scale__controll--value`);

  const effectLevelPin = imgUpload.querySelector(`.effect-level__pin`);
  const effectLevelDepth = imgUpload.querySelector(`.effect-level__depth`);
  const effectLevelValue = imgUpload.querySelector(`.effect-level__value`);
  const effectContainer = imgUpload.querySelector(`.effect-level__line`);

  effectLevelPin.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
    };

    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      const shift = {
        x: startCoords.x - moveEvt.clientX
      };

      startCoords = {
        x: moveEvt.clientX
      };

      let leftLimit = startCoords.x - shift.x - effectContainer.getBoundingClientRect().left;

      if (leftLimit < 0) {
        leftLimit = 0;
      }

      let rightLimit = effectContainer.offsetWidth;

      if (leftLimit > rightLimit) {
        leftLimit = rightLimit;
      }

      effectLevelPin.style.left = leftLimit + `px`;
      effectLevelDepth.style.width = leftLimit + `px`;
    };

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });
})();
