/// <reference path="../../app.js" />

app.controller(
  "registerController",
  function (formService, $http, $location, authService) {
    this.form = {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      errors: [],
    };
    this.register = function () {
      this.form.errors = [];
      if (formService.inputsIsEmpty(this.form)) {
        toastr.error("You must be fill all inputs");
        return;
      }

      authService
        .register(
          this.form.firstname,
          this.form.lastname,
          this.form.username,
          this.form.password
        )
        .then((resp) => {
          var data = resp.data;
          if (data.status) {
            toastr.success(data.message);
            $location.url("/login");
          } else {
            toastr.error(data.message);
          }
        });
    };
  }
);
