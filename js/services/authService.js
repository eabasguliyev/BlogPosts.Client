/// <reference path="../app.js" />

app.factory("authService", function ($http) {
  const url = apiUrl + "auth/";
  return {
    isAuthorized: function (token) {
      return $http.get(`${url}isauthorized`, {
        headers: {
          Authorization: token,
        },
      });
    },
    login: function (username, password) {
      return $http({
        method: "POST",
        url: url + "signin",
        data: {
          username: username,
          password: password,
        },
      }).then((resp) => {
        return resp.data;
      });
    },
    register: function (firstname, lastname, username, password) {
      return $http({
        method: "POST",
        url: url + "register",
        data: {
          firstname,
          lastname,
          username,
          password,
        },
      }).then((resp) => {
        return resp.data;
      });
    },
  };
});
