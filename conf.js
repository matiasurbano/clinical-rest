"use strict";

var _   = require('lodash');

module.exports = function(){

    var config = {
      "local":{
        PORT:3000,
        MONGODB_URL:"mongodb://localhost:27017/clinical"
      },
      "dev":{
        
        MONGODB_URL:"mongodb://clinicalRest:clinicalTrialdbpass@kahana.mongohq.com:10022/clinicalRest"
      },
      "prod":{
        MONGODB_URL:"mongodb://clinicalRest:clinicalTrialdbpass@kahana.mongohq.com:10022/clinicalRest"
      },
    };

    this.load = function(env, settings) {
        if (env===undefined) throw new Error("Enviroment setting should be set.");
        
        var conf = {};      
        conf = _.defaults(config[env],config.local);
        conf = _.extend(conf, settings); // overloading defaults settings
        return conf;
    };

    return this;
};