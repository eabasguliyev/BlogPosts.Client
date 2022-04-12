/// <reference path="../../app.js" />

app.controller(
  "detailsController",
  function (articleService, $cookies, $routeParams) {
    const articleId = $routeParams.id;

    const token = "Bearer " + $cookies.get("token");

    articleService.getArticleById(articleId, token).then(
      (resp) => {
        this.article = resp;
      },
      (err) => {
        if (err.status === 401) {
          toastr.error("You must be logged in");
        }
      }
    );
  }
);
