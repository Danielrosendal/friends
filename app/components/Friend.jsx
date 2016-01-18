var React = require('react/addons');
var action = require('./../actions/FriendActionCreator.jsx')

module.exports = React.createClass({
//    togglePurchased:function(e) {
//        e.preventDefault();
//
//        if (this.props.item.purchased) {
//            action.unbuy(this.props.item);
//        } else {
//            action.buy(this.props.item);
//        }
//    },
    delete: function (e) {
        e.preventDefault();
        action.delete(this.props.item);
    },
    connected: function (propName, e) {
        e.preventDefault();
        var v = propName;
    },
    render:function() {
        return (
            <div >
                <h4 className="plauqeTitle">
                    {this.props.item.name}
                </h4>
                <img src={this.props.item.portrait} alt="Portrait" className="portraitImage"/>
                <p className="plaqueDescription">
                    {this.props.item.description}
                </p>
                <div className="connectButtonsContainer">
                    <div className="met">
                        <form onSubmit={this.connected.bind(this, 'met')} >
                            <button className="contactButton">
                                <p>Met</p>
                                <img className="contactImage" src="./delivery35.png" />
                            </button>
                        </form>
                    </div>
                    <div className="called">
                        <form onSubmit={this.connected.bind(this, 'called')} >
                            <button className="contactButton">
                                <p>Called</p>
                                <img className="contactImage" src="./call37.png" />
                            </button>
                        </form>
                    </div>
                    <div className="texted">
                        <form onSubmit={this.connected.bind(this, 'texted')} >
                            <button className="contactButton">
                                <p>Texted</p>
                                <img className="contactImage" src="./talking2.png" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
})

//<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a>             is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a></div>



//                <form onSubmit={this.togglePurchased} >
//                    <button className={this.props.item.purchased ? "doneButton" : "editButton"}>
//                        {this.props.item.purchased ? "done" : "edit"}
//                    </button>
//                </form>
