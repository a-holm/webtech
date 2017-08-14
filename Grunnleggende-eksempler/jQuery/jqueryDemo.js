// selects all divs and give a purple background
$("div").css("background", "purple");
// selects the divs with class "highlight" and makes them 200px wide
$("div.highlight").css("width", "200px");
// selects the div with id "third" and gives it a orange border
$("#third").css("border", "3px solid orange");
// selects the first div and change it's font color to pink
// $("div").first().css("color", "pink");
$("div:first-of-type").css("color", "pink");