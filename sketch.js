
var canvas;

var player

var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5
var playerImage

function preload(){
  playerImage = loadImage("Player_Character_Level_1-removebg-preview.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  var player = createSprite(200,200,40,40);
  player.addImage("playerImage", playerImage)
  player.scale = 0.5
}

function draw(){

  var obstacle1 = createSprite(100,40,50,20)

 if (keyDown(DOWN_ARROW)){
  player.velocity.x = 3
  player.velocity.y = -3
 }

  drawSprites();
  
}
