var express = require("express");
var app = express();
var faker = require('faker');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


//#################### START SERVER ############################
// starte server (designet for cloud9)
//TODO forandre til lokal port osv. hvis lokal. 

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started... (ctrl-c to stop)");
});

//#################### ROUTE ###################################

//just because I do this without a database
var friends = []
for (var i = 5; i--; ) {
        friends.push(faker.name.findName());
    }

app.post("/addfriend", function(req, res){
    var newFriend = req.body.name;
    friends.push(newFriend);
    res.redirect("/friends")
});

app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req, res){
    
    res.render("friends", {friends: friends});
});

