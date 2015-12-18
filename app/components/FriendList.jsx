var React = require('react/addons');
var FriendPlaque = require('./FriendPlaque.jsx');
var FriendListAddFriend = require('./FriendListAddFriend.jsx');

module.exports = React.createClass({
    toggleEditMode:function(item) {
        this.setState({gray: 10}); 
        alert("FriendList!!");
    },
    render:function() {
        return (
            <div>
                <h1>Friends </h1>
                <div className="friendContainer">
                    {this.props.items.map(function(item, index){
                        return (
                            <div>
                                {<FriendPlaque item={item} index={index} key={"item"+index}/>}
                            </div>
                        );
                        }, this)
                    }
                </div>
                <FriendListAddFriend />
            </div>
        )
    }
})