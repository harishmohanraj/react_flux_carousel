var React = require('react'),
    CarouselStore = require('../stores/CarouselStore'),
    ItemComponent = require('./ItemComponent.js'),
    DotsComponent = require('./DotsComponent.js'),
    ArrowComponent = require('./ArrowComponent.js');


// Method to retrieve state from Stores
function getCarouselState() {
    var carouselData = CarouselStore.getSlides();
    console.log(carouselData);
    return {
        slideData: carouselData._slides,
        activeIndex : carouselData._activeIndex,
        width : carouselData._width,
        direction : carouselData._direction
    };
}
var CarouselComponent = React.createClass({
    getInitialState: function(){
        return getCarouselState();
    },
    componentDidMount :function(){
        CarouselStore.addChangeListener(this._onChange);
        CarouselStore.setWidth(this.refs.carouselComponent.getDOMNode().offsetWidth)
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
                        <h1 className="page-header">React Flux Carousel</h1>
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
                <div className="row">
                    <div className="well col-md-12">
                        <h2>Settings</h2>
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped">
                                <colgroup>
                                    <col className="col-xs-1" />
                                    <col className="col-xs-7" />
                                </colgroup>
                                <thead>
                                <tr>
                                    <th>Settings</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row"> <code>data<sup>*</sup></code> </th>
                                    <td><p>
                                        Type : Object <br />
                                        Required or Optional : Required <br />
                                        Description : Data for the Carousel
                                    </p></td>
                                </tr>
                                <tr>
                                    <th scope="row"> <code>direction</code> </th>
                                    <td>
                                        <p>
                                            Options : "left || right" <br />
                                            Type : string <br />
                                            Default : left <br />
                                            Description : Carousel direction.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row"> <code>autoPlay</code> </th>
                                    <td><p>
                                        Type : boolean <br />
                                        Default : true <br />
                                        Description : Enables Autoplay
                                    </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row"> <code>autoPlayInterval</code> </th>
                                    <td>
                                        <p>
                                            Type : number <br />
                                            Default : 3000ms <br />
                                            Description : Autoplay Interval Time in milisecond
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row"> <code>infiniteScroll</code> </th>
                                    <td>
                                        <p>
                                            Type : boolean <br />
                                            Default : true <br />
                                            Description : Enables infinite scroll.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row"> <code>showArrows</code> </th>
                                    <td>
                                        <p>
                                            Type : boolean <br />
                                            Default : true <br />
                                            Description : Show/Hide arrows.
                                        </p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
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