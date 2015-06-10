(function () {
  var React = require('react');
  var actions = require('../actions/actions');
  var booksStore = require('../books/books_store');

  var Books = React.createClass({

    selectBook: function(event) {
      actions.bookSelected(event.target.value)
      
    },

    render: function() {
      return (
        React.createElement('div', null, 
          React.createElement('select', { onChange: this.selectBook, value: this.props.selected },
          this.props.books.map(function (bookObject) {
            return React.createElement('option', { key: bookObject.id, value: bookObject.id }, bookObject.name);
          }))
     

          )
        )
    }




    

    

  });

  module.exports = Books;
})();