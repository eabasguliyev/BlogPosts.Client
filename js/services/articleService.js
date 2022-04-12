/// <reference path="../app.js" />

app.factory("articleService", function ($http) {
  const url = apiUrl + "article/";

  return {
    createArticle: function (title, text) {
      return $http({
        method: "post",
        url: url + "create",
        data: {
          title,
          text,
        },
      }).then((resp) => {
        if (!resp.data.status) {
          toastr.error("You must be fill all inputs");
        } else {
          toastr.success(resp.data.message);
        }
      });
    },
    getAllArticles: function () {
      return $http({
        method: "get",
        url: url + "getall",
      }).then((resp) => resp.data);
    },
    getArticleById: function (id) {
      return $http({
        method: "get",
        url: url + "getbyid/",
        params: {
          id,
        },
      }).then((resp) => resp.data);
    },
  };
});
