
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
   createCanvas (600,470)
  
   ground = createSprite (400,350,1300,10)
   ground.velocityX = -4;
   ground.x = ground.width/2
  
  
   monkey = createSprite(80,315,30,30)
   monkey.addAnimation ("moving",monkey_running);
   monkey.scale = 0.1
  
   FoodGroup = createGroup();
   obstacleGroup = createGroup();
}


function draw() {
  background ("white");
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
 
  
  if(keyDown("space")&& monkey.y >= 310) {
        monkey.velocityY = -20;
       
    }
    
    //add gravity
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  stroke ("black")  
  textSize (20);
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,400,50)
  
  Banana();
  
  Obstacles();
  
  drawSprites();
}

function Banana(){
 if(frameCount%60===0) {
  banana = createSprite (590,Math.round(random(120,200),20,20))
  banana.addImage(bananaImage); 
  banana.scale = 0.1
  banana.velocityX = -4
  banana.lifetime = 145;
   
  FoodGroup.add(banana) 
 }  
}

function Obstacles(){
if(frameCount%300===0) { 
 obstacle = createSprite(600,320,20,20) 
 obstacle.addImage(obstaceImage); 
 obstacle.scale = 0.2 
 obstacle.velocityX = -4
 obstacle.lifetime = 150;
 obstacleGroup.add(obstacle) 
}
}

