'use strict';

var React = require('react'),
    AuthorForm = React.createClass({
        render: function() {
            return (
                <form>
                    <h1>Manage Author</h1>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" placeholder="First Name" ref="firstName"
                        value={this.props.author.firstName} onChange={this.props.onChange} />
                    <br/>

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name" ref="lastName"
                        value={this.props.author.lastName} onChange={this.props.onChange} />
                    <br/>

                    <input type="submit" value="Save" className="btn btn-default" />
                </form>
            );
        }
    });

module.exports = AuthorForm;