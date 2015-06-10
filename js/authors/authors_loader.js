(function() {
    var Actions = require('../actions/actions');    
    var authorsApiFactory = require('./authors_api_factory');
    
    

    var service = {
        loadAuthors: loadAuthors,
        loadPopularAuthors: loadPopularAuthors
     };  


    module.exports = service;

    ////////////////

    function loadAuthors () {
        return authorsApiFactory.getAuthors();
    }

    function loadPopularAuthors () {
        return authorsApiFactory.getPopularAuthors();
    }

    
})();


