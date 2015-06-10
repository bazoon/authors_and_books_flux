(function () {
  var React = require('react');
  var actions = require('../actions/actions');

  var Authors = React.createClass({

    selectAuthor: function(event) {
      console.log('selectAuthor', event.target.value);
      actions.authorSelected(event.target.value);
      var node = this.getDOMNode();
      TweenMax.to(node, 5, {x: 600});
    },

    render: function() {
      
      return (
        
        React.createElement('select', { onChange: this.selectAuthor, value: this.props.selected },
          this.props.authors.map(function (authorObject) {
            return React.createElement('option', { key: authorObject.id, value: authorObject.id}, authorObject.name);
          })));
      
    }

    

    

  });

  module.exports = Authors;
})();