# JavaScript
Js project

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>
        body{
    background-image: radial-gradient( circle 1437px at -2% 103.3%,  rgb(180, 51, 178) 0%, rgba(162,39,182,1) 10.5%, rgb(104, 55, 160) 47%, rgb(123, 91, 196) 57.1%, rgb(90, 101, 187) 86.1%, rgb(36, 53, 100) 100.2% );
    font-family: 'Poppins', sans-serif;
    text-align: center;
    height: 100vh;
    display: block;
    position: relative;
    overflow: hidden;

}

h3{
    color: #fff;
}
.img11{
    border-radius: 24px;
    box-shadow: 0px 15px 15px 2px #33333359;
}
.dice-title{
    color:#fff;
    font-size: 36px;
    font-weight: 700;
    position: absolute;
    right: 720px;
    top: 50px;
}
.fp {
    margin-top: 200px;
    margin-left: 350px;
}


button{
    margin-top: 100px;
    cursor: pointer;
    height: 54px;
    border-radius: 4px;
    font-family: 'Poppins';
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px 20px;
    border: 0; 
    font-size: 22px;

}
button:hover{
    color: #5C42AD;
}


    </style>
 <div class="all" style="display: flex; text-align: center; position: relative;" >
    <h2 class="dice-title" >Dice Game </h2>

<div class="fp"  >
    <h3 style="display: inline-block;">First Player</h3>
<figure >
    <img class="img11" src="dice-png-1.png" width="200px" height="200px">
    <figcaption><p class="score1">The Score</p></figcaption>
 </figure>
</div>



 <div class="fp" >
    <h3>Second Player</h3>
 <figure >
        <img class="img11" src="dice-png-1.png" width="200px" height="200px">
        <figcaption><p class="score1">The Score</p></figcaption>
 </figure>
</div>
 
 </div>   
 <div class="center" style="margin-top: 80px;"><h3 id="cent">The winner is</h3></div>
 <button id="btn" style="width: 150px; height: 50px;">Play</button> 
    <script type="text/javascript" src="first.js">  
      var btnn = document.getElementById("btn");
var pn = document.querySelectorAll("p")[0];
var vn = document.querySelectorAll("p")[1];
let fp =0;
let sp =0;

btnn.onclick = function() {

var random1 = Math.floor((Math.random()*6)+1);
var diceLocation = "dice-"+"png-"+ random1 +".png";
var img1 =document.querySelectorAll("img")[0];
img1.setAttribute("src", diceLocation);
var rand = Math.floor((Math.random()*6)+1);
var diceLocation2 = "dice-"+"png-"+ rand +".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",diceLocation2);


if(random1>rand) {
    fp+=1;
    if(sp!=0) { 
        sp-=1;}

    var center = document.getElementById("cent");
    center.innerHTML = "The First player won!"
}

else if(random1<rand) {
    sp = sp+1;
    
    if(fp!=0){
    fp-=1;
    }

    var center = document.getElementById("cent");
    center.innerHTML = "The Second player won!"
    
}

else if(rand===random1) {
    var center = document.getElementById("cent");
    center.innerHTML = "Match Down"
}

else {
    center.innerHTML = "Somthing wrong"
}
pn.innerHTML = "The Score= " + fp;
vn.innerHTML = "The Score= " + sp;
}
    </script>
</body>
</html>
