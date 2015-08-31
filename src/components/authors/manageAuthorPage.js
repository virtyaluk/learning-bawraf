'use strict';

var React = require('react'),
    AuthorForm = require('./authorForm'),
    ManageAuthorPage = React.createClass({
        render: function() {
            return (
                <AuthorForm />
            );
        }
    });

module.exports = ManageAuthorPage;