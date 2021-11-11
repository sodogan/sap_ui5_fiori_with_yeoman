sap.ui.define(
  [
    "./BaseController",
    "sap/ui/core/Fragment",
    "sap/m/MessageToast",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (
    BaseController,
    Fragment,
    MessageToast,
    Sorter,
    Filter,
    FilterOperator
  ) {
    "use strict";

    return BaseController.extend("com.sodogan.products.controller.Products", {
      /*
      onInit: function () {
        debugger;
        var methods = this.formatter.getMethods();
        console.log(methods);
      },
      */
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
      // handle create product button press event
      onNewProduct: async function () {
        debugger;
        var oView = this.getView();
        // create dialog lazily if can't find the dialog by it's id
        if (!this._oDialog) {
          // load asynchronous XML fragment
          /*
          this._oDialog = await Fragment.load({
            id: oView.getId(),
            name: "com.sodogan.products.view.fragments.NewProductDialog",
            controller: this,
          });
          oView.addDependent(this._oDialog);
          */
          this._oDialog = await this.loadFragment(
            "com.sodogan.products.view.fragments.NewProductDialog"
          );
          this._oDialog.open();
        } else {
          // open dialog
          this._oDialog.open();
        }
      },
      // handle submit new product button (in create product dialog) press event
      onSubmitNewProduct: function () {
        // get values from the input of dialog
        var oIpProductId = this.byId("inputId"),
          oIpProductName = this.byId("inputName"),
          oIpPrice = this.byId("inputPrice"),
          oIpRating = this.byId("inputRating"),
          oDPReleaseDate = this.byId("dtpReleaseDate"),
          oDPDiscontinuedDate = this.byId("dtpDiscontinueDate"),
          oIpDesciption = this.byId("inputDescription"),
          oNewProduct = {},
          oModel;

        debugger;

        // get default OData service model
        oModel = this.getView().getModel();

        // new product data
        oNewProduct.ID = oIpProductId.getValue();
        oNewProduct.Name = oIpProductName.getValue();
        oNewProduct.Price = oIpPrice.getValue();
        oNewProduct.Rating = parseInt(oIpRating.getValue(), 10); // parse string to integer: oInputRating.getValue() is a string
        oNewProduct.ReleaseDate = oDPReleaseDate.getValue();
        oNewProduct.DiscontinuedDate = oDPDiscontinuedDate.getValue();
        oNewProduct.Description = oIpDesciption.getValue();

        /**
         * use OData (v2) create() method to create a new entity
         * create(sPath, oData, mParameters?)
         * sPath is the entityset path: /Products
         * oData is the product (entity entry)  will be created
         */
        oModel.create("/Products", oNewProduct, {
          success: function (res) {
            MessageToast.show("New product created");
          },
          error: function (err) {
            MessageToast.show("Failed to create new product");
          },
        });

        this.byId("createProductDialog").close();
      },

      onChangeMode: function (oEvent) {
        debugger;
        var _state = oEvent.getParameters().state;
        var _productList = this.byId("productList");
        if (!_state) {
          var _mode = sap.m.ListMode.Delete;
        }
        _productList.setMode(_mode);
      },
      // close create product dialog
      onCancelCreateProduct: function () {
        this.byId("createProductDialog").close();
      },
      onDeleteproduct: function () {},
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
