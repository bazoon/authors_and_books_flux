(function () {

  var EventEmitter = require('events').EventEmitter;
  var Constants = require('../constants/constants');
  var Actions = require('../actions/actions');
  var _ = require('underscore');
  var AppDispatcher = require('../dispatcher/dispatcher');
  var authorsLoader = require('./authors_loader');

  
  var _authors = [], _selected_author = null;
  
  
  popularAuthorsStore = _.extend({}, EventEmitter.prototype, {
  
    loadPopularAuthorsData: function () {
      
      return authorsLoader.loadPopularAuthors().then(function (response) {
        _authors = response;
        popularAuthorsStore.emitChange();
        console.log('loaded popular authors');
        return _authors;
      });
    },

    getAuthors: function() {
      return _authors;
    },
    
    getSelected: function() {
      return _selected_author;
    },

    setSelected: function(index) {
      _selected_author = index;
    },

    selectedAuthor: function () {
      return _authors[_selected_author - 1];
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

  popularAuthorsStore.dispatchToken =  AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
      
      case Constants.LOAD_POPULAR_AUTHORS:
        popularAuthorsStore.loadPopularAuthorsData();
        break;

      case Constants.AUTHOR_SELECTED:
        popularAuthorsStore.setSelected(action.data);
        break;

      default:
        return true;
    }


    popularAuthorsStore.emitChange();

    return true;

  });


  module.exports = popularAuthorsStore;

}());



