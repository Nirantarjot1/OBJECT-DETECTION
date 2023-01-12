img="";
stats="";

function setup(){
    canvas=createCanvas(640 , 420);
    canvas.center();
}

function preload(){
    img=loadImage("dog_cat.jpg")
}

function draw(){
    image(img , 0 , 0 , 640 , 420);
    fill("#fc4235");
    text("Dog" , 45 , 75);
    noFill();
    stroke("#fc4235");
    rect(30 , 60 , 450 , 350); 

    fill("#3a4abd");
    text("Cat" , 320 , 120);
    noFill();
    stroke("#3a4abd");
    rect(300 , 90 , 270 , 320);
}

objectDetector=ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("stats").innerHTML="Status  : Detecting Objects ";


function modelLoaded(){
    console.log("Model is Loaded");
    stats=true;
    objectDetector.detect(img , gotResult);
}

function gotResult(error ,  results){
    if(error){
        console.log(error);
    }
console.log(results);
}