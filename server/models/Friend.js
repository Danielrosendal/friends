var mongoose = require('mongoose');

var FriendSchema = {
    name:String,
    purchased:Boolean,
    id:String
};

var Friend = mongoose.model('Friend' ,FriendSchema ,"Friends");

module.exports = Friend;