'use strict';

var React = require('react'),
    AuthorForm = require('./authorForm'),
    authorApi = require('../../api/authorApi'),
    ManageAuthorPage = React.createClass({
        getInitialState: function() {
            return {
                author: {
                    id: '',
                    firstName: '',
                    lastName: ''
                }
            };
        },

        setAuthorState: function(ev) {
            var field = ev.target.name,
                val = ev.target.value;

            this.state.author[field] = val;

            return this.setState({ author: this.state.author });
        },

        saveAuthor: function(ev) {
            ev.preventDefault();
            authorApi.saveAuthor(this.state.author);
        },

        render: function() {
            return (
                <AuthorForm author={this.state.author} onChange={this.setAuthorState} onSave={this.saveAuthor} />
            );
        }
    });

module.exports = ManageAuthorPage;