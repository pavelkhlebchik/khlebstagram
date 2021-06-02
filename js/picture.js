'use strict';

(function () {
  const pictureTemplate = document.querySelector(`#picture`)
    .content;
  const picturesContainer = document.querySelector(`.pictures`);


  const randomNumbers = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  window.picture = {
    generatePosts() {
      const post = [];

      for (let i = 1; i <= 25; i++) {
        post.push({
          url: `photos/${i}.jpg`,
          description: `Тестим новую камеру!`,
          likes: `${randomNumbers(15, 200)}`,
          comments: `${this.generateComments().length}`,
        });
      }
      return post;
    },

    generateComments() {
      const comments = [];
      for (let i = 1; i <= randomNumbers(1, 6); i++) {
        comments.push({
          avatar: `img/avatar-${i}.svg`,
          message: window.data.commentMessage[randomNumbers(0, 5)],
          name: window.data.commentatorNames[randomNumbers(0, 6)]
        });
      }
      return comments;
    }
  };
  const posts = window.picture.generatePosts();

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
})();
