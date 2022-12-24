// console.log("Hello from %cahdi","color:red; font-size:25px ; margin-left:25px");//massege to console (to check how ur code will run and to find some errors)
// console.error("NullPointer");//make an error
// window.alert("Hello dear");//show massege for the user
// //window.close(); // for closeing the web page!
// console.table(["Nidal","Talina","Fares","Yousef","Amer"]); // array of string
// console.log("Group1");
// console.group();
// console.log("Massege");
// console.log("Massege");
// console.log("Child group");
// console.group();
// console.log("Massege");
// console.log("Massege");
// console.log("Grand child group");
// console.group();
// console.log("Massege");
// console.log("Massege");                            //ITS LIKE NESTED CONSOLE GROUP!
// console.groupEnd();
// console.groupEnd();
// console.groupEnd();
// console.log("Group2");
// console.group();
// console.log("Massege");
// console.log("Massege");
// console.groupEnd();

// age = 13;
// var name = "Ahmad"
// var nes = ["hello","Name"]
// console.log(age);

// canvas = document.getElementById("canvas");
// ctx = canvas.getContext("2d");
// ctx.fillStyle="Green";
// x=50;
// y=50;

// y+=50*3;
// x=43+7;

// console.log(x,y);
// ctx.fillRect(10,10,x,y); // for make width and hight for rectangle the width and haight can not define a square here!

// btn = document.querySelector("button");
// txt = document.querySelector("p");
// btn.addEventListener("click", update);
// function update() {
//     if(btn.textContent === "Start mashine") {
//         btn.textContent = "Stop mashine";
//         txt.textContent = "the mashine is working";
        
//     }
//     else {
//         btn.textContent="Start mashine";
//         txt.textContent="The mashine is stoped";
//     }
// }

 // const nam= prompt("Enter your name") ;
    // text.textContent = `Player 1: ${nam}`;
    // text.textContent = `${nam}`



    // var count = 0;
    // var btn = document.getElementById("btn");
    // var disp = document.getElementById("display");

    // btn.onclick = function () {
    //     count++;
    //     disp.innerHTML = count;
    // }
    
    // var count = 0;
    // var a = document.getElementById("btn")
    // var b = document.getElementById("display")

    // a.onclick = function() {
    //     count++;
    //     a.innerHTML = count;
    // }




    
   
   

//     const btn = document.querySelector('button');

// function random(number) {
//   return Math.floor(Math.random() * (number+1));
// }

// btn.addEventListener('click', () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });
// var c1= 0;
// var c2= 0;

// const a= document.getElementById("btn");
// const b= document.getElementById("fp");
// const c= document.getElementById("sp");
// const d= document.getElementById("fps");
// const e= document.getElementById("sps");



// a.onclick = function () {
//     const ran = Math.floor( Math.random() * 7);
//     const run = Math.floor( Math.random() * 7);
//     b.innerHTML = ran;
//     c.innerHTML = run; 

//     if(ran>run) {
//         c1++;
//         d.innerHTML = c1;
//     }
//     else {
//         c2++;
//         e.innerHTML = c2;
//     }
// }
// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, stroke) {
//   if(stroke==1)
//   return names[stroke-1];

//   else if (stroke==2) 
//   return names[stroke-1]

//   else if (stroke==3) 
//   return names[stroke-1]

//   else if (stroke==4) 
//   return names[stroke-1]

//   else if (stroke==5) 
//   return names[stroke-1]

//   else if (stroke==6) 
//   return names[stroke-1]
//   else if (stoke==5 && par==5)
//   return names[par-1]

//   else  
//   return names[6]

//   // Only change code above this line
// }

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