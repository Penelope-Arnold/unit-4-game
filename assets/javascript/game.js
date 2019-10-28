$(document).ready(function() {


var yourNum = 0

var randomNum = randomGenerated();

var wins = 0
var loss = 0
var crystals;

function crystalNum (){
return{
    red:{
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/red.png"

    },
    yellow:{
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/yellow.png"
    },
    blue:{
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/blue.png"
    },
    green:{
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/green.png"
    }
}
}

function randomNum (){
    return Math.floor(Math.random()*102)+19
}

function set(){
    yourNum = 0
    crystals = crystalNum();
    randomNum = randomGenerated();
    $("#random").text(randomNum);
}
set();

function page (){
    $("#win-loss").empty();
    if (userWins === true){
        $("#win-loss").append($("<p>").text("Winner!"))
        set();
    } else if (userWins === false){
        $("#win-loss").append($("<p>").text("Loser!"))
        set();
        renderMatch();
    }

    var wSpan = $("<span>").text(wins)
    var lSpan = $("<span>").text(losses)

    pWins.append(wSpan);
    pLosses.append(lSpan);

    var pWins = $("<p>").text("Wins: ")
    var pLosses= $("<p>").text("Losses: ")

    $("#win-loss").append(pWins)
    $("#win-loss").append(pLosses)
}
page();

function renderCrystals(){
    for (var key in crystals){
        var crystalDiv = $("<div class=`crystal-button` data-name='" + key + "'>");
        var crystalImage = $("<img alt=`crystal` class=`crystal-image`>").attr(src, crystals[key].imageUrl);
        crystalDiv.append(crystalImage);
        $("#crystal-div").append(crystalDiv);
    }
}renderCrystals();

function match(){
    yourNum += crystals[crystals.attr("data-name")].points;
}
match();

function renderMatch(){
    var scoreNum = $("<div id=`points`>").text(yourNum);
    $("#score").html();
    $("#score").html(scoreNum)
}
renderMatch();





































})