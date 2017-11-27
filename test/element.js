define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var XMLWriter = require('xml-writer/');
exports['setUp'] = function (callback) {
	this.xw = new XMLWriter();
	callback();
};
exports['t01'] = function (test) {
	this.xw.startElement('foo');
	test.equal(this.xw.toString(), '<foo/>');
    test.done();
};
exports['t02'] = function (test) {
	this.xw.startElement('foo');
	this.xw.endElement();
	test.equal(this.xw.toString(), '<foo/>');
	test.done();
};
exports['t03'] = function (test) {
	this.xw.startElement('foo');
	this.xw.text('fake');
	test.equal(this.xw.toString(), '<foo>fake</foo>');
	test.done();
};
exports['t04'] = function (test) {
	this.xw.startElement('foo');
	this.xw.text('fake');
	this.xw.endElement();
	test.equal(this.xw.toString(), '<foo>fake</foo>');
    test.done();
};
exports['t05'] = function (test) {
	this.xw.writeElement('tag', 'value').endElement();
	test.equal(this.xw.toString(), '<tag>value</tag>');
    test.done();
};
exports['t06'] = function (test) {
	this.xw.startElement('a');
	this.xw.startElement('b');
	this.xw.endElement();
	this.xw.startElement('c');
	this.xw.endElement();
	this.xw.endElement();
	test.equal(this.xw.toString(), '<a><b/><c/></a>');
    test.done();
};

var assert = require("assert");
var forOwn = require("lodash/forOwn");
var testobj = function() {};
testobj.equal = assert.equal;
testobj.throws = assert.throws;
testobj.done = function() {};

forOwn(exports, function(fun, key) {
    print("test: " + key);
    var obj = {};
    exports.setUp.call(obj, testobj);
    fun.call(obj, testobj);
});

return module.exports;});
