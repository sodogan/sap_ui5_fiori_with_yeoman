/*global QUnit*/

sap.ui.define(
  ["com/sodogan/products/controller/Products.controller"],
  function (Controller) {
    "use strict";

    QUnit.module("Products Controller");

    QUnit.test("I should test the Products controller", function (assert) {
      var oAppController = new Controller();
      oAppController.onInit();
      assert.ok(oAppController);
    });
  }
);
