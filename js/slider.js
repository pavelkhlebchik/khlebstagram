'use strict';

(function () {
  const initSlider = (someFunction) => {
    someFunction = () => {

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
    };
  };
})();
