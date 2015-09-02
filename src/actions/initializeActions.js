'use strict';

var Dispatcher = require('../dispatcher/appDispatcher'),
    actionTypes = require('../constants/actionTypes'),
    authorApi = require('../api/authorApi'),
    initializeActions = {
        initApp: function() {
            Dispatcher.dispatch({
                actionType: actionTypes.INITIALIZE,
                initialData: {
                    authors: authorApi.getAllAuthors()
                }
            })
        }
    };

module.exports = initializeActions;