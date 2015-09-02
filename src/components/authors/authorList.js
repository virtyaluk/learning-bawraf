'use strict';

var React = require('react'),
    Link = require('react-router').Link,
    authorActions = require('../../actions/authorActions'),
    toasts = require('toastr'),
    AuthorList = React.createClass({
        propTypes: {
            authors: React.PropTypes.array.isRequired
        },

        deleteAuthor: function(id, ev) {
            ev.preventDefault();
            authorActions.deleteAuthor(id);
            toasts.success('Author Deleted');
        },

        createAuthorRow: function(author) {
            return (
                <tr key={author.id}>
                    <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
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
                            <td></td>
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