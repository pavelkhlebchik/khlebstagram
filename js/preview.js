'use strict';

const showBigPictureInfo = function (info) {
  bigPicture.querySelector(`.big-picture__img img`).src = info.url;
  bigPicture.querySelector(`.social__caption`).textContent = info.description;
  bigPicture.querySelector(`.comments-count`).textContent = comments.length;
  bigPicture.querySelector(`.likes-count`).textContent = info.likes;
};


const showCommentInfo = function (comment) {
  const commentInfo = socialComment.cloneNode(true);
  commentInfo.querySelector(`.social__picture`).src = comment.avatar;
  commentInfo.querySelector(`.social__text`).textContent = comment.message;
  commentInfo.querySelector(`.social__picture`).alt = comment.name;


  return commentInfo;
};

const renderComments = function () {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < comments.length; i++) {
    fragment.appendChild(showCommentInfo(comments[i]));
  }
  socialCommentsList.appendChild(fragment);
};

renderComments();
