
define([
    "module",
    "wilton/Channel"
], function(module, Channel) {
    
    // get configration provided from index.js
    return Channel.lookup(module.id).peek();
});