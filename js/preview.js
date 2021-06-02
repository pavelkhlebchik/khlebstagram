'use strict';

(function () {
  const bigPicture = document.querySelector(`.big-picture`);
  const socialCommentsList = bigPicture.querySelector(`.social__comments`);
  const socialComment = document.querySelector(`#comment`)
    .content;

  const showCommentInfo = function (comment) {
    const commentInfo = socialComment.cloneNode(true);
    commentInfo.querySelector(`.social__picture`).src = comment.avatar;
    commentInfo.querySelector(`.social__text`).textContent = comment.message;
    commentInfo.querySelector(`.social__picture`).alt = comment.name;


    return commentInfo;
  };
  const comments = window.picture.generateComments();
  const renderComments = function () {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < comments.length; i++) {
      fragment.appendChild(showCommentInfo(comments[i]));
    }
    socialCommentsList.appendChild(fragment);
  };

  renderComments();
})();
