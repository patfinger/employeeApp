/*global QUnit*/

sap.ui.define([
	"ns/EmpModule/controller/PersonalView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("PersonalView Controller");

	QUnit.test("I should test the PersonalView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
