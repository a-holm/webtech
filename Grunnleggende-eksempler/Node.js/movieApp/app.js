var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

//#################### START SERVER ############################
// starte server (designet for cloud9)
//TODO forandre til lokal port osv. hvis lokal. 

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server for movie app has started... \n(ctrl-c to stop)");
});

//#################### ROUTE ###################################

app.get("/", function(req, res) {
    res.render("search");
});

app.get("/results", function(req, res){
    var url = "http://www.omdbapi.com/?s=" + req.query.search + "&apikey=thewdb"
    request(url, function (error, response, body) {
        if(!error && response.statusCode === 200) {
            var data = JSON.parse(body);
            res.render("results", {data: data});
        } else {
            console.log(error);
        }
    });
});