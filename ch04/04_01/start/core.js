const path = require("path");

const { log } = require("util");
const { getHeapStatistics } = require("v8");

// util.log( path.basename(__filename) );

// util.log(" ^ The name of the current file");

log(getHeapStatistics());