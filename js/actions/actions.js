var AppDispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants/constants.js');

var Actions = {

  loadAuthors:  function(data) {
    AppDispatcher.handleAction({
      actionType: Constants.LOAD_AUTHORS,
      data: data
    });
  },
 
  loadPopularAuthors:  function(data) {
    AppDispatcher.handleAction({
      actionType: Constants.LOAD_POPULAR_AUTHORS,
      data: data
    });
  },

  loadBooks:  function(data) {
    AppDispatcher.handleAction({
      actionType: Constants.LOAD_BOOKS,
      data: data
    });
  },

  authorSelected: function(index) {
    AppDispatcher.handleAction({
      actionType: Constants.AUTHOR_SELECTED,
      data: index
    });
  },
 
  bookSelected: function(index) {
    AppDispatcher.handleAction({
      actionType: Constants.BOOK_SELECTED,
      data: index
    });
  },

  randomAuthor: function() {
    AppDispatcher.handleAction({
      actionType: Constants.RANDOM_AUTHOR
      
    });
    
  },

  randomBook: function() {
    AppDispatcher.handleAction({
      actionType: Constants.RANDOM_BOOK
      
    });
  }

};

module.exports = Actions;