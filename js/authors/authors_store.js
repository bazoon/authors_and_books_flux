(function () {

  var EventEmitter = require('events').EventEmitter;
  var Constants = require('../constants/constants');
  var Actions = require('../actions/actions');
  var _ = require('underscore');
  var AppDispatcher = require('../dispatcher/dispatcher');
  var authorsLoader = require('./authors_loader');

  
  var _authors = [], _selected_author = null;
  
  

  
  authorsStore = _.extend({}, EventEmitter.prototype, {
    

    loadAuthorsData: function () {
      return authorsLoader.loadAuthors().then(function (response) {
        _authors = response;
        authorsStore.emitChange();
        console.log('loaded authors');
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

  authorsStore.dispatchToken =  AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
      
      case Constants.LOAD_AUTHORS:
        authorsStore.loadAuthorsData();
        break;

      case Constants.AUTHOR_SELECTED:
        authorsStore.setSelected(action.data);
        break;

      case Constants.RANDOM_AUTHOR:
        var randomIndex = _.random(1, _authors.length);
        authorsStore.setSelected(randomIndex);
        break;
    

      default:
        return true;
    }


    authorsStore.emitChange();

    return true;

  });


  module.exports = authorsStore;

}());



