var React = require('react'),
    CarouselStore = require('../stores/CarouselStore'),
    ItemComponent = require('./ItemComponent.js'),
    DotsComponent = require('./DotsComponent.js'),
    ArrowComponent = require('./ArrowComponent.js');


// Method to retrieve state from Stores
function getCarouselState() {
    return {
        slideData: CarouselStore.getSlides(),
        activeIndex : CarouselStore.dotsClicked(),
        width : window.outerWidth,
        direction : 'left'
    };
}
var CarouselComponent = React.createClass({
    getInitialState: function(){
        return getCarouselState();
    },
    componentDidMount :function(){
        CarouselStore.addChangeListener(this._onChange);
        this.setState({
            width : this.refs.carouselComponent.getDOMNode().offsetWidth
        });
    },
    // Remove change listers from stores
    componentWillUnmount: function() {
        CarouselStore.removeChangeListener(this._onChange);
    },
    render: function() {
        var children = this.state.slideData,
            width = this.state.width,
            trackWidth = width * children.length,
            trackPositionLeft = -(width * this.state.activeIndex),
            trackPositionRight = trackWidth - (width * (this.state.activeIndex + 1)),
            styleObj = (this.state.direction === 'left') ? { width: trackWidth, marginLeft: trackPositionLeft} : { width: trackWidth,  right: trackPositionRight, 'flexDirection' :'row-reverse'},
            arrowPropsObject = {
                activeIndex : this.state.activeIndex,
                length : children.length
            };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-header">React Carousel</h1>
                        <div ref="carouselComponent" className="carousel carousel-component">
                            <div className="carousel-wrapper">
                                <ItemComponent slides={children} styleObj={styleObj}/>
                            </div>
                            <ArrowComponent arrowType="left"  arrowPropsObject={arrowPropsObject}/>
                            <ArrowComponent arrowType="right" arrowPropsObject={arrowPropsObject}/>
                        </div>
                        <DotsComponent items = {children} activeIndex = {this.state.activeIndex} />
                    </div>
                </div>
            </div>
        )
    }
    ,
    // Method to setState based upon Store changes
    _onChange : function(){
        this.setState(getCarouselState());
    }

});

module.exports = CarouselComponent;