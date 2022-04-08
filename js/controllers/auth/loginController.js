/// <reference path="../../app.js" />

app.controller(
  "loginController",
  function (formService, $http, $location, $cookies) {
    const url = apiUrl + "auth/signin";
    this.form = {
      username: "",
      password: "",
      errors: [],
    };
    this.login = function () {
      this.form.errors = [];
      if (formService.inputsIsEmpty(this.form)) {
        toastr.error("Check fields!");
        return;
      }

      $http({
        method: "POST",
        url: url,
        data: {
          username: this.form.username,
          password: this.form.password,
        },
      }).then((resp) => {
        var data = resp.data;
        console.log(data);
        if (data.status) {
          toastr.success(data.message);
          $cookies.put("token", data.token);
          $location.url("/");
        } else {
          toastr.error(data.message);
        }
      });
    };
  }
);
