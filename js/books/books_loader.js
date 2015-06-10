(function() {
    var Actions = require('../actions/actions');    
    var booksApiFactory = require('./books_api_factory');

    

    var service = {
        loadBooks: loadBooks
     };  


    module.exports = service;

    ////////////////

    function loadBooks (authorId) {
        return booksApiFactory.getBooks(authorId);
    }
    
})();


