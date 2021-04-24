'use strict';

(function () {
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
  const socialComment = document.querySelector(`#comment`)
  .content;
  const socialCommentsCount = bigPicture.querySelector(`.social__comment-count`);
  const commentsLoader = bigPicture.querySelector(`.comments-loader`);
  const body = document.querySelector(`body`);

  const closeBigPicture = bigPicture.querySelector(`.big-picture__cancel`);

  const randomNumbers = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generatePosts = function () {
    const post = [];

    for (let i = 1; i <= 25; i++) {
      post.push({
        url: `photos/${i}.jpg`,
        description: `Тестим новую камеру!`,
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

  const pictures = picturesContainer.querySelectorAll(`.picture`);

  const showPictures = function () {
    for (let i = 0; i < pictures.length; i++) {
      pictures[i].addEventListener(`click`, function () {
        showBigPictureInfo(posts[i]);
        bigPicture.classList.remove(`hidden`);
        body.classList.add(`modal-open`);
      });
      closeBigPicture.addEventListener(`click`, function () {
        bigPicture.classList.add(`hidden`);
        body.classList.remove(`modal-open`);
      });
    }
  };

  showPictures();

  const renderComments = function () {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < comments.length; i++) {
      fragment.appendChild(showCommentInfo(comments[i]));
    }
    socialCommentsList.appendChild(fragment);
  };

  renderComments();
})();
