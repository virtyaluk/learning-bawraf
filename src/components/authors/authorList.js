'use strict';

var React = require('react'),
    Link = require('react-router').Link,
    AuthorList = React.createClass({
        propTypes: {
            authors: React.PropTypes.array.isRequired
        },

        createAuthorRow: function(author) {
            return (
                <tr key={author.id}>
                    <td><Link to="manageAuthor" params={{ id: author.id }}>{author.id}</Link></td>
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