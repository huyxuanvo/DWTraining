var isml = require('dw/template/ISML');
var guard = require('storefront_controllers/cartridge/scripts/guard');
var start = function () {
	var basket : Basket = require('dw/order/Basket');
	var basketResult = new dw.system.Pipelet('GetBasket').execute({});
	basket = basketResult.Basket;
	isml.renderTemplate('show-basket.isml', {
		myBasket: basket
	});
};
exports.Start = guard.ensure(['get'], start);