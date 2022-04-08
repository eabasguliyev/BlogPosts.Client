/// <reference path="../../app.js" />

app.controller("registerController", function (formService, $http, $location) {
  const url = apiUrl + "auth/register";
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

    $http({
      method: "POST",
      url: url,
      data: {
        firstname: this.form.firstname,
        lastname: this.form.lastname,
        username: this.form.username,
        password: this.form.password,
      },
    }).then((resp) => {
      var data = resp.data;
      if (data.status) {
        toastr.success(data.message);
        $location.url("/login");
      } else {
        toastr.error(data.message);
      }
    });
  };
});
