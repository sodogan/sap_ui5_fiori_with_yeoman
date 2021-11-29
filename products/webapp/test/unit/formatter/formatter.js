/*global QUnit*/

sap.ui.define(
  ["com/sodogan/products/formatter/formatter", "sap/ui/core/ValueState"],
  function (formatter, ValueState) {
    "use strict";

    QUnit.module("Qunit test types ", {
      beforeEach: function () {
        this._info = ValueState.Information;
      },
      afterEach: function () {
        this._info = null;
      },
    });

    QUnit.test("check information", function (assert) {
      assert.ok(this._info, "information should be correctly set");
      assert.strictEqual(this._info, "Information", "must be equal");
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
