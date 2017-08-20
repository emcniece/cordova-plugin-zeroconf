

module.exports.getHostname = function(success, failure){
    success('hostname');
}

require("cordova/exec/proxy").add("ZeroConf", module.exports);
