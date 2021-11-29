/*global QUnit*/

sap.ui.define(
  ["com/sodogan/products/formatter/formatter", "sap/ui/core/ValueState"],
  function (utility, ValueState) {
    "use strict";

    QUnit.module("Testing the productController", {
      beforeEach: function () {
        this._discontinueDate = new Date(Date.now());
      },
      afterEach: function () {
        this._discontinueDate = null;
      },
    });

    QUnit.test("basic test", function (assert) {
      var _anyVal = 12;
      assert.ok(_anyVal, "should pass");
      assert.strictEqual(1, 1, "1 should be 1");
    });

    QUnit.test("check date", function (assert) {
      assert.ok(this._discontinueDate, "should pass");
    });
  }
);
