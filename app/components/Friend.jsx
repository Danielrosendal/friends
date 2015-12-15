var React = require('react/addons');
var action = require('./../actions/FriendActionCreator.jsx')

module.exports = React.createClass({
    togglePurchased:function(e){
        e.preventDefault();
        
        if (this.props.item.purchased){
            action.unbuy(this.props.item);
        } else {
            action.buy(this.props.item);
        }
    },
    delete:function(e){
        e.preventDefault();
        action.delete(this.props.item);
        
    },
    render:function(){
        return (
           <div className="friend row">
				<div className="two columns">
					<h4 className={this.props.item.purchased ? "strikethrough" : "" }>
						{this.props.item.name}
					</h4>
                    <p>
                     {this.props.item.description}
                    </p>
				</div>
                
				<form onSubmit={this.togglePurchased} className="one columns">
					<button className={this.props.item.purchased ? "" : "button-primary"}>{this.props.item.purchased ? "unbuy" : "buy"}</button>
				</form>
				<form className="one columns" onSubmit={this.delete}>
					<button>&times;</button>
				</form>
			</div>
        )
    }
})