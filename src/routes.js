/*eslint no-mixed-requires: 0 */

'use strict';

var React = require('react'),
    Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Route = Router.Route,
    NotFoundRoute = Router.NotFoundRoute,
    routes = (
        <Route name="app" path="/" handler={require('./components/app')}>
            <DefaultRoute handler={require('./components/homePage')} />
            <Route name="authors" handler={require('./components/authors/authorPage')} />
            <Route name="about" handler={require('./components/about/aboutPage')} />
            <NotFoundRoute handler={require('./components/notFoundPage')} />
        </Route>
    );

module.exports = routes;