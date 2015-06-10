(function () {
  var React = require('react');
  var actions = require('../actions/actions');
  var _ = require("underscore");

  var PopularAuthors = React.createClass({

    selectAuthor: function(authorId) {
      actions.authorSelected(authorId);
      // console.log(authorId);
    },

    render: function() {
      var that = this;
      return (
        
        React.createElement('div', null, 
          React.createElement('br', null),
          React.createElement('h3', null, "Популярные авторы"),
          React.createElement('ul', null, 
            this.props.authors.map(function (authorObject) {
              return React.createElement('li', {key: authorObject.id},
                           React.createElement('a', {href: '#', onClick: _.partial(that.selectAuthor, authorObject.id)}, authorObject.name));   
          }))));
      
    }

    

    

  });

  module.exports = PopularAuthors;
})();