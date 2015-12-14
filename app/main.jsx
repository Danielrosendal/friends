
var React = require('react/addons');

console.log("Hello from JSX!");

var FriendList = require('./components/FriendList.jsx');

var friendStore = require('./stores/FriendStore.jsx');
var initial = friendStore.getItems();
function render(){
    React.render(<FriendList items={initial}/>,app)
}
                 
friendStore.onChange(function(items) {
    initial = items;
    render();
})

render();