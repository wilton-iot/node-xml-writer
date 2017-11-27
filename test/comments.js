define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;

var XMLWriter = require('xml-writer/');
exports['setUp'] = function (callback) {
	this.xw = new XMLWriter;
	callback();
};
exports['t01'] = function (test) {
	this.xw.startComment();
	this.xw.text('fake');
	this.xw.endComment();
	test.equal(this.xw.toString(), '<!--fake-->');
    test.done();
};
exports['t02'] = function (test) {
	this.xw.startElement('tag');
	this.xw.startComment();
	this.xw.text('fake');
	this.xw.endComment();
	this.xw.text('value');
	test.equal(this.xw.toString(), '<tag><!--fake-->value</tag>');
	test.done();
};
exports['t03'] = function (test) {
	this.xw.startElement('tag');
	this.xw.startComment();
	this.xw.startComment();
	this.xw.text('fake');
	this.xw.endComment();
	this.xw.text('value');
	this.xw.endComment();
	this.xw.startComment();
	this.xw.text('fake');
	this.xw.endComment();

	test.equal(this.xw.toString(), '<tag><!--fake-->value<!--fake--></tag>');
	test.done();
};
exports['t04'] = function (test) {
	this.xw.startElement('tag');
	this.xw.startComment();
	this.xw.startElement('tag');
	this.xw.text('value');
	this.xw.endElement();
	this.xw.endComment();
	this.xw.endElement();
	test.equal(this.xw.toString(), '<tag><!--<tag>value</tag>--></tag>');

    test.done();
};
exports['t05'] = function (test) {
    test.done();
};
exports['t06'] = function (test) {
	this.xw.writeComment('value');
	test.equal(this.xw.toString(), '<!--value-->');
    test.done();
};
exports['t06'] = function (test) {
	this.xw.writeComment('<test>');
	test.equal(this.xw.toString(), '<!--<test>-->');
  test.done();
};

var assert = require("assert");
var forOwn = require("lodash/forOwn");
var testobj = function() {};
testobj.equal = assert.equal;
testobj.done = function() {};

forOwn(exports, function(fun, key) {
    print("test: " + key);
    var obj = {};
    exports.setUp.call(obj, testobj);
    fun.call(obj, testobj);
});

return module.exports;});
