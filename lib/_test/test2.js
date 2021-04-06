


require = require("esm")(module);
module.exports = require("./lib/fabric.mjs").default;

const { View } = require('./lib/fabric.mjs');


//const { View } = require('fabric');

let view = new View("Test");
view.show();


