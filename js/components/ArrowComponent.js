var React = require('react');
var CarouselActions = require('../actions/CarouselActions');

var Arrow = React.createClass({
    slideNext : function(activeIndex,length){
        CarouselActions.nextClicked(activeIndex,length);
    },
    slidePrev : function(activeIndex,length){
        CarouselActions.prevClicked(activeIndex,length);
    },
    returnButton : function(){
        var returnButtonItem,
            direction = this.props.arrowType,
            notFirstElement = !!this.props.arrowPropsObject.activeIndex,
            notLastElement = this.props.arrowPropsObject.activeIndex !== this.props.arrowPropsObject.length -1;

            if(direction==='left'){
                if(notFirstElement){
                    returnButtonItem =  (
                        <a className="prev" onClick={this.slidePrev.bind(this,this.props.arrowPropsObject.activeIndex,this.props.arrowPropsObject.length)}><i className="material-icons md-icon dp48">keyboard_arrow_left</i></a>
                    )
                }

            }else{
                if(notLastElement){
                    returnButtonItem = (
                        <a className="next" onClick={this.slideNext.bind(this,this.props.arrowPropsObject.activeIndex,this.props.arrowPropsObject.length)}><i className="material-icons md-icon dp48">keyboard_arrow_right</i></a>
                    )
                }
            }

        return returnButtonItem;
    },
    render : function(){
        return <div>
                {this.returnButton()}
            </div>
    }
});

module.exports = Arrow;