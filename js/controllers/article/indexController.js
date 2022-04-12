/// <reference path="../../app.js" />

app.controller("indexController", function (articleService) {
  articleService
    .getAllArticles()
    .then((resp) => {
      this.articles = resp;
    })
    .catch((err) => {
      if (err.status === 401) {
        toastr.error("You must be logged in");
      }
    });
});
