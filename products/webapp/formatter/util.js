sap.ui.define(
  ["sap/ui/core/ValueState"],
  function (ValueState) {
    "use strict";
    var util = {
      getStatus: function (disContinueDate) {
        if (disContinueDate) {
          return ValueState.Warning;
        }
        return ValueState.Information;
      },
      getMethods: function () {
        return Object.keys(this);
      },
    };

    return util;
  },
  true
);
