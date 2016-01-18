var React = require('react/addons');
var Friend = require('./Friend.jsx');
var FriendEdit = require('./FriendEdit.jsx');
var action = require('./../actions/FriendActionCreator.jsx')

module.exports = React.createClass({
	toggleEditMode:function(number) {
        if(this.props.item.editMode)
        {
            action.setRead(this.props.item);
        }
        else
        {
            action.setEdit(this.props.item);
        }
    },
    handleFieldChange:function(childState) {

    },
    delete: function (e) {
        e.preventDefault();
        action.delete(this.props.item);
    },
	render:function() {
		var self = this;
		var item = this.props.item;
		var index = this.props.index;
		var content;
        var deletebutton;
		if(this.props.item.editMode) {
            content = ( <FriendEdit onChangez={this.handleFieldChange} item={item} key={"item"+index}/> );
            deletebutton = <button className="deleteButton" onClick={this.delete}>X</button>;
        }
        else
        {
            content = ( <Friend onChangez={this.handleFieldChange} item={item} key={"item"+index}/> );
        }
		return (
			<div className="plauqeContainer">
                <button className={this.props.item.editMode ? "doneButton" : "editButton"}
                        onClick={this.toggleEditMode.bind(this, item)}>
                    {this.props.item.editMode ? "done" : "edit"}
                </button>
                {deletebutton}
                {content}
			</div>
		)
	}
})
