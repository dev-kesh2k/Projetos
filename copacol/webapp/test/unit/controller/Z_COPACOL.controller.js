/*global QUnit*/

sap.ui.define([
	"copacol/controller/Z_COPACOL.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Z_COPACOL Controller");

	QUnit.test("I should test the Z_COPACOL controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
