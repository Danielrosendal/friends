var React = require('react/addons');
var Friend = require('./Friend.jsx');
var FriendListAddFriend = require('./FriendListAddFriend.jsx');

module.exports = React.createClass({
    render:function(){
        return (
            <div>
                <h1>Friend </h1>
                <div>
                    {this.props.items.map(function(item,index){
                        return (
                            <Friend item={item} key={"item"+index}/>
                        )
                    })                       
                    }
                </div>
                <FriendListAddFriend />
            </div>
        )
    }
})