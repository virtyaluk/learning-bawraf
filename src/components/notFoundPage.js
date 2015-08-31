'use strict';

var React = require('react'),
    Link = require('react-router').Link,
    NotFoundPage = React.createClass({
        render: function() {
            return (
                <div>
                    <h1>Page Not Found</h1>
                    <p>Whoops! Sorry, there is nothing to see here.</p>
                    <p><Link to="app">Back to Home</Link></p>
                </div>
            );
        }
    });

module.exports = NotFoundPage;