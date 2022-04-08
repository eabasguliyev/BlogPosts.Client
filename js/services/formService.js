/// <reference path="../app.js" />

app.factory("formService", function () {
  return {
    inputsIsEmpty: function (form) {
      let status = false;
      for (const property in form) {
        if (!form[property]) {
          form.errors.push([property, `${property} can not be empty`]);
          status = true;
        }
      }

      return status;
    },
  };
});
