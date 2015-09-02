'use strict';

var Dispatcher = require('../dispatcher/appDispatcher'),
    actionTypes = require('../constants/actionTypes'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    CHANGE_EVENT = 'change',
    AuthorStore = assign({}, EventEmitter.prototype, {
        addChangeListener: function(cb) {
            this.on(CHANGE_EVENT, cb);
        },

        removeChangeListener: function(cb) {
            this.removeListener(CHANGE_EVENT, cb);
        },

        emitChange: function() {
            this.emit(CHANGE_EVENT);
        }
    });