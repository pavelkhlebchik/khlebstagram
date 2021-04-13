'use strict';

(function () {
  const imgUpload = document.querySelector(`.img-upload__overlay`);
  const hashtagInput = imgUpload.querySelector(`.text__hashtags`);
  const hashtagValidator = function () {
    const regExForAllSymbol = /(?:^|)[a-zA-Z0-9А-Яа-я\W][^\s]+(?:$|)/g;
    const regExForHashtag = /(?:^|)#[a-zA-Z0-9А-Яа-я\_]+(?:$|)/g;
    const allValuesInHashtagInput = hashtagInput.value.match(regExForAllSymbol) || [];
    const allHashtags = hashtagInput.value.match(regExForHashtag) || [];
    const uniqHashtags = allHashtags.reduce((uniq, item) => {
      item = item.toLowerCase();
      return uniq.includes(item) ? uniq : [...uniq, item];
    }, []);

    if (allHashtags.some((hashtag) => hashtag.length >= 21)) {
      hashtagInput.setCustomValidity(
          `Максимальное количество символов хештега - 20`
      );
    } else if (uniqHashtags.length !== allHashtags.length) {
      hashtagInput.setCustomValidity(`Хештеги не должны быть одинаковыми`);
    } else if (allHashtags.length >= 6) {
      hashtagInput.setCustomValidity(`Максимальное количество хештегов - 5`);
    } else if (allHashtags < allValuesInHashtagInput) {
      hashtagInput.setCustomValidity(`Хештег должен начинаться с #, не должен быть пустым и не содержать символы "!@$%^&*"`);
    } else {
      hashtagInput.setCustomValidity(``);
    }
  };


  hashtagInput.addEventListener(`input`, function () {
    hashtagValidator();
  });
})();
