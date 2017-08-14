var express = require("express");
var app = express();

//#################### ROUTING #############################

// "/" => "Heisann!"
app.get("/", function(request, response){
    response.send("Heisann!");
});

// "/bye" => "Adjø!"
app.get("/bye", function(request, response){
    response.send("Adjø!");
});

// "/h/:" => "Mjau"
app.get("/h/:websidenavn", function(request, response){
    var sidenavn = request.params.websidenavn;
    response.send("Mjau! Du har kommet til " + sidenavn);
});

// "*"
app.get("*", function (request, response) {
    response.send("Du er en stjerne! (siden finnes ikke)");
});

//#################### START SERVER ############################
// starte server (designet for cloud9)
//TODO forandre til lokal port osv. hvis lokal. 

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started! (ctrl-c for å avslutte)");
});
