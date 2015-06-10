(function () {
  var React = require('react');
  var Authors = require('./authors_component');
  var PopularAuthors = require('./popular_authors_component');
  var Books = require('./books_component');
  var authorsStore = require('../authors/authors_store');
  var popularAuthorsStore = require('../authors/popular_authors_store');
  var booksStore = require('../books/books_store');
  var actions = require("../actions/actions");


  function getAppState () {
    return {
      authors: authorsStore.getAuthors(),
      selectedAuthor: authorsStore.getSelected(),
      books: booksStore.getBooks(),
      selectedBook: booksStore.selectedBook(),
      selectedBookIndex: booksStore.getSelected(),
      popularAuthors: popularAuthorsStore.getAuthors()
    };
  }

  var BookApp = React.createClass({

    hint: function () {
      var author = this.state.authors[+this.state.selectedAuthor-1];
      var book = this.state.selectedBook;
      if (author && book) {
        return author.name + ' написал ' + book.name;
      }
    },

    getInitialState: function () {
      return getAppState();
    },

    componentDidMount: function() {
      authorsStore.addChangeListener(this._onChange);
      booksStore.addChangeListener(this._onChange);
      popularAuthorsStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      authorsStore.removeChangeListener(this._onChange);
      booksStore.removeChangeListener(this._onChange);
      popularAuthorsStore.removeChangeListener(this._onChange);
    },

    render: function () {

      return (
        React.createElement('div', null,
          React.createElement('button', { className: 'btn btn-primary',onClick: this.randomAuthorBook }, "Мне повезет"),
          React.createElement('br', null),
          React.createElement(Authors, { authors: this.state.authors, selected: this.state.selectedAuthor }),
          React.createElement('br', null),
          React.createElement(Books, { books: this.state.books, selected: this.state.selectedBookIndex }),
          React.createElement('div', null, this.hint()),
          React.createElement('button', { onClick: this.foo }, "Foo"),
          React.createElement(PopularAuthors, { authors: this.state.popularAuthors })
        )  

        
      );
    },

  randomAuthorBook: function () {
    console.log('test');
    actions.randomAuthor();  
  },

  _onChange: function() {
    this.setState(getAppState())
  },

  foo: function () {
    console.log(this.state);
  }
  

    

  });

  module.exports = BookApp;
})();