var app = require("express")();

//#################### ROUTING #################################

app.get("/", function(req, res){
    res.send("Hei, velkommen til mitt eksempel");
});

app.get("/speak/:dyr", function(req, res){
    var animal = req.params.dyr;
    var sound;
    switch (animal) {
        case 'pig':
            sound = "Oink!";
            break;
        case 'dog':
            sound = "Woof!";
            break;
        case 'cow':
            sound = "Moo!";
            break;
        case 'cat':
            sound = "Miao!";
            break;
        case 'ghost':
            sound = "Boo!";
            break;
        default:
            sound = "hello";
            break;
    }
    res.send("The "+animal+" says '"+sound+"'");
});

app.get("/repeat/:word/:num", function(req, res){
    var word = req.params.word;
    var num = Number(req.params.num);
    var response = "";
    for (var i =0; i<num; i++){
        response += word+" ";
    }
    res.send(response);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found.");
});

//#################### START SERVER ############################
// starte server (designet for cloud9)
//TODO forandre til lokal port osv. hvis lokal. 

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started! (ctrl-c for å avslutte)");
});