'use strict';

var React = require('react'),
    AuthorList = React.createClass({
        propTypes: {
            authors: React.PropTypes.array.isRequired
        },

        createAuthorRow: function(author) {
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName + " " + author.lastName}</td>
                </tr>
            );
        },

        render: function() {
            return (
                <div>
                    <table className="table">
                        <thead>
                            <td>ID</td>
                            <td>Name</td>
                        </thead>
                        <tbody>
                            {this.props.authors.map(this.createAuthorRow, this)}
                        </tbody>
                    </table>
                </div>
            );
        }
    });

module.exports = AuthorList;