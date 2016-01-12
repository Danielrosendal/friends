var mongoose = require('mongoose');
var Friend = require('./models/Friend.js');

mongoose.connect('mongodb://localhost/friends',function() {
    console.log("connected.");
    
    mongoose.connection.db.dropDatabase();
    
    var items = [{
        name:"Emil",
        lastMeeting:new Date(),
        description:"nice",
        portrait: "/images.jpeg"
    },{
        name:"Kalle",
        lastMeeting :new Date(),
        description:"nice2",
        portrait: "/images.jpeg"
    },{
        name:"olle",
        lastMeeting:new Date(),
        description:"nice3",
        portrait: "/download.jpeg"
    },{
        name:"Pelle",
        lastMeeting:new Date(),
        description:"nice4",
        portrait: "/download.jpeg"
    },{
        name:"Jansson",
        lastMeeting:new Date(),
        description:"nice4",
        portrait: "/download.jpeg"
    },{
        name:"Martin",
        lastMeeting:new Date(),
        description:"nice4",
        portrait: "/download.jpeg"
    }];
    
    items.forEach(function(item){
        new Friend(item).save();
    })
})
