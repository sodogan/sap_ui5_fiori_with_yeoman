/*global QUnit*/

sap.ui.define(
  ["com/sodogan/products/formatter/formatter", "sap/ui/core/ValueState"],
  function (formatter, ValueState) {
    "use strict";

    QUnit.module("Number unit");
    function numberUnitValueTestCase(assert, sValue, fExpected) {
      // Act
      var fActual = formatter.numberUnit(sValue);

      // Assert
      assert.strictEqual(fActual, fExpected, "The rounding was correct");
    }

    QUnit.test("Should round down a 3 digit number", function (assert) {
      numberUnitValueTestCase.call(this, assert, "3.123", "3.12");
    });

    QUnit.test("Should round up a 3 digit number", function (assert) {
      numberUnitValueTestCase.call(this, assert, "3.128", "3.13");
    });

    QUnit.test("Should round a negative number", function (assert) {
      numberUnitValueTestCase.call(this, assert, "-3", "-3.00");
    });

    QUnit.test("Should round an empty string", function (assert) {
      numberUnitValueTestCase.call(this, assert, "", "");
    });

    QUnit.test("Should round a zero", function (assert) {
      numberUnitValueTestCase.call(this, assert, "0", "0.00");
    });

    /* New Module set up!
     */
    QUnit.module("Testing the getStatus", {
      beforeEach: function () {
        this._discontinueDate = new Date(Date.now());
        this._warning = ValueState.Warning;
        this._information = ValueState.Information;
      },
      afterEach: function () {
        this._discontinueDate = this._information = this._warning = null;
      },
    });

    QUnit.test("Test with discontinued date->Warning", function (assert) {
      //Given
      //When
      var _actual = formatter.getStatus(this._discontinueDate);
      //Then
      assert.strictEqual(
        _actual,
        this._warning,
        "Formatter with date should return Warning! "
      );
    });
    QUnit.test("Formatter with no discontinued date", function (assert) {
      //Given
      var _expected = ValueState.Information;
      //When
      var _actual = formatter.getStatus();
      //Then
      assert.strictEqual(
        _actual,
        _expected,
        "Formatter with date should return "
      );
    });

    QUnit.module("Testing the callLog", {
      beforeEach: function () {},
      afterEach: function () {},
    });

    QUnit.test("testing call log with sinon", function (assert) {
      //given
      var _mock = sinon.mock(formatter);
      var _expectation = _mock.expects("log");
      //set up expectations
      _expectation.exactly(1);
      _expectation.withArgs("logme");
      //when
      formatter.callLog();

      //verify!
      _mock.verify();
      _mock.restore();
    });
  }
);
