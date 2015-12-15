var mongoose = require('mongoose');
var Friend = require('./models/Friend.js');

mongoose.connect('mongodb://localhost/friends',function() {
    console.log("connected.");
    
    mongoose.connection.db.dropDatabase();
    
    var items = [{
        name:"Emil",
        lastMeeting:new Date(),
        description:"nice"
    },{
        name:"Kalle",
        lastMeeting:new Date(),
        description:"nice2"
    },{
        name:"olle",
        lastMeeting:new Date(),
        description:"nice3"
    },{
        name:"Pelle",
        lastMeeting:new Date(),
        description:"nice4"
    }];
    
    items.forEach(function(item){
        new Friend(item).save();
    })
})