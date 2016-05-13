'use strict';
//require('dw/system/Transaction')
exports.Start = function () {
	response.setContentType('text/html');
	//response.getWriter().println('Hello World!');
	response.getWriter().println('<h1>Hello Xuan Huy ! </h1>');
};
exports.Start.public = true;

exports.NewNode = function () {
	response.setContentType('text/html');
	response.getWriter().println('<a>Hi new node! </a>')
};
exports.NewNode.public = true;