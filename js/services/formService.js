/// <reference path="../app.js" />

app.factory("formService", function () {
  return {
    inputsIsEmpty: function (form) {
      let status = true;
      for (const property in form) {
        if (!form[property]) {
          form.errors.push([property, `${property} can not be empty`]);
          status = false;
        }
      }

      return status;
    },
  };
});
