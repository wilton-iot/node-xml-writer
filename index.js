define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = require('xml-writer/lib/xml-writer.js');

require = requireOrig;});
