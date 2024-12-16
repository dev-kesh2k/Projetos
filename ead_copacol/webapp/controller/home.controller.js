sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/mvc/XMLView",
    "sap/m/MessageToast"
], (Controller, XMLView, MessageToast) => {
    "use strict";

    return Controller.extend("eadcopacol.controller.home", {
        onInit() {
            // Inicializações podem ser feitas aqui, se necessário
        },

        onListItemPress(event) {
            const oSplitApp = this.byId("SplitApp"); // Obtém a referência do SplitApp
            const oListItem = event.getSource();
            const sTargetViewName = oListItem.getCustomData()[0].getValue(); // Nome da View de destino

            if (sTargetViewName) {
                // Carrega a View dinamicamente
                XMLView.create({
                    viewName: sTargetViewName
                }).then((oView) => {
                    // Adiciona a página ao SplitApp, se ainda não estiver adicionada
                    if (!oSplitApp.getDetailPage(oView.getId())) {
                        oSplitApp.addDetailPage(oView);
                    }
                    // Navega para a página de detalhe
                    oSplitApp.toDetail(oView);
                }).catch((error) => {
                    MessageToast.show("Erro ao carregar a página. Verifique os detalhes no console.");
                    console.error(`Erro ao carregar a View ${sTargetViewName}:`, error);
                });
            } else {
                MessageToast.show("Nome da View de destino não encontrado.");
            }
        }
    });
});
