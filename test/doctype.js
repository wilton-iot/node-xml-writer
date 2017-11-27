define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var XMLWriter = require('xml-writer/');
exports['setUp'] = function (callback) {
    this.xw = new XMLWriter;
    callback();
};
exports['t01'] = function (test) {
    this.xw.writeDocType('foo');
    test.equal(this.xw.toString(), '<!DOCTYPE foo>');
    test.done();
};
exports['t02'] = function (test) {
    this.xw.writeDocType('foo', null, 'http://localhost/foo');
    test.equal(this.xw.toString(), '<!DOCTYPE foo SYSTEM "http://localhost/foo">');
    test.done();
};
exports['t03'] = function (test) {
    this.xw.writeDocType('foo', null, null, '<!ELEMENT foo><!ATTLIST foo DocVersion (1) #REQUIRED>');
    test.equal(this.xw.toString(), '<!DOCTYPE foo [<!ELEMENT foo><!ATTLIST foo DocVersion (1) #REQUIRED>]>');
    test.done();
};
exports['t04'] = function (test) {
    this.xw.writeDocType('html', "-//W3C//DTD XHTML 1.1//EN", "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd");
    test.equal(this.xw.toString(), '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">');
    test.done();
};
exports['t05'] = function (test) {
    test.throws(function(){
        this.xw.writeDocType('foo', null, null, null);
        this.xw.startElement('bar');
    });
    test.done();
};
exports['t06'] = function (test) {
    this.xw.startElement('foo');
    this.xw.writeDocType('foo', null, null, null);
    test.equal(this.xw.toString(), '<foo/>');
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
