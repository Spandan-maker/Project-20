var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  
  thickness = random(22, 83);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = ("white");

  bullet = createSprite(-500, 200, 45, 5);
  bullet.shapeColor = "white"
  bullet.velocityX = speed;
}

function draw() {
  background("black");  
  
  if(collision(bullet, wall)){
    
    bullet.velocityX = 0;
    
    var damage = 0.5 * speed * weight * speed/ (thickness * thickness * thickness);
    
    if (damage > 10){
      wall.shapeColor = "red";
    }

    if (damage < 10){
      wall.shapeColor = "green";
    }

  }

  drawSprites();
}