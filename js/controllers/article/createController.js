/// <reference path="../../app.js" />

app.controller("createController", function (formService, $http, $cookies) {
  this.form = {
    title: "",
    text: "",
    errors: [],
  };
  const url = apiUrl + "article/create";

  this.create = function () {
    this.form.errors = [];

    if (formService.inputsIsEmpty(this.form)) {
      toastr.error("You must be fill all inputs");
      return;
    }

    const token = $cookies.get("token");
    console.log(token);
    $http({
      method: "post",
      url: url,
      data: {
        title: this.form.title,
        text: this.form.text,
      },
      headers: "Bearer " + token,
    }).then((resp) => {
      if (!resp.data.status) {
        toastr.error("You must be fill all inputs");
      } else {
        toastr.success(resp.data.message);
      }
    });
  };
});
