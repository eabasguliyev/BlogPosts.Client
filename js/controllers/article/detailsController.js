/// <reference path="../../app.js" />

app.controller("detailsController", function (articleService, $routeParams) {
  const articleId = $routeParams.id;

  articleService.getArticleById(articleId).then(
    (resp) => {
      this.article = resp;
    },
    (err) => {
      if (err.status === 401) {
        toastr.error("You must be logged in");
      }
    }
  );
});
