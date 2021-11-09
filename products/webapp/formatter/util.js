sap.ui.define(
  ["sap/ui/core/ValueState"],
  (ValueState) => {
    let _util = {
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

    return _util;
  },
  true
);
