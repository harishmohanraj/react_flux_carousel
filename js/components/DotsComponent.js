var React = require('react');
var CarouselActions = require('../actions/CarouselActions');
var Dots = React.createClass({

    dotsClicked : function(index){
        CarouselActions.dotsClicked(index);
    },

    render : function(){
        return (
            <ul className="indicators">
                {this.props.items.map(function(items, index){
                    return(
                        <li key = {index} onClick={this.dotsClicked.bind(this,index)} className={(index === this.props.activeIndex) ? "indicator-item active": "indicator-item" } />
                    );  
                }.bind(this))}
            </ul>
        )
    }
});

module.exports = Dots;