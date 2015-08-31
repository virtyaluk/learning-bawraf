'use strict';

var React = require('react'),
    Header = require('./common/header'),
    RouteHandler = require('react-router').RouteHandler,
    App = React.createClass({
        render: function() {
            return (
                <div>
                    <Header />
                    <div className="container-fluid">
                        <RouteHandler />
                    </div>
                </div>
            );

        }
    });

module.exports = App;