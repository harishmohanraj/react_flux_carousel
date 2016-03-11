var AppDispatcher = require('../dispatcher/AppDispatcher');
var CarouselConstants = require('../constants/CarouselConstants');

//Define Actions Object
var CarouselActions ={
    receiveSlideData : function(data){
        AppDispatcher.handleAction({
            actionType : CarouselConstants.LOAD_DATA,
            data : data
        })
    },
    dotsClicked : function(index){
        AppDispatcher.handleAction({
            actionType : CarouselConstants.DOTS_CLICKED,
            index : index
        })
    },
    nextClicked : function(activeIndex,length){
        AppDispatcher.handleAction({
            actionType : CarouselConstants.NEXT_CLICKED,
            activeIndex : activeIndex,
            length : length
        })
    },
    prevClicked : function(activeIndex,length){
        AppDispatcher.handleAction({
            actionType : CarouselConstants.PREV_CLICKED,
            activeIndex : activeIndex,
            length : length
        })
    }
};

module.exports = CarouselActions;