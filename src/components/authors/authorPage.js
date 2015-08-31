'use strict';

var React = require('react'),
    authorApi = require('../../api/authorAPi'),
    AuthorList = require('./authorList'),
    Authors = React.createClass({
        getInitialState() {
            return {
                authors: []
            };
        },

        componentDidMount: function() {
            if (this.isMounted()) {
                this.setState({ authors: authorApi.getAllAuthors() })
            }
        },

        render: function() {
            return (
                <div>
                    <h1>Authors</h1>
                    <AuthorList authors={this.state.authors} />
                </div>
            );
        }
    });

module.exports = Authors;