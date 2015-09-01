'use strict';

var React = require('react'),
    Router = require('react-router'),
    AuthorForm = require('./authorForm'),
    authorApi = require('../../api/authorApi'),
    toastr = require('toastr'),
    ManageAuthorPage = React.createClass({
        mixins: [
            Router.Navigation
        ],

        statics: {
            willTransitionFrom: function(transition, component) {
                if (component.state.dirty && !confirm('Leave without saving?')) {
                    transition.abort();
                }
            }
        },

        getInitialState: function() {
            return {
                author: {
                    id: '',
                    firstName: '',
                    lastName: ''
                },
                errors: {},
                dirty: false
            };
        },

        setAuthorState: function(ev) {
            this.setState({ dirty: true });

            var field = ev.target.name,
                val = ev.target.value;

            this.state.author[field] = val;

            return this.setState({ author: this.state.author });
        },

        authorFormIsValid: function() {
            var formIsValid = true;
            this.state.errors = {};

            if (this.state.author.firstName.length < 3) {
                this.state.errors.firstName = 'First name must be at least 3 characters.';
                formIsValid = false;
            }

            if (this.state.author.lastName.length < 3) {
                this.state.errors.lastName = 'Last name must be at least 3 characters.'
                formIsValid = false;
            }

            this.setState({ errors: this.state.errors });
            
            return formIsValid; 
        },

        saveAuthor: function(ev) {
            ev.preventDefault();

            if (!this.authorFormIsValid()) {
                return;
            }

            authorApi.saveAuthor(this.state.author);
            this.setState({ dirty: false });
            toastr.success('Author saved.');
            this.transitionTo('authors');
        },

        render: function() {
            return (
                <AuthorForm
                    author={this.state.author}
                    onChange={this.setAuthorState}
                    onSave={this.saveAuthor}
                    errors={this.state.errors} />
            );
        }
    });

module.exports = ManageAuthorPage;