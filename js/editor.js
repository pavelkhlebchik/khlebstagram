'use strict';

(function () {
  const imgUpload = document.querySelector(`.img-upload__overlay`);
  const scaleControlSmaller = imgUpload.querySelector(`.scale__control--smaller`);
  const scaleControlBigger = imgUpload.querySelector(`.scale__control--bigger`);
  const scaleControlValue = imgUpload.querySelector(`.scale__control--value`);
  const previewImg = imgUpload.querySelector(`.img-upload__preview img`);

  const counter = () => {
    const maxScaleValue = 100;
    const scaleStep = 25;
    let counterDefaultValue = 100;
    scaleControlValue.value = 100 + `%`;

    scaleControlBigger.addEventListener(`click`, function () {
      if (counterDefaultValue < maxScaleValue) {
        counterDefaultValue += scaleStep;
        scaleControlValue.value = counterDefaultValue + `%`;
        previewImg.style.transform = `scale(${scaleControlValue.value})`;
      }
    });

    scaleControlSmaller.addEventListener(`click`, function () {
      if (counterDefaultValue && counterDefaultValue > scaleStep) {
        counterDefaultValue -= scaleStep;
        scaleControlValue.value = `${counterDefaultValue}%`;
        previewImg.style.transform = `scale(${counterDefaultValue / 100})`;
      }
    });
  };

  counter();

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
      effectLevelDepth.style.
        width = leftLimit + `px`;
      console.log(leftLimit);
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
