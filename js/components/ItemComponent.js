var
    React = require('react');


var ItemFragment = React.createClass({
    render : function(){
        return (
            <div key = {this.props.slideIndex} className="item">
                <img src={this.props.slideItem.img} alt={this.props.slideItem.caption} />
                <p className="slider-caption">{this.props.slideItem.caption}</p>
                <div className="slider-caption-wrapper"></div>
            </div>
        )
    }
});

var Item = React.createClass({

    render : function(){

        return(<div className="carousel-item-container" style={this.props.styleObj}>
            {this.props.slides.map(function(slide,index){
                    return <ItemFragment slideItem = {slide} slideIndex = {index}/>
            })}
        </div>)
    }
});

module.exports = Item;