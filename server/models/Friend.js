var mongoose = require('mongoose');

var FriendSchema = {
    name:String,
    purchased:Boolean,
    description:String,
    lastMeeting:Date,
    id:String
};

var Friend = mongoose.model('Friend' ,FriendSchema ,"Friends");

module.exports = Friend;