var express = require('express');

var app = new express();

var parser = require('body-parser');

var React = require('react/addons');

var Friend = require('./models/Friend.js');

require('babel/register');
require('./database.js');
debugger;
app.get('/',function(req,res){
    //res.render('./../app/index.ejs',{});
    var application = React.createFactory(require('./../app/components/FriendList.jsx'));
    
    Friend.find(function(error,doc){
        var generated = React.renderToString(application({
            items:doc
        }));
        console.log(generated);
        debugger;
        res.render('./../app/index.ejs',{reactOutput:generated});
    })
})
.use(express.static(__dirname + '/../.tmp'))
.use(express.static(__dirname + '/../app/public/images'))
.listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

require('./routes/items.js')(app);
