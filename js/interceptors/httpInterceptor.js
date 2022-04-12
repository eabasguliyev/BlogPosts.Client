/// <reference path="../app.js" />

app.factory("httpInterceptor", function ($cookies) {
  return {
    request: function (config) {
      const token = $cookies.get("token");
      if (token) config.headers["Authorization"] = "Bearer " + token;

      return config;
    },
  };
});
