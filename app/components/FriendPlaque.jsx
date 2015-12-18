var React = require('react/addons');
var Friend = require('./Friend.jsx');
var FriendEdit = require('./FriendEdit.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			inEditMode: false
		}
	},
	toggleEditMode:function() {
        this.setState({ inEditMode: this.state.inEditMode ? false : true});
		// this.setState({ inEditMode: true}); 
        // alert("FriendList!!");
    },
	render:function() {
		var self = this;
		var item = this.props.item;
		var index = this.props.index;
		var content;
		if(this.state.inEditMode)
        {
            content = ( <FriendEdit item={item} key={"item"+index}/> );
        }
        else
        {
            content = ( <Friend item={item} key={"item"+index}/> );
        }
		return (
			<div>
				<p>FriendPlaque</p>
				<button type="button" onClick={this.toggleEditMode} value="x" ></button>
			{content}		
			</div>
		)
	}
})