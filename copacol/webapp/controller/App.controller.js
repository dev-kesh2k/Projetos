sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("copacol.controller.Admissao", {
      onNavBack: function () {
          const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("main");
      }
  });
});
