var ufo,ufoImage;
var me,meImage;
var backgroundImage;
var win,winImage;
var bullet,bulletimage;
var bullet2;
var winSound;
var lose,loseImage;
var wall;
var title,titleImage;
var winSound;
var bgSound;


function preload(){

backgroundImage=loadImage("background.png")
ufoImage=loadImage("ufo.png");
meImage=loadImage("rocket.png")
bulletImage=loadImage("bullet.png")
winImage=loadImage("win.png")
loseImage=loadImage("lose.png")
titleImage=loadImage("title.png")
winSound=loadSound("win sound.mp3")
bgSound=loadSound("bg sound.mp3")


}


function setup() {
  createCanvas(900,500);





title=createSprite(100,25,20,20)
title.addImage(titleImage)
title.scale=0.5

wall=createSprite(0,-5,10000,10)

win=createSprite(450,50000,50,20)
win.addImage(winImage)
win.scale=3

lose=createSprite(450,50000,50,20)
lose.addImage(loseImage)
lose.scale=0.7

ufo=createSprite(100,60,20,20);
ufo.addImage(ufoImage)
ufo.scale=0.4
ufo.velocityX=10

bullet=createSprite(150,350,20,20)
bullet.addImage(bulletImage)
bullet.scale=0.1
bullet.velocityX=7

bullet2=createSprite(150,350,20,20)
bullet2.addImage(bulletImage)
bullet2.scale=0.1
bullet2.velocityX=7

me=createSprite(150,400,20,20)
me.addImage(meImage)
me.scale=0.2
me.velocityX=7


}


function draw() {
  background(backgroundImage);  

  textSize(20)
  fill("white")
  text("To shoot the UFO press SPACE for a first chance and ENTER for a second chance",10,490)
    


if(ufo.x > 800){
ufo.velocityX=0
}

if(ufo.x > 800){

 ufo.x=100

}

if(ufo.x == 100){

  ufo.velocityX=10
}


if(me.x > 800){
  me.velocityX=0
  }


  if(me.x > 800){
    me.x=100
   }
   
   if(me.x == 100){
    me.velocityX=7
  }
  
  if(bullet.x > 800){
    bullet.x=100
   }
  
   
  if(bullet2.x > 800){
    bullet2.x=100
   }
   

  if(keyDown("space")) {
   bullet.velocityX=0
   bullet.velocityY= -15

  }

   
  if(keyDown("enter")) {
    bullet2.velocityX=0
    bullet2.velocityY= -15
 
   }

  if(bullet.isTouching(ufo)){
   
    win.y=200
    me.x=1000
    me.y=2000
  bullet.velocityX=0
  bullet2.velocityX=0
  bullet2.y=5500
  ufo.velocityX=0
  me.velocityX=0

  ufo.y=1000

}

if(bullet2.isTouching(ufo)){
   
  win.y=200
  me.x=1000
  me.y=2000
bullet.velocityX=0
ufo.velocityX=0
me.velocityX=0
bullet2.velocityX=0
bullet2.y=1000
ufo.y=1000


}



if(bullet2.isTouching(wall) ){
lose.y=200
me.x=1000
me.y=2000
ufo.x=1000
ufo.y=1000
bullet.x=1000
bullet.y=5000

}


  

  drawSprites();

}

