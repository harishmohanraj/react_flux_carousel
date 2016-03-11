var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CarouselConstants = require('../constants/CarouselConstants');
var _ = require('underscore');

// Carousle Data
var _slides = null,
    _activeIndex = 0;

function loadSlideData(data){
    _slides = data;
}
function dotsClicked(index){
    _activeIndex = index;
}
function nextClicked(activeIndex, length){
    _activeIndex = (activeIndex + 1 ) % length;
}
function prevClicked(activeIndex, length){
    _activeIndex = ((activeIndex + length) -1 ) % length;
}
// Extend Store with EventEmitter to add eventing capabilities
var CarouselStore = _.extend({},EventEmitter.prototype, {
   // return slides
    getSlides : function () {
        return _slides;
    },
    dotsClicked : function(){
        return _activeIndex;
    },
    // Emit Change event
    emitChange: function() {
        this.emit('change');
    },
    // Add change listener
    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    // Remove change listener
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});
// Register callback with AppDispatcher
AppDispatcher.register(function(payload){
    var action = payload.action;

    switch(action.actionType){
        // Respond to LOAD_DATA action
            case CarouselConstants.LOAD_DATA :
                loadSlideData(action.data);
                break;
            case CarouselConstants.DOTS_CLICKED :
                dotsClicked(action.index);
                break;
            case CarouselConstants.NEXT_CLICKED :
                nextClicked(action.activeIndex,action.length);
                break;
            case CarouselConstants.PREV_CLICKED :
                prevClicked(action.activeIndex,action.length);
                break;
            default:
                return true;
    }

    // If action was responded to, emit change event
    CarouselStore.emitChange();

    return true;

});

module.exports = CarouselStore;