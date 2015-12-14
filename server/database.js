var mongoose = require('mongoose');
var Friend = require('./models/Friend.js');

mongoose.connect('mongodb://localhost/friends',function() {
    console.log("connected.");
    
    mongoose.connection.db.dropDatabase();
    
    var items = [{
        name:"Ice Cream"
    },{
        name:"Waffles"
    },{
        name:"Candy",
        purchased:true
    },{
        name:"Snarks"
    }];
    
    items.forEach(function(item){
        new Friend(item).save();
    })
})