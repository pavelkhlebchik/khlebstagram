'use strict';

(function () {
  const pictureTemplate = document.querySelector(`#picture`)
    .content;
  const picturesContainer = document.querySelector(`.pictures`);
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
