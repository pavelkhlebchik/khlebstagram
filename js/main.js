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

const pictureBlock = document.querySelector(`.pictures`);

const showBigPicture = document.querySelector(`.big-picture`);
showBigPicture.classList.remove(`hidden`);
// const bigPicturePreview = showBigPicture.querySelector(`.big-picture__preview`);

const randomNumbers = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generatePosts = function () {
  const post = [];

  for (let i = 1; i <= 25; i++) {
    post.push({
      url: `photos/${i}.jpg`,
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
  pictureBlock.appendChild(fragment);
};

renderPosts();

const getBigPictureInfo = function (info) {
  showBigPicture.querySelector(`.big-picture__img img`).src = info.url;
  showBigPicture.querySelector(`.likes-count`).textContent = info.likes;
  showBigPicture.querySelector(`.comments-count`).textContent = info.comments;
};

const getRenderPictureInfo = function () {
  const fragment = document.createDocumentFragment();
  fragment.append(getBigPictureInfo(posts[0]));
  showBigPicture.append(fragment);
};

getRenderPictureInfo();
