var ground, player1, bob, npc1, npc2, npc3, truck;
var gameState = 0;

function setup() {
  createCanvas(1200,600);
  

  ground = createSprite(600, 600, 1200, 400);
  ground.shapeColor = "green";
  player1 = createSprite(50, 360, 75, 75);
  player1.shapeColor = "yellow";
  bob = createSprite(160, 360, 75, 75);
  bob.shapeColor = "yellow";
  npc1 = createSprite(1300, 360, 75, 75);
  npc1.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
  
  if(gameState === 0){
    text("Let's get ice-cream", 50, 320);
  
    if(keyDown("space")){
      text("Yes", 180, 300);
      gameState = 1;
    }
  }

  if(gameState === 1){
    player1.velocityX = 4;
    bob.velocityX = 4;

    npc1.velocityX = -4;

    if(player1.x >= 650){
      player1.velocityX = 0;
    }
    if(bob.isTouching(npc1)){
      bob.velocityX = -4;
      npc1.velocityX = 4;
    }
     
    
  }
  
  drawSprites();
}