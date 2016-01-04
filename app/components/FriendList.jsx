var React = require('react/addons');
var FriendPlaque = require('./FriendPlaque.jsx');
var FriendListAddFriend = require('./FriendListAddFriend.jsx');

module.exports = React.createClass({
    render:function() {
        return (
            <div>
                <h1>Friends is best</h1>
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