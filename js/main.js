'use strict';

const commentatorNames = [
  `Ника`,
  `Геннадий`,
  `Варвара`,
  `Евгений`,
  `Егор`,
  `Паша`,
  `Нина`
];

const commentMessage = [
  `Всё отлично!`,
  `В целом всё неплохо. Но не всё.`,
  `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`,
  `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`,
  `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`,
  `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`,
];

const pictureTemplate = document.querySelector(`#picture`)
  .content;
const picturesContainer = document.querySelector(`.pictures`);

const bigPicture = document.querySelector(`.big-picture`);
const socialCommentsList = bigPicture.querySelector(`.social__comments`);
const socialComment = bigPicture.querySelector(`.social__comment`);
const socialCommentsCount = bigPicture.querySelector(`.social__comment-count`);
const commentsLoader = bigPicture.querySelector(`.comments-loader`);
const body = document.querySelector(`body`);

// const closePicture = bigPicture.querySelector(`.big-picture__cancel`);

const randomNumbers = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generatePosts = function () {
  const post = [];

  for (let i = 1; i <= 25; i++) {
    post.push({
      url: `photos/${i}.jpg`,
      description: `Тестим новую камеру! =)`,
      likes: `${randomNumbers(15, 200)}`,
      comments: `${generateComments().length}`,
    });
  }
  return post;
};

const generateComments = function () {
  const comments = [];
  for (let i = 1; i <= randomNumbers(1, 6); i++) {
    comments.push({
      avatar: `img/avatar-${i}.svg`,
      message: commentMessage[randomNumbers(0, 5)],
      name: commentatorNames[randomNumbers(0, 6)]
    });
  }
  return comments;
};

const posts = generatePosts();
const comments = generateComments();

const createPost = function (post) {
  const postElement = pictureTemplate.cloneNode(true);
  postElement.querySelector(`.picture__img`).src = post.url;
  postElement.querySelector(`.picture__likes`).textContent = post.likes;
  postElement.querySelector(`.picture__comments`).textContent = post.comments;

  return postElement;
};

const renderPosts = function () {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < posts.length; i++) {
    fragment.appendChild(createPost(posts[i]));
  }
  picturesContainer.appendChild(fragment);
};

renderPosts();

const showBigPicture = function (info) {
  bigPicture.classList.remove(`hidden`);
  socialCommentsCount.classList.add(`hidden`);
  commentsLoader.classList.add(`hidden`);
  body.classList.add(`modal-open`);
  bigPicture.querySelector(`.big-picture__img img`).src = info.url;
  bigPicture.querySelector(`.social__caption`).textContent = info.description;
  bigPicture.querySelector(`.likes-count`).textContent = info.likes;
  bigPicture.querySelector(`.comments-count`).textContent = comments.length;
};

// Открывает и закрывает превью для фото

// const showPicture = function () {
//   const pictures = picturesContainer.querySelectorAll(`.picture`);
//   for (let picture of pictures) {
//     console.log(picture);
//     picture.addEventListener(`click`, function () {
//       showBigPicture(posts[]);
//     });
//   }
// };

// showPicture();


const showCommentInfo = function (comment) {
  const commentInfo = socialComment.cloneNode(true);
  commentInfo.querySelector(`.social__picture`).src = comment.avatar;
  commentInfo.querySelector(`.social__picture`).alt = comment.name;
  commentInfo.querySelector(`.social__text`).textContent = comment.message;

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

const uploadFile = document.querySelector(`#upload-file`);
const uploadCancel = document.querySelector(`#upload-cancel`);
const imgUpload = document.querySelector(`.img-upload__overlay`);

const onPopupEscPress = function (evt) {
  if (evt.key === `Escape`) {
    closePopup();
    evt.preventDefault();
  }
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

const levelValue = function () {
  const effectLevelPin = document.querySelector(`.effect-level__pin`);
  const effectLevelDepth = document.querySelector(`.effect-level__depth`);
  const effectLevelValue = document.querySelector(`.effect-level__value`);

  effectLevelDepth.style.width = effectLevelValue.value + `%`;
  effectLevelPin.style.left = effectLevelValue.value + `%`;
};

levelValue();
