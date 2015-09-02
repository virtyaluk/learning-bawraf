'use strict';

var Dispatcher = require('../dispatcher/appDispatcher'),
    actionTypes = require('../constants/actionTypes'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    CHANGE_EVENT = 'change',
    _ = require('lodash'),
    _authors = [],
    AuthorStore = assign({}, EventEmitter.prototype, {
        addChangeListener: function(cb) {
            this.on(CHANGE_EVENT, cb);
        },

        removeChangeListener: function(cb) {
            this.removeListener(CHANGE_EVENT, cb);
        },

        emitChange: function() {
            this.emit(CHANGE_EVENT);
        },

        getAllAuthors: function() {
            return _authors;
        },

        getAuthorById: function(id) {
            return _.find(_authors, { id: id });
        }
    });

Dispatcher.register(function(action) {
    switch(action.actionType) {
        case actionTypes.INITIALIZE: 
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;
            
        case actionTypes.CREATE_AUTHOR:
            _authors.push(action.author);
            AuthorStore.emitChange();
        break;

        case actionTypes.UPDATE_AUTHOR:
            var existingAuthor = _.find(_authors, { id: action.author.id }),
                exAuthInd = _.indexOf(_authors, existingAuthor);

            _authors.splice(exAuthInd, 1, action.author);
            AuthorStore.emitChange();
        break;
    }
});

module.exports = AuthorStore;