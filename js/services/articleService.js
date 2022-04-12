/// <reference path="../app.js" />

app.factory("articleService", function ($http) {
  const url = apiUrl + "article/";

  return {
    createArticle: function (title, text, token) {
      return $http({
        method: "post",
        url: url + "create",
        data: {
          title,
          text,
        },
        headers: {
          Authorization: token,
        },
      }).then((resp) => {
        if (!resp.data.status) {
          toastr.error("You must be fill all inputs");
        } else {
          toastr.success(resp.data.message);
        }
      });
    },
    getAllArticles: function (token) {
      return $http({
        method: "get",
        url: url + "getall",
        headers: {
          Authorization: token,
        },
      }).then((resp) => resp.data);
    },
    getArticleById: function (id, token) {
      return $http({
        method: "get",
        url: url + "getbyid/",
        params: {
          id,
        },
        headers: { Authorization: token },
      }).then((resp) => resp.data);
    },
  };
});
