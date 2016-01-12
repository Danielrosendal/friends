var dispatcher = require('./../dispatcher.js');

module.exports = {
    add:function(item) {
        dispatcher.dispatch({
            payload:item,
            type:"friend:add"
        })
    },
    delete:function(item) {
        dispatcher.dispatch({
            payload:item,
            type:"friend:delete"
        })
    },
    update:function(oldItem, newItem) {
        dispatcher.dispatch({
            oldItem: oldItem,
            newItem: newItem,
            type:"friend:update"
        })
    },
    updateClientOnly:function(oldItem, newItem) {
        dispatcher.dispatch({
            oldItem: oldItem,
            newItem: newItem,
            type:"friend:updateClientOnly"
        })
    },
    buy:function(item) {
        dispatcher.dispatch({
            payload:item,
            type:"friend:buy"
        })
    },
    unbuy:function(item) {
        dispatcher.dispatch({
            payload:item,
            type:"friend:unbuy"
        })
    }    ,
    setEdit:function(item) {
        dispatcher.dispatch({
            payload:item,
            type:"friend:setEdit"
        })
    },
    setRead:function(item) {
        dispatcher.dispatch({
            payload:item,
            type:"friend:setRead"
        })
    }
}
