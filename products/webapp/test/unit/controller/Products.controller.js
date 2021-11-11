/*global QUnit*/

sap.ui.define(
  ["com/sodogan/products/formatter/util", "sap/ui/core/ValueState"],
  function (utility, ValueState) {
    "use strict";

    QUnit.module("Learning Qunit", {
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

    QUnit.module("Testing the Formatter", {
      beforeEach: function () {
        this._discontinueDate = new Date(Date.now());
      },
      afterEach: function () {
        this._discontinueDate = null;
      },
    });

    QUnit.test("Formatter with discontinued date", function (assert) {
      //Given
      var _expected = ValueState.Warning;
      //When
      var _actual = utility.getStatus(this._discontinueDate);
      //Then
      assert.strictEqual(
        _actual,
        _expected,
        "Formatter with date should return "
      );
    });
    QUnit.test("Formatter with no discontinued date", function (assert) {
      //Given
      var _expected = ValueState.Information;
      //When
      var _actual = utility.getStatus();
      //Then
      assert.strictEqual(
        _actual,
        _expected,
        "Formatter with date should return "
      );
    });
  }
);
