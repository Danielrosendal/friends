var React = require('react/addons');
var Friend = require('./Friend.jsx');
var FriendEdit = require('./FriendEdit.jsx');
var action = require('./../actions/FriendActionCreator.jsx')

module.exports = React.createClass({
//	getInitialState: function () {
//		return {
//			inEditMode: false
//		}
//	},
	toggleEditMode:function(number) {
//        var payloadItem = {};
//        for (var key in this.props.item) {
//            payloadItem[key] = this.props.item[key];
//        }
        if(this.props.item.editMode)
        {
//            payloadItem["editMode"] = false;
            action.setRead(this.props.item);
        }
        else
        {
            action.setEdit(this.props.item);
        }
//        action.update(this.props.item, payloadItem);
    },
    handleFieldChange:function(childState) {
//        this.setState({editProps: childState})
    },
	render:function() {
		var self = this;
		var item = this.props.item;
		var index = this.props.index;
		var content;
		if(this.props.item.editMode) {
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
