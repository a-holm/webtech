var express = require("express");
var faker = require('faker');
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

//#################### START SERVER ############################
// starte server (designet for cloud9)
//TODO forandre til lokal port osv. hvis lokal. 

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening.");
});

//#################### ROUTE ###################################

app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:kitten", function(req, res){
    var kitten = req.params.kitten;
    res.render("love",{thingVar: kitten});
});

app.get("/posts", function(req, res){
    var posts = [];
    for (var i=10; i>0 ; i--) {
        var title = faker.company.catchPhrase();
        var author = faker.name.findName();
        posts.push({title: title, author: author});
    }
    res.render("posts", {posts: posts});

});