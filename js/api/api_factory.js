(function() {
  'use strict'; 

  var apiPoint = require('./api_config');
  var reqwest = require('reqwest');
  var q = require('q');


  module.exports = {
    get: get
  };

  var cache = {};

  function get (apiPath) {
    if (cache[apiPath]) {
      console.log('from cache: ' + apiPath);
      return q.when(cache[apiPath]);
    } else {
      return reqwest({url: apiPath}).then(function (response) {
        cache[apiPath] = response;
        return response;
      });
    }

  }

})();
