'use strict';

var Dispatcher = require('../dispatcher/appDispatcher'),
    authorApi = require('../api/authorApi'),
    actionTypes = require('../constants/actionTypes'),
    authorActions = {
        createAuthor: function(author) {
            var newAuthor = authorApi.saveAuthor(author);

            Dispatcher.dispatch({
                actionType: actionTypes.CREATE_AUTHOR,
                author: newAuthor 
            })
        },
        updateAuthor: function(author) {
            var updatedAuthor = authorApi.saveAuthor(author);

            Dispatcher.dispatch({
                actionType: actionTypes.UPDATE_AUTHOR,
                author: updatedAuthor
            })
        }
    };

module.exports = authorActions;