sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "com/sodogan/products/formatter/util",
  ],
  (Controller, UIComponent, util) => {
    const _controller = Controller.extend(
      "com.sodogan.products.controller.BaseController",
      {
        formatter: util,
        getModel: function (modelName) {
          return this.getView().getModel(modelName);
        },
        getRouter: function () {
          return UIComponent.getRouterFor(this);
        },
      }
    );
    return _controller;
  }
);