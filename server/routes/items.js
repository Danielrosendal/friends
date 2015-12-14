module.exports = function (app){

    var Friend = require('./../models/Friend.js');
    
    app.route('/api/items')
    .get(function(req,res){
        Friend.find(function(error,doc){
            res.send(doc);
        })
        
    })
    .post(function(req,res){
        var item = req.body;
        console.log("Adding item...",item);
        var friend = new Friend(item);
        friend.save(function(err,data) {
            res.status(300).send();
        })
    });
    
    app.route('/api/items/:id')
    .delete(function(req,res){
        console.log("removing...",req.params.id);
        Friend.findOne({
            _id:req.params.id
        }).remove(function(x){
            console.log("removed.",x);
        });
    })
    .patch(function(req,res){
        Friend.findOne({
            _id:req.body._id
        },function(error,doc){
            console.log(error);
            for (var key in req.body){
                doc[key] = req.body[key];
            }
            doc.save();
            res.status(200).send();
        })
    })
    
}