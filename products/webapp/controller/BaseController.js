sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "com/sodogan/products/formatter/util",
    "sap/ui/core/Fragment",
  ],
  function (Controller, UIComponent, util, Fragment) {
    "use strict";
    var _controller = Controller.extend(
      "com.sodogan.products.controller.BaseController",
      {
        formatter: util,
        onInit: function () {
          debugger;
          this._view = this.getView();
        },
        getModel: function (modelName) {
          return this.getView().getModel(modelName);
        },
        getRouter: function () {
          return UIComponent.getRouterFor(this);
        },

        loadFragment: async function (dialogPath) {
          try {
            var _oDialog = await Fragment.load({
              id: this._view.getId(),
              name: dialogPath,
              controller: this,
            });
            this._view.addDependent(_oDialog);
            return _oDialog;
          } catch (err) {}
        },
      }
    );
    return _controller;
  }
);
