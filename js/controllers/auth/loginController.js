/// <reference path="../../app.js" />

app.controller(
  "loginController",
  function (formService, authService, $http, $location, $cookies) {
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

      authService
        .login(this.form.username, this.form.password)
        .then((data) => {
          if (data.status) {
            toastr.success(data.message);
            $cookies.put("token", data.token);
            $location.url("/");
          } else {
            toastr.error(data.message);
          }
        })
        .catch(() => {
          toastr.error("Something went wrong, please try again later!");
        });
    };
  }
);
