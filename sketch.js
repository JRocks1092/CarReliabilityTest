var speed, weight;
var wall, car;

function setup() {

  createCanvas(1600, 400);

  speed = random(55, 90);
  weight = random(400, 1500);

  wall = createSprite(1500, 200, 60, height/2);
  car = createSprite(25, 200, 50, 50);

  car.velocityX = speed;

}

function draw() {

  background(255, 255, 255);

  calcDeform();

  drawSprites();

}

function calcDeform() {

  var deformation = 0.5 * speed * speed * weight / 22500;

  if (wall.x - car.x < (car.width + wall.width) / 2) {
    
    car.velocityX = 0;
    
    if (deformation < 100) {

      car.shapeColor = rgb(0, 255, 0);

    }

    if (deformation > 100 && deformation < 180) {

      car.shapeColor = rgb(230, 230, 0);

    }

    if (deformation > 180) {

      car.shapeColor = rgb(255, 0, 0);

    }

  }

  console.log(deformation);

}
