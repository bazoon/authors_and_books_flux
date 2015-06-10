(function() {
  'use strict';


  var apiFactory = require("../api/api_factory");
  var routes = require("../api/api_routes");

  module.exports = {
    getBooks: getBooks
  };
    
  ////////////

  function getBooks (authorId) {
    
    return apiFactory.get(routes.booksPath(authorId));
  }

  

}
)();
