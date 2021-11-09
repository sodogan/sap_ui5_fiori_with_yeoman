sap.ui.define(
  ["./BaseController", "sap/m/MessageToast", "sap/ui/model/Sorter"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (BaseController, MessageToast, Sorter) {
    "use strict";

    return BaseController.extend("com.sodogan.products.controller.Products", {
      onInit: function () {
        let methods = this.formatter.getMethods();
        console.log(methods);
      },
      onAfterRendering: function () {
        let _model = this.getModel();
        console.log(_model);
      },
      onSortProductByPrice: function () {
        //sort by Price
        var oListBinding = this.byId("productList").getBinding("items");
        oListBinding.sort(new Sorter("Price", false));
        window.oListBinding = oListBinding;
      },
      onRefresh: function () {},
      onListItemPress: function (oEvent) {
        let that = this;
        this._eventSource = oEvent.getSource();
        debugger;
        /*
        window.setTimeout(() => {
          console.log(_source);
          MessageToast.show("Button is pressed");
        }, 5000);
      */
        //this.promisify().then((msg) => MessageToast.show(msg));
        this.promisify().then((source) => {
          let object = source.getBindingContext().getObject();
          MessageToast.show(
            `ID:${object.ID} with Name: ${object.Name} selected`
          );
        });
      },

      promisify: function () {
        let message = "Smthing happened";
        return new Promise((resolve, reject) => {
          window.setTimeout(() => {
            //resolve(message);
            resolve(this._eventSource);
          }, 5000);
        });
      },
    });
  }
);
