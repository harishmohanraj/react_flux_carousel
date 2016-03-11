var React = require('react');
var CarouselData = require('./carouselData');
var CarouselAPI = require('./utils/CarouselAPI');
var CarouselComponent = require('./components/CarouselComponent');

// Set LocalStorage
CarouselData.init();

//Load slides data
CarouselAPI.getCarouselSlides();

//Render component
React.render(
    <CarouselComponent />,
    document.getElementById('react-flux-carousel')
);
