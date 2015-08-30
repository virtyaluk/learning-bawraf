'use strict';

var React = require('react'),
    authorApi = require('../../api/authorAPi'),
    Authors = React.createClass({
        getInitialState() {
            return {
                authors: []
            };
        },

        createAuthorRow: function(author) {
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName + " " + author.lastName}</td>
                </tr>
            );
        },

        componentWillMount: function() {
            this.setState({ authors: authorApi.getAllAuthors() })
        },

        render: function() {
            return (
                <div>
                    <h1>Authors</h1>

                    <table className="table">
                        <thead>
                            <td>ID</td>
                            <td>Name</td>
                        </thead>
                        <tbody>
                            {this.state.authors.map(this.createAuthorRow, this)}
                        </tbody>
                    </table>
                </div>
            );
        }
    });

module.exports = Authors;