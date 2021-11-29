sap.ui.define(["./BaseController"], function (BaseController) {
  "use strict";
  var _controller = BaseController.extend(
    "com.sodogan.products.controller.App",
    {
      onInit: function () {
        debugger;
        //create a Person
        var _personObj = new this.Person("solen", "dogan");
        console.log(_personObj.getFullName());
      },
    }
  );
  return _controller;
});
