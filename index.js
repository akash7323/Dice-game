var randomNum1 = Math.floor(Math.random()*6)+1;
var diceImage = "dice"+randomNum1+".png";
var imageSource = "images/"+diceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource);

var randomNum2 = Math.floor(Math.random()*6)+1;
var diceImage2 = "dice"+randomNum2+".png";
var imageSource2 = "images/"+diceImage2;
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", imageSource2);

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="Player1 Wins"
}else if(randomNum2>randomNum1){
    document.querySelector("h1").innerHTML="Player2 Wins"
}else{
    document.querySelector("h1").innerHTML="DRAW"
}