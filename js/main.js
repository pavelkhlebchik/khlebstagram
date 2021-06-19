'use strict';

(function () {
  window.picture = {
    generatePosts() {
      const post = [];
      for (let i = 1; i <= 25; i++) {
        post.push({
          url: `photos/${i}.jpg`,
          description: `Тестим новую камеру!`,
          likes: `${window.util.randomNumbers(15, 200)}`,
          comments: `${this.generateComments().length}`,
        });
      }
      return post;
    },

    generateComments() {
      const comments = [];
      for (let i = 1; i <= window.util.randomNumbers(1, 6); i++) {
        comments.push({
          avatar: `img/avatar-${i}.svg`,
          message: window.data.commentMessage[window.util.randomNumbers(0, 5)],
          name: window.data.commentatorNames[window.util.randomNumbers(0, 6)]
        });
      }
      return comments;
    }
  };

})();
