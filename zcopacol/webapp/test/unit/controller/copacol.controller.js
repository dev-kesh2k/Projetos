/*global QUnit*/

sap.ui.define([
	"zcopacol/controller/copacol.controller"
], function (Controller) {
	"use strict";

	QUnit.module("copacol Controller");

	QUnit.test("I should test the copacol controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
