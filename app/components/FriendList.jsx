var React = require('react/addons');
var FriendPlaque = require('./FriendPlaque.jsx');
var FriendListAddFriend = require('./FriendListAddFriend.jsx');

module.exports = React.createClass({
    render:function () {
        return (
            <div>
                <h1>Friends is best</h1>
                <div className="friendListContainer">
                    {this.props.items.map(function(item, index) {
                        return <FriendPlaque key={item+index} item={item} index={index} />;
                    }, this)}
                </div>
                <FriendListAddFriend />
            </div>
        )
    }
})
