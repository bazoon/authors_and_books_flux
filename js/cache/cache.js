(function () {
  var q = require('q');
  
  var cache = {};

  function put (key, value) {
    cache[key] = value;
  }

  function get(key, func) {
    if (cache[key]) {
      
    } else {
      cache[key] = fun();
    }
    
    return q.when(cache[key]);
  }



  module.exports = {
    put: put,
    get: get
  }
  


})();


