var React = require('react/addons');
var action = require('./../actions/FriendActionCreator.jsx')
var DropZone = require('./DropZone.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {
                name: this.props.item.name,
                description: this.props.item.description,
                portrait: this.props.item.portrait
               };
    },
    handlePropertyChange:function(propName, e) {
        var jsonProp = {};
        jsonProp[propName] = e.target.value
        this.setState(jsonProp, function() {
                        this.props.onChangez(this.state);
                     });
    },
    onAddFile: function(res) {
//        id:uuid(),
        var newFile = {
          id:10,
          name:res.file.name,
          size: res.file.size,
          altText:'',
          caption: '',
          file:res.file,
          url:res.imageUrl
        };
        var url= newFile.url;
        this.setState({portrait: url}, function() {
                        this.props.onChangez(this.state);
                     });
//        this.executeAction(newImageAction, newFile);
    },
    render:function() {
        var name = this.state.name;
        var description = this.state.description;
        var portrait = this.state.portrait;
		return (
            <div className="plauqeContainer">
                Edit friend
                <form>
                    <input type="text" 
                            onChange={this.handlePropertyChange.bind(this, 'name')}
                            value={name} />
                    
                    <input type="text" 
                            onChange={this.handlePropertyChange.bind(this, 'description')}
                            value={description} />
                    
                     <img ref="img" src={portrait} width="120" height="120"/>
                     <DropZone onDrop={this.onAddFile}>
                        <p>Drag &amp; drop files here or click here to browse for files.</p>
                     </DropZone>
                </form>
            </div>
		)
	}
    
    //                    <img src={this.props.item.portrait} alt="Portrait" />
//                    <input type="file"
//                           onChange={this.handlePropertyChange.bind(this, 'portrait')}/>
    
    //                <form onSubmit={this.togglePurchased} >
    //                    <button className={this.props.item.purchased ? "doneButton" : "editButton"}>
    //                        {this.props.item.purchased ? "done" : "edit"}
    //                    </button>
    //                </form>
    //                
    //                <form onSubmit={this.delete} >
    //                    <button className="deleteButton">&times;</button>
    //                </form>
    //                <input type="text" defaultValue={this.props.item.name} />
})