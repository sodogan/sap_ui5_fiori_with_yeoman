/*global QUnit*/

sap.ui.define(["com/sodogan/products/formatter/Person"], function (Person) {
  "use strict";
  QUnit.module("Testing the Person", {
    beforeEach: function () {
      this._personObj = new Person("solen", "dogan");
    },
    afterEach: function () {
      this._personObj = null;
    },
  });

  QUnit.test("testing call log with sinon", function (assert) {
    //given
    //when
    var actual = this._personObj.getFullName();
    //then
    assert.strictEqual(actual, "solendogan");
    assert.strictEqual(this._personObj.firstName, "solen");
    assert.strictEqual(this._personObj.lastName, "dogan");

    //given
    /*     var _mock = sinon.mock(formatter);
    var _expectation = _mock.expects("log");
    //set up expectations
    _expectation.exactly(1);
    _expectation.withArgs("logme");
    //when
    formatter.callLog();

    //verify!
    _mock.verify();
    _mock.restore(); */
  });
});
