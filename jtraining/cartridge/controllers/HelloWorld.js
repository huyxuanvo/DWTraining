'use strict';
//require('dw/system/Transaction')
exports.Start = function () {
	response.setContentType('text/html');
	//response.getWriter().println('Hello World!');
	response.getWriter().println('<h1>Hello Xuan Huy ! </h1>');
};
exports.Start.public = true;
// http://bluecom03.alliance-prtnr-hk01.dw.demandware.net/on/demandware.store/Sites-Test-Site/default/HelloWorld-Start
exports.NewNode = function () {
	response.setContentType('text/html');
	response.getWriter().println('<a>Hi new node! </a>')
};
exports.NewNode.public = true;

// call a isml
exports.StartNode2 = function(){
	var CurrentHttpParameterMap = request.httpParameterMap;
	
	var myParameter=CurrentHttpParameterMap.param;	
	var myPid=CurrentHttpParameterMap.pid;	
	var ISML = require('dw/template/ISML');	
	ISML.renderTemplate('hello.isml', {myParameteronISML:myParameter});

};
exports.StartNode2.public = true;