/// <reference path="../../app.js" />

app.controller("indexController", function (articleService, $cookies) {
  const token = "Bearer " + $cookies.get("token");
  articleService
    .getAllArticles(token)
    .then((resp) => {
      this.articles = resp;
    })
    .catch((err) => {
      if (err.status === 401) {
        toastr.error("You must be logged in");
      }
    });
});
