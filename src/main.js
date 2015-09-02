'use strict';

var React = require('react'),
    Router = require('react-router'),
    routes = require('./routes'),
    initializeActions = require('./actions/initializeActions');

initializeActions.initApp();
Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
});