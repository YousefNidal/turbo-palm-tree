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
