var React = require('react/addons');
var action = require('./../actions/FriendActionCreator.jsx')

module.exports = React.createClass({
    togglePurchased:function(e) {
        e.preventDefault();
        
        if (this.props.item.purchased) {
            action.unbuy(this.props.item);
        } else {
            action.buy(this.props.item);
        }
    },
    delete: function (e) {
        e.preventDefault();
        action.delete(this.props.item);
    },
    render:function() {
        return (
            <div className="plauqeContainer">
                <h4 className="plauqeTitle">
                    {this.props.item.name}
                </h4>
                <img src={this.props.item.portrait} alt="Portrait" />
                <p className="plauqeTitle">
                    {this.props.item.description}
                </p>
                <form onSubmit={this.togglePurchased} >
                    <button className={this.props.item.purchased ? "doneButton" : "editButton"}>
                        {this.props.item.purchased ? "done" : "edit"}
                    </button>
                </form>
                
                <form onSubmit={this.delete} >
                    <button className="deleteButton">&times;</button>
                </form>
            </div>
        )
    }
})
