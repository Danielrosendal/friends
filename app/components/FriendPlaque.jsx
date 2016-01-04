var React = require('react/addons');
var Friend = require('./Friend.jsx');
var FriendEdit = require('./FriendEdit.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			inEditMode: false,
            item: this.props.item
		}
	},
	toggleEditMode:function(number) {
        var newState = {};
        if(this.state.inEditMode)
        {
            newState = {
                         inEditMode: false,
                         item: this.state.editProps
                       };
            this.setState(newState, function() {
                var v = this.state;
            });
        }
        else
        {
            this.setState({ inEditMode: true});
        }
        
    },
    handleFieldChange:function(childState) {
        this.setState({editProps: childState})
    },
	render:function() {
		var self = this;
		var item = this.state.item;
		var index = this.props.index;
		var content;
		if(this.state.inEditMode)
        {
            content = ( <FriendEdit onChangez={this.handleFieldChange} item={item} key={"item"+index}/> );
        }
        else
        {
            content = ( <Friend onChangez={this.handleFieldChange} item={item} key={"item"+index}/> );
        }
		return (
			<div>
				<p>FriendPlaque</p>
				<button type="button" onClick={this.toggleEditMode.bind(this, item)} value="x" ></button>
			{content}
			</div>
		)
	}
})