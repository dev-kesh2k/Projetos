/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"copacol/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});