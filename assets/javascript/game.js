$(document).ready(function() {

var yourNum = 0

var randomNum = randomGenerated();

var wins = 0
var loss = 0
var crystals = crystalNum();

function crystalNum (){
return{
    red:{
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "/Users/PenelopeArnold/Desktop/bootcamp/homework/unit-4-game/assets/images/red.png"

    },
    yellow:{
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "/Users/PenelopeArnold/Desktop/bootcamp/homework/unit-4-game/assets/images/yellow.png"
    },
    blue:{
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "/Users/PenelopeArnold/Desktop/bootcamp/homework/unit-4-game/assets/images/blue.png"
    },
    green:{
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "/Users/PenelopeArnold/Desktop/bootcamp/homework/unit-4-game/assets/images/green.png"
    }
}
}


function randomGenerated (){
    return Math.floor(Math.random()*102)+19
}

function set(){
    yourNum = 0
    crystals = crystalNum();
    randomNum = randomGenerated();
    $("#random").text(randomNum);
}
// set();

function page (userWins){
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
    var lSpan = $("<span>").text(loss)



    var pWins = $("<p>").text("Wins: ")
    var pLosses= $("<p>").text("Losses: ")

    pWins.append(wSpan);
    pLosses.append(lSpan);


    $("#win-loss").append(pWins)
    $("#win-loss").append(pLosses)
}
//page();

function renderCrystals(){
    for (var key in crystals){
        var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
        var crystalImage = $("<img alt=`crystal` class=`crystal-image`>").attr("src", crystals[key].imageUrl);
        crystalDiv.append(crystalImage);
        $("#crystal-div").append(crystalDiv);
    }
}

function match(crystals){
    yourNum +=  crystals[crystals.attr('data-name')].points;
}


function renderMatch(){
    var score = $("<div id=`points`>").text(yourNum);
    $("#score").html();
    $("#score").html(score)
}
//renderMatch();

set();
page();
renderCrystals();
renderMatch();

$('.crystals-button').on("click", function(event){
    console.log("click")
    match($(this));
    renderMatch();


    if (yourNum === randomNum){
        wins++;
        set();
        page(true);
    } 
    
    else if (yourNum > randomNum ){
        loss++;
        set();
        page(false);
    }
})

})