img="";

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
}