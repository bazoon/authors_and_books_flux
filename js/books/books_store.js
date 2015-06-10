(function () {

  var EventEmitter = require('events').EventEmitter;
  var Constants = require('../constants/constants');
  var Actions = require('../actions/actions');
  var _ = require('underscore');
  var AppDispatcher = require('../dispatcher/dispatcher');
  var booksLoader = require('../books/books_loader');
  var authorsStore = require('../authors/authors_store');
  var _ = require('underscore');

  // Define initial data points
  var _books = [], _selected_book = null;
  
  // Method to load product data from mock API

  
  booksStore = _.extend({}, EventEmitter.prototype, {
    
    loadBooksData: function (authorId) {
      return booksLoader.loadBooks(authorId).then(function (response) {
        _books = response;
        console.log('loaded books');
        booksStore.emitChange();
        return _books;
      });
    },

    getBooks: function() {
      return _books;
    },
    
    getSelected: function() {
      return _selected_book;
    },

    setSelected: function(index) {
      _selected_book = index;
    },

    selectedBook: function () {
      return _books[_selected_book - 1];
    },

    randomBook: function () {
      booksStore.loadBooksData(authorsStore.getSelected()).then(function (response) {
        var randomBookIndex = _.random(1, _books.length);
        booksStore.setSelected(randomBookIndex); 
        booksStore.emitChange();
        });
    },

    // Emit Change event
    emitChange: function() {
      this.emit('change');
    },

    // Add change listener
    addChangeListener: function(callback) {
      this.on('change', callback);
    },

    // Remove change listener
    removeChangeListener: function(callback) {
      this.removeListener('change', callback);
    }, 

  });

  booksStore.dispatchToken =  AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
      
      case Constants.LOAD_BOOKS:
        booksStore.loadBooksData(action.data);
        break;

      
      case Constants.BOOK_SELECTED:
        booksStore.setSelected(action.data);
        break;

      case Constants.AUTHOR_SELECTED:
        booksStore.loadBooksData(action.data).then(function (response) {
          booksStore.setSelected(1); 
          booksStore.emitChange();
        });
        break;
          
      case Constants.RANDOM_AUTHOR:
        AppDispatcher.waitFor([authorsStore.dispatchToken]);
        booksStore.randomBook();
        break;

    

      default:
        return true;
    }


    booksStore.emitChange();

    return true;

  });


  module.exports = booksStore;

}())



