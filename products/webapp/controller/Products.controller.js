sap.ui.define(
  [
    "./BaseController",
    "sap/m/MessageToast",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (BaseController, MessageToast, Sorter, Filter, FilterOperator) {
    "use strict";

    return BaseController.extend("com.sodogan.products.controller.Products", {
      onInit: function () {
        var methods = this.formatter.getMethods();
        console.log(methods);
      },
      onAfterRendering: function () {
        var _model = this.getModel();
        console.log(_model);
      },
      onSortProductByPrice: function () {
        //sort by Price
        var oListBinding = this.byId("productList").getBinding("items");
        oListBinding.sort(new Sorter("Price", false));
        window.oListBinding = oListBinding;
      },
      onRefresh: function () {
        //Need to remove the sort
        var oListBinding = this.byId("productList").getBinding("items");
        oListBinding.sort();
      },
      onSearch: function (oEvent) {
        //get the search field
        debugger;
        var listBinding = this.byId("productList").getBinding("items");
        var sQuery = oEvent.mParameters.query;
        var filterList = [];

        if (sQuery) {
          filterList.push(new Filter("Name", FilterOperator.Contains, sQuery));
        }

        listBinding.filter(filterList);
      },
      onListItemPress: function (oEvent) {
        // var that = this;
        this._eventSource = oEvent.getSource();
        debugger;
        /*
        window.setTimeout(() => {
          console.log(_source);
          MessageToast.show("Button is pressed");
        }, 5000);
      
        /*this.promisify().then((msg) => MessageToast.show(msg));
        this.promisify().then(function (source) {
           var object = source.getBindingContext().getObject();
          MessageToast.show(
            `ID:${object.ID} with Name: ${object.Name} selected`);
        });
        */
      },

      promisify: function () {
        // var message = "Smthing happened";
        return new Promise(function (resolve, reject) {
          window.setTimeout(function () {
            //resolve(message);
            resolve(this._eventSource);
          }, 5000);
        });
      },
    });
  }
);
