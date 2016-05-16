'use strict';

var app = require('~/cartridge/scripts/app');
var guard = require('~/cartridge/scripts/guard');


function start() {
	//var basket : Basket = require('dw/order/Basket');
	//var basketResult = new dw.system.Pipelet('GetBasket').execute({});
	//basket = basketResult.Basket;
	/*app.getView().renderTemplate('show-basket', {
		myBasket: 'basket'
	});*/
	app.getView({
		myBasket: 'This is my basket'
	}).render('show-basket');
};

exports.Start = guard.ensure(['get'], start);