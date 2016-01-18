var React = require('react/addons');
var action = require('./../actions/FriendActionCreator.jsx')
var DropZone = require('./DropZone.jsx');
var action = require('./../actions/FriendActionCreator.jsx')
var uuid = require('uuid');

module.exports = React.createClass({
    handlePropertyChange:function(propName, e) {
        var jsonProp = {};
        jsonProp[propName] = e.target.value;

        action.updateClientOnly(this.props.item, jsonProp);
    },
    onAddFile: function(res) {
        var newFile = {
          id:uuid.v1(),
          name:res.file.name,
          size: res.file.size,
          altText:'',
          caption: '',
          file:res.file,
          url:res.imageUrl
        };
        var url= newFile.url;

        var jsonProp = {}
        jsonProp['editPortrait'] = url;

        action.updateClientOnly(this.props.item, jsonProp);
    },
    render:function() {
        var name = this.props.item.name;
        var description = this.props.item.description;
        var portrait = this.props.item.editPortrait || this.props.item.portrait;

        return (
            <div className="friendContainer">
                <input className="inputField" type="text"
                       onChange={this.handlePropertyChange.bind(this, 'editName')}
                       defaultValue={name} />

                 <img className="portraitImage" ref="img" src={portrait} />
                 <DropZone onDrop={this.onAddFile}>
                    <p>Drag &amp; drop files here or click here to browse for files.</p>
                 </DropZone>

               <textarea rows="4" className="inputField" onChange={this.handlePropertyChange.bind(this, 'editDescription')} defaultValue={description} ></textarea>
            </div>
		)
	}
})
