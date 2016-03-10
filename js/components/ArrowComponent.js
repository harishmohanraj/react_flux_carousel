var React = require('react');

var Arrow = React.createClass({
    returnButton : function(){
        var returnButtonItem,
            direction = this.props.arrowType,
            notFirstElement = !!this.props.arrowPropsObject.activeIndex,
            notLastElement = this.props.arrowPropsObject.activeIndex !== this.props.arrowPropsObject.length -1,
            infiniteScroll = this.props.arrowPropsObject.infiniteScroll;
            
        if(this.props.arrowPropsObject.showArrows){
            if(direction==='left'){
                if(infiniteScroll || notFirstElement){
                    returnButtonItem =  (
                        <a className="prev" onClick={this.props.slidePrev}><i className="material-icons md-icon dp48">keyboard_arrow_left</i></a>
                    )
                }

            }else{
                if(infiniteScroll || notLastElement){
                    returnButtonItem = (
                        <a className="next" onClick={this.props.slideNext}><i className="material-icons md-icon dp48">keyboard_arrow_right</i></a>
                    )
                }
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