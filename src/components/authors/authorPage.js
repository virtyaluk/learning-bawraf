'use strict';

var React = require('react'),
    Link = require('react-router').Link,
    authorActions = require('../../actions/authorActions'),
    authorStore = require('../../stores/authorStore'),
    AuthorList = require('./authorList'),
    Authors = React.createClass({
        getInitialState() {
            return {
                authors: authorStore.getAllAuthors()
            };
        },

        render: function() {
            return (
                <div>
                    <h1>Authors</h1>
                    <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                    <AuthorList authors={this.state.authors} />
                </div>
            );
        }
    });

module.exports = Authors;