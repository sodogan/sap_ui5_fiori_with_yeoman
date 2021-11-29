sap.ui.define(
  ["sap/ui/core/ValueState"],
  function (ValueState) {
    "use strict";
    var util = {
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
