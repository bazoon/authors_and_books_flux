(function() {
  'use strict';


  var apiFactory = require("../api/api_factory");
  var routes = require("../api/api_routes");
 
  module.exports = {
    getAuthors: getAuthors,
    getPopularAuthors: getPopularAuthors
  };
    
  ////////////

  function getAuthors () {
    return apiFactory.get(routes.authorsPath());
  }

  function getPopularAuthors () {
    return apiFactory.get(routes.popularAuthorsPath());
  }

  

}
)();
