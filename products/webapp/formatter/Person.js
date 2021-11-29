sap.ui.define(
  [],
  function () {
    "use strict";
    var Person = function (givenName, familyName) {
      this.firstName = givenName;
      this.lastName = familyName;
    };

    Person.prototype.getFullName = function () {
      return this.firstName + this.lastName;
    };
    return Person;
  },
  true
);
