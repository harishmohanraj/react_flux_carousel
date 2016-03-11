var CarouselActions = require('../actions/CarouselActions');

module.exports = {
  // Loading the carousel slide items
    getCarouselSlides : function(){
        var data = JSON.parse(localStorage.getItem('slidesData'));
        CarouselActions.receiveSlideData(data);
    }
};
