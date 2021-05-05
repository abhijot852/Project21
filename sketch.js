var bullet, wall;
var speed, weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
 bullet = createSprite(50, 100, 40, 20);
 bullet.shapeColor = "white";
 thickness = random(22,83);
  wall= createSprite(1200,100,thickness,200);
wall.shapeColor = color(80,80,80);
  
  bullet.velocityX = speed;
}

function draw() {
  background(0); 
 if(hasCollided(bullet,wall)){
 bullet.velocityX = 0;
 var damage=0.5 * weight * speed * speed/(thickness * thickness *thickness);
 
if(damage>10){
wall.shapeColor = color(255,0,0);

}
if(damage<10){
wall.shapeColor = color(0,255,0);
}
 }




  


  drawSprites();
}
function hasCollided(lbullet, lwall){
bulletRightEdge = lbullet.x +lbullet.width;
walleftEdge = lwall.x;
if(bulletRightEdge>=walleftEdge){

  return  true
}
return false;





}