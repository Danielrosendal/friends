var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/RestHelper.js');

function FriendStore() {
    var items = [];
    
    helper.get("api/items")
        .then(function (data) {
            items = data;
            triggerListeners();
        });
    
    var listeners = [];
    
    function getItems() {
        return items;
    }
    
    function addFriend(item) {
        items.push(item);
        triggerListeners();
        
        helper.post("api/items", item);
    }
    
    function deleteFriend(item) {
        var index;
        items.filter(function (_item, _index) {
            if (_item.name == item.name) {
                index = _index;
            }
        });
        
        items.splice(index, 1);
        triggerListeners();
        
        helper.del('api/items/' + item._id);
    }
    
    function updateFriend(oldItem, newItem, updateServer) {
        var index;
        items.filter(function (_item, _index) {
            if (_item.name == oldItem.name) {
                index = _index;
            }
        });

        for (var key in newItem) {
            items[index][key] = newItem[key];
        }
        triggerListeners();

        if(updateServer)
        {
            helper.put('api/items/' + newItem._id, newItem)
        }
    }
    
    function setFriendBought(item, isBought) {
        var _item = items.filter(function (a) { return a.name == item.name})[0];
        item.purchased = isBought || false;
        triggerListeners();
        
        helper.patch('api/items/'+item._id,item);
    }
    
    function setEditMode(item, isEditMode) {
        var _item = items.filter(function (a) { return a.name == item.name})[0];
        item.editMode = isEditMode;
        if(!isEditMode)
        {
            if(item.editName)
            {
                item.name = item.editName;
                delete item.editName;
            }
            if(item.editDescription)
            {
                item.description = item.editDescription;
                delete item.editDescription;
            }
            if(item.editPortrait)
            {
                item.portrait = item.editPortrait;
                delete item.editPortrait;
            }
            helper.put('api/items/' + item._id, item);
        }
        triggerListeners();
    }

    function onChange(listener) {
        listeners.push(listener);
    }
    
    function triggerListeners() {
		listeners.forEach(function(listener) {
			listener(items);
		})
	}
    
    dispatcher.register(function (event) {
        var split = event.type.split(':');
        if (split[0]==='friend') {
            switch(split[1]) {
                case "add":
                    addFriend(event.payload);
                    break;
                case "delete":
                    deleteFriend(event.payload);
                    break;
                case "update":
                    updateFriend(event.oldItem, event.newItem, true);
                    break;
                case "updateClientOnly":
                    updateFriend(event.oldItem, event.newItem, false);
                    break;
                case "setEdit":
                    setEditMode(event.payload,true);
                    break;
                case "setRead":
                    setEditMode(event.payload,false);
                    break;
                case "buy":
                    setFriendBought(event.payload,true);
                    break;
                case "unbuy":
                    setFriendBought(event.payload,false);
                    break;
            }
        }
    });
    
    return {
        getItems: getItems,
        onChange: onChange
    }
}

module.exports = new FriendStore();
