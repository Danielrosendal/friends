var dispatcher = require('./../dispatcher.js');

module.exports = {
    add:function(item){
        dispatcher.dispatch({
            payload:item,
            type:"friend:add"
        })
    },
    delete:function(item){
        dispatcher.dispatch({
            payload:item,
            type:"friend:delete"
        })
    },
    buy:function(item){
        dispatcher.dispatch({
            payload:item,
            type:"friend:buy"
        })
    },
    unbuy:function(item){
        dispatcher.dispatch({
            payload:item,
            type:"friend:unbuy"
        })
    }
}