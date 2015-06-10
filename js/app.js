// React
var React = require('react');
var AppComponent = require('./components/app_component');
var Actions = require('./actions/actions');

React.render(React.createElement(AppComponent, null), document.getElementById('app'));

var authorsLoader = require('./authors/authors_loader');

Actions.loadAuthors();
Actions.loadPopularAuthors();
Actions.authorSelected(1);

