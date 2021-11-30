sap.ui.define(
  ["sap/ui/core/ValueState"],
  function (ValueState) {
    "use strict";
    var util = {
      /**
       * Rounds the number unit value to 2 digits
       * @public
       * @param {string} sValue the number string to be rounded
       * @returns {string} sValue with 2 digits rounded
       */
      numberUnit: function (sValue) {
        if (!sValue) {
          return "";
        }
        return parseFloat(sValue).toFixed(2);
      },
      getStatus: function (disContinueDate) {
        return disContinueDate ? ValueState.Warning : ValueState.Information;
      },
      getFlagged: function (disContinueDate) {
        if (disContinueDate) {
          return "Flagged";
        }
        return "Favorite";
      },
      log: function (message) {
        console.log(message);
      },
      callLog: function () {
        this.log("logme");
        return Object.keys(this);
      },
    };

    return util;
  },
  true
);
