var arthur,arthurImage,pete,peteImage,terrorBird,terrorBirdImage;
var wolf,wolfImage,grownUpPete,grownUpPeteImage,knightArthur,knightArthurImage;
var GKArthur,GKArthurImage,dragon,dragonImage,firstLevelBackgrond,firstLevelBackgrondImage;
var score=0
var gameState="play"

function preload(){
arthurImage=loadImage("arthur.png");
peteImage=loadImage("pete.png");
grownUpPeteImage=loadImage("grown up pete.png");
knightArthurImage=loadImage("knight arthur.png")
GKArthurImage=loadImage("GK arthur.png")
wolfImage=loadImage("wolf.png")
terrorBirdImage=loadImage("terror bird.png")
dragonImage=loadImage("dragon.png")
firstLevelBackgrondImage=loadImage("first level background.png")
}
function setup() {

  createCanvas(600,300);
  firstLevelBackground=createSprite(800, 290, 50, 50);
  firstLevelBackground.addImage(firstLevelBackgrondImage)
  firstLevelBackground.velocityX=-2
  firstLevelBackground.scale=1.8

  player1 = createSprite(100,240);
  player1.addImage(peteImage);
  player1.scale= 0.2;
  NPC1 = createSprite(60,240);
  NPC1.addImage(arthurImage);
  NPC1.scale= 0.3;
  wolfGroup=new Group ()
}

function draw() {
  background("blue");
  
  if(gameState==="play"){
  if(firstLevelBackground.x<0){
    firstLevelBackground.x= 500
  }
 
  if(keyDown("space")){
    player1.velocityY=-3
  }
  player1.velocityY=player1.velocityY+0.5
  edges=createEdgeSprites()
  player1.collide(edges)
  wolfs()


  if(wolfGroup.isTouching(player1)){
    score=score+1
    wolfGroup.destroyEach()
   
  }
  
  drawSprites();
}
  if(gameState==="end"){
    if(score===5){
      textSize(30)
      fill ("red")
      text("GAME OVER",200,200)
    }
score.visible=false
  score=0
  }
  textSize(30)
  fill ("red")
text("SCORE : "+score,430,50)
}
function wolfs() {
  if(frameCount%200===0){
  wolf = createSprite(600,240);
  wolf.addImage(wolfImage);
  wolf.y=Math.round(random(200,300))
  wolf.scale= 0.3;
  wolf.velocityX=-3;
  wolfGroup.add(wolf)
}
}
